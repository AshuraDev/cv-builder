import { Footer } from "@/components/footer/footer";
import { Cta } from "@/components/home/cta";
import { Functionality } from "@/components/home/functionality/functionality";
import { Hero } from "@/components/home/hero";
import { ServicesStep } from "@/components/home/service-step/service-step";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl">
        <Functionality />
        <ServicesStep />
        <Cta />
      </div>
      <Footer />
    </>
  );
}
