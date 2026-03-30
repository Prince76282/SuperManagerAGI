"use client";

import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* HERO */}
      <section className="np mx-auto px-6 py-24 text-center">
        <p className="text-[#625FD0] uppercase  tracking-wide">Careers</p>

        <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
          Build the Operating System for Enterprise AI
        </h1>

        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          SuperManager AGI is redefining how companies operate. We are not
          building features we are building the execution layer that replaces
          coordination, management overhead, and fragmented workflows.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contactus"
            className="bg-[#625FD0] text-white px-6 py-3 rounded-lg"
          >
            Join the Team
          </Link>
          <Link href="/aboutus" className="border px-6 py-3 rounded-lg">
            About Company
          </Link>
        </div>
      </section>

      {/* CATEGORY SHIFT */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl  mb-10">
          This is Not a Typical Software Company
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl  text-[#625FD0]">
              From Tools → Operating Systems
            </h3>
            <p className="text-gray-600 mt-3">
              We are building systems that run work, not tools that assist it.
              This requires deep thinking across data, execution, and control.
            </p>
          </div>

          <div>
            <h3 className="text-xl  text-[#625FD0]">From Roles → Ownership</h3>
            <p className="text-gray-600 mt-3">
              You won’t just ship features. You will own outcomes across
              product, engineering, and real customer impact.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 grid md:grid-cols-4 gap-6">
        {[
          { label: "work style", value: "AI-native" },
          { label: "team focus", value: "Builder-led" },
          { label: "problem space", value: "Enterprise-scale" },
          { label: "growth path", value: "High-ownership" },
        ].map((s, i) => (
          <div key={i} className="border rounded-xl p-6 text-center">
            <p className="text-sm text-gray-500 uppercase">{s.label}</p>
            <p className="text-[#625FD0]  mt-2">{s.value}</p>
          </div>
        ))}
      </section>

      {/* CONTRIBUTION AREAS */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-3xl  mb-10">Where You Can Contribute</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Platform Engineering",
              desc: "Build orchestration, data pipelines, and execution systems.",
            },
            {
              title: "Product & UX",
              desc: "Design human + AI interaction at system level.",
            },
            {
              title: "Go-To-Market",
              desc: "Define and communicate a new category of software.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className=" text-lg">{card.title}</h3>
              <p className="text-gray-600 mt-2">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#F8F7FF] py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl  mb-10">How We Work</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Category-defining problems",
                desc: "We are shaping how AI-native companies operate.",
              },
              {
                title: "Outcome ownership",
                desc: "We measure impact, not output.",
              },
              {
                title: "Deep technical + product thinking",
                desc: "Engineering meets real-world execution.",
              },
              {
                title: "High agency culture",
                desc: "Move fast with responsibility.",
              },
            ].map((p, i) => (
              <div key={i} className="bg-white border rounded-xl p-6">
                <h3 className=" text-[#625FD0]">{p.title}</h3>
                <p className="text-gray-600 mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-3xl  mb-10">What Your Journey Looks Like</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Understand mission",
            "Work on real problems",
            "Own outcomes",
            "Scale impact",
          ].map((step, i) => (
            <div key={i} className="border rounded-xl p-6">
              <p className="text-sm text-gray-500">Step {i + 1}</p>
              <p className=" mt-2">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl  mb-10 text-center">FAQ</h2>

        <div className="space-y-6">
          {[
            {
              q: "Who is a good fit?",
              a: "Builders who like complex system problems and ownership.",
            },
            {
              q: "What makes this different?",
              a: "We build execution systems, not features.",
            },
          ].map((f, i) => (
            <div key={i} className="border rounded-xl p-6">
              <h3 className="">{f.q}</h3>
              <p className="text-gray-600 mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#625FD0] text-white py-20 text-center">
        <h2 className="text-3xl ">Join the Team Defining Enterprise AI</h2>

        <p className="mt-4 text-white/80">
          This is not just a job. It’s a chance to shape how companies operate.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/contactus"
            className="bg-white text-black px-6 py-3 rounded-lg"
          >
            Apply Now
          </Link>
          <Link
            href="/aboutus"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
