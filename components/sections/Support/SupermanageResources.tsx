"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, MessageSquare, Layers, PlayCircle } from "lucide-react";

export default function SupermanageResources() {
  return (
    <section className="bg-white text-black ">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center  justify-between mb-24">
          <div>
            <h2 className="text-3xl md:text-3xl lg:text-5xl  leading-tight mb-6">
              Everything You Need to Deploy and Scale the Vibe Working Platform
            </h2>

            <p className="text-black/70 text-lg mb-8 max-w-xl">
              Explore platform documentation, ADA integration guides, specialist agent configuration, deployment frameworks, Beehive orchestration architecture and enterprise governance resources.
            </p>
          </div>

     
          <div className="relative h-[420px] rounded-2xl overflow-hidden border-2 border-[#625FD0]">
            <Image
              src="/Image/support2.png"
              alt="Supermanage AGI Documentation"
              fill
              className="object-contain"
            />
          </div>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Academy */}
          <ResourceCard
            icon={<GraduationCap size={22} />}
            title="Vibe Working Platform Academy"
            description="Structured learning for founders, operators and implementation teams deploying SuperManager AGI. Covers ADA integration layer setup, specialist agent configuration by department, Beehive orchestration architecture, human-in-the-loop governance design and 90-day deployment framework. Certification available on completion."
            link="/academy"
          />

          {/* Community */}
          <ResourceCard
            icon={<MessageSquare size={22} />}
            title="Implementation Community"
            description="Collaborate with founders, operators, engineers and implementation partners deploying the Vibe Working Platform across every industry. Share deployment configurations, agent calibration approaches, integration patterns and ROI data. Real practitioners sharing real production experience."
            link="/community"
          />

          {/* Training */}
          <ResourceCard
            icon={<Layers size={22} />}
            title="Enterprise Deployment Training"
            description="Hands-on deployment training for enterprise implementation teams. Covers ADA connector configuration, specialist agent deployment by function, data sovereignty architecture, human oversight design and governance framework setup. Available as on-site, remote or self-paced formats."
            link="/training"
          />
        </div>

    
        <div className="grid lg:grid-cols-2 gap-8">
          <LargeCard
            icon={<Layers size={22} />}
            title="Agent Marketplace"
            description="Deploy pre-configured specialist agent templates for every business function, industry and workflow. Operations AGI, Finance AGI, Logistics AGI, Marketing AGI, Customer Care AGI, Engineering AGI and more  each pre-calibrated for its domain and ready to connect to your systems via the ADA Integration Layer."
            link="/marketplace"
          />

          <LargeCard
            icon={<PlayCircle size={22} />}
            title="Architecture and Research Library"
            description="Complete access to the ADA research paper, Beehive architecture documentation, MCP and CLI trilemma analysis, benchmark datasets and evaluation methodology. All configurations and hyperparameters published for full reproducibility. Intel i7, 16GB RAM, no GPU, no cloud API."
            link="/videos"
          />
        </div>
      </div>
    </section>
  );
}



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

    </div>
  );
}



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

   
    </div>
  );
}
