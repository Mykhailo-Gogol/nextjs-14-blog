import { createClient } from '@/utils/supabase/client'
import { createClient as createServerClient } from '@/utils/supabase/server'
import Post from '../../post'
import { PostType } from '@/types'
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
    <div>
      <ProfileDetails profile={data} size={250} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-40">
        {data.posts?.map((el: PostType) => <Post post={el} key={el.id} />)}
      </div>
    </div>
  )
}
