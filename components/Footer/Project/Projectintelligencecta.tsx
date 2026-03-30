"use client";

import { useState } from "react";

const ACCORDIONS = [
  {
    title: "Accelerate project delivery",
    body: "SuperManagerAGI removes the manual overhead that slows teams down. Automated standups, intelligent sprint adjustments, and real-time blocker detection help teams move faster without extra coordination work.",
  },
  {
    title: "Alignment across teams and leadership",
    body: "Developers, managers, and executives all see the same real-time project intelligence. Everyone stays aligned without chasing updates or building manual reports.",
  },
  {
    title: "Predict risks before deadlines slip",
    body: "AGI continuously analyzes progress, dependencies, and delivery signals to detect risks early and recommend the best next action before problems escalate.",
  },
  {
    title: "Works with the tools you already use",
    body: "Connect tools like Jira, Slack, GitHub, Notion, and dozens more. SuperManagerAGI integrates into your existing workflows and immediately adds intelligence to your project data.",
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

export default function ProjectIntelligenceCTA() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-10 border-gray-200 p-10 lg:border-r lg:p-14">
              <div>
                <h3 className="mb-5 text-3xl leading-tight text-black lg:text-5xl">
                  Why teams choose
                  <span className="text-[#625FD0]"> SuperManagerAGI</span>
                </h3>

                <p className="text-sm leading-relaxed text-gray-600">
                  Built for modern teams that move fast and work across many
                  tools. SuperManagerAGI transforms scattered project signals
                  into clear, actionable intelligence.
                </p>
              </div>

              <div className="flex flex-col gap-7">
                <div className="flex gap-8 border-t border-gray-200 pt-2">
                  {[
                    { value: "94%", label: "On-time delivery" },
                    { value: "3x", label: "Faster risk detection" },
                    { value: "60%", label: "Less manual tracking" },
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
