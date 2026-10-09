import Link from "next/link";
import { Shield, Check, User, Building, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white text-black w-full min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <img
          src="/Images/Main/hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4 mt-16">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-6">
            About Us
          </p>
          <h1 className="text-5xl md:text-7xl font-black">
            Double L Builders Inc.
          </h1>
        </div>
      </section>

      {/* Our Story / Mission & Vision */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Our Story */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-6">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              15 years building<br />Cebu&apos;s future.
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
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
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-6">
              Mission & Vision
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="bg-[#f0f2f5] p-8 md:p-10">
                <h3 className="text-[13px] font-black uppercase tracking-[0.2em] mb-4 text-black">
                  Mission
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  To deliver exceptional construction and real estate services that exceed client expectations — built on integrity, craftsmanship, and lasting value.
                </p>
              </div>
              
              <div className="bg-[#f0f2f5] p-8 md:p-10 border-l-4 border-black">
                <h3 className="text-[13px] font-black uppercase tracking-[0.2em] mb-4 text-black">
                  Vision
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  To be Cebu&apos;s most trusted construction and real estate company, recognized for quality, professionalism, and lasting contribution to the built environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-[#f4f6f8] py-20 md:py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#e0dfda] mb-6">
              What We Stand For
            </p>
            <h2 className="text-4xl md:text-5xl font-black">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Integrity */}
            <div className="bg-white p-10 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 border border-gray-100 flex items-center justify-center text-gray-300">
                <Shield className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-black mb-4">Integrity</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Honest, transparent dealings with every client, partner, and supplier.
              </p>
            </div>
            
            {/* Quality */}
            <div className="bg-white p-10 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 border border-gray-100 flex items-center justify-center text-gray-300">
                <Check className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-black mb-4">Quality</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We never cut corners. Every project reflects our highest standards.
              </p>
            </div>
            
            {/* Client First */}
            <div className="bg-white p-10 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 border border-gray-100 flex items-center justify-center text-gray-300">
                <User className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-black mb-4">Client First</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Your vision drives every decision throughout the project lifecycle.
              </p>
            </div>
            
            {/* Excellence */}
            <div className="bg-white p-10 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-6 border border-gray-100 flex items-center justify-center text-gray-300">
                <Building className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-black mb-4">Excellence</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Award-worthy outcomes delivered on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e7eaf0] py-24 md:py-32 px-6 text-center">
        <div className="max-w-[800px] mx-auto flex flex-col items-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/90 mb-6 drop-shadow-sm">
            Ready to start?
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 drop-shadow-sm">
            Ready to Build or Invest?
          </h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-12 max-w-xl drop-shadow-sm">
            Tell us about your project or property goals. Our team is ready to help you design, build, buy, or manage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="bg-white text-gray-300 px-10 py-4 font-black uppercase tracking-[0.15em] text-[11px] hover:bg-gray-50 transition shadow-sm w-full sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <a 
              href="tel:123" 
              className="border border-white/20 text-white px-10 py-4 font-black uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-2 hover:bg-white/5 transition w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 text-white/50" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
