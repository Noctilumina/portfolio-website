# Map Maker Update: Multiple Maps, a Random Stamp, and a Lot of Polish

This update is partly a big feature and partly a long list of small things that add up more than you'd expect.

## Multi-Map Tabs

You can now have multiple maps open at once. Each gets its own tab at the top of the editor. Switch between them without closing anything.

For multi-floor buildings, this is the main thing I wanted. Now I can have the ground floor and second floor open at the same time, flip between them while building, and check that corridors and staircases actually line up between floors. It's also useful when building a new map and wanting to reference an existing one without having to export it first.

![Multiple map tabs in the editor with two maps open](/images/blog/mapmaker-tabs-and-polish/multi-tab.png)

## Random Stamp

The random stamp tool (press **S**) lets you define a pool of assets and place them with randomized selection. Click to place one asset chosen at random from the pool, or drag to fill an area. This is different from the scatter brush — scatter randomizes placement position, the random stamp randomizes which asset from your pool gets placed at the exact point you click.

Practical example: a storage room where some crates are intact and some are damaged. Define a pool with three crate variants, stamp away, and each placement picks one at random.

![Random stamp tool with an asset pool configured](/images/blog/mapmaker-tabs-and-polish/random-stamp.png)

## Mirror Line

The mirror line lets you draw one half of a symmetrical map and have the other side filled in automatically. There's now a visual overlay showing the mirror axis while you work, so it's clear where the center line is before you commit to a layout.

## Unified Stamp Tool

The previous update added several stamp tools (rect, line, scatter, replace). They're now consolidated into one stamp entry in the toolbar with a mode selector, so the sidebar doesn't fill up with separate buttons for every variant.

## Other Changes

**Expandable sidebar**: Collapses to icon-only mode when you want more canvas space, expands back to show labels and options. Toggle with a button at the bottom of the sidebar.

**Resizable panels**: The asset browser and properties panel can now be resized by dragging their edges. Small monitors thank you.

**Placement previews**: Tiles show a ghost preview at the cursor before you click, so you can see exactly where they'll land.

**Tooltips**: Every tool and button has a tooltip. Covers the shortcut key and a one-line description of what it does.

**Z-index control**: Element draw order is now independent from hierarchy position, so you can control what renders on top without rearranging your scene tree.

**Rug assets**: Nine cyberpunk and modern rug sprites added to the asset library. Floors with rugs feel more like actual rooms instead of empty grid squares.

![Asset library showing the new rug category](/images/blog/mapmaker-tabs-and-polish/rug-assets.png)
