import { Button } from "@/app/components/ui/button";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="flex min-h-[90vh] w-full flex-col items-center justify-center space-y-10 bg-primary px-4">
      <h1 className="max-w-3xl text-center text-5xl font-semibold leading-tight text-primary-foreground sm:text-6xl">
        <span className="bg-secondary px-2">Sınavdan</span> Korkuyor Musun?
      </h1>

      <p className="max-w-xl text-center text-xl font-light leading-normal tracking-wide text-primary-foreground/90 sm:text-2xl">
        Senden önce sınavı geçmiş ve derece yapmış öğrencilerle birlikte sınav
        sürecini daha kolay ve eğlenceli hale getiriyoruz
      </p>

      <div className="flex flex-col items-center justify-center space-y-3 pt-5">
        <Button
          variant="secondary"
          size="lg"
          className="h-14 px-10 text-lg shadow-none"
        >
          Hemen Başla
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-5">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            {["BBF7D0", "A5F3FC", "C7D2FE", "FBCFE8", "FDE68A"].map(
              (color, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-foreground"
                  style={{ backgroundColor: `#${color}` }}
                >
                  K{i + 1}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <div className="flex items-start">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="whitespace-nowrap text-xs font-medium text-primary-foreground">
            +8000 kullanıcı
          </span>
        </div>
      </div>
    </section>
  );
}
