import { FunctionalityCardList } from "@/components/home/functionality/functionality-card-list";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

export const Functionality = () => {
  return (
    <section className="px-2 md:px-4 py-10">
      <div className="w-full text-center">
        <h2 className="font-bold text-3xl">
          Découvrez les fonctionnalités de notre service
        </h2>
        <p className="text-lg text-muted-foreground">
          Notre service de création de CV utilise l&apos;intelligence
          artificielle pour vous offrir des documents personnalisés.
        </p>
      </div>
      <div className="">
        <FunctionalityCardList />
      </div>
      {/* <div className="mt-8 w-full flex items-center justify-center">
        <Button className="flex items-center justify-center gap-x-2">
          Commencer
          <ArrowRight className="w-6 h-6" />
        </Button>
      </div> */}
    </section>
  );
};
