# Building a Cyberpunk Red Rules Wiki (From PDF to 500 Searchable Entries)

I DM a Cyberpunk Red campaign and I can handle the rules fine. I've been running sessions long enough to improvise my way through most situations. But every minute I spend looking up a specific DV or double-checking how suppressive fire works is a minute I'm not spending on the actual GM'ing. The improvisation, the NPC voices, the story, that's the fun part. Flipping through a 400-page PDF is not.

So I built a searchable rules wiki. Inside my portfolio. With a panic button.

## The Efficiency Problem

I could always figure out the rules eventually. But "eventually" means breaking the flow of a scene. Grappling is on page 176. Death saves are on page 222. The Night Market tables are on page 337. I'd find it, sure, but by then the tension I'd built up is gone and everyone's checking their phones.

I wanted to spend my energy on making sessions memorable, not on being a rules lawyer. So I needed:
1. A **quick reference** for "how does X work?" with step-by-step procedures, instantly
2. A **full wiki** with searchable, cross-linked articles for prep and deeper dives

## Extracting the Rules

The Cyberpunk Red core rulebook is a PDF. I converted specific page ranges to text, then used LLMs to structure the raw text into organized wiki entries. Each entry gets an ID, title, category, markdown content, and cross-reference links to related entries.

The LLM approach worked well for the initial extraction but introduced some interesting errors (more on that below). The key was treating the LLM output as a first draft, not a finished product.

## The Wiki: 100 Articles, 23 Categories

The wiki has a sidebar + content layout. Click a category, click an article, read the rules. Internal links use a `[[entry-id]]` syntax that gets converted to clickable cross-references.

Categories cover everything: Statistics, Skills, Combat, Damage & Armor, Melee, Ranged, Netrunning, Healing, Critical Injuries, Reputation, Vehicle Combat, Drugs, all 10 Roles, Cyberware, Night City (districts, gangs, locations), Equipment catalogs, GM Tools, Character Creation, Lifestyle, Lore & History, Corporations, Everyday Life, and Adventures.

Tables render properly with pop art styling matching the rest of the portfolio. This matters because the CPR rulebook is *full* of tables.

## The Quick Ref: 400+ Panic Scenarios

This is the part I'm most excited to actually use. The "Quick Ref" mode has a big search bar at the top. Type "grapple" or "death save" or "autofire" and you instantly get a step-by-step procedure card with the exact mechanics bolded.

400+ scenarios organized into 17 topic categories with filter chips:

- **Combat (72):** How to shoot someone, how autofire works, every weapon type, every exotic weapon, every ammo type, tactical situations
- **Medical (23):** Death saves, healing, every critical injury individually, surgery, Trauma Team
- **Equipment (53):** Every weapon explained, armor penalties, ammo comparison, buying guides
- **Netrunning (37):** Step-by-step netrunning, every program, every Black ICE
- **Roles (32):** What every role can do, every sub-ability explained
- **Social (20):** Persuasion, facedowns, negotiation, contacts
- Plus: Stats, Skills, Cyberware, Drugs, Vehicles, Environment, Night City, Lore, GM Tips, Character Creation, Lifestyle

Each entry has tags for fuzzy search, an emoji icon, and 4-7 numbered steps with the key mechanics in bold.

## Verification Pass

Here's the thing about using LLMs to extract rules: they confidently get things wrong. My first pass had death saves backwards (roll UNDER BODY, not over), grapple damage wrong (BODY stat, not 3d6), suppressive fire dealing damage (it doesn't), and drug effects that were completely fabricated.

I ran a verification pass where I cross-checked every single quick ref entry against the actual PDF text. Found 67 errors across 47 entries, plus 35 missing mechanics. Some highlights of what was wrong:

- Death saves: roll UNDER BODY to survive, 10 always fails (LLM had it backwards)
- Critical injuries trigger on two or more 6s on damage dice (not crossing wound thresholds)
- Falling damage is 2d6 per 10m and armor DOES help (LLM had 1d6 per meter, armor doesn't help)
- Every single drug entry was wrong
- Several "gangs" were from Cyberpunk 2077, not the RED core book

Lesson: always verify against the source. LLM-extracted data is a great starting point but needs a human pass before you trust it at the table.

## Testing It

I haven't had a chance to use it in a live session yet, but I've been going back through my notes from last session and retroactively looking up all the rules I fumbled or had to pause for. Every single one of them comes up instantly in the quick ref now. Grappling, suppressive fire, a specific drug effect, how shotgun shells actually spread. All the moments where I broke flow to look something up.

Next session is the real test. I'm planning to have it open on my laptop alongside my notes and see if it actually keeps the pace up the way I'm hoping it will.
