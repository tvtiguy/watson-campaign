import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Supporters | Mark Watson for Oregon House District 29",
  description: "27 community leaders endorsing Mark Watson for Oregon House District 29 — mayors, councilors, school board members, and more.",
};

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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--hops-navy)] to-[var(--hops-navy-dark)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[var(--hops-green)] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Dozens and Growing!
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Endorsed By<br />Community Leaders</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Mayors, city councilors, school board members, and community leaders across Cornelius, Forest Grove, and Hillsboro are backing Mark Watson for House District 29.
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
            <h2 className="text-3xl font-bold text-[var(--hops-navy)] mb-2">All Three Mayors Endorse Mark Watson</h2>
            <p className="text-gray-600">Every mayor in House District 29</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-md border-t-4 border-[var(--hops-green)]">
              <p className="text-[var(--hops-green)] text-sm font-semibold uppercase tracking-wide mb-2">Mayor of Cornelius</p>
              <p className="text-2xl font-bold text-[var(--hops-navy)]">Jef Dalin</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md border-t-4 border-[var(--hops-green)]">
              <p className="text-[var(--hops-green)] text-sm font-semibold uppercase tracking-wide mb-2">Mayor of Forest Grove</p>
              <p className="text-2xl font-bold text-[var(--hops-navy)]">Malynda Wenzl</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-md border-t-4 border-[var(--hops-green)]">
              <p className="text-[var(--hops-green)] text-sm font-semibold uppercase tracking-wide mb-2">Mayor of Hillsboro</p>
              <p className="text-2xl font-bold text-[var(--hops-navy)]">Beach Pace</p>
            </div>
          </div>
        </div>
      </section>

      {/* City Councilors */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>City Councilors</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Angeles Godinez Valencia" title="City Council President — Cornelius" />
            <SupporterCard name="Eden Lopez" title="City Councilor — Cornelius" />
            <SupporterCard name="Mariana Valenzuela" title="City Council President — Forest Grove" />
            <SupporterCard name="Brian Schimmel" title="City Councilor — Forest Grove" />
            <SupporterCard name="Rob Harris" title="City Council President — Hillsboro" />
            <SupporterCard name="Saba Anvery" title="City Councilor — Hillsboro" />
            <SupporterCard name="Elizabeth Case" title="City Councilor — Hillsboro" />
          </div>
        </div>
      </section>

      {/* Forest Grove School Board */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>Forest Grove School Board</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Kristy Kottkey" title="School Board Chair" />
            <SupporterCard name="Pete Truax" title="School Board Director" />
            <SupporterCard name="Brisa Franco" title="School Board Director" />
          </div>
        </div>
      </section>

      {/* Hillsboro School Board */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>Hillsboro School Board</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Ivette Pantoja" title="School Board Chair" />
            <SupporterCard name="See Eun Kim" title="School Board Vice Chair" />
            <SupporterCard name="Katie Rhyne" title="School Board Director" />
            <SupporterCard name="Yessica Hardin Mercado" title="School Board Director" />
            <SupporterCard name="Patrick Maguire" title="School Board Director" />
            <SupporterCard name="Nancy Thomas" title="School Board Director" />
          </div>
        </div>
      </section>

      {/* Washington County */}
      <section className="py-10 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>Washington County</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Kristine Adams Wannberg" title="Washington County Auditor" />
          </div>
        </div>
      </section>

      {/* Hillsboro Hops */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>Hillsboro Hops Leadership</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Mike McMurray" title="CEO, Hillsboro Hops" />
            <SupporterCard name="Laura McMurray" title="CFO, Hillsboro Hops" />
          </div>
        </div>
      </section>

      {/* Community & Education Leaders */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader>Community &amp; Education Leaders</SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SupporterCard name="Kim Strelchun" title="President, Hillsboro Schools Foundation" />
            <SupporterCard name="Jaci Spross" title="Hillsboro Schools Foundation; Former School Board Director" />
            <SupporterCard name="Laura Bekken" title="Hillsboro Schools Foundation" />
            <SupporterCard name="Gabriel Jones-Gallardo" title="Planning Commission President — Hillsboro" />
            <SupporterCard name="Lisa Allen" title="Former Hillsboro School Board Director" />
            <SupporterCard name="Erika Lopez" title="Former Hillsboro School Board Director" />
            <SupporterCard name="Kyle Allen" title="Former City Councilor — Hillsboro" />
            <SupporterCard name="Deborah Clarke" title="Community Leader" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hops-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join These Community Leaders
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Support Mark Watson&apos;s campaign for Oregon House District 29.
          </p>
          <Link
            href="/contribute"
            className="inline-block bg-white text-[var(--hops-navy)] hover:bg-[var(--hops-cream)] px-10 py-4 rounded-md font-bold text-xl transition-colors shadow-lg"
          >
            Contribute Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
