import React from 'react'
import { signup } from './actions'

export default function SignUp() {
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
        <button className="btn w-full" formAction={signup}>
          Sign up
        </button>
      </form>
    </section>
  )
}
