import { getTestimonials } from "@/app/actions/testimonials";
import { getFaqItems } from "@/app/actions/faq";
import { getTutors } from "@/app/actions/tutors";
import { getUniversities } from "@/app/actions/universities";

import { UniversitiesMarquee } from "./components/universities-marquee";
import { TutorsSection } from "./components/sections/tutors-section";
import { TestimonialsSection } from "./components/sections/testimonials-section";
import { FaqSection } from "./components/sections/faq-section";
import { CTASection } from "./components/sections/cta-section";
import { ClipboardPenLine, Rocket, Star } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default async function Page() {
  const [tutors, testimonials, faqItems, universities] = await Promise.all([
    getTutors(),
    getTestimonials(),
    getFaqItems(),
    getUniversities(),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex min-h-[90vh] 2xl:min-h-[70vh] w-full flex-col items-center justify-center space-y-10 bg-primary px-4">
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
            Şimdi Ders Al
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
      <UniversitiesMarquee universities={universities} />
      <section className="py-16 lg:py-24 bg-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              3 Adımda <span className="text-primary">Başla</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Hayalindeki üniversiteye giden yol düşündüğünden çok daha basit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group relative bg-white rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ClipboardPenLine className="w-6 h-6 text-primary" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                  01
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Formu Doldur
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                İletişime geçelim ve ihtiyaçlarını anlayalım.
              </p>
            </div>
            <div className="group relative bg-white rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                  02
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Eğitmenini Tanı
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seni en uygun eğitmenle eşleyelim ve deneme dersi planlayalım.
              </p>
            </div>
            <div className="group relative bg-white rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <span className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                  03
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Başarıya Ulaş
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ders takibi, planlar ve programlarla dönem boyunca seni
                hazırlayalım.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TutorsSection tutors={tutors} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqItems={faqItems} />
      <CTASection />
    </div>
  );
}
