import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Header() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <header className="navbar bg-base-100 shadow-lg sticky top-0 z-10">
      <div className="flex-1">
        <Link href="/" className="btn btn-primary text-xl py-2">
          <Image src="/favicon.png" alt="logo" width={30} height={30} />
        </Link>
      </div>
      <nav className="menu menu-horizontal px-1">
        <Link href="/blog" className="mx-5">
          Blog
        </Link>
        <Link href="/about" className="mx-5">
          About
        </Link>
        <Link href={user ? '/profile' : '/auth/signin'} className="mx-5">
          Profile
        </Link>
      </nav>
    </header>
  )
}
