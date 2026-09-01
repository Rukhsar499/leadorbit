'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-100/60 via-slate-50 to-white px-6 py-12 sm:py-16 lg:py-24 text-slate-900 font-sans">
      {/* ================= MOVING PATTERN BACKGROUND ================= */}
      <div 
        className="absolute inset-0 z-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0284c7 0.75px, transparent 0.75px), radial-gradient(#0284c7 0.75px, #f8fafc 0.75px)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
          animation: 'movePattern 20s linear infinite',
        }}
      />

      {/* Embedded Style for Moving Pattern Keyframes */}
      <style jsx global>{`
        @keyframes movePattern {
          0% {
            background-position: 0 0, 15px 15px;
          }
          100% {
            background-position: 60px 60px, 75px 75px;
          }
        }
      `}</style>

      {/* ================= LIGHT AMBIENT BACKGROUND GLOWS ================= */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-200/40 via-blue-100/50 to-indigo-100/30 blur-3xl animate-pulse [animation-duration:8s]" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-100/60 to-blue-200/30 blur-3xl animate-pulse [animation-duration:10s]" />
      <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-blue-50/80 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-6 max-w-2xl">
            {/* Pill Badge */}
            <div 
              data-aos="fade-down"
              data-aos-delay="100"
              className="inline-flex items-center gap-2 rounded-full border border-sky-300/60 bg-sky-100/60 px-4 py-1.5 text-xs sm:text-sm font-semibold text-sky-800 shadow-sm backdrop-blur-md transition-all hover:bg-sky-100 hover:shadow-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-600"></span>
              </span>
              Automate Your Lead Generation
            </div>

            {/* Main Headline */}
            <h1 
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.12]"
            >
              Streamline Your <br />
              Business Operations. <br />
              Effortlessly.
            </h1>

            {/* Subtitle */}
            <p 
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600"
            >
              Connect your Lead Ads, capture new leads automatically, and send them where your business needs them.
            </p>

            {/* Feature List */}
            <div data-aos="fade-up" data-aos-delay="400" className="mt-8 space-y-3.5">
              <div className="group flex items-center gap-3 text-sm text-gray-700 transition-colors duration-200 hover:text-black">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/30">
                  ✓
                </span>
                Automatically capture Facebook leads
              </div>
              <div className="group flex items-center gap-3 text-sm text-gray-700 transition-colors duration-200 hover:text-black">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/30">
                  ✓
                </span>
                Send leads through your preferred workflow
              </div>
              <div className="group flex items-center gap-3 text-sm text-gray-700 transition-colors duration-200 hover:text-black">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xs text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-blue-500/30">
                  ✓
                </span>
                Connect with supported APIs and webhooks
              </div>
            </div>

            {/* CTA Buttons */}
            <div 
              data-aos="fade-up"
              data-aos-delay="500"
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              {/* Primary CTA */}
              <a
                href="#start"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-sky-300/80 bg-white/80 px-7 py-3.5 text-sm font-bold text-sky-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:bg-white hover:shadow-md active:scale-95"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition-transform duration-300 group-hover:scale-110">
                  <svg className="h-3.5 w-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Demo
              </a>
            </div>
          </div>

          {/* ================= RIGHT LAPTOP IMAGE + FLOATING BRAND BADGES ================= */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex justify-center items-center">
            
            {/* Radial Blur behind Laptop */}
            <div className="absolute h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-gradient-to-br from-sky-200/60 to-blue-200/40 blur-3xl -z-10" />

            {/* Laptop Image Wrapper */}
            <div 
              data-aos="zoom-in"
              data-aos-delay="300"
              className="relative z-10 w-full max-w-lg lg:max-w-none transform transition-transform duration-500 hover:scale-[1.02]"
            >
              <img
                src="/laptop.webp"
                alt="CloudCore Dashboard Mockup"
                className="w-full h-auto drop-shadow-2xl object-contain"
              />
            </div>

            {/* ================= FLOATING BRAND BADGES ================= */}
            
            {/* Meta Top Left */}
            <div data-aos="zoom-in" data-aos-delay="400" className="absolute -top-6 left-1/3 z-20 animate-bounce [animation-duration:3.8s] rounded-2xl bg-white p-2.5 shadow-xl ring-1 ring-slate-200 hover:scale-110 transition-transform">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 text-white">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.8 13.4c-1.1 0-2.1-.5-2.8-1.3l-.3-.4-.3.4c-.7.8-1.7 1.3-2.8 1.3-1.9 0-3.4-1.5-3.4-3.4 0-1.9 1.5-3.4 3.4-3.4 1.1 0 2.1.5 2.8 1.3l.3.4.3-.4c.7-.8 1.7-1.3 2.8-1.3 1.9 0 3.4 1.5 3.4 3.4 0 1.9-1.5 3.4-3.4 3.4z"/>
                </svg>
              </div>
            </div>

            {/* Meta Top Right */}
            <div data-aos="zoom-in" data-aos-delay="500" className="absolute -top-4 right-10 z-20 animate-bounce [animation-duration:4.2s] rounded-2xl bg-white p-2.5 shadow-xl ring-1 ring-slate-200 hover:scale-110 transition-transform">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl text-white">
                <img src="/meta.png" alt="" />
              </div>
            </div>

            {/* Facebook Mid Left */}
            <div data-aos="zoom-in" data-aos-delay="600" className="absolute top-1/4 -left-4 sm:-left-6 z-20 animate-bounce [animation-duration:4.5s] rounded-2xl bg-white p-2.5 shadow-xl ring-1 ring-slate-200 hover:scale-110 transition-transform">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1877F2] text-white">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </div>

            {/* Instagram Mid Right */}
            <div data-aos="zoom-in" data-aos-delay="700" className="absolute top-1/3 -right-4 sm:-right-6 z-20 animate-bounce [animation-duration:3.6s] rounded-2xl bg-white p-2.5 shadow-xl ring-1 ring-slate-200 hover:scale-110 transition-transform">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>

            {/* Zoho Bottom Left */}
            <div data-aos="zoom-in" data-aos-delay="800" className="absolute bottom-12 -left-2 sm:-left-4 z-20 animate-bounce [animation-duration:4s] rounded-2xl bg-white p-2.5 shadow-xl ring-1 ring-slate-200 hover:scale-110 transition-transform">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white font-black text-lg tracking-tighter">
                Z
              </div>
            </div>

            {/* TikTok Bottom Right */}
            <div data-aos="zoom-in" data-aos-delay="900" className="absolute bottom-6 -right-2 sm:right-2 z-20 animate-bounce [animation-duration:3.9s] rounded-2xl bg-white p-2.5 shadow-xl ring-1 ring-slate-200 hover:scale-110 transition-transform">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.56-1.28 2.55.02.82.42 1.61 1.08 2.11.83.65 1.96.82 2.97.49 1.01-.31 1.83-1.15 2.07-2.18.12-.62.11-1.26.11-1.89V.02z"/>
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;