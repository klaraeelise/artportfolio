// src/app/art/page.tsx

import { paintingImages } from '@/data/paintings/paintingGallery';
import Gallery from '@/components/Gallery';

export default function paintingsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-foam space-y-16">
      <h1 className="text-4xl font-serif text-biolume mb-8">Art Portfolio</h1>
      
      <section className="space-y-8">
        <h2 className="text-2xl font-serif text-glow">🎨 Paintings</h2>
        <Gallery images={paintingImages} />
      </section>
    </main>
  );
}