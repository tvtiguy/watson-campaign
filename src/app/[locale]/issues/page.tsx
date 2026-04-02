import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("issuesTitle"),
    description: t("issuesDescription"),
  };
}

export default function IssuesPage() {
  const t = useTranslations("issues");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--hops-navy)] to-[var(--hops-navy-dark)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("heroTitle")}</h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-4">
                {t("heroSubtitle")}
              </p>
              <p className="text-2xl font-bold text-[var(--hops-green-light)]">
                {t("heroTagline")}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[var(--hops-green)] shadow-2xl">
                <Image
                  src="/images/mark-headshot-opt.jpg"
                  alt="Mark Watson"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/education-opt.jpg"
                alt="Thank you to our school board - Tobias Tigers"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-6">
                {t("educationTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("educationText")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Development */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-6">
                {t("economicTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("economicText")}
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/images/suntrust-opt.jpg"
                alt="Mark Watson at a Major League Baseball stadium"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/community-opt.jpg"
                alt="Mark Watson at Theatre in the Grove with family and friends"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-6">
                {t("communityTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("communityText")}
              </p>
              <p className="text-lg mt-6">
                <span className="font-bold text-[var(--hops-navy)]">{t("connectLabel")} </span>
                <a href="mailto:info@watsonfororegon.com" className="text-[var(--hops-green)] hover:text-[var(--hops-green-light)] font-semibold transition-colors">
                  info@watsonfororegon.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hops-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t("ctaText")}
          </p>
          <Link
            href="/contribute"
            className="inline-block bg-white text-[var(--hops-navy)] hover:bg-[var(--hops-cream)] px-10 py-4 rounded-md font-bold text-xl transition-colors shadow-lg"
          >
            {t("contributeNow")}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
