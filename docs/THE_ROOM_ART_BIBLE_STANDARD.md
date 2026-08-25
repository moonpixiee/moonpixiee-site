# 🎨 The Room Art Bible — Standard
### House of Luna · the template every room's art is built from

> **The image is not artwork. It is the physical set where future interactions will live.**
> Every render is judged by one question: *when we lay invisible hotspots over this, will touching them feel like touching a real thing in a real room?* If the composition doesn't leave room for that, the picture is wrong — however beautiful.

*Opened with the Art Phase, 15 Aug 2026. Every room gets its own Room Art Bible filled in against this template **before** a single image is generated. Order of operations is fixed: **bible → render → hotspot overlay → zone.***

---

## The House Visual DNA *(shared by every room — never re-decide this)*

- **Medium:** photoreal, cinematic 3D-render realism. Not illustration, not vector, not painterly-cartoon. A believable place caught by a still camera.
- **Era & style:** timeless gothic-romantic. Dark academia meets a witch's library. Candlelit, aged, lived-in, quietly luxurious. Never a costume-gothic set; never sterile.
- **Materials:** dark walnut & oak, aged brass, worn leather, deep velvet, tarnished silver, aged paper, wax, wrought iron, old glass. Every surface has history.
- **Light:** warm candlelight is the key, always. Practical sources live *in* the frame (candles, lamps, fire, a screen). Exactly **one cool counter-light** per room (moon through glass, a screen's glow, dusk at a window) so the warmth has something to lean against.
- **Palette anchors** *(the House spine — each room bends but never breaks these):* ink `#14101c` · warm black `#171219` · brass `#c9b47a` / glow `#e6cf94` · candle `#e8b06a` · ember/oxblood `#c96a3a`–`#7a2a24` · bone `#efe7d8`. Each room adds **one accent** (its zone token) and one cool counter.
- **Mood law:** *a place you visit, not a tool you use.* The frame should make someone want to stay ten quiet minutes.
- **Camera:** roughly eye-level, standing height, a gentle wide lens. Real perspective and depth (foreground → mid → back). The viewer feels *inside* the room, not looking at a poster of it.
- **The anti-list (never):** on-screen text or UI, floating labels/buttons, HUD, watermarks, flat/vector shapes, chibi/cartoon proportions, cheap lens flares, over-bloom, plastic CGI sheen, symmetrical dead-center staging, fisheye.

---

## The six required fields *(Luna's spec — fill all six, per room)*

### 1 · Composition
The believable geometry of the space. Define: **camera height & lens**, the **depth layers** (foreground anchor, mid-ground subject, background depth), the **focal hierarchy** (what the eye hits 1st / 2nd / 3rd), and the **reading path** (how the eye travels the room). Rule: it must read as a *room a person could walk into*, with a floor you could cross. Avoid dead-center symmetry; stage on thirds; give the eye somewhere to go *into* (an aisle, a doorway, a stair).

### 2 · Lighting
The light *is* the wayfinding. Define: the **key** (candle-warm, and where it pools), the **practicals** (every in-frame light source, listed — these become anchors), the **one cool counter-light** and where it falls, and the **time of night**. Rule: light should **pool on the things you can touch** and fall away into shadow elsewhere — the room tells you where to look without a single label.

### 3 · Color palette
3–5 anchors from the House spine + this room's **one accent** + the **one cool counter**. Give the dark base, the warm pools, and the single cool note. State the ratio (mostly shadow, islands of warm light, one cool accent). The accent must match the room's **zone token** so the interaction layer's wake-glow and whispers sit in the same key as the art.

### 4 · Interactive object placement
List every **primary interactable** (the things you touch) and where it sits in frame. Budget: **8–15 primary** objects, **20–40 secondary/ambient** details (per the ratified density law). Each primary object must be: **recognizable at rest**, **separable** (not fused into clutter), and have a **clear silhouette** so its wake-glow reads. Pull the object list from the room's entry in the **Object Bible** and **Blueprint 004** (the card→object translation). Note each object's **interaction kind** (shelf → open book · letter → read · door → walk · mirror → in-world) so the hotspot map writes itself.

### 5 · Negative space for hotspots *(the production-critical field)*
This is what makes it a *set* and not just a pretty room. Reserve breathing room so the interaction layer has somewhere to live:
- **Breathing room around every primary object** — no two touchables crammed edge-to-edge; each needs clear space so its `.wake` glow and `.whisper` placard don't collide with its neighbour.
- **Quiet zones** — keep 1–2 calm, low-detail regions (a bare table surface, a shadowed wall, floor) where a whisper or a book viewer can open without fighting the art.
- **Edge margins & whisper-overflow safety** — keep primary objects off the extreme left/right edges (whispers open to the side); leave ~8–10% calm margin so edge objects' placards have room (we already class whispers `wL`/`wR` by side).
- **Parallax headroom** — paint ~4–6% extra scene bleeding past every edge; the cover-plane drifts on mouse-move (width ~104vw) and must never reveal a hard border.
- **No collision clutter** — resist filling every inch. Emptiness is a feature: it's where interaction breathes.

### 6 · Emotional atmosphere
One sentence for the feeling, then the sensory specifics (sound implied, temperature, air, time). Answer: *what does a visitor feel in the first three seconds?* This governs a hundred small art choices and every whisper written for the room.

---

## Production spec *(the set-build sheet — technical, per room)*

- **Plane & fit:** `cover` (fills the viewport, crops gracefully — most rooms) or `contain` + `baked:true` (show the whole plate, e.g. a plate with a painted title/nav, like the Conservatory). State which.
- **Aspect & resolution:** author ~**16:9**, generate large (≥ 2560px wide) for retina + crop latitude. State the true aspect so the zone's `aw/ah` are set correctly.
- **Responsive-safe subject band:** keep the essential objects inside the central ~**80%** so portrait/narrow crops don't lose them.
- **Baked vs live — the hard rule:** **never bake an interactive object in its *active* state.** Paint everything **at rest** — candles lit but steady, screens dim, the cat *absent* (Astro is a sprite layer, never painted in). Anything that will glow, open, move, or be "woken" must be neutral in the plate so the interaction layer owns its active state.
- **Title/text:** none baked unless the room's bible explicitly calls for it (then it lives *in world* — carved, painted on a sign, a spine — never as a UI header).

---

## The generation-prompt scaffold *(assembled from the fields above)*

> *Photorealistic cinematic render of **[ROOM, one line]**. **[Composition: camera height, lens, the depth layers and focal subject].** Lit by **[Lighting: key + practicals]**, with **[the one cool counter-light]**; **[time of night / mood]**. Palette: **[anchors + accent + cool note]**. In frame, at rest: **[the primary objects and where they sit]**, with **[secondary ambient details]**. Materials: dark wood, aged brass, worn leather, velvet, old glass, wax, aged paper. **[Negative-space note: the calm/quiet zones and breathing room]**. No text, no UI, no labels, no people, no cat. Timeless gothic-romantic, lived-in, quietly luxurious; a place you'd want to stay in. 16:9, ultra-detailed, volumetric candlelight, natural film grain, no lens flare.*

Fill the brackets from the six fields; keep the anti-list at the end every time.

---

## The hotspot handoff *(what happens after the render)*

Once the plate exists, author the **hotspot overlay** *from* the image — one row per primary object:

```
{ id, x:'%', y:'%', w?, h?, cat:'artifact|nav|lore|collection|passage|ambient|link',
  name, line:'the whisper', verb, route?/title?/body? }
```

Then drop it into the zone engine as a new zone (beside `conservatory`) — cover-plane + `.spot` hotspots + `.wake` + whisper + `walkTo`. The card layout stays as the **accessible skeleton** beneath (reduced-motion / screen-reader / no-art fallback). *(Blueprint 004.)*

---

## Acceptance test *(a render passes only if all true)*

1. It reads as a **place you could walk into** — real floor, real depth, believable light.
2. Every **primary object is separable and recognizable at rest**, with a clean silhouette.
3. There is **negative space around each touchable** — nothing is crammed; whispers have room.
4. **Nothing interactive is baked in an active state** (no lit-up glow, no open book, no cat).
5. The **palette matches the room's accent token**; warmth has its one cool counter.
6. **No text/UI/labels/people**; ~4–6% parallax bleed past all edges.
7. In three seconds it makes you feel the room's **one-sentence emotion**.

If any fail, the bible is right and the render is wrong — regenerate, don't compromise the set.

---

*Every room from here forward: **fill this in first, generate second.** The bible is the design; the render is only its body.* 🖤🌙
