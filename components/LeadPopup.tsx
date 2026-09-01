"use client";

import { useEffect, useState } from "react";
import Form from "@/components/Form";
import { X, Zap, ShieldCheck } from "lucide-react";

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
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Compact Single-Row Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 pr-8">
          <div>
            <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-sky-700">
              <Zap className="h-3 w-3 fill-sky-600 text-sky-600" /> Automated Sync
            </div>
            <h3 className="text-lg font-black text-slate-900 leading-none mt-0.5">
              Start Capturing Leads
            </h3>
          </div>

          {/* Inline Integration Badges */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"><MetaLogo /> Meta</span>
            <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"><GoogleLogo /> Google</span>
            <span className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"><ZohoLogo /> Zoho</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="mt-3">
          <Form />
        </div>
       </div>
    </div>
  );
};

export default LeadPopup;