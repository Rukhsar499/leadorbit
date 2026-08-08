import Form from "@/components/Form";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-16 sm:py-20 lg:py-24">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT CONTENT ================= */}
          <div
            data-aos="fade-right"
            data-aos-duration="900"
          >
            {/* Badge */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400"
            >
              Automate Your Facebook Leads
            </div>

            {/* Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Turn Facebook Leads Into
              <span className="mt-2 block text-blue-500">
                Your Sales Pipeline Automatically
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 max-w-xl text-lg leading-8 text-gray-400"
            >
              Connect your Facebook Lead Ads, capture new leads
              automatically, and send them where your business needs them.
            </p>

            {/* Benefits */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-8 space-y-3"
            >
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  ✓
                </span>
                Automatically capture Facebook leads
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  ✓
                </span>
                Send leads through your preferred workflow
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  ✓
                </span>
                Connect with supported APIs and webhooks
              </div>
            </div>

            {/* CTA */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a 
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 px-7 py-3.5 font-semibold text-white transition hover:bg-white/5"
              >
                See How It Works
              </a>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg text-sm font-medium text-gray-400 transition hover:text-white"
              >
                View Pricing →
              </a>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
            className="w-full"
          >
            <div className="mx-auto max-w-lg">
              <Form />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;