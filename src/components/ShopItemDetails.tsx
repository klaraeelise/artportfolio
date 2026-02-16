'use client';

import Image from "next/image";
import Link from "next/link";
import { ShopItem } from "@/data/shop/shopItems";
import { useState } from "react";

export default function ShopItemDetails({ item }: { item: ShopItem }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    // Placeholder functionality - can be connected to real cart later
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
      <Link 
        href="/shop" 
        className="inline-flex items-center text-biolume hover:text-foam transition-colors"
      >
        ← Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="relative aspect-square rounded-xl overflow-hidden border border-deepsea shadow-2xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
          {!item.available && (
            <div className="absolute inset-0 bg-abyss/70 flex items-center justify-center">
              <span className="text-foam text-2xl font-semibold">Sold Out</span>
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {item.featured && (
            <span className="inline-block bg-biolume text-abyss px-4 py-2 rounded-full text-sm font-semibold">
              ⭐ Featured
            </span>
          )}
          
          <h1 className="text-4xl font-serif text-foam">{item.title}</h1>
          
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-biolume">${item.price}</span>
            <span className="text-moonlight/60 text-sm uppercase tracking-wide">
              {item.category}
            </span>
          </div>

          <div className="border-t border-b border-deepsea py-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-moonlight">Dimensions:</span>
              <span className="text-foam font-medium">{item.dimensions}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-moonlight">Medium:</span>
              <span className="text-foam font-medium">{item.medium}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-moonlight">Availability:</span>
              <span className={`font-medium ${item.available ? 'text-biolume' : 'text-red-400'}`}>
                {item.available ? 'In Stock' : 'Sold Out'}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-serif text-biolume">About this piece</h2>
            <p className="text-moonlight leading-relaxed">{item.description}</p>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!item.available}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
              item.available
                ? 'bg-biolume text-abyss hover:bg-jellyskin hover:scale-105 shadow-lg hover:shadow-2xl'
                : 'bg-deepsea text-moonlight/50 cursor-not-allowed'
            }`}
          >
            {added ? '✓ Added to Cart!' : item.available ? '🛒 Add to Cart' : 'Out of Stock'}
          </button>

          <p className="text-sm text-moonlight/60 text-center">
            Free shipping on orders over $200
          </p>
        </div>
      </div>
    </div>
  );
}
