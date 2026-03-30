// --- Data ---

import Link from "next/link";

const recognitions = [
  {
    heading:
      "Transform project execution with real-time operational intelligence",
    body: "Organizations use SuperManager AGI to gain deep visibility into project execution across teams and departments. By analyzing timelines, milestones, and operational signals, leaders can identify risks early, improve coordination, and ensure successful delivery of complex initiatives.",
    ctaLabel: "Explore Operational Intelligence",
    ctaHref: "/learnmore",
    imgSrc: "/Image/Transform-Intelligence.png",
    badge: "Project Intelligence",
  },
  {
    heading: "Empower teams with workforce performance insights",
    body: "SuperManager AGI analyzes collaboration patterns, workload distribution, and productivity metrics to help organizations optimize team performance. Leaders gain actionable insights that support smarter workforce planning and improved operational efficiency.",
    ctaLabel: "View Workforce Analytics",
    ctaHref: "/learnmore",
    imgSrc: "/Image/Empower-teams.jpg",
    badge: "Workforce Intelligence",
  },
  {
    heading: "Build an AI-powered operational command center",
    body: "SuperManager AGI brings together project data, workforce insights, and operational analytics into a unified intelligence platform. Executives gain a real-time command center for monitoring performance, managing resources, and making faster strategic decisions.",
    ctaLabel: "Explore Platform",
    ctaHref: "/learnmore",
    imgSrc: "/Image/Build-AI-powered.jpg",
    badge: "Operational Intelligence",
  },
];

// --- Arrow icon ---

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
      <path d="M12.293 4.293 17.707 9.707 12.293 15.121 10.879 13.707 13.879 10.707H2V8.707H13.879L10.879 5.707z" />
    </svg>
  );
}

export default function ProjectWorkforce() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl  text-black leading-tight">
            Intelligence for
            <span className="text-[#625FD0]"> Projects & Workforce</span>
          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-relaxed">
            SuperManager AGI transforms how organizations manage projects,
            teams, and operations. By turning operational data into actionable
            intelligence, leaders gain the insights needed to optimize workforce
            performance, improve execution, and deliver initiatives with
            confidence.
          </p>
        </div>

        {/* Cards */}

        <div className="flex flex-col gap-10">
          {recognitions.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Text */}

              <div className="flex flex-col justify-between p-8 lg:p-10">
                <div className="space-y-5">
                  {/* Badge */}

                  <span className="inline-flex self-start px-3 py-1 rounded-full text-xs  bg-[#625FD0]/10 text-[#625FD0]">
                    {item.badge}
                  </span>

                  <h3 className="text-xl lg:text-2xl  text-black leading-snug">
                    {item.heading}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>

                {/* <Link
                  href={item.ctaHref}
                  className="inline-flex items-center justify-center mt-4 gap-2 px-6 py-3 rounded-lg bg-[#625FD0] text-white  hover:opacity-90 transition"
                >
                  {item.ctaLabel}
                </Link> */}
              </div>

              {/* Image */}

              <div className="relative min-h-[260px] md:min-h-full bg-gray-100">
                <img
                  src={item.imgSrc}
                  alt={item.heading}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
