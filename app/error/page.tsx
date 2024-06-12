'use client'

import { useSearchParams, useRouter } from 'next/navigation'

export default function ErrorPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const message = searchParams.get('message')

  return (
    <section className="flex justify-center items-center p-5 min-h-screen">
      <div>
        <p className="mb-5">
          {message?.split('-').join(' ') || 'Sorry, something went wrong'}
        </p>

        <button onClick={router.back} className="block btn mx-auto">
          Back
        </button>
      </div>
    </section>
  )
}
