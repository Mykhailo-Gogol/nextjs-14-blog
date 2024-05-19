import React from 'react'
import { signin } from './actions'
import Link from 'next/link'

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
        <button className="btn mb-5 w-full" formAction={signin}>
          Sign in
        </button>
      </form>
      <Link href="/auth/signup">or Sign up</Link>
    </section>
  )
}
