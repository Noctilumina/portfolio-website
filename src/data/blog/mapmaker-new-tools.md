# Map Maker Update: Seven New Placement Tools (And a Prefab System)

Placing tiles one by one works fine for small rooms. For anything bigger it's tedious. This update adds seven new ways to place tiles, a building automation tool, and a system for saving reusable groups.

## The New Stamp Tools

**Rect-stamp** (F): Drag a rectangle and it fills with the selected tile. For floors, this is indispensable. A room that used to take forty clicks now takes one.

**Line-stamp** (N): Drag to lay tiles in a straight line. Hold shift to lock to the horizontal or vertical axis. Good for walls along corridors, fences, barriers, rows of server racks.

**Scatter** (X): Randomly places tiles from a set you define. Pick a handful of different floor tiles, paint scatter across an area, and get organic variation instead of a repeating pattern.

**Replace**: Click a tile on the canvas to sample it, then paint over other tiles to replace them with the sampled asset. Useful when you change your mind about a tile mid-map and need to swap it out without erasing everything.

![The new stamp tools in the tool sidebar](/images/blog/mapmaker-new-tools/stamp-tools.png)

## Building Tools

**Auto-wall borders**: Select a room's floor area, click the button, and border wall tiles get placed automatically around the perimeter. Saves a lot of fiddly edge work on rectangular rooms.

**Opening controls**: Doors and windows can now be repositioned along their wall edge and resized after placement. You can also change which direction a door swings. This sounds minor but it comes up constantly when a room doesn't quite fit the layout you planned.

![Auto-wall border placement on a room and door positioning controls](/images/blog/mapmaker-new-tools/building-tools.png)

## Prefabs

A prefab is a saved selection of elements you can place again later as a group. Build a workstation (desk, chair, monitor, cable clutter), save it as a prefab called "Workstation", then stamp it across an office floor. Works for anything that repeats: server racks, security checkpoints, barricades, guard posts.

Prefabs save inside the project file, so they persist between sessions and load back when you reopen a map.

![Prefab save dialog with a saved group selected](/images/blog/mapmaker-new-tools/prefabs.png)

## Measure Tool

Press **M** to switch to the measure tool. Click two points on the map to get the distance in grid cells. Useful for checking whether a corridor is wide enough for two tokens side by side, whether a sniper perch has line of sight to a doorway, or whether a room matches the scale you intended.

## Multi-Select Improvements

Clicking through stacked elements now cycles through them in order — so if you have a floor tile, an object, and a token all in the same cell, you can click through to select each one without reorganizing your layers. Copy/paste also now preserves group structure, so a multi-selected group pastes as a group rather than as individual elements.
