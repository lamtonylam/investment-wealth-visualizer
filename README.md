# Finnish investment wealth by age group visualized

A visualizer showing median Finnish investment wealth across different age groups, converted into quantities of Jaloviina bottles.

---

## Configuration & Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

### Environment Variable

| Variable | Required | Default | Description |
|---|---|---|---|
| `JALOVIINA_PRICE_URL` | No | `https://alko.tonylam.iki.fi/` | Upstream endpoint returning the live Jaloviina bottle price |

If `JALOVIINA_PRICE_URL` is omitted, the app uses `https://alko.tonylam.iki.fi/`. If unset or set to `none`, it falls back to the hardcoded default price (`20.60 €` in `src/constants/config.ts`).

### Custom Endpoint Requirements

If you want to point to your own custom endpoint:
1. **Response format**: Must return JSON representing the price of **one single bottle** of Jaloviina:
   ```json
   {
     "price": "21.38"
   }
   ```
   *(Accepts strings like `"21.38"` or numbers like `21.38`).*
2. **CORS Not Required for Upstream**: Because the Next.js backend fetches the upstream endpoint server-to-server, your external endpoint does **not** need browser CORS headers.

---

## Scripts

### Development Server
```bash
npm run dev
```
Starts the Next.js dev server at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Creates an optimized production build using Next.js standalone output.

### Production Start
```bash
npm run start
```
Starts the Next.js production server.

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js Core Web Vitals and React rules.