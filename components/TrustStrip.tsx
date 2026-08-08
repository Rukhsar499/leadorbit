const TrustStrip = () => {
  const items = [
    "Automatic Lead Capture",
    "CRM Ready",
    "API & Webhooks",
    "Easy Facebook Connection",
  ];

  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="text-center text-sm font-medium text-gray-300"
          >
            <span className="mr-2 text-blue-500">✓</span>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;