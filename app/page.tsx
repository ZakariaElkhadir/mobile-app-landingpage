import Cards from "@/components/Cards";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MetricSection from "@/components/MetricSection";
import Steps from "@/components/Steps";
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
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}
