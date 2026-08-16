# Spent — tracked marketing links

All links land on **https://spent.summerapps.com** and carry their source into
App Store Connect automatically.

Two levels, so channels and individual creatives can both be compared:

| Param | Meaning | Examples |
|---|---|---|
| `src` | **Where** it came from (channel) | `ig`, `ig_story`, `tiktok`, `yt`, `tg`, `threads` |
| `post` | **Which** creative | `reel_receipt`, `story_0815`, `ugc_dilnoza` |
| `ad` | alias for `post` | `video_a`, `carousel_b` |

Both accept lowercase `a–z 0–9 _` up to 24 characters, so **a new link never
needs a code change** — invent one and it works.

```
https://spent.summerapps.com/?src=ig
https://spent.summerapps.com/?src=ig&post=reel_receipt
https://spent.summerapps.com/?src=tiktok&post=ugc_v3
https://spent.summerapps.com/?src=meta_traffic&ad=video_a
```

**Query params only.** A path-based `/go/<src>/<post>` scheme was tried on
CalFit and rejected — don't reintroduce it.

---

## Where each level shows up

| Console | Shows | Per-creative? |
|---|---|---|
| **App Store Connect** → Analytics → Acquisition → Campaigns | impressions, product page views, **installs** per `ct` | Yes — `ig_reel_receipt` |
| **Cloudflare** → Analytics → Web Analytics | page views, country, referrer, device | **No** — see below |

Apple gives exactly one free-form campaign field, so the two levels are packed
into it: the channel is kept whole and the creative takes whatever room is left.

| Link | Apple `ct` |
|---|---|
| `?src=ig` | `ig` |
| `?src=ig&post=reel_receipt` | `ig_reel_receipt` |
| `?src=tiktok&post=ugc_v3` | `tiktok_ugc_v3` |

### ⚠️ Cloudflare Web Analytics will not split these

Its dimensions are Country, Host, **Path**, Referer, Device, Browser, OS, Site,
Bots, Navigation — there is **no query-string dimension**. Every `?src=…` link
is reported as the same `/` row.

That is fine as long as you know it: **use App Store Connect for per-creative
numbers** (installs, which is the metric that matters), and Cloudflare for
totals, countries, referrers and devices.

---

## Apple campaign links — the rules that actually bite

Source: [Apple — Campaign links](https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links/)

- A campaign link needs **BOTH** a provider token and a campaign token:
  `https://apps.apple.com/app/id6790070790?pt=<PROVIDER>&ct=<CAMPAIGN>&mt=8`.
  `ct=` alone is not the documented form.
- **`pt` is not set yet.** Find it in App Store Connect → Analytics →
  Acquisition → Campaign links: generate any link and read `pt=` out of it. It
  is per **account**, not per app — the same token CalFit uses works here. Paste
  it into `appleProviderToken` in the CONFIG block at the top of `index.html`.
- `ct` is capped at **30 characters**. The page truncates at an underscore
  boundary, never mid-token — a mangled fragment opens its own campaign row in
  App Store Connect that never reconciles with anything.
- A campaign row appears only after **≥24h AND ≥5 first-time downloads**. An
  empty Campaigns table below that threshold proves nothing. At Spent's current
  volume expect to see nothing for a while — that is not a bug.
- Attribution window: first-time download within **24h** of using the link.
- **Every store URL carries the tracking, including the app-scheme one**
  (`itms-apps://apps.apple.com/app/id6790070790?pt=…&ct=…&mt=8`). A scheme URL
  without the campaign silently discards attribution while still landing the
  visitor in the right place — that bug shipped on CalFit and was only caught by
  dumping the generated URLs, not by reading the code.

---

## Channels

| Placement | Link |
|---|---|
| Instagram bio | `?src=ig` |
| Instagram Stories / sticker | `?src=ig_story` |
| Instagram post / Reels caption | `?src=ig_post&post=<name>` |
| Threads | `?src=threads` |
| TikTok bio | `?src=tiktok` |
| TikTok video | `?src=tiktok&post=<name>` |
| YouTube description | `?src=yt&post=<video>` |
| YouTube Shorts | `?src=yt_shorts&post=<video>` |
| Telegram channel | `?src=tg` |
| Creator | `?src=ugc&post=<creator>` |
| Founder email drip | `?src=email` |
| QR / print | `?src=qr` |

---

## ⚠️ Do NOT route app-install ads through this page

Meta App Install campaigns attribute installs through their own SDK against a
**direct store link**. A landing page in between adds a hop, breaks that
attribution, and makes the ad platform optimise worse because it can no longer
see conversions.

```
https://apps.apple.com/app/id6790070790
```

**The rule:** blocked or needs persuading → landing page. App-install ads →
direct store link.

---

## What a visitor experiences

| Visitor | Behaviour |
|---|---|
| iPhone, from a social link | Auto-hands off to the App Store, no tap needed |
| iPhone, inside Instagram/TikTok webview | Tries `instagram://extbrowser` (Instagram) or `itms-apps://` (everything else); if blocked, the page stays with the "Tap ••• → Open in browser" helper |
| iPhone, organic (no `src`) | Sees the full page |
| Android | Never redirects — there is no Android app, so the App Store would be a dead end |
| Desktop | Never redirects; sees the full page |

Language: renders instantly from the browser, then refines by country **only**
when the browser reports plain English (many phones in Uzbekistan are set to
English). `UZ` → Uzbek; `RU KZ KG TJ TM BY AM AZ MD GE` → Russian; else English.
A manual pick or `?lang=` always wins, and is remembered in `localStorage`.

## Testing flags

| Flag | Effect |
|---|---|
| `?noredirect=1` | Stay on the page instead of handing off |
| `?lang=en\|ru\|uz` | Force a language |
| `?state=iab` | Preview the in-app-browser helper |
| `?os=ios\|android` | Force the platform branch |
| `?frame=1` | Clamp the page to the 375×560 Instagram viewport |

---

## Social proof — real data only

The ratings and reviews sections are **built but hidden**. They switch on by
themselves once `CONFIG.rating.count` reaches `minRatings` (20) and a language's
`reviews` array reaches `minReviews` (3).

Checked 2026-08-15 — **1 rating (5.0, `uz`; 0 in `us`), no written reviews in
either storefront**, so both sections render nothing today. "5.0 from 1 rating"
signals a brand-new app and converts worse than showing nothing.

Re-check with:

```bash
curl "https://itunes.apple.com/lookup?id=6790070790&country=uz"
```

```bash
curl "https://itunes.apple.com/uz/rss/customerreviews/id=6790070790/sortby=mostrecent/json"
```

Then update `CONFIG.rating` and paste real review text into `STR.<lang>.reviews`
in `index.html`. **Never invent a rating or a review.**

---

## Where things live

| Thing | Location |
|---|---|
| Site source | `khamidjon/spent-landing-page`, `master`, root `index.html` |
| Hosting | Cloudflare Pages project **`spent`** (auto-builds Jekyll on push) |
| Build | `bundle exec jekyll build` → `_site`, no environment variables |
| Deploy | Commit + push to `master` |
| Fallback URL | `https://spent-34m.pages.dev` (always live, even before DNS) |
| Custom domain | `spent.summerapps.com` |
| DNS | Namecheap — CNAME `spent` → `spent-34m.pages.dev` |
| Analytics | Cloudflare dashboard → Analytics → Web analytics → `spent.summerapps.com` (beacon live) |
| Install attribution | App Store Connect → Analytics → Acquisition |
| Edge geo | `functions/api/geo.js` (Cloudflare Pages Function, excluded from `_site`) |

`summerapps.com` stays on Namecheap's nameservers — the Pages custom domain is
wired with a CNAME, exactly like `calfit.summerapps.com`. Do **not** accept
Cloudflare's offer to transfer the zone: that would move DNS for every
`summerapps.com` subdomain, CalFit included.
