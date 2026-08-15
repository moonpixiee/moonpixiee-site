# 🪑 Blueprint 003 — The Room Designer
### A MoonNet system · House of Luna

*The room is the profile, so the way people make it theirs is the **heart of MoonNet.** Rooms should feel like places people **slowly build over months and years** — not profiles completed in one sitting.*

> **Decorating should feel like Animal Crossing 🏡 · The Sims 🎨 · MySpace 🌙 · Pinterest 🖤 — wrapped inside House of Luna.** Not a settings page. **A creative ritual.**

*First we blueprint the **editing experience itself** — entering edit mode, moving objects, changing atmosphere, saving — so it feels like quietly rearranging a real space, never configuring software. Then we build the first room: **Moonpixiee's Room**, the demonstration every new resident sees.*

---

## The one principle

**Coding is never required.** Anyone can decorate by clicking; the people who miss MySpace can descend into real (sandboxed) code — only if they choose to. Customisation is a *staircase*, not a wall.

---

## How a room works — the Four Layers

Every room is built from four layers. This keeps rooms **recognisable** (so the House stays coherent) while allowing infinite **personality**.

| Layer | What it is | Editable? |
|---|---|---|
| **1 · Architecture** | the room shell — walls, proportions, the bones | fixed (chosen once, as a starting shell) |
| **2 · Furniture** | bed, desk, chairs, shelves, tables, lamps | **move / place** |
| **3 · Decor** | frames, posters, artwork, curtains, mirrors, rugs, pillows, plants, candles | **place** |
| **4 · Atmosphere** | lighting, music, weather, the window view | **edit independently of furniture** |

The critical rule Luna set: **atmosphere is edited separately from furniture.** You can change the rain and the playlist without touching where the chair sits.

---

## The Room Editor — the ritual

Inside your room, you never click *Settings.* You click **✨ Rearrange Room** — and, in the House's voice, the Keeper might murmur: *"Would you like to rearrange a little?"*

Then:
- The room **gently fades** into a calm "blueprint" state; the House goes quiet.
- **Little brass outlines** appear around movable objects.
- Furniture becomes **draggable**; decor becomes placeable; the atmosphere panel opens.
- You **decorate** — drag the bed, light a candle, move a plant, change what's outside the window, start the music.
- You **save**, and the room settles back to life.

The whole feeling: *quietly rearranging a real space*, not configuring software. Like Animal Crossing's edit mode, not a form.

---

## The categories *(kept incredibly simple)*

- 🛏 **Furniture** — beds · desks · chairs · sofas · shelves · tables · lamps
- 🕯 **Lighting** — candles · lanterns · fairy lights · LED strips · fireplace intensity · window brightness
- 🌿 **Nature** — plants · moss · flowers · terrariums · hanging vines · aquariums
- 📚 **Collections** *(auto-populated)* — your books · journals · artifacts · bookmarks · letters · vinyl
- 🎵 **Atmosphere** — Spotify playlist · rain · thunder · fireplace · forest · café ambience · silence
- 🖼 **Decor** — frames · posters · artwork · curtains · mirrors · rugs · pillows · candles
- 🪟 **Window** — *(its own iconic feature, below)*

---

## 🪟 The Window — *same room, different world*

The window is going to become **iconic**. You don't change the wallpaper — you change **what's outside.**

🌙 Rainy City · 🌲 Forest · 🌊 Ocean · 🌸 Cherry Blossoms · 🏔 Mountains · 🌌 Space · 🏙 Cyber City · ❄ Snow.

Same room. Different world. It is the fastest way to change how a room *feels* without moving a thing.

---

## The three customisation modes

1. **Easy mode** *(default — everyone)* — click and drag furniture, decor, lighting, plants, the window. No code.
2. **Theme mode** *(a running start)* — choose a base vibe, then customise: *Obsidian · Forest Witch · Victorian · Cyber Loft · Moon Garden · Minimal · Dark Academia.* Residents can eventually **publish, download, and sell themes** (Tumblr-themes energy).
3. **Advanced mode** *(power users, hidden by default)* — **Room Source**: sandboxed CSS + safe HTML for custom fonts, borders, cursor effects, textures, little widgets. **No JavaScript**, no data access, no redirects, no breaking the House.

---

## The room is data, not a picture

A room **saves as structured data**, never a flattened image — so when you *visit* someone, you see **their actual arrangement**, not a skin.

```
room
├─ shell / architecture     (starting shell token)
├─ wallpaper · floor         (theme tokens)
├─ lighting                  (warm / neon / candle / fairy / LED · intensity)
├─ window                    (rainy-city / forest / space / snow …)
├─ music                     (playlist / ambient / vinyl / silence)
├─ furniture[]               (id, placed)
├─ decor[]                   (id, placed)
├─ collections[]             (auto from keeps: books, artifacts, letters, vinyl)
├─ positions[]               (x, y, layer per object)
├─ public_sections[]         (what visitors can see)
├─ theme                     (base vibe / published theme id)
└─ custom_css                (sandboxed Room Source — optional)
```

Lives alongside the memory loop (`rooms`, `room_items`, `room_customizations` in Supabase) and follows the resident everywhere.

---

## Collections become decor *(exploration ↔ customisation)*

The magic loop: **your collected House objects become placeable decor automatically.**
- Keep a rare book in the Library → a **placeable book** on your shelf.
- Find a pressed flower → **frame it** on the wall.
- Buy a House Book → it appears **physically on your shelf** (click → preview → buy, right there in the room — never an ad).
- Keep a letter → a **stack on your desk.**

Exploring fills your room; decorating makes you want to explore for more.

---

## The starting shell — the Keeper's one question

New residents don't start with an identical room. The Keeper asks **one** question:

> *"What kind of room feels most like home?"*

📚 Library Loft · 🌿 Botanical Room · 🌃 Penthouse Studio · 🕯 Gothic Chamber · ☁ Minimal Apartment · 🌊 Coastal Room · 🏔 Mountain Cabin · ✨ Blank Canvas.

That becomes their **Architecture layer.** Everything else is customised over time, and the room slowly becomes theirs.

---

## 🌙 The demonstration room — Moonpixiee's Room

The first room we fully design. Not "Luna's account" — the **example** every new resident sees and thinks: *"I want my room to feel like this someday."* It teaches without instructions.

**Theme:** Creative Goth · luxury · **lived-in, not perfect.**

- **Bed** — messy; books on it; blanket half-folded; tea on the nightstand.
- **Desk** *(the heart)* — computer; moodboards; notebook; camera; open sketchbook; pens everywhere; coffee.
- **Shelf** — House Books; favourite novels; a tiny skull; plants; candles; a camera; vinyl.
- **Wall** — pinned ideas; polaroids; quotes; art.
- **Window** — rain; city skyline; neon reflections.
- **Music** — her Spotify, always playing.
- **Computer** — MoonNet · Velvet · current project · messages · book sales.

**Hidden details (the whisper layer — click-and-hold reveals a story, per the Object Bible):**
- Click the **camera** → her photography.
- Click the **bookshelf** → her favourite books.
- Click the **headphones** → her playlist.
- Click the **notebook** → tiny sketches.
- Click the **coffee** → *"The fifth cup today."* ☕😂

---

## Version 1 (ridiculously simple)

```
choose a starting shell  →  choose walls/floor  →  place 10–20 furniture pieces
→  choose the window  →  choose music  →  choose what visitors can see  →  publish room
```

## Later (the staircase, extended)

custom CSS · imported images · custom fonts · animated objects · seasonal packs · user-made furniture · room templates · saved layouts · **shared & sellable themes.**

---

## How it serves the Constitution

- **Presence before performance** (III) — a room is a portrait of an inner world, not a highlight reel.
- **Objects have meaning** (VI) — every placeable was *earned by living here*, and holds a whisper.
- **Memory over achievement** (V) — the room fills from your history, not a store.
- **The House speaks softly** (VIII) — no "upgrade to unlock"; the room simply grows richer as you wander.
- **Residents come first** (IX) — House Books are objects on shelves, discovered by visiting, never sold in a feed.
- **The House changes** (X, XI) — candles burn lower, tea cools, the window's weather turns.

---

## Security (non-negotiable)

Advanced **Room Source is a sandbox**: whitelisted CSS selectors + sanitised HTML only; **no JS execution**, no external scripts, no reading another resident's data, no redirects, no altering the House shell. Fonts/images pass validation. When in doubt, render the safe fallback and tell the resident — softly — which part couldn't be allowed.

---

*Bottom line: **The Sims + Tumblr + MySpace + Pinterest**, with safe code underneath for the people who want to go feral — and the House they explore is what furnishes the rooms they build. This is the feature people will spend hours inside, not because they have to, but because they'll keep saying: **"Wait… one more plant." 🌿***
