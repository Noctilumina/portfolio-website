# Building a Tools Page (Because My Portfolio Was Getting Crowded)

I've been building small tools for years. A CV builder here, a markdown editor there, a JSON formatter for when I'm too lazy to open a proper IDE. They were all sitting in random repos, half-forgotten. Then I realized: my portfolio already has the infrastructure. Why not give them a home?

## The Problem

My portfolio was starting to feel cluttered. Projects, blog posts, a CV page, and now I wanted to showcase these utility tools too. Cramming them into the "Projects" section didn't feel right. They're not projects in the traditional sense. They're things I built because I needed them.

## The Solution: A Dedicated Tools Page

I created a `/tools` route with its own listing page. Each tool gets a card with a title, description, tech tags, and either an internal route (for tools built into the site) or external links (for standalone repos).

The tools page has:
- **Fuzzy search**: type "json" or "markdown" and it instantly filters
- **Category filter chips**: filter by what the tool does (Productivity, Developer, Creative, TTRPG, etc.)
- **Pop art chip styling**: the filter chips use the same pressed-button animation as the rest of the site

## What's On There

Currently sitting at 9 tools:

- **CV Builder**: fill in your details, get a live two-column CV preview, print as PDF. Pre-filled with my own data as a demo
- **Markdown Editor**: write markdown, see it rendered in the portfolio's pop art style
- **JSON Formatter**: paste, prettify, minify, or explore as a collapsible tree
- **Diff Checker**: side-by-side text comparison with line-level highlighting
- **CSS Style Explorer**: pick a design movement (Pop Art, Cyberpunk 2077, Glassmorphism, etc.) and tweak every CSS property with sliders
- **Cyberpunk Red Generator**: random encounters, NPCs, loot, and Night Markets for my TTRPG sessions
- **CPR Rules Reference**: a full searchable wiki of the Cyberpunk Red rulebook (more on this in another post)
- Plus placeholders for my Image Tagger, Sprite Selector, and TTRPG Map Maker

## Lessons Learned

1. **Don't over-engineer the listing.** A simple grid with search and filter chips is all you need.
2. **Internal tools are better than external links.** When a tool lives inside your portfolio, visitors can actually try it. A GitHub link is a dead end for most people.
3. **Pre-fill with real data.** The CV builder loads with my actual CV info. It shows the tool in action immediately instead of presenting an empty form.
4. **Category tags matter more than tech tags.** Nobody filters tools by "React" or "CSS Modules." They filter by "what does this thing do?"

## What's Next

I'll probably keep adding tools as I build them. The CSS Style Explorer started as a simple shadow generator and grew from there, which seems to be how these things go.
