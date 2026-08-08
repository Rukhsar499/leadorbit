"use client";

import React, { useState } from "react";
import {
  Database,
  Code2,
  Webhook,
  Zap,
  ArrowRight,
  Share2,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface IntegrationNode {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  color: string;
  glowColor: string;
}

const integrations: IntegrationNode[] = [
  {
    id: "crm",
    title: "CRM Integrations",
    category: "Instant Sync",
    description:
      "Directly route fresh lead records into your existing sales pipeline without touching manual exports.",
    icon: <Database className="h-7 w-7 text-blue-400" />,
    tags: ["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive"],
    color: "from-blue-500/20 to-indigo-500/10",
    glowColor: "group-hover:shadow-blue-500/30",
  },
  {
    id: "api",
    title: "REST API Access",
    category: "Developer First",
    description:
      "Full programmatic control over lead retrieval, token management, and query filters with custom endpoints.",
    icon: <Code2 className="h-7 w-7 text-cyan-400" />,
    tags: ["JSON Payload", "Bearer Auth", "GraphQL", "SDKs"],
    color: "from-cyan-500/20 to-blue-500/10",
    glowColor: "group-hover:shadow-cyan-500/30",
  },
  {
    id: "webhooks",
    title: "Real-Time Webhooks",
    category: "Sub-Second Push",
    description:
      "Push incoming lead data instantly to custom HTTPS destinations, serverless functions, or automation nodes.",
    icon: <Webhook className="h-7 w-7 text-indigo-400" />,
    tags: ["Zapier", "Make.com", "n8n", "Custom Servers"],
    color: "from-indigo-500/20 to-purple-500/10",
    glowColor: "group-hover:shadow-indigo-500/30",
  },
];

const Integrations: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>("crm");

  return (
    <section id="integrations" className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32">
      {/* Ambient Radial Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-md">
            <Zap className="h-3.5 w-3.5" />
            Ecosystem Integrations
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Send Leads Anywhere Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow Demands
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Connect Facebook lead forms directly into CRMs, webhooks, or custom server endpoints in less than 2 minutes.
          </p>
        </div>

        {/* Central Hub & Flow Pipeline Visualizer */}
        <div className="mt-16 flex flex-col items-center">
          {/* Source Meta Node */}
          <div data-aos="zoom-in" className="relative z-10 flex flex-col items-center">
            <div className="group relative flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/40 bg-gradient-to-b from-blue-600/30 to-slate-900 p-4 shadow-xl shadow-blue-500/20 backdrop-blur-xl transition-transform duration-500 hover:scale-110">
              <Share2 className="h-9 w-9 text-blue-400 animate-pulse" />
              <div className="absolute -inset-1 -z-10 rounded-full bg-blue-500/20 blur-md group-hover:bg-blue-500/40" />
            </div>
            <span className="mt-3 text-xs font-bold uppercase tracking-wider text-blue-400">
              Meta Lead Ads Source
            </span>

            {/* Downward Data Flow Arrow with Pulse */}
            <div className="relative my-4 flex h-16 w-1 flex-col items-center justify-center bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-500">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-cyan-400" />
            </div>
          </div>

          {/* Core Engine Orb */}
          <div data-aos="zoom-in" data-aos-delay="100" className="relative z-10 mb-16 flex flex-col items-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-indigo-500/50 bg-slate-900/90 p-5 shadow-2xl shadow-indigo-500/30 backdrop-blur-2xl">
              <Sparkles className="h-10 w-10 text-indigo-400 animate-spin-slow" />
              <div className="absolute -inset-2 -z-10 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-40 blur-lg" />
            </div>
            <span className="mt-3 text-sm font-extrabold text-white">LeadOrbit Router</span>
          </div>

          {/* 3 Circular Nodes Destination Grid */}
          <div className="grid w-full gap-10 md:grid-cols-3 md:gap-8">
            {integrations.map((item, index) => {
              const isSelected = activeNode === item.id;

              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  onMouseEnter={() => setActiveNode(item.id)}
                  className="group relative flex flex-col items-center"
                >
                  {/* Connected Flow Line from Router */}
                  <div className="hidden md:block absolute -top-12 left-1/2 h-12 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500/60 to-transparent group-hover:from-blue-400" />

                  {/* Circular Node Container */}
                  <div
                    className={`relative flex h-36 w-36 items-center justify-center rounded-full border-2 bg-gradient-to-b p-4 backdrop-blur-2xl transition-all duration-500 ${
                      item.color
                    } ${
                      isSelected
                        ? "scale-105 border-blue-400 shadow-2xl shadow-blue-500/40"
                        : "border-white/10 group-hover:border-blue-500/50 group-hover:scale-105"
                    }`}
                  >
                    {/* Inner Rotating Ring */}
                    <div className="absolute inset-2 rounded-full border border-dashed border-white/20 transition-transform duration-1000 group-hover:rotate-180" />

                    {/* Center Icon */}
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-slate-950/80 shadow-inner">
                      {item.icon}
                    </div>

                    {/* Orbiting Badge Tag */}
                    <span className="absolute -top-2 rounded-full border border-white/10 bg-slate-900/90 px-3 py-0.5 text-[10px] font-semibold tracking-wide text-gray-300 backdrop-blur-md shadow-md">
                      {item.category}
                    </span>

                    {/* Hover Glow Background */}
                    <div className={`absolute inset-0 -z-10 rounded-full transition-all duration-500 blur-xl ${item.glowColor}`} />
                  </div>

                  {/* Content Info below Circle */}
                  <div className="mt-6 text-center max-w-sm">
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>

                    {/* Supported Platforms Pills */}
                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-gray-300 transition-colors group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-300"
                        >
                          <CheckCircle2 className="h-3 w-3 text-blue-400" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Arrow Link */}
                    <button
                      type="button"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 transition-all hover:text-blue-300 group-hover:translate-x-1"
                    >
                      <span>Explore Docs</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          data-aos="fade-up"
          className="mt-20 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl sm:flex-row sm:px-12"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Share2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need a custom enterprise connector?</h4>
              <p className="text-sm text-gray-400">We build custom webhooks & API integrations for high-volume teams.</p>
            </div>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:shadow-blue-600/50"
          >
            <span>Request Custom Integration</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;