import { createClient } from '@/utils/supabase/server'
import Post from './post'

export default async function Posts() {
  const supabase = createClient()

  const { data } = await supabase
    .from('posts')
    .select(
      `id, title, content, poster_url, author_id, created_at, profiles ( id, full_name, avatar_url )`
    )
    .order('created_at', { ascending: false })

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-40">
      {data?.map((el) => <Post post={el} key={el.id} />)}
    </div>
  )
}
