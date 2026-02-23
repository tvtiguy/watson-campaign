import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Issues | Mark Watson for Oregon House District 29",
  description: "Mark Watson's priorities for House District 29: Education, Economic Development, and Community Engagement.",
};

export default function IssuesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[var(--hops-navy)] to-[var(--hops-navy-dark)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The Issues</h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-4">
                From my years working on the school board and in legislative offices, I know passing policies or bills is a team effort. I also worked 15 seasons in Major League Baseball. These are the issues I will immediately get to work on with my colleagues.
              </p>
              <p className="text-2xl font-bold text-[var(--hops-green-light)]">
                Put me in coach, I&apos;m ready to play.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/suntrust-opt.jpg"
                  alt="Mark Watson at a Major League Baseball stadium"
                  fill
                  className="object-cover object-top"
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
                Education
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Oregon&apos;s school funding formula is over 30 years old, and it shows. I&apos;ll advocate for a modernized funding model that uses broader outcome measures and accounts for the real costs facing districts like ours. Oregon&apos;s students deserve an approach built for the challenges they face today — not one designed for a problem we faced in the 1990s.
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
                Economic Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Washington County is the economic engine of the state, but like all engines, it requires maintenance. We are facing a &ldquo;manufacturing recession,&rdquo; and the results are felt at every kitchen table. Let&apos;s pass policies that really illustrate that Oregon is open for business. Between the Forest Grove School District and Hillsboro School District there are over 50 Career and Technical Education pathways (CTE) that connect students with the business community to prepare the workforce of tomorrow.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/images/economic-opt.jpg"
                alt="Career and Technical Education workforce pathways"
                fill
                className="object-contain"
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
                Community Engagement
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                State Representatives should do more than vote on the House floor. It requires a proactive, visible presence in Cornelius, Forest Grove, and Hillsboro. The historical standard of an &ldquo;open door&rdquo; is insufficient in an era where constituents expect their leaders to be present in local spaces. I am committed to maintaining clean lines of communication with our city leaders and school districts to ensure our district&apos;s needs are never misinterpreted in Salem.
              </p>
              <p className="text-lg mt-6">
                <span className="font-bold text-[var(--hops-navy)]">Connect with the Campaign: </span>
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
            Ready to Build a Stronger District 29?
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
