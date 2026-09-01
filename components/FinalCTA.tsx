"use client";

import React from "react";
import {
  ArrowRight,
  Zap,
  Sparkles,
  CheckCircle2,
  Bell,
  Activity,
  ShieldCheck,
} from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-sky-50/40 to-white px-6 py-12 font-sans text-slate-900">
      {/* CSS Keyframes for Seamless Pattern Movement */}
      <style jsx>{`
        @keyframes moveGrid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
        .animate-moving-grid {
          animation: moveGrid 6s linear infinite;
        }
      `}</style>

      {/* Ambient Pulsing Glow Halos */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-200/50 via-blue-200/30 to-indigo-200/40 blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Main Card Container */}
        <div
          data-aos="zoom-in"
          className="relative rounded-3xl border border-slate-200/80 bg-white/70 p-2 shadow-2xl shadow-sky-900/10 backdrop-blur-2xl"
        >
          {/* Inner Card */}
          <div className="relative overflow-hidden rounded-[22px] bg-white px-6 py-16 text-center sm:px-12 sm:py-20">
            
            {/* CONTINUOUS MOVING BACKGROUND PATTERN */}
            <div className="pointer-events-none absolute inset-0 -z-10 animate-moving-grid bg-[radial-gradient(#0284c7_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-[0.12]" />

            {/* Ambient Animated Corner Glows */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-indigo-300/30 blur-2xl animate-pulse" />

            {/* Floating Live Micro-Widgets */}
            <div className="pointer-events-none absolute left-6 top-8 hidden lg:flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/90 p-3 shadow-xl shadow-sky-900/5 backdrop-blur-md animate-bounce [animation-duration:5s]">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <Bell className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Live Sync</p>
                <p className="text-xs font-black text-slate-800">New Facebook Lead +1</p>
              </div>
            </div>

            <div className="pointer-events-none absolute right-6 bottom-10 hidden lg:flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white/90 p-3 shadow-xl shadow-emerald-900/5 backdrop-blur-md animate-bounce [animation-duration:6s]">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <Activity className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">API Speed</p>
                <p className="text-xs font-black text-slate-800">Sub-second Routing</p>
              </div>
            </div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800">
              <Zap className="h-3.5 w-3.5 text-sky-600 fill-sky-600" />
              Instant Setup • No Coding Needed
            </div>

            {/* Headline */}
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:leading-tight">
              Turn Your Facebook Ads Into an Automated{" "}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Sales Engine
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-slate-600">
              Connect Meta Lead Forms directly to your CRM, webhooks, or sales team within 2 minutes. Start capturing high-intent prospects effortlessly.
            </p>

            {/* Value Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-bold text-slate-700">
              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50/90 px-4 py-2 backdrop-blur-xs">
                <CheckCircle2 className="h-4 w-4 text-sky-600" />
                14-Day Free Trial
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50/90 px-4 py-2 backdrop-blur-xs">
                <CheckCircle2 className="h-4 w-4 text-sky-600" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-slate-50/90 px-4 py-2 backdrop-blur-xs">
                <ShieldCheck className="h-4 w-4 text-sky-600" />
                Official Meta Partner API
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => {
                  window.dispatchEvent(new Event("open-lead-popup"));
                }}
                type="button"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-xl shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/40 active:scale-95"
              >
                {/* Shimmer Light Reflection Effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                
                <Sparkles className="h-4 w-4 fill-white" />
                <span>Register Now For Free</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200/90 bg-slate-50 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 transition-all duration-200 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
              >
                View Flexible Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;