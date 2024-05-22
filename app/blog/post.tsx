import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Post({
  post,
}: {
  post: {
    title: string
    content: string
    poster_url: string | null
    created_at: Date
  }
}) {
  const supabase = createClient()
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    // avatarts, posts
    async function downloadImage(path: string) {
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
        console.log('Error downloading image: ', error)
      }
    }

    if (post.poster_url) {
      downloadImage(post.poster_url)
    }
  }, [post.poster_url, supabase])

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image
          src={imageUrl || '/post.jpg'}
          alt="Shoes"
          width={300}
          height={300}
          className="rounded-xl h-60 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.content}</p>
        <span>{String(new Date(post.created_at).toLocaleDateString())}</span>
      </div>
    </div>
  )
}
