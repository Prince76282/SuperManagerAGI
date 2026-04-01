"use client";

import Link from "next/link";
import {
  ArrowRight, Zap, Globe, Shield, BarChart3, Users, Layers,
  ChevronDown, ExternalLink, Mail, Mic, Award, TrendingUp,
  CheckCircle, Building2, BookOpen, Star, Clock, Target,
  Workflow, Brain, GitBranch, Code2, Paintbrush, Megaphone,
  HeartHandshake, Lightbulb, Rocket, Trophy, MapPin, Laptop,
  Coffee, Infinity, FlaskConical, Briefcase,
} from "lucide-react";
import { useState } from "react";

const stats = [
  { label: "Work Style", value: "AI-Native", icon: Zap },
  { label: "Team Culture", value: "Builder-Led", icon: Rocket },
  { label: "Problem Space", value: "Enterprise-Scale", icon: Building2 },
  { label: "Growth Path", value: "High-Ownership", icon: TrendingUp },
];

const roles = [
  {
    title: "Senior Platform Engineer",
    team: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-Time",
    icon: Code2,
    tags: ["Distributed Systems", "Go", "Kubernetes"],
  },
  {
    title: "AI Systems Architect",
    team: "Engineering",
    location: "Remote / New York",
    type: "Full-Time",
    icon: Brain,
    tags: ["LLMs", "Agent Orchestration", "Python"],
  },
  {
    title: "Product Designer  Autonomous UX",
    team: "Product & Design",
    location: "Remote",
    type: "Full-Time",
    icon: Paintbrush,
    tags: ["Systems Design", "Figma", "UX Research"],
  },
  {
    title: "Enterprise Account Executive",
    team: "Go-To-Market",
    location: "New York / London",
    type: "Full-Time",
    icon: Briefcase,
    tags: ["Enterprise SaaS", "AI", "Fortune 500"],
  },
  {
    title: "ML Research Engineer",
    team: "AI Research",
    location: "Remote",
    type: "Full-Time",
    icon: FlaskConical,
    tags: ["Reinforcement Learning", "PyTorch", "Multi-Agent"],
  },
  {
    title: "Head of Product Marketing",
    team: "Marketing",
    location: "San Francisco",
    type: "Full-Time",
    icon: Megaphone,
    tags: ["Category Creation", "B2B", "Positioning"],
  },
];

const contributions = [
  {
    icon: Code2,
    title: "Platform Engineering",
    desc: "Build orchestration engines, data pipelines, and autonomous execution systems that run real enterprise workflows  not prototypes.",
    areas: ["Workflow Runtime", "API Infrastructure", "Reliability Engineering"],
  },
  {
    icon: Brain,
    title: "AI & ML Research",
    desc: "Design multi-agent systems, fine-tune models for enterprise context, and push the boundary of what autonomous execution can do.",
    areas: ["Agent Orchestration", "Model Fine-Tuning", "Evaluation Frameworks"],
  },
  {
    icon: Paintbrush,
    title: "Product & UX",
    desc: "Design interfaces where humans and AI systems interact at the system level. This is new territory  you help define the patterns.",
    areas: ["Autonomous Workflow UX", "Control Interfaces", "Observability Tools"],
  },
  {
    icon: Megaphone,
    title: "Go-To-Market",
    desc: "Define and communicate a new software category. Translate complex autonomous systems into clear value for enterprise buyers.",
    areas: ["Category Creation", "Enterprise Sales", "Content & Positioning"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Build the telemetry, observability, and intelligence layer that helps enterprises understand what their autonomous systems are doing.",
    areas: ["Workflow Analytics", "Execution Metrics", "Business Intelligence"],
  },
  {
    icon: HeartHandshake,
    title: "Customer Success",
    desc: "Partner with enterprise clients to deploy, iterate, and expand autonomous systems across their organizations.",
    areas: ["Enterprise Onboarding", "Workflow Consulting", "Expansion Strategy"],
  },
];

const principles = [
  {
    icon: Target,
    title: "Category-defining problems",
    desc: "You will work on problems that don't have documented playbooks. We are writing them.",
  },
  {
    icon: Trophy,
    title: "Outcome ownership",
    desc: "We measure impact, not output. You own the result, not just the task.",
  },
  {
    icon: Lightbulb,
    title: "Deep technical + product thinking",
    desc: "Engineering meets real-world execution. The best ideas come from understanding both.",
  },
  {
    icon: Rocket,
    title: "High agency culture",
    desc: "Move fast with responsibility. No bureaucracy between you and the work that matters.",
  },
  {
    icon: Users,
    title: "Small teams, large scope",
    desc: "Every person has outsized leverage. We stay lean so ownership stays real.",
  },
  {
    icon: Globe,
    title: "Remote-first, async-friendly",
    desc: "Work from anywhere. We optimize for output and trust, not presence.",
  },
];

const benefits = [
  { icon: Laptop, title: "Remote-First", desc: "Work from anywhere in the world. Async-first culture with global team standups." },
  { icon: Star, title: "Equity Package", desc: "Meaningful ownership stake. You build it, you share in the upside." },
  { icon: Shield, title: "Health & Wellness", desc: "Full medical, dental, and vision. Mental health stipend included." },
  { icon: Coffee, title: "Learning Budget", desc: "$3,000/year for courses, conferences, books, and anything that makes you sharper." },
  { icon: Clock, title: "Flexible PTO", desc: "Unlimited paid time off with a culture that actually encourages you to take it." },
  { icon: Infinity, title: "Tools & Setup", desc: "$2,500 home office stipend. Best-in-class hardware, software, and subscriptions." },
];

const journey = [
  { step: "01", title: "Understand the Mission", desc: "Deep onboarding into the product, customers, and the category we're creating." },
  { step: "02", title: "Work on Real Problems", desc: "No warm-up tasks. You're in the deep end from week one, with support." },
  { step: "03", title: "Own Your Outcomes", desc: "Set goals, run your domain, and ship things that change how companies operate." },
  { step: "04", title: "Scale Your Impact", desc: "Grow with the company. As the platform expands, so does your scope and influence." },
];

const faqs = [
  {
    q: "Who is a good fit for SuperManager AGI?",
    a: "Builders who thrive on complex system problems, want real ownership, and are energized by working at the frontier of AI and enterprise software. You should care deeply about outcomes, not just shipping code.",
  },
  {
    q: "What makes this opportunity different from other AI companies?",
    a: "We build execution systems, not chat interfaces. This is infrastructure-level work with real enterprise customers, measurable outcomes, and a product category we're defining from scratch.",
  },
  {
    q: "Is the team remote-friendly?",
    a: "Yes. We are remote-first with team members across North America, Europe, and Asia. We have optional office hubs in San Francisco and New York for those who prefer in-person work.",
  },
  {
    q: "What does the interview process look like?",
    a: "Typically 4 stages: an intro call, a role-specific technical or work-sample conversation, a team fit interview, and a final session with a founder. We move fast and respect your time.",
  },
  {
    q: "Do you hire internationally?",
    a: "Yes. We hire full-time employees and contractors globally. We work with Deel to ensure compliant onboarding in 80+ countries.",
  },
];

export default function CareersPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTeam, setActiveTeam] = useState("All");

  const teams = ["All", "Engineering", "Product & Design", "Go-To-Market", "AI Research", "Marketing"];
  const filtered = activeTeam === "All" ? roles : roles.filter((r) => r.team === activeTeam);

  return (
    <div className="bg-white text-black min-h-screen font-sans">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div
          className="absolute inset-0 opacity-30"
          
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#625FD0]/6 rounded-full blur-[120px]" />

        <div className="relative max-w-[1200px] mx-auto px-6 py-32 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#625FD0] border border-[#625FD0]/30 bg-[#625FD0]/5 rounded-full px-4 py-1.5">
            <Briefcase size={12} />
            Careers at SuperManager AGI
          </span>

          <h1 className="text-3xl lg:text-5xl  mt-6 leading-[1.05] tracking-tight text-black">
            Build the Operating System<br />
            <span className="text-[#625FD0]">for Enterprise AI</span>
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            SuperManager AGI is redefining how companies operate. We're not building
            features  we're building the execution layer that replaces coordination
            overhead, management bottlenecks, and fragmented workflows.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            
            <Link
              href="/aboutus"
              className="inline-flex items-center gap-2 bg-[#625FD0] hover:bg-[#514DC0] text-white px-7 py-3.5 rounded-xl font-semibold transition"
            >
              <Building2 size={16} className="text-[#625FD0]" /> About the Company
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <section className="bg-indigo-100">
        <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-[#625FD0] text-center">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon size={22} className="text-[#625FD0]" />
              <p className="text-2xl font-semibold">{value}</p>
              <p className="text-sm text-[#625FD0]/75">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── NOT A TYPICAL COMPANY ────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-b border-gray-100">
        <div className="inline-flex items-center gap-2 text-[#625FD0] text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10 shadow-sm">
          <Lightbulb size={14} /> Our Difference
        </div>
        <h2 className="text-3xl lg:text-5xl  mb-4 text-black">This Is Not a Typical Software Company</h2>
        <p className="text-gray-700 max-w-2xl mb-14 text-lg leading-relaxed">
          Most software companies build tools that sit on top of work. We are building the layer that
          runs work  a new class of infrastructure for the AI-native enterprise.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Layers,
              title: "From Tools → Operating Systems",
              desc: "We build systems that run work, not tools that assist it. This requires deep thinking across data, execution, orchestration, and control.",
            },
            {
              icon: Target,
              title: "From Roles → Ownership",
              desc: "You won't just ship features. You will own outcomes across product, engineering, and real customer impact with measurable results.",
            },
            {
              icon: GitBranch,
              title: "From Roadmaps → Category Creation",
              desc: "There is no existing playbook for what we're building. Every team member contributes to defining how enterprise AI actually works.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="group border border-gray-200 rounded-2xl p-8 hover:border-[#625FD0] hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 bg-[#625FD0]/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#625FD0] transition">
                <Icon size={22} className="text-[#625FD0] group-hover:text-white transition" />
              </div>
              <h3 className="text-xl font-semibold text-[#625FD0] mb-3">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPEN ROLES ───────────────────────────────── */}
      {/* <section id="open-roles" className="bg-gray-50 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[#625FD0] text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10 shadow-sm">
            <Briefcase size={14} /> Open Positions
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <h2 className="text-3xl lg:text-5xl  font-semibold text-black">Current Openings</h2>
            <div className="flex flex-wrap gap-2">
              {teams.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTeam(t)}
                  className={`text-sm px-4 py-1.5 rounded-full font-semibold transition border ${
                    activeTeam === t
                      ? "bg-[#625FD0] text-white border-[#625FD0]"
                      : "bg-white text-gray-700 border-gray-200 hover:border-[#625FD0] hover:text-[#625FD0]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map(({ title, team, location, type, icon: Icon, tags }, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#625FD0] hover:shadow-md transition-all flex flex-col gap-4 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 bg-[#625FD0]/8 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#625FD0] transition">
                    <Icon size={20} className="text-[#625FD0] group-hover:text-white transition" />
                  </div>
                  <span className="text-xs font-semibold text-[#625FD0] bg-[#625FD0]/8 px-2.5 py-1 rounded-full ml-auto">
                    {type}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-black">{title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Users size={12} /> {team}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map((tag, j) => (
                    <span key={j} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-sm text-[#625FD0] font-semibold">View & Apply</span>
                  <ArrowRight size={15} className="text-gray-300 group-hover:text-[#625FD0] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm mt-8 text-center">
            Don't see the right role?{" "}
            <Link href="/contactus" className="text-[#625FD0] font-semibold hover:underline">
              Send us an open application →
            </Link>
          </p>
        </div>
      </section> */}

      {/* ── CONTRIBUTION AREAS ───────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 ">
        <div className="inline-flex items-center gap-2 text-[#625FD0] text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10 shadow-sm">
          <Workflow size={14} /> Teams
        </div>
        <h2 className="text-3xl lg:text-5xl   mb-4 text-black">Where You Can Contribute</h2>
        <p className="text-gray-700 max-w-2xl mb-14 text-lg leading-relaxed">
          Every team at SuperManager AGI is building something that hasn't been built before.
          Here's what each area owns.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {contributions.map(({ icon: Icon, title, desc, areas }, i) => (
            <div key={i} className="group border border-gray-200 rounded-2xl p-8 hover:border-[#625FD0] hover:shadow-md transition-all bg-white flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#625FD0]/8 rounded-xl flex items-center justify-center group-hover:bg-[#625FD0] transition">
                <Icon size={22} className="text-[#625FD0] group-hover:text-white transition" />
              </div>
              <p className="text-lg font-semibold text-black">{title}</p>
              <p className="text-gray-700 text-md leading-relaxed flex-1">{desc}</p>
              <ul className="space-y-1.5 mt-auto pt-4 border-t border-gray-100">
                {areas.map((a, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={13} className="text-[#625FD0] shrink-0" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────── */}
      <section className="bg-indigo-100 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[#625FD0] text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10 shadow-sm">
            <Shield size={14} /> Culture
          </div>
          <h2 className="text-3xl  lg:text-5xl   mb-4 text-black">How We Work</h2>
          <p className="text-gray-700 max-w-xl mb-14 text-lg">
            We've designed a culture around the work  not the other way around.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {principles.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#625FD0] hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-[#625FD0]/8 rounded-xl flex items-center justify-center">
                  <Icon size={18} className="text-[#625FD0]" />
                </div>
                <p className="font-semibold text-lg text-black">{title}</p>
                <p className="text-gray-700 text-md leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-b border-gray-100">
        <div className="inline-flex items-center gap-2 text-[#625FD0] text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10 shadow-sm">
          <Star size={14} /> Benefits
        </div>
        <h2 className="text-3xl  lg:text-5xl  mb-4 text-black">What We Offer</h2>
        <p className="text-gray-700 max-w-xl mb-14 text-lg">
          Competitive packages designed for people who want to do the best work of their lives.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex gap-4 border border-gray-200 rounded-2xl p-6 bg-white hover:border-[#625FD0] hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-[#625FD0]/8 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={18} className="text-[#625FD0]" />
              </div>
              <div>
                <p className="font-semibold text-lg text-black">{title}</p>
                <p className="text-gray-700 text-md mt-1 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── JOURNEY ──────────────────────────────────── */}
      <section className="bg-indigo-100 py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[#625FD0] text-sm font-semibold uppercase tracking-widest mb-4 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10 shadow-sm">
            <MapPin size={14} /> Your Path
          </div>
          <h2 className="text-3xl  lg:text-5xl  mb-12 text-black">What Your Journey Looks Like</h2>

          <div className="grid md:grid-cols-4 gap-5">
            {journey.map(({ step, title, desc }, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 relative overflow-hidden hover:border-[#625FD0] hover:shadow-sm transition-all">
                <span className="text-7xl font-semibold text-[#625FD0]/6 absolute -top-3 -right-1 leading-none select-none">{step}</span>
                <p className="text-xs font-semibold text-[#625FD0] mb-3 uppercase tracking-widest">Step {step}</p>
                <p className="font-semibold text-lg text-black mb-2">{title}</p>
                <p className="text-gray-700 text-md leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 -z-10 flex justify-center">
                <div className="w-[500px] h-[500px] bg-[#8A84FF]/20 blur-[120px] rounded-full"></div>
              </div>
      
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-[#625FD0] text-lg font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-[#625FD0]/30 bg-[#625FD0]/10">
                <BookOpen size={14} />
                FAQ
              </div>
      
              {/* Heading */}
              <h2 className="text-3xl lg:text-5xl font-semibold mb-14 text-center text-black tracking-tight">
                Careers FAQ
              </h2>
      
              {/* FAQ LIST (1 column everywhere) */}
              <div className="grid grid-cols-1 gap-6">
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    className="group border border-gray-200 rounded-2xl bg-white/80 backdrop-blur-sm hover:border-[#625FD0]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      className="w-full flex items-center justify-between p-6 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-semibold text-md lg:text-xl text-black pr-4 leading-snug">
                        {f.q}
                      </span>
      
                      <div className="w-8 h-8 rounded-full bg-[#625FD0]/10 flex items-center justify-center group-hover:bg-[#625FD0]/20 transition">
                        <ChevronDown
                          size={16}
                          className={`text-[#625FD0] transition-transform duration-300 ${
                            openFaq === i ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
      
                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ${
                        openFaq === i
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 text-gray-600 text-md leading-relaxed border-t border-gray-100">
                          <p className="pt-4">{f.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
    </div>
  );
}