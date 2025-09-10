import React from 'react'
import { signup } from './actions'

export default function SignUp() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen p-5 gap-5">
      <h1 className="text-5xl font-bold">Almost there! ✅</h1>

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
        <button className="btn btn-primary w-full" formAction={signup}>
          Sign up
        </button>
      </form>
    </section>
  )
}
