'use client'

import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Loading from '@/components/Loading'

export default function UploadImage({
  uid,
  url,
  size,
  onUpload,
  storage,
}: {
  uid: string | null
  url: string | null
  size: number
  // eslint-disable-next-line no-unused-vars
  onUpload: (url: string) => void
  storage: 'avatars' | 'posters'
}) {
  const supabase = createClient()
  const [imageUrl, setImageUrl] = useState<string | null>(url)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    // avatarts, posts
    async function downloadImage(path: string) {
      try {
        const { data, error } = await supabase.storage
          .from(storage)
          .download(path)
        if (error) {
          throw error
        }

        const url = URL.createObjectURL(data)
        setImageUrl(url)
      } catch (error) {
        console.log('Error downloading image: ', error)
      }
    }

    if (url) {
      downloadImage(url)
    } else setImageUrl(null)
  }, [url, supabase])

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${storage}-${uid}-${Math.random()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from(storage)
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert('Error uploading image!')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <div className="flex justify-center mb-5">
        <div className="avatar">
          <div className="rounded">
            {storage === 'avatars' && !imageUrl ? (
              <Loading size={size} />
            ) : (
              <Image
                width={size}
                height={size}
                src={
                  imageUrl ||
                  (storage === 'avatars'
                    ? '/user.png'
                    : '/upload_post_image.png')
                }
                alt="upload-image"
                className="mb-5"
                style={{ height: size, width: size }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="btn btn-primary w-full" htmlFor={storage}>
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id={storage}
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  )
}
