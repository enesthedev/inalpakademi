import { defineRouting } from "next-intl/routing";
import { pathnames } from "./pathnames";

export const routing = defineRouting({
  locales: ["tr"],
  defaultLocale: "tr",
  pathnames,
  localePrefix: "as-needed",
});
