import { Card, CardContent } from "@/app/components/ui/card";
import { Marquee } from "@/app/components/ui/marquee";
import { Star } from "lucide-react";
import { type Testimonial } from "@/app/actions/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="w-80 shrink-0 hover:shadow-sm transition-shadow duration-300">
      <CardContent>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed text-sm">
          &quot;{testimonial.content}&quot;
        </p>
      </CardContent>
    </Card>
  );
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section id="yorumlar" className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Öğrencilerimiz <span className="text-primary">Ne Diyor?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Binlerce öğrenci Inalp ile hedeflerine ulaştı. İşte onların
            deneyimleri.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <Marquee pauseOnHover className="[--duration:60s] mb-6">
          {firstRow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse className="[--duration:60s]">
          {secondRow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
