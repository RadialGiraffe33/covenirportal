# Covenir Portal

Customer portal for CovenirBPO — built with Next.js 14 (App Router), Auth0, and Tailwind CSS. Deployed on Vercel.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 App Router |
| Auth | Auth0 (`@auth0/nextjs-auth0` v3) |
| Styling | Tailwind CSS |
| Hosting | Vercel |
| Domain | GoDaddy → covenirportal.com |

## Local development

1. **Install Node.js** (v18+): https://nodejs.org

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.local.example .env.local
   # Fill in AUTH0_SECRET, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET
   # Generate secret: openssl rand -hex 32
   ```

4. **Run dev server**
   ```bash
   npm run dev
   # Open http://localhost:3000
   ```

## Auth0 setup checklist

In your Auth0 Dashboard → Applications → your app → Settings:

- **Allowed Callback URLs**: `http://localhost:3000/api/auth/callback, https://www.covenirportal.com/api/auth/callback`
- **Allowed Logout URLs**: `http://localhost:3000, https://www.covenirportal.com`
- **Allowed Web Origins**: `http://localhost:3000, https://www.covenirportal.com`

## Vercel deployment

1. Connect this GitHub repo in the [Vercel dashboard](https://vercel.com/new)
2. Add the five environment variables from `.env.local.example` (set `AUTH0_BASE_URL` to `https://www.covenirportal.com`)
3. Point your GoDaddy DNS to Vercel's nameservers or add the CNAME Vercel provides
4. Every push to `main` auto-deploys

## Brand colors

Colors in `tailwind.config.ts` are approximations — verify exact hex values against `www.covenirbpo.com` (DevTools → Elements → Computed → color properties).
