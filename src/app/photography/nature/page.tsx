import { wildlifeImages } from '@/data/photos/wildlife';
import PhotographyGallery from '@/components/PhotographyGallery';
import Link from 'next/link';

export default function WildlifePage() {
  return (
    <main>
      <nav style={{ marginBottom: 24 }}>
        <Link href="/photography">
          &larr; Back to Categories
        </Link>
        <span style={{ marginLeft: 16, fontWeight: 'bold' }}>Wildlife</span>
      </nav>
      <PhotographyGallery images={wildlifeImages} />
    </main>
  );
}