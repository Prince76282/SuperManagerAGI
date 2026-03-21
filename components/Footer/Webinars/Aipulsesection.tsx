"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, Zap } from "lucide-react";

export default function AIPulseSection() {
  return (
    <section className=" bg-white relative overflow-hidden">
      <div className="absolute inset-0 " />

      <div className="relative max-w-[1200px] p-16 [1200px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-3xl lg:text-5xl  text-zinc-900 tracking-tight">
              Quarterly <span className="text-[#625FD0]"> AI Pulse event </span>
            </h2>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center gap-12 rounded-3xl border border-gray-300 overflow-hidden px-8 py-12 lg:px-14 lg:py-16 shadow-lg">
            <div className="relative z-10 flex flex-col gap-6 flex-1">
              <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#625FD0]">
                <Zap className="w-4 h-4  text-[#625FD0]" />
                Quarterly Briefing
              </span>

              <div className="flex flex-col gap-4">
                <h3 className="text-3xl lg:text-3xl  text-black leading-tight">
                  Quarterly briefing for enterprise AI leaders
                </h3>

                <p className="text-zinc-400 leading-relaxed max-w-xl">
                  AI Pulse delivers the quarter’s most important enterprise AI
                  trends, vendor innovations, governance frameworks, and
                  deployment intext-3xlcondensed into an actionable executive
                  briefing.
                </p>
              </div>

              <Link
                href="/#"
                className="group inline-flex items-center gap-3 self-start mt-2 px-6 py-3 rounded-lg bg-[#625FD0]  text-white text-sm font-semibold transition-all "
              >
                Join the Next AI Pulse
              </Link>
            </div>

            <div className="relative z-10 w-full lg:w-[420px] xl:w-[480px] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-sm group">
                <Image
                  src="/events/ai-pulse.webp"
                  alt="AI Pulse event"
                  width={480}
                  height={320}
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
