# PHASE-R-PROPOSALS.md — Future proposals (NOT ratified)

Proposals parked for deliberate design and future ratification. Nothing here is
adopted or built until Luna rules on it individually.

---

## House Sigil (from R8)

**Status: PROPOSAL ONLY.** The crescent-and-star emblem in reference R8 was
**removed** from the shipped threshold asset (ruling of 31 Jul 2026 — inpainted
with darkened masonry). A "House sigil" — the House's own mark — is logged here as
a **future proposal for deliberate design**: it should be designed on purpose, not
inherited from a generated reference. Candidate placements when it exists: browser
favicon, the threshold wall above the name, House Map header, printed matter.

---

## N-1 — Door naming (presentation layer)

**Ratified in this build (31 Jul 2026), applied to the Grand Hall nameplates:**
- **The Library** → `/library` — engraved with the article.
- **The Machine Room** → `/tools` — engraved with the article.
- **The Edit** → `/edit` — unchanged.
- **Work With Luna** → `/work` — unchanged.

*(No route renames — displayed names are presentation only, per the ROUTE-MAP and
the frozen-architecture boundary.)*

**PROPOSALS ONLY — NOT adopted (they touch ratified names; await ratification):**
- **The Conservatory** — a proposed name for **Moss & Moon**. Not adopted.
- **The Atelier** — a proposed name for **Work With Luna**. Not adopted; the door
  ships as "Work With Luna."

Both proposals rename ratified rooms and therefore require explicit constitutional
ratification before any use.

---

## Hall Patina Pass — COMPLETE, BOTH LAYERS BUILT & CONFIRMED ON DEVICE (3 Aug 2026)

**The milestone is done.** With this pass, **R9's visual requirements are fully met on
production — stone, dressing, and space.** Phase R stays closed (appearance-only).

**Status: the DRESSING layer is EXECUTED, approved, and CLOSED.** Commit `feat(phase-r):
Hall dressing pass` + refinement knobs `fix(phase-r): Hall dressing knobs`; Luna
approved on the dev-preview walk and **confirmed on the real-device phone re-walk
(3 Aug 2026)** — gear reads as a gear, frame and lamps land right, journey of light
and motes hold, reduced-motion twins verified.

**Status: the ARCHITECTURAL-DEPTH layer is EXECUTED, approved, and CLOSED.** Commit
`feat(phase-r): Hall depth pass`; approved on the dev-preview walk and **confirmed on
the real-device phone re-walk (3 Aug 2026)** — the depth holds on device; Milestone C
closed. Built in staged milestones with Luna's eye between each (A floor · B piers/trim
· C distance/asymmetry). The dressing pass matched the Threshold's material and light;
this pass matched its **space**. See the executed record below.

### Executed in the dressing layer (Luna's instruction, 3 Aug 2026)
1. **Lanterns** — a wall-mounted lantern over each door (House-warm flame — the
   House owns light), a warm wash on the wall above + a pooled glow below (LAW 1:
   sourced key light that pools and falls).
2. **Fuller sill still-lifes** — each door's ratified leak stays the primary trace,
   joined by its belongings in the door's own light: Library page **+ closed book**;
   Edit drape **+ gilt button**; Machine glow **+ brass gear/hub**; Work task-pool
   **+ leaning framed piece + floor candle**.
3. **Age** — ivy/growth **cut from the R8 photograph** (`tools/hall-ivy.py` →
   `public/hall-ivy.webp`) clinging at alternating jambs, + a faint dust tooth.
4. **Journey of light** — each threshold pools its `--room` hue (gold → burgundy →
   amber → brass) at LEAK intensity; between doors the masonry returns to House
   stone (LAW 5 held — light, not paint).
5. **Motion** — dust motes in the Library beam + a breathing flame, both gated
   behind `prefers-reduced-motion: no-preference` with a complete static still-frame
   (3 static motes + steady flame) (LAW 6).

### Ratified with the build (Luna, 3 Aug 2026)
- **Fuller still-lifes over the one-leak brief** — the ratified "one primary leak per
  door" (DOOR-BRIEFS §2.7) is **relaxed for the dressing layer**; each door may carry
  a small still-life around its primary leak.
- **Dark ivy, not green (LAW 5).** The R8 photo carries no extractable green foliage
  (103 near-black greenish px in the whole image); the growth is dark weathering.
  Green ivy would read as **Moss & Moon leaking into the Hall** (that room is unbuilt;
  LAW 5 forbids it). The Hall's growth is the photograph's own dark growth.
- **No drawn cracks (concept-board doctrine).** Drawn cracks read as straight
  scratches/seams on real masonry (built, rejected). Age lives in the photographic
  stone's own weathering + moss/ivy + dust. **If a crack is ever wanted, it is CUT
  from R8 — never drawn.**

### Refinement knobs — RESOLVED (Luna's phone re-walk, 3 Aug 2026)
All three ruled on device and turned (`fix(phase-r): Hall dressing knobs`):
- **(1) Machine Room gear** — recut with a toothed rim + hub + a small meshing cog;
  it reads as a gear, not a target.
- **(2) Work With Luna frame** — a **brass edge only**; the frame stays **empty** (no
  portrait hint — P-R4 may fill it someday).
- **(3) Lanterns** — became **hanging lamps with a visible silhouette** (roof cap +
  bracket + metal-ribbed glass body), echoing the Threshold's lamp.

### Executed in the depth layer (Luna's instruction, 3 Aug 2026) — frontal arcade + receding floor
Ratified model (Luna): **frontal arcade + receding floor** (doors stay frontal and
equal — tap-target/mobile/LAW-9 safe); **keep the light-rising-in-the-opening motif**,
just deepen the reveal; **subtle asymmetry, materials only**; **staged cadence** with
Luna's eye between each milestone. Out of scope (ruled): full vanishing-point corridor,
literal per-room door leaves, phantom/blank bays (R9 forbids blank spaces).
1. **The floor (A)** — a receding stone plane (same masonry, perspective + shadow) is
   the Hall's ground; **per-door aprons** so every door stands on it (holds in the
   mobile procession); an aged **plinth/base course** at each wall-floor junction.
   Work's apron meets the desktop foreground floor on one agreed ground plane.
2. **Piers + trim (B)** — the flat wall becomes an **arcade**: projecting stone piers
   flank each bay (relief — lit edge, shaft face, shadowed reveal; same stone), a
   **cornice** caps them, and the **reveals are deepened** (jamb/soffit shadow). Work
   With Luna became a framed doorway. Piers aged down from a too-clean first pass.
3. **Distance + asymmetry (C)** — the arcade **dissolves into shadow at the sides**
   (the hall continues past the frame; no phantom bays); **whisper-level asymmetry,
   materials only** (per-bay ivy / pier weathering / apron tone — never geometry or
   spacing). **Mobile piers narrowed + softened** so the door dominates the viewport
   (mobile is the primary acceptance criterion).

All dressing elements carried onto the new architecture; holds desktop + mobile (375px)
+ reduced-motion still-frame; console-clean; tap targets unchanged; no copy added.

**Governed by reference R9** (`design-history/R9-grand-hall-vision.{webp,md}`, mood
only). Adopted into scope from R9's atmosphere notes: **one continuous space**, the
**same masonry throughout**, subtle **dust and light rays**, **moss, cracks, worn
stone**, centuries of age, **no hard dividers** between doors. **Light bleed is
adopted at LEAK intensity only** — each door pools light at its own threshold;
between doors the masonry returns to House stone; **no full-wall colour washes**
(LAW 5). The light progression (Library warm-gold → Machine amber/bronze) is a
journey of light, not paint. R9's teal (Work) and rose/mauve (Edit) are rejected —
Work is warm task light, The Edit is burgundy.

**Specific note (1 Aug 2026):** **dust motes drifting in the Library door's light
beam** — barely visible, motivated by the lamp (they appear only where the door's
warm light spills), with a **static equivalent under reduced-motion** (LAW 6).
**Built in the dressing layer, 3 Aug 2026.**

---

# Phase R proposals — logged 1 August 2026 (NOT built; Phase R structure remains frozen)

## P-R1 — The Conservatory Passage (Moss & Moon)

Moss & Moon does not enter the Grand Hall. It is reached: Hall → Courtyard → Glass Conservatory → Moss & Moon. A Victorian glass botanical room you wander into, not pass through — humidity, ivy, fog, filtered green light, birdsong (audio reserved). Requires new routing and spatial structure → structural phase (Phase S candidate flagship). Hall gradient reference is unaffected; the six doors stand. Moss & Moon remains botanical-atmosphere only — no live plant inventory, ever.

## P-R2 — Hidden Passages

Discovered spaces with no map presence and no Hall access. Example: a bookshelf in the Library that opens onto a staircase. "You found something." Vehicle for future seasonal experiences. Never announced, never listed, never a notification.

## P-R3 — Visiting Houses

Belongs to the memory-and-keys milestone. A visitor enters another person's *House*, not a profile: architecture familiar (LAW 9 guarantees orientation — you always know where the Library is), atmosphere entirely theirs — their light, collections, memories. No follower counts, no social metrics. This proposal is a standing argument for the identity infrastructure's priority.

## P-R4 — Living Hall

The Hall is never static. As a resident's House grows, the Hall changes through architecture, not notifications: lanterns relight, books accumulate, plants spread, portraits appear, seasonal decorations, canon artifacts, moonmarks, holiday candles. The Hall itself remembers the journey. **Design constraint for current work:** Phase R's Hall build should avoid choices that would make environmental change hard to retrofit — treat door surrounds, sills, and wall fixtures as future mount points, structurally stable but visually mutable.

## P-R5 — Geography Before UI

Every navigation decision should first be explainable as movement through the House before it is explained as interface design. If a feature cannot be placed somewhere in the House, it probably doesn't belong yet. (Should notifications exist? Where do they live? Should search exist? Where in the House would someone search? Settings — an Archivist's desk, a steward's office, a caretaker's room?) The question is never "where do we put the button" but "where would this exist in the building."

*Note: P-R5 is a design filter, not a structural proposal — candidate for graduation into the aesthetic laws in a future ratification.*

## P-R6 — The Passages' Place *(logged 2 Aug 2026, deferred to a structural session)*

**The Becoming** and **Letters from Moonpixiee** are Passages, not rooms (Constitution §8: The Becoming is a book; §10: Letters is the Library's periodical, Substack the subscription layer). They are reachable from the House Map's *Passages* group but have never been given a place in the House's geography. Per P-R5 (Geography Before UI), the question is not "how do these pages look" but **"where in the building do they live?"** — inside the Library (Letters as its periodical shelf, The Becoming as its first interactive book)? A landing off the Hall? A corridor?

**Interim state (2 Aug):** both received an **appearance-only** consistency pass under F-ACC-1 — retired rose re-tokenized to House brass, legacy top-nav replaced by the Hall-return carrier, titles normalized to `| House of Luna`. This makes them House-consistent *in appearance* only.

**Structural residuals deliberately NOT addressed by the appearance pass (belong to this proposal):**
- **Letters** carries an inline **email-capture form** ("Subscribe" + "your@email.com") with no backend, and a **"Join the Waitlist →"** card. This is intake/collection language of exactly the kind F-6 removed from the Machine Room, and a DR-001 ghost (a form with no door behind it). Its home should route to the ratified subscription layer (Substack), not a dead inline form.
- **The Becoming** uses **emoji icons** (🌑 🪞 ✨) in its shadow-block interface — a Constitution §23 violation (no emoji in interface).
- Both use the retired-era generic section/card structure rather than an in-room material world.

These resolve when the Passages are given their place — not before.

## P-R7 — The Trading Room (The Observatory) *(logged 2 Aug 2026, structural phase)*

A room for **pattern recognition, probability, psychology, and patience** — rendered as an **old observatory**: star charts, merchant ledgers, hand-drawn market structure. Atmosphere per LAW 9 (one House; the observatory is a mood over the same architecture); structural phase required.

**Standing rule (guardrail):** the room shares **Luna's craft and study — never trade signals or financial advice to residents.** It teaches how she looks, not what to buy; it never becomes an advisory or signal service.

## P-R8 — The Restricted Collection *(logged 2 Aug 2026, structural phase; Phase K–dependent)*

A **gated wing at the back of the Library**: **public-domain and legally available texts only** — grimoires, hermetica, classical philosophy — presented with **Luna's annotations** ("The Librarian has left notes in the margins"), reading paths, and historical context. **No unauthorized copies, ever.** Access is **sequenced, not sold**:

> *"Some books are not hidden because they are forbidden; they are waiting until the reader is ready to meet them."*

**Requires Phase K entitlements** — the **third standing argument for Phase K's priority**, alongside K-USE-1 (The Becoming as a Living Book) and K-USE-2 (Letters in the Walls). The gate is a sequencing mechanism (readiness / reading path), not a paywall.

---

# Tonight's rulings — 7 August 2026 (Alignment Pass close · new law intents · Machine Room milestone)

## Grand Hall — Alignment Pass — COMPLETE (Stages 1–4, 7 Aug 2026)

Re-opened the stamped Hall to match the **R9 concept render** ("one continuous wall,"
"a journey of light," "real doors," "atmosphere"). Built in four staged milestones with
Luna's eye between each:

1. **Continuous wall** — the masonry brought present and warm-lit across both rows so the
   openings read as cut INTO one stone wall, dissolving into House black before the page ends.
2. **Journey of light** — each threshold pools its `--room` hue on the floor at LEAK
   intensity; between doors the stone returns to House (LAW 5 held — light, not paint).
3. **Real doors** — each opening now holds a planked warm-dark wooden door leaf (one wood
   for every room — LAW 9; the room's COLOUR is its light, not its door), iron ring handle,
   lit top edge, the room's light rimming and bleeding under it; it swings on activate.
4. **Atmosphere + cinema** — soft god-rays falling from the lanterns (light-in-haze, NOT
   drawn lines — the concept-board no-drawn-rays doctrine holds), hall-wide drifting dust
   (reduced-motion stills), lantern smoke-stain darkening the vault, warm depth-haze
   softening the far reaches into air. Engraved Hall title (see law intent below).

Holds desktop + mobile + reduced-motion still-frames. **The Alignment Pass is closed;
the Hall's Stage-4 form is its finished state.** Ratified by eye across the four stages.

## LAW INTENT (Luna, 7 Aug 2026) — to be inscribed into the Aesthetic Laws (§26)

Two laws Luna ruled tonight ("I'd make this a law" / "that sentence should become a design
law"). Logged here as her stated intent, pending formal inscription into the Constitution:

- **LAW (proposed) — Architecture speaks through the walls.** Every room title is CUT into
  the building, never floating text on top of it — an inscription the House has carried for
  centuries: an incised fill pulled toward the stone, a shadow falling into the cut, a warm
  bevel catching the room's light. Applies House-wide. (The Threshold already complies; the
  **Grand Hall title now complies — first proof, 7 Aug 2026.**) Luna's note: this is the
  single strongest separator from every SaaS surface.
- **LAW (proposed) — Pages are never destinations; they are locations inside one building.**
  Every room wears the House masonry and continues the one space; moving between rooms should
  feel like walking another thirty feet down the same hall, never like opening another
  webpage. (Graduates P-R5 "Geography Before UI" one step further — not only is navigation
  movement through the House, the surface itself is always the same building.)

## Machine Room Pass — NEW MILESTONE (Luna's redefinition, 7 Aug 2026)

The Machine Room is **redefined** from "AI tools" to **the infrastructure that powers
creation** — everything inside helps you *think, create, organize, or preserve*; the engine
beneath the House, the backstage of imagination; built for creators, not casual visitors.

**Machines (today):** **AI Luna** (thinking · writing · planning · strategy) · **Muse**
(identity memory · characters · visual consistency · worlds) · **Brand Engine** (creative
systems · type · palette · voice) · **Creator OS** (publishing · organization · repurposing
· workflow) · **VELVET//CTRL** (the Restricted Wing — identity · memory · personal creative
OS; eventually the largest machine in the room).

**Build spec (future pass):** the cards become **heavy doors / cabinets you open into the
machine**, not information tiles — they should feel weighty; **the door wakes on hover**
(lantern brightens, brass warms, a faint hum — "this machine is awake"); new copy candidates
— *"Choose a machine. Each one performs a different kind of impossible."* / *"Every
impossible idea begins with the right machine."*

**Canonical hierarchy:** House → Grand Hall → Machine Room → VELVET//CTRL → Muse → Projects
→ Scenes → Manifestations.

## VELVET//CTRL placement — RULED (Luna, 7 Aug 2026): BOTH

VELVET keeps its **marquee door in the Grand Hall** (lit 5 Aug; hue `#B4283F` provisional,
awaiting ratification) AND lives **inside the Machine Room** as its flagship machine. The
Hall's 5-door Stage-4 form is final; the "inside the Machine Room" placement is built in the
Machine Room Pass above. (Luna's Disney logic: the Machine Room is the *land*, VELVET the
headline attraction within it — but the flagship also earns a front door on the Hall.)

## /velvet entrance — eye-walk refinement (7 Aug 2026)

The wordmark lifted into the upper third (met first), a deliberate reach of negative space
opened before the arch, so the descent to the door reads as approach rather than a stacked
list. `--vc-signal` (#C23A4C) remains PROVISIONAL, awaiting on-screen ratification.

## Machine Room Pass — Stage 1 & 2 EXECUTED (7 Aug 2026; appearance-only, F-6 held)

**Stage 1 (the wing):** /tools rebuilt from "four cards" into a ROOM — the Hall's
own masonry carried into a dimmer industrial wing, engraved title "The Machine
Room" (Architecture-speaks-through-the-walls law), redefinition copy ("The House
builds its impossible ideas here." / "Choose a machine." / "Each one performs a
different kind of impossible."), and the machines rebuilt as arched DOORWAYS set
into the wall. Brass for the workshop machines; VELVET//CTRL crimson + locked, the
one crossing (→ /velvet). F-6 held — dormant machines are un-openable doorways,
never intake buttons.

**Stage 2 (weight + the waking):** each door made a HEAVY stone arch (House masonry
surround, lit top edge, deep reveal, dust on the sill, whisper-asymmetry so none
read stamped). The WAKING (Luna's ruling — NOT scale, NOT bounce): on approach the
interior light RISES from within ("a candle lit deeper inside") — an opacity-swelled
glow, filament for the machines, crimson for VELVET. Ambient dust drifts the wing
(motion-safe stills). The wall GROWS: 9 doors on a 3×3 — the five real machines +
three named "the wing grows" doors + one eternal "More Machines / In Time"; the mono
manifest reads SYS.01 → SYS.08. VELVET DESCENDS (deeper, darker crimson interior).
**Stage 3 (later):** sound — AI Luna hum, Muse paper, VELVET crimson resonance.

**PROVISIONAL — needs Luna's ruling (introduced as visible "Coming Soon" doors to
show the wing's scale; names are placeholders):** Trading Lab · Story Engine · House
Memory. **Reconcile Trading Lab with P-R7** (The Trading Room / The Observatory) —
these may be the same thing under two names, and P-R7 frames it as a *structural
room* (an observatory), not a Machine Room *machine*. Decide: is trading a machine
in the workshop, or its own room off the House? Same open question for whether
"House Memory" overlaps the Phase-K identity/memory infrastructure. The doors are
easy to rename or remove; nothing downstream depends on these names yet.
