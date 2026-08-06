'use client';

import { useState } from 'react';
import { useCartStore } from '@/context/cart-context';
import { formatPrice } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const timeSlots = ['Morning (9-12)', 'Afternoon (1-5)'];

export default function OrderPage() {
  const { cartItems, totalPrice, clearCart, updateItemQuantity } = useCartStore();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState(timeSlots[0]);
  const [request, setRequest] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    const hkPhonePattern = /^(?:\+852\s?)?[5689]\d{3}\s?\d{4}$/;
    const weekday = date ? new Date(date).getDay() : null;

    if (!name || !phone || !address || !date) {
      setError('請填寫所有必須欄位。');
      return;
    }

    if (!hkPhonePattern.test(phone)) {
      setError('請輸入有效的香港電話號碼。');
      return;
    }

    if (weekday === 0 || weekday === 6) {
      setError('請選擇工作日送貨日期。');
      return;
    }

    if (cartItems.length === 0) {
      setError('購物車內沒有任何產品。');
      return;
    }

    const orderNumber = `SCB-${Math.floor(Math.random() * 900000 + 100000)}`;
    const payload = {
      orderNumber,
      customer: { name, phone, address },
      delivery: { date, slot },
      items: cartItems,
      totalPrice,
      request,
    };

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to sync order');
      }

      localStorage.setItem('lastOrder', JSON.stringify(payload));
      clearCart();
      router.push('/confirmation');
    } catch {
      setError('訂單已建立，但同步到 Google Sheets 時發生問題。');
    }
  };

  return (
    <main className="container py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">下單頁面</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">確認送貨與聯絡資料</h1>
        <p className="mt-3 text-slate-600">請填妥以下資料，我們會按辦公室時間安排送貨。</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-6 rounded-3xl bg-slate-950 p-8 text-white shadow-soft">
          <h2 className="text-2xl font-bold">訂單摘要</h2>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-slate-300">您的購物車目前沒有產品。</p>
            ) : (
              cartItems.map((item) => (
                <div key={`${item.product.id}-${item.message}`} className="rounded-3xl bg-slate-900 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-slate-400">{item.product.name}</p>
                      {item.message ? <p className="mt-2 text-sm text-slate-500">留言: {item.message}</p> : null}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateItemQuantity(item.product.id, item.quantity - 1)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-950 text-white transition hover:bg-slate-800"
                      >
                        −
                      </button>
                      <span className="min-w-[2rem] text-center text-lg font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateItemQuantity(item.product.id, item.quantity + 1)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-950 text-white transition hover:bg-slate-800"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-base">
                    <span>HK${item.product.price} x {item.quantity}</span>
                    <span className="font-semibold">HK${item.product.price * item.quantity}</span>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="rounded-3xl bg-brand-600/10 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-200">總計</p>
            <p className="mt-3 text-3xl font-bold">HK${formatPrice(totalPrice)}</p>
          </div>
        </aside>

        <section className="space-y-6 rounded-3xl bg-white p-8 shadow-soft">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-3">
              <span className="text-sm font-semibold text-slate-700">姓名（必填）</span>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="例如：陳美玲"
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500"
              />
            </label>
            <label className="space-y-3">
              <span className="text-sm font-semibold text-slate-700">電話（必填）</span>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="9876 5432"
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500"
              />
            </label>
          </div>

          <label className="space-y-3">
            <span className="text-sm font-semibold text-slate-700">交收地鐵站（必填）</span>
            <select
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500"
            >
              <option value="">請選擇地鐵站</option>
              <option value="土瓜灣">土瓜灣</option>
              <option value="鑽石山">鑽石山</option>
            </select>
          </label>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="space-y-3">
              <span className="text-sm font-semibold text-slate-700">送貨日期</span>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(event) => setDate(event.target.value)}
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500"
              />
            </label>
            <label className="space-y-3">
              <span className="text-sm font-semibold text-slate-700">送貨時段</span>
              <select
                value={slot}
                onChange={(event) => setSlot(event.target.value)}
                className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500"
              >
                {timeSlots.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="space-y-3">
            <span className="text-sm font-semibold text-slate-700">特別要求（備註）</span>
            <textarea
              value={request}
              onChange={(event) => setRequest(event.target.value)}
              rows={4}
              placeholder="例如：請提前 30 分鐘到達。"
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-brand-500"
            />
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex rounded-full bg-brand-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-700"
          >
            Submit Order
          </button>
        </section>
      </div>
    </main>
  );
}
