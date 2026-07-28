# Migration Plan

**From:** housesofluna.com as built
**To:** HOUSE_CONSTITUTION.md **v4.0**
**Revision:** v3 — keys and memory resequenced, House Map as front door, all six questions resolved
**Constraint:** the site stays live and coherent at the end of every milestone

---

## What changed in this revision

- **All six open questions are answered.** Nothing is blocking except the stylesheet.
- **The front door becomes the House Map** (§9). This changes M3 substantially — the homepage is no longer a rebuild of a landing page, it's a different kind of page entirely.
- **Keys arrive early — but not as much as proposed.** See the note below; this is the one place I've modified the plan rather than implemented it as stated.
- **Work With Luna leaves Luna's Room.** It becomes a door (§19), which simplifies M6.
- **AI Luna moves out of this plan.** She's governed by AI_LUNA.md and gated on its open questions.

---

## The one change I made rather than implemented

You proposed Milestone 1.5: accounts, profiles, private memory, saved writing, bookmarks, and preferences, all before the rooms are rebuilt.

The reasoning is right. "Every room can be built assuming memory already exists" is the correct architectural instinct, and building memory in afterward is genuinely more expensive. §3 now makes memory foundational, so the plan has to reflect that.

But the milestone as proposed builds storage for content that doesn't exist yet. Saved books before books open. Saved objects before the Edit has objects. AI Luna memory before AI Luna is scoped — and AI_LUNA.md has nine open questions, one of which is what she does when a visitor discloses a crisis at 3am.

So the plan splits it:

**M1.5 builds the key.** Identity, session, the Your Room shell, the lexicon, the privacy surface. Small, testable, and it's the thing every room needs to exist in order to be built against.

**Each room brings its own memory.** The Library ships reading position and saved writing. The Edit ships saved objects. AI Luna ships her memory when she ships.

This gets you the whole benefit — no room is built memory-blind — without building six storage systems for five rooms that don't exist. It's roughly two weeks of work instead of two months, and it doesn't sit in front of every visible improvement.

---

## Milestone 0 — Foundations
**No visible change. One blocker remains.**

- **Send the stylesheet and file tree.** This is now the *only* thing blocking the project. Full list in design system audit §10; the fast version is the CSS file containing `:root` plus `tree -L 3`.
- Ratify HOUSE_CONSTITUTION.md v4.0.
- Choose an auth provider. Supabase Auth is the natural fit — you already have the connector, and §17's export/delete requirements are easier with Postgres behind them.
- Inventory external links to `/tools`, `/becoming`, `/letters`, `/work`.
- Draft the privacy policy (§17). Plain language. It gates M1.5, not M5.

**Exit:** stylesheet in hand, v4.0 ratified, auth provider chosen.

---

## Phase P — The Port
**Ratified. Governed by HOUSE_ARCHITECTURE.md §13. Runs between E2 and M1.**

Static HTML prototype → long-term House platform, at 1:1 fidelity.

**Never port and redesign in the same step.** This phase produces zero visible improvement by design.

1. Tag production; verify Netlify rollback on staging.
2. Port all seven pages at 1:1 visual and behavioral fidelity.
3. Preserve routes, asset paths, metadata, social previews, forms, outbound links.
4. Verify page by page on staging — **desktop and real mobile devices**, including Instagram and Substack in-app browsers.
5. Cut over once, rollback ready.
6. Monitor 404s and deploy health ≥ 1 day.
7. Retain old static files, unreferenced, ≥ 2 weeks after stable launch.

**Acceptance test — all eight must hold:**

> Same routes. Same content. Same layout. Same mobile behavior. Same forms. Same links. Same metadata. No visible redesign.

**Nothing in Milestone 1 onward begins until Phase P is stable.**

If the repo reveals an existing framework, this phase largely evaporates.

---

## Milestone 1 — Token layer and light-first
**Global restyle. No structural change.**

- Token layer: `--paper`, `--ink`, `--house-red`, `--smoke`, `--system-red`.
- Retire pink → House Red or Smoke. Decorative pink maps to Smoke; only true accent maps to Red.
- Flip default to light. The front door is light (§5).
- Three themes: `:root`, `[data-theme="dark"]`, `[data-room="machine"]`.
- **Choose House Red by testing, per §5** — on Paper, on Ink, in dark mode, at body size and at mark size. It must pass §24 as a mark. Pick from candidates that pass, not from candidates that feel right.
- Wire four type roles. Load Gothic, don't use it yet.
- Contrast audit, all three themes.

**Risk:** highest visual risk. Every page changes at once. Mitigated by touching zero structure.

---

## Milestone 1.5 — The Key
**New. Small. Everything downstream depends on it.**

- Auth: unlock, return, sign out, recovery.
- **Lexicon per §16:** Unlock Your Room · Return to Your Room · Your Room · Your Keys. Never Login, Sign Up, Profile, User, Account, Dashboard.
- **Failure states in plain language** (§16). "Lost Your Key?" is charming on the form. The error after three failed attempts is not the place for whimsy.
- The signed-in indicator is a key, not an avatar (§16).
- **Your Room shell** — exists, mostly empty, and says so honestly. §25: a room is accumulated, not given.
- **Privacy surface, built now rather than retrofitted** (§17): view everything the House remembers, export it, delete it permanently.
- Anonymous wandering fully preserved. A key is requested only when a visitor tries to keep something (§17).
- Encryption at rest for anything a visitor writes.
- Publish the privacy policy.

**Why this is small:** it stores almost nothing. It establishes *who a visitor is* so the rooms can be built against it. The storage arrives with the rooms.

**Do not build here:** saved books, saved objects, AI Luna memory, reading position, preferences. Each ships with its room.

---

## Milestone 2 — Brand hierarchy and lexicon
**Copy and wordmark. Near-zero structural risk.**

- Replace the `moonpixiee` wordmark with House of Luna, header and footer, all pages.
- Page titles → `| House of Luna`.
- **Leave Moonpixiee where §1 preserves it** — attributions, Letters from Moonpixiee, book authorship, Substack. Surgical, not find-and-replace.
- Apply the full rename map (design system audit §8).
- Remove universe / ecosystem / empire framing.
- **Remove every emoji** (§23) — including from any Your Room designs.
- Remove Favorites, Bestseller, "built to convert," SaaS register.
- Remove per-card affiliate badges; single compliant disclosure.
- First Gothic inscriptions: **R E A D** over the Library, **B U I L D** over the Machine Room.

**Highest feeling-per-hour in the plan.** After M1, M1.5, and M2 the House reads correctly even though three rooms are unrebuilt.

---

## Milestone 3 — The Front Door, House Map, redirects
**Structural. The homepage becomes a different kind of page.**

- **Build the front door as the House Map** (§9). Not a landing page. The House, four rooms, the doors, one line of orientation.
- **Something alive** (§9) — at least one genuinely recent thing. A new letter, a new object, a book that grew. Never fabricated.
- Retire the current homepage entirely: the hero pitch, the six-card universe grid, the About section, the duplicated Work block, the email capture as primary action.
- Navigation: **Luna's Room · The Library · The Edit · The Machine Room.**
- **Work With Luna** as a door (§19) — House Map and footer, belonging to no room.
- Redirects, all 301, permanent:
  - `/tools → /machine-room`
  - `/becoming → /library/becoming`
  - `/letters → /library/letters`
  - `/work → /work-with-luna`
- Interim: redirect targets land on the parent room with content inline until M4–M6. Nothing 404s.
- Skip links on every page.
- Room transitions using `--motion-room`; reduced motion honored.
- Luna's Room and Moss & Moon appear on the map as **not yet open**.

**One practical note:** a front door with almost no text has real discoverability cost. The "something alive" slot carries most of that weight — make sure it's real content with real text, not an image. Worth checking what currently ranks for your name before you remove the homepage copy, so you know what you're giving up.

---

## Milestone 4 — The Edit
**First full room rebuild.**

- Restructure to §11: Skin + Body · The Vanity · Fragrance · Wardrobe. *(Moss & Moon in M7.)*
- Mapping: Skin First → Skin + Body · The Glow + Lip Combo → The Vanity · Wardrobe needs real content · Fragrance is new.
- **Build the object component.** Highest-stakes component in the project. If it ships as a card with the price removed, this milestone fails. Varied sizes, editorial framing, text-only entries for smaller items.
- **Saved objects** — the Edit's memory contribution. A visitor with a key can keep something.
- Break card monotony per §23; apply the removal test.
- Red Thread as lipstick.
- Compliant disclosure, present but not dominant. **Verify against current FTC endorsement guidance before shipping. I'm not a lawyer; this is the only milestone with real legal exposure.**
- **Reshoot hero product imagery** (§22). Without this the Edit still feels like a shop.

---

## Milestone 5 — The Library
**Largest engineering effort. Two phases.**

### 5a — Books that open
- The shelf is a shelf, not a product grid.
- Three shelves: Books + Guides · Letters from Moonpixiee · The Becoming.
- Book interior: a reading view inside the House.
- Migrate *Mastering Your Dark Feminine Energy*. The sale can route to Gumroad; the book must exist in the House.
- Absorb `/letters` as the periodical. Substack remains publishing and subscription; the Library is the reading room.
- **Reading position** (§10) — the Library remembers where you stopped.
- Red Thread as annotation ink; marginalia replaces the pull-quote card.
- **R E A D** inscription; Moonpixiee as the Library imprint.

### 5b — The Becoming and private writing
- Absorb `/becoming` as the first interactive book. Six prompts become the pilot.
- **Private writing, saved** (§10, §17). Encrypted at rest. Never read by Luna. Never used for marketing, training, or analytics.
- Marginalia and notes.
- Full form semantics, labels, keyboard support (§24).
- **B E C O M E** inscription.

**5a stands alone.** If the schedule slips, books that open with nothing to write in yet is a coherent state.

---

## Milestone 5.5 — Commerce
**New in v4. Shopify becomes the commerce backend. See HOUSE_ARCHITECTURE.md §12.**

Placed after the Library because the first thing Shopify sells is a book, and the book has to exist in the House before there's anything to grant access *to*.

- Shopify store configured; plan chosen per §12.4's open question.
- Products created: the existing guide, The Becoming.
- Storefront API integration — House keeps editorial UI, Shopify handles checkout (§12.3).
- `entitlements` table + access checks in the Library.
- Netlify function for `orders/paid`, **with HMAC verification** (§12.5).
- Claim flow for mismatched emails.
- `refunds/create` handling — revoke access, preserve writing.
- **Reconciliation job** against the Admin API. Webhooks fail; this is how you find out before a customer does.
- Checkout framed as stepping out a door, not a seamless funnel (§18).

**Gumroad retirement, phases R1–R3** (§12.6):
- Point Library links at Shopify; stop new Gumroad sales.
- Import existing Gumroad buyers as pre-granted entitlements.
- One plain email to existing buyers.
- **Do not close the Gumroad account until grants are verified in production.**

**R0 — export the Gumroad buyer list, sales history, and license keys — should happen now,** ahead of everything else in this plan. It takes minutes and it's the only irreversible loss available in this whole migration.

**Not in scope here:** Moss & Moon commerce (M7), physical fulfillment, subscriptions, gift purchases.

---

## Milestone 6 — Luna's Room
**New build. Simpler now that business has left it.**

- `/lunas-room`.
- §13: Tumblr, MySpace, editorial photography, diary fragments, music, obsessions, artifacts.
- **No business in this room** (§13). Nothing sold, nothing pitched.
- Honor §13 invariants — navigation, type scale, House Red. Everything else free.
- Artifact and margin components at their fullest.
- Red Thread as personal marks.
- **L O V E** inscription.

---

## Milestone 7 — Moss & Moon
**New build inside the Edit.**

- `/edit/moss-and-moon`. Own botanical atmosphere, visually connected (§12).
- Red Thread as berries and seed-dots.
- **G R O W** inscription.
- **Affiliate first, inventory later** (§12). Ship on affiliate; architect the data model so real products can replace links without a rebuild.
- **Moss & Moon does not sell live plants** (§12). Botanical is an atmosphere and a product category, not living inventory. Ordinary shelf-stable commerce — no special fulfillment accommodation needed.
- Owned inventory is a separate future milestone — payments, tax, returns. Not in scope here, but don't design yourself out of it.

---

## Milestone 8 — Machine Room refinement

- `[data-room="machine"]` — dark independent of theme (§14).
- System Red genuinely distinct from House Red.
- Monospace primary, scoped so it can't leak.
- Contrast audit. §14: atmosphere is never an excuse.
- **B U I L D** inscription (placed in M2; verify).

**AI Luna is not in this milestone.** She's gated on AI_LUNA.md — specifically its question 7, refusal categories and crisis response. The Machine Room can be finished without her.

---

## Milestone 9 — Atmosphere pass

- Motion audit; reduced motion respected.
- Photography audit (§22).
- §23 removal test, every page.
- Full contrast audit, three themes.
- Dark mode verification — it will have drifted.
- **Memory audit against §17's test:** if a visitor saw everything the House remembers about them, would they feel cared for or surprised?
- Read every page aloud against §4 and §20.

---

## At a glance

| # | Milestone | Type | Risk | Blocks |
|---|---|---|---|---|
| 0 | Foundations | Governance | — | Everything |
| **P** | **The Port — static → framework** | **Platform** | **Medium** | **1–9** |
| 1 | Tokens + light-first | Global style | High visual | 2–9 |
| 1.5 | The Key | Identity | Medium | 4, 5 |
| 2 | Brand + lexicon | Copy | Very low | — |
| 3 | Front Door + House Map | Structure | Medium | 4–8 |
| 4 | The Edit | Room rebuild | Medium | 7 |
| 5a | Library — books open | Room rebuild | Medium | 5b |
| 5b | Library — private writing | Feature | **High** | — |
| 5.5 | Commerce — Shopify, Gumroad retirement | Integration | Medium | 7 |
| 6 | Luna's Room | New room | Low | — |
| 7 | Moss & Moon | New section | Low | — |
| 8 | Machine Room | Refinement | Low | — |
| 9 | Atmosphere pass | Polish | Low | — |

**Later, not planned here:** Moss & Moon owned inventory · AI Luna · Your Room as a furnished space · VELVET//CTRL integration.

---

## Resolved questions

| # | Question | Resolution |
|---|---|---|
| Q1 | Light-first at the front door? | **Yes.** Front door is light. Machine Room is the exception. §5, §9 |
| Q2 | House Red value? | **Chosen by contrast testing**, not emotion. Must pass on Paper, Ink, and dark. §5 |
| Q3 | How far does memory go? | **Only what benefits the visitor.** Elevated to §3; governed by §17 |
| Q4 | Moss & Moon business model? | **Owned inventory eventually.** Affiliate is a bridge. §12 |
| Q5 | Work With Luna placement? | **Outside Luna's Room.** A door belonging to no room. §19 |
| Q6 | Domain? | **Keep housesofluna.com.** Ratified as permanent |

Nothing is blocking except Milestone 0's stylesheet.
