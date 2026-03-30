const cards = [
  {
    icon: "📊",
    tag: "REAL-TIME PROJECT VISIBILITY",
    body: "Gain complete visibility into project execution across teams and departments. SuperManager AGI continuously analyzes tasks, milestones, and timelines to help leaders understand progress, identify risks early, and keep initiatives on track.",
  },
  {
    icon: "👥",
    tag: "WORKFORCE PERFORMANCE INTELLIGENCE",
    body: "Understand how your teams work and collaborate. SuperManager AGI analyzes productivity patterns, workload distribution, and operational performance to help organizations optimize workforce efficiency and improve team outcomes.",
  },
  {
    icon: "🤖",
    tag: "AI-DRIVEN OPERATIONAL DECISIONS",
    body: "Move beyond static reporting with intelligent insights. SuperManager AGI uses AI to detect operational bottlenecks, recommend resource allocation, and support faster decision-making across projects and business operations.",
  },
];

export default function ProjectWorkforceSection() {
  return (
    <section className="bg-white ">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl  text-black mb-5 leading-tight">
            Intelligent Visibility for
            <span className="text-[#625FD0]"> Projects & Workforce</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            SuperManager AGI transforms how organizations manage projects and
            teams. By combining workforce analytics, project intelligence, and
            AI-driven insights, leaders gain the clarity needed to allocate
            resources effectively, improve team performance, and deliver complex
            initiatives with confidence.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="border border-gray-200 rounded-2xl p-8 bg-white hover:border-[#625FD0] hover:shadow-lg transition-all duration-200"
            >
              {/* Icon */}

              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#625FD0]/10 text-[#625FD0] text-xl mb-6">
                {card.icon}
              </div>

              {/* Tag */}

              <p className="text-xs  tracking-wider uppercase text-[#625FD0] mb-3">
                {card.tag}
              </p>

              {/* Body */}

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
