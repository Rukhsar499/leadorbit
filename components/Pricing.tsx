"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface Plan {
  name: string;
  description: string;
  monthly: string;
  yearly: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Perfect for solo entrepreneurs getting started with Facebook lead automation.",
    monthly: "$29",
    yearly: "$24",
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
    name: "Growth",
    description: "Designed for growing businesses needing automated multi-channel lead routing.",
    monthly: "$79",
    yearly: "$64",
    popular: true,
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
    name: "Agency",
    description: "For agencies and large operations managing high lead volumes across clients.",
    monthly: "$199",
    yearly: "$159",
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
    <section id="pricing" className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Flexible Pricing
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Choose the Plan That Fits Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Growth Speed
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Simple, predictable pricing. No hidden setup fees or surprise charges.
          </p>

          {/* Billing Switcher */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="relative flex rounded-2xl border border-white/10 bg-slate-950/80 p-1.5 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setYearly(false)}
                className={`relative z-10 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  !yearly ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setYearly(true)}
                className={`relative z-10 flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  yearly ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                Yearly
                
              </button>

              {/* Sliding Pill Indicator */}
              <div
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ease-out ${
                  yearly ? "left-[calc(50%+3px)]" : "left-1.5"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, index) => {
            return (
              <div
                key={plan.name}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className={`group relative flex flex-col justify-between rounded-3xl p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "border border-blue-500/50 bg-slate-900/80 shadow-2xl shadow-blue-500/20 lg:-translate-y-2"
                    : "border border-white/10 bg-slate-950/50 hover:border-blue-500/40 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-blue-500/10"
                }`}
              >
                {/* Rotating Border Glow Effect for Most Popular */}
                {plan.popular && (
                  <>
                    <div className="pointer-events-none absolute -inset-[1px] -z-10 overflow-hidden rounded-3xl opacity-75">
                      <div className="absolute -inset-[500%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#1d4ed8_50%,#3b82f6_100%)]" />
                    </div>
                    {/* Inner Mask to preserve background */}
                    <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-slate-950/90" />
                  </>
                )}

                <div>
                  {/* Top Bar: Name + Popular Badge */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">
                      {plan.name}
                    </h3>

                    {plan.popular && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                        Most Popular
                      </span>
                    )}
                  </div>

                  <p className="mt-4 min-h-[48px] text-sm leading-relaxed text-gray-400">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                      {yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-sm font-medium text-gray-400">
                      / month {yearly ? "(billed yearly)" : ""}
                    </span>
                  </div>

                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Features List */}
                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="leading-5">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call To Action Button */}
                <div className="mt-8">
                  <button
                    type="button"
                    className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:brightness-110"
                        : "border border-white/10 bg-white/5 text-white hover:border-blue-500/50 hover:bg-blue-600 hover:text-white"
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