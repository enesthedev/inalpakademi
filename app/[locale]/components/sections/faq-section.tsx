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
    <section className="flex w-full flex-col items-center justify-center space-y-10 bg-background py-20">
      <h2 className="text-4xl font-semibold text-foreground">
        Sıkça Sorulan Sorular
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-screen-lg px-4"
      >
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left text-lg">
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
