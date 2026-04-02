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
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#F0F6F9] overflow-hidden">
      <div className="relative max-w-300 mx-auto px-6  md:pt-16 lg:pt-16 pb-16">
        <div
          className={`flex flex-col lg:flex-row items-center gap-14 lg:gap-24 transition-all duration-1000 ease-out will-change-transform transform-gpu ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* LEFT */}
          <div className="flex flex-col gap-8 lg:w-[46%] text-center lg:text-left">
            <div className="flex flex-col gap-6">
              <h1 className="text-gray-900  leading-[1.1] md:leading-[1.05] tracking-tight text-3xl sm:text-3xl md:text-3xl lg:text-5xl">
                Run Your Organisation at Vibe Working Platform Speed
              </h1>

              <p className="text-[#181818]/70  text-base md:text-lg leading-relaxed max-w-140 mx-auto lg:mx-0">
                SuperManager AGI deploys autonomous specialist agents across
                every business function that execute workflows, retrieve data
                from 1,000 feet deep inside your enterprise and coordinate
                across every connected system simultaneously.
              </p>

              <p className="text-[#181818]/60 text-sm md:text-base leading-relaxed font-light max-w-130 mx-auto lg:mx-0">
                Build, orchestrate and scale AI agents with enterprise-grade
                control, security and performance all from one unified Vibe
                Working Platform.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-2">
              <Link
                href="/contactus"
                className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white  transition-all duration-300"
              >
                Talk to Sales
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
                src="/Image/World'sFirst/image3.webp"
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
