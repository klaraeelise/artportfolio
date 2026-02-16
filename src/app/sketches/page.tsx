// src/app/sketches/page.tsx

import { sketchImages } from '@/data/sketches/sketchesGallery';
import Gallery from '@/components/Gallery';

export default function SketchesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-foam space-y-8">
      <h1 className="text-4xl font-serif text-biolume font-bold">✏️ Sketches</h1>
      <Gallery images={sketchImages} />
    </main>
  );
}