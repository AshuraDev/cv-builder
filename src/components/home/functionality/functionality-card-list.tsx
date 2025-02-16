import { FunctionalityCard } from "@/components/home/functionality/functionality-card";

export const FunctionalityCardList = () => {
  const functionalityList = [
    {
      image: "/images/personal-cv.webp",
      title: "Personnalisation de votre CV et lettre",
      description: "Créez un CV qui reflète votre personnalité.",
    },
    {
      image: "/images/cv-list.webp",
      title: "Modèles professionnels et modernes disponibles",
      description: "Choisissez parmi une large gamme de modèles.",
    },
    {
      image: "/images/ai-cv.webp",
      title:
        "Conseils d'IA pour optimiser votre candidature",
      description: "Obtenez des conseils sur mesure pour vous démarquer.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-20">
      {functionalityList.map((item) => (
        <FunctionalityCard
          key={item.image}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};
