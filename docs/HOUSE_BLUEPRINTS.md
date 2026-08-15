# 🏛️ HOUSE OF LUNA — Room Blueprints

*The source of truth. We design the House room by room **before** we generate a single final image.*
*Not 50 rooms. **Ten unforgettable ones.** People won't remember the navigation — they'll remember the feeling of wandering through the House.*

> **North Star:** The House is a place you visit, not a tool you use. A private library with a librarian. Every room answers one question: *which human need does this serve?* If an idea doesn't have a room, it doesn't belong in the House.

---

## The pipeline (Disney order — story first, ride last)

Story → Map → Objects → Architecture → Lighting → Construction → Ride.

We are between **Story** and **Architecture**. So we finish the design before the art:

1. **Design** — sketch exactly what every room contains (this document).
2. **Object Bible** — for each object: its function now, its purpose later. *The most important document we make.*
3. **Master House Prompt** — one canonical prompt; only the room changes.
4. **Generate** — Versions A / B / C, then pick the one that's *easiest to interact with*, not the prettiest.
5. **Claude** — only after a room is approved, place invisible hotspots.

**Room quota (the interaction-anchor standard):** 8–15 primary interactables · 20–40 secondary objects · countless little details. Every object is placed because it has a future purpose. The room tells the future.

---

## 🎨 The Master House Prompt

*Paste at the top of every room-generation prompt. Only the room description changes below it.*

> Photorealistic, cinematic interior environment, designed as an explorable digital space rather than a static illustration. Every significant object is intentionally separated with clear silhouettes and realistic spacing, so each can later become an invisible clickable region without overlapping its neighbours. Layered composition — distinct foreground, midground, and background — with natural pathways for the eye to travel through the room. Rich environmental storytelling: nothing is random; every object implies a life and a use. Warm, low candlelight with deep shadow and one soft focal light source. Highly detailed, tactile textures — aged wood, worn paper, glass, brass, velvet, living plants. Gothic-romantic, moody, intimate. Prioritise discoverable detail and depth over minimalism. No text, no watermark, no UI. Aspect ratio suited to a wide interior (≈ 4:3 to 3:2).

*Palette anchors:* candle-gold `#e3b968`, parchment `#efe7d8`, deep espresso wood, wine `#7a2740`, and each room's own accent (below).

---

## The Ten Rooms — the emotional map

Every room is a human need. That's the whole design.

| # | Room | Need | Accent | Status |
|---|------|------|--------|--------|
| 00 | **The Grand Hall** (Front Door) | Arrive | gold | ✅ built (photoreal hall + doorways) |
| 01 | **The Library** | 📚 Learn | gold | ✅ entrance built (`/thelibrary`) |
| 02 | **The Conservatory** | 🌿 Rest | sage `#b9c6a0` | ✅ built (`/conservatory`) |
| 03 | **The Listening Room** | 🎧 Feel | ember `#c9713c` | 📝 to design |
| 04 | **Velvet — The Studio** | ✨ Create | violet `#c9a6ec` | 📝 to design |
| 05 | **The Observatory** | 🔭 Explore | midnight-blue `#6a86c8` | 📝 to design |
| 06 | **Luna's Room** | 🖥 Host (AI Luna · MoonNet) | violet `#c9a6ec` | ✅ built (`/luna`) |
| 07 | **Your Room** | 🛏 Reflect (home · journal · collection) | warm gold `#e3b968` | ✅ built (`/you`) |
| 08 | **The Hallways** | 🚪 Connect (visit other rooms/residents) | gold | ◑ MoonNet preview |
| 09 | **The Garden** *(expansion)* | 🌙 Wander | moon-silver | 🔒 teased (Conservatory's Garden Door) |

*Two residents:* the **Keeper** belongs to the House and lives in the Library (quiet, never chats, curates, leaves notes). **AI Luna** belongs to Luna and lives in Luna's Room (a host you *knock* on). Never merge them.

---

## ROOM 00 — THE GRAND HALL *(Front Door)*

**Purpose** — Arrival. The first breath. A map, not a menu: you choose a doorway, not a tab.
**Mood** — Vast, candlelit, hushed. Stone, tall doors, dust in lantern light. The feeling of stepping *inside* somewhere old and alive.

**Objects**
○ The great doors (one per room) ○ A central chandelier / lantern ○ A grand staircase (→ upstairs rooms) ○ A guest book on a plinth ○ A coat left on a hook ○ A rug worn down the middle ○ A tall clock ○ A mirror by the door ○ Candles in sconces ○ A raven feather on the floor

**Primary hotspots** — Each door (walk into a room) · The guest book (leave your name / Receive Your Key) · The staircase (Listening Room / Observatory upstairs) · The mirror.

**Future expansions** — The hall changes with the season & time of day · doors light up as new rooms open · the raven feather → *Raven Letters* · the guest book → the register of everyone who's visited your House.

| Object | Function now | Future |
|---|---|---|
| Doors | Navigate to rooms | New doors appear as the House grows |
| Guest book | Receive Your Key (sign in) | Visitor register / who's home |
| Staircase | Route to upstairs rooms | Vertical House (floors) |
| Raven feather | Detail | Raven Letters (a letters channel) |
| Clock | Detail | Time-of-day / opening hours |

---

## ROOM 01 — THE LIBRARY  📚 *Learn*

**Purpose** — Reading, writing, reflection. The real destination. Where House Books, Letters, Moon Notes and Reading Lists live — and where the **Keeper** quietly curates.
**Mood** — Warm, endless shelves, a fire, a ladder into the dark, rain at a tall window. Calm on arrival — *"Some books wait for the right person."*

**Objects**
○ House Books shelf (Moonpixiee's own — always first) ○ Letters shelf ○ Reading Lists shelf ○ Moon Notes drawer ○ Large reading table ○ Open book + bookmark ○ Candle ○ Rolling ladder ○ Fireplace + reading chair ○ **Card catalog** ○ Tall clock ○ Moon window ○ **Locked door** (future room) ○ The Keeper's desk (a note left for you)

**Primary hotspots** — House Books (open the cinematic book) · Card catalog (search) · Reading table (featured / seasonal book) · Fireplace (reading mode) · Bookmark (continue reading) · Keeper's desk (the note).

**Future expansions** — Card catalog → AI-assisted search (the Keeper finds your next book) · Reading table → seasonal features · Fireplace → ambient sound · Bookmarks → full reading history · Locked door → a secret room.

| Object | Function now | Future |
|---|---|---|
| Card Catalog | Browse / search | AI search (the Keeper recommends) |
| Reading Table | Featured book | Seasonal features |
| House Books shelf | Open & buy (Shopify) | Growing catalogue, "always first" |
| Ladder | Browse shelves | Climb / animation |
| Fireplace | Reading mode | Ambient sound (crackle + rain) |
| Bookmark | Continue reading | Reading history / My Shelf |
| Keeper's desk | A left note | Personalised, quiet recs |
| Locked door | "Not yet" | Secret room |

---

## ROOM 02 — THE CONSERVATORY  🌿 *Rest*  ✅ BUILT

**Purpose** — Slow living, plants, healing, botanical knowledge. Editorial, never a shop — everything collectible.
**Mood** — Rain on the glass roof. Warm glass. Tea. Quiet. A room that breathes.

**Objects**
○ Tea set ○ Apothecary cabinet ○ Moss & Moon jar ○ Botanical journal (*Language of Plants*) ○ Herb rack (dried lavender) ○ Lantern ○ Garden Door ○ Reading chair ○ Pressed flowers / fern plate ○ Plant labels ○ White roses ○ Moonflower ○ Locked cabinet ○ Night-garden window

**Primary hotspots** *(built)* — Botanical book · Fern plate (Keep) · Roses (Keep) · Tea · Herbs · Moss & Moon jar · Garden Door · Cabinet · Chair. Astro visits the ferns.

**Future expansions** — Seasonal plants (winter: snow, Christmas herbs) · weather changes at the glass · butterflies · greenhouse-at-night mode · Moss & Moon blooms into the gift shop from *inside* the room.

| Object | Function now | Future |
|---|---|---|
| Tea set | Look closer | Tea rituals & recipes |
| Botanical book | Reads as a page | Interactive field guide |
| Moss & Moon jar | Lore | **Moss & Moon** shop |
| Herb rack | Keep a sprig | Herbal Index |
| Window | Look out | Weather / seasons |
| Lantern | Ambient | Night Mode |
| Chair | Sit | Keeper reflections |
| Fern / pressed flowers | Keep | Herbarium |
| Garden Door | "won't open" | The Garden (Room 09) |
| Cabinet | Locked | A future room |

---

## ROOM 03 — THE LISTENING ROOM  🎧 *Feel*  📝 TO DESIGN

**Purpose** — Music, atmosphere, feeling. Where the House chooses tonight's sound. Playlists are **artifacts, not embeds**.
**Mood** — Upstairs, low and intimate. One chair, a fire, rain on the window, the warm crackle of a record. Amber light.

**Objects**
○ Record player ○ Shelf of vinyl (each sleeve a mood) ○ One deep armchair ○ Fireplace ○ Rain-streaked window ○ A stack of cassettes ○ Headphones on a hook ○ A candle ○ A radio / valve amp (glowing) ○ A framed lyric ○ A cat bed (Astro)

**Primary hotspots** — Record player (Now Playing) · Vinyl shelf (pick a mood) · Chair (sit & listen) · Radio (ambient: rain / forest / fireplace) · Window (weather).

**Future expansions** — Real Spotify/YouTube playlists behind the sleeves (*🌙 Moon Reading · ✍️ The Writer's Desk · 🕯 Midnight Library · 🍂 October Evenings*) · playlists change by time of day · a "Now Playing" that follows you into other rooms · ambient soundscapes toggled by the radio.

| Object | Function now | Future |
|---|---|---|
| Record player | "Now Playing" card | Live playlist (Spotify/YT as artifact) |
| Vinyl shelf | Pick a mood | Full playlist library, seasonal |
| Radio / amp | Ambient toggle | Rain / forest / fire soundscapes |
| Chair | Listening mode | Sound follows you room-to-room |
| Window | Weather detail | Live weather / night |
| Cassettes | Detail | Guest mixtapes / shared playlists |

---

## ROOM 04 — VELVET · THE STUDIO  ✨ *Create*  📝 TO DESIGN

**Purpose** — Making. Where Luna's creative tools (Velvet) live in-world — writing, designing, generating — framed as an artist's studio, not an app.
**Mood** — Violet and ink. A working mess that means something. Late-night focus, one warm lamp, a window to the city.

**Objects**
○ The writing desk (open manuscript) ○ An easel / canvas ○ A wall of pinned drafts & moodboard ○ Ink pots & pens ○ A drafting lamp ○ The Machine (a beautiful terminal — Velvet) ○ Paint-stained cloth ○ A shelf of finished works ○ A wax seal & stamp ○ City window ○ A record spinning (ties to Listening Room)

**Primary hotspots** — The Machine (open Velvet / Continue Creating) · Writing desk (draft) · Moodboard (pin) · Easel (visual work) · Wax seal (the House's mark on what you make) · Finished-works shelf.

**Future expansions** — Velvet tools run *inside* the room · your works-in-progress appear on the desk · finished pieces slide onto the shelf (like books do) · the moodboard becomes a living Pinterest-of-the-House · collaborations pinned to the wall.

| Object | Function now | Future |
|---|---|---|
| The Machine | Continue Creating (Velvet) | Full in-world studio tools |
| Writing desk | Draft | Live document / autosave |
| Moodboard | Pin | Living inspiration wall |
| Easel | Visual work | In-world image generation |
| Wax seal | The House's mark | Signs/authenticates your work |
| Works shelf | Finished pieces | Your portfolio, growing |

---

## ROOM 05 — THE OBSERVATORY  🔭 *Explore*  📝 TO DESIGN

**Purpose** — Discovery, wonder, the wider world. Where the House looks outward — the moon, the map, what's new, what's next.
**Mood** — Cold starlight and warm brass. A domed ceiling opening to the night. Quiet awe.

**Objects**
○ The great telescope ○ A star chart / orrery ○ A globe (of a place not quite real) ○ The moon, framed in the dome ○ A logbook of observations ○ Brass instruments (astrolabe, sextant) ○ A map of the House itself ○ A ladder to the dome ○ A comet jar ○ A locked star-cabinet

**Primary hotspots** — Telescope (look — what's new / featured discovery) · Star chart (the map of the House & what's coming) · Logbook (Observatory Logs / changelog in-world) · Moon (current phase, rituals) · Globe (explore other rooms/worlds).

**Future expansions** — Telescope shows *new arrivals* (rooms, books, letters) · live moon phase drives House-wide events · a real "what's new in the House" told as sightings · eventually a window to other people's Houses (Hallways from above).

| Object | Function now | Future |
|---|---|---|
| Telescope | Featured discovery | New arrivals / what's new |
| Star chart | House map | Roadmap, told in-world |
| Logbook | Observations | Changelog as "sightings" |
| Moon | Phase | House-wide seasonal events |
| Globe | Explore | Doorways to other Houses |

---

## ROOM 06 — LUNA'S ROOM  🖥 *Host*  ✅ BUILT

**Purpose** — Home of **AI Luna** and **MoonNet**. Not a chatbot in a sidebar — a person you visit. *"AI Luna is home. Knock?"*
**Mood** — Dark violet sanctuary. Canopy bed, candlelight, a city in the rain, a computer glowing LUNA.

**Objects** *(built + planned)*
○ The computer (MoonNet boots) ○ **Luna's Collection** shelf (her books) ○ The canopy bed ○ The altar (intentions) ○ Moodboard ○ City window ○ Records ○ Neon ("Dark Soft Energy") ○ Candles ○ The spellbook journal ○ *(new)* the door-knock: "AI Luna is home. Knock?"

**Primary hotspots** — Computer (MoonNet: Hallways / Conversations / Your Room / Velvet) · Luna's Collection (browse & open her books) · Knock (enter a conversation with AI Luna) · Altar (set an intention).

**Future expansions** — Knock → real conversation with AI Luna, who remembers you, celebrates wins, asks about your writing · MoonNet grows real Hallways & Conversations · the room ages with Luna's own creative life.

| Object | Function now | Future |
|---|---|---|
| Computer | MoonNet boot / desktop | Full OS: Hallways, Conversations |
| Luna's Collection | Browse & buy books | Whole catalogue + signed editions |
| The Knock | (to build) | Enter AI Luna (personal host) |
| Altar | Keep an intention | Ritual tracking / moon intentions |

---

## ROOM 07 — YOUR ROOM  🛏 *Reflect*  ✅ BUILT

**Purpose** — Home. The one room that is *yours*. Your journal, everything you've kept, where the House remembers you.
**Mood** — Warm gothic sanctuary. A bed, a knit blanket, fairy-lights, candles, a computer, shelves that fill as you wander.

**Objects** *(built)*
○ Your Journal (the living page) ○ The House Network computer ○ The collection frame ("Everything You've Kept") ○ Shelves (fill over time) ○ The window seat ○ Letters & Notes basket ○ The mirror (warmer) ○ Launch promo book (beside the journal) ○ Cloche rose ○ Astro (on the bed)

**Primary hotspots** *(built)* — Journal (read/continue) · Computer (House Network) · Collection frame (everything kept) · Window seat (sit) · Launch promo book.

**Future expansions** — The room **ages** (Blueprint 006): milestones add candles, pinned letters, plants, new Astro spots · the journal becomes writable & saves · My Shelf (Currently Reading / Finished / Want to Read) · finished books slide onto the shelf.

| Object | Function now | Future |
|---|---|---|
| Journal | Living page | Write inside & save |
| Computer | House Network | MoonNet, full |
| Collection frame | Everything kept | My Shelf / reading history |
| Shelves | Bare → filling | The room ages with you |
| Letters basket | Lore | Bound keepsakes over time |

---

## ROOM 08 — THE HALLWAYS  🚪 *Connect*

**Purpose** — Moving between rooms, and one day between *people's Houses*. Doors, not usernames.
**Mood** — Warm corridors, doors ajar with light behind them, a runner rug, portraits that watch.

**Objects** ○ Doors (each a room or a resident) ○ Portraits ○ A hall lantern ○ A visitors' board ○ A key rack ○ A bench

**Primary hotspots** — Doors (visit a room / a resident's House) · Visitors' board (who's home / Conversations) · Key rack (your keys to rooms you've unlocked).

**Future expansions** — Real Hallways to other residents' Houses · Conversations (in-world notes pinned by the doors) · doors that appear as you make friends in the House.

| Object | Function now | Future |
|---|---|---|
| Doors | Navigate | Visit other people's Houses |
| Visitors' board | (preview) | Conversations / who's home |
| Key rack | Detail | Your unlocked rooms |

---

## ROOM 09 — THE GARDEN  🌙 *Wander*  🔒 EXPANSION

**Purpose** — The outside. Teased tonight by the Conservatory's Garden Door — the House's room to grow into.
**Mood** — Moonlit, wild, alive. Rain-wet stone, night-blooming flowers, the edge of the known House.

**Objects** ○ The garden path ○ Night-blooming beds ○ A stone bench ○ A fountain ○ A gate to further rooms ○ Fireflies / moths ○ A greenhouse seen from outside

**Primary hotspots** — Path (wander) · Beds (collect night flowers) · Gate (future rooms) · Bench (sit under the moon).

**Future expansions** — Whole new wings open off the garden · seasons & weather · the first *outdoor* memory loop · a place events happen (full moon gatherings).

---

## Working rules (so the House stays a House)

- **Design → Object Bible → House Prompt → Generate A/B/C → approve → hotspots.** Never skip to art.
- **Pick the most *interactable* render, not the prettiest.**
- **Every object earns its place** with a current function *and* a future purpose. If it can't fill a row of the Object Bible, cut it.
- **Ten rooms, crafted.** New ideas become objects in existing rooms before they ever become new rooms.
- **Two keepers, kept apart.** The Keeper (House) in the Library; AI Luna (yours) in Luna's Room.
- **Which room does this belong in?** — the one question every new idea must answer.

*This document is the source of truth. Rooms marked 📝 are ready to design in detail next; rooms marked ✅ are built and can be deepened. Say which room to blueprint fully, and we design it before we draw it.* 🖤
