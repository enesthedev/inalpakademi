import Image from "next/image";
import { Tutor } from "@/app/actions/tutors";

interface TutorsSectionProps {
  tutors: Tutor[];
}

export function TutorsSection({ tutors }: TutorsSectionProps) {
  return (
    <section id="egitmenler" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Eğitmenlerimiz
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alanında derece yapmış, tecrübeli eğitmenlerimizle başarıya ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl aspect-3/4"
            >
              {/* Fallback image if photo fails or for placeholder */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <Image
                  src={tutor.photo} // Assuming these might be relative paths or requiring configuration in next.config.js for external domains
                  alt={tutor.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-1">{tutor.name}</h3>
                <p className="text-white/90 text-sm font-medium">
                  {tutor.university}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
