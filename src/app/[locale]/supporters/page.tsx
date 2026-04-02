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
    title: t("supportersTitle"),
    description: t("supportersDescription"),
  };
}

function SupporterCard({ name, title }: { name: string; title: string }) {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <p className="text-[var(--hops-green)] text-xs font-semibold uppercase tracking-wide mb-1">{title}</p>
      <p className="text-lg font-bold text-[var(--hops-navy)]">{name}</p>
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-1 h-8 bg-[var(--hops-green)] rounded-full flex-shrink-0" />
      <h2 className="text-2xl font-bold text-[var(--hops-navy)]">{children}</h2>
    </div>
  );
}

export default function SupportersPage() {
  const t = useTranslations("supporters");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--hops-navy)] to-[var(--hops-navy-dark)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[var(--hops-green)] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {t("badge")}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line">{t("heroTitle")}</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                {t("heroSubtitle")}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hops-mascot.jpg"
                  alt="Mark Watson with Hillsboro Hops mascot"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mayors — featured */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--hops-navy)] mb-2">{t("allMayorsTitle")}</h2>
            <p className="text-gray-600">{t("allMayorsSubtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md border-t-4 border-[var(--hops-green)]">
              <p className="text-[var(--hops-green)] text-sm font-semibold uppercase tracking-wide mb-2">{t("mayorCornelius")}</p>
              <p className="text-2xl font-bold text-[var(--hops-navy)]">Jef Dalin</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md border-t-4 border-[var(--hops-green)]">
              <p className="text-[var(--hops-green)] text-sm font-semibold uppercase tracking-wide mb-2">{t("mayorForestGrove")}</p>
              <p className="text-2xl font-bold text-[var(--hops-navy)]">Malynda Wenzl</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md border-t-4 border-[var(--hops-green)]">
              <p className="text-[var(--hops-green)] text-sm font-semibold uppercase tracking-wide mb-2">{t("mayorHillsboro")}</p>
              <p className="text-2xl font-bold text-[var(--hops-navy)]">Beach Pace</p>
            </div>
          </div>
        </div>
      </section>

      {/* City Councilors */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>{t("cityCouncilors")}</SectionHeader>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Cornelius */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--hops-navy)] border-b border-gray-200 pb-2">{t("cornelius")}</p>
              <SupporterCard name="Angeles Godinez Valencia" title={t("titles.cityCouncilPresident")} />
              <SupporterCard name="Eden Lopez" title={t("titles.cityCouncilor")} />
            </div>
            {/* Forest Grove */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--hops-navy)] border-b border-gray-200 pb-2">{t("forestGrove")}</p>
              <SupporterCard name="Mariana Valenzuela" title={t("titles.cityCouncilPresident")} />
              <SupporterCard name="Brian Schimmel" title={t("titles.cityCouncilor")} />
            </div>
            {/* Hillsboro */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--hops-navy)] border-b border-gray-200 pb-2">{t("hillsboro")}</p>
              <SupporterCard name="Rob Harris" title={t("titles.cityCouncilPresident")} />
              <SupporterCard name="Saba Anvery" title={t("titles.cityCouncilor")} />
              <SupporterCard name="Elizabeth Case" title={t("titles.cityCouncilor")} />
            </div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>{t("organizations")}</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Hillsboro Classified United Local 4671" title={t("titles.laborOrg")} />
          </div>
        </div>
      </section>

      {/* Forest Grove School Board */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>{t("fgSchoolBoard")}</SectionHeader>
          <p className="text-gray-500 text-base -mt-6 mb-6 ml-5">{t("fgSchoolBoardNote")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Kristy Kottkey" title={t("titles.schoolBoardChair")} />
            <SupporterCard name="Pete Truax" title={t("titles.schoolBoardDirector")} />
            <SupporterCard name="Brisa Franco" title={t("titles.schoolBoardDirector")} />
          </div>
        </div>
      </section>

      {/* Hillsboro School Board */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>{t("hsdSchoolBoard")}</SectionHeader>
          <p className="text-gray-500 text-base -mt-6 mb-6 ml-5">{t("hsdSchoolBoardNote")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Ivette Pantoja" title={t("titles.schoolBoardChair")} />
            <SupporterCard name="See Eun Kim" title={t("titles.schoolBoardViceChair")} />
            <SupporterCard name="Katie Rhyne" title={t("titles.schoolBoardDirector")} />
            <SupporterCard name="Yessica Hardin Mercado" title={t("titles.schoolBoardDirector")} />
            <SupporterCard name="Patrick Maguire" title={t("titles.schoolBoardDirector")} />
            <SupporterCard name="Nancy Thomas" title={t("titles.schoolBoardDirector")} />
          </div>
        </div>
      </section>

      {/* Washington County */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>{t("washingtonCounty")}</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Kristine Adams Wannberg" title={t("titles.countyAuditor")} />
          </div>
        </div>
      </section>

      {/* Hillsboro Hops */}
      <section className="py-10 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>{t("hopsLeadership")}</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Mike McMurray" title={t("titles.ceo")} />
            <SupporterCard name="Laura McMurray" title={t("titles.cfo")} />
          </div>
        </div>
      </section>

      {/* Community & Education Leaders */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>{t("communityLeaders")}</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Kim Strelchun" title={t("titles.formerSchoolBoard")} />
            <SupporterCard name="Jaci Spross" title={t("titles.formerSchoolBoard")} />
            <SupporterCard name="Laura Bekken" title={t("titles.communityLeader")} />
            <SupporterCard name="Gabriel Jones-Gallardo" title={t("titles.planningCommission")} />
            <SupporterCard name="Lisa Allen" title={t("titles.formerHSDDirector")} />
            <SupporterCard name="Erika Lopez" title={t("titles.formerHSDDirector")} />
            <SupporterCard name="Kyle Allen" title={t("titles.formerCouncilor")} />
            <SupporterCard name="Deborah Clarke" title={t("titles.communityLeader")} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hops-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
