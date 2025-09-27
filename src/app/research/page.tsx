import Link from "next/link";

export default function ResearchPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-foam space-y-12">
      <h1 className="text-4xl font-serif text-biolume">Research</h1>

      <p className="text-lg text-foam/90 leading-relaxed">
        Im drawn to systems at the intersection of nature, data, and theory. My research spans physical oceanography, Arctic ecosystems, and sustainability studies. Im especially interested in how glacial melt influences fjord environments and how movement, matter, and life interconnect.
      </p>

      <section className="space-y-8">
            <Link
              href="/research/ParticleImageVelocimetry"
              className="block bg-white/5 border border-kelp rounded-xl p-6 hover:border-glow hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-serif text-glow mb-2">Wave-Ice Interaction @ University of Tokyo</h2>
              <p className="text-sm text-foam/90">
                Developed a PIV setup to explore wave dynamics in freezing conditions. Experimental work with algae particles.
              </p>
            </Link>

        <Link
              href="/research/RiverRunoff"
              className="block bg-white/5 border border-kelp rounded-xl p-6 hover:border-glow hover:shadow-lg transition-all"
            >
          <h2 className="text-xl font-serif text-glow mb-2">Arctic Fjord Dynamics & Glacial Melt</h2>
          <p className="text-sm text-foam/90">
            As part of a multidisciplinary project in Svalbard and Adventfjorden, I analyzed the physical and geochemical effects of glacial melt on turbidity, stratification, and light penetration. This research ties into questions about primary production and Arctic ecosystem shifts.
          </p>
        </Link>

        <Link
              href="/research/FjordBiodiversity"
              className="block bg-white/5 border border-kelp rounded-xl p-6 hover:border-glow hover:shadow-lg transition-all"
            >
          <h2 className="text-xl font-serif text-glow mb-2">Fjord Biodiversity</h2>
          <p className="text-sm text-foam/90">
            We were researching the influence of certain physical factors on the biodiversity in Van Mijenfjorden.
          </p>
        </Link>

        <Link
              href="/research/BraidGroup"
              className="block bg-white/5 border border-kelp rounded-xl p-6 hover:border-glow hover:shadow-lg transition-all"
            >
          <h2 className="text-xl font-serif text-glow mb-2">Braid Group </h2>
          <p className="text-sm text-foam/90">
            For my bachelor thesis I proved that the fundamental group of the configuration space of two identical particles is the braid group.
          </p>
        </Link>

      </section>

      <p className="text-sm text-right text-glow/80 italic">
        More to come — I&apos;ll share posters, visualizations, and methods soon.
      </p>
    </main>
  );
}
