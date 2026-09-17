import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-4 py-8 md:py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr] md:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-black text-white">
              DL
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.2em]">DOUBLE L</p>
              <p className="text-[9px] uppercase tracking-[0.32em] text-stone-400">Builders Inc.</p>
            </div>
          </div>

          <p className="max-w-sm text-sm leading-6 text-stone-300">
            Building quality homes, commercial spaces, and lasting value across Cebu with integrity,
            craftsmanship, and trusted expertise.
          </p>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-stone-300">
            Company
          </p>
          <ul className="space-y-3 text-sm text-stone-300">
            <li>
              <Link href="/" className="transition hover:text-white">Home</Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/projects" className="transition hover:text-white">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-stone-300">
            Services
          </p>
          <ul className="space-y-3 text-sm text-stone-300">
            <li>Construction</li>
            <li>Property Sales</li>
            <li>Real Estate</li>
            <li>Property Management</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-stone-300">
            Contact
          </p>
          <ul className="space-y-3 text-sm text-stone-300">
            <li>Cebu, Philippines</li>
            <li>hello@doublelbuilders.com</li>
            <li>+63 (032) 000-0000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-3 px-4 py-5 text-xs uppercase tracking-[0.2em] text-stone-400 md:flex-row md:px-8">
          <p>© 2026 Double L Builders Inc.</p>
          <p>Built to last.</p>
        </div>
      </div>
    </footer>
  );
}
