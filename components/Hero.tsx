const Hero = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">

        <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Automate Your Facebook Leads
        </div>

        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Turn Facebook Leads Into
          <span className="block text-blue-500">
            Your Sales Pipeline Automatically
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Connect your Facebook Lead Ads, capture new leads automatically,
          and send them where your business needs them.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700">
            Start Free
          </button>

          <button className="rounded-lg border border-white/15 px-7 py-3.5 font-semibold text-white transition hover:bg-white/5">
            See How It Works
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;