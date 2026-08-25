# 📦 The Asset Pack — how we render the House
### House of Luna · Visual Bible · production standard

> **We do not generate rooms. We build an asset pack.** Every layer is an **isolated, transparent-background asset** — a game asset, a LEGO piece — that the engine assembles. A gorgeous full-scene image (like the concept windows) is **inspiration — the *composed target*** — but it is **not** a production asset, because it fuses many layers into one un-swappable, un-animatable picture. *(Ratified by Luna, 15 Aug 2026 — "stop saying 'make the room'; we're making an asset pack.")*

*This is the professional way, and yes — slower. But it gives us complete control over every detail and lets rooms **evolve over time without starting from scratch.** Very AAA-game-studio. Very House of Luna.*

---

## Concept art vs. production asset *(the distinction that keeps us out of AI-slop)*

| | Concept art | Production asset |
|---|---|---|
| **What** | one beautiful full scene | one isolated element |
| **Contains** | windows + walls + sky + props + scenery | **only its own subject** |
| **Background** | full environment | **transparent** |
| **Use** | the north-star *look* we're aiming for | the actual piece we stack |
| **Animate / swap?** | ❌ no — it's baked | ✅ yes — independently |

Concept art shows us where we're going. **Assets are how we get there.**

---

## The isolation rules *(every asset obeys these)*

1. **Transparent background** — a PNG sticker, nothing behind it.
2. **One subject only** — the window frames, *just* the window frames. No wall, no sky, no moon, no scenery, no candles, no books, no ivy — nothing that belongs to another layer.
3. **Straight-on, centered** — a flat, orthographic-feeling view so pieces align when stacked. *(Perspective is composed in the engine, not baked into the asset.)*
4. **House Standard lighting, at rest** — the same cool-moon + warm-fire key on every asset so they belong together; painted in its neutral resting state (candles lit but steady, no baked glow that the atmosphere layer should own).
5. **Generous margins** — clean edges, room to align and overlap.
6. **One job, one masterpiece** — the asset is *only* itself, rendered as well as a single object can be.

## The asset-brief format *(replaces "make the room")*

> *Generate ONE **[subject]** asset — viewed straight on, centered, isolated on a **transparent background**. No wall, no sky, no scenery, no props, no **[neighbouring layers]**. House Standard lighting (cool moon + warm fire), at rest. Design this as though someone will remember it twenty years from now.*

Example (the Windows): *"Generate one set of three Gothic cathedral window frames + antique glass, straight on, centered, isolated, transparent background — no wall, no sky, no moon, no scenery, no candles, no books, no ivy."*

---

## 📦 The Library Asset Pack *(the manifest)*

Rendered as separate transparent assets, then stacked far → near:

```
🌙 sky.png            (moon, clouds, stars, rain — transparent edges)   [Layer 0]
🪟 windows.png        (three frames + glass only)                        [Layer 1]
🏛 architecture.png   (stone walls, arches, columns, ceiling, floor)     [Layer 2]
📚 shelves.png        (built-in bookcases)                               [Layer 3]
🔥 fireplace.png      (hearth + mantle; the fire is its own sub-asset)   [Layer 4]
🪑 furniture.png      (chair, tables, ledge)                             [Layer 5]
🕯 props/  candles.png · raven.png · tea.png · telescope.png · books.png · flowers.png · key.png   [Layer 6 — each its own sticker so it animates & interacts alone]
✨ particles.png      (dust, embers, ghosts, condensation)               [Layer 7]
🔊 sound  ·  ⚡ interactions   (non-visual layers, on top)
```

Each is independent: the fire pops, the candles flicker, the raven blinks, dust floats, rain traces the glass — **without touching any other asset.** Swap one (❄ a winter `particles.png`, an evergreen prop) and the House changes season **without regeneration.**

---

## How a manuscript now produces art *(two artifacts per layer)*

Each layer's manuscript now yields **two** things, and we never confuse them again:

1. **The Composed Vision** — the Scene Direction: *how it reads once assembled* (the north-star look — e.g. Luna's beautiful full-window concept image). This is the target.
2. **The Isolated Asset Brief(s)** — what we actually render: the transparent sticker(s), one per element, obeying the isolation rules. Note that anything on the ledge (candles, telescope, raven, flowers, the forgotten key) is **its own prop asset** (Layer 6), *not* part of the window asset.

*The concept shows the destination; the assets are the bricks. Claude assembles the bricks into the destination.*

---

## Assembly *(the engine's job)*

The engine z-stacks the assets in order, applies parallax on mouse-move (near layers drift more than far), runs each asset's own subtle animation, and lays the invisible interaction hotspots on top. *(This is an evolution of today's single cover-plane into a **layered composite** — Layer 0, the living sky, already works exactly this way.)*

---

## Naming, folders, shared DNA & versioning

Assets are named, filed, shared, and versioned like a game studio's — see **`docs/asset-library/`** (`README.md` conventions · `MANIFEST.md` catalog · `tickets/` render-ready briefs). The law in one line: `<ROOM>_<category>_<descriptor>_v<NN>.<ext>` (e.g. `LIB_window_gothic_triple_v01.png`), transparent PNG for stills / alpha WEBM for animated loops, **`GBL_` shared DNA reused House-wide**, and **never overwrite — only version.**

---

*Stop saying "make the room." We're rendering an **asset pack** — and assembling a House that can live, animate, and change season for years without ever being rebuilt from scratch.* 🖤🌙📦
