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

Live in the six roam rooms now (Fireplace, Main Table, Upstairs, Loose Pages, Mirror, Secret Patio). The three rooms with a cat **painted into the background** (Bookshelves, Hidden Desk, Terminal) keep that painted cat for now so there's never a double — **send cat-free background regens for those three and Astro roams there too.**

## Change log
- **v1.4 — 9 Aug 2026** — Interaction layer rebuilt: invisible-at-rest hotspots, placard whispers, category system (nav/artifact/ambient/lore/rare), in-world reactions for ambient + sit + Astro, object-matched verbs, lighter depth-of-field, mobile two-tap. Astro rebuilt as a transparent sprite layer (7 poses, seed-driven pose/spot/presence) across the six roam rooms. Open: cat-free backgrounds for Bookshelves/Hidden Desk/Terminal so Astro roams there; Astro idle animation (blink/tail via the face + tail sprites); walk-between-rooms.
- **v1.3 — 9 Aug 2026** — Artifact Viewer engine BUILT and rolled to all 9 zones: per-type presentation (book / page / letter / object / mirror), rarity dressing through legendary "the House notices," depth-of-field blur behind, close-in-place. Elevated the "furniture, not a screen" law to the banner. Recorded the inventory-as-Your-Room philosophy.
- **v1.2 — 9 Aug 2026** — New full-res Upstairs render installed (007), hotspots re-pinned to the real gallery (balcony · reading chair · alcove lamp · patio door · Astro on the balustrade). *Note: the new render has no telescope — the ratified "Telescope" interaction is deferred until a scope is in the art (or say the word and I'll pin a sky-gaze beat at a window).* Elevated Luna's mantra to the document banner. Captured two ratified directions: **Astro's living routines** and **Blueprint 004 — The House Remembers**.
- **v1.1 — 9 Aug 2026** — Hub + all 9 zones BUILT on the real renders and installed to the repo. Zone-ID registry LOCKED to grid order 001–010 (§11). Hub interaction model (invisible hotspots, walk-in / kneel transitions, day-gated discovery) implemented and verified. Zone content prose is Claude-drafted placeholder in Luna's voice — hers to rewrite. Open: full-res art for 007 Upstairs & 009 Loose Pages; script the day-7 Astro-key and day-14 mirror-walk scenes; ratify proposed interactions & unlock timings.
- **v1.0 — 9 Aug 2026** — First full Library bible. Hub + 9 zones spec'd. Six Bibles codified.
