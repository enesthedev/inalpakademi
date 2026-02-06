"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ChevronRight, Equal, Menu, MoveRight } from "lucide-react";
import { ROUTES } from "@/app/routes";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/app/components/ui/drawer";
import { HandmadeLogo } from "@/app/components/handmade-logo";

import { type Settings } from "@/app/actions/settings";

interface NavbarProps {
  settings: Settings;
}

export function Navbar({ settings }: NavbarProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="hidden max-h-[60px] w-full items-center justify-center bg-white font-medium md:flex">
        <div className="flex container mx-auto items-center justify-between px-8 py-4">
          <h3 className="text-xs lg:text-sm">
            Başarılı tıp fakültesi öğrencilerinden birebir ders – Şimdi ücretsiz
            deneme şansı!
          </h3>
          <div className="flex items-center justify-center space-x-5">
            <Link
              href={`tel:${settings.phone.number}`}
              className="text-xs font-semibold text-blue-800 lg:text-sm"
            >
              {settings.phone.display}
            </Link>
            {
              // TODO: Need revision for next time release
              /*<span>ya da</span>
            <Button variant='outline' className='rounded-full text-sm [&_svg]:size-4'>
              <Phone />
              <Link href='/contact'>Sizi Arayalım</Link>
            </Button>*/
            }
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href={ROUTES.LANDING}>
            <HandmadeLogo
              titleClassName="text-2xl leading-none"
              subtitleClassName="text-lg -bottom-5 -right-7"
              strokeWidth="4px"
              variant="light"
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Ana navigasyon"
          >
            <Link
              href="#nasil-calisir"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Hemen Başla
            </Link>
            <Link
              href="#hakkimizda"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Eğitim Modelimiz
            </Link>
            <Link
              href="#yorumlar"
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Yorumlar
            </Link>
            <Link
              href=""
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-medium"
            >
              Eğitmen Ol
            </Link>
          </nav>

          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon-xl"
                className="lg:hidden text-primary-foreground"
                aria-label="Menüyü aç"
              >
                <Equal className="size-7" />
              </Button>
            </DrawerTrigger>
            <DrawerContent aria-describedby={undefined}>
              <DrawerHeader>
                <DrawerTitle>
                  <Link href={ROUTES.LANDING}>
                    <HandmadeLogo
                      titleClassName="text-xl leading-none"
                      subtitleClassName="text-sm -bottom-3 -right-5"
                      strokeWidth="2px"
                      variant="dark"
                    />
                  </Link>
                </DrawerTitle>
              </DrawerHeader>

              <nav
                className="flex flex-col gap-1 px-4"
                aria-label="Mobil navigasyon"
              >
                <Link
                  href="#nasil-calisir"
                  className="px-4 py-3 rounded-xl hover:bg-muted transition-colors text-foreground font-medium"
                >
                  Hemen Başla
                </Link>
                <Link
                  href="#hakkimizda"
                  className="px-4 py-3 rounded-xl hover:bg-muted transition-colors text-foreground font-medium"
                >
                  Eğitim Modelimiz
                </Link>
                <Link
                  href="#yorumlar"
                  className="px-4 py-3 rounded-xl hover:bg-muted transition-colors text-foreground font-medium"
                >
                  Yorumlar
                </Link>
                <Link
                  href=""
                  className="px-4 py-3 rounded-xl hover:bg-muted transition-colors text-foreground font-medium"
                >
                  Eğitmen Ol
                </Link>
              </nav>

              <DrawerFooter>{/** */}</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
