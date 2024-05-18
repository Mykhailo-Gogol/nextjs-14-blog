import Image from 'next/image'
import React from 'react'

export default function Post() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="p-10">
        <Image src="/vercel.svg" alt="Album" width={300} height={300} />
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
