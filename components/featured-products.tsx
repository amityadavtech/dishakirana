'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  // price: string;
  category: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (products.length - 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const visibleProducts = products.slice(scrollPosition, scrollPosition + 5);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {visibleProducts.map((product, index) => (
            <div
              key={product.id}
              className="stagger-item bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-40 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
                  {product.category}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-sm text-foreground mb-1 line-clamp-2">
                  {product.name}
                </h3>
                {/* <p className="text-primary font-bold text-lg mb-3">{product.price}</p> */}
                {/* <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-2 rounded-lg transition-colors text-sm font-semibold">
                  <ShoppingCart size={16} />
                  Add
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(products.length - 4) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setScrollPosition(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === scrollPosition ? 'bg-primary w-8' : 'bg-gray-300 w-2'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
