import { createClient } from '@/utils/supabase/client'
import { createClient as createServerClient } from '@/utils/supabase/server'
import Post from '../../post'
import { PostType, ProfileWithPosts } from '@/types'
import ProfileDetails from './profile-details'

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const supabase = createClient()
  const { data } = await supabase.from('profiles').select('id')

  return (
    data?.map((profile) => ({
      profile: profile.id,
    })) || []
  )
}

export default async function ProfileById({
  params,
}: {
  params: { id: string }
}) {
  const supabase = createServerClient()

  const { data } = await supabase
    .from('profiles')
    .select('*, posts (*)')
    .eq('id', params.id)
    .single()

  return (
    <div className="my-10">
      <ProfileDetails profile={data} size={250} />

      <h1 className="text-center text-2xl my-5">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {(data as ProfileWithPosts).posts?.map((el: PostType) => (
          <Post post={el} key={el.id} />
        ))}
      </div>
    </div>
  )
}
