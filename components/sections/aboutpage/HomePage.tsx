"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full py-20 min-h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8A84FF]/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-8 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] tracking-tight mb-6">
          Enterprise-Grade Autonomous AI
          <br />
          <span className="bg-clip-text   text-[#625FD0] px-2">
            Powered by SuperManagerAGI
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-black/60 max-w-3xl mx-auto leading-relaxed mb-10">
          SuperManager AGI builds, deploys and orchestrates autonomous AI agent
          workforces that execute operations, retrieve enterprise intelligence,
          coordinate across departments and scale performance while leadership
          focuses on strategy, growth and the decisions that actually require
          human judgment.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://app.supermanager.co/login"
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-[#625FD0] px-7 py-3.5 text-white text-sm sm:text-base font-medium shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-lg"
          >
            <span className="relative z-10">Launch Platform</span>

            {/* Glow Hover Effect */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#625FD0] to-[#8A84FF] opacity-0 group-hover:opacity-20 blur transition duration-300"></span>
          </Link>
        </div>

      </div>
    </section>
  );
}