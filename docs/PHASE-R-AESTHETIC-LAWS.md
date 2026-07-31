# PHASE-R-AESTHETIC-LAWS.md

**House of Luna — The Aesthetic Laws (Draft Constitutional Amendment)**
Status: **RATIFIED — Luna, 28 July 2026, with LAW 1 amendment and LAW 2 clarification.** Ready for commit into HOUSE_CONSTITUTION.md (section number assigned at commit). Colors may evolve; these laws are immutable. Flags F-1 through F-4 are ruled (see Rulings). First palette values ratified (see Ratified Values).

---

## The Experience Test (governing acceptance criterion)

Every visual review in Phase R and beyond answers to one sentence. A first-time visitor should think:

> *"…I've never been here before… but it feels like this place has been waiting for me."*

Not "that's pretty." Not "nice website." If a design decision moves the House toward this sentence, it is right; if it moves away, it is wrong, whatever else recommends it.

---

## LAW 1 — The House is illuminated, never brightly lit.

No harsh white UI. No sterile interfaces. Light always has a source: candles, lamps, windows, moonlight, daylight, or glowing machinery. Even the House's lightest spaces feel warm, dimensional, and inhabited.

*(Amended at ratification: the House's established visual direction is light-first. Evening remains an available atmosphere, not a global mandate.)*

## LAW 2 — Whenever darkness appears, it is a material, not an absence.

Black is not empty. It has texture: stone, velvet, old wood, paper, smoke. Every dark surface should feel touchable.

## LAW 3 — Red is sacred.

If everything is red, nothing is. House Red means invitation, focus, importance, love, transformation — never decoration.

**Corollary (ratified 28 Jul 2026):** *House Red does not narrate. It invites.* House Red is a material before it is a text color. On dark grounds it speaks as Voice; on Paper it works as link and as ceremony, and it declines body copy — not as limitation, but as identity.

## LAW 4 — Gold whispers.

Never shiny, never luxury-for-luxury's-sake. Gold appears as worn brass, old frames, page edges, tiny details. If visitors consciously notice the gold, there is probably too much.

## LAW 5 — Rooms own color. The House owns light.

The hallway does not turn green because Moss & Moon exists. The Hall stays House. Each room's personality begins past its threshold. This is what keeps the House unified.

## LAW 6 — Nothing snaps into existence.

Not slow. Not floaty. Things settle, appear, breathe. (Reduced-motion corollary: the settled state is complete in itself; breathing is atmosphere, never information.)

## LAW 7 — The House never shouts.

No ALL-CAPS navigation, no loud marketing typography. The largest heading feels like someone speaking across a quiet room.

## LAW 8 — The House speaks with one voice. Its residents have accents. *(RATIFIED — Luna, 28 July 2026)*

**Corollary (ratified):** The House maintains one shared typographic cast. Rooms may alter rhythm, measure, spacing, hierarchy density, and sentence cadence, but they do not replace the cast at the threshold.

**Legibility corollary (ratified):** Whispering may reduce emphasis, never legibility.

**The cast (ratified):** Narrator — Source Serif 4 · Architect — Cormorant Garamond · Librarian — Jost · Machine — IBM Plex Mono. EB Garamond is not the House-wide Narrator; it may later serve as a narrowly scoped literary or archival accent, but no such usage is ratified in Phase R.

**Role boundary (ratified):** The Architect names. The Librarian counts and annotates. The Narrator receives and guides. The Machine reports.

One cast of typographic voices serves the whole House: the Narrator (literary — body, introductions, long-form), the Architect (ceremonial — small caps, room names, inscriptions; the F-1 engraving exception codified), the Librarian (quiet — metadata, timestamps, counts; sentence case, never caps), and the Machine (precise — AI states, technical feedback; another civilization inside the House, never sci-fi, never terminal green). Rooms never introduce new typefaces; they introduce **accents** — rhythm, measure, spacing, hierarchy density, sentence length. Moss & Moon speaks softer, the Machine Room more precisely, the Library more literarily, Luna's Room more intimately — one House, many residents.

Boundary fence: if text *names* a thing, the Architect speaks; if it *describes a thing's state*, the Librarian does.

---

## Palette personalities (direction, ratified before value)

Values are chosen later, by eye; these personalities govern the choosing.

- **House Black** — never `#000000` (too digital, too dead). Charcoal velvet: a black with brown and blue hiding inside it.
- **House Paper** — not white. Ivory: old book pages, moonlight on linen.
- **House Red** — the one that matters most. Avoid cherry, blood, Christmas. Chase the space between dried rose, oxblood leather, garnet, old library seal wax. Timeless, not trendy.
- **Gold** — not yellow, not metallic. Aged brass.
- **Stone** — the House's neutral. A warm architectural gray.

---

## Reconciliation with PHASE-R-TOKEN-PROPOSAL.md

| Law | Proposal status |
|---|---|
| LAW 1 | **Corrective** — the token proposal's "dark-first" doctrine was an over-extrapolation from R1 and is superseded: the House is light-first; evening is an available atmosphere. Doctrine rewritten |
| LAW 2 | Resolved — House Black ratified as **Charcoal Velvet `#1A1720`** (AL-001; blue-violet undertone, nocturnal without flatness), replacing the blue-only `#12151C` |
| LAW 3 | Governs O-2/§8.4: House Red's personality is now specified even though its value is not. Usage rule enters the token doc: House Red never appears as decoration |
| LAW 4 | Compliant — brass confined to hairlines/hardware/nameplates. Amber focus ring is ruled *light*, not gold (F-3 below) |
| LAW 5 | Already the token architecture: `--house-*` constants vs. `data-room` scoped variables. The law and the stylesheet are the same shape |
| LAW 6 | Compliant — settle-curve easing, 400ms doors, 180ms chrome; reduced-motion completeness ratified |
| LAW 7 | **Open flag F-1** — door-label small caps vs. no-shouting |

## Rulings (Luna, 28 July 2026)

- **F-1 — Ratified exception.** Letter-spaced small caps are permitted only as restrained architectural engraving: door nameplates, inscriptions, eyebrows, and ceremonial micro-labels. Prohibited as loud navigation, promotional typography, or repeated calls to action.
- **F-2 — Confirmed.** House Red and VELVET//CTRL Signal Red are separate room-language tokens and must never alias to the same value.
- **F-3 — Confirmed.** Amber focus indication is sourced wayfinding light (LAW 1), not gold ornament (LAW 4).
- **F-4 — Ratified.** Constitutional token names are canonical: `--house-black`, `--house-paper`, `--house-red`, `--house-brass`, `--house-stone`, `--house-amber`. Previous names persist temporarily as compatibility aliases during migration.

## Ratified Values (Luna, 28 July 2026 — final, ratified from rendered swatches)

- **House Black — Charcoal Velvet: `#1A1720`** *(Amendment AL-001, same night: initial selection Smoke `#19161B` superseded after rendered review — Charcoal Velvet's blue-violet undertone makes Paper luminous, keeps brass visible without glow, keeps Garnet romantic, and connects to Luna's moonlit identity. The rendering proved it; values are ratified by eye, on screen.)*
- **House Red — Garnet: `#6A2436`** · **House Red Voice: `#B87283`** (the sacrament and its voice on dark ground. Garnet behaves like a keystone; the others behaved like supporting colors)

**Amendment AL-002 (31 Jul 2026, ratified by Luna — candidate C1):** House Red Voice lifted from `#B26578` to **`#B87283`**. The originally-ratified `#B26578` computed **4.23:1** on Charcoal Velvet `#1A1720` — below the WCAG AA floor of 4.5:1 for link-size text. C1 is the smallest lift that clears AA (**4.86:1**) while holding the garnet-rose identity, chosen over the warmer C2 `#B87580` and the muted C3 `#B4818D`. This is an accessibility correction, not a redesign; Garnet `#6A2436` (invitation/ceremony) is unaffected. `#B26578` is retired to design history with no active token; the candidate board is preserved at `docs/design-history/al-002-red-voice-board.html`.
- **House Paper — Old Page: `#EFE7D8`** (paper illuminated by the House, not paper aged for it)
- **House Brass `#A9884F` · House Stone `#8A8375` · House Amber `#E3A34A`** — ratified as part of Luna's locked `:root` palette

## The Four Voices on Paper (recorded language, 28 Jul 2026)

An emergent reading hierarchy, named so contributors know what kind of sentence they are writing before they write it: **Narrator** (deep charcoal — reads books) · **Stone** (guides, explains, annotates) · **Brass** (ceremony, names, thresholds, plaques) · **Garnet** (invitation, choice, action, promise). This names ratified behavior rather than adding rules; Luna may elevate it to constitutional language at will.

## Typography ruling (Luna, 28 July 2026 — LAW 7 corollary)

The soft italic voice is reserved for the Experience Test, brief emotional whispers, and occasional quotations. Instructional and explanatory sentences are set in the regular serif. The House can be mysterious without asking people to decipher it.

**S-1 — resolved (28 Jul 2026): Smoke is retired.** It remains documented in design history; no active token exists in v1. Implementation may petition for its revival only on demonstrated need.

**§5 companion amendment — RATIFIED (Luna, 28 July 2026):**

> *Retired colors are never replaced by hue. They are re-tokenized by role. Decorative and structural uses resolve through the Four Voices into the appropriate House token. Invitation-class uses alone become House Red. Retired values remain documented in design history and have no active token in the current version.*

Broadened from "pinks" to *colors* at ratification — this is a migration philosophy, not a Smoke clause; it holds for every future retirement. The Machine Room's retired palette resolves to the Machine's ratified treatment. Persian-plum `#710C21` is retired and re-tokenized by role under this amendment.

---

## Token Layer v1 — Stability Declaration (RATIFIED — Luna, 28 July 2026)

> *Token Layer v1 is hereby ratified. Reserved values remain provisional until assigned. Room-specific hues are governed by their individual visual passes. Rejected and retired values remain preserved in design history. Future additions extend the House; they do not revise its laws without explicit constitutional amendment.*

**Design-history preservation order:** all specimen boards from the ratification sessions — *Choosing by Candlelight*, *The House Reads Aloud*, *Reading by Daylight* — are committed to the repository as evidence. The failed values become part of the House's memory.
