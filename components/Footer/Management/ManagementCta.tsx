"use client";

import { useState } from "react";

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

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <h4 className="text-base font-semibold leading-snug text-black">
          {title}
        </h4>

        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300">
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
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5">
            <p className="text-sm leading-relaxed text-gray-600">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ManagementCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-10 border-gray-200 p-10 lg:border-r lg:p-14">
              <div>
                <h3 className="mb-5 text-3xl leading-tight text-black lg:text-5xl">
                  Why companies replace
                  <span className="text-[#625FD0]">
                    {" "}
                    management layers with SuperManagerAGI
                  </span>
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  Traditional management systems rely on meetings,
                  coordination, and constant oversight to keep work moving.
                  SuperManagerAGI replaces these operational processes with
                  autonomous execution, enabling organizations to move faster
                  while freeing leaders to focus on strategy and innovation.
                </p>
              </div>

              <div className="flex flex-col gap-7">
                <div className="flex gap-8 border-t border-gray-200 pt-2">
                  {[
                    { value: "92%", label: "Management tasks automated" },
                    { value: "3x", label: "Faster execution cycles" },
                    {
                      value: "65%",
                      label: "Reduction in coordination overhead",
                    },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-black">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-xs text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-10 lg:p-14">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-500">
                Platform advantages
              </p>

              {ACCORDIONS.map((item, index) => (
                <Accordion
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  index={index}
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
