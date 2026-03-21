"use client";

import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

const webinars = [
  {
    id: 1,
    badge: "Featured",
    image: "/webinars/webinar1.webp",
    title:
      "From the field HIMSS 2026: how pre-built agentic applications are driving measurable outcomes in healthcare",
    description: null,
    href: "/learnmore",
  },
  {
    id: 2,
    badge: "Featured",
    image: "/webinars/webinar2.webp",
    title: "From search to action: what makes agentic AI work in practice",
    description:
      "Recorded live at AWS re:Invent, this is a candid conversation with Rowan Curran, Principal Analyst at Forrester, discussing real-world agentic AI deployments.",
    href: "/learnmore",
  },
];

function WebinarCard({ badge, image, title, description, href }) {
  return (
    <article className="group relative flex flex-col rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Badge */}
      <span className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-semibold rounded-full bg-[#625FD0] text-white shadow">
        {badge}
      </span>

      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-zinc-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <h3 className="text-lg font-semibold text-zinc-900 leading-snug line-clamp-3">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}

        {/* CTA */}
        <div className="mt-auto pt-4">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#625FD0] hover:text-indigo-800 transition group/btn"
          >
            <span className="w-8 h-8 rounded-full border border-indigo-200 bg-indigo-50 flex items-center justify-center group-hover/btn:bg-[#625FD0] group-hover/btn:border-[#625FD0] transition">
              <Play className="w-3 h-3 fill-[#625FD0] text-[#625FD0] ml-0.5 group-hover/btn:text-white group-hover/btn:fill-white transition" />
            </span>
            Watch webinar
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedWebinars() {
  return (
    <section className=" bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl lg:text-5xl tracking-tight text-zinc-900">
            Featured<span className="text-[#625FD0]"> webinars </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {webinars.map((webinar) => (
            <WebinarCard key={webinar.id} {...webinar} />
          ))}
        </div>
      </div>
    </section>
  );
}
