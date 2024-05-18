import Link from 'next/link'
import React from 'react'

export default function () {
    return (
        <header className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    daisyUI
                </Link>
            </div>
            <nav className="menu menu-horizontal px-1">
                <Link href="/blog" className="mx-5">
                    Blog
                </Link>
                <Link href="/about" className="mx-5">
                    About
                </Link>
                <Link href="/profile" className="mx-5">
                    Profile
                </Link>
            </nav>
        </header>
    )
}
