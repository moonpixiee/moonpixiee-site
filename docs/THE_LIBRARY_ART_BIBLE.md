# 📚 Room Art Bible — The Library
### House of Luna · Room 001 of the Art Phase · built against the Room Art Bible Standard

> The Library is the **hero** — the room the whole House was pictured in first, and the one every card on `/thelibrary` collapses into (Blueprint 004). It is the **entrance hall of the Library wing**: the room you *arrive* in, from which you can see — and walk to — everything deeper. Get this render right and it sets the visual north star for every room after it.

**One-line brief:** *A vast, candlelit gothic reading hall at night — the room that was expecting you.*

---

## 1 · Composition

- **Camera:** eye-level, standing height, at the **threshold looking in** — the viewer has just stepped through the door. Gentle wide lens (~35mm feel). Real one-point-ish perspective with the aisle drawing the eye *into* the depth.
- **Depth layers:**
  - **Foreground (lower third):** a **reading table** angled off-center-right — the Keeper's folded note, an open book on a stand, a tray of paper slips, a low candle. This is the intimate, touchable plane.
  - **Mid-ground:** **Luna's Collection** — a single tall bookcase, warmly lit, standing a little apart (the focal object, left-of-center). Across from it, a **hearth** glowing low. A **rolling ladder** against the shelves.
  - **Background:** the **bookshelf aisle** receding into shadow; a **staircase** rising right to a gallery balcony; the **rose window** high on the back wall (moonlit); a far wall with **three or four lit doorways** trailing off into the House.
- **Focal hierarchy:** 1) Luna's Collection shelf (brightest warm pool) → 2) the foreground reading table → 3) the hearth glow and the aisle's vanishing depth.
- **Reading path:** eye enters on the lit shelf, drops to the note on the table, is pulled down the aisle toward the rose window, then out to the doorways. Never dead-center; stage on thirds; floor you could cross.

## 2 · Lighting

- **Key:** warm candlelight, pooling on **Luna's Collection** and the **reading table** — those two islands are the brightest things in frame.
- **Practicals (in-frame, become anchors):** a candelabra on the reading table; sconces along the aisle; the **hearth**; a low lamp by the staircase; the dim **Terminal** screen on a side table (barely awake); candle stubs on the shelves.
- **The one cool counter-light:** **moonlight through the rose window**, spilling cool jewel-blue/violet down the back of the aisle — the single cool note against all the amber.
- **Time of night:** late. The kind of late where the House is quiet and the fire has burned low.
- **Rule in action:** light pools on what you can touch (shelf, table, hearth) and falls to shadow between — the room does the wayfinding, no labels.

## 3 · Color palette

- **Base (most of frame):** ink `#14101c` / warm black `#171219` — deep wood and shadow.
- **Warm pools:** candle `#e8b06a`, brass `#c9b47a`/`#e6cf94`, ember `#c96a3a` at the hearth.
- **Accent (zone token):** warm **amber-gold** `#E3B968` — the Library's key; wake-glow and whispers ride this.
- **The one cool counter:** rose-window moonlight — muted **jewel blue/violet** `#6b6ba8`-ish, low saturation, only down the aisle.
- **Ratio:** ~70% shadow & dark wood · ~25% warm candle islands · ~5% cool rose-window note. Mostly dark; islands of gold; one cool breath.

## 4 · Interactive object placement *(primary — the things you touch)*

Pulled from the Object Bible + Blueprint 004. Budget met: **13 primary**, plenty of secondary. Each is separable, recognizable at rest, clean silhouette.

| # | Object | Where in frame | Interaction (`cat`) |
|---|---|---|---|
| 1 | **Luna's Collection** (featured shelf) | mid, left-of-center, best-lit | `collection-shelf` → open the book |
| 2 | **The Keeper's note** (folded) | foreground table, near-center | `lore`/letter → read |
| 3 | **The reading stand** (open book + card) | foreground table, right | `lore` → the reading list |
| 4 | **Moon-notes tray** (paper slips) | foreground table edge | `lore` → short reads |
| 5 | **The letter basket** | small table by the hearth | `artifact` → read a letter |
| 6 | **The hearth / fireplace** | mid-right, glowing | `nav` → `/fireplace.html` |
| 7 | **The bookshelf aisle** | center, receding | `nav` → `/bookshelves.html` |
| 8 | **The Main Table** | center-ground, papers spread | `nav` → `/maintable.html` |
| 9 | **The staircase** (Upstairs Gallery) | right, rising | `nav` → `/upstairs.html` |
| 10 | **The Mirror** | left side wall | in-world Mirror (no modal) |
| 11 | **The Terminal** (dim screen) | side table, mid-right | `nav` → `/terminal.html` |
| 12 | **Loose pages** (on the floor) | foreground-left floor | `nav` → `/loosepages.html` |
| 13 | **The far doorways** | back wall, lit each its colour | `nav`/`stepThrough` → Conservatory (green) · Luna's Room (violet) · Your Room (gold) · Stay the Night (warm) · Listening (soon) |

*(The Hidden Desk and Secret Patio live one room deeper — reached via the aisle and a glass door glimpsed at the aisle's end — kept out of this frame to protect negative space.)*

**Secondary / ambient (20–40):** a rolling ladder, a brass globe, an astrolabe, guttering candles & wax runs, dust motes in the moonbeam, stacked unshelved books, a worn armchair, a folded blanket, an empty cushion (Astro's — he is *not* painted), a teacup gone cold, ivy at a high window, a bell jar, spilled bookmarks, a ladder-rail's gleam.

## 5 · Negative space for hotspots *(protect this fiercely)*

- **Breathing room:** Luna's Collection stands *apart* from the aisle shelving — clear dark around it so its wake-glow reads and its book-viewer can open. The three foreground table objects (note, stand, tray) are spaced across the table, not piled.
- **Quiet zones:** (a) the **foreground table surface** stays calm and uncluttered — this is where the book viewer / letter opens; (b) a **shadowed floor** area foreground-center — room for a whisper to rise.
- **Edge margins:** keep the Mirror (left) and staircase (right) **off the extreme edges** (~8–10% in) so their side-opening whispers (`wL`/`wR`) have room. Nothing critical in the outer 8%.
- **Doorway spacing:** the far-wall doorways sit **evenly spaced** along the back, each with dark between, so five nav hotspots don't collide.
- **Parallax headroom:** ~5% extra scene bleeding past every edge (aisle continues, ceiling continues) — the cover-plane drifts and must never show a border.
- **Restraint:** the center aisle floor stays open and dark — do not fill it. That emptiness is where the eye rests and where you feel the room's size.

## 6 · Emotional atmosphere

**The feeling:** *You've arrived somewhere that was expecting you.* Not grand-and-cold — grand-and-**held.** The hush of a great room after hours; woodsmoke and old paper; the fire low but not out; a candle already lit on the table as if someone knew you were coming. Vast, but safe. You exhale. You want to stay.

---

## Production spec

- **Plane & fit:** `cover` (fills viewport, crops gracefully). *Not* baked — no title in the plate; the Library names itself in-world (carved lintel optional, decided at render).
- **Aspect & resolution:** author **16:9**, generate **≥ 2560px** wide. Set the zone's `aw/ah` to the true output.
- **Responsive-safe band:** keep objects 1–13 inside the central **~80%**; the aisle/rose-window can bleed.
- **At-rest, hard rule:** hearth glows *low & steady*; the **Terminal screen is dim** (not lit UI); **no cat** (Astro is a sprite added by the engine); no open books mid-air; candles lit but calm. Everything that *wakes* is painted neutral.
- **No baked text/UI/people.**

## The generation prompt *(draft — assembled from the fields; refine at render time)*

> *Photorealistic cinematic render of a vast candlelit gothic library reading hall at night, seen at eye level from the threshold looking in. A tall warmly-lit bookcase stands left-of-center as the focal point; an angled wooden reading table in the foreground holds a folded note, an open book on a stand, a tray of paper slips and a low candelabra; a stone hearth glows low at mid-right; a towering bookshelf aisle with a rolling ladder recedes into shadow toward a great rose window spilling cool moonlight; a staircase rises to a gallery on the right; three or four softly-lit doorways trail off along the back wall. Lit by warm candlelight pooling on the shelf and table, with one cool counter-light of blue-violet moonlight through the rose window; late, hushed, the fire burned low. Palette: deep ink-black wood and shadow, islands of amber candlelight and aged brass, ember at the hearth, one muted jewel-cool note down the aisle. Materials: dark walnut and oak, aged brass, worn leather, velvet, old glass, wax, aged paper; dust motes in the moonbeam. Generous negative space — an open dark aisle floor, a calm table surface. No text, no UI, no labels, no people, no cat. Timeless gothic-romantic, lived-in, quietly luxurious, a place you'd want to stay. 16:9, ultra-detailed, volumetric candlelight, natural film grain, no lens flare.*

## After the render → hotspot overlay

Author the 13 primary rows (`{id,x,y,cat,name,line,verb,route/…}`) *from* the finished plate, reusing the whispers already written (*"Some books remember who opened them." · "The fire has been waiting." · "One page escaped." · "Look again."*). Drop in as the baked-or-cover `library` zone beside `conservatory`; the current card entrance stays as the accessible skeleton beneath.

---

*Acceptance: does it read as a hall you could walk into · is every one of the 13 separable and clean-silhouetted · is there dark air around each · is the Terminal dim and the cat absent · does the amber carry a single cool counter · and in three seconds does it feel like the room was expecting you? If yes — that's the set. Lay the hotspots and the Library becomes a place.* 🖤🌙
