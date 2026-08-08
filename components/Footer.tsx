const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white">
              Lead<span className="text-blue-500">Orbit</span>
            </div>

            <p className="mt-4 max-w-md leading-7 text-gray-400">
              Turn Facebook Leads Into Your Sales Pipeline Automatically.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <a href="#features" className="block hover:text-white">
                Features
              </a>

              <a href="#integrations" className="block hover:text-white">
                Integrations
              </a>

              <a href="#pricing" className="block hover:text-white">
                Pricing
              </a>

              <a href="#faq" className="block hover:text-white">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <a href="#" className="block hover:text-white">
                About
              </a>

              <a href="#" className="block hover:text-white">
                Contact
              </a>

              <a href="#" className="block hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-white">
                Terms
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} LeadOrbit. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;