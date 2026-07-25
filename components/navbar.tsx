'use client';

import Link from 'next/link';
import { useCartStore } from '@/context/cart-context';

export function Navbar() {
  const itemCount = useCartStore((state) => state.totalCount);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"> 
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          散水餅 Shop
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <Link href="/products" className="transition hover:text-brand-600">
            Products
          </Link>
          <Link href="/order" className="transition hover:text-brand-600">
            Order
          </Link>
          <Link href="/order" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-slate-700 transition hover:border-brand-500 hover:text-brand-700">
            Cart
            <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
              {itemCount}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
