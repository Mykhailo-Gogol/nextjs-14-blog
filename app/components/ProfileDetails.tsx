// mark as client component
'use client'

// importing necessary functions
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  // extracting data from usesession as session
  const { data: session } = useSession()

  // checking if sessions exists
  if (session) {
    // rendering components for logged in users
    return (
      <div className="text-center flex flex-col items-center">
        <Image
          src={session.user?.image || ''}
          alt={session.user?.name || ''}
          width={150}
          height={150}
        />
        <h1 className="font-bold">{session.user?.name}</h1>
        <span className="font-bold">{session.user?.email}</span>

        <button
          onClick={() => signOut()}
          className="mx-auto block btn btn-error my-10"
        >
          Sign out
        </button>
      </div>
    )
  }

  // rendering components for not logged in users
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <button
        onClick={() => signIn('github')}
        className="mx-auto block btn btn-neutral"
      >
        Sign in with github
      </button>
    </div>
  )
}
