"use client";

import { useState } from "react";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "For businesses getting started with Facebook lead automation.",
      monthly: "Custom",
      yearly: "Custom",
      features: [
        "Facebook Lead Ads",
        "Lead capture",
        "Lead management",
      ],
    },
    {
      name: "Growth",
      description: "For growing businesses managing more leads.",
      monthly: "Custom",
      yearly: "Custom",
      popular: true,
      features: [
        "Everything in Starter",
        "Advanced lead workflows",
        "API & webhook access",
      ],
    },
    {
      name: "Agency",
      description: "For agencies and larger lead-generation operations.",
      monthly: "Custom",
      yearly: "Custom",
      features: [
        "Everything in Growth",
        "Multiple Facebook Pages",
        "Agency-focused workflows",
      ],
    },
  ];

  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div data-aos="fade-up" className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Pricing
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Choose the Plan That Fits Your Business
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Select a membership plan based on your lead-generation needs.
          </p>

          <div className="mx-auto mt-8 inline-flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
                !yearly
                  ? "bg-blue-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
                yearly
                  ? "bg-blue-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-blue-500"
                  : "border-white/10"
              } bg-white/[0.03]`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-gray-400">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-3xl font-bold text-white">
                  {yearly ? plan.yearly : plan.monthly}
                </span>

                <span className="ml-2 text-sm text-gray-500">
                  / {yearly ? "year" : "month"}
                </span>
              </div>

              <button className="mt-8 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                Start Free
              </button>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-3 text-sm text-gray-300"
                  >
                    <span className="text-blue-500">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;