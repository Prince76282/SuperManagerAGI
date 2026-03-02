"use client";

import { useRef, useState, useEffect } from "react";
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

/* ---------------- ROW COMPONENT ---------------- */

type RowProps = {
  logos: { name: string; src: string }[];
  reverse?: boolean;
  speed?: number;
};

function MarqueeRow({ logos, reverse = false, speed = 45 }: RowProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const dragStart = useRef(0);
  const lastOffset = useRef(0);

  const items = [...logos, ...logos];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      setOffset((prev) => prev - e.deltaY * 0.4);
    };

    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const startDrag = (clientX: number) => {
    setDragging(true);
    dragStart.current = clientX;
  };

  const onMove = (clientX: number) => {
    if (!dragging) return;
    const delta = clientX - dragStart.current;
    setOffset(lastOffset.current + delta);
  };

  const endDrag = () => {
    if (!dragging) return;
    setDragging(false);
    lastOffset.current = offset;
  };

  useEffect(() => {
    window.addEventListener("mouseup", endDrag);
    return () => window.removeEventListener("mouseup", endDrag);
  }, [dragging, offset]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);
  }, []);

  const animationStyle: React.CSSProperties = reduceMotion
    ? { transform: `translateX(${offset}px)` }
    : {
        transform: `translateX(${offset}px)`,
        animation: paused
          ? "none"
          : `marquee${reverse ? "Reverse" : ""} ${speed}s linear infinite`,
      };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        setPaused(false);
        endDrag();
      }}
      onMouseDown={(e) => startDrag(e.clientX)}
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseUp={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={endDrag}
    >
      {/* Track */}
      <div
        className="flex gap-10 w-max will-change-transform transform-gpu"
        style={animationStyle}
      >
        {items.map((logo, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36 h-12 sm:h-14 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              fill
              sizes="(max-width:640px)96px,(max-width:768px)112px,(max-width:1024px)128px,144px"
              priority={i < 6}
              className="object-contain px-3"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

/* ---------------- SECTION ---------------- */

export default function LogoMarqueeSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-20 overflow-hidden">
      <div className="text-center mb-16 px-6 sm:px-8 md:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-black mb-6 tracking-tight">
          Trusted by Global Enterprises Running on SuperManagerAGI
        </h1>

        <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-3xl mx-auto">
          Leading organizations use SuperManagerAGI to deploy autonomous AI
          teams across operations, finance, healthcare, retail, and
          infrastructure transforming enterprise execution at scale.
        </p>
      </div>

      <div className="space-y-8 w-full">
        <MarqueeRow logos={logos} speed={40} />
        <MarqueeRow logos={logos} reverse speed={55} />
      </div>
    </section>
  );
}