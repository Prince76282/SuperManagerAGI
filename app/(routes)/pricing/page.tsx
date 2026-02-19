"use client";
import { useEffect, useState } from "react";

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [bought, setBought] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("proBought");
    if (stored) setBought(true);
  }, []);

  const handleBuyPro = () => {
    localStorage.setItem("proBought", "yes");
    window.location.href =
      "https://rzp.io/rzp/a9FsjGa?redirect_url=https://agent.oqlous.com/login";
  };

  const handleBuyPremium = () => {
    window.location.href =
      "https://rzp.io/rzp/Izn9LLR?redirect_url=https://agent.oqlous.com/login";
  };

  const proPrice = bought
    ? yearly
      ? "$183 /yr"
      : "$19 /mo"
    : yearly
    ? "$183 /yr"
    : "$5 first month";

  const renewalText = bought
    ? ""
    : yearly
    ? "Yearly discount applied"
    : "Then $19/month";

  const premiumPrice = yearly ? "$768 /yr" : "$80 /mo";

  return (
    <div className="min-h-screen bg-[#F0F6F9] py-20 px-5 ">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold">Pricing</h1>
        <p className="text-gray-500 mt-2">Choose the plan that works for you</p>

        {/* TOGGLE */}
        <div className="inline-flex mt-8 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setYearly(false)}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
              !yearly ? " bg-[#625FD0] text-white shadow" : "text-gray-500 hover:text-black"
            }`}
          >
            MONTHLY
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-5 py-2 rounded-md text-sm font-semibold transition ${
              yearly ? "bg-[#625FD0] text-white shadow" : "text-gray-500 hover:text-black"
            }`}
          >
            YEARLY (SAVE 20%)
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
        
        {/* FREE */}
        <div className="bg-white rounded-2xl border p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition">
          <span className="bg-gray-100 px-2 font-semibold py-1 rounded text-lg mb-4 w-fit">
            Free
          </span>
          <div className="text-4xl  font-bold">Free</div>

          <p className="text-gray-500 mt-3 mb-5 text-sm">Includes</p>

          <ul className="space-y-3 text-sm flex-1">
            <li>100 starter credits</li>
            <li>Access to Chat mode</li>
            <li>Access to Workflows</li>
          </ul>

          <button
            onClick={() =>
              (window.location.href = "https://agent.oqlous.com/login")
            }
            className=" py-2 px-3 bg-[#625FD0] text-white rounded-lg text-[14px] font-semibold  transition"
          >
            Get Started
          </button>
        </div>

        {/* PRO */}
        <div className="bg-gradient-to-b from-green-50 to-white border-2 border-green-500 rounded-2xl p-8 flex flex-col scale-105 shadow relative">
          <span className="absolute -top-3 right-5 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
            Best Value
          </span>

          <span className="bg-green-100 text-lg text-green-800 px-2 py-1 rounded  mb-4 w-fit">
            Pro
          </span>

          <div className="text-4xl font-bold">{proPrice}</div>

          {renewalText && (
            <p className="text-sm text-gray-500 mt-2">{renewalText}</p>
          )}

          <p className="text-gray-500 mt-4 mb-5 text-sm">
            Everything in Free, plus:
          </p>

          <ul className="space-y-3 text-sm flex-1">
            <li>2,000 credits per month</li>
            <li>Daily refresh credits</li>
            <li className="text-blue-600 font-semibold">+ Bonus credits</li>
          </ul>

          <button
            onClick={handleBuyPro}
            className=" py-2  mt-4 px-3 bg-green-500 text-white rounded-lg text-[14px] font-semibold  transition"
          >
            {bought ? "Manage Plan" : "Start"}
          </button>
        </div>

        {/* PREMIUM */}
        <div className="bg-white rounded-2xl border p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition">
          <span className="bg-gray-100 px-2 font-semibold py-1 rounded text-lg mb-4 w-fit">
            Premium
          </span>

          <div className="text-4xl font-bold">{premiumPrice}</div>

          <p className="text-gray-500 mt-3 mb-5 text-sm">
            Everything in Pro, plus
          </p>

          <ul className="space-y-3 text-sm flex-1">
            <li>25,000 credits per month</li>
            <li>Custom integrations</li>
            <li>Advanced AI agents</li>
          </ul>

          <button
            onClick={handleBuyPremium}
            className=" py-2 px-3 bg-[#625FD0] text-white rounded-lg text-[14px] font-semibold  transition"
          >
            Start Free Trial
          </button>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-white rounded-2xl border p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition">
          <span className="bg-gray-100 px-2 font-semibold py-1 rounded text-lg mb-4 w-fit">
            Enterprise
          </span>

          <div className="text-4xl font-bold">Custom</div>

          <p className="text-gray-500 mt-3 mb-5 text-sm">
            Everything in Premium
          </p>

          <ul className="space-y-3 text-sm flex-1">
            <li>Enterprise support</li>
            <li>Dedicated manager</li>
            <li>Custom SLA</li>
          </ul>

          <button
            onClick={() => (window.location.href = "../get-in-touch/")}
            className=" py-2 px-3 bg-[#625FD0] text-white rounded-lg text-[14px] font-semibold  transition"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}
