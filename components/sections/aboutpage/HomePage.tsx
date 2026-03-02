"use client";

import {
  Cpu,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* Soft Radial Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#eef2ff_0%,_#ffffff_60%)]" />

      {/* Container */}
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-24 md:py-32 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#625FD0]/10 text-[#625FD0] text-xs sm:text-sm font-medium">
          <Sparkles size={14} />
          Enterprise Autonomous Intelligence
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  text-black leading-[1.1] tracking-tight mb-6">
          Orchestrate the Future with{" "}
          <br/>
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#625FD0] to-[#625FD0] p-2">
            SuperManagerAGI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-black/60 max-w-3xl mx-auto leading-relaxed mb-10">
          SuperManagerAGI builds and coordinates autonomous AI teams that
          manage enterprise operations, optimize workflows, make intelligent
          decisions, and scale execution , while humans focus on vision,
          leadership, and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Primary CTA */}
          <Link
            href="https://app.supermanager.co/login"
            className="group inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#625FD0] text-white text-md tracking-wide transition-all duration-300  hover:shadow-lg"
          >
            Launch SuperManagerAGI
            <Cpu
              size={16}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="./learnmore"
            className="group inline-flex items-center gap-2 px-4 py-3 rounded-full border-2 border-[#625FD0] text-[#625FD0] text-md tracking-wide transition-all duration-300 hover:bg-[#625FD0] hover:text-white"
          >
            Explore Capabilities
           
          </Link>

        </div>
      </div>
    </section>
  );
}