# 🧩 Custom + Shopify Hybrid System Documentation

## 1. Overview
This system blends:
- A **fully custom frontend** (HTML, Tailwind, JS)
- A **custom PHP backend** (REST API)
- **Shopify Storefront API** for checkout

Purpose:
- Allow users to upload artwork
- Customize apparel (color, size, quantity)
- Send a custom-configured product into Shopify checkout
- Store job data for production workflow

---

# 2. Folder Structure

NewShopify/
│
├─ public/
│  ├─ index.php              # Main UI
│  ├─ api.php                # API router entry point
│  ├─ uploads/               # Artwork uploaded storage
│  └─ assets/                # (future) CSS/JS builds
│
├─ src/
│  ├─ Config/config.php      # Shopify + DB config
│  ├─ Core/
│  │   ├─ Router.php         # Minimal router engine
│  │   └─ Response.php       # JSON response helper
│  ├─ Controllers/
│  │   ├─ ProductsController.php
│  │   ├─ CartController.php
│  │   └─ UploadController.php
│  ├─ Services/
│  │   └─ ShopifyClient.php  # Storefront API wrapper
│  └─ Database/
│      └─ connection.php     # (Next step) MySQL connector
│
├─ vendor/                   # Composer autoload
├─ .env                      # Secrets (Shopify API keys)
└─ composer.json

---

# 3. API Endpoints

## GET /api/products
Returns products + variants from Shopify.

### Response:
- id
- title
- description
- variants: [{ id, color, size, price }]

---

## POST /api/upload
Uploads artwork.

### Body:
`multipart/form-data` with `file`

### Response:
{
"success": true,
"fileName": "original.png",
"storedFileName": "original-abc123.png",
"url": "/public/uploads/original-abc123.png"
}

yaml
Copy code

---

## POST /api/cart/lines
Creates a Shopify cart via Storefront API.

### Body:
{
"variantId": "...",
"quantity": 2,
"custom": {
"color": "...",
"size": "...",
"artworkStoredFileName": "...",
"artworkUrl": "...",
"productId": "...",
"productTitle": "..."
}
}

shell
Copy code

### Response:
{
"cartId": "...",
"checkoutUrl": "...",
"totalQty": 2
}

yaml
Copy code

Redirect user to `checkoutUrl`.

---

# 4. Frontend Flow

1. User uploads artwork  
   → local preview  
   → uploaded to backend  
   → stored filename in `state.artworkUpload`

2. User selects a garment  
   → click color, size, quantity  
   → variant automatically matched

3. User clicks “Add customized item”  
   → sends JSON payload  
   → backend creates Shopify cart  
   → user sent to checkout

4. Shopify checkout displays all custom line item properties

---

# 5. Backend Architecture

- Controllers map HTTP requests to logic  
- ShopifyClient sends GraphQL queries  
- UploadController handles file uploads  
- CartController builds Shopify cart with custom properties  
- Future: DesignController logs jobs into MySQL

---

# 6. Next Phase (Database)

We will add:

## Database: designs table

| column | type | info |
|-------|------|------|
| id | INT | PK |
| product_id | VARCHAR | Shopify product ID |
| variant_id | VARCHAR | Shopify variant ID |
| color | VARCHAR | |
| size | VARCHAR | |
| quantity | INT | |
| artwork_file | VARCHAR | backend filename |
| artwork_url | VARCHAR | public path |
| cart_id | VARCHAR | Shopify cart |
| checkout_url | VARCHAR | |
| status | ENUM | pending, printing, completed |
| created_at | TIMESTAMP | |

## API: POST /api/designs

Stores job details.

---

# 7. Admin/Production Dashboard (Upcoming)

- View every design job
- Access artwork URLs
- Filter by status
- Mark job as printing/completed
- Export print sheet
