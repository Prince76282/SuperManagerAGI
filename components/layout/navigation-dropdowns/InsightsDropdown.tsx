import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  Calendar,
} from "lucide-react";

export default function InsightsDropdown({ onClose }) {
  return (
    <div
      className="
       absolute lg:left-1/2 lg:-translate-x-1/2
      left-0 top-full mt-2 
      w-full lg:w-screen max-w-[1290px] 
      z-50 dropdown-open 
      "
    >
      <div
        className="
         p-4 sm:p-6 lg:p-8
        max-h-[90vh] overflow-y-auto scroll-smooth scrollbar-hide
        lg:max-h-[90vh] lg:overflow-y-auto lg:scroll-smooth 
        "
      >
        

        {/* GRID */}
        <div className="grid grid-cols-1 mb-25 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* Column 1 */}
          <div className="space-y-6 p-4 sm:p-6 rounded-2xl bg-white">
            <div>
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                RESOURCES
              </h4>

              <ul className="space-y-2">
                {[
                  "Resource Hub",
                  "Insights Blog",
                  "Whitepapers",
                  "Webinars",
                  "AI Research Reports",
                  "AI Glossary",
                  "Videos",
                  "AI Pulse",
                  "Manager Replacement 101",
                  "Adaptive AGI Framework",
                  "CMO Toolkit",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="/learnmore/"
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-[#625FD0] transition-colors duration-300 ease-in-out group py-1"
                    >
                      <span>{item}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                SUPPORT
              </h4>

              <ul className="space-y-2">
                {[
                  "Documentation",
                  "Get support",
                  "Submit RFP",
                  "Academy",
                  "Community",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="/learnmore/"
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-[#625FD0] transition-colors duration-300 ease-in-out group py-1"
                    >
                      <span>{item}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">

            {/* COMPANY */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl">
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                COMPANY
              </h4>

              <ul className="space-y-2">
                {[
                  "About us",
                  "Leadership",
                  "Customer Stories",
                  "Partners",
                  "Analyst Recognition",
                  "Newsroom",
                  "Events",
                  "Careers",
                  "Contact us",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="/learnmore/"
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-[#625FD0] transition-colors duration-300 ease-in-out group py-1"
                    >
                      <span>{item}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides */}
            <div className="bg-white rounded-2xl p-4 sm:p-6">
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
                AGENTIC AI GUIDES
              </h4>

              <div className="space-y-4">
                {[
                  { img: "/image/Solution,2024.png", title: "SuperManager AGI: Recognized as a Leading Project Management Solution, 2024" },
                  { img: "/image/101.png", title: "Generative AI 101" },
                  { img: "/image/CXO AI toolkit.png", title: "CXO AI toolkit for enterprise AI success" },
                ].map((item, i) => (
                  <Link key={i} href="/learnmore/" className="block group">
                    <div className="flex gap-3">
                      <Image
                        src={item.img}
                        alt=""
                        width={80}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <p className="text-sm text-gray-700 group-hover:text-[#625FD0] transition-colors duration-300 ease-in-out line-clamp-2">
                        {item.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl space-y-6">

            {/* Event */}
            <div className="bg-gradient-to-br from-[#8885e5] to-[#9f9ddf] rounded-xl overflow-hidden text-white">
             

              <div className="p-5">
                <Image
                  src="/image/CCWBerlin.png"
                  alt="CCW Berlin"
                  width={120}
                  height={40}
                  className="mb-3"
                />

                <p className="text-sm mb-4">
                  CCW Berlin brings together experts and companies to explore
                  the future of AI.
                </p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">
                    Berlin
                  </span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">
                    4 Feb
                  </span>
                </div>

                <Link
                  href="/learnmore/"
                  className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold  transition-all duration-300 ease-in-out"
                >
                  Register <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/learnmore/"
              className="block bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 ease-in-out group"
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Talk to an Expert</h4>
                  <p className="text-sm text-gray-600">
                    Schedule a call with our experts.
                  </p>
                </div>

                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-[#625FD0] transition-colors duration-300 ease-in-out">
                  <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300 ease-in-out" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}