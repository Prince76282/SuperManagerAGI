"use client";

import React from "react";
import Link from "next/link";

const Homepage = () => {
  return (
    <section className="relative pt-20 pb-14 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-[#8A84FF]/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
        
        {/* Small Badge */}
        <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#625FD0]/10 text-[#625FD0] font-medium">
          Global Recognition
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Industry <span className="text-[#625FD0]">Recognition</span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
          Discover how SuperManager AGI is pioneering the AI Vibe Working
          Platform categorythe world’s first architecture that eliminates the
          network boundary assumption from enterprise AI agent deployment.
          Recognised for the ADA Integration Layer, Beehive Agentic
          Architecture and the first peer-reviewed framework for
          hallucination-free, sub-100ms autonomous enterprise AI.
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="group relative inline-flex items-center justify-center rounded-xl bg-[#625FD0] px-7 py-3 text-white font-medium shadow-md transition-all duration-300 hover:scale-[1.05] hover:shadow-lg"
        >
          <span className="relative z-10">Get in touch</span>

          {/* Hover Glow */}
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#625FD0] to-[#8A84FF] opacity-0 group-hover:opacity-20 blur transition duration-300"></span>
        </Link>
      </div>
    </section>
  );
};

export default Homepage;