import {
  Zap,
  Database,
  Code2,
  Webhook,
  Layers,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Automatic Lead Capture",
      description:
        "Instantly capture every incoming Facebook Lead Ad submission in real-time without ever touching a manual CSV export.",
      icon: Zap,
      badge: "Real-time Sync",
      isFeatured: true, // Takes up 2 columns for Bento grid style
    },
    {
      title: "Lead Management Hub",
      description:
        "Filter, search, and monitor all incoming leads from a single centralized, high-speed dashboard.",
      icon: Database,
      badge: "Centralized",
    },
    {
      title: "Developer API Access",
      description:
        "Connect LeadOrbit directly to your custom backend or mobile apps using secure, low-latency REST APIs.",
      icon: Code2,
      badge: "REST API",
    },
    {
      title: "Instant Webhooks",
      description:
        "Trigger custom automated server workflows and events whenever a new lead is captured.",
      icon: Webhook,
      badge: "HTTP Post",
    },
    {
      title: "Native CRM Integrations",
      description:
        "Send leads seamlessly to HubSpot, Salesforce, Zoho, Google Sheets, or your sales pipelines.",
      icon: Layers,
      badge: "Plug & Play",
    },
    {
      title: "No-Code Facebook Auth",
      description:
        "Connect your Meta Pages and Lead Forms in under 60 seconds with OAuth authentication.",
      icon: ShieldCheck,
      badge: "1-Click Setup",
    },
  ];

  return (
    <section id="features" className="relative overflow-hidden px-6 py-24 sm:py-32">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 bottom-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div data-aos="fade-up" className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            Features
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything You Need to Automate Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Lead Pipeline
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            Eliminate repetitive tasks, stop losing leads, and accelerate your sales cycle with enterprise-grade automation.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-500/50 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-blue-500/10 ${
                  feature.isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Subtle Hover Gradient Glow inside Card */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/0 blur-2xl transition-all duration-500 group-hover:bg-blue-500/15" />

                <div>
                  {/* Top Header: Icon + Badge + Corner Link */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/30">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 text-xs font-medium text-blue-400">
                        {feature.badge}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-all duration-300 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Animated Visual Accent for the Featured Card */}
                {feature.isFeatured && (
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-950/30 p-3.5 backdrop-blur-sm">
                    <div className="flex h-3 w-3 items-center justify-center">
                      <span className="absolute h-3 w-3 animate-ping rounded-full bg-blue-400 opacity-75" />
                      <span className="relative h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-xs font-medium text-blue-300">
                      Live Stream Active: Incoming leads processed under 500ms
                    </span>
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

export default Features;