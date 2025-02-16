import Image from "next/image";

interface FunctionalityCardProps {
  image: string;
  title: string;
  description: string;
}

export const FunctionalityCard = ({
  image,
  title,
  description,
}: FunctionalityCardProps) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="aspect-square h-60 w-full relative bg-muted-foreground overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={"Fonctionalité"}
          fill
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full text-center space-y-1">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
};
