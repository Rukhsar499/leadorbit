"use client";
import { useState } from "react";

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#" className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110">
            L
          </span>
          Lead<span className="text-blue-500 transition-colors group-hover:text-blue-400">Orbit</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { name: "Features", href: "#features" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "Integrations", href: "#integrations" },
            { name: "Pricing", href: "#pricing" },
            { name: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-white group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Continuous Animating Start Free Button */}
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 animate-pulse hover:animate-none hover:scale-105 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/70 active:scale-95">
            {/* Infinite Shimmer Sweep */}
            <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="relative z-10">Start Free</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-300 hover:text-white md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-sm text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>How It Works</a>
            <a href="#integrations" className="text-sm text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Integrations</a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>FAQ</a>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
              <button className="text-left text-sm text-gray-300 hover:text-white">Login</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;