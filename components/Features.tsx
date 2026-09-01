import React from "react";
import {
  Zap,
  Database,
  Code2,
  Webhook,
  Layers,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Automatic Lead Capture",
      description:
        "Instantly capture every incoming Facebook Lead Ad submission in real-time without ever touching a manual CSV export.",
      icon: Zap,
      badge: "Real-time Sync",
      isFeatured: true,
    },
    {
      title: "Lead Management Hub",
      description:
        "Filter, search, and monitor all incoming leads from a single centralized, high-speed dashboard.",
      icon: Database,
      badge: "Centralized",
    },
    {
      title: "Developer API Access",
      description:
        "Connect LeadOrbit directly to your custom backend or mobile apps using secure, low-latency REST APIs.",
      icon: Code2,
      badge: "REST API",
    },
    {
      title: "Instant Webhooks",
      description:
        "Trigger custom automated server workflows and events whenever a new lead is captured.",
      icon: Webhook,
      badge: "HTTP Post",
    },
    {
      title: "Native CRM Integrations",
      description:
        "Send leads seamlessly to HubSpot, Salesforce, Zoho, Google Sheets, or your sales pipelines.",
      icon: Layers,
      badge: "Plug & Play",
    },
    {
      title: "No-Code Facebook Auth",
      description:
        "Connect your Meta Pages and Lead Forms in under 60 seconds with OAuth authentication.",
      icon: ShieldCheck,
      badge: "1-Click Setup",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/20 to-white px-6 py-24 sm:py-32 font-sans text-slate-900">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-sky-200/40 blur-[130px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-indigo-200/30 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-600" />
            </span>
            Capabilities
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Everything You Need to Automate Your{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Lead Pipeline
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Eliminate repetitive tasks, stop losing leads, and accelerate your sales cycle with enterprise-grade automation.
          </p>
        </div>

        {/* Cardless Layout Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:translate-x-1 ${
                  feature.isFeatured
                    ? "bg-white/80 shadow-xl shadow-sky-900/5 ring-1 ring-slate-200/80 md:col-span-1 lg:col-span-1"
                    : "bg-white/40 hover:bg-white/90 hover:shadow-lg hover:shadow-sky-900/5"
                }`}
              >
                {/* Active Hover Accent Border Line */}
                <span className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-gradient-to-b from-sky-500 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Top Bar: Icon & Pill Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 group-hover:bg-sky-50 group-hover:text-sky-700">
                        {feature.badge}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-sky-600">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-200 group-hover:text-sky-700">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Live Stream Status Visual for Featured Item */}
                {feature.isFeatured && (
                  <div className="mt-8 flex items-center justify-between rounded-2xl border border-sky-100 bg-sky-50/60 p-4 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      <span className="font-bold text-slate-700">
                        STREAM STATUS :: ACTIVE
                      </span>
                    </div>
                    <span className="font-semibold text-sky-700">
                      Sub-500ms Ingestion
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;