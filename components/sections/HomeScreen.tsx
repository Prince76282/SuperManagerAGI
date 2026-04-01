"use client";

import Image from "next/image";
import Link from "next/link";
import { features } from "@/lib/Dataset/features";
import { useEffect, useRef } from "react";

const companies = [
  { name: "Adobe", src: "/Image/newimage/Adobe.png", width: 120 },
  { name: "BrowserStack", src: "/Image/newimage/Browser1.png", width: 200 },
  { name: "Zoho", src: "/Image/newimage/Zoho.png", width: 120 },
  { name: "Microsoft", src: "/Image/newimage/Microsoft.png", width: 200 },
  { name: "Sprinto", src: "/Image/newimage/Sprinto.png", width: 120 },
  { name: "Perplexity", src: "/Image/newimage/perplexity.png", width: 200 },
  { name: "Socket", src: "/Image/newimage/Socket.png", width: 120 },
  { name: "Nvidia", src: "/Image/newimage/image.png", width: 200 },
];

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isHovered = false;
    const speed = 0.5;

    const scroll = () => {
      if (!container) return;

      if (!isHovered) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    const handleMouseEnter = () => (isHovered = true);
    const handleMouseLeave = () => (isHovered = false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    scroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative w-full">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 h-screen w-screen object-cover -z-10 pointer-events-none"
        poster="/Image/newimage/image2.png"
      >
        <source src="/Image/World'sFirst/background.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 text-black">
        {/* HERO */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] py-12 lg:py-22">
            <h1 className="mx-auto max-w-[1200px] text-center text-3xl mt-10 md:text-5xl xl:text-6xl leading-tight">
              The AI Vibe Working Platform
            </h1>

            <p className="mx-auto mt-6 max-w-[900px] text-center text-base md:text-lg">
              <strong> SuperManager AGI </strong> isn't a chatbot, workflow
              tool, or SaaS dashboard. It's the{" "}
              <strong>AI Vibe Working Platform </strong> where autonomous
              agents, powered by <strong>ADA </strong>, access live company data
              1000 feet deep with no APIs, no MCP servers, fully automatic.
              Prompt once. Work gets done.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="https://app.supermanager.co/login"
                target="_blank"
                className="rounded-lg bg-[#625FD0] text-white px-4 py-2 "
              >
                OPEN APP
              </Link>
            </div>
          </div>
        </div>

        {/* TRUSTED BY */}
        <div className="mx-auto max-w-[1100px] px-5 pb-14 text-center">
          <h1 className="mb-4 text-xl md:text-2xl font-bold">
            Trusted by 100+ Leading Companies
          </h1>

          <div className="overflow-hidden group">
            <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="flex items-center px-6">
                  <Image
                    src={company.src}
                    alt={company.name}
                    width={company.width}
                    height={80}
                    className="h-[100px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="relative" >
          {/* Gradient edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            ref={scrollRef}
            className="mx-auto max-w-[1200px] px-4 pb-20 flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {[...features].map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group relative snap-start flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] rounded-2xl bg-white/10 backdrop-blur-md border border-gray-300/40 text-black transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* CONTENT */}
                <div className="flex h-full flex-col">
                  <div className="p-6 flex-1">
                    <h3 className="text-lg  mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-700">
                      {feature.description}
                    </p>
                  </div>

                  <div className="relative h-56 w-full px-6 pb-6">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-110 p-2"
                    />
                  </div>
                </div>

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 rounded-2xl bg-[#625FD0]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-[#625FD0] text-white rounded-full text-sm font-medium shadow-md">
                    Explore
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
