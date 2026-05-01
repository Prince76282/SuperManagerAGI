"use client";
import { useEffect, useState } from "react";
import { Check, Zap, Star, Building2, Sparkles } from "lucide-react";

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [bought, setBought] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("proBought");
    if (!stored) return;
    const frame = window.requestAnimationFrame(() => setBought(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleBuyPro = () => {
    localStorage.setItem("proBought", "yes");
    window.location.href =
      "https://rzp.io/rzp/a9FsjGa?redirect_url=https://app.supermanager.co/login";
  };

  const handleBuyPremium = () => {
    window.location.href =
      "https://rzp.io/rzp/Izn9LLR?redirect_url=https://app.supermanager.co/login";
  };

  const proPrice = bought
    ? yearly ? "$183" : "$19"
    : yearly ? "$48" : "$5";

  const proPeriod = yearly ? "/yr" : "/mo";
  const renewalText = bought ? "" : yearly ? "Yearly discount applied" : "Then $19/month";
  const premiumPrice = yearly ? "$768" : "$80";

  const plans = [
    {
      id: "free",
      name: "Free",
      icon: <Zap size={18} />,
      price: "0",
      period: "",
      sub: "Get started at no cost",
      features: ["100 starter credits", "Access to Chat mode", "Access to Workflows"],
      cta: "Get Started",
      onClick: () => (window.location.href = "https://app.supermanager.co/login"),
      highlight: false,
      bestValue: false,
    },
    {
      id: "pro",
      name: "Pro",
      icon: <Star size={18} />,
      price: proPrice,
      period: proPeriod,
      sub: renewalText || "Everything in Free, plus:",
      badge: "Best Value",
      features: ["2,000 credits per month", "Daily refresh credits", "Bonus credits included"],
      cta: bought ? "Manage Plan" : "Start Pro",
      onClick: handleBuyPro,
      highlight: true,
      bestValue: true,
    },
    {
      id: "premium",
      name: "Premium",
      icon: <Sparkles size={18} />,
      price: premiumPrice,
      period: yearly ? "/yr" : "/mo",
      sub: "Everything in Pro, plus:",
      features: ["25,000 credits per month", "Custom integrations", "Advanced AI agents"],
      cta: "Start Free Trial",
      onClick: handleBuyPremium,
      highlight: false,
      bestValue: false,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: <Building2 size={18} />,
      price: "Custom",
      period: "",
      sub: "Everything in Premium, plus:",
      features: ["Enterprise support", "Dedicated manager", "Custom SLA"],
      cta: "Contact Sales",
      onClick: () => (window.location.href = "../get-in-touch/"),
      highlight: false,
      bestValue: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F3FC] py-20 px-4 sm:px-6">
      <style>{`
        @keyframes spin-border {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinning-border::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: conic-gradient(
            from 0deg,
            #22c55e 0%,
            #86efac 25%,
            #ffffff 50%,
            #86efac 75%,
            #22c55e 100%
          );
          animation: spin-border 3s linear infinite;
          z-index: 0;
        }
        .spinning-border::after {
          content: '';
          position: absolute;
          inset: 2px;
          border-radius: 15px;
          background: #625FD0;
          z-index: 1;
        }
        .spinning-border > * {
          position: relative;
          z-index: 2;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#625FD0]/40 bg-[#625FD0]/10 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#625FD0] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#625FD0]">
            Pricing
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl  text-[#1C1A3A] mb-3 tracking-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Choose your plan
        </h1>
        <p className="text-[#4A4770] text-base sm:text-lg max-w-md mx-auto">
          Start free, scale as you grow. No hidden fees.
        </p>

        {/* Toggle */}
        <div className="inline-flex mt-8 bg-white rounded-xl p-1 shadow-sm ring-1 ring-[#625FD0]/15">
          <button
            onClick={() => setYearly(false)}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
              !yearly
                ? "bg-[#625FD0] text-white shadow-md shadow-[#625FD0]/30"
                : "text-[#6B6890] hover:text-[#1C1A3A]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
              yearly
                ? "bg-[#625FD0] text-white shadow-md shadow-[#625FD0]/30"
                : "text-[#6B6890] hover:text-[#1C1A3A]"
            }`}
          >
            Yearly
            <span className="ml-1.5 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full ">
              -20%
            </span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative ${plan.bestValue ? "lg:-translate-y-2 scale-[1.03]" : ""}`}
          >
            {/* Best Value badge above card */}
            {plan.bestValue && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-white text-green-600 text-[10px]  uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg ring-1 ring-green-200 whitespace-nowrap">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                ⭐ Best Value
              </div>
            )}

            {/* Spinning border wrapper */}
            <div
              className={`relative flex flex-col rounded-2xl p-7 transition-all duration-300 overflow-hidden ${
                plan.bestValue
                  ? "spinning-border text-white shadow-2xl shadow-[#625FD0]/40 min-h-[420px]"
                  : "bg-white text-[#1C1A3A] shadow-sm ring-1 ring-[#625FD0]/10 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {/* Icon + Name */}
              <div className={`flex items-center gap-2 mb-5 ${plan.highlight ? "text-white/80" : "text-[#625FD0]"}`}>
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${plan.highlight ? "bg-white/20" : "bg-[#625FD0]/10"}`}>
                  {plan.icon}
                </div>
                <span className={`text-sm font-semibold uppercase tracking-widest ${plan.highlight ? "text-white/80" : "text-[#6B6890]"}`}>
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="mb-1 flex items-end gap-1">
                {plan.price === "Custom" ? (
                  <span className={`text-4xl  ${plan.highlight ? "text-white" : "text-[#1C1A3A]"}`}>
                    Custom
                  </span>
                ) : (
                  <>
                    <span className={`text-sm font-medium mt-1 ${plan.highlight ? "text-white/70" : "text-[#6B6890]"}`}>$</span>
                    <span className={`text-4xl  leading-none ${plan.highlight ? "text-white" : "text-[#1C1A3A]"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm mb-1 ${plan.highlight ? "text-white/60" : "text-[#9C9AB8]"}`}>
                        {plan.period}
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Sub */}
              <p className={`text-xs mb-6 min-h-[16px] ${plan.highlight ? "text-white/60" : "text-[#9C9AB8]"}`}>
                {plan.sub}
              </p>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.highlight ? "bg-white/20" : "bg-[#625FD0]/10"}`} />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${plan.highlight ? "bg-white/20" : "bg-[#625FD0]/10"}`}>
                      <Check size={10} className={plan.highlight ? "text-white" : "text-[#625FD0]"} strokeWidth={3} />
                    </span>
                    <span className={plan.highlight ? "text-white/85" : "text-[#4A4770]"}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={plan.onClick}
                className={`w-full py-3 rounded-xl text-xs  uppercase tracking-widest transition-all duration-200 ${
                  plan.highlight
                    ? "bg-white text-[#625FD0] hover:bg-white/90 shadow-lg"
                    : "bg-[#625FD0] text-white hover:bg-[#4f4cb8] shadow-md shadow-[#625FD0]/20"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
}