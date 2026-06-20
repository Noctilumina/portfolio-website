# Sprite Sheet Splitter: Upload a Sheet, Get Individual Sprites

If you've worked with game assets, you know the format: one big image with a grid of sprites arranged on a solid background color. This tool takes that image and cuts it into individual sprites automatically.

## How It Works

Upload a sprite sheet. The tool detects the background color by sampling pixels along the edges of the image — most sprite sheets use a solid color (magenta, white, black, or transparent) as padding between sprites. It then scans for columns and rows where the pixels match that background color, which gives it the grid boundaries.

You don't need to enter the grid size. If your sheet has consistent spacing, the tool figures it out.

![Sprite sheet with grid detection overlay showing detected rows and columns](/images/blog/sprite-sheet-splitter/detection-overlay.png)

The detected grid shows as an overlay on the preview. If the automatic detection misses edges — common with sheets that have slight anti-aliasing on the background — a tolerance slider lets you adjust how strictly background pixels are matched.

Once the grid looks right, click split. Each sprite gets cut out and shown in a preview grid. Download individual sprites or export the whole set as a ZIP.

![Grid of split sprites with individual download buttons](/images/blog/sprite-sheet-splitter/split-result.png)

## Why

I was cutting up sprite sheets for the map maker by hand. Open the image, manually slice each frame, export each one, name them. For a sheet with fifteen sprites that's fifteen minutes of mechanical work. This does it in about ten seconds.

It's also useful for anyone working with pixel art tilesets, retro game assets, or animation frames stored as sprite sheets — which is a lot of people who build games or work with game assets.
