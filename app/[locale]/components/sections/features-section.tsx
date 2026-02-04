import { Card, CardContent } from "@/app/components/ui/card";
import { BookOpen, Clock, Award, Users } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Kişiselleştirilmiş Eğitim",
      description:
        "Seviyenize ve hedeflerinize göre özelleştirilmiş ders planları ile öğrenin.",
    },
    {
      icon: Clock,
      title: "Esnek Zamanlama",
      description:
        "İstediğiniz zaman, istediğiniz yerden derslere katılın. Program sizin kontrolünüzde.",
    },
    {
      icon: Award,
      title: "Sertifikalı Eğitmenler",
      description:
        "Alanında uzman, deneyimli ve sertifikalı eğitmenlerle çalışın.",
    },
    {
      icon: Users,
      title: "Birebir Dersler",
      description:
        "Grup derslerinin aksine, tamamen size odaklı özel dersler alın.",
    },
  ];

  return (
    <section id="ozellikler" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Neden <span className="text-primary">Inalp?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Eğitim yolculuğunuzda size en iyi deneyimi sunmak için buradayız.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
