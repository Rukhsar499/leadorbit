import { Clock, Download, AlertTriangle, Database } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      title: "Manually checking Facebook leads",
      description: "Constantly logging into Facebook Ads Manager to download fresh leads wastes valuable time and leads to missed opportunities.",
      icon: Clock,
      impact: "Time Wasted",
    },
    {
      title: "Exporting CSV files again and again",
      description: "Downloading CSVs daily, organizing spreadsheet rows, and re-formatting customer data creates operational friction.",
      icon: Download,
      impact: "High Friction",
    },
    {
      title: "Delays in sending leads to your sales team",
      description: "Leads go cold within 5 minutes. Delayed follow-ups significantly reduce your sales conversion rate.",
      icon: AlertTriangle,
      impact: "Slower Conversions",
    },
    {
      title: "Manually entering leads into your CRM",
      description: "Copy-pasting phone numbers and emails manually leads to human errors, missing fields, and duplicate entries.",
      icon: Database,
      impact: "Human Error",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          data-aos="fade-up"
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
            The Problem
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Stop Managing Facebook Leads{" "}
            <span className="bg-gradient-to-r from-red-400 via-rose-400 to-amber-400 bg-clip-text text-transparent">
              Manually
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Traditional lead management causes delays, lost sales, and repetitive work.
            Here is what is holding your business back:
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-red-500/40 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-red-500/10"
              >
                {/* Subtle Card Glow on Hover */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-500/0 blur-2xl transition-all duration-500 group-hover:bg-red-500/10" />

                <div className="flex items-start justify-between gap-4">
                  {/* Icon Box */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-300 group-hover:scale-110 group-hover:border-red-500/40 group-hover:bg-red-500/20 group-hover:text-red-300 group-hover:shadow-lg group-hover:shadow-red-500/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Impact Tag */}
                  <span className="rounded-md border border-red-500/20 bg-red-950/40 px-2.5 py-1 text-xs font-medium text-red-400">
                    {item.impact}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-red-200">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
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