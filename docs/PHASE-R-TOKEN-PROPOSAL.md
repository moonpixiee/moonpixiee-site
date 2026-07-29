# PHASE-R-TOKEN-PROPOSAL.md

**House of Luna — Phase R: Canonical Token Layer Proposal**
Status: **RATIFIED — TOKEN LAYER v1 (Luna, 28 July 2026).** All §8 items closed. Governing declaration: *"Token Layer v1 is hereby ratified. Reserved values remain provisional until assigned. Room-specific hues are governed by their individual visual passes. Rejected and retired values remain preserved in design history. Future additions extend the House; they do not revise its laws without explicit constitutional amendment."* Implementation of the token layer is authorized. Provisional-by-eye at implementation: `--machine-glow #C98A3E`, `--house-black-soft #252031`, `--house-paper-dim #C9C0AE`, `--house-stone-deep #443F37`, `--machine-paper #FBF6EC`. Remaining decisions enumerated in §8. Cross-check complete (docs/PHASE-R-TOKEN-CROSSCHECK.md); **O-4b (light-ground contrast recompute) added.** No implementation until §8 closes.
Standing: tokens precede all visual work (Phase R sequencing). No door, shell, or threshold styling is written except in terms of these tokens once ratified.

---

## 1. Doctrine

**The token architecture mirrors the ratified visual grammar (brief §2.6).** The grammar splits every door into House constants and room variables; the stylesheet does the same:

- **House tokens** (`--house-*`) — the constants: base surfaces, structural neutrals, the House's light, type, spacing, motion. Defined once at `:root`.
- **Room tokens** (`--room-*`) — the variables: signature hue, material accent, glow. Each active room scopes its own values via a `data-room` attribute; components reference only the semantic `--room-*` names and recolor themselves per room.

One token file. No raw hex values anywhere downstream. A component that needs a color it can't name semantically is a signal the token layer is incomplete — extend the layer, don't inline the value.

**The House is light-first (LAW 1, as amended at ratification).** Even its lightest spaces feel warm, dimensional, and inhabited; light always has a source. Evening is an available atmosphere — the threshold may wear it, per R1 — never a global mandate. Wherever darkness appears, it is a material (LAW 2): House Black is Smoke, touchable, with brown and blue hiding inside. *(Supersedes this proposal's original "dark-first" doctrine, which over-extrapolated R1.)*

**Token names are constitutional (F-4 ratified):** `--house-black`, `--house-paper`, `--house-red`, `--house-red-voice`, `--house-brass`, `--house-stone`, `--house-amber` are canonical. Prior names (`--house-night`, `--house-ivory`, `--house-ivory-dim`, …) persist temporarily as compatibility aliases during migration and are removed once no reference survives.

## 2. House core palette (PROPOSED)

| Token | Value | Status | Role |
|---|---|---|---|
| `--house-black` | **`#1A1720`** (Charcoal Velvet) | **RATIFIED** (AL-001, by rendered review) | Darkness as material — evening grounds, threshold atmosphere, dark text on Paper. Alias: `--house-night` |
| `--house-black-soft` | `#252031` | proposed | Raised surfaces on Charcoal Velvet (re-derived from `#1A1720`; eye-check pending) |
| `--house-paper` | **`#EFE7D8`** (Old Page) | **RATIFIED** | The light-first ground and the voice on dark grounds. Alias: `--house-ivory` |
| `--house-paper-dim` | `#C9C0AE` | proposed | Secondary text on dark grounds. Alias: `--house-ivory-dim` |
| `--house-red` | **`#6A2436`** (Garnet) | **RATIFIED** | **Sacred (LAW 3):** invitation, focus, importance, love, transformation. Never decoration. Seals, thresholds, moments |
| `--house-red-voice` | **`#B26578`** | **RATIFIED** | House Red speaking on dark grounds — links, quiet actions. Ratified as a pair with `--house-red` |
| `--house-stone` | `#8A8375` | **RATIFIED** (locked `:root`) | Warm architectural neutral — surrounds, borders, quiet structure |
| `--house-stone-deep` | `#443F37` | proposed | Deep structure, shadow |
| `--house-amber` | `#E3A34A` | **RATIFIED** (locked `:root`) | The House's light (LAW 1) — sourced glow, wayfinding, focus (F-3). Not gold; not palette |
| `--house-brass` | `#A9884F` | **RATIFIED** (locked `:root`) | Gold that whispers (LAW 4) — hairlines, hardware, nameplates. Decorative only |

Notes: amber remains the House's focus light (F-3 ratified) — but **light-first changes the engineering.** The prior O-4 analysis and the amber+ivory dual-ring fix were computed against dark grounds only; on Paper grounds, amber ≈ ground luminance and an ivory halo vanishes entirely. **Focus — RATIFIED (28 Jul): amber INNER, Charcoal Velvet OUTER.** The object receives light first; the shadow contains it — the light-first philosophy in miniature. On dark grounds the velvet melts into the page and amber carries the 3:1; on Old Page the velvet carries it while amber glows at the element edge. One rule, every ground. Keyboard users move a small warm light through the House. **O-4b required at cross-check:** recompute all text and non-text pairs against Paper grounds (Smoke-on-Paper text is trivially strong; red-on-Paper, brass hairlines, and amber signals need numbers).

### 2.1 Text on House Paper — daylight tokens (PROPOSED, unratified — render before ratification per Luna's 28 Jul ruling)

The ratified secondary tokens whisper correctly on Charcoal Velvet but fail as text on Old Page (approx.: stone 2.8:1 · brass 2.5:1 · amber <2:1 · Red Voice 3.3:1 — all under AA body). Rulings encoded:

- **Brass is preserved for short ceremonial labels and hairlines only.** Running or explanatory copy is never raw brass or raw stone on Paper.
- **Voice on Velvet, Garnet on Paper:** on dark grounds House Red speaks as `--house-red-voice`; on Paper grounds it speaks as `--house-red` itself (~9:1). Red Voice is large-text-only on Paper, if used at all.
- **Amber is never text on Paper** (it is light, and daylight outshines it); focus contrast on Paper is carried by the dual-ring's Charcoal Velvet layer.

Proposed daylight text tokens — two candidates each, to be chosen by eye from the rendered board:

| Token | Value | Status | Role on Paper |
|---|---|---|---|
| `--house-stone-text` | **`#5C564B`** (~5.6:1) | **RATIFIED** (Candidate A — aged graphite; the House whispers by becoming quiet, not pale) | Secondary/explanatory copy, Librarian metadata on light grounds |
| `--house-brass-text` | **`#6E5830`** (~5.0:1) | **RATIFIED** (Candidate A — brass touched for years; it engraves instead of decorating) | Architect nameplates and ceremonial small caps at reading sizes on light grounds |

**Machine on Paper — ratified treatment:** the Machine reports on a warm paper-terminal surface (board value `#FBF6EC`, proposed as `--machine-paper`), stone-text body, brass-text confirmations, Narrator-black states — *paper fed through a machine*, never a programmer terminal. Another civilization, resident in the House.

**Design-history rule:** the failing values (raw stone 2.8:1, raw brass 2.5:1, Red Voice 3.3:1 on Paper) remain documented beside their replacements in the boards and in this file, deliberately — so future contributors understand why the daylight tokens exist instead of "fixing" them backward.

Contrast figures are estimates; **O-4b computes them precisely at cross-check** for every pair on both grounds.

## 3. Room scopes (PROPOSED — active rooms only)

Shipped in Phase R CSS. Components consume `--room-hue`, `--room-material`, `--room-glow`.

| Scope | `--room-hue` | `--room-material` | `--room-glow` | Source |
|---|---|---|---|---|
| `[data-room="threshold"]` | `#3A4A5F` slate | `--house-stone` | `--house-amber` | R1: slate Gothic door, amber tracery |
| `[data-room="library"]` | `#7A5A3A` aged oak | `#5C3A28` leather | `--house-amber` (reading light) | Brief 2.2 |
| `[data-room="edit"]` | `#5A1F33` burgundy | `#B08A45` gilt | gilt reflection (material, not emission) | R2 / Brief 2.3 |
| `[data-room="machine"]` | `#131313` matte black | `#3A3F45` machined steel | **Warm filament — RATIFIED (28 Jul):** the House built this machine — old laboratory, vacuum tubes, brass instruments; never IBM-cool, CRT, or sci-fi. Proposed value `#C98A3E`, confirmed by eye at implementation. **Glow doctrine (ratified): the Machine glows because it is working, not because it is decorative.** The glow is feedback, never branding; amber glows are not sprinkled | R6 / Brief 2.5 |
| `[data-room="work"]` | `#241A14` dark lacquer | `--house-brass` | `#E8C687` task light | Brief 2.7 |

**Reserved, NOT shipped in Phase R** (recorded so future doors hang onto an existing hook; values provisional): Moss & Moon — weathered rose `#B06A72`, moss `#5A6B4E`; VELVET//CTRL — Signal Red `#C81E2E` on near-black `#0E0C10` — **F-2 ratified: Signal Red and `--house-red` are separate room-language tokens and must never alias to the same value**; Luna's Room — House Red is now defined (`#6A2436`), and Luna's Room's use of it awaits that room's build milestone. Reserved scopes exist in this document only; no dead CSS ships.

## 4. Typography — The Cast (RATIFIED — Luna, 28 July 2026, under LAW 8 and its corollaries)

Four voices, one House. The as-built site already loads three of the four faces — the cast formalizes them:

| Role | Feeling | Face (proposed) | Usage | Continuity |
|---|---|---|---|---|
| **Narrator** | Literary, warm, timeless, human | **Source Serif 4 — RATIFIED** (EB Garamond not selected House-wide; available later only as a narrowly scoped literary/archival accent, unratified in Phase R) | Body text, introductions, Library copy, Letters, long-form reading. *Receives and guides* | New hire, confirmed |
| **Architect** | Ceremonial, measured | **Cormorant Garamond — RATIFIED** (small caps, tracked) | Room names, inscriptions, eyebrows, navigation accents — the F-1 jurisdiction. *Names* | As-built cut confirmed |
| **Librarian** | Quiet, never competing | **Jost — RATIFIED** | Metadata, timestamps, counts, annotations — sentence case, never caps. *Counts and annotates.* Legibility corollary: minimum weight 400 and 13px floor at small sizes — whispering reduces emphasis, never legibility | As-built |
| **Machine** | Precise; another civilization, not sci-fi | **IBM Plex Mono — RATIFIED** | AI output states, generation UI, technical feedback — a *role*, not a room. *Reports.* House colors, never terminal green | As-built on `/tools` |

**Accents, not typefaces (LAW 8):** rooms modulate the cast through rhythm tokens — `--room-measure`, `--room-leading`, `--room-tracking` — plus a per-room copy grammar (sentence length, hierarchy density). No `font-family` ever changes at a threshold. Italic voice per the ratified LAW 7 corollary: Experience Test, whispers, quotations only.

Prior role notes retained below for the §8.2 decision record:

- **Display** — carries the House's voice on thresholds, door labels at ceremony scale, room headings. Candidate A: **Cormorant** — and O-5 revealed this is *continuity, not novelty*: the as-built site already sets Cormorant Garamond (via Google CDN). Candidate A keeps the House's existing voice and refines its delivery (self-hosted, subset). Candidate B: a sharper transitional serif if Cormorant reads too soft against the Machine Room.
- **Body** — long-form reading in the Library and Letters demands real legibility at mobile sizes: **EB Garamond** (romantic, bookish) or **Source Serif 4** (sturdier at 16px). My recommendation: Source Serif 4 for body, letting display carry the romance — readability is a form of hospitality.
- **Utility / labels** — door nameplates, House Map entries, eyebrows: letter-spaced small caps of the display face (engraved-nameplate energy, per Work With Luna's brief). The as-built utility sans is **Jost** — retain as the UI utility face or replace (§8.2). The as-built `/tools` page also carries **IBM Plex Mono**; an optional Machine Room–scoped mono utility voice fits the machinery and can be kept or dropped with the O-3 ruling.

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

## 7. Cross-check findings (Claude Code, 28 Jul 2026 — full detail in docs/PHASE-R-TOKEN-CROSSCHECK.md)

| # | Finding |
|---|---|
| O-1 | Two style dialects confirmed (June 8-token palette on 5 pages; July's larger sets on index/tools). June's grounds, text, and gold accents map cleanly onto the proposed House tokens. **Unmapped:** all pinks/magentas (June rose `#D4829A`; Machine `#FF00A8`, `#E6007A`, `#F877C8`, `#FFE6F6`, `#A88A9E`) — retired per Constitution §5, destined for House Red or Smoke, **blocked on O-2**; `--system-cyan #27A5D3` (blocked on O-3); `--persian-plum #710C21` (no shipped home; nearest kin is the reserved VELVET red) |
| O-2 | **CLOSED (28 Jul 2026): House Red ratified — Garnet `#6A2436`, with `--house-red-voice #B26578`.** Pink remapping is unblocked in principle. New gate **S-1**: Constitution §5 routes retired pinks to "House Red or Smoke," and House Black is now *named* Smoke — Luna rules whether §5's Smoke = `#19161B` or a separate undefined token, before any pink is remapped. `--persian-plum #710C21` fate also still open |
| O-3 | The as-built Machine Room accent is **cool** (`--system-cyan` + fuchsia family); the proposal's warm filament is a genuine departure. Noting fairly: the cool accent's continuity argument is continuity with a palette the ratified door brief (matte-black Victorian-industrial) already retires — but temperature is Luna's call, not a default. → §8.3 |
| O-4 | AA computed. All §2 text pairs pass body AA; no `-text` variants needed. One non-text failure: amber focus on Library oak (2.87:1 < 3:1) — fix proposed in §2 notes. → §8.5 |
| O-5 | Cormorant, EB Garamond, Source Serif 4 all SIL OFL — self-hostable (verify each OFL.txt at fetch). As-built loads Cormorant Garamond + Jost (+ IBM Plex Mono on `/tools`) from the Google Fonts CDN; self-hosted WOFF2 subsets remove the external dependency per the performance budget. Final subsetting gated on §8.2 |

## 8. Ratification asks — REMAINING (Luna; updated 28 Jul 2026)

**Closed tonight:** Aesthetic Laws + Experience Test ratified (with LAW 1 amendment, LAW 2 clarification) · F-1..F-4 ruled · House Black `#19161B` · House Red `#6A2436` + Voice `#B26578` · House Paper `#EFE7D8` · constitutional token names canonical.

**Still open:**

1. **§8.1 — CLOSED for the core seven** (Luna's locked `:root`, 28 Jul 2026): black, paper, red, red-voice, brass, stone, amber all ratified. Derived surfaces remain proposed pending eye check: `--house-black-soft #252031`, `--house-paper-dim #C9C0AE`, `--house-stone-deep #443F37`.
2. **§8.2 type — CLOSED (28 Jul):** LAW 8 + corollaries ratified; cast ratified (Narrator Source Serif 4 · Architect Cormorant Garamond · Librarian Jost · Machine IBM Plex Mono); role boundary ratified; italic corollary and legibility corollary in force. EB Garamond unratified, reserved as possible future scoped accent.
2b. **Daylight text tokens — CLOSED (28 Jul):** stone-text `#5C564B` and brass-text `#6E5830` ratified from the rendered board; Garnet-on-Paper rule constitutionalized (LAW 3 corollary); Machine paper-terminal treatment ratified.
3. **§8.3 Machine Room glow — CLOSED (28 Jul):** warm filament ratified; value confirmed by eye at implementation.
4. **S-1 — CLOSED.** Smoke retired; §5 companion amendment RATIFIED in Luna's final wording (see PHASE-R-AESTHETIC-LAWS.md): retired colors are never replaced by hue; they are re-tokenized by role. Persian-plum retired under the same rule.
5. **§8.5 — CLOSED:** dual-ring ratified, amber inner / Charcoal Velvet outer. O-4b precise recompute executes at implementation.
6. **§8.6 — CLOSED** by the Stability Declaration: reserved values provisional until assigned; room hues governed by their visual passes.
7. **§3 room-scope hues — CLOSED** by the Stability Declaration: deferred to each door's visual pass, chosen by eye in situ (LAW 5).
