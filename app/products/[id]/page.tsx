'use client';

import { useMemo, useState } from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { useCartStore } from '@/context/cart-context';
import Link from 'next/link';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((item) => item.id === params.id);
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  if (!product) {
    notFound();
  }

  const quantityOptions = useMemo(
    () => Array.from({ length: 20 }, (_, index) => index + 1),
    []
  );

  const handleSubmit = () => {
    addItem({
      product,
      quantity,
      message,
    });
  };

  return (
    <main className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl overflow-hidden shadow-soft bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-sm text-brand-600">
            <Link href="/products" className="hover:underline">← 返回產品</Link>
            <span>·</span>
            <span>{product.category}</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900">{product.name}</h1>
            <p className="mt-4 text-slate-600">{product.description}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">價格</p>
            <p className="mt-3 text-4xl font-bold text-slate-900">HK${product.price}</p>
          </div>

          <div className="grid gap-5 rounded-3xl bg-white p-6 shadow-soft">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">數量</label>
              <select
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-brand-500"
              >
                {quantityOptions.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">給同事的留言</label>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                placeholder="例如：祝你前程似錦，開工順利！"
                className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-brand-500"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-700"
            >
              Add to Order
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
