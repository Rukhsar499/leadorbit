"use client";

import { useEffect, useState } from "react";
import Form from "@/components/Form";

const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    // Listen for buttons from ANY component
    const openPopup = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-lead-popup", openPopup);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-lead-popup", openPopup);
    };
  }, []);

  // ESC close
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

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
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
  );
};

export default LeadPopup;