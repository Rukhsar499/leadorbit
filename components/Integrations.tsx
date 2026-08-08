const Integrations = () => {
  const integrations = [
    {
      title: "CRM Integrations",
      description:
        "Send leads to supported CRM integrations and keep your sales workflow connected.",
    },
    {
      title: "API",
      description:
        "Connect LeadOrbit with your own application using API-based workflows.",
    },
    {
      title: "Webhooks",
      description:
        "Send new lead information to your own systems through webhooks.",
    },
  ];

  return (
    <section id="integrations" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div
          data-aos="fade-up"
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Integrations
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Send Leads Where Your Business Needs Them
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            Connect your lead flow with supported integrations, APIs and
            webhooks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {integrations.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-xl font-bold text-blue-400">
                →
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Integrations;