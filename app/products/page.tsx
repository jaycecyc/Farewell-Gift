'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { ProductType, products } from '@/data/products';

type ProductFilterType = ProductType | 'All';

const filterOptions: ProductFilterType[] = ['All', 'Traditional', 'Premium', 'Mini Set'];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<ProductFilterType>('All');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') return products;
    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="container py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">產品目錄</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">散水餅蛋糕選擇</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          精選傳統、Premium 及迷你組合，方便為告別聚會採購。點擊產品了解更多並加入訂單。
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setActiveFilter(option)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeFilter === option
                ? 'bg-brand-600 text-white'
                : 'border border-slate-300 bg-white text-slate-700 hover:border-brand-500 hover:text-brand-700'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
