# Farewell Cake Shop

A Next.js 14 App Router website for Hong Kong office workers to order farewell cakes (散水餅).

## Features

- Next.js 14 with App Router
- Tailwind CSS styling
- TypeScript
- Responsive mobile-first design
- React state management with Zustand cart context
- LocalStorage persistence for cart items
- Mock product data (no database required yet)

## Pages

- `/`: Homepage with hero, featured products, and footer
- `/products`: Product grid with filters and Add to Cart
- `/products/[id]`: Product detail with quantity, custom message, and add-to-order
- `/order`: Order form with HK phone validation and weekday delivery
- `/confirmation`: Order summary with payment instructions

## Setup

Install dependencies:

```bash
cd farewell-cake-shop
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Notes

- Uses `zustand` for cart state
- Uses `localStorage` to persist cart items and order data
- Images are loaded from remote URLs and configured in `next.config.mjs`
