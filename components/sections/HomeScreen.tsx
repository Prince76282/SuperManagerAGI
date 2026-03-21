import Image from "next/image";
import Link from "next/link";

const companies = [
  { name: "Adobe", src: "/image/newimage/Adobe.png", width: 120 },
  { name: "BrowserStack", src: "/image/newimage/Browser1.png", width: 200 },
  { name: "Zoho", src: "/image/newimage/Zoho.png", width: 120 },
  { name: "Microsoft", src: "/image/newimage/Microsoft.png", width: 200 },
  { name: "Sprinto", src: "/image/newimage/Sprinto.png", width: 120 },
  { name: "Perplexity", src: "/image/newimage/perplexity.png", width: 200 },
  { name: "Socket", src: "/image/newimage/Socket.png", width: 120 },
  { name: "Nvidia", src: "/image/newimage/image.png", width: 200 },
];

const features = [
  {
    title: "Prompt and Do Any Task",
    description:
      "Type a natural language instruction and SuperManager AGI executes it across every connected application. The Controller Agent decomposes tasks into a DAG of subtasks, dispatches them to specialist agents in parallel using a work-stealing scheduler, and commits validated results. From creating tickets and sending updates to generating reports and reconciling settlementsone prompt, work done.",
    image: "/image/newimage/image1.1.png",
    href: "/learnmore/",
  },
  {
    title: "Prompt and Get Data 1,000 Feet Deep",
    description:
      "Access critical data across 8–12 disconnected tools instantly. The ADA Integration Layer connects agents natively to databases with 2–15ms latencyno slow APIs. Query operations, finances, inventory, pipeline, or customers and receive precise answers from live enterprise data in under 65ms. No cached summaries. No dashboard approximations.",
    image: "/image/newimage/image1.2.png",
    href: "/learnmore/",
  },
  {
    title: "Multi-Action Agent Orchestration",
    description:
      "Execute complex workflows across multiple applications automatically. The Beehive Architecture deploys specialist agents that run in parallel. Evidence-majority voting validates outputs before execution. Achieve 6.7x throughput with 10 parallel agents and 97% task execution accuracy.",
    image: "/image/newimage/image1.5.png",
    href: "/learnmore/",
  },
  {
    title: "Autonomous AI Agents Running 24x7",
    description:
      "Deploy always-on agents that monitor systems, detect triggers, and execute actions without prompts. Includes inventory agents, finance reconciliation agents, NDR management agents, campaign monitoring agents, and customer care agentsall autonomous, coordinated, and fully auditable.",
    image: "/image/newimage/image1.4.png",
    href: "/learnmore/",
  },
  {
    title: "Universal Application Connectivity",
    description:
      "Connect 200+ applications including Shopify, Amazon, Flipkart, Shiprocket, Jira, Slack, Salesforce, HubSpot, GitHub, SAP, Workday, Razorpay, and more. Every app becomes a system agents can read, write, and execute tasks insimultaneously and in the correct sequence.",
    image: "/image/newimage/image1.8.png",
    href: "/learnmore/",
  },
  {
    title: "Human in the Loop Controls",
    description:
      "Maintain full control with audit trails, approval gates, and override mechanisms. Critical decisions are routed to the right human before execution. AI handles operations while humans retain final authority.",
    image: "/image/newimage/image1.6.png",
    href: "/learnmore/",
  },
  {
    title: "ADA Integration Layer",
    description:
      "Powered by proprietary Agentic Data Architecture, enabling direct database access without APIs, MCP overhead, or rate limits. Achieves 2–15ms latency vs 200–500ms traditional systems. Reduces hallucination rates from 22.4% to 4.2% through evidence-grounded outputs. Peer-reviewed and runs on consumer hardware without GPUs.",
    image: "/image/newimage/image1.7.png",
    href: "/learnmore/",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full">

      {/* 🎥 Fixed Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 h-screen w-screen object-cover -z-10 pointer-events-none"
        poster="/image/newimage/image2.png"
      >
        <source src="/image/World'sFirst/background.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="fixed inset-0 -z-10" />

      {/* 🌟 Scrollable Content */}
      <div className="relative z-10 text-black">

        {/* Hero */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-12 lg:py-22">
            <h1 className="mx-auto max-w-[700px] text-center  text-3xl mt-10 md:text-5xl xl:text-6xl leading-tight">
             The AI Vibe Working Platform
            </h1>

            <p className="mx-auto mt-6 max-w-[700px] font-[var(--font-grotesk)] text-center text-base md:text-lg">
             SuperManager AGI is the world’s first and most advanced AI Vibe Working Platform. Prompt and do any task. Prompt and get data 1,000 feet deep inside your enterprise. Deploy autonomous AI agents that work 24x7 across every application, every department and every workflow  executing tasks, coordinating between systems and delivering outcomes without manual triggers . Save 20+ Hours per Team Member per Week.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="https://app.supermanager.co/login"
                target="_blank"
                className="rounded-lg bg-[#625FD0] text-md text-white px-4 py-2 font-[var(--font-spartan)] font-semibold  transition"
              >
                OPEN APP

              </Link>
            </div>
          </div>
        </div>

        {/* 🤝 Trusted By */}
        <div className="mx-auto max-w-[1100px] px-5 pb-14 text-center">
          <h1 className="mb-4 font-[var(--font-spartan)] text-black text-xl md:text-2xl font-bold">
            Trusted by 100+ Leading Companies
          </h1>
          <p className="text-md">Companies using or associated with the ecosystem include</p>

          <div className="overflow-hidden group">
            <div className="flex w-max animate-marquee gap-12 group-hover:[animation-play-state:paused]">
              {[...companies, ...companies].map((company, index) => (
                <div key={index} className="flex items-center justify-center px-6">
                  <Image
                    src={company.src}
                    alt={company.name}
                    width={company.width}
                    height={80}
                    className="h-[100px] object-contain opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🚀 Features */}
        <div className="mx-auto max-w-[1200px] px-4 pb-20 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.href}
              className="group snap-start flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] rounded-2xl bg-white/10 backdrop-blur-md border-2 border-gray-300/50 text-black transition-all hover:bg-white/15 hover:shadow-xl"
            >
              <div className="flex h-full flex-col">
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-md">{feature.description}</p>
                </div>

                <div className="relative h-56 w-full px-6 pb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}