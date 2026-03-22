"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HomeData } from "@/lib/Dataset/homedata";

export default function SuperManagerTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#F0F6F9] py-10 sm:py-14 lg:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-2xl lg:p-4 overflow-hidden">

            {/* Tabs */}
            <div className="flex gap-2 px-3 pt-4 lg:px-8 overflow-x-auto scrollbar-hide">
              {HomeData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`shrink-0 px-4 py-2 text-xs sm:text-sm rounded-full uppercase transition whitespace-nowrap ${
                    activeTab === index
                      ? "bg-[#625FD0] text-white shadow-md"
                      : "bg-white border hover:bg-[#625FD0] hover:text-white"
                  }`}
                >
                  {tab.text}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 p-5 sm:p-8 lg:p-12">

              {/* Text */}
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
                <h3 className="text-2xl lg:text-4xl text-gray-900">
                  {HomeData[activeTab].title}
                </h3>

                <p className="text-sm lg:text-lg text-gray-600">
                  {HomeData[activeTab].desc}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/home/${HomeData[activeTab].id}`}
                    className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold"
                  >
                    Learn More 
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex items-center justify-center">
                <div className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={HomeData[activeTab].img}
                    alt={HomeData[activeTab].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}