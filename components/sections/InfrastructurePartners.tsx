"use client";

import Image from "next/image";
import Link from "next/link";
import { INFRASTRUCTURE_DATA } from "@/lib/Dataset/InfrastructureData";

export default function InfrastructureSection() {
  const { header, cards } = INFRASTRUCTURE_DATA;

  return (
    <section className="bg-[#F0F6F9] py-10">
      <div className="px-4 md:px-6 lg:px-8">
        <div className="container max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-12 max-w-3xl space-y-4">
            <h3 className="text-4xl md:text-5xl text-gray-900 leading-tight">
              {header.title}
            </h3>
            <p className="text-base text-gray-700 md:text-lg">
              {header.description}
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col h-full rounded-xl bg-white shadow-md overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-60">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                    <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                      {card.title}
                    </h4>

                    <p>{card.description}</p>

                    <ul className="list-disc pl-5 space-y-1">
                      {card.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <p className="font-medium">{card.footer}</p>
                  </div>

                  {/* Buttons at bottom */}
                  <div className="mt-auto pt-6 flex flex-wrap gap-4">
                    {card.buttons.map((btn) => (
                      <Link
                        key={btn.label}
                        href={btn.href}
                        className="inline-flex text-sm items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white hover:opacity-90 transition"
                      >
                        {btn.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}