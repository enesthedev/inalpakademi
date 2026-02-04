import { chain } from "@/lib/proxy-chain";
import { with18n } from "@/app/proxies";
import { type NextFetchEvent, type NextRequest } from "next/server";

const proxies = [with18n];

export async function proxy(request: NextRequest, event: NextFetchEvent) {
  return chain(proxies)(request, event);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
