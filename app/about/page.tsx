'use client'

import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center p-5 min-h-screen gap-10">
      <div className="text-center md:w-1/2">
        <h1 className="text-xl font-bold mb-5">About</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
          molestiae rem? Pariatur aliquam nobis assumenda nihil porro quia
          maiores exercitationem debitis repellat libero. Aut odio similique
          inventore nostrum eveniet delectus consequuntur temporibus tenetur
          quis esse accusantium dolore dolor deleniti eligendi numquam, tempora
          libero sed pariatur porro corporis est labore. Ea, velit.
        </span>
      </div>

      <div>
        <Image
          src="/post_default.png"
          alt="hero image"
          width={300}
          height={300}
          className="w-full object-cover rounded-xl n"
        />
      </div>
    </section>
  )
}
