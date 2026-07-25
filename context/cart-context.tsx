'use client';

import { create } from 'zustand';
import { useEffect } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  message: string;
}

interface CartState {
  cartItems: CartItem[];
  totalCount: number;
  totalPrice: number;
  addItem: (item: CartItem) => void;
  clearCart: () => void;
}

const getInitialCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('cartItems');
    return saved ? (JSON.parse(saved) as CartItem[]) : [];
  } catch {
    return [];
  }
};

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  totalCount: 0,
  totalPrice: 0,
  addItem: (item) => {
    const existingItems = get().cartItems;
    const matchingIndex = existingItems.findIndex(
      (cart) => cart.product.id === item.product.id && cart.message === item.message
    );

    const updatedItems = matchingIndex >= 0
      ? existingItems.map((cart, index) =>
          index === matchingIndex
            ? { ...cart, quantity: Math.min(cart.quantity + item.quantity, 20) }
            : cart
        )
      : [...existingItems, item];

    set({ cartItems: updatedItems });
    const totalCount = updatedItems.reduce((sum, product) => sum + product.quantity, 0);
    const totalPrice = updatedItems.reduce((sum, product) => sum + product.quantity * product.product.price, 0);
    set({ totalCount, totalPrice });
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  },
  clearCart: () => {
    set({ cartItems: [], totalCount: 0, totalPrice: 0 });
    localStorage.removeItem('cartItems');
  }
}));

export function CartProvider({ children }: { children: React.ReactNode }) {
  const initialCart = getInitialCart();

  useEffect(() => {
    if (initialCart.length > 0) {
      useCartStore.setState({
        cartItems: initialCart,
        totalCount: initialCart.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: initialCart.reduce((sum, item) => sum + item.quantity * item.product.price, 0)
      });
    }
  }, [initialCart]);

  return <>{children}</>;
}
