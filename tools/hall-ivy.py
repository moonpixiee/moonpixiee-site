"""House of Luna — Grand Hall ivy/growth accent, cut from the Threshold.

Hall Patina Pass (LAW 9 Weathering). The R8 photograph carries no verdant ivy —
only DARK aged growth clinging to the arch jambs (olive-brown leaf clusters,
disclosed by light, concealed by dark). That is the law-true material: the Hall
must not turn green (LAW 5 — green is Moss & Moon's, and that room isn't built).
So we cut the actual dark growth from the left jamb, build a feathered alpha that
keeps the leaves and drops the flat recess, lift it just enough to read under a
lantern, and save a transparent sprite to hang at the door surrounds.
-> public/hall-ivy.webp  (RGBA)
"""
import numpy as np
from PIL import Image, ImageFilter

im = Image.open('public/threshold/desktop-2560.webp').convert('RGB')
W, H = im.size
# the growth column on the left jamb (drop the flat lit brick to its left)
x0, y0, x1, y1 = int(0.333 * W), int(0.12 * H), int(0.378 * W), int(0.84 * H)
c = np.asarray(im.crop((x0, y0, x1, y1))).astype(np.float64)
h, w, _ = c.shape

lum = c @ np.array([0.299, 0.587, 0.114])
# leaves are warmer + slightly textured vs the flat near-black recess
warmth = (c[..., 0] + c[..., 1]) * 0.5 - c[..., 2]          # R,G over B
warmth = np.clip(warmth, 0, None)
# local texture: deviation from a blurred self
lum_img = Image.fromarray(np.clip(lum, 0, 255).astype('uint8'))
lum_blur = np.asarray(lum_img.filter(ImageFilter.GaussianBlur(6))).astype(np.float64)
texture = np.abs(lum - lum_blur)

alpha = (0.55 * (lum - 6) + 1.4 * warmth + 1.1 * texture)   # growth survives; recess -> 0
alpha = np.clip(alpha / 22.0, 0, 1)
# feather the sprite's own rectangular edges so it reads as a clinging patch
yy, xx = np.mgrid[0:h, 0:w]
edge = np.minimum.reduce([xx / (w * 0.18), (w - 1 - xx) / (w * 0.18),
                          yy / (h * 0.10), (h - 1 - yy) / (h * 0.10)])
alpha = alpha * np.clip(edge, 0, 1)
alpha = np.asarray(Image.fromarray((alpha * 255).astype('uint8')).filter(ImageFilter.GaussianBlur(1.2))).astype(np.float64) / 255.0

# lift the leaf colour so it reads under the Hall lantern (warm olive), keep it dark
rgb = c.copy()
lift = np.clip((lum[..., None] - 5) / 30.0, 0, 1)
rgb = rgb + lift * np.array([26.0, 22.0, 10.0])            # warm olive lift
rgb = np.clip(rgb, 0, 255)

out = np.dstack([rgb, alpha * 255]).astype('uint8')
Image.fromarray(out, 'RGBA').save('public/hall-ivy.webp', 'WEBP', quality=90, method=6)
cov = (alpha > 0.15).mean()
print(f'wrote public/hall-ivy.webp size=({w},{h}) opaque_coverage={cov:.2%} '
      f'leaf_rgb~{rgb[alpha>0.3].mean(axis=0).round(1) if (alpha>0.3).any() else "n/a"}')
