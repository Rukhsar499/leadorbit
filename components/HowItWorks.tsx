const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Facebook",
      description:
        "Connect your Facebook Page and start receiving leads from your Lead Ads.",
    },
    {
      number: "02",
      title: "Capture Leads",
      description:
        "LeadOrbit automatically receives new leads submitted through your Facebook Lead Ads.",
    },
    {
      number: "03",
      title: "Send Leads",
      description:
        "Send your leads where your business needs them through supported integrations, APIs or webhooks.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div
          data-aos="fade-up"
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            How It Works
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            From Facebook Lead to Sales Pipeline
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Connect once and let LeadOrbit handle your lead flow.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative rounded-2xl border border-white/10 bg-[#080b1a] p-8"
            >
              <span className="text-5xl font-bold text-blue-500/20">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;