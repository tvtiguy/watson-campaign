import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--hops-navy)] to-[var(--hops-navy-dark)] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[var(--hops-green)] font-semibold mb-2 text-lg">Oregon House District 29</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Mark Watson
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Hillsboro &bull; Cornelius &bull; Forest Grove
              </p>
              <blockquote className="border-l-4 border-[var(--hops-green)] pl-6 text-lg md:text-xl italic text-gray-200 mb-8">
                &ldquo;Our family moved to Oregon to work for Intel and within two years I was laid off. We struggled, but I was able to co-found a successful software company working with MLB and NHL teams. After my time in the game I transitioned to a role as a legislative aide working to serve the residents of House District 29. As your Representative, I intend to continue working for you with an open mind and heart.&rdquo;
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contribute"
                  className="inline-block bg-[var(--hops-green)] hover:bg-[var(--hops-green-light)] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg text-center"
                >
                  Support the Campaign
                </Link>
                <Link
                  href="/about"
                  className="inline-block border-2 border-white hover:bg-white hover:text-[var(--hops-navy)] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
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
                Rooted in Our Community
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After 26 years in Oregon, the Watson family has deep roots in Washington County. From raising children in the Hillsboro School District to now living in a multigenerational household in Downtown Hillsboro, Mark understands the needs of local families.
              </p>
              <Link
                href="/about"
                className="inline-block text-[var(--hops-green)] hover:text-[var(--hops-green-light)] font-semibold text-lg transition-colors"
              >
                Read Mark&apos;s Story &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats / Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-12 text-center">
            Experience That Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--hops-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--hops-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">School Board Director</h3>
              <p className="text-gray-600">Advocating for students and teachers in the Hillsboro School District</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--hops-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--hops-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">Legislative Aide</h3>
              <p className="text-gray-600">Working in the State Capitol to serve District 29 residents</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[var(--hops-navy)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[var(--hops-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">Small Business Owner</h3>
              <p className="text-gray-600">Co-founded a software company serving MLB and NHL teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters Preview - hidden temporarily
      <section className="py-16 bg-[var(--hops-navy)] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Endorsed by Community Leaders
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            All three mayors in District 29 support Mark Watson
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-[var(--hops-navy-dark)] border border-[var(--hops-green)]/30 px-6 py-3 rounded-full">
              Mayor Beach Pace, Hillsboro
            </span>
            <span className="bg-[var(--hops-navy-dark)] border border-[var(--hops-green)]/30 px-6 py-3 rounded-full">
              Mayor Jef Dalin, Cornelius
            </span>
            <span className="bg-[var(--hops-navy-dark)] border border-[var(--hops-green)]/30 px-6 py-3 rounded-full">
              Mayor Malynda Wenzl, Forest Grove
            </span>
          </div>
          <Link
            href="/supporters"
            className="inline-block text-[var(--hops-green)] hover:text-[var(--hops-green-light)] font-semibold text-lg transition-colors"
          >
            See All Supporters &rarr;
          </Link>
        </div>
      </section>
      */}

      {/* Contribute CTA */}
      <section className="py-16 md:py-24 bg-[var(--hops-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Campaign
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your contribution helps bring experienced, community-focused leadership to the Oregon House.
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
