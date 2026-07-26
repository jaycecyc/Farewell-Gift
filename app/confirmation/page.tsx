'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';

interface OrderData {
  orderNumber: string;
  customer: { name: string; phone: string; address: string };
  delivery: { date: string; slot: string };
  items: Array<{ product: { name: string; price: number }; quantity: number; message: string }>;
  totalPrice: number;
  request: string;
}

export default function ConfirmationPage() {
  const [order, setOrder] = useState<OrderData | null>(null);
  const [copied, setCopied] = useState(false);
  const paymeCode = '60899809';
  const paymeLink = 'https://qr.payme.hsbc.com.hk/1/Ua9AYXs1uTEcQfWiT782pL';
  const whatsappNumber = '85244157297';
  const whatsappMessage = encodeURIComponent(
    `Hello! I would like to place an order.\n\nOrder Number: ${order?.orderNumber || 'N/A'}\nCustomer Name: ${order?.customer.name || 'N/A'}\nPhone: ${order?.customer.phone || 'N/A'}\nAddress: ${order?.customer.address || 'N/A'}\nDelivery Date: ${order?.delivery.date || 'N/A'}\nDelivery Time: ${order?.delivery.slot || 'N/A'}\nTotal Amount: HK$${order?.totalPrice ? formatPrice(order.totalPrice) : 'N/A'}\n\nI have completed my payment and attached the payment screenshot. Please confirm my order.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('lastOrder') : null;
    if (saved) {
      setOrder(JSON.parse(saved));
    }
  }, []);

  if (!order) {
    return (
      <main className="container py-20">
        <p className="text-center text-slate-700">未找到訂單資料，請返回首頁重新開始。</p>
      </main>
    );
  }

  return (
    <main className="container py-16">
      <section className="rounded-3xl bg-white p-10 shadow-soft">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">訂單確認</p>
          <h1 className="text-4xl font-bold text-slate-900">感謝您的訂單</h1>
          <p className="text-slate-600">請根據以下方式完成付款，送貨將按您選擇的日期安排。</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_0.65fr]">
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-50 p-6">
              <p className="text-sm text-slate-500">訂單號碼</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{order.orderNumber}</p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">客戶資料</h2>
              <div className="mt-4 space-y-2 text-slate-700">
                <p>姓名：{order.customer.name}</p>
                <p>電話：{order.customer.phone}</p>
                <p>地址：{order.customer.address}</p>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">送貨安排</h2>
              <div className="mt-4 space-y-2 text-slate-700">
                <p>日期：{order.delivery.date}</p>
                <p>時段：{order.delivery.slot}</p>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">特別要求</h2>
              <p className="mt-3 text-slate-700">{order.request || '無'}</p>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl bg-brand-600/5 p-6">
            <h2 className="text-xl font-semibold text-slate-900">付款說明</h2>
            <div className="rounded-3xl border border-brand-200 bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-600">PayMe / FPS</p>
              <p className="mt-3 text-slate-700">請使用 PayMe 或 FPS 付款，付款資料如下：</p>
              <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-slate-950 px-4 py-3">
                <span className="font-mono text-lg font-semibold text-white">{paymeCode}</span>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(paymeCode);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 1800);
                    } catch {
                      // ignore clipboard errors
                    }
                  }}
                  className="rounded-full bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  {copied ? '已複製' : '複製'}
                </button>
              </div>
              <a
                href={paymeLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center text-sm font-semibold text-brand-600 hover:underline"
              >
                打開 PayMe 付款連結
              </a>
              <div className="mt-3 rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
                <p className="font-semibold text-slate-900">付款後請這樣做：</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>請截圖付款紀錄</li>
                  <li>點擊下方 WhatsApp 按鈕</li>
                  <li>將截圖發送給我們，並附上您的訂單資料</li>
                </ul>
              </div>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                WhatsApp 通知我
              </a>
              <p className="mt-3 text-sm text-slate-500">按下 WhatsApp 按鈕後，系統會自動幫您填好簡短通知訊息，方便您立即發送給我們。</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-600">訂單摘要</p>
              <div className="mt-4 space-y-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-900">{item.product.name}</p>
                      <p className="text-sm text-slate-500">{item.quantity} 件</p>
                    </div>
                    <p className="font-semibold text-slate-900">HK${item.product.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-slate-200 pt-4 text-right">
                <p className="text-sm text-slate-500">總金額</p>
                <p className="text-2xl font-bold text-slate-900">HK${formatPrice(order.totalPrice)}</p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex w-full justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Back to Home
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
