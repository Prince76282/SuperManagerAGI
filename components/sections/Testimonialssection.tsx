"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= TYPES ================= */

type Testimonial = {
  company: string;
  quote: string;
  name: string;
  title: string;
};

/* ================= DATA ================= */

const testimonials = [
  {
    company: "Enterprise Engineering Team",
    quote:
      "SuperManager AI has transformed how we oversee complex programs. Leadership now has real-time visibility into delivery health, risks, and execution progress. Decisions are faster, coordination is smoother, and teams stay aligned without constant oversight. It has significantly improved predictability, accountability, and confidence across our entire organization.",
    name: "VP Engineering",
    title: "Platform Systems",
  },
  {
    company: "Global Product Division",
    quote:
      "The platform provides structured execution intelligence across all initiatives. We identify delivery risks earlier, reduce coordination overhead, and maintain consistent visibility across teams. Leadership discussions are now data-driven instead of assumption-based, which has strengthened planning accuracy and improved trust among stakeholders throughout our programs.",
    name: "Chief Product Officer",
    title: "Enterprise Products",
  },
  {
    company: "Technology Operations",
    quote:
      "SuperManager AI introduced clarity into complex workflows that previously required constant manual monitoring. With automated insights and real-time reporting, our teams execute faster and with greater confidence. It acts as an operational backbone that keeps programs aligned while reducing friction across departments and leadership levels.",
    name: "Director",
    title: "Operations Strategy",
  },
  {
    company: "Cloud Infrastructure Group",
    quote:
      "Since implementing the platform, coordination across distributed teams has improved dramatically. We now operate with shared visibility, predictable timelines, and fewer execution surprises. The system highlights risks early and ensures stakeholders remain aligned, enabling us to deliver large-scale initiatives with precision and consistency.",
    name: "Head of Infrastructure",
    title: "Cloud Systems",
  },
  {
    company: "Strategic Programs Office",
    quote:
      "SuperManager AI has given our leadership team continuous visibility into execution health across multiple initiatives. We can now identify risks early, adjust priorities quickly, and ensure alignment without additional reporting overhead. It has streamlined governance, improved delivery consistency, and strengthened stakeholder confidence throughout our organization.",
    name: "Executive Program Director",
    title: "Strategy & Delivery",
  },
  {
    company: "Enterprise Solutions Team",
    quote:
      "The platform has significantly improved how we coordinate large cross-functional programs. Teams operate with shared context, leadership decisions are supported by live execution data, and bottlenecks are surfaced automatically. This has reduced delays, improved efficiency, and allowed us to maintain consistent momentum across complex initiatives.",
    name: "Senior Director",
    title: "Enterprise Solutions",
  },
  {
    company: "Innovation Technology Group",
    quote:
      "Before implementing SuperManager AI, gaining reliable execution insight required multiple meetings and manual updates. Now, we receive structured intelligence instantly. It has accelerated decision cycles, reduced uncertainty, and enabled our teams to focus more on delivery and less on reporting or administrative coordination tasks.",
    name: "Chief Innovation Officer",
    title: "Technology Strategy",
  },
  {
    company: "Global Delivery Team",
    quote:
      "Execution predictability has improved dramatically since adopting the platform. We now operate with real-time clarity on progress, dependencies, and risks. Leadership interventions happen earlier, teams stay aligned, and outcomes are more consistent. It has become a critical operational layer supporting our most important initiatives.",
    name: "VP Delivery",
    title: "Global Operations",
  },
  {
    company: "Systems Engineering Division",
    quote:
      "SuperManager AI acts like an intelligent coordination engine that keeps complex programs synchronized. Communication overhead has decreased, timelines are more reliable, and stakeholders stay informed automatically. The result is smoother execution, stronger accountability, and a noticeable improvement in delivery confidence across our teams.",
    name: "Principal Engineering Lead",
    title: "Systems Architecture",
  },
  {
    company: "Digital Platforms Organization",
    quote:
      "The platform has elevated our operational maturity by providing continuous insight into execution signals. Instead of reacting to problems late, we address them early with clear data. This shift has strengthened governance, improved delivery speed, and increased confidence across leadership and project teams alike.",
    name: "Director",
    title: "Digital Platforms",
  },
];

/* ================= MAIN ================= */

export default function TestimonialsSection() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [visible, setVisible] = useState(3);

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

  const paginate = (dir: number) => {
    setIndex(([prev]) => [
      (prev + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  const visibleItems = useMemo(() => {
    return Array.from({ length: visible }, (_, i) => {
      return testimonials[(index + i) % testimonials.length];
    });
  }, [index, visible]);

  /* animation variants */

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-[#F0F6F9] py-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-4xl lg:text-5xl   tracking-tight">
          What our customers say
        </h1>
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="mt-3 text-gray-600 text-lg">
              Real results from teams using SuperManager AI.
            </p>
          </div>

          <div className="flex gap-3">
            <NavBtn onClick={() => paginate(-1)}>
              <ChevronLeft size={18} />
            </NavBtn>

            <NavBtn onClick={() => paginate(1)}>
              <ChevronRight size={18} />
            </NavBtn>
          </div>
        </div>

        {/* Animated Slider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout" custom={direction}>
            {visibleItems.map((t, i) => (
              <motion.div
                key={index + "-" + i}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 260, damping: 22 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -80) paginate(1);
                  if (info.offset.x > 80) paginate(-1);
                }}
              >
                <Card {...t} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function Card({ company, quote, name, title }: Testimonial) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition h-full flex flex-col">
      <h3 className="text-xl font-semibold">{company}</h3>

      <p className="text-gray-600 mt-3 flex-1 leading-relaxed">“{quote}”</p>

      <div className="mt-6">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
}

/* ================= NAV BUTTON ================= */

function NavBtn({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border bg-white flex items-center justify-center hover:bg-gray-100 active:scale-95 transition"
    >
      {children}
    </button>
  );
}
