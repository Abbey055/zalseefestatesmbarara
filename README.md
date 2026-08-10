# Zalseef Estates

React/Vite frontend for Zalseef Estates. The original styling and assets are preserved while the pages are rendered through React routes.

## Run locally

From `muk`:

```powershell
npm install --prefix zalsee-estates
npm run dev
```

Open http://localhost:5173/.

## Build

```powershell
npm run build
```

## Routes

`/`, `/about`, `/properties`, `/property-details`, `/agents`, `/blog`, `/payment`, and `/contact` are the React routes. Old `.html` URLs are redirected to their clean route equivalents.

## Notes

Property cards and blog plots open the React property-details route with the selected listing data. The contact page includes the lazy Google Maps office embed for St Paul Shopping Mall, Mbarara.
