"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Video,
  Clock,
  Calendar,
} from "lucide-react";

const upcomingWebinars = [
  {
    id: 1,
    type: "Webinar",
    date: "26 Mar 2026",
    time: "11:30 AM EST",
    image: "/webinars/webinar1.webp",
    title:
      "From the field HIMSS 2026: how pre-built agentic applications are driving measurable outcomes in healthcare",
    href: "/learnmore",
  },
  {
    id: 2,
    type: "Webinar",
    date: "10 Apr 2026",
    time: "02:00 PM EST",
    image: "/webinars/webinar2.webp",
    title: "From search to action: what makes agentic AI work in practice",
    href: "/learnmore",
  },
  {
    id: 3,
    type: "Webinar",
    date: "22 Apr 2026",
    time: "11:00 AM EST",
    image: "/webinars/webinar3.webp",
    title:
      "AI Pulse Q2 2026: enterprise AI trends, vendor innovations & governance insights",
    href: "/learnmore",
  },
  {
    id: 4,
    type: "Webinar",
    date: "05 May 2026",
    time: "10:00 AM EST",
    image: "/webinars/webinar4.webp",
    title:
      "Scaling agentic AI: lessons from the frontlines of enterprise deployment",
    href: "/learnmore",
  },
];

function WebinarCard({ type, date, time, image, title, href }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex-shrink-0 w-72 lg:w-80"
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Tags */}
        <div className="flex items-center gap-3 flex-wrap text-xs">
          <span className="inline-flex items-center gap-1.5 text-gray-500 ">
            <Video className="w-5 h-5 text-[#625FD0]" />
            {type}
          </span>

          <span className="inline-flex items-center gap-1.5 text-gray-500">
            <Calendar className="w-5 h-5 text-[#625FD0]" />
            {date}
          </span>

          <span className="inline-flex items-center gap-1.5 text-zinc-500">
            <Clock className="w-5 h-5 text-[#625FD0]" />
            {time}
          </span>
        </div>

        {/* Title */}
        <span className="text-sm font-medium text-gray-900 leading-snug line-clamp-2 group-hover:text-[#625FD0] transition">
          {title}
        </span>
      </div>
    </Link>
  );
}

export default function UpcomingWebinars() {
  const scrollRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const SCROLL = 340;

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  const scrollPrev = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL, behavior: "smooth" });
  };

  const scrollNext = () => {
    scrollRef.current?.scrollBy({ left: SCROLL, behavior: "smooth" });
  };

  return (
    <section className=" bg-zinc-50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl lg:text-5xl text-zinc-900 tracking-tight">
                Upcoming <span className="text-[#625FD0]"> webinars </span>
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={atStart}
                className="w-10 h-10 rounded-full border-2 border-[#625FD0] bg-white flex items-center justify-center text-[#625FD0] hover:border-[#625FD0] hover:text-[#625FD0] disabled:opacity-30 transition shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={scrollNext}
                disabled={atEnd}
                className="w-10 h-10 rounded-full border-2 border-[#625FD0] bg-white flex items-center justify-center text-[#625FD0] hover:border-[#625FD0] hover:text-[#625FD0] disabled:opacity-30 transition shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {upcomingWebinars.map((webinar) => (
              <div key={webinar.id} className="snap-start">
                <WebinarCard {...webinar} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
