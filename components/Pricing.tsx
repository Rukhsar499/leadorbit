"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, Zap, ShieldCheck, Crown } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  description: string;
  monthly: string;
  yearly: string;
  popular?: boolean;
  icon: React.ReactNode;
  features: string[];
  cta: string;
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for solo entrepreneurs getting started with Facebook lead automation.",
    monthly: "$29",
    yearly: "$24",
    icon: <Zap className="h-5 w-5 text-sky-600" />,
    features: [
      "Up to 500 Leads / month",
      "1 Facebook Page connection",
      "Instant email notifications",
      "Standard CSV export",
      "Community support",
    ],
    cta: "Start 14-Day Free Trial",
  },
  {
    id: "growth",
    name: "Growth",
    description: "Designed for growing businesses needing automated multi-channel lead routing.",
    monthly: "$79",
    yearly: "$64",
    popular: true,
    icon: <ShieldCheck className="h-6 w-6 text-sky-600" />,
    features: [
      "Up to 5,000 Leads / month",
      "5 Facebook Page connections",
      "Advanced lead workflows & filters",
      "REST API & Instant Webhooks",
      "CRM Integrations (HubSpot, Zoho)",
      "Priority 24/7 support",
    ],
    cta: "Claim Most Popular Plan",
  },
  {
    id: "agency",
    name: "Agency",
    description: "For agencies and large operations managing high lead volumes across clients.",
    monthly: "$199",
    yearly: "$159",
    icon: <Crown className="h-5 w-5 text-indigo-600" />,
    features: [
      "Unlimited Leads / month",
      "Unlimited Facebook Pages",
      "Custom agency-branded client portals",
      "Multi-tenant team management",
      "Dedicated account manager",
      "99.9% Uptime SLA",
    ],
    cta: "Contact Sales Team",
  },
];

const Pricing: React.FC = () => {
  const [yearly, setYearly] = useState<boolean>(true);

  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/20 to-white px-6 py-24 sm:py-32 font-sans text-slate-900">
      {/* Soft Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/40 blur-[160px]" />
      <div className="pointer-events-none absolute right-10 top-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-200/30 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600" />
            </span>
            Flexible Pricing
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Choose the Plan That Fits Your{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Growth Speed
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
            Simple, predictable pricing for high-performing sales pipelines. No hidden setup fees.
          </p>

          {/* Clean Billing Switcher (No 20% Badge) */}
          <div className="mt-10 flex items-center justify-center">
            <div className="relative flex items-center rounded-2xl border border-slate-200 bg-white p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={`relative z-10 rounded-xl px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  !yearly ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`relative z-10 rounded-xl px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  yearly ? "text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Yearly
              </button>

              {/* Sliding Pill Indicator */}
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 shadow-md transition-all duration-300 ease-out ${
                  yearly ? "left-[calc(50%+3px)]" : "left-1.5"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid (Center Card Enlarged) */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-center">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className={`group relative flex flex-col justify-between rounded-3xl transition-all duration-300 ${
                  isPopular
                    ? "z-10 p-9 border-2 border-sky-500 bg-white shadow-2xl shadow-sky-500/20 lg:-translate-y-4 lg:scale-105"
                    : "p-7 border border-slate-200/90 bg-white/70 backdrop-blur-xl hover:border-sky-300 hover:bg-white hover:shadow-xl hover:shadow-sky-900/5 hover:-translate-y-1"
                }`}
              >
                {/* Highlight Glow Effect for Popular Card */}
                {isPopular && (
                  <>
                    <div className="pointer-events-none absolute -inset-[2px] -z-10 overflow-hidden rounded-[26px]">
                      <div className="absolute -inset-[500%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#0284c7_0%,#6366f1_50%,#0284c7_100%)] opacity-30" />
                    </div>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-4 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-sky-500/30">
                        <Sparkles className="h-3.5 w-3.5 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  </>
                )}

                <div>
                  {/* Card Icon & Header */}
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 shadow-xs ${
                      isPopular ? "h-14 w-14" : "h-11 w-11"
                    }`}>
                      {plan.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`font-black text-slate-900 transition-colors group-hover:text-sky-600 ${
                    isPopular ? "mt-6 text-3xl" : "mt-5 text-2xl"
                  }`}>
                    {plan.name}
                  </h3>

                  <p className="mt-2 min-h-[40px] text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className={`font-black tracking-tight text-slate-900 ${
                      isPopular ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"
                    }`}>
                      {yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-500">
                      / month {yearly ? "(billed yearly)" : ""}
                    </span>
                  </div>

                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                  {/* Features List */}
                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-700">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-sky-600">
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span className="leading-5">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button
                    type="button"
                    className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      isPopular
                        ? "bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/35 hover:brightness-105"
                        : "border border-slate-200 bg-slate-50 text-slate-800 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;