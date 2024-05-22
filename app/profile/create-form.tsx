'use client'

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import UploadImage from './upload-image'

export default function CreateForm({ user }: { user: User | null }) {
  console.log(process.env.NODE_ENV)
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState<string | null>(null)
  const [content, setContent] = useState<string | null>(null)
  const [posterURL, setPosterUrl] = useState<string | null>(null)

  async function createPost({
    title,
    content,
    poster_url,
  }: {
    title: string | null
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
      })

      if (error) throw error

      alert('Succeslfully created!')
      setTitle(null)
      setContent(null)
      setPosterUrl(null)
    } catch (error) {
      alert('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full p-5 min-h-screen flex-col">
      <div>
        <UploadImage
          uid={user?.id ?? null}
          url={posterURL}
          size={150}
          onUpload={(url) => {
            setPosterUrl(url)
          }}
          storage="posters"
        />
        <form
          onSubmit={() => {
            createPost({
              title,
              content,
              poster_url: posterURL,
            })
          }}
        >
          <input
            className="input input-bordered w-full mb-5"
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
            className="textarea textarea-accent w-full h-60"
            placeholder="..."
            value={content || ''}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button className="btn mb-5 w-full" disabled={loading} type="submit">
            {loading ? 'Uploading ...' : 'Post'}
          </button>
        </form>
      </div>
    </section>
  )
}
