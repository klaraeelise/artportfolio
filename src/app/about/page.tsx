export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-foam space-y-10">
      <h1 className="text-4xl font-serif text-biolume mb-4">About Me</h1>

      <p className="text-lg leading-relaxed">
        I’m Klara — a creative researcher and developer drawn to complex systems, visual storytelling,
        and the deep ocean. I’m currently studying environmental science and computer science, with
        a background in physics and mathematics. My work spans programming, oceanography, art, and poetry.
      </p>

      <p className="leading-relaxed">
        What connects my projects is a curiosity for how things work — in nature, in people, and in code.
        I enjoy making things that help others see and understand systems more clearly, whether that’s a QA dashboard,
        a field research report, or a line of poetry.
      </p>

      <p className="leading-relaxed">
        Right now, I’m learning more about frontend frameworks, building a vocabulary app, and exploring
        Arctic fjord ecosystems through glacial meltwater and algae.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="/projects"
          className="px-4 py-2 rounded-full bg-biolume text-abyss font-semibold hover:bg-jellyskin transition"
        >
          See my projects
        </a>
        <a
          href="/art"
          className="px-4 py-2 rounded-full border border-glow text-glow hover:bg-glow/10 transition"
        >
          Explore my creative work
        </a>
      </div>
    </main>
  );
}
