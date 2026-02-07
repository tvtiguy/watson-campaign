import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Supporters | Mark Watson for Oregon House District 29",
  description: "Community leaders endorsing Mark Watson for Oregon House District 29 - including mayors, state legislators, councilors, and school board members.",
};

export default function SupportersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--hops-navy)] to-[var(--hops-navy-dark)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Endorsed By</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Community leaders across Hillsboro, Cornelius, and Forest Grove are supporting Mark Watson for House District 29.
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

      {/* Mayors Section */}
      <section className="py-16 bg-white flex-grow">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hops-navy)] mb-8 text-center">
            Mayoral Endorsements
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            All three mayors in House District 29 endorse Mark Watson
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[var(--hops-cream)] rounded-xl p-8 text-center shadow-lg border-t-4 border-[var(--hops-green)]">
              <p className="text-[var(--hops-green)] text-sm font-semibold mb-2">Mayor of Hillsboro</p>
              <p className="text-2xl font-bold text-[var(--hops-navy)]">Beach Pace</p>
            </div>
            <div className="bg-[var(--hops-cream)] rounded-xl p-8 text-center shadow-lg border-t-4 border-[var(--hops-green)]">
              <p className="text-[var(--hops-green)] text-sm font-semibold mb-2">Mayor of Cornelius</p>
              <p className="text-2xl font-bold text-[var(--hops-navy)]">Jef Dalin</p>
            </div>
            <div className="bg-[var(--hops-cream)] rounded-xl p-8 text-center shadow-lg border-t-4 border-[var(--hops-green)]">
              <p className="text-[var(--hops-green)] text-sm font-semibold mb-2">Mayor of Forest Grove</p>
              <p className="text-2xl font-bold text-[var(--hops-navy)]">Malynda Wenzl</p>
            </div>
          </div>
        </div>
      </section>

      {/* State Senator */}
      <section className="py-16 bg-[var(--hops-navy)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">State Legislative Endorsement</h2>
          <div className="bg-[var(--hops-navy-dark)] rounded-xl p-10 border-2 border-[var(--hops-green)]">
            <p className="text-[var(--hops-green)] text-lg font-semibold mb-2">State Senator</p>
            <p className="text-3xl md:text-4xl font-bold">Janeen Sollman</p>
          </div>
        </div>
      </section>

      {/* Community Photo */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/hops-game.jpg"
                alt="Mark Watson at Hillsboro Hops game"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--hops-navy)] mb-6">
                Rooted in Community
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mark is a familiar face at community events throughout District 29 - from Hillsboro Hops games to Theater in the Grove. His deep connections to our community are why so many local leaders trust him to represent us in Salem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Officials */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hops-navy)] mb-12 text-center">
            Local Officials &amp; Community Leaders
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <h3 className="md:col-span-2 text-xl font-semibold text-[var(--hops-navy)] mb-2">City Councilors</h3>
            <div className="bg-[var(--hops-cream)] rounded-xl p-6 shadow">
              <p className="text-[var(--hops-green)] text-sm font-semibold mb-1">Councilor, Cornelius</p>
              <p className="text-xl font-bold text-[var(--hops-navy)]">Angeles Godinez Valencia</p>
            </div>
            <div className="bg-[var(--hops-cream)] rounded-xl p-6 shadow">
              <p className="text-[var(--hops-green)] text-sm font-semibold mb-1">Councilor, Hillsboro</p>
              <p className="text-xl font-bold text-[var(--hops-navy)]">Elizabeth Case</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <h3 className="md:col-span-3 text-xl font-semibold text-[var(--hops-navy)] mb-2">School Board Leaders</h3>
            <div className="bg-[var(--hops-cream)] rounded-xl p-6 shadow">
              <p className="text-[var(--hops-green)] text-sm font-semibold mb-1">Chair, Forest Grove School District</p>
              <p className="text-xl font-bold text-[var(--hops-navy)]">Kristy Kottkey</p>
            </div>
            <div className="bg-[var(--hops-cream)] rounded-xl p-6 shadow">
              <p className="text-[var(--hops-green)] text-sm font-semibold mb-1">Chair, Hillsboro School District</p>
              <p className="text-xl font-bold text-[var(--hops-navy)]">Ivette Pantoja</p>
            </div>
            <div className="bg-[var(--hops-cream)] rounded-xl p-6 shadow">
              <p className="text-[var(--hops-green)] text-sm font-semibold mb-1">Director, Hillsboro School District</p>
              <p className="text-xl font-bold text-[var(--hops-navy)]">Katie Rhyne</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hops-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
