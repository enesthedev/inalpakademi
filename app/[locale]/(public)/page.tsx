import { getTestimonials } from "@/app/actions/testimonials";
import { getFaqItems } from "@/app/actions/faq";
import { getTutors } from "@/app/actions/tutors";

import { StepsSection } from "./components/sections/steps-section";
import { TutorsSection } from "./components/sections/tutors-section";
import { TestimonialsSection } from "./components/sections/testimonials-section";
import { FaqSection } from "./components/sections/faq-section";
import { CTASection } from "./components/sections/cta-section";
import { Star } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default async function LandingPage() {
  const [tutors, testimonials, faqItems] = await Promise.all([
    getTutors(),
    getTestimonials(),
    getFaqItems(),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex min-h-[90vh] 2xl:min-h-[50vh] w-full flex-col items-center justify-center space-y-10 bg-primary px-4">
        <h1 className="max-w-xl text-center text-4xl font-semibold leading-tight text-primary-foreground md:max-w-md lg:text-5xl pt-32">
          <span className="bg-secondary px-2 text-primary-foreground">
            Sınavdan
          </span>{" "}
          Korkuyor Musun?
        </h1>

        <p className="max-w-md text-center text-base lg:text-lg font-light leading-normal tracking-wide text-primary-foreground/90">
          Senden önce sınavı geçmiş ve derece yapmış öğrencilerle birlikte sınav
          sürecini daha kolay ve eğlenceli hale getiriyoruz
        </p>

        <div className="flex flex-row items-center justify-center space-x-3 pt-5">
          <Button
            variant="secondary"
            className="h-12 px-8 text-sm shadow-none lg:h-14 lg:px-10 lg:text-lg"
          >
            Hemen Başla
          </Button>
          <Button
            variant="success"
            className="h-12 px-8 text-sm shadow-none lg:h-14 lg:px-10 lg:text-lg"
          >
            Hemen Ara
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              {["BBF7D0", "A5F3FC", "C7D2FE", "FBCFE8", "FDE68A"].map(
                (color, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-foreground"
                    style={{ backgroundColor: `#${color}` }}
                  >
                    K{i + 1}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-1">
            <div className="flex items-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="whitespace-nowrap text-xs font-medium text-primary-foreground">
              +8000 kullanıcı
            </span>
          </div>
        </div>
      </section>
      <StepsSection />
      <TutorsSection tutors={tutors} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqItems={faqItems} />
      <CTASection />
    </div>
  );
}
