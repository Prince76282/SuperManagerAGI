"use client";

import Image from "next/image";

/* ---------------- LOGOS ---------------- */

const logos = [
  { name: "Adobe", src: "/image/newimage/Adobe.png" },
  { name: "BrowserStack", src: "/image/newimage/Browser1.png" },
  { name: "Zoho", src: "/image/newimage/Zoho.png" },
  { name: "Microsoft", src: "/image/newimage/Microsoft.png" },
  { name: "Sprinto", src: "/image/newimage/Sprinto.png" },
  { name: "Perplexity", src: "/image/newimage/perplexity.png" },
  { name: "Socket", src: "/image/newimage/Socket.png" },
  { name: "Nvidia", src: "/image/newimage/image.png" },
];

/* ---------------- SECTION ---------------- */

export default function LogoMarqueeSection() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 pb-14 text-center py-16">
      {/* 🤝 Title */}
      <h1 className="mb-4 text-black text-lg md:text-2xl font-semibold">
        Trusted by 100+ Leading Companies
      </h1>

      <p className="mx-auto max-w-[700px] text-base md:text-lg text-gray-600">
        Companies using or associated with the ecosystem include:
      </p>

      {/* 🚀 Marquee */}
      <div className="overflow-hidden mt-8 group">
        <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((company, index) => (
            <div key={index} className="flex items-center justify-center px-6">
              <Image
                src={company.src}
                alt={company.name}
                width={140}
                height={80}
                className="h-[80px] md:h-[100px] w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
