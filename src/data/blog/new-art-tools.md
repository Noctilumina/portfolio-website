# Four New Art Tools: Flow Fields, Mesh Gradients, Dithering and Blobs

Been shipping a lot of generative and pixel-pushing art toys lately. These four solve specific scratches, and they're all free, all run client-side, and all export what you make.

## Flow Field Generator

Particles bounce through a seeded Perlin noise field, each one drawing a curve as it moves. Dial in particle count, noise scale, and a color palette, then let it render. The math is simple but the outputs are weirdly organic. Exports both PNG (rasterized) and SVG (as actual strokes) so you can keep the paths editable.

## Mesh Gradient Maker

Click anywhere on the canvas to place a color node, drag them around, and watch a smooth mesh gradient bloom between them. No math required. Copies the CSS gradient syntax (for browsers that support it) or downloads a PNG if you need cross-browser insurance. Good for backgrounds that don't look generated.

## Image Ditherer

Upload a photo or screenshot. Pick a dithering mode (Floyd-Steinberg or ordered Bayer), choose a palette (1-bit, Game Boy, CGA, whatever), and watch it crunch down to retro pixels. Control the pixel size for the final scale. Downloads as PNG. Turns modern color depth into that gritty 80s computer vibe.

## SVG Blob Generator

Feed it a seed, get smooth organic blob shapes made of bezier curves. Click to regenerate, adjust the smoothness, pick a fill and stroke. Copy the raw SVG, just the path data, or a CSS clip-path for masking. Hangs on a wall (metaphorically) between generative art and UI component.

All four keep the site's neo-brutalist aesthetic: hot pink, thick black borders, hard shadows.
