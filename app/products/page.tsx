'use client';

import Link from 'next/link';

export default function ProductsPage() {
  return (
    <main className="container py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">產品介紹</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">我們的產品</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          我們只提供一款產品：一個禮盒，內含一塊餅乾與一包茶包。先到設計列表挑選喜歡的外觀，再在設計頁面選擇數量並加入購物車。
        </p>
        <div className="mt-6">
          <Link
            href="/products/designs"
            className="inline-block rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
          >
            開始選設計
          </Link>
        </div>
      </div>
    </main>
  );
}
