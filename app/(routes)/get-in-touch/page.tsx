"use client";
import Script from "next/script";

export default function DemoSection() {
  return (
    <main className="max-w-[1200px] lg:mt-10 mt-20 mx-auto px-5 mt-5 grid grid-cols-1 lg:grid-cols-2 gap-[clamp(30px,5vw,60px)] items-center">

      {/* LEFT CONTENT */}
      <section className="w-full">
        <span className="inline-block px-[14px] py-[8px] text-[13px] font-semibold border border-black rounded-[20px] mb-5">
          REQUEST A DEMO
        </span>

        <h1 className="text-[clamp(26px,4vw,44px)] font-semibold leading-[1.25] mb-5">
         See Autonomous Project Management Running on Your Real Projects
        </h1>

        <p className="text-[clamp(15px,1.2vw,17px)]  leading-[1.7]  text-gray-900">
          Experience autonomous project management in action. Use the form to request a demo from our team and discover how our platform removes manual PM work, safeguards your teams, and speeds up delivery.
          We’ll demonstrate everything using your tools, workflows, and real project data so you can see exactly how it works in your environment.
        </p>

        <div className="mt-[30px] text-[13px] text-[#555] font-medium">
          <p>
           We may request additional information to verify your identity and better understand your organization’s needs.
          </p>

          <p className="mt-3">
            *Learn more in our
            <a href="/learnmore" target="_blank" className="underline ml-1 mr-3">
              Documentation
            </a>
            <a href="/faq" target="_blank" className="underline mr-3">
              FAQ
            </a>
            <a href="/resource-hub" target="_blank" className="underline">
              Resource Hub
            </a>
          </p>
        </div>
      </section>

      {/* RIGHT FORM */}
      <section className="w-full mt-10 lg:mt-[100px]">
        <div className="w-full h-[clamp(520px,70vh,700px)] rounded-[14px] overflow-hidden">
          <div
            className="calendly-inline-widget w-full h-full"
            data-url="https://calendly.com/nirmalsupermanageragi"
          />
        </div>
      </section>

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </main>
  );
}