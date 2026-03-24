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

## Where I'm At

Still early days. I'm figuring out the right approach for the rendering layer. Do I go full canvas? Do I use a library like Pixi.js? How do I handle layers and z-ordering without making it a performance nightmare?

The grid system is working, basic tile painting is in, and I've got a rough UI. Nothing I'd show off yet, but the foundation is there.

![Early state of the map maker](/images/blog/Mapmaker_initial_state.png)

## The Hard Part

Rendering is actually the easy part. The hard part is UX. Map tools have this problem where you need a ton of functionality but you can't bury it behind 50 menus. Every tool I've used suffers from this. Powerful but painful to actually use.

I'm trying to keep it keyboard-driven where possible. Quick shortcuts for common actions, minimal clicking. If I have to click more than twice to place a wall, something's wrong.

## Will It Ever Be Done?

Probably not in the "finished product" sense. It's a side project that I chip away at between work, HEMA practice, and all the other things competing for my time. But that's fine. Even a half-finished map maker that does exactly what I need is better than a polished one that doesn't.

I'll post updates here as it progresses. If you're a fellow DM who's been frustrated by the same problems, stay tuned.
