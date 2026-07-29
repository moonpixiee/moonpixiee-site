# PHASE-R-TOKEN-PROPOSAL.md

**House of Luna — Phase R: Canonical Token Layer Proposal**
Status: DRAFT — pending (1) Luna's ratification of values and type direction, (2) Claude Code's cross-check against the as-built inline styles (Design System Audit inventory).
Standing: tokens precede all visual work (Phase R sequencing). No door, shell, or threshold styling is written except in terms of these tokens once ratified.

---

## 1. Doctrine

**The token architecture mirrors the ratified visual grammar (brief §2.6).** The grammar splits every door into House constants and room variables; the stylesheet does the same:

- **House tokens** (`--house-*`) — the constants: base surfaces, structural neutrals, the House's light, type, spacing, motion. Defined once at `:root`.
- **Room tokens** (`--room-*`) — the variables: signature hue, material accent, glow. Each active room scopes its own values via a `data-room` attribute; components reference only the semantic `--room-*` names and recolor themselves per room.

One token file. No raw hex values anywhere downstream. A component that needs a color it can't name semantically is a signal the token layer is incomplete — extend the layer, don't inline the value.

The House is **dark-first**: night is the ground, ivory is the voice, amber is the light within. This follows R1 — the threshold's promise is warm light seen from outside the dark.

## 2. House core palette (PROPOSED)

| Token | Value | Role | Text-safe on |
|---|---|---|---|
| `--house-night` | `#12151C` | Primary ground — threshold dark, Hall dark | — |
| `--house-night-soft` | `#1C212B` | Raised surfaces on night | — |
| `--house-ivory` | `#EFE7D8` | Primary text and light voice | night, night-soft, stone-deep |
| `--house-ivory-dim` | `#C9C0AE` | Secondary text | night, night-soft |
| `--house-stone` | `#8A8375` | Architectural surrounds, borders, quiet structure | decorative only |
| `--house-stone-deep` | `#443F37` | Deep structure, threshold shadow | — |
| `--house-amber` | `#E3A34A` | The House's light — tracery glow, focus states, warm signals | night, night-soft (AA to verify) |
| `--house-brass` | `#A9884F` | Hardware, hairlines, nameplates | decorative only; not body text |

Notes: amber doubles as the keyboard **focus-visible** color House-wide — the House's light literally shows you where you are. Contrast pairs marked "AA to verify" get checked in cross-check; any failing pair gets a `-text` variant tuned to pass rather than a silent exception.

## 3. Room scopes (PROPOSED — active rooms only)

Shipped in Phase R CSS. Components consume `--room-hue`, `--room-material`, `--room-glow`.

| Scope | `--room-hue` | `--room-material` | `--room-glow` | Source |
|---|---|---|---|---|
| `[data-room="threshold"]` | `#3A4A5F` slate | `--house-stone` | `--house-amber` | R1: slate Gothic door, amber tracery |
| `[data-room="library"]` | `#7A5A3A` aged oak | `#5C3A28` leather | `--house-amber` (reading light) | Brief 2.2 |
| `[data-room="edit"]` | `#5A1F33` burgundy | `#B08A45` gilt | gilt reflection (material, not emission) | R2 / Brief 2.3 |
| `[data-room="machine"]` | `#131313` matte black | `#3A3F45` machined steel | `#C98A3E` filament glow — **see open item O-3** | R6 / Brief 2.5 |
| `[data-room="work"]` | `#241A14` dark lacquer | `--house-brass` | `#E8C687` task light | Brief 2.7 |

**Reserved, NOT shipped in Phase R** (recorded so future doors hang onto an existing hook; values provisional): Moss & Moon — weathered rose `#B06A72`, moss `#5A6B4E`; VELVET//CTRL — signal red `#C81E2E` on near-black `#0E0C10`; Luna's Room — pending **House Red confirmation (O-2)**. Reserved scopes exist in this document only; no dead CSS ships.

## 4. Typography (PROPOSED — Luna picks direction)

Three roles per the ratified label/mood requirements:

- **Display** — carries the House's voice on thresholds, door labels at ceremony scale, room headings. Candidate A: **Cormorant** (gothic-romantic elegance, fine at large sizes, free/self-hostable). Candidate B: a sharper transitional serif if Cormorant reads too soft against the Machine Room.
- **Body** — long-form reading in the Library and Letters demands real legibility at mobile sizes: **EB Garamond** (romantic, bookish) or **Source Serif 4** (sturdier at 16px). My recommendation: Source Serif 4 for body, letting display carry the romance — readability is a form of hospitality.
- **Utility / labels** — door nameplates, House Map entries, eyebrows: letter-spaced small caps of the display face (engraved-nameplate energy, per Work With Luna's brief), system sans fallback for pure UI.

All self-hosted WOFF2, subset, `font-display: swap` — per performance budget. No third-party font CDN (no new external dependency; also faster).

**Type scale (mobile-first):** base `17px/1.6`; scale ratio 1.25; steps `--text-sm` 14, `--text-base` 17, `--text-lg` 21, `--text-xl` 27, `--text-2xl` 34, `--text-display` 42 (mobile) / 56 (desktop). Door labels: `--text-lg` small caps, tracked `0.08em`.

## 5. Space, breakpoints, layers (PROPOSED)

- **Spacing:** 4px base — `--space-1` 4 · `-2` 8 · `-3` 12 · `-4` 16 · `-6` 24 · `-8` 32 · `-12` 48 · `-16` 64 · `-24` 96. Ceremony (threshold, Hall) uses the top of the scale; in-room chrome uses the bottom — the ceremony/function split expressed in whitespace.
- **Breakpoints:** design floor 380px; `--bp-hall` 640 (procession → spaced composition); `--bp-wide` 900; `--bp-max` 1200. Mobile is the default styling, wider viewports are the override — never the reverse.
- **Z-layers:** `--z-room` 0 · `--z-hall-atmosphere` 10 · `--z-doors` 20 · `--z-house-map` 100 · `--z-threshold` 200. Doors always above atmosphere: decoration can never block navigation (acceptance criterion 9), enforced structurally.

## 6. Motion (PROPOSED)

- `--motion-door: 400ms` (ratified 300–500ms window, single canonical value)
- `--motion-quiet: 180ms` (in-room chrome, House Map — functional layer moves faster than ceremony)
- `--ease-door: cubic-bezier(0.22, 1, 0.36, 1)` (decisive open, soft settle)
- `@media (prefers-reduced-motion: reduce)`: both motion tokens drop to `0ms`; state changes express as opacity/visibility only. The reduced-motion experience is complete, not diminished — same states, same information, no movement.

## 7. Open items for cross-check (Claude Code)

| # | Item |
|---|---|
| O-1 | Inventory the diverged June/July inline styles; map every existing color/size to its replacing token; flag anything with no home |
| O-2 | Confirm **House Red** — named as a ratified palette direction; locate its value in constitution/brand assets or flag for Luna to define |
| O-3 | Machine Room glow: warm filament (proposed — keeps the Machine inside the House's amber light-world, per Victorian-industrial ruling) vs. cool electric — Luna ratifies |
| O-4 | WCAG AA contrast verification for every text-safe pair in §2–3; add `-text` variants where needed |
| O-5 | Font licensing + self-host subsetting for the ratified type direction |

## 8. Ratification asks (Luna)

1. Palette values §2–3 (or corrections)
2. Type direction §4: display candidate, body recommendation accept/override
3. O-3 glow ruling
4. Confirmation that reserved room values are provisional, not ratified, until each room's build milestone
