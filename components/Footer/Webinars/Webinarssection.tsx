"use client";

import Link from "next/link";
import { Play, Calendar, Clock } from "lucide-react";

const webinars = [
  {
    title: "How High-Performance Teams Operate",
    description:
      "Learn how top organizations structure communication, decision making, and management systems to scale high-performance teams.",
    date: "March 28, 2026",
    time: "2:00 PM EST",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "The Future of AI-Driven Management",
    description:
      "Discover how AI is transforming project coordination, team leadership, and decision-making inside modern organizations.",
    date: "April 10, 2026",
    time: "1:00 PM EST",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Scaling Leadership Across Growing Teams",
    description:
      "A practical guide for founders and executives managing fast-growing organizations.",
    date: "April 24, 2026",
    time: "3:00 PM EST",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function WebinarsSection() {
  return (
    <section className="relative bg-white  overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <h1 className="text-3xl lg:text-5xl  tracking-tight text-zinc-900 ">
              Webinars
            </h1>

            <p className="mt-4 text-zinc-600 max-w-xl">
              Join our expert-led sessions to learn how modern teams build
              high-performance management systems, scale leadership, and
              leverage AI for organizational alignment.
            </p>
          </div>

          <Link
            href="/#"
            className="inline-flex justify-center px-5 py-3 text-white  items-center gap-2 text-sm font-medium bg-[#625FD0] rounded-lg hover:bg-indigo-700 transition"
          >
            View all webinars
          </Link>
        </div>

        {/* Webinar Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <div
              key={index}
              className="group bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={webinar.image}
                  alt={webinar.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg  text-zinc-900 mb-2 leading-snug group-hover:text-[#625FD0] transition">
                  {webinar.title}
                </h3>

                <p className="text-sm text-zinc-600 mb-4">
                  {webinar.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-5">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {webinar.date}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {webinar.time}
                  </span>
                </div>

                {/* CTA */}
                <button className="inline-flex px-5 py-2.5 text-white items-center gap-2 text-sm font-medium bg-[#625FD0] rounded-lg hover:bg-indigo-700 transition">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
