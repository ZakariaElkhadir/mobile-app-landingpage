import Cards from "@/components/Cards";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MetricSection from "@/components/MetricSection";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Image from "next/image";

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
      <footer className="2xl:px-31 flex flex-col md:flex-row items-center justify-between bg-bg-white px-8 py-8 lg:px-16 text-sm text-text-nav-inactive">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Snapense Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span>Snapense © 2026</span>
        </div>
        <div className="flex items-center gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-text-nav-active transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-text-nav-active transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-text-nav-active transition-colors">
            Support
          </a>
        </div>
      </footer>
    </>
  );
}
