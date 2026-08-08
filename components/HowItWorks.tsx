"use client";

import React, { useState } from "react";
import {
  Link2,
  Zap,
  Send,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  Database,
  Terminal,
  Activity,
} from "lucide-react";

interface StepItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  tag: string;
  badgeColor: string;
  previewType: "oauth" | "stream" | "route";
  highlights: string[];
}

const steps: StepItem[] = [
  {
    id: "step-1",
    number: "01",
    title: "Connect Facebook Page",
    subtitle: "One-Click Meta OAuth 2.0 Integration",
    description:
      "Authenticate your Facebook account securely via encrypted OAuth. Select the specific Lead Ad forms or Pages you wish to monitor with granular permissions.",
    icon: Link2,
    tag: "Instant Handshake",
    badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    previewType: "oauth",
    highlights: ["Encrypted OAuth 2.0", "Zero API token management", "Multi-Page support"],
  },
  {
    id: "step-2",
    number: "02",
    title: "Real-Time Lead Capture",
    subtitle: "Sub-Second Payload Ingestion",
    description:
      "The instant a user fills out a Facebook Lead Ad form, LeadOrbit intercepts the webhook event payload, validates data schema, and parses customer fields.",
    icon: Zap,
    tag: "Sub-100ms Latency",
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
    previewType: "stream",
    highlights: ["Webhook listener active", "Automatic field mapping", "Duplicates auto-filtered"],
  },
  {
    id: "step-3",
    number: "03",
    title: "Automated Routing & Sync",
    subtitle: "Multi-Destination Dispatch",
    description:
      "Instantly dispatch clean lead payloads to your preferred destinations—CRMs (HubSpot, Salesforce), Google Sheets, Slack alerts, or custom Webhooks.",
    icon: Send,
    tag: "Multi-Channel Push",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    previewType: "route",
    highlights: ["Zero data drop guarantee", "Custom retry logic", "Instant Slack / Email alerts"],
  },
];

const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = steps[activeStepIndex];

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-transparent blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            Execution Workflow
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            From Lead Submission to CRM in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              3 Automated Steps
            </span>
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Eliminate manual CSV downloads forever. Experience true zero-latency Facebook lead automation.
          </p>
        </div>

        {/* Main Split Layout: Left Interactive Timeline & Right Simulator */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Interactive Timeline List */}
          <div className="space-y-6 lg:col-span-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStepIndex === idx;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group relative flex cursor-pointer gap-6 rounded-3xl p-6 transition-all duration-500 ${
                    isActive
                      ? "border border-blue-500/40 bg-slate-900/90 shadow-xl shadow-blue-500/10 backdrop-blur-xl"
                      : "border border-transparent bg-slate-950/40 hover:border-white/10 hover:bg-slate-900/40"
                  }`}
                >
                  {/* Connected Vertical Pipe Indicator */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 ${
                        isActive
                          ? "border-blue-400 bg-blue-600 text-white shadow-lg shadow-blue-600/40 scale-110"
                          : "border-white/10 bg-white/5 text-gray-400 group-hover:border-blue-500/40 group-hover:text-blue-400"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Connecting Vertical Line */}
                    {idx < steps.length - 1 && (
                      <div
                        className={`mt-4 h-full w-0.5 rounded-full transition-colors duration-500 ${
                          isActive ? "bg-gradient-to-b from-blue-500 to-indigo-500" : "bg-white/10"
                        }`}
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${step.badgeColor}`}>
                        {step.tag}
                      </span>
                      <span className="text-2xl font-black tracking-tight text-white/20">
                        {step.number}
                      </span>
                    </div>

                    <h3 className={`mt-2 text-xl font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs font-medium text-blue-400/90">
                      {step.subtitle}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {step.description}
                    </p>

                    {/* Step Highlight Pills */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.highlights.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-gray-400"
                        >
                          <CheckCircle2 className="h-3 w-3 text-blue-400" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Process Simulator Mockup UI */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-mono text-gray-400">
                  <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
                  Live Workflow Engine :: Stage {activeStep.number}
                </div>
              </div>

              {/* Dynamic Mockup Body based on Active Step */}
              <div className="mt-6 min-h-[360px] rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-inner">
                {activeStep.previewType === "oauth" && (
                  <div className="flex flex-col items-center justify-center space-y-6 text-center py-6">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-xl shadow-blue-500/20">
                      <Globe className="h-10 w-10 animate-pulse" />
                      <ShieldCheck className="absolute -bottom-2 -right-2 h-7 w-7 text-emerald-400" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white">Facebook Integration Active</h4>
                      <p className="mt-1 text-xs text-gray-400">Page: "Real Estate Growth Hub" connected</p>
                    </div>

                    <div className="w-full space-y-2.5 rounded-xl border border-white/10 bg-slate-900/60 p-4 text-left">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Form Name:</span>
                        <span className="font-mono text-white">Q3_Lead_Gen_Form_v2</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Permissions:</span>
                        <span className="text-emerald-400">leads_retrieval (Granted)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Webhook Status:</span>
                        <span className="inline-flex items-center gap-1 text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Subscribed
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep.previewType === "stream" && (
                  <div className="space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="flex items-center gap-2 text-amber-400 font-bold">
                        <Terminal className="h-4 w-4" /> POST /api/v1/meta-webhook
                      </span>
                      <span className="rounded bg-amber-500/20 px-2 py-0.5 text-[10px] text-amber-300">
                        200 OK (84ms)
                      </span>
                    </div>

                    <div className="space-y-2 rounded-xl border border-white/10 bg-slate-900/90 p-4 text-gray-300">
                      <p className="text-blue-400">{"{"}</p>
                      <p className="pl-4"><span className="text-purple-400">"event"</span>: <span className="text-emerald-300">"leadgen_submission"</span>,</p>
                      <p className="pl-4"><span className="text-purple-400">"lead_id"</span>: <span className="text-emerald-300">"lead_8923401928"</span>,</p>
                      <p className="pl-4"><span className="text-purple-400">"full_name"</span>: <span className="text-emerald-300">"Rahul Sharma"</span>,</p>
                      <p className="pl-4"><span className="text-purple-400">"email"</span>: <span className="text-emerald-300">"rahul@lead.com"</span>,</p>
                      <p className="pl-4"><span className="text-purple-400">"phone"</span>: <span className="text-emerald-300">"+91 98765 43210"</span></p>
                      <p className="text-blue-400">{"}"}</p>
                    </div>

                    <div className="flex items-center justify-between text-gray-500 text-[11px] pt-2">
                      <span>Payload Verified & Hash Validated</span>
                      <span className="text-emerald-400">Ready for Routing →</span>
                    </div>
                  </div>
                )}

                {activeStep.previewType === "route" && (
                  <div className="space-y-4 py-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-gray-300">
                      <span>Automated Destinations</span>
                      <span className="text-emerald-400">3/3 Dispatched</span>
                    </div>

                    <div className="space-y-3">
                      {/* Destination 1 */}
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/80 p-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            <Database className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">HubSpot CRM</p>
                            <p className="text-[10px] text-gray-400">Contact Created in Leads Pipeline</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                          Synced
                        </span>
                      </div>

                      {/* Destination 2 */}
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/80 p-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Globe className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">Google Sheets</p>
                            <p className="text-[10px] text-gray-400">Row appended to #Q3_Leads</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                          Synced
                        </span>
                      </div>

                      {/* Destination 3 */}
                      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/80 p-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            <Send className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white">Slack Channel Alert</p>
                            <p className="text-[10px] text-gray-400">Notification pushed to #sales-leads</p>
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                          Notified
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Simulator Footer Navigation */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span>Click left steps to preview real-time states</span>
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % steps.length)}
                  className="inline-flex items-center gap-1.5 font-semibold text-blue-400 hover:text-blue-300"
                >
                  Next Step Simulation
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;