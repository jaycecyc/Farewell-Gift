'use client';

import Link from 'next/link';
import { Product } from '@/data/products';
import { useCartStore } from '@/context/cart-context';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="mb-6 h-56 w-full rounded-[1.75rem] object-cover" />
      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">{product.category}</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">{product.name}</h2>
          <p className="mt-3 text-sm text-slate-500">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-2xl font-bold text-slate-900">HK${product.price}</span>
          <div className="flex items-center gap-3">
            <Link href={`/products/${product.id}`} className="text-sm text-brand-600 hover:underline">
              詳細
            </Link>
            <button
              onClick={() => addItem({ product, quantity: 1, message: '' })}
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
