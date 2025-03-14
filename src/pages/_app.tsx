import '@/styles/globals.css'
import type { AppProps } from 'next/app';
// 1-2  ---We need to make the CartContext available to all components that need to access or modify the cart. We do this by wrapping the entire application with the CartProvider.

import { CartProvider } from '@/components/CartContext';

// We've wrapped the <Component {...pageProps} /> with <CartProvider>. This makes the cart state and dispatch function available to all pages and components in your application.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
 