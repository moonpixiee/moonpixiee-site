# 🪑 The Room Designer
### A MoonNet system · House of Luna

*The room is the profile. So the way people make it theirs is the beating heart of MoonNet. We steal from MySpace — carefully. The feeling to aim for: **The Sims + Tumblr + MySpace, with custom code hidden underneath for the people who want to go feral with it.***

---

## The one principle

**Coding is never required.** That would be charming for power users and terrible for everyone else. Customisation is a *staircase*: anyone can decorate by clicking; the people who miss MySpace can descend into real code — but only if they choose to.

---

## Three layers of customisation

### 1. Easy mode *(the default — everyone)*
Click and drag, like decorating a room in a game. Place and move **furniture, walls, floors, lighting, music, books, plants, rugs, the window view.** Drag a chair to the left; swap the wallpaper; put a book on the shelf. No menus of code — just a room you arrange.

### 2. Theme mode *(a running start)*
Choose a **base vibe**, then customise from there: *gothic library · cyber penthouse · fairy room · brutalist loft · cozy attic · botanical room.* A theme sets the shell (walls, light, palette, mood); Easy mode does the rest.

### 3. Advanced mode *(the power-user layer — optional, hidden by default)*
**Room Source** — for the people who loved old MySpace customisation and want to tweak fonts, borders, cursor effects, background textures, custom music placement, little widgets. **Sandboxed:** approved CSS selectors and safe HTML blocks only. **No arbitrary JavaScript. No scripts that can steal data, redirect users, or break the House.** The old-internet magic, without the security nightmare.

---

## The room is data, not a picture

A room **saves as structured data**, never a flattened image. If someone drags a chair left, that's a saved coordinate. If they swap the wallpaper, that's a theme token. If they place a book, that's a placed artifact. So when you *visit* someone, you see **their actual arrangement**, not a generic profile skin.

```
room
├─ wallpaper          (theme token)
├─ floor              (theme token)
├─ lighting           (warm / neon / candle / daylight …)
├─ shell / theme      (gothic-library, cyber-penthouse, …)
├─ bed · desk · shelf · chair · plant   (placed furniture)
├─ music              (playlist / ambient / vinyl / silence)
├─ objects[]          (placed artifacts — see below)
├─ positions[]        (x,y,layer per object)
├─ public_sections[]  (what visitors can see)
└─ custom_css         (sandboxed Room Source — optional)
```

This lives alongside the memory loop (`rooms`, `room_items`, `room_customizations` in Supabase) — the room *is* the resident's saved data, and it follows them everywhere.

---

## Exploration and customisation feed each other

The most important connection: **your collected House objects become decor automatically.** Customisation isn't a separate shopping trip — it's the reward for *living in the House*.

- Keep a rare book in the Library → it becomes a **placeable book** on your shelf.
- Find a pressed flower → you can **frame it** on the wall.
- Buy one of the House Books → it appears **physically on your shelf.**
- Keep a letter → it can become a **stack on your desk.**

So exploring the House fills your room, and decorating your room makes you want to explore for more. *(This is Article V — memory over achievement — made tangible, and Article VI — objects have meaning.)*

---

## Version 1 (ridiculously simple)

```
choose room shell  →  choose walls  →  place 10–20 furniture pieces
→  choose music  →  choose what visitors can see  →  publish room
```

That's the whole first version. Everything below is *later.*

## Later (the staircase, extended)

custom CSS · imported images · custom fonts · animated objects · seasonal packs · user-made furniture · room templates · saved layouts · shared themes.

---

## How it serves the Constitution

- **Presence before performance** — a room is a portrait of an inner world, not a highlight reel. *(Article III)*
- **Objects have meaning** — every placeable is something the resident *earned by living here*. *(Article VI)*
- **Memory over achievement** — the room fills from your history, not a store. *(Article V)*
- **The House speaks softly** — no "upgrade to unlock" popups; the room simply grows richer as you wander. *(Article VIII)*
- **Residents come first** — House Books appear as real objects on shelves, discovered by visiting, never sold in a feed. *(Article IX)*

---

## Security (non-negotiable)

Advanced **Room Source is a sandbox.** Whitelisted CSS selectors + safe, sanitised HTML blocks; **no JS execution**, no external script loads, no ability to read another resident's data, redirect visitors, or alter the House shell. Custom fonts/images pass through validation. When in doubt, the House renders the safe fallback and quietly tells the resident which part it couldn't allow — softly, of course.

---

*Bottom line: don't make people code their rooms like old MySpace by default. Make it feel like **The Sims + Tumblr + MySpace**, with real, safe code underneath for the people who want to go feral. And let the House they explore be the thing that furnishes the rooms they build.* 🖤🌙
