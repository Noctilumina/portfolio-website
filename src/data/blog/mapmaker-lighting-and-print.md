# Map Maker Update: Lights, Shadows, and Finally a Print Button

The original map maker post ended with a list of things I wanted to build next. Two of the biggest were lighting and a proper print workflow. Both are done now.

## Lighting

Adding lights to a battle map changes the whole feel. A flickering bar light above a server rack, a single point light in a back alley, fluorescent tubes in a corpo corridor. These things matter for atmosphere, and they matter mechanically — Cyberpunk Red has visibility rules that affect combat, and a map with actual lights makes it obvious which areas are dark.

The map maker now has a light placement tool (press **L**). Two light types: **point lights** (radial glow from a single source) and **bar lights** (capsule-shaped, like a fluorescent tube). Both cast occlusion — walls block the light, so shadows fall correctly on the geometry behind them.

![Point light casting shadows on wall tiles](/images/blog/mapmaker-lighting-and-print/lighting-point.png)

![Bar light in a corridor with occlusion](/images/blog/mapmaker-lighting-and-print/lighting-bar.png)

Each light has adjustable radius, intensity, and color. There's a "hide source" option that removes the physical light marker from the export, leaving just the glow — useful when the light source is implied rather than placed as a visible object.

Elements can now be locked in place. Once you've placed walls and floors you're happy with, lock them so you can't accidentally drag them while placing objects on top.

## Print

PNG export worked fine for digital use, but printing is different. Cyberpunk Red combat is played on a physical table with miniatures. That means A4, proper DPI, and sometimes maps that are bigger than one page.

The print dialog handles all of this. Set DPI (150 for drafts, 300 for final print), choose cells per inch to match your miniature scale, and the map splits across as many A4 pages as needed with a live multi-page preview. Paper order is EU-first — columns left-to-right, then rows top-to-bottom, which is how you'd tape pages together on a European table.

![Print dialog with multi-page preview and DPI controls](/images/blog/mapmaker-lighting-and-print/print-dialog.png)

Large maps can take a second to render, so a loading screen now shows during PNG export as well.

Copy/paste shortcuts (Ctrl+C / Ctrl+V) also landed in this update. Small thing, but it speeds up duplicating groups of elements significantly.
