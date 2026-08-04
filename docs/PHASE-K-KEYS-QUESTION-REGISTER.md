# PHASE K — KEYS QUESTION REGISTER
## Identity Audit, Ratified Rulings & Gated Migration Blueprint (Velvet)

Status: Discovery complete. Report only — no auth code, no schema changes, nothing built.
Repo audited: velvet-muse-studio @ main (8271e2d).
Live DB audited: Supabase project pcgzhlxjcjdeweygdzci (resumed read-only 2026-08-04, re-paused after).
Dates: code audit 2026-08-03; live-DB pass 2026-08-04.
Authoring: Velvet session (Claude). Transcription: moonpixiee-site session.

---

## §0 · Purpose & provenance

This register is the ratified record of Phase K: who the resident is at the identity layer, what
must survive any move, the canonical House architecture, and the privacy rulings that shape the
schema. Everything marked VERIFIED was read from the live database or the repo during the audit.
Everything marked RATIFIED is a ruling handed down by Luna and recorded verbatim.

One correction stands on the record: the premise of a "shared, already-live Supabase project" is
DISPROVEN. There is exactly one org and one project, and it is canonical (see §2).

---

## §1 · Current Velvet authentication — VERIFIED (code)

Supabase Auth is the sole identity system. Email/password only.

- Provider: Supabase Auth, email + password only. No OAuth, no magic link. Signup carries
  display_name in user metadata. (auth.functions.ts)
- Password reset: resetPasswordForEmail → ${origin}/reset-password-confirm (origin-relative).
- Session transport: cookie-based via @supabase/ssr; server + browser clients share the cookie jar.
- Session validation: server auth.getUser() revalidates against the Auth server (does not trust the
  cookie JWT); guards fail closed. (auth-server.ts, route-guards.ts)
- Cookie domain: NONE set → host-only cookies. This is the one blocker for cross-subdomain SSO (§4).
- Privilege model: NO service-role client anywhere. All table/storage access runs under the caller's
  own JWT; RLS is the only enforcement. (supabase-server.ts)
- Doc note: VISION.md v2.0 "service_role" line is historical; v2.1 ("no service-role client
  anywhere") matches the code.

---

## §2 · Supabase reality + live security audit — VERIFIED

One org, one project. Org: moonpixiee llc (pktkagixhyecovgwdetx). Project: velvet-muse-studio
(ref pcgzhlxjcjdeweygdzci), ca-central-1, Postgres 17. Was paused; resumed 2026-08-04 for a
read-only audit; re-paused afterward (paused is the safe resting state). The repo .env binds to this
exact ref. No second/"shared/live" project exists — this one project IS the whole of Velvet's
identity and data.

Data graph that must survive any move (rooted at auth.users.id):
  profiles → workspaces → muses → muse_reference_images (+storage)
                                → scenes → scene_content / scene_images (+storage)
                                → projects
Two storage buckets whose object paths embed the user UUID: scene-images (${userId}/${sceneId}/…)
and muse-references (${userId}/…). DB user_id columns and storage object paths are COUPLED — any
identity change that alters a UUID breaks both at once. Preferences live in workspaces
(active_muse_id, studio_type) + muses (current_era/current_mood); there is no separate prefs table.
The Codex is a lens over scenes/scene_content, not a table.

### Verification block A — inventory & Step-0 user count (SQL)
    auth_users        = 1     (with email = 1)
    public base tables = 8
    storage buckets    = 2     (muse-references, scene-images — both public = false)
    storage objects    = 23
  Step 0 (the migration gate) is ANSWERED: exactly one real user (Luna). Single-identity migration →
  lowest risk tier. Must be re-confirmed = 1 immediately before any structural change (§5, K.0).

### Verification block B — RLS, policies, definer functions (SQL) — PASS
  RLS enabled on all 8 tables:
    - 7 foundation tables: one FOR ALL policy each, predicate user_id = (select auth.uid()) on both
      USING and WITH CHECK (profiles keys on id). Ownership enforced on read AND write.
    - projects: 4 granular policies (SELECT/INSERT/UPDATE/DELETE), same auth.uid() = user_id predicate.
  Both storage buckets private (public = false) → objects reachable only via signed URLs.
  relforcerowsecurity = false on every table → table OWNER bypasses RLS; no service-role client uses
    the app, so real-world exposure is low. Noted for anyone who later adds one.

  Security advisors — no ERROR; WARN-level hardening only:
    - archive_muse (SECURITY DEFINER, anon-callable via /rest/v1/rpc): NOT exploitable — body filters
      user_id = (select auth.uid()) on every write, so anon touches 0 rows, no cross-user archive.
    - handle_new_user (SECURITY DEFINER, exposed as RPC): low risk (trigger fn references new; a direct
      RPC call errors), but should not be in the public API.
    - set_updated_at: mutable search_path (archive_muse/handle_new_user already pin search_path).
    - Auth: leaked-password protection (HIBP) disabled — matters, email+password is the only method.
  These are remediations for the parked K.3 hardening task (§5), not this phase.

### Ledger-divergence finding — FLAG
  The live schema is fully built (8 tables, correct RLS, handle_new_user, set_updated_at, archive_muse),
  but supabase_migrations.schema_migrations holds ONE row — 20260719204346
  fix_scenes_status_check_canon_gate — matching NONE of the four committed migration files. The DB was
  built out-of-band. The committed migrations, the ledger, and the live schema are three different
  truths. Ruling: the LIVE schema is the source of truth (§5, K.1).

---

## §3 · Canonical architecture — RATIFIED shape

    housesofluna.com                 → The House (public shell / directory)
    housesofluna.com/velvet          → ceremonial entrance (a PATH on the apex; low-trust)
    velvet.housesofluna.com          → the Velvet app (authenticated; today's velvet-muse-studio)
    auth.housesofluna.com (optional) → stable Auth callback/redirect origin

One Supabase Auth identity across *.housesofluna.com — and it already is one: a single project's Auth.
The work is not "merge identities," it is "make the one session span subdomains" (§4). The House and
Velvet are rooms; a room does not issue its own passport. The entrance stays a path on the apex; the
app stays a subdomain — so the apex is the House/marketing surface and the subdomain is the trust
boundary where the session cookie lives. One root domain is ratified law.

---

## §4 · Cross-subdomain sessions — the actual work (no data migration)

Cookies are host-only today. To make sessions span *.housesofluna.com:
  1. Set cookie domain=.housesofluna.com in the @supabase/ssr setAll options
     (supabase-server-ssr.ts) — env-driven, PROD ONLY (must stay unset on localhost / preview hosts).
     This single change is the whole of House-wide SSO. UUIDs do not move.
  2. Pin the reset redirect to the app subdomain if the House ever initiates reset (don't trust origin).
  3. Register a canonical Auth redirect origin in Supabase (dedicated auth. or always-velvet.).
  4. Cookie flags: domain-wide + SameSite=Lax + Secure + HttpOnly. Correct for same-registrable-domain
     subdomains; no SameSite=None needed.

---

## §5 · Gated migration blueprint — Step 0 gates everything

One project, ONE real user, no service-role dependency → this is domain/session config, not a data
lift. Ordered; safe to halt between steps.

  K.0 — VERIFY (GATE)
    0. Re-confirm auth.users = 1 immediately before any structural change. (Answered today: 1.) If ever
       >1 at cutover, STOP and re-tier — every later step assumes single-user.
    1. Reconcile against this register.
    2. (Done) Resume project; RLS/advisor audit — PASS; WARN-level hardening noted (§2).

  K.1 — VERSION-CONTROL THE SCHEMA (RATIFIED: before ANY structural work)
    3. Capture the LIVE schema as the source of truth via pg_dump --schema-only (introspection), NOT a
       re-type from the TS Database type. The live DB is authoritative; committed files are not.
    4. Commit as ordered migrations, reconciled so the set reproduces the live schema exactly and the
       ledger matches: foundation DDL (7 base tables + their RLS), handle_new_user (+ trigger wiring),
       set_updated_at, archive_muse, moonmark, reference-semantics, projects. Nothing structural
       proceeds until this lands.

  K.2 — DOMAINS & SESSION (no data change)
    5. Point velvet.housesofluna.com at the Velvet deploy; housesofluna.com/velvet at the entrance.
    6. Env-drive cookie domain=.housesofluna.com (prod only); register the Auth redirect origin(s).
    7. Verify a velvet. login is visible at the apex and the reset flow round-trips. → House-wide SSO.

  K.3 — HARDENING (PARKED as its own task; fold in the §2 WARN items)
    8. Revoke EXECUTE on archive_muse / handle_new_user from anon(/authenticated); pin set_updated_at
       search_path; enable leaked-password (HIBP) protection.

  K.4 — ONLY IF a DIFFERENT project is ever forced (NOT indicated)
    9. A true project move = export auth.users (needs Supabase support / auth access), re-map the UUID,
       and rewrite every user_id column AND every storage object path (${userId}/… in both buckets) in
       lockstep, re-issuing signed URLs. High-risk; nothing seen justifies it — the one project IS
       canonical.

---

## §6 · Privacy rulings — RATIFIED (verbatim)

### K-USE-1 — Sealed pages: THE SEAL WINS. (RATIFIED)
  - Sealed pages use client-side encryption. Content is encrypted in the browser before it reaches the
    server; the server stores ciphertext only and never holds the key.
  - The key derives from a resident-held secret (passphrase / device secret). The server never sees it.
  - A recovery phrase is issued at the moment of sealing, with a plain-language warning: losing both
    the key and the recovery phrase means the sealed pages are permanently unrecoverable — by design.
  - "Lost Your Key?" restores House ACCESS (the account), never sealed CONTENT. Account recovery and
    content recovery are separate powers: the House can readmit the resident but cannot reopen the seal.
  - Schema shape: sealed fields store sealed_content (ciphertext) + seal_meta (KDF params, algorithm,
    nonce, recovery-phrase verifier) instead of plaintext. Sealing is per-field, opt-in. Honored
    consequences: sealed content is server-unsearchable (out of Library literal recall) and
    un-regenerable (the Atelier cannot read it). user_id, timestamps, and output_type stay cleartext
    (RLS + indexing). Candidate sealable fields: scene_content.content, muses.lore / identity_profile,
    private letters.

### K-USE-2 — Metadata-only delivery: STRUCTURALLY UNREACHABLE. (RATIFIED)
  - Any delivery / notification / automation surface reads a metadata-only projection
    (scene_id, user_id, output_type, created_at, status, moonmarked_at) and is structurally incapable
    of reading content — enforced by a dedicated role/view with NO SELECT grant on the content columns
    (scene_content.content and any sealed columns). "Structurally unavailable, not merely unused": it is
    a missing grant, not a disabled feature. No content in triggers / webhooks / edge payloads — they
    are fed the metadata view, never the base table. This reinforces K-USE-1: where content is sealed it
    is ciphertext anyway, so the delivery path could not read meaning even if mis-granted.

---

END OF REGISTER — Phase K discovery closed. Structural work begins at K.1 (live schema → VCS).
