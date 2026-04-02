import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
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
    title: t("contributeTitle"),
    description: t("contributeDescription"),
  };
}

export default function ContributePage() {
  const t = useTranslations("contribute");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--hops-navy)] to-[var(--hops-navy-dark)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("heroTitle")}</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                {t("heroSubtitle")}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--hops-green)] shadow-2xl">
                <Image
                  src="/images/contribute-opt.jpg"
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

      {/* Main Contribute Section */}
      <section className="py-16 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[var(--hops-cream)] rounded-2xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-6">
              {t("supportTitle")}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t("supportText")}
            </p>

            <a
              href="https://donation.c-esystems.com/campaign/friendsofmarkwatson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--hops-green)] hover:bg-[var(--hops-green-light)] text-white px-12 py-5 rounded-lg font-bold text-xl transition-colors shadow-lg mb-8"
            >
              {t("donateNow")}
            </a>

            <p className="text-sm text-gray-500">
              {t("redirectNote")}
            </p>
          </div>
        </div>
      </section>

      {/* Connect / Volunteer */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--hops-navy)] mb-4">
            {t("volunteerTitle")}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {t("volunteerText")}
          </p>
          <a
            href="mailto:info@watsonfororegon.com"
            className="inline-block text-xl font-semibold text-[var(--hops-green)] hover:text-[var(--hops-green-light)] transition-colors"
          >
            info@watsonfororegon.com
          </a>
        </div>
      </section>

      {/* Why Contribute */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hops-navy)] mb-12 text-center">
            {t("whyTitle")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[var(--hops-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-4">{t("grassrootsTitle")}</h3>
              <p className="text-gray-600">{t("grassrootsText")}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[var(--hops-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-4">{t("outreachTitle")}</h3>
              <p className="text-gray-600">{t("outreachText")}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[var(--hops-green)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-4">{t("leadershipTitle")}</h3>
              <p className="text-gray-600">{t("leadershipText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[var(--hops-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t("ctaText")}
          </p>
          <a
            href="https://donation.c-esystems.com/campaign/friendsofmarkwatson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[var(--hops-navy)] hover:bg-[var(--hops-cream)] px-10 py-4 rounded-md font-bold text-xl transition-colors shadow-lg"
          >
            {t("contributeToday")}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
