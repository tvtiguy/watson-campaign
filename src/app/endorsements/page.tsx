import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Endorsements | Mark Watson for Oregon House District 29",
  description: "Community leaders endorsing Mark Watson for Oregon House District 29.",
};

export default function EndorsementsPage() {
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

      {/* Coming Soon */}
      <section className="py-24 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-6">
            Full List of Endorsements Coming Soon
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are grateful for the growing support from community leaders across District 29. Check back soon for the complete list.
          </p>
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
