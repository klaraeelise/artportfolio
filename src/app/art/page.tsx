// pages/art.tsx or pages/creative.tsx
//import Textbox from "@/components/Textbox"; 
import Card from "@/components/Card";

export default function CreativeShowcase() {
  return (

    <main className="max-w-4xl mx-auto px-4 py-10 space-y-16">
      <Card title="The Poet" href="/art/poems/ThePoet" />
      <Card title="The Smell of Winter" href="/art/poems/TheSmellOfWinter" />
      <Card title="A Cup of Tea" href="/art/poems/ACupOfTea" />
      <Card title="Peaches in the Moonlight" href="/art/poems/PeachesInTheMoonlight" />
    </main>
  );
}
