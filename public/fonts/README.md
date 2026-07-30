# Self-hosted fonts — The Cast (LAW 8)

Self-hosted WOFF2 subsets of the House's four typographic voices. No third-party
font CDN is used anywhere in the House (the Google Fonts `<link>`s were removed
during the Phase R shell pass). Serving these ourselves is the LAW 8 requirement:
one shared cast, delivered by the House, not borrowed from Google each visit.

All four families are **SIL Open Font License 1.1**. The full license for each
travels with the files in `licenses/` (OFL requirement). Copyright holders:

| Voice | Family | Copyright |
|---|---|---|
| Narrator  | Source Serif 4     | Adobe (SIL OFL 1.1) |
| Architect | Cormorant Garamond | 2015 the Cormorant Project Authors |
| Librarian | Jost               | 2020 The Jost Project Authors |
| Machine   | IBM Plex Mono      | © 2017 IBM Corp., Reserved Font Name "Plex" |

## Cut in this pass

| File | Family / weight | on-disk |
|---|---|---|
| `source-serif-4-400.woff2`         | Narrator 400          | ~30 KB |
| `source-serif-4-400-italic.woff2`  | Narrator 400 italic   | ~24 KB |
| `cormorant-garamond-400.woff2`     | Architect 400         | ~35 KB |
| `cormorant-garamond-500.woff2`     | Architect 500         | ~35 KB |
| `cormorant-garamond-400-italic.woff2` | Architect 400 italic | ~24 KB |
| `jost-400.woff2`                   | Librarian 400         | ~9 KB |
| `jost-500.woff2`                   | Librarian 500         | ~10 KB |
| `ibm-plex-mono-400.woff2`          | Machine 400           | ~9 KB |

Weight set is the near-term minimum for the threshold + shell; extend by cutting
more weights with the same recipe when a room's visual pass needs them.

## Subset recipe (reproducible)

Source: the four Google Fonts static TTF downloads (in `~/Downloads`, the
`Cormorant_Garamond,IBM_Plex_Mono,Jost,Source_Serif_4.zip` bundle). Subset with
`fonttools` (pyftsubset) + `brotli`:

```
pyftsubset <family>.ttf \
  --output-file=<name>.woff2 --flavor=woff2 \
  --unicodes="U+0000-00FF,U+2010-2014,U+2018-201F,U+2022,U+2026,U+2039-203A,U+2192,U+20AC" \
  --layout-features='*' --no-hinting --desubroutinize
```

Unicode coverage: Basic Latin + Latin-1 Supplement (incl. `·` U+00B7), en/em
dashes, all curly quotes, ellipsis, bullet, guillemets, rightwards arrow, euro.
Verified: each subset carries 207 glyphs with the em/en dash and curly quotes
present.

`@font-face` blocks live in `src/styles/tokens.css` (activated once the binaries
landed). `font-display: swap` on every face.
