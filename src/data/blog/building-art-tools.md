# Building a Collection of Art Tools (Because Why Not)

My portfolio's tools section started with practical developer utilities. CV builder, JSON formatter, that sort of thing. Then I spent an evening browsing Artvee's excellent collection of public domain art, looking for prints to hang in my house. Somewhere between Mondriaan and Bridget Riley I thought: I could generate stuff like this. And now there are six art tools. Here's what I made and how they work.

## Mondriaan Generator

This was the first art tool. You set a grid size, pick which colors to include from Mondriaan's classic palette (red, blue, yellow, black, white), and hit generate. The algorithm randomly merges cells to create those characteristic asymmetric rectangles, then fills some of them with color based on a density slider.

![Mondriaan Generator with yellow and black composition](/images/blog/art-tools/mondriaan-generator-yellow.png)

Every composition is different. The line width is adjustable, and everything exports as SVG so you get clean vector output at any size.

![Another Mondriaan composition with red, blue, and yellow](/images/blog/art-tools/mondriaan-generator-red.png)

## Halftone Image Converter

Upload any image and convert it to a halftone dot pattern. Each dot's size maps to the brightness of that area of the image. Darker regions get bigger dots, lighter regions get smaller ones.

![Cat photo converted to halftone dots](/images/blog/art-tools/halftone-converter-cat.png)

The controls let you adjust dot spacing, choose between circle, square, or diamond shapes, tweak contrast, and rotate the dot grid angle. There's also a color mode selector: black and white, a single custom color, or preserve the original image colors. Exports as both SVG (vector) and PNG.

## Op Art Pattern Generator

Five different optical illusion patterns you can generate and tweak. Concentric rings, moire circles, warped grids, checkerboard distortions, and wave interference patterns.

![Concentric rings optical illusion pattern](/images/blog/art-tools/op-art-concentric-rings.png)

The fun part is the animation toggle. Turn it on and the pattern starts moving, creating that classic op art hypnotic effect. Every parameter (frequency, amplitude, line thickness, colors) updates live on the canvas.

## Color Palette from Image

Upload a photo and extract its dominant colors. Uses a median-cut algorithm that recursively splits the color space to find the most representative colors.

![Color palette extracted from a cat photo](/images/blog/art-tools/color-palette-cat.png)

You can choose how many colors to extract (3 to 12), and each swatch shows the hex value, RGB breakdown, and approximate percentage of the image it covers. Click any swatch to copy its hex value, or export the whole palette as CSS custom properties or a JSON array.

## ASCII Art Generator

Convert any image into ASCII characters. The tool maps pixel brightness to characters from a density ramp, where spaces represent bright areas and dense characters like `@` and `#` represent dark areas.

![ASCII art of a cat in terminal-style preview](/images/blog/art-tools/ascii-art-cat.png)

Four character sets to choose from: standard, block characters, a detailed set with more gradation, or a fully custom ramp you type yourself. The preview renders in a terminal-style window with a dark background and green text. Output width, contrast, and inversion are all adjustable. Copy to clipboard or download as a .txt file.

## Geometric Pattern Tiler

Pick a shape (hexagon, triangle, circle, star, diamond, or square), choose a layout pattern (grid, brick, diagonal, or radial), and watch it tile across the canvas.

![Pink hexagon pattern tiling in grid layout](/images/blog/art-tools/pattern-tiler-hexagons.png)

Two fill modes: "Edge to Edge" tiles the entire canvas with shapes clipped at the borders, while "Whole Tiles" only shows complete shapes. Everything is adjustable: tile size, gap, rotation, fill color, stroke color, stroke width. Exports as PNG or SVG, and the print mode fills the entire page with the pattern.

## What They Have in Common

All six tools follow the same layout: controls on the left sidebar, live preview in the center. They all export their output (SVG, PNG, or text depending on the tool), and they all use the same pop art design tokens as the rest of the portfolio. The canvas-based tools redraw live as you adjust sliders, so there's no "render" button to press for most of them.

They were fun to build. The halftone converter in particular ties nicely into the portfolio's existing dither page transitions, and the Mondriaan generator feels right at home next to the pop art styling. If nothing else, they make the tools page more interesting to browse.
