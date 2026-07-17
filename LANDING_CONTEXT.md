# Spent — Landing Page Context Brief

> Drop this file into the landing-page repo. It contains everything needed to
> build a marketing site for **Spent** without access to the app source:
> positioning, copy, brand tokens, pricing, and a recommended page structure.
> All copy and colors are pulled from the shipping app so the site matches it 1:1.

---

## 0. The one-liner

**Spent — log a spend in 3 seconds. Snap it, say it, or type it.**

A fast, AI-first personal expense tracker for iPhone. You capture a purchase
three ways — **photograph the receipt, speak it, or type it** — and the app
fills in the merchant, amount, date, and category for you. The home screen is
one glanceable surface: one big number, one chart, one list. Everything deeper
opens as a clean modal sheet, never a maze of tabs.

**The headline feature:** receipt photo → confirmed transaction in seconds, with
the AI auto-filling every field.

---

## 1. Positioning & audience

- **Category:** personal finance / expense tracking (iOS).
- **Vibe:** minimalist, calm, fast. Monochrome canvas with a single red accent.
  Think "the anti-spreadsheet" — no clutter, no data entry chore.
- **Who it's for:** everyday people who want to know where their money goes
  without the friction of manual bookkeeping apps. Individuals + families
  (there's a Family plan and shared lists).
- **Primary market:** the app's seed data and pricing are in Uzbek so'm
  (Tashkent, Yandex, Korzinka, Havas Supermarket), so the **first market is
  Uzbekistan / Central Asia** — but it's fully **multi-currency and
  multi-language**, so the site can be positioned globally. *Decision for you:
  localize the hero currency + testimonials per market, or lead global.*
- **What sets it apart:** most trackers make you type. Spent leads with
  **capture** — receipt scanning + voice — so logging is effortless.

---

## 2. Core value props (use as feature pillars)

1. **📷 Snap a receipt.** Point your camera — the AI reads the merchant, total,
   date, category, and even line items, and pre-fills the entry. No typing.
2. **🎙️ Just say it.** "Coffee, 45 thousand." Speak naturally; Spent parses it
   into a clean transaction.
3. **⌨️ Or type it.** A fast, type-over-placeholder manual entry for when you
   prefer to tap.
4. **📊 See where it goes.** A one-screen home with a hero total, category bar
   chart, and a day-grouped list. An Insights view adds a category donut with
   period-over-period trends.
5. **🎯 Stay on track.** Per-category budgets with subtle progress meters, plus
   gentle notifications ("a gentle ping at 9 PM," big-spend alerts, weekly
   summary).
6. **🔒 Private & local-first.** Your data lives on your device first and syncs
   privately — usable fully offline, no sign-in wall to get started.

---

## 3. Full feature list (for a features section / comparison table)

**Capture**
- AI receipt scanning (camera or photo library) → auto-filled review sheet with
  line items and an attached receipt thumbnail
- Voice input ("I'm listening…") → parsed into a transaction
- Manual add/edit with description, amount, category, tags, date, repeat

**Understand**
- One-screen home: hero total, category bar chart, day-grouped transactions
- Insights: conic category donut + legend with % share and trend vs last period
- Budgets: per-category caps with progress meters and gentle over-budget nudges

**Organize**
- Categories with emoji avatars; create-your-own with an emoji picker
- Tags (with suggestions) on any transaction
- Multiple lists — e.g. Personal / Family / Business — with a switcher and
  share / edit / new-list actions
- Recurring transactions (repeat rules)

**Money & time**
- Multi-currency with automatic exchange-rate conversion to your base currency
- Precise decimal money (no floating-point rounding drift)
- Period picker: swipeable months + custom date range, each period showing its
  own total
- Search across text, category, tag, amount, date
- Export a period to CSV / PDF

**Platform**
- Full light & dark themes
- Notifications: daily reminder, weekly summary, big-spend alerts
- Local-first storage (works offline) with private cloud sync
- Anonymous start (no account required); optional Sign in with Apple / Google
  links your data across devices later

---

## 4. Brand & design system (match the app exactly)

The app is **monochrome + one red accent**. The UI stays grayscale; color comes
only from the red accent and category emoji. Rounded display type, soft pills,
generous whitespace, flat/matte surfaces, motion-driven polish. Build the
landing page in this same language.

### Color tokens — Light (primary)
| Token | Hex | Use |
|---|---|---|
| bg | `#F7F7F5` | page background (warm off-white) |
| surface | `#FFFFFF` | cards, sheets |
| surface-muted | `#EFEFEE` | chips, pills, field fills |
| ink | `#1C1C1E` | primary text, primary buttons |
| ink-soft | `#6B6B70` | secondary text |
| **accent** | `#E8434B` | **primary CTA, active states, the red FAB** |
| accent-soft | `#FCE8E9` | accent tint backgrounds |
| hairline | `#E6E6E4` | dividers (use sparingly) |
| gradient | `#E8434B → #F58BA0` | highlight strips, hero accents |
| income green | `#22A06B` | positive / income amounts |

### Color tokens — Dark
| Token | Hex |
|---|---|
| bg | `#0E0E10` |
| surface | `#1A1A1D` |
| surface-muted | `#26262A` |
| ink | `#F5F5F4` |
| ink-soft | `#9A9AA0` |
| accent | `#FF5A61` (slightly brighter red) |
| gradient | `#FF5A61 → #F58BA0` |

Ship **both** light and dark; the app has an appearance setting.

### Typography
- **Poppins** (rounded sans), weights 400/500/600/700/800. One typeface for
  everything. (SF Rounded is the in-app fallback; use Poppins on the web.)
- Extreme size/weight contrast: the hero total and headlines are display-sized;
  metadata is small and grey. Slightly tighter tracking on big numbers.

### Shape, spacing, motion
- Everything soft: pill buttons, large-radius cards, ~28px rounded sheet tops.
- Separation via **whitespace and light fills**, not borders.
- **Flat & matte** — minimal glassmorphism. Polish comes from motion: pulsing
  mic ripples, numbers that roll/cross-fade on change, spring transitions,
  chart bars animating in. Consider tasteful scroll-in animations on the site.
- Feedback via soft bottom **toasts**, never harsh error states.

### Logo / name treatment
- Wordmark: **Spent** (Poppins, bold). The red accent is the brand signal — a
  red dot, underline, or the mic/FAB motif works as a mark.

---

## 5. Ready-to-use copy (pulled from the app's real voice)

**Hero headline (pick one):**
- "Log a spend in 3 seconds — snap it, say it, or type it."
- "Snap a receipt. Spent fills in everything."
- "Money tracking that takes seconds, not spreadsheets."

**Hero subhead:**
- "Point your camera, say the amount, or type it — Spent does the rest. See
  where your money goes without the busywork."

**Feature captions (verbatim from the app):**
- Receipt: "Point your camera — no typing, no fuss." / "Reading your receipt…"
  / "Filled in automatically."
- Voice: "Just say the amount out loud." — e.g. "Coffee 45 thousand,"
  "Groceries 210 thousand," "Taxi to the airport 85 thousand."
- Notifications: "Spent only pings when it helps you stay on track." /
  "People who enable reminders log 3× more often."

**Testimonial (from the app's paywall):**
> "I finally know where my money goes — logging takes seconds."
> — **Dilnoza R., Tashkent**

**Primary CTA:** "Try for free for 7 days" · secondary: "Start tracking"
**Reassurance line:** "No payment due today · Cancel anytime."

> ⚠️ **Placeholder to verify before publishing:** the app's paywall shows a
> "40K+ ratings" social-proof badge. Only use real numbers on the live site —
> replace or drop it if not yet accurate.

---

## 6. Pricing (from the in-app paywall)

7-day free trial, then subscription. **Yearly saves ~16%.** Prices are in Uzbek
so'm (localize/convert per market).

| Plan | Yearly | Monthly |
|---|---|---|
| **Single** | 299,000 so'm/yr (≈24,900/mo) | 29,900 so'm/mo |
| **Family** | 449,000 so'm/yr (≈37,400/mo) | 44,900 so'm/mo |

Premium unlocks the full experience (unlimited AI receipt + voice capture,
insights, budgets, export, multiple/shared lists). "No payment due today ·
Cancel anytime."

---

## 7. Recommended landing-page structure

1. **Nav** — Spent wordmark · Features · Pricing · FAQ · "Download" (App Store).
2. **Hero** — headline + subhead, an App Store badge, and an iPhone mockup
   showing the home screen (hero total + chart + list). Red accent CTA.
3. **The 3-second pitch** — three cards: Snap / Say / Type, each with a short
   caption and a screenshot (receipt review, voice ripple, manual add).
4. **How it works** — 3 steps: Capture → AI fills it in → Save. Show the
   receipt-scan → review flow.
5. **Understand your money** — Insights donut + budget meters screenshot.
6. **Feature grid** — the list in §3, iconified.
7. **Private & offline** — local-first, no sign-in wall, your data stays yours.
8. **Testimonial / social proof** — Dilnoza R. quote (+ real ratings once valid).
9. **Pricing** — Single vs Family toggle, Yearly/Monthly switch, 7-day trial CTA.
10. **FAQ** — see §8.
11. **Footer** — App Store link, Privacy (`https://spent.app/privacy`), Terms
    (`https://spent.app/terms`), contact.

**Platform note:** Spent is **iOS-only (iPhone), native SwiftUI**. Use an "App
Store" download badge and iPhone mockups. No Android/web app yet — don't imply
one. (An earlier internal plan mentioned Flutter; that's obsolete — it's native
Swift.)

---

## 8. FAQ seeds

- **Do I have to type everything?** No — snap a receipt or say it out loud; the
  AI fills in the details.
- **Does it work offline?** Yes. Spent is local-first; you can log anywhere and
  it syncs privately when you're online.
- **Do I need an account?** No sign-in wall — start immediately. Optionally sign
  in with Apple or Google to sync across devices.
- **Is my data private?** Your data lives on your device first and syncs to your
  own private account; it's never shared across users.
- **What about different currencies?** Full multi-currency support with automatic
  conversion to your base currency.
- **Can my family share it?** Yes — shared lists and a Family plan.
- **How much does it cost?** Free to try for 7 days, then Single or Family plans
  (see Pricing).

---

## 9. SEO / meta

- **Title:** Spent — AI Expense Tracker for iPhone · Snap, Say, or Type
- **Description:** Log spending in 3 seconds. Snap a receipt, say it, or type
  it — Spent's AI fills in the rest. Private, local-first expense tracking with
  budgets, insights, and multi-currency.
- **Keywords:** expense tracker, receipt scanner app, AI spending tracker,
  budget app iPhone, voice expense logging, personal finance app.
- **Brand color (theme-color / OG accent):** `#E8434B`

---

## 10. Assets to request / produce

- App icon (red-accent mark) — for favicon + OG image.
- Screenshots (light + dark) of: **home** (hero total + bar chart + list),
  **receipt review** sheet, **voice** listening state, **insights** donut,
  **budgets**, **add/edit** sheet. Frame them in iPhone mockups.
- App Store URL — **placeholder until live** (`com.summerapps.spent`).
- OG/Twitter card image using the hero headline on the `#F7F7F5` bg.

---

## 11. Do-not-include / guardrails

- **No secrets.** The site needs none of the app's backend keys — don't add
  Supabase/OpenAI keys, project URLs, or tokens to the landing repo.
- **No false stats.** Replace the "40K+ ratings" placeholder with real numbers
  or omit it.
- **iOS only.** Don't advertise Android or a web app.
- **Match the brand:** monochrome + single red accent, Poppins, flat & soft.
  Resist adding new colors or heavy gradients beyond the defined accent gradient.

---

*Source of truth: the Spent iOS app (native SwiftUI, `com.summerapps.spent`,
v2.1.1). Copy and color tokens above are taken directly from the shipping app.*
