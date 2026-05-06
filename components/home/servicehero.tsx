import Image from "next/image";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  eyebrow?: string;
}

export default function ServiceHero({ title, subtitle, imageSrc ,eyebrow }: ServiceHeroProps) {
  return (
    <section className="relative w-full bg-gray-100 py-16 mt-2">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-sm uppercase tracking-widest text-gold mb-2">{eyebrow}</h1>
        <h1 className="text-4xl font-bold text-primary">{title}</h1>
        <p className="text-lg text-muted-foreground mt-4">{subtitle}</p>
      </div>
      <div className="mt-8 flex justify-center px-2">
        <Image 
          src={imageSrc} 
          alt={title} 
          width={800} 
          height={400} 
          className="rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
