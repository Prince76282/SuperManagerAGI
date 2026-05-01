"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const companies = [
  { name: "Adobe", src: "/Image/newimage/Adobe.png", width: 150 },
  { name: "BrowserStack", src: "/Image/newimage/Browser1.png", width: 140 },
  { name: "Zoho", src: "/Image/newimage/Zoho.png", width: 140 },
  { name: "Microsoft", src: "/Image/newimage/Microsoft.png", width: 140 },
  { name: "Sprinto", src: "/Image/newimage/Sprinto.png", width: 150 },
  { name: "Perplexity", src: "/Image/newimage/perplexity.png", width: 140 },
  { name: "Socket", src: "/Image/newimage/Socket.png", width: 140 },
  { name: "Nvidia", src: "/Image/newimage/image.png", width: 140 },
];

export default function PartnersHero() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroVisible(true), 100);
    const t2 = setTimeout(() => setImgVisible(true), 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[700px] h-[700px] bg-[#8A84FF]/20 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div
            className={`flex flex-col gap-8 transition-all duration-700 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight tracking-tight">
                Our <span className="text-[#625FD0]">Partners</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium max-w-xl">
                Unlock enterprise value from the AI Vibe Working Platform with
                our global partner ecosystem.
              </p>

              <p className="text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed">
                Scale faster and achieve measurable outcomes with SuperManager
                AGI specialist agents implemented, configured and optimised by
                certified implementation partners across every industry.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/aboutus"
                className="group relative inline-flex items-center rounded-xl bg-[#625FD0] px-5 py-2.5 text-white font-medium shadow-md transition-all duration-300 hover:scale-[1.05] hover:shadow-lg"
              >
                <span className="relative z-10">Find a Partner</span>

                {/* Glow */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#625FD0] to-[#8A84FF] opacity-0 group-hover:opacity-20 blur transition duration-300"></span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-6 border-t border-slate-100">
              {[
                { value: "200+", label: "Certified Partners" },
                { value: "50+", label: "Countries" },
                { value: "99%", label: "Client Satisfaction" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-2xl sm:text-3xl font-semibold text-[#625FD0]">
                    {value}
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`transition-all duration-700 ${
              imgVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group hover:shadow-2xl transition">
              <Image
                src="/Image/partners.png"
                alt="SuperManagerAGI Partner Network"
                width={600}
                height={500}
                priority
                className="object-cover w-full h-[280px] sm:h-[380px] lg:h-[500px] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* LOGO MARQUEE */}
        <div className="relative mt-24 text-center">
          <h2 className="mb-12 text-lg lg:text-4xl font-semibold text-slate-900">
            Trusted by 100+ Leading Companies
          </h2>

          {/* Gradient edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden group">
            <div className="flex w-max items-center gap-12 sm:gap-16 md:gap-20 animate-marquee group-hover:[animation-play-state:paused]">

              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex shrink-0 items-center justify-center px-4 opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
                >
                  <Image
                    src={company.src}
                    alt={company.name}
                    width={company.width}
                    height={150}
                    className=" w-auto object-contain"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}