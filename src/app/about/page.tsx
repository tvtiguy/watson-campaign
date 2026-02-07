import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Mark | Mark Watson for Oregon House District 29",
  description: "Learn about Mark Watson - husband, father, small business owner, school board director, and candidate for Oregon House District 29.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--hops-navy)] to-[var(--hops-navy-dark)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mark</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Husband, father, small business owner, school board director, and your neighbor in Washington County.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/heart-cropped.png"
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
            <p className="text-xl leading-relaxed mb-6">
              I am a husband, father, small business owner, and school board director. I&apos;ve spent all of my time in Oregon living in the Hillsboro School District but only recently moved from Aloha to Downtown Hillsboro.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              I co-founded a software company specializing in computerized video analysis for MLB and NHL teams. We had contracts with 29 of the 30 MLB teams and 23 of the 30 NHL teams.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Recently I&apos;ve been working as a legislative aide in the State Capitol, serving in Representative and Senator Sollman&apos;s legislative office. This experience has given me firsthand knowledge of how to effectively advocate for our district.
            </p>
            <p className="text-xl leading-relaxed mb-8">
              When I&apos;m not advocating for education you can find me on a golf course or playing music in my cover band: 45th Parallel.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-16 bg-[var(--hops-cream)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-12 text-center">
            Experience &amp; Community
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* School Board */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/school-board.jpg"
                  alt="Mark Watson with Hillsboro School District plaque"
                  fill
                  className="object-cover object-[center_30%]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">School Board Director</h3>
                <p className="text-gray-600">
                  Serving on the Hillsboro School District Board, advocating for students, teachers, and families across our community.
                </p>
              </div>
            </div>

            {/* Capitol */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/capitol2.png"
                  alt="Mark Watson at the Oregon State Capitol"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">Legislative Experience</h3>
                <p className="text-gray-600">
                  Working as a legislative aide in the State Capitol, learning firsthand how to effectively advocate for District 29 residents.
                </p>
              </div>
            </div>

            {/* Golf */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/golf-standrews.jpg"
                  alt="Mark Watson golfing at St Andrews"
                  fill
                  className="object-cover object-[center_15%]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">Life Outside Politics</h3>
                <p className="text-gray-600">
                  An avid golfer and musician, Mark plays in his cover band 45th Parallel when not working for the community.
                </p>
              </div>
            </div>

            {/* Equal Justice */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="/images/community-service.jpg"
                  alt="Mark Watson volunteering in the community"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--hops-navy)] mb-2">Community Service</h3>
                <p className="text-gray-600">
                  Giving back to our neighbors through volunteer work and community involvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--hops-navy)] mb-8 text-center">
            The Full Story
          </h2>
          <div className="bg-[var(--hops-cream)] rounded-xl p-8">
            <p className="leading-relaxed mb-4 text-gray-700">
              I was born in Chicago but have always made my happiest homes where urban areas meet rural spaces. Maybe that&apos;s because my dad was born on a farm in rural Alabama. Although I grew up in the suburbs, my high school was surrounded on three sides by corn fields.
            </p>
            <p className="leading-relaxed mb-4 text-gray-700">
              In Tucson, AZ, where I received my Master&apos;s Degree at the University of Arizona and worked at the ABC affiliate KGUN, we lived on the far east side where the edge of Tucson meets the mountain wilderness. After a brief stop in Charlotte, NC, where I worked at the ABC affiliate WSOC and our daughter was born, I joined a team at Intel and we relocated to Oregon.
            </p>
            <p className="leading-relaxed mb-4 text-gray-700">
              It was quickly clear to us that we could not afford to live in Hillsboro, so we looked for houses in Aloha and Forest Grove. We ended up in Aloha where we happily raised our children in the Hillsboro School District. After 21 years in Aloha, and a fire in our home, we remodeled the small house of my aging mother into a duplex and we now live in Downtown Hillsboro in a multigenerational household.
            </p>
            <p className="leading-relaxed font-semibold text-[var(--hops-navy)]">
              After 26 years in Oregon, I hope we never have to live anywhere else.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hops-green)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See who&apos;s supporting Mark&apos;s campaign for House District 29.
          </p>
          <Link
            href="/supporters"
            className="inline-block bg-white text-[var(--hops-navy)] hover:bg-[var(--hops-cream)] px-10 py-4 rounded-md font-bold text-xl transition-colors shadow-lg"
          >
            View Supporters
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
