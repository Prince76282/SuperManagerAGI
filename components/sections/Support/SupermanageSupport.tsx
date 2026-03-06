"use client";

import Link from "next/link";
import {
  LifeBuoy,
  Phone,
  Activity,
  ArrowUpRight,
} from "lucide-react";

export default function SupermanageSupport() {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">


        <div className="max-w-3xl mb-16">
         

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Talk to the Supermanage AGI Team
          </h2>

          <p className="text-black/70 text-lg">
            Whether you're deploying autonomous AGI leadership or exploring enterprise adoption,
            our team is here to provide strategic guidance and technical support.
          </p>
        </div>

        {/* ================= SUPPORT GRID ================= */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* ================= CONTACT BLOCK ================= */}
          <div className="relative border-2 border-[#625FD0] rounded-2xl p-10 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#625FD0]/10 text-[#625FD0]">
                <Phone size={22} />
              </div>
              <h3 className="text-xl font-semibold">Enterprise Support Line</h3>
            </div>

            <p className="text-black/70 mb-6">
              Speak directly with our AGI deployment specialists for onboarding,
              architecture consultation, and executive enablement.
            </p>

            <Link
              href="/support"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
            >
              Get Dedicated Support
              
            </Link>

            {/* Phone Numbers */}
            <div className="space-y-4  pt-6">
              <div className="flex justify-between">
                <span className="font-medium">US</span>
                <Link href="tel:+18449248973" className="text-black/70 hover:text-[#625FD0]">
                  +1 (408) 471-2875
                </Link>
              </div>

              
            </div>
          </div>

          {/* ================= STATUS BLOCK ================= */}
          <div className="relative border-2 border-[#625FD0] rounded-2xl p-10 hover:shadow-xl transition-all duration-300">

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#625FD0]/10 text-[#625FD0]">
                <Activity size={22} />
              </div>
              <h3 className="text-xl font-semibold">Platform Status</h3>
            </div>

            <p className="text-black/70 mb-6">
              Monitor real-time system health, orchestration uptime,
              and AGI infrastructure performance.
            </p>

            <Link
              href="/status"
              className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
            >
              Subscribe to Updates
              
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}