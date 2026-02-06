import { Users, GraduationCap, Calendar, Target } from "lucide-react";
import { HandmadeLogo } from "@/app/components/handmade-logo";

const features = [
  {
    icon: Users,
    title: "Birebir Dersler",
    description: "Yalnızca siz ve eğitmeniniz. Tam odaklanma.",
  },
  {
    icon: GraduationCap,
    title: "Uzman Eğitmenler",
    description: "Tıp fakültelerinde derece yapmış mentörler.",
  },
  {
    icon: Calendar,
    title: "Esnek Program",
    description: "Size uygun gün ve saatlerde dersler.",
  },
  {
    icon: Target,
    title: "Hedef Odaklı",
    description: "Sınava özel strateji ve kişiselleştirilmiş içerik.",
  },
];

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <h2 className="font-bold text-foreground flex items-center justify-center gap-2 flex-wrap">
            <HandmadeLogo
              titleClassName="text-2xl sm:text-3xl lg:text-4xl leading-none"
              subtitleClassName="text-base sm:text-lg lg:text-xl -bottom-3 sm:-bottom-4 lg:-bottom-5 -right-5 sm:-right-6 lg:-right-7"
              strokeWidth="3px"
              variant="dark"
              showIcon={false}
            />
            <span className="text-primary text-2xl sm:text-3xl lg:text-4xl">
              Nedir?
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Türkiye&apos;nin en iyi tıp fakültelerinde derece yapmış
            öğrencilerden birebir ders alabileceğiniz online eğitim platformu.
            Sadece ders değil, deneyim ve motivasyon da paylaşıyoruz.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
