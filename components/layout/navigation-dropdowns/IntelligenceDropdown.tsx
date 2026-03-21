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
import { LucideIcon } from "lucide-react";

import { insights } from "@/lib/Dataset/contentData";

type Props = {
  onClose?: () => void;
};

type Capability = {
  icon: LucideIcon;
  text: string;
};

type SectionItem = {
  label: string;
  href: string;
};

type Section = {
  title: string;
  items: SectionItem[];
};

export default function IntelligenceDropdown({ onClose }: Props) {
  const handleClick = () => onClose?.();

  const capabilities: Capability[] = [
    { icon: Users, text: "Multi-AGI Orchestration" },
    { icon: Brain, text: "AGI Decision Engine" },
    { icon: Zap, text: "Team + Resource AI" },
    { icon: Shield, text: "AGI Security + Governance" },
    { icon: Code, text: "No-Code + Low-Code Tools" },
    { icon: Link2, text: "Integrations" },
  ];

  const sections: Section[] = [
    {
      title: "GET STARTED",
      items: [
        { label: "AGI for Leadership", href: "/leadership" },
        { label: "AGI for Execution", href: "/execution" },
        { label: "AGI for Strategy", href: "/strategy" },
        {
          label: "Manager Marketplace",
          href: "https://app.supermanager.co/login",
        },
      ],
    },
    {
      title: "LEARN + DISCOVER",
      items: [
        { label: "About Us", href: "/aboutus" },
        { label: "Customer Stories", href: "/customer-stories" },
        { label: "Partners", href: "/partners" },
        { label: "Resource Hub", href: "/resource" },
        { label: "Blog", href: "/blog" },
        { label: "Whitepapers", href: "/white-papers" },
        { label: "AGI Research Reports", href: "/research-reports" },

        { label: "Documentation", href: "/doc" },
        { label: "Get Support", href: "/support" },
      ],
    },
    {
      title: "GET INVOLVED",
      items: [{ label: "Contact Us", href: "/contactus" }],
    },
  ];

  return (
    <div className="absolute lg:left-2/3 lg:-translate-x-2/5 left-0 top-full mt-2 w-full lg:w-screen max-w-322.5 z-50 dropdown-open lg:ml-4">
      <div className="p-4 sm:p-6 lg:p-8 max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-1 mb-25 lg:grid-cols-3 gap-4">
          {/* COLUMN 1 */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-6">
            {/* HERO */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-5">
              <Image
                src="/image/Manager-Platform.jpg"
                alt="Manager Platform"
                width={400}
                height={200}
                className="w-full h-auto rounded-lg mb-4"
              />

              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-[#625FD0]" />
                <h3 className="text-lg  text-gray-900">Manager Platform</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Your strategic enabler for enterprise management transformation
                through AGI.
              </p>

              <Link
                href="/managerplatform"
                onClick={handleClick}
                className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold"
              >
                Learn More
              </Link>
            </div>

            {/* CAPABILITIES */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                CAPABILITIES
              </h4>

              <ul className="space-y-3">
                {capabilities.map((item) => (
                  <li key={item.text}>
                    <span
                      onClick={handleClick}
                      className="flex justify-between items-center gap-3 text-sm text-gray-700 hover:text-[#625FD0] group transition"
                    >
                      <div className="flex gap-4">
                        <item.icon className="w-4 h-4 text-gray-400 group-hover:text-[#625FD0]" />
                        {item.text}
                      </div>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg text-gray-700 uppercase tracking-wider mb-3">
                  {section.title}
                </h4>

                <ul className="space-y-2">
                  {section.items.map((item) => (
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
            ))}
          </div>

          {/* COLUMN 3 */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-6">
            {/* EVENT */}
            <div className="bg-linear-to-br from-[#8885e5] to-[#9f9ddf] rounded-xl overflow-hidden text-white">
              <div className="p-5">
                <Image
                  src="/image/Experience-Action.png"
                  alt="CCW Berlin"
                  width={120}
                  height={40}
                  className="mb-3 rounded-lg"
                />

                <h1 className="text-lg mb-4">
                  Experience SuperManager AGI in Action
                </h1>

                <p className="text-sm mb-4">
                  Explore how SuperManager AGI enables organizations to build
                  autonomous AI teams that plan, execute, and optimize work
                  without constant human coordination.
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
                  href="/resource"
                  onClick={handleClick}
                  className="inline-flex items-center justify-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* INSIGHTS */}
            <div>
              <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-4">
                RECENT AGI INSIGHTS
              </h4>

              <div className="space-y-4">
                {insights.map((item) => (
                  <Link
                    key={item.title}
                    href={`/resource/${item.id}`}
                    onClick={handleClick}
                    className="block group"
                  >
                    <div className="flex gap-3">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={80}
                        height={60}
                        className="rounded-lg object-cover"
                      />

                      <div>
                        <p className="text-sm text-gray-700 group-hover:text-[#625FD0] line-clamp-2 mb-1">
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
