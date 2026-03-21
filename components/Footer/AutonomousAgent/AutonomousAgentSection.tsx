const cards = [
  {
    icon: "⚡",
    tag: "ACCELERATE AI DEPLOYMENT",
    body: "Launch autonomous AI agents in minutes instead of months. SuperManager AGI provides pre-built agent templates, orchestration frameworks, and integrations that allow teams to move quickly from experimentation to production-scale AI systems.",
  },
  {
    icon: "🧠",
    tag: "BUILD AN AUTONOMOUS AI WORKFORCE",
    body: "Create intelligent AI agents that collaborate, reason, and execute tasks across enterprise workflows. SuperManager AGI enables organizations to coordinate multiple agents working together to automate complex operations.",
  },
  {
    icon: "🛡",
    tag: "SCALE WITH GOVERNANCE AND CONTROL",
    body: "Deploy AI across departments with confidence. Monitor agent behavior, enforce governance policies, and maintain enterprise-grade security while scaling AI-powered workflows across the organization.",
  },
];

export default function AutonomousAgentSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl  text-black mb-4 leading-tight">
            Unlock the Full Potential of
            <span className="text-[#625FD0]"> SuperManager AGI</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Move beyond isolated AI experiments and build a scalable AI
            workforce. SuperManager AGI empowers organizations to design,
            orchestrate, and optimize intelligent AI agents that automate
            complex business operations across teams, systems, and data.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="border border-gray-200 rounded-2xl p-7 bg-white hover:border-[#625FD0] hover:shadow-lg transition-all duration-200"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#625FD0]/10 text-[#625FD0] text-xl mb-5">
                {card.icon}
              </div>

              {/* Tag */}
              <p className="text-xs font-semibold tracking-wider uppercase text-[#625FD0] mb-3">
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
