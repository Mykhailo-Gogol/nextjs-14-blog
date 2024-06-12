'use client'

import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Loading from '@/components/Loading'
import { ProfileWithPosts } from '@/types'

export default function ProfileImage({
  profile,
  size,
}: {
  profile: ProfileWithPosts | null
  size: number
}) {
  const supabase = createClient()

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path)
      if (error) {
        throw error
      }

      const url = URL.createObjectURL(data)

      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error)
    }
  }
  useEffect(() => {
    if (profile?.avatar_url) {
      downloadImage(profile?.avatar_url)
    }
  }, [profile?.avatar_url, supabase])

  return (
    <div className="w-full flex flex-col items-center mb-5 pt-5">
      <div className="avatar mb-5">
        <div className="rounded">
          {!avatarUrl ? (
            <Loading size={size} />
          ) : (
            <Image
              width={size}
              height={size}
              src={avatarUrl || '/user_default.png'}
              alt="profile-image"
              className="mb-5"
              style={{ height: size, width: size }}
            />
          )}
        </div>
      </div>

      <div className="mb-5 text-center">
        <h1 className="text-xl">{profile?.full_name}</h1>
        <span className="text-sm">{profile?.username}</span>
      </div>
    </div>
  )
}
