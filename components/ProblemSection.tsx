const ProblemSection = () => {
  const problems = [
    "Manually checking Facebook leads",
    "Exporting leads again and again",
    "Delays in sending leads to your sales team",
    "Manually entering leads into your CRM",
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div
          data-aos="fade-up"
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            The Problem
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Stop Managing Facebook Leads Manually
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Turn your Facebook lead flow into a simpler, more automated
            process.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={problem}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                ×
              </div>

              <h3 className="text-lg font-semibold text-white">
                {problem}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;