'use client'

import Loading from '@/components/Loading'
import { PostType, ProfileType } from '@/types'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

interface iProps {
  post: (PostType & { profiles?: ProfileType[] }) | null
}

export default function Post({ post }: iProps) {
  const router = useRouter()
  const supabase = createClient()

  const [posterUrl, setPosterUrl] = useState<string | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  async function downloadImage(path: string, source: 'avatars' | 'posters') {
    try {
      const { data, error } = await supabase.storage.from(source).download(path)
      if (error) {
        throw error
      }

      const url = URL.createObjectURL(data)

      switch (source) {
        case 'avatars':
          setAvatarUrl(url)
          break
        case 'posters':
          setPosterUrl(url)
          break
      }
    } catch (error) {
      console.error('Error downloading image: ', error)
    }
  }

  const profile = useMemo(
    () => (Array.isArray(post?.profiles) ? post?.profiles[0] : post?.profiles),
    [post?.id]
  )

  useEffect(() => {
    if (post?.poster_url) {
      downloadImage(post.poster_url, 'posters')
    }

    if (profile?.avatar_url) {
      downloadImage(profile.avatar_url, 'avatars')
    }
  }, [post?.id, supabase])

  return (
    <div className="card hover:scale-105 transition-all">
      <button onClick={() => router.push('/blog/posts/' + post?.id)}>
        <figure className="px-5">
          {posterUrl ? (
            <Image
              src={posterUrl || '/post_default.png'}
              alt={post?.title || 'poster'}
              width={300}
              height={300}
              className={`rounded-xl h-60 object-contain`}
              loading="lazy"
            />
          ) : (
            <Loading size={240} />
          )}
        </figure>
      </button>
      <div className="card-body items-center text-center">
        {profile && (
          <div className="flex items-center mb-5">
            {avatarUrl ? (
              <Image
                src={avatarUrl || '/user_default.png'}
                alt={profile.avatar_url || ''}
                width={40}
                height={40}
                className="rounded-full overflow-hidden w-10 h-10 object-center object-contain"
              />
            ) : (
              <Loading size={40} />
            )}
            <Link
              href={'/blog/profiles/' + profile.id}
              className="px-5 underline hover:text-primary"
            >
              {profile.full_name}
            </Link>
          </div>
        )}

        {post?.created_at ? (
          <span className="text-xs text-gray-500">
            {new Date(post.created_at).toDateString()}
          </span>
        ) : null}

        <h2 className="card-title">{post?.title}</h2>

        <p className={'overflow-ellipsis overflow-hidden line-clamp-2'}>
          {post?.content}
        </p>
      </div>
    </div>
  )
}
