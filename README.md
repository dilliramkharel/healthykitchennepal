# Healthy Kitchen Nepal 🌿

> **"Discover the Healing Power of Traditional Nepali Kitchens."**  
> An organic wellness platform, kitchen detox guide, and culinary blog rooted in Nepalese Himalayan wisdom.

🌐 **Live Website**: [https://healthykitchennepal.vercel.app](https://healthykitchennepal.vercel.app)

---

## 🌟 Features

- **Blazing Fast Performance**: Server-Side Rendered (SSR) with React 19 and TanStack Start.
- **Dynamic WordPress Headless CMS**: Seamless integration with WordPress REST API for articles, recipes, and author media.
- **Graceful Fallbacks**: Intelligent image fallback protection ensuring no broken media thumbnails.
- **Modern UI & Aesthetics**: Built with Tailwind CSS, Radix UI components, smooth micro-interactions, and responsive design.
- **SEO & Social Sharing**: Pre-rendered meta tags, OpenGraph previews, and canonical URLs.
- **Automated CI/CD**: One-click deployments and continuous updates hosted on Vercel Edge.

---

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query)
- **CMS Backend**: Headless WordPress REST API
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Vercel](https://vercel.com/) (Serverless & Global CDN)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dilliramkharel/healthykitchennepal.git
   cd healthykitchennepal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` or `.env.local` file in the root directory:
   ```env
   VITE_WP_API_URL=https://healthykitchennepal.xyz/wp-json/wp/v2
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:8080` in your browser.

---

## 📦 Production Build

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📖 Deployment Guide

For details on connecting to GitHub, configuring Vercel environment variables, and establishing automated continuous updates, refer to [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

---

© 2026 Healthy Kitchen Nepal. All rights reserved.
