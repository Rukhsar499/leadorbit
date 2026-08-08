import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

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
    <html lang="en">
      <body>
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}