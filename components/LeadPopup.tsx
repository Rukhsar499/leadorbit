"use client";

import { useEffect, useState } from "react";
import Form from "@/components/Form";

interface LeadPopupProps {
  autoOpen?: boolean;
  delay?: number;
}

const LeadPopup = ({
  autoOpen = false,
  delay = 5000,
}: LeadPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Auto popup
  useEffect(() => {
    if (!autoOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [autoOpen, delay]);

  // ESC key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Manual Button */}
      {!autoOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Start Free
        </button>
      )}

      {/* Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20"
            >
              ×
            </button>

            {/* SAME FORM */}
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default LeadPopup;