const Features = () => {
  const features = [
    {
      title: "Automatic Lead Capture",
      description:
        "Capture new Facebook Lead Ads automatically without manually exporting leads.",
    },
    {
      title: "Lead Management",
      description:
        "Keep your incoming leads accessible through the LeadOrbit platform.",
    },
    {
      title: "API Access",
      description:
        "Connect LeadOrbit with your own systems through APIs.",
    },
    {
      title: "Webhooks",
      description:
        "Send lead information to your own workflow using webhooks.",
    },
    {
      title: "CRM Integrations",
      description:
        "Send leads to supported CRM integrations and sales workflows.",
    },
    {
      title: "Simple Facebook Connection",
      description:
        "The Facebook connection is designed to be usable without technical knowledge.",
    },
  ];

  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div
          data-aos="fade-up"
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Features
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Everything You Need to Automate Your Lead Flow
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Capture, manage and send your Facebook leads through a simple
            workflow.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                ✓
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;