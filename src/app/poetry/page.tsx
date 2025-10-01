// Poetry page
import Card from "@/components/Card";

export default function PoetryPage() {
  return (

    <main className="max-w-4xl mx-auto px-4 py-10 space-y-16">
      <h1 className="text-4xl font-serif text-biolume mb-8">Poetry</h1>
      <Card title="The Poet" href="/poetry/poems/ThePoet" />
      <Card title="The Smell of Winter" href="/poetry/poems/TheSmellOfWinter" />
      <Card title="A Cup of Tea" href="/poetry/poems/ACupOfTea" />
      <Card title="Peaches in the Moonlight" href="/poetry/poems/PeachesInTheMoonlight" />
    </main>
  );
}
