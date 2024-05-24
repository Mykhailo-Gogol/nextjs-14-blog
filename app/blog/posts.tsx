'use client'

import { createClient } from '@/utils/supabase/client'
import { useCallback, useEffect, useState } from 'react'
import Post from './post'

export default function Posts() {
  const supabase = createClient()

  const [allPosts, setAllPosts] = useState<
    {
      id: number
      title: string
      content: string
      poster_url: string | null
      created_at: Date
    }[]
  >([])

  const getPosts = useCallback(async () => {
    try {
      const { data, error, status } = await supabase
        .from('posts')
        .select(`id, title, content, poster_url, created_at`)
        .order('created_at', { ascending: false })

      if (error && status !== 406) {
        console.log(error)
        throw error
      }

      if (data) {
        setAllPosts(data)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    }
  }, [supabase])

  useEffect(() => {
    getPosts()
  }, [supabase])
  return (
    <div className="grid md:grid-cols-3 gap-5 mb-40">
      {allPosts.map((el) => (
        <Post post={el} key={el.id} />
      ))}
    </div>
  )
}
