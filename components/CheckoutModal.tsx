"use client";

import { FormEvent, useState } from "react";
import { X, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import {
  checkout,
  type CheckoutResponse,
} from "@/lib/api";

interface SelectedPlan {
  id: string;
  name: string;
  monthly: string;
}

interface CheckoutModalProps {
  plan: SelectedPlan | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({
  plan,
  isOpen,
  onClose,
}: CheckoutModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutResult, setCheckoutResult] =
    useState<CheckoutResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckout = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!plan) {
      return;
    }

    setErrorMessage("");
    setCheckoutResult(null);
    setIsSubmitting(true);

    try {
      const result = await checkout({
        email: email.trim(),
        planName: plan.name,
        name: name.trim(),
        phoneNumber: phoneNumber.trim(),
        durationDays: 30,
      });

      setCheckoutResult(result);
    } catch (error) {
      console.error("Checkout failed:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    setName("");
    setEmail("");
    setPhoneNumber("");
    setErrorMessage("");
    setCheckoutResult(null);

    onClose();
  };

  if (!isOpen || !plan) {
    return null;
  }

  const isSuccess =
    checkoutResult?.status === "success" &&
    checkoutResult.data.payment.status === "SUCCEEDED";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-900">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute right-4 top-4 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label="Close checkout"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Success */}
        {isSuccess ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-500" />

            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Payment Successful
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {checkoutResult.data.message}
            </p>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-left dark:bg-slate-800">
              <div className="flex justify-between gap-4 border-b border-slate-200 py-3 dark:border-slate-700">
                <span className="text-sm text-slate-500">
                  Plan
                </span>

                <span className="font-medium text-slate-900 dark:text-white">
                  {checkoutResult.data.membership.planName}
                </span>
              </div>

              <div className="flex justify-between gap-4 border-b border-slate-200 py-3 dark:border-slate-700">
                <span className="text-sm text-slate-500">
                  Payment
                </span>

                <span className="font-medium text-green-600">
                  {checkoutResult.data.payment.status}
                </span>
              </div>

              <div className="flex justify-between gap-4 py-3">
                <span className="text-sm text-slate-500">
                  Amount
                </span>

                <span className="font-medium text-slate-900 dark:text-white">
                  ₹{checkoutResult.data.payment.amount}
                </span>
              </div>
            </div>

            {checkoutResult.data.magicLinkSent && (
              <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">
                A secure login link has been sent to{" "}
                <span className="font-medium text-slate-900 dark:text-white">
                  {checkoutResult.data.email}
                </span>
                . Please check your email.
              </p>
            )}

            <button
              type="button"
              onClick={handleClose}
              className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6 pr-10">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Complete Checkout
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Enter your details to continue with your
                subscription.
              </p>
            </div>

            {/* Selected Plan */}
            <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Selected Plan
                  </p>

                  <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                    {plan.name}
                  </p>
                </div>

                <p className="text-lg font-semibold text-slate-900 dark:text-white">
                  {plan.monthly}
                  <span className="text-sm font-normal text-slate-500">
                    /month
                  </span>
                </p>
              </div>

              <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                Duration: 30 days
              </div>
            </div>

            {/* Error */}
            {errorMessage && (
              <div className="mb-5 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

                <p>{errorMessage}</p>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleCheckout}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="checkout-name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Full Name
                </label>

                <input
                  id="checkout-name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Alex Rivers"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 disabled:cursor-not-allowed disabled:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-white dark:disabled:bg-slate-800"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="checkout-email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Email Address
                </label>

                <input
                  id="checkout-email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 disabled:cursor-not-allowed disabled:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-white dark:disabled:bg-slate-800"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="checkout-phone"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  Phone Number
                </label>

                <input
                  id="checkout-phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(event) =>
                    setPhoneNumber(event.target.value)
                  }
                  placeholder="+19876543210"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 disabled:cursor-not-allowed disabled:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-white dark:disabled:bg-slate-800"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Continue to Payment"
                )}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-slate-400">
              By continuing, you agree to the subscription
              terms.
            </p>
          </>
        )}
      </div>
    </div>
  );
}