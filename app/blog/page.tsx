import React, { Suspense } from 'react'
import Posts from './posts'

export default function Blog() {
  return (
    <div>
      <div className="flex justify-center items-center p-5 min-h-screen">
        <div className="text-center md:w-1/2">
          <h1 className="text-xl font-bold mb-5">Blog</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            consequuntur laboriosam nulla maxime nemo accusamus aperiam
            distinctio quos cupiditate ullam sit blanditiis facere expedita modi
            aspernatur, quis veniam illo quaerat.
          </p>
        </div>
      </div>
      <Suspense>
        <Posts />
      </Suspense>
    </div>
  )
}
