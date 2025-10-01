import Link from "next/link";

export default function PeoplePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-foam space-y-12">
      <Link
        href="/photography"
        className="text-glow text-sm uppercase tracking-wide mb-6 inline-block hover:underline"
      >
        ← Back to Photography
      </Link>

      <h1 className="text-4xl font-serif text-biolume">People Photography</h1>
      
      <p className="text-lg text-foam/90 leading-relaxed">
        People photography captures human connection, emotion, and expression.
      </p>

      <div className="bg-white/5 border border-kelp rounded-xl p-8 shadow-md backdrop-blur-sm">
        <p className="text-foam/80 italic">
          Gallery coming soon — stay tuned for portraits and candid moments.
        </p>
      </div>
    </main>
  );
}
