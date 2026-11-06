# Phone-to-Ship landing page

Static site, GitHub Pages. The page is driven by `config.js` — that one
file is the whole product record the page shows.

## Updating for a new version

1. Edit `config.js`: `version`, `releaseDate`, `zipBytes`, `zipSha256`,
   `selfTest`, `whatsNew`, and add a `changelog` entry at the top.
2. If the price or a link changed, edit `price`/`priceLabel`,
   `stripePaymentLink`, or `itchUrl` in the same file.
3. Commit and push. GitHub Pages rebuilds on its own.

## Files

- `index.html` — the page. Renders everything from `config.js`.
- `config.js` — single source of truth (see above).
- `success.html` — Stripe post-payment landing page. Direct card
  purchases are fulfilled by email (buyer sends the receipt, the
  download link comes back). itch.io purchases download instantly.
- `LICENSE.md` — the plain-English license, same text as the product
  folder. The next product zip build should bundle it inside the zip.
- `sitemap.xml` — single URL (the landing page), `lastmod` = release
  date. Update `lastmod` on each release.
- `robots.txt` — allows all crawlers, points at the sitemap.
  `success.html` carries `noindex` (post-payment page, not for search).

## Notes

- The product zip is deliberately NOT in this repo: a public repo
  would make the paid file downloadable by anyone. Delivery is via
  itch.io (instant) or email after a Stripe purchase.
- An empty `stripePaymentLink` or `itchUrl` hides that buy button, so
  the page stays correct while a sales channel is still being set up.
