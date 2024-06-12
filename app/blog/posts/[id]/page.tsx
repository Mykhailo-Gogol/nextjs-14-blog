import { createClient } from '@/utils/supabase/client'
import { createClient as createServerClient } from '@/utils/supabase/server'
import PostDetails from './post-details'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const supabase = createClient()
  const { data } = await supabase.from('posts').select('id')

  return (
    data?.map((post) => ({
      post: post.id,
    })) || []
  )
}

export default async function PostById({ params }: { params: { id: number } }) {
  const supabase = createServerClient()

  const { data } = await supabase
    .from('posts')
    .select('*, profiles ( * )')
    .eq('id', params.id)
    .single()

  return (
    <div className="my-10">
      <PostDetails post={data} page />
    </div>
  )
}
