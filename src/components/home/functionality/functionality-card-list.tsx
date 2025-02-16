import { FunctionalityCard } from "@/components/home/functionality/functionality-card";

export const FunctionalityCardList = () => {
  const functionalityList = [
    {
      image: "/images/personal-cv.webp",
      title: "Personnalisation de votre CV à l'aide de l'IA",
      description:
        "Créez un CV qui reflète votre personnalité. Notre service utilise l'IA pour optimiser votre présentation professionnelle.",
    },
    {
      image: "/images/cv-list.webp",
      title: "Rédaction de lettres de motivation sur mesure pour vous démarquer.",
      description: "Des lettres de motivation sur mesure, adaptées à l'offre et à vos compétences.",
    },
    {
      image: "/images/ai-cv.webp",
      title: "Conseils d'IA pour optimiser votre candidature",
      description: "Obtenez des conseils sur mesure pour vous démarquer.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-20">
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
