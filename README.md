# Zalseef Estates - Land Dealers in Mbarara, Uganda

A modern, responsive real estate website for Zalseef Estates, specializing in prime land sales in Mbarara and Western Uganda.

## 🏆 Features

### Core Functionality
- **Land Listings**: Browse available plots with detailed information
- **Advanced Search**: Filter by location, price range, and land type
- **Property Details**: View comprehensive information about each plot
- **Contact Forms**: Easy inquiry system for potential buyers
- **Mobile Responsive**: Fully optimized for all devices

### 🎨 New Features Added
- **Photo Gallery**: Browse all available land images in a beautiful grid layout with lightbox view
- **Animated Counters**: Statistics that count up on page load
- **Why Choose Us**: Highlighting key benefits with icons

### 🎯 Land Categories
- **Residential Plots** - From 2.3M in prime locations
- **Commercial Plots** - High-traffic areas for business
- **Agricultural Land** - Fertile farmland for farming
- **Executive Plots** - Premium locations for luxury homes

### 📍 Locations Covered
- Kakoba
- Nyamitanga
- Nyarubungo
- Igyereka
- Rwebikona
- Biharwe
- Kenshunga
- And many more across Mbarara district

## 🛠️ Tech Stack

- **React** - Frontend library
- **React Router** - Navigation and routing
- **Chakra UI** - Component library and styling
- **Emotion** - CSS-in-JS styling
- **React Icons** - Icon library
- **Vite** - Build tool and development server

## Supabase Setup

1. Copy `.env.example` to `.env` and add your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
2. Open the Supabase SQL Editor and run [supabase/schema.sql](supabase/schema.sql) to create the tables, storage bucket, policies, and seed listings.
3. In Supabase Auth, create the admin user you want to use for `/zalseef-admin-2026`.
4. Restart the app with `npm run dev`.

The frontend now expects these Supabase resources:

- `land_listings` for all property records
- `contact_inquiries` for public inquiries
- `seller_leads` for “list your land” submissions
- `land-images` storage bucket for admin uploads

## Domain Hosting

This app does not need a traditional server. The frontend is static, and Supabase handles the backend.

### Recommended Setup: Vercel + Namecheap

This repo is prepared for that path:

- Vite builds with `npm run build`
- [vercel.json](vercel.json) rewrites all SPA routes to `index.html`
- Supabase stays as the backend, so Vercel only serves the frontend

### Vercel Setup

1. Push this project to GitHub
2. Log in to Vercel
3. Click `Add New -> Project`
4. Import this GitHub repository
5. Keep the default framework detection for Vite
6. Add these environment variables in Vercel:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_SUPABASE_STORAGE_BUCKET`
7. Deploy the project

### Connect `zalseefestates.com`

After the first Vercel deploy:

1. Open your Vercel project
2. Go to `Settings -> Domains`
3. Add:
   - `zalseefestates.com`
   - `www.zalseefestates.com`
4. Vercel will show the exact DNS records required

### Namecheap DNS

If you keep DNS on Namecheap, open `Domain List -> Manage -> Advanced DNS` and add the records Vercel shows. Vercel's official docs show these common defaults for external DNS providers:

- `A` record, host `@`, value `76.76.21.21`
- `CNAME` record, host `www`, value `cname.vercel-dns-0.com`

Use the exact values from your Vercel domain screen if they differ.

### SSL

Vercel automatically provisions HTTPS after the domain verifies.

