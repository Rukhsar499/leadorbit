"use client";

import React, { useState } from "react";
import {
  Database,
  Code2,
  Webhook,
  Zap,
  Share2,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Layers,
} from "lucide-react";

interface IntegrationNode {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  gradient: string;
  badgeStyle: string;
  hoverGlow: string;
  accentColor: string;
}

const integrations: IntegrationNode[] = [
  {
    id: "crm",
    title: "CRM Integrations",
    category: "Instant Sync",
    description:
      "Directly route fresh lead records into your existing sales pipeline without touching manual exports.",
    icon: <Database className="h-7 w-7 text-sky-600" />,
    tags: ["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive"],
    gradient: "from-sky-50 to-blue-50 border-sky-200/80",
    badgeStyle: "bg-sky-100 text-sky-800 border-sky-300",
    hoverGlow: "group-hover:shadow-sky-500/20 group-hover:border-sky-400",
    accentColor: "text-sky-600",
  },
  {
    id: "api",
    title: "REST API Access",
    category: "Developer First",
    description:
      "Full programmatic control over lead retrieval, token management, and query filters with custom endpoints.",
    icon: <Code2 className="h-7 w-7 text-cyan-600" />,
    tags: ["JSON Payload", "Bearer Auth", "GraphQL", "SDKs"],
    gradient: "from-cyan-50 to-sky-50 border-cyan-200/80",
    badgeStyle: "bg-cyan-100 text-cyan-800 border-cyan-300",
    hoverGlow: "group-hover:shadow-cyan-500/20 group-hover:border-cyan-400",
    accentColor: "text-cyan-600",
  },
  {
    id: "webhooks",
    title: "Real-Time Webhooks",
    category: "Sub-Second Push",
    description:
      "Push incoming lead data instantly to custom HTTPS destinations, serverless functions, or automation nodes.",
    icon: <Webhook className="h-7 w-7 text-indigo-600" />,
    tags: ["Zapier", "Make.com", "n8n", "Custom Servers"],
    gradient: "from-indigo-50 to-purple-50 border-indigo-200/80",
    badgeStyle: "bg-indigo-100 text-indigo-800 border-indigo-300",
    hoverGlow: "group-hover:shadow-indigo-500/20 group-hover:border-indigo-400",
    accentColor: "text-indigo-600",
  },
];

const Integrations: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>("crm");

  return (
    <section id="integrations" className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-slate-50 px-6 py-24 sm:py-32 font-sans text-slate-900">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/40 blur-[150px]" />
      <div className="pointer-events-none absolute right-5 top-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-indigo-200/30 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/60 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800 backdrop-blur-md">
            <Zap className="h-3.5 w-3.5 text-sky-600" />
            Ecosystem Integrations
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Send Leads Anywhere Your{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Workflow Demands
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600">
            Connect Meta lead forms directly into CRMs, webhooks, or custom server endpoints in less than 2 minutes.
          </p>
        </div>

        {/* Central Hub Container */}
        <div className="mt-16 flex flex-col items-center">
          
          {/* Source Node */}
          <div data-aos="zoom-in" className="relative z-10 flex flex-col items-center">
            <div className="group relative flex h-20 w-20 items-center justify-center rounded-2xl border border-sky-200 bg-white p-4 shadow-xl shadow-sky-900/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-sky-400">
              <Share2 className="h-9 w-9 text-sky-600 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute -inset-1 -z-10 rounded-2xl bg-sky-400/20 blur-md transition-all group-hover:bg-sky-500/30" />
            </div>
            <span className="mt-3 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-700 shadow-xs">
              Meta Lead Ads Source
            </span>
          </div>

          {/* Solid Flow Pipe (Source -> Router) with Traveling Pulse */}
          <div className="relative my-2 h-16 w-full max-w-[2px] flex justify-center">
            <svg className="h-full w-4 overflow-visible">
              <line x1="8" y1="0" x2="8" y2="100%" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="8" y1="0" x2="8" y2="100%" stroke="#38bdf8" strokeWidth="2" className="opacity-60" />
              <circle cx="8" cy="0" r="4" fill="#0284c7" className="animate-[glowPulseVertical_1.8s_ease-in-out_infinite]">
                <animate attributeName="cy" from="0%" to="100%" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Router Node */}
          <div data-aos="zoom-in" data-aos-delay="100" className="relative z-10 flex flex-col items-center">
            <div className="group relative flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-indigo-300 bg-white p-5 shadow-2xl shadow-indigo-900/15 backdrop-blur-2xl transition-all duration-300 hover:scale-105">
              <Sparkles className="h-10 w-10 text-indigo-600 transition-transform duration-700 group-hover:rotate-180" />
              <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-sky-400 to-indigo-500 opacity-20 blur-xl transition-opacity group-hover:opacity-40" />
            </div>
            <span className="mt-3 text-sm font-black text-slate-900">LeadOrbit Core Router</span>
          </div>

          {/* Aesthetic Curved Gradient SVG Tree with Animated Glowing Orbs */}
          <div className="hidden md:block relative w-full h-32 pointer-events-none z-0 mt-2">
            <svg className="w-full h-full" viewBox="0 0 1000 130" preserveAspectRatio="none">
              <defs>
                {/* Smooth Multi-Color Gradients */}
                <linearGradient id="gradient-left" x1="50%" y1="0%" x2="16.66%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>

                <linearGradient id="gradient-center" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                <linearGradient id="gradient-right" x1="50%" y1="0%" x2="83.33%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>

                {/* Glow Filter for Pulsing Light Orbs */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Base Background Lines */}
              <path id="path-left" d="M 500 0 C 500 70, 166 30, 166 130" fill="none" stroke="#e2e8f0" strokeWidth="2" />
              <path id="path-center" d="M 500 0 L 500 130" fill="none" stroke="#e2e8f0" strokeWidth="2" />
              <path id="path-right" d="M 500 0 C 500 70, 833 30, 833 130" fill="none" stroke="#e2e8f0" strokeWidth="2" />

              {/* Glowing Gradient Lines */}
              <path d="M 500 0 C 500 70, 166 30, 166 130" fill="none" stroke="url(#gradient-left)" strokeWidth="2.5" className="opacity-80" />
              <path d="M 500 0 L 500 130" fill="none" stroke="url(#gradient-center)" strokeWidth="2.5" className="opacity-80" />
              <path d="M 500 0 C 500 70, 833 30, 833 130" fill="none" stroke="url(#gradient-right)" strokeWidth="2.5" className="opacity-80" />

              {/* Traveling Pulse Orbs moving along curves */}
              <circle r="5" fill="#38bdf8" filter="url(#glow)">
                <animateMotion path="M 500 0 C 500 70, 166 30, 166 130" dur="2s" repeatCount="indefinite" />
              </circle>

              <circle r="5" fill="#06b6d4" filter="url(#glow)">
                <animateMotion path="M 500 0 L 500 130" dur="1.7s" repeatCount="indefinite" />
              </circle>

              <circle r="5" fill="#818cf8" filter="url(#glow)">
                <animateMotion path="M 500 0 C 500 70, 833 30, 833 130" dur="2.2s" repeatCount="indefinite" />
              </circle>

              {/* Terminal Connection Rings */}
              <circle cx="500" cy="0" r="4" fill="#818cf8" />
              <circle cx="166" cy="130" r="4" fill="#0284c7" />
              <circle cx="500" cy="130" r="4" fill="#06b6d4" />
              <circle cx="833" cy="130" r="4" fill="#6366f1" />
            </svg>
          </div>

          {/* Destination Nodes Grid */}
          <div className="grid w-full gap-8 md:grid-cols-3 z-10 mt-6 md:mt-0">
            {integrations.map((item, index) => {
              const isSelected = activeNode === item.id;

              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  onMouseEnter={() => setActiveNode(item.id)}
                  className="group relative flex flex-col items-center rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 hover:shadow-2xl hover:shadow-sky-900/10 hover:-translate-y-1"
                >
                  <div
                    className={`relative flex h-32 w-32 items-center justify-center rounded-full border-2 bg-gradient-to-b p-4 backdrop-blur-2xl transition-all duration-500 ${item.gradient} ${
                      isSelected
                        ? "scale-105 shadow-2xl shadow-sky-500/20 border-sky-400"
                        : "group-hover:scale-105"
                    } ${item.hoverGlow}`}
                  >
                    <div className="absolute inset-2 rounded-full border border-dashed border-slate-300 transition-transform duration-1000 group-hover:rotate-180" />

                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                      {item.icon}
                    </div>

                    <span className={`absolute -top-3 rounded-full border px-3 py-0.5 text-[10px] font-bold tracking-wide shadow-xs ${item.badgeStyle}`}>
                      {item.category}
                    </span>
                  </div>

                  <div className="mt-6 text-center max-w-sm">
                    <h3 className={`text-xl font-black text-slate-900 transition-colors duration-200 ${item.accentColor}`}>
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap justify-center gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-700 transition-colors group-hover:border-sky-300 group-hover:bg-sky-50 group-hover:text-sky-800"
                        >
                          <CheckCircle2 className="h-3 w-3 text-sky-600" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enterprise Request Banner */}
        <div
          data-aos="fade-up"
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-sky-900/5 sm:flex-row sm:px-10"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-sky-600 shadow-xs">
              <Layers className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900">Need a custom enterprise connector?</h4>
              <p className="text-xs sm:text-sm font-medium text-slate-500">We build custom webhooks & API integrations for high-volume sales teams.</p>
            </div>
          </div>

          <button
            onClick={() => {
              window.dispatchEvent(new Event("open-lead-popup"));
            }}
            type="button"
            className="group flex items-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-3.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:from-sky-500 hover:to-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span>Request Custom Integration</span>
            <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;