import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl min-h-screen">
        <Hero />
      </div>
      {/* <Footer/> */}
    </>
  );
}
