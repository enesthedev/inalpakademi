import { Button } from "@/app/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-linear-to-br from-primary to-primary/80 p-8 sm:p-12 lg:p-16 overflow-hidden">
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
