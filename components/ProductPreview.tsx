const ProductPreview = () => {
  return (
    <section className="bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div
          data-aos="fade-up"
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-500">
            Product Preview
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            See Your Leads in One Place
          </h2>

          <p className="mt-5 text-lg text-gray-400">
            A simple dashboard to access the leads coming through your
            Facebook Lead Ads.
          </p>
        </div>

        <div
          data-aos="zoom-in"
          className="mx-auto mt-14 max-w-6xl rounded-2xl border border-white/10 bg-[#080b1a] p-4 shadow-2xl"
        >
          <div className="rounded-xl border border-white/10 bg-[#050816] p-6">

            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-gray-400">
                  LeadOrbit Dashboard
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  Leads
                </h3>
              </div>

              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white">
                + New
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 p-5">
                <p className="text-sm text-gray-400">Total Leads</p>
                <p className="mt-2 text-3xl font-bold text-white">1,248</p>
              </div>

              <div className="rounded-xl border border-white/10 p-5">
                <p className="text-sm text-gray-400">Today's Leads</p>
                <p className="mt-2 text-3xl font-bold text-white">42</p>
              </div>

              <div className="rounded-xl border border-white/10 p-5">
                <p className="text-sm text-gray-400">Sources</p>
                <p className="mt-2 text-3xl font-bold text-white">Facebook</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
              {["Rahul Sharma", "Priya Singh", "Amit Kumar"].map(
                (name, index) => (
                  <div
                    key={name}
                    className="grid grid-cols-3 border-b border-white/10 px-5 py-4 text-sm last:border-0"
                  >
                    <span className="text-white">{name}</span>
                    <span className="text-gray-400">
                      Facebook Lead
                    </span>
                    <span className="text-green-400">
                      {index === 0 ? "New" : "Received"}
                    </span>
                  </div>
                )
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductPreview;