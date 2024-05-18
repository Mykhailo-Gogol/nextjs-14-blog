import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link href="/" className="link hover:no-underline">
                    Branding
                </Link>
                <Link href="/" className="link hover:no-underline">
                    Design
                </Link>
                <Link href="/" className="link hover:no-underline">
                    Marketing
                </Link>
                <Link href="/" className="link hover:no-underline">
                    Advertisement
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link href="/" className="link hover:no-underline">
                    About us
                </Link>
                <Link href="/" className="link hover:no-underline">
                    Contact
                </Link>
                <Link href="/" className="link hover:no-underline">
                    Jobs
                </Link>
                <Link href="/" className="link hover:no-underline">
                    Press kit
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link href="/" className="link hover:no-underline">
                    Terms of use
                </Link>
                <Link href="/" className="link hover:no-underline">
                    Privacy policy
                </Link>
                <Link href="/" className="link hover:no-underline">
                    Cookie policy
                </Link>
            </nav>
        </footer>
    )
}
