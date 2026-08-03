# PHASE-K-KEYS-QUESTION-REGISTER.md

**House of Luna — Identity Phase ("Memory & Keys"): Question Register**
Status: OPEN — no question is ruled; no implementation is authorized; no timeline is implied.
Standing: this document opens the identity phase the way the Phase R proposal opened the redesign — questions before decisions, decisions before code. It is subordinate to HOUSE_CONSTITUTION.md (§3: The House Remembers) and HOUSE_ARCHITECTURE.md.
Phase naming: "Phase K" is a working label; Luna names phases.

---

## 0. Dependency map (proposed, unratified)

```
Phase R cutover  ──────────────►  Your Room debut (the Hall must exist to gain a door)
Supabase foundation (schema,      ──►  can be prepared in parallel branch once
auth, RLS, key vocabulary)             KQ-1..KQ-4 are ratified — but nothing user-facing
Shopify webhooks / entitlements   ──►  commerce phase interlocks at KQ-6
```

Ratified inputs already standing: key-based vocabulary ("Unlock Your Room," "Return to Your Room," "Lost Your Key?") · Supabase for identity and data · "browser convenience, not House memory" boundary (RQ-4) · Your Room absent until it exists, debuting as a House event (RQ-3, AM-R-002) · The Not Yet vocabulary reserved for real unavailable destinations.

---

## The Questions

### KQ-1 — What is a Key, mechanically?

The vocabulary is ratified; the mechanism is not. Options, non-exclusive:
- **(a) Magic link** — "the House sends you a key" — email-based, passwordless, lowest friction, maps cleanly to the metaphor; key expiry = "keys are cut fresh."
- **(b) Passkeys (WebAuthn)** — the strongest literal realization of "key" that exists: a cryptographic key that lives on the visitor's device. Beautiful metaphor fit; device-loss recovery story needed.
- **(c) Password** — the option the vocabulary was built to escape. Include only if a fallback is required.

Sub-question: is "Lost Your Key?" recovery email-anchored regardless of mechanism? (Probably yes; ratify explicitly.)

**Session-scope constraint (RULING — Luna, 3 Aug 2026; Constitution v4.3):** one key must hold across the whole House and all its wings, which are **subdomains** (`velvet.housesofluna.com`, future `moss.…`). Sessions must therefore work across `*.housesofluna.com` via cookie **domain scoping** (cookie domain `.housesofluna.com`). Whatever KQ-1 mechanism is chosen, its session token must be domain-scoped, not host-only — a schema/mechanism constraint, not a later toggle. (See HOUSE_ARCHITECTURE.md §7; supersedes the earlier path-based wing model.)

### KQ-2 — What does the House remember — and what does it refuse to remember?

§3 needs a **memory charter**: an explicit enumerated list, because "the House remembers" without boundaries is surveillance wearing velvet. Proposed memory classes to rule on individually:
- **Threshold memory** — that you have a key and have crossed before (minimum viable §3)
- **Entitlement memory** — what you hold: purchases, unlocked works, access grants (interlocks KQ-6)
- **Presence memory** — when you last visited, what room you were in ("welcome back to the Library"?) — highest atmosphere, highest sensitivity
- **Preference memory** — reduced ceremony, reading position, saved things
- **Contribution memory** — anything the visitor writes or keeps in the House (journals, margin notes) — carries the encryption-posture question from the earlier architecture debate, which returns here for final ruling

And the inverse, stated in the charter with equal weight: **what the House deliberately forgets or never records.** Analytics posture, IP retention, tracking boundary. The charter should be publishable — a resident can read what the House knows.

### KQ-3 — Returning your key

Account deletion, data export, and the vocabulary for both. If receiving a key is ceremonial, surrendering one must be dignified — and complete. Rulings needed: what deletion actually deletes (everything? entitlements survive for re-keying?), export format, and the copy for the saddest door in the House.

### KQ-4 — What do keyless visitors see, once keys exist?

Pre-identity, the Hall shows only true doors. Post-identity there is a real state distinction: Your Room exists but *this visitor* holds no key. Options:
- **(a)** Your Room door visible to all, locked-with-meaning for keyless visitors — the R7 "Not Yet" ruling was about nonexistent rooms; a room that exists but is locked to you is a genuinely different case and arguably the door's honest state
- **(b)** Door visible only to keyholders — the Hall literally differs per visitor; strongest "House knows you" statement, but invisible features recruit no one
- **(c)** Visible to all with the invitation as the interaction — "Unlock Your Room" as the door's action for the keyless

### KQ-5 — The debut event itself

The ratified sentence: *a door that did not exist before now exists because the House knows who has returned.* Mechanics to rule: does the door appear Hall-wide on launch day (a public House event) or per-visitor at first key-cutting (a private one)? What is **inside Your Room on day one** — the room must not debut empty (DR-001 discipline applies to rooms, not just forms). Minimum furnishing to define before any launch date exists.

### KQ-6 — Identity ↔ commerce interlock

The purchase-to-House-access flow (Shopify webhook → HMAC verification → entitlement tables → room access) assumes identity exists. Sequencing to ratify: does identity ship alone first (keys with nothing to unlock but Your Room), or together with commerce (keys arrive already meaning something)? Gumroad buyer data (R0 export, complete) also lands here: are legacy buyers offered keys at launch — the House remembering people it met before it could remember?

### KQ-7 — Failure states, in House voice

Every auth system's true character shows in its errors. The full state inventory needs House copy: wrong key, expired key, too many attempts, the House cannot reach your email, session ended. Doctrine from the ratified copy principles: errors direct, never apologize, never go vague — but here they must also never break the House's voice. ("This key no longer fits. Cut a fresh one?" — direction, in-world, honest.)

### KQ-8 — What the law calls this

Privacy policy, consent, data-processing reality behind the velvet: Supabase region, retention periods, lawful basis. The House's mythology must sit *on top of* plain legal truth, never in place of it. Deliverable: a plain-language privacy page whose contents match the KQ-2 charter exactly — one document in two voices.

### KQ-9 — The Room network (added 31 Jul 2026, from Luna's future vision)

Long-term: the same Room architecture that powers Your Room may let members publish visitable rooms of their own. **Directional constitution, Luna's words, to be formally ratified in Phase K:** rooms are *visited*, never followed · no public follower counts, like totals, or popularity rankings · no algorithmic discovery feed · personal analytics visible only to the room owner · public / private / key-only visibility all possible · discovery is intentional only — direct room address (e.g. `/@handle`), shared key or invitation, guestbook cards, opt-in curated directory, exact search, owner-curated doors to rooms they return to. A Room is a place someone built, not a profile. Schema consequence when Phase K builds: room identity + ownership model from day one (owner, stable handle, visibility, atmosphere, published objects, guestbook permissions, directory opt-in) and **no follower-count, popularity, or ranking fields — their absence is constitutional, not an omission.** Phase R consequence: none visible — the ratified exclusions stand absolutely; only the Hall's component generality (rooms as a reusable structure, not one-offs) preserves this future, documented in architecture notes.

### Logged proposal P-1 — Ambient state-change (the House never notifies)

Future concept, Luna 31 Jul 2026: when something changes for a keyholder — a new guide owned, a letter arrived — no toast, no badge, no pop-up. Instead the House lets it be *discovered*: the Library door glows a touch warmer; a distant page turns. State change as atmosphere. Depends on entitlement memory (KQ-2) and introduces sound as a new medium (needs its own ruling: default-silent, opt-in). Parked until Phase K.

---

## Flagship use cases

### K-USE-1 — The Becoming as a Living Book *(logged 2 Aug 2026)*

The Becoming's prompts are not static cards; they are **pages waiting to be written in.** Key-holders answer prompts; the House stores the response with **Written** and **Last revisited** dates. Answered pages show quiet evidence — a worn edge, a seal — **never a badge or notification** (the P-R4 principle at page scale). Prompts evolve as they are answered; **the book is never complete.**

**Privacy ruling required before build:** pages are **private by default**, visible only to their key-holder, **never to visitors** (including under P-R3 Visiting Houses), with an explicit ruling on **operator access** (recommended: **sealed** — the House holds the writing but does not read it, per §17).

**Requires:** identity (KQ-1), entitlements (KQ-2 contribution memory), storage. **This use case is the standing argument for Phase K's priority.**

**Interaction notes (from the 2 Aug design session — direction, not yet built):**
- **Hover** — candlelight catching the page.
- **Click** — the page unfolds (a *close-the-book* gesture, **not a modal**).
- **Resting state** — inactive prompts read as **aged paper recessed into the wall**; the active one **catches the lamplight** — pulling a page from a folio.

Interlocks: KQ-2 (contribution memory + encryption posture), KQ-1 (mechanism), P-R3 (the visibility boundary this use case hardens), P-R4 (quiet evidence over notification).

### K-USE-2 — Letters in the Walls *(logged 2 Aug 2026)*

A vault of writings Luna leaves in the House — **"Leave in the House"** as a sibling action to publishing. The House delivers them **privately, one resident at a time**, based on **where that resident is in their journey.** Delivery is quiet — a moon seal on a page, a letter in a room — **never a notification, feed, or broadcast** (P-R4 principle). Deliveries are private: **no resident ever sees another's letters**, and there is **no public record of who received what.** Letters **persist indefinitely** — a resident joining years later can still receive something written years before.

**GOVERNANCE RULING REQUIRED — conflict with the K-USE-1 seal (flagged 2 Aug 2026):**
Delivery triggers **MUST be metadata-only** — page counts, revisit events, absence duration, volume/threshold reached, calendar/moon dates. The House **MUST NOT parse, classify, or act on the CONTENT of sealed pages** to select letters — **content-based delivery breaks the K-USE-1 seal even with no human reader.** Any future content-aware delivery would require an **explicit, revocable, resident-held opt-in**, ratified as its own constitutional amendment. **Recommended standing rule: metadata-only.**

**Requires:** identity (KQ-1), entitlement/presence memory (KQ-2 — the metadata the triggers read), storage, delivery model. Interlocks: KQ-2 (the metadata boundary above is a memory-charter ruling), K-USE-1 (the seal this must not break), P-R4 (ambient delivery over notification), P-1 (state-change as atmosphere).

**The flagship pair.** K-USE-1 and K-USE-2 are Phase K's flagship pair: the House **remembers what you wrote** (sealed), and the House **gives you what Luna left** (addressed to your milestones, not your secrets). The seal is the hinge between them — K-USE-2's metadata-only rule is what keeps K-USE-1's promise true.

---

## Ratified privacy constraints — schema-shaping (3 Aug 2026)

Ratified constraints that MUST shape the Phase K schema, not be added later. They bind KQ-2 (the memory charter), K-USE-1, and K-USE-2.

1. **K-USE-1 — Becoming pages are sealed.** Private to their key-holder, **not readable by the operator.** Evaluate encryption-at-rest options where operator-sealing is technically meaningful, and **document honestly what "sealed" can and cannot guarantee at each layer** — client, transport, at-rest, backups, logs, DB/operator admin. The seal's real guarantees *and* its real limits are both written down; no hand-wave.

2. **K-USE-2 — Letters delivery triggers are metadata-only.** Counts, dates, revisit events, absence duration, volume/threshold reached. The schema must make **content-based triggering structurally unavailable, not merely unused** — sealed-page content is not a column, join, index, or function input the delivery path can reach, even in principle. (Reinforces the K-USE-2 governance ruling.)

3. **Repo / Supabase audit — Phase K discovery (PENDING Luna's go; touches infra outside this repo).** Confirm the `velvet-muse-studio` repo's actual name and location, and flag any other repos touching the same Supabase project. **Note:** `moonpixiee-site` contains no Supabase config or auth (verified 3 Aug — static Astro site); `velvet-muse-studio` is not in this working directory. This audit is Phase K discovery against a separate ecosystem, to run only when authorized — and per §0 the dependency map has Phase K schema/user-facing work waiting on Phase R cutover (the Phase R stamp is still pending the Gate 2 re-walk). If a live Supabase project already exists and is shared across repos, the "no Supabase project configuration yet" framing below needs reconciling — flagged for Luna.

---

## What this register is not

No schema, no code, no Supabase project configuration, no UI. Those begin only after these rulings exist, a Phase K brief is ratified, and Phase R has cut over (for anything user-facing). The questions are ordered so KQ-1 and KQ-2 unlock the most: mechanism and memory charter are the constitution of this phase; everything else furnishes them.
