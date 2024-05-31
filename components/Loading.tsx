import React from 'react'

export default function Loading({ size }: { size: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex justify-center items-center"
    >
      <span className="loading loading-spinner text-primary" />
    </div>
  )
}
