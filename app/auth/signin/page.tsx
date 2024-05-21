import React from 'react'
import { signin } from './actions'

import Link from 'next/link'
import GoogleSignIn from '@/components/GoogleSignIn'

export default function SignIn() {
  return (
    <section className="flex justify-center items-center p-5 min-h-screen flex-col">
      <form>
        <input
          id="email"
          placeholder="email"
          name="email"
          type="email"
          required
          className="input input-bordered w-full mb-5"
        />
        <input
          id="password"
          placeholder="password"
          name="password"
          type="password"
          required
          className="input input-bordered w-full mb-5"
        />
        <button formAction={signin} className="btn mb-5 w-full">
          Sign in
        </button>

        <Link
          href="/auth/signup"
          className="btn btn-ghost w-full mb-10 text-center"
        >
          Sign up
        </Link>

        <GoogleSignIn />
      </form>
    </section>
  )
}
