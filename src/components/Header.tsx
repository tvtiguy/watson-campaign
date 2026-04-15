"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";

// Set this to true when ready to show the language switcher publicly
const SHOW_LANGUAGE_SWITCHER = true;

export default function Header() {
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations("nav");

  const isActive = (path: string) => pathname === path;
  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <nav className="bg-[var(--hops-navy)] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="bg-white rounded-lg p-1 flex-shrink-0">
            <Image
              src="/images/campaign-logo.png"
              alt="Mark Watson campaign logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight">
            {t("siteHeading")}
          </span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/about"
            className={`transition-colors ${isActive("/about") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
          >
            {t("about")}
          </Link>
          <Link
            href="/issues"
            className={`transition-colors ${isActive("/issues") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
          >
            {t("issues")}
          </Link>
          <Link
            href="/supporters"
            className={`transition-colors ${isActive("/supporters") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
          >
            {t("supporters")}
          </Link>
          <Link
            href="/contribute"
            className="bg-[var(--hops-green)] hover:bg-[var(--hops-green-light)] px-4 py-2 rounded-md font-semibold transition-colors"
          >
            {t("contribute")}
          </Link>
          {SHOW_LANGUAGE_SWITCHER && (
            <Link
              href={pathname}
              locale={otherLocale}
              className="text-sm border border-white/40 hover:border-white px-3 py-1.5 rounded-md transition-colors hover:bg-white/10"
            >
              {t("switchLanguage")}
            </Link>
          )}
        </div>
        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          {SHOW_LANGUAGE_SWITCHER && (
            <Link
              href={pathname}
              locale={otherLocale}
              className="text-xs border border-white/40 hover:border-white px-2 py-1 rounded transition-colors"
            >
              {t("switchLanguage")}
            </Link>
          )}
          <Link
            href="/contribute"
            className="bg-[var(--hops-green)] hover:bg-[var(--hops-green-light)] px-4 py-2 rounded-md font-semibold transition-colors"
          >
            {t("contribute")}
          </Link>
        </div>
      </div>
      {/* Mobile nav links */}
      <div className="md:hidden border-t border-[var(--hops-navy-dark)] px-4 py-2 flex justify-center space-x-6">
        <Link
          href="/about"
          className={`transition-colors ${isActive("/about") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
        >
          {t("about")}
        </Link>
        <Link
          href="/issues"
          className={`transition-colors ${isActive("/issues") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
        >
          {t("issues")}
        </Link>
        <Link
          href="/supporters"
          className={`transition-colors ${isActive("/supporters") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
        >
          {t("supporters")}
        </Link>
      </div>
    </nav>
  );
}
