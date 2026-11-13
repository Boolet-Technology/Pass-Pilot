# Vercel deployment

The Pass Pilot Next.js app lives at the **repository root** (`app/`, `next.config.mjs` and `package.json` are top level).

## Required project setting

In [Vercel](https://vercel.com) → your project → **Settings** → **General** → **Root Directory**, leave it empty (`./`). If it was previously set to a subfolder, clear it, save and **Redeploy**, otherwise every URL returns **404 NOT_FOUND**.

## Build settings

| Setting | Value |
|--------|--------|
| Framework Preset | Next.js |
| Build Command | `npm run build` (default) |
| Output Directory | *(leave default, do not set `.next` manually)* |
| Install Command | `npm install` (default) |

## Environment variables

Set in Vercel → **Settings** → **Environment Variables** (same names as `.env.local` at the repository root).
