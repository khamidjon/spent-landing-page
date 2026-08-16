# Spent landing site — build task

Hand this file to a fresh session in this repo. It is the CalFit landing-site
playbook (calfit.summerapps.com) adapted to Spent, plus the Apple attribution
facts that were verified the hard way on CalFit — don't re-derive them.

Written 2026-08-15.

---

Build the Spent landing site, modelled on the CalFit one
(calfit.summerapps.com), and set up the same two-level campaign tracking.

Read `LANDING_CONTEXT.md` in this repo first — positioning, copy, brand tokens
and page structure are already written there. App source is
`~/StudioProjects/spent` (native iOS, Xcode, bundle `com.summerapps.spent`);
`~/StudioProjects/gymlog/docs/marketing-links.md` documents the tracking scheme.

## State

- Repo `khamidjon/spent-landing-page` exists but is still the stock Jekyll
  template (3 commits). `index.html` needs replacing with a hand-built
  single-file page.
- Spent IS live: App Store ID **6790070790**, "Spent: AI Expense Tracker",
  v2.1.4, released 2026-07-24. `_config.yml` still has `ios_app_id` and
  `appstore_link` EMPTY — fill them in.
- iOS only. No Android app; `playstore_link` is blank on purpose.
- CNAME is empty — no custom domain. Suggest `spent.summerapps.com` to match
  CalFit; DNS at Namecheap, hosting Cloudflare Pages (free), build
  `bundle exec jekyll build` → `_site`, deploy = commit + push.
- Brand: monochrome canvas with a SINGLE RED ACCENT (not CalFit's strict
  monochrome). Match the shipping app.

## Social proof — verify before building, do not assume

As of 2026-08-15 the iTunes lookup returns **1 rating** (5.0, `uz` storefront;
0 in `us`) and the customer-reviews RSS is **empty** in both storefronts.
Re-check both before you build:

```bash
curl "https://itunes.apple.com/lookup?id=6790070790&country=uz"
```

```bash
curl "https://itunes.apple.com/uz/rss/customerreviews/id=6790070790/sortby=mostrecent/json"
```

If it is still ~1 rating and no reviews: build **NO** ratings section and **NO**
reviews section. "5.0 from 1 rating" signals a brand-new app and converts worse
than omitting it. Gate both behind config with a threshold (e.g. show ratings at
≥20, reviews at ≥3 real ones) so they switch on by themselves later.

**NEVER invent reviews or ratings — real iTunes data only.**

Without review social proof, lead with the product: receipt-scan demo and
screenshots from `~/StudioProjects/spent/screenshots`.

## Tasks

1. Replace `index.html` with a single self-contained page: hero → screenshots →
   features → CTA → footer. Copy from `LANDING_CONTEXT.md`.
2. Instagram/webview break-out: `instagram://extbrowser?url=<encoded>` is the one
   reliable escape from Meta's in-app browser. Detect Instagram, TikTok, Meta,
   Telegram, WhatsApp, Snapchat, Line, Google app. Inside a webview attempt ONLY
   the break-out scheme — never a plain https navigation, which loads the store
   page trapped in that same webview. Desktop never redirects.
3. Two-level tracking, QUERY PARAMS ONLY: `?src=` channel, `?post=` (alias
   `?ad=`) creative, both `[a-z0-9_]{1,24}`. Do NOT use path-based links like
   `/go/<src>/<post>` — tried on CalFit and rejected.
4. Edge geo language via a Cloudflare Pages function reading `request.cf.country`
   (no third-party API). Render instantly from `navigator.language`, refine only
   when the browser says plain English, never override `?lang=` or a stored
   manual pick, cache 7d, fail open. Keep `functions` in Jekyll's `exclude:`.
   NOTE: the App Store listing is EN-only while `LANDING_CONTEXT.md` says the
   first market is Uzbekistan. Ask whether the page should be EN/RU/UZ like
   CalFit or EN-only to match the listing — don't assume.
5. Cloudflare Web Analytics beacon + a real 404 page.
6. Write `docs/marketing-links.md` for Spent with the per-channel bio links.

## Apple facts already verified — do not re-derive, do not contradict

Source: [Apple — Campaign links](https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links/)

- A campaign link needs **BOTH** a provider token and a campaign token:
  `https://apps.apple.com/app/id6790070790?pt=<PROVIDER>&ct=<CAMPAIGN>&mt=8`
  `ct=` alone is not the documented form. Wire `pt` in from config on day one.
  The provider token is per **ACCOUNT**, not per app — the same `pt` used for
  CalFit works here. Get it from App Store Connect → Analytics → Acquisition →
  Campaign links: generate any link and read `pt=` out of it.
- `ct` is capped at **30 characters** (alphanumeric, spaces, punctuation incl.
  `_`). Truncate at an underscore boundary, never mid-token — a mangled fragment
  opens its own campaign row that never reconciles.
- A campaign row appears only after **≥24h AND ≥5 first-time downloads**. An
  empty Campaigns table below that threshold proves nothing. At Spent's current
  volume expect to see nothing for a while — that is not a bug.
- Attribution window: first-time download within **24h** of using the link.
- **EVERY store URL must carry the tracking, including the app-scheme ones**
  (`itms-apps://apps.apple.com/app/id6790070790?pt=&ct=&mt=8`). A scheme URL
  without the campaign silently discards attribution while still landing the
  visitor in the right place — that bug shipped on CalFit and was only caught by
  dumping the actual generated URLs in a browser, not by reading the code.

## Constraints

- iOS only. No Play badge, no Play referrer, no `intent://`, no `market://`.
- The conversion stack (brand → headline → App Store badge → in-app-browser
  helper) must be visible without scrolling at **375×560**, the Instagram in-app
  viewport.
- Never display UI bitmaps above their native point size — 2x captures cap at
  half their pixel width in CSS px.
- Do NOT route app-install ad campaigns through this page; those need direct
  store links or the ad platform's SDK attribution breaks.
- Cloudflare Web Analytics has **no query-string dimension**, so every `?src=`
  link collapses into one `/` row. Per-creative numbers come from App Store
  Connect. Don't solve this with paths.
- Verify with real screenshots and live curl checks, not DOM inspection alone.
  Don't report something as working before the check comes back.
