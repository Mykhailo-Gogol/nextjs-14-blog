// import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Hero() {
  // const supabase = createClient()

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()

  return (
    <div className="hero min-h-screen shadow-lg">
      <div className="hero-content w-full flex flex-col-reverse lg:flex-row lg:justify-between gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Welcome to the blog! 💬</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link href={'/blog'} className="btn btn-primary">
            Start Reading
          </Link>
        </div>

        <Image
          src="/hero.jpg"
          alt="hero image"
          width={300}
          height={300}
          className="w-full lg:w-1/2 object-cover rounded-xl n"
        />
      </div>
    </div>
  )
}
