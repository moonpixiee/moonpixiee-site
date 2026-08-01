"""House of Luna — threshold aged-plaster texture generator.
Produces public/threshold-plaster.webp: a value-neutral (mean ~0.5) aged-
plaster/stone relief map, procedurally crafted (no stock, no download).
Used as the ONE Annex-authorized texture layer on the threshold wall
(overlay, low opacity). Run with a venv that has numpy + Pillow.
Provenance for PHASE-R-ENVIRONMENTAL-DESIGN patina pass, 31 Jul 2026.
"""
import numpy as np
from PIL import Image, ImageFilter

W, H = 1500, 1100
rng = np.random.default_rng(20260731)

def fractal(octaves, persistence, interp=Image.BILINEAR):
    out = np.zeros((H, W)); amp = 1.0; tot = 0.0
    for o in range(octaves):
        cells = 2 ** (o + 1)
        small = rng.random((cells + 1, cells + 1))
        img = Image.fromarray((small * 255).astype('uint8')).resize((W, H), interp)
        out += (np.asarray(img, float) / 255.0) * amp
        tot += amp; amp *= persistence
    return out / tot

def norm(a): return (a - a.min()) / (a.max() - a.min())

# mid-scale unevenness + strong FINE tooth (the relief the raking lamp discloses)
uneven = norm(fractal(4, 0.5))                 # broad plaster waves
tooth  = norm(fractal(9, 0.72))                # granular surface, kept crisp
base   = 0.5 * uneven + 0.5 * tooth

# aged plaster as a value-NEUTRAL relief map (mean ~0.5) for overlay on a dark
# wall: it adds material without shifting the wall's value. Reads as grey stone.
v = 0.40 + 0.22 * base          # ~0.40..0.62, mean ~0.5

# stains & water-marks — a few soft darker patches (use, weather)
yy, xx = np.mgrid[0:H, 0:W]
for _ in range(7):
    cx, cy = rng.integers(0, W), rng.integers(0, H)
    r = rng.integers(180, 460)
    d2 = ((xx - cx) ** 2 + (yy - cy) ** 2) / float(r * r)
    blob = np.exp(-d2)
    v -= rng.uniform(0.05, 0.13) * blob      # darker stain
# a couple of lighter worn/limewashed patches
for _ in range(3):
    cx, cy = rng.integers(0, W), rng.integers(0, H)
    r = rng.integers(220, 520)
    d2 = ((xx - cx) ** 2 + (yy - cy) ** 2) / float(r * r)
    v += rng.uniform(0.03, 0.07) * np.exp(-d2)

# fine grain + sparse pitting (plaster imperfection)
v += rng.normal(0, 0.02, (H, W))
pits = rng.random((H, W))
v -= (pits > 0.9985) * rng.uniform(0.10, 0.22, (H, W))   # tiny dark pinholes
v = np.clip(v, 0.20, 0.80)

img = Image.fromarray((v * 255).astype('uint8'), 'L').filter(ImageFilter.GaussianBlur(0.3))
# very slight warm tint so the plaster isn't clinical grey under multiply
g = np.asarray(img, float)
rgb = np.stack([np.clip(g*1.02,0,255), g, np.clip(g*0.955,0,255)], -1).astype('uint8')
out = Image.fromarray(rgb, 'RGB')

for q in (74, 66, 58, 50, 44):
    out.save('/Users/luna/moonpixiee-site/public/threshold-plaster.webp', 'WEBP', quality=q, method=6)
    import os
    kb = os.path.getsize('/Users/luna/moonpixiee-site/public/threshold-plaster.webp') / 1024
    print(f'quality {q}: {kb:.1f} KB')
    if kb <= 118:
        print(f'-> kept quality {q}, {kb:.1f} KB, {W}x{H}')
        break
