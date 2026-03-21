"use client";

import { useEffect, useRef, useState } from "react";

const ACCORDIONS = [
  {
    title: "Replace manual coordination with AI execution",
    body: "SuperManagerAGI eliminates the constant coordination that traditionally falls on managers. Tasks progress automatically as the system assigns priorities, resolves dependencies, and keeps workflows advancing without manual follow-ups.",
  },
  {
    title: "Keep every team aligned without management overhead",
    body: "Engineers, team leads, and executives all operate from the same real-time execution intelligence. SuperManagerAGI ensures everyone sees priorities, progress, and updates instantly without relying on meetings, status reports, or manual alignment.",
  },
  {
    title: "Identify execution risks before managers need to intervene",
    body: "SuperManagerAGI continuously analyzes activity across your tools to detect delivery risks early. Teams receive proactive recommendations so potential blockers are resolved before they slow projects or require management intervention.",
  },
  {
    title: "Integrate autonomous management into your existing stack",
    body: "Connect tools like Jira, Slack, GitHub, Notion, and many others. SuperManagerAGI adds an autonomous execution layer on top of your current workflows without forcing teams to change how they work.",
  },
];

type AccordionProps = {
  title: string;
  body: string;
  index: number;
  openIndex: number | null;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

function Accordion({
  title,
  body,
  index,
  openIndex,
  setOpenIndex,
}: AccordionProps) {
  const isOpen = openIndex === index;
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <h4 className="text-base font-semibold text-black leading-snug">
          {title}
        </h4>

        <div className="w-7 h-7 rounded-full flex items-center justify-center border border-gray-300">
          <svg
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.293 8.293L12 12.586L7.707 8.293L6.293 9.707L12 15.414L17.707 9.707L16.293 8.293Z"
              fill="#625FD0"
            />
          </svg>
        </div>
      </button>

      <div
        style={{
          height,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div ref={bodyRef} className="pb-5">
          <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default function ManagementCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLElement | null>(null);

  return (
    <section className="bg-white py-24 px-6" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT */}
            <div className="flex flex-col justify-between gap-10 p-10 lg:p-14 lg:border-r border-gray-200">
              <div>
                <h3 className="text-3xl lg:text-5xl text-black leading-tight mb-5">
                  Why companies replace
                  <span className="text-[#625FD0]">
                    {" "}
                    management layers with SuperManagerAGI
                  </span>
                  text-3xl
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  Traditional management systems rely on meetings, coordination,
                  and constant oversight to keep work moving. SuperManagerAGI
                  replaces these operational processes with autonomous
                  execution, enabling organizations to move faster while freeing
                  leaders to focus on strategy and innovation.
                </p>
              </div>

              <div className="flex flex-col gap-7">
               

                <div className="flex gap-8 pt-2 border-t border-gray-200">
                  {[
                    { value: "92%", label: "Management tasks automated" },
                    { value: "3×", label: "Faster execution cycles" },
                    {
                      value: "65%",
                      label: "Reduction in coordination overhead",
                    },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold text-black">
                        {s.value}
                      </div>
                      <div className="text-xs mt-0.5 text-gray-500">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
                Platform advantages
              </p>

              {ACCORDIONS.map((item, i) => (
                <Accordion
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  index={i}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
