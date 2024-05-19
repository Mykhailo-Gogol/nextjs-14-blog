import Image from 'next/image'
import React from 'react'

export default function Post() {
  return (
    <div className="card lg:card-side bg-base-100 md:flex shadow-md">
      <figure className="h-80 w-full md:w-1/2">
        <Image
          src="/post.jpg"
          alt="Album"
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost">Read</button>
        </div>
      </div>
    </div>
  )
}
