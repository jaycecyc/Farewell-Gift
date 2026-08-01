import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/context/cart-context';
import { Navbar } from '@/components/navbar';
import BackButton from '@/components/back-button';

export const metadata: Metadata = {
  title: '尊寶散水站 | 散水餅訂購',
  description: '為香港辦公室同事準備的散水餅訂購平台。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <CartProvider>
          <Navbar />
          <BackButton />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
