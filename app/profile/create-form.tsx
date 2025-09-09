'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import UploadPoster from './upload-poster'
import { useRouter } from 'next/navigation'

export default function CreateForm({ user }: { user: User | null }) {
  const router = useRouter()
  const supabase = createClient()

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string | null>('')
  const [posterURL, setPosterUrl] = useState<string | null>(null)

  async function createPost({
    title,
    content,
    poster_url,
  }: {
    title: string
    content: string | null
    poster_url: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('posts').insert({
        title,
        content,
        author_id: user?.id as string,
        poster_url,
        created_at: new Date().toISOString(),
      })

      if (error) throw error

      if (!poster_url) {
        alert('Poster image is required!')
      } else {
        if (!title || !content) {
          alert('All fields are required!')
        } else {
          alert('Succeslfully created!')

          setTitle('')
          setContent('')
          setPosterUrl(null)

          router.push('/blog')
        }
      }
    } catch (error) {
      alert('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full p-5 md:min-h-screen flex-col">
      <div className="grid gap-5">
        <UploadPoster
          title={title}
          uid={user?.id ?? null}
          url={posterURL}
          size={150}
          onUpload={(url) => {
            setPosterUrl(url)
          }}
        />
        <form
          className="grid gap-5"
          onSubmit={(e) => {
            e.preventDefault()

            createPost({
              title,
              content,
              poster_url: posterURL,
            })
          }}
        >
          <input
            className="input input-bordered w-full"
            required
            id="title"
            placeholder="Post Title"
            type="text"
            value={title || ''}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            required
            id="content"
            className="block textarea textarea-primary w-full h-60"
            placeholder="..."
            value={content || ''}
            onChange={(e) => setContent(e.target.value)}
          />

          <button className="btn w-full" disabled={loading} type="submit">
            {loading ? 'Uploading ...' : 'Post'}
          </button>
        </form>
      </div>
    </section>
  )
}
