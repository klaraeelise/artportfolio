'use client';

import { shopItems } from "@/data/shop/shopItems";
import ShopCard from "@/components/ShopCard";
import { useState } from "react";

type FilterCategory = "all" | "painting" | "print" | "sketch" | "photo";

export default function ShopPage() {
  const [filter, setFilter] = useState<FilterCategory>("all");

  const featuredItems = shopItems.filter(item => item.featured);
  const filteredItems = filter === "all" 
    ? shopItems 
    : shopItems.filter(item => item.category === filter);

  return (
    <main className="min-h-screen text-foam px-6 py-16 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-serif text-foam font-bold drop-shadow-lg">
            🛍️ Art Shop
          </h1>
          <p className="text-xl text-moonlight max-w-2xl mx-auto">
            Browse and purchase original artwork and high-quality prints
          </p>
        </div>

        {/* Featured Section */}
        {featuredItems.length > 0 && (
          <section className="space-y-6">
            <h2 className="text-3xl font-serif text-biolume">⭐ Featured Items</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map(item => (
                <ShopCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {(['all', 'painting', 'photo', 'sketch', 'print'] as FilterCategory[]).map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-biolume text-abyss shadow-lg scale-105'
                  : 'bg-white/5 text-foam border border-deepsea hover:border-biolume hover:scale-105'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* All Items Grid */}
        <section className="space-y-6">
          <h2 className="text-3xl font-serif text-biolume">
            {filter === "all" ? "All Available Items" : `${filter.charAt(0).toUpperCase() + filter.slice(1)}s`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map(item => (
              <ShopCard key={item.id} item={item} />
            ))}
          </div>
          {filteredItems.length === 0 && (
            <p className="text-center text-moonlight py-12">
              No items found in this category.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
