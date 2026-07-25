import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/context/cart-context';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: '散水餅訂購 | Farewell Cake Shop',
  description: '為香港辦公室同事準備的散水餅訂購平台。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
