'use client'

import { createClient } from '@/utils/supabase/client'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function GoogleSignIn() {
  const supabase = createClient()

  const handleGoogleSignIn = async () => {
    const data = await supabase.auth
      .signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo:
            process.env.NODE_ENV === 'production'
              ? 'https://*.vercel.app/auth/callback'
              : 'http://localhost:3000/auth/callback',
        },
      })
      .then()

    console.log(data)
  }
  return (
    <button
      type="button"
      onClick={() => handleGoogleSignIn()}
      className="btn mb-5 w-full"
    >
      <FontAwesomeIcon icon={faGoogle} width={20} height={20} />
      <span className="pl-2">Login with Google</span>
    </button>
  )
}