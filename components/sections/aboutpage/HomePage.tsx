"use client";


import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* Container */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 text-center">

        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-black leading-[1.1] tracking-tight mb-6">
          Enterprise-Grade Autonomous AI
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#625FD0] to-[#8A84FF] p-2">
            Powered by SuperManagerAGI
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-black/60 max-w-3xl mx-auto leading-relaxed mb-10">
          SuperManagerAGI designs, deploys, and orchestrates autonomous AI teams 
          that execute operations, optimize complex workflows, manage decision intelligence, 
          and scale enterprise performance while leadership focuses on strategy, innovation, 
          and long-term growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="https://app.supermanager.co/login"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#625FD0] px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            Launch Platform
            
          </Link>

          <Link
            href="./learnmore"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[#625FD0] text-[#625FD0] text-md tracking-wide font-semibold transition-all duration-300 hover:bg-[#625FD0] hover:text-white"
          >
            Explore Capabilities
          
          </Link>

        </div>
      </div>
    </section>
  );
}