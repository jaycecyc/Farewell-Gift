'use client';

import { useMemo, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { ProductType, products } from '@/data/products';

type ProductFilterType = ProductType | 'All';

const filterOptions: ProductFilterType[] = ['All', '穩陣類', 'Premium', '迷你組合', '搞笑類', '卡通類'];
const filterLabels: Record<ProductFilterType, string> = {
  All: '全部',
  穩陣類: '穩陣類',
  Premium: 'Premium',
  迷你組合: '迷你組合',
  搞笑類: '搞笑類',
  卡通類: '卡通類'
};

export default function DesignsPage() {
  const [activeFilter, setActiveFilter] = useState<ProductFilterType>('All');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'All') return products;
    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="container py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">設計列表</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">設計</h1>
        <p className="mt-3 max-w-2xl text-slate-600">請從下方選擇您喜歡的設計，然後在設計頁面選擇數量並加入購物車。</p>
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
            {filterLabels[option]}
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
