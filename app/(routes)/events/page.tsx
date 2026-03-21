"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  ArrowUpRight,
  Wifi,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

// ── Data ────────────────────────────────────────────────────────────────────

const FEATURED_EVENT = {
  badge: "Featured Event",
  title: "SuperManager AGI Summit 2026",
  description:
    "Join founders, operators, and AI leaders exploring how AGI-powered teams are transforming business operations, customer support, logistics, and analytics.",
  date: "May 22, 2026",
  location: "Bangalore",
  type: "In-Person",
  href: "https://supermanager.ai/events/agi-summit",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
};

const ALL_EVENTS = [
  {
    id: 1,
    title: "AI Operations for D2C Brands",
    description:
      "Discover how fast-growing D2C brands automate logistics, NDR resolution, and WhatsApp support using SuperManager AGI.",
    date: "March 28, 2026",
    location: "Mumbai",
    country: "India",
    type: "In-Person",
    href: "https://supermanager.ai/events/d2c-ai-ops",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  },
  {
    id: 2,
    title: "Automating Business Operations with AGI",
    description:
      "A virtual workshop showing how AI agents inside SuperManager AGI automate order management, payments, and analytics for startups.",
    date: "April 10, 2026",
    location: "Online",
    country: "Global",
    type: "Virtual",
    href: "https://supermanager.ai/events/agi-workshop",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 3,
    title: "AI Leaders Roundtable",
    description:
      "An exclusive founder and CTO roundtable discussing how AGI orchestration will define the next generation of companies.",
    date: "April 18, 2026",
    location: "Delhi",
    country: "India",
    type: "In-Person",
    href: "https://supermanager.ai/events/ai-leaders",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
  },
];

const PAST_EVENTS = [
  {
    title: "SuperManager AGI Product Launch",
    type: "Virtual",
    date: "12 Feb 26",
  },
  { title: "AI for E-commerce Operations", type: "Virtual", date: "28 Jan 26" },
  {
    title: "Founder Meetup: AI-Driven Startups",
    type: "In-Person",
    date: "16 Dec 25",
  },
  {
    title: "Scaling D2C Brands with Automation",
    type: "Virtual",
    date: "03 Dec 25",
  },
  { title: "AI Customer Support Summit", type: "Virtual", date: "20 Nov 25" },
  {
    title: "SuperManager AGI City Tour – Bangalore",
    type: "In-Person",
    date: "04 Nov 25",
  },
  {
    title: "SuperManager AGI City Tour – Mumbai",
    type: "In-Person",
    date: "18 Oct 25",
  },
  { title: "AI Operations Bootcamp", type: "Virtual", date: "30 Sep 25" },
  {
    title: "Future of Autonomous Business Teams",
    type: "Virtual",
    date: "12 Sep 25",
  },
  { title: "SuperManager AGI Founder AMA", type: "Virtual", date: "22 Aug 25" },
];

// ── Sub-components ───────────────────────────────────────────────────────────

function TypeBadge({ type }) {
  const isVirtual = type === "Virtual";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${
        isVirtual
          ? "bg-gray-100 border-[#625FD0] text-[#625FD0]"
          : "bg-gray-100 border-[#625FD0] text-[#625FD0]"
      }`}
    >
      {isVirtual ? <Wifi size={11} /> : <Users size={11} />}
      {type}
    </span>
  );
}

function ViewEventLink({ href }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="self-start inline-flex items-center gap-2  text-sm font-semibold px-5 py-2.5 rounded-lg bg-[#625FD0] text-white transition-all duration-200 group shadow-md"
    >
      View Eventtext-3xl
    </Link>
  );
}

function FeaturedEvent({ event }) {
  return (
    <div className="rounded-2xl overflow-hidden border text-gray-900 border-gray-200  ">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Text */}
        <div className="p-8 md:p-10 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-5">
            <span className="self-start text-xs  tracking-widest uppercase bg-[#625FD0]  text-white px-3 py-1 rounded-lg">
              {event.badge}
            </span>

            <div>
              <h2 className="text-3xl md:text-3xl  text-gray-900 leading-tight mb-3">
                {event.title}
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 font-semibold text-slate-500">
              <span className="inline-flex items-center gap-1.5 text-sm   px-3 py-1.5 rounded-full border border-white/10">
                <Calendar size={15} />
                {event.date}
              </span>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500  px-3 py-1.5 rounded-full border border-white/10">
                <MapPin size={15} />
                {event.location}
              </span>

              <TypeBadge type={event.type} />
            </div>
          </div>

          <Link
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2  text-sm font-semibold px-5 py-2.5 rounded-lg bg-[#625FD0] text-white transition-all duration-200 group shadow-md"
          >
            View Event
          </Link>
        </div>

        {/* Image */}
        <div className="relative min-h-[240px] md:min-h-0 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

function EventCard({ event }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden grid md:grid-cols-5 gap-0">
      {/* Text */}
      <div className="md:col-span-3 p-7 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <TypeBadge type={event.type} />

            <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              <Calendar size={11} />
              {event.date}
            </span>
          </div>

          <h3 className="text-xl  text-gray-900 leading-snug">{event.title}</h3>

          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
            {event.description}
          </p>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3">
          <ViewEventLink href={event.href} />

          <span className="inline-flex items-center gap-1 text-xs text-gray-400">
            <MapPin size={12} />
            {event.location}, {event.country}
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="md:col-span-2 relative min-h-[200px] md:min-h-0 bg-gray-100 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}

function PastEventItem({ event }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5 border-b border-gray-100 last:border-0">
      <span className="text-sm font-medium text-gray-700 flex-1">
        {event.title}
      </span>

      <div className="flex items-center gap-2 shrink-0">
        <TypeBadge type={event.type} />

        <span className="inline-flex items-center gap-1 text-xs text-gray-400">
          <Calendar size={11} />
          {event.date}
        </span>
      </div>
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function GlobalEventsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showPast, setShowPast] = useState(false);

  const filters = ["All", "In-Person", "Virtual"];

  const filteredEvents = ALL_EVENTS.filter((e) => {
    const matchesFilter = activeFilter === "All" || e.type === activeFilter;

    const q = search.toLowerCase();

    const matchesSearch =
      !q ||
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.location.toLowerCase().includes(q);

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 ">
      {/* Hero */}
      <section className="bg-white ">
        <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl  text-gray-900 tracking-tight mb-4">
              SuperManager AGI Events
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed">
              Meet the builders shaping the future of AI-driven operations. Join
              SuperManager AGI events to learn how intelligent teams are
              transforming how modern companies run.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col gap-12">
        <FeaturedEvent event={FEATURED_EVENT} />

        {/* All Events */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl  text-gray-900">All events</h2>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex gap-1.5 bg-gray-100 p-1 rounded-full">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-150 ${
                      activeFilter === f
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search events…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 pr-4 py-2 text-sm rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 w-48"
                />
              </div>
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="flex flex-col gap-5">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400 text-sm">
              No events match your search.
            </div>
          )}
        </section>

        {/* Past Events */}
        <section>
          <button
            onClick={() => setShowPast((p) => !p)}
            className="flex items-center gap-2 text-xl  text-gray-900 hover:text-[#625FD0] transition-colors group mb-1"
          >
            Past events
            {showPast ? (
              <ChevronUp
                size={18}
                className="text-gray-400 group-hover:text-[#625FD0]"
              />
            ) : (
              <ChevronDown
                size={18}
                className="text-gray-400 group-hover:text-[#625FD0]"
              />
            )}
          </button>

          {showPast && (
            <div className="mt-4 bg-white border border-gray-200 rounded-2xl px-6 py-2 shadow-sm divide-y divide-gray-100">
              {PAST_EVENTS.map((event, i) => (
                <PastEventItem key={i} event={event} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
