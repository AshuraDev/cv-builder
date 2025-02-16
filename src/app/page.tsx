import { Functionality } from "@/components/home/functionality/functionality";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl">
        <Functionality />
      </div>
      {/* <Footer/> */}
    </>
  );
}
