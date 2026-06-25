# Patankar Krishi Seva Kendra — React + Tailwind + Redux Website

A modern, fully-responsive, bilingual (English + हिंदी) **React** website for **Patankar Krishi Seva Kendra**, an agricultural input store in Bhoura, Shahpur, Betul (M.P.).

Built with **React 18 + Vite + Tailwind CSS + Redux Toolkit + React Router**.

---

## ✨ Features

- ⚛️ **React 18** with functional components and hooks
- ⚡ **Vite** for instant HMR and lightning-fast builds
- 🎨 **Tailwind CSS** with a custom agriculture-themed design system
- 🗂️ **Redux Toolkit** for state management
  - `languageSlice` — current language with `localStorage` persistence
  - `inquirySlice` — form draft state + submitted inquiries with persistence
  - `uiSlice` — mobile menu, scroll state
- 🌐 **React Router v6** with 7 routes
- 🌏 **Bilingual UI** — instant English ⇄ हिंदी toggle (state in Redux, persisted)
- 📝 **Redux-connected inquiry form** with validation → auto-builds WhatsApp message → opens chat
- 📱 **Mobile-first responsive** with hamburger menu
- 🎯 **Lucide React icons** (modern, clean SVG icons)
- 🗺️ **Embedded Google Maps** of store location
- 🟢 **Floating WhatsApp button** on every page
- ✨ **Scroll-reveal animations** via IntersectionObserver
- 🔍 **SEO meta tags** with your provided keywords

---

## 📁 Project Structure

```
farms/
├── public/                       (created on build)
├── index.html                    Vite HTML entry
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx                  React entry — wires Provider + BrowserRouter
    ├── App.jsx                   Layout + routes
    ├── index.css                 Tailwind + custom utility classes
    │
    ├── store/                    REDUX
    │   ├── index.js              configureStore
    │   ├── languageSlice.js      EN / HI toggle, persisted
    │   ├── inquirySlice.js       form draft + inquiries list, persisted
    │   └── uiSlice.js            mobile menu, scrolled header
    │
    ├── data/
    │   ├── business.js           Phones, address, GSTIN, WhatsApp helper
    │   └── content.js            ALL bilingual text — single source of truth
    │
    ├── hooks/
    │   ├── useT.js               Translation hook → `const { t, lang } = useT()`
    │   └── useScrollReveal.js    IntersectionObserver wrapper
    │
    ├── components/               REUSABLE UI
    │   ├── Topbar.jsx            phones + language toggle
    │   ├── Header.jsx            logo + nav + mobile menu
    │   ├── Footer.jsx
    │   ├── FloatingWhatsApp.jsx
    │   ├── PageBanner.jsx        title + breadcrumb for inner pages
    │   ├── SectionTitle.jsx
    │   ├── CTASection.jsx
    │   ├── TwoCol.jsx            image + content layout
    │   ├── Checklist.jsx
    │   ├── ProductCard.jsx
    │   ├── BrandCard.jsx
    │   ├── InfoCard.jsx          icon + title + description
    │   └── InquiryForm.jsx       Redux-connected with validation
    │
    └── pages/                    ROUTES
        ├── Home.jsx              /
        ├── About.jsx             /about
        ├── Products.jsx          /products
        ├── Brands.jsx            /brands
        ├── Services.jsx          /services
        ├── Gallery.jsx           /gallery
        └── Contact.jsx           /contact
```

---

## 🚀 Setup & Run (First Time)

### Step 1 — Install Node.js
This project requires **Node.js 18 or later**. If you don't have it:

1. Download from [https://nodejs.org](https://nodejs.org) (pick the LTS version — green button).
2. Install with default options.
3. Verify in a new PowerShell window:
   ```powershell
   node --version
   npm --version
   ```
   Both commands should print version numbers.

### Step 2 — Install dependencies

Open PowerShell in this folder and run:

```powershell
cd c:\Users\rchouksey\Desktop\farms
npm install
```

This will install React, Redux, Tailwind, Vite, and all other packages (≈ 1–3 minutes).

### Step 3 — Start dev server

```powershell
npm run dev
```

Vite will print something like:
```
  VITE v5.x.x ready in 500 ms
  ➜ Local:   http://localhost:5173/
```
Open that URL — the site should auto-open in your default browser.

The dev server has **Hot Module Replacement** — edit any file and changes appear instantly without reload.

---

## 📦 Build for Production

```powershell
npm run build
```

This generates an optimized static bundle in `dist/`. You can preview it locally with:

```powershell
npm run preview
```

---

## 🌍 Deploy (Free Hosting)

### Netlify (drag-and-drop)
1. Run `npm run build` to create the `dist/` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `dist/` folder onto it.
3. **Important** — for React Router to work on Netlify, also add a file `public/_redirects` with this single line:
   ```
   /* /index.html 200
   ```
   Then re-run `npm run build` (the file is copied to `dist/`).

### Vercel (CLI / Git)
1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Vercel auto-detects Vite — just click **Deploy**.

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
3. In `vite.config.js` add a `base: '/<repo-name>/'` line.
4. Run: `npm run deploy`

### Traditional shared hosting (Hostinger / GoDaddy / cPanel)
1. Run `npm run build`.
2. Upload **everything inside the `dist/` folder** to your `public_html/`.
3. For React Router to work on direct URL hits, add an `.htaccess` file in `public_html/`:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

---

## 🛠️ How to Customize

### Update business info (phone, WhatsApp, GSTIN, address)
Edit **`src/data/business.js`** — all components read from here.

```javascript
export const BUSINESS = {
  phones: ['9171859280', '8518968001', '9425192971'],
  whatsapp: '919171859280',       // country code + number, NO '+'
  gstin: '23CLQPP5043R1ZB',
  email: 'patankarkrishi@gmail.com',
  ...
};
```

### Update any text (English / Hindi)
Open **`src/data/content.js`** — every visible string lives here in `{ en, hi }` pairs. Change once, it updates everywhere.

### Change colors / theme
Open **`tailwind.config.js`** and tweak the `theme.extend.colors` object:

```javascript
colors: {
  primary: { DEFAULT: '#1b5e20', dark: '#0d3811' },
  accent: { DEFAULT: '#f9a825' },
  leaf: '#66bb6a',
  mint: '#e8f5e9',
  ...
}
```

### Add real product / store photos
1. Drop your images into `public/images/`
2. In `src/data/content.js`, replace Unsplash URLs with `/images/your-photo.jpg`

### Change the Google Maps pin
Edit `mapsQuery` in `src/data/business.js` — use your store's coordinates or full address.

---

## 📥 How the Inquiry Form Works

The form on `/contact` is connected to Redux:

1. **Each keystroke** dispatches `updateDraftField` → form state is in `state.inquiry.draft`.
2. **Submit** dispatches `addInquiry({...draft})` which:
   - Adds the inquiry to `state.inquiry.list`
   - Persists the list to `localStorage` (key: `pks_inquiries`)
3. A formatted message is built and **WhatsApp opens** in a new tab with text pre-filled.
4. Owner can view all submitted inquiries via browser DevTools → **Application → Local Storage → `pks_inquiries`**.

### Want to send to email instead?
Connect [Formspree](https://formspree.io) — see `src/components/InquiryForm.jsx`, replace the WhatsApp redirect with a `fetch()` POST to your Formspree URL.

---

## 🧩 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| Vite | 5.4 | Build tool + dev server |
| Tailwind CSS | 3.4 | Utility-first CSS |
| Redux Toolkit | 2.2 | State management |
| React Redux | 9.1 | React bindings for Redux |
| React Router DOM | 6.26 | Client-side routing |
| Lucide React | 0.451 | Icon library |
| PostCSS + Autoprefixer | latest | CSS processing |

---

## 📞 Business Info

- **Name:** Patankar Krishi Seva Kendra
- **Address:** Bijadehi Road, Near PNB Bank, Bhoura, Teh. Shahpur, Dist. Betul (M.P.)
- **Phone:** +91 91718 59280, +91 85189 68001, +91 94251 92971
- **WhatsApp:** +91 91718 59280
- **GSTIN:** 23CLQPP5043R1ZB

---

Made with care for the farmers of Betul region 🌾
