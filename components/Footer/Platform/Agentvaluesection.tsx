const cards = [
  {
    icon: "⚡",
    tag: "ACCELERATE AI DEPLOYMENT",
    body: "Launch intelligent AI agents faster with ready-to-use templates, integrations, and orchestration tools that allow teams to move from experimentation to production rapidly.",
  },
  {
    icon: "🧩",
    tag: "BUILD A FLEXIBLE AI PLATFORM",
    body: "Integrate seamlessly with your existing systems, data sources, and models. SuperManager AGI provides an open architecture that adapts to your organization’s evolving AI strategy.",
  },
  {
    icon: "🛡",
    tag: "SCALE WITH CONTROL AND GOVERNANCE",
    body: "Monitor AI performance, enforce governance policies, and maintain enterprise-grade security while scaling AI workflows across departments and business operations.",
  },
];

export default function AgentValueSection() {
  return (
    <section className="bg-white ">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl  text-black mb-4">
            Unlock the Full Value of
            <span className="text-[#625FD0]"> SuperManager AGI</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Move beyond AI experiments and build a scalable AI workforce.
            SuperManager AGI helps organizations deploy, orchestrate, and
            optimize intelligent agents across the enterprise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="border-2 border-gray-200 rounded-2xl p-7 bg-white hover:border-[#625FD0] hover:shadow-lg transition-all duration-200"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#625FD0]/10 text-[#625FD0] text-xl mb-5">
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
