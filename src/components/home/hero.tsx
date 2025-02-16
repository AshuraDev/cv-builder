import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="px-2 md:px-4 flex flex-col md:flex-row items-center mt-6">
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col gap-y-6 justify-center">
          <h1 className="font-extrabold text-2xl md:text-4xl lg:text-6xl">
            Tranformez votre avenir avec un CV percutant
          </h1>
          <p className="text-lg text-muted-foreground text-justify">
            Notre service utilise l&apos;inteligence artificielle pour créer des
            CV et des lettres de recommandation qui se démarquent. Laissez-nous
            vous aider à faire briller votre parcours professionnel
          </p>
          <div className="flex items-center gap-x-4">
            <Button>Commencer</Button>
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
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
