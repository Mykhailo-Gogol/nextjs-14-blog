import ProfileForm from './profile-form'
import { createClient } from '@/utils/supabase/server'
import CreateForm from './create-form'

export default async function Profile() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="grid items-start min-h-screen gap-10 my-10 lg:grid-cols-2">
      <CreateForm user={user} />
      <ProfileForm user={user} />
    </div>
  )
}
