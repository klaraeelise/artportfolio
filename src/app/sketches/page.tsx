// src/app/art/page.tsx

import { paintingImages } from '@/data/paintings/paintingGallery';
import { sketchImages } from '@/data/sketches/sketchesGallery';
import Gallery from '@/components/Gallery';

export default function SketchesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-foam space-y-16">
      
      <section className="space-y-8">
        <h2 className="text-2xl font-serif text-glow">✏️ Sketches</h2>
        <Gallery images={sketchImages} />
      </section>
    </main>
  );
}