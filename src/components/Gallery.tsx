'use client';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

interface GalleryImage {
  original: string;
  thumbnail: string;
  description?: string;
}

export default function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <div style={{ maxWidth: 900, margin: "auto" }}>
      <ImageGallery items={images} showPlayButton={false} />
    </div>
  );
}