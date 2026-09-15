import React from 'react' 
import Image from 'next/image';
import Link from 'next/link';
const navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#171310]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 md:px-8">
        <Brandmark />

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-200 transition hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-200 transition hover:text-white">
            About
          </Link>
          <Link href="/services" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-200 transition hover:text-white">
            Services
          </Link>
          <Link href="/projects" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-200 transition hover:text-white">
            Projects
          </Link>
          <Link href="/properties" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-200 transition hover:text-white">
            Properties
          </Link>
          <Link href="/contact" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-200 transition hover:text-white">
            Contact
          </Link>
        </nav>

        <button className="hidden rounded-full border border-[#b83f3f] bg-[#a82020] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_26px_rgba(168,32,32,0.35)] transition hover:bg-[#8f1d1d] md:block">
          Get a Quote
        </button>

        <button className="text-2xl text-white md:hidden">☰</button>
      </div>
    </header>
  )
}

//Reusable component for the brandmark/logo
function Brandmark() {
  const size = 38;

  return (
    <Link href="/">
    <div className="flex gap-2">
      <Image
        src="/Images/Main/logo.jpg"
        alt="Logo"
        width={size}
        height={size}
        style={{ width: size, height: size, objectFit: 'cover', flexShrink: 0 }}
      />

      <div className="mx-auto text-center font-bold">
        <p>DOUBLE L BUILDERS</p>

        <p className="text-sm text-gray-300 text-[9px] tracking-widest">
          INC.
        </p>
      </div>
    </div>
    </Link>
  );
}

export default navbar