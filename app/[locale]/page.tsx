"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  GraduationCap,
  Users,
  Globe,
  CheckCircle,
  ChevronRight,
  Menu,
  X,
  Star,
  BookOpen,
  Clock,
  Award,
} from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Inalp</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#nasil-calisir"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Nasıl Çalışır?
            </Link>
            <Link
              href="#ozellikler"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Özellikler
            </Link>
            <Link
              href="#iletisim"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              İletişim
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="lg">
              Giriş Yap
            </Button>
            <Button size="lg">
              Ücretsiz Başla
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              <Link
                href="#nasil-calisir"
                className="px-4 py-3 rounded-xl hover:bg-muted transition-colors"
              >
                Nasıl Çalışır?
              </Link>
              <Link
                href="#ozellikler"
                className="px-4 py-3 rounded-xl hover:bg-muted transition-colors"
              >
                Özellikler
              </Link>
              <Link
                href="#iletisim"
                className="px-4 py-3 rounded-xl hover:bg-muted transition-colors"
              >
                İletişim
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button variant="outline" className="w-full">
                  Giriş Yap
                </Button>
                <Button className="w-full">Ücretsiz Başla</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-secondary/30 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Türkiye&apos;nin #1 Eğitim Platformu</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Hayalinizdeki{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Eğitimi
              </span>{" "}
              Keşfedin
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Binlerce uzman eğitmenle birebir dersler alın. Kendi hızınızda,
              kendi zamanınızda öğrenin ve hedeflerinize ulaşın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="h-14 px-8 text-base">
                Hemen Başla
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base"
              >
                Eğitmen Ol
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Ücretsiz Deneme</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>7/24 Destek</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <GraduationCap className="w-24 h-24 mx-auto mb-4 opacity-90" />
                  <p className="text-xl font-semibold">
                    Kaliteli Eğitim, Her Yerde
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <div>
                  <p className="font-bold text-foreground">10,000+</p>
                  <p className="text-sm text-muted-foreground">Aktif Öğrenci</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Uzman Eğitmen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
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
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      icon: Globe,
      value: "50+",
      label: "Ders Kategorisi",
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Memnuniyet Oranı",
      color: "text-warning",
      bg: "bg-warning/10",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface/50">
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

function FeaturesSection() {
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

function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Eğitim Yolculuğunuza Bugün Başlayın
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Yüzlerce eğitmen, binlerce ders. Hayalinizdeki kariyer sadece bir
              adım uzağınızda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-8 text-base"
              >
                Öğrenci Olarak Başla
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Eğitmen Olarak Katıl
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Inalp</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Türkiye&apos;nin en modern online eğitim platformu. Hayallerinize
              ulaşmanız için buradayız.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Nasıl Çalışır
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Fiyatlandırma
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Eğitmenler
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Destek</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  SSS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  İletişim
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Yardım Merkezi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-background transition-colors"
                >
                  Kullanım Koşulları
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          <p>&copy; 2026 Inalp. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
