import { paintingImages } from '@/data/paintings/paintingGallery';
import Gallery from '@/components/Gallery';

export default function PaintingsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-foam space-y-12">
      <h1 className="text-4xl font-serif text-biolume">Paintings</h1>
      
      <p className="text-lg text-foam/90 leading-relaxed">
        A collection of paintings exploring color, form, and emotion through various mediums.
      </p>

      {paintingImages.length > 0 ? (
        <Gallery images={paintingImages} />
      ) : (
        <div className="bg-white/5 border border-kelp rounded-xl p-8 shadow-md backdrop-blur-sm">
          <p className="text-foam/80 italic">
            Gallery coming soon — stay tuned for painted works and creative expressions.
          </p>
        </div>
      )}
    </main>
  );
}
