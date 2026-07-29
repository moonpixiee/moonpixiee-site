# ROUTE-MAP.md

House of Luna — canonical route map
**Verified against production (housesofluna.com) — 28 July 2026**, post Phase-P cutover (deploy `6a688ca2`).
Canonical route reference for `PHASE-R-DOOR-BRIEFS.md` and `PHASE-R-CONCEPT-BRIEF.md`.

The version-controlled source of truth for what routes exist **now** vs. what is ratified for **later**. No route string here is inferred; every "resolves / does not resolve" verdict was checked live.

---

## 1. Live routes — as-built (Phase P)

Seven pages from `src/pages/*.html`. All: `/<route>` → 200 (no-slash canonical), `/<route>/` → 301 → `/<route>`, `/<route>.html` → 200. No redirects in `netlify.toml`.

| Live route | Source file | Verified | Phase R door (if any) |
|---|---|---|---|
| `/` | `index.html` | 200 | front door / Hall entry (becomes the House Map, §9 — not yet built) |
| `/library` | `library.html` | 200 | **Library** — launch door |
| `/edit` | `edit.html` | 200 | **The Edit** — launch door |
| `/becoming` | `becoming.html` | 200 | — content page; **NOT** Luna's Room; folds to `/library/becoming` at M5 |
| `/letters` | `letters.html` | 200 | — content page; **NOT** Luna's Room; folds to `/library/letters` at M5 |
| `/tools` | `tools.html` | 200 | **Machine Room** — launch door (label-only; route stays `/tools`) |
| `/work` | `work.html` | 200 | **Work With Luna** — launch door (secondary standalone) |

---

## 2. Phase R Hall roster (per `PHASE-R-DOOR-BRIEFS.md`, AM-R-002)

**Four launch doors — routes frozen from repo, verified 28 Jul 2026:**

| Door | Frozen route | Verified |
|---|---|---|
| Library | `/library` | 200 |
| The Edit | `/edit` | 200 |
| Machine Room | `/tools` | 200 |
| Work With Luna | `/work` | 200 |

**Three deferred doors — ratified briefs on file, NO route.** Each enters the Hall as a House event when its room is built and published: **Luna's Room · Moss & Moon · VELVET//CTRL.**

---

## 3. The five ratified distinctions — future targets explicitly NON-RESOLVING

Do **not** ship a door label pointing at any of these. Each verified non-resolving on production, 28 Jul 2026.

| # | Distinction | The non-resolving target | Verdict |
|---|---|---|---|
| 1 | Machine Room ≠ `/machine-room` | `/machine-room` | **404** — door stays at `/tools`; the M3 rename is not live and must not be targeted |
| 2 | Work With Luna ≠ `/work-with-luna` | `/work-with-luna` | **404** — door stays at `/work`; the M3 rename is not live and must not be targeted |
| 3 | Luna's Room has no route | *(unbuilt; `/becoming` and `/letters` are ratified as **NOT** Luna's Room)* | **no route** — deferred; House event when built |
| 4 | Moss & Moon has no route | *(unbuilt; no substitute route)* | **no route** — deferred; House event when built |
| 5 | VELVET//CTRL has no route | *(the "Velvet//Ctrl Presents" eyebrow on `/tools` is **not** a destination)* | **no route** — deferred; House event when built |

---

## 4. Other ratified future routes (also non-resolving today — verified 404)

Not door distinctions; recorded for completeness so no session targets them early: `/library/becoming` and `/library/letters` (M5 Library folding), `/house-map` (§9 front door), `/lunas-room`. All 404 today.

---

## 5. Authority

Route facts here are repo- and production-verified and **govern the route cells** of the Phase R briefs. Door design — moods, grammar, leaks, launch roster — is authored in `PHASE-R-DOOR-BRIEFS.md` / `PHASE-R-CONCEPT-BRIEF.md`. Where the two touch — route strings — **this file governs.**
