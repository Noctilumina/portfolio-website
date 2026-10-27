# Hero secrets and the cat: design

Date: 2026-10-27
Branch: `feature/pixel-home` (live preview on GitHub Pages)

## Intent

The portfolio's home page was restyled as pixel art so it stops looking like the AI-generated sites that copy it. The hero is now a code-drawn night scene: dithered sky, stars, crescent moon, two hill ridges, a tree, fireflies. It is a placeholder until Iris draws her own hero art.

This work makes the site feel *juicy*, like a small game world. That means two kinds of liveliness:

- **Ambient:** things that happen on their own, so the scene feels alive.
- **Chosen:** things a visitor discovers by poking at the art.

A visitor who just wants to read the portfolio is never slowed down or distracted. A visitor who plays is rewarded.

## Goals

- The hero feels alive at rest through a few small, believable animations.
- Five hidden secrets in the hero scene, each discoverable by clicking or tapping.
- Finding a secret gives clear, satisfying feedback: a "+1" pops up where it was found.
- Finding all five unlocks a reward: a pixel cat appears on the hill, and the visitor can walk it around.
- The page stays easy to use and fast on phones.

## Non-goals

- No night/dusk or theme toggle in the scene. Iris rejected this explicitly.
- No visible progress counter. There is no "2/5" anywhere, and the "+1" on each find is the only feedback.
- No secrets outside the hero for now; the sections below stay as they are.
- No sound.
- No mouse-following elements beyond the subtle star glow described below. Fireflies that chased the cursor were removed on purpose.

## Anti-goals (fails even if it technically works)

- **Goofy or low-quality motion.** The tree sway was removed because it looked goofy, too low-res and unrealistic: it bent the whole tree's geometry at art resolution. Every animation must instead be the way a pixel artist would do it, with a few deliberate pixels changing per frame. Big things never move through low-res geometry.
- **Getting in the way.** Nothing covers the name or the menu, blocks scrolling, or steals focus. Nothing flashes or demands attention.
- **Busy.** The scene should read as calm. The ambient events are rare and small.

## Constraints

- **Stack:** Vite + React. The scene is drawn in `src/components/PixelScene/` (`scene.js` builds the static picture; `PixelScene.jsx` runs the animation on a timer of about 110ms per frame, about 9fps, stepped like a sprite). Shared helpers are in `src/utils/pixel.js`.
- **Pixel size:** the art is drawn at low resolution and scaled by a whole number, `px = max(3, round(min(width, height * 1.6) / 360))`. Every new sprite and effect lives on that art-pixel grid.
- **Deterministic scene:** layout comes from seeded randomness, so positions are stable between visits.
- **Placement:** the scene layout differs on narrow screens (art width under 200 pixels: tree centred, moon top right) and wide screens (tree at 78%, moon at 16%). Secret positions must follow the layout they belong to.
- **Clear area:** the name and subtitle sit centred in the sky at about 26% height (34% on phones). Nothing interactive may sit under them.
- **Reduced motion:** when the visitor prefers reduced motion, ambient animation stays off (already the case). Secrets still work, but their reactions show as single still frames instead of animations.
- **Battery:** the animation loop pauses when the hero is off screen or the tab is hidden (already the case); new work must keep that.
- **Accessibility:** the canvas is decorative (`aria-hidden`). The secrets are a bonus, and a keyboard user loses no content by missing them.

## What gets built

### Ambient (on its own)

Already live: stars twinkle, and fireflies drift around the crown.

New:

1. **Falling leaf.** Now and then (Iris approved; builder picks the rhythm, roughly every 15–30s) a single leaf pixel or two leaves the edge of the crown and drifts down to the ground. It sways side to side in stepped frames, then fades out over a couple of frames when it lands.
2. **Shooting star.** Every 20–40 seconds, a short streak of a few pixels with a fading tail crosses part of the upper sky diagonally. It takes about 1.5 seconds, slow enough to catch (see secret 5). It never crosses the name.

### Chosen (the visitor triggers it)

3. **Stars near the cursor.** Stars within a small radius of the pointer get slightly brighter, and the brightest ones gain a one-pixel cross. This must stay subtle: a gentle glow following the pointer, not a spotlight. Desktop only; there is no hover on touch.

### The five secrets (all in the hero)

Each secret is a small pixel feature drawn into the scene. It is noticeable to a curious eye, but it never shouts.

| # | Secret | Hidden as | Click/tap reaction |
|---|--------|-----------|--------------------|
| 1 | **Owl** | a dark shape on a branch inside the crown; only its two faint eyes show | blinks, turns its head |
| 2 | **Moon rabbit** | nothing extra visible; the moon itself | a tiny rabbit silhouette appears on the moon for a moment ("rabbit in the moon") |
| 3 | **Cat constellation** | a loose cluster of stars in a quiet part of the sky | thin pixel lines connect the stars into a cat shape, hinting at the reward |
| 4 | **Burrow** | a small dark hole in the near hill | a mouse peeks out and ducks back in |
| 5 | **Shooting star** | the ambient shooting star | clicking or tapping it while it is crossing catches it |

**Catching the shooting star is forgiving** (Iris's call). Everyone who tries should be able to get it, on phones too:
- The streak stays visible for about 1.5 seconds.
- A click or tap anywhere near its path counts, not just on the head of the streak.
- The ambient timing (every 20–40 seconds) is unchanged, so finding it is mostly about noticing it.

**On every find:**
- A small pixel "+1" rises from the spot and fades in a few stepped frames, with a brief sparkle.
- The first find counts. Later clicks still play the reaction, but show no "+1".

**Progress:** found secrets are saved in the browser (`localStorage`, wrapped in try/catch), so a returning visitor keeps them. Nothing shows the count.

### The reward: the cat

When the fifth secret is found:
1. A small pixel cat appears on the near hill with a short entrance (it walks in from the edge or hops up), so it feels earned.
2. From then on it stays on every visit, because it's saved with the progress.

**Controls:**
- **Desktop:** the arrow keys or A/D walk it left and right along the hill. It follows the ground line.
- **Touch:** tapping somewhere on the hill makes it walk there.

**Behaviour:**
- When idle, it sits, and now and then it blinks or flicks its tail.
- It is drawn with frame-based sprite animation: a walk cycle of a few frames, plus idle frames.
- The arrow keys only move the cat while the hero is in view and no input field has focus. They must never hijack page scrolling elsewhere, and the page must still scroll with the keyboard when the cat isn't being steered.
- **Reduced motion** (Claude's call): the entrance snaps the cat into place without a walk-in or hop. The walk cycle stays, because the visitor starts it themselves. The idle blink and tail flick are off.

## Decided in the conversation

- Ambient and chosen interactions both, treated like a game world.
- Exactly five secrets for now, all in the hero.
- "+1" on each find; no visible counter.
- The reward is a controllable cat.
- Approved ambient additions: falling leaf, shooting star. Subtle star glow near the cursor.
- Rejected: night/dusk toggle, tree sway, cursor-following fireflies.

## Left to the builder

- The exact sprites (owl, rabbit, mouse, cat, "+1" digits), within the existing palette and the quality bar above.
- How a click maps to a secret: art-pixel hit boxes, a little generous on touch.
- The timing details of the ambient events within the ranges given.
- How the cat picks up keyboard focus without breaking normal scrolling: for example, steering starts after the cat is clicked, or as soon as it appears while the hero is in view.
- Whether the "+1" is drawn on the canvas or as a pixel-font DOM element above it, as long as it lines up with the art pixels and looks the same.

## Not decided yet (parked)

- The individual leaf flicker, heading "thunk" on scroll, clicking a star to flare it, dither wipe on card images, and firefly coming to a click were offered but not chosen. They stay out unless Iris asks for them.
- Whether the secrets survive once Iris replaces the placeholder with her own hero art. They are built for this placeholder; with her art they would be redrawn or replaced.
