import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Campaign Trail Banner */}
      <div className="bg-[var(--hops-green)] text-white text-center py-3 px-4">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMGDnagboYdWioCz00GKWFelrY1jDk9zrQqBp2mc5h1kw7Fg/viewform" target="_blank" rel="noopener noreferrer" className="block font-semibold text-lg mb-1 hover:underline">We are in the final push to elect Mark</a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeMGDnagboYdWioCz00GKWFelrY1jDk9zrQqBp2mc5h1kw7Fg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-lg hover:underline"
        >
          Click Here to Join Us on the Campaign Trail →
        </a>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--hops-navy)] to-[var(--hops-navy-dark)] text-white pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[var(--hops-green)] font-semibold mb-2 text-lg">{t("district")}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t("name")}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                {t("cities")}
              </p>
              <blockquote className="border-l-4 border-[var(--hops-green)] pl-6 text-lg md:text-xl italic text-gray-200 mb-8">
                &ldquo;{t("quote")}&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contribute"
                  className="inline-block bg-[var(--hops-green)] hover:bg-[var(--hops-green-light)] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg text-center"
                >
                  {t("supportCampaign")}
                </Link>
                <Link
                  href="/about"
                  className="inline-block border-2 border-white hover:bg-white hover:text-[var(--hops-navy)] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors text-center"
                >
                  {t("learnMore")}
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-white rounded-lg p-4 shadow-2xl">
                <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
                  <Image
                    src="/images/hd29-watson-logo.png"
                    alt="Mark Watson for Oregon House District 29"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="bg-[var(--hops-cream)] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/family-opt.jpg"
                alt="Mark Watson with his family"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-6">
                {t("rootedTitle")}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t("rootedText")}
              </p>
              <Link
                href="/about"
                className="inline-block text-[var(--hops-green)] hover:text-[var(--hops-green-light)] font-semibold text-lg transition-colors"
              >
                {t("readStory")} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-12 text-center">
            {t("experienceTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--hops-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--hops-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">{t("schoolBoardTitle")}</h3>
              <p className="text-gray-600">{t("schoolBoardText")}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--hops-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--hops-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">{t("legislativeAideTitle")}</h3>
              <p className="text-gray-600">{t("legislativeAideText")}</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--hops-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--hops-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">{t("smallBusinessTitle")}</h3>
              <p className="text-gray-600">{t("smallBusinessText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="py-16 md:py-24 bg-[var(--hops-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("joinTitle")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t("joinText")}
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
