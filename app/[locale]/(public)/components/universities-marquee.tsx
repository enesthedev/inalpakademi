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
    <section className="py-8 bg-secondary">
      <div className="w-full flex justify-center mb-8 px-4">
        <p className="text-center text-xs text-secondary-foreground/70 font-medium uppercase tracking-wider">
          Türkiye'nin Önde Gelen Üniversitelerinin Öğrencileri
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-secondary to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-secondary to-transparent z-10" />
        <Marquee pauseOnHover className="[--duration:30s]">
          {universities.map((university) => (
            <div
              key={university.id}
              className="w-14 h-14 mx-4 bg-white rounded-full flex items-center justify-center shadow-sm border border-secondary-foreground/10 overflow-hidden"
              title={university.name}
            >
              <Image
                src={university.logo}
                alt={university.name}
                width={42}
                height={42}
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
