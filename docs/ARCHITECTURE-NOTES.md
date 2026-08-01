# ARCHITECTURE-NOTES.md

Code-level architectural notes and reservations. Nothing here changes anything
visible; the ratified visual exclusions stand absolutely.

---

## The Room network — a room is a TYPE, not a one-off

The Grand Hall doors and the House Map are generated from a single data structure
in `src/pages/index.html` (the `ROOMS` array + `PASSAGES`), rendered by a reusable
`doorHTML(room)` component. A room is a **type**:

```
{ id, name, route, leak, hue, tier[, note] }
```

- `leak` is a **vocabulary** (`page` · `fabric` · `glow` · `task` · … future
  `petals` · `handwriting` · `shimmer`), styled by `.door[data-leak="…"]`.
- `tier` is `primary | secondary`, styled by `.door[data-tier="…"]`.

Future rooms **extend `ROOMS`** (and add a leak style if the motif is new) — the
Hall is not rebuilt. The static door/map markup is the no-JS / crawler fallback and
is replaced from `ROOMS` on load. Doors remain real `<a href>` links (accessible,
navigable without JS).

## Future-room architectural RESERVATION (per PHASE-K-KEYS-QUESTION-REGISTER.md KQ-9)

This is **documentation + component generality ONLY**. There is **no auth, no
profiles, no database, no network features in Phase R**, and **nothing visible
changes** — no draft concepts, no reserved corridors, no upstairs passage, no
labels, no hints of Luna's Room or Your Room in any state or viewport. The existing
acceptance test (**zero Your Room elements in any state or viewport**) remains in
force. The Hall's ratified breathing-room composition already accommodates future
growth without exposing it.

**Reserved schema shape (future, not implemented).** When member Rooms eventually
exist, a room record will carry **owner / handle / visibility**, and will extend the
same `ROOMS` type system above. It will **NEVER** carry:

- follower counts,
- popularity scores,
- ranking / sort-by-engagement fields.

The House is not a feed. The reservation exists so the door/room system can grow to
member Rooms someday without rebuilding the Hall — nothing more.

See also: `PHASE-K-KEYS-QUESTION-REGISTER.md` (KQ-9 Room network constitution; P-1
ambient state-change proposal).

## House Map — protection note (ratified, 1 Aug 2026)

The House Map is **never** restyled into a conventional sidebar, hamburger menu,
mega-menu, or nav drawer. **It is a place** — a quiet room-within-the-House you open
to see the doors, the Passages, and the way back to the threshold. It stays
overlay-based, instant, atmospheric, and House-material (stone, brass, the Cast).
Convention never outranks atmosphere here; a "standard nav pattern" is a
regression, not an improvement.

