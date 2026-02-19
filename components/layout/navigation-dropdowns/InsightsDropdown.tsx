import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function InsightsDropdown({ onClose }) {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const resourceLinks = [
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
  ];

  const supportLinks = [
    "Documentation",
    "Get support",
    "Submit RFP",
    "Academy",
    "Community",
  ];

  const companyLinks = [
    "About us",
    "Leadership",
    "Customer Stories",
    "Partners",
    "Analyst Recognition",
    "Newsroom",
    "Events",
    "Careers",
    "Contact us",
  ];

  const guides = [
    {
      img: "/image/Solution,2024.png",
      title: "SuperManager AGI: Recognized as a Leading Project Management Solution, 2024",
    },
    { img: "/image/101.png", title: "Generative AI 101" },
    {
      img: "/image/CXO AI toolkit.png",
      title: "CXO AI toolkit for enterprise AI success",
    },
  ];

  /* ── shared link style ── */
  const linkClass =
    "flex items-center justify-between text-sm text-gray-700 hover:text-[#625FD0] transition-colors duration-200 group py-1.5";

  /* ── collapsible section (mobile) ── */
  const CollapsibleSection = ({ id, title, children }) => (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => toggleSection(id)}
        className="flex items-center justify-between w-full py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider"
      >
        {title}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            openSections[id] ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          openSections[id] ? "max-h-[600px] pb-3" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <>
      {/* Backdrop (mobile only) */}
      <div
        className="fixed inset-0 bg-black/20 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Dropdown panel */}
      <div
        className="
          /* Mobile: full-width slide-down sheet */
          fixed inset-x-0 top-0 z-50 bg-gray-50 
          /* Desktop: absolute floating panel */
          lg:absolute lg:inset-x-auto lg:top-full lg:mt-5
          lg:left-1/2 lg:-translate-x-1/2 
          lg:w-[min(1250px,95vw)] 
          lg:rounded-2xl lg:shadow-2xl lg:shadow-indigo-200/40
          lg:bg-transparent
          dropdown-open
        "
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white lg:hidden">
          <span className="font-semibold text-gray-800">Menu</span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="max-h-[calc(100dvh-56px)] overflow-y-auto scroll-smooth scrollbar-hide lg:max-h-[88vh] lg:p-5">

          {/* ═══════════ MOBILE LAYOUT (stacked collapsibles) ═══════════ */}
          <div className="lg:hidden bg-white">
            {/* Resources */}
            <div className="px-4">
              <CollapsibleSection id="resources" title="Resources">
                <ul className="space-y-0.5">
                  {resourceLinks.map((item, i) => (
                    <li key={i}>
                      <Link href="/learnmore/" className={linkClass}>
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>

              <CollapsibleSection id="support" title="Support">
                <ul className="space-y-0.5">
                  {supportLinks.map((item, i) => (
                    <li key={i}>
                      <Link href="/learnmore/" className={linkClass}>
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>

              <CollapsibleSection id="company" title="Company">
                <ul className="space-y-0.5">
                  {companyLinks.map((item, i) => (
                    <li key={i}>
                      <Link href="/learnmore/" className={linkClass}>
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>

              <CollapsibleSection id="guides" title="Agentic AI Guides">
                <div className="space-y-4 pb-1">
                  {guides.map((item, i) => (
                    <Link key={i} href="/learnmore/" className="flex gap-3 group">
                      <Image
                        src={item.img}
                        alt=""
                        width={72}
                        height={56}
                        className="rounded-lg object-cover flex-shrink-0"
                      />
                      <p className="text-sm text-gray-700 group-hover:text-[#625FD0] transition-colors line-clamp-3">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </CollapsibleSection>
            </div>

            {/* Event card — always visible on mobile */}
            <div className="mx-4 mt-4 mb-2 bg-gradient-to-br from-[#8885e5] to-[#9f9ddf] rounded-xl text-white p-5">
              <Image
                src="/image/CCWBerlin.png"
                alt="CCW Berlin"
                width={110}
                height={36}
                className="mb-3"
              />
              <p className="text-sm mb-4">
                CCW Berlin brings together experts and companies to explore the
                future of AI.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Berlin</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">4 Feb</span>
              </div>
              <Link
                href="/learnmore/"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#625FD0] px-4 py-2 text-sm text-white font-semibold transition-all duration-200 hover:bg-[#4f4cb8]"
              >
                Register <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Talk to expert — always visible on mobile */}
            <Link
              href="/learnmore/"
              className="mx-4 mb-4 flex items-center gap-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-0.5">Talk to an Expert</h4>
                <p className="text-sm text-gray-600">Schedule a call with our experts.</p>
              </div>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-[#625FD0] transition-colors duration-200 flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
              </div>
            </Link>
          </div>

          {/* ═══════════ DESKTOP LAYOUT (3-column grid) ═══════════ */}
          <div className="hidden lg:grid grid-cols-3 gap-5">

            {/* Column 1 — Resources + Support */}
            <div className="space-y-6 p-6 rounded-2xl bg-white">
              <div>
                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Resources
                </h4>
                <ul className="space-y-0.5">
                  {resourceLinks.map((item, i) => (
                    <li key={i}>
                      <Link href="/learnmore/" className={linkClass}>
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Support
                </h4>
                <ul className="space-y-0.5">
                  {supportLinks.map((item, i) => (
                    <li key={i}>
                      <Link href="/learnmore/" className={linkClass}>
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 2 — Company + Guides */}
            <div className="space-y-5">
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  Company
                </h4>
                <ul className="space-y-0.5">
                  {companyLinks.map((item, i) => (
                    <li key={i}>
                      <Link href="/learnmore/" className={linkClass}>
                        <span>{item}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
                  Agentic AI Guides
                </h4>
                <div className="space-y-4">
                  {guides.map((item, i) => (
                    <Link key={i} href="/learnmore/" className="flex gap-3 group">
                      <Image
                        src={item.img}
                        alt=""
                        width={80}
                        height={60}
                        className="rounded-lg object-cover flex-shrink-0"
                      />
                      <p className="text-sm text-gray-700 group-hover:text-[#625FD0] transition-colors line-clamp-3">
                        {item.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3 — Event + CTA */}
            <div className="bg-white p-6 rounded-2xl space-y-5">
              <div className="bg-gradient-to-br from-[#8885e5] to-[#9f9ddf] rounded-xl text-white p-5">
                <Image
                  src="/image/CCWBerlin.png"
                  alt="CCW Berlin"
                  width={120}
                  height={40}
                  className="mb-3"
                />
                <p className="text-sm mb-4">
                  CCW Berlin brings together experts and companies to explore the
                  future of AI.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Berlin</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">4 Feb</span>
                </div>
                <Link
                  href="/learnmore/"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#625FD0] px-4 py-2 text-sm text-white font-semibold hover:bg-[#4f4cb8] transition-all duration-200"
                >
                  Register <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Link
                href="/learnmore/"
                className="flex gap-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-0.5">Talk to an Expert</h4>
                  <p className="text-sm text-gray-600">Schedule a call with our experts.</p>
                </div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-[#625FD0] transition-colors duration-200 flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}