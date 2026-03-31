# Building a TTRPG Map Maker (Because the Free Ones Suck)

I run a few Cyberpunk Red campaigns. If you've ever tried to make a decent battle map for a tabletop RPG without paying through the nose, you know the pain. Most free tools are either clunky, limited, or look like they were designed in 2005. The paid ones are fine, but I'm a developer. How hard can it be?

Famous last words.

## The Frustration

Every session I'd spend way too long wrestling with some map tool that almost did what I wanted but not quite. The problems kept stacking up:

**Modern assets basically don't exist.** Almost every map maker out there is built for fantasy. Dungeons, taverns, forests, castles. That's great if you're running D&D, but I need neon-lit Night City streets, rain-slicked alleyways, corpo offices with flickering fluorescent lights and suspicious server rooms. Good luck finding sprite sheets for that. I've been generating some assets with AI and drawing others myself, but it shouldn't be this hard.

**Everything is in American paper sizes.** Most free maps I could find online are in letter format, not A4. That means when I try to print them there's always white borders around the edges. The map either has to shrink to fit or gets stretched and squashed. Neither is great when you're trying to maintain a grid scale for combat.

**Watermarks kill immersion.** A lot of the free maps out there come with watermarks like "Cyberpunk Maps" or "Donate to My Patreon" baked into the background. I get it, creators deserve credit, and it felt wrong to just remove them. But having that text visible during a tense firefight in a warehouse it doesn't help immersion.

**Finding matching maps is a nightmare.** I'd spend ages looking for maps that fit the story I wanted to tell, and often I'd have to compromise. Multi-story battles? Forget it. I couldn't find matching floors for the same building. The story gets limited by what maps are available, and that's backwards.

**Pen and paper works, but...** Of course I drew maps by hand. Pen on grid paper, quick sketches, gets the job done. But once you've seen what a properly drawn top-down map with real assets looks like on the table, it's hard to go back. The players engage more, the tactical combat is clearer, and honestly it just looks cool. I want that level of quality without the hassle.

Honestly, even just being able to load in an existing map and overlay a custom grid on top of it would already help a lot. Not all maps come with visible tiling. You don't strictly need a grid, but I personally like it because it simplifies things a bit.

## The Plan

So I'm building my own. A browser-based grid map editor where you can:

- Paint tiles on a grid (walls, floors, terrain)
- Place objects and tokens
- Set up lighting and line-of-sight
- Export maps as images in proper A4 format for printing
- Ship with modern/cyberpunk tilesets by default, not just fantasy

## The Tech Stack

I went with React, TypeScript, and Konva.js for the canvas rendering. Konva gives me a proper scene graph with layers, hit detection, and drag-and-drop out of the box. State management is handled by Zustand, which keeps things clean — map data in one store, editor UI state in another, undo/redo history in a third.

The whole thing runs in the browser. No backend, no account, no subscription. Your maps are saved locally to IndexedDB with auto-save, and you can export them as portable JSON files or high-res PNGs for print.

## Where I'm At

The MVP is working. Here's what's in:

- **Grid canvas** with pan, zoom, and configurable grid size and scale (2m for Cyberpunk Red, 5ft for D&D)
- **Tile placement** with a stamp tool — click an asset, click the grid, tiles snap into place
- **Four layers** — Floor, Walls, Objects, and GM Notes — with visibility and lock toggles
- **Select tool** with click, shift-multi-select, drag-to-move, and box selection
- **Eraser** and **pan** tools with keyboard shortcuts for quick switching (V, B, E, H)
- **Undo/redo** with Ctrl+Z/Y
- **Properties panel** for rotation, flip, and delete on selected elements
- **PNG export** with configurable DPI (150 for drafts, 300 for print)
- **Project save/load** as JSON files

![Early state of the map maker](/images/blog/ttrpg-map-maker/Mapmaker_initial_state.png)

Right now I'm using colored placeholder tiles instead of real art, but the system is designed so you can import your own assets. That's coming next.

## What's Next

Phase 2 is all about making it actually useful for building real maps:

- **Map backgrounds** — solid color or a tiled image behind the grid
- **Custom image import** — drag and drop your own PNGs into the asset browser
- **Hierarchy panel** — Unity-style scene tree so you can group elements into rooms and move them together
- **Snap toggle** — sometimes you want pixel-perfect placement, sometimes you want grid snap
- **Asset customization** — tint, opacity, and resizable elements

## The Hard Part

Rendering is actually the easy part. The hard part is UX. Map tools have this problem where you need a ton of functionality but you can't bury it behind 50 menus. Every tool I've used suffers from this. Powerful but painful to actually use.

I'm keeping it keyboard-driven where possible. Quick shortcuts for common actions, minimal clicking. If I have to click more than twice to place a wall, something's wrong. The hierarchy/grouping system is inspired by game engines like Unity and Godot — if it works for game devs, it should work for GMs building battle maps.

## Will It Ever Be Done?

Probably not in the "finished product" sense. It's a side project that I chip away at between work, HEMA practice, and all the other things competing for my time. But that's fine. Even a half-finished map maker that does exactly what I need is better than a polished one that doesn't.

I'll post updates here as it progresses. If you're a fellow GM who's been frustrated by the same problems, stay tuned.
