"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { insightsDropdownData } from "@/lib/Dataset/navigationDropdownData";

type InsightsDropdownProps = {
  onClose?: () => void;
};

export default function InsightsDropdown({ onClose }: InsightsDropdownProps) {
  const handleClick = () => onClose?.();

  return (
    <div className="absolute left-0 top-full z-50 mt-2 w-full dropdown-open lg:left-1/2 lg:ml-14 lg:w-screen lg:max-w-322.5 lg:-translate-x-1/2">
      <div className="mr-3 max-h-[90vh] overflow-y-auto p-4 scrollbar-hide sm:p-6 lg:p-8">
        <div className="mb-25 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="space-y-6 rounded-2xl bg-white p-4 sm:p-6">
            <div>
              <h4 className="mb-2 text-md text-[#625FD0]">
                LEARN & RESOURCES
              </h4>

              <ul className="space-y-2">
                {insightsDropdownData.resources.map((item) => (
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

          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-4 sm:p-6">
              <h4 className="mb-3 text-md font-semibold uppercase tracking-wider text-[#625FD0]">
                COMPANY & CUSTOMERS
              </h4>

              <ul className="space-y-2">
                {insightsDropdownData.company.map((item) => (
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

            <div className="rounded-2xl bg-white p-4 sm:p-6">
              <h4 className="mb-4 text-md font-semibold uppercase tracking-wider text-[#625FD0]">
                LEARN AGENTIC AI
              </h4>

              <ul className="space-y-2">
                {insightsDropdownData.agentic.map((item) => (
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
            <div className="overflow-hidden rounded-xl bg-[linear-gradient(135deg,#625FD0_0%,rgba(98,95,208,0.82)_100%)] text-white">
              <div className="p-5">
                <Image
                  src="/Image/Experience-Action.png"
                  alt="Experience AGI"
                  width={120}
                  height={40}
                  className="mb-3 rounded-lg"
                />

                <h1 className="mb-4 text-lg">{insightsDropdownData.demo.title}</h1>

                <p className="mb-4 text-sm text-white/85">
                  {insightsDropdownData.demo.description}
                </p>

                <Link
                  href={insightsDropdownData.demo.href}
                  onClick={handleClick}
                  className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-semibold text-[#625FD0]"
                >
                  {insightsDropdownData.demo.ctaLabel}
                </Link>
              </div>
            </div>

            <Link
              href={insightsDropdownData.expert.href}
              onClick={handleClick}
              className="group block rounded-xl bg-[#625FD0]/6 p-5 transition hover:shadow-lg"
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <h4 className="mb-1 font-semibold">
                    {insightsDropdownData.expert.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {insightsDropdownData.expert.description}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white group-hover:bg-[#625FD0]">
                  <MessageCircle className="h-5 w-5 text-gray-600 group-hover:text-white" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
