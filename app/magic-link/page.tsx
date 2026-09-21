"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { verifyMagicLink } from "@/lib/api";

function MagicLinkContent() {
  const searchParams = useSearchParams();

  const [message, setMessage] = useState(
    "Verifying your login link..."
  );

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setMessage("Invalid login link.");
      return;
    }

    const verify = async () => {
      try {
        const result = await verifyMagicLink(token);

        if (
          result.status === "success" &&
          result.data.access_token
        ) {
          localStorage.setItem(
            "access_token",
            result.data.access_token
          );

          localStorage.setItem(
            "refresh_token",
            result.data.refresh_token
          );

          localStorage.setItem(
            "token_type",
            result.data.token_type
          );

          localStorage.setItem(
            "user",
            JSON.stringify(result.data.user)
          );

          window.location.href = result.data.redirect_url;
        } else {
          setMessage("Login verification failed.");
        }
      } catch (error) {
        console.error(
          "Magic link verification failed:",
          error
        );

        setMessage(
          "This login link is invalid or has expired."
        );
      }
    };

    verify();
  }, [searchParams]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
        <h1 className="text-xl font-bold text-white">
          {message}
        </h1>

        <p className="mt-3 text-sm text-slate-400">
          Please wait while we securely sign you in.
        </p>
      </div>
    </main>
  );
}

export default function MagicLinkPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
          <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h1 className="text-xl font-bold text-white">
              Verifying your login link...
            </h1>

            <p className="mt-3 text-sm text-slate-400">
              Please wait while we securely sign you in.
            </p>
          </div>
        </main>
      }
    >
      <MagicLinkContent />
    </Suspense>
  );
}