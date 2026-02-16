'use client';

import { useState } from "react";

export default function ShoppingCart() {
  const [cartCount] = useState(0);

  return (
    <div className="relative">
      <button 
        className="flex items-center gap-2 text-foam hover:text-biolume transition-colors"
        aria-label="Shopping cart"
      >
        <span className="text-2xl">🛒</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-biolume text-abyss text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
}
