import { Suspense } from 'react'
import ProfileForm from './profile-form'
import { createClient } from '@/utils/supabase/server'

export default async function Profile() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <Suspense>
      <ProfileForm user={user} />
    </Suspense>
  )
}
