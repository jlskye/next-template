import { NextRequest, NextResponse } from "next/server";

const SUPPORTED_LOCALES = ["th-th", "en-th"];
const DEFAULT_LOCALE = "th-th";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  // Check if the default locale is in the pathname
  if (pathname.startsWith(`/${DEFAULT_LOCALE}/`) || pathname === `/${DEFAULT_LOCALE}`) {
    // e.g. incoming request is /en/products
    // The new URL is now /products
    return NextResponse.redirect(
      new URL(pathname.replace(`/${DEFAULT_LOCALE}`, pathname === `/${DEFAULT_LOCALE}` ? "/" : ""), request.url),
    );
  }

  const pathnameIsMissingLocale = SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    // We are on the default locale
    // Rewrite so Next.js understands

    // e.g. incoming request is /products
    // Tell Next.js it should pretend it's /en/products
    return NextResponse.rewrite(new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|assets|favicon.ico).*)",
  ],
};
