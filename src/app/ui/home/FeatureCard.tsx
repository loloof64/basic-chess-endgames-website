import Image from "next/image";

type FeatureCardProps = {
    description: string;
    imagePath: string;
}

export default function FeatureCard({description, imagePath}: FeatureCardProps) {
  return (
    <div className="border rounded-md border-sky-300 m-4 mx-auto max-w-72 md:w-1/3 md:even:ml-auto md:mx-28">
      <Image src={imagePath} alt={description} width={300} height={100} />
      <p className="p-2">{description}</p>
      </div>
  )
}
