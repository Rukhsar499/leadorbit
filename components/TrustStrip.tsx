import React from 'react';

const TrustStrip = () => {
  const trustItems = [
  {
    title: "Automatic Lead Capture",
    icon: (
      <svg className="h-5 w-5 text-sky-600 transform-gpu transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "CRM Ready",
    icon: (
      <svg className="h-5 w-5 text-blue-600 transform-gpu transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "API & Webhooks",
    icon: (
      <svg className="h-5 w-5 text-indigo-600 transform-gpu transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Easy Facebook Connection",
    icon: (
      <svg className="h-5 w-5 text-sky-500 transform-gpu transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:text-sky-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];
  return (
    <section className="relative overflow-hidden border-y border-sky-100/80 bg-gradient-to-r from-sky-50/60 via-slate-50/80 to-blue-50/60 py-5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group flex cursor-pointer items-center justify-center gap-3 py-2 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1"
            >
              {/* Icon Container with subtle background glow on hover */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100/40 transition-colors duration-500 ease-out group-hover:bg-sky-200/50">
                {item.icon}
              </div>

              {/* Title with smooth color transition */}
              <span className="text-sm font-semibold text-slate-600 transition-colors duration-500 ease-out group-hover:text-blue-600">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;