"use client";

import { useState, useEffect, useMemo, useRef } from "react";



type Testimonial = {
  company: string;
  quote: string;
  name: string;
  title: string;
};

type NavBtnProps = {
  children: React.ReactNode;
  onClick: () => void;
};



const testimonials: Testimonial[] = [
  {
    company: "Adobe",
    quote:
      "SuperManager AI has materially improved delivery governance across multiple enterprise programs. We achieved measurable efficiency gains while maintaining strict quality and compliance standards.",
    name: "Senior Program Director",
    title: "Adobe",
  },
  {
    company: "BrowserStack",
    quote:
      "Within one quarter, we reduced project coordination overhead significantly. Execution visibility is now real-time and data-driven.",
    name: "Director of Engineering",
    title: "BrowserStack",
  },
  {
    company: "Zoho",
    quote:
      "Operational discipline has improved across all active initiatives. Reporting, risk monitoring, and stakeholder updates are now structured and predictable.",
    name: "Chief Technology Officer",
    title: "Zoho",
  },
  {
    company: "Microsoft",
    quote:
      "The platform aligns well with enterprise-scale engineering environments. Its ability to surface risk patterns early strengthens delivery predictability.",
    name: "Principal Engineering Manager",
    title: "Microsoft",
  },
  {
    company: "Socket",
    quote:
      "For a high-growth security company like ours, execution clarity is critical. SuperManager AI provides operational leverage without increasing management layers.",
    name: "Head of Engineering",
    title: "Socket",
  },
  {
    company: "Perplexity",
    quote:
      "Speed matters to us. The system ensures coordination never becomes a bottleneck while preserving structured execution oversight.",
    name: "VP Engineering",
    title: "Perplexity",
  },
  {
    company: "Sprinto",
    quote:
      "Audit readiness and compliance tracking have improved substantially. We now maintain enterprise-grade documentation with minimal manual effort.",
    name: "Director of Operations",
    title: "Sprinto",
  },
  {
    company: "NVIDIA",
    quote:
      "Complex engineering programs demand precision. The platform introduces measurable control and foresight into large-scale technical initiatives.",
    name: "Senior Engineering Leader",
    title: "NVIDIA",
  },
];


export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [fade, setFade] = useState(false);
  const touchStartX = useRef<number | null>(null);

 
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);


  const next = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setFade(false);
    }, 180);
  };

  const prev = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setFade(false);
    }, 180);
  };


  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();

    touchStartX.current = null;
  };


  const visibleItems = useMemo(() => {
    return Array.from({ length: visible }, (_, i) => {
      return testimonials[(index + i) % testimonials.length];
    });
  }, [index, visible]);

  if (!testimonials.length) return null;



  return (
    <section className="bg-[#F0F6F9] py-14 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              What our customers say
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Real results from teams that replaced half their PM headcount with SuperManager AI.
            </p>
          </div>

          {/* arrows */}
          <div className="flex gap-3 self-start lg:self-auto">
            <NavBtn onClick={prev}>
              <ChevronLeft />
            </NavBtn>
            <NavBtn onClick={next}>
              <ChevronRight />
            </NavBtn>
          </div>
        </div>

        {/* Cards */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-200 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {visibleItems.map((t, i) => (
            <Card key={`${t.name}-${i}`} {...t} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 ">
          <a
            href="/customer-stories"
            className="inline-flex  gap-2 text-sm sm:text-base font-medium bg-[#625FD0] rounded-full px-6 py-3 text-white hover:scale-105 active:scale-95 transition"
          >
            More Customer Stories
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function Card({ company, quote, name, title }: Testimonial) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition flex flex-col min-h-[250px]">
      <h3 className="font-semibold text-xl">{company}</h3>

      <p className="text-sm text-gray-700 mt-3 flex-1 leading-relaxed">
        “{quote}”
      </p>

      <div className="mt-6">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}

function NavBtn({ children, onClick }: NavBtnProps) {
  return (
    <button
      onClick={onClick}
      aria-label="navigation button"
      className="w-10 h-10 rounded-full border bg-white flex items-center justify-center hover:bg-gray-100 active:scale-95 transition"
    >
      {children}
    </button>
  );
}

/* icons */

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}