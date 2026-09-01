'use client';

import React from "react";
import { Clock, Download, AlertTriangle, Database } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      step: "01",
      title: "Manually checking Facebook leads",
      description:
        "Constantly logging into Facebook Ads Manager to download fresh leads wastes valuable time and leads to missed opportunities.",
      icon: Clock,
      impact: "Time Wasted",
    },
    {
      step: "02",
      title: "Exporting CSV files again and again",
      description:
        "Downloading CSVs daily, organizing spreadsheet rows, and re-formatting customer data creates operational friction.",
      icon: Download,
      impact: "High Friction",
    },
    {
      step: "03",
      title: "Delays in sending leads to your sales team",
      description:
        "Leads go cold within 5 minutes. Delayed follow-ups significantly reduce your sales conversion rate.",
      icon: AlertTriangle,
      impact: "Slower Conversions",
    },
    {
      step: "04",
      title: "Manually entering leads into your CRM",
      description:
        "Copy-pasting phone numbers and emails manually leads to human errors, missing fields, and duplicate entries.",
      icon: Database,
      impact: "Human Error",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-14 text-slate-800">
      {/* Embedded CSS for Timeline SVG Pulse Animations */}
      

      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-100/50 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            Operational Bottlenecks
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Stop Managing Facebook Leads{" "}
            <span className="bg-gradient-to-r from-rose-600 via-red-500 to-amber-600 bg-clip-text text-transparent">
              Manually
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            How manual workflows slowly disconnect your sales team from prospective revenue:
          </p>
        </div>

        {/* 2-Column / 2-Row Grid with Animated Connections */}
        <div className="relative mt-20 grid grid-cols-1 gap-y-12 gap-x-12 md:grid-cols-2 md:gap-y-16">
          
          {/* ================= ANIMATED CONNECTORS (DESKTOP ONLY) ================= */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            fill="none"
          >
            {/* Horizontal Line: Connects Item 01 to Item 02 */}
            <path
              d="M 42% 22% L 58% 22%"
              stroke="#f43f5e"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-line-flow opacity-60"
            />

            {/* S-Curve Line: Connects Item 02 (Top Right) to Item 03 (Bottom Left) */}
            <path
              d="M 75% 35% C 75% 55%, 25% 45%, 25% 65%"
              stroke="#f43f5e"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-line-flow opacity-60"
            />

            {/* Horizontal Line: Connects Item 03 to Item 04 */}
            <path
              d="M 42% 78% L 58% 78%"
              stroke="#f43f5e"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-line-flow opacity-60"
            />
          </svg>

          {/* ================= PROBLEM ITEMS ================= */}
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative flex flex-col items-start gap-4 rounded-2xl p-4 transition-all duration-500 ease-out hover:-translate-y-1"
              >
                {/* Header: Icon + Phase Tag */}
                <div className="flex w-full items-center justify-between">
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-12 w-12 transform-gpu items-center justify-center rounded-2xl border border-rose-200/80 bg-white text-rose-600 shadow-md transition-all duration-500 group-hover:scale-110 group-hover:border-rose-400 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-rose-500/25">
                      <Icon className="h-5 w-5 transition-transform duration-500 group-hover:rotate-6" />
                    </div>
                    <span className="text-xl font-black text-rose-600/40 transition-colors duration-500 group-hover:text-rose-600">
                      {item.step}
                    </span>
                  </div>

                  <span className="rounded-full border border-rose-200/70 bg-rose-50/80 px-3 py-1 text-xs font-semibold text-rose-700 shadow-2xs transition-colors duration-300 group-hover:bg-rose-100">
                    {item.impact}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-2">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-rose-600 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;