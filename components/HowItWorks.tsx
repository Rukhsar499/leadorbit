import { Link2, Zap, Send, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Facebook",
      description:
        "Authenticate your Facebook Page with one click and select the Lead Ad forms you want to monitor in real-time.",
      icon: Link2,
      tag: "Quick Setup",
    },
    {
      number: "02",
      title: "Capture Leads",
      description:
        "LeadOrbit instantly catches every lead payload the second a prospect submits your Facebook lead form.",
      icon: Zap,
      tag: "Instant Sync",
    },
    {
      number: "03",
      title: "Send Leads Anywhere",
      description:
        "Automatically route your leads directly into your CRM, Google Sheets, Slack, or via custom Webhooks.",
      icon: Send,
      tag: "Automated",
    },
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            How It Works
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            From Facebook Lead to Sales Pipeline in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Connect once and let LeadOrbit handle your automated lead pipeline seamlessly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Connecting Line between steps on Desktop */}
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[2px] w-8 translate-x-4 border-t-2 border-dashed border-white/10 group-hover:border-blue-500/50 lg:block z-20" />
                )}

                {/* Top Bar: Icon + Number Watermark */}
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-4xl font-extrabold tracking-tighter text-white/10 transition-colors duration-300 group-hover:text-blue-500/30">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <div className="mb-2 inline-block rounded-md border border-blue-500/20 bg-blue-500/5 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                      {step.tag}
                    </div>

                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-blue-400">
                  <span>Step {step.number}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;