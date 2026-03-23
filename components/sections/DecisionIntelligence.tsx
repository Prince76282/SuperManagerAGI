import React from "react";
import Image from "next/image";
import Link from "next/link";

const DecisionIntelligence = () => {
  return (
    <section className="p-0 bg-[#F0F6F9]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-6 sm:gap-8 py-10 sm:py-14 lg:py-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight">
              What Sets SuperManager AGI Apart
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* ADA Architecture Card */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    ADA Architecture No Network Boundary
                  </h3>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src="/Image/newimage/Pmicons.png"
                      alt="ADA Architecture"
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-gray-900 font-normal text-sm sm:text-base leading-relaxed">
                  The only AI agent platform that eliminates the network
                  boundary assumption. Direct database connectivity at 2 to
                  15ms. Hallucination rate 4.2% vs 22.4% industry average.
                  Published, peer-reviewed, reproducible on consumer hardware
                  with no GPU. Every competitor Claude with MCP, Manus,
                  Microsoft Copilot still crosses a network boundary for every
                  data access. SuperManager AGI eliminates that boundary
                  entirely.
                </p>
              </div>

              {/* Beehive Orchestration Card */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    Beehive Orchestration
                  </h3>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center text-gray-900">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5.5C3 4.12 4.12 3 5.5 3H10.5C11.88 3 13 4.12 13 5.5V9C13 10.38 11.88 11.5 10.5 11.5H7L4 14V11.5H5.5C4.12 11.5 3 10.38 3 9V5.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 9.5C21 8.12 19.88 7 18.5 7H13.5C12.12 7 11 8.12 11 9.5V13C11 14.38 12.12 15.5 13.5 15.5H17L20 18V15.5H18.5C19.88 15.5 21 14.38 21 13V9.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="7"
                        y1="18"
                        x2="17"
                        y2="18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="10" cy="18" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-900 font-normal text-sm sm:text-base leading-relaxed">
                  Specialist agents per domain coordinated by a Controller Agent
                  with work-stealing parallel execution. Not one general model
                  attempting everything. Purpose-built agents for each function,
                  each running simultaneously, each grounded in evidence from
                  your actual data.
                </p>
              </div>

              {/* Why Claude MCP Card */}
              <div className="flex flex-col gap-6">
                {/* TOP DIV */}
                <div className="bg-white rounded-lg flex-col p-4 sm:p-6 shadow-sm border border-gray-300">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-900 mb-2 sm:mb-3">
                      Ready to get started?
                    </h3>
                    <p className="text-gray-900 font-normal text-sm sm:text-base leading-relaxed">
                      Let’s Make This Happen. <br />
                      We’re Ready When You Are
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg flex-col p-4 sm:p-6 shadow-sm border border-gray-300">
                  <div className="flex items-end flex-wrap gap-3 sm:gap-4">
                    <Link
                      href="get-in-touch"
                      className="inline-flex items-center justify-center text-[13px] sm:text-[15px] rounded-lg bg-[#625FD0] px-4 py-2 sm:px-5 sm:py-2.5 text-white font-semibold transition hover:bg-[#4f4cb8]"
                    >
                      REQUEST A DEMO
                    </Link>
                    <Link
                      href="https://app.supermanager.co/login"
                      className="inline-flex items-center justify-center text-[13px] sm:text-[14px] text-[#625FD0] hover:text-white py-2 px-3 sm:px-4 border-2 border-[#625FD0] hover:bg-[#625FD0] rounded-lg font-semibold transition"
                    >
                      OPEN APP
                    </Link>
                  </div>
                </div>
              </div>

              {/* Why Manus Card */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    Why Manus Cannot Compete
                  </h3>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center text-gray-900">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 15L8 11L12 14L17 8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 8L21 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                        strokeLinecap="round"
                      />
                      <circle cx="21" cy="5" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-900 font-normal text-sm sm:text-base leading-relaxed">
                  Manus is a general-purpose horizontal agent that handles one
                  task at a time with no persistent organisational context, no
                  department-specific specialist intelligence and no
                  production-grade multi-agent orchestration. No
                  evidence-majority voting. No ADA equivalent. Built for
                  demonstrations, not enterprise production at scale.
                </p>
              </div>

              {/* Why Microsoft Copilot Card */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    Why Microsoft Copilot Cannot Compete
                  </h3>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center text-gray-900">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="13"
                        width="16"
                        height="3"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="6"
                        y="9"
                        width="12"
                        height="3"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="8"
                        y="5"
                        width="8"
                        height="3"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="18" cy="16" r="3" fill="currentColor" />
                      <path
                        d="M16.8 16L17.6 16.8L19.3 15.1"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-900 font-normal text-sm sm:text-base leading-relaxed">
                  Microsoft Copilot is an assistant embedded in the Microsoft
                  ecosystem. It helps individual employees write and summarise.
                  It cannot coordinate across non-Microsoft tools, cannot deploy
                  autonomous agents across departments, cannot execute
                  cross-system workflows and every data access goes through
                  Microsoft Graph API with its associated latency and rate
                  limits.
                </p>
              </div>

              {/* Data Sovereignty Card */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                    Data Sovereignty by Architecture
                  </h3>
                  <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center text-gray-900">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="6"
                        y1="3"
                        x2="6"
                        y2="21"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="6" cy="7" r="2" fill="currentColor" />
                      <circle cx="6" cy="12" r="2" fill="currentColor" />
                      <circle cx="6" cy="17" r="2" fill="currentColor" />
                      <line
                        x1="11"
                        y1="7"
                        x2="20"
                        y2="7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="11"
                        y1="12"
                        x2="18"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="11"
                        y1="17"
                        x2="16"
                        y2="17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-900 font-normal text-sm sm:text-base leading-relaxed">
                  ADA means enterprise data never crosses your organisational
                  boundary during agent reasoning. Claude MCP, Manus and
                  Microsoft Copilot all route data through external APIs. For
                  BFSI, healthcare, legal and regulated industries, this is not
                  a preference it is a compliance requirement. A hard blocker
                  for every competitor. A hard unlock for SuperManager AGI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecisionIntelligence;
