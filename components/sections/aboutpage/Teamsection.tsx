"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

type Member = {
  name: string;
  role: string;

  photo: string;
  linkedin: string;
};

const team: Member[] = [
  {
    name: "Nimal Nambir",
    role: "CEO",
    photo: "/Image/about/Nimal.jpg",
    linkedin: "https://www.linkedin.com/in/nirmal-nambiar-778918228/",
  },
  {
    name: "Aditya Sharma ",
    role: "CTO ",
    photo: "/Image/about/Aditya.jpg",
    linkedin: "https://www.linkedin.com/in/aditya5harma/",
  },
  // {
  //   name: "Satish Ramanan ",
  //   role: " CBO ",
  //   photo: "/Image/about/Satish.jpg",
  //   linkedin: "https://www.linkedin.com/in/satishramanan/",
  // },
  {
    name: "Robert perry",
    role: "Partner",
    photo: "/Image/about/Robert.jpg",
    linkedin: "https://www.linkedin.com/in/bobbypaul101/",
  },
];

const TeamCard = React.memo(function TeamCard({
  member,
  priority = false,
}: {
  member: Member;
  priority?: boolean;
}) {
  return (
    <div className="group flex max-w-[1200px] flex-col gap-4 transition-transform duration-300 hover:-translate-y-1">
      {/* IMAGE */}
      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black/5">
        <Link
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
          className="absolute inset-0 z-10"
        />

        <Image
          src={member.photo}
          alt={`${member.name} portrait`}
          fill
          priority={priority}
          sizes="(max-width:768px)50vw,20vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105 will-change-transform transform-gpu"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
      </div>

      {/* INFO */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[18px]  text-black leading-tight">
              {member.name}
            </p>
            <p className="text-[14px] text-black/50 mt-0.5">{member.role}</p>
          </div>

          <span className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#625FD0] flex items-center justify-center text-black/40 group-hover:text-white group-hover:bg-[#625FD0] transition-all duration-300">
            <Link href={member.linkedin}>
              <FaLinkedinIn size={20} />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
});

export default function TeamSection() {
  return (
    <section id="leadership" className="bg-[#F0F6F9] py-16 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-3xl md:text-5xl  text-black tracking-tight leading-tight">
              Built by Leaders Who Scale Companies
            </h2>
          </div>

          <p className="text-md md:text-lg text-black/50 leading-relaxed max-w-md">
            The SuperManagerAGI leadership team has built, scaled, and led
            global technology companies , delivering innovation across AI,
            enterprise platforms, and infrastructure.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-x-6 gap-y-12">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} priority={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
