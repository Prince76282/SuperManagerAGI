"use client";

import { useState, type ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";

type FeaturedNewsItem = {
  tag: string;
  title: string;
  date: string;
  href: string;
  img: string;
};

type MediaItem = {
  id: number;
  title: string;
  date: string;
  img: string;
  href: string;
};

type PressRelease = {
  id: number;
  title: string;
  date: string;
  href: string;
};

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const featured = {
  tag: "FEATURED",
  title:
    "SuperManagerAGI launches the next generation AI workforce platform designed for autonomous enterprise operations",
  date: "March 1, 2026",
  href: "/learnmore/",
  img: "/Image/101.png",
} satisfies FeaturedNewsItem;

const mediaCoverage: MediaItem[] = [
  {
    id: 1,

    title:
      "SuperManagerAGI introduces AI agents capable of managing complex enterprise workflows",
    date: "February 24, 2026",
    img: "/Image/101.png",
    href: "#",
  },
  {
    id: 2,

    title:
      "How SuperManagerAGI is transforming enterprise productivity with AI powered management",
    date: "February 22, 2026",
    img: "/Image/101.png",
    href: "#",
  },
  {
    id: 3,

    title:
      "AI managers are coming: SuperManagerAGI introduces autonomous operations platform",
    date: "February 18, 2026",
    img: "/Image/101.png",
    href: "#",
  },
];

const pressReleases: PressRelease[] = [
  {
    id: 1,
    title:
      "SuperManagerAGI raises strategic investment to accelerate enterprise AI transformation",
    date: "February 28, 2026",
    href: "#",
  },
  {
    id: 2,
    title:
      "SuperManagerAGI launches AI platform to automate digital operations for global enterprises",
    date: "January 20, 2026",
    href: "#",
  },
  {
    id: 3,
    title:
      "SuperManagerAGI partners with leading cloud providers to expand AI infrastructure",
    date: "January 5, 2026",
    href: "#",
  },
];

function FeaturedCard({ item }: { item: FeaturedNewsItem }) {
  return (
    <div>
      <div className="grid md:grid-cols-2 rounded-3xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition">
        <div className="p-6 md:p-8 flex flex-col justify-between gap-6">
          <h2 className="text-2xl md:text-3xl  text-black leading-snug">
            {item.title}
          </h2>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{item.date}</span>

            <Link
              href={item.href}
              className="px-3 py-2 bg-[#625FD0] text-white rounded-lg text-sm font-semibold"
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="relative min-h-[250px]">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function MediaCard({ item }: { item: MediaItem }) {
  return (
    <div>
      <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition">
        <div className="relative h-44">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5 flex flex-col gap-4">
          <span className="text-md  text-black group-hover:text-[#625FD0] line-clamp-3">
            {item.title}
          </span>

          <div className="flex justify-between items-center text-xs text-gray-500">
            {item.date}

            <Link
              href={item.href}
              className="px-3 py-2 bg-[#625FD0] text-white rounded-lg text-sm font-semibold"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PressCard({ item }: { item: PressRelease }) {
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl transition">
        <span className="text-md  text-black group-hover:text-[#625FD0] line-clamp-3">
          {item.title}
        </span>

        <div className="flex justify-between items-center text-xs text-gray-500">
          {item.date}

          <Link
            href={item.href}
            className="px-3 py-2 bg-[#625FD0] text-white rounded-lg text-sm font-semibold"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  return (
    <input
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full md:w-72 px-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#625FD0]"
    />
  );
}

export default function NewsroomPage() {
  const [mediaSearch, setMediaSearch] = useState("");
  const [pressSearch, setPressSearch] = useState("");

  const filteredMedia = mediaCoverage.filter((item) =>
    item.title.toLowerCase().includes(mediaSearch.toLowerCase()),
  );

  const filteredPress = pressReleases.filter((item) =>
    item.title.toLowerCase().includes(pressSearch.toLowerCase()),
  );

  return (
    <div className="bg-white min-h-screen py-15">
      {/* Header */}

      <div className="max-w-[1200px] mx-auto p-8 ">
        <h1 className="text-3xl md:text-5xl  text-black">Newsroom</h1>

        <p className="text-gray-600 mt-3">
          Latest announcements, press releases and media coverage
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-16 flex flex-col gap-16">
        <FeaturedCard item={featured} />

        <section className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl lg:text-3xl  text-black">Media Coverage</h2>

            <SearchBar
              value={mediaSearch}
              onChange={setMediaSearch}
              placeholder="Search media"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* PRESS RELEASES */}

        <section className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl lg:text-3xl  text-black">Press Releases</h2>

            <SearchBar
              value={pressSearch}
              onChange={setPressSearch}
              placeholder="Search press releases"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPress.map((item) => (
              <PressCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
