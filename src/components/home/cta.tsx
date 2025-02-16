import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section className="w-full bg-primary my-10 rounded-xl shadow-lg">
      <div className="w-full h-full flex justify-center flex-col px-6 py-10 gap-4 text-white">
        <h2 className="font-bold text-2xl md:text-4xl">Créez votre CV facilement</h2>
        <p className="md:text-lg text-base font-normal">
          Transformez vos compétences en un CV percutant grâce à notre service
          d&apos;IA innovant.
        </p>
        <div className="">
          <Button className="flex items-center justify-center gap-x-2 bg-white text-black">
            Commencer
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
