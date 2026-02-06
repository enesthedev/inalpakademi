import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { type FaqItem } from "@/app/actions/faq";

interface FaqSectionProps {
  faqItems: FaqItem[];
}

export function FaqSection({ faqItems }: FaqSectionProps) {
  return (
    <section className="flex w-full flex-col items-center justify-center space-y-8 bg-background py-16 lg:py-24">
      <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
        Sıkça Sorulan Sorular
      </h2>
      <Accordion type="single" collapsible className="w-full max-w-5xl px-4">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
