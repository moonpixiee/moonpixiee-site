# Design System Audit

**Source of truth:** HOUSE_CONSTITUTION.md **v3.0**
**Revision:** v2 — updated for brand hierarchy, commerce doctrine, four rooms
**Status:** proposal — nothing here is implemented

---

## 0. What I could and couldn't verify

I had rendered pages only. **I never saw your stylesheet, token file, or config.**

I cannot confirm that pink is currently in your tokens, what your variables are named, or whether the site defaults to dark. The tonal evidence points toward dark-first (the hero, "dark feminine energy," 🖤) — but *evidence pointing toward* is not *verified*.

Items marked **[VERIFY]** need your CSS before they become work items. The exact file list is at the end of this document.

---

## 1. Color

### 1.1 Palette (§4)

| Token | Constitution | Role |
|---|---|---|
| `--paper` | Warm Ivory | Default background, all rooms except Machine Room |
| `--ink` | Near Black | Body text, headings |
| `--house-red` | Editorial Red | The Red Thread (§5) — marks only |
| `--smoke` | Warm Gray | Secondary text, rules, borders |
| `--system-red` | System Red | Machine Room only |

### 1.2 Required changes

**[VERIFY] Retire pink.** §4: "Pink is retired." Every instance maps to House Red or Smoke depending on whether it was carrying accent or decoration. Decorative pink usually maps to **Smoke**, not Red — Red is a thread, not a wash. Getting this wrong turns the whole site red.

**[VERIFY] Flip the default to light.** §4 is explicit: light-first, dark as "an alternate atmosphere, not a separate identity." If the site currently defaults dark, this is the largest single visual change in the migration.

**System Red is a separate token.** §4 now states they must never resolve to the same value. If they alias, §12's exception collapses and the Machine Room stops being the exception.

### 1.3 House Red is a mark, never text

Now constitutional — §5: "House Red is never used for body copy."

An editorial red on warm ivory will almost certainly fail WCAG AA (4.5:1) for body copy. Near-mathematical certainty for any red still reading as *editorial* rather than *maroon*. §19 puts readability above aesthetics, so the color loses.

This is fully compatible with §5's Red Thread — annotation ink, lipstick, electrical, personal marks, berries are all *marks*, not text blocks. The two sections agree; the implementation just has to know it.

### 1.4 The Red Thread as implementation (§5)

One token, five contexts. The color does not change — the *object* it colors does.

| Room | Red appears as |
|---|---|
| Library | Marginalia, annotation underlines, a reader's pencil mark |
| Edit | A lip mark, a thin rule under a section, a stamped numeral |
| Machine Room | System Red — status dots, active states, terminal cursor |
| Luna's Room | Handwritten marks, circled things, a scrawl |
| Moss & Moon | Berries, seed dots, small botanical punctuation |

One `--house-red` variable and five room-scoped *usages*. Resist `--library-red`, `--edit-red` etc. — §5 now forbids it outright. Five tokens would break the thread.

---

## 2. Typography

### 2.1 The four voices (§6)

| Role | Use | Constraint |
|---|---|---|
| Editorial Serif | Body copy, headings, reading | Primary reading voice |
| Sans Serif | Navigation, interface, labels | Never for long reading |
| Monospace | Machine Room only | §6 is absolute |
| Gothic | Ceremonial inscription only | Never body, never nav, never paragraphs |

### 2.2 Findings

**The serif/italic display pattern already works.** "For the ones *becoming.*" — used consistently across all seven pages. Strongest existing typographic asset. Keep the pattern.

**Monospace needs token-level containment.** §6 restricts it to the Machine Room. Scope `--font-mono` inside the Machine Room's theme block rather than exposing it globally, so it can't leak into a "techy" moment elsewhere.

**Gothic doesn't exist yet and is your biggest untapped asset.** §6 supplies the inventory — **L O V E · R E A D · B E C O M E · B U I L D · G R O W** — and under v3.0 it maps almost exactly onto the four rooms:

| Inscription | Where |
|---|---|
| **L O V E** | Luna's Room |
| **R E A D** | The Library |
| **B E C O M E** | The Becoming, inside the Library |
| **B U I L D** | The Machine Room |
| **G R O W** | Moss & Moon |

Note what this does: **B E C O M E** is exactly how the Becoming page keeps its identity after dissolving as a room. It stops being a nav item and becomes an inscription over a book. That's a promotion, not a demotion — and it's the clearest evidence the four-room structure was the right call.

Each room gets a ceremonial threshold, which is precisely the "walking into another room" feeling §16 asks for. Cheapest high-impact move available; pull it early.

**Guardrail, now constitutional (§6):** one inscription per room. Twice on a page and it stops being ceremonial.

---

## 3. Layout (§18)

Four of seven pages are a vertical stack of identical rectangles. §18 names six tools; cards are one of six.

| Tool | What it is | Where it earns its place |
|---|---|---|
| **Editorial spread** | Asymmetric image + text, magazine-style | Edit sections, Luna's Room |
| **Object** | A single item given room, no card chrome | A book, a fragrance, one product |
| **Artifact** | Something found, not designed — a scan, a note | Luna's Room, Library marginalia |
| **Margin** | Deliberate empty space with a note in it | Library, throughout |
| **Card** | The rectangle. Used sparingly. | Machine Room system directory |
| **Room** | Full-bleed atmospheric section | Thresholds, room entrances |

§18's test, now constitutional: *remove every card from the page — does anything remain?*

The Machine Room is where cards are correct. A system directory should look like a directory.

**The Edit's object component is the highest-stakes build in the design system.** It's the component that has to make affiliate commerce feel like a dressing room. If it comes out as a card with the price and button removed, M4 fails — the grid will still read as a catalog. It needs to be a genuinely different thing: varied sizes, editorial framing, text-only entries for smaller items, photography with room to breathe.

---

## 4. Motion (§16)

| Token | Value | Use |
|---|---|---|
| `--motion-room` | 600–800ms, ease-out | Room transitions |
| `--motion-object` | 300–400ms | Hover, reveal, object states |
| `--motion-mark` | 200ms | Small state changes |

- No parallax, scroll-jacking, counters, auto-carousels, bounce or spring easing
- Room transitions should feel like a door, not a slide — cross-dissolve or light-shift over horizontal movement
- **`prefers-reduced-motion` honored throughout** — now constitutional in §16

---

## 5. Photography (§17)

§17 now states directly: "Catalog photography is not editorial photography. A room full of product-on-white images is a shop, whatever the layout says."

The Edit's imagery is currently hosted on-site (`product-cleanser.jpeg`, `glow-dove.jpg`, etc.) and appears to be standard retailer product shots.

This is the most likely place the migration silently fails. Everything else gets rebuilt correctly and the Edit still *feels* like a shop, because the pictures are shop pictures. Budget for reshooting the Edit's hero items as styled editorial stills; let smaller items live as text objects rather than forcing a bad photo into a frame.

---

## 6. Accessibility (§19)

§19 explicitly subordinates aesthetics to readability, in every theme, including the Machine Room.

- Body copy **4.5:1**, large text **3:1** — in light, dark, *and* Machine Room
- House Red never carries meaning alone (§5)
- The Machine Room is where contrast most often fails; §12 now says its atmosphere is never an excuse
- Skip links on every page (`/tools` already has one — propagate)
- `prefers-reduced-motion` respected
- Focus states visible in all themes — House Red on Paper is a poor focus ring; use Ink with a Red mark
- The Library's writing spaces need real form semantics, labels, and keyboard support

---

## 7. Theme architecture

§12 now resolves this: the Machine Room "stays dark even when the House is light." That requires three themes, scoped by room rather than by theme.

```
:root                    → Paper / Ink / House Red / Smoke   (default, light)
[data-theme="dark"]      → alternate atmosphere, same identity
[data-room="machine"]    → dark + System Red + mono, independent of theme
```

Scoping by *room* is what keeps §12's exception alive. If the Machine Room were merely `dark`, it would go light whenever the visitor's House is light and the exception would vanish.

---

## 8. Lexicon (§15) — rename map

Copy-only work, no structural risk. Cheapest milestone, fastest perceived change.

| Current | Proposed | Why |
|---|---|---|
| `moonpixiee` (logo, all pages) | **House of Luna** | §1 |
| `\| Moonpixiee` (title suffix) | **\| House of Luna** | §1 |
| The Woman Behind Moonpixiee | **Luna** | §1 |
| the Moonpixiee universe | **the House** | §1, §15 |
| `— moonpixiee` (attribution) | **unchanged** | §1 — correct |
| Letters from Moonpixiee | **unchanged** | §1 — correct |
| ← Back to Home | **Return Upstairs** | §15 supplies this exact phrase |
| Enter the Universe | **Enter** | §15 |
| Join the Universe | (rewrite in House voice) | §15 |
| The Universe | **The House** | §15 |
| Everything lives here. | (rewrite) | Universe framing |
| That's the empire. | **(remove)** | §1, §15 |
| Tools | **The Machine Room** | §15 |
| Shop the Edit / Shop Now | **Enter the Edit** / no shop verb | §14 |
| Browse the edit | (rewrite) | §14 |
| Explore Books | **Enter the Library** | §15 |
| Start Here | (rewrite) | §3 |
| Follow Along | **Elsewhere** | §15, already partly in use |
| Coming Soon | **Not yet open** or similar | §3 |
| Join Waitlist / Notify me | (rewrite in House voice) | §3, §14 |
| Get the Guide | (rewrite) | §14 |
| No spam. Unsubscribe whenever. | (rewrite or remove) | §3 |
| Bestseller | **(remove)** | §14 — scarcity/status marketing |
| built to convert | **(remove)** | §14 |
| Style/Beauty/Lifestyle · Affiliate | **(remove badges)** | §9 |
| My Favorites + Extras | **(removed)** | §9 |
| Work With Me | **Work With Luna** | §11 |
| 🌙 🖤 🤖 ✨ 🛍 ☁️ 🌑 🪞 | **(removed)** | §3 |

**Missing and required:** §15 names the **House Map** as core vocabulary and now states every room and door must appear on it. No such page exists.

---

## 9. Component reuse

| Component | Verdict | Notes |
|---|---|---|
| Header / nav shell | **Reuse** | Keep structure, replace every label and the wordmark |
| Footer | **Reuse** | Same |
| Page shell / section rhythm | **Reuse** | Sound skeleton |
| Machine Room system cards | **Reuse** | Cards are correct here (§18) |
| Machine Room status language | **Reuse** | Already constitutional (§12) |
| Skip link | **Reuse + propagate** | Currently only on `/tools` |
| Serif/italic display heading | **Reuse** | Strongest existing asset |
| Pull-quote block | **Refactor** | Becomes Library marginalia; drop quote-card styling |
| Numbered prompt list (Becoming) | **Refactor** | Becomes the interior of The Becoming |
| Email capture | **Refactor** | Keep mechanism, rewrite every word |
| Product card | **Rebuild** | Becomes the Edit's object component — highest-stakes build |
| Universe card grid | **Rebuild** | Emoji + identical rectangles (§3, §18) |
| Library product cards | **Rebuild** | §8 needs books that open |
| `/work` funnel | **Rebuild** | §0, §14 |
| Product photography | **Reshoot** | §17 |

The chrome survives. The content components don't.

---

## 10. Files I need to finish this document

To convert §1's **[VERIFY]** items from proposal into an exact rename map, send whichever of these exist. I don't know your stack, so this is a superset — send what's there.

**Tokens and theme (the critical ones):**
- `tailwind.config.js` / `.ts` / `tailwind.config.mjs`
- `globals.css` / `global.css` / `styles.css` / `app.css` / `index.css` — whichever holds your `:root` block
- Any `tokens.css`, `theme.css`, `variables.css`, `_variables.scss`, `colors.ts`, `theme.ts`
- `postcss.config.js`

**Structure (for component reuse and routing):**
- The output of `tree -L 3 -I 'node_modules|.next|dist|.git'` from your project root — this alone tells me most of what I need
- Your root layout: `app/layout.tsx` / `src/App.jsx` / `_app.js` / `index.html`
- Your header/nav component and footer component
- `next.config.js` / `netlify.toml` / `vercel.json` / `_redirects` — needed to plan M3's redirects
- `package.json` — tells me the framework and available libraries

**Fastest possible version:** if you only send two things, send the CSS file containing `:root` and the `tree` output. That covers roughly 80% of the gap.

**Or grant access directly.** You have Netlify and Cloudflare connectors available in this workspace. If the site deploys through either, connecting it may let me inspect the build directly and skip the file-passing entirely — worth trying before you start copying files by hand.
