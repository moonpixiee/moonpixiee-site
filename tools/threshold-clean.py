"""Clear the BAKED text (greeting/invitation/Wander) from the R8 doorway so the
live HTML can own it. Feathered fill with a vertical gradient sampled from the
interior above/below, matching its dark-to-warm ramp. Architecture (wall, lantern,
name, arch, steps) untouched. -> R8-clean.png (portrait master)."""
from PIL import Image, ImageDraw, ImageFilter

SCR = '/private/tmp/claude-501/-Users-luna-moonpixiee-site/6ffc61c4-16ac-4821-8a13-cbbcc65114b2/scratchpad'
im = Image.open(f'{SCR}/R8-source.png').convert('RGB')
W, H = im.size  # 1023 x 1537
px = im.load()

# baked-text region (greeting ~y760-900, invitation ~940, Wander ~1000-1080).
# The interior here is near-uniform dark (the warm step-pool is lower, ~1200+),
# so a solid dark fill matches; feathered edges blend into the surrounding dark.
rx0, ry0, rx1, ry1 = 235, 705, 788, 1122
DARK = (18, 12, 11)

fill = Image.new('RGB', (W, H), DARK)

mask = Image.new('L', (W, H), 0)
ImageDraw.Draw(mask).rounded_rectangle([rx0, ry0, rx1, ry1], radius=64, fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(24))
top = bot = DARK

out = Image.composite(fill, im, mask)
out.save(f'{SCR}/R8-clean.png')
print('top interior', top, 'bot interior', bot)
print('cleaned ->', out.size)
