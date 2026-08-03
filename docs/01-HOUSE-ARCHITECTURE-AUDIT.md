# House Architecture Audit

**Source of truth:** HOUSE_CONSTITUTION.md **v3.0**
**Audited:** housesofluna.com, all 7 public pages, July 2026
**Revision:** v2 — updated for the ratified brand hierarchy, commerce doctrine, and four-room structure
**Method:** rendered pages only. No stylesheet or repository access.

---

## 0. What changed in this revision

Three findings from the first audit are now resolved by constitutional amendment rather than open questions:

- **Moonpixiee vs House of Luna** → resolved by §1 Brand Hierarchy. Three layers, one identity.
- **The Edit's affiliate conflict** → resolved by §9 and §14. Affiliate commerce is permitted; affiliate *aesthetics* are not.
- **The three displaced pages** → all placed. Becoming and Letters into the Library, Work into Luna's Room as a door.

The House is now four rooms. That is a materially simpler building than the seven-page site, and most of this audit gets shorter as a result.

---

## 1. Limits of this audit

I read the live rendered pages. I could not read your CSS, token file, config, or component source.

- **Verified:** structure, copy, navigation, information architecture, content.
- **Inferred:** colors, token names, theme defaults, spacing.

See the design system audit §0 and the file-request list for what to send.

---

## 2. Current site inventory

| Route | Title | Constitutional status under v3.0 |
|---|---|---|
| `/` | House of Luna \| Moonpixiee | Rebuild — front door, wrong lexicon, wrong wordmark |
| `/library` | The Library | Rebuild + expand — is a storefront, must become a library |
| `/edit` | The Edit | Rebuild — right idea, forbidden presentation |
| `/tools` | The Machine Room | Keep + refine — closest to constitutional |
| `/becoming` | Becoming | **Dissolve** → book inside The Library |
| `/letters` | Letters | **Dissolve** → Library periodical |
| `/work` | Work With Me | **Dissolve** → Work With Luna, a door in Luna's Room |

**Rooms that exist:** Library, Edit, Machine Room.
**Room missing entirely:** Luna's Room.
**Sections missing entirely:** Moss & Moon, Fragrance, Wardrobe (as real content).
**Pages with no constitutional home:** none. All seven now resolve.

---

## 3. What already matches the constitution

**The Machine Room is ~70% constitutional.** Already titled "The Machine Room." Already uses system language over editorial (`SYS.01`, `04 Systems Detected / 01 Online`, "Choose a system to enter"). AI Luna already lives there. VELVET//CTRL already lives there. §12 is closer to satisfied than any other section.

**"Elsewhere" is already in use.** §15 approves the word; the home page already has an Elsewhere block. Keep the word, drop the emoji.

**Consistent shell across all seven pages.** Shared header and footer. §7 requires every room to keep the same architecture — that skeleton exists and is reusable.

**The poem fragment is genuinely constitutional.** "i don't chase / i appear" on `/` and `/letters` is literary, quiet, and unmistakably not SaaS. Proof the voice already exists; it just isn't governing yet.

**Display heading pattern.** Serif headline with an italic accent phrase ("For the ones *becoming.*"), consistent across all pages. Editorial and hierarchical. The pattern survives; the words change.

**Machine Room has a skip link.** Propagate to every room under §19.

**Quote attribution is already correct under §1.** The site signs quotes "— moonpixiee." That is exactly the authorship register §1 preserves. It was never the problem — the *logo* was.

---

## 4. What conflicts with the constitution

### 4.1 Moonpixiee is functioning as the wordmark
**Severity: high. Violates §1.**

§1: "Moonpixiee is a signature. A signature is not a logo. Moonpixiee must never function as the repeated site-wide wordmark."

| Location | Current | Verdict under §1 |
|---|---|---|
| Header logo, all 7 pages | `moonpixiee` | **Change** → House of Luna |
| Page title suffix, all 7 pages | `\| Moonpixiee` | **Change** → `\| House of Luna` |
| Footer wordmark | `moonpixiee` | **Change** |
| About header | "The Woman Behind Moonpixiee" | **Change** → Luna |
| Body copy | "the Moonpixiee universe" ×5 | **Change** → the House |
| "That's the empire." | — | **Remove** |
| Quote attribution | `— moonpixiee` | **Keep** — correct under §1 |
| Newsletter | "Letters from Moonpixiee" | **Keep** — correct under §1 |
| Book authorship | — | **Keep** |
| Substack | @moonpixiee | **Keep** |

The pattern is clean: Moonpixiee stays wherever it signs something and goes wherever it brands something.

### 4.2 "Universe" is the governing metaphor, not "House"
**Severity: high. Violates §15, §0.**

"House of Luna · Creative Universe" · "Enter the Universe" · "Join the Universe" · "The Universe" · "Everything lives here." · "the universe I'm building" · "That's the empire."

§15 requires terminology reinforcing *place*. A universe is the opposite architectural claim — unbounded, no rooms, no doors, nothing to wander through. Vocabulary change, but a genuine change of concept.

### 4.3 The Edit presents as an affiliate directory
**Severity: high. Violates §9, §14.** *(Narrowed from the first audit — the business model is fine now, only the presentation is at fault.)*

What must go:
- Category badges reading literally "Style · **Affiliate**", "Beauty · **Affiliate**", "Lifestyle · **Affiliate**" — §9: disclosure "must never dominate the visual experience"
- "**Shop Now**" on every product card — §14 forbids shop verbs
- "Shop the Edit →", "Browse the edit" — same
- "My Favorites + Extras" — §9: Favorites is removed
- 12 identical product cards in one section — §9 forbids the generic product grid
- Price-forward card treatment — §14: objects may be acquirable, but acquisition is not the content

What stays: the affiliate links themselves, and a compliant disclosure rendered as a fact rather than a badge.

**Legal note, and I'm not a lawyer:** US FTC rules require clear disclosure of material connections. §9 permits the disclosure to stop dominating the page; it does not permit it to become invisible or buried. Worth checking the final treatment against current FTC endorsement guidance before M4 ships. This is the only place in the migration with real legal exposure.

Also structural: current sections are Skin First / The Glow / Lip Combo / The Full Edit. §9 specifies Skin + Body / The Vanity / Fragrance / Wardrobe / Moss & Moon. Fragrance and Moss & Moon don't exist; Wardrobe exists only as an outbound link.

### 4.4 The Library is a storefront, not a library
**Severity: high. Violates §8.**

Current `/library` is two product cards — one $37 Gumroad link, one waitlist. Nothing opens. Nothing can be read in the House. Nothing can be written.

§8 now also requires three shelves that don't exist: Books + Guides, Letters from Moonpixiee, The Becoming. Plus interactive writing with private saving — the only part of the migration requiring authentication.

This is the largest engineering effort in the project.

### 4.5 `/work` is a conversion funnel
**Severity: high. Violates §0, §14.**

"UGC · Brand Partnerships · Sponsored Content · Affiliate Campaigns," a four-step intake funnel, and the phrase "built to convert." §14: "Visitors may never be converted."

Under v3.0 the content survives as Work With Luna. The funnel does not. See the flagged concern in §7 below.

### 4.6 Card monotony
**Severity: medium. Violates §18.**

`/edit` — 12 identical cards, then more. `/` — 6 identical universe cards. `/becoming` — 6 prompt cards then 3 concept cards. `/tools` — 4 system cards.

Four of seven pages are a stack of same-size rectangles. Apply §18's test: remove every card — does anything remain?

The Machine Room is the one place cards are correct. A system directory *should* be a directory of uniform units.

### 4.7 Emoji as iconography
**Severity: medium. Violates §3.**

🌙 🖤 🤖 ✨ 🛍 ☁️ on `/`; 🌑 🪞 ✨ on `/becoming`. The strongest "influencer template" signal on the site — named explicitly in §3 as something the House must never be. Replace with typographic marks, rules, numerals, or photography.

### 4.8 SaaS and marketing register
**Severity: medium. Violates §3, §14, §15.**

"Coming Soon," "Join Waitlist," "Notify me," "Get the Guide," "Request Access," "No spam. Unsubscribe whenever," "Shop Now," "Start Here," "Follow Along," "Bestseller," "built to convert."

### 4.9 "Tools" as a navigation label
**Severity: low. Violates §15.**

Page titled "The Machine Room," nav says "Tools," route is `/tools`. Generic, corporate, and it contradicts the page's own title.

### 4.10 Luna's Room does not exist
**Severity: high effort, no conflict.** Pure new build — and now it also has to hold Work With Luna.

---

## 5. Ratified room hierarchy

```
HOUSE OF LUNA
│
├── The Front Door           /                  (was: home / "The Universe")
├── House Map                /house-map         (new — §15)
│
├── Luna's Room              /lunas-room        (new — §11)
│   └── Work With Luna       /lunas-room/work   (absorbs /work — a door, not a room)
│
├── The Library              /library
│   ├── Books + Guides       /library/books
│   │   └── Mastering Your Dark Feminine Energy
│   ├── Letters from Moonpixiee  /library/letters   (absorbs /letters)
│   └── The Becoming         /library/becoming      (absorbs /becoming — interactive)
│
├── The Edit                 /edit
│   ├── Skin + Body          /edit/skin-body        (was: Skin First)
│   ├── The Vanity           /edit/vanity           (absorbs The Glow + Lip Combo)
│   ├── Fragrance            /edit/fragrance        (new)
│   ├── Wardrobe             /edit/wardrobe         (currently link-only)
│   └── Moss & Moon          /edit/moss-and-moon    (new — §10)
│
└── The Machine Room         /machine-room          (was: /tools)
    ├── AI Luna
    ├── VELVET//CTRL
    ├── Muse
    ├── Brand Engine
    └── Creator OS
```

**Redirects required — all 301, all permanent:**

| From | To |
|---|---|
| `/tools` | `/machine-room` |
| `/becoming` | `/library/becoming` |
| `/letters` | `/library/letters` |
| `/work` | `/lunas-room/work` |

These URLs are in your Substack, Instagram bio, Gumroad, and email history. They never expire.

---

## 6. One structural note on the Library shelves

Your sitemap listed *Interactive Books* and *The Becoming* as siblings. I've merged them, and §8 now reads: "Interactivity is a property of a book. It is not a shelf."

Reason: if "Interactive Books" is a shelf, then every time you make a book interactive it has to move shelves, and a visitor browsing Books + Guides can't tell why some books are missing. Better that a book sits on its subject shelf and simply *opens* differently.

Three shelves, not four: **Books + Guides · Letters from Moonpixiee · The Becoming.**

The Becoming earns its own shelf not because it's interactive but because it's a distinct body of work — shadow work and prompts, as opposed to guides or periodicals.

---

## 7. Flagged concern: Work With Luna inside Luna's Room

I've implemented your decision in v3.0. I want to register a concern with it anyway.

§11 defines Luna's Room as **the most personal room** — diary fragments, music, current obsessions, internet artifacts. It's the room where a visitor gets closest to a person.

Brand partnership intake is the least personal content in the House. Placing it inside the most personal room means a visitor moving through diary fragments and 3am voice memos can walk directly into UGC rates and campaign deliverables. That transition is the exact tonal whiplash §0 is trying to prevent — it's the moment someone realizes they're on a personal brand website after all.

The counter-argument is real: partnerships *are* personal to you, they're extensions of your taste, and a business page floating unattached to any room is worse. I take that seriously.

Three options, in my order of preference:

1. **Work With Luna is a door off the entry hall** — on the House Map and in the footer, belonging to no room. §11 already calls it a door rather than a room, so this is a small move.
2. **Keep it in Luna's Room but at the far end** — reachable only after the personal content, never previewed, never linked from the room's entrance.
3. **As ratified** — a section within Luna's Room.

This is genuinely your call; it's a judgment about your business as much as the architecture. But I didn't want it to pass without the objection on record. If you keep it as ratified, option 2's placement discipline is worth adopting regardless.

---

## 8. Two smaller things

**The domain is plural.** `housesofluna.com` — *houses*. The brand is House of Luna, singular, and §0's entire metaphor is *a* house. Worth deciding whether to acquire the singular domain and redirect, or accept the plural as a permanent quirk. Not urgent, not free, but it gets more expensive to change the longer the URL is in circulation.

> **RULED (Luna, 3 Aug 2026 — Constitution v4.3):** the plural stays. **One root domain forever: `housesofluna.com`.** All wings are subdomains (`velvet.`, future `moss.…`); no second root domain is purchased for the platform. `houseofluna.com` (singular) may later be acquired as a **redirect only**, pre-launch, if reasonably priced.

**Route naming.** Your notes said `/luna`; I've specced `/lunas-room`. `/luna` is shorter but ambiguous with the person; `/lunas-room` matches §15's place-vocabulary. Easy to change — just needs a decision before M3 sets the redirects.
