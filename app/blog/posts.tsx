import { createClient } from '@/utils/supabase/server'
import Post from './post'
import { PostType } from '@/types'

export default async function Posts() {
  const supabase = createClient()

  const { data } = await supabase
    .from('posts')
    .select('*, profiles ( * )')
    .order('created_at', { ascending: false })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {data?.map((el: PostType) => (
        <Post post={el} key={el.id} />
      ))}
    </div>
  )
}
