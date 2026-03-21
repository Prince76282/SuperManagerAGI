import Link from "next/link";

// --- Data ---
const recognitions = [
  {
    heading: "Trusted by organizations building autonomous AI operations",
    body: "Forward-thinking enterprises use SuperManager AGI to design and orchestrate intelligent AI agents that automate complex workflows, streamline operations, and improve decision-making across teams.",
    ctaLabel: "Explore Customer Stories",
    ctaHref: "/learnmore",
    imgSrc: "/Image/Trusted-operations.jpg",
    badge: "Enterprise Adoption",
  },
  {
    heading: "Powering the next generation of AI workforces",
    body: "SuperManager AGI enables companies to deploy collaborative AI agents that perform research, analysis, operational tasks, and decision support  working alongside human teams to accelerate productivity.",
    ctaLabel: "View Platform",
    ctaHref: "/learnmore",
    imgSrc: "/Image/Powering-workforces.jpg",
    badge: "AI Workforce",
  },
  {
    heading: "Built for scalable, enterprise-grade AI infrastructure",
    body: "From multi-agent orchestration to observability, governance, and security, SuperManager AGI provides the foundation organizations need to safely scale AI automation across departments.",
    ctaLabel: "Explore Platform",
    ctaHref: "/learnmore",
    imgSrc: "/Image/Built-infrastructure.jpg",
    badge: "Platform Architecture",
  },
];

// --- Main Component ---
export default function AutonomousAgent() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl text-black leading-tight">
            Trusted by Teams Building
            <span className="text-[#625FD0]"> AI-Driven Organizations</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            SuperManager AGI helps organizations design, deploy, and scale
            intelligent AI agents that transform operations, automate workflows,
            and unlock new levels of productivity across the enterprise.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          {recognitions.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition"
            >

              {/* Text */}
              <div className="flex flex-col justify-between p-8 lg:p-10">
                <div className="space-y-5">

                  {/* Badge */}
                  <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold bg-[#625FD0]/10 text-[#625FD0]">
                    {item.badge}
                  </span>

                  <h3 className="text-xl lg:text-2xl font-bold text-black leading-snug">
                    {item.heading}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>

                <Link
                  href={item.ctaHref}
                  className="inline-flex items-center justify-center mt-4 gap-2 px-6 py-3 rounded-lg bg-[#625FD0] text-white  hover:opacity-90 transition"
                >
                  {item.ctaLabel}
             
                </Link>
              </div>

              {/* Image */}
              <div className="relative min-h-[260px] bg-gray-100">
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