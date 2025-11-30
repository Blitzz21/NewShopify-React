# 📌 Project Progress Report – Custom + Shopify Hybrid System

## ✅ Completed Milestones

### 1. Custom Frontend Foundation
- Built a custom UI using HTML + Tailwind + Vanilla JS.
- Implemented a two-step customizer workflow:
  1. Upload artwork
  2. Choose garment, color, size, quantity
- Added live product mockup preview with artwork overlay.
- Built a dynamic color/size/variant selector.

### 2. Backend REST API (PHP)
- Clean MVC-style structure under `/src`.
- Core Router + Response helpers implemented.
- ShopifyClient service added (Storefront API integration).
- Environment config & autoloading set up.
- Successfully connected to Shopify Storefront API.

### 3. Products API + Frontend Integration
- `/api/products` returns all products + variants from Shopify.
- Frontend displays products fully.
- Variant matching works (color/size → variant ID).
- Estimated price calculation implemented.

### 4. Artwork Upload System
- Created `/api/upload` endpoint:
  - Validates file type & size
  - Stores file in `/public/uploads`
  - Returns secure filename + public URL
- Frontend now uploads artwork instantly after selection.

### 5. Cart + Checkout Integration
- Created `/api/cart/lines` endpoint:
  - Builds Shopify cart
  - Sends variant, quantity, and custom line item properties
  - Includes uploaded artwork info (stored file name + URL)
- Redirects user to Shopify checkout with full customization data.
- Verified successful checkout with correct details in Shopify.

### 6. UI/UX Improvements
- Stepper for “Upload → Customize”
- Clean layout for preview + configuration panel
- Debug panel to validate variant logic
- Fixed color selection behavior

---

## 🟡 Current Status

- Artwork uploads work both locally and backend-side.
- Shopify checkout displays:
  - Product
  - Color
  - Size
  - Quantity
  - Artwork metadata
- Variant matching logic now correct for size + color.
- Codebase stable and ready for next expansion phase.

---

## 🎯 Next Steps (Priority Order)

### 1. Build **MySQL “designs” table**
This will store every personalization job:
- variant ID
- product ID
- quantity
- color, size
- artwork stored filename
- artwork URL
- Shopify cart/checkout IDs
- job status (pending/printing/completed)

### 2. Add **POST /api/designs** endpoint
Triggered after cart creation — logs design into the database.

### 3. Build Internal Admin Dashboard (Production UI)
- List all design jobs
- View artwork + garment info
- Update job status
- Search/filter jobs

### 4. Add optional UI features:
- Artwork scaling/positioning
- Multiple print locations
- Save multiple customizations before checkout

---

## 🚀 Quick Wins Coming Next
- Define SQL schema for `designs`
- Create `DesignController.php`
- Connect checkout → MySQL tracking
- Start admin dashboard (HTML + Tailwind + simple PHP)

---

## 29/11/2025 12:00 PM -> 2:00 PM

### Highlights
- **Dual Experience Ready for A/B Testing**: finalized both public-facing flows (legacy HTML/Tailwind + React/Vite) so we can direct traffic to two distinct funnels for upcoming experiments.
- **Shopify Integration Live End-to-End**: confirmed the PHP API continues to proxy to Shopify for products, uploads, and cart creation after the frontend refactor; PrintBuilder now uses the new base-URL helper so tunnels and future deployments still reach Shopify.
- **Media + UX Refresh**: About hero now streams our official YouTube reel in place of placeholder imagery; layout polish preserved stats/pattern treatments and removed unused assets.
- **Dev Tooling Improvements**: added npm run setup, documented env handling, and whitelisted ngrok/cloudflared hosts so ramp-up + remote demos are frictionless.
- **Reliable Fetching Over Tunnels**: standardized `.env` defaults + Vite `allowedHosts` so API traffic, product fetching, and artwork uploads work whether the app runs locally, via ngrok/cloudflared, or future Vercel deployments.
- **Deployment Ready Builds**: verified `public/npm run build` after each configuration change, keeping the React bundle ship-ready and ensuring Shopify-facing endpoints still pass data integrity checks.
- **Documented Sharing Playbook**: captured ngrok/cloudflared workflow and troubleshooting tips directly in `How-to-run.md`, giving teammates a dependable reference for spinning up demos without cloud hosting.
- **Video Content Alignment**: replaced placeholder About imagery with the official Freckles reel to strengthen credibility across both A/B variants and align marketing collateral in one sprint.
- **Setup Automation**: added an `npm run setup` command that runs Composer + npm installs concurrently, shrinking onboarding time and reducing “missing dependency” issues across the team.
- **Shopify Data Integrity**: revalidated uploads/cart flows against Shopify after the refactor, ensuring custom line-item properties still carry artwork metadata into checkout for production tracking.