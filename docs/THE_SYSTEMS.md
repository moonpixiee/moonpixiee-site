# 🌙 HOUSE OF LUNA — The Systems

*We're done designing rooms for now. This is the harder, more important work: the systems that make the House a **world with rules**, not an app with rooms.*

---

## The mission (the line everything is measured against)

**House of Luna is a digital third place.** Not work, not home — a place. It's not trying to replace Instagram; it's trying to bring back the internet we miss — MySpace, Tumblr, old Facebook, IMVU, forums, bookstores — reimagined as a beautiful mansion where reading, creativity, and honest connection live together.

We used to have *places*, not feeds. People decorated them. Visited. Left comments. Played music. Discovered strangers. Stayed for hours. You didn't open MySpace to "consume content" — you went to see if your friend's room had changed. **That feeling is the product.**

> **The House rewards presence, not performance.**

| ❌ What we will never build | ✅ What we build instead |
|---|---|
| Followers | Rooms you visit |
| Infinite feeds | Hallways you wander |
| Algorithms | The Keeper's quiet notes |
| Likes everywhere | Guest books ("I visited") |
| Engagement farming | Letters, slid under the door |
| Metrics as status | Shared reading lists · book clubs |

The House is not meant to be *finished*. It's meant to be **inhabited** — like Disneyland, Minecraft, Wikipedia. It grows one room at a time.

---

# The Five Systems

Design order: **Residents → The House Remembers → Visiting Friends → MoonNet → The Economy.** Each below is a design blueprint, not code — the philosophy, the mechanics, what it *isn't*, and the open questions for Luna to rule on.

---

## 1️⃣ RESIDENTS — *who lives here, and how they come to belong*

**The idea.** Everyone arrives a **visitor**. Some become **residents** — not by paying, not by a badge, but by *being here*. Residency is **belonging, earned quietly.**

**The arc.**
- **Arrive** — Receive Your Key (already built): a room is prepared for you. You're a *guest* of the House.
- **Inhabit** — you furnish your room, write your first journal page, keep your first thing, leave your first guest-book note on someone's door.
- **Become a resident** — one day the **Keeper leaves a key on your desk**: *"You've been here long enough. Welcome home."* No fanfare, no level-up animation. A key, and a shift in how the House speaks to you.
- **Leave / rest** — nobody is deleted. A resident who's away has a room that simply goes quiet: the light dims, the plaque reads *Away*, the flowers dry. The room waits. Returning re-lights it.

**Residents of the House (the permanent cast):** the **Keeper** (belongs to the House — quiet, ancient, curates, leaves notes, never chats), **AI Luna** (belongs to Luna — a host you *knock* on, in Luna's Room), **Astro** (the cat, roams). Visitors-become-residents join them as the *living* cast.

**What it is NOT.** Not a subscription tier. Not verification. Not a follower count. Residency can't be bought or farmed — only lived into.

**Open questions for Luna** → the Handbook: *What exactly triggers the Keeper's key (time? actions? a mix)? Can residency lapse? Can the Keeper ever take a key back (the one honesty rule)?*

---

## 2️⃣ THE HOUSE REMEMBERS — *memory as the soul of the place*

**The idea.** The House quietly remembers everything, and the remembering *shows*. We built the first slice (keeps → your room, synced across devices). Now it goes deeper — into **time**.

**The mechanics (built + planned).**
- **Keeps persist** — everything you keep lives on your shelves, follows you across devices. *(built)*
- **The room ages, it doesn't animate** — over visits and seasons the room gains things: a second candle, pinned letters, plants, a new spot for Astro. *(Blueprint 006)*
- **Time leaves marks** — *you leave flowers on the desk; come back next week, they're dried.* A cup goes cold. Dust gathers on a book you haven't opened. Snow appears past the Conservatory glass in winter. The House keeps your history as **atmosphere**, not a changelog.
- **The magic is noticing** — *"wait… I don't remember that being on the wall."* Never *"achievement unlocked."*

**Data spine.** `room_items` (keeps), `room_customizations` (decor/theme/season), a visit ledger + first-seen dates + milestone flags, all in Supabase, all following the resident.

**What it is NOT.** Not analytics shown back to the user. Not streaks or nudges to return. The memory is *for the resident*, discovered — never a dashboard.

**Open questions** → *What ages, on what clock? What resets with the seasons vs. persists forever? Can a resident choose to let something fade (put flowers away) or preserve it (press them)?*

---

## 3️⃣ VISITING FRIENDS — *the signature feature*

**The idea.** You share `moon.house/luna`. The other person does **not** see a profile. They see a **door**. They **knock**. The door opens. They're standing **inside your room.**

**What a room is (a modern MySpace/Tumblr, as a place).** Each resident's room holds:
- a chosen **room name** (a door plaque)
- **music** (their current playlist — a Listening-Room artifact)
- **favorite books** (a shelf) + **current reading**
- **collected artifacts** (their keeps, arranged like furniture)
- **journal excerpts** — *only if shared*
- a **guest book**
- **seasonal decorations** + a **mood**
- often a **favorite quote painted above the bed**

**Visiting, not following.** You walk the **Hallways** and see doors. Sometimes a **light is on**. Sometimes **music plays behind one**. Sometimes **Astro is sitting outside somebody's door.** You become *curious*, not addicted. You knock. You look around. You might leave something (see MoonNet).

**What it is NOT.** No follower/following. No profile grid. No "who viewed your room" surveillance beyond the gentle traces of the Guest Book. Presence, not metrics.

**Open questions** → the Handbook: *Can anyone knock, or only residents? Can you lock your room, or set it to "no visitors tonight"? What's visible to a stranger vs. a friend vs. no one?*

---

## 4️⃣ MoonNet — *the House's social layer, and its philosophy*

MoonNet deserves a philosophy, not a feature list. **It is the network of rooms and the ways between them — the anti-social-network.**

**What MoonNet IS**
- **Rooms, not profiles.** A person is a place you can be inside, not a page you scroll.
- **The Hallways** — doors with little plaques:
  *🚪 Aster · currently reading · The Alchemist ☾* — *🚪 Sage · currently listening · October Evenings* — *🚪 Juniper · Away*.
  You wander. Light on. Music behind a door. Astro outside one.
- **Letters, not DMs.** You don't message someone — you **leave a letter**, *slid under their door.* They come home to an **envelope**, not a notification. Letters feel like the old Facebook messages that felt like *letters*.
- **The Guest Book, not a comment war.** Every room has one. You write a small trace: *"Stopped by tonight. Loved your room. ☾"* Like a guest book at a museum or a bed-and-breakfast. No threads, no dunking — just *someone was here*.

**What MoonNet is NOT** — a feed, an algorithm, a follower graph, a like button, a notification casino, a place that measures you. **It never shows followers. Ever.**

**The difference from social media, in one line:** social media asks *"how do I get you to perform for an audience?"* MoonNet asks *"how do I let you be somewhere, and be found?"*

**Open questions** → *Letters: can they be public (posted on the door) or always private? Guest book: can the room owner curate/remove? Rate limits so it stays gentle, never a feed?*

---

## 5️⃣ THE ECONOMY — *how the House sustains itself without becoming a store*

**The idea.** Commerce **follows** the world; it never leads. The House stays a place first — money moves through it the way it moves through a real bookshop-café: quietly, in context, never shouted.

**How it works.**
- **Discovery is editorial, in-world.** House Books are found on the Library's shelves and the Featured Shelf; the **Keeper recommends** (a note on the desk, based on what you've read) — never an ad, never an algorithm.
- **Recommendation is social & gentle.** **Reading Lists** ("books that changed her"), **shared lists** between friends, **book clubs**, "I'm reading this" on a door. Word of mouth, not promoted posts.
- **Buying is an object, not a checkout.** A book is a thing on a nightstand you open, preview, and *"take with you"* (→ Shopify). After purchase it returns to *your* shelf. *(built)*
- **Moss & Moon** blooms **inside the Conservatory** — editorial first (a fern you can keep, a tea described), goods later, as *carefully chosen objects discovered in the greenhouse*, never products pushed at you.
- **Creators sell without a marketplace.** No storefront grid, no "shop" tab screaming. A creator's work lives as **objects in their room** and on **their shelf** — you discover it by visiting, the way you'd notice a friend's zine on their coffee table.

**The House recommends its own — and that's allowed.** Running a business inside a beautiful world is not a sin. House Books come first on the shelf. The House can quietly point at them. It just never *performs* the pitch.

**What it is NOT** — a marketplace, an ad network, a feed with "sponsored" rooms, engagement-driven selling.

**Open questions** → *Do other residents ever sell (a creator economy), or only the House at first? How does Moss & Moon's physical-goods step feel discovered, not merchandised? Revenue share / how creators are paid — later, but flagged.*

---

## How the systems interlock

```
RESIDENTS  ── become ──▶  a decorated ROOM  ──── visited via ────▶  VISITING FRIENDS
    │                          │                                         │
 belonging                 THE HOUSE                                  MoonNet
 (the Keeper's key)        REMEMBERS  ◀── ages, keeps, seasons ──┐   (Hallways · Letters · Guest Book)
    │                          │                                 │        │
    └────────── all sustained, quietly, by ── THE ECONOMY ───────┴────────┘
                       (in-world, editorial, presence over performance)
```

*Next: **The Resident's Handbook** — the social constitution that answers who can enter your room, what a visitor may leave, what's public, and what happens when the House's one rule (honesty) is broken. That's where communities flourish or fall apart.*
