// src/app/paintings/page.tsx

import { paintingImages } from '@/data/paintings/paintingGallery';
import Gallery from '@/components/Gallery';

export default function paintingsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 text-foam space-y-8">
      <h1 className="text-4xl font-serif text-biolume font-bold">🎨 Paintings</h1>
      <Gallery images={paintingImages} />
    </main>
  );
}