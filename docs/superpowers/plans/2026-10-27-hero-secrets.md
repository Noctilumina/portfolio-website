# Hero Secrets and Cat Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a falling leaf, a shooting star, a star glow near the cursor, five clickable secrets with a "+1" pop, and a controllable cat reward to the pixel hero.

**Architecture:** Game rules live in small pure modules under `src/components/PixelScene/game/`, each with Vitest unit tests. They cover saved progress, hit testing, ambient event timing, cat movement, popups and star glow. `scene.js` also draws the secrets' resting art and returns their anchor points. `sprites.js` holds hand-made pixel sprites. `PixelScene.jsx` stays the one place that owns the canvas, the timer and input, and calls into the pure modules each tick.

**Tech Stack:** React 18, Vite 6, Canvas 2D at art resolution, Vitest (new dev dependency, `jsdom` environment for `localStorage`).

**Spec:** `docs/superpowers/specs/2026-10-27-hero-secrets-design.md`

## Global Constraints

- Branch `feature/pixel-home`; every push to it deploys live to GitHub Pages.
- Everything draws on the art-pixel grid. `px = max(3, round(min(width, height * 1.6) / 360))` is already computed in `PixelScene.jsx`, and positions are art-pixel integers.
- Animation runs on the existing stepped timer, `TICK_MS = 110`. There are no smooth tweens and no geometry rotation or bending of big shapes.
- Secret IDs, exactly: `owl`, `moonRabbit`, `constellation`, `burrow`, `shootingStar`.
- localStorage key: `pixel-hero-secrets-v1`, holding a JSON array of found IDs. Every access is wrapped in try/catch, and the site works when storage throws.
- No visible counter anywhere. The only feedback for a first find is a "+1" plus a sparkle. Repeat clicks replay the reaction without a "+1".
- Shooting star: appears every 20–40 s, takes 1500 ms to cross, and counts as caught by any click within 6 art pixels of any point of the drawn streak (head or tail).
- Falling leaf: every 15–30 s.
- Nothing interactive or animated in the name's area: a horizontal band from 12% to 40% of hero height on wide layouts, and from 22% to 46% on narrow layouts (art width under 200), spanning the middle 70% of the width.
- Reduced motion: ambient events are off. Secret reactions show their key frame for 1.2 s and then return. The cat appears without an entrance, walking still animates, and idle blink and tail flick are off.
- Keyboard: only ArrowLeft, ArrowRight, `a`, `d` steer the cat, and only when the cat is unlocked, the hero is intersecting the viewport, and the event target is not an input, textarea, select or contentEditable. Only those handled keys get `preventDefault()`. Up/Down/Space/PageDown keep scrolling.
- No sound. No mouse-following elements other than the star glow.

## Review Focus

1. **Storage blocked** (private mode or Safari ITP: `localStorage` throws). The page loads, secrets still work for the session, and nothing crashes. Test in Task 1.
2. **Resize after finding secrets.** Anchors move with the layout, found state persists, and the cat stays on the ground line. Test in Task 2 (anchors recomputed from W/H) and Task 5 (cat clamps x into `[0, W-1]` after a ground change).
3. **Clicks inside the name band.** They must not trigger secrets or move the cat. Test in Task 2 (no anchor lies inside the band) and Task 3 (`hitTest` returns null inside it).
4. **Keyboard scrolling must keep working.** ArrowDown and Space still scroll even once the cat is unlocked. Test in Task 5 (`isSteerKey` is false for those keys).
5. **Tab hidden or hero offscreen mid shooting star.** When the timer resumes, a stale star must not be clickable or drawn. Test in Task 4 (`activeStar(now)` returns null once `now > start + 1500`, whatever ticks were missed).

---

### Task 1: Test setup and saved progress

**Files:**
- Modify: `package.json` (devDependencies `vitest`, `jsdom`; script `"test": "vitest run"`)
- Create: `vitest.config.js` (environment `jsdom`)
- Create: `src/components/PixelScene/game/progress.js`
- Test: `src/components/PixelScene/game/progress.test.js`

**Interfaces:**
- Produces: `SECRET_IDS: string[]`; `loadFound(): Set<string>`; `markFound(found: Set<string>, id: string): { isNew: boolean, complete: boolean }` (mutates `found`, saves); `isComplete(found: Set<string>): boolean`.

- [ ] **Step 1: Install** `npm i -D vitest jsdom`, add the `test` script and `vitest.config.js`.
- [ ] **Step 2: Write failing tests** `progress.test.js`:
  - `loadFound()` returns an empty Set when nothing is stored.
  - after `markFound(s,'owl')`, `loadFound()` has `'owl'`, and the stored value equals `'["owl"]'` under `pixel-hero-secrets-v1`.
  - a second `markFound(s,'owl')` returns `{ isNew: false, complete: false }`.
  - marking all five `SECRET_IDS` makes the last call return `complete: true`.
  - unknown id `'foo'` → `{ isNew: false, complete: false }`, not stored.
  - corrupt stored value `'not json'` → `loadFound()` returns an empty Set.
  - with `Storage.prototype.getItem`/`setItem` mocked to throw, `loadFound()` returns an empty Set and `markFound` still returns `isNew: true` (in-memory only).
- [ ] **Step 3: Run** `npm test`. Expected: FAIL (module missing).
- [ ] **Step 4: Implement** `progress.js`.
- [ ] **Step 5: Run** `npm test`. Expected: all pass.
- [ ] **Step 6: Commit** `feat: saved progress for hero secrets`.

### Task 2: Secret art and anchors in the scene

**Files:**
- Modify: `src/components/PixelScene/scene.js`
- Test: `src/components/PixelScene/scene.test.js`

**Interfaces:**
- Consumes: nothing new.
- Produces: `buildScene(W, H)` additionally returns:
  - `narrow: boolean`
  - `titleBand: { x0, x1, y0, y1 }` (from the band percentages in Global Constraints)
  - `groundAt: (x: number) => number` (y of the near ground top at column x)
  - `anchors`:
    - `owl: { x, y }` (eye midpoint, inside the crown)
    - `moon: { x, y, r }`
    - `constellation: Array<{ x, y }>`: 6–8 stars forming a sitting-cat outline, in the sky outside `titleBand` and away from moon and crown
    - `burrow: { x, y }` (on the near ground, not under the tree trunk, at least 12 art px from it)

  Resting art is drawn into `background`: two faint owl eye pixels (`#c9b25a`) on a dark owl body hidden in leaf shadow; the constellation stars drawn as normal dim stars; a 3–4 px dark burrow opening with a one-pixel lighter rim.

  `buildScene` must stay a pure function of `(W, H)`. jsdom gives `getContext()` null, so tests stub `HTMLCanvasElement.prototype.getContext` with a minimal ImageData-backed fake, or the drawing is guarded and only the anchors are asserted.

- [ ] **Step 1: Write failing tests** for sizes `(360,225)` and `(125,271)`:
  - every anchor lies inside `[0,W)×[0,H)`.
  - no anchor and no constellation star lies inside `titleBand`.
  - `burrow.y === Math.round(groundAt(burrow.x))` (±1).
  - `|burrow.x - treeTrunkX| >= 12`, where the tree x is exposed as `anchors.treeX` for this check.
  - `buildScene(360,225).anchors` deep-equals a second call (deterministic).
- [ ] **Step 2: Run** `npm test`. Expected: FAIL.
- [ ] **Step 3: Implement** the anchors and resting art in `scene.js`. Owl placement: the leaf cluster centre nearest the crown middle, nudged into its shadow side (away from the moon).
- [ ] **Step 4: Run** `npm test`. Expected: PASS.
- [ ] **Step 5: Visual check.** Open `http://localhost:5173/portfolio-website/` at 1440×900 and 375×812. The owl eyes, burrow and constellation are visible on close inspection but not eye-catching, and nothing touches the name. Screenshot both widths.
- [ ] **Step 6: Commit** `feat: hide five secrets in the hero scene`.

### Task 3: Sprites and hit testing

**Files:**
- Create: `src/components/PixelScene/sprites.js`
- Create: `src/components/PixelScene/game/hit.js`
- Test: `src/components/PixelScene/game/hit.test.js`, `src/components/PixelScene/sprites.test.js`

**Interfaces:**
- Produces:
  - `sprites.js`: `SPRITES` object of `{ w, h, frames: string[][] }`. Each frame is an array of row strings; `.` is transparent, other characters index `PALETTE`. Sprites: `owlBlink` (3 frames), `owlTurn` (3), `moonRabbit` (1), `mousePeek` (4: hole, ears, head, ears), `catWalk` (4), `catSit` (2: plain, blink), `catTail` (2), `plusOne` (1), `sparkle` (3), `constellationLines` (drawn procedurally, not a sprite).
  - `drawSprite(ctx, sprite, frameIndex, x, y, flip = false)` draws with `fillRect` per pixel at art coords, with (x, y) the bottom-centre of the sprite.
  - `hit.js`: `hitTest(point: {x,y}, scene, { touch: boolean }): string | null`. It returns `'owl' | 'moonRabbit' | 'constellation' | 'burrow' | null`; the shooting star is tested separately in Task 4. Radius: 5 art px (8 when touch); moon uses `r + 2`; constellation counts a hit on any of its stars. Returns null inside `scene.titleBand`.

- [ ] **Step 1: Write failing tests:**
  - every sprite frame has exactly `h` rows of length `w`, and only uses characters present in `PALETTE` or `.`.
  - `hitTest` on each anchor returns its ID; 6 px away (mouse) returns null, but the same point with `touch: true` returns the ID (owl and burrow).
  - a point at the `titleBand` centre returns null.
- [ ] **Step 2: Run** `npm test`. Expected: FAIL.
- [ ] **Step 3: Implement** `sprites.js` (hand-drawn grids; palette reuses scene colours plus cat colours `#2b2350` body, `#4b3486` highlight, `#ffd27a` eyes) and `hit.js`.
- [ ] **Step 4: Run** `npm test`. Expected: PASS.
- [ ] **Step 5: Commit** `feat: secret sprites and hit testing`.

### Task 4: Ambient events, popups and star glow

**Files:**
- Create: `src/components/PixelScene/game/ambient.js`
- Create: `src/components/PixelScene/game/popups.js`
- Create: `src/components/PixelScene/game/glow.js`
- Test: `ambient.test.js`, `popups.test.js`, `glow.test.js` beside them

**Interfaces:**
- Produces:
  - `createAmbient(rand: () => number, now: number, scene)` returns `{ nextLeafAt, nextStarAt, star: null | Star, leaf: null | Leaf }`.
  - `stepAmbient(state, now, scene, rand)` returns the state (it starts a star when `now >= nextStarAt`, then schedules the next one at `now + 20000..40000`; leaves the same at `15000..30000`).
  - `Star = { start, x0, y0, x1, y1 }`. Its path runs from the top-left area to the lower right, or mirrored. Both ends sit in the sky above `groundAt` minus 10 px and outside `titleBand`, and the segment does not intersect `titleBand`.
  - `activeStar(state, now): Star | null` (null once `now > start + 1500`).
  - `starPoints(star, now): Array<{x,y,alpha}>`, the head plus a 6 px tail.
  - `hitStar(state, point, now, tolerance = 6): boolean`.
  - `Leaf` path: a start on the crown edge, falling 1 art px per tick with ±1 x sway every 2 ticks, removed 2 ticks after reaching `groundAt(x)`.
  - `popups.js`: `spawnPlusOne(list, x, y, now)`, `stepPopups(list, now)` (rise 1 px per tick for 8 ticks, then removed), `spawnSparkle(...)` (3 frames).
  - `glow.js`: `glowLevels(stars: Array<{x,y}>, pointer: {x,y} | null, radius = 18): Map<index, 1|2>`. Level 2 within 6 px, level 1 within `radius`, none otherwise; null pointer returns an empty Map.

- [ ] **Step 1: Write failing tests:**
  - with a seeded rand, the first star starts within `[20000,40000]` ms; `activeStar` is non-null at `start+1499` and null at `start+1501`; after a call with `now = start + 60000` (missed ticks), `activeStar` is null and a new `nextStarAt > now`.
  - for 200 seeded stars on `(360,225)`, no star segment intersects `titleBand`.
  - `hitStar` is true at the tail's last point and at 5 px from the head, and false at 7 px.
  - a leaf ends within 2 ticks of reaching `groundAt`.
  - a popup is gone after 8 ticks.
  - `glowLevels` with the pointer on a star gives level 2; at 12 px it gives 1; at 30 px it gives none.
- [ ] **Step 2: Run** `npm test`. Expected: FAIL.
- [ ] **Step 3: Implement** the three modules.
- [ ] **Step 4: Run** `npm test`. Expected: PASS.
- [ ] **Step 5: Commit** `feat: falling leaf, shooting star, popups, star glow logic`.

### Task 5: Cat movement

**Files:**
- Create: `src/components/PixelScene/game/cat.js`
- Test: `src/components/PixelScene/game/cat.test.js`

**Interfaces:**
- Produces:
  - `createCat(scene, { reduced: boolean })` returns `{ x, state: 'enter' | 'idle' | 'walk', facing: 1 | -1, frame, target: number | null, idleTicks }`. It enters from the left edge and walks to `0.2 * W` (narrow layouts: `0.15 * W`), with `state:'enter'`. When `reduced`, it is placed at that point with `state:'idle'`.
  - `stepCat(cat, input: { dir: -1 | 0 | 1 }, scene, { reduced })`: 1 art px per tick, walk frame advancing every tick while moving, x clamped to `[3, W-4]`, facing following the direction. A non-null `target` (from a tap) walks there and clears on arrival. Keyboard `dir` overrides `target`. When idle and not `reduced`, it blinks every 30–50 ticks and flicks its tail every 40–70.
  - `catY(cat, scene) = Math.round(scene.groundAt(cat.x))`.
  - `isSteerKey(e: KeyboardEvent): -1 | 1 | 0`: `-1` for ArrowLeft/`a`, `1` for ArrowRight/`d`, else `0`. It returns 0 when `e.target` is an input, textarea, select or contentEditable, or when any modifier key is held.

- [ ] **Step 1: Write failing tests:**
  - `createCat` with `reduced:true` gives `state 'idle'` at the rest x; `reduced:false` gives `'enter'` at x ≤ 3 and reaches the rest x after enough ticks.
  - `dir:1` for 10 ticks moves +10.
  - x never leaves `[3, W-4]`, even after the W shrinks: a call with a smaller scene clamps it.
  - `target` walks there and clears.
  - `isSteerKey` returns 0 for ArrowDown, Space and PageDown; 0 for ArrowLeft when the target is an `<input>`; 0 with `ctrlKey`.
  - when `reduced`, the idle frame never changes over 200 ticks.
- [ ] **Step 2: Run** `npm test`. Expected: FAIL.
- [ ] **Step 3: Implement** `cat.js`.
- [ ] **Step 4: Run** `npm test`. Expected: PASS.
- [ ] **Step 5: Commit** `feat: cat movement rules`.

### Task 6: Wire it into PixelScene

**Files:**
- Modify: `src/components/PixelScene/PixelScene.jsx`
- Modify: `src/components/PixelScene/PixelScene.module.css` (`cursor: default`; no pointer cursor, so the secrets stay hidden)

**Interfaces:**
- Consumes: everything from Tasks 1–5.

Behaviour per tick (`draw` order): background, then the leaf, shooting star, secret reaction sprites (active reactions keyed by ID, each with a start tick and frame list), constellation lines while the constellation reaction runs (one segment added per tick, held 20 ticks, then removed in one step), glow overlays, fireflies, cat, popups.

Input:
- `pointerdown` on the host: convert to art coords (`/px`) and check `hitStar` first, then `hitTest` (with `touch` from `e.pointerType !== 'mouse'`). On a hit: start the reaction, and if `markFound(...).isNew`, spawn a "+1" and a sparkle at the anchor. If that makes the progress complete, create the cat. When the cat is unlocked and nothing was hit and the point is below `groundAt(x) - 8`, set the cat's `target`.
- `pointermove` (mouse only): sets `pointer` for `glowLevels`; `pointerleave` clears it.
- `keydown` / `keyup` on `window`: use `isSteerKey`, only while the cat exists and the hero is intersecting, and call `preventDefault` only for handled keys.
- The timer stays paused offscreen or when the tab is hidden. On resume, `stepAmbient` with the real `now` drops stale events (covered by the Task 4 test).
- A cat already unlocked from saved progress appears in its idle state on load (no entrance).
- Dev only (`import.meta.env.DEV`): `window.__hero = { reset(), star(), unlock() }`, for testing without waiting or clicking everything.

- [ ] **Step 1: Implement** the wiring.
- [ ] **Step 2: Run** `npm test` and `npm run build`. Expected: all tests pass, and the build succeeds.
- [ ] **Step 3: Browser check** (dev server, 1440×900, using `window.__hero` where useful). Expected:
  - (a) each of the 4 click secrets plays its reaction and shows a "+1" once; a second click replays it without a "+1".
  - (b) `__hero.star()` then clicking the streak catches it.
  - (c) after the fifth, the cat walks in; ArrowLeft/Right move it; ArrowDown still scrolls the page.
  - (d) reload: the cat is there, sitting, with no "+1"s.
  - (e) the console is free of errors.
  - (f) clicking the name does nothing.
- [ ] **Step 4: Phone check** (375×812, touch emulation). The owl and burrow are tappable, tapping the ground walks the cat, and there's no horizontal overflow (`scrollWidth === innerWidth`).
- [ ] **Step 5: Reduced-motion check** (emulate `prefers-reduced-motion: reduce`). No leaves or stars appear over 60 s with `__hero.star()` not called; reactions show a still frame; an unlocked cat appears without an entrance, and walking still animates.
- [ ] **Step 6: Regression.** About and CV screenshots at 375/768/1440 are pixel-identical to the baseline in `.superpowers/.../shots/baseline/`.
- [ ] **Step 7: Commit** `feat: hero secrets, ambient events and cat reward`, then push (this deploys live) and confirm the Pages run succeeds and the live page has no console errors.
