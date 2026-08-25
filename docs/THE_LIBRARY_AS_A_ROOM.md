# 🏛 Blueprint 004 — The Library as a Room
### House of Luna · the card is a placeholder for an object

> **The cards were never the design. They are scaffolding.**
> The final Library is not a page with sections — it is **one photoreal room, like the hero image**, and every card is a placeholder for something you *touch*: a bookshelf, a desk, a fire, a staircase, a letter, a door.

*Luna, ratified 15 Aug 2026: "I love the information architecture, but I don't want the final Library to look like a website with cards. I want it to eventually become a photoreal explorable room like the original hero image… The goal is that every interaction feels like touching something inside the House rather than clicking a UI component."*

---

## The law

1. **A card is a placeholder for an object.** Every rectangle on the current `/thelibrary` screen is a stand-in for a real thing in the room. The card carries three pieces of data — a **name**, a **whisper** (its subtitle), and a **destination** — and those are exactly the three things a photoreal hotspot needs. The card is the object's *data*, wearing a temporary body.
2. **The information architecture survives; the interface dissolves.** We keep the structure we built (what's here, what leads where). We throw away the *look* of it. The IA becomes the room's floor plan, not a list.
3. **Touch, don't click.** Nothing reads as a UI component. You don't press a button labelled "Fireplace" — you cross the room and the fire wakes under your hand. The verb is always physical: *pull a book, read a letter, climb the stairs, open a door, look in the glass.*
4. **This is already how the Conservatory works.** The mechanism is not hypothetical — it shipped. One photoreal plate + invisible hotspots + wake-glow + whisper + walk-through. The Library becomes a room the *same way the Conservatory did*; the cards are just the Conservatory before its art existed.

---

## The translation — every card → the real object

The current `/thelibrary` screen, section by section, and the object each becomes in the one Library room. Nothing here is new information — it's the **same names, whispers, and routes**, re-bodied as things.

| Today (a card) | Becomes (an object in the room) | You… | Interaction |
|---|---|---|---|
| **Written in the House** — Luna's book spines | **Luna's Collection** — a specific lit shelf / a display lectern by the entrance | pull a spine | `openShelf` → the cinematic book (already built) |
| **Letters** — "Read one by the fire" | **The letter basket on the fireside table** (and the mailbox) | lift a letter | letter viewer (artifact) |
| **Moon Notes** — "Small things, kept" | **A tray of paper slips / pinned notes** on the desk's edge | turn a slip | short-read placard |
| **Reading Lists** — "Books that changed her" | **A reading stand** with an open book + a handwritten card | read the card | curated list viewer |
| **The Bookshelves** | **The towering aisle** itself — you walk *into* it | step down the aisle | `walkTo` → bookshelves scene |
| **The Fireplace** | **The hearth across the room** | warm your hands | `walkTo` → fireplace scene |
| **The Main Table** | **The central table**, papers spread | lean over it | `walkTo` → main table |
| **The Hidden Desk** | **A desk in an alcove**, pen still out | approach it | `walkTo` → hidden desk |
| **The Terminal** | **A glowing screen/console** on a side table | wake it | `walkTo` → terminal |
| **Loose Pages** | **Papers on the floor**, one drifting | pick one up | `walkTo` → loose pages |
| **The Mirror** | **The tall mirror** on the wall | look again | in-world Mirror (no modal) |
| **Upstairs Gallery** | **The staircase** climbing into the dark | climb | `walkTo` → upstairs |
| **The Secret Patio** | **The glass door** to the terrace | step outside | `walkTo` → secret patio |
| **The Conservatory / Luna's Room / Your Room / Stay the Night / Listening Room** | **Doors and archways**, each lit its own colour | step through | `walkTo` / `stepThrough` (already built) |
| **The "Library" title header** | **carved into the stone lintel** over the entrance, or simply *gone* — the room needs no `<h1>` | — | baked into the art |
| **The Keeper's note** | **a folded note left on the table**, in her hand | read it | letter viewer |

Every route already exists. The art is the only missing layer.

---

## The interaction grammar (already built, reused wholesale)

The Library room inherits the exact grammar the rooms already use — nothing new to invent:

- **Invisible at rest.** Objects don't glow, outline, or announce themselves. The room looks like a room.
- **Wake on approach.** Hover / focus and the object catches light (`.wake`) — *that* is the only affordance.
- **Whisper, not tooltip.** The card's subtitle becomes the object's whisper placard, rising from shadow (*"The fire has been waiting." · "One page escaped."*).
- **Touch dispatches by kind.** Shelf → open the book. Letter → read it. Door → walk through. Mirror → answer in-world. (This is the zone engine's `activate(h)` — it already does this.)
- **Leaving is a walk.** You step out through the threshold; the room recedes. (Shipped in v2.21.)

---

## The production path (art phase — NOT now)

Per the standing law (*world-design before art*), this stays a blueprint. When the art phase opens, the Library becomes a room in **four steps**, the Conservatory's exact recipe:

1. **One master render** — the Library hero as a single photoreal environment (the House Standard prompt; `fit:contain`, baked title in the stone if wanted). Not fifteen images — *one room.*
2. **Object Bible pass** — each object above gets its *Purpose · Today · Tomorrow · whisper* (the Object Bible already holds most of these).
3. **Hotspot overlay** — author a coordinate map over the render: each object → `{x%, y%, name, whisper, cat, route}`. This is a data file, drawn *from* the finished art (like the Conservatory's 21 hotspots).
4. **Drop into the zone engine** — add `library` as a baked zone beside `conservatory`. The card layout doesn't get deleted — it becomes the **accessible skeleton beneath the art** (reduced-motion, screen-reader, and no-art fallback all render the IA as today). The room is the body; the cards are the bones that never show.

---

## Why the cards were right to build first

They let us get the **IA, the copy, the routes, and the connective tissue** correct while the art didn't exist yet — cheaply, and in a form we could test. Every whisper is written. Every door is wired. Every route is live. So when the render lands, we are not designing the Library — we are **giving a finished design its body.** The card version was never the destination. It was the House holding its breath.

*Bottom line: the Library already knows what it is and what everything in it does. It's just waiting to be able to be seen. When it can, no one will click a card again — they'll walk in, and the fire will be waiting.* 🖤🌙
