import { ServiceStepList } from "@/components/home/service-step/service-step-list";

export const ServicesStep = () => {
  return (
    <section className="py-10">
      <div className="w-full">
        <div className="flex flex-col gap-y-4">
          <h2 className="font-bold text-3xl">
            Comment créer votre CV
          </h2>
          <p className="text-lg text-muted-foreground">
            Notre service utilise l&apos;intelligence artificielle pour
            simplifier la création de votre CV et de lettres de motivation.
            Suivez ces étapes simples pour obtenir un document professionnel qui
            vous démarquera.
          </p>
        </div>
        <ServiceStepList/>
      </div>
    </section>
  );
};
