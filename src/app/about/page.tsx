export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-foam space-y-10">
      <h1 className="text-4xl font-serif text-biolume mb-4">About Me</h1>

      <p className="text-lg leading-relaxed">
        I&apos;m Klara — a creative researcher and artist drawn to complex systems, visual storytelling,
        and the deep ocean. I&apos;m currently studying environmental science and computer science, with
        a background in physics and mathematics. My work spans photography, painting, poetry, and creative expression.
      </p>

      <p className="leading-relaxed">
        What connects my creative pursuits is a curiosity for how things work — in nature, in people, and in art.
        I enjoy capturing moments and emotions, whether through a camera lens, on canvas, or in verse.
      </p>

      <p className="leading-relaxed">
        Right now, I&apos;m exploring various creative mediums, from wildlife photography to painting, and exploring
        Arctic fjord ecosystems through glacial meltwater and algae.
      </p>

      <div className="flex gap-4 mt-8">
        <a
          href="/poetry"
          className="px-4 py-2 rounded-full bg-biolume text-abyss font-semibold hover:bg-jellyskin transition"
        >
          Read my poetry
        </a>
        <a
          href="/photography"
          className="px-4 py-2 rounded-full border border-glow text-glow hover:bg-glow/10 transition"
        >
          View my photography
        </a>
      </div>
    </main>
  );
}
