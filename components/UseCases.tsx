import React from "react";
import {
  Building2,
  GraduationCap,
  Megaphone,
  Car,
  ShieldCheck,
  Activity,
  Briefcase,
  KeyRound,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

// Types
interface UseCaseItem {
  title: string;
  icon: LucideIcon;
  tag: string;
}

const useCasesRow1: UseCaseItem[] = [
  { title: "Real Estate", icon: Building2, tag: "Property Enquiries" },
  { title: "Education & EdTech", icon: GraduationCap, tag: "Student Admissions" },
  { title: "Digital Agencies", icon: Megaphone, tag: "Client Campaigns" },
  { title: "Automobile", icon: Car, tag: "Test Drive Leads" },
];

const useCasesRow2: UseCaseItem[] = [
  { title: "Insurance Providers", icon: ShieldCheck, tag: "Policy Quotes" },
  { title: "Healthcare & Clinics", icon: Activity, tag: "Patient Consultations" },
  { title: "Financial Services", icon: Briefcase, tag: "Loan Requests" },
  { title: "SaaS & B2B Tech", icon: KeyRound, tag: "Demo Signups" },
];

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Background Glow Highlights */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Use Cases
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Tailored for Every Industry Running{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Facebook Lead Ads
            </span>
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="relative mt-16 flex flex-col gap-6 overflow-hidden py-4">
        {/* Left & Right Gradient Blur Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent sm:w-48" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent sm:w-48" />

        {/* Row 1: Scrolling Left */}
        <div className="group flex w-full select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,radial-gradient(ellipse_at_center,black_70%,transparent))]">
          <div className="flex shrink-0 animate-marquee items-center gap-6 group-hover:[animation-play-state:paused]">
            {[...useCasesRow1, ...useCasesRow1].map((item: UseCaseItem, index: number) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.title}-${index}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/60 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors duration-300 hover:text-blue-300">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-blue-400/80">
                      {item.tag}
                    </span>
                  </div>
                  <ArrowUpRight className="ml-2 h-4 w-4 text-gray-500 transition-colors duration-300 hover:text-blue-400" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="group flex w-full select-none overflow-hidden">
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-6 group-hover:[animation-play-state:paused]">
            {[...useCasesRow2, ...useCasesRow2].map((item: UseCaseItem, index: number) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.title}-${index}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/60 px-6 py-4 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors duration-300 hover:text-blue-300">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-blue-400/80">
                      {item.tag}
                    </span>
                  </div>
                  <ArrowUpRight className="ml-2 h-4 w-4 text-gray-500 transition-colors duration-300 hover:text-blue-400" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;