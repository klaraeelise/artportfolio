import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/5 border-t border-b border-kelp text-foam px-6 py-4 shadow-md backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto flex gap-8 justify-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/poetry">Poetry</Link>
        <Link href="/photography">Photography</Link>
        <Link href="/paintings">Paintings</Link>
        <Link href="/sketches">Sketches</Link>
      </div>
    </nav>
  );
}
