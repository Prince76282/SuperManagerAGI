"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

const allItems = [
  {
    id: 1,
    imageSrc: "/awards/g2-summer-2024.webp",
    imageAlt: "G2 Crowd Summer 2024",
    tag: "G2 Crowd · 2024",
    title: "Named a leader by G2 Crowd in 2024 Summer Report",
    body: "G2 Crowd Summer Report 2024 recognizes Kore.ai as a leader for AI Chatbots, Intelligent Virtual Assistants (IVA), Bot platforms, Chatbots & Conversational Support.",
    href: "#",
  },
  {
    id: 2,
    imageSrc: "/awards/g2-spring-2024.webp",
    imageAlt: "G2 Crowd Spring 2024",
    tag: "G2 Crowd · 2024",
    title: "Named a leader by G2 Crowd in 2024 Spring Report",
    body: "G2 Crowd Spring Report 2024 recognizes Kore.ai as a leader for Intelligent Virtual Assistants (IVA), Bot platforms, Chatbots & Conversational Support.",
    href: null,
  },
  {
    id: 3,
    imageSrc: "/awards/frost-2023.webp",
    imageAlt: "Frost & Sullivan 2023",
    tag: "Frost & Sullivan · 2023",
    title: "Award for 2023 Product Leadership in Healthcare",
    body: "Kore.ai recognized by Frost & Sullivan with the 2023 North American Product Leadership Award.",
    href: "#",
  },
  {
    id: 4,
    imageSrc: "/awards/g2-winter-2023.webp",
    imageAlt: "G2 Crowd Winter 2023",
    tag: "G2 Crowd · 2023",
    title: "Named a leader by G2 Crowd in 2023 Winter Report",
    body: "G2 Crowd Winter Report 2023 recognizes Kore.ai as a leader for Intelligent Virtual Assistants software.",
    href: "#",
  },
  {
    id: 5,
    imageSrc: "/awards/gartner-2023.webp",
    imageAlt: "Gartner Magic Quadrant 2023",
    tag: "Gartner® · 2023",
    title: "Named a leader in 2023 Gartner® Magic Quadrant™",
    body: "Kore.ai Named a Leader in 2023 Gartner® Magic Quadrant™ for Enterprise Conversational AI Platforms.",
    href: "#",
  },
  {
    id: 6,
    imageSrc: "/awards/forrester-2022.svg",
    imageAlt: "Forrester Wave 2022",
    tag: "Forrester Wave™ · 2022",
    title: "Named a strong performer in 2022 Forrester Wave",
    body: "Recognized as a strong performer in Forrester Wave: Chatbots for IT Operations.",
    href: "#",
  },
];

const PAGE_SIZE = 6;

export default function AwardsGrid() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = allItems.slice(0, visible);
  const hasMore = visible < allItems.length;

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl  text-black leading-tight">
              Track record of <span className="text-[#625FD0]">excellence</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-indigo-50 border border-indigo-200">
            <span className="text-xs font-semibold text-[#625FD0]">
              {allItems.length} recognitions
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-gray-200 hover:border-gray-300 transition bg-white overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-44 sm:h-48 flex items-center justify-center p-6 bg-gray-50">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={200}
                  height={120}
                  className="object-contain h-full w-auto"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-3">
               

                <h3 className="text-lg font-semibold text-black leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                  {item.body}
                </p>

                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-2 py-2 text-white font-semibold  transition"
                  >
                    Learn more
                    <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <span className="text-md text-gray-600 mt-2">
                    Coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Show More */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:border-gray-400 text-sm font-semibold transition"
            >
              Show more
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}