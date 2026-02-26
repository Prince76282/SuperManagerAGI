'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AGIHeroSection() {
  const [activeTab, setActiveTab] = useState('wealth-management');

  const tabs = [
    {
      id: 'wealth-management',
      name: 'Wealth Management',
      image: '/image/APIHooks.png',
      alt: 'Wealth Management'
    },
    {
      id: 'hr',
      name: 'HR',
      image: '/image/AUTOMATEDAILY OPS.png',
      alt: 'HR Operations'
    },
    {
      id: 'sales',
      name: 'Sales',
      image: '/image/image4.png',
      alt: 'Sales'
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          {/* Hero Content Head */}
          <div className="text-center max-w-4xl mb-12">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 animate-fade-in">
                AGI for Leadership
              </h1>
              <p className="text-lg md:text-xl text-gray-900 animate-fade-in-delay">
               Replace team leads and engineering managers with AGI. Autonomous coordination. Intelligent decisions. 
                <br className="hidden sm:block" />
                Drive performance.
              </p>
            </div>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
              <button className="px-2 py-2 text-white font-medium   bg-[#625FD0] rounded-lg   transition-colors duration-300 min-w-[160px] ">
                Watch video
              </button>
              <Link
                href="/get-in-touch"
                className="px-2 py-2 bg-[#625FD0] text-white rounded-lg  transition-colors duration-300 min-w-[160px] text-center font-medium"
              >
                Request a demo
              </Link>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="w-full max-w-5xl animate-fade-in-delay-3">
            
            {/* Tab Menu */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? ' px-2 py-2 bg-[#625FD0] font-medium text-white shadow-lg'
                      : 'bg-gray-100 border-2 border-[#625FD0] font-medium text-[#625FD0] '
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="relative w-full">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`transition-opacity duration-300 ${
                    activeTab === tab.id
                      ? 'opacity-100'
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={tab.image}
                      alt={tab.alt}
                      width={100}
                      height={50}
                      className="w-full  object-cover"
                      priority={tab.id === 'wealth-management'}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Button */}
          <div className="mt-10">
            <Link
              href="/learnmore"
              className="inline-block px-2 p-2 bg-[#625FD0] text-white rounded-lg  transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              AGI for Leadership Guide
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}