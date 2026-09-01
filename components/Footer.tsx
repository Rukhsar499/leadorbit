const Footer = () => {
  return (
    <footer className="border-t border-slate-300 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-slate-900">
              Lead<span className="text-blue-500">Orbit</span>
            </div>

            <p className="mt-4 max-w-md leading-7 text-slate-600">
              Turn Facebook Leads Into Your Sales Pipeline Automatically.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <a href="#features" className="block hover:text-slate-900">
                Features
              </a>

              <a href="#integrations" className="block hover:text-slate-900">
                Integrations
              </a>

              <a href="#pricing" className="block hover:text-slate-900">
                Pricing
              </a>

              <a href="#faq" className="block hover:text-slate-900">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <a href="#" className="block hover:text-slate-900">
                About
              </a>

              <a href="#" className="block hover:text-slate-900">
                Contact
              </a>

              <a href="#" className="block hover:text-slate-900">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-slate-900">
                Terms
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-300 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} LeadOrbit. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;