import { peopleImages } from '@/data/photos/people';
import Gallery from '@/components/Gallery';
import Link from 'next/link';

export default function PeoplePage() {
  return (
    <main>
      <nav style={{ marginBottom: 24 }}>
        <Link href="/photography">
          &larr; Back to Categories
        </Link>
        <span style={{ marginLeft: 16, fontWeight: 'bold' }}>People</span>
      </nav>
      <Gallery images={peopleImages} />
    </main>
  );
}