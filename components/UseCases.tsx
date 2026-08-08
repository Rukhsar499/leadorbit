const UseCases = () => {
  const useCases = [
    {
      title: "Real Estate",
      description:
        "Capture property enquiries from Facebook Lead Ads and move them into your sales workflow.",
    },
    {
      title: "Education",
      description:
        "Automatically capture admission enquiries and send them to the right sales or counselling workflow.",
    },
    {
      title: "Digital Marketing Agencies",
      description:
        "Manage Facebook lead flows for businesses running lead-generation campaigns.",
    },
    {
      title: "Automobile",
      description:
        "Capture enquiries generated from Facebook campaigns and send them to your sales process.",
    },
    {
      title: "Insurance",
      description:
        "Automatically capture insurance enquiries generated through Facebook Lead Ads.",
    },
    {
      title: "Healthcare",
      description:
        "Streamline incoming Facebook leads into your business workflow.",
    },
  ];

  return (
    <section className="bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div data-aos="fade-up" className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Use Cases
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Built for Businesses Running Facebook Lead Ads
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            LeadOrbit can fit into different lead-generation and sales
            workflows.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="rounded-2xl border border-white/10 bg-[#080b1a] p-7"
            >
              <h3 className="text-xl font-semibold text-white">
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

export default UseCases;