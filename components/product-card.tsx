'use client';

import { useState } from 'react';
import { useCartStore } from '@/context/cart-context';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      product,
      quantity,
      message: ''
    });
    setQuantity(1);
  };

  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-36 w-36 flex-shrink-0 rounded-[1rem] object-cover"
        />

        <div className="flex flex-1 flex-col gap-3 text-left">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-lg font-semibold text-slate-900">{product.name}</h3>
              <p className="text-sm text-slate-500">HK${product.price}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 shadow-sm">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-brand-500"
                >
                  −
                </button>
                <span className="min-w-[2rem] text-center text-lg font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.min(20, value + 1))}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-brand-500"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex min-w-[9rem] items-center justify-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
