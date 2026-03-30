"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code,
  Link2,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { insights } from "@/lib/Dataset/contentData";
import { intelligenceDropdownData } from "@/lib/Dataset/navigationDropdownData";

type Props = {
  onClose?: () => void;
};

const capabilityIcons: Record<string, LucideIcon> = {
  users: Users,
  brain: Brain,
  zap: Zap,
  shield: Shield,
  code: Code,
  link: Link2,
};

export default function IntelligenceDropdown({ onClose }: Props) {
  const handleClick = () => onClose?.();

  return (
    <div className="absolute left-0 top-full z-50 mt-2 w-full dropdown-open lg:left-2/3 lg:ml-17 lg:w-screen lg:max-w-322.5 lg:-translate-x-2/5">
      <div className="max-h-[90vh] overflow-y-auto p-4 scrollbar-hide sm:p-6 lg:p-8">
        <div className="mb-25 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="space-y-6 rounded-2xl bg-white p-4 sm:p-6">
            <div className="rounded-xl bg-[#625FD0]/6 p-5">
              <Image
                src="/Image/Manager-Platform.jpg"
                alt="Manager Platform"
                width={400}
                height={200}
                className="mb-4 h-auto w-full rounded-lg"
              />

              <div className="mb-2 flex items-center gap-2">
                <Brain className="h-5 w-5 text-[#625FD0]" />
                <h3 className="text-lg text-gray-900">
                  {intelligenceDropdownData.hero.title}
                </h3>
              </div>

              <p className="mb-4 text-sm text-gray-600">
                {intelligenceDropdownData.hero.description}
              </p>

              <Link
                href={intelligenceDropdownData.hero.href}
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 font-semibold text-white transition hover:bg-[#625FD0]/90"
              >
                {intelligenceDropdownData.hero.ctaLabel}
              </Link>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#625FD0]">
                CAPABILITIES
              </h4>

              <ul className="space-y-3">
                {intelligenceDropdownData.capabilities.map((item) => {
                  const Icon = capabilityIcons[item.icon];

                  return (
                    <li key={item.text}>
                      <div className="flex gap-4 text-sm text-gray-700 transition hover:text-[#625FD0]">
                        <Icon className="h-4 w-4 text-[#625FD0]/60" />
                        {item.text}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-lg uppercase tracking-wider text-[#625FD0]">
                DATA LAYER (ADA)
              </h4>

              <ul className="space-y-2">
                {intelligenceDropdownData.dataLayer.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleClick}
                      className="group flex items-center justify-between py-1 text-sm text-gray-700 hover:text-[#625FD0]"
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6 rounded-2xl bg-white p-4 sm:p-6">
            {intelligenceDropdownData.sections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-3 text-lg uppercase tracking-wider text-[#625FD0]">
                  {section.title}
                </h4>

                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={handleClick}
                        className="group flex items-center justify-between py-1 text-sm text-gray-700 hover:text-[#625FD0]"
                      >
                        {item.label}
                        <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-6 rounded-2xl bg-white p-4 sm:p-6">
            <div className="overflow-hidden rounded-xl bg-[linear-gradient(135deg,#625FD0_0%,rgba(98,95,208,0.82)_100%)] p-5 text-white">
              <h1 className="mb-4 text-lg">{intelligenceDropdownData.cta.title}</h1>

              <p className="mb-4 text-sm text-white/85">
                {intelligenceDropdownData.cta.description}
              </p>

              <Link
                href={intelligenceDropdownData.cta.href}
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-semibold text-[#625FD0]"
              >
                {intelligenceDropdownData.cta.ctaLabel}
              </Link>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#625FD0]">
                RECENT INSIGHTS
              </h4>

              <div className="space-y-4">
                {insights.map((item) => (
                  <Link
                    key={item.title}
                    href={`/resource/${item.id}`}
                    onClick={handleClick}
                    className="group block"
                  >
                    <div className="flex gap-3">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={80}
                        height={60}
                        className="rounded-lg object-cover"
                      />

                      <div>
                        <p className="mb-1 line-clamp-2 text-sm text-gray-700 group-hover:text-[#625FD0]">
                          {item.title}
                        </p>
                        <span className="text-xs text-gray-500">
                          AI Insight | {item.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
