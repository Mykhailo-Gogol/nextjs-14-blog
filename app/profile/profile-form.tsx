'use client'

import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { type User } from '@supabase/supabase-js'
import UploadAvatar from './upload-avatar'

export default function ProfileForm({ user }: { user: User | null }) {
  const supabase = createClient()

  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .maybeSingle()

      if (error && status !== 406) {
        console.error(error, status)
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({
    fullname,
    username,
    avatar_url,
  }: {
    username: string | null
    fullname: string | null
    avatar_url: string | null
  }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        avatar_url,
        updated_at: new Date().toISOString(),
      })

      if (error) throw error
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full flex flex-col p-5">
      <div className="grid gap-5">
        <UploadAvatar
          uid={user?.id ?? null}
          url={avatarUrl}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url)
            updateProfile({ fullname, username, avatar_url: url })
          }}
        />
        <form
          className="grid gap-5"
          onSubmit={(e) => {
            e.preventDefault()
            updateProfile({ fullname, username, avatar_url: avatarUrl })
          }}
        >
          <input
            className="input input-bordered w-full"
            id="email"
            type="text"
            value={user?.email}
            disabled
          />

          <input
            className="input input-bordered w-full"
            id="fullName"
            placeholder="full name"
            type="text"
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <input
            className="input input-bordered w-full"
            id="username"
            placeholder="username"
            type="text"
            required
            prefix="@"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength={3}
          />

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? 'Loading ...' : 'Update profile'}
          </button>
        </form>

        <form action="/auth/signout" method="post">
          <button className="btn btn-error w-full" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </section>
  )
}
