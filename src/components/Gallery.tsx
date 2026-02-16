'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  original: string;
  thumbnail: string;
  description?: string;
}

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-deepsea hover:border-biolume transition-all duration-300 ease-in-out shadow-md hover:shadow-2xl hover:scale-105"
          >
            <Image
              src={image.thumbnail}
              alt={image.description || `Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              {image.description && (
                <p className="text-foam text-sm font-medium">{image.description}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-abyss/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-foam hover:text-biolume text-4xl z-50 transition-colors"
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-foam hover:text-biolume text-5xl z-50 transition-colors"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-foam hover:text-biolume text-5xl z-50 transition-colors"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={images[currentIndex].original}
                alt={images[currentIndex].description || `Gallery image ${currentIndex + 1}`}
                fill
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>
            
            {/* Image Description */}
            {images[currentIndex].description && (
              <div className="mt-4 text-center bg-abyss/80 rounded-xl px-6 py-3 backdrop-blur-sm">
                <p className="text-foam text-lg">{images[currentIndex].description}</p>
              </div>
            )}

            {/* Image Counter */}
            <div className="mt-2 text-moonlight text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}