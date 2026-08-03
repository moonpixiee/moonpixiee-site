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

## Flagship use case

### K-USE-1 — The Becoming as a Living Book *(logged 2 Aug 2026)*

The Becoming's prompts are not static cards; they are **pages waiting to be written in.** Key-holders answer prompts; the House stores the response with **Written** and **Last revisited** dates. Answered pages show quiet evidence — a worn edge, a seal — **never a badge or notification** (the P-R4 principle at page scale). Prompts evolve as they are answered; **the book is never complete.**

**Privacy ruling required before build:** pages are **private by default**, visible only to their key-holder, **never to visitors** (including under P-R3 Visiting Houses), with an explicit ruling on **operator access** (recommended: **sealed** — the House holds the writing but does not read it, per §17).

**Requires:** identity (KQ-1), entitlements (KQ-2 contribution memory), storage. **This use case is the standing argument for Phase K's priority.**

**Interaction notes (from the 2 Aug design session — direction, not yet built):**
- **Hover** — candlelight catching the page.
- **Click** — the page unfolds (a *close-the-book* gesture, **not a modal**).
- **Resting state** — inactive prompts read as **aged paper recessed into the wall**; the active one **catches the lamplight** — pulling a page from a folio.

Interlocks: KQ-2 (contribution memory + encryption posture), KQ-1 (mechanism), P-R3 (the visibility boundary this use case hardens), P-R4 (quiet evidence over notification).

---

## What this register is not

No schema, no code, no Supabase project configuration, no UI. Those begin only after these rulings exist, a Phase K brief is ratified, and Phase R has cut over (for anything user-facing). The questions are ordered so KQ-1 and KQ-2 unlock the most: mechanism and memory charter are the constitution of this phase; everything else furnishes them.
