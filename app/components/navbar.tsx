import React from 'react'
import Link from 'next/link';
const navbar = () => {
  return (
    <header className="">
      <div>Logo</div>
        <nav className="flex justify-center">
            <Link href="/projects">Projects</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    </header>
  )
}

export default navbar