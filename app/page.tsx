import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ProductPreview from "@/components/ProductPreview";
import Integrations from "@/components/Integrations";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";


export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />
      

      <TrustStrip />

      <ProblemSection />

      <HowItWorks />

      <Features />

      <ProductPreview />

      <Integrations />

      <UseCases />

      <Pricing />

      <FAQ />

      <FinalCTA />
      
 {/* Auto Popup after 5 seconds */}
      <LeadPopup />
      <Footer />
    </main>
  );
}