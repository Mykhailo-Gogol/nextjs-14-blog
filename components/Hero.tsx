import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Hero() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  return (
    <div className="hero min-h-screen shadow-lg">
      <div className="hero-content w-full flex flex-col-reverse md:flex-row md:justify-between gap-10">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link
            href={user ? '/profile' : '/auth/signin'}
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </div>
        <Image
          src="/hero.jpg"
          alt="hero image"
          width={300}
          height={300}
          className="w-full md:w-1/2"
        />
      </div>
    </div>
  )
}
