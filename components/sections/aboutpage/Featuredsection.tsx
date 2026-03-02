"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#F0F6F9] overflow-hidden">
      <div className="relative max-w-300 mx-auto px-6 sm:px-8 md:px-12 lg:px-16 pt-16 md:pt-16 lg:pt-16 pb-16">

        <div
          className={`flex flex-col lg:flex-row items-center gap-14 lg:gap-24 transition-all duration-1000 ease-out will-change-transform transform-gpu ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          {/* LEFT */}
          <div className="flex flex-col gap-8 lg:w-[46%] text-center lg:text-left">

            <div className="flex flex-col gap-6">
              <h1 className="text-gray-900  leading-[1.1] md:leading-[1.05] tracking-tight text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                Run Your Enterprise at AGI Speed
              </h1>

              <p className="text-[#181818]/70  text-base md:text-lg leading-relaxed max-w-140 mx-auto lg:mx-0">
                SuperManagerAGI builds autonomous AI teams that execute
                operations, optimize workflows, and make intelligent
                decisions across your organization.
              </p>

              <p className="text-[#181818]/60 text-sm md:text-base leading-relaxed font-light max-w-130 mx-auto lg:mx-0">
                Deploy, orchestrate, and scale AI agents with enterprise-grade
                control, security, and performance  all from one unified
                platform.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">

              <Link
                href="/contactus"
                className="px-4 py-3 rounded-full bg-[#625FD0] text-white text-md font-medium  transition-transform duration-300"
              >
                Talk to Sales
              </Link>

              <Link
                 href="/learnmore"
                className="px-4 py-3 rounded-full hover:bg-[#625FD0] border-2 border-[#625FD0] text-[#625FD0] hover:text-white text-md font-medium  transition-transform duration-300"
              >
                Explore Platform
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`relative lg:w-[54%] w-full transition-all duration-1000 delay-200 ease-out will-change-transform transform-gpu ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-3/2 overflow-hidden rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.15)]">
              <Image
                src= "/image/World'sFirst/Depositphotos_212163096_S.jpg" 
                alt="SuperManagerAGI autonomous enterprise platform visualization"
                fill
                priority
                sizes="(max-width:768px)100vw,54vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}