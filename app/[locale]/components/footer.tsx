import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
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
