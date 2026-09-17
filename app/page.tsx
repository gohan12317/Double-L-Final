import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/projects";


export default async function Home() {
  const projects = await getProjects();
  return (
    <main>
      <section className="relative min-h-[600px] md:min-h-screen grid grid-cols-1 md:grid-cols-2">
        
          <div className="relative z-10 flex flex-col items-center text-center min-h-full md:items-start md:text-left md:px-[10%] py-[15%]">          
            <div className="flex items-center gap-4 mb-8">
            <div className="hidden md:block w-10 h-px bg-white" />
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-white/70">Double L Builders Inc. · Cebu, Philippines</p>
          </div>
          <br></br>

          <h1 className="font-display font-black text-white leading-[0.92] mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 7rem)' }}>
            Building<br />Quality.<br /><span className="text-white/60">Creating Value.</span>
          </h1>

        <p className="text-gray-300 w-3/4">Full-service construction and real estate company across Cebu since 2010. Design, build, buy, sell, and manage — all under one trusted name.</p>

        <div className="flex gap-4 mt-8">
          <button className="bg-accent text-white font-bold py-2 px-4 rounded hover:bg-accent-hover">
            View Our Projects
          </button>
          <button className="border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black">
            Contact Us
          </button>
        </div>

        </div>
        
        <div className="absolute inset-0 md:relative min-h-[400px]">
            <Image
              src="/Images/Main/hero.jpg"
              alt="Double L Builders project"
              fill
              sizes="(max-width: 768px) 80vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/60 md:hidden" />
        </div>
      </section>

      <section className="bg-[var(--dirty-white)] backdrop-blur-md p-8 grid grid-cols-2 md:grid-cols-4 border border-gray-300 rounded-lg shadow-md gap-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">15+</h2>
          <p className="text-gray-700">Years of Business</p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">80+</h2>
          <p className="text-gray-700">Projects Completed</p>
        </div>

        <div className="text-center"  >
          <h2 className="text-4xl font-bold mb-4 text-black">30+</h2>
          <p className="text-gray-700">Active Listings</p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">200+</h2>
          <p className="text-gray-700">Satisfied Clients</p>
        </div>
      </section>

      <section className="grid min-h-screen grid-cols-1 gap-8 bg-[#111111] p-8 md:grid-cols-2 md:p-12">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <div className="mb-4 h-px w-14 bg-white/60" />
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/60">
              Since 2010
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-4 text-white">
                <p className="text-3xl font-black">80+</p>
                <p className="text-sm uppercase tracking-[0.18em] text-stone-300">Completed Projects</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-4 text-white">
                <p className="text-3xl font-black">30+</p>
                <p className="text-sm uppercase tracking-[0.18em] text-stone-300">Active Listings</p>
              </div>
            </div>
          </div>
        </div>



        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
            Built to last
          </p>
          <h2 className="mb-4 text-3xl font-black text-white md:text-5xl">
            We build what endures.
          </h2>
          <p className="text-base leading-7 text-stone-300 md:text-lg">
            Double L Builders Inc. is a Cebu-based construction and real estate company founded in 2010. From individual dream homes to large-scale commercial developments, we deliver every project to the highest standards of quality, integrity, and craftsmanship.
            <br />
            <br />
            Today our work spans over 80 completed projects, a growing portfolio of real estate listings, and a professional property management division serving owners across Metro Cebu.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 md: "> {/* Propaganda */}
        <Link href="/services">
          <div className="relative min-h-[300px] md:min-h-[480px] flex items-end group cursor-pointer">
            <img src="/Images/Main/next.avif" alt="Double L Builders project" 
            className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors" />
              <div className='relative p-10 lg:p-14 w=full'>
            <div className="w-10 h-0.5 bg-accent mb-5" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent mb-2">01 — Construction</p>
            <h3 className="font-display text-3xl lg:text-4xl font-black text-white leading-tight mb-4">Built to Last,<br />Crafted with Care</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-sm">Residential, commercial, and design-build projects — delivered on time and to the highest standards.</p>
              </div>

          </div>
        </Link>
        <Link href="/properties">
          <div className="relative min-h-[300px] md:min-h-[480px] flex items-end group cursor-pointer">
            <img src="/Images/Main/photo-1600596542815-ffad4c1539a9.avif" alt="Double L Builders project" 
            className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors" />
          <div className="relative p-10 lg:p-14 w-full">
            <div className="w-10 h-0.5 bg-accent mb-5" />
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent mb-2">02 — Real Estate</p>
            <h3 className="font-display text-3xl lg:text-4xl font-black text-white leading-tight mb-4">Premium Properties<br />Across Cebu</h3>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-sm">Lots, house and lots, commercial spaces, and rentals in prime Cebu locations.</p>

          </div>

          </div>
        </Link>
      </section>


      <section className="bg-[#111111] p-8 md:p-12 "> {/* Services */}
      <div className="py-8">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
          <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-sm">We offer a comprehensive range of services to meet all your real estate needs, from property sales and acquisitions to management and investment advisory. </p>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-[#222222] p-4 md:p-6">
            <h3 className="text-xl font-bold text-white mb-4">Design</h3>
            <p className="text-white/55 text-sm leading-relaxed">Architectural design, 3D visualization, and construction documentation from concept to permit-ready drawings.</p>
          </div>
          <div className="bg-[#222222] p-4 md:p-6">
            <h3 className="text-xl font-bold text-white mb-4">Construction</h3>
            <p className="text-white/55 text-sm leading-relaxed">Residential, commercial, and design-build construction with rigorous quality control from groundbreaking to handover.</p>
          </div>
            <div className="bg-[#222222] p-4 md:p-6">
              <h3 className="text-xl font-bold text-white mb-4">Real Estate</h3>
              <p className="text-white/55 text-sm leading-relaxed">Licensced brokerage for lots, house & lots, commercial properties and rentals across Metro Cebu.</p>
          </div>
            <div className="bg-[#222222] p-4 md:p-6">
              <h3 className="text-xl font-bold text-white mb-4">Property Management</h3>
              <p className="text-white/55 text-sm leading-relaxed">End-to-end property management for owners — tenant placement, rent collection, maintenance, and reporting.</p>
          </div>          
        </div>


      </section>


      
      <section className="py-10 "> {/* Featured Projects*/}
        <div className="p-10">
              <h2 className="text-gray-300">Our work</h2>
              <h1 className="text-4xl py-3">Featured Projects </h1>
              <p className="text-gray-400 text-sm leading relaxed">A selection from our residentail, commercial, and design-build portfolio</p>
        </div>

        <div className="flex grid grid cols-2 md:grid-cols-3 px-10 gap-7">
          {projects.map((project)=> (
          <div key={project.id} className="relative flex items-end h-[460px]">
            <div className="absolute inset-0 bg-black/65 transition-colors"></div>
            <h2 className="absolute z-10 p-16">{project.title}</h2>

                <Image
                src={project.coverImage}
                fill
                className="absolute inset-0 object-cover" 
                alt={""}            
                />
              <div className="absolute inset-0 z-group-hover:bg-black/55"></div>
          </div>
          ))}
        </div>
      </section>
    </main>
  );
}