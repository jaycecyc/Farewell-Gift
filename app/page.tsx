import Link from 'next/link';

export default function HomePage() {

  return (
    <main>
      <section className="py-28 bg-gradient-to-b from-amber-50 to-white">
        <div className="container text-center">
          <div className="mx-auto mb-6 w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <img
              src="/images/Brand_Logo_With_Name.png"
              alt="至尊寶散水站"
              className="w-full h-full object-cover transform transition duration-300 scale-110 hover:scale-125"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">散水餅・告別同事的小心意</h1>

          <div className="flex items-center justify-center gap-3 text-2xl mb-4" aria-hidden>
            <span>🍪</span>
            <span>☕</span>
            <span>🎁</span>
          </div>

          <div className="mx-auto mb-6 max-w-3xl">
            <img
              src="/images/Purchase_Procedure.png"
              alt="訂購流程"
              className="mx-auto w-full h-auto rounded-lg shadow-sm"
            />
          </div>

          <div className="mx-auto max-w-2xl text-center mb-8">
            <Link
              href="/products/designs"
              className="inline-block rounded-full bg-brand-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-brand-700"
            >
              選擇設計
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-10 text-slate-100">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">尊寶散水站</p>
            <p className="text-sm text-slate-400">香港辦公室散水餅訂購平台</p>
          </div>
          <div className="space-y-1 text-sm text-slate-400">
            <p>聯絡電話: 4415 7297</p>
            <p>Email: hello@farewellcake.hk</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
