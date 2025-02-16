import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="h-screen mt-20 relative">
      <div className="absolute top-0 left-0 h-48 w-48 -z-10 bg-primary rounded-ee-full"></div>
      <div className="absolute bottom-0 right-0 h-48 w-48 -z-10 bg-primary rounded-ss-full"></div>
      <div className="mx-auto h-full max-w-7xl px-2 md:px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col gap-y-6 justify-center">
            <h1 className="font-extrabold text-2xl md:text-4xl lg:text-6xl">
              Tranformez votre avenir avec un CV percutant
            </h1>
            <p className="text-lg text-muted-foreground text-justify">
              Notre service utilise l&apos;inteligence artificielle pour créer
              des CV et des lettres de recommandation qui se démarquent.
              Laissez-nous vous aider à faire briller votre parcours
              professionnel.
            </p>
            <div className="flex items-center gap-x-4">
              <Button className="flex items-center justify-center gap-2">
                Commencer <ArrowRight className="h-6 w-6" />
              </Button>
              <Button variant={"outline"}>En savoir plus</Button>
            </div>
          </div>
        </div>
        <div className="w-full h-full p-5 flex items-center">
          <div className="aspect-square w-full max-h-[500px] relative overflow-hidden rounded-lg">
            <Image
              src={"/images/hero-image.webp"}
              alt="Illustration CV"
              fill
              objectFit="cover"
              className="object-cover object-center z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
