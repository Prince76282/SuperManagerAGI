'use client';

import Image from 'next/image';
import Link from 'next/link';
import image1 from '@/public/Image/AGIleadership.png';

export default function AGIHeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white transition-colors">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Hero Content */}
          <div className="text-center max-w-4xl mb-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                AGI for Execution
              </h1>

              <p className="text-lg md:text-xl text-gray-900  leading-relaxed">
                Leverage AGI capabilities to autonomously execute projects and deliver outcomes without human intervention.
                
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link   href="/learnmore" className="px-6 py-3 text-white rounded-lg bg-[#625FD0] transition-all duration-300 min-w-[160px] font-medium">
                Watch video
              </Link>

              <Link
                href="/get-in-touch"
                className="px-6 py-3 bg-[#625FD0] text-white rounded-lg   transition-all duration-300 min-w-[160px] text-center font-medium"
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