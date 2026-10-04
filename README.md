# Abid Fragrance

Full-stack React perfume storefront with the existing Abid Fragrance layout preserved.

## Stack

- Express API
- MongoDB with Mongoose
- React and Vite frontend with reusable components
- Existing responsive storefront UI and styling
- REST endpoints for products, contact messages, orders, and health checks

## Run locally

1. Install Node.js 18+ and MongoDB.
2. Copy `.env.example` to `.env` and update `MONGODB_URI` if needed.
3. Install dependencies:

```bash
npm install
```

4. Seed the supplied perfume catalog:

```bash
npm run seed
```

5. Start the app in development:

```bash
npm run dev
```

Open `http://localhost:5000`.

The React development server runs at `http://localhost:5173` and proxies API requests to Express at port 5000. For a production bundle, run `npm run build` and then `npm start`; Express will serve the generated `dist` folder.

## API

- `GET /api/health`
- `GET /api/products`
- `GET /api/products/:slug`
- `POST /api/contact`
- `POST /api/orders`
- `GET /api/orders/:id`

The frontend uses the built-in catalog when the product API is unavailable, so the storefront remains usable while the database is offline.
