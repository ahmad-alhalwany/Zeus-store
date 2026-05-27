# Zeus Store — Modern E-Commerce Storefront

A sleek **Next.js 13** e-commerce storefront with **intercepting routes** for modal product previews, full product detail pages, and a polished UI built with **Tailwind CSS**, **shadcn/ui**, and **Headless UI**. Products are fetched live from the [Fake Store API](https://fakestoreapi.com).

[![Next.js](https://img.shields.io/badge/Next.js-13.4-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

---

## Overview

**Zeus Store** is a modern online shopping experience that demonstrates advanced Next.js App Router patterns — especially **parallel/intercepting routes** that open product details in a modal overlay while preserving the underlying page. Click "View full details" to navigate to the dedicated product page with accordion sections for details, shipment, and returns.

**Why this project matters:** It showcases production-ready e-commerce UI patterns — modal routing, optimized images, responsive design, and component composition with Radix UI and Headless UI — without requiring a custom backend.

---

## Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│                    Next.js 13 App Router                     │
├─────────────────────────────────────────────────────────────┤
│  / (Home)           → Product grid from Fake Store API      │
│  /product/[id]      → Full product detail page              │
│  /(.)product/[id]   → Intercepting modal (overlay route)  │
├─────────────────────────────────────────────────────────────┤
│  Fake Store API  →  https://fakestoreapi.com/products       │
└─────────────────────────────────────────────────────────────┘
```

### Intercepting routes flow

| User action | Route matched | UI behavior |
|-------------|---------------|-------------|
| Click product on home | `/(.)product/[id]` | Modal overlay with product preview |
| Direct URL `/product/5` | `/product/[id]` | Full standalone product page |
| "View full details" in modal | `/product/[id]` | Navigate to full page |

---

## Features

### Storefront
- **Product grid** — "Deals of the Day" homepage with all Fake Store products
- **Product cards** — image, title, price, description preview
- **Star ratings** — visual rating display with filled/outline stars
- **Optimized images** — Next.js `Image` component with lazy loading states

### Product detail (modal + page)
- **Modal preview** — Headless UI Dialog with backdrop, opens on product click
- **Full detail page** — dedicated route with accordion sections
- **Accordion tabs** — Details, Shipment info, Return policy
- **Add to bag** — CTA button in modal
- **404 handling** — custom `not-found.tsx` for invalid product IDs

### Navigation & UI
- **Responsive header** — logo, search icon, login/signup links
- **Navigation menu** — Radix UI dropdown with New Products & About sections
- **shadcn/ui components** — Accordion, Navigation Menu
- **Montserrat font** — Google Font via `next/font`
- **Tailwind animations** — `tailwindcss-animate` for smooth transitions

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 13.4 (App Router) |
| Language | TypeScript 5.1 |
| Styling | Tailwind CSS 3.3 |
| UI Components | shadcn/ui (Radix UI), Headless UI |
| Icons | Heroicons, Lucide React |
| API | [Fake Store API](https://fakestoreapi.com) |
| Fonts | Montserrat (Google Fonts) |

---

## Prerequisites

| Tool | Version | Check |
|------|---------|-------|
| **Node.js** | 18+ (LTS recommended) | `node -v` |
| **npm** | 9+ | `npm -v` |

> No database, `.env`, or backend required — products come from the public Fake Store API.

---

## How to Run

### Step 1 — Clone the repository

```bash
git clone https://github.com/ahmad-alhalwany/Zeus-store.git
cd Zeus-store
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Start the development server

```bash
npm run dev
```

You should see:

```text
▲ Next.js 13.4.7
- Local: http://localhost:3000
```

### Step 4 — Open the app

1. Go to [http://localhost:3000](http://localhost:3000)
2. Browse the product grid on the homepage
3. Click any product → opens in a **modal overlay**
4. Click **View full details** → navigates to `/product/[id]`
5. Use the navigation menu (New / About) in the header

---

## Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```text
Zeus-store/
├── app/
│   ├── layout.tsx                  # Root layout + Montserrat font + Header
│   ├── page.tsx                    # Home — product grid
│   ├── globals.css                 # Tailwind + custom styles
│   ├── product/
│   │   └── [id]/
│   │       ├── page.tsx            # Full product detail page
│   │       └── not-found.tsx       # 404 for invalid products
│   └── (.)product/
│       └── [id]/
│           └── page.tsx            # Intercepting route — modal overlay
├── components/
│   ├── Header.tsx                  # Nav bar + search + menu
│   ├── Product.tsx                 # Product card component
│   ├── ProductImage.tsx            # Optimized image with loading state
│   └── ui/
│       ├── accordion.tsx           # shadcn Accordion
│       └── navigation-menu.tsx     # shadcn Navigation Menu
├── lib/
│   └── utils.ts                    # cn() utility (clsx + tailwind-merge)
├── public/
│   └── assets/icons/logo_final.svg
├── typings.d.ts                    # Product type definition
├── components.json                 # shadcn/ui config
├── tailwind.config.js
├── next.config.js                  # Image domains (fakestoreapi.com)
└── package.json
```

---

## Product Type

```typescript
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};
```

---

## API Reference

This app consumes the free [Fake Store API](https://fakestoreapi.com):

| Endpoint | Usage |
|----------|--------|
| `GET /products` | All products (homepage grid) |
| `GET /products/{id}` | Single product (detail page / modal) |

No API key required.

---

## Key Next.js Patterns

### Intercepting routes

The `(.)product/[id]` folder intercepts navigation from the home page and renders a modal instead of a full page transition:

```text
app/
├── product/[id]/page.tsx       ← default route (full page)
└── (.)product/[id]/page.tsx     ← intercepts soft navigation (modal)
```

### Image optimization

`next.config.js` whitelists Fake Store API images:

```javascript
images: {
  domains: ['fakestoreapi.com']
}
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Products not loading | Check internet connection — app needs access to `fakestoreapi.com` |
| Images broken | Verify `fakestoreapi.com` is in `next.config.js` `images.domains` |
| Modal not opening | Intercepting routes only work on client-side navigation from `/` |
| Port 3000 in use | Run `npm run dev -- -p 3001` |
| TypeScript errors on `Product` | Global type is defined in `typings.d.ts` |
| Build fails | Ensure Node.js 18+ and run `npm install` |

---

## Screenshots

| Home Grid | Product Modal | Full Detail Page |
|-----------|---------------|------------------|
| _Add screenshot_ | _Add screenshot_ | _Add screenshot_ |

---

## Roadmap

- [ ] Shopping cart state management
- [ ] User authentication (login/signup pages)
- [ ] Search functionality (wire up search icon)
- [ ] Category filtering
- [ ] Replace Fake Store API with custom backend
- [ ] Deploy to Vercel

---

## Author

**Ahmad Alhalwany**

- GitHub: [@ahmad-alhalwany](https://github.com/ahmad-alhalwany)
- Repository: [Zeus-store](https://github.com/ahmad-alhalwany/Zeus-store)

---

## License

MIT — free to use for learning and reference.
