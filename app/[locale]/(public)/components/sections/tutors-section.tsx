"use client";

import Image from "next/image";
import { Tutor } from "@/app/actions/tutors";
import { Star, Users } from "lucide-react";
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
          <CarouselContent className="-ml-4">
            {tutors.map((tutor) => (
              <CarouselItem
                key={tutor.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md border border-border/50 transition-all hover:shadow-xl">
                  <div className="relative aspect-4/5 overflow-hidden">
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                      <Image
                        src={tutor.photo}
                        alt={tutor.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {tutor.specialization}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {tutor.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {tutor.university}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-foreground">
                          {tutor.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">
                          {tutor.studentCount} öğrenci
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-14" />
          <CarouselNext className="hidden lg:flex -right-14" />
        </Carousel>
      </div>
    </section>
  );
}
