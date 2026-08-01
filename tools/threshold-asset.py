"""Responsive threshold assets from the cleaned R8 master.
Mobile = the portrait master. Desktop = portrait extended sideways into darkened
masonry (provisional per Luna's pending ruling). Export AVIF + WebP, compressed
hard, at responsive widths. -> public/threshold/*"""
import os, numpy as np
from PIL import Image, ImageFilter

SCR = '/private/tmp/claude-501/-Users-luna-moonpixiee-site/6ffc61c4-16ac-4821-8a13-cbbcc65114b2/scratchpad'
OUT = '/Users/luna/moonpixiee-site/public/threshold'
os.makedirs(OUT, exist_ok=True)

clean = Image.open(f'{SCR}/R8-clean.png').convert('RGB')
W, H = clean.size                    # 1023 x 1537

# ---------- DESKTOP MASTER: extend sides with darkened brick ----------
DW = 2688                            # ~1.75:1
ox = (DW - W) // 2
carr = np.full((H, DW, 3), np.array([8, 7, 9], float))
carr[:, ox:ox+W] = np.asarray(clean, float)

# brick relief (grey), tiled across full width, tinted to a dark warm wall
brick = np.asarray(Image.open('/Users/luna/moonpixiee-site/public/threshold-stone.webp').convert('L'), float) / 255.0
bh, bw = brick.shape
tiled = np.tile(brick, (H // bh + 1, DW // bw + 1))[:H, :DW]
tone = np.array([0.095, 0.073, 0.064])          # dark warm masonry (kept deep)
wall = (0.35 + 0.9 * tiled[..., None]) * tone * 255.0   # brick modulating the tone

# horizontal falloff: full at the seam with the photo, -> near-black at the outer edges
x = np.arange(DW)
inner_l, inner_r = ox, ox + W
fall = np.ones(DW)
left = x < inner_l
right = x > inner_r
fall[left] = np.clip((x[left]) / max(inner_l, 1), 0, 1) ** 1.9
fall[right] = np.clip((DW - 1 - x[right]) / max(DW - inner_r, 1), 0, 1) ** 1.9
wall = wall * fall[None, :, None]

# use the brick wall only OUTSIDE the photo, feathered into the seam
seam = 160
alpha = np.zeros(DW)
alpha[:inner_l] = 1.0
alpha[inner_r:] = 1.0
# feather the seam
for i in range(seam):
    a = 1.0 - i / seam
    if inner_l + i < DW: alpha[inner_l + i] = max(alpha[inner_l + i], a)
    if inner_r - i >= 0: alpha[inner_r - i] = max(alpha[inner_r - i], a)
A = alpha[None, :, None]
desk = carr * (1 - A) + wall * A
desk = np.clip(desk, 0, 255).astype('uint8')
desktop = Image.fromarray(desk, 'RGB').filter(ImageFilter.GaussianBlur(0.4))
desktop.save(f'{SCR}/R8-desktop-master.png')
print('desktop master', desktop.size)

# ---------- EXPORT ----------
def export(img, base, widths, avq, wpq):
    for w in widths:
        h = round(img.height * w / img.width)
        r = img.resize((w, h), Image.LANCZOS)
        r.save(f'{OUT}/{base}-{w}.avif', 'AVIF', quality=avq, speed=4)
        r.save(f'{OUT}/{base}-{w}.webp', 'WEBP', quality=wpq, method=6)
        a = os.path.getsize(f'{OUT}/{base}-{w}.avif') / 1024
        wv = os.path.getsize(f'{OUT}/{base}-{w}.webp') / 1024
        print(f'  {base}-{w}: AVIF {a:.0f}KB  WebP {wv:.0f}KB  ({w}x{h})')

print('mobile portrait:')
export(clean,   'mobile',  [512, 768, 1023], avq=52, wpq=62)
print('desktop landscape:')
export(desktop, 'desktop', [1280, 1920, 2560], avq=50, wpq=60)
