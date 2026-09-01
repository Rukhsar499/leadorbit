import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "LeadOrbit - Turn Facebook Leads Into Your Sales Pipeline",
  description:
    "Connect your Facebook Lead Ads, capture new leads automatically, and send them where your business needs them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}