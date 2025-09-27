import Link from "next/link";

export default function PoemLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-foam font-serif">
      <Link
        href="/art"
        className="text-glow text-sm uppercase tracking-wide mb-6 inline-block hover:underline"
      >
        ← Back to Art
      </Link>

      <div className="bg-white/5 border border-foam rounded-xl p-8 shadow-md backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
