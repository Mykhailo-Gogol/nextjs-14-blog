import React from 'react'
import { signin } from './actions'

import Link from 'next/link'
import GoogleSignIn from '@/components/GoogleSignIn'

export default function SignIn() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen p-5 gap-5">
      <h1 className="text-5xl font-bold">Hello there! 👋</h1>

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
        <button formAction={signin} className="btn btn-primary mb-5 w-full">
          Sign in
        </button>

        <GoogleSignIn />

        <Link
          href="/auth/signup"
          className="btn btn-ghost w-full mb-10 text-center"
        >
          Sign up
        </Link>
      </form>
    </section>
  )
}
