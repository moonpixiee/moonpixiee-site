# 📦 The House Asset Library
### House of Luna · the House has its own library

> We're not making pictures anymore. We're building a **library of reusable, versioned, living assets** — transparent stickers the engine assembles into rooms. Very AAA-game-studio. Very House of Luna. *(Ratified by Luna, 15 Aug 2026 — "the next thing we make isn't 'the library,' it's `LIB_window_gothic_triple_v01.png`.")*

*Governed by `visual-bible/ASSET-PRODUCTION-STANDARD.md` (isolation rules) — this doc is the **catalog & conventions**: how we name, file, share, and version every asset.*

---

## The naming law

```
<ROOM>_<category>_<descriptor>_v<NN>.<ext>
```

- **ROOM** — where it primarily belongs: `LIB` Library · `CON` Conservatory · `CAF` Café · `GDN` Garden · `PEN` Penthouse · `HALL` Grand Hall · `OBS` Observatory · `LIS` Listening Room · **`GBL` global/shared** (reused everywhere).
- **category** — `window · architecture · fireplace · bookshelf · table · chair · rug · candle · raven · book · sky · particles …`
- **descriptor** — the specific variant: `gothic_triple · shell · old · north · cluster_03 · dust …`
- **vNN** — version, always two digits, **never overwritten** (`v01 → v02 …`).
- **ext** — `.png` (stills, **transparent alpha**) · `.webm` (animated particle/atmosphere loops with alpha).

**Examples:** `LIB_window_gothic_triple_v01.png` · `LIB_architecture_shell_v01.png` · `LIB_fireplace_old_v01.png` · `LIB_bookshelf_north_v01.png` · `LIB_particles_dust_v01.webm` · `GBL_candle_cluster_03_v01.png` · `GBL_raven_bronze_v01.png`.

*Looks nerdy today. Saves your life in two years.*

---

## The folder structure

```
public/assets/            ← runtime home (the engine loads from here)
  _shared/                ← GBL_ global DNA, reused across every room
    candles/ raven/ books/ leather/ moonlight/
  library/
    LIB_window_gothic_triple_v01.png
    LIB_architecture_shell_v01.png
    LIB_fireplace_old_v01.png
    ...
    props/     (LIB_ or GBL_ small objects: tea, telescope, key, flowers)
    particles/ (dust.webm, embers.webm, condensation.webm)
  conservatory/  cafe/  garden/  penthouse/  grand-hall/  ...

docs/asset-library/       ← the catalog (this)
  README.md               ← naming + folders + conventions
  MANIFEST.md             ← every asset, its layer, its status
  tickets/                ← one render-ready brief per asset
  concept/                ← concept art / composed targets (NOT production)
```

---

## Shared DNA *(why the whole House feels related)*

The same **candles, raven, books, leather, moonlight** appear throughout the House — pulled from **`_shared/` (`GBL_…`)**, not re-made per room. One bronze raven, reused, *becomes* "the House's raven." One candle cluster warms every room the same way. This is how a set of rooms becomes **one place** — shared DNA, not coincidental resemblance. *(This is the House Standard, made literal and reusable.)*

## Versioning *(the House ages with you)*

Assets are **never overwritten** — a change is a new version:

```
LIB_window_gothic_triple_v01.png  →  v02  →  v03
```

Keep every version forever; the engine simply points at "current." Decide in six months you hate the windows? Render `…_v02`, repoint, and **every Library scene updates at once** — without rebuilding a single room. The House doesn't get replaced; it **evolves.** *(Living-House rule + Seasons Bible run on exactly this.)*

## The workflow

```
📖 Manuscript  →  🎫 Asset Ticket (render-ready brief)  →  🖼 Render (transparent PNG)  →  📦 drop into public/assets/<room>/  →  ⚡ engine composites  →  🏡 alive
```

*(I write the tickets and do the compositing; the render step happens in an image tool — then the PNG drops into its named slot here.)*

---

*The House literally has its own library. Every room is assembled from it. Nothing is ever thrown away — only versioned, shared, and grown.* 🖤🌙📦
