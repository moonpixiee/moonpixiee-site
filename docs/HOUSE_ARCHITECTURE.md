# HOUSE_ARCHITECTURE.md

House of Luna — Engineering Architecture
Version 0.3
Status: **Draft — not ratified**

v0.2 added §12 Commerce Architecture.
v0.3 adds §13 Static-to-Framework Migration Doctrine (ratified) and corrects Moss & Moon scope: no live plants.
§1.4 remains blocked pending repo access.

Subordinate to HOUSE_CONSTITUTION.md.
The Constitution says what the House should be. This document says how it stands up.
Where the two disagree, the Constitution wins.

---

# 1. Verified current state

Read directly from your Netlify account on 28 July 2026. This is fact, not inference.

## 1.1 Netlify

**Team:** `6a304f2224bfc70088ad13bd`
**Plan:** `nf_team_dev` — the free tier, on both projects

| Project | Site ID | Primary URL | Branch deploy | Forms |
|---|---|---|---|---|
| `moonpixiee-site` | `76f26cf…ec67` | **housesofluna.com** | `main--moonpixiee-site.netlify.app` | not enabled |
| `moonpixiee` | `cec64e29…ca37` | moonpixiee.com | `6a320d57…--moonpixiee.netlify.app` | not enabled |

Both report a current, ready deploy.

## 1.2 The problem this surfaced

**`moonpixiee` looks orphaned.** Its branch-deploy URL is prefixed with a deploy hash rather than a branch name, which is the signature of a manual or drag-and-drop deploy rather than a Git-connected site. And the domain it claims — moonpixiee.com — **does not currently serve Netlify content at all.** It resolves to a Beacons.ai link-in-bio page.

So a Netlify project is holding a domain that something else is actually serving. That is precisely the "one source of truth" problem you named, and it's live right now.

## 1.3 Your actual public surface area

The docs so far have treated House of Luna as the whole estate. It isn't. There are at least five surfaces:

| Surface | What it is | Owner | Status |
|---|---|---|---|
| housesofluna.com | The House | Netlify → Git | Active |
| moonpixiee.com | Link-in-bio | Beacons.ai | **Deferred** — archived intentionally until prepaid term ends. Out of Phase One scope. |
| links.moonpixiee.com | Affiliate link shortener | Third party | Active — serves The Edit |
| moonpixiee.substack.com | Letters | Substack | Active — publishing layer per §10 |
| moonpixie.gumroad.com | The $37 guide | Gumroad | **Retiring** — see §12.6. Nothing migrates yet. |

Under Constitution §1, Moonpixiee is the *signature* and House of Luna is the *place*. Right now Moonpixiee has more infrastructure than the House does. Four of these five surfaces are Moonpixiee-branded, and three are on platforms you don't control.

That's not a crisis — link-in-bio pages and Substack are perfectly reasonable tools. But it's worth naming: the House isn't currently the center of gravity, and the migration plan assumed it was.

## 1.4 Verified stack

**Confirmed 28 July 2026** from the project root file listing.

```
becoming.html   edit.html      index.html     letters.html
library.html    tools.html     work.html
[16 image files]
.git  .gitignore  .claude/  README.md  project-tree.txt  .DS_Store
```

| Question | Answer |
|---|---|
| Framework | **None** |
| Build step | **None** — no `package.json`, no `node_modules` |
| Package manager | **None** |
| Stylesheet | **None exists** — see below |
| `netlify.toml` | **Absent** |
| `_redirects` | **Absent** |
| Version control | Git, present |
| Structure | Flat — seven HTML files and sixteen images at root, no subdirectories |

The flat-static inference in v0.1 was correct. Netlify serves `/library` from `library.html` via pretty URLs, and images resolve from the publish root.

### 1.4.1 There is no stylesheet

The most consequential finding, and it changes several documents.

No `.css` file exists in the repository. All styling is therefore **inline in each of the seven HTML files**, which means:

- **There is no token layer to migrate.** Milestone 1 is not a rename map from pink to House Red — it is the creation of a design token system that has never existed.
- **Every style rule is duplicated seven times.** Any visual change currently requires seven edits, which is almost certainly why the site drifted and why the shared header and footer are copy-paste rather than a component.
- **The seven style blocks have diverged — now confirmed, not assumed.** File dates show two generations: five pages last touched 17 June (`becoming`, `edit`, `letters`, `library`, `work`), while `index.html` and `tools.html` were rewritten a month later, 17–18 July. Whatever styling decisions were made in July did not propagate back to the June pages. The port must treat the June and July pages as potentially different dialects of the same design.

File sizes support the same picture: `index.html` is ~30KB and `tools.html` ~34KB — roughly triple the June pages (~11KB each). Each page is carrying its own full style payload, and the two newest carry the most.

**One thing still to confirm:** whether any page loads CSS or JS from a CDN — a Tailwind CDN script, a Google Fonts link, an icon library. That changes the port meaningfully and cannot be seen from a file listing. See §14.

### 1.4.2 Smaller notes

- `.DS_Store` is present at root. Confirm `.gitignore` covers it.
- `project-tree.txt` appears to be a prior attempt at this inventory; it can go.
- `.claude/settings.local.json` indicates Claude Code is in use locally — useful, since the port is well suited to it.

---

# 2. The decision that gates everything

Not Netlify vs Cloudflare. That one barely matters.

The real question: **does House of Luna become an application?**

Everything you've asked for — accounts, private journals, saved objects, reading position, AI Luna memory — requires a server, a database, sessions, and access control. A static HTML site cannot do any of it.

So there are two paths.

## Path A — Keep it static, add auth as a layer

Supabase's JS client runs in the browser. You could add auth and data to static pages with `<script>` tags and no build step at all.

- **Cheap.** Days, not weeks.
- **No re-platform.** The site you have keeps working.
- **Ceiling is low.** No server-side rendering, no protected routes at the edge, no component reuse, no type safety. Every page hand-maintains its own auth state. The Library's reading view and book interiors would be painful. Seven pages is manageable; four rooms with shelves, books, sections, and Your Room is not.

## Path B — Re-platform to a framework

Next.js or Astro on Netlify, Supabase behind it.

- **Correct ceiling.** Everything in the Constitution is buildable, including the parts not designed yet.
- **Component reuse.** The design system audit's component work only pays off here.
- **Cost.** This is a rebuild of the shell before any room is rebuilt. Several weeks before anything looks different.

## Recommendation

**Path B, with Astro.**

Astro because the House is mostly *content* — rooms, books, letters, objects — with islands of interactivity (writing spaces, saved objects, AI Luna). That is exactly Astro's shape. It ships static HTML by default, which preserves the calm, fast, light-first feel §4 asks for, and hydrates only what needs to be interactive. Next.js is the safer-by-default choice and would also work; it's heavier than this House needs.

**But this decision is not mine to make on inference.** If your site is already on a framework, Path B is mostly done and I've been arguing with a strawman. Send the repo.

---

# 3. Infrastructure

## 3.1 Host: stay on Netlify

You asked me to recommend one. **Netlify.**

Not because it's better than Cloudflare Pages — for this workload they're close to interchangeable. Because:

- housesofluna.com is already there, Git-connected, and deploying cleanly
- Supabase covers the database, auth, and storage, so Cloudflare's main draw (D1, R2, KV) is redundant here
- Migrating hosts is real work that produces zero visible improvement
- You already have the Netlify connector wired into this workspace

Cloudflare would win if you needed heavy edge compute or were building on their data primitives. You aren't.

**Standardize on Netlify. Revisit only if something concrete forces it.**

## 3.2 Immediate cleanup

1. **Resolve the `moonpixiee` project.** Confirm what's actually serving moonpixiee.com, then either connect that project properly or delete it. A Netlify project claiming a domain served by Beacons is a trap for future-you.
2. **Decide moonpixiee.com's role** under §1. It could redirect to the House, remain a link-in-bio, or become the author/publishing surface. Any of those is fine — but it should be a decision, not an accident.
3. **Rename `moonpixiee-site`.** Under §1 the House is the brand. `house-of-luna` is the honest name.

## 3.3 Environments

Currently there is one: production, on `main`. That's fine for a static brochure site. It is not fine once visitors have accounts and private writing.

| Environment | Branch | URL | Database |
|---|---|---|---|
| Production | `main` | housesofluna.com | Supabase prod |
| Staging | `develop` | staging.housesofluna.com *(password-protected)* | Supabase staging |
| Preview | PR branches | Netlify deploy previews | Supabase staging |
| Local | — | localhost | Supabase local / branch |

**Netlify's free tier does not include password protection on deploy previews.** If staging must be private — and it should be, once real visitor data exists — that's a paid plan. Worth knowing before it's urgent.

**Never point a preview deploy at the production database.** The moment private journals exist, that's a data incident waiting for a careless migration.

## 3.4 Pipeline

```
local → PR → deploy preview (staging DB) → merge to main → production
```

Minimum CI before merge: build succeeds, typecheck passes, links resolve. Add Lighthouse budgets once M1's tokens land, so §24's contrast and performance commitments don't silently rot.

## 3.5 Cost

Everything above runs on free tiers today. What eventually costs money:

- Netlify paid plan — if staging needs password protection
- Supabase paid plan — past 500MB database or 1GB storage, and for daily backups
- **Backups are the one I'd pay for early.** Free-tier Supabase has limited backup guarantees. Once the House holds visitors' private writing, "we lost your journal" is not a recoverable trust event.

---

# 4. Supabase

## 4.1 One project, not two

House of Luna and VELVET//CTRL share **one Supabase project** and **one auth system**.

Reasoning: §16 says a visitor takes *a key to the House*. VELVET//CTRL lives in the Machine Room, which is a room in the House. Two auth systems would mean two keys to one building, and a visitor who unlocks their room in the Library shouldn't have to unlock it again to reach the Machine Room.

Separation happens at the **schema** level, not the project level:

```
public       → shared identity, keys, preferences
house        → Library, Edit, rooms, memory
machine      → VELVET//CTRL, AI Luna
```

If VELVET//CTRL ever needs to leave, a schema is extractable. Two projects joined by a shared user table is much harder to reverse.

## 4.2 Schema sketch

Illustrative, not final. Tables are named for the Constitution's vocabulary, because §16 retires "user" and "profile" from the interface — and the schema is easier to reason about when it matches.

```sql
-- Identity
visitors            -- extends auth.users; display name, key issued at
visitor_preferences -- theme, motion, reduced-motion override

-- The Library
books               -- catalog: title, shelf, interactive flag
reading_positions   -- visitor × book × position          (M5a)
book_entries        -- private writing; visitor × book × prompt (M5b)
marginalia          -- notes and annotations              (M5b)

-- The Edit
objects             -- catalog: section, links, disclosure
saved_objects       -- visitor × object                   (M4)

-- Machine Room
luna_memories       -- AI Luna's per-visitor memory, separately revocable
luna_conversations
-- VELVET//CTRL tables: deferred, see §7

-- Governance
consents            -- what the visitor allowed, when, and revocation
export_requests     -- §17 data export
deletion_requests   -- §17 right to erasure
```

Note `consents`, `export_requests`, and `deletion_requests`. §17 is not a policy document you write once — it's tables. Build them in M1.5 with the key, not later. Retrofitting deletion across ten tables is how deletion silently fails.

## 4.3 Row Level Security

**RLS on, on every table, from the first migration.** Not "enable it before launch." A single table shipped without RLS is a public database.

Baseline:

```sql
alter table book_entries enable row level security;

create policy "visitors read own entries"
  on book_entries for select
  using (auth.uid() = visitor_id);

create policy "visitors write own entries"
  on book_entries for insert
  with check (auth.uid() = visitor_id);
```

Catalog tables (`books`, `objects`) are readable by everyone including anonymous visitors — §17 guarantees anonymous wandering. Everything visitor-scoped is owner-only.

## 4.4 The hard one: "Luna does not read visitors' journals"

§17 makes a promise most products don't make. It deserves an honest architectural answer rather than a comfortable one.

RLS stops other *visitors* reading a journal. It does not stop **you**. The Supabase service role bypasses RLS entirely, and anyone with dashboard access can read any row. So as normally built, §17's promise rests on your discipline, not on the architecture.

Three options, escalating:

| Approach | Protects against | Cost |
|---|---|---|
| RLS + policy discipline | Other visitors | Free. Promise is social, not technical. |
| RLS + restricted service-role use + audit logging | Casual access, accidental exposure | Low. Promise is mostly technical. |
| Client-side encryption, key derived from the visitor's password | Everyone, including you | High. Breaks search, breaks AI Luna over journals, and **a forgotten password means the writing is gone forever.** |

**Recommendation: the middle one.** Full encryption sounds like the principled choice, but "Lost Your Key?" would mean *your journal is permanently unrecoverable*, which is a worse experience than the one §17 is trying to protect. Middle path, plus honest wording in the privacy policy: say the writing is private and access is restricted and audited — don't claim it's mathematically impossible for you to read it, if it isn't.

Whatever you choose, **the privacy policy must describe what's actually true.** That's the one non-negotiable.

---

# 5. Unlock Your Room

## 5.1 Flows

| Constitution term | Mechanism |
|---|---|
| Unlock Your Room | Sign up — email + password, or magic link |
| Return to Your Room | Sign in |
| Lost Your Key? | Password reset |
| Your Keys | Account settings |
| Your Room | Authenticated space |

**Magic link is worth considering as the primary method.** No password means no "Lost Your Key?" flow at all, and it fits a House where a key is something you're sent rather than something you invent. Downside: every return trip requires an inbox. Offer both; default to magic link.

## 5.2 The rule that governs the whole flow

§17: *a key is requested only when the visitor tries to keep something.*

No signup wall. No modal on arrival. No "create an account to continue." A visitor reads the whole House anonymously, and the key is offered at the exact moment they try to save a book, write in a prompt, or keep an object — with the reason visible.

This is also better product design than a wall, because the value is concrete at the moment of asking.

## 5.3 v1 vs later

**v1 (M1.5):**
- Unlock, return, sign out, recovery
- Session handling, protected routes
- `visitors` + `visitor_preferences`
- Your Room shell — mostly empty, honestly labelled
- The full §17 privacy surface: see, export, delete
- Key icon, not an avatar (§16)
- Plain-language failure states (§16)

**Later:**
- Saved books, reading position → with M5
- Saved objects → with M4
- AI Luna memory → with AI Luna
- Your Room as a furnished space → when there's enough to furnish it
- OAuth providers, 2FA, visitor-to-visitor anything

## 5.4 Two traps

**Email deliverability.** Supabase's built-in mailer is rate-limited and unsuitable for production. Configure a real SMTP provider before M1.5 ships, or "Lost Your Key?" quietly fails for real people.

**Naming collision.** Per §16, the visitor's space is Your Room and never renders under a resident's name. The signed-in indicator must not say "Luna's Room" unless the visitor is Luna.

---

# 6. Memory — where I'd push back

You asked for **one unified memory system**. I'd build one *identity* and **separate domain stores**.

## 6.1 Why not unified

A single memory table spanning Library, Edit, AI Luna, and VELVET//CTRL sounds elegant and produces a god-table: a `type` column, a JSON blob, and no meaningful constraints. Six months in, nothing can be validated, queried efficiently, or reasoned about.

More importantly, it breaks §17. Memory shared with AI Luna is **separately revocable**. If AI Luna's memory lives in the same store as reading position and saved objects, "revoke AI Luna's memory" becomes a filtered delete over a shared table — the kind of operation that works in testing and misses rows in production. When it's her own table, revocation is `delete from luna_memories where visitor_id = ...`. Complete, verifiable, obviously correct.

## 6.2 What actually unifies

```
                    ┌─────────────┐
                    │  visitors   │   ← one identity
                    └──────┬──────┘
                           │ visitor_id
     ┌──────────┬──────────┼──────────┬──────────┐
     ▼          ▼          ▼          ▼          ▼
  reading    book       saved     luna       velvet
 positions  entries    objects  memories     (later)
     │          │          │          │          │
     └──────────┴──────────┴──────────┴──────────┘
                           │
                    ┌──────▼──────┐
                    │  consents   │   ← one governance layer
                    │  exports    │
                    │  deletions  │
                    └─────────────┘
```

One identity. One governance layer. Separate stores per domain.

This gives you everything unification was for — one key, one export, one delete, one place to answer "what does the House remember about me" — without a god-table.

## 6.3 The seam that matters

Build **one memory service module** in the application layer with a fixed interface:

```
remember(visitor, domain, payload)
recall(visitor, domain, query)
forget(visitor, domain)
disclose(visitor) → everything the House holds
```

Rooms call this. Rooms never touch memory tables directly. When VELVET//CTRL arrives it implements the same interface, and §17's guarantees hold for it automatically rather than being reimplemented and forgotten.

`disclose()` is the important one. §17's test — *would a visitor feel cared for or surprised?* — is only enforceable if there's one function that returns the honest, complete answer.

---

# 7. House of Luna and VELVET//CTRL

| Question | Answer |
|---|---|
| Share authentication? | **Yes.** One key to the House. §16. |
| Share Supabase? | **Yes, one project, separate schemas.** §4.1 |
| Share deployment? | **Not necessarily.** See below. |
| Share domain? | **Yes, as a path.** `housesofluna.com/machine-room/velvet` |

**On deployment:** the Machine Room is a room in the House, so its *entrance* is part of the House. But VELVET//CTRL as a working product may want its own release cadence — you shouldn't have to redeploy the Library to ship a fix to Velvet. Reasonable pattern: the House is one deploy; Velvet's application is a separate deploy mounted at a path, sharing auth via Supabase session.

**Do not design VELVET//CTRL's data model now.** It's paused, its scope is undefined, and AI_LUNA.md has nine open questions. Designing a schema for it today means designing against guesses.

Define the *seam* instead: shared `visitors`, the memory service interface from §6.3, and the `machine` schema reserved. That's enough for Velvet to attach cleanly whenever it resumes, and it costs nothing now.

---

# 8. AI Luna

Blocked, and this document does not unblock her.

**AI_LUNA.md question 7 — refusal categories and crisis response — must be answered before a visitor can type anything into her.** The Becoming is shadow work. A House with a journaling room and an AI in it will, eventually, have someone in real distress typing at 3am. That response should be designed deliberately, with input from someone qualified, not improvised in a system prompt.

Everything else about her can be figured out while building. That one can't.

Architecturally she needs: her own schema tables, separately revocable memory (§6.1), explicit opt-in consent recorded in `consents`, and **no access to `book_entries`** — §17 places private writing outside all other systems, including her.

---

# 9. Sequencing

You asked me to put the engineering foundation before the room redesigns. Mostly yes — with one exception I'd hold.

| Order | Work | Why here |
|---|---|---|
| **E0** | Repo access; decide Path A or B (§2) | Everything depends on it |
| **E1** | Netlify cleanup: orphan project, rename, environments | Cheap, removes a live trap |
| **E2** | Platform decision executed — re-platform if Path B | The shell every room is built in |
| **M1** | Tokens, light-first | Cheap, global, high visible impact |
| **M2** | Brand + lexicon | Same |
| **E3** | Supabase, RLS, the key, §17 surface | Rooms can now assume memory exists |
| **M3** | Front Door, House Map, redirects | — |
| **M4–M9** | Rooms, per the migration plan | Each brings its own memory |

**The exception:** M1 and M2 stay in front of the Supabase work.

They're days of effort, they touch every page, and they're what makes the House *feel* like the Constitution. Auth and schema are invisible to visitors. If everything visible waits behind several weeks of infrastructure, the project loses its felt momentum at exactly the point where the work is least rewarding — and that's the failure mode you described from last time.

The engineering foundation should come before the *room rebuilds*. It doesn't need to come before the *paint*.

---

# 10. Open questions

1. **What is the site actually built with?** Blocks everything. §2.
2. **Path A or Path B?** Static-plus-auth, or re-platform.
3. **What is moonpixiee.com for**, and what should serve it?
4. **Journal privacy posture** — which of §4.4's three options?
5. **Magic link or password** as the primary key?
6. **Staging privacy** — does it need the paid Netlify plan?
7. **AI_LUNA.md question 7** — refusal and crisis response.

Questions 1 and 2 are the same question wearing different clothes, and neither this document nor the migration plan can be finished without them.

---

# 11. What I need

**The single highest-value thing you can send:**

```
tree -L 3 -I 'node_modules|.next|dist|.git'
```

run from your project root. That one command answers questions 1 and 2, and most of §2.

**Then:**
- `package.json` — or confirmation that there isn't one
- The CSS file containing your `:root` block
- `netlify.toml` / `_redirects` — if they exist
- The GitHub repo URL, or read access

If there's no `package.json` and no build step, that confirms the flat-static inference and Path B becomes a firm recommendation rather than a hedged one.

---

# 12. Commerce Architecture

**Amendment v0.2.** Ratified direction: Netlify hosts, Supabase owns identity and House data, **Shopify is the commerce backend**. No Stan. No raw Stripe. Gumroad retires on a documented plan, executed later.

## 12.1 The ownership boundary

This is the whole of it, and getting it right prevents most future pain:

| Concern | Owner |
|---|---|
| Money, checkout, payment processing | **Shopify** |
| Orders, refunds, chargebacks, receipts | **Shopify** |
| Product catalog, pricing, inventory, fulfillment | **Shopify** |
| Sales tax, VAT, compliance | **Shopify** |
| Identity, keys, sessions | **Supabase** |
| Entitlements — who may open which book | **Supabase** |
| Private writing, memory, preferences | **Supabase** |
| Presentation, editorial, atmosphere | **The House** |

**The rule:** Shopify is the source of truth for *did they pay*. Supabase is the source of truth for *can they open the book*. The second is **derived** from the first, never duplicated.

**Never store in Supabase:** card data, full billing addresses, order line-item detail beyond a reference, or any mutable copy of payment status. If the House needs to know something about an order, it asks Shopify or holds an order ID.

## 12.2 What Shopify does and does not serve

**Serves:** the Library's books and guides · Moss & Moon · future physical products · any dropshipped goods.

**Does not serve:** The Edit's affiliate links (Amazon, via links.moonpixiee.com) · Substack subscriptions.

So the House has two commercial modes, and the Constitution already distinguishes them: §11 governs affiliate curation in The Edit, §12 and §18 govern owned commerce. Shopify only touches the second. **The Edit's architecture does not change.**

## 12.3 Integration pattern

**Headless: Storefront API for data, Shopify-hosted checkout for money.**

```
House (Netlify)                    Shopify
─────────────────                  ───────────────
Library / Moss & Moon
  editorial UI          ──────►    Storefront API
  product data          ◄──────    (title, price, availability)

  "acquire"             ──────►    Shopify checkout
                                        │
                                   payment completes
                                        │
Netlify function        ◄──────    webhook: orders/paid
  verify HMAC
  write entitlement
       │
       ▼
   Supabase
```

This gives you exactly what you asked for: Shopify handles checkout, orders, administration, and fulfillment, while the House keeps its editorial interface.

**Constitutional tension, flagged honestly.** §18 forbids conversion pressure, urgency, and shop verbs. Shopify's hosted checkout is a conventional commerce checkout, and deep customization of it is a Plus-tier feature. So the checkout will not look like the House.

Mitigations: disable upsells and aggressive abandoned-cart sequences, apply what checkout branding your plan allows, and — this is the useful part — **frame the transition as leaving through a door rather than as a seamless flow.** A visitor who understands they've stepped outside to a counter is not jarred. A visitor who expected the House and got a funnel is.

## 12.4 Cost — decide this before building

Shopify inverts Gumroad's model: Gumroad has no monthly floor and takes a cut per sale; Shopify charges monthly and takes less per sale.

As of mid-2026, <cite index="9-1">Shopify's plans run Starter at $5/month, Basic at $39/month, Grow at $105/month, and Advanced at $399/month</cite>, <cite index="14-1">with roughly 25% off for annual billing</cite>. Sources vary slightly on Basic, so confirm on Shopify's own pricing page before committing.

The distinction that matters here: <cite index="9-1">Starter has no standalone storefront and is built for selling through shareable product links</cite> — which, for a headless House, might be exactly right, since **the House is the storefront**.

**The open question that decides $5/mo vs $39/mo:** does the Starter plan grant Storefront API access sufficient for a headless build? Historically the Storefront API has required a plan above the Lite/Starter tier. This is worth confirming directly with Shopify before architecting around it, because at your current volume it's the difference between commerce paying for itself and not.

One more thing to know: <cite index="13-1">Basic now includes zero additional staff accounts</cite>, so if anyone besides you needs admin access, that's a Grow-tier decision.

## 12.5 Purchase → House access

The interesting problem. A visitor buys The Becoming; how does the House know they own it?

**Flow:**

1. Visitor reads the book's page in the Library — House UI, Storefront API data
2. Chooses to acquire → Shopify checkout
3. Payment completes
4. Shopify fires `orders/paid` → Netlify function
5. **Function verifies the webhook HMAC signature.** Non-negotiable: an unverified webhook endpoint is a free-entitlement generator for anyone who finds the URL
6. Function writes an entitlement row keyed by **purchase email**, with `visitor_id` null
7. Visitor returns to the House
8. If they hold a key with a matching email → entitlement binds to their `visitor_id`
9. If they hold no key → they're invited to Unlock Your Room, and binding happens at unlock
10. If the emails differ → a **Claim your book** flow, using order number plus purchase email

```sql
entitlements (
  id, product_handle, shopify_order_id,
  purchase_email,          -- from Shopify
  visitor_id,              -- null until claimed
  granted_at, revoked_at, revoke_reason
)
```

Access check is then one question: *does a non-revoked entitlement exist for this visitor and this book?*

**Edge cases to design rather than discover:**

- **Purchase before the visitor has a key.** This is the *common* case, not the edge one. Email-keyed entitlements handle it.
- **Different email at checkout than on the House key.** Very common. The claim flow exists for this.
- **Refunds and chargebacks.** Subscribe to `refunds/create` and revoke. Decide the policy now: does a refund remove access to writing the visitor already did inside the book? My recommendation — revoke access to the book, never delete their writing. §17 makes their words theirs.
- **Gift purchases.** Deliberately out of v1 scope, but don't design a schema that forbids them.
- **Webhook delivery failure.** Webhooks are best-effort. **Build a reconciliation job** that periodically pulls recent orders from the Admin API and backfills missing entitlements. Without it, someone eventually pays and gets nothing, and you find out from an angry email.

## 12.6 Gumroad retirement — documented, not executed

**The principle, which is not negotiable: people who already paid keep their access.**

| Phase | Work | When |
|---|---|---|
| **R0** | **Export everything now.** Buyers, emails, sales history, license keys. | **Do this today** — it's five minutes and it's the one thing you'd genuinely regret losing |
| R1 | Point Library links at Shopify; stop new Gumroad sales | When Shopify is live |
| R2 | Import Gumroad buyers as **pre-granted entitlements**, keyed by email | With the commerce milestone |
| R3 | One plain email to existing buyers explaining where their book now lives | After R2 verifies |
| R4 | Close the Gumroad account; keep the export permanently | After a defined grace window |

R0 is the only part I'd do before anything else. Everything else waits for review, as instructed.

**R2 is worth building deliberately**, because it produces something lovely: an existing buyer unlocks their room for the first time and the book is *already on the shelf*. That's §25's "a room is accumulated, not given," delivered as a first impression rather than an empty state.

**Do not close the Gumroad account until entitlement grants are verified in production.** Not staging.

## 12.7 Stan — agreed, no

Shopify covers digital products, physical products, checkout, and fulfillment. Stan's distinctive value is creator link-in-bio plus lightweight storefront — which is Beacons' current job and the House's eventual one. No capability gap justifies a third commerce system.

Revisit only for something specific Shopify handles poorly: course drip scheduling, or community/membership.

## 12.8 Raw Stripe — agreed, no, with one exception worth naming

No reason to hand-build commerce when Shopify handles checkout, tax, and fulfillment.

**The one place to re-examine:** recurring membership. If the House ever gates Letters, the Library, or AI Luna behind a subscription, Shopify's subscription support requires an app and membership-gating is not its native strength. That's the scenario where a direct Stripe integration becomes architecturally defensible — because the thing being sold is *access to the House*, which Supabase already owns, rather than a product Shopify ships.

Not a decision for now. Just don't let it surprise you later.

## 12.9 Moss & Moon scope

**Moss & Moon does not sell live plants.** "Botanical shop" describes the brand atmosphere and product category, not living inventory.

This removes the entire class of concerns that would otherwise apply — perishability, seasonality, damage rates, cold-chain shipping, and the photography problem of goods you never handle. None of it is relevant.

What remains is ordinary product commerce: shelf-stable goods, standard shipping, standard returns. Shopify handles it with no special accommodation, and the §12.1 ownership boundary applies unchanged.

Affiliate first, owned inventory later, per Constitution §12. The bridge-to-destination path is a business decision about margin and control, not a fulfillment risk.

## 12.10 New open questions

8. **Does Shopify Starter provide sufficient Storefront API access for a headless build?** Decides $5/mo vs $39/mo. §12.4
9. **Refund policy for interactive books** — revoke access, preserve writing? §12.5
10. **Shopify Payments availability and rates** in your jurisdiction.
11. **Digital delivery method** — is the book delivered *as a file* by Shopify, or purely as House access? My recommendation: House access only. A PDF in an email is a book that leaves the House and never comes back, which contradicts §10.

---

# 13. Static-to-Framework Migration Doctrine

**Status: RATIFIED.** This section governs the move from the static HTML prototype to the long-term House platform.

## 13.0 The rule

> **Never port and redesign in the same step.**

Everything below follows from this.

If the pages are rewritten into a framework *and* the new tokens and lexicon are applied at the same time, and something breaks, there is no way to tell whether the port or the redesign caused it — and no known-good state to compare against.

**Phase 1 produces zero visible improvement. That is the point.** It is the only phase with a perfect oracle for correctness: *does it look identical?* Any change that makes the output intentionally different destroys that oracle.

## 13.1 The ratified sequence

| # | Step | Exit condition |
|---|---|---|
| 1 | Tag the current production commit. Verify Netlify rollback works **on staging**. | A rollback has actually been performed, not merely assumed available |
| 2 | Port all seven existing pages at **1:1 visual and behavioral fidelity** | Output indistinguishable from production |
| 3 | Preserve routes, asset paths, metadata, social previews, forms, and outbound links | Inventory checked item by item — §13.2 |
| 4 | Verify page by page on a staging deployment | All seven pages signed off |
| 5 | Cut over once, rollback ready | Production serving from the new platform |
| 6 | Monitor 404s and deploy health for **at least one day** | No unexplained 404s; deploys green |
| 7 | Retain the old static files, unreferenced, for **at least two weeks** after stable launch | Files present in repo, linked from nothing |
| 8 | Only then begin M1 tokens, M2 lexicon, and later Supabase | Port confirmed stable |

Steps 1–7 are the port. Nothing in the migration plan begins until step 8.

## 13.1a The acceptance test

Ratified. A port passes only if all eight hold:

> **Same routes. Same content. Same layout. Same mobile behavior. Same forms. Same links. Same metadata. No visible redesign.**

Any single failure means the port is not complete. "Mostly identical" is not a passing state, because the entire value of Phase 1 is having a known-good baseline to compare against later.

## 13.2 What must be preserved exactly

The quiet breakages, in the order they tend to happen:

**Routes.** `/library`, `/edit`, `/tools`, `/becoming`, `/letters`, `/work` must resolve exactly as they do now. These URLs are in Substack posts, the Instagram bio, Gumroad, and email history. A framework that wants `/library/index` or `/library.html` has broken every inbound link. *Route changes belong to Milestone 3, not to the port.*

**Asset paths.** Images currently sit at the publish root — `/product-cleanser.jpeg`, `/glow-dove.jpg`. A framework build will want to relocate and hash them. Either keep them at the root in the public directory, or add redirects. Anything that hotlinks these images from outside breaks silently otherwise.

**Metadata and social previews.** `og:title`, `og:description`, `og:image`, Twitter card tags, canonical URLs. These are the easiest thing to drop in a port and the failure is invisible until someone shares a link and gets a blank card. Diff the rendered `<head>` of every page, old versus new.

**Forms.** Netlify Forms is currently **not enabled** on either project, so the existing email captures post somewhere else. Identify where before porting — a form that silently stops submitting is a subscriber list quietly going to zero.

**Outbound links.** Amazon affiliate links via `links.moonpixiee.com`, the Gumroad link, Substack, Instagram. Affiliate links are revenue; a mangled URL parameter is lost income that produces no error.

**Mobile behavior.** Verified on real devices, not only at a resized desktop window. This is a **primary** test, not a secondary one: inbound traffic arrives through the Instagram bio and Substack links, so most visitors are on phones — and many are inside in-app browsers, which is where ports break in ways desktop testing never reveals.

Check specifically:

- The **viewport meta tag**. Trivially easy to drop in a port, and its absence renders every page at desktop width on a phone. Diff it per page.
- **Horizontal overflow.** A single element a few pixels too wide produces sideways scroll on mobile and nothing at all on desktop.
- **The mobile menu** — opens, closes, traps focus, closes on navigation.
- **Tap target sizing** and spacing between adjacent links.
- **Instagram and Substack in-app browsers** specifically, on both iOS and Android. These are the actual arrival paths. They handle fonts, viewport units, and safe-area insets differently from Safari and Chrome.
- **Safe-area insets** on notched devices — the current site sets `viewport-fit=contain`; whatever it does now, it must do after.
- **Font scaling** with the OS text size increased, per §24.

A desktop-perfect port with broken mobile spacing is not a 1:1 port. It is a redesign nobody approved.

**Behavioral fidelity.** Any existing interactivity — menus, toggles, scroll behavior — works as it does now. "Behavioral" is in the ratified wording deliberately: a visually identical page that lost its mobile menu is a failed port.

## 13.3 Framework: Astro is preferred, not decided

**Recorded as the current preferred framework. Not an irreversible decision.**

The reason is specific to Phase 1: `.astro` files are close to a superset of HTML, so existing static pages can be pasted in largely as-is and render. That makes the 1:1 port unusually cheap and unusually low-risk.

This matters more than architectural elegance, because Phase 1 is the phase with no visible reward, which makes it the phase most likely to get rushed. A port that is nearly free is a port that actually gets done properly.

Astro also fits the House's shape — mostly content, with islands of interactivity — and ships static HTML by default, which serves §4's calm and §24's performance commitments.

**Confirm only after reviewing the complete repository contents and Netlify build settings.** Next.js remains a defensible alternative if the repo reveals something that favors it.

## 13.4 Why not incremental route-by-route

A strangler-fig migration — moving routes one at a time behind proxy rules — is correct for large systems.

At seven pages it is the wrong shape. Running two platforms simultaneously behind redirect rules introduces more coordination surface than the risk it removes, and doubles the number of places a route can be misconfigured. **Parallel build with a single reversible cutover** is safer at this size.

## 13.5 The one-way doors

Two things in this migration cannot be undone. Both are avoidable.

**Deleting the old static files too early.** Step 7 exists for this. Keep them in the repo, referenced by nothing, for at least two weeks past stable launch. They cost nothing and they are the fastest possible recovery path.

**Losing the Gumroad export.** Unrelated to the port, but it is the other irreversible item in flight. See §12.6 R0.

## 13.6 If the inference is wrong

This entire section assumes the site is flat static HTML — inferred from pretty URLs, root-level assets, and absent framework fingerprints, but **not verified**.

If `package.json` shows an existing framework, Phase 1 largely evaporates and the plan proceeds directly to M1. The doctrine in §13.0 still holds regardless: whatever platform work happens, it does not happen in the same step as the redesign.

---

# 14. Resolved: Path B is confirmed

With the repository verified (§1.4), the open questions from §2 and §10 collapse:

| Former open question | Resolution |
|---|---|
| What is the site built with? | Seven flat HTML files, inline styles, no build step |
| Path A or Path B? | **Path B — re-platform.** Path A (static + auth layer) would mean wiring Supabase by hand into seven divergent files. Untenable. |
| Token file to inspect? | Does not exist. M1 creates the token system from scratch. |
| Netlify build settings? | Nothing to inspect — no `netlify.toml`, no build. Netlify is publishing the repo root as-is. The new build config starts from a blank slate, which is simpler than migrating one. |

**Astro moves from "preferred" to "confirmed pending one check":** no existing framework means nothing to conflict with, and the paste-HTML-in migration path applies perfectly to seven standalone files.

**The one remaining check before Phase P begins:** the contents of the HTML files themselves — specifically the `<head>` of each page. What's needed:

1. **CDN dependencies** — Tailwind CDN, Google Fonts, icon scripts. Each one is either bundled properly during the port or preserved as-is; either way it must be known.
2. **The July vs June divergence** (§1.4.1) — the port needs a diff of the style blocks between generations, because "1:1 fidelity" means faithful to each page as it is, divergence included. Reconciling the dialects is M1's job, not the port's.
3. **Where the email forms post** — now verified:

| Location | Mechanism | Status |
|---|---|---|
| `index.html:548` | POSTs to `moonpixiee.substack.com/api/v1/free` | Working, but fragile — this is Substack's internal endpoint, not a supported API. It can change without notice. The port must preserve it exactly; a later milestone should replace it with Substack's embed or a server-side proxy. |
| `index.html:781`, `work.html:235` | `mailto:moonpixiee.work@gmail.com` | Working. Note the inquiry address is a Gmail — fine, but worth an eventual `luna@housesofluna.com` under §1. |
| `tools.html:736` | `onsubmit="return false;"` | **Dead.** See below. |

**🔴 Production bug, live right now:** the Machine Room's "Request Access" form does nothing. `onsubmit="return false;"` swallows the submit — no endpoint, no storage, no error. Every visitor who has entered their email to request access to Muse, Brand Engine, or Creator OS has typed into a void, and none of them know it. There is no way to recover those addresses; they were never sent anywhere.

Decide before the port: either wire it to something real (Netlify Forms is one toggle away) or remove the form and let those systems read as **not yet open** per §15's lexicon. What the port must *not* do is faithfully reproduce a form that pretends to work. This is the one sanctioned exception to 1:1 fidelity, because the current behavior is a bug, not a design.

Also confirmed by the same search: **no `netlify.toml` exists** — Netlify publishes the repo root with zero configuration, so the new build config starts from nothing rather than migrating something.
4. **The viewport meta and `viewport-fit` settings** per page, feeding §13.2's mobile checklist.

Fastest way to provide this: paste the full contents of `index.html` and any one June-generation page (e.g. `library.html`), or push the repo somewhere I can read it. Two files answer all four questions and unblock Phase P entirely.
