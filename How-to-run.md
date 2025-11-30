## Development Setup

The project has two parts:

- **Backend (PHP)** located at the repo root and `src/`
- **Frontend (Vite + React)** located under `public/`

### 1. Install Dependencies

Run everything in one shot from the project root:

```bash
npm run setup
```

Under the hood this script runs `composer install` and `cd public && npm install` concurrently, so both the PHP API and the Vite frontend get their dependencies with a single command.

### 2. Start Both Servers with One Command

From the repository root run:

```bash
npm run dev
```

This uses `concurrently` to launch:

1. `npm run tailwind:dev` -> Tailwind 4 CLI watch (generates `public/index.css`)
2. `php -S 127.0.0.1:8000 -t public` -> serves the API (`public/api.php`)
3. `cd public && npm run dev` -> starts the Vite dev server (default http://localhost:3000)

The React app proxies `/api.php/*` calls to the PHP server, so once both processes are up the print builder can load products, upload artwork, and create carts.

### 3. Environment Variables

- Copy `.env` into `.env.local` (git ignored) as needed for backend secrets.
- For the frontend, create `public/.env.local` with:

  ```bash
  GEMINI_API_KEY=PLACEHOLDER_API_KEY
  VITE_API_BASE_URL=/api.php
  ```

  Using `/api.php` keeps the API requests relative to the current origin, which means Vite's proxy (and any dev tunnel like ngrok/cloudflared) will forward calls back to the PHP server automatically. When deploying the Vite app (for example on Vercel) update `VITE_API_BASE_URL` to the fully qualified URL where your PHP API is hosted so product fetches keep working.

### 4. Stopping

Press `Ctrl+C` once to stop both processes together.
