"use client";

import React from "react";
import Script from "next/script";
import Link from "next/link";
import {
  MessageCircle,
  Newspaper,
  Handshake,
  HelpCircle,
  FileText,
  ArrowRight,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#f0f4f8] px-4 py-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-3xl lg:text-5xl text-gray-900 mb-2">
            Ways to reach us
          </h1>
          <p className="text-gray-500 text-md sm:text-md">
            Have questions or need personalized assistance? We're here to help.
          </p>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mb-5">
          {/* Main Card */}
          <div className="md:col-span-3 bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col">
            {/* Hero */}
            <div className="relative h-52 bg-gradient-to-br from-sky-100 via-blue-50 to-slate-100 flex items-center justify-center">
              <Link
                href="/get-in-touch"
                className="flex items-center gap-2 bg-white text-gray-800 text-md font-medium px-5 py-3 rounded-full shadow hover:shadow-lg transition"
              >
                <MessageCircle size={16} />
                Talk to an expert
              </Link>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl lg:text-3xl  text-gray-900 mb-2">
                Contact our expert team
              </h2>
              <p className="text-gray-500 text-md mb-5">
                Explore the platform, AI solutions, or create an account
                instantly.
              </p>

              <Link
                href="/get-in-touch"
                className="inline-flex items-center gap-2 bg-[#625FD0] text-white text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-md  transition w-fit mt-auto"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {/* Press */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
              <h2 className="text-2xl  lg:text-3xl text-gray-900 mb-1">
                Press + Media
              </h2>
              <p className="text-gray-500 text-md mb-5">
                Contact our press and media team.
              </p>

              <Link
                href="/learnmore"
                className="inline-flex items-center gap-2 bg-[#625FD0] text-white text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-md  transition w-fit mt-auto"
              >
                Submit an Enquiry
              </Link>
            </div>

            {/* Partnership */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
              <h2 className="text-2xl  lg:text-3xl text-gray-900 mb-1">
                Partnership team
              </h2>
              <p className="text-gray-500 text-md mb-5">
                Learn how partnerships can bring you value.
              </p>

              <div className="flex gap-3 mt-auto flex-wrap">
                <Link
                  href="/learnmore"
                  className="inline-flex items-center gap-2 bg-[#625FD0] text-white text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-md  transition"
                >
                  Become a Partner
                </Link>

                <Link
                  href="/learnmore"
                  className="inline-flex items-center gap-2 border-2 border-[#625FD0] text-[#625FD0] text-xs font-semibold uppercase tracking-widest px-4 py-2.5 rounded-md hover:text-white hover:bg-[#625FD0] transition"
                >
                  Partner Program
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 sm:px-8 pt-8 pb-4 ">
            <h2 className="text-xl sm:text-2xl lg:text-3xl  text-gray-900 mb-1">
              Schedule a Meeting
            </h2>
            <p className="text-gray-500 text-md">
              Pick a time that works best for you.
            </p>
          </div>

          <div
            className="calendly-inline-widget w-full h-[650px] sm:h-[700px] lg:h-[800px]"
            data-url="https://calendly.com/nirmalsupermanageragi/60min?back=1&month=2026-03"
          />
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
};

export default ContactPage;
