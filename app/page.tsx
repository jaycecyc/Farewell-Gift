import Link from 'next/link';
import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';
import { FeaturedProduct } from '@/components/featured-product';

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <main>
      <section className="hero-bg py-14">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-brand-700 text-sm font-semibold">
                辦公室散水餅專區
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                散水餅・告別同事的小心意
              </h1>
              <p className="max-w-xl text-base text-slate-700 sm:text-lg">
                精選特色蛋糕組合，為香港同事訴說祝福與懷念。簡單訂購、快速送達、溫馨分享。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-amber-700"
                >
                  立即選購
                </Link>
                <Link
                  href="/order"
                  className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-white px-6 py-3 text-base font-semibold text-amber-800 transition hover:bg-amber-50"
                >
                  立即訂購
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 p-2 shadow-soft">
              <div className="h-full min-h-[320px] rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.35),_transparent_45%),linear-gradient(135deg,_#7c2d12,_#b45309_45%,_#f59e0b)] p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-100">西遊取經傳奇 x 溫柔辦公室告別</p>
                <h2 className="mt-4 text-3xl font-black sm:text-4xl">每份蛋糕，都藏著一段告別的故事</h2>
                <p className="mt-4 max-w-md text-base text-amber-50/90">
                  從西遊取經的傳奇氣勢，到辦公室告別的溫柔心意，讓每份蛋糕都帶著故事。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">推薦產品</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">熱賣散水餅蛋糕</h2>
          </div>
          <Link href="/products" className="text-brand-600 hover:underline">
            查看所有產品 →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <FeaturedProduct key={product.id} product={product} />
          ))}
        </div>
      </section>

      <footer className="bg-slate-950 py-10 text-slate-100">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">至尊寶散水站</p>
            <p className="text-sm text-slate-400">香港辦公室散水餅訂購平台</p>
          </div>
          <div className="space-y-1 text-sm text-slate-400">
            <p>聯絡電話: 9876 5432</p>
            <p>Email: hello@farewellcake.hk</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
