import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DecisionIntelligence = () => {
  return (
    <section className="p-0 bg-[#F0F6F9]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-8 py-16">
            <h2 className="text-4xl md:text-5xl  text-gray-900 leading-tight">
              What Sets Our Decision Intelligence Apart
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* PM Protection Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold  text-gray-900">PM Protection</h3>
                  <div className="w-11 h-11 flex items-center justify-center">
                    <Image
                      src="/image/newimage/Pmicons.png"
                      alt="PM Protection"
                      width={44}
                      height={44}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <p className="text-gray-900 font-[var( --font-grotesk)] font-normal">
                  Decision Trace Shield Captures Who Decided, When, What Context Was Used, and Which Alternatives Were
                  Rejected. PMs Stop Being Scapegoats.
                </p>
              </div>

              {/* Language Normalization Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold  text-gray-900">Language Normalization</h3>
                  <div className="w-11 h-11 flex items-center justify-center text-gray-900">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3 5.5C3 4.12 4.12 3 5.5 3H10.5C11.88 3 13 4.12 13 5.5V9C13 10.38 11.88 11.5 10.5 11.5H7L4 14V11.5H5.5C4.12 11.5 3 10.38 3 9V5.5Z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path
                        d="M21 9.5C21 8.12 19.88 7 18.5 7H13.5C12.12 7 11 8.12 11 9.5V13C11 14.38 12.12 15.5 13.5 15.5H17L20 18V15.5H18.5C19.88 15.5 21 14.38 21 13V9.5Z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <line x1="7" y1="18" x2="17" y2="18" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="10" cy="18" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-900 font-normal">
                  Translate Client Facing, Emotional, or Ambiguous Language into Internal, Structured, Risk-Aware
                  Framing. Removes Bias and Improves Commercial Discipline.
                </p>
              </div>

              {/* CTA Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm border-2 border border-gray-300">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Ready to get started?
                  </h3>
                  <p className="text-gray-900 font-normal">
                    Let&apos;s Make This Happen. <br />We&apos;re Ready When You Are.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/get-in-touch/"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-2 py-2 text-white font-semibold  transition"
                    aria-label="Request a Demo"
                  >
                    <span className="whitespace-nowrap">Request a Demo</span>
                  </Link>
                  <Link
                    href="/get-in-touch/"
                    className="hidden text-[#625FD0] hover:text-white lg:block items-center py-2 px-3 border-2 border-[#625FD0] hover:bg-[#625FD0]  rounded-lg text-[14px]  font-semibold transition"
                    aria-label="Talk to an Expert"
                  >
                    <span className="whitespace-nowrap">OPEN APP</span>
                  </Link>
                </div>
              </div>

              {/* Business Event Tracking Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Business Event Tracking</h3>
                  <div className="w-11 h-11 flex items-center justify-center text-gray-900">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 15L8 11L12 14L17 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path d="M17 8L21 5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"
                        strokeLinecap="round" />
                      <circle cx="21" cy="5" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-900 font-normal">
                  Track 10 Canonical Business Events That Account for the Majority of Risk in Enterprise Delivery from
                  Change Requests to SLA Breaches.
                </p>
              </div>

              {/* Decision Debt Management Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Decision Debt Management</h3>
                  <div className="w-11 h-11 flex items-center justify-center text-gray-900">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="13" width="16" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="6" y="9" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <rect x="8" y="5" width="8" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="18" cy="16" r="3" fill="currentColor" />
                      <path d="M16.8 16L17.6 16.8L19.3 15.1" stroke="#ffffff" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-900 font-normal">
                  Manage Decision Debt Before It Becomes Execution Debt. Jira Manages Work. We Manage the Decisions
                  That Justify Work.
                </p>
              </div>

              {/* Event Workspace Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Event Workspace</h3>
                  <div className="w-11 h-11 flex items-center justify-center text-gray-900">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="6" y1="3" x2="6" y2="21" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" />
                      <circle cx="6" cy="7" r="2" fill="currentColor" />
                      <circle cx="6" cy="12" r="2" fill="currentColor" />
                      <circle cx="6" cy="17" r="2" fill="currentColor" />
                      <line x1="11" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" />
                      <line x1="11" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" />
                      <line x1="11" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-900 font-normal">
                  Every Business Event Has a Workspace with Source Signals, Roles Involved, Required Approvals,
                  Decision History, and Clean Termination States.
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
