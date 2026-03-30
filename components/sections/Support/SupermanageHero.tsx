"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SupermanageHero() {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      <div className="absolute inset-0 -z-10 " />

      <div className="mx-auto max-w-[1200px] px-6">
        <div className="py-20 text-center">
          <h1 className="text-3xl lg:text-5xl  tracking-tight leading-tight">
            SuperManager AGI Support
          </h1>

          <p className="mt-6 text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            Enterprise-grade resources for founders, operators, developers and
            enterprise leaders building and deploying autonomous AI agent
            workforces with SuperManager AGI.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="https://app.supermanager.co/login"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white  transition-all duration-300"
            >
              Login to Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
