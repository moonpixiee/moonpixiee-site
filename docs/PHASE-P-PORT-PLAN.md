# PHASE-P-PORT-PLAN.md

Static HTML → Astro, at 1:1 fidelity
Version 1.0
Status: **Awaiting approval — nothing begins until sign-off**

Governed by HOUSE_ARCHITECTURE.md §13 (ratified doctrine) and §13.1a (acceptance test).

---

# 0. Scope guard

In scope: a 1:1 port of seven pages and sixteen images from flat HTML to Astro on Netlify.

**Explicitly out of scope, per the ratified rule:** redesign · token changes · lexicon changes · Supabase · Shopify · new rooms · route changes · the House Map · anything from Milestone 1 onward.

One pre-port production correction is ratified: removal of the dead form at `tools.html:736`, per **Defect Record DR-001** (§7a). It is applied to `main` *before* the port branch exists, so Phase P ports the corrected state — the fidelity rule is unbroken because the port copies production as it stands at baseline.

---

# 1. Platform decision — FINAL

**Astro, on Netlify.**

| Basis | Verified fact |
|---|---|
| Nothing to conflict with | No framework, no build step, no `package.json` in the repo |
| Cheapest possible 1:1 port | `.astro` is a near-superset of HTML; the seven files paste in largely as-is |
| Matches the House's shape | Content-first with future islands of interactivity (writing spaces, saved objects, AI Luna) |
| Serves §4 and §24 | Static HTML output by default — fast, calm, light |
| Clean Netlify config | No existing `netlify.toml` to migrate; Astro's adapter-free static output needs only two lines |

Next.js was the alternative; nothing in the verified repo favors it, and its runtime weight buys nothing this House needs yet. Decision closed.

---

# 2. Port structure

## 2.1 Target repository layout

```
moonpixiee-site/
├── astro.config.mjs
├── package.json
├── netlify.toml                  ← new; §5.1
├── .gitignore                    ← extended: node_modules/, dist/, .DS_Store
├── README.md
├── public/                       ← served verbatim at site root
│   ├── glow-bodypeel.jpg
│   ├── glow-dove.jpg
│   ├── glow-eos.jpg
│   ├── glow-johnsons.jpg
│   ├── glow-kojic.jpg
│   ├── glow-nivea.jpg
│   ├── glow-vagisil.jpg
│   ├── lip-fenty.jpg
│   ├── lip-nyx-gloss.jpg
│   ├── lip-nyx-liner.jpg
│   ├── product-cleanser.jpeg
│   ├── product-moisturizer.jpeg
│   ├── product-serum.jpeg
│   ├── product-spf.jpeg
│   └── product-toner.jpeg
├── src/
│   └── pages/
│       ├── index.html
│       ├── library.html
│       ├── edit.html
│       ├── becoming.html
│       ├── letters.html
│       ├── tools.html
│       └── work.html
└── _legacy/                      ← the seven original HTML files, untouched,
                                     referenced by nothing (§13 step 7)
```

## 2.2 Porting rules — what "1:1" means mechanically

1. **Each page's inline `<style>` block moves with that page.** No consolidation, no shared stylesheet, no components. The June and July pages are different dialects (HOUSE_ARCHITECTURE.md §1.4.1) and each is ported faithful to itself. Reconciliation is M1's job.
2. **No layout extraction.** The duplicated header/footer stays duplicated seven times. Componentizing is Phase-2 work; doing it now would silently normalize the June/July divergence and break the fidelity oracle.
3. **No Astro features.** No `<Layout>`, no content collections, no image optimization, no `astro:assets`. Pages are plain `.html` files in `src/pages/`, which Astro serves **unprocessed** — `.astro` carriers were rejected because Astro processes them (scoped styles, extracted/hashed CSS, minification), breaking byte-identity. See AM-001 (§9).
4. **`<head>` copied verbatim per page** — title, meta description, OG tags, Twitter card, viewport, favicon references, any CDN links. Diffed against the original after build (§6).
5. **`compressHTML: false`** in `astro.config.mjs` during Phase P, so built output can be near-textually diffed against the originals. Turn it on later.

## 2.3 Route map — every existing route and its `.html` equivalent

| Live URL (must not change) | Currently served from | Source (`src/pages/`) | Built output |
|---|---|---|---|
| `/` | `index.html` | `src/pages/index.html` | `dist/index.html` |
| `/library` | `library.html` via pretty-URLs | `src/pages/library.html` | `dist/library.html` |
| `/edit` | `edit.html` | `src/pages/edit.html` | `dist/edit.html` |
| `/becoming` | `becoming.html` | `src/pages/becoming.html` | `dist/becoming.html` |
| `/letters` | `letters.html` | `src/pages/letters.html` | `dist/letters.html` |
| `/tools` | `tools.html` | `src/pages/tools.html` | `dist/tools.html` |
| `/work` | `work.html` | `src/pages/work.html` | `dist/work.html` |

**The subtlety worth knowing:** with `build.format: 'file'` (AM-002), the port emits a **flat** `dist/<page>.html` — the same file layout the production static site has now — so Netlify's pretty-URL behavior is byte-for-byte the same as production:

- **No-slash canonical.** `/library` serves 200; `/library/` 301s to `/library`. Production behaves identically. (Astro's default *directory* format inverted this — `/library` 301'd to `/library/` — which broke `/edit`'s bare-relative image `src` on the canonical slashed URL. That is why AM-002 exists.)
- **`/library.html` serves 200** (the file exists), exactly as production does today. No `.html → extensionless` redirects are needed or wanted; production never redirected them.

## 2.4 Asset paths — every root-level asset that must remain stable

All sixteen images live at the site root today and are referenced by inline `src` attributes and potentially hotlinked from outside. **All sixteen go in `public/` and keep their exact root-level names.** No hashing, no `astro:assets`, no relocation.

Stability list (verbatim): `glow-bodypeel.jpg` · `glow-dove.jpg` · `glow-eos.jpg` · `glow-johnsons.jpg` · `glow-kojic.jpg` · `glow-nivea.jpg` · `glow-vagisil.jpg` · `lip-fenty.jpg` · `lip-nyx-gloss.jpg` · `lip-nyx-liner.jpg` · `product-cleanser.jpeg` · `product-moisturizer.jpeg` · `product-serum.jpeg` · `product-spf.jpeg` · `product-toner.jpeg`

(Fifteen product images; the sixteenth root file, `project-tree.txt`, is inventory debris — delete it rather than port it.)

Mixed `.jpg` / `.jpeg` extensions preserved exactly as-is. Normalizing them breaks hotlinks for zero benefit.

Also stable: any favicon or webmanifest reference found in the `<head>` inspection (§7, item 1).

## 2.5 External endpoints preserved verbatim

| What | Where | Rule |
|---|---|---|
| Substack subscribe POST | `index.html` | **Preserved byte-for-byte during Phase P.** 🚩 **Flagged for post-Phase-P replacement** — it targets `moonpixiee.substack.com/api/v1/free`, an unsupported internal Substack endpoint that can break without notice. Tracked as a Milestone 2/3 work item: replace with Substack's official embed or a server-side proxy. |
| `mailto:moonpixiee.work@gmail.com` | `index.html`, `work.html` | Preserved exactly. Branded-address change is a later copy/operations decision, not port work. |
| Amazon affiliate links via `links.moonpixiee.com` | `edit.html` | Preserved with **exact query strings** — parameters are revenue |
| Gumroad link | `library.html` | Preserved (retirement is M5.5, not Phase P) |
| Substack / Instagram links | various | Preserved |

---

# 3. Netlify production settings — verified via connector

Re-read from the connector this session:

| Setting | Value | Implication |
|---|---|---|
| Project | `moonpixiee-site` / `76f26cfa…ec67` | — |
| Primary domain | housesofluna.com | Unchanged |
| Branch deploys | Enabled — `main--moonpixiee-site.netlify.app` exists | Branch deploy URLs available for staging |
| Current deploy | `6a5b06cb…`, state `ready` | **This deploy ID is the rollback target — record it** |
| Forms | Not enabled | Consistent with the dead form finding |
| Password protection | Not available (free tier) | Staging URL will be public-but-obscure; see §5.3 |
| Build command / publish dir | No `netlify.toml` in repo → publishing repo root, no build | Replaced by §5.1 |

The connector exposes project-level state, not the build-settings pane. Given no `netlify.toml` and a flat repo, the current config is necessarily *no build command, publish root* — there is nothing else it could be. The new `netlify.toml` supersedes whatever the UI holds, which is the desired end state regardless.

---

# 4. Branch and environment plan for Phase P

```
main                → production, current static site — UNTOUCHED until cutover
port/astro          → the port branch
                      deploys automatically at: port-astro--moonpixiee-site.netlify.app
```

Full dev/staging environment architecture (HOUSE_ARCHITECTURE.md §3.3) is **not** built during Phase P — no database exists yet, so branch deploys are sufficient staging. The heavier environment work lands with E3/Supabase, where it's actually needed.

---

# 5. Configuration to be created

## 5.1 `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

No `[[redirects]]`. With `build.format: 'file'` (§5.2, AM-002) the flat `dist/<page>.html` output reproduces production's layout, so Netlify already serves `/<page>`, `/<page>.html`, and 301s `/<page>/ → /<page>` natively — the same as production. The earlier `/{page}.html → /{page}` 301s were inert under this layout (an unforced redirect never fires against an existing file) and are removed so the config states production's real behavior rather than a no-op. The `/index.html` rule was already dropped in an earlier ruling.

## 5.2 `astro.config.mjs`

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://housesofluna.com',
  compressHTML: false,          // Phase P only — keeps output diffable
  trailingSlash: 'ignore',
  build: { format: 'file' },    // flat dist/<page>.html; no-slash canonical (AM-002)
});
```

## 5.3 Staging privacy note

Free tier means the branch deploy URL is public if guessed. For a 1:1 copy of an already-public site this is a non-issue. It becomes an issue at E3 when staging holds a database — priced into HOUSE_ARCHITECTURE.md §3.5 already.

---

# 6. Rollback test and verification protocol

## 6.1 Rollback test — before any port work

1. Record current production deploy ID: **`6a68756ae12dd0000808542a`** — the post-DR-001 corrected state. *(The pre-correction deploy `6a5b06cb…` is superseded as a rollback target: rolling back to it would resurrect the dead form.)*
2. Tag the current commit: `git tag pre-port-baseline && git push --tags`.
3. Push a trivial change (whitespace in README) to `main`. Let it deploy.
4. In the Netlify UI: **Deploys → select `6a5b06cb…` → "Publish deploy."** Confirm production reverts. Confirm the site renders.
5. Re-publish the newer deploy. Rollback is now *proven*, not assumed — §13 step 1 satisfied.

This tests the escape hatch on the real production site with a harmless change, before anything is at stake.

## 6.2 Verification — the §13.1a acceptance test, operationalized

For **each of the seven pages**, on the `port/astro` branch deploy:

**Automated (scripted once, run repeatedly):**
- [ ] `curl -s` production page and port page; diff rendered `<head>` — title, meta description, OG, Twitter, viewport, canonical
- [ ] Extract and diff all `href` / `src` attributes — every link and asset URL identical
- [ ] All 15 image URLs return 200 at root paths
- [ ] All seven `.html` redirects return 301 to the extensionless route
- [ ] `/library` and `/library/` both 200, no redirect loop

**Visual:**
- [ ] Side-by-side at desktop width
- [ ] Side-by-side at 390px
- [ ] Full-page screenshot overlay per page (production vs port)

**Mobile, on real devices per §13.2:**
- [ ] iPhone Safari — layout, menu, horizontal overflow
- [ ] Android Chrome — same
- [ ] **Instagram in-app browser**, iOS and Android — the actual arrival path
- [ ] Substack in-app browser
- [ ] Safe-area behavior on a notched device
- [ ] OS text size increased one step — nothing breaks

**Behavioral:**
- [ ] Substack form on `/` submits successfully (test with a real disposable email, confirm it lands in Substack)
- [ ] `mailto:` links open a compose window
- [ ] Affiliate links resolve with query strings intact
- [ ] Any menus/toggles behave identically
- [ ] `/tools`: no form element present; "ACCESS — NOT YET OPEN" status line renders identically to production (DR-001)

**Sign-off:** one row per page — the port does not merge until all seven rows pass in full. Any failure means fix and re-verify; there is no "close enough."

## 6.3 Cutover and monitoring

1. Merge `port/astro` → `main`. Netlify builds and deploys.
2. Immediately re-run the automated checks against production.
3. Monitor for ≥ 24h: Netlify deploy log, 404s in the traffic panel, a manual click-through of all seven pages and the redirect set.
4. Rollback trigger: any acceptance-test regression on production → **Publish deploy `6a68756a…542a`** (or the `pre-port-baseline` tag), diagnose on the branch, retry. Rollback is one click and was proven in §6.1.
5. `_legacy/` files remain in the repo ≥ 2 weeks post-stability.

---

# 7. Decisions required from you before the port begins

1. ~~The `<head>` inspection~~ — **RESOLVED.** Verified findings:

   **CDN dependencies: Google Fonts only.** No Tailwind CDN, no icon libraries, no external scripts. The port's only external dependency is the fonts, preserved verbatim per page:
   - Six pages load **Cormorant Garamond** (300/400/500 + italics) and **Jost** (300/400)
   - `tools.html` alone loads a `preconnect` hint plus an extended set: **Jost 500** and **IBM Plex Mono** (400/500) — the July divergence, visible in the `<head>`

   **A finding worth smiling at:** the live font stack already maps onto Constitution §7's roles — Cormorant Garamond is the Editorial Serif, Jost the Sans, IBM Plex Mono the Machine Room monospace, already loaded *only* by the Machine Room's page. Three of the four constitutional voices exist in production; only Gothic is missing. M1 inherits real fonts, not placeholders.

   **Viewport meta is identical on all seven pages** (`width=device-width, initial-scale=1.0`) — one less mobile variable. Note: the earlier `viewport-fit=contain` observation came from moonpixiee.com (Beacons), not this site; the §13.2 safe-area check stays but is low-risk.

   **No favicon link on any page.** Either none exists or browsers are falling back to `/favicon.ico` by convention. Check whether `housesofluna.com/favicon.ico` returns 200; whatever the answer, the port reproduces it. Adding one is a later milestone.

   **One residual, non-blocking:** the grep pattern (`<script src`) wouldn't surface *inline* `<script>` blocks, and the dead form's `onsubmit` handler implies at least some inline JS exists in `tools.html`. This doesn't gate the port — pages are carried over wholesale, so inline scripts port automatically — and the behavioral checks in §6.2 will catch any that misbehave.

2. ~~The dead form on `/tools`~~ — **RESOLVED, ratified.** Remove the form; replace with the constitutional **not yet open** state. No Netlify Forms, no access-request collection — these systems have no defined access program, fulfillment process, or launch date, so collecting requests would create an obligation nothing exists to fulfill. This is **the only approved pre-port production correction**, applied to the static site on `main` *before* the port branch is created, so that Phase P ports the corrected state.

---

## 7a. Defect Record DR-001

| Field | Value |
|---|---|
| **Defect** | "Request Access" form performs no action. `onsubmit="return false;"` swallows every submission — no endpoint, no storage, no error shown to the visitor. The form presented as functional while discarding all input. |
| **Route / location** | `/tools` — `tools.html`, line 736: `<form class="access-form" onsubmit="return false;">` |
| **Introduced** | Unknown; present in the `tools.html` rewrite of 17–18 July 2026 at the latest |
| **Discovered** | 28 July 2026, via repository form-action audit during Phase P pre-flight |
| **Data recovery** | **None possible — confirmed.** Submissions were never transmitted or stored anywhere: no network request, no local persistence, no logs. Every email address entered into this form since it went live is unrecoverable. |
| **Resolution** | Form removed entirely. Replaced with a static status line in the Machine Room's existing system register. Shipped as two commits: `f8f7201` (form element + inline JS + stale TODO removed, two-line status block added) and `37622e7` (orphaned `.access-form` / `.access-input` / `.access-btn` CSS removed — 20 lines, verified unused before deletion; `.access-note` retained as still-referenced). |
| **Corrected in production** | **28 July 2026.** Deploys `6a68747a…02e1` (form removal) and `6a68756a…542a` (CSS cleanup), both `ready`, verified via Netlify connector. Live acceptance checks passed: `access-form` → 0, `NOT YET OPEN` → 1. |
| **Explicitly not done** | No Netlify Forms, no collection mechanism of any kind, per ratified instruction — no access program exists to fulfill requests. |

**Replacement copy** — styled with the page's existing status classes, monospace, no new design:

```
ACCESS — NOT YET OPEN
These systems are in development. Doors will open when they are ready.
```

Implementation rule: delete the `<form class="access-form">…</form>` block and any inline JS that referenced it; render the two lines above using classes already present on the page (the same treatment as the existing `04 Systems Detected / 01 Online` status line). No new CSS. The correction must look like the Machine Room already looked — this is a bug fix, not a preview of M2.

**Pre-port correction sequence:**
1. Apply the fix to `tools.html` on `main`.
2. Deploy; verify on production: form gone, status line renders, page otherwise unchanged, mobile intact.
3. Record the deploy date in DR-001 above.
4. **Then** tag `pre-port-baseline` — the baseline must contain the correction, or the port's fidelity oracle would compare against the bug.
5. Create `port/astro` from the corrected `main`.

3. **`project-tree.txt` and `.DS_Store`** — confirm delete + gitignore. (Assumed yes unless you object.)

4. **Approve this checklist.** Per your instruction and §13, no port work begins until you do.

---

# 8. Execution checklist — the actual work, in order

Pre-flight: **✅ COMPLETE — 28 July 2026**
- [x] **DR-001 correction applied to `main` and deployed** — commits `f8f7201` + `37622e7`, deploys `6a68747a…` + `6a68756a…`, both ready
- [x] DR-001 verified on production: `access-form` → 0, `NOT YET OPEN` → 1
- [x] Repository clean: `project-tree.txt` never committed and removed; `.DS_Store` untracked and ignored (verified pre-existing)
- [x] `pre-port-baseline` tag created at `37622e7` and pushed
- [x] `port/astro` branch created and pushed with upstream tracking
- [ ] ⚠️ Rollback test (§6.1) — **skipped at operator's discretion; accepted risk.** Mechanism exists (Netlify publish-deploy), unexercised. First real use would be during cutover.
- [x] Checklist approved

Port:
- [ ] `port/astro` branch created
- [ ] Astro scaffolded; `package.json`, `astro.config.mjs`, `netlify.toml` per §5
- [ ] `.gitignore` extended
- [ ] 15 images moved to `public/`, filenames byte-identical
- [ ] `project-tree.txt` deleted; originals copied to `_legacy/`
- [ ] Seven pages ported per §2.2 rules — including the corrected `/tools` state (DR-001), never the broken form
- [ ] Branch deploy builds green

Verify:
- [ ] Automated checks pass, all seven pages
- [ ] Visual checks pass, all seven pages
- [ ] Mobile checks pass on real devices, including in-app browsers
- [ ] Behavioral checks pass, including a live Substack form test
- [ ] Sign-off table complete

Cutover:
- [ ] Merge to `main`
- [ ] Post-deploy automated re-check
- [ ] 24h monitoring window clean
- [ ] Two-week `_legacy/` retention clock started

Then, and only then: **Milestone 1.**

---

# 9. Amendments

**AM-001 (28 July 2026):** §2's `.astro` carrier prescription failed the §13.1a byte-identity oracle (Astro processes `.astro` files: scoped styles, extracted CSS, minification). Pages ported as `.html` in `src/pages/`, which Astro serves unprocessed. `.astro` conversion deferred to M1, where processing is acceptable because fidelity to the old design is no longer the goal.

**AM-002 (28 July 2026):** §2.3's *directory* build output (`dist/<page>/index.html`) failed the §13.1a "same routes / same behavior" test. It inverted trailing-slash canonicalization — production is no-slash canonical (`/edit` → 200, `/edit/` → 301 → `/edit`), but the directory build made `/edit/` canonical and 301'd `/edit` to it. On the slashed canonical URL, `edit.html`'s bare-relative image `src` (`product-cleanser.jpeg`) resolved to `/edit/product-cleanser.jpeg` → 404, breaking all 15 Edit product images. Caught on the PR #1 deploy preview during §6.2. Fix: `build.format: 'file'` in `astro.config.mjs` → flat `dist/<page>.html`, reproducing production's pretty-URL layout exactly. Consequently the six `/{page}.html → /{page}` 301s became inert and were removed (§5.1). No page content changed; all seven pages remain byte-identical.
