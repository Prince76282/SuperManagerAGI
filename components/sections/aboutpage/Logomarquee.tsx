"use client";

import Image from "next/image";

/* ---------------- LOGOS ---------------- */

const logos = [
  { name: "Adobe", src: "/Image/newimage/Adobe.png" },
  { name: "BrowserStack", src: "/Image/newimage/Browser1.png" },
  { name: "Zoho", src: "/Image/newimage/Zoho.png" },
  { name: "Microsoft", src: "/Image/newimage/Microsoft.png" },
  { name: "Sprinto", src: "/Image/newimage/Sprinto.png" },
  { name: "Perplexity", src: "/Image/newimage/perplexity.png" },
  { name: "Socket", src: "/Image/newimage/Socket.png" },
  { name: "Nvidia", src: "/Image/newimage/image.png" },
];

/* ---------------- SECTION ---------------- */

export default function LogoMarqueeSection() {
  return (
    <div className="mx-auto max-w-[1100px] px-5 pb-14 text-center py-16">
      {/* 🤝 Title */}
      <h1 className="mb-4 text-black text-3xl md:text-5xl ">
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
                className="h-[80px] md:h-[100px] w-auto object-contain  hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
