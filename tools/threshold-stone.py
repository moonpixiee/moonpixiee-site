"""House of Luna — threshold black-brick/stone masonry texture (R8 language).
Value-neutral relief map (mean ~0.5): mortar joints, per-brick variation, bevel
lit from above, stone tooth, weathering + moisture. Overlay/low-opacity on the
near-black wall so the lantern discloses the masonry and the dark conceals it.
Procedurally crafted — no stock, no download. -> public/threshold-stone.webp
"""
import numpy as np
from PIL import Image

W, H = 1400, 1400
rng = np.random.default_rng(77)
bw, bh, m = 132, 46, 8                 # brick w, h, mortar
py, px_ = bh + m, bw + m
yy, xx = np.mgrid[0:H, 0:W]
row = yy // py
offset = np.where(row % 2 == 0, 0, px_ // 2)
xs = xx + offset
col = xs // px_
cy = yy % py
cx = xs % px_
mortar = (cx >= bw) | (cy >= bh)

# per-brick pseudo-random value (hash of row,col)
h = np.sin(row * 928.3 + col * 1471.7) * 43758.5
brick = (h - np.floor(h)) - 0.5        # -0.5..0.5

v = np.where(mortar, 0.30, 0.56 + 0.12 * brick)
# bevel — light from above: top edge of each brick catches light, base in shadow
top = np.clip(1 - cy / 6.0, 0, 1) * (~mortar)
bot = np.clip(1 - (bh - cy) / 5.0, 0, 1) * (~mortar)
v = v + 0.12 * top - 0.14 * bot

def fractal(oct, pers):
    out = np.zeros((H, W)); amp = 1.0; tot = 0.0
    for o in range(oct):
        c = 2 ** (o + 1)
        s = rng.random((c + 1, c + 1))
        im = Image.fromarray((s * 255).astype('uint8')).resize((W, H), Image.BILINEAR)
        out += np.asarray(im, float) / 255 * amp; tot += amp; amp *= pers
    return out / tot

tooth = fractal(8, 0.66); tooth = (tooth - tooth.min()) / (tooth.max() - tooth.min())
v += 0.11 * (tooth - 0.5)              # stone grain across the face

# weathering — dark blotches, faint moisture toward the base, a few worn-pale bricks
for _ in range(6):
    x0, y0 = rng.integers(0, W), rng.integers(0, H); r = rng.integers(200, 520)
    v -= rng.uniform(0.05, 0.12) * np.exp(-(((xx - x0) ** 2 + (yy - y0) ** 2) / (r * r)))
v -= 0.08 * np.clip((yy - H * 0.62) / (H * 0.38), 0, 1)
v += rng.normal(0, 0.014, (H, W))
v = np.clip(v, 0.12, 0.82)

g = (v * 255).astype('uint8')
# a whisper of warmth so the stone isn't clinical grey under the amber lantern
rgb = np.stack([np.clip(g * 1.03, 0, 255), g, np.clip(g * 0.95, 0, 255)], -1).astype('uint8')
out = Image.fromarray(rgb, 'RGB')
import os
for q in (72, 64, 56, 48, 42, 36):
    out.save('/Users/luna/moonpixiee-site/public/threshold-stone.webp', 'WEBP', quality=q, method=6)
    kb = os.path.getsize('/Users/luna/moonpixiee-site/public/threshold-stone.webp') / 1024
    if kb <= 115:
        print(f'quality {q}: {kb:.1f} KB  mean {v.mean():.2f}  ({W}x{H})'); break
    print(f'quality {q}: {kb:.1f} KB (too big, stepping down)')
