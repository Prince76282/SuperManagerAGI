// app/page.tsx (or app/page.js)
'use client';

import { useState } from 'react';
import {
  Rocket,
  Play,
  Brain,
  Bot,
  LineChart,
  Plug,
  Shield,
  PlusCircle,
  ArrowRight,
  Mail,
  Twitter,
  Zap,
  Sparkles,
} from 'lucide-react';

export default function Home() {
  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: '🔮 What exactly is SupermanagerAGI?',
      a: 'SupermanagerAGI is an artificial general intelligence system purpose-built for organizational management. It functions as a virtual COO, capable of strategic planning, team coordination, resource optimization, and decision-making at scale. Unlike narrow AI tools, it understands context, learns from interactions, and improves autonomously. It is designed to handle the complexity of modern enterprises while reducing manual management work by up to 80%.',
    },
    {
      q: '⚙️ How does SupermanagerAGI differ from ChatGPT or other LLMs?',
      a: 'While SupermanagerAGI leverages advanced LLMs, it is a full-stack autonomous agent with persistent memory, tool use, and multi-agent coordination. Standard chatbots give answers; SupermanagerAGI takes action  it creates tasks, updates Jira tickets, sends Slack reminders, generates performance reports, and even reallocates budgets based on shifting priorities. It is an active executor, not a conversational interface.',
    },
    {
      q: '🔒 Is my company data safe with SupermanagerAGI?',
      a: 'Absolutely. Security is foundational. SupermanagerAGI provides end-to-end encryption, SOC 2 Type II compliance, and GDPR-ready architecture. Data is never used to train public models. We offer on-premise / VPC deployment for regulated industries, and all integrations follow OAuth and least-privilege principles. You keep full ownership of your information.',
    },
    {
      q: '🔌 What tools can SupermanagerAGI integrate with?',
      a: 'SupermanagerAGI connects natively to 150+ tools: Slack, Microsoft Teams, Discord, Zoom, Google Workspace, Outlook, Jira, Linear, Asana, Trello, Salesforce, HubSpot, Zendesk, GitHub, GitLab, Notion, Confluence, and many more via REST API & webhooks. Custom connectors can be built in hours. The AGI uses these integrations to read, write, and execute workflows across your entire tech stack.',
    },
    {
      q: '🚀 How do I deploy SupermanagerAGI in my organization?',
      a: 'Deployment is frictionless. First, schedule a discovery session with our AGI onboarding team. We’ll map your workflows, connect key apps, and define your governance rules. Within 3–5 days, SupermanagerAGI is live and begins with “observation mode” before gradually taking over routine management tasks. You can scale from one team to the whole enterprise. Pilot programs are fully supported.',
    },
    {
      q: '🏢 Which industries benefit the most?',
      a: 'Technology, SaaS, marketing agencies, financial services, healthcare administration, logistics, and manufacturing all see massive gains. Any organization with complex projects, distributed teams, or repetitive managerial tasks can leverage SupermanagerAGI to streamline decision-making, reduce communication silos, and increase strategic bandwidth.',
    },
    {
      q: '💸 What is the pricing model?',
      a: 'SupermanagerAGI offers flexible plans: from “Team Pilot” for small groups up to enterprise volume pricing with dedicated AGI instances. Pricing is usage-based plus fixed seat tiers. We also provide custom quotes for large-scale deployments. Book a demo to receive a personalized estimate with no obligation.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  return (
    <main className="bg-white text-black font-sans antialiased">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6">
    
        {/* Hero */}
        <section className="text-center py-12 md:py-20">
          <div className="inline-flex items-center gap-2 bg-[#f0f0ff] text-[#625FD0] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            AGI-powered management
          </div>
          <h1 className="text-3xl md:text-5xl  tracking-tight leading-tight">
            Autonomous executive.<br />
            <span className="text-[#625FD0]">10x team efficiency.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mt-6">
            SupermanagerAGI is the first autonomous general intelligence system built for management  it delegates, strategizes, and executes workflows across your org. Reduce overhead by 70% while scaling output.
          </p>
          
        </section>

        {/* Features */}
        <section className="py-12">
          <h2 className="text-3xl  lg:text-5xl  text-center">Core superpowers</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mt-3 mb-12">
            Deep AGI cognition meets real-world execution  every management layer, automated.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Bot,
                title: 'Autonomous task orchestration',
                desc: 'Decomposes high-level goals into sub-tasks, assigns them to agents or humans, and tracks progress without micromanagement.',
              },
              {
                icon: LineChart,
                title: 'Strategic foresight & analytics',
                desc: 'Predict bottlenecks, resource gaps, and market shifts. Real-time dashboards with proactive suggestions.',
              },
              {
                icon: Plug,
                title: 'Unified ecosystem integration',
                desc: 'Native connectors for Slack, Teams, Jira, Asana, Salesforce, Notion, and 100+ tools via API.',
              },
              {
                icon: Shield,
                title: 'Enterprise-grade security',
                desc: 'End-to-end encryption, SOC2 Type II, and private cloud deployment. Your data stays under your governance.',
              },
            ].map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#625FD0] transition"
              >
                <div className="bg-[#f4f3fe] w-14 h-14 flex items-center justify-center rounded-2xl mb-5 text-[#625FD0]">
                  <feat.icon className="w-7 h-7" />
                </div>
                <p className="text-lg  mb-2">{feat.title}</p>
                <p className="text-gray-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-12">
          <h2 className="text-3xl md:text-5xl  text-center">How SupermanagerAGI transforms management</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mt-3 mb-12">
            No complex setup  AGI adapts to your culture, language, and goals.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Connect & observe', desc: 'Integrate with your current stack (Slack, email, docs, CRM). SupermanagerAGI learns communication patterns, project pipelines, and strategic priorities.' },
              { step: '2', title: 'Autonomous agent creation', desc: 'The system spawns specialized sub-agents for planning, execution, review, and reporting. Each agent collaborates, escalating only when necessary.' },
              { step: '3', title: 'Continuous optimization', desc: 'Real-time feedback loops improve decision accuracy, resource allocation, and team alignment. You supervise at strategic level  AGI handles the rest.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-[#625FD0] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl  mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl  mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed description block */}
        <section className="my-12 bg-[#FEFCF5] rounded-3xl p-6 md:p-10 border-l-8 border-[#625FD0]">
          <h3 className="text-2xl md:text-3xl  mb-3">Beyond traditional AI assistants</h3>
          <p className="text-gray-700 text-lg mb-3">
            Unlike rule-based automation or narrow AI copilots, SupermanagerAGI leverages recursive reasoning, long-term memory, and meta-cognition. It doesn't just schedule meetings  it rethinks entire project roadmaps, reallocates budgets, and negotiates cross-department dependencies. Built on a novel multi-agent architecture, it mirrors the cognitive flexibility of a top-tier executive but operates 24/7 at machine speed.
          </p>
          <p className="text-gray-700">
            With SupermanagerAGI, managers focus on vision and creativity while routine coordination, data synthesis, and performance tracking become fully autonomous. Early adopters report 62% reduction in administrative overhead and 2.4x faster project delivery.
          </p>
        </section>

        {/* FAQ Accordion */}
        <section className="py-12">
          <h2 className="text-3xl md:text-4xl  text-center">Frequently asked questions</h2>
          <p className="text-gray-500 text-lg text-center max-w-6xl mx-auto mt-3 mb-10">
            Everything you need to know about SupermanagerAGI
          </p>
          <div className="max-w-6xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex justify-between items-center w-full py-5 text-left font-semibold text-gray-800 hover:text-[#625FD0] transition"
                >
                  <span className='text-lg'>{faq.q}</span>
                  <PlusCircle
                    className={`w-5 h-5 text-[#625FD0] transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed border-l-2 border-[#625FD0] pl-4 ml-1">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
      </div>
    </main>
  );
}