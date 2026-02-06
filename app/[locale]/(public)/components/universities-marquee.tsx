import Image from "next/image";
import { Marquee } from "@/app/components/ui/marquee";
import { type University } from "@/app/actions/universities";

interface UniversitiesMarqueeProps {
  universities: University[];
}

export function UniversitiesMarquee({
  universities,
}: UniversitiesMarqueeProps) {
  return (
    <section className="py-8 bg-white">
      <div className="w-full flex justify-center mb-8 px-4">
        <p className="text-center text-xs text-foreground font-medium uppercase tracking-wider">
          Türkiye'nin Önde Gelen Üniversitelerinin Öğrencileri
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10" />
        <Marquee pauseOnHover className="[--duration:50s]">
          {universities.map((university) => (
            <div
              key={university.id}
              className="w-32 h-32 mx-4 flex items-center justify-center overflow-hidden"
              title={university.name}
            >
              <Image
                src={university.logo}
                alt={university.name}
                width={100}
                height={100}
                className="object-contain"
                loading="eager"
                quality={85}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
