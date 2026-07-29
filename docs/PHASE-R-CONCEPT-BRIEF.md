# PHASE-R-CONCEPT-BRIEF.md

**House of Luna — Phase R (Redesign): Threshold & Grand Hall Concept Brief**
Version: **1.0 — RATIFIED** (Luna, 28 July 2026)
Author: Claude, from Luna's Phase R Concept Proposal and Ratification of 28 July 2026
Governs: visual navigation concept. **No visual implementation is authorized until the seven door briefs (PHASE-R-DOOR-BRIEFS.md) are ratified and the door→route mapping is verified against the repository.**

---

## Ratification Record

| Item | Decision | Date |
|---|---|---|
| Governing principle & three-layer separation | Ratified | 28 Jul 2026 |
| RQ-1 Grand Hall route | One route, two states | 28 Jul 2026 |
| RQ-2 Door roster & mapping | 6 primary + Work With Luna secondary standalone | 28 Jul 2026 |
| RQ-3 Your Room | **Absent** in Phase R; debuts as an event in identity phase | 28 Jul 2026 |
| RQ-4 Return visits | Device-level convenience flag; browser convenience, not House memory | 28 Jul 2026 |
| RQ-5 House Map | Overlay / persistent menu; no new route | 28 Jul 2026 |
| RQ-6 Performance | Budget ratified as acceptance criteria (§9) | 28 Jul 2026 |
| Visual grammar | Ratified (§2.6) | 28 Jul 2026 |
| Room-leak motif | Ratified, one primary leak per door | 28 Jul 2026 |
| Reference assignments | Ratified (§2.5) | 28 Jul 2026 |

---

## 0. Standing

This brief is subordinate to HOUSE_CONSTITUTION.md (v4.0) and HOUSE_ARCHITECTURE.md. Where this brief and the Constitution conflict, the Constitution wins until amended.

**Governing principle (ratified):**

> The doors are navigation, not decoration.

Entering the House is a threshold crossed once. Choosing a room is intentional. Once inside, the room becomes the experience. Doors disappear after they've done their job.

---

## 1. The Three Layers (ratified)

| Layer | What it is | Ceremony | Frequency |
|---|---|---|---|
| **Atmospheric entrance** | Exterior threshold → Grand Hall | Full — cinematic, deliberate | Once per visitor (§6) |
| **Functional House navigation** | Movement between rooms after entry | None — quiet, persistent, instant | Constant |
| **Room experience** | The room itself | The room's own character | The visit's substance |

The threshold is a reward for arriving at the House itself, not a toll on every entrance.

---

## 2. Threshold & Grand Hall

### 2.1 Arrival sequence — one route, two states (RQ-1 ratified)

```
        [ existing landing route — no /hall, no URL change ]
Threshold state
      ↓  Enter the House          (client-side state transition)
Grand Hall state
      ↓  Choose a Room
The Room                          (existing room routes)
```

Deep links bypass the entrance entirely and open their destination directly. This is a presentation-state change inside Phase R, not a structural change.

### 2.2 The Threshold (exterior)

- Emotional anchor: reference R1 — dark Gothic front door, growth overtaking severity, warm light from within, the sense that the House is old, alive, and inhabited.
- On-screen content, in full:
  - **House of Luna**
  - *A home for becoming.*
  - Primary action: **Enter the House**
- Cinematic but fast. Atmosphere may continue loading after the page is interactive; the Enter action is never blocked by decoration.
- References are mood and atmosphere only; no image is a literal design and none is copied. At least one reference is AI-generated and watermarked; all are treated as mood boards, never as assets.

### 2.3 The Grand Hall — door roster (RQ-2 ratified)

**Primary doors (full ceremonial scale):**
Luna's Room · Library · The Edit · Moss & Moon · Machine Room · VELVET//CTRL

**Secondary standalone door (visible and intentional, quieter scale):**
Work With Luna — a genuine standalone door per prior Constitutional ratification. Never hidden inside Luna's Room, never reduced to a footer link. Presented as a private office / atelier door within the Hall's composition, not competing with the principal rooms.

**Not in the Hall during Phase R:**
Your Room — see PHASE-R-YOUR-ROOM-EXCLUSION.md.

### 2.4 Door → route mapping (ROUTES PENDING REPO VERIFICATION)

Displayed door names are presentation. **No existing route is renamed during Phase R.** The repository is the sole source of truth for route strings; nothing below may be inferred.

| Displayed door | Existing route (fill from repo — do not infer) | Hall status |
|---|---|---|
| Luna's Room | `[PENDING REPO VERIFICATION]` | Primary |
| Library | `[PENDING REPO VERIFICATION]` | Primary |
| The Edit | `[PENDING REPO VERIFICATION]` | Primary |
| Moss & Moon | `[PENDING REPO VERIFICATION]` | Primary |
| Machine Room | `[PENDING REPO VERIFICATION]` — existing AI Luna–associated route; label change only | Primary |
| VELVET//CTRL | `[PENDING REPO VERIFICATION]` | Primary |
| Work With Luna | `[PENDING REPO VERIFICATION]` | Secondary standalone |

Gate: this table must be completed against the repository before any implementation begins.

### 2.5 Reference Register (assignments ratified)

| Ref | Description | Assignment | Notes |
|---|---|---|---|
| R1 | Gothic slate-blue door, glowing amber tracery, flowers, stone path | **Front Door / Threshold** | Gothic architecture; growth overtaking severity; warm light from within; old, alive, inhabited |
| R2 | Burgundy Parisian door, gilt-bronze ornament, ivy, carved stone | **The Edit** | Polish, fashion, ceremony, controlled richness |
| R3 | Bright pink filigree Parisian door, iron fanlight | **Luna's Room** | For personality and ornament, **not literal color** — expressive, feminine without fragility, personal, confident, alive against pale architecture. Final door is not bubblegum pink; translate through ratified palette directions (House Red, softened rose, dark wood, blackened metal, warm ivory, or another approved expression) |
| R4 | Weathered rose-pink plank garden door, roses, petals on stone path | **Moss & Moon** | Petals-past-the-door motif is the origin of the room-leak grammar |
| R5 | Black-and-red ornate door, dark carved surround | **VELVET//CTRL** | Atmosphere only — seductive darkness, red signal language, controlled access. No skull/skeletal ornament; magnetic and advanced, never horror-themed |
| R6 | Matte-black pedimented double doors, monochrome minimal | **Machine Room** (structural reference) | Direction: **Victorian-industrial, not generic industrial** — an impossible modern mechanism installed beneath old architecture; never warehouse, spaceship, or cyberpunk nightclub |
| R7 | Dark wood door, brass handle, lit "NOT YET" sign | **Vocabulary reference only** | The Not Yet language is reserved for real existing destinations in a genuinely unavailable state (e.g., Machine Room access), and must never imply a functioning action that does not exist. It is NOT used for Your Room in Phase R |
| — | *(no reference)* | **Library** | Direction from words: ornate, aged, scholarly, warm, quietly grand. Reference gap acknowledged |
| — | *(no reference)* | **Work With Luna** | Separate direction later. Initial mood: private creative office / atelier — dark wood or lacquer, aged brass hardware, small engraved nameplate, warm task light beneath the frame. Communicates access to Luna's work without commercially displaying Luna herself |

### 2.6 Visual grammar (ratified)

**Constant — the House provides:**
- an arched or deliberately framed opening
- an architectural surround
- a visible threshold
- a path, floor, or directional line leading toward the door
- one controlled sign of life, light, or atmosphere crossing the boundary

**Variable — each room provides:**
- signature hue
- primary material
- ornament density
- light source
- what escapes from behind the door

The doors must feel related, but never mass-produced.

### 2.7 The room-leak motif (ratified, with restraint)

Each room may let **one** trace of itself escape into the Hall before entry. It suggests the room; it never spills so far that rooms lose their boundaries.

| Door | Ratified leak directions (choose one primary) |
|---|---|
| Library | narrow band of warm light · dust · one loose page |
| Moss & Moon | petals · moss · leaves · damp stone |
| The Edit | ribbon · perfume-like haze · gilt reflection · fabric edge |
| Machine Room | low mechanical glow · fine vapor · restrained electrical pulse |
| Luna's Room | candlelight · handwriting · soft curtain edge · a personal object |
| VELVET//CTRL | red light · controlled signal distortion · impossible digital shimmer |
| Work With Luna | warm desk lamp · paper · brass plate · partially visible appointment book |

---

## 3. Room Door Design Template

See PHASE-R-DOOR-BRIEFS.md §1 for the revised reusable template (now including House-grammar constants and the room-leak field) and the seven drafted door briefs.

A door with no ratified brief does not enter the Hall.

---

## 4. Mobile Interpretation

Primary inbound traffic is Instagram and Substack: mobile is the first-class experience, not an adaptation.

- No realistic wide hallway on a narrow screen.
- The Grand Hall becomes a **vertical procession of doors** — one prominent door at a time, or a deliberately spaced stack.
- Still spatial, still atmospheric; clarity before literal realism.
- Every Hall behavior verified on mobile viewport as a primary acceptance criterion, per §13 doctrine.

---

## 5. Interaction & Accessibility Requirements (ratified)

- No long intro animation. No autoplay video. No forced delay before navigation.
- Door transitions ~300–500 ms.
- `prefers-reduced-motion` respected everywhere; the reduced-motion experience is **complete, not diminished**.
- All rooms keyboard-accessible; visible focus states on every door.
- Every door carries a clear text label; decorative assets never block labels, links, or navigation.
- House Map (§7) always available as the efficiency and accessibility path.
- Deep links open their destination directly; no visitor is forced through the entrance sequence.

---

## 6. Returning Visitors (RQ-4 ratified)

- First visit: threshold state → Grand Hall state.
- After the threshold has been crossed once, a **device-level convenience flag** may open later visits directly into the Grand Hall.
- Documented standing: **browser convenience, not House memory.** Not an account, identity, profile, or cross-device feature. Clearing browser data resets it. §3 House memory begins with keys, in the identity phase.
- A quiet way to revisit the exterior threshold remains available from the House Map / navigation.
- Direct and deep-link visits: destination loads immediately.
- Signed-in future state (Your Room appears): conceptual only; excluded from Phase R entirely.

---

## 7. House Map (RQ-5 ratified)

An overlay or persistent menu — **not a page, no new route.** It is the efficient navigation layer for keyboard users, screen-reader users, returning visitors, anyone declining ceremony, and all movement between rooms after entry. Available everywhere without passing back through the Grand Hall.

---

## 8. Phase R Boundary (frozen architecture)

Within scope: presentation, tokens, layout, motion, copy treatment, the two-state entrance.

Out of scope — log as later-phase proposals, never do inline:
- New product architecture
- Content restructuring
- Authentication or identity plumbing
- Commerce implementation
- Route renames
- Room-ownership moves
- New backend dependencies

---

## 9. Performance Budget — Acceptance Criteria (RQ-6 ratified)

**Minimum standards (each is a pass/fail acceptance check):**

1. Threshold LCP < **2.5 s** on a mid-tier mobile device over simulated 4G
2. Enter action usable as soon as the interface is visible
3. Hall navigation usable before decorative atmosphere finishes loading
4. No autoplay video; no blocking cinematic sequence
5. Responsive imagery in AVIF or WebP where supported
6. Explicit width/height on all imagery — no layout shift
7. Doors not initially visible are lazy-loaded
8. Reduced-motion experience complete, not diminished
9. Decorative assets never block labels, links, or navigation

**Initial mobile asset targets:**
- Threshold hero asset: ≤ **250 KB** preferred
- Each mobile door asset: ≤ **150–180 KB** preferred
- Never load every full-resolution Hall image at once

These are budgets, not license to degrade the artwork. If an image cannot meet budget, **change its delivery strategy** — do not silently accept a slow first visit.

---

## 10. Pre-Implementation Gates

Implementation is authorized only when all of the following exist:

1. ✅ This brief at v1.0 ratified
2. ⬜ Door→route mapping completed **from the repository** (§2.4)
3. ✅ Revised Room Door Design Template (PHASE-R-DOOR-BRIEFS.md §1)
4. ✅ Performance budget as acceptance criteria (§9)
5. ⬜ Seven door briefs **ratified by Luna** (drafted in PHASE-R-DOOR-BRIEFS.md)
6. ✅ Your Room exclusion note (PHASE-R-YOUR-ROOM-EXCLUSION.md)
