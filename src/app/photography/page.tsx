import Card from "@/components/Card";

export default function PhotographyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-foam space-y-12">
      <h1 className="text-4xl font-serif text-biolume">Photography</h1>
      <p className="text-lg text-foam/90 leading-relaxed">
        Explore my photography collection — capturing moments in nature and life.
      </p>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card title="🦁 Wildlife" href="/photography/wildlife" />
        <Card title="🌿 Nature" href="/photography/nature" />
        <Card title="👥 People" href="/photography/people" />
      </section>
    </main>
  );
}
