# Building This Portfolio: A Pop Art Experiment

When I set out to build my portfolio, I knew I didn't want another cookie-cutter developer site. I wanted something with personality. Something that would make people stop scrolling and actually look.

## The Starting Point

The project began as a fairly standard React portfolio: dark theme, smooth animations, a 3D hero with Three.js, and the usual sections. It worked, but it felt... safe. Like every other developer portfolio out there.

## The Pivot to Neo-Brutalism

The turning point came when I started experimenting with card designs. I found this bold, neo-brutalist style with thick black borders, hard drop shadows, and geometric accent shapes. Suddenly the site had *attitude*. I scrapped the dark theme, switched to a warm cream base, and rebuilt everything around this aesthetic.

The key design elements that define the look:

- **Hard shadows:** every card, button, and input has a solid black offset shadow
- **Thick borders:** none of that subtle 1px border nonsense
- **Space Mono:** a monospace font for headings gives it that dev/terminal feel
- **Halftone dithering:** the section dividers use a proper halftone dot pattern, rendered on canvas for performance
- **Floating accent shapes:** the project cards have little rotated diamonds in mint and gold that animate on hover

## The Tech Stack

Nothing exotic here. Just the fundamentals done well:

- **React 18 + Vite:** fast dev, fast builds
- **React Router v7:** with `useBlocker` for intercepting navigation and playing dither transitions
- **Framer Motion:** scroll reveal animations with `prefers-reduced-motion` support
- **CSS Modules:** scoped styling, no class name conflicts
- **Canvas API:** for the dithering effects (both section dividers and page transitions)

## The Dither Transition

My favorite feature. When you navigate between pages, the screen fills with growing halftone dots in a diagonal wave, then they shrink to reveal the new page. It's rendered on a `<canvas>` element using `requestAnimationFrame` for smooth 60fps animation.

The trick was integrating this with React Router. I used `useBlocker()` to intercept *all* navigation (including browser back/forward), play the cover animation, let the navigation complete while the screen is covered, then play the reveal. Getting the timing right without flashes or double-transitions was the hardest part of the whole project.

## Localization

The site supports English and Dutch, with automatic detection based on browser language. Every piece of text goes through a simple i18n context. No heavy libraries needed. Blog posts have separate `.md` files per language.

## What I Learned

- **Less is more with animations.** The scroll reveals are fast (0.35s) and subtle. Heavy animations get old quick.
- **Brutalism needs restraint.** It's easy to go overboard. The accent shapes and patterns are only on project cards. Everything else uses just borders and shadows.
- **Canvas beats SVG for repetitive shapes.** The dithering started as 800+ SVG circles per divider. Switching to canvas was a massive performance win.
- **`useBlocker` is powerful.** It's the right way to do page transitions in React Router v7. No hacky popstate listeners needed.

## What's Next

This site is a living project. I'll keep iterating on the design, adding blog posts, and maybe experimenting with new interaction patterns. If you have thoughts or feedback, hit me up via the contact form!
