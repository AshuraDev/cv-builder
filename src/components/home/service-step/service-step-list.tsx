import { ServiceStepCard } from "./service-step-card";

export const ServiceStepList = () => {
  const serviceStepList = [
    {
      title: "Étape 1 : Remplissez vos informations personnelles",
      description:
        "Indiquez vos coordonnées et votre expérience professionnelle.",
    },
    {
      title: "Étape 2 : Choisissez un modèle adapté",
      description: "Ajoutez vos compétences et réalisations pour briller.",
    },
    {
      title: "Étape 3 : Téléchargez votre document",
      description:
        "Une fois terminé, téléchargez votre CV ou votre lettre de motivation au format PDF.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-20">
      {serviceStepList.map((item, i) => (
        <ServiceStepCard
          key={i}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
