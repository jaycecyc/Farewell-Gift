'use client';

import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="mb-4 mx-auto h-36 w-36 rounded-[1rem] object-cover" />
      <div className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-600">{product.category}</p>
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="text-sm text-slate-500">HK${product.price}</p>
        <div className="mt-3">
          <Link
            href={`/products/${product.id}`}
            className="inline-block rounded-full bg-brand-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            選擇設計
          </Link>
        </div>
      </div>
    </article>
  );
}
