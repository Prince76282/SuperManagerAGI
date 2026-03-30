import Link from "next/link";

// --- Data ---
const recognitions = [
  {
    heading: "Top 10 AI Startups in the World",
    body: "Recognised by Perplexity  SuperManager AGI is listed among the Top 10 AI Startups in the World for pioneering the Vibe Working Platform architecture and the ADA Integration Layer that eliminates the network boundary assumption from enterprise AI.",
    ctaLabel: "Explore Platform",
    ctaHref: "./",
    imgSrc: "/Image/Trusted-enterprises.png",
    badge: "Top 10 AI Startup",
  },
  {
    heading: "Accelerated by Microsoft",
    body: "SuperManager AGI is accelerated by Microsoft under the Microsoft Accelerator Programme  validating the Beehive Agentic Architecture and ADA Integration Layer as foundational infrastructure for next-generation enterprise AI deployment.",
    ctaLabel: "Learn More",
    ctaHref: "/learnmore",
    imgSrc: "/Image/Powering-AI.jpg",
    badge: "Microsoft Accelerator",
  },
  {
    heading: "Peer-Reviewed Research",
    body: "Published Architecture  March 2026. The Agentic Data Architecture paper is submitted for peer review, documenting configurations, hyperparameters, and benchmark results across 10,000 enterprise queries. All results are reproducible on consumer hardware with no GPU or cloud API dependency.",
    ctaLabel: "Access Research",
    ctaHref: "/learnmore",
    imgSrc: "/Image/Designed-scalable.jpg",
    badge: "Peer-Reviewed Research",
  },
];

// --- Main Component ---
export default function AnalystRecognition() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl  text-black">
            Trusted by Organisations Building
            <span className="text-[#625FD0]"> AI-Driven Operations</span>
          </h2>
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
                  className="inline-flex mt-4 items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#625FD0] text-white  hover:opacity-90 transition"
                >
                  {item.ctaLabel}
                </Link> */}
              </div>

              {/* Image */}
              <div className="relative min-h-[260px]">
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
