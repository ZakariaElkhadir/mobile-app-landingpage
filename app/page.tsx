import Cards from "@/components/Cards";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MetricSection from "@/components/MetricSection";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Steps />
        <MetricSection />
        <Cards />
        <Pricing />
        <Reviews />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
