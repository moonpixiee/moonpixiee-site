# PHASE-R-TOKEN-CROSSCHECK.md

**House of Luna — Phase R: Token Cross-Check (Claude Code)**
Status: **FINDINGS** — answers the §7 open items (O-1–O-5) of `PHASE-R-TOKEN-PROPOSAL.md` against the as-built inline styles. Feeds Luna's §8 ratification. **No token layer is implemented.**
Verified against `src/pages/*.html` (repo) + production, 28 July 2026.

---

## O-1 · Divergence inventory + token mapping

Two dialects confirmed. The **June base** (8 named tokens) is shared by all five June pages *and* `index.html`. The **Machine Room** (`tools.html`) carries its own separate 10-token palette.

**June base → proposed House tokens:**

| Current | Value | → proposed |
|---|---|---|
| `--black` | `#0a0806` | `--house-night` |
| `--ink` | `#1a1410` | `--house-night-soft` / `--house-stone-deep` |
| `--dust` | `#2e2520` | `--house-night-soft` (raised surface) |
| `--parchment` | `#f0ebe3` | `--house-ivory` |
| `--cream` | `#faf7f2` | `--house-ivory` (brightest) |
| `--muted` | `#8a7a70` | `--house-ivory-dim` / `--house-stone` |
| `--gold` | `#c9a96e` | `--house-brass` / `--house-amber` |
| `--rose` | `#D4829A` | **RETIRED (§5) → no home until O-2** |

**Machine Room (`tools.html`) → proposed:**

| Current | Value | → proposed |
|---|---|---|
| `--obsidian` `--black-plum` `--velvet-wine` | `#0F090F` `#1B0D18` `#2B1222` | `--house-night` / machine matte `#131313` / `--house-stone-deep` |
| `--persian-plum` | `#710C21` | dark structural red — **no shipped token** (VELVET red reserved, not shipped) |
| `--mauve-smoke` | `#A88A9E` | `--house-ivory-dim` / `--house-stone` (pink-adjacent) |
| `--silk-glow` | `#FFE6F6` | **RETIRED pink → no home (O-2)** |
| `--digital-bloom` `--hyper-fuchsia` `--orchid-veil` | `#FF00A8` `#E6007A` `#F877C8` | **RETIRED pink/magenta → no home (O-2)** |
| `--system-cyan` | `#27A5D3` | Machine glow — **depends on O-3** |

**Colors with no home (blockers):**
1. **Six retired pinks/magentas** (`#D4829A`, `#FF00A8`, `#E6007A`, `#F877C8`, `#FFE6F6`, plus mauve `#A88A9E`) — retired per §5; destination is House Red or Smoke, **but House Red has no value (O-2)**. The largest blocker.
2. `--system-cyan #27A5D3` — the Machine Room's as-built electric accent; no home in the proposed warm palette. Resolves with **O-3**.
3. `--persian-plum #710C21` — dark blood-red; no shipped token.

## O-2 · House Red — UNDEFINED (confirmed)

No hex value anywhere in repo or docs. Constitution §5 names House Red but explicitly defers to contrast testing (Q2). **It gates all O-1 pink remapping and is also Luna's Room's reserved hue.** → Luna defines (§8 keystone).

## O-3 · Machine Room glow — as-built is COOL

Current accent: `--system-cyan #27A5D3` (electric) plus fuchsia. Proposal: warm filament `#C98A3E`. A genuine departure from the as-built Machine Room. → Luna ratifies (§8.3). No default taken.

## O-4 · WCAG AA — computed; one real failure

All §2 House text pairs pass AA body comfortably (ivory/night **14.87:1**, ivory-dim/night **10.12:1**, amber/night **8.35:1**, amber/night-soft **7.38:1**). Ivory text passes on every room ground (lowest: library oak **5.10:1**).

**Failure — non-text UI (WCAG 1.4.11, 3:1):** the House-wide amber focus ring fails on the Library ground: amber `#E3A34A` vs library oak `#7A5A3A` = **2.87:1**. It passes on threshold (4.13:1), edit (5.72:1), machine (8.50:1), work (7.79:1).
**Recommendation:** a Library-scoped focus treatment — dual-ring (amber + ivory inner halo), one rule that survives every future room — rather than a silent exception. No `-text` variants needed for the §2 text pairs.

## O-5 · Fonts — OFL, self-hostable; final subset gated on §8.2

Cormorant, EB Garamond, and Source Serif 4 are all SIL Open Font License (self-hostable, redistributable) — confirm against each download's `OFL.txt` at fetch. The site currently loads Cormorant Garamond + Jost (+ IBM Plex Mono on `/tools`) from the **Google Fonts CDN**; self-hosting WOFF2 subsets removes that external dependency and serves the performance budget. Cormorant is therefore *continuity*, not novelty. Final subsetting waits on Luna's §8.2 display/body pick.

---

## Feeds Luna's §8

- §8.1 palette values ← O-1 mapping, **O-2 House Red** (keystone), O-4 (all proposed pairs verified)
- §8.2 type direction ← O-5 (licensing clear; Cormorant is continuity)
- §8.3 glow ruling ← O-3 (as-built cyan vs proposed warm)
- Focus treatment (O-4 failure) ← recommend dual-ring, House-wide
- §8.4 reserved values remain provisional

---

## O-4b · Precise contrast on both ratified grounds (run at implementation, 29 Jul 2026)

Recomputed against the *ratified* grounds — Charcoal Velvet `#1A1720` and Old Page `#EFE7D8` — before any page consumes the token layer.

**Dark ground `#1A1720`:** paper 14.40:1 ✓ · paper-dim 9.80:1 ✓ · amber (non-text) 8.09:1 ✓ · brass 5.32:1 ✓ · stone 4.70:1 ✓. Garnet-as-text 1.62:1 (fails *by design* — on dark, Red speaks as Voice).

**Light ground `#EFE7D8`:** black/Narrator 14.40:1 ✓ · Garnet (link/ceremony) 8.91:1 ✓ · stone-text 5.92:1 ✓ · brass-text 5.51:1 ✓ · red-voice (large only) 3.40:1 ✓. Documented failures preserved as evidence: raw stone 3.06 · raw brass 2.70 · amber 1.78 — which is *why* the `-text` tokens exist.

**Dual-ring focus (§8.5):** on each ground one ring carries ≥3:1 while the other melts by design — dark: amber 8.09:1 (velvet melts 1.00:1); light: velvet 14.40:1 (amber edge-glow 1.78:1); rings mutually distinct 8.09:1. Verified on both grounds.

**⚠ One finding — Red Voice is under AA body on dark, by a hair.** `--house-red-voice #B26578` on Charcoal Velvet = **4.23:1** — passes AA large (3:1) but sits below AA body (4.5:1). It's ratified for "links, quiet actions" on dark grounds, and normal-size links would land at 4.23:1. (O-4 missed this: it was computed against the older, darker `#12151C`; the ratified `#1A1720` is lighter, dropping contrast ~0.3.) → **Luna's call:** either scope Red Voice on dark to large/semibold text (≥3:1, already satisfied) or lighten the value ~2–3% to reach 4.5. The value is ratified; **not changed here.**
