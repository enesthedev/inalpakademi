import { cn } from "@/app/utils";
import { GraduationCap } from "lucide-react";

interface HandmadeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  variant?: "light" | "dark";
}

const sizeConfig = {
  sm: {
    icon: "w-10 h-10",
    iconInner: "w-6 h-6",
    title: "text-xl leading-none",
    subtitle: "text-sm -bottom-3 -right-5",
    stroke: "2px",
  },
  md: {
    icon: "w-10 h-10",
    iconInner: "w-6 h-6",
    title: "text-2xl leading-none",
    subtitle: "text-base -bottom-4 -right-5",
    stroke: "3px",
  },
  lg: {
    icon: "w-10 h-10",
    iconInner: "w-6 h-6",
    title: "text-2xl leading-none",
    subtitle: "text-lg -bottom-5 -right-7",
    stroke: "4px",
  },
};

export function HandmadeLogo({
  className,
  size = "md",
  showIcon = true,
  variant = "light",
}: HandmadeLogoProps) {
  const config = sizeConfig[size];
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
            config.iconInner,
          )}
        />
      )}
      <div className="relative flex flex-col" aria-label="Inalp Akademi">
        <span
          className={cn(
            "font-bold font-playfair tracking-tight",
            config.title,
            textColor,
          )}
        >
          Inalp
        </span>
        <span
          className={cn(
            "absolute font-bold font-caveat whitespace-nowrap [paint-order:stroke_fill]",
            config.subtitle,
            textColor,
          )}
          style={{
            WebkitTextStroke: `${config.stroke} var(${variant === "light" ? "--color-primary" : "--color-primary-foreground"})`,
          }}
          aria-hidden="true"
        >
          Akademi
        </span>
      </div>
    </div>
  );
}
