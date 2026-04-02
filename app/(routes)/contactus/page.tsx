"use client";

import Link from "next/link";
import { MessageCircle, Newspaper, Handshake } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [calLoaded, setCalLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F3FC] px-4 py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#625FD0]/40 bg-[#625FD0]/10 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#625FD0] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#625FD0]">
              Get in Touch
            </span>
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl  text-[#1C1A3A] mb-3 tracking-tight"
            
          >
            Ways to reach us
          </h1>
          <p className="text-[#4A4770] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have questions or need personalized assistance? We're here to help.
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5">

          {/* Main Card */}
          <div className="md:col-span-3 bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-[#625FD0]/10 flex flex-col">
            {/* Hero banner */}
            <div className="relative h-52 bg-gradient-to-br from-[#625FD0]/20 via-[#8B88E0]/10 to-[#F4F3FC] flex items-center justify-center overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[#625FD0]/10" />
              <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#8B88E0]/15" />
              <Link
                href="/get-in-touch"
                className="relative flex items-center gap-2 bg-white text-[#625FD0] font-semibold text-sm px-5 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-[#625FD0] hover:text-white transition-all duration-200 ring-1 ring-[#625FD0]/20"
              >
                <MessageCircle size={16} />
                Talk to an expert
              </Link>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h2
                className="text-2xl lg:text-3xl  text-[#1C1A3A] mb-2"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Contact our expert team
              </h2>
              <p className="text-[#6B6890] text-sm leading-relaxed mb-6">
                Explore the platform, AI solutions, or create an account instantly.
              </p>
              <Link
                href="/get-in-touch"
                className="inline-flex items-center gap-2 bg-[#625FD0] hover:bg-[#4f4cb8] text-white text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-lg transition-all duration-200 w-fit mt-auto shadow-md shadow-[#625FD0]/30"
              >
                <MessageCircle size={14} />
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-2 flex flex-col gap-5">

            {/* Press */}
            <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-[#625FD0]/10 flex flex-col">
              <div className="h-10 w-10 rounded-xl bg-[#625FD0]/10 flex items-center justify-center mb-4">
                <Newspaper size={18} className="text-[#625FD0]" />
              </div>
              <h2
                className="text-xl lg:text-2xl  text-[#1C1A3A] mb-1"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Press + Media
              </h2>
              <p className="text-[#6B6890] text-sm leading-relaxed mb-6">
                Contact our press and media team.
              </p>
              <Link
                href="/contact-form"
                className="inline-flex items-center gap-2 bg-[#625FD0] hover:bg-[#4f4cb8] text-white text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all duration-200 w-fit mt-auto shadow-sm shadow-[#625FD0]/20"
              >
                Submit an Enquiry
              </Link>
            </div>

            {/* Partnership */}
            <div className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-[#625FD0]/10 flex flex-col">
              <div className="h-10 w-10 rounded-xl bg-[#625FD0]/10 flex items-center justify-center mb-4">
                <Handshake size={18} className="text-[#625FD0]" />
              </div>
              <h2
                className="text-xl lg:text-2xl  text-[#1C1A3A] mb-1"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Partnership team
              </h2>
              <p className="text-[#6B6890] text-sm leading-relaxed mb-6">
                Learn how partnerships can bring you value.
              </p>
              <div className="flex gap-3 mt-auto flex-wrap">
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 bg-[#625FD0] hover:bg-[#4f4cb8] text-white text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-lg transition-all duration-200 shadow-sm shadow-[#625FD0]/20"
                >
                  Become a Partner
                </Link>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 border-2 border-[#625FD0] text-[#625FD0] text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-lg hover:bg-[#625FD0] hover:text-white transition-all duration-200"
                >
                  Partner Program
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Section */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-[#625FD0]/10">
          <div className="px-6 sm:px-8 pt-8 pb-4">
            <h2
              className="text-2xl sm:text-3xl  text-[#1C1A3A] mb-1"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Schedule a Meeting
            </h2>
            <p className="text-[#6B6890] text-sm">
              Pick a time that works best for you.
            </p>
          </div>

          {/* Iframe wrapper */}
          <div className="relative w-full h-[620px] sm:h-[700px] lg:h-[750px]">
            {!calLoaded && (
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
              onLoad={() => setCalLoaded(true)}
            />
          </div>

          <p className="text-center text-xs text-[#9C9AB8] py-4">
            🔒 Secure scheduling powered by Calendly · Usually responds within 24h
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;