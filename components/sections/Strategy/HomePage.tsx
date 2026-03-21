"use client";

import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/Image/newimage/PLAN.jpg";

export default function AGIHeroSection() {
  return (
    <section className="py-24 md:py-24 lg:py-32 bg-white transition-colors">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mb-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl lg:text-5xl mb-6 animate-fade-in">
                AI Vibe Working Platform for Strategy
              </h1>

              <p className="text-lg md:text-xl text-gray-600  leading-relaxed">
               Give every leader in your organisation a live, grounded view of what is actually happening across every department  retrieved from actual live data across every connected system  and the autonomous agent workforce to act on it immediately.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://youtu.be/nrNXqRT6ODY?si=vt53Wy_LtuTqgzbX"
                className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
              >
                Watch video
              </Link>

              <Link
                href="/get-in-touch"
                className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
              >
                Request a demo
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-5xl">
            <Image
              src={image1}
              alt="AGI Leadership Dashboard"
              className="w-full h-auto rounded-2xl shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
