"use client";

import React, { useState } from "react";

interface StepItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  previewType: "oauth" | "stream" | "route";
  stats: { label: string; value: string }[];
}

const steps: StepItem[] = [
  {
    id: "step-1",
    number: "01",
    title: "Connect Meta Page",
    subtitle: "One-Click OAuth 2.0 Handshake",
    description:
      "Securely pair your Facebook Lead Ad forms with encrypted API tokens. Zero token maintenance or expiration worries.",
    tag: "OAuth 2.0 Active",
    previewType: "oauth",
    stats: [
      { label: "LATENCY", value: "< 12ms" },
      { label: "ENCRYPTION", value: "AES-256" },
      { label: "AUTH STATUS", value: "Verified" },
    ],
  },
  {
    id: "step-2",
    number: "02",
    title: "Real-Time Ingestion",
    subtitle: "Sub-Second Webhook Parsing",
    description:
      "Intersects lead payloads in under 100ms. Automatically maps custom fields, validates data schemas, and strips duplicates.",
    tag: "Sub-100ms Speed",
    previewType: "stream",
    stats: [
      { label: "INGESTION", value: "84ms" },
      { label: "PARSER", value: "Auto-Mapped" },
      { label: "DUPLICATES", value: "Filtered" },
    ],
  },
  {
    id: "step-3",
    number: "03",
    title: "Automated Dispatch",
    subtitle: "Multi-Destination Sync Engine",
    description:
      "Instantly dispatches clean customer data into your CRM, Google Sheets, or Slack channels with zero data loss guarantee.",
    tag: "Multi-Channel Push",
    previewType: "route",
    stats: [
      { label: "DESTINATIONS", value: "3 Channels" },
      { label: "RETRY LOGIC", value: "Active" },
      { label: "DROP RATE", value: "0.00%" },
    ],
  },
];

const HowItWorks: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = steps[activeStepIndex];

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-50 via-slate-50 to-white px-6 py-14 font-sans text-slate-900">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-sky-600 animate-ping" />
            Execution Architecture
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-slate-900">
            From Lead Submission to CRM in{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              3 Steps
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Experience true sub-second Facebook lead automation without manual exports.
          </p>
        </div>

        {/* Top Floating Stepper Controller */}
        <div data-aos="fade-up" data-aos-delay="100" className="mt-14 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-200/80 bg-white/70 p-2 shadow-lg shadow-sky-900/5 backdrop-blur-xl">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative flex items-center justify-center gap-3 rounded-xl py-3 px-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white text-blue-600 ring-slate-200"
                      : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black transition-colors ${
                    isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {step.number}
                  </span>
                  <span className="hidden sm:inline font-bold text-xs sm:text-sm tracking-tight truncate">
                    {step.title}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Main Canvas */}
        <div data-aos="zoom-in" data-aos-delay="200" className="mt-10 rounded-3xl border border-slate-200/90 bg-white/80 p-8 shadow-2xl ring-1 ring-slate-900/5 backdrop-blur-2xl">
          
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column: Active Step Metrics & Detailed Text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold text-sky-700">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                {activeStep.tag}
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                  {activeStep.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-blue-600">
                  {activeStep.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {activeStep.description}
                </p>
              </div>

              {/* Dynamic Metrics */}
              <div className="grid grid-cols-3 gap-3 border-t border-slate-100 pt-6">
                {activeStep.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">{stat.label}</span>
                    <span className="mt-0.5 block text-xs font-black text-slate-800">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Flow Architecture Canvas */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50/30 p-6 shadow-inner">
                
                {/* Node Status Banner */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-mono text-xs font-bold text-slate-700">STATUS :: PIPELINE ACTIVE</span>
                  </div>
                  <span className="rounded bg-sky-100 px-2 py-0.5 font-mono text-[10px] font-bold text-sky-800 border border-sky-200">
                    STAGE {activeStep.number} / 03
                  </span>
                </div>

                {/* Stage Canvas Elements */}
                <div className="mt-6 min-h-[260px] flex items-center justify-center">
                  
                  {/* OAuth Interactive Canvas */}
                  {activeStep.previewType === "oauth" && (
                    <div className="w-full space-y-4 animate-in fade-in zoom-in-95 duration-300">
                      <div className="flex items-center justify-around gap-4 py-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                            <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.62.77-1.62 1.56V12h2.78l-.44 3h-2.34v6.8c4.56-.93 8-4.96 8-9.8z" />
                            </svg>
                          </div>
                          <span className="text-[11px] font-bold text-slate-700">Meta Ads API</span>
                        </div>

                        <div className="flex-1 flex items-center justify-center relative">
                          <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 animate-pulse" />
                          <span className="absolute bg-white px-2 py-0.5 text-[9px] font-mono font-bold text-emerald-600 border border-emerald-200 rounded-full shadow-sm">
                            OAuth 2.0 Encrypted
                          </span>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
                            <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                          </div>
                          <span className="text-[11px] font-bold text-slate-700">LeadOrbit Hub</span>
                        </div>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-white p-3 text-xs flex items-center justify-between shadow-sm">
                        <span className="text-slate-500">Connected Page:</span>
                        <span className="font-bold text-slate-800">Real Estate Growth Hub</span>
                        <span className="text-emerald-600 font-bold">● Active</span>
                      </div>
                    </div>
                  )}

                  {/* Real-time Ingestion Stream Canvas */}
                  {activeStep.previewType === "stream" && (
                    <div className="w-full space-y-3 animate-in fade-in zoom-in-95 duration-300">
                      <div className="flex items-center justify-between text-xs font-mono border-b border-slate-200 pb-2">
                        <span className="text-amber-600 font-bold">WEBHOOK_PAYLOAD :: INGESTED</span>
                        <span className="text-slate-400">84ms Processing Time</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                          <span className="block text-[10px] text-slate-400 font-bold">NAME</span>
                          <span className="font-semibold text-slate-800">Rahul Sharma</span>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                          <span className="block text-[10px] text-slate-400 font-bold">EMAIL</span>
                          <span className="font-semibold text-slate-800">rahul@lead.com</span>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                          <span className="block text-[10px] text-slate-400 font-bold">PHONE</span>
                          <span className="font-semibold text-slate-800">+91 98765 43210</span>
                        </div>
                        <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                          <span className="block text-[10px] text-slate-400 font-bold">FORM ID</span>
                          <span className="font-semibold text-slate-800">Q3_Lead_Gen_v2</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dispatch Route Canvas */}
                  {activeStep.previewType === "route" && (
                    <div className="w-full space-y-2.5 animate-in fade-in zoom-in-95 duration-300">
                      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-orange-600 font-bold text-xs">CRM</span>
                          <div>
                            <p className="text-xs font-bold text-slate-800">HubSpot CRM</p>
                            <p className="text-[10px] text-slate-400">Contact Created in Lead Pipeline</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-600">Synced</span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 font-bold text-xs">XLS</span>
                          <div>
                            <p className="text-xs font-bold text-slate-800">Google Sheets</p>
                            <p className="text-[10px] text-slate-400">Row Appended to #Q3_Leads</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-600">Synced</span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 font-bold text-xs">MSG</span>
                          <div>
                            <p className="text-xs font-bold text-slate-800">Slack Alerts</p>
                            <p className="text-[10px] text-slate-400">Notification Sent to #sales-leads</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-600">Dispatched</span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Interactive Simulation Bar */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-200/80 pt-4 text-xs">
                  <span className="text-slate-400">Interactive Workflow Simulator</span>
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % steps.length)}
                    className="group inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Simulate Next Stage
                    <svg className="h-4 w-4 fill-current transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;