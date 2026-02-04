"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { GraduationCap, ChevronRight, Menu, X } from "lucide-react";

export function Navbar() {
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
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-primary/70 flex items-center justify-center">
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
              href="#yorumlar"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Yorumlar
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
                href="#yorumlar"
                className="px-4 py-3 rounded-xl hover:bg-muted transition-colors"
              >
                Yorumlar
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
