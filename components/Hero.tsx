import Form from "@/components/Form";

const Hero = () => {
    return (
        <section className="relative overflow-hidden px-6 py-16 sm:py-20 lg:py-24">
            {/* Background Glows with subtle ambient animation */}
            <div className="pointer-events-none absolute left-0 top-0 -z-10 h-96 w-96 animate-pulse rounded-full bg-blue-600/15 blur-3xl transition-all duration-1000" />
            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 animate-pulse rounded-full bg-purple-600/15 blur-3xl transition-all duration-1000" />

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
                            className="group mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                            </span>
                            Automate Your Facebook Leads
                        </div>

                        {/* Heading */}
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-4xl"
                        >
                            Turn Facebook Leads Into{" "}
                            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent transition-all duration-300 hover:brightness-125">
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
                            className="mt-8 space-y-3.5"
                        >
                            {[
                                "Automatically capture Facebook leads",
                                "Send leads through your preferred workflow",
                                "Connect with supported APIs and webhooks",
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center gap-3 text-sm text-gray-300 transition-colors duration-200 hover:text-white"
                                >
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/30">
                                        ✓
                                    </span>
                                    {benefit}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                       <div
  data-aos="fade-up"
  data-aos-delay="500"
  className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
>
  {/* Primary CTA - Clean Solid Button */}
  <a
    href="#how-it-works"
    className="group relative inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/50 active:scale-95"
  >
    <span className="relative z-10 flex items-center gap-2">
      See How It Works
    </span>
  </a>

  {/* Pricing Button - Continuous Glowing Outline with Blue Hover Border */}
  <a
    href="#pricing"
    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-blue-500/40 bg-blue-500/5 px-7 py-3.5 font-semibold text-gray-200 transition-all duration-300 animate-pulse hover:animate-none hover:border-blue-500 hover:bg-blue-500/15 hover:text-white hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
  >
    {/* Continuous Shimmer Effect */}
    <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />

    <span className="relative z-10">View Pricing</span>
    <span className="relative z-10 text-blue-400 transition-transform duration-300 group-hover:translate-x-1.5">
      →
    </span>
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
                        <div className="group relative mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/[0.02] p-2 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-blue-500/10">
                            <Form />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;