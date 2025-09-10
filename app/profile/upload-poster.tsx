'use client'

import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Loading from '@/components/Loading'

export default function UploadPoster({
  title,
  uid,
  url,
  size,
  onUpload,
}: {
  title: string
  uid: string | null
  url: string | null
  size: number
  // eslint-disable-next-line no-unused-vars
  onUpload: (url: string) => void
}) {
  const supabase = createClient()

  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(url)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    async function downloadImage(path: string) {
      setLoading(true)
      try {
        const { data, error } = await supabase.storage
          .from('posters')
          .download(path)
        if (error) {
          throw error
        }

        const url = URL.createObjectURL(data)
        setImageUrl(url)
      } catch (error) {
        console.error('Error downloading image: ', error)
      } finally {
        setLoading(false)
      }
    }

    if (url) {
      downloadImage(url)
    } else setImageUrl(null)
  }, [url, supabase])

  const uploadPoster: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    setUploading(true)

    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()

      const fileName = title.split(/[^a-zA-Z0-9]+/gi).join('-')

      const filePath = `${uid}/${fileName || 'poster'}-${Date.now()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('posters')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      console.log(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="rounded">
          {loading || uploading ? (
            <Loading size={size} />
          ) : (
            <Image
              width={size}
              height={size}
              className="mb-5"
              src={imageUrl || '/post_default.png'}
              alt="upload-image"
              style={{ height: size, width: size }}
            />
          )}
        </div>
      </div>

      <div>
        <label className="btn btn-primary w-full" htmlFor={'posters'}>
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          className="absolute hidden"
          type="file"
          id={'posters'}
          accept="image/*"
          onChange={uploadPoster}
          disabled={uploading}
        />
      </div>
    </div>
  )
}
