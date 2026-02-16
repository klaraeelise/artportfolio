import { wildlifeImages } from '@/data/photos/wildlife';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export default function WildlifePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-foam space-y-8">
      <div className="flex items-center gap-4">
        <Link 
          href="/photography"
          className="text-biolume hover:text-foam transition-colors"
        >
          ← Back to Categories
        </Link>
        <h1 className="text-3xl font-serif font-bold text-foam">Wildlife Photography</h1>
      </div>
      <Gallery images={wildlifeImages} />
    </main>
  );
}