import { natureImages } from '@/data/photos/nature';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export default function NaturePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-foam space-y-8">
      <div className="flex items-center gap-4">
        <Link 
          href="/photography"
          className="text-biolume hover:text-foam transition-colors"
        >
          ← Back to Categories
        </Link>
        <h1 className="text-3xl font-serif font-bold text-foam">Nature Photography</h1>
      </div>
      <Gallery images={natureImages} />
    </main>
  );
}