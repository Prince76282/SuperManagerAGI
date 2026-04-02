"use client";

import Link from "next/link";

export default function AGIHeroSection() {
  return (
    <section className=" py-24 lg:py-32 bg-white transition-colors">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Hero Content */}
          <div className="text-center max-w-4xl mb-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl lg:text-5xl mb-6 animate-fade-in">
                Vibe Working Platform for Execution
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                SuperManager AGI operates as an autonomous execution layer that
                plans, coordinates, monitors and optimises entire workflows
                across every connected application eliminating manual overhead
                while increasing delivery speed, accuracy and operational
                confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://youtu.be/mesaaTaZl3E?si=Vh8bOXA9ixENc-Fo"
                className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white  transition-all duration-300"
              >
                Watch video
              </Link>

              <Link
                href="/get-in-touch"
                className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white  transition-all duration-300"
              >
                Request a demo
              </Link>
            </div>
          </div>

          {/* Hero Video */}
          <div className="w-full max-w-5xl">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/mesaaTaZl3E"
                title="Execution Platform Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
