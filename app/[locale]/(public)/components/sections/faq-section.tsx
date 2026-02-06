import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { type FaqItem } from "@/app/actions/faq";
import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

interface FaqSectionProps {
  faqItems: FaqItem[];
}

export function FaqSection({ faqItems }: FaqSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground relative z-10">
                Sıkça Sorulan <span className="text-primary">Sorular</span>
              </h2>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Merak ettiklerinize hızlıca cevap bulun. Aradığınızı
              bulamadıysanız bize ulaşmaktan çekinmeyin.
            </p>
            <Link href="#iletisim">
              <Button variant="outline" className="mt-4">
                Daha fazla sorunuz mu var?
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            <Accordion
              type="single"
              collapsible
              className="w-full border-0 overflow-visible"
            >
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background rounded-lg border border-border/50 px-4 mb-3 last:mb-0"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
