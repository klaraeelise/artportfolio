'use client';

import Link from "next/link";
import Image from "next/image";
import { ShopItem } from "@/data/shop/shopItems";

export default function ShopCard({ item }: { item: ShopItem }) {
  return (
    <Link
      href={`/shop/${item.id}`}
      className="group block bg-white/5 border border-deepsea hover:border-biolume rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:shadow-2xl hover:scale-105"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        {!item.available && (
          <div className="absolute inset-0 bg-abyss/70 flex items-center justify-center">
            <span className="text-foam text-lg font-semibold">Sold Out</span>
          </div>
        )}
        {item.featured && (
          <div className="absolute top-2 right-2 bg-biolume text-abyss px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-serif text-foam group-hover:text-biolume transition-colors">
          {item.title}
        </h3>
        <p className="text-moonlight/80 text-sm">{item.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-biolume">${item.price}</span>
          <span className="text-sm text-moonlight group-hover:text-foam transition-colors">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
