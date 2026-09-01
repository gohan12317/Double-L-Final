import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/Images/Main/hero.jpg"
          alt="Double L Builders project"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10">
          <h1 className="text-white">
            Double L Builders Inc.
          </h1>
        </div>
      </section>
    </main>
  );
}
