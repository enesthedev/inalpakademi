import { cn } from "@/app/utils";
import { GraduationCap } from "lucide-react";

interface HandmadeLogoProps {
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  iconClassName?: string;
  showIcon?: boolean;
  variant?: "light" | "dark";
  strokeWidth?: string;
}

export function HandmadeLogo({
  className,
  titleClassName = "text-2xl leading-none",
  subtitleClassName = "text-base -bottom-4 -right-5",
  iconClassName = "w-6 h-6",
  showIcon = true,
  variant = "light",
  strokeWidth = "3px",
}: HandmadeLogoProps) {
  const textColor =
    variant === "light" ? "text-primary-foreground" : "text-foreground";

  return (
    <div
      className={cn("inline-flex items-center gap-3 select-none", className)}
    >
      {showIcon && (
        <GraduationCap
          className={cn(
            variant === "light" ? "text-primary-foreground" : "text-primary",
            iconClassName,
          )}
        />
      )}
      <div className="relative flex flex-col" aria-label="Inalp Akademi">
        <span
          className={cn(
            "font-bold font-playfair tracking-tight",
            titleClassName,
            textColor,
          )}
        >
          İnalp
        </span>
        <span
          className={cn(
            "absolute font-bold font-caveat whitespace-nowrap [paint-order:stroke_fill]",
            subtitleClassName,
            textColor,
          )}
          style={{
            WebkitTextStroke: `${strokeWidth} var(${variant === "light" ? "--color-primary" : "--color-primary-foreground"})`,
          }}
          aria-hidden="true"
        >
          Akademi
        </span>
      </div>
    </div>
  );
}
