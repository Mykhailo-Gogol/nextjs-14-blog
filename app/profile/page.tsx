import React from 'react'
import ProfileDetails from '@/components/ProfileDetails'

export default function Profile() {
  return (
    <section className="hero p-5 min-h-screen bg-base-200">
      <div className="md:w-1/2">
        <ProfileDetails />
      </div>
    </section>
  )
}
