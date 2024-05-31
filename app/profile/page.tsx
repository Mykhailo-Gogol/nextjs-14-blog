import ProfileForm from './profile-form'
import { createClient } from '@/utils/supabase/server'
import CreateForm from './create-form'

export default async function Profile() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="grid md:grid-cols-2 items-start md:min-h-full pt-20 flex-col-reverse min-h-screen">
      <ProfileForm user={user} />
      <CreateForm user={user} />
    </div>
  )
}
