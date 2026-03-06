"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Layers,
  PlayCircle,
} from "lucide-react";

export default function SupermanageResources() {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* ================= HERO BLOCK ================= */}
        <div className="grid lg:grid-cols-2 gap-16 items-center  justify-between mb-24">

         
          <div>
           
            <h2 className="text-3xl md:text-4xl lg:text-5xl  leading-tight mb-6">
              Everything you need to build and deploy autonomous AGI leadership
            </h2>

            <p className="text-black/70 text-lg mb-8 max-w-xl">
              Explore the Supermanage AGI platform documentation ,architecture,
              orchestration models, decision engines, autonomous workflows, and
              enterprise deployment strategies.
            </p>

            
          </div>

          {/* Right Image */}
          <div className="relative h-[420px] rounded-2xl overflow-hidden border-2 border-[#625FD0]">
            <Image
              src="/Image/support2.png"
              alt="Supermanage AGI Documentation"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* ================= RESOURCE CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* Academy */}
          <ResourceCard
            icon={<GraduationCap size={22} />}
            title="AGI Leadership Academy"
            description="Master autonomous coordination systems, agent orchestration, and AGI-driven executive decision frameworks."
            link="/academy"
          />

          {/* Community */}
          <ResourceCard
            icon={<MessageSquare size={22} />}
            title="AGI Community Forum"
            description="Collaborate with founders, engineers, and operators building the future of AI-led organizations."
            link="/community"
          />

          {/* Training */}
          <ResourceCard
            icon={<Layers size={22} />}
            title="Enterprise Training"
            description="Hands-on labs, enterprise onboarding programs, and real-world AGI deployment simulations."
            link="/training"
          />
        </div>

        {/* ================= MARKETPLACE & VIDEOS ================= */}
        <div className="grid lg:grid-cols-2 gap-8">

          <LargeCard
            icon={<Layers size={22} />}
            title="AGI Marketplace"
            description="Deploy pre-configured AGI leaders, autonomous workflow templates, and decision intelligence modules to accelerate time-to-value."
            link="/marketplace"
          />

          <LargeCard
            icon={<PlayCircle size={22} />}
            title="Product & Architecture Videos"
            description="Watch deep dives into AGI governance models, real-world deployment case studies, and product walkthroughs."
            link="/videos"
          />
        </div>

      </div>
    </section>
  );
}

/* ================= SMALL CARD ================= */

function ResourceCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="group border-2 border-[#625FD0] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#625FD0]/10 text-[#625FD0] mb-6">
        {icon}
      </div>

      <h3 className="text-lg font-semibold mb-3">{title}</h3>

      <p className="text-black/70 mb-6">{description}</p>

      <Link
        href={link}
        className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
      >
        Learn More
      
      </Link>
    </div>
  );
}

/* ================= LARGE CARD ================= */

function LargeCard({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="group border-2 border-[#625FD0] rounded-2xl p-10 hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#625FD0]/10 text-[#625FD0] mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <p className="text-black/70 mb-8 max-w-lg">{description}</p>

      <Link
        href={link}
        className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
      >
        Explore
       
      </Link>
    </div>
  );
}