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
        <p className="text-sm uppercase tracking-[0.2em] text-brand-600">{product.category}</p>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">HK${product.price}</span>
          <Link
            href={`/products/${product.id}`}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            查看
          </Link>
        </div>
      </div>
    </article>
  );
}
