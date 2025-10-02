import { natureImages } from '@/data/photos/nature';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export default function NaturePage() {
  return (
    <main>
      <nav style={{ marginBottom: 24 }}>
        <Link href="/photography">
          &larr; Back to Categories
        </Link>
        <span style={{ marginLeft: 16, fontWeight: 'bold' }}>Nature</span>
      </nav>
      <Gallery images={natureImages} />
    </main>
  );
}