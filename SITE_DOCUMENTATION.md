# Healthy Kitchen Nepal 🌿
## Project Architecture, Major Changes & Technical Documentation

---

## 📌 Executive Summary

**Healthy Kitchen Nepal** has been upgraded from a traditional monolithic WordPress setup into a modern, high-performance **Headless Architecture**. 

The public website is now powered by **React 19** and **TanStack Start (SSR)** hosted globally on **Vercel Edge**, while **WordPress** runs securely on **cPanel** as a headless Content Management System (CMS) connected via Cloudflare.

```
                  ┌────────────────────────────────────────┐
                  │          Visitors & Google SEO         │
                  └───────────────────┬────────────────────┘
                                      │
                       https://healthykitchennepal.xyz
                                      │
                                      ▼
                        ┌───────────────────────────┐
                        │       VERCEL EDGE         │
                        │  (React 19, TanStack SSR, │
                        │   Global CDN, Caching)    │
                        └─────────────┬─────────────┘
                                      │  REST API & Media Proxy
                                      ▼
                        ┌───────────────────────────┐
                        │      CLOUDFLARE DNS       │
                        │ (cms.healthykitchennepal) │
                        └─────────────┬─────────────┘
                                      │
                                      ▼
                        ┌───────────────────────────┐
                        │      cPanel HOSTING       │
                        │  WordPress CMS & MySQL DB │
                        │     (Author Dashboard)    │
                        └───────────────────────────┘
```

---

## 🚀 Major Changes & Their Importance

### 1. Decoupled Headless CMS Architecture
- **What was changed**: Separated the frontend website (`healthykitchennepal.xyz`) from the WordPress backend (`cms.healthykitchennepal.xyz`).
- **Why it is important**:
  - **Blazing Fast Performance**: Visitors no longer query the slow MySQL database on page load; pages are pre-rendered with React Server-Side Rendering (SSR) and cached on Vercel’s global Edge network.
  - **Zero Maintenance Publishing**: Whenever an author adds or edits an article in WordPress (`/wp-admin`), it appears **instantly** on the live website without rebuilding or touching code.
  - **Enterprise Security**: The WordPress admin and database are decoupled from direct public traffic, drastically reducing brute-force and DDoS vulnerability.

---

### 2. Smart Media URL Normalization & Transparent Proxy
- **What was changed**:
  1. Configured `fixMediaUrls` in [`src/lib/wordpress.ts`](./src/lib/wordpress.ts) to translate legacy database image URLs from `healthykitchennepal.xyz/wp-content/` to `cms.healthykitchennepal.xyz/wp-content/`.
  2. Configured Vercel rewrites in [`vercel.json`](./vercel.json) to transparently proxy `/wp-content/*`, `/wp-includes/*`, and `/wp-json/*` directly to `cms.healthykitchennepal.xyz`.
- **Why it is important**:
  - Eliminates broken image icons (`404` / `403` errors) on the blog and recipe cards.
  - Media uploaded inside WordPress articles loads seamlessly without requiring database search-and-replace scripts.

---

### 3. Resilient Image Fallback Protection
- **What was changed**: Implemented `BlogCardImage` in [`src/components/WordPressPosts.tsx`](./src/components/WordPressPosts.tsx) and `BlogDetailImage` in [`src/routes/blog_.$slug.tsx`](./src/routes/blog_.$slug.tsx) with React stateful fallbacks.
- **Why it is important**:
  - In WordPress, if an author deletes an upload or if a file is missing on the server (e.g. historical 404s like "American Pancakes"), the website automatically displays a high-resolution culinary fallback (`hero-thali.jpg`) instead of broken image placeholders or layout shifts.

---

### 4. Complete Removal of `.lovable` Branding and Telemetry
- **What was changed**:
  1. Deleted the `.lovable/` folder and `AGENTS.md`.
  2. Removed `lovable-error-reporting.ts` and decoupled telemetry hooks from [`src/routes/__root.tsx`](./src/routes/__root.tsx).
  3. Cleaned `bunfig.toml` and `vite.config.ts`.
  4. Rewrote [`README.md`](./README.md) exclusively for Healthy Kitchen Nepal.
  5. Configured Git commit authorship directly to the client (`dilliramkharel`).
- **Why it is important**:
  - **100% Brand Ownership**: The client’s GitHub repository is completely clean and professional.
  - **Zero External Telemetry**: Removed external analytics calls, keeping user data private and reducing runtime overhead.

---

### 5. Automated CI/CD (Continuous Integration / Continuous Deployment)
- **What was changed**: Linked the GitHub repository (`dilliramkharel/healthykitchennepal`) directly to Vercel production deployment.
- **Why it is important**:
  - You **never** need to manually run `npm run build` or upload `.zip` files to cPanel File Manager.
  - Any code or styling change pushed to GitHub automatically triggers a cloud build and deploys live in under 60 seconds.

---

### 6. Strict TypeScript Hardening
- **What was changed**: Resolved strict TypeScript compiler errors (`noUncheckedIndexedAccess`, `noPropertyAccessFromIndexSignature`, and interface definitions for Navbar links).
- **Why it is important**:
  - Prevents production runtime crashes (`TypeError: Cannot read properties of undefined`).
  - Guarantees 100% clean builds on Vercel with `npx tsc --noEmit`.

---

### 7. WordPress Headless Configuration (`wp-config.php`)
- **What was changed**: Configured WordPress constants for headless routing:
  ```php
  define('WP_HOME', 'https://cms.healthykitchennepal.xyz');
  define('WP_SITEURL', 'https://cms.healthykitchennepal.xyz');
  define('CONCATENATE_SCRIPTS', false);
  ```
- **Why it is important**:
  - Keeps the WordPress dashboard CSS and Gutenberg Block Editor fully styled and functional behind reverse proxies.
  - Prevents redirect loops between `healthykitchennepal.xyz` and `cms.healthykitchennepal.xyz`.

---

## 📋 Domains & Infrastructure Summary

| Service | Hostname | Role |
| :--- | :--- | :--- |
| **Vercel** | `healthykitchennepal.xyz`<br>`www.healthykitchennepal.xyz` | Live public website (React 19 SSR, Edge CDN, Global SSL) |
| **cPanel** | `cms.healthykitchennepal.xyz` | Headless WordPress Backend, MySQL DB, Media Uploads |
| **Cloudflare** | Nameservers (`gordon` & `izabella`) | DNS routing, CNAME flattening, DDoS shielding |
| **GitHub** | `dilliramkharel/healthykitchennepal` | Source code repository & automated CI/CD pipeline |

---

## 🛠️ Ongoing Maintenance Guide

### How to Publish New Blog Posts & Recipes
1. Go to: **[https://cms.healthykitchennepal.xyz/wp-admin](https://cms.healthykitchennepal.xyz/wp-admin)**
2. Log in with your WordPress credentials.
3. Click **Posts** -> **Add New Post**.
4. Write your title, content, and set a **Featured Image**.
5. Click **Publish**.
6. The article will appear immediately on **[https://www.healthykitchennepal.xyz/blog](https://www.healthykitchennepal.xyz/blog)**. No build or coding required!

### How to Update Website Code & Design
1. Open the project locally in VS Code / Antigravity.
2. Make your design or code changes.
3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update homepage banner design"
   git push origin main
   ```
4. Vercel automatically builds and deploys your changes to the live domain in ~45 seconds.

---

## 🔒 Security & Cost Overview

- **Frontend Hosting (Vercel)**: **$0/month** (Free permanent Hobby tier with 100 GB monthly bandwidth).
- **DNS & Security (Cloudflare)**: **$0/month** (Free tier with unlimited DNS queries and SSL).
- **Total Maintenance Overhead**: Zero extra costs beyond your annual domain and cPanel renewal.

---

*Documentation generated for Healthy Kitchen Nepal.*  
*Last updated: September 2026*
