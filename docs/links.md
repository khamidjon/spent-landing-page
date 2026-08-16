# Spent — the links

Copy-paste table. Every link lands on the live site and carries its
source into App Store Connect. Invent a new `src`/`post` any time —
lowercase `a–z 0–9 _`, up to 24 chars each, no code change needed.

Full mechanics: [marketing-links.md](marketing-links.md).

| Placement | Link | Shows in App Store Connect as |
|---|---|---|
| Instagram — bio link | `https://spent.summerapps.com/?src=ig` | `ig` |
| Instagram — Stories sticker | `https://spent.summerapps.com/?src=ig_story` | `ig_story` |
| Instagram — post / Reel | `https://spent.summerapps.com/?src=ig_post&post=reel_receipt` | `ig_post_reel_receipt` |
| Threads | `https://spent.summerapps.com/?src=threads` | `threads` |
| TikTok — bio link | `https://spent.summerapps.com/?src=tiktok` | `tiktok` |
| TikTok — video | `https://spent.summerapps.com/?src=tiktok&post=ugc_v3` | `tiktok_ugc_v3` |
| YouTube — description | `https://spent.summerapps.com/?src=yt&post=receipt_demo` | `yt_receipt_demo` |
| YouTube — Shorts | `https://spent.summerapps.com/?src=yt_shorts&post=receipt_demo` | `yt_shorts_receipt_demo` |
| Telegram — channel | `https://spent.summerapps.com/?src=tg` | `tg` |
| Creator / UGC | `https://spent.summerapps.com/?src=ugc&post=dilnoza` | `ugc_dilnoza` |
| Email | `https://spent.summerapps.com/?src=email` | `email` |
| QR code / print | `https://spent.summerapps.com/?src=qr` | `qr` |
| Meta traffic ad | `https://spent.summerapps.com/?src=meta_traffic&post=video_a` | `meta_traffic_video_a` |

## Notes

- **Instagram — bio link** — The everyday one. Put this in the profile.
- **Instagram — Stories sticker** — Separates story taps from bio taps.
- **Instagram — post / Reel** — One per creative you want to compare.
- **TikTok — video** — One per video.
- **Creator / UGC** — One per creator, so you can pay on results.
- **QR code / print** — Posters, cards, packaging.
- **Meta traffic ad** — Traffic objective ONLY — never app-install.

## Naming the `post`

The channel is always kept whole; the creative gets whatever room is left of
Apple's 30-character campaign field and is cut back to an underscore. So keep
creative names short and readable — `reel_receipt`, `ugc_dilnoza`, `story_0815`
— and they arrive intact. A long one degrades to a shorter readable prefix
rather than a mangled fragment, but it is better not to rely on that.

## Two rules worth not breaking

1. **App-install ads never point here.** Meta App Install campaigns attribute
   through their own SDK against a direct store link; a landing page in between
   breaks that and makes the ad platform optimise worse. Send those straight to
   `https://apps.apple.com/app/id6790070790`. Traffic-objective ads are fine.
2. **Cloudflare will not split these.** It has no query-string dimension, so
   every link above is one `/` row there. Per-creative numbers come from App
   Store Connect → Analytics → Acquisition → Campaigns.

A campaign row appears there only after **≥24h and ≥5 first-time downloads** —
an empty table before that is expected, not a broken link.
