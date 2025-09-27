import Link from "next/link";

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-foam space-y-10">
      <Link
        href="/research"
        className="text-glow text-sm uppercase tracking-wide mb-6 inline-block hover:underline"
      >
        ← Back to Research
      </Link>

      <div className="bg-white/5 border border-kelp rounded-xl p-8 shadow-md backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
