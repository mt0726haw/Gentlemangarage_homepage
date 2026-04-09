# Gentleman's Garage — AI & Classic Cars

A luxury static website for a classic car restoration & wine tour business.

## Quick Start

Open `index.html` in a browser — no build step needed.

## Deploy on GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:YOUR_USER/gentlemans-garage.git
git push -u origin main
```

Then go to **Settings → Pages → Source: main branch** → Save.

## Structure

```
├── index.html          # Homepage (two hero sections)
├── css/style.css       # All styles
├── js/main.js          # Slider, scroll effects, booking toggle
├── images/             # Place your images here (see below)
└── pages/
    ├── about.html
    ├── services.html
    ├── gallery.html
    ├── contact.html
    └── booking.html    # Access-gated booking page
```

## Adding Images

Drop your images into the `images/` folder:

| File | Used in |
|------|---------|
| `hero-garage.jpg` | Hero slide 1 (garage/classic car) |
| `hero-vineyard.jpg` | Hero slide 2 + vineyard section |
| `hero-3.jpg` | Hero slide 3 (optional) |
| `gallery-1.jpg` … `gallery-4.jpg` | Homepage gallery teaser |

### Swapping Hero Backgrounds

Edit `index.html` — find the `.hero-slides` div and change the `background-image` URLs. Add or remove `<div class="hero-slide">` elements and matching `.indicator` buttons.

## Booking Page Activation

The booking page (`pages/booking.html`) is **access-gated** by default.

### Unlock methods:

1. **URL parameter:** `booking.html?key=gentleman2026`
2. **localStorage:** `localStorage.setItem('gg_booking_key', 'gentleman2026')`
3. **Manual input** on the page itself

### Change the access key:

Edit `VALID_KEY` in `pages/booking.html`:
```js
const VALID_KEY = 'gentleman2026'; // change this
```

### Homepage booking teaser:

Add `?booking=on` to the homepage URL or run:
```js
localStorage.setItem('gg_booking_enabled', 'true');
```

## Customization

- **Colors:** Edit CSS variables at the top of `css/style.css`
- **Fonts:** Change Google Fonts imports in each HTML `<head>`
- **Content:** Edit HTML directly — no CMS needed
- **Form backend:** Connect forms to Formspree, Netlify Forms, or your own endpoint

## License

All rights reserved — Gentleman's Garage.
