const Navbar = () => {
  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <div className="text-2xl font-bold">
          Lead<span className="text-blue-500">Orbit</span>
        </div>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            How It Works
          </a>

          <a
            href="#integrations"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Integrations
          </a>

          <a
            href="#pricing"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#faq"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            FAQ
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden text-sm text-gray-300 transition hover:text-white sm:block">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            Start Free
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;