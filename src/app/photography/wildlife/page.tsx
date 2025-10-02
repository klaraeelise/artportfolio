import { wildlifeImages } from '@/data/photos/wildlife';
import Gallery from '@/components/Gallery';
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
      <Gallery images={wildlifeImages} />
    </main>
  );
}