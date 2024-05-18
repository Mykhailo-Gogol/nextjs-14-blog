import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content w-full flex flex-col-reverse md:flex-row md:justify-between gap-10">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <Image
          src="/next.svg"
          alt="hero image"
          width={300}
          height={300}
          className="w-full md:w-1/2 min-h-screen"
        />
      </div>
    </div>
  )
}
