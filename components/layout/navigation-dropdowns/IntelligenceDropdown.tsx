import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  Shield,
  Users,
  Zap,
  Code,
  Link2,
} from "lucide-react";

export default function IntelligenceDropdown({ onClose }) {

  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <div
      className="
      absolute lg:left-2/3 lg:-translate-x-2/5
      left-0 top-full mt-2
      w-full lg:w-screen max-w-[1290px] 
      z-50 dropdown-open lg:ml-4
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
        <div className="grid grid-cols-1 mb-25 lg:grid-cols-3 gap-4">

          {/* Column 1 */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-6">

            {/* Hero Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5">
              <Image
                src="/image/management.png"
                alt="Manager Platform"
                width={400}
                height={200}
                className="w-full rounded-lg mb-4"
              />

              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-[#625FD0]" />
                <h3 className="text-lg font-bold text-gray-900">
                  Manager Platform
                </h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Your strategic enabler for enterprise management transformation
                through AGI.
              </p>

              <Link
                href="./learnmore/"
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300 ease-in-out"
              >
                Learn More
              </Link>
            </div>

            {/* Capabilities */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                CAPABILITIES
              </h4>

              <ul className="space-y-3">
                {[
                  { icon: Users, text: "Multi-AGI Orchestration" },
                  { icon: Brain, text: "AGI Decision Engine" },
                  { icon: Zap, text: "Team + Resource AI" },
                  { icon: Shield, text: "AGI Security + Governance" },
                  { icon: Code, text: "No-Code + Low-Code Tools" },
                  { icon: Link2, text: "Integrations" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="/learnmore/"
                      onClick={handleClick}
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#625FD0] transition-colors duration-300 ease-in-out group"
                    >
                      <item.icon className="w-4 h-4 text-gray-400 group-hover:text-[#625FD0]" />
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-6">

            {[
              {
                title: "GET STARTED",
                items: [
                  "AGI for Leadership",
                  "AGI for Execution",
                  "AGI for Strategy",
                  "Manager Marketplace",
                ],
              },
              {
                title: "LEARN + DISCOVER",
                items: [
                  "About SuperManager AGI",
                  "Customer Stories",
                  "Partners",
                  "Resource Hub",
                  "Insights Blog",
                  "Whitepapers",
                  "AGI Research Reports",
                  "Newsroom",
                  "Documentation",
                  "Get Support",
                  "Academy",
                ],
              },
              {
                title: "GET INVOLVED",
                items: [
                  "AGI Pulse",
                  "Events",
                  "Community",
                  "Careers",
                  "Contact Us",
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                  {section.title}
                </h4>

                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href="/learnmore/"
                        onClick={handleClick}
                        className="text-sm text-gray-700 hover:text-[#625FD0] transition-colors duration-300 ease-in-out"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-6">

            {/* Event Card */}
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
                  onClick={handleClick}
                  className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300 ease-in-out"
                >
                  Register 
                </Link>
              </div>
            </div>

            {/* Insights */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
                RECENT AGI INSIGHTS
              </h4>

              <div className="space-y-4">
                {[
                  {
                    img: "/image/AGIleadership.png",
                    title:
                      "The manager replacement wave: why companies are cutting management layers faster...",
                    date: "12 Jan 2026",
                  },
                  {
                    img: "/image/decline.png",
                    title:
                      "The decline of middle management and rise of autonomous AGI systems",
                    date: "01 Dec 2025",
                  },
                  {
                    img: "/image/GImanagers andhumans.png",
                    title:
                      "AGI managers and humans: Empowering intelligent systems for real management work...",
                    date: "12 Nov 2025",
                  },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href="/learnmore/"
                    onClick={handleClick}
                    className="block group"
                  >
                    <div className="flex gap-3">
                      <Image
                        src={item.img}
                        alt=""
                        width={80}
                        height={60}
                        className="rounded-lg object-cover"
                      />

                      <div>
                        <p className="text-sm text-gray-700 group-hover:text-[#625FD0] transition-colors duration-300 ease-in-out line-clamp-2 mb-1">
                          {item.title}
                        </p>
                        <span className="text-xs text-gray-500">
                          AI INSIGHT • {item.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}