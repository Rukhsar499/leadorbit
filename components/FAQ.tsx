"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Search,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  MessageCircle,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "what-is-leadorbit",
    category: "General",
    icon: <Sparkles className="h-5 w-5 text-sky-600" />,
    question: "What is LeadOrbit?",
    answer:
      "LeadOrbit is an automated lead orchestration SaaS platform that instantly captures, filters, and routes incoming Facebook Lead Ads directly into your CRM, webhooks, or sales pipelines in real-time.",
  },
  {
    id: "how-leads-processed",
    category: "Automation",
    icon: <Zap className="h-5 w-5 text-sky-600" />,
    question: "How does LeadOrbit receive my leads?",
    answer:
      "Using official Facebook Meta Graph API webhooks, LeadOrbit captures lead form submissions sub-second. Your leads are immediately validated, normalized, and dispatched without manual export steps.",
  },
  {
    id: "multiple-pages",
    category: "Account",
    icon: <Layers className="h-5 w-5 text-indigo-600" />,
    question: "Can I connect multiple Facebook Pages?",
    answer:
      "Yes! You can link multiple Facebook Pages and Ad Accounts under a unified dashboard. Page limits depend on your active membership plan (e.g., Growth allows 5 pages, Agency is unlimited).",
  },
  {
    id: "crm-integration",
    category: "Integrations",
    icon: <Cpu className="h-5 w-5 text-cyan-600" />,
    question: "Can I send leads directly to my CRM?",
    answer:
      "Absolutely. LeadOrbit offers native integrations with popular platforms like Salesforce, HubSpot, and Zoho CRM, alongside instant HTTPS Webhooks and REST API endpoints for custom backends.",
  },
  {
    id: "technical-skills",
    category: "General",
    icon: <ShieldCheck className="h-5 w-5 text-sky-600" />,
    question: "Do I need technical knowledge to set it up?",
    answer:
      "Not at all. Our 1-click Meta OAuth setup takes under 2 minutes. You can connect your page, map form fields visually, and start routing leads without writing a single line of code.",
  },
  {
    id: "data-security",
    category: "Security",
    icon: <ShieldCheck className="h-5 w-5 text-indigo-600" />,
    question: "Is my lead data securely processed?",
    answer:
      "Yes. All lead payloads are encrypted in transit via TLS 1.3 and at rest using AES-256 standards. We comply with GDPR and CCPA privacy standards to safeguard customer information.",
  },
];

const categories = ["All", "General", "Automation", "Integrations", "Security"];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("what-is-leadorbit");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/20 to-slate-50 px-6 py-24 sm:py-32 font-sans text-slate-900"
    >
      {/* Background Soft Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/30 blur-[150px]" />
      <div className="pointer-events-none absolute left-10 top-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-indigo-200/25 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-800 backdrop-blur-md">
            <HelpCircle className="h-3.5 w-3.5 text-sky-600" />
            Got Questions?
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg font-medium text-slate-600">
            Everything you need to know about setting up LeadOrbit and automating your lead workflows.
          </p>

          {/* Interactive Search & Filter Control */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white/90 py-3.5 pl-11 pr-4 text-xs sm:text-sm font-medium text-slate-800 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-all placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-md shadow-sky-500/20"
                        : "border border-slate-200 bg-white/80 text-slate-600 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ Grid with Fixed Visible Accordions */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:items-start">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? "border-sky-300 bg-white shadow-xl shadow-sky-900/10 ring-1 ring-sky-300/50"
                      : "border-slate-200/90 bg-white/80 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-start justify-between gap-4 p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300 ${
                          isOpen
                            ? "border-sky-200 bg-sky-50 shadow-xs"
                            : "border-slate-200/80 bg-slate-50 group-hover:border-sky-200 group-hover:bg-sky-50/50"
                        }`}
                      >
                        {faq.icon}
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600">
                          {faq.category}
                        </span>
                        <h3 className="mt-0.5 text-base sm:text-lg font-bold text-slate-900 transition-colors group-hover:text-sky-700">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 border-sky-300 bg-sky-100 text-sky-700"
                          : "text-slate-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {/* Fixed Collapsible Answer Container */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="border-t border-slate-100 px-6 pb-6 pt-4 text-xs sm:text-sm font-medium leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-sm font-bold text-slate-500">
                No matching questions found for "{searchQuery}".
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 text-xs font-bold text-sky-600 hover:underline"
              >
                Clear search filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Help Banner */}
        <div
          data-aos="fade-up"
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-sky-900/5 sm:flex-row sm:px-10"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-sky-600 shadow-xs">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900">Still have unanswered questions?</h4>
              <p className="text-xs sm:text-sm font-medium text-slate-500">Our integration support team is available 24/7 to assist you.</p>
            </div>
          </div>

          <a
            href="#contact"
            className="group flex items-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-3.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:from-sky-500 hover:to-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span>Talk to Support</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;