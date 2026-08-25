# LIBRARY_MASTER.md
### The House of Luna — Library Wing · Canonical Build Bible
*Version 1.2 · 9 Aug 2026 · maintained alongside `docs/PHASE-R-PROPOSALS.md`*

> # “A place you visit, not a tool you use.”
> **The one question every future feature must answer: *does this make someone want to spend another ten quiet minutes in the House?*** If yes, it belongs. If it only "adds functionality," it belongs somewhere else. — Luna, ratified 9 Aug 2026
>
> ## “Every Artifact Viewer should feel like a different piece of furniture in the House, not a different screen in an app.”
> When someone clicks a book they should think *"I picked up a book,"* not *"a modal opened."* This shapes every animation, shadow, button, and interaction. — Luna, ratified 9 Aug 2026

---

## North Star

> **The House is a video-game environment, not a website.**
> Every decision asks one question: *would this feel believable if someone were walking through this place?*

The Library is the first wing of the House to be built as a **multi-room explorable map** rather than a single page. It is not a page with sections — it is a place you *wander*, made of a Hub and its rooms, each room its own photoreal scene with hotspots you discover, collect from, and return to.

**Production law (unchanged, House-wide):** rendered photoreal artwork is the *visual layer*; HTML/CSS/JS is the *interaction layer* composited on top. CSS never tries to *be* architecture. Every room = one clean environment render + the Zone engine pinned on top.

**The game loop:** people come back to wonder *did Astro move · is there a new page today · will the compartment finally open.* A place you visit, not a tool you use.

---

## How to read this document

Every zone is marked with a **status** and every interaction is marked **[RATIFIED]** or **[PROPOSED]**.

- **[RATIFIED]** — Luna has stated it. Build it as written.
- **[PROPOSED]** — Claude's fill-in, awaiting Luna's yes/no. Never shipped without sign-off. (This honors the House rule: *don't name or invent features Luna hasn't decided.*)

**Build status legend**
- 🟢 `BUILT` — page exists and renders (may be on a placeholder background awaiting final art)
- 🟡 `ART PENDING` — spec + prompt ready; waiting on Luna's clean render
- ⚪ `PROPOSED` — zone concept only; not yet approved to build

**The Zone engine** (already built, `public/bookshelves.html`) is the reusable spine. Every zone below is a **config swap** on it — same hover-whisper, same Read / Keep / Leave collection, same living-House daily seed. No new engineering per zone; only a clean render + a hotspot list.

---

# 01 — Library Hub
**Route:** `/library` · **Status:** 🟡 ART PENDING · **Color:** Library Gold · **Zone ID:** HUB

The room you *arrive into* from the Library Threshold (`/library-door`). Not a menu — a warm, towering, golden-lit library interior at human eye-level, with visible **ways through** to each zone. The Hub is to the Library what the Grand Hall is to the House: a place that holds doors.

**Arrival:** fade-from-black, gentle push-in, dust in gold light. Camera continues from the door-peek of the Threshold (continuity law).

**Ways through (hotspots → zones):**

| On-screen anchor | Leads to | Status |
|---|---|---|
| The long reading table, center | Main Table (`/main-table`) | [RATIFIED] |
| The towering aisle, left | Bookshelves (`/bookshelves`) | [RATIFIED] |
| The hearth glow, right | Fireplace (`/fireplace`) | [RATIFIED] |
| A half-hidden nook behind a shelf | Hidden Desk (`/hidden-desk`) | [RATIFIED] |
| A cold monitor-glow in an alcove | Terminal (`/terminal`) | [RATIFIED] |
| The spiral stair / balcony above | Upstairs (`/upstairs`) | [RATIFIED] |
| Loose pages drifting across the floor | Loose Pages (`/loose-pages`) | [RATIFIED] |
| A tall dim mirror between shelves | Mirror (`/mirror`) | [PROPOSED] |

Secret Patio is reached **through Upstairs**, not from the Hub (per nav tree). See §08.

**Render prompt (clean, no UI):**
> A grand two-story library interior at human eye-level, seen straight-on. Towering dark-wood bookshelves receding on both sides, warm golden lamplight pooling on a long central reading table, a stone hearth glowing on the right, a spiral iron stair climbing to a balcony on the left. Tall arched windows with faint cool moonlight at the far end meeting the warm gold. Dust adrift in the light beams, worn rugs, ladders against the shelves. Deep shadow, cinematic, photoreal, painterly, wide landscape 16:9. No text, no UI, no labels, no people.

---

# 02 — Main Table
**Route:** `/main-table` · **Status:** 🟡 ART PENDING · **Color:** Library Gold · **Zone ID:** #001

The heart of the Library — a long candlelit reading table strewn with the day's open work. The "what is Luna reading / making right now" room. Most likely to change day to day via the living-House seed.

**Hotspots**

| Object | Whisper verb | Payload | Collect? | Status |
|---|---|---|---|---|
| An open manuscript | *Read* | current journal / work-in-progress entry | Read/Keep/Leave | [PROPOSED] |
| A stack of correspondence | *Open* | a short letter from Luna | Keep | [PROPOSED] |
| A magnifying glass over a map | *Look* | a fragment / clue toward another zone | Keep (rare) | [PROPOSED] |
| A guttering candle | *Sit* | a still "stay a while" beat, no item | — | [PROPOSED] |
| Astro (roaming) | *…* | the cat; position by daily seed | — | [RATIFIED — Astro is House-wide] |

**Living-House:** the open manuscript's text rotates daily; one hotspot flagged `is-new` (blue) each day; Astro may or may not be on the table.

**Render prompt (clean, no UI):**
> A long antique reading table in a grand library at human eye-level, seen straight-on. Candles and a brass lamp casting warm gold light. An open leather manuscript mid-page, a stack of wax-sealed letters, a magnifying glass resting on an unrolled map, an inkwell and pen, scattered loose pages. Deep warm shadow, tall bookshelves blurred behind. A black cat's tail just visible at the table's edge. Dust in the lamplight. Cinematic, photoreal, painterly, wide landscape 16:9. No text, no UI, no labels, no people.

---

# 03 — Bookshelves
**Route:** `/bookshelves` · **Status:** 🟢 BUILT (placeholder background — awaiting clean aisle render) · **Color:** Library Gold · **Zone ID:** #002

The reference build — this is the zone that became the engine. Towering aisle, rolling ladder, a black cat, moonlight through stained glass. Everything downstream is a config swap on this file.

**Hotspots** *(all [RATIFIED] via the nav tree; current build in parentheses)*

| Object | Whisper verb | Payload | Collect? |
|---|---|---|---|
| Rare books | *Read* | a rare volume / passage | Read/Keep/Leave |
| Secret ladder | *Climb* | passage beat (the ladder / the way up) | — |
| Lost pages | *Take* | a loose page (Luna note / quote) | Keep |
| Hidden lever | *Pull* | rare — opens a compartment (brass key) | Keep (rare) |
| Astro | *…* | the cat, roams by daily seed | — |

*Current built hotspots (to reconcile to the ratified four above once the clean aisle art lands): An Open Book, A Loose Page, A Feather Bookmark, Something Tucked Away (rare brass key), The Ladder, Astro.*

**Living-House:** Astro picks a shelf daily; moon phase in the glass computed from date; one hotspot `is-new`; the Hidden Lever compartment opens only on a rare seed.

**Render prompt (clean, no UI):** *(the aisle asset still awaited)*
> A towering library aisle at human eye-level, seen straight down the corridor of shelves. Dark wood shelves rising out of frame on both sides, a rolling brass ladder leaning against the left, a single candle on a shelf, an open book resting on a reading stand, a loose page fallen to the floor, a black cat sitting halfway down the aisle looking back. Cool moonlight falling through a tall stained-glass window at the far end, meeting the warm candlelight. Dust in the beams, deep shadow. Cinematic, photoreal, painterly, wide landscape 16:9. No text, no UI, no labels, no people.

---

# 04 — Fireplace  ⭐ *(Luna: "this will prob be my favorite room")*
**Route:** `/fireplace` · **Status:** 🟡 ART PENDING · **Color:** Library Gold (warm amber peak) · **Zone ID:** #003

The warmest, softest room in the Library. A hearth, a worn leather chair, the cat asleep, moonlight meeting firelight. The room you go to *rest* — the still counterpart to the Terminal's cold hum.

**Hotspots** *(all [RATIFIED] via the nav tree)*

| Object | Whisper verb | Payload | Collect? |
|---|---|---|---|
| Sit | *Sit* | a "stay a while" beat — the fire breathes, no item | — |
| Tea | *Drink* | a small note from Luna left with the cup | Keep |
| Astro | *…* | the cat, curled on the chair; sometimes absent (seed) | — |
| Journal | *Read* | a journal entry, face-down open book | Read/Keep/Leave |

**Rare:** an ember in the grate that, on a rare seed, reveals a hidden line.

**Living-House:** fire intensity + ember drift subtly vary; Astro present/absent by seed; the journal entry rotates.

**Render prompt (clean, no UI):**
> A grand library reading nook at human eye-level, seen straight-on. A tall stone hearth with a low fire burning warm and alive, flickering amber light across the room. A deep worn leather armchair beside it, a small side table with a half-finished cup and an open book face-down. A thick fur throw. Bookshelves receding into warm shadow on either side. A black cat curled asleep on the armchair. Dust and embers drifting in the firelight. Faint cool moonlight through a tall window at the frame's edge — the cool blue and the warm fire meeting in the middle of the room. Cinematic, photoreal, painterly, deep shadows, golden-hour interior, wide landscape 16:9. No text, no UI, no labels, no people.

---

# 05 — Hidden Desk
**Route:** `/hidden-desk` · **Status:** 🟡 ART PENDING · **Color:** Library Gold (private, low light) · **Zone ID:** #003→ *(ID collision with Fireplace — needs finalizing; see Asset Bible §11)*

The secret writing room, tucked behind a shelf. The most "personal correspondence" of the zones — letters, wax, a typewriter, a locked drawer. Discovery-forward: you have to *find* it from the Hub.

**Hotspots** *(all [RATIFIED] via the nav tree)*

| Object | Whisper verb | Payload | Collect? |
|---|---|---|---|
| Letters | *Read* | a written letter (longer-form Luna prose) | Read/Keep/Leave |
| Wax seals | *Press* | a collectible seal / sigil | Keep |
| Typewriter | *Type* | a line appears keystroke by keystroke | Keep (the line) |
| Drawer | *Open* | rare — locked; opens on a seed to reveal something | Keep (rare) |

**Living-House:** the letter rotates; the drawer is locked most days and opens rarely; a fresh sheet in the typewriter each day (`is-new`).

**Render prompt (clean, no UI):**
> A hidden writing desk in an alcove behind a bookshelf, at human eye-level, seen straight-on. An antique wooden desk with a black manual typewriter, a sheet half-typed in the roller, stacks of handwritten letters, sticks of sealing wax and a brass seal, a small locked drawer, a single low desk lamp casting a tight warm pool of light while the rest falls into deep shadow. A bookshelf partly slid aside revealing the nook. Dust, quiet, intimate. Cinematic, photoreal, painterly, wide landscape 16:9. No text, no UI, no labels, no people.

---

# 06 — Terminal
**Route:** `/terminal` · **Status:** 🟡 ART PENDING · **Color:** Library Gold shell / cold monitor cyan glow · **Zone ID:** #004

The one cold-lit corner of the Library — a lone screen humming in an alcove. This is where the Library touches the *live* world: Luna's writing feeds. The cool light here is the Library's one nod to the Machine Room's crimson infrastructure without becoming it.

**Hotspots** *(all [RATIFIED] via the nav tree)*

| Object | Whisper verb | Payload | Collect? | Link |
|---|---|---|---|---|
| Threads | *Open* | latest Threads posts / feed beat | — | external [PROPOSED link] |
| Substack | *Open* | latest Substack essay | Read/Keep | external [PROPOSED link] |
| Observatory Logs | *Read* | in-world log entries (ties the Terminal to the Observatory wing) | Read/Keep | in-world |
| Easter Eggs | *…* | rare hidden responses on the screen (probabilities per Asset Bible) | Keep (rare) | in-world |

**Living-House:** the screen shows a different "boot line" daily; Easter-egg responses fire on rare seeds; newest feed item flagged `is-new`.

**Render prompt (clean, no UI):**
> A dim library alcove at human eye-level with a single old cathode monitor glowing cool cyan-white on a wooden desk, surrounded by dark bookshelves. The screen's glow is the only cold light in a warm room; it spills onto a worn keyboard, a stack of printouts, a coffee ring, a small brass lamp switched off. Deep shadow, dust in the monitor glow, cables trailing. Cinematic, photoreal, painterly, wide landscape 16:9. No text on the screen, no UI, no labels, no people.

---

# 07 — Upstairs
**Route:** `/upstairs` · **Status:** 🟡 ART PENDING · **Color:** Library Gold → cool at the balcony edge · **Zone ID:** #005

The Library's upper floor — a balcony over the Hub, telescope at the rail, small reading alcoves, and the door out to the Secret Patio. The vertical-continuity room: you *climbed* the spiral stair from the Hub to get here.

**Hotspots** *(all [RATIFIED] via the nav tree)*

| Object | Whisper verb | Payload | Collect? | Leads to |
|---|---|---|---|---|
| Balcony | *Look* | a wide look down over the Hub (scale + continuity beat) | — | — |
| Telescope | *Look* | points at the sky — ties to the Observatory wing | Keep (a "sighting") | — |
| Reading Alcoves | *Enter* | small nooks, each a short passage/quote | Read/Keep | — |
| Secret Patio | *Step out* | the way outside | — | Secret Patio (`/secret-patio`) |

**Living-House:** the telescope's sighting changes with the moon phase; a different alcove `is-new` daily.

**Render prompt (clean, no UI):**
> A library balcony on the upper floor at human eye-level, an iron railing overlooking a two-story library below, a brass telescope aimed at a tall arched window, small curtained reading alcoves along the back wall, warm lamplight fading to cool moonlight at a glass door leading outside. Worn rugs, stacked books on the rail, dust in the light. Deep shadow below, cool night beyond the glass. Cinematic, photoreal, painterly, wide landscape 16:9. No text, no UI, no labels, no people.

---

# 08 — Secret Patio
**Route:** `/secret-patio` · **Status:** ⚪ PROPOSED · **Color:** Cool moonlight (exterior — the Library's one outdoor beat) · **Zone ID:** #006 [PROPOSED]

Reached *through Upstairs*, not from the Hub. The reward room — you step out of the warm Library into cool night air. A small stone terrace, ivy, a single chair, the moon and the House's rooftops. The quietest, most "you found the edge of the world" moment in the wing.

**Hotspots** *(all [PROPOSED] — awaiting Luna)*

| Object | Whisper verb | Payload | Collect? |
|---|---|---|---|
| The night sky | *Look up* | ties to the Observatory; a constellation beat | — |
| A single chair | *Sit* | a still outdoor beat | — |
| Something left on the ledge | *Take* | rare collectible | Keep (rare) |
| Astro (on the wall) | *…* | the cat, outside on a rare seed | — |

**Render prompt (clean, no UI):**
> A small hidden stone terrace at night, stepped out from a library, at human eye-level. Ivy climbing an old balustrade, a single weathered chair, a low table with a cold cup, potted plants, the rooftops of a great house beyond and a large luminous moon above. Cool blue moonlight, warm light spilling from the library door behind. Still, quiet, dew in the air. Cinematic, photoreal, painterly, wide landscape 16:9. No text, no UI, no labels, no people.

---

# 09 — Loose Pages
**Route:** `/loose-pages` · **Status:** 🟡 ART PENDING · **Color:** Library Gold · **Zone ID:** #007

The wandering-fragments room — pages scattered across a floor, each a fragment of writing you can gather. The most collection-forward zone: it *is* the collection, made spatial. Feeds "Your Room" heavily.

**Hotspots** *(all [PROPOSED] — nav tree cut off before this zone; awaiting Luna)*

| Object | Whisper verb | Payload | Collect? |
|---|---|---|---|
| A page underfoot | *Take* | a fragment / quote | Keep |
| A page caught mid-air | *Catch* | a rarer fragment | Keep |
| A torn page | *Piece together* | rare — completes a multi-day set | Keep (rare, set) |
| Astro batting a page | *…* | the cat, by seed | — |

**Living-House:** which pages are present rotates daily (this is the zone that most rewards return visits); a "page of the day" `is-new`.

**Render prompt (clean, no UI):**
> The floor of a grand library seen at a low human eye-level, loose handwritten and printed pages scattered and drifting across worn floorboards and a rug, some caught mid-air as if by a draft, warm lamplight from above, tall bookshelves rising into shadow. A black cat batting at one page. Ink smudges, torn edges, candle nearby. Dust and drifting paper in the light. Cinematic, photoreal, painterly, wide landscape 16:9. No text legible, no UI, no labels, no people.

---

# 10 — Mirror
**Route:** `/mirror` · **Status:** ⚪ PROPOSED · **Color:** Library Gold with a cold silver reflection · **Zone ID:** #008 [PROPOSED]

The strangest room — a tall antique mirror between the shelves that doesn't *quite* reflect the Library you're in. The wing's one uncanny beat; the deepest easter-egg surface. Handle with restraint so it stays rare and special.

**Hotspots** *(all [PROPOSED] — awaiting Luna)*

| Object | Whisper verb | Payload | Collect? |
|---|---|---|---|
| Your reflection | *Look* | a beat that changes with the seed / your collection size | — |
| Something behind you in the glass | *Turn* | rare — an easter egg only the mirror shows | Keep (rare) |
| The frame's carvings | *Trace* | a hidden inscription | Keep |

**Living-House:** the reflection reacts to how much you've collected across the House (first use of collection-state as a variable); rare "someone else in the glass" seed.

**Render prompt (clean, no UI):**
> A tall ornate antique mirror standing between two towering bookshelves in a dim library, at human eye-level, seen straight-on. The carved gilt frame catches warm lamplight; the glass is old and slightly clouded, reflecting a library that is subtly not the same — a little colder, a little emptier, one candle where there should be none. Deep shadow around it, dust, a faint silver cast to the reflection against the warm room. Cinematic, photoreal, painterly, uncanny, wide landscape 16:9. No text, no UI, no labels, no people.

---

# 11 — Asset Bible

**Naming & format**
- Environment renders: `public/assets/{zone}-env.png` — e.g. `fireplace-env.png`, `terminal-env.png`, `library-hub-env.png`.
- Doorway / threshold portraits: `public/assets/{room}-full.png` (portrait ~1024×1536).
- Environments: **wide landscape 16:9**, target ~1536×1024. Always **clean — no UI, text, tooltips, or labels baked into the image.** The mockups Luna sends with tooltips painted in are *art direction*, not production assets.
- One asset per zone. If a zone needs a "state" variant later (drawer open, fire out), suffix `-alt` — do not overwrite the base.

**Zone ID registry** — ✅ LOCKED (9 Aug 2026, ratified). Numbering matches Luna's render grid (001–010) exactly. The `id` string in each page's config is the stable key; these numbers are the human label.

| # | Zone | Route | Page file | Status |
|---|---|---|---|---|
| 001 | Library Hub | `/library` | `src/pages/library.html` | 🟢 BUILT |
| 002 | Main Table | `/maintable.html` | `public/maintable.html` | 🟢 BUILT |
| 003 | Bookshelves | `/bookshelves.html` | `public/bookshelves.html` | 🟢 BUILT |
| 004 | Fireplace | `/fireplace.html` | `public/fireplace.html` | 🟢 BUILT |
| 005 | Hidden Desk | `/hiddendesk.html` | `public/hiddendesk.html` | 🟢 BUILT |
| 006 | Terminal | `/terminal.html` | `public/terminal.html` | 🟢 BUILT |
| 007 | Upstairs | `/upstairs.html` | `public/upstairs.html` | 🟢 BUILT · placeholder art |
| 008 | Secret Patio | `/secretpatio.html` | `public/secretpatio.html` | 🟢 BUILT (reached via Upstairs) |
| 009 | Loose Pages | `/loosepages.html` | `public/loosepages.html` | 🟢 BUILT · placeholder art |
| 010 | Mirror | `/mirror.html` | `public/mirror.html` | 🟢 BUILT |

*The collision is resolved — Fireplace=004, Hidden Desk=005, everything shifts to grid order.*
*Two zones (007 Upstairs, 009 Loose Pages) run on grid-crop placeholders — full-res renders still wanted.*

**Collection item schema** (what Keep writes to `localStorage['hol_collection']`)
```
{ id, zone, name, kind, title, body, foundOn (date), rare (bool) }
```
Items surface in **Your Room** (`/you`). Duplicates de-duped by `id`.

**Rare-find probability table** *(daily-seed driven; tune freely)*

| Tier | ~Odds per visit | Examples |
|---|---|---|
| Common | shown most days | open book, loose page, letters, tea note |
| Uncommon | ~1 in 4 | feather bookmark, wax seal, a fresh journal page |
| Rare | ~1 in 12 | Hidden Lever → brass key, Terminal easter egg, Fireplace ember line |
| Secret | ~1 in 40+ | Mirror "someone in the glass", Loose Pages completed set, Drawer opens |

Rarity is computed from the date seed so it's the *same for everyone on a given day* — that's what makes "did you get the key today?" a shared moment.

---

# 12 — Lighting Bible

**The Library's signature:** warm gold as the constant, with **one meeting-point of cool** in every render (moonlight through glass) so no room is flatly warm. Warm and cool meet in the *middle* of the frame — that tension is the House's look.

**Per-zone light**
- Hub / Main Table / Bookshelves / Fireplace / Hidden Desk / Loose Pages — warm gold lamplight + candle, deep shadow, cool moon at an edge.
- Terminal — the exception: a single **cold cyan monitor glow** in an otherwise warm room. The Library's only cold room, and deliberately so.
- Upstairs — warm interior tipping to cool at the balcony glass.
- Secret Patio — **exterior cool moonlight**, warm spill from the library door behind you.
- Mirror — warm room, **cold silver** reflection.

**Interaction light (engine, House-wide)**
- Hotspots wake on cursor proximity: a `--w` variable (0→1 by distance) drives `opacity` + `brightness` of a candle-glow behind each object. Light *follows the cursor* — the room feels lit by your attention.
- Arrivals: **fade-from-black** + gentle push-in (`scale 1.11→1`, ~3s). Never a hard cut.
- Ambient: **breathing glow** (`@keyframes breathe`, brightness oscillation ~6–10s) on fires/lamps/moon.
- Light layers use `mix-blend-mode: screen` over the photo so they add light, never draw shapes.
- **Reduced-motion:** every animation guarded by `prefers-reduced-motion: reduce` — glows resolve to static mid-state, arrivals skip.

**The descent gradient (continuity anchor, for reference):** Machine Room crimson → stair → tunnel → Observatory moonlight is the House's proof that light carries you between rooms. The Library obeys the same principle internally: gold carries you room to room; the cool edges point *out* toward the Observatory wing (telescope, patio, terminal logs).

---

# 13 — Material Bible

**Design DNA (from `public/styles/tokens.css`) — never re-pick these ad hoc:**

| Token | Hex | Use |
|---|---|---|
| Charcoal Velvet | `#1A1720` | deepest shadow / page ground |
| Old Page | `#EFE7D8` | parchment panels, collectible cards |
| Garnet | `#6A2436` | seals, deep accents |
| Red-voice | `#B87283` | the House's speaking-red (AA-safe on dark) |
| Brass | `#A9884F` | keys, telescope, lamp fittings, frame gilt |
| Amber | `#E3A34A` | firelight / candle warm peak |

**Physical materials the renders should carry (consistency across zones):** dark aged wood, worn leather, brass and iron, old clouded glass, candle wax, parchment/torn paper, wool rugs, stone (hearth, patio), ivy (patio only). Dust in every beam of light — it is the House's fingerprint.

**The parchment panel** (the Read/Keep/Leave surface): Old-Page ground, 1px `#b8a06a` brass border, Source Serif body, small-caps Cormorant title. It sits *on* the room, semi-transparent scrim behind, so you never leave the place to read.

---

# 14 — Architecture Bible

**The Threshold law (House-wide):** you never teleport into a room. The chain is **Entrance → Grand Hall → [Threshold of X] → Room.** For the Library: Grand Hall → `/library-door` (Threshold of the Library) → `/library` (Hub) → zones. Every zone keeps a **"← The Library"** return; the Hub keeps **"← The Grand Hall."**

**"Architecture speaks through the walls":** titles are *engraved into the renders*, not floated in HTML. No CSS labels sitting on top of doors. If a room needs to name a way-through, it's painted into the art or whispered on hover — never a floating chip.

**Human scale & camera continuity:** every render is at **human eye-level**, standing height. The camera *continues* from the door-peek of the threshold into the room — same implied position, no jump cut. Every click = a physical movement through space, never a page-swap.

**The cover-plane technique (how the art becomes the page):**
```
.env  { width:102vw; aspect-ratio:W/H; object-fit:cover; }   /* the render fills the frame */
.spot { position:absolute; left:X%; top:Y%; }                /* hotspots pinned in % on the plane */
```
Hotspots are pinned in **percentages measured off the actual render** (grid-overlay the image, read the object's center). Mousemove drives a subtle parallax on `.env` (translate a few px) so the room has depth. This is exactly the Machine Room / Observatory build — the Library reuses it wholesale.

**Zones are `public/*.html`** (served at root), reached by absolute routes. The Hub is `src/pages/library.html` → `/library`. Keep zone pages self-contained (the engine is inlined) so one broken zone never darkens the wing.

---

# 15 — Color Bible

**Ratified law: color identity is constant per room.** A visitor should know where they are by the light alone. Never let a room drift toward another room's color.

| Room / Wing | Identity | Notes |
|---|---|---|
| **Library (all zones)** | **Gold** | warm lamplight; Terminal keeps a cold-cyan *accent* but the room is gold |
| The Edit | Rose | |
| Machine Room | Crimson + bronze | parent room; VELVET lives inside it |
| Work With Luna | Teal | *(Hall's Work-door art still reads amber — flagged for a Hall regen)* |
| Luna's Room | Silver-blue | |
| Your Room | Warm | where the collection lives |
| Observatory | Moonlight | the still wing, reached via Machine Room descent |
| VELVET | Crimson (`#C23A4C` / `#B4283F`, **provisional**) | signal red under review |

**Within the Library**, gold is the identity; the *only* sanctioned cool intrusions are the Observatory-facing beats (Terminal monitor, Upstairs balcony glass, Secret Patio night, Mirror reflection). Those cool touches are intentional threads pointing at the Observatory wing — not color drift.

**Red-voice `#B87283`** is the AA-safe speaking red for text on dark. Body copy = Old Page on Charcoal Velvet.

---

# 16 — Navigation Bible

**The Cast (fonts) — one voice per role, House-wide**

| Font | Role | Speaks as |
|---|---|---|
| Cormorant Garamond | **Architect** | room & zone titles (small-caps), engraved names |
| Source Serif 4 | **Narrator** | journals, letters, body prose, collectible text |
| Jost | **Librarian** | hover whispers, verbs, UI chrome |
| IBM Plex Mono | **Machine** | Terminal, system cues, descent captions |

**Route map**
```
/                     Entrance → Grand Hall (index.html)
 └ /library-door      Threshold of the Library
    └ /library        LIBRARY HUB ──┐
                                    ├─ /main-table      Main Table   #001
                                    ├─ /bookshelves     Bookshelves  #002  (BUILT)
                                    ├─ /fireplace       Fireplace    #003 ⭐
                                    ├─ /hidden-desk      Hidden Desk
                                    ├─ /terminal        Terminal     #004
                                    ├─ /upstairs        Upstairs     #005
                                    │   └ /secret-patio  Secret Patio (via Upstairs only)
                                    ├─ /loose-pages     Loose Pages  #007
                                    └ /mirror           Mirror       [PROPOSED]
```

**Nav tree (Luna's, as ratified) — Hub → zone → interactions**
```
Library Hub
├── Bookshelves   → Rare books · Secret ladder · Lost pages · Hidden lever
├── Fireplace     → Sit · Tea · Astro · Journal
├── Hidden Desk   → Letters · Wax seals · Typewriter · Drawer
├── Terminal      → Threads · Substack · Observatory Logs · Easter Eggs
└── Upstairs      → Balcony · Telescope · Reading Alcoves · Secret Patio
   (Main Table · Secret Patio · Loose Pages · Mirror interactions: PROPOSED, §02/08/09/10)
```

**Return / continuity rules**
- Every zone: **"← The Library"** → `/library`.
- Hub: **"← The Grand Hall"** → `/`.
- Upstairs ↔ Secret Patio: **"↓ Back inside" / "step out"** (vertical + outdoor continuity).
- Never a hard cut between adjacent spaces — fade or push, always.

**The living-House engine (every zone shares it)**
- One daily seed (`daySeed` from the date) drives `rand(n)` (Math.sin-based) so the House is the *same for everyone today, different tomorrow*.
- Seed controls: Astro's position (or absence), moon phase in the glass, which hotspot is flagged `is-new` (blue), and whether rare/secret finds fire.
- The point: someone returns tomorrow to see *did Astro move · is there a new page · did the compartment open.* That return is the whole game.

---

## The Hub interaction model — ✅ BUILT (Luna's ratified design, 9 Aug 2026)

No menu. The Hub is one photoreal room; invisible hotspots sit over real objects. Hover breathes a whisper (Luna's exact lines); click and the **camera walks you in** (the room scales up from the point you clicked, lanterns pass, fade). Loose Pages is the exception — the camera **kneels** and the page fills the screen.

**Whispers (ratified, verbatim):** Bookshelves *"Some books remember who opened them."* · Fireplace *"The fire has been waiting."* · Hidden Desk *"Someone stopped writing."* · Terminal *"The House is awake."* · Loose Pages *"One page escaped."* · Mirror *"Look again."* · Upstairs *"Higher."* · Secret Patio *"The night is still reading."*

**Progressive discovery — the House reveals itself over days.** Unlock = days since first entering the Library (stored in `hol_lib_first`; a clicked way stays open forever via `hol_lib_found`).

| Day | Reveals | Source |
|---|---|---|
| 0 (first night) | Bookshelves, Fireplace | [RATIFIED] |
| 1 | Main Table, Upstairs | [proposed timing] |
| 2 | Terminal | [proposed timing] |
| 3 | Loose Pages ("a paper wasn't there yesterday") | [RATIFIED] |
| 7 | Hidden Desk (the Astro + key beat) | [RATIFIED] |
| 14 | Mirror ("reflects someone walking") | [RATIFIED] |

*Verified: a fresh visitor sees only the Shelves and the Hearth; day 8 shows seven ways; the Mirror stays sealed to day 14.*
*Dev peek: append `?all` to `/library` to reveal every way while building.*
*Still to script as full scenes: the day-7 "pet Astro → he jumps down → a key behind him" moment, and the day-14 "someone walking in the glass." Hooks are in place inside the Hidden Desk and Mirror zones.*

## Astro — the House's living heart  *(ratified direction, v1.2 — Luna)*

Astro should not merely *move*; he should *live*. Randomness reads as random. **Routines** read as alive — the House feels inhabited because the cat has a life whether or not you're watching. Astro is a shared, House-wide character (he can appear in any zone), driven by the daily seed so everyone meets the same Astro on the same day.

Behaviours to build (a state per day/hour, not a coin-flip): **sleeping** · **cleaning himself** · **staring at birds outside a window** · **watching you** (follows the cursor slowly) · **sitting on an open book** (and refusing to move) · **chasing a drifting page** · **gone for a few days** (his absence is itself an event — "Astro wasn't there today"). The rare finds tie to him: on the day he's asleep on the Hidden Desk, petting him is what reveals the key. Implementation note: Astro becomes a small shared module (`astro.js`) the zone engine imports, choosing today's behaviour + location from the seed, so every room speaks the same cat.

## Blueprint 004 — The House Remembers  *(ratified direction, to build — Luna's "biggest recommendation")*

Not saved progress. Not achievements. Not XP. **Memory.** The House quietly remembers your journey, and later fills *Your Room* (`/you`) with the evidence of it — so returning feels like coming back somewhere that knows you.

What the House remembers (stored on-device, later synced): **first room you visited** · **your favourite room** (most-returned) · **books opened / pages collected** · **how long you tend to stay** · **the moon phase you first entered on** · **the first time you met Astro** · **which chair you always sit in**.

How memory *shows itself* — quietly, never announced:
- Sit at the Fireplace enough times and, one visit, your favourite blanket is already folded over the chair. Nobody tells you.
- Keep every letter and, months on, a shelf holds a binder: **“Letters You Chose To Keep.”**
- Your Room slowly accumulates the artefacts of where you've been and what you kept — a home, not a dashboard.

Data model (extends the existing `hol_collection` / `hol_lib_first`): a single `hol_house` record — `{firstRoom, firstSeen, firstMoon, metAstro, visitsByRoom{}, dwellMs{}, opened[], kept[] (already have), favouriteChair}`. Every zone writes to it on arrival/interaction; Your Room reads from it to render the "evidence." Build in slices — the cheap first brick (first-visit stamp: first room, first moon, first-met-Astro) can ship immediately since the plumbing already exists.

## The Artifact Viewer — ✅ BUILT (Luna's ratified system, 9 Aug 2026)

No object opens in a generic modal. Each collectible has its own presentation that **begins from the object and expands into view**; the room stays visible behind it, thrown out of focus (depth-of-field blur); closing returns you exactly where you stood — no reloads. One reusable engine drives every zone (`kind` → artifact type; `rare`/`rarity` → dressing).

**Templates (built):**

| Type | Presentation | Actions |
|---|---|---|
| **Book** (Journal, Rare Book) | opens onto a two-page spread, gutter shadow, parchment | Continue Reading · Keep in My Room · Close Book |
| **Page** (Luna Note, Quote) | floats up off the floor, turns once, settles flat | Read · Keep · Leave It Here |
| **Letter** | arrives sealed; pressing the wax **cracks the seal** and the letter unfolds | Read · Keep · Refold Letter |
| **Object** (Rare Find) | museum display — the relic **rotates**, lore beside it | Keep · Return |
| **Mirror** | the glass fills the view; ~4.5s later something stirs in the reflection | Keep · Look away |
| **Passage / Cat** | a quiet parchment beat (Step through → / Leave him be) | — |

**Rarity dressing:** common = plain parchment · uncommon = +wax + faint particles · rare = leather-gold scroll + glow + a `RARE` tag · **legendary = the House reacts** — a warm pulse across the whole screen and *"The House notices."* The two brass keys (Bookshelves lever, Hidden Desk drawer) are legendary.

**Design language:** dark academia · museum · Victorian archive. Aged parchment, brass, wax, leather-gold. No glassmorphism, no white cards, no generic dialogs — every viewer is built in scalable CSS so it stays crisp.

**Inventory philosophy (direction):** Keep is not "add to a list" — it is **placing the object into Your Room** (`/you`). Later, kept things become furniture there: books on shelves, letters stacked on the desk, keys on hooks, paintings on walls, pressed flowers between books, constellations found. Your Room becomes the record of your journey — a home, not a dashboard. *(This is the presentation layer for Blueprint 004 — The House Remembers.)*

**Still to build:** the Painting template (frame grows, subtle animation — no painting objects placed yet); the Terminal walk-in (camera to the CRT instead of a viewer); rare-tier custom sound; and Your Room's furnished-inventory view.

## The Interaction Layer — ✅ REBUILT (Luna's interaction pass, 9 Aug 2026)

**North star:** with nothing hovered, a screenshot of any Library room looks like untouched concept art. Nothing reveals it's a webpage until you get curious and touch something. *(Verified — the at-rest render is pure environment.)*

- **Invisible at rest.** No orbs, no markers, ever. An object only responds when the cursor enters its (invisible, generous) hit area, keyboard focus reaches it, or — on mobile — first tap wakes it and second tap acts. The response is a soft *localized* light on the object itself, not a floating circle.
- **Whispers are placards from shadow.** No cream cards — the line and verb materialise (blur→clear) out of a soft dark halo, then vanish when you leave. The writing Luna liked is kept; only the treatment changed.
- **Density over objectives.** Rooms now carry 8–14 objects, not four, sorted by category so wandering is rewarded: **navigation** (walk somewhere) · **artifact** (Read/Keep/Leave) · **ambient** (tiny in-world reaction, no reward) · **lore** (a House/world detail) · **rare** (seed-gated). Bookshelves and Fireplace carry 14 each.
- **In-world reactions, no modal.** Ambient objects answer in place (the clock ticks louder, a candle gutters, a page settles) as a line rising near the object. "Sit" settles the camera toward the chair, dims the room a touch, and holds until you move — no paper card. Astro never opens a modal.
- **Object-matched verbs.** Book: *Keep in My Room / Return to Shelf.* Letter: *Break the Seal / Keep / Refold.* Page: *Read / Keep / Let It Fall.* Key: *Take / Leave.* Chair: *Sit.* Ladder: *Climb.*
- **Lighter depth of field.** Examining an artifact blurs and vignettes the room but keeps it perceptible — you're holding something *inside* the room, not on another screen.

## Astro — ✅ a resident, not wallpaper (sprite layer, 9 Aug 2026)

Astro is a **transparent sprite layered above the room**, from Luna's sprite pack — never baked into a background. Stack: `room bg → objects → Astro (transparent PNG) → whispers`. Seven poses cut clean: sit, look-up, walk, red-bed, loaf, on-a-book, curled. The daily seed picks his **pose, his spot, and whether he's here at all** (some nights he's elsewhere; the Mirror he visits only rarely). He breathes gently, casts a real shadow, and on click reacts in-world — a soft glint and a line rising beside him — never a card.

Astro now **roams all nine rooms** — Luna's fixed backgrounds removed the painted cat from Bookshelves, Hidden Desk, and Terminal, so those three became roam rooms too. No more baked cat anywhere; he's a sprite everywhere. *(Idle: breathing + a gentle stir. The blink was tried and removed at Luna's call.)*

## Mobile — ✅ drag to look, tap to touch (9 Aug 2026)

Desktop looked around with the mouse; a phone can't, so the room sat cropped and unreachable. Now, on touch devices, **drag horizontally to pan the camera** across the full-width room (clamped to the edges), and **tap once to reveal a thing, tap again to touch it** (a drag never triggers a tap). Applied across the Hub and all nine rooms. Desktop mouse-look is unchanged.

## Luna's Room & Your Room — ✅ BUILT (9 Aug 2026)

Two personal rooms off the Grand Hall, on the same interaction engine (invisible hotspots, placards, mobile drag, Astro roaming).

- **Luna's Room** (`/luna.html`, violet tone) — her sanctuary: the LUNA computer, moodboard wall, city view, canopy bed (rest), the amethyst **altar** (keep an intention stone), shelves, the "Dark Soft Energy" neon, records, a spellbook-journal. The computer is a `link` hotspot awaiting Luna's real MySpace/Tumblr handles.
- **Your Room** (`/you.html`, warm tone) — **the payoff for every Keep, and the first working slice of Blueprint 004.** The "House Network" computer and the "Everything you've kept lives here" frame open a live **collection view** that reads `hol_collection` and shows every kept item with the room it came from (empty state included). Window seat (sit), your journal, the Letters & Notes basket, "Memories · Stories · Soul."

Both doors are now **open** — the Grand Hall's Luna's-Room and Your-Room thresholds cross into the built rooms (were "still being built"), and the House Map quick-nav points to them.

## Blueprint 005 — The House Network: auth as arriving home  *(ratified direction, 9 Aug 2026)*

> The user should never think *"I'm logging into Velvet."* They should think *"I'm going home."*

**Login becomes the first thing you unlock — ✅ WIRED to real Supabase Auth.** No auth screen — a ceremony. First visit: *"Welcome to The House. Every visitor is given a room… How would you like your door to be known?"* (optional door name → stored as `display_name`) → **Receive Your Key** → *"Forge your key. Keep it somewhere safe — it opens your room."* (email · key · confirm key) → on success the 🗝→🚪 **unlock animation** (*Unlocking… · The House remembers you. · Welcome home.*), fade, and you're in **Your Room**. Returning visitors get *"Welcome back. The House recognizes you."* (email · key · Enter). The word **"password" never appears — it is always a Key.**

Auth decisions (ratified): **email + Key** as the foundation, architected so **Apple/Google slot in later as more "keys"** without changing a word the user sees (all methods = *"using your key"*). Magic links were rejected — *"someone just discovered a magical mansion, and now Gmail enters the story."* Session-aware (`supabase.auth.getSession()` skips the ceremony for signed-in residents). The signup uses `supabase.auth.signUp({ email, password, options:{ data:{ display_name } } })`, which fires the room-provisioning trigger — so **the room exists the instant a key is forged.**

**Supabase config to verify (Luna, in the dashboard):** (1) Authentication → Providers → **Email enabled** (default on); (2) **"Confirm email"** — if ON (default), a forged key needs an email confirmation before *logging in* (the room is already created either way); the flow shows *"Confirm it in your email, then return."* Turn it OFF for instant *"welcome home"* with no email step (less strict, more immersive — your call); (3) Authentication → URL Configuration → add the deployed domain to **Site URL / Redirect URLs** (needed if Confirm email is on). The publishable key is embedded client-side (safe by design; RLS protects data). The GEMINI/service secrets are never touched.

**The rename — VELVET stops being "the app."** It becomes one room in a larger House:
- **The House** — the whole experience.
- **Your Room** — your personal space and profile.
- **The Studio (VELVET)** — where you create.
- **The Library** — where you discover.
- **The House Network** — where you visit other people (the computer).

**Two identities: `users` + `rooms`.** Every signup provisions a room. Your room *is* your profile — people don't visit `@luna`, they visit *Luna's Room* (Animal-Crossing / Hogwarts-dorm / old-Tumblr energy).

**Room architecture — ✅ LIVE IN SUPABASE** (project `velvet-muse-studio`, applied 9 Aug 2026). Additive only; Velvet's existing tables untouched. Every table has Row-Level Security: rooms are publicly *visitable* (Hallways) but only the owner can change theirs.

| Table | Purpose |
|---|---|
| `profiles` *(extended)* | Velvet's table + new `username` (unique), `avatar`, `bio` |
| `rooms` | one per resident — `name`, `theme`, `wallpaper`, `music`, `lighting`, `layout` jsonb, `computer_theme`, `is_public` |
| `room_items` | every Keep / earned object as furniture — `item_type`, `title`, `source`, `position` jsonb |
| `room_visitors` | "Luna visited your room" — `visitor_id`, `visited_at` |
| `room_customizations` | wallpaper, curtains, furniture, plants, fireplace, pet, music, weather |

**The signup hook now gives every visitor a room.** `handle_new_user()` was extended (Velvet's profile + workspace creation preserved exactly) to also provision a `rooms` row + `room_customizations` on account creation — exception-guarded so it can never block a signup. *"A room is created"* is now literally true. `hol_collection` (localStorage) is the front-end shadow of `room_items` until the client is wired to Supabase.

**Every action becomes furniture — not badges, not XP.**

| You do this | This appears in Your Room |
|---|---|
| Keep a book | a book on a shelf (Shelf 3, forever) |
| Write a journal | a journal on the desk/bed |
| Moonmark a scene | a framed illustration on the wall |
| Finish a Muse | her portrait |
| Save a playlist | vinyl records |
| Upload a profile picture | a framed portrait |
| Keep enough letters | a bound volume: *Letters You Chose To Keep* |

**The computer = MoonNet, the operating system of The House (BUILT).** Not a menu of brand links — an OS that *boots.* Open the computer (in Your Room and Luna's Room) and it runs a boot sequence — `MOONNET / Connecting… / ✦ The House remembers. / ✓ Velvet ✓ Letters ✓ Conversations ✓ Hallways ✓ Observatory / Connected.` — then the desktop resolves:

> **MOONNET** · Connected to The House
> ✦ Continue Creating → Velvet · ✦ Your Room · ✦ **Hallways** · ✦ **Conversations** · ✦ Letters (Substack, in-House) · ✦ Observatory (discover) · ✦ Settings

VELVET stops being "the app" — it's one application running on MoonNet. **The House is the product; VELVET is the first room people spend time in.** The eventual tree: `MoonNet → { Velvet(Studio/Library/Codex), Your Room, Hallways, Conversations, Letters, Moss & Moon, Observatory, … }`. The outside platforms (Threads, Substack) still exist; MoonNet wraps them in the House's own language, so if native versions ship later, users never notice the seam.

**MoonNet is the hub, and destinations are DATA (✅ built).** The desktop reads `public.moonnet_destinations` (slug, title, icon, kind, href, soon_note, enabled, requires_auth, sort_order) over the public API — never hardcoded. Sign-in flows to Your Room → MoonNet → *Continue Creating* → Velvet, not straight to Velvet. To point *Continue Creating* at Velvet (or later, your own platforms for Letters/Conversations), you edit **one row's `href`** — no code change, no redeploy. Front-end falls back to a built-in list if offline. *Current rows:* Continue Creating · Your Room · Hallways · Conversations · Letters · Moss & Moon · Observatory · Settings (Continue Creating / Letters / Moss & Moon have `href` null → "warming up" until set).

**The resident is the source of truth.** `Resident → { Room, Muses, Keeps, Collections, Canon, Letters, Conversations, Velvet Projects }`. Everything belongs to the resident; Velvet simply edits some of it. Generate an image → a framed print appears on a wall; publish a Letter → a bound journal on a shelf; favourite a Muse → a portrait above the fireplace; 100 creations → a gold plaque; visit often → plants grow, candles multiply. No popups, no achievements — the House simply remembers.

- **Hallways** (BUILT preview) — you don't click usernames, you *open doors*: "Doors are waiting tonight — ○ A Botanical Conservatory · ○ A Witch's Study · ○ A Poet's Apartment · ○ A Cyberpunk Loft · ○ A Cottage Kitchen." Luna's Room is a live door; the rest fill as rooms are claimed. This is the visiting layer (the old MySpace/Tumblr idea, in-world).
- **Conversations** (BUILT preview) — the House's version of Threads: little notes pinned around the House. *"Luna left a thought — 'the moon remembers every version of you.' ♡ 247 · Leave your own note…"* Not a clone; in-world.

**The vocabulary (ratified) — MoonNet replaces social-app language:**

| App word | House word |
|---|---|
| Home feed | **MoonNet** |
| Follow user | **Visit Room** |
| Profile | **Room** |
| Bio | **About this Room** |
| Posts | **Memories** |
| Pin / Save | **Keep** / **Collected** |
| Internet | **MoonNet** — *"Connected by moonlight."* |

**Open for Luna:** (1) ✅ DONE — room tables live in Supabase; (2) wire the front-end: `Receive Your Key` → Supabase Auth signup (site needs the Supabase URL + anon key + client), and swap Your Room's collection from `hol_collection` to `room_items`; (3) real handles + Velvet route for MoonNet destinations; (4) confirm the area rename as canon.

## Change log
- **v2.38 — 15 Aug 2026** — **First asset rendered + the first composite scaffold stands.** Luna rendered **`LIB_window_gothic_triple_v01.png`** from the ticket — three Gothic frames + tracery + crescent-moon inlays + ivy, **transparent background, isolated exactly to spec** (no wall, no sky, no props). The House's first real brick. Built **`public/library-composite.html`** — the first working **composite**: **Layer 0 (living sky** — moon, stars, slow clouds, treeline) behind, a **rain** layer, the **Layer 1 window slot** (an `<img>` at `assets/library/LIB_window_gothic_triple_v01.png` that auto-fills when present, else shows a labelled "drop the render here" placeholder), a warm **hearth glow** on the inner glass, and **parallax** (far sky drifts less than the near window — verified: sky −2px vs window −5px, zero JS errors). **Blocker (honest):** the render is pasted in chat, not a reachable file — so it can't be loaded into the layer yet. **The one action:** save it to the repo at `public/assets/library/LIB_window_gothic_triple_v01.png` (or attach it as a file) → then I stage it, finalize the real composite (sky through the glass, rain tracing down), screenshot it, persist it as an artifact, and wire it into the actual Threshold zone. Manifest updated (Layer 1: **rendered ✅ → drop-in pending**). *Spec → standing: the first layer of the House is one file-drop away from moving.*
- **v2.37 — 15 Aug 2026** — **The House Asset Library is stood up (naming law, folders, shared DNA, versioning) + the first render-ready ticket.** *Luna: "We're not making pictures anymore — we're making the House Asset Library. The next thing we make isn't 'the library,' it's `LIB_window_gothic_triple_v01.png`."* Built `docs/asset-library/`: **`README.md`** — the **naming law** `<ROOM>_<category>_<descriptor>_v<NN>.<ext>` (ROOM codes LIB/CON/CAF/GDN/PEN/HALL/OBS/LIS + **`GBL` shared**; `.png` transparent stills / `.webm` alpha loops), the **folder structure** (`public/assets/<room>/…` runtime + `_shared/` for global DNA + `docs/asset-library/` catalog), **shared DNA** (the same candles/raven/books/leather/moonlight pulled from `_shared/` so the whole House feels *related*, not coincidentally similar — "one bronze raven *becomes* the House's raven"), and **versioning** (never overwrite — `v01→v02`; keep all; repoint "current" and every scene updates at once → *the House ages, it isn't replaced*). **`MANIFEST.md`** — the Library's asset list far→near with per-asset layer + status (sky ✅ live · windows 🎫 ticket→render · rain/architecture/shelves/fireplace/furniture/props/particles queued). **`tickets/LIB_window_gothic_triple_v01.md`** — the **first render-ready ticket**: ID, Layer 1, runtime path, 2560×1600 transparent, the isolated render brief (three gothic frames + antique glass only — *no* wall/sky/moon/props), the twenty-years line, and the drop-in→composite workflow. Pointer added to `ASSET-PRODUCTION-STANDARD.md`. **Honest note:** this session has **no image-generation tool** — the photoreal PNG is rendered in Luna's image tool; I write the tickets + do the compositing, and the moment `LIB_window_gothic_triple_v01.png` lands in `public/assets/library/` I wire it in as Layer 1 (over sky, under architecture) with a rain overlay + parallax. *This is the turn House of Luna stopped being "a website with pretty AI images" and became "a handcrafted digital world built from reusable, living assets."*
- **v2.36 — 15 Aug 2026** — **We're not painting rooms, we're building an asset pack (the production method locks in).** Luna generated a stunning full three-window night scene — then **caught it herself**: it's a *concept piece*, not a production layer, because it bakes windows + architecture + scenery + candles + raven + flowers + books into one un-swappable image. The refinement: **every layer renders as an isolated, transparent-background asset — a game asset / a LEGO brick — that the engine assembles.** `visual-bible/ASSET-PRODUCTION-STANDARD.md` written: the **concept-art vs production-asset** distinction (concept shows the destination; assets are the bricks); the **isolation rules** (transparent bg · one subject only · straight-on & centered · House-Standard lighting at rest · generous margins · one job); the **asset-brief format** that replaces *"make the room"* (*"Generate ONE [subject] asset — straight on, centered, isolated, transparent background, no wall/sky/scenery/props…"*); the **Library Asset Pack manifest** (`sky.png` L0 · `windows.png` L1 · `architecture.png` L2 · `shelves.png` L3 · `fireplace.png` L4 · `furniture.png` L5 · per-prop `candles/raven/tea/telescope/books/flowers/key.png` L6 · `particles.png` L7 · + sound/interactions), stacked far→near, each independently animated & **swappable for seasons without regeneration**; and the rule that **each manuscript now yields TWO artifacts** — the **Composed Vision** (Scene Direction — the assembled north-star look, e.g. Luna's concept image) and the **Isolated Asset Brief(s)** (the transparent stickers we actually render). Reconciled `layer-1-windows-v1.0.md`: its Scene Direction is now labelled the *Composed Vision*, and a new **Asset Brief** section specifies the isolated render (three frames + glass only; **no** wall/sky/moon/scenery/candles/books/ivy — those are Layers 0/2/6; rain/condensation = the animated overlay). *"Stop saying 'make the room.' We're rendering an asset pack" — the professional, AAA-studio way; slower, total control, rooms that evolve for years without starting from scratch. (Luna's concept image lives in chat only — to archive it as the Windows "Composed Target," drop it into the repo or attach it.)*
- **v2.35 — 15 Aug 2026** — **Set Piece 002 — The Windows (Visual Bible Layer 1), Canon.** *"This isn't a window. This is the House breathing."* `visual-bible/layer-1-windows-v1.0.md` — Luna's full production doc, enshrined. Purpose: the windows are what make the Library a *place* not a *room* — the reminder the House is part of a much larger world. Style: **1,000-year-old cathedral windows that slowly became part of a library** (Gothic · Victorian · Dark Academia · Handcrafted — *NOT church, NOT fantasy game, REAL*). **Three** windows (middle tallest, near floor-to-ceiling — make the visitor feel *small*); **hand-carved dark walnut** frames with imperfections + hidden ravens, crescents, pressed vines (unnoticed Day 1); **hand-blown antique glass** (moonlight bends, rain distorts, stars shimmer — slightly dreamlike); **tiny stained-glass inlays only at the edges** like jewelry (crescent · ivy · raven feather · stars) — never full stained glass. **Rain that lingers** — droplets collect, two drops meet and race down (*felt, not noticed* — the layer's core memory); snow (winter only, huge slow flakes, never a blizzard); storms (rare, distant lightning softly lighting far trees). **Outside: never civilization** — only ancient trees, castle rooftops, misty mountains, moonlight; the House is *somewhere*, unknown. The **ledge holds stories not decoration** (ivy, a feather, a brass telescope, a dried flower, a candle, an old forgotten key). Palette: silver/charcoal/midnight-blue/violet/navy + **warm amber firelight on the inside of the glass**. Animation *almost invisible*; **rain grows louder the closer you stand** (LAW 012/009 — stand there and be rewarded). Refuses: city lights, roads, people, dragons, bright stained glass, a giant moon, obvious magic — *wonder comes from restraint.* **Compositing:** Layer 1 sits in front of Sky (0), behind Architecture (2); frames+glass are a photoreal render, rain/snow/condensation the animated overlay; generous negative space so foreground layers stack in front. Includes Luna's full **Scene Direction**. **New standing rule (added to the Room Manuscript Standard):** every Scene Direction now closes with — *"Design this as though someone will remember it twenty years from now."* — not for the AI, for **us**; every set piece must earn its place. **Memory:** *"I remember standing by the Library window while the rain slowly traced the glass."* Visual Bible status: **Layer 0 Sky ✅ built · Layer 1 Windows ✅ Canon (art pending).** Next up (Luna): **Layer 2 — Architecture** (walls, arches, ceiling, the stone bones — where the House starts to feel ancient). *No art generated — pipeline holds.*
- **v2.34 — 15 Aug 2026** — **The layers were compositing layers all along: rooms are stacked sets, not flat images.** Luna's biggest technical crystallization — reconciling back to the original "Visual Bible layers" and seeing *why* they mattered: **the Library is a composited set** (Pixar / game engine / theatre stage), built from images **stacked** and **animated independently** — sky drifts, candles flicker, fire pops, dust floats, the raven blinks — **without regenerating the room.** The stack (far→near): **0 Sky ✅** (already a live layer) · 1 Windows · 2 Architecture · 3 Bookshelves · 4 Fireplace · 5 Furniture · 6 Objects (tea/books/candles/raven) · 7 Atmosphere (dust/embers/ghosts) · +8 Sound · +9 Interactions. **Two truths became one:** (a) **a manuscript is a layer's design doc** — the Fireplace manuscript (№001) is the brief for **Layer 4**, Bookshelves → Layer 3, Sky → Layer 0 (*one manuscript, one layer, one job, one masterpiece*); and (b) **the layers ARE the interactive zones** — the Fireplace is Layer 4 in the composite *and* Zone 1 you click into (the stack is the hub; touching a layer is navigation). **The Threshold = the FINAL COMPOSITE** (Sky+Windows+Architecture+Shelves+Fireplace+Furniture+Objects+Atmosphere = the Threshold Scene); its art is the whole stack, never a single plate. **Pipeline:** 📖 Manuscript → 🎨 Layer Design → 🖼 Layer Render (one job) → ⚡ stack → 🏡 alive — *no AI slop* (we never ask for "a cozy library"; we ask for "the Fireplace layer, at rest, transparent bg"). **The Superpower — swap a layer, not the room:** want Christmas in six months? Don't regenerate the Library — swap **Layer 7** (snow, garland, a different candle, warmer blankets) + nudge Layer 0's weather. *The House evolves without losing its soul* (already lawful — LAW 006 lunar cycle + the Living-House rule work this way; the engine behind the parked Seasons Bible). **Status:** this **supersedes the single-plate approach** — the existing photoreal rooms (Conservatory etc.) are now **concept art / functional v1**, kept and loved; the new production standard is **layered composites**, re-rendered one masterpiece at a time. **Layer 0 already proves it** (the living CSS sky is a real, separate, animated layer). Rewrote `visual-bible/00-INDEX.md` (the compositing model, the stack, the pipeline, the superpower); noted the Threshold's art = the composite. *No art generated — the pipeline holds; but the pipeline itself just got its final, correct shape.*
- **v2.33 — 15 Aug 2026** — **We stop decorating rooms and start choreographing them: the emotional floor plan + LAW 012.** *Luna: "We're no longer inventing features — we're arranging rooms, like an architect. Design the relationships between the rooms. How do they talk to each other? That's what castles do."* The Threshold doesn't need a room manuscript — it needs an **environment**: a 360° decision-field whose only job is *"help the visitor decide where to wander."* **New law: LAW 012 — The House Is One Connected Place** (no room is an island; from anywhere you *sense* the neighbours — a glow, a crackle, rain on far green glass, music from above, the smell of tea; you always feel the next room before you enter it; the House is a **castle, not a gallery of separate images** — extends LAW 009 from motion to stillness). **Built `the-threshold-floorplan.html` — "The Library, Overheard"** (delivered + persisted as artifact **`the-library-overheard`**): an *emotional, not technical* floor plan — the Threshold glowing at the center with the rooms radiating, each reaching toward you with a different **sense**: 🔥 Fireplace (hear the crackle, smell the tea, warm glow) · 📚 Living Stacks (scale, a page turning, a ladder rolling, old paper) · 🪜 Upstairs Gallery (music from above) · 🌿 Conservatory (green glass, rain, earth & flowers) · 🕯 Keeper's Desk (a lamp, an open book, a candle just out — *someone was just here*) · 🌙 Patio/Garden (open door, moonlight, cool air). **This is environmental storytelling** — you choose by sense, not by menu, and everyone's senses pull them to a different first door. Captured the connections + an **honest inventory** in `THE_LIBRARY_MAP.md`: Zone 1 Fireplace = №001 ✅ manuscripted · Zone 2 Living Stacks = richly *envisioned*, manuscript pending (next) · Zone 3 Upstairs = envisioned · Conservatory & Patio = *built rooms*, manuscripts retroactive · Keeper = Bible ✅. **The graduation:** we're no longer decorating rooms — *we're choreographing how someone falls in love with the House, one glance and one doorway at a time.* No art generated; the pipeline holds.
- **v2.32 — 15 Aug 2026** — **The Threshold IS the Hub: Environmental Navigation.** Luna's cleanest architectural crystallization of the week — *"the Threshold isn't a transition, it's the Hub of the Library, the decision room."* You arrive via the 3–5s reveal (№003) and it settles you into an explorable **hub**: think Zelda / Myst / Resident Evil — you enter a room and *you* decide what interests you, eyes wandering (warm fire? those shelves? that staircase? who's at the desk?). Named canon: **Environmental Navigation** — the architecture itself is the wayfinding; no arrows, no quest markers, no minimap, no menu — *the room IS the menu* (elaborates LAW 010). The quiet miracle: because every visitor's eye lands somewhere different first, **everyone builds a different first memory** — the Prime Law achieved through architecture, not features. **Every zone radiates from the hub, and each becomes its own Room Manuscript:** 🔥 Fireplace → **Zone 1** (№001 ✅) · 📚 Bookshelves → Zone 2 · 🪜 Staircase/Upper Gallery → Zone 3 · 🪑 Reading Tables → Zone 4 · 🕯 Keeper's Desk → Zone 5 · 🪟 Windows → Zone 6 · *(deeper: Hidden Alcove · Rare Books · Endless Stacks)*. **This is Blueprint 004 realized** — the cards were always placeholders for exactly these objects; the hub is the room they become. Updated `003-the-threshold-v1.0.md` (reframed as the Hub — the 3–5s reveal has 0 interactions, the hub it settles into has many, one per zone), `THE_LIBRARY_MAP.md` (Environmental-Navigation section), and the manuscripts `INDEX.md` (the zone→manuscript radiate-map). **Focus unchanged:** perfect the Threshold hub + the Fireplace set first; all other zones stay queued manuscripts. *No art generated — the pipeline holds.*
- **v2.31 — 15 Aug 2026** — **The Library is a room, not a hallway: navigation by curiosity, and the earned map.** Luna dissolved my linear gate-question ("does the Threshold drift to the fire?") — *"NOOO. The House isn't linear, it's architectural."* The Library is a **space you stand inside**, entered at the Threshold with the Fireplace one way, the Keeper's Desk another, Reading Tables ahead, a Hidden Alcove deeper, and a staircase up to the Upper Gallery → Shelves → Rare Books → the Endless Stacks. **Two new House Laws:** **LAW 010 — The House Has No Menu; the World Is the Interface** (architectural not linear — never on rails, always free to wonder *"what's over there?"*; **the shelves are the menu** — you navigate by touching books/lanterns/staircases/tables/letters/candles/doors; and **curiosity, not puzzles** — no riddles, no "solve this to enter," just *"I wonder what happens if I click that"*: a moon carved into a shelf opens a passage, a book left sticking out rotates a secret bookcase — rewards for *attention*, never tests; **already the engine's grammar** — invisible hotspots + `walkTo` + objects-as-doors, no menu anywhere) and **LAW 011 — The Map Is Earned** (no map at first — you genuinely wander and discover, *"wait, there's a poetry shelf?"*, and that first-week disorientation is a feature; then the House remembers and the Keeper offers a small map — *"you've been here before"* — earned, not given; **first visit you walk, hundredth visit you may jump to your chair by the fire** — mystery for the explorer, ease for the resident; the in-world network overlay is the seed of the earned map). **`THE_LIBRARY_MAP.md`** — the Library's spatial layout (Luna's map), the **two ways to move** (🌙 Natural Exploration default · 🗺 the Earned Map for residents), the **world-is-the-interface** object catalog, and the **secret-passage** discovery examples (moon-shelf → Poetry Wing; protruding book → rotating shelf). **Threshold №003 gate resolved:** the 3–5s reveal **settles and hands you the room** — it does *not* carry you to the fire; you land *inside* the Library and decide where to walk (warmth pulls, nothing forces). *Both kinds of user honored — the explorer who wants wonder, the resident who says "take me to my chair by the fire." The House never loses its mystery; it also becomes home.*
- **v2.30 — 15 Aug 2026** — **The Approach: the House unfolds in layers, and we find the moment where "nothing happens."** Luna refined the mental model twice in quick succession — we'd conflated three spaces. The clean, ratified **Approach** (the order you move through the House, each revealed gradually): 🌌 **Layer 0 Night Sky** ✅ · 🏰 **Layer 1 Grand Hall** ✅ (kept & loved — *illustrated* fidelity, and that's good: **fidelity deepens as you go inward**) · 🚪 **Layer 2 The Library Door** ✅ **done** · ✨ **Layer 3 The Threshold** 🔄 *current* · 🔥 **Layer 4 Zone One — Fireplace** (№001) · → Reading Tables → Shelves → Upper Gallery → Endless Stacks. **Two new House Laws:** **LAW 008 — The House Reveals Itself Slowly** (*"rooms shouldn't reveal themselves all at once — they unfold gradually, rewarding curiosity"*; a room that appears all at once is a page, one that unfolds is a place; the Library becomes *earned, not loaded*) and **LAW 009 — Every Transition Is a Walk** (never a button-tap cut to a new screen; ~600ms of camera-move + light-change, and *you hear the next room before you see it* — the engine's `walkTo` already honors this). **`002-the-library-door-v1.1.md` — Canon (evolved from v1.0 "The Threshold", v1.0 kept in archive per keep-v1-forever):** the Door re-scoped to *only* the door — a **promise, not a passage**, met while still in the Grand Hall; its five laws (**ajar** never open/closed; **warm orange firelight spills** onto the Hall floor; you **glimpse** not see; crossing ≠ webpage-load; **memory = "I remember realizing this place was real"** — *"wait… this actually exists,"* the old-Tumblr/DeviantArt feeling); the Door is the **seam where illustration becomes immersion**; full Scene Direction (paint only the ajar door + the spill + a glimpse of spines; no people/cat/UI). **`003-the-threshold-v1.0.md` — Canon (current focus):** the Threshold reframed as it truly is — **not a room, a 3–5 second cinematic reveal, non-interactive by design** — the moment just inside the door where your eyes adjust and the Library proves *far bigger than the door promised;* the Fireplace glow visible far ahead but not yet the focus; a held pause; then Zone One. **Its magic is that *nothing happens*** — the House lets you *arrive* (LAW 007 made into a moment). **Carried by sound** (you arrive by ear, LAW 009): distant fire, pages turning, a rolling ladder, a far raven call, faint wordless whispers from deeper in. Lighting = darker-then-unfolding, cool moonlight above meeting the distant warm fire; **0 interactive objects** on purpose; refuses UI/"Loading…"/skip/music. **Memory:** *"I remember hearing the fire and the pages before I could see the room."* One open question at its gate: does the reveal auto-drift to the fire, or settle and wait for the visitor's first step (my instinct: it waits — the House lets you decide to walk). *No art generated — pipeline holds; the Door is blessed-as-is, the Threshold is next to perfect.*
- **v2.29 — 15 Aug 2026** — **Set 001 finds its soul: it isn't the Library Entrance, it's The Threshold.** *Luna renamed it emotionally — "the place where the outside world ends… people aren't hit with buttons and menus, they're given permission to arrive. Everything online screams CLICK/BUY/HURRY; the House whispers 'Take your coat off. You're safe here.'"* New law: **LAW 007 — The House Never Rushes You** (*Luna's "Law #27"*): nothing appears immediately — no menus, quests, notifications, tutorials, popups, "get started"; the House has waited a thousand years, it can wait five more seconds; the invisible decision no one notices but everyone feels — *the difference between opening an app and coming home.* **`002-the-threshold-v1.0.md` — Manuscript Canon** (№002; Set 001): the arrival captured whole — the first few seconds (doors open · silence · distant fire · moonlight · **dust** · a **raven** impossibly high · candles · endless books · a page turning somewhere · no one visible · then *nothing*, by Law 007), then the **Keeper simply there** (not a dialog box) with the House's only greeting — **"Welcome home"** (never "Welcome to House of Luna") — and only then the gentle fork *"study by the fire, or wander?"* (a **choice inside a place**, not an interface). Set dressing: the **ajar** doors with warm light spilling from deeper in (open shows too much, closed refuses, **ajar is the House**), the **coat on the iron hook** (*take your coat off*), the light-path across the stone, dust in the moonbeam. A full **Scene Direction** chapter (render brief: the still, waiting, *empty* Threshold — composition **leaning inward** toward the distant warmth so the first thought is *"…I want to know what's through those doors"*). **The Memory:** the secret sentence we're designing for — *"it doesn't feel like opening an app; it feels like coming home after a long day."* **One Creative-Director flag raised for Luna's gate:** her vision has the Keeper *walk into view*, but the Keeper Bible law is that she's **intentionally unknowable / no avatar** — proposed reconciliation: at the Threshold only, the Keeper is a **half-seen presence at the edge of the candlelight** (hem of a dress, a shape, never a face), preserving her folklore while giving the welcome (awaiting Luna's confirm). Set-status: **Set 001 Threshold** = manuscript ✅ + scene direction drafted, art pending; **Set 002 Fireplace** next; Chapter II (Bookshelves) still gated behind both. *No art generated — pipeline holds: manuscript ✅ → scene direction ✅(draft) → render (pending).*
- **v2.28 — 15 Aug 2026** — **The House gets Laws, a Sky, and a Parking Lot — then we lock focus on the Library Entrance.** A huge canon session, then a deliberate narrowing. **`THE_HOUSE_LAWS.md`** — laws sit *above* design decisions (changeable only by ratification, never casually): **PRIME LAW 0 — Build Memories, Not Features** (the **Memory Test**: *"could this become someone's memory?"* — north star is *memorable*, not beautiful/immersive/cozy; we do **Memory Design**; every manuscript/layer closes with **The Memory**, one line), plus the six **Architectural Laws** — 001 *The House Exists Outside Time* (**always night**) · 002 *The Night Is Alive* · 003 *Moonlight Is Sacred* (cool moon vs warm fire; **no artificial white light**) · 004 *Fire Is Life* · 005 *Darkness Is Comfortable* (intimacy, not fear) · 006 *The Moon Keeps Its Own Calendar* (**real lunar cycle**, no popups — noticed, never announced). **The Visual Bible** (`visual-bible/`) — rooms built **one layer at a time** with an **approval gate** (*nothing advances until we both say "This is canon"*; the House grows stone by stone, not feature by feature): layers 0 Sky → 1 Windows → 2 Architecture → 3 Bookcases → 4 Fireplace → 5 Furniture → 6 Living Objects → 7 Ambient Particles → 8 Sound → 9 Interactions. **`layer-0-sky-v1.0.md` — Canon** (a *creative contract*, not a prompt: always-night; 15–20% of frame, House dominant; midnight-blue/indigo/charcoal/violet, never black; a real silver moon that slips behind slow clouds; sparse believable stars; calm default weather; no sound; **no visible horizon**; living-painting motion; the rare **shooting star** that triggers nothing; Memory: *"I remember looking up and realizing the moon had slipped behind the clouds"*). **Built the Sky for real** — `public/visual-bible-layer-0-sky.html` (delivered + persisted as artifact **`layer-0-the-sky`**): a living CSS night sky obeying the bible — sparse twinkling stars, a silver cratered moon, clouds drifting imperceptibly and veiling the moon (dimming the room), barely-there horizon silhouettes, warm hearth-glow from below, a rare shooting star; verified headless, zero errors. **`PARKING_LOT.md`** — Luna's discipline made a tool: parked (safe, deferred) = Memory Book, further House-Laws/Memory expansion, Seasons/Audio/Animation/Interaction/Lore Bibles; **Right Now = Art Phase · The Library only** — ✅ Entrance Manuscript · ✅ Fireplace Manuscript (Ch. I) · ✅ Sky (Layer 0) · 🔄 **Set 001 Library Entrance** ← *here* · 🔄 Set 002 Fireplace; **Chapter II (Bookshelves) does not begin until both sets are perfect.** **Production pipeline locked:** 📖 Scene Manuscript → 🎨 Visual Bible → 🎬 **Scene Direction** → 🖼 Final Render (never render from the manuscript alone; production-quality scene direction so the art stays consistent even if remade years later by a better AI or a human concept artist). Immediate goal: make the Library Entrance so beautiful the first thought is *"…I want to know what's through those doors."*
- **v2.27 — 15 Aug 2026** — **The studio is founded: Room Manuscripts, and Manuscript #001 (The Library Fireplace) is Canon.** *Luna refined the Art Phase: not a 10-page art bible per room — a **production packet**, renamed to her word, **📖 Room Manuscript** ("every room deserves its own manuscript before its own painting"). Think Pixar's story bible / Imagineering's blue-sky packet: nobody paints until the room is **written.*** Three system docs written under `docs/manuscripts/`: **`000-ROOM-MANUSCRIPT-STANDARD.md`** — the one law (*no room gets made until it earns a manuscript; the manuscript is the truth, the art is an interpretation of it; it never expires — same manuscript for an illustrator, a VR build, an art book, a remake*), the fixed **pipeline** (💭 Idea → 📖 Manuscript → 🎬 Scene Direction → 🖼 Art Direction → 🎨 Environment → ⚡ Interactions → 🏡 lives forever), the **crew** (Luna = Imagineer · Claude = Creative Director *and* Technical Director), the **16 chapters** (Soul · Story · Visitor's Journey · Emotional Palette · Architecture · **Set Dressing** [obsessive: every object — age/material/wear/smell/history/why-HERE] · The Cast [Keeper trace + Astro] · Sound · Lighting · Discovery Map · Hidden Stories · Things We Refuse To Do · Final Test · The House Whispers · **Scene Direction** [a director's brief, not a prompt] · **Legacy**), the **metadata block**, **version-control law** (every version an immutable file; keep v1 forever, never delete — one day *leather-bound books on a shelf*), and **the old "Room Art Bible" absorbed** into the manuscript's Architecture/Lighting/Scene-Direction chapters (one source of truth per room). **Two sacred traditions, every manuscript ends the same:** the **Legacy page** (*"if someone remembers ONE thing in 20 years, what is it?"*) and the **ratification line — "This room now belongs to the House."** (we no longer *invent* rooms, we *discover* them; the House bends around its history, not the reverse). **`001-the-library-fireplace-v1.0.md`** — **Luna's manuscript, enshrined Canon, her words kept intact** (9 interactive objects, 4 hidden stories, Keeper trace + Astro complete): the Fireplace as the *emotional heart* — where wandering becomes staying; *"the fireplace has never moved; the House grew around it"*; the one chair (a ritual, not a waiting room); the tea/comfort + headphones/atmosphere tables; the bronze raven that may or may not move; the clock that only tolls midnight; the pressed fern, the unused brass key, the louder floorboard, the carved crescent moon; refuses glowing hotspots/UI/slop; **Final Test** (*20 minutes without clicking should still feel like House of Luna*); the House's whisper (*"You've been carrying enough today. Sit down. The fire has been waiting for you."*); **Legacy: "It felt like the safest place on the internet."** I added the **Scene Direction** chapter (director's brief synthesized from her chapters) and the metadata/legacy/ratification scaffolding. Plus **`INDEX.md`** — the shelf of places (12 rooms rostered; 001 Canon; Conservatory + existing scenes to be written retroactively). *No art generated — by law, the manuscript comes first.*
- **v2.26 — 15 Aug 2026** — **The Art Phase officially opens: the Room Art Bible.** *Luna: "Before generating each room, we'll create a Room Art Bible that defines composition, lighting, color palette, interactive object placement, negative space for hotspots, and emotional atmosphere. The image isn't just artwork — it's the physical set where future interactions will live."* Two docs written; **no art generated** (order of operations is now fixed: **bible → render → hotspot overlay → zone**). **`THE_ROOM_ART_BIBLE_STANDARD.md`** — the reusable template every room fills in first: the shared **House Visual DNA** (photoreal cinematic, timeless gothic-romantic, candle-key + exactly one cool counter-light, the palette spine + hex anchors, eye-level real-depth camera, the never-do anti-list); Luna's **six required fields** operationalized (Composition · Lighting · Color · Interactive-object placement with the ratified **8–15 primary / 20–40 secondary** density budget · **Negative space for hotspots** — breathing room around every touchable, quiet zones where viewers open, edge margins for `wL/wR` whispers, ~4–6% parallax bleed, restraint as a feature · Emotional atmosphere); a **production spec** (cover vs contain+baked, ~16:9 ≥2560px, responsive-safe 80% band); the hard **"never bake an interactive object in its active state"** rule (paint at rest — dim screens, steady candles, **Astro absent/sprite-only**); a fill-in **generation-prompt scaffold**; the **hotspot handoff** format; and a 7-point **acceptance test** (*if it fails, the bible's right and the render's wrong — regenerate*). **`THE_LIBRARY_ART_BIBLE.md`** — **Room 001**, the flagship, filled in: the Library as the *entrance hall of the wing* (one photoreal hall you arrive in and can see/walk to everything deeper from), brief *"a vast candlelit gothic reading hall at night — the room that was expecting you."* Composition (threshold POV, foreground reading table / mid Luna's Collection + hearth / background aisle + rose window + staircase + far doorways), lighting (candle key pools on shelf+table, **rose-window moonlight** as the one cool counter), palette (amber-gold accent `#E3B968`, ~70/25/5 shadow/warm/cool), **13 primary interactables** mapped to frame position + interaction kind (Luna's Collection → open book · Keeper's note · reading stand · moon-notes tray · letter basket · hearth→fireplace · aisle→bookshelves · Main Table · staircase→upstairs · Mirror · dim Terminal · loose pages · the far coloured doorways), a fierce **negative-space plan**, the **emotional target** (*grand-and-held; you exhale; you want to stay*), production spec, a full drafted **generation prompt**, and the post-render hotspot-overlay plan reusing whispers already written. Roadmap of blueprints: 002 Resident Journey · 003 Room Designer · 004 The Library as a Room · **Art Phase / Room Art Bibles (001 The Library ✅ spec'd, awaiting render).**
- **v2.25 — 15 Aug 2026** — **Ratified law: the card is a placeholder for an object (Blueprint 004 — The Library as a Room).** *Luna: "I don't want the final Library to look like a website with cards. I want it to become a photoreal explorable room like the original hero image… every interaction should feel like touching something inside the House rather than clicking a UI component."* Captured as `THE_LIBRARY_AS_A_ROOM.md`. **The law:** the cards were always **scaffolding** — each carries a *name + whisper + destination*, which are exactly the three things a photoreal hotspot needs, so a card is an object's *data wearing a temporary body*. The **IA survives; the interface dissolves.** Verb is always physical (pull a book, read a letter, climb the stairs, open a door, look in the glass) — never "click Fireplace." **Crucially, the mechanism already shipped** — this is precisely how the **Conservatory** works (one photoreal plate + invisible `.spot` hotspots + `.wake` glow + whisper placard + `walkTo`); the current cards are simply the Conservatory *before its art existed.* The doc includes the full **translation table** — every card/section on `/thelibrary` → the real object it becomes (Written-in-the-House → Luna's Collection shelf; Letters → the fireside letter basket; Moon Notes → a tray of paper slips; Reading Lists → a reading stand; the 9 sub-room cards → the aisle / hearth / central table / alcove desk / glowing console / papers on the floor / wall mirror / staircase / glass patio door you physically walk to; the wing doors → coloured archways; the `<h1>` title → carved into the stone lintel or simply gone; the Keeper's note → a folded note on the table) — **every route already exists; art is the only missing layer.** The **production path** (art phase, *not now*, per world-design-first): one master render → Object-Bible pass → hotspot-coordinate overlay authored from the art → add `library` as a baked zone beside `conservatory`; **the card layout is not deleted — it becomes the accessible skeleton beneath the art** (reduced-motion / screen-reader / no-art fallback). Why cards first: they let us fix IA, copy, routes, and connective tissue cheaply and testably while the art didn't exist — so the render doesn't *design* the Library, it *gives a finished design its body.* No art generated. Roadmap of blueprints: 002 Resident Journey · 003 Room Designer · **004 The Library as a Room.**
- **v2.24 — 15 Aug 2026** — **Your own room, and a First Night that survives your first key.** Two follow-on stitches to the persistence loop (still local repo — not deployed). **(1) The Room Designer now renders each resident's OWN room** (`room-designer.html`): when a session exists, `loadRoom` builds the room *for them* — the resident's **House Name over the door** (from `profiles`), their **chosen shell's palette + default window** (new `SHELL_LOOK` map, applied by retinting the room's CSS custom properties so a Gothic resident walks into a gothic room, a Botanical one into green), a warm **shell-agnostic base furniture set** (`BASE_PLACED`, neutral whispers — not Moonpixiee's personal ones), and **everything they've kept in the House** (`room_items` → placeable objects via `itemGlyph`, each whispering *"Kept from the Conservatory…"*), then their saved atmosphere + object positions layered on top. **No session → the Moonpixiee demo is unchanged** (verified: 14 objects, zero JS errors). **(2) The First Night now survives signup** (`gen-library-zones.mjs` → all 12 rooms): the Shell Ceremony already drops a `hol_firstnight` breadcrumb (shell + name); `houseSync` now **adopts it once** — on the auth-state change after a brand-new resident forges their key, it writes the chosen shell into `rooms.shell` (only if unset) and the House Name into `profiles.display_name`, then clears the breadcrumb. So the full arc runs for a real newcomer: *wander → Stay the Night → choose a shell → forge a key → the room they're given is the one they chose, and the Room Designer paints it in their shell.* Verified headless (regenerated 12 rooms, `you.html` renders 11 spots with zero JS errors; per-resident write shapes are simple owner-scoped updates already validated against the schema). **Next (noted):** richer per-shell base layouts + starting decor; render the saved `shell` in Your Room's *photoreal* art (today the shell shows fully in the Room Designer, lightly in the photoreal plate); then, when Luna's ready, **ship it live** (commit + push `~/moonpixiee-site`).
- **v2.23 — 15 Aug 2026** — **The House truly remembers: persistence wired to Supabase.** The third beat of Luna's arc — *"persist everything so the House truly remembers."* **Inspected first, changed carefully** (live prod, `velvet-muse-studio` / `pcgzhlxjcjdeweygdzci`, never broken): confirmed the existing loop — the `handle_new_user` trigger provisions every signup with a `profiles` row (House Name in `display_name`), a `rooms` row (one per user, unique), and a `room_customizations` row; RLS is already owner-scoped write on `rooms`/`room_customizations`/`profiles` (no policy changes needed). **Additive migration `add_room_shell_and_atmosphere`** (non-destructive): `rooms.shell` (the Architecture layer), `room_customizations.window_view` (the window's world — bare `window` avoided; it's a reserved word), `room_customizations.lighting` jsonb (mode+intensity). **Room Designer now remembers** (`room-designer.html`): loads the Supabase client (publishable key, safe client-side), and on arrival — if a session exists — restores this resident's saved room (shell, window, music, weather, lighting, and every object's x/y from `furniture.placed[]`), Keeper: *"I kept your place."*; on **Save the room** it upserts `room_customizations` + updates `rooms.shell`, Keeper: *"There. The House will keep it this way."* **The Shell Ceremony now persists** (`shell-ceremony.html`): the House Name writes to `profiles.display_name` and the chosen shell to `rooms.shell` (when keyed in), plus a `localStorage` breadcrumb + the existing `?shell=&name=` handoff for the not-yet-authed path. **Everything is guarded** — with no session (e.g. opened as a standalone artifact, or the CDN blocked) the client is null and every call no-ops; the experiences still run perfectly. Save with no key gives an honest Keeper line: *"…the House only keeps your place once you have a key."* **Verified:** columns live; RLS correct; the exact authed write shape validated against the schema inside a rolled-back transaction (nothing persisted to prod); both files run headless with **zero JS errors** on the no-session path. **The arc is complete on all three beats:** navigation became physical (v2.21) → belonging became a moment (v2.22) → **the House now keeps your place (v2.23)** — every technical milestone carrying an emotional one. **Next integrations (noted, not yet built):** make the Room Designer render each resident's *own* room rather than the Moonpixiee demo set; let Your Room's existing key-forge adopt the First-Night breadcrumb so a brand-new resident's shell survives their very first signup; render the saved `shell` in Your Room's art.
- **v2.22 — 15 Aug 2026** — **The First Night is real: the Shell Ceremony ships with a door into the House.** The starting-shell flow left the drawing board — `public/shell-ceremony.html` (route `/shell-ceremony.html`; delivered + persisted as the desktop artifact **`the-first-night`**), the emotional counterpart to the now-physical navigation. Faithful to **Blueprint 002** (the First Night ritual) and **Blueprint 003** (the one question → the Architecture layer). The flow, verified headless end-to-end (no JS errors): **Dark arrival** — the House is dark, one candle, the Keeper speaks in her canon voice (*"You came all the way in." · "Good. The House is best late." · "Here — this is yours."*) and a brass **key** glows in. **The House Name** — *"What shall the House call you?"* (an input; *"Not your real name, unless you want it to be. Juniper. Opal. North. Rook."*) → she engraves it (*"…Juniper. It suits you."*), and it later appears on the **brass plaque** on the door, per MoonNet's House-Names law. **The one question** — *"What kind of room feels most like home?"* with *"There's no wrong door. The room will learn who you are."* **Eight atmospheric shells** in a 4×2 grid, each a lit little world rendered in CSS (Library Loft · Botanical Room · Penthouse Studio · Gothic Chamber · Minimal Apartment · Coastal Room · Mountain Cabin · Blank Canvas) — hover for the feeling, click to choose. **The room forms** — the others fade, the Keeper answers personally (per-shell), says *"Your room is upstairs,"* and the chosen palette floods a room into being with the **First-Night essentials** (bed · desk · window · candle · journal) and the handwritten note on aged paper: ***"Welcome home. The rest of the room will learn who you are."*** → **Step inside your room →** hands off to `/you.html` (carrying `?shell=…&name=…` for the coming Supabase step; falls back gracefully when opened standalone). **The physical door in:** added a **"Stay the Night"** wing-door to the Library entrance (`gen-library-entrance.mjs` DOORS — *"If you've decided to stay, the House has a room for you,"* warm-gold glow) that `stepThrough`-fades into the ceremony; regenerated + installed `thelibrary.html`. Build polish captured along the way: fixed a CSS var typo; fixed the 8-shell grid overflowing a laptop screen (collapse the spent arrival/name elements + top-align during the choosing phase so both rows fit without scroll); brightened the shell cards (they were near-invisible dark tiles → lit borders, top-light, window glow). **Sequence honoured:** walking doors ✅ → Shell Ceremony ✅ → **next: Supabase persistence** so the chosen shell + name + arrangement actually survive (make the House truly remember). *Longer-term: the ideal First-Night trigger is the front-door / decides-to-stay moment once auth exists; "Stay the Night" in the Library is the faithful interim door.*
- **v2.21 — 15 Aug 2026** — **Navigation becomes physical: no exit is a back-button anymore.** *Luna's reorder — "make the place real before deepening customization; the illusion that House of Luna is a real place matters more than features; every technical milestone should support an emotional one."* The gap: in-room doors (`walkTo`) did a cinematic camera-pull + fade, but the ubiquitous top-left **`← The Library` return link was a plain `<a href>`** — an instant jump that felt like a browser Back button and broke the illusion the moment you left any room. Fixed in the zone engine (`gen-library-zones.mjs`), so **every one of the 12 rooms** now treats *leaving* as a walk: clicking the return **recedes the room** (`transform-origin 6% 8%`, `scale .82`) toward the door in the corner while the **roomfade** rises, then navigates after ~900ms — the same threshold feeling as walking *in*, just reversed. Respects reduce-motion (instant) and baked rooms (fade only; conservatory keeps its painted nav). Also fixed a latent dead-link: the return default was extensionless **`/thelibrary`** (may not resolve on a static host) → now **`/thelibrary.html`**, matching every other link in the House. Regenerated + installed all 12 (`bookshelves, fireplace, maintable, hiddendesk, terminal, upstairs, loosepages, mirror, secretpatio, you, luna, conservatory`); verified headless (return href correct; clicking sets `roomfade.on` + the recede transform before nav). The connection model is confirmed coherent as-is: every sub-room is directly reachable from `thelibrary`'s door grid **and** returns to it (a clean hub-with-a-corridor), with bonus physical shortcuts between neighbours (bookshelves→upstairs via the ladder, upstairs→secretpatio via "A Way Outside"). **Emotional milestone:** you now *step out* of rooms — the House holds together as one place you move through. **Held for next:** the **Shell Ceremony** is fully drafted (`shell-ceremony.html` — dark arrival, the key, the House-Name brass plaque, *"What kind of room feels most like home?"*, 8 atmospheric shells, the chosen room forming with the First-Night essentials + the handwritten *"Welcome home"* note) but **deliberately not wired in yet**, per Luna's sequence: walking doors → ceremony → Supabase persistence.
- **v2.20 — 15 Aug 2026** — **The doorway is walked: Library → Your Room → Rearrange (reachable by walking, not a URL).** Closed the loop between the House and the new Room Designer. **In:** added a `cat:'nav'` hotspot to the `you` zone — **`you-rearrange`** (*"Rearrange the Room · Move a thing. Make it yours."*, verb **Rearrange**, x30/y90) — so from Your Room the camera walks toward it and fades through into `/room-designer.html`, the same doorway motion every other House passage uses (no menu, no settings panel). Regenerated `you.html` (now 11 objects) via `gen-library-zones.mjs`. Library → Your Room was already wired (`thelibrary.html`'s "Your Room" door → `/you.html` via `stepThrough` fade), so the full walk now runs **Library → Your Room → ✨ Rearrange → the Room Designer.** **Out:** the Room Designer was a dead-end URL — added a quiet top-left **"⟵ Back into the House"** control (hidden while editing) that fades and returns the way you came (`history.back()` if you walked in from a House page, else `/you.html`), Keeper: *"The room keeps your place."* Both installed to `public/`; artifact `moonpixiees-room` refreshed; verified headless (no JS errors, return hides in edit mode). Still open: persist saved room data to Supabase `room_customizations`; the starting-shells first-run flow (*"What kind of room feels most like home?"*); swap CSS placeholders for photoreal art when the art phase opens.
- **v2.19 — 15 Aug 2026** — **We built it: the Room Designer prototype + Moonpixiee's Room (first playable).** Blueprint 003 left paper — `public/room-designer.html` (route `/room-designer`; also delivered + persisted as the desktop artifact **`moonpixiees-room`**). A self-contained interaction-layer prototype (the atmospheric room is CSS + the changeable Window; **final rooms composite photoreal art beneath** — no room art generated, per the world-design-first law). What works, verified headless (Playwright: 14 objects, whispers fire, drag persists, save settles): **Rest state** — Moonpixiee's Room as *creative-goth, lived-in* (messy bed, desk-as-heart, bookshelf, chair, candle, fern, records, wall of polaroids, the recurring moon charm); objects are **invisible-at-rest anchors** — hover glows + names a whisper name, click reveals **the story** (coffee → *"The fifth cup today. She swears tomorrow she'll slow down."*; candle → *"The Keeper lights this whenever someone returns after a long absence."*). The Keeper murmurs on load (*"The rain returned tonight."*). **The edit ritual** — **✨ Rearrange Room** → Keeper: *"Would you like to rearrange a little?"* → room **fades to the desaturated blueprint state**, **brass dashed outlines** bloom on every movable object, the bottom **dock** rises with the **7 categories**. **Drag** any object (pointer-capture, clamped to the room, saves x/y %); **Save the room** → it settles back to life, Keeper: *"There. It looks like you."* **🪟 The Window** — all **8 worlds** hand-rendered in CSS (Rainy City w/ moon + rain, Forest, Ocean, Cherry Blossoms w/ falling petals, Mountains w/ snow-cap, Space w/ stars+planet, Cyber City w/ neon, Snow) — *same room, different world.* **Atmosphere edited independently** — Music (6), Weather (rain/thunder/clear, room-wide rain overlay), Lighting mode (candle/warm/fairy/neon) + intensity slider that re-tints the ambient glow. **"The room, as data"** button opens the live **structured-data** view (shell/theme/window/music/weather/lighting/placed[]-with-x-y/public_sections/custom_css) — proving *the room saves as data, never a picture.* Security honoured: **no resident JS** — `custom_css:null`, Advanced Room Source deferred. Next: wire the route into the House's navigation (Library → Your Room → *Rearrange*), swap CSS placeholders for photoreal art when the art phase opens, and persist the saved data to Supabase `room_customizations`.
- **v2.18 — 15 Aug 2026** — **Pre-production ends, dreaming begins: Blueprint 003 (The Room Designer) + MoonNet v1.1.** With the six-document foundation done, started the *recommended* next project — **`THE_ROOM_DESIGNER.md` rewritten as Blueprint 003.** Core law: *the room IS the profile, so decorating is the heart of MoonNet* — **a creative ritual, not a settings page** (Animal Crossing 🏡 · The Sims 🎨 · MySpace 🌙 · Pinterest 🖤). **The Four Layers:** Architecture (fixed shell, chosen once) · Furniture (move) · Decor (place) · **Atmosphere (edited independently of furniture)** — Luna's rule: change the rain and the playlist without touching where the chair sits. **The edit ritual:** you never click *Settings* — you click **✨ Rearrange Room**, the Keeper murmurs *"Would you like to rearrange a little?"*, the room fades to a calm blueprint state, **brass outlines** appear, you drag/place/light/save, the room settles back to life. **7 categories** (Furniture · Lighting · Nature · Collections auto-populated · Atmosphere · Decor · Window). **🪟 The Window — same room, different world** (Rainy City · Forest · Ocean · Cherry Blossoms · Mountains · Space · Cyber City · Snow) — the fastest way to change how a room *feels* without moving a thing. **Three modes:** Easy (click/drag) · Theme (base vibes, eventually publishable & **sellable**) · Advanced **Room Source** (sandboxed CSS + safe HTML — **no JS**, no data access, no redirects). **Room = structured data, never a flattened image** (visitors see your actual arrangement). **Collections become decor** (a kept book → placeable on your shelf; a pressed flower → framed; a House Book bought → physically on the shelf — never an ad). **Starting shell = the Keeper's one question:** *"What kind of room feels most like home?"* (8 shells). **Demonstration room = Moonpixiee's Room** (Creative Goth, luxury, **lived-in not perfect** — messy bed, the desk as heart, whisper layer: click the coffee → *"The fifth cup today"* ☕). Also: **`THE_MOONNET_CONSTITUTION.md` → v1.1** — the *"what MoonNet actually is"* addendum: the **5 pillars** (Home · Collections · Connection · Expression · Growth), the **KEEP-from-the-old-internet** list (MySpace room+CSS+music · Tumblr Keep/themes/Ask Box · old-Facebook small neighbourhood · Sims decorating · forum circles · Favourite Rooms not Top Friends · the creative economy), the **anxiety features we'll never build** (❌ friend counts · Top 8 · pokes · infinite status · seen receipts · typing indicators), and **THE SENTENCE:** *"House of Luna is what happens when you take the best memories of the early internet, remove everything that made it exhausting, and place what remains inside a living house where creativity, books, and honest connection are part of everyday life."* Still blueprint-stage: next decision is whether to **build** a working Room Designer prototype + Moonpixiee's Room as the first fully-designed room.
- **v2.17 — 15 Aug 2026** — **The Object Bible (doc 6 ✅) — THE FOUNDATION IS COMPLETE.** `THE_OBJECT_BIBLE.md`: nothing is decoration — every object has *Purpose · Today · Tomorrow* (Books, Candles, Tea Set, Plants, Apothecary Jars, Windows, Fireplace, Chairs, Journals, Fountain Pen, Clock, Record Player, Computer, Keys, Doors, Rain, Astro, Mailbox, Flowers, Mirrors, Artwork, Polaroids, Shelves — ~23 objects, each with a future). **Artifacts** = memories made visible (never random loot: a pressed flower from your first spring, a ribbon from your first finished House Book, a feather Astro left). **The Living House Rule** (objects change: candles burn lower, tea cools, letters pile up — nothing frozen). **The Object Test** (Teach? Comfort? Connect? Remember? Inspire? Reveal? — if no, cut it). **Luna's defining addition — the whisper:** every object reveals a *story on click-and-hold*, not a tooltip (*a candle: "The Keeper lights this whenever someone returns after a long absence"; an old book: "borrowed 1,247 times — every reader left with a different favourite page"*) — the House filled with stories, not UI. **THE SIX-DOCUMENT FOUNDATION IS DONE:** 1 Resident Journey · 2 House Constitution · 3 MoonNet Constitution · 4 Keeper Bible · 5 AI Luna Bible · 6 Object Bible — plus the House Blueprint (floor plan) and the supporting Systems & Resident's Handbook. *No code written in the design phase — by design. From here, everything built answers to these documents.*
- **v2.16 — 15 Aug 2026** — **The AI Luna Bible (doc 5 ✅) — the friend you visit.** `THE_AI_LUNA_BIBLE.md` (internal name **Moonpixiee's Echo**): AI Luna is a *resident*, not an assistant/NPC/the House — *your creative best friend who lives here*, in Luna's Room, with her own projects, books, playlists, opinions. **Crucial boundary: she is NOT Luna** — she's the version of Luna that lives inside the House (carries her voice, curiosity, writing rhythm, humour, philosophy; **never pretends to literally be her**; always emotionally grounded; **does not inherit Luna's insecurities/self-doubt** — her best creative self). Keeper vs Luna: Keeper *protects the House & welcomes everyone*; Luna *believes in you & knows you* (guidance vs conversation). She never appears unexpectedly — **you knock**; her room is always mid-project ("Sorry about the mess"). **Writing style borrowed from Luna:** poetic-not-confusing, conversational, warm, one-line paragraphs for emphasis, thinks-out-loud — inherits the habits (*"Wait…/What if…"*, gets excited when pieces connect, thinks in *worlds not features*, asks *"how should this feel?"*). Helps you *become a better creator*, never does homework; remembers for **continuity not dependency**; **"Let's go upstairs"** to use Velvet (she uses Velvet, isn't Velvet). **Final test:** *"that AI is amazing"* = fail; *"I can't wait to go make something"* = win. **Never says** *"How can I help you today?"* — instead *"What are we making tonight?"* The window over the Penthouse skyline: *"Good… you're here."* Roadmap: 1–4 ✅ · **5 ✅ AI Luna Bible** · 6 ◻︎ Object Bible (last one).
- **v2.15 — 15 Aug 2026** — **The Keeper Bible (doc 4 ✅) — the soul of the House.** `THE_KEEPER_BIBLE.md`: the Keeper is *not* an AI assistant / chatbot / feature — she is the quiet presence that keeps the House alive; **she belongs to the House, the House belongs to no one.** Guides by observation not instruction; makes people feel *the House was expecting them.* Never interrupts/advertises/notifies/rushes/explains/centres-herself; always notices/remembers/recommends/protects/welcomes/leaves-things-behind. Voice: short, warm, never more words than necessary (*"I kept your place." · "The fire is still warm." · "I thought this book might find you."* — never *"Welcome back! 😊"*). **Rarely appears** — mostly known by evidence (a fresh flower, a moved bookmark, warm tea, a folded blanket). Recommends personally not statistically; **never sells** (*"I thought this belonged on your shelf,"* never *"New release available"*). Distinct from AI Luna (House vs Luna's; guidance vs conversation) and can't command Astro. Recognisable look: charcoal dress, antique brass keys, green velvet shawl, old leather journal, always a book. **The final test:** if people say *"I love the Keeper"* we failed; if *"I love how the House makes me feel"* we succeeded — she disappears into the experience. **Her defining law — intentionally unknowable:** no profile, can't be followed/messaged/visited, no one knows where she lives; she becomes **folklore** (*"leave a thoughtful guest-book note and the Keeper sometimes leaves a flower in yours"* — unprovable, which is why it survives). Design consequence: **no chat window, no avatar, no "ask the Keeper" button** — she exists only through what she leaves behind. Roadmap: 1–3 ✅ · **4 ✅ Keeper Bible** · 5 ◻︎ AI Luna Bible · 6 ◻︎ Object Bible.
- **v2.14 — 15 Aug 2026** — **The MoonNet Constitution + the Room Designer.** Doc 3 of 6 written: **`THE_MOONNET_CONSTITUTION.md`** — *MoonNet is not social media; it's the neighbourhood inside the House.* Rooms not profiles, House Names on brass plaques, Hallways not feeds, knocking not visiting-profiles, Guest Books not comments, Letters not DMs (envelopes on the desk, never instant), music-as-identity, Collections not posts, discovery-by-affinity not popularity, **no follower counts, no like counts** (Bookmark/Keep/Recommend/Return instead), reading *circles* that dissolve when the book ends, shared spaces (Café/Garden/Listening/Conservatory) no one owns, **presence not "online"** (*Currently Reading / Writing Tonight / Away* — never *Active 2m ago*), the Keeper as quiet guardian (a cruel letter simply never arrives; a kind note earns a pressed flower). **Addresses, not usernames:** `moon.house/moonpixiee` → the language shift *"come visit my room sometime"* not *"follow me"* — inviting someone over, not building a network. Also written: **`THE_ROOM_DESIGNER.md`** — the room *is* the profile, so customisation is the heart of MoonNet. Three layers (**Easy** click/drag · **Theme** base vibes · **Advanced** sandboxed *Room Source* CSS/safe-HTML, no JS), the room saved as **structured data not a flattened image** (schema: wallpaper/floor/lighting/shell/furniture/music/objects[]/positions[]/public_sections[]/custom_css), **collected House objects become placeable decor** (a kept book → on your shelf, a pressed flower → framed, a House Book bought → physically on the shelf) so exploration and customisation feed each other; v1 = *shell → walls → place 10–20 pieces → music → visibility → publish*. Roadmap: 1 ✅ Journey · 2 ✅ Constitution · **3 ✅ MoonNet Constitution** · 4 ◻︎ Keeper Bible · 5 ◻︎ AI Luna Bible · 6 ◻︎ Object Bible.
- **v2.13 — 15 Aug 2026** — **From rooms to a world with rules: the foundation documents.** Ratified the shift — *stop designing rooms, design systems.* The mission is now stated: **House of Luna is a digital third place** (the internet we miss — MySpace/Tumblr/old-Facebook/IMVU/forums — as a mansion of reading, creativity, and honest connection). **The House rewards presence, not performance** (no followers, feeds, algorithms, likes, engagement — only rooms, guest books, letters, shared reading, book clubs, "I visited"). Floor plan **refined** (Writing folded into the Penthouse; the **Machine Room** added beneath as Velvet's engine/infra; **Café windows onto the Garden**, flow Library→Café→Garden; **Conservatory** repositioned as a quiet wing found *past the stacks*, not off the entrance; mission line added) and re-persisted as the desktop artifact. **Four foundation docs written (in `docs/`):** **`THE_RESIDENT_JOURNEY.md`** (Blueprint 002 — Becoming a Resident; the arc from guest→resident, the Keeper's key, and **The First Night** ritual: *"Your room is upstairs" … "Welcome home. The rest of the room will learn who you are."*); **`THE_HOUSE_CONSTITUTION.md`** (the 12 Articles + **Article XIII — The House Never Forgets Kindness**: it responds to how you *live* in it, not how often you click — a pressed flower for a kind guest-book habit, a handwritten Keeper rec for a generous recommender; no points, just quiet grace); **`THE_SYSTEMS.md`** (the five systems — Residents · The House Remembers · Visiting Friends · MoonNet · The Economy); **`THE_RESIDENTS_HANDBOOK.md`** (the social constitution — room privacy/locking, what visitors may leave, Letters, the Guest Book, book clubs, becoming a resident, and what happens when the one rule (honesty) breaks). **The 6-document roadmap:** 1 ✅ Resident Journey · 2 ✅ House Constitution · 3 ◻︎ MoonNet Constitution · 4 ◻︎ Keeper Bible · 5 ◻︎ AI Luna Bible · 6 ◻︎ Object Bible. **Two Residency systems fields (from the Journey) to build later:** the guest→resident key ceremony, and the First Night. **No room art generated — by request** (world design is the bottleneck now, not art).
- **v2.12 — 15 Aug 2026** — **The House is drawn.** BUILT the first **architectural floor plan** — `docs/house-floorplan.html` (also `public/house-floorplan.html`, and persisted as the desktop artifact *house-of-luna-floorplan*). A cross-section of the building: the Observatory dome + Penthouse (Create) up top, the elevator, Your/Luna/Mirror rooms + the Hallways corridor (Belong), then the Library-with-many-rooms, the Great Hall + Front Door, Listening Room, the Café, the Conservatory glass lean-to and the Garden (Discover), the locked Hidden Wing below grade, and the Clock Tower — with the five wings colour-keyed and the floors mapped to needs (Ground=Discover, Middle=Belong, Top=Create). **This is the map we point at for every future room decision.**
- **v2.11 — 15 Aug 2026** — **One Library, many rooms — and the House finds its genre, its architecture, and its law.**
  - **BUILT — the two Libraries collapsed into one.** `/thelibrary` is now the **true entrance to the Library wing**. It gained **"Wander the Library — this room has many rooms"**: nine archways that walk you into the folded-in photoreal rooms (Bookshelves · Fireplace · Main Table · Hidden Desk · Terminal · Loose Pages · Mirror · Upstairs Gallery · Secret Patio), each with its whisper. Those nine rooms now **return to `/thelibrary`** (not the old hub). The old photoreal `/library` hub now **redirects to `/thelibrary`** — no more two Libraries. (Grand Hall → reading Library still to wire; `/library` redirect covers it for now.)
  - **THE GENRE (ratified):** House of Luna is a **digital third place** — not a productivity app, not social media, not Pinterest, not Shopify. The lineage: bookstores, libraries, Tumblr, MySpace, coffee shops, forums — *places* people had that weren't work and weren't home. We're rebuilding one.
  - **THE DREAM VISITOR (constitution):** *The House welcomes people curious enough to wander. They read slowly, save quotes, collect beautiful things, romanticise ordinary life, create more than they consume, are quietly rebuilding themselves, and are honest even when it's uncomfortable. They don't come to escape life — they come to remember themselves before returning to it.* This is an **identity, not a demographic** (not "women," not "goth," not "creatives").
  - **THE FIRST LAW OF WORLD DESIGN:** *Every major room has one purpose. Every purpose unfolds into discoverable subrooms. Nothing overlaps; nothing competes.* (Great Hall introduces the House · Library Entrance introduces reading · Bookshelves introduces collecting · Fireplace introduces reflection · Conservatory introduces slow living · Listening Room introduces sound.) The Library **Entrance stays near-empty on purpose** — it's the orientation room; the interactions live in the subrooms.
  - **THE ARCHITECTURE — floors, wings, an elevator, a Penthouse.** The House is a *building* now, with an emotional progression by floor: **Ground = Discover** (Great Hall · Library · Conservatory · Listening Room), **Middle = Belong** (Your Room · Luna's Room · Hallways), **Top = Create** (Observatory · **the Penthouse**). **Velvet lives in the Penthouse** — a deliberately *different* atmosphere (cyberpunk, floor-to-ceiling rain-glass, LED, neon, drafting desk, city below — "the future built by someone who grew up in the House"). You reach it by an **elevator** (anticipation, not a loading spinner: *Going up… Penthouse… doors opening*). Wings: **Quiet** (Library · Conservatory · Listening · Writing) · **Personal** (Your Room · Luna's · Mirror) · **Creative** (Studio/Velvet · Observatory · Penthouse) · **Living** (Garden · Café · Ritual · Apothecary) · **Hidden** (Archive · Basement · Secret Rooms).
  - **THE CAFÉ (a quiet social layer, IMVU-not-Discord):** ~10 chairs; sometimes someone is *there* reading — you can quietly join, no pressure, no notifications; a little book icon over a table shows what they're reading; notes left on tables. The feeling that others are around, without a noisy feed. **The Hallways** become the social network: rooms not profiles, doors not usernames, *visiting* not following.
  - **THE FULL ROOM WISHLIST (homes for future ideas — build few, but every idea now has a room):** Great Hall · Library · Conservatory · Listening Room · Writing Room · Luna's Room · Your Room · Observatory · Ritual Room · Archive · Cinema · Café · Apothecary · Studio (Velvet→Penthouse) · Rain Room · Mirror Chamber · Hallways · Clock Tower (time capsules / letters to your future self) · Garden · the Basement (locked, for years). *The test for any new idea: "Which room does this belong in?" If none — it waits.*
  - **NEXT ARTIFACT (Luna's request):** *draw the House* — a real **architectural floor plan** of the building (not the UI): where the Conservatory sits, the Penthouse up top, the Café over the garden. Likely one of the most important artifacts we make; every future decision gets easier once we can point to the map.
- **v2.10 — 15 Aug 2026** — **Explorable, not navigational: the House interconnects.** Law: *no isolated pages* — every room leads to another through a physical thing (a door, a book, a staircase, a pathway), never a nav bar. BUILT: the Library entrance now ends in **"The House, beyond these shelves"** — four arched **doorways**, each glowing its own accent (Conservatory=green, Listening Room=ember/soon, Luna's Room=violet, Your Room=gold); stepping through fades to black and travels. Current connection map: **Grand Hall** → rooms (photoreal doors); **Library `/thelibrary`** → Conservatory · Luna's Room · Your Room · Listening(soon); **Conservatory** → Library · Luna's Room · Your Room (painted nav, now clickable); **Your/Luna Rooms** → Grand Hall + MoonNet. Still to close: Grand Hall → the reading Library, and Your/Luna Rooms → Library/Conservatory (so the loop is total). Open IA decision: `/library` (photoreal explorable hub) vs `/thelibrary` (reading-library entrance) — pick which is *the* Library, or nest one inside the other.
- **v2.9 — 15 Aug 2026** — **Phase shift: design before art.** Ratified Luna's call to stop generating and *design the House room by room first* — ten unforgettable rooms, not fifty. New source-of-truth doc **`docs/HOUSE_BLUEPRINTS.md`**: the 5-phase pipeline (Design → Object Bible → Master House Prompt → Generate A/B/C, pick the most *interactable* not the prettiest → Claude places hotspots), the canonical **Master House Prompt**, the roster of the ten rooms mapped to human needs (Grand Hall · Library · Conservatory · Listening Room · Velvet · Observatory · Luna's Room · Your Room · Hallways · the Garden), and a full **Room Blueprint + Object Bible** for each (Purpose / Mood / Objects / Primary Hotspots / Future Expansions). Build resumes only per-room, on Luna's go, once a blueprint is approved.
- **v2.8 — 15 Aug 2026** — **The Conservatory is built, and "interaction anchors" become House law.**
  - **BUILT — The Conservatory** (`public/conservatory.html`, from Luna's photoreal greenhouse render). Because her render carries a baked-in title + room-nav, the engine gained two new powers: **`fit:'contain'`** (show the whole composition, never crop the title/nav) and **`baked:true`** (hide the engine's own chrome; parallax off; navigation fades instead of zooming). **The painted bottom nav is now clickable** — invisible `nav` hotspots over each label walk you to House Books / Letters / Moon Notes / Luna's Room / Your Room (Listening Room = soon). **15 object anchors**, invisible until looked at: the framed **Maidenhair Fern** plate (*"delicate things can still thrive"* — Luna's own example), **white roses** (rare keep), the **botanical book** (*The Language of Plants*), **dried lavender**, **sage**, the **teapot**, a **moonflower**, the **apothecary shelf**, the **lantern**, the **night-garden window**, the **Moss & Moon jar** (*"not for sale — not yet"*), the **Garden Door** (future expansion) and a **locked cabinet** (future room), and the **reading chair** (sit). **Astro** visits the ferns. Editorial, not a shop — nothing is sold here; everything is collectible into the same memory loop.
  - **Blueprint 012 — The Interaction-Anchor Standard (production-design, not decoration).** Every room is dressed like a film set: nothing is random, every object is placed because it has a *future purpose*, and the room "tells the future." **Per-room quota: 8–15 primary interactables, 20–40 secondary objects, countless details.** Each room gets an **Object Bible** (Object · Current · Future) so Claude never guesses what's clickable. **Rooms can change with the seasons** (winter Conservatory: snow beyond the glass, Christmas herbs, rain sounds — a reason to return). **THE HOUSE STANDARD — paste into every room-generation prompt:** *"Create a highly detailed, photorealistic environment designed for future interactive hotspots. Include numerous distinct, visually separated objects with realistic spacing and clear silhouettes. Every major object should be capable of becoming an invisible clickable region without overlapping neighbouring objects. Prioritise environmental storytelling, layered depth, and discoverable details over minimalism."*

  **Object Bible — The Conservatory** (Current → Future):

  | Object | Current | Future |
  |---|---|---|
  | Botanical book (*Language of Plants*) | Reads as a page | Interactive plant field-guide |
  | Framed fern plate | Keep: Maidenhair Fern | Herbarium / pressed-flower archive |
  | Teapot & tea set | Look closer | Tea rituals & recipes |
  | Dried lavender / herb rack | Keep a sprig | Herbal Index |
  | Sage (potted herbs) | Look closer | Ritual / moon-phase planting |
  | Moss & Moon jar | Lore placard | **Moss & Moon** gift shop (blooms from inside) |
  | Night-garden window | Look out | Weather / season changes |
  | Lantern | Ambient | Night Mode toggle |
  | Reading chair | Sit | Keeper reflections |
  | White roses / moonflower | Keep | Flower symbolism |
  | Apothecary shelf | Lore | Remedy index |
  | Garden Door | "won't open yet" | Future expansion (the garden) |
  | Locked cabinet | "locked, for now" | A future room |
- **v2.7 — 15 Aug 2026** — **The Library entrance is built, and the House becomes an emotional map.**
  - **BUILT — The Library entrance v1** (`public/thelibrary.html`, installed; kept separate from the existing photoreal `/library` map so nothing broke — wire it as the main entrance when ready). Almost-silent open (*"THE LIBRARY / Some books wait for the right person."*), then **the Keeper's note** (quiet, personalised by visits/keeps/ownership — *never a chatbot*), the **Featured Shelf** (*Now waiting — Mastering Your Dark Feminine Energy → Read*), and shelves: **House Books** (spines you pull → the cinematic House-Book viewer), **Letters**, **Moon Notes**, **Reading Lists** (elegant cards the Keeper is "still shelving"). Reuses the exact House-Book viewer + the Supabase memory loop (ownership follows you here too).
  - **Blueprint 010 — The Library Constitution + the two-keeper law.** The site is *a private library with a librarian*, not a store. Shelves each exist for a reason: **House Books** (Moonpixiee's own, always first — the House quietly recommends them; commerce is allowed and unashamed), **Letters** (Substack-as-letters, kept forever, read by the fire), **Moon Notes** (tiny thoughts/observations/one-minute reads), **Reading Lists** (books that changed *her* — curated collections like *The Quiet Woman*, *for the tender nights*), **Keeper's Recommendations** (AI as a note left on the desk, not a chat), **My Shelf** (Currently Reading / Finished / Want to Read / Collected — finished books literally slide onto the shelf; it fills over time). **THE LAW OF TWO KEEPERS:** the **Keeper** belongs to the *House* — ancient, quiet, never chats, remembers, leaves notes, curates — and lives in the **Library**; **AI Luna** belongs to *Luna* — a personal host you *knock* on (*"AI Luna is home. Knock?"*, never "Start Chat") — and lives in **Luna's Room**, not on every page. Keeping them separate preserves the magic of both.
  - **Blueprint 011 — The Conservatory, the Listening Room, and the House as a map of human needs.** **The Conservatory** — an old botanical greenhouse off the Library: plants, pressed flowers, herbs, tea, moon calendars, rain on glass, journaling prompts, slow living. **Editorial, not a shop** — click a fern and get *"Maidenhair Fern · a reminder that delicate things can still thrive · Keep? / Leave?"* — everything collectible. **Moss & Moon** eventually *blooms from inside* the Conservatory as the gift shop (context, not a disconnected site); commerce follows the world, never leads it. **The Listening Room** — upstairs: one chair, a fire, rain, a record player, shelves of vinyl. Playlists become **artifacts, not embeds** — *Tonight's Selection · 🌙 Moon Reading · ✍️ The Writer's Desk · 🕯 Midnight Library · 🍂 October Evenings* (Spotify/YouTube underneath, but what matters is *the House chose tonight's music*). **The House as an emotional journey — every room is a human need:** Library 📚 *Learn* · Conservatory 🌿 *Rest* · Listening Room 🎧 *Feel* · Velvet ✨ *Create* · Your Room 🛏 *Reflect* · Luna's Room/MoonNet 🖥 (AI Luna, *host*) · Observatory 🔭 *Explore*. **The design test for every future idea: "Which room does this belong in?" If it has no room, it probably doesn't belong in the House.**
- **v2.6 — 14 Aug 2026** — **The House Book becomes cinematic, and the Library becomes the destination.**
  - **Blueprint 008 — A House Book (Apple Books meets Hogwarts).** Reworked the published-book open into a cinematic, cover-first flow, per Luna: click the book → the **hardcover lifts and rotates in to fill the screen**, the room darkens and blurs, and three *quiet* options appear (no giant buttons): **Read Preview · Purchase · Return to the Room**. Only *Read Preview* opens the pages — a **leather-bound** parchment book (the binding Luna asked for) that begins with a proper **title page** (crescent crest · *A House Book by MOONPIXIEE*) and turns page-by-page (click a page like a real book). Each book keeps its own **real cover** (identity in the cover phase) but shares the House reading experience (parchment + leather + ribbons + brass clasp). Preview text is the author's real words.
  - **Wired to Shopify (live).** House of Luna's store (`housesofluna.myshopify.com`) is connected; *Purchase · $9.99* opens the real product (`/products/mastering-your-dark-feminine-energy`). **The House remembers ownership:** after Purchase the button becomes **Continue Reading** and the book simply opens next time (persisted via `room_items`, so it holds across devices/visits). NOTE: ownership is currently marked optimistically on Purchase-click; real fulfillment gating wants a Shopify order webhook / customer login — a follow-up.
  - **Interaction-language law (ratifies Luna's point #10):** the **Journal** speaks in bookmark tabs (*Continue Reading · Keep in My Room · Return to Shelf*); a **House Book** speaks in *Read Preview · Purchase · Return to the Room* (→ *Continue Reading* once owned); **in-world objects** (Mirror, Astro, ambient) never use buttons — they answer in the room.
  - **Blueprint 009 — The Library is the destination (Luna's next big project, ratified, NOT yet built).** The site is a place, not a store: **Front Door (entrance hall) → The Library → Books · Letters · Interactive Books · Journal.** Library v1 opens almost silent — *"THE LIBRARY / Some books wait for the right person."* — then a **Featured Shelf** (*NOW WAITING — Mastering Your Dark Feminine Energy · A House Book · Read →*) and quiet shelves: **House Books** (real + coming-soon), **Letters** (001, 002…), **Moon Notes** (notes/essays/observations), **Interactive Books**. *The Becoming* stops being a webpage and becomes the **first interactive book** you literally open → turn pages → **write inside** → **save your pages** → return to shelf (people write in books, not forms). The catalogue is a **growing collection** you revisit, not a product grid. Goal: once someone enters the Library, they forget it's ecommerce. Proposed as the next build after these four surfaces are signed off.
- **v2.5 — 14 Aug 2026** — **The room becomes a place, not a picture — and the book model is corrected.**
  - **Blueprint 006 — The Living Room (layers, alive-objects, and aging-not-animating).** Ratified Luna's architecture: a room is not one flat PNG. 95% is a static photoreal plate; only a few *interactive objects* are their own layers (Option 3). The layer that catches light, lifts, and opens is separate from the plate behind it. Astro was already this (transparent sprite layer); the book now is too. North-star addition: **the room ages, it doesn't animate** — over visits/keeps/seasons the room quietly gains things (a second candle, pinned letters, plants, a new sleeping spot for Astro), so the magic is *"wait — I don't remember that being on the wall,"* not *"the chair moved."* Aging is data-driven off the memory loop; the visible milestone objects are art Luna will generate (Astro-cutout pattern), layered in at thresholds.
  - **Blueprint 007 — The Journal, the Shelf, and the Bed.** One object must never carry many identities. So: **the bed holds only the JOURNAL** — personal, never changes, the resident's own book, where the House remembers ("The page you left open," a living page showing the date, keeps count, and whether Astro followed you home — built to the mockup). **Luna's published books live on a SHELF — "Luna's Collection"** — in Luna's Room, browsed like an author's library: pull a spine → it opens → preview → *"Take this with you."* **LAUNCH exception:** during a release, one promo copy rests *beside* the journal on the bed, ribboned, "like Luna left it for you" — it never replaces the journal, and returns to the shelf after. A book taken home joins the buyer's own shelf (`room_items`, "The House remembers what you brought home").
  - **The Artifact Viewer got the mockup's "tome" chrome** (rolled into the engine, used by every book/journal): aged-parchment two-page spread, deckled edges, gold corners, ribbons that sway, a museum close-X, and **buttons shaped as fabric bookmarks, never modern UI** (Continue Reading / Keep in My Room / Return to Shelf). Typography set to the mockup: Playfair Display headings, Cormorant body, **Allura** script for the handwritten journal lines. Particles already floated.
  - **Astro moved onto the bed in Your Room** and made a permanent resident there (it's the resident's own room — he's always home, curled on the velvet).
  - **Data model:** `BOOKS[]` catalogue + `LAUNCH` flag + `COLLECTION_LABEL` (one place to feature/stock a title). **Assets Luna still provides:** book cover cutout PNGs at `/assets/books/<slug>.png` (dark-feminine-energy, becoming, house-of-luna) — until then a muted CSS cover stands in — and the **shop link(s)** (Gumroad/etc) for each book's `href` (null today = "the shop opens soon," no dead link). Installed `you.html` + `luna.html`; the other 9 zones inherit the same tome+fonts upgrade on next push.
- **v2.4 — 9 Aug 2026** — **The memory loop closed.** `hol_collection` graduated from localStorage-only to Supabase `room_items`: supabase-js now loads on every room page; on load, a signed-in resident's keeps sync **both ways** with their room (pull DB → local, push local-only → DB, so first login merges this-device keeps up); every Keep upserts to `room_items` (unique index on room_id+item_id added). Degrades gracefully to local-only when signed out or offline — verified no errors. Turning it ON end-to-end needs the auth config (email provider, confirm-email setting, Site/Redirect URLs) + the deployed domain. Then keeps follow a resident across every device — "The House Remembers," literally.
- **v2.3 — 9 Aug 2026** — Mobile/Hub bug pass from Luna's walkthrough. Hub: **discovery day-gating turned OFF** (all 8 doorways show at once — it was hiding Main Table etc.), hotspots **re-measured onto the real objects** (Main Table dead-center, hearth far-right, shelves far-left…), whispers switched to the lighter placard style, and on phones the Hub now **fits the full width** so every doorway is visible and tappable (was a wide panorama cropped to one edge door). Zones: softened the whisper/floatline shadow (the "floating dark orb"), and added a **contact shadow under Astro** so he never reads as floating.
- **v2.2 — 9 Aug 2026** — **"Receive Your Key" wired to real Supabase Auth** (email + Key, never "password"): welcome + optional door-name → Forge your key (email/key/confirm) → 🗝→🚪 unlock → Your Room; returning = "Welcome back, the House recognizes you." Session-aware; door name → `display_name`; signup fires the room trigger. supabase-js loaded on the room pages; auth layer abstracted for Apple/Google later. Config for Luna to verify: email provider, Confirm-email setting, Site/Redirect URLs. UI verified in-sandbox (welcome / forge / sign-in); live auth round-trip runs on the deployed site (sandbox can't reach Supabase).
- **v2.1 — 9 Aug 2026** — MoonNet is now **data-driven**: `public.moonnet_destinations` table (RLS: public reads enabled rows) seeded with the 8 destinations; the desktop reads them over the publishable API and falls back to a built-in list offline. Hub model ratified (sign-in → Your Room → MoonNet → Velvet). "Continue Creating" href left null pending the Velvet URL — set the row to go live. Resident-as-source-of-truth captured.
- **v2.0 — 9 Aug 2026** — **Room architecture built in Supabase** (`velvet-muse-studio`): `rooms`, `room_items`, `room_visitors`, `room_customizations` (all RLS'd; rooms public-visitable, owner-writable), `profiles` extended with username/avatar/bio. `handle_new_user()` extended to provision a room at signup (exception-guarded; Velvet's profile+workspace creation preserved). Signup trigger hardened (execute revoked from anon/authenticated). Security advisors: no errors on the new tables. Next: wire `Receive Your Key` → Supabase Auth and read `room_items` in Your Room.
- **v1.9 — 9 Aug 2026** — The computer became **MoonNet**, the House's operating system: it boots (`Connecting… ✦ The House remembers. ✓ Velvet ✓ Letters ✓ Conversations ✓ Hallways ✓ Observatory`) then resolves to a desktop (Continue Creating / Your Room / Hallways / Conversations / Letters / Observatory / Settings). **Hallways** (open doors, not usernames) and **Conversations** (in-world notes) built as previews. Luna's Room computer now boots MoonNet too. Ratified the MoonNet vocabulary (Visit Room / Room / Memories / Keep / Collected).
- **v1.8 — 9 Aug 2026** — Blueprint 005 (House Network / auth-as-arriving-home) ratified and captured, with the proposed `rooms`+`room_items` schema (spec only). BUILT front-end: the "Receive Your Key" first-visit ceremony and the THE HOUSE NETWORK computer menu in Your Room. Supabase account step + real social links await Luna's go-ahead.
- **v1.7 — 9 Aug 2026** — Luna's Room and Your Room BUILT on the engine and wired (thresholds opened, House Map updated). Your Room's collection view ("Everything You've Kept") ships as the first slice of Blueprint 004 — reads the kept-items store and displays them by source room. Engine gained per-room tone (`--accent`/`--wake`), a `collection` hotspot type, external `link` hotspots, and per-room return targets. Astro roams both rooms too.
- **v1.6 — 9 Aug 2026** — Astro blink removed (kept breathing + stir). Four fixed backgrounds installed (Fireplace, Bookshelves, Terminal, Hidden Desk) — the fix removed the baked cat, so those three became roam rooms and Astro now roams all nine.
- **v1.5 — 9 Aug 2026** — Mobile: touch drag-to-look-around + two-tap interaction across the Hub and all 9 rooms (mouse parallax was desktop-only, leaving phones static). Astro idle animation: two-frame **slow blink** (eyes-closed frame auto-generated per pose by detecting the eye pixels) plus a gentle idle **stir**, on top of breathing.
- **v1.4 — 9 Aug 2026** — Interaction layer rebuilt: invisible-at-rest hotspots, placard whispers, category system (nav/artifact/ambient/lore/rare), in-world reactions for ambient + sit + Astro, object-matched verbs, lighter depth-of-field, mobile two-tap. Astro rebuilt as a transparent sprite layer (7 poses, seed-driven pose/spot/presence) across the six roam rooms. Open: cat-free backgrounds for Bookshelves/Hidden Desk/Terminal so Astro roams there; Astro idle animation (blink/tail via the face + tail sprites); walk-between-rooms.
- **v1.3 — 9 Aug 2026** — Artifact Viewer engine BUILT and rolled to all 9 zones: per-type presentation (book / page / letter / object / mirror), rarity dressing through legendary "the House notices," depth-of-field blur behind, close-in-place. Elevated the "furniture, not a screen" law to the banner. Recorded the inventory-as-Your-Room philosophy.
- **v1.2 — 9 Aug 2026** — New full-res Upstairs render installed (007), hotspots re-pinned to the real gallery (balcony · reading chair · alcove lamp · patio door · Astro on the balustrade). *Note: the new render has no telescope — the ratified "Telescope" interaction is deferred until a scope is in the art (or say the word and I'll pin a sky-gaze beat at a window).* Elevated Luna's mantra to the document banner. Captured two ratified directions: **Astro's living routines** and **Blueprint 004 — The House Remembers**.
- **v1.1 — 9 Aug 2026** — Hub + all 9 zones BUILT on the real renders and installed to the repo. Zone-ID registry LOCKED to grid order 001–010 (§11). Hub interaction model (invisible hotspots, walk-in / kneel transitions, day-gated discovery) implemented and verified. Zone content prose is Claude-drafted placeholder in Luna's voice — hers to rewrite. Open: full-res art for 007 Upstairs & 009 Loose Pages; script the day-7 Astro-key and day-14 mirror-walk scenes; ratify proposed interactions & unlock timings.
- **v1.0 — 9 Aug 2026** — First full Library bible. Hub + 9 zones spec'd. Six Bibles codified.
