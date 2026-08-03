"""House of Luna — Grand Hall masonry, cut from the Threshold itself.

DR-PS-1: the Hall must wear the Threshold's ACTUAL weathered masonry, not a
procedural gray brick in a matching tone. The seam test (LAW 9): crossing the
Threshold should read as the same wall learning new light. So we cut a panel of
real weathered brick from the lit strip flanking the arch in the R8 photograph
(public/threshold/desktop-2560.webp), lift it from near-black to interior light
(the House "earns its light" inside), keep its warmth and grain, and wrap-blend
it seamless so it repeats as a wall. Per-door moods stay light-washes OVER this
one stone. -> public/hall-stone.webp
"""
import numpy as np
from PIL import Image, ImageFilter

SRC = 'public/threshold/desktop-2560.webp'
OUT = 'public/hall-stone.webp'

im = Image.open(SRC).convert('RGB')
W, H = im.size

# --- the panel: clean weathered brick in the lit strip right of the arch,
#     trimmed past the ivy that creeps the arch-side edge. ---
x0, y0, x1, y1 = int(0.681 * W), int(0.05 * H), int(0.762 * W), int(0.86 * H)
panel = np.asarray(im.crop((x0, y0, x1, y1))).astype(np.float64)

# --- lift from near-black to interior light, preserving hue (scale luma) ---
lum = panel @ np.array([0.299, 0.587, 0.114])
bp = np.percentile(lum, 8)          # mortar / shadow floor
wp = np.percentile(lum, 99.3)       # brightest brick face
norm = np.clip((lum - bp) / max(wp - bp, 1e-6), 0, 1)   # 0..1 relief
# gamma < 1 opens the mid shadows so brick faces read without blowing highlights
norm = norm ** 0.82

# target interior stone: warm, dark, present — but the Hall stays moody (light
# POOLS, it doesn't flood). Faces lift only enough to read as brick under the
# lantern; the CSS vignette + mask do the rest. Between --stone-1 and --stone-2.
BASE = np.array([12.0, 9.0, 7.0])       # deepest mortar/shadow (warm black)
SPAN = np.array([50.0, 36.0, 26.0])     # brick-face reach — warm amber-brown
stone = BASE + norm[..., None] * SPAN

# graft the photo's own colour variation back on (per-pixel warmth wobble),
# so it isn't a flat tint of one hue — real brick has brick-to-brick colour.
chroma = panel - lum[..., None]         # signed colour deviation from its luma
stone = stone + chroma * 0.6
stone = np.clip(stone, 0, 255)

tile = Image.fromarray(stone.astype('uint8'))

# --- make it seamless: wrap-blend each axis with a feathered cross-fade so it
#     repeats as a wall with no seam line (and no mirror symmetry). ---
def wrap_blend(img, feather=0.18):
    a = np.asarray(img).astype(np.float64)
    h, w, _ = a.shape
    # X: roll by half, blend the (now-central) former seam with a cosine feather
    for axis, n in ((1, w), (0, h)):
        rolled = np.roll(a, n // 2, axis=axis)
        fw = max(2, int(n * feather))
        ramp = 0.5 - 0.5 * np.cos(np.linspace(0, np.pi, fw))   # 0..1
        mask = np.ones(n)
        mask[:fw] = ramp
        mask[-fw:] = ramp[::-1]
        shape = (1, n) if axis == 1 else (n, 1)
        m = mask.reshape(*shape, 1)
        a = a * m + rolled * (1 - m)
    return Image.fromarray(np.clip(a, 0, 255).astype('uint8'))

tile = wrap_blend(tile, feather=0.12)
# a whisper of blur knocks back webp/jpeg brick-edge ringing without softening coursing
tile = tile.filter(ImageFilter.GaussianBlur(0.25))

# keep the coursing crisp: output wider than it renders so the browser downscales
# (sharper) rather than upscaling this dark low-detail source.
tile = tile.resize((680, tile.height * 680 // tile.width), Image.LANCZOS)
tile.save(OUT, 'WEBP', quality=88, method=6)

a = np.asarray(tile).astype(float)
print(f'wrote {OUT} size={tile.size} mean={a.mean(axis=(0,1)).round(1)} '
      f'lum_mean={a.mean():.1f} lum_p95={np.percentile(a,95):.0f}')
