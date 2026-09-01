"use client";

import { useEffect, useState } from "react";
import Form from "@/components/Form";
import { X, Sparkles, ShieldCheck, ArrowUpRight } from "lucide-react";

const MetaLogo = () => (
  <svg className="h-3.5 w-3.5 fill-[#0866FF]" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const GoogleLogo = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const ZohoLogo = () => (
  <svg className="h-3.5 w-3.5 fill-[#C8232C]" viewBox="0 0 24 24">
    <path d="M19.34 2H4.66A2.66 2.66 0 002 4.66v14.68A2.66 2.66 0 004.66 22h14.68A2.66 2.66 0 0022 19.34V4.66A2.66 2.66 0 0019.34 2zm-10.7 14.5a2.82 2.82 0 01-3.98 0 2.82 2.82 0 010-3.98l4.47-4.47a2.82 2.82 0 013.98 0l1.24 1.24-2.58 2.58-1.24-1.24a.83.83 0 00-1.18 0l-4.47 4.47a.83.83 0 000 1.18.83.83 0 001.18 0l3.05-3.05 2.58 2.58-3.05 3.05z" />
  </svg>
);

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    const openPopup = () => setIsOpen(true);

    window.addEventListener("open-lead-popup", openPopup);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-lead-popup", openPopup);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-sky-100 bg-white p-6 shadow-[0_20px_50px_rgba(2,132,199,0.15)] transition-all duration-300 animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Lights */}
        <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-32 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400/30 to-blue-500/30 blur-2xl" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.06]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-slate-500 shadow-xs transition-all hover:rotate-90 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Aligned Header */}
        <div className="flex flex-col items-start gap-1 pr-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-sky-700">
            <Sparkles className="h-3 w-3 fill-sky-600 text-sky-600" />
            <span>Instant Setup</span>
          </div>
          <h3 className="text-xl font-black tracking-tight text-slate-900">
            Get Started for Free
          </h3>
        </div>

        {/* Perfectly Aligned Integration Row */}
        <div className="mt-3.5 flex items-center justify-between border-y border-slate-100 py-2.5">
          <span className="text-[11px] font-semibold text-slate-500">
            Syncs with:
          </span>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs">
              <MetaLogo /> Meta
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs">
              <GoogleLogo /> Google
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-2xs">
              <ZohoLogo /> Zoho
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="mt-4">
          <Form />
        </div>

        
      </div>
    </div>
  );
};

export default LeadPopup;