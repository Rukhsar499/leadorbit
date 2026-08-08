"use client";

import { FormEvent } from "react";

interface FormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      onSubmit(e);
      return;
    }

    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
    };

    console.log("Lead Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
    >
      {/* Form Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white">
          Start Automating Your Leads
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Connect your Facebook Lead Ads and simplify your lead workflow.
        </p>
      </div>

      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Full Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
        />
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Phone Number
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          inputMode="numeric"
          pattern="[0-9]{10}"
          maxLength={10}
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
        />
      </div>

      {/* Company */}
      <div className="mb-6">
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          Company Name
        </label>

        <input
          id="company"
          name="company"
          type="text"
          placeholder="Enter your company name"
          required
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        Start Free
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-gray-500">
        Get started with LeadOrbit and simplify your Facebook lead workflow.
      </p>
    </form>
  );
};

export default Form;