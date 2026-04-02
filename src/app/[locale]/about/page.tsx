import Image from "next/image";
import { useTranslations, useMessages } from "next-intl";
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
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  };
}

export default function AboutPage() {
  const t = useTranslations("about");

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
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/heart-cropped-opt.jpg"
                  alt="Mark Watson - Heart for Hillsboro"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Bio */}
      <section className="py-16 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-6">{t("bio1")}</p>
            <p className="text-xl leading-relaxed mb-6">{t("bio2")}</p>
            <p className="text-xl leading-relaxed mb-6">{t("bio3")}</p>
            <p className="text-xl leading-relaxed mb-8">{t("bio4")}</p>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-12 text-center">
            {t("experienceTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* School Board */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/school-board-opt.jpg"
                  alt="Mark Watson with Hillsboro School District plaque"
                  fill
                  className="object-cover object-[center_30%]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">{t("schoolBoardTitle")}</h3>
                <p className="text-gray-600">{t("schoolBoardText")}</p>
              </div>
            </div>

            {/* Capitol */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/capitol2-opt.jpg"
                  alt="Mark Watson at the Oregon State Capitol"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">{t("legislativeTitle")}</h3>
                <p className="text-gray-600">{t("legislativeText")}</p>
              </div>
            </div>

            {/* Community Service */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/community-service-opt.jpg"
                  alt="Mark Watson volunteering in the community"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">{t("communityServiceTitle")}</h3>
                <p className="text-gray-600">{t("communityServiceText")}</p>
              </div>
            </div>

            {/* Golf */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/golf-standrews-opt.jpg"
                  alt="Mark Watson performing with 45th Parallel"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">{t("lifeTitle")}</h3>
                <p className="text-gray-600">{t("lifeText")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-8 text-center">
            {t("deeperDiveTitle")}
          </h2>
          <div className="bg-[var(--hops-cream)] rounded-xl p-8">
            <p className="leading-relaxed mb-4 text-gray-700">{t("deeperDive1")}</p>
            <p className="leading-relaxed mb-4 text-gray-700">{t("deeperDive2")}</p>
            <p className="leading-relaxed mb-4 text-gray-700">{t("deeperDive3")}</p>
            <p className="leading-relaxed font-semibold text-[var(--hops-navy)]">{t("deeperDive4")}</p>
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
