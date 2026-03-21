"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


type Testimonial = {
  company: string;
  quote: string;
  name: string;
  title: string;
};


const testimonials = [
  {
    industry: "D2C Fashion",
    quote:
      "We launched 3 collections without a single stock-out or delay. Inventory, logistics, marketing, and support now run on one AI layer. The reconciliation agent alone paid for the platform in the first month.",
    name: "COO",
    title: "Fashion D2C Brand",
  },
  {
    industry: "Management Consulting",
    quote:
      "We now have live visibility across 24 client engagements. Reports and tracking are fully automated. Internal meetings dropped by 70% while client satisfaction reached an all-time high.",
    name: "Managing Partner",
    title: "Consulting Firm",
  },
  {
    industry: "SaaS Company",
    quote:
      "Sprint planning, standups, release notes, and updates are fully automated. Engineers focus only on shipping. Delivery velocity increased by 31% in one quarter.",
    name: "VP Engineering",
    title: "SaaS Product Company",
  },
  {
    industry: "Global Enterprise",
    quote:
      "For the first time, leadership has real-time visibility across finance, operations, sales, and HR. Decision-making is 3x faster with dramatically lower coordination overhead.",
    name: "Chief Operating Officer",
    title: "Enterprise (5000+ employees)",
  },
  {
    industry: "Startup",
    quote:
      "We operate like an 80-person company with a team of 30. Agents handle MIS, vendor follow-ups, and escalations. I focus purely on growth and strategy.",
    name: "Founder & CEO",
    title: "Series B Startup",
  },
  {
    industry: "Consumer Electronics",
    quote:
      "Stock-out risks are flagged 12–14 days in advance. Reverse logistics costs dropped 18% in two months. Zero settlement discrepancies in six months.",
    name: "Head of Operations",
    title: "Electronics D2C",
  },
  {
    industry: "Logistics",
    quote:
      "NDR follow-ups, courier tracking, and COD reconciliation are fully autonomous. Our team focuses only on exceptions, not routine operations.",
    name: "Director of Operations",
    title: "Logistics Company",
  },
  {
    industry: "Healthcare",
    quote:
      "Scheduling, billing, and compliance are automated. Administrative overhead reduced by over 60%, allowing teams to focus on patient care.",
    name: "COO",
    title: "Healthcare Network",
  },
  {
    industry: "Financial Services",
    quote:
      "Reconciliation, reporting, and anomaly detection now run overnight autonomously. Accuracy improved while costs dropped significantly.",
    name: "Head of Operations",
    title: "Financial Services",
  },
  {
    industry: "Manufacturing",
    quote:
      "We detected a supply chain risk 3 weeks early through AI signals. Production planning, vendor management, and dispatch now run autonomously.",
    name: "Head of Supply Chain",
    title: "Manufacturing",
  },
];

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
        <h1 className="text-[2.5rem]  leading-[1.2] tracking-[-0.02em] flex-none  overflow-visible">
       What Our Customers Say
        </h1>
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-base  text-gray-700 md:text-lg">
             Real results from organisations using SuperManager AGI as their AI Vibe Working Platform.
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
