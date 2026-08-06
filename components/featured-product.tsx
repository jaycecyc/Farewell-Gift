import { Product } from '@/data/products';
import Link from 'next/link';

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="h-72 w-full object-cover" />
      <div className="p-6">
        <h3 className="mt-4 text-2xl font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">HK${product.price}</span>
        </div>
      </div>
    </article>
  );
}
