import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

/* ---------------- TYPES ---------------- */

type NavItem = {
  label: string;
  href: string;
};

type GuideItem = {
  img: string;
  title: string;
  href: string;
};

type InsightsDropdownProps = {
  onClose?: () => void; // optional because you check it before calling
};

/* ---------------- COMPONENT ---------------- */

export default function InsightsDropdown({ onClose }: InsightsDropdownProps) {
  const handleClick = () => {
    onClose?.();
  };

  const resources: NavItem[] = [
    { label: "Resource Hub", href: "./learnmore" },
    { label: " Blog", href: "./blog" },
    { label: "Whitepapers", href: "./white-papers/" },
    { label: "Webinars", href: "./learnmore" },
    { label: "AI Research Reports", href: "./learnmore" },
    { label: "AI Glossary", href: "./learnmore" },
    { label: "Videos", href: "./learnmore" },
    { label: "AI Pulse", href: "./learnmore" },
    { label: "Manager Replacement 101", href: "./learnmore" },
    { label: "Adaptive AGI Framework", href: "./learnmore" },
    { label: "CMO Toolkit", href: "./learnmore" },
  ];

  const support: NavItem[] = [
    { label: "Documentation", href: "./doc/" },
    { label: "Get support", href: "./support/" },
    { label: "Submit RFP", href: "./get-in-touch" },
    { label: "Academy", href: "./learnmore" },
    { label: "Community", href: "./learnmore" },
  ];

  const company: NavItem[] = [
    { label: "About us", href: "./aboutus" },
    { label: "Leadership", href: "./leadership/" },
    { label: "Customer Stories", href: "./customer-stories/" },
    { label: "Partners", href: "./partners/" },
    { label: "Analyst Recognition", href: "./analyst-recognition/" },
    { label: "Newsroom", href: "./news-room" },
    { label: "Events", href: "./learnmore" },
    { label: "Careers", href: "./learnmore" },
    { label: "Contact us", href: "./contactus" },
  ];

  const guides: GuideItem[] = [
    {
      img: "/image/Solution,2024.png",
      title: "SuperManager AGI: Recognized as a Leading Project Management Solution, 2024",
      href: "./learnmore",
    },
    {
      img: "/image/101.png",
      title: "Generative AI 101",
      href: "./learnmore",
    },
    {
      img: "/image/CXO AI toolkit.png",
      title: "CXO AI toolkit for enterprise AI success",
      href: "./learnmore",
    },
  ];

  return (
    <div className="absolute lg:left-1/2 lg:-translate-x-1/2 left-0 top-full mt-2 w-full lg:w-screen max-w-322.5 z-50 dropdown-open">
      <div className="p-4 sm:p-6 lg:p-8 mr-3 max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 mb-25 lg:grid-cols-3 gap-4">

          {/* Column 1 */}
          <div className="space-y-6 p-4 sm:p-6 rounded-2xl bg-white">

            {/* Resources */}
            <div>
              <h4 className="text-md text-gray-700 mb-1">RESOURCES</h4>
              <ul className="space-y-2">
                {resources.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={handleClick}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-[#625FD0] group py-1"
                    >
                      {item.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-md font-semibold text-gray-700 uppercase tracking-wider mb-3">
                SUPPORT
              </h4>
              <ul className="space-y-2">
                {support.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={handleClick}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-[#625FD0] group py-1"
                    >
                      {item.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">

            {/* Company */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl">
              <h4 className="text-md font-semibold text-gray-700 uppercase tracking-wider mb-3">
                COMPANY
              </h4>
              <ul className="space-y-2">
                {company.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={handleClick}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-[#625FD0] group py-1"
                    >
                      {item.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides */}
            <div className="bg-white rounded-2xl p-4 sm:p-6">
              <h4 className="text-md font-semibold text-gray-700 uppercase tracking-wider mb-4">
                AGENTIC AI GUIDES
              </h4>

              <div className="space-y-4">
                {guides.map((item) => (
                  <Link key={item.title} href={item.href} onClick={handleClick} className="block group">
                    <div className="flex gap-3">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={80}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <p className="text-sm text-gray-700 group-hover:text-[#625FD0] line-clamp-2">
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
            <div className="bg-linear-to-br from-[#8885e5] to-[#9f9ddf] rounded-xl overflow-hidden text-white">
              <div className="p-5">
                <Image src="/image/CCWBerlin.png" alt="CCW Berlin" width={120} height={40} className="mb-3" />

                <p className="text-sm mb-4">
                  CCW Berlin brings together experts and companies to explore the future of AI.
                </p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Berlin</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs">4 Feb</span>
                </div>

                <Link
                  href="./learnmore"
                  onClick={handleClick}
                  className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="./learnmore"
              onClick={handleClick}
              className="block bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-5 hover:shadow-lg group"
            >
              <div className="flex gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Talk to an Expert</h4>
                  <p className="text-sm text-gray-600">
                    Schedule a call with our experts.
                  </p>
                </div>

                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-[#625FD0]">
                  <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}