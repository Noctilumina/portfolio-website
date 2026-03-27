# Building a Cyberpunk Red Rules Wiki (From PDF to 500 Searchable Entries)

I DM a Cyberpunk Red campaign and I can handle the rules fine. I've been running sessions long enough to improvise my way through most situations. But every minute I spend looking up a specific DV or double-checking how suppressive fire works is a minute I'm not spending on the actual GM'ing. The improvisation, the NPC voices, the story, that's the fun part. Flipping through a 400-page PDF is not.

So I built a searchable rules wiki. Inside my portfolio. With a panic button.

## The Efficiency Problem

I could always figure out the rules eventually. But "eventually" means breaking the flow of a scene. Grappling is on page 176. Death saves are on page 222. The Night Market tables are on page 337. I'd find it, sure, but by then the tension I'd built up is gone and everyone's checking their phones.

I wanted to spend my energy on making sessions memorable, not on being a rules lawyer. So I needed:
1. A **quick reference** for "how does X work?" with step-by-step procedures, instantly
2. A **full wiki** with searchable, cross-linked articles for prep and deeper dives

## Extracting the Rules

The Cyberpunk Red core rulebook is a PDF. I used a **retrieval-augmented generation** approach: extract specific page ranges to text, then use an LLM to perform **structured data extraction**, converting raw prose and tables into organized wiki entries with consistent schemas (ID, title, category, markdown content, cross-reference links).

For larger sections I used **task decomposition**, splitting the book into thematic chunks and processing them in parallel with separate LLM agents. Each agent had a focused scope (combat mechanics, equipment catalogs, lore) which improved extraction accuracy over trying to process everything at once.

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

## Verification: LLM-as-Judge

Here's the thing about LLM-generated content: it's confidently wrong in ways that are hard to spot. My first extraction pass had death saves backwards, grapple damage wrong, suppressive fire dealing damage (it doesn't), and drug effects that were hallucinated entirely.

To catch these, I used an **LLM-as-judge** pattern: separate verification agents that cross-referenced every quick ref entry against the source PDF text, flagging discrepancies. This is essentially **automated peer review**, where the judge agent has no knowledge of what the extraction agent produced and evaluates purely against the source material.

The judges found 67 errors across 47 entries, plus 35 missing mechanics:

- Death saves: roll UNDER BODY to survive, 10 always fails (extraction agent had it inverted)
- Critical injuries trigger on two or more 6s on damage dice (not crossing wound thresholds, a **confabulation** where the LLM filled in plausible-sounding but incorrect logic)
- Falling damage is 2d6 per 10m and armor DOES help (entirely fabricated damage scale)
- Every single drug entry had hallucinated stat bonuses
- Several "gangs" were from Cyberpunk 2077, not the RED core book (**domain contamination** from training data)

The judge pattern caught issues I wouldn't have noticed myself, since many of the errors sounded mechanically reasonable. It's a good reminder that LLM extraction needs systematic validation, not just a quick skim.

## Testing It

I haven't had a chance to use it in a live session yet, but I've been going back through my notes from last session and retroactively looking up all the rules I fumbled or had to pause for. Every single one of them comes up instantly in the quick ref now. Grappling, suppressive fire, a specific drug effect, how shotgun shells actually spread. All the moments where I broke flow to look something up.

Next session is the real test. I'm planning to have it open on my laptop alongside my notes and see if it actually keeps the pace up the way I'm hoping it will.
