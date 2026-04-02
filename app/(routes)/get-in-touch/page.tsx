"use client";
import Link from "next/link";
import { useState } from "react";

export default function DemoSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-[#F4F3FC] px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* LEFT CONTENT */}
        <section className="w-full lg:sticky lg:top-24">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#625FD0]/40 bg-[#625FD0]/10 mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-[#625FD0] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#625FD0]">
              Request a Demo
            </span>
          </div>

          <h1
            className="text-[clamp(28px,3.5vw,46px)]  leading-[1.2] tracking-tight text-[#1C1A3A] mb-6"
          
          >
            See Autonomous Project Management Running on{" "}
            <span className="text-[#625FD0]">Your Real Projects</span>
          </h1>

          <p className="text-[clamp(15px,1.1vw,17px)] leading-[1.8] text-[#4A4770] mb-8">
            Experience autonomous project management in action. Use the form to
            request a demo from our team and discover how our platform removes
            manual PM work, safeguards your teams, and speeds up delivery.
            We'll demonstrate everything using your tools, workflows, and real
            project data so you can see exactly how it works in your environment.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["No manual PM work", "Real project data", "Your tools & workflows", "Fast delivery"].map((feat) => (
              <span
                key={feat}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-white border border-[#625FD0]/20 text-[#625FD0] shadow-sm"
              >
                ✓ {feat}
              </span>
            ))}
          </div>

          {/* Disclaimer + Links */}
          <div className="rounded-xl border border-[#625FD0]/15 bg-white/70 backdrop-blur-sm px-5 py-4 text-sm text-[#6B6890]">
            <p className="leading-relaxed">
              We may request additional information to verify your identity and
              better understand your organization's needs.
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              <span className="text-[#9C9AB8]">Learn more in our</span>
              {[
                { href: "/doc", label: "Documentation" },
                { href: "/FAQ", label: "FAQ" },
                { href: "/resource", label: "Resource Hub" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="font-medium text-[#625FD0] underline underline-offset-2 decoration-[#625FD0]/40 hover:decoration-[#625FD0] transition-all"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT — Calendly iframe (no widget.js) */}
        <section className="w-full">
          <div className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(98,95,208,0.18)] ring-1 ring-[#625FD0]/20 bg-white relative"
            style={{ height: "clamp(520px, 70vh, 700px)" }}
          >
            {/* Loading skeleton */}
            {!loaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white gap-4">
                <div className="h-10 w-10 rounded-full border-4 border-[#625FD0]/20 border-t-[#625FD0] animate-spin" />
                <p className="text-sm text-[#9C9AB8] font-medium">Loading scheduler…</p>
              </div>
            )}

            <iframe
              src="https://calendly.com/nirmalsupermanageragi/60min?hide_gdpr_banner=1&primary_color=625fd0"
              width="100%"
              height="100%"
              frameBorder="0"
              loading="eager"
              onLoad={() => setLoaded(true)}
            />
          </div>

          {/* Trust note */}
          <p className="mt-4 text-center text-xs text-[#9C9AB8]">
            🔒 Secure scheduling powered by Calendly · Usually responds within 24h
          </p>
        </section>
      </div>
    </main>
  );
}