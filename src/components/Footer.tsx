import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-[var(--hops-navy-dark)] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">{t("siteHeading")}</p>
        <p className="text-gray-400 text-sm mb-2">
          {t("paidFor")}
        </p>
        <p className="text-gray-400 text-sm mb-4">
          <a href={`mailto:${t("email")}`} className="hover:text-[var(--hops-green)] transition-colors">
            {t("email")}
          </a>
        </p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
          <Link href="/about" className="hover:text-[var(--hops-green)] transition-colors">{nav("about")}</Link>
          <Link href="/contribute" className="hover:text-[var(--hops-green)] transition-colors">{nav("contribute")}</Link>
        </div>
      </div>
    </footer>
  );
}
