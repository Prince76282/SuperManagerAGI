const cards = [
  {
    icon: "⚡",
    tag: "ACCELERATE AI DEPLOYMENT",
    body: "Deploy production-ready AI agents in minutes instead of months. SuperManager AGI provides pre-built agent frameworks, orchestration tools, and enterprise integrations that allow teams to move quickly from experimentation to real-world automation.",
  },
  {
    icon: "🧠",
    tag: "BUILD AN AUTONOMOUS AI WORKFORCE",
    body: "Create intelligent AI agents that collaborate, reason, and execute tasks across business systems. SuperManager AGI enables organizations to orchestrate multiple AI agents working together to automate complex operations.",
  },
  {
    icon: "🛡",
    tag: "ENTERPRISE GOVERNANCE & SECURITY",
    body: "Scale AI across your organization with enterprise-grade governance. Monitor agent activity, enforce policies, and maintain full visibility with built-in security, compliance controls, and operational oversight.",
  },
];

export default function EnterpriseIntegrationsSection() {
  return (
    <section className="bg-white ">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-5xl text-black mb-5 leading-tight">
            Unlock the Full Potential of
            <span className="text-[#625FD0]"> SuperManager AGI</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Move beyond isolated AI experiments and build a scalable AI
            workforce. SuperManager AGI empowers organizations to design,
            orchestrate, and optimize intelligent AI agents that automate
            complex business operations across teams, systems, and enterprise
            data.
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
