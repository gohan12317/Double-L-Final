import Link from "next/link";
import { Shield, Check, User, Building, Phone, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 w-full min-h-screen font-sans selection:bg-[#A82020] selection:text-white">
      {/* 
        HERO SECTION
        UI/UX Improvements: 
        - Added a smoother gradient overlay instead of a flat opacity for better text readability.
        - Refined typography tracking and line-height. 
      */}
      <section className="relative w-full h-[65vh] min-h-[500px] flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <img
          src="/Images/Main/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Construction workers on site"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#d7cfc4] mb-4">
            About Us
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05]">
            Double L Builders Inc.
          </h1>
        </div>
      </section>

      {/* 
        OUR STORY / MISSION & VISION 
        UI/UX Improvements:
        - Used brand color (#A82020) for kickers to establish visual hierarchy.
        - Improved text line-height and contrast for optimal reading length.
        - Vision box uses brand color for the border.
      */}
      <section className="max-w-[1300px] mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Our Story */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A82020] mb-6">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] text-gray-900">
              15 years building<br className="hidden md:block" /> Cebu&apos;s future.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg max-w-xl">
              <p>
                Double L Builders Inc. was founded in 2010 with a clear mission: to deliver construction and real estate services of the highest quality to clients across Cebu.
              </p>
              <p>
                What began as a small residential construction firm has grown into a full-service construction and real estate company — handling architectural design, residential and commercial construction, real estate brokerage, and professional property management.
              </p>
              <p>
                Today, our portfolio spans over 80 completed projects, 30+ active property listings, and a growing property management division serving owners across Metro Cebu.
              </p>
            </div>
          </div>

          {/* Right: Mission & Vision */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A82020] mb-6">
              Mission & Vision
            </p>
            
            <div className="mt-2 space-y-6">
              <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-2xl transition-all duration-300 hover:shadow-md hover:bg-white border border-transparent hover:border-gray-100">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 text-gray-900">
                  Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  To deliver exceptional construction and real estate services that exceed client expectations — built on integrity, craftsmanship, and lasting value.
                </p>
              </div>
              
              <div className="bg-[#f8f9fa] p-8 md:p-12 rounded-2xl transition-all duration-300 hover:shadow-md hover:bg-white border border-transparent hover:border-gray-100">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-4 text-gray-900">
                  Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  To be Cebu&apos;s most trusted construction and real estate company, recognized for quality, professionalism, and lasting contribution to the built environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        CORE VALUES
        UI/UX Improvements:
        - Added interactive hover states to cards.
        - Icons utilize the brand color to tie the design together.
        - Cards have rounded corners for a softer, more modern feel.
      */}
      <section className="bg-[#f4f6f8] py-24 md:py-32 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A82020] mb-4">
              What We Stand For
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: 'Integrity', desc: 'Honest, transparent dealings with every client, partner, and supplier.', icon: Shield },
              { title: 'Quality', desc: 'We never cut corners. Every project reflects our highest standards.', icon: Check },
              { title: 'Client First', desc: 'Your vision drives every decision throughout the project lifecycle.', icon: User },
              { title: 'Excellence', desc: 'Award-worthy outcomes delivered on time and within budget.', icon: Building }
            ].map((value, i) => (
              <div 
                key={i} 
                className="group bg-white p-10 rounded-2xl text-center shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-red-50 flex items-center justify-center text-[#A82020] transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="w-7 h-7 stroke-[2]" />
                </div>
                <h3 className="text-xl font-black mb-4 text-gray-900">{value.title}</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        CTA SECTION
        UI/UX Improvements:
        - Fixed massive contrast issues in the mockup: white text on light gray is unreadable.
        - Used dark text on the light background, and strong brand-colored buttons.
        - Added clear directional cues (Arrow icon).
      */}
      <section className="bg-[#e4e7ec] py-24 md:py-32 px-6 text-center">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A82020] mb-6">
            Ready to start?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Ready to Build or Invest?
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
            Tell us about your project or property goals. Our team is ready to help you design, build, buy, or manage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link 
              href="/contact" 
              className="group bg-[#A82020] text-white px-10 py-5 font-black uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-3 rounded-lg shadow-md hover:bg-[#8f1d1d] transition-all hover:shadow-lg w-full sm:w-auto"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href="tel:123" 
              className="group bg-white text-gray-900 border border-gray-200 px-10 py-5 font-black uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-3 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-gray-500 group-hover:text-[#A82020] transition-colors" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
