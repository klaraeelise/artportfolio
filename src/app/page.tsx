//import Link from "next/link";
import Card from "@/components/Card";

export default function HomePage() {
  return (
    <main className="min-h-screen text-foam px-6 py-16 font-sans">
      <section className="max-w-4xl mx-auto space-y-16">

        {/* Intro */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl text-foam font-serif font-bold text-foam drop-shadow-lg">
            Hi, I&rsquo;m Klara 🌊
          </h1>
          <p className="text-xl sm:text-2xl max-w-xl mx-auto text-foam/90">
            Welcome to my portfolio — a blend of code, curiosity, and deep-sea dreams.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Card title="🛠 Programming Projects" href="/projects" />
          <Card title="🔬 Research" href="/research" />
          <Card title="💫 Art" href="/art" />
          <Card title="👩‍💻 About Me" href="/about" />
        </div>
      </section>
    </main>
  );
}


