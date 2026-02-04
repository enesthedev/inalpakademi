import { Card, CardContent } from "@/app/components/ui/card";
import { GraduationCap, Users, Globe, Star } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Mutlu Öğrenci",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: GraduationCap,
      value: "500+",
      label: "Uzman Eğitmen",
      color: "text-chart-3",
      bg: "bg-chart-3/10",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Ders Kategorisi",
      color: "text-chart-2",
      bg: "bg-chart-2/10",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Memnuniyet Oranı",
      color: "text-chart-1",
      bg: "bg-chart-1/10",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-6">
                <div
                  className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
