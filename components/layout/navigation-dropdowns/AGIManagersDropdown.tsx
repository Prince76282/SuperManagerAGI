import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/* ================= TYPES ================= */

type DropdownProps = {
  onClose?: () => void;
};

type Category = {
  title: string;
  items: string[];
};

type Section = {
  title: string;
  desc: string;
  href: string;
  categories: Category[];
};

type Resource = {
  img: string;
  text: string;
};

type ListBlockProps = {
  title: string;
  items: string[];
};

/* ================= DATA ================= */

const sections: Section[] = [
  {
    title: "AGI for Leadership",
    desc: "Replace team leads and engineering managers with AGI. Autonomous coordination. Intelligent decisions. Drive performance.",
    href: "/learnmore/",
    categories: [
      {
        title: "CAPABILITIES",
        items: [
          "Autonomous Decision Making",
          "Team Coordination",
          "Daily Standup Management",
          "Work Assignment & Distribution",
          "Performance Tracking & Blocker Resolution",
          "Career Development",
        ],
      },
      {
        title: "DEPARTMENTS",
        items: [
          "Engineering",
          "Product",
          "Operations",
          "Consulting",
          "IT",
          "Finance",
          "Marketing",
        ],
      },
      {
        title: "PREBUILT",
        items: [
          "Strategy AGI",
          "Delivery AGI",
          "Resource AGI",
          "TaskMaster AGI",
        ],
      },
    ],
  },
  {
    title: "AGI for Execution",
    desc: "Leverage AGI capabilities to autonomously execute projects and deliver outcomes without human intervention.",
    href: "/learnmore/",
    categories: [
      {
        title: "CAPABILITIES",
        items: [
          "Sprint Management",
          "Ticket Automation",
          "Status Reporting",
          "Risk Detection",
          "Dependency Management",
          "Release Planning",
          "Documentation Generation"
        ],
      },
      {
        title: "USE CASES",
        items: [
          "Eliminate Status Meetings",
          "Automate Ticket Management",
          "Real time Progress Tracking",
          "Predictive Risk Alerts",
          
        ],
      },
      {
        title: "PRE BUILT MANAGERS",
        items: [
          "Delivery AGI",
          "TaskMaster AGI",
          "Docs AGI",
          "Risk AGI",
          "Release AGI"
        ],
      },
    ],
  },
  {
    title: "AGI for Strategy",
    desc: "Streamline strategic planning and resource allocation with autonomous AGI intelligence.",
    href: "/learnmore/",
    categories: [
      {
        title: "CAPABILITIES",
        items: [
          "Portfolio Management",
          "Resource Optimization",
          "Roadmap Planning",
          "Capacity Analysis",
          "Priority Decisions",
          "OKR Tracking",
          "Budget Allocation"
        ],
      },
      {
        title: "USE CASES",
        items: [
          "Replace PMO Functions",
          "Optimize Resource Allocation",
          "Strategic Planning Automation",
          "Cost Reduction Programs",
       
        ],
      },
      {
        title: "PRE BUILT MANAGERS",
        items: [
          "Strategy AGI",
          "Portfolio AGI",
          "Resource AGI",
       
        ],
      },
    ],
  },
];

const resources: Resource[] = [
  {
    img: "/image/ManagerReplacement.png",
    text: "Manager Replacement Economics: practical insights from AGI deployments",
  },
  {
    img: "/image/AGIleadership.png",
    text: "AGI leadership case studies from companies who replaced managers",
  },
  {
    img: "/image/Beyondhuman.png",
    text: "Beyond human management: how AGI leads teams autonomously",
  },
];

/* ================= SUB COMPONENTS ================= */

function ListBlock({ title, items }: ListBlockProps) {
  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-700 uppercase mb-3">
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-gray-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function QuickLinks({ onClose }: { onClose: () => void }) {
  const links = [
    { label: "About SuperManager AGI", href: "/about.html" },
    { label: "Customer Stories", href: "/learnmore/" },
    { label: "Partners", href: "/learnmore/" },
    { label: "Resources", href: "/learnmore/" },
    { label: "Blog", href: "/blog.html" },
    { label: "Whitepapers", href: "/learnmore/" },
    { label: "Documentation", href: "/learnmore/" },
    { label: "Support", href: "/learnmore/" },
    { label: "Community", href: "/learnmore/" },
    { label: "Contact", href: "/learnmore/" },
  ];

  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-700 uppercase mb-3">
        QUICK LINKS
      </h4>
      <ul className="space-y-2 text-sm text-gray-700">
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              onClick={onClose}
              className="hover:text-[#625FD0] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function AGIManagersDropdown({ onClose }: DropdownProps) {
  const handleClose = () => onClose?.();

  return (
    <div className="absolute lg:left-1/2 lg:-translate-x-1/2 left-0 top-full md:mt-2 w-full lg:w-screen max-w-[1290px] lg:ml-70 z-50 dropdown-open">
      
      <div className="p-4 sm:p-6 lg:p-8 max-h-[90vh] overflow-y-auto scroll-smooth scrollbar-hide">
        <div className="grid grid-cols-1 mb-25 lg:grid-cols-3 gap-4 lg:gap-5">

          {/* LEFT PANEL */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-4 sm:p-6 space-y-4">
            {sections.map((section, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl hover:bg-blue-50 transition-all duration-300 p-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                  {/* SECTION INFO */}
                  <div>
                    <h3 className="text-lg font-bold text-black mb-2">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {section.desc}
                    </p>
                    <Link
                      href={section.href}
                      onClick={handleClose}
                      className="inline-flex items-center rounded-lg bg-[#625FD0] px-4 py-2 text-white font-semibold transition-all duration-300"
                    >
                      Learn More
                      
                    </Link>
                  </div>

                  {/* CATEGORY LISTS */}
                  {section.categories.map((cat, idx) => (
                    <ListBlock key={idx} title={cat.title} items={cat.items} />
                  ))}

                </div>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 space-y-6">

            {/* TOP RESOURCES */}
            <div className="bg-gray-50 rounded-xl p-5">
              <h4 className="text-xs font-semibold text-gray-700 uppercase mb-4">
                TOP RESOURCES
              </h4>
              {resources.map((item, i) => (
                <Link
                  key={i}
                  href="/learnmore/"
                  onClick={handleClose}
                  className="block mb-4 group"
                >
                  <div className="flex gap-3">
                    <Image
                      src={item.img}
                      alt={item.text}
                      width={80}
                      height={60}
                      className="rounded-lg object-cover"
                    />
                    <p className="text-sm text-gray-700 group-hover:text-[#625FD0] transition-colors line-clamp-2">
                      {item.text}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* QUICK LINKS */}
            <QuickLinks onClose={handleClose} />

          </div>
        </div>
      </div>
    </div>
  );
}