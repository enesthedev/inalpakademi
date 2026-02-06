"use client";

import Image from "next/image";
import { Tutor } from "@/app/actions/tutors";
import { MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

interface TutorsSectionProps {
  tutors: Tutor[];
}

export function TutorsSection({ tutors }: TutorsSectionProps) {
  return (
    <section id="egitmenler" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            <span className="text-primary">Uzman</span> Eğitmenlerimiz
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Alanında derece yapmış, deneyimli eğitmenlerimizle hayalindeki
            üniversiteye bir adım daha yaklaş.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {tutors.map((tutor) => (
              <CarouselItem
                key={tutor.id}
                className="pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="group relative overflow-hidden rounded-xl aspect-3/4">
                  <Image
                    src={tutor.photo}
                    alt={tutor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                    <div className="flex items-center gap-1 text-white/80">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{tutor.city}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white leading-tight">
                      {tutor.name}
                    </h3>
                    <p className="text-xs text-white/70 font-medium">
                      {tutor.rank}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-12" />
          <CarouselNext className="hidden lg:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}
