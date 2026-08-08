"use client";

import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is LeadOrbit?",
      answer:
        "LeadOrbit is a SaaS platform for automatically capturing and managing Facebook Lead Ads.",
    },
    {
      question: "How does LeadOrbit receive my leads?",
      answer:
        "LeadOrbit connects to your Facebook Page and processes new leads generated through your Facebook Lead Ads.",
    },
    {
      question: "Can I connect multiple Facebook Pages?",
      answer:
        "Yes. The number of Facebook Pages you can connect is subject to your membership plan.",
    },
    {
      question: "Can I send leads to my CRM?",
      answer:
        "Yes. Leads can be sent through supported integrations, APIs or webhooks.",
    },
    {
      question: "Do I need technical knowledge?",
      answer:
        "No. The basic Facebook connection is designed for non-technical users.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <div data-aos="fade-up" className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="rounded-2xl border border-white/10 bg-white/[0.03]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 p-6 text-left"
                >
                  <span className="font-semibold text-white">
                    {faq.question}
                  </span>

                  <span className="text-xl text-blue-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-7 text-gray-400">
                    {faq.answer}
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

export default FAQ;