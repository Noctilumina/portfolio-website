export const WIKI_CATEGORIES = [
  'Statistics',
  'Skills',
  'Combat',
  'Damage & Armor',
  'Melee Combat',
  'Ranged Combat',
  'Netrunning',
  'Healing',
  'Critical Injuries',
  'Reputation',
  'Vehicle Combat',
  'Drugs',
  'Roles',
  'Cyberware',
  'Night City',
  'Equipment',
  'GM Tools',
  'Character Creation',
  'Lifestyle',
  'Lore & History',
  'Corporations',
  'Everyday Life',
  'Adventures',
];

export const WIKI_ENTRIES = [
  // ============================================================
  // STATISTICS
  // ============================================================
  {
    id: 'stats-overview',
    title: 'Statistics Overview',
    category: 'Statistics',
    content: `## Statistics (STATs)

Statistics are numbers that describe your Character's abilities, rated from **1 to 8** (but can go higher). Characters have **10 Primary Statistics** arranged into four groups.

### Mental Group
- **INT** (Intelligence) -- Brightness, cleverness, awareness, perception, ability to learn.
- **WILL** (Willpower) -- Determination, courage, ability to face danger/stress. Important for HP calculation.
- **COOL** -- Ability to impress/influence people, charisma, social interactions.
- **EMP** (Empathy) -- Ability to relate to and care for others. Offsets effects of cyberpsychosis.

### Combat Group
- **TECH** (Technique) -- Ability to manipulate tools or instruments. Not the same as REF.
- **REF** (Reflexes) -- Response time and coordination. Affects ability to hit with ranged weapons.

### Fortune Group
- **LUCK** -- Points can be spent to offset die rolls. Pool refills at beginning of next session.

### Physical Group
- **BODY** -- Size, toughness, ability to stay alive. Important for HP and Death Save.
- **DEX** (Dexterity) -- Physical competence, balancing, leaping, combat. Affects melee attacks and dodging.
- **MOVE** (Movement) -- Speed of movement. Each Turn you can move MOVE x 2 m/yds.`,
    related: ['derived-stats', 'skills-overview', 'wound-states'],
  },
  {
    id: 'derived-stats',
    title: 'Derived Statistics (HP, Humanity)',
    category: 'Statistics',
    content: `## Derived Statistics

These are calculated from your primary STATs.

### Hit Points (HP)

HP = **10 + (5 x average of BODY and WILL, rounded up)**

| BODY\\\\WILL | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|
| **2** | 20 | 25 | 25 | 30 | 30 | 35 | 35 | 40 | 40 |
| **3** | 25 | 25 | 30 | 30 | 35 | 35 | 40 | 40 | 45 |
| **4** | 25 | 30 | 30 | 35 | 35 | 40 | 40 | 45 | 45 |
| **5** | 30 | 30 | 35 | 35 | 40 | 40 | 45 | 45 | 50 |
| **6** | 30 | 35 | 35 | 40 | 40 | 45 | 45 | 50 | 50 |
| **7** | 35 | 35 | 40 | 40 | 45 | 45 | 50 | 50 | 55 |
| **8** | 35 | 40 | 40 | 45 | 45 | 50 | 50 | 55 | 55 |
| **9** | 40 | 40 | 45 | 45 | 50 | 50 | 55 | 55 | 60 |
| **10** | 40 | 45 | 45 | 50 | 50 | 55 | 55 | 60 | 60 |

### Seriously Wounded Threshold
Half of total HP, rounded up.

### Death Save
Equal to your **BODY** statistic. Roll d10; if you roll under BODY, you live. A roll of 10 always fails.

### Humanity (HUM)
**EMP x 10** = starting Humanity.

| EMP | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| HUM | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 |

As you lose Humanity (mainly from cyberware), your EMP effectively equals the tens digit of your current Humanity. E.g., 44 Humanity = EMP 4; drop to 39 = EMP 3.

If Humanity drops below 0, the character enters **cyberpsychosis**.`,
    related: ['stats-overview', 'wound-states', 'death-saves', 'therapy'],
  },

  // ============================================================
  // SKILLS
  // ============================================================
  {
    id: 'skills-overview',
    title: 'Skills & Skill Checks',
    category: 'Skills',
    content: `## Skill Check Resolution

A Skill represents training. Your **Skill Base** = STAT + Skill Level.

### Two Ways to Resolve

**1. Opposed Check** (vs. a living opponent):
\`\`\`
Attacker's STAT + Skill + 1d10  vs.  Defender's STAT + Skill + 1d10
\`\`\`
Ties go to the Defender.

**2. Against a Difficulty Value (DV):**
\`\`\`
STAT + Skill + 1d10  vs.  DV
\`\`\`

### Difficulty Values

| Difficulty | DV | Description |
|---|---|---|
| Simple | 9 | Most people can do without thinking |
| Everyday | 13 | Most people can do without special training |
| Difficult | 15 | Hard without training or natural talent |
| Professional | 17 | Takes actual training |
| Heroic | 21 | Only the best of the best |
| Incredible | 24 | Truly Olympian |
| Legendary | 29 | Awe-inspiring, stories written about it |

### Critical Success
Roll a natural **10** on d10: roll another d10 and **add** to your total. A second 10 does not trigger again.

### Critical Failure
Roll a natural **1** on d10: roll another d10 and **subtract** from your total. A second 1 does not trigger again.

### Modifiers (Negative)

| Condition | Modifier |
|---|---|
| Night or low lighting | -1 |
| Never done this before | -1 |
| Complex task | -2 |
| Don't have right tools/parts | -2 |
| Slept uncomfortable | -2 |
| Under extreme stress | -2 |
| Exhausted | -4 |
| Extremely drunk or sedated | -4 |
| Trying to do task secretly | -4 |
| Task obscured by smoke/darkness | -4 |

### Using LUCK
Before rolling, spend LUCK points from your pool (refills each session) to add +1 per point spent.

### Complementary Skills
A good roll in a related Skill can grant a +1 to a subsequent Skill Check (doesn't stack).

### Taking Extra Time
Taking 4x longer on a task grants a +1 bonus.

### No Skill?
Use only the linked STAT + 1d10 (no Skill bonus).`,
    related: ['stats-overview', 'skill-list-awareness', 'skill-list-body', 'skill-list-combat'],
  },
  {
    id: 'skill-list-awareness',
    title: 'Awareness & Body Skills',
    category: 'Skills',
    content: `## Awareness Skills

| Skill | Linked STAT | Notes |
|---|---|---|
| Concentration | WILL | Focus, memory, mental control |
| Conceal/Reveal Object | INT | Hiding/finding hidden objects, concealing weapons |
| Lip Reading | INT | Reading lips to determine speech |
| Perception | INT | Spotting hidden things, clues, traps, people using Stealth |
| Tracking | INT | Following trails and tracks |

## Body Skills

| Skill | Linked STAT | Notes |
|---|---|---|
| Athletics | DEX | Jumping, climbing, throwing, swimming, lifting; also thrown weapons |
| Contortionist | DEX | Escaping bindings, fitting into tight spaces |
| Dance | DEX | Professional-level dancing |
| Endurance | WILL | Withstanding harsh conditions and hardship |
| Resist Torture/Drugs | WILL | Resisting interrogation, torture, drugs |
| Stealth | DEX | Moving quietly, hiding, evading detection (opposed by Perception) |`,
    related: ['skills-overview', 'skill-list-education', 'skill-list-combat'],
  },
  {
    id: 'skill-list-education',
    title: 'Education & Control Skills',
    category: 'Skills',
    content: `## Control Skills

| Skill | Linked STAT | Notes |
|---|---|---|
| Drive Land Vehicle | REF | Driving land vehicles |
| Pilot Air Vehicle (x2) | REF | Piloting air vehicles (costs double to improve) |
| Pilot Sea Vehicle | REF | Piloting sea vehicles |
| Riding | REF | Riding living creatures |

## Education Skills

| Skill | Linked STAT | Notes |
|---|---|---|
| Accounting | INT | Balancing books, creating false books |
| Animal Handling | INT | Handling, training, caring for animals |
| Bureaucracy | INT | Dealing with bureaucrats, cutting red tape |
| Business | INT | Business practices, supply/demand, management |
| Composition | INT | Writing songs, articles, stories |
| Criminology | INT | Examining evidence, forensics, police records |
| Cryptography | INT | Encrypting and decoding messages |
| Deduction | INT | Taking clues and reaching non-obvious conclusions |
| Education | INT | General knowledge, reading, writing, math, history |
| Gamble | INT | Figuring odds, games of chance |
| Language | INT | Speaking a specific language (choose one per increase) |
| Library Search | INT | Using databases, Data Pool, libraries |
| Local Expert | INT | Knowing a specific area (choose location per increase) |
| Science | INT | Scientific knowledge (choose field per increase) |
| Tactics | INT | Managing large-scale battle |
| Wilderness Survival | INT | Surviving in wilderness, setting traps, foraging |`,
    related: ['skills-overview', 'skill-list-awareness', 'skill-list-combat'],
  },
  {
    id: 'skill-list-combat',
    title: 'Fighting, Ranged & Performance Skills',
    category: 'Skills',
    content: `## Fighting Skills

| Skill | Linked STAT | Notes |
|---|---|---|
| Brawling | DEX | Fighting and grappling with brute strength |
| Evasion | DEX | Dodging melee attacks; REF 8+ can also dodge ranged attacks |
| Martial Arts (x2) | DEX | Fighting with a Martial Arts Form (choose form; costs double) |
| Melee Weapon | DEX | Fighting with melee weapons |

## Ranged Weapon Skills

| Skill | Linked STAT | Notes |
|---|---|---|
| Archery | REF | Firing bows and crossbows |
| Autofire (x2) | REF | Keeping Autofire on target (costs double) |
| Handgun | REF | Firing pistols, SMGs in single-shot |
| Heavy Weapons (x2) | REF | Firing rocket launchers, grenade launchers (costs double) |
| Shoulder Arms | REF | Firing assault rifles, shotguns, sniper rifles |

## Performance Skills

| Skill | Linked STAT | Notes |
|---|---|---|
| Acting | COOL | Assuming roles, disguise, faking emotions |
| Play Instrument | TECH | Playing a musical instrument (choose one) |

## Social Skills

| Skill | Linked STAT | Notes |
|---|---|---|
| Bribery | COOL | Knowing when/how to bribe |
| Conversation | EMP | Extracting info through careful conversation |
| Human Perception | EMP | Reading facial expressions, detecting lies |
| Interrogation | COOL | Forcibly extracting information |
| Persuasion | COOL | Convincing and influencing individuals |
| Personal Grooming | COOL | Maximizing physical attractiveness |
| Streetwise | COOL | Finding illegal items, talking to criminal element |
| Trading | COOL | Striking good bargains |
| Wardrobe & Style | COOL | Knowing the right clothes |`,
    related: ['skills-overview', 'skill-list-tech'],
  },
  {
    id: 'skill-list-tech',
    title: 'Technique Skills',
    category: 'Skills',
    content: `## Technique Skills

All Technique Skills use **TECH** as their linked STAT.

| Skill | Notes |
|---|---|
| Air Vehicle Tech | Repairing/maintaining air vehicles |
| Basic Tech | Repairing simple electronics and all items not covered by other TECH Skills |
| Cybertech | Repairing/maintaining cybernetics |
| Demolitions (x2) | Setting, defusing explosives (costs double) |
| Electronics/Security Tech (x2) | Complex electronics, cyberdecks, security systems (costs double) |
| First Aid | Stabilizing wounds, treating common Critical Injuries. Always trained to at least +2. |
| Forgery | Creating and detecting false documents |
| Land Vehicle Tech | Repairing/maintaining land vehicles |
| Paint/Draw/Sculpt | Producing professional art |
| Paramedic (x2) | Stabilizing wounds, treating all but deadliest Critical Injuries (costs double) |
| Photography/Film | Professional photos, motion pictures, braindances |
| Pick Lock | Non-electronic locks and security |
| Pick Pocket | Picking pockets and shoplifting |
| Sea Vehicle Tech | Repairing/maintaining sea vehicles |
| Weaponstech | Repairing/maintaining all weapon types |

## Repair DVs

### Vehicle Repair
| Damage Level | DV | Time |
|---|---|---|
| Minor | 9 | 3 Hours |
| Major | 13 | 1 Day |
| Destroyed | 17 | 1 Week |

### Item Repair (by Price Category)
| Price Category | DV | Time |
|---|---|---|
| Cheap/Everyday | 9 | 1 Hour |
| Costly | 13 | 6 Hours |
| Premium | 17 | 1 Day |
| Expensive | 21 | 1 Week |
| Very Expensive | 24 | 2 Weeks |
| Luxury | 29 | 1 Month |
| Super Luxury | 29 | 1 Month per 10,000eb |`,
    related: ['skills-overview', 'healing-overview'],
  },

  // ============================================================
  // COMBAT
  // ============================================================
  {
    id: 'combat-overview',
    title: 'Combat & Initiative',
    category: 'Combat',
    content: `## Combat Time

Combat is divided into **Turns** (~3 seconds each). All entities taking their Turns = 1 **Round** (~3 seconds).

### Initiative
\`\`\`
Initiative = REF + 1d10
\`\`\`
Descending order. Ties re-roll. Queue repeats each Round in the same order.

### Your Turn
Each Turn you get:
- **1 Move Action** -- Move up to MOVE x 2 m/yds (or MOVE squares on a grid, including diagonal)
- **1 Action** -- Attack, Use Skill, Use Object, etc.

### Combat Actions

| Action | Effect |
|---|---|
| **Move Action** | Move MOVE x 2 m/yds |
| **Attack** | Make a Melee or Ranged Attack |
| **Choke** | Choke a Grabbed opponent (deals BODY as damage direct to HP) |
| **Equip/Drop Shield** | Takes an Action |
| **Get into Vehicle** | Enter an unlocked vehicle |
| **Get Up** | Stand from Prone (required before you can Move) |
| **Grab** | Grab/hold opponent, take their item, or escape grapple |
| **Hold Action** | Delay Action until a specified trigger or Initiative number |
| **Human Shield** | Equip a Grabbed opponent as a shield |
| **Reload** | Fully reload and replace a magazine |
| **Run** | Take an additional Move Action |
| **Start Vehicle** | Start vehicle, jump to top of Initiative Queue |
| **Stabilize** | Begin natural healing or save from Mortally Wounded |
| **Throw** | Throw grabbed opponent or held object |
| **Use NET Actions** | Netrunner only: take multiple NET Actions |
| **Use Object** | Manipulate objects (open door, press button, etc.) |
| **Use Skill** | Quick task (~3 seconds); longer tasks require multiple Turns |
| **Vehicle Maneuver** | Focus on a dangerous driving maneuver |

### Split Movement & ROF
You can split your Move Action around your Action. **2 ROF** weapons can attack twice per Action and can split attacks across movement. **1 ROF** weapons take your whole Action but you can still split movement around them.

You can never make more than **2 Attack Checks** per Action, and cannot attack with two 1 ROF weapons in the same Action.

### Drawing Weapons
Drawing an easily accessible weapon into a free hand is **not** an Action. Dropping a held weapon is not an Action. Stowing a weapon on your person **is** an Action.

### Other Movement
Swimming, climbing, and jumping with a running start cost **2 m/yds per 1 m/yd** traveled. Standing jump = half the distance of a running jump.`,
    related: ['ranged-combat', 'melee-combat', 'aimed-shots', 'wound-states'],
  },
  {
    id: 'aimed-shots',
    title: 'Aimed Shots',
    category: 'Combat',
    content: `## Aimed Shots

At a maximum of **1 ROF**, you can aim a single Ranged or Melee Attack by taking your entire Action and a **-8 to your Check**.

| Target | Effect |
|---|---|
| **Head** | Multiply damage that gets through head armor by **2** |
| **Held Item** | If 1+ damage gets through body armor, target drops one chosen held item |
| **Leg** | If 1+ damage gets through body armor, target also suffers the **Broken Leg** Critical Injury (if they have unbroken legs) |

### Notes
- Autofire cannot be used for Aimed Shots
- Shotgun Shells cannot be used for Aimed Shots
- Martial Arts Special Moves cannot be used for Aimed Shots (unless stated otherwise)`,
    related: ['ranged-combat', 'melee-combat', 'critical-injuries-body', 'critical-injuries-head'],
  },
  {
    id: 'cover',
    title: 'Cover & Shields',
    category: 'Combat',
    content: `## Taking Cover

### Golden Rules
- You are in cover if **fully behind** something that can stop a bullet.
- If they have **line of sight** on you, you are **not** in cover.
- There is **no partial cover** -- it either stops a bullet or it doesn't.
- Enemies can move to re-establish line of sight.
- Cover can be destroyed by attacking it. At 0 HP, cover is destroyed.
- If cover drops to 0 HP, excess damage is **lost** (doesn't harm targets behind it), except with explosives.

### Cover HP by Material

| Material | Thick HP | Thin HP |
|---|---|---|
| Steel | 50 | 25 |
| Stone | 40 | 20 |
| Bulletproof Glass | 30 | 15 |
| Concrete | 25 | 10 |
| Wood | 20 | 5 |
| Plaster/Foam/Plastic | 15 | 0 (Not Cover) |

### Common Cover Examples

| Example | Material | HP |
|---|---|---|
| Bank Vault Door | Thick Steel | 50 |
| Engine Block | Thick Steel | 50 |
| Boulder | Thick Stone | 40 |
| Bank Window | Thick Bulletproof Glass | 30 |
| Concrete Barricade | Thick Concrete | 25 |
| Car Door | Thin Steel | 25 |
| Metal Door | Thin Steel | 25 |
| Log Cabin Wall | Thick Wood | 20 |
| Tree | Thick Wood | 20 |
| Refrigerator | Thin Steel | 25 |
| Shipping Container | Thin Steel | 25 |
| Office Wall | Thick Plaster | 15 |
| Overturned Table | Thin Wood | 5 |
| Wooden Door | Thin Wood | 5 |
| Sofa | Thick Plaster | 15 |
| Windshield | -- | 0 (Not Cover) |

### Shields

| Shield | HP | Cost |
|---|---|---|
| Bulletproof Shield | 10 | 100eb (Premium) |
| Corpse Shield | BODY stat of corpse | Varies |

While wielding a shield with HP remaining, you are **in cover**. When attacked by a visible target, you can interpose the shield. The shield takes the entire attack. At 0 HP, destroyed until repaired.

### Human Shields
Equip a Grabbed opponent as a Human Shield (uses an Action). They are treated as cover for Ranged Attacks (not Melee or head-targeted Aimed Shots). A dead Human Shield becomes a corpse shield with HP = their BODY.`,
    related: ['combat-overview', 'damage-armor'],
  },

  // ============================================================
  // DAMAGE & ARMOR
  // ============================================================
  {
    id: 'damage-armor',
    title: 'Damage, Armor & Ablation',
    category: 'Damage & Armor',
    content: `## Taking Damage

When you take damage:
1. Attacker rolls damage dice for the attack.
2. Subtract your armor's **SP** in the hit location from the damage. Remaining damage is subtracted from your **HP**.
3. If you took any damage, your armor in that location is **ablated** (SP reduced by 1) until repaired.

**Note:** Some effects (fire, poison, choking) bypass armor entirely.

### Hit Locations
- **Body** -- Default location for all attacks
- **Head** -- Only if targeted via Aimed Shot (-8 penalty); damage that gets through is multiplied by x2

### Melee Damage vs. Armor
All melee weapons **ignore half** of the Defender's armor (round up). Example: SP 11 armor is treated as SP 6 vs. melee.

Brawling attacks do **not** ignore half armor.

## Armor Table

| Armor Type | SP | Penalty | Cost |
|---|---|---|---|
| Leathers | 4 | None | 20eb (Everyday) |
| Kevlar | 7 | None | 50eb (Costly) |
| Light Armorjack | 11 | None | 100eb (Premium) |
| Bodyweight Suit | 11 | None | 1,000eb (V. Expensive) |
| Medium Armorjack | 12 | -2 REF, DEX, MOVE | 100eb (Premium) |
| Heavy Armorjack | 13 | -2 REF, DEX, MOVE | 500eb (Expensive) |
| Flak | 15 | -4 REF, DEX, MOVE | 500eb (Expensive) |
| Metalgear | 18 | -4 REF, DEX, MOVE | 5,000eb (Luxury) |

### Armor Rules
- SP does **not stack** -- only highest SP in a location counts.
- Armor penalty applies once (use the worst penalty of all worn armor).
- Armor penalty can reduce MOVE to 0 (immobile).
- All worn armor in a location is ablated simultaneously.`,
    related: ['wound-states', 'combat-overview', 'melee-combat'],
  },
  {
    id: 'wound-states',
    title: 'Wound States',
    category: 'Damage & Armor',
    content: `## Wound States

Each new Wound State replaces the previous one's effect.

| Wound State | Threshold | Effect | Stabilization DV |
|---|---|---|---|
| **Not Wounded** | Full HP | None | -- |
| **Lightly Wounded** | Less than Full HP | None | DV10 |
| **Seriously Wounded** | Less than 1/2 HP (round up) | **-2 to all Actions** | DV13 |
| **Mortally Wounded** | Less than 1 HP | **-4 to all Actions**, **-6 to MOVE** (min 1), must make **Death Save** at start of each Turn. Suffer a Critical Injury whenever damaged. Death Save Penalty +1 per hit. | DV15 (heals to 1 HP, then Unconscious for 1 min) |
| **Dead** | One failed Death Save | Death. Never coming back. | -- |`,
    related: ['death-saves', 'healing-overview', 'critical-injuries-body'],
  },
  {
    id: 'death-saves',
    title: 'Death Saves',
    category: 'Damage & Armor',
    content: `## Death Saves

At the start of each Turn while **Mortally Wounded**, roll a Death Save:
\`\`\`
Roll d10 -- must roll UNDER your BODY to survive
\`\`\`

- A roll of **10 always fails** (automatic death).
- Each Death Save you make **increases your Death Save Penalty by 1**, making future saves progressively harder.
- The penalty continues until you are brought to 1 HP by Stabilization, which **resets** the penalty to your **Base Death Save Penalty** (starts at 0, increased by certain Critical Injuries).
- **If you fail even a single Death Save, you die.** No coming back.

### Mortally Wounded Characters
- Suffer a **Critical Injury** whenever they are damaged by any Attack
- Their **Death Save Penalty increases by 1** each time they are damaged
- Upon successful stabilization, healed to **1 HP** and fall **Unconscious** (1 minute)`,
    related: ['wound-states', 'healing-overview', 'critical-injuries-body'],
  },

  // ============================================================
  // MELEE COMBAT
  // ============================================================
  {
    id: 'melee-combat',
    title: 'Melee Combat',
    category: 'Melee Combat',
    content: `## Melee Combat Resolution
\`\`\`
Attacker's DEX + Melee Weapon Skill + 1d10
  vs. Defender's DEX + Evasion Skill + 1d10
\`\`\`
Defender wins ties.

### Melee Weapon Table

| Type | Examples | Damage | ROF | Concealable | Cost |
|---|---|---|---|---|---|
| Light Melee | Knife, Tomahawk | 1d6 | 2 | YES | 50eb (Costly) |
| Medium Melee | Bat, Crowbar, Machete | 2d6 | 2 | NO | 50eb (Costly) |
| Heavy Melee | Lead Pipe, Sword, Spiked Bat | 3d6 | 2 | NO | 100eb (Premium) |
| Very Heavy Melee | Chainsaw, Sledgehammer | 4d6 | 1 | NO | 500eb (Expensive) |

### Key Rules
- All melee weapons (except Very Heavy) are **2 ROF** (two attacks per Action).
- Very Heavy Melee Weapons are **1 ROF**.
- **Melee weapons ignore half** of Defender's armor (round up).
- Must be within **2 m/yds** (reach) of target.
- Melee weapons must be wielded in proper number of hands, **unless BODY 8+** (can wield two-handed in one hand).
- Damage is based on weapon classification, not your BODY (that's Brawling).

## Brawling
Uses **Brawling Skill** (DEX-linked). Damage based on BODY:

| BODY | Damage |
|---|---|
| 4 or under | 1d6 |
| 5-6 (or 4+ with Cyberarm) | 2d6 |
| 7-10 | 3d6 |
| 11+ | 4d6 |

Brawling attacks do **not** ignore half armor. Also 2 ROF.`,
    related: ['grappling', 'martial-arts', 'damage-armor', 'combat-overview'],
  },
  {
    id: 'grappling',
    title: 'Grappling (Grab, Choke, Throw)',
    category: 'Melee Combat',
    content: `## Grab

Use an Action to grab someone, take their item, or escape a grapple. Requires a free hand.

**Resolution:**
\`\`\`
DEX + Brawling + 1d10  vs.  Target's DEX + Brawling + 1d10
\`\`\`

If you win, choose:
- **Grab hold** of Defender -- both enter a Grapple (-2 to all Actions for both)
- **Take one object** the Defender is holding

### While Grappled
- Defender cannot use Move Action (dragged with Attacker)
- No one in the Grapple can use two-handed weapons
- Attacker can end Grapple at any time (no Action)
- Defender (or ally) must use Grab Action and succeed to break free

## Choke

Requires being the Attacker in a Grapple. Costs an Action.
- Deals your **BODY directly to target's HP** (ignores armor, no ablation).
- If damage would reduce target with >1 HP to <0 HP, they are left at **1 HP and Unconscious** instead.
- **3 successive Rounds** of Choking = target goes Unconscious regardless of HP.

## Throw

Requires being the Attacker in a Grapple. Costs an Action.
- Deals your **BODY directly to target's HP** (ignores armor, no ablation).
- Ends the Grapple and leaves target **Prone**.

### Throwing Objects
Use an Action: **DEX + Athletics + 1d10** up to 25 m/yds, using **Grenade Launcher DVs** on the range table. Melee weapons deal their stated damage when thrown but don't halve SP. Grenades deal their normal explosive damage.`,
    related: ['melee-combat', 'combat-overview', 'martial-arts'],
  },
  {
    id: 'martial-arts',
    title: 'Martial Arts',
    category: 'Melee Combat',
    content: `## Martial Arts

Uses **Martial Arts Skill** (DEX, x2 cost). Attacks are **2 ROF**. Cannot use without at least 1 point in the Skill.

### Resolution
\`\`\`
DEX + Martial Arts Form Skill + 1d10
  vs. Defender's DEX + Evasion + 1d10  (or DV for some Special Moves)
\`\`\`

### Martial Arts Damage
Ignores **half** of Defender's armor (round up). Damage based on BODY:

| BODY | Damage |
|---|---|
| 4 or under | 1d6 |
| 5-6 | 2d6 |
| 7-10 | 3d6 |
| 11+ | 4d6 |

## Forms & Special Moves

All forms can use the **Shared** move: **Recovery** -- on Get Up, beat DV13 to not spend an Action.

### Aikido (Soft Form)
- **Disarming Combination** (DV15): Hit same target with Brawling + Martial Arts this Turn; disarm one item.
- **Iron Grip** (DV15): While grappling, target gets -2 to escape attempts and cannot make Ranged Attacks.

### Karate (Hard Form)
- **Armor Breaking Combination** (DV15): Hit same target with Melee Weapon + Martial Arts this Turn; target's armor ablated by 2 extra.
- **Bone Breaking Strike** (WILL 8+, DV vs Evasion): 1 ROF attack; inflicts Broken Ribs Critical Injury. With -8, can target head for Cracked Skull instead.

### Judo (Soft Form)
- **Counter Throw** (DV15): If you dodged all Melee Attacks since last Turn, Throw one attacker (unavoidable, no grapple needed).
- **Grab Escape** (DV15): Hit grappling target twice this Turn; break free and inflict Broken Arm.

### Taekwondo (Hard Form)
- **Pressure Point Strike** (WILL 8+): 1 ROF; inflicts Spinal Injury. With -8, targets head for Brain Injury instead.
- **Flying Kick** (MOVE 8+, moved 4+ m/yds): 1 ROF; fling 4 m/yds toward target, deal damage, target is Prone and knocked off open vehicles.`,
    related: ['melee-combat', 'grappling', 'critical-injuries-body'],
  },

  // ============================================================
  // RANGED COMBAT
  // ============================================================
  {
    id: 'ranged-combat',
    title: 'Ranged Combat & Weapons',
    category: 'Ranged Combat',
    content: `## Ranged Combat Resolution
\`\`\`
Attacker's REF + Weapon Skill + 1d10
  vs. DV (determined by range and weapon type)
  OR vs. Defender's DEX + Evasion + 1d10 (if Defender has REF 8+)
\`\`\`
If you beat the DV (Defender wins ties), you hit. Apply damage minus armor.

## Ranged Weapon Table

| Weapon | Skill | Damage | Magazine | ROF | Hands | Conceal | Cost |
|---|---|---|---|---|---|---|---|
| Medium Pistol | Handgun | 2d6 | 12 (M Pistol) | 2 | 1 | YES | 50eb |
| Heavy Pistol | Handgun | 3d6 | 8 (H Pistol) | 2 | 1 | YES | 100eb |
| Very Heavy Pistol | Handgun | 4d6 | 8 (VH Pistol) | 1 | 1 | NO | 100eb |
| SMG | Handgun | 2d6 | 30 (M Pistol) | 1 | 1 | YES | 100eb |
| Heavy SMG | Handgun | 3d6 | 40 (H Pistol) | 1 | 1 | NO | 100eb |
| Shotgun | Shoulder Arms | 5d6 | 4 (Slug) | 1 | 2 | NO | 500eb |
| Assault Rifle | Shoulder Arms | 5d6 | 25 (Rifle) | 1 | 2 | NO | 500eb |
| Sniper Rifle | Shoulder Arms | 5d6 | 4 (Rifle) | 1 | 2 | NO | 500eb |
| Bow/Crossbow | Archery | 4d6 | N/A (Arrow) | 1 | 2 | NO | 100eb |
| Grenade Launcher | Heavy Weapons | 6d6 | 2 (Grenade) | 1 | 2 | NO | 500eb |
| Rocket Launcher | Heavy Weapons | 8d6 | 1 (Rocket) | 1 | 2 | NO | 500eb |

### Special Features
- **SMG**: Autofire (3), Suppressive Fire
- **Heavy SMG**: Autofire (3), Suppressive Fire
- **Assault Rifle**: Autofire (4), Suppressive Fire
- **Shotgun**: Can fire Shotgun Shells
- **Grenade Launcher / Rocket Launcher**: Explosive
- **Bow/Crossbow**: Never needs Reload Action; basic arrows retrievable`,
    related: ['range-dv-table', 'autofire', 'suppressive-fire', 'combat-overview'],
  },
  {
    id: 'range-dv-table',
    title: 'Range DV Tables',
    category: 'Ranged Combat',
    content: `## Single Shot DVs by Range

| Weapon | 0-6 | 7-12 | 13-25 | 26-50 | 51-100 | 101-200 | 201-400 | 401-800 |
|---|---|---|---|---|---|---|---|---|
| Pistol | 13 | 15 | 20 | 25 | 30 | N/A | N/A | N/A |
| SMG | 15 | 13 | 15 | 20 | 25 | N/A | N/A | N/A |
| Shotgun (Slug) | 13 | 15 | 20 | 25 | 30 | 35 | N/A | N/A |
| Assault Rifle | 17 | 16 | 13 | 15 | 20 | 25 | 30 | N/A |
| Sniper Rifle | 30 | 25 | 25 | 15 | 13 | 15 | 17 | 20 |
| Bow/Crossbow | 15 | 13 | 15 | 17 | 20 | 22 | N/A | N/A |
| Grenade Launcher | 16 | 15 | 15 | 20 | 20 | 25 | 30 | N/A |
| Rocket Launcher | 17 | 15 | 15 | 20 | 20 | 25 | 30 | N/A |

*Distances in m/yds. N/A means the weapon cannot reach that range.*

## Autofire DVs by Range

| Weapon | 0-6 | 7-12 | 13-25 | 26-50 | 51-100 |
|---|---|---|---|---|---|
| SMG | 20 | 17 | 20 | 25 | 30 |
| Assault Rifle | 22 | 20 | 17 | 20 | 25 |

*Autofire uses the Autofire Skill, not the weapon's typical Skill.*`,
    related: ['ranged-combat', 'autofire', 'aimed-shots'],
  },
  {
    id: 'autofire',
    title: 'Autofire',
    category: 'Ranged Combat',
    content: `## Autofire

Costs **1 Action and 10 bullets**. If you don't have 10 bullets, you can't use Autofire.

Uses the **Autofire Skill** (not the weapon's typical Skill) and the **Autofire Range Table** (not the standard range table).

### Resolution
Roll REF + Autofire + 1d10 vs. Autofire DV.

### Damage Calculation
If you hit, roll **2d6** and multiply by the amount you beat the DV, up to a maximum multiplier:
- **SMG**: Max multiplier of **3**
- **Assault Rifle**: Max multiplier of **4**

If both dice come up **6**, you also inflict a **Critical Injury**.

### Example
Assault Rifle at 14 m/yds (DV17). Roll 21 total. Beat DV by 4. Roll 2d6 = 10. Damage = 10 x 4 = **40 damage**.

### Notes
- Autofire **cannot** be used for Aimed Shots.
- Targets with **REF 8+** can still attempt to dodge.
- Armor reduces damage as normal.`,
    related: ['ranged-combat', 'range-dv-table', 'suppressive-fire'],
  },
  {
    id: 'suppressive-fire',
    title: 'Suppressive Fire & Shotgun Shells',
    category: 'Ranged Combat',
    content: `## Suppressive Fire

Costs **1 Action and 10 bullets**. Cannot use with fewer than 10 bullets.

Everyone on foot **within 25 m/yds**, **out of cover**, and **in your line of sight** must roll:
\`\`\`
WILL + Concentration + 1d10  vs.  Your REF + Autofire + 1d10
\`\`\`

Anyone who **fails** must use their next Move Action to get into cover. If one Move Action is insufficient, they must also use the **Run Action** to get to cover (or as close as possible).

## Shotgun Shells

Can't make Aimed Shots with Shotgun Shells.

**Resolution:** 1 Ranged Attack (REF + Shoulder Arms + 1d10) vs. **DV13**.

If successful, **every target** in front of you **within 6 m/yds** (3 squares) that you can see takes **3d6 damage** (roll once for all targets). Armor reduces damage as normal.

Targets with REF 8+ can individually attempt to dodge.

## Explosives

All explosive weapons deal damage to all targets in a **10 m/yd x 10 m/yd area** (5x5 squares), centered on the intended target. Roll damage **once** for all targets.

- If you miss, GM decides where in that area the explosive landed.
- REF 8+ targets can individually dodge the blast.
- An explosive won't damage targets behind cover that the damage is insufficient to destroy. If the damage would destroy the cover, targets take full damage.`,
    related: ['ranged-combat', 'autofire', 'cover'],
  },

  // ============================================================
  // NETRUNNING
  // ============================================================
  {
    id: 'netrunning-overview',
    title: 'Netrunning Overview',
    category: 'Netrunning',
    content: `## What You Need to Netrun

1. **Neural Link + Interface Plugs** (cyberware)
2. **Cyberdeck** -- modular platform for Programs and Hardware
3. **Virtuality Goggles** -- projects Cyberspace over real-world vision (without them, you're effectively Unconscious in Meatspace)
4. **Programs and Hardware** -- loaded into Cyberdeck slots

### Cyberdecks

| Type | Slots | Cost |
|---|---|---|
| Poor Quality | 5 | 100eb (Premium) |
| Standard | 7 | 500eb (Expensive) |
| Excellent Quality | 9 | 1,000eb (V. Expensive) |

## Meat Actions vs. NET Actions

On your Turn, choose **one**:
- Take a **Meat Action** (normal Action in reality), OR
- Take **NET Actions** (multiple actions in the NET)

You always get your **Move Action** regardless.

### NET Actions per Turn

| Interface Rank | NET Actions |
|---|---|
| 1-3 | 2 |
| 4-6 | 3 |
| 7-9 | 4 |
| 10 | 5 |

### What Requires a NET Action
- Jack In / Jack Out
- Use Interface Abilities (except Scanner)
- Activate / Deactivate Programs

### What Does NOT Require a NET Action
- Moving within a NET Architecture
- Saving a copy of a File`,
    related: ['netrunning-interface', 'netrunning-programs', 'netrunning-blackice'],
  },
  {
    id: 'netrunning-interface',
    title: 'Interface Abilities',
    category: 'Netrunning',
    content: `## Interface Abilities

Resolution (except Zap):
\`\`\`
Interface + 1d10  vs.  DV
\`\`\`

### Scanner (Meat Action)
Find Meatspace locations of access points to nearby NET Architectures. Higher roll = more found, further away.

### Backdoor (NET Action)
Break through **Passwords** in a NET Architecture. If you know the password, you pass automatically.

### Cloak (NET Action)
Hide traces of your presence and any Virus. Another Netrunner must beat your Cloak Check with Pathfinder to discover your actions. Without Cloak, they find your traces automatically.

### Control (NET Action)
Control things attached to NET Architecture via **Control Nodes** (cameras, drones, turrets, elevators, etc.). Each Node has a DV. Operating each attached device = separate NET Action. Lose control when you Jack Out.

### Eye-Dee (NET Action)
Identify what a found piece of data (File) is and its value. Some Files have a DV.

### Pathfinder (NET Action)
Reveal the "map" of the Architecture. See a number of floors equal to your Check, up to the first obstruction with a DV higher than your roll.

### Slide (NET Action)
Flee combat with a single **Non-Demon** Black ICE. Roll Interface + 1d10 vs. Black ICE's Perception + 1d10. Success = escape to adjacent floor. Black ICE stops following. Only once per Turn. Can't Slide preemptively.

### Virus (NET Action, lowest floor only)
Leave a custom Virus to perform up to 2 actions/changes. DV set by GM based on power. Can require multiple NET Actions. DV to destroy = your Virus Check.

### Zap (NET Action)
Attack a Program or enemy Netrunner:
\`\`\`
Interface + 1d10  vs.  Program's DEF + 1d10  OR  enemy Netrunner's Interface + 1d10
\`\`\`
Deals **1d6 damage** to Program REZ or directly to Netrunner's brain.`,
    related: ['netrunning-overview', 'netrunning-programs', 'netrunning-blackice'],
  },
  {
    id: 'netrunning-programs',
    title: 'Netrunner Programs',
    category: 'Netrunning',
    content: `## Programs

Activating or Deactivating = 1 NET Action. Each Program can only be Activated **once per Round**. Installing/Uninstalling = 1 hour.

## NET Combat Resolution
\`\`\`
Interface + Program ATK + 1d10
  vs. Target's Interface + 1d10 (or Program DEF + 1d10)
\`\`\`
On hit, target suffers the Program's Effect.

A Program at **0 REZ** is Derezzed (useless but still installed). Deactivate + Activate to restore. A **Destroyed** Program is permanently erased.

### Booster Programs

| Program | REZ | Effect | Cost |
|---|---|---|---|
| Eraser | 7 | +2 to Cloak Checks | 20eb |
| See Ya | 7 | +2 to Pathfinder Checks | 20eb |
| Speedy Gonzalvez | 7 | +2 to Speed | 100eb |
| Worm | 7 | +2 to Backdoor Checks | 50eb |

### Defender Programs

| Program | REZ | Effect | Cost |
|---|---|---|---|
| Armor | 7 | Lowers brain damage by 4 (1 copy, once per Netrun) | 50eb |
| Flak | 7 | Reduces ATK of Non-Black ICE Attackers to 0 (1 copy, once per Netrun) | 50eb |
| Shield | 7 | Stops first Non-Black ICE brain damage, then Derezzes (1 copy, once per Netrun) | 20eb |

### Attacker Programs (Anti-Program)

| Program | ATK | Effect | Cost |
|---|---|---|---|
| Banhammer | 1 | 3d6 REZ to Non-Black ICE, 2d6 to Black ICE | 50eb |
| Sword | 1 | 3d6 REZ to Black ICE, 2d6 to Non-Black ICE | 50eb |

### Attacker Programs (Anti-Personnel)

| Program | ATK | Effect | Cost |
|---|---|---|---|
| DeckKRASH | 0 | Force unsafe Jack Out (suffer all Black ICE effects) | 100eb |
| Hellbolt | 2 | 2d6 brain damage, Cyberdeck catches fire (2 HP/Turn until extinguished) | 100eb |
| Nervescrub | 0 | INT, REF, DEX each -1d6 for 1 hour | 100eb |
| Poison Flatline | 0 | Destroys random Non-Black ICE Program on target's deck | 100eb |
| Superglue | 2 | Target can't progress deeper or Jack Out safely for 1d6 Rounds (once per Netrun) | 100eb |
| Vrizzbolt | 1 | 1d6 brain damage, target loses 1 NET Action next Turn (min 2) | 50eb |`,
    related: ['netrunning-overview', 'netrunning-blackice', 'netrunning-interface'],
  },
  {
    id: 'netrunning-blackice',
    title: 'Black ICE',
    category: 'Netrunning',
    content: `## Black ICE

Deadly Programs that hunt Netrunners or their Programs through an Architecture. Take **2 slots** in a Cyberdeck.

### Encountering Black ICE
When you encounter Black ICE lying in wait:
\`\`\`
Your Interface + Speed bonus + 1d10  vs.  Black ICE SPD + 1d10
\`\`\`
If the ICE wins, you (or a random active Program) suffer its Effect immediately. The ICE enters the Initiative Queue at the top.

Black ICE chases its target through the entire Architecture until **Derezzed** or **Slid** away from.

### Anti-Personnel Black ICE

| Name | PER | SPD | ATK | DEF | REZ | Effect | Cost |
|---|---|---|---|---|---|---|---|
| Asp | 4 | 6 | 2 | 2 | 15 | Destroys random Program on target's deck | 100eb |
| Hellhound | 6 | 6 | 6 | 2 | 20 | 2d6 brain damage; Cyberdeck catches fire (2 HP/Turn) | 500eb |
| Giant | 2 | 2 | 8 | 4 | 25 | 3d6 brain damage; force unsafe Jack Out | 1,000eb |
| Kraken | 6 | 2 | 8 | 4 | 25 | 3d6 brain damage; force unsafe Jack Out | 1,000eb |
| Raven | 6 | 6 | 2 | 2 | 15 | Enemy Netrunner's DEX -1d6 for 1 hour | 100eb |
| Scorpion | 2 | 6 | 6 | 2 | 15 | Enemy loses 1 NET Action next Turn (min 2), target Jacked Out if at 0 | 500eb |
| Skunk | 2 | 6 | 2 | 4 | 15 | All Rezzed enemy Programs' DEF reduced to 0 | 100eb |
| Wisp | 4 | 4 | 4 | 4 | 15 | Enemy loses 1 NET Action next Turn (min 2) | 500eb |

### Anti-Program Black ICE

| Name | PER | SPD | ATK | DEF | REZ | Effect | Cost |
|---|---|---|---|---|---|---|---|
| Killer | 4 | 4 | 4 | 4 | 20 | Does 3d6 REZ to a Non-Black ICE Program | 500eb |
| Liche | 4 | 2 | 6 | 2 | 15 | Does 2d6 REZ; if target Derezzed, it is Destroyed | 500eb |
| Sabertooth | 2 | 6 | 6 | 2 | 20 | Does 3d6 REZ to a Non-Black ICE Program | 500eb |
| Dragon | 4 | 4 | 6 | 2 | 25 | Does 4d6 REZ; if target Derezzed, it is Destroyed | 1,000eb |

### Demons
Cannot fit in Cyberdecks. Operate Control Nodes to defend physical spaces. One Demon per 6 floors of Architecture.

| Demon | Cost |
|---|---|
| Imp | 1,000eb (V. Expensive) |
| Efreet | 5,000eb (Luxury) |
| Balron | 10,000eb (Super Luxury) |`,
    related: ['netrunning-overview', 'netrunning-programs', 'netrunning-interface'],
  },

  // ============================================================
  // HEALING
  // ============================================================
  {
    id: 'healing-overview',
    title: 'Healing & Stabilization',
    category: 'Healing',
    content: `## Stabilization

Before natural healing can begin, you must receive stabilization.

**Stabilization Check:**
\`\`\`
TECH + First Aid or Paramedic + 1d10  vs.  DV
\`\`\`

| Wound State | Stabilization DV |
|---|---|
| Lightly Wounded | DV10 |
| Seriously Wounded | DV13 |
| Mortally Wounded | DV15 (target healed to 1 HP, then Unconscious for 1 min) |

Stabilization takes an **Action**.

## Natural Healing

Once stabilized, heal **HP equal to BODY per full day** of rest (light activity only). If the patient pushes it, they gain no HP that day and need re-stabilization.

## Healing Skills

| Skill | Capabilities |
|---|---|
| **First Aid** | Stabilize wounds; Quick Fix common Critical Injuries. Always at least +2. |
| **Paramedic (x2)** | Stabilize wounds; Quick Fix or Treat all but deadliest Critical Injuries. |
| **Surgery** (Medtech only) | Treat even the deadliest Critical Injuries. |
| **Cybertech** | Quick Fix/Treat Critical Injuries to cyberware replacements. |

## Treating Critical Injuries

**Quick Fix:** Removes Injury Effect for the rest of the day. Takes **1 minute**. Can do on yourself.

**Treatment:** Removes Injury Effect **permanently**. Takes **4 hours**. Cannot do on yourself.

## Hospital Costs

| Highest DV Treatment | Cost |
|---|---|
| DV17+ | 1,000eb (V. Expensive) |
| DV15 | 500eb (Expensive) |
| DV13 | 100eb (Premium) |
| DV10 | 50eb (Costly) |

Hospital beds: 100eb/night. All stabilization and treatments below the highest DV are included free.`,
    related: ['wound-states', 'critical-injuries-body', 'therapy', 'death-saves'],
  },
  {
    id: 'therapy',
    title: 'Therapy & Humanity Recovery',
    category: 'Healing',
    content: `## Therapy

Performed by a skilled Medtech using the Medical Tech Skill. Each therapy takes **1 entire week** (doctor and patient do nothing else). Medtechs cannot do Therapy on themselves.

### Therapy Types

| Therapy | Effect | Cost | Medical Tech DV | Materials |
|---|---|---|---|---|
| **Addiction** | Freed of one addiction. Auto-fail Secondary Effect rolls for 1 year after. | 1,000eb | DV15 | 500eb |
| **Standard Humanity Loss** | Regain **2d6** Humanity. Max Humanity reduced by 2 per cyberware (4 per borgware). | 500eb | DV15 | 100eb |
| **Extreme Humanity Loss** | Regain **4d6** Humanity. Same max Humanity rules. | 1,000eb | DV17 | 500eb |

### Humanity & Cyberware
- Each piece of cyberware decreases max Humanity by **2**
- Each piece of **borgware** decreases max Humanity by **4**
- Cyberware with 0 Humanity Loss on installation does not decrease max Humanity
- Humanity cannot be fully regained without removing cyberware

## Cyberpsychosis
If Humanity drops below 0, the character enters **cyberpsychosis** -- a dissociative disorder where the character sees themselves and others as collections of parts rather than living beings.

## Mental Trauma (GM-controlled)

| Trauma Type | Example | Humanity Loss |
|---|---|---|
| Traumatic Physical Incident | Torture | 1d6 |
| Traumatic Mental Incident | Witnessing horrific death | 1d6 |
| Long-term Mental Stress | Kidnapping, imprisonment | 2d6 |
| Long-term Environmental Stress | War zone, starvation | 2d6 |`,
    related: ['healing-overview', 'derived-stats', 'drugs-overview'],
  },
  {
    id: 'medtech-pharmaceuticals',
    title: 'Medtech Pharmaceuticals',
    category: 'Healing',
    content: `## Medtech Pharmaceuticals

Only a Medtech can correctly administer these. Synthesized with a **DV13 Medical Tech Check** from 200eb of materials, producing doses equal to Medical Tech Skill level in 1 hour.

Applying a dose = **1 Action**. Against unwilling target: Melee Weapon Attack with Airhypo (hit = dose administered instead of damage).

| Pharmaceutical | Effect |
|---|---|
| **Antibiotic** | Already-healing target heals extra **2 HP/day for 1 week**. One use at a time. |
| **Rapidetox** | Immediately purges effects of any drug, poison, or intoxicant. |
| **Speedheal** | If not Mortally Wounded, immediately heal **BODY + WILL** HP. Once per day. |
| **Stim** | Ignore Seriously Wounded penalties for **1 hour**. Once per day. |
| **Surge** | Function without sleep for **24 hours**. Once per week. |`,
    related: ['healing-overview', 'therapy', 'drugs-overview'],
  },

  // ============================================================
  // CRITICAL INJURIES
  // ============================================================
  {
    id: 'critical-injuries-body',
    title: 'Critical Injuries to the Body',
    category: 'Critical Injuries',
    content: `## Critical Injuries

Triggered when **two or more damage dice come up 6** on a Melee or Ranged Attack. Roll **2d6** on the appropriate table. Re-roll if target already has that injury. All Critical Injuries deal **5 Bonus Damage** directly to HP (ignores armor, not modified by hit location). Inflicted regardless of whether damage got through SP.

## Critical Injuries to the Body (2d6)

| Roll | Injury | Effect | Quick Fix | Treatment |
|---|---|---|---|---|
| **2** | Dismembered Arm | Arm gone. Drop items. Death Save Penalty +1. | N/A | Surgery DV17 |
| **3** | Dismembered Hand | Hand gone. Drop items. Death Save Penalty +1. | N/A | Surgery DV17 |
| **4** | Collapsed Lung | -2 MOVE (min 1). Death Save Penalty +1. | Paramedic DV15 | Surgery DV15 |
| **5** | Broken Ribs | Moving 4+ m/yds = re-suffer 5 Bonus Damage. | Paramedic DV13 | Paramedic DV15 or Surgery DV13 |
| **6** | Broken Arm | Arm unusable. Drop items. | Paramedic DV13 | Paramedic DV15 or Surgery DV13 |
| **7** | Foreign Object | Moving 4+ m/yds = re-suffer 5 Bonus Damage. | First Aid or Paramedic DV13 | Quick Fix removes permanently |
| **8** | Broken Leg | -4 MOVE (min 1). | Paramedic DV13 | Paramedic DV15 or Surgery DV13 |
| **9** | Torn Muscle | -2 to Melee Attacks. | First Aid or Paramedic DV13 | Quick Fix removes permanently |
| **10** | Spinal Injury | Next Turn: no Action (can still Move). Death Save Penalty +1. | Paramedic DV15 | Surgery DV15 |
| **11** | Crushed Fingers | -4 to Actions involving that hand. | Paramedic DV13 | Surgery DV15 |
| **12** | Dismembered Leg | Leg gone. -6 MOVE (min 1). Cannot dodge. Death Save Penalty +1. | N/A | Surgery DV17 |`,
    related: ['critical-injuries-head', 'healing-overview', 'wound-states'],
  },
  {
    id: 'critical-injuries-head',
    title: 'Critical Injuries to the Head',
    category: 'Critical Injuries',
    content: `## Critical Injuries to the Head (2d6)

Only rolled when an **Aimed Shot targets the head**.

| Roll | Injury | Effect | Quick Fix | Treatment |
|---|---|---|---|---|
| **2** | Lost Eye | Eye gone. -4 Ranged Attacks & vision Perception. Death Save Penalty +1. | N/A | Surgery DV17 |
| **3** | Brain Injury | -2 to all Actions. Death Save Penalty +1. | N/A | Surgery DV17 |
| **4** | Damaged Eye | -2 Ranged Attacks & vision Perception. | Paramedic DV15 | Surgery DV13 |
| **5** | Concussion | -2 to all Actions. | First Aid or Paramedic DV13 | Quick Fix removes permanently |
| **6** | Broken Jaw | -4 to Actions involving speech. | Paramedic DV13 | Paramedic or Surgery DV13 |
| **7** | Foreign Object | Moving 4+ m/yds = re-suffer 5 Bonus Damage. | First Aid or Paramedic DV13 | Quick Fix removes permanently |
| **8** | Whiplash | Death Save Penalty +1. | Paramedic DV13 | Paramedic or Surgery DV13 |
| **9** | Cracked Skull | Aimed head shots x3 damage instead of x2. Death Save Penalty +1. | Paramedic DV15 | Paramedic or Surgery DV15 |
| **10** | Damaged Ear | Move 4+ m/yds = no Move Action next Turn. -2 hearing Perception. | Paramedic DV13 | Surgery DV13 |
| **11** | Crushed Windpipe | Cannot speak. Death Save Penalty +1. | N/A | Surgery DV15 |
| **12** | Lost Ear | Ear gone. Move 4+ m/yds = no Move Action next Turn. -4 hearing Perception. Death Save Penalty +1. | N/A | Surgery DV17 |`,
    related: ['critical-injuries-body', 'aimed-shots', 'healing-overview'],
  },

  // ============================================================
  // REPUTATION
  // ============================================================
  {
    id: 'reputation',
    title: 'Reputation & Facedowns',
    category: 'Reputation',
    content: `## Reputation

Reputation is earned through notable actions and awarded by the GM. A new Reputation only replaces the old if the Level is higher. Most starting Characters have Reputation 0.

When meeting someone new, they roll **1d10**. If they roll **under** your Reputation Level, they have heard of you.

**Negative Reputation:** Uncool actions (cowardice, betrayal) can also earn Reputation. People will have heard of your failures instead.

### Reputation Levels

| Level | Who Knows |
|---|---|
| 1 | Anyone who was there at the time |
| 2 | Stories reached immediate friends |
| 3 | Co-workers and casual acquaintances know |
| 4 | Stories all over local area |
| 5 | Recognized beyond local area by name |
| 6 | Known on sight beyond local area |
| 7 | A news story or two written about you |
| 8 | Regularly in headlines and screamsheets |
| 9 | Always in screamsheets and TV |
| 10 | Known worldwide |

## Facedowns

A duel of wills before a fight or confrontation. GM calls for Facedowns when appropriate.

**Resolution:**
\`\`\`
COOL + Reputation + 1d10  vs.  COOL + Reputation + 1d10
\`\`\`

*If your Reputation is from cowardice, your Reputation Level is treated as negative.*

- **Tie:** Both unsure, nothing happens.
- **Loser chooses:**
  - **Back Down**, or
  - Take **-2 to all Actions** against this opponent until you have defeated them once`,
    related: ['combat-overview', 'stats-overview'],
  },

  // ============================================================
  // VEHICLE COMBAT
  // ============================================================
  {
    id: 'vehicle-combat',
    title: 'Vehicle Combat',
    category: 'Vehicle Combat',
    content: `## Vehicle Combat

### Structural Damage Points (SDP)
Vehicles have SDP instead of HP. At 0 SDP, the vehicle is **Destroyed** (no longer cover, cannot move until repaired).

### Sample Vehicles

| Vehicle | SDP | Seats | Combat MOVE | Narrative Speed | Cost |
|---|---|---|---|---|---|
| Roadbike | 35 | 2 | 20 | 100 MPH | 20,000eb |
| Superbike | 35 | 2 | 60 | 300 MPH | 100,000eb |
| Compact Groundcar | 50 | 4 | 20 | 100 MPH | 30,000eb |
| High Performance Groundcar | 50 | 4 | 40 | 200 MPH | 50,000eb |
| Gyrocopter | 35 | 2 | 20 | 100 MPH | 20,000eb |
| Helicopter | 60 | 4 | 40 | 200 MPH | 40,000eb |
| AV-4 | 100 | 6 | 40 | 200 MPH | 50,000eb |

### Starting a Vehicle
Takes an **Action** (after using an Action to get in). Three things happen:
1. Driver placed at **top of Initiative Queue**
2. Vehicle MOVE replaces driver's MOVE (driver penalties don't affect vehicle)
3. Driver cannot use Run Action

### Basic Driving
- If **REF + Control Skill > 9**: No Skill Check needed, doesn't require Action
- Otherwise: DV10 Check each Turn using Action, failure = Lose Control

### Maneuvers (require Action + Move Action)

| Maneuver | DV |
|---|---|
| Swerve | 13 |
| Sharp Turn | 13 |
| Emergency Stop | 13 |
| Bootleg Turn | 17 |
| Do a Jump | 17 |
| Landing (Air) | 13 |
| Aerobatic Maneuver (Air) | 17 |

Failure = **Lose Control** (GM decides your movement; if you hit something, it's a Ram).

### Ramming
Both vehicle and target take **6d6 damage**. Everyone involved suffers **Whiplash** Critical Injury.

### Dodging a Vehicle
**DEX + Evasion + 1d10 vs. DV13**. If successful, can choose to be on top of the vehicle.

### Vehicle Weak Points (Aimed Shot)
-8 to Check. If successful, damage through SP is multiplied by **2**. If vehicle is stationary, Melee auto-hits (no roll needed). Moving vehicle = must beat DV13.

### Targeting Through Glass
Vehicle glass has **no HP** and provides **no cover**. You can target occupants directly.`,
    related: ['combat-overview', 'damage-armor', 'cover'],
  },

  // ============================================================
  // DRUGS
  // ============================================================
  {
    id: 'drugs-overview',
    title: 'Street Drugs',
    category: 'Drugs',
    content: `## Street Drugs

Administered via **Airhypo** (Action to willing target, or Melee Weapon Attack to unwilling target on a hit instead of dealing damage).

When dosed: automatically affected by **Primary Effect**. When Primary Effect ends, roll:
\`\`\`
WILL + Resist Torture/Drugs + 1d10  vs.  Secondary Effect DV
\`\`\`
Failure = permanent Secondary Effect (addiction) until therapy.

Multiple doses extend Primary Effect by its full duration.

### Black Lace
**Cost:** 50eb (Costly)

**Primary Effect (24 hours):**
- Take **2d6 Humanity Loss** (returned if Secondary Effect doesn't trigger)
- Ignore **Seriously Wounded** penalties

**Secondary Effect (DV17):**
- Humanity Loss not returned
- Addicted: REF **-2** unless currently under Primary Effect

### Blue Glass
**Cost:** 20eb (Everyday)

**Primary Effect (4 hours):**
- GM tells you when you "flash out" (hallucinate, lose Action that Turn)

**Secondary Effect (DV15):**
- Addicted: "Flash out" ~once per hour
- Primary Effect now grants **immunity** to flashing out instead

### Boost
**Cost:** 50eb (Costly)

**Primary Effect (24 hours):**
- INT **+2** (can exceed 8)

**Secondary Effect (DV17):**
- Addicted: INT **-2**

### Smash
**Cost:** 10eb (Cheap)

**Primary Effect (4 hours):**
- Euphoric. **+2** to Dance, Contortionist, Conversation, Human Perception, Persuasion, Acting

**Secondary Effect (DV15):**
- Addicted: **-2** to the same Skills. Crave more Smash periodically.

### Synthcoke
**Cost:** 20eb (Everyday)

**Primary Effect (4 hours):**
- REF **+1** (can exceed 8)
- Prone to paranoid ideation

**Secondary Effect (DV15):**
- Addicted: REF **-2** unless under Primary Effect. Cravings.`,
    related: ['therapy', 'healing-overview', 'stats-overview'],
  },

  // ============================================================
  // ENVIRONMENTAL HAZARDS (fits in Combat/Damage)
  // ============================================================
  {
    id: 'environmental-hazards',
    title: 'Environmental Hazards',
    category: 'Combat',
    content: `## Being On Fire

Until you use an Action to put yourself out, you take damage direct to HP at end of Turn (no armor ablation):

| Intensity | Example | Damage |
|---|---|---|
| Mild | Wood Fire | 2 direct to HP |
| Strong | Gasoline Fire | 4 direct to HP |
| Deadly | Thermite | 6 direct to HP |

## Drowning & Asphyxiation

Hold breath for a number of **minutes** equal to BODY. When you can't anymore:
- Start of each Turn: take **BODY as damage** direct to HP (ignores armor).
- Space exposure: additional 1d6 to INT, REF, DEX per Turn. INT reaches 0 = death.

## Electrocution

Immediately take **6d6 damage** (soaked by armor). Repeats at end of each Turn you remain in contact with source.

## Exposure

Prolonged extreme elements: **1d6 damage** direct to HP at end of each day. Cannot heal naturally while exposed. Proper equipment prevents this.

## Falling

Characters fall **40 m/yds** at end of Turn. Can attempt **DV15 Athletics** to catch an edge.

| Fall Distance | Damage | Additional |
|---|---|---|
| 10+ m/yds | 2d6 per 10 m/yds (soaked by armor) | DV15 Athletics or suffer Broken Leg |
| 30+ m/yds | As above | Cyberlegs no longer help |
| Skyscraper | -- | Dead, no Death Save |

Characters with **2 Cyberlegs** don't take fall damage or Critical Injury for falls under 30 m/yds.

## Poisons

| Intensity | Examples | Resist DV | Effect |
|---|---|---|---|
| Mild | Belladonna, Toxic Waste | 11 | 1d6 direct to HP |
| Strong | Arsenic | 13 | 2d6 direct to HP |
| Deadly | Biotoxin, Designer Poison | 15 | 3d6 direct to HP |`,
    related: ['combat-overview', 'wound-states', 'damage-armor'],
  },

  // ============================================================
  // TRAUMA TEAM (bonus, fits Healing)
  // ============================================================
  {
    id: 'trauma-team',
    title: 'Trauma Team',
    category: 'Healing',
    content: `## Trauma Team

Specialized paramedical squad. Two service levels:
- **Silver:** 500eb/month. Surgery Treatments charged extra (hospital price).
- **Executive:** 1,000eb/month. Surgery Treatments included.

Plans are **transferable 1-for-1** (can cover one friend, not yourself simultaneously).

### Calling Trauma Team
- Calling = **1 Action** (when injured)
- With Agent + Biomonitor: auto-calls when HP < BODY or when you lose a body part
- Roll **1d6** = Rounds until arrival
- Team joins at **top of Initiative Queue**

### Trauma Team Members

| Member | Combat Number | SP | HP | MOVE & BODY |
|---|---|---|---|---|
| Doctor (Light Armorjack, Heavy Pistol, Cryopump, 2x Rapidetox) | 10 | 11 | 20 | 4 |
| Medical Assistant (Kevlar, Cryopump, Bulletproof Shield) | 10 | 7 | 25 | 6 |
| Pilot (Kevlar, VH Pistol) | 10 | 7 | 25 | 6 |
| Security Officer x2 (Heavy Armorjack, Assault Rifles) | 10 | 13 | 30 | 4 |

Combat Number combines STAT + Skill. Add d10 to this for attacks or defense. They **cannot dodge bullets**. Arrive in AV-4 with Vehicle Heavy Weapon Mount.`,
    related: ['healing-overview', 'wound-states', 'death-saves'],
  },

  // ============================================================
  // CYBERWARE INSTALLATION (fits Healing)
  // ============================================================
  {
    id: 'cyberware-installation',
    title: 'Cyberware Installation & Replacement Parts',
    category: 'Healing',
    content: `## Replacement Parts

When a body part is lost to a Critical Injury:
- **Cloned replacement** or **medical-grade cyberware** (no additional benefits, no option slots, no Humanity Loss)
- **Full cybernetic replacement**: Pay Treatment cost + cyberware cost

## Cyberware Installation Surgery (Medtech Only)

| Typical Installation | Surgery DV | Hospital Install Cost |
|---|---|---|
| Mall | DV13 | 100eb (Premium) |
| Clinic | DV15 | 500eb (Expensive) |
| Hospital | DV17 | 1,000eb (V. Expensive) |

Can't do installation surgery on yourself unless the cyberware's typical installation is Mall.

Failed surgery: destroys cyberware and wastes 2 hours.

## Found Cyberware

Only a Medtech can harvest cyberware from a corpse without destroying it. DV = same as installation DV. Takes 4 hours. Failed attempt destroys the cyberware.

## Bodysculpting (Medtech Only)

| Type | Installation | Cost | Humanity Loss | Surgery DV | Materials |
|---|---|---|---|---|---|
| Standard | Clinic | 500eb | None | DV15 | 100eb |
| Exotic | Hospital | 1,000eb | 4d6 | DV17 | 500eb |

Cannot do Bodysculpting surgery on yourself. Failed surgery destroys materials and wastes 2 hours.`,
    related: ['healing-overview', 'therapy', 'critical-injuries-body'],
  },

  // ============================================================
  // ROLES
  // ============================================================
  {
    id: 'role-rockerboy',
    title: 'Rockerboy',
    category: 'Roles',
    content: `## Rockerboy

Rockerboys are rock-and-roll rebels who use performance, art, and rhetoric to fight authority. They influence others through poetry, art, dance, music, or sheer physical presence -- they could be a rocker or a cult leader.

### Role Ability: Charismatic Impact

Charismatic Impact allows a Rockerboy to influence **Fans**. Non-fans can be converted by rolling Charismatic Impact + 1d10 vs. a DV based on group size:

| Target | DV |
|---|---|
| Single Person | 8 |
| Small Group (up to 6) | 10 |
| Huge Group | 12 |

### Rank Progression

| Rank | Venues | Single Fan (DV8) | Small Group (DV10) | Huge Group (DV12) |
|---|---|---|---|---|
| **1-2** | Small local clubs | Small favor (drink, meal, ride) | Fans ask for autographs | No huge groups yet |
| **3-4** | Well-known clubs | Major favor (bed, good word) | Hang out regularly, provide party favors | Strong local following, buy recordings |
| **5-6** | Large important clubs | Commit minor crime (shoplift, help in fight) | Act as personal "posse" | Fans all over City, do major favors |
| **7-8** | Small concert halls, local video | Risk life without question | Commit minor crime for you | Rabidly loyal, fight rival fans, info networks |
| **9** | Large concert halls, national video | Commit major crime | Commit major crime | Cult-like following; will riot, destroy, even kill |
| **10** | Huge stadiums, international video | Sacrifice self without question | Risk their lives as protection | Worldwide cult-like army |

On a failed Charismatic Impact check, the Rockerboy cannot ask the same favor from those fans for **one week**.`,
    related: ['role-solo', 'role-fixer', 'stats-overview'],
  },
  {
    id: 'role-solo',
    title: 'Solo',
    category: 'Roles',
    content: `## Solo

Solos are assassins, bodyguards, killers, and soldiers-for-hire. They are the elite fighting machines of the Time of the Red, relying on cybernetics, combat drugs, and honed reflexes.

### Role Ability: Combat Awareness

When combat begins (before Initiative), anytime outside of combat, or in combat with an **Action**, a Solo may divide their total Combat Awareness points among the following abilities. Previous assignments persist if not changed.

| Ability | Cost | Effect |
|---|---|---|
| **Damage Deflection** | 2/4/6/8/10 pts | Decrease first damage taken this Round by 1/2/3/4/5 |
| **Fumble Recovery** | 4 pts | Ignore critical failures (1s) on attack rolls (still treated as 1) |
| **Initiative Reaction** | 1 pt each | +1 per point to Initiative rolls |
| **Precision Attack** | 3/6/9 pts | +1/+2/+3 to Attack checks |
| **Spot Weakness** | 1 pt each | +1 per point to damage (before armor) of first successful Attack per Round |
| **Threat Detection** | 1 pt each | +1 per point to Perception checks |

### Example
A Rank 6 Solo could allocate: Damage Deflection 1 (2 pts) + Spot Weakness 2 (2 pts) + Threat Detection 2 (2 pts). They can reallocate by spending an Action in combat.`,
    related: ['role-rockerboy', 'combat-overview', 'role-netrunner'],
  },
  {
    id: 'role-netrunner',
    title: 'Netrunner',
    category: 'Roles',
    content: `## Netrunner

Netrunners are cybernetic master hackers of the post-NET world. They interface with cyberdecks to control computers, electronics, and associated programming.

### Role Ability: Interface

Interface allows the Netrunner to Netrun and gives access to a suite of Interface Abilities. The Interface Rank determines NET Actions per Turn:

| Interface Rank | NET Actions per Turn |
|---|---|
| 1-3 | 2 |
| 4-6 | 3 |
| 7-9 | 4 |
| 10 | 5 |

### Interface Abilities

| Ability | Effect |
|---|---|
| **Backdoor** | Break through Passwords in an Architecture |
| **Cloak** | Hide traces of your presence and any Virus |
| **Control** | Control things attached to the Architecture (cameras, drones, turrets) |
| **Eye-Dee** | Identify found data and its value |
| **Pathfinder** | Reveal the "map" of the Architecture |
| **Scanner** | Find Meatspace locations of access points (Meat Action) |
| **Slide** | Slip away from one Non-Demon Black ICE |
| **Virus** | Leave a custom virus at the core of the Architecture |
| **Zap** | 1d6 damage to Program REZ or directly to Netrunner's brain |

See [[netrunning-overview]] for full Netrunning rules.`,
    related: ['netrunning-overview', 'netrunning-interface', 'role-tech'],
  },
  {
    id: 'role-tech',
    title: 'Tech',
    category: 'Roles',
    content: `## Tech

Techs are renegade mechanics and supertech inventors who keep the Dark Future running. They fix, improve, modify, make, and invent new items.

### Role Ability: Maker

Whenever a Tech increases their Maker Rank by 1, they gain **1 Rank in two different Maker Specialties** of their choice.

### Maker Specialties

| Specialty | Effect |
|---|---|
| **Field Expertise** | Add Rank to any TECH Skill Check for non-Maker purposes. Can jury-rig items to perfect condition as an Action (lasts 10 min per Rank, then reverts). |
| **Upgrade Expertise** | Improve items: lower HL by 1d6, add option slots, simplify repair time, make weapons concealable, raise weapon quality, add SP +1, etc. Roll TECH + repair Skill + Rank + 1d10 vs. DV. |
| **Fabrication Expertise** | Create items from materials one price category lower. Roll TECH + repair Skill + Rank + 1d10 vs. DV. |
| **Invention Expertise** | Invent new items/upgrades. GM sets Price Category (minimum Expensive). Roll TECH + repair Skill + Rank + 1d10 vs. DV. |

### Upgrade/Fabricate/Invent DV & Time

| Price Category | DV | Time |
|---|---|---|
| Cheap/Everyday | 9 | 1 hour |
| Costly | 13 | 6 hours |
| Premium | 17 | 1 day |
| Expensive | 21 | 1 week |
| Very Expensive | 24 | 2 weeks |
| Luxury | 29 | 1 month |
| Super Luxury | 29 | 1 month per 10,000eb |`,
    related: ['role-medtech', 'skill-list-tech', 'role-netrunner'],
  },
  {
    id: 'role-medtech',
    title: 'Medtech',
    category: 'Roles',
    content: `## Medtech

Medtechs are unsanctioned street doctors and cyberware medics, patching up meat and metal alike. They keep people alive who should be dead.

### Role Ability: Medicine

Whenever the Medtech increases their Medicine Rank, they choose **one** of three Medicine Specialties to allocate 1 point to.

### Medicine Specialties

**Surgery:** Each point grants **2 points** in the Surgery Skill (max 10). Surgery treats the most severe [[critical-injuries-body]] and implants cyberware. Only available to Medtechs.

**Pharmaceuticals (max 5 pts):** Each point grants **1 point** in Medical Tech Skill (max 10) and access to one pharmaceutical:

| Pharmaceutical | Effect |
|---|---|
| **Antibiotic** | Already-healing target heals extra 2 HP/day for 1 week |
| **Rapidetox** | Immediately purges effects of any drug, poison, or intoxicant |
| **Speedheal** | If not Mortally Wounded, heal BODY + WILL HP immediately (1/day) |
| **Stim** | Ignore Seriously Wounded penalties for 1 hour (1/day) |
| **Surge** | Function without sleep for 24 hours (1/week) |

Synthesize doses: DV13 Medical Tech Check, 200eb materials = doses equal to Medical Tech Skill in 1 hour.

**Cryosystem Operation (max 5 pts):**

| Points | Benefit |
|---|---|
| 1 | Gain one Cryopump |
| 2 | Registered Cryotank Technician -- unlimited access to 1 Cryotank |
| 3 | Gain 1 personal Cryotank |
| 4 | Gain 2 more Cryotanks; Cryopump has 2 charges, holds 2 people |
| 5 | Gain 3 more Cryotanks; Cryopump has 3 charges, holds 3 people |`,
    related: ['healing-overview', 'medtech-pharmaceuticals', 'role-tech'],
  },
  {
    id: 'role-media',
    title: 'Media',
    category: 'Roles',
    content: `## Media

Medias are reporters, media stars, and social influencers risking it all for the truth -- or glory. They can convince audiences and access powerful sources.

### Role Ability: Credibility

Credibility determines Audience, Access/Sources, Believability, and Impact of published stories.

**Rumors:** At least twice per week, the GM secretly rolls Credibility Rank + 1d10 against passive Rumor DVs:

| Rumor Type | Passive DV | Active DV |
|---|---|---|
| Vague Rumor | 7 | 13 |
| Typical Rumor | 9 | 15 |
| Substantial Rumor | 11 | 17 |
| Detailed Rumor | 13 | 21 |

### Rank Progression

| Rank | Access/Sources | Audience | Believability | Impact |
|---|---|---|---|---|
| **1-2** | Local honcho, gang lord | Immediate neighborhood | 2/10 | Small, incremental change |
| **3-4** | City gang honcho, minor politician, Corp Exec | Well-known local contributor | 3/10 | Direct effect; small bad guys arrested |
| **5-6** | Major City player, City politico | Citywide | 4/10 | Changes all over the City |
| **7-8** | Local Corp president, mayor | Statewide, minor celebrity | 5/10 | Changes across several cities |
| **9** | Divisional Corp head, State politico | Known nationally | 6/10 | National-level change |
| **10** | Major world leader, major Corp head | Known worldwide | 7/10 | Worldwide change; Megacorps may fall |

Verifiable evidence grants +1 (single piece) or +2 (4+ pieces) to Believability checks. LUCK cannot be spent on Believability.`,
    related: ['role-rockerboy', 'role-exec', 'reputation'],
  },
  {
    id: 'role-exec',
    title: 'Exec',
    category: 'Roles',
    content: `## Exec

Execs are corporate power brokers and business raiders. They build a team whose members help accomplish goals, whether legal or not.

### Role Ability: Teamwork

| Rank | Benefit |
|---|---|
| **1** | Signing Bonus: suit (Jacket, Top, Bottom, Footwear) |
| **2** | Corporate Housing: free Conapt |
| **3** | First Team Member |
| **5** | Second Team Member |
| **6** | Trauma Team Silver coverage (paid by Corp) |
| **7** | Housing upgraded to Beaverville House in Executive Zone |
| **8** | Coverage upgraded to Trauma Team Executive |
| **9** | Third Team Member (max 3 total) |
| **10** | Housing upgraded to McMansion or Luxury Penthouse |

### Team Members
- Rolled from special charts (Company Bodyguard, Covert Operative, Driver, Netrunner, Technician)
- Controlled by the GM based on **Loyalty** (starting: 1d6+1, max 10 between sessions)
- Cannot wear armor heavier than Light Armorjack
- Do not improve Skills

### Loyalty

| Action | Gain/Loss |
|---|---|
| Compliment work | +1 |
| Give bonus/perk (200eb+) | +4 |
| Support against Management | +4 |
| Give 20% cut of earnings | +6 |
| Paid time off (entire session) | +6 |
| Risk physical harm for them | +8 |
| No Loyalty gained during session | -1 |
| Berate/chew out | -2 |
| Ignore contribution | -4 |
| Forget birthday | -6 |
| Fail to deliver promised bonus | -6 |
| Throw under bus to Management | -8 |
| Abandon under fire | losing all remaining |

**Loyalty Save:** GM rolls 1d6 under current Loyalty for each task. Failure = refuse/botch/betray. At 0 or below = active betrayal.`,
    related: ['role-lawman', 'role-fixer', 'trauma-team'],
  },
  {
    id: 'role-lawman',
    title: 'Lawman',
    category: 'Roles',
    content: `## Lawman

Lawmen are maximum law enforcers patrolling the mean streets and barbarian highways beyond.

### Role Ability: Backup

As an **Action**, roll **d10 equal to or under your Backup Rank** to get someone to respond. Then roll **d6** = number of Rounds until arrival. On a **6**, backup arrives from the **next highest tier** (or two groups at Rank 10).

### Backup Ranks

| Rank | Unit | Combat# | SP | HP | MOVE/BODY |
|---|---|---|---|---|---|
| **1-2** | 4 Corporate Security (foot, Heavy Pistols, Kevlar) | 8 | 7 | 20 | 4 |
| **3-4** | 4 Local Beat Cops (2 Compact Groundcars, Heavy Pistols, Kevlar) | 10 | 7 | 25 | 5 |
| **5-7** | 2 County Mounties (High Perf. Groundcar, Heavy Pistols + Assault Rifles, Heavy Armorjack) | 14 | 13 | 35 | 4 |
| **8** | 1 Recovery Zone Marshal (Superbike, VH Pistol + AR + Grenade Launcher, Flak) | 16 | 15 | 50 | 6 |
| **9** | 2 C-SWAT (AV-4, Assault Rifles + Rocket Launchers, Metalgear) | 15 | 18 | 35 | 4 |
| **10** | 2 National/Interpol/FBI/Netwatch (AV-4, VH Pistols + ARs, Light Armorjack) | 14 | 11 | 35 | 6 |

**Rank 10 Special:** These agents stick around to investigate, respond to all related calls until the "case" is closed, and can use their Combat Number for investigation Skills (Accounting, Criminology, Deduction, Perception, Stealth, Tracking, etc.).

**Combat Number** combines STAT + Skill. Add d10 for attacks or defense. Backup **cannot dodge bullets**. Abusing Backup gets you fired or fined.`,
    related: ['role-solo', 'role-exec', 'combat-overview'],
  },
  {
    id: 'role-fixer',
    title: 'Fixer',
    category: 'Roles',
    content: `## Fixer

Fixers are dealmakers, organizers, and information brokers. They navigate the complex social customs of The Street and maintain vast webs of contacts and clients.

### Role Ability: Operator

Operator has four components: **Contacts**, **Reach**, **Haggle**, and **Grease**.

**Haggle Check:** COOL + Trading + Operator Rank + 1d10 vs. target's COOL + Trading + their Operator Rank (if Fixer) + 1d10. Only 1 Fixer deal per transaction.

### Rank Progression

| Rank | Contacts | Reach | Haggle | Grease |
|---|---|---|---|---|
| **1-2** | Local honcho, gang lord | Source Cheap/Everyday items | 10% better price | Know your neighborhood + local gangs |
| **3-4** | City gang honcho, Corp Exec | Source up to Expensive | Buy 5+, get 1 free | +1 culture, +1 language at Skill 4 |
| **5-6** | Major City player, politico | Set up Night Market (1/month); source up to Super Luxury at market | Negotiate job pay +20% | +2 more cultures, +2 languages |
| **7-8** | Local Corp president, mayor | Source up to Very Expensive | Luxury/Super Luxury: pay half now, half in 1 month | +3 more cultures (6 total), +3 languages |
| **9** | Divisional Corp head, state politico | Source up to Luxury; can set up Midnight Market | 20% better buy/sell price | Blend with Corporate and governmental agencies |
| **10** | Major world leader, major Corp head | Source up to Super Luxury | Double pay for Dangerous Jobs | Blend with almost any group including secret societies |

**Night Markets** are open events where all price categories are available. **Midnight Markets** (Rank 9+) are invite-only flash markets containing 1d10+5 rare items and gathering criminal underworld leadership.`,
    related: ['role-exec', 'role-nomad', 'reputation'],
  },
  {
    id: 'role-nomad',
    title: 'Nomad',
    category: 'Roles',
    content: `## Nomad

Nomads are transport experts, road warriors, pirates, and smugglers who keep the world connected. They are the masters of getting people and supplies where they need to go.

### Role Ability: Moto

**Vehicle Familiarity:** Add Moto Rank to any Drive Land Vehicle, Pilot Air Vehicle, Pilot Sea Vehicle, Air Vehicle Tech, Land Vehicle Tech, or Sea Vehicle Tech Skill Check.

**Family Motorpool:** Each time the Nomad increases Moto Rank, they either add a new stock vehicle of that Rank or lower, or upgrade an existing one.

| Rank | Available Vehicles |
|---|---|
| **1-4** | Compact Groundcar, Gyrocopter, Jetski, Roadbike |
| **5-6** | Helicopter, High Performance Groundcar, Speedboat |
| **7-8** | AV-4, Cabin Cruiser, Superbike |
| **9-10** | Aerozep, AV-9, Super Groundcar, Yacht |

**Rules:** Only one Family Vehicle out at a time (swap next morning). Destroyed vehicles repaired by Family in 1 week for 500eb. At **Rank 10**, promoted to Family leadership -- can have all vehicles out at once.

### Key Vehicle Upgrades

| Upgrade | Rank | Effect |
|---|---|---|
| Armored Chassis | 5 | SP13 (not glass) |
| Bulletproof Glass | 1 | Thin (15 HP) or Thick (30 HP) per window |
| NOS | 1 | Extra Move Action 1/day per tank |
| Onboard Machine Gun | 1 | AR with 30 rds, Autofire only, driver fires |
| Onboard Flamethrower | 1 | Driver fires, cannot reload while driving |
| Combat Plow | 1 | No ram damage to your vehicle, no Whiplash |
| Heavy Chassis | 1 | +20 SDP, can tow 10 tons |
| Vehicle Heavy Weapon Mount | 5 | Swiveling mount for 2-handed ranged weapon; first one comes with a free gift weapon |
| Hover Upgrade | 5 | Travel across water at Cabin Cruiser speed |
| AV-4 Engine Upgrade | 7 | Land vehicle gains flight capability |
| Enhanced Interface Plug Integration | 5 | Bikes: dodge attacks while driving (REF 8+) |`,
    related: ['role-fixer', 'vehicle-combat', 'role-solo'],
  },

  // ============================================================
  // CYBERWARE
  // ============================================================
  {
    id: 'cyberware-overview',
    title: 'How Cyberware Works',
    category: 'Cyberware',
    content: `## Cyberware Overview

Cyberware is hardware implanted in or replacing parts of your body. It is a major commitment -- you are replacing or enhancing something you were born with.

### Installation Levels

| Install Level | Where | Surgery DV | Hospital Cost |
|---|---|---|---|
| **Mall** | Street corner bio-mod shop (like ear-piercing) | DV13 | 100eb |
| **Clinic** | Actual Medtech in a medical surgery clinic | DV15 | 500eb |
| **Hospital** | Major surgery requiring full hospital facilities | DV17 | 1,000eb |

Installation surgery is always included at no extra charge during Character Generation. Only a **Medtech** can perform cyberware installation surgery (see [[cyberware-installation]]).

### Reading Cyberware Stats
- **Name:** Street name of the cyberware
- **Install:** Where it can be installed (Mall/Clinic/Hospital)
- **Description & Data:** Game mechanics, prerequisites, effects
- **Option Slots:** Foundational cyberware has slots for options; some categories allow 7 options without a foundation
- **Cost:** Price in Eurobucks with Price Category
- **HL (Humanity Loss):** Preset at character generation; after character gen, determined by dice in parentheses

### 8 Types of Cyberware
1. **Fashionware** -- Personal adornment (7 Option Slots, no foundation needed)
2. **Neuralware** -- Reflexes and mental augmentation (Foundation: Neural Link, 5 slots)
3. **Cyberoptics** -- Visual enhancements (Foundation: Cybereye, 3 slots each)
4. **Cyberaudio** -- Hearing enhancements (Foundation: Cyberaudio Suite, 3 slots)
5. **Internal Body Cyberware** -- Implanted organs/systems (7 Option Slots, no foundation)
6. **External Body Cyberware** -- On/through skin (7 Option Slots, no foundation)
7. **Cyberlimbs** -- Replacement arms/legs (Foundation: Cyberarm 4 slots / Cyberleg 3 slots)
8. **Borgware** -- Full body replacement

### Key Rules
- Benefits from multiple installations of the same cyberware **do not stack** unless noted
- You **cannot install cyberware** if suffering a related Critical Injury
- Only **1 piece of Speedware** can be installed at a time`,
    related: ['cyberpsychosis', 'cyberware-catalog', 'cyberware-installation'],
  },
  {
    id: 'cyberpsychosis',
    title: 'Cyberpsychosis',
    category: 'Cyberware',
    content: `## Cyberpsychosis

Cyberpsychosis is a dissociative disorder occurring when someone with preexisting psychopathic tendencies enhances themselves via cybernetics to the point they no longer see themselves or others as complete, sapient organisms.

### Symptoms
- Lack of self-preservation
- Complete disregard for others
- Poor impulse control
- Explosive outbursts

### How Humanity Works
- **Starting Humanity** = EMP x 10
- Installing cyberware costs **Humanity Loss (HL)** -- preset at character gen, rolled after
- Your effective **EMP** equals the tens digit of current Humanity (e.g., 44 HUM = EMP 4; 39 HUM = EMP 3)
- If Humanity drops **below 0**, the character enters **cyberpsychosis** and becomes an NPC

### Humanity Loss Sources
- **Cyberware installation** (as listed per item)
- **Traumatic events** (GM-controlled):

| Trauma Type | Example | Humanity Loss |
|---|---|---|
| Traumatic Physical Incident | Torture | 1d6 |
| Traumatic Mental Incident | Witnessing horrific death | 1d6 |
| Long-term Mental Stress | Kidnapping, imprisonment | 2d6 |
| Long-term Environmental Stress | War zone, starvation | 2d6 |

### Practicing Safe Cyber
- **Medical-Grade Cyberware** (replacement only, no enhancement) has **no Humanity cost**
- **Bodysculpting** for therapeutic purposes has **no Humanity cost**
- **Therapy** can restore Humanity (see [[therapy]]):
  - Standard: regain 2d6 HUM (DV15, 500eb)
  - Extreme: regain 4d6 HUM (DV17, 1,000eb)
  - Max Humanity reduced by **2 per cyberware** installed (4 per borgware)

### The Psycho Squad (MAX-TAC)
Specialized police squads hunt down cyberpsychos. Armed with heavy weapons, Metalgear armor, and AV-4 assault vehicles. MAX-TAC ends fights regardless of who started them.`,
    related: ['cyberware-overview', 'therapy', 'derived-stats'],
  },
  {
    id: 'cyberware-catalog',
    title: 'Cyberware Catalog',
    category: 'Cyberware',
    content: `## Cyberware Catalog

### Fashionware (7 Option Slots, no foundation)

| Name | Install | Effect | Cost | HL |
|---|---|---|---|---|
| Biomonitor | Mall | Readout of vitals, links to Agent | 100eb | 0 |
| Chemskin | Mall | Permanent skin hue change; +2 Personal Grooming w/ Techhair | 100eb | 0 |
| EMP Threading | Mall | Silver circuit-like patterns on body | 10eb | 0 |
| Light Tattoo | Mall | Colored tattoos under skin; +2 Wardrobe & Style w/ 3+ tattoos | 100eb | 0 |
| Shift Tacts | Mall | Color-changing eye lenses | 100eb | 0 |
| Skinwatch | Mall | Subdermal LED watch | 100eb | 0 |
| Techhair | Mall | Color-light artificial hair; +2 Personal Grooming w/ Chemskin | 100eb | 0 |

### Neuralware (Foundation: Neural Link -- 500eb, Clinic, HL 7, 5 slots)

| Name | Install | Effect | Cost | HL |
|---|---|---|---|---|
| Braindance Recorder | Clinic | Records experiences to memory chip | 500eb | 7 |
| Chipware Socket | Clinic | Required for Chipware; back of neck | 500eb | 7 |
| Interface Plugs | Clinic | Connect to machines mentally | 500eb | 7 |
| Kerenzikov | Clinic | Speedware: +2 Initiative | 500eb | 14 |
| Sandevistan | Clinic | Speedware: +3 Initiative for 1 min (1hr cooldown) | 500eb | 7 |
| Chemical Analyzer | N/A | Chipware: test substance composition | 500eb | 3 |
| Memory Chip | N/A | Data storage | 10eb | 0 |
| Olfactory Boost | N/A | Chipware: track via scent | 100eb | 7 |
| Pain Editor | N/A | Chipware: ignore Seriously Wounded penalties | 1,000eb | 14 |
| Skill Chip | N/A | Chipware: Skill at Level 3 (unless already 3+) | 500eb/1,000eb | 7 |
| Tactile Boost | N/A | Chipware: detect motion within 20m/yd | 100eb | 7 |

### Cyberoptics (Foundation: Cybereye -- 100eb, Clinic, HL 7, 3 slots each)

| Name | Install | Effect | Cost | HL |
|---|---|---|---|---|
| Anti-Dazzle | Mall | Immune to flash effects (paired) | 100eb | 2 |
| Chyron | Mall | Subscreen in field of vision | 100eb | 2 |
| Color Shift | Mall | Unlimited eye color/pattern changes | 100eb | 2 |
| Dartgun | Clinic | Concealed single-shot Exotic Weapon (3 slots) | 500eb | 2 |
| Image Enhance | Mall | +2 Perception, Lip Reading, Conceal/Reveal (paired) | 500eb | 3 |
| Low Light/IR/UV | Mall | Ignore darkness/smoke/fog penalties (paired, 2 slots each) | 500eb | 3 |
| MicroOptics | Clinic | 400x magnification | 100eb | 2 |
| MicroVideo | Clinic | Camera in eye (2 slots) | 500eb | 2 |
| Radiation Detector | Clinic | See radiation as blue glow within 100m | 1,000eb | 3 |
| Targeting Scope | Clinic | +1 to Aimed Shot checks | 500eb | 3 |
| TeleOptics | Clinic | See detail 800m away; +1 Aimed Shots at 51m+ | 500eb | 3 |
| Virtuality | Mall | Projects cyberspace imagery (paired) | 100eb | 2 |

### Cyberaudio (Foundation: Cyberaudio Suite -- 500eb, Clinic, HL 7, 3 slots)

| Name | Install | Effect | Cost | HL |
|---|---|---|---|---|
| Amplified Hearing | Mall | +2 Perception (hearing) | 100eb | 3 |
| Audio Recorder | Clinic | Records audio | 100eb | 2 |
| Bug Detector | Mall | Beeps within 2m of bugs | 100eb | 2 |
| Homing Tracer | Clinic | Follow linked tracer up to 1 mile | 100eb | 2 |
| Internal Agent | Mall | Fully functional internal Agent | 100eb | 3 |
| Level Damper | Mall | Immune to loud noise effects | 100eb | 2 |
| Radio Communicator | Mall | Radio, 1 mile range | 100eb | 2 |
| Radio Scanner | Clinic | Tune into broadcasts within 1 mile | 50eb | 2 |
| Radar Detector | Clinic | Beeps if radar within 100m | 500eb | 2 |
| Scrambler/Descrambler | Mall | Scramble/descramble comms | 100eb | 2 |
| Voice Stress Analyzer | Mall | +2 Human Perception & Interrogation | 100eb | 3 |

### Internal Body Cyberware (7 Option Slots, no foundation)

| Name | Install | Effect | Cost | HL |
|---|---|---|---|---|
| AudioVox | Clinic | Voice synth; +2 Acting/Play Instrument (singing) | 500eb | 3 |
| Contraceptive Implant | Mall | Prevents pregnancy | 10eb | 0 |
| Enhanced Antibodies | Mall | Heal BODY x 2 per day resting after stabilization | 500eb | 2 |
| Cybersnake | Hospital | Esophagus Very Heavy Melee Weapon (concealable) | 1,000eb | 14 |
| Gills | Hospital | Breathe underwater | 1,000eb | 7 |
| Grafted Muscle & Bone Lace | Hospital | BODY +2 (max 10); changes HP, Wound Threshold, Death Save | 1,000eb | 14 |
| Independent Air Supply | Hospital | 30 min oxygen; 1 hr refill | 1,000eb | 2 |
| Nasal Filters | Clinic | Immune to toxic gases/fumes | 100eb | 2 |
| Radar/Sonar Implant | Clinic | Scan terrain within 50m (not through cover) | 1,000eb | 7 |
| Toxin Binders | Clinic | +2 Resist Torture/Drugs | 100eb | 2 |
| Vampyres | Clinic | Excellent Light Melee Weapon in mouth (concealable, can add Poison/Biotoxin) | 500eb | 14 |

### External Body Cyberware (7 Option Slots, no foundation)

| Name | Install | Effect | Cost | HL |
|---|---|---|---|---|
| Hidden Holster | Clinic | Store concealable weapon inside body | 500eb | 7 |
| Skin Weave | Hospital | Body & head armored at SP7 (doesn't stack, ablates, 1 SP/day recovery) | 500eb | 7 |
| Subdermal Armor | Hospital | Body & head armored at SP11 (doesn't stack, ablates, 1 SP/day recovery) | 1,000eb | 14 |
| Subdermal Pocket | Clinic | 2"x4" storage under skin | 100eb | 3 |

### Cyberlimbs

**Cyberarm** (500eb, Hospital, HL 7, 4 Option Slots):

| Option | Install | Effect | Cost | HL |
|---|---|---|---|---|
| Standard Hand | Clinic | Standard cybernetic hand | 100eb | 2 |
| Big Knucks | Clinic | Medium Melee Weapon (concealable) | 100eb | 3 |
| Cyberdeck | Clinic | Deck in arm (3 slots) | 500eb | 3 |
| Grapple Hand | Clinic | Fires hand on line 30m | 100eb | 3 |
| Medscanner | Clinic | +2 First Aid/Paramedic (2 slots) | 500eb | 7 |
| Popup Grenade Launcher | Clinic | Concealable Grenade Launcher (2 slots) | 500eb | 7 |
| Popup Melee Weapon | Clinic | Concealable melee weapon (2 slots) | 500eb | 7 |
| Popup Ranged Weapon | Clinic | Concealable 1-hand ranged weapon (2 slots) | 500eb | 7 |
| Popup Shield | Clinic | Concealable Bulletproof Shield (3 slots) | 500eb | 7 |
| Rippers | Clinic | Carbo-glass claws, Medium Melee (concealable) | 500eb | 3 |
| Scratchers | Mall | Carbo-glass nails, Light Melee (concealable) | 100eb | 2 |
| Slice N Dice | Clinic | Monofilament whip, Medium Melee (concealable) | 500eb | 3 |
| Wolvers | Clinic | Long claws, Heavy Melee (concealable) | 500eb | 7 |
| Tool Hand | Clinic | Fingers contain tools | 100eb | 3 |
| Subdermal Grip | Clinic | Use Smartgun without Interface Plugs (requires Neural Link) | 100eb | 3 |

**Cyberleg** (100eb, Hospital, HL 3, 3 Option Slots):

| Option | Install | Effect | Cost | HL |
|---|---|---|---|---|
| Grip Foot | Clinic | No climbing movement penalty (paired) | 500eb | 3 |
| Jump Booster | Clinic | No jumping movement penalty (paired, 2 slots) | 500eb | 3 |
| Skate Foot | Clinic | +6m/yds on Run Action (paired) | 500eb | 3 |
| Talon Foot | Clinic | Light Melee Weapon in foot (concealable) | 500eb | 3 |
| Web Foot | Clinic | No swimming movement penalty (paired) | 500eb | 3 |

**Cyberlimb Options (both):**
- **Hardened Shielding** (1,000eb, Clinic, HL 3): Immune to EMP and Non-Black ICE disabling
- **Plastic Covering** (100eb, Clinic, HL 0): Cosmetic covering
- **RealSkinn Covering** (500eb, Clinic, HL 0): Realistic skin covering
- **Superchrome Covering** (1,000eb, Clinic, HL 2): Flashy chrome`,
    related: ['cyberware-overview', 'cyberpsychosis', 'cyberware-installation'],
  },

  // ============================================================
  // NIGHT CITY
  // ============================================================
  {
    id: 'night-city-overview',
    title: 'Night City Overview',
    category: 'Night City',
    content: `## Night City in the Time of the Red

Night City is a city in the process of rebuilding after the 4th Corporate War and the nuclear detonation of 2023. Founded by developer Richard Night as "Coronado City," it was renamed after his assassination in 1998.

### History in Brief
- **1990s:** Founded by Richard Night; Mob takes over after his murder
- **2009-2011:** Mob War -- Corporations destroy Mob power
- **2013-2020:** Golden Age under Corporate control
- **2023:** Nuclear bomb detonates in Arasaka Towers, destroying central city
- **2023-2045:** Time of the Red -- rebuilding era with red skies from particulate debris

### Zone Types

| Zone Type | Description |
|---|---|
| **Hot Zone** | Blasted terrain around old Corporate Center. Wrecked skyscrapers, radiation, worst gangs |
| **Rebuilding Urban Center** | Surviving areas under construction. Cranes and Zhirafa mechanoids everywhere |
| **Executive Zone** | Gated community for high-level Corporate execs. Golf, spas, armed security |
| **Combat Zone** | Most dangerous and lawless area. Gangs rule absolutely |
| **Overpacked Suburbs** | Former Beavervilles now crammed with tent cities and refugee camps |
| **Reclaimed Perimeter** | Just outside the City sprawl. Nomad Families and private security |
| **The Open Road** | Open highway. Nomads, road gangs, and travelers |

### Threat Ratings

| Rating | Description |
|---|---|
| **Executive** | Secure gated neighborhood, ultra-rich only, armed security |
| **Corporate** | Patrolled by Corporate security, safe from Combat Zone but with high-budget dangers |
| **Moderate** | Buffer zones outside Corporate areas; relative safety but Combat Zone bleeds over |
| **Combat** | Worst places in the city; people die and nobody cleans up |
| **Outskirts** | Outside the sprawl; only your own laws. Road gangers and Nomads |

### Districts (Time of the Red)
**Rebuilding Urban Center:** The Glen, Little Europe, NorCal Military Base, Pacifica Playground, Upper Marina, University District, Watson Development

**Executive Zone:** One gated district for the Corporate elite

**Combat Zones:** Old Japantown, Little China, Old Combat Zone, South Night City

**Overpacked Suburbs:** Heywood (Santo Domingo), Heywood Industrial Zone, New Westbrook, Rancho Coronado

### Political Structure
Run by a junta of old city government, Edgerunner factions, Nomad Families, and Corporations (Biotechnica, Continental Brands, Militech, Network 54, Petrochem, Rocklin Augmentics, SovOil, Trauma Team, Zhirafa, and covertly Arasaka). No mayor -- City Managers from each district form a Council.`,
    related: ['gangs-of-night-city', 'key-locations', 'role-lawman'],
  },
  {
    id: 'gangs-of-night-city',
    title: 'Gangs of Night City',
    category: 'Night City',
    content: `## Gangs of Night City

The streets crawl with gangs. By day, the streets belong to Corporates and commuters. At night, the predators emerge.

| Gang | Type | Description |
|---|---|---|
| **6th Street** | Vigilante | Veterans of the 4th Corporate War. Well-armed, heavily cybered. Protect neighborhoods but forced into extortion/smuggling. Protectors of Holy Angels Church. |
| **The Bozos** | Killer Clown | Biosculpted to look like circus clowns (real red noses, flat feet). Started as pranksters, became lethal. Play on people's greatest fears. |
| **Inquisitors** | Cult | Believe cyberware is blasphemous. Tear it from your body to "save your soul." At war with every other gang. Everyone hates them. |
| **Iron Sights** | Combat | Small but tough borderline cyberpsychos. Formerly Arasaka-funded. Rumored to have a new benefactor. |
| **Maelstrom** | Combat/Cyber | Formed from Metal Warriors remnants. Adopted meat-hating philosophies. Extreme visible cyberware. Constantly at war with Inquisitors. |
| **Philharmonic Vampyres** | Prankster | Tuxedo-wearing "vampires." Are they artists or hoodlums? Known for elaborate public pranks and hacking stunts. |
| **Piranhas** | Party | Typical party gang. Drink Smash, deal drugs, mug people. The Party is everything. |
| **Prime-Time Players** | Poser | Biosculpted to look like old sitcom/TV characters. Extended family gang, fiercely protective of their turf. |
| **Reckoners** | Apocalyptic Cult | Preach the coming Harvest of Souls. Recruit from homeless. Some are serious crazies with explosives. |
| **Red Chrome Legion** | Hate | Neo-fascist hate gang. Uniforms and militaristic slogans. Attack anything not "right." |
| **Scavvers** | Scavenger | Not a gang per se -- desperate homeless squatting in ruins, digging for salable items. Many die in unsafe terrain. |
| **Steel Vaqueros** | Nomad Pack | Out of Salinas. Run coastal highway from Santa Cruz to southern cities. Smart, relatively honest. Supply deals with Reclaimers. |
| **Tyger Claws** | Protector | Formerly under Arasaka. Protect the Asian community. Known for fast bikes, enhanced reflexes, killer martial arts. Helped rebuild Japantown. |
| **Voodoo Boys** | Terrorist | Crime contacts in Florida/Caribbean. Deal non-synthetic drugs. Real Haitian immigrants have been moving in and clashing with them violently. |`,
    related: ['night-city-overview', 'key-locations', 'role-lawman'],
  },
  {
    id: 'key-locations',
    title: 'Key Locations in Night City',
    category: 'Night City',
    content: `## Key Locations in Night City

### Hot Zone
1. **Totentanz** -- Bar at the edge of the Hot Zone. Boostergang hangout. Bad night = body count under 20.

### Rebuilding Urban Center

**The Glen:**
2. **1st Night City Bank** -- Main business artery. Marble floors, red velvet lines. Vault on restricted 2nd floor.
3. **City Hall** -- Seat of local government. Packed with lobbyists and bureaucrats.
4. **City Police Precinct #1** -- First line of defense against Combat Zone threats.
5. **Club Atlantis** -- Multi-level club popular with Execs. Moving staircases, mirrored walls, cerulean lighting.
6. **Hall of Justice** -- Courthouse and jail. Brutalist architecture with oversized towers and portcullis.
7. **Merrill, Asukaga & Finch Offices** -- Financial firm. Top floors of a central skyscraper. By appointment only.
8. **Raven Microcybernetics** -- Cyberware corp. Top 10 floors of a shared building.

**University District:**
9. **Biotechnica Campus** -- Geodesic dome greenhouses. Strange sounds at night.
10. **Night City University** -- Fortified campus. Only opportunity for non-Corp higher education.

**Little Europe:**
11. **Camden Court** -- Reinforced apartment complex. Staggering security. Solo favorite.
12. **Continental Brands Offices** -- Features the Oasis Megamart and Cooking with Kibble classes.
13. **Danger Girl Offices** -- Art deco building. Hot pink shag, cat girls, brightly colored guns.
14. **Holy Angels Church** -- Run by Father Kevin. Sanctuary for anyone willing to lay down weapons.
15. **Night City Firestation #2** -- Deploys cybered-up firefighting teams.
16. **Short Circuit** -- Tech and Netrunner bar. Patrons haul in wrecked tech to tinker with.

**Upper Marina:**
17. **City Medical Center** -- Research hospital. Therapy and biosculpting available.
18. **McCartney Field Stadium** -- 75,000-seat stadium. Home to Slammers, Rangers, Heat, Death Dealers.
19. **REO Meatwagon Offices** -- Trauma Team rival that "meat jumps" their calls.
20. **The Afterlife** -- Premiere Solo bar in a converted morgue. Run by legendary Solo Rogue.
21. **Ziggurat Offices** -- Curved skyscraper over the bay. Press conferences only.

**Watson Development:**
22. **City Police Precinct #3** -- Veteran officers with Militech weaponry.
23. **Petrochem Offices** -- Across from SovOil. Museum and gift shop, otherwise locked down.
24. **SovOil Offices** -- Across from Petrochem. Gaudy gilded statues visible past the gates.
25. **Trauma Team Tower** -- Hospital, AV-4 repair bay, air traffic control.

### Combat Zones
29. **Crisis Medical Center** -- No-questions-asked. Neutral ground for all factions.
30. **Highcourt Plaza Hotel** -- Classy, well-defended. Glass elevators, 1920s decor.
31. **The Forlorn Hope** -- Exclusive Solo bar for veterans.
32. **Jesse James' Kosher Deli** -- Nomad/Booster saloon with a nightly body count.
33. **Medical Technologies** -- Waterfront body bank growing replacement limbs.
34. **Savage Docs** -- Ripperdoc joint run by 5 apprentices, protected by Yakuza/Tyger Claws.
35. **The Slammer** -- Ganger bar with cinder block arena.

### Overpacked Suburbs
36. **Aldecaldo Camp** -- Major Nomad trade and transport hub at city edge.
37. **City Police Precinct #2** -- Overworked. Relies on Zhirafa drones.
38. **MetalStorm** -- Indestructible bar under a bridge. Caters to chromers and full borgs.
39. **Zhirafa Office Park** -- Built atop existing factories. Drones and animal mecha on patrol.
40. **Network 54 Offices** -- Neon 54 on the skyline. Live studio audiences, star housing.
42. **Rocklin Augmentics Campus** -- Offices, hospital, R&D connected by skybridges.`,
    related: ['night-city-overview', 'gangs-of-night-city', 'role-fixer'],
  },

  // ============================================================
  // EQUIPMENT
  // ============================================================
  {
    id: 'weapons-catalog',
    title: 'Weapons Catalog',
    category: 'Equipment',
    content: `## Melee Weapons

| Type | Examples | Hands | Damage | ROF | Conceal | Cost |
|---|---|---|---|---|---|---|
| Light Melee | Combat Knife, Tomahawk | 1 | 1d6 | 2 | YES | 50eb (Costly) |
| Medium Melee | Baseball Bat, Crowbar, Machete | 1 or 2 | 2d6 | 2 | NO | 50eb (Costly) |
| Heavy Melee | Lead Pipe, Sword, Spiked Bat | 2 | 3d6 | 2 | NO | 100eb (Premium) |
| Very Heavy Melee | Chainsaw, Sledgehammer, Naginata | 2 | 4d6 | 1 | NO | 500eb (Expensive) |

## Ranged Weapons

| Weapon | Skill | Damage | Magazine | ROF | Hands | Conceal | Cost |
|---|---|---|---|---|---|---|---|
| Medium Pistol | Handgun | 2d6 | 12 (M Pistol) | 2 | 1 | YES | 50eb |
| Heavy Pistol | Handgun | 3d6 | 8 (H Pistol) | 2 | 1 | YES | 100eb |
| Very Heavy Pistol | Handgun | 4d6 | 8 (VH Pistol) | 1 | 1 | NO | 100eb |
| SMG | Handgun | 2d6 | 30 (M Pistol) | 1 | 1 | YES | 100eb |
| Heavy SMG | Handgun | 3d6 | 40 (H Pistol) | 1 | 1 | NO | 100eb |
| Shotgun | Shoulder Arms | 5d6 | 4 (Slug) | 1 | 2 | NO | 500eb |
| Assault Rifle | Shoulder Arms | 5d6 | 25 (Rifle) | 1 | 2 | NO | 500eb |
| Sniper Rifle | Shoulder Arms | 5d6 | 4 (Rifle) | 1 | 2 | NO | 500eb |
| Bow/Crossbow | Archery | 4d6 | N/A (Arrow) | 1 | 2 | NO | 100eb |
| Grenade Launcher | Heavy Weapons | 6d6 | 2 (Grenade) | 1 | 2 | NO | 500eb |
| Rocket Launcher | Heavy Weapons | 8d6 | 1 (Rocket) | 1 | 2 | NO | 500eb |

## Weapon Quality

| Standard Cost | Poor Quality Cost | Excellent Quality Cost |
|---|---|---|
| 50eb (Costly) | 20eb (Everyday) | 100eb (Premium) |
| 100eb (Premium) | 50eb (Costly) | 500eb (Expensive) |
| 500eb (Expensive) | 100eb (Premium) | 1,000eb (V. Expensive) |

- **Poor Quality:** Malfunctions on Critical Failure (1); Action to unjam
- **Excellent Quality:** +1 to Attack checks

### Brand Examples
**Medium Pistol:** Dai Lung Streetmaster (Poor) / Federated Arms X-9mm (Std) / Militech "Avenger" (Excellent)
**Heavy Pistol:** Dai Lung Magnum (Poor) / Mustang Arms "Mark III" (Std) / Nova "Cityhunter" (Excellent)
**VH Pistol:** Fed. Arms "Super Chief" (Poor) / Sternmeyer P-35 (Std) / Militech "Boomer Buster" (Excellent)
**Assault Rifle:** Chadran Arms "Jungle Reaper" (Poor) / Militech "Ronin" (Std) / Militech "Dragon" (Excellent)
**Sniper Rifle:** GunMart "Snipe-Star" (Poor) / Nomad "Long Rifle" (Std) / Arasaka WSSA (Excellent)`,
    related: ['armor-catalog', 'ammo-types', 'weapon-attachments', 'exotic-weapons'],
  },
  {
    id: 'armor-catalog',
    title: 'Armor Catalog',
    category: 'Equipment',
    content: `## Master Armor List

| Armor Type | SP | Penalty | Cost |
|---|---|---|---|
| Leathers | 4 | None | 20eb (Everyday) |
| Kevlar | 7 | None | 50eb (Costly) |
| Light Armorjack | 11 | None | 100eb (Premium) |
| Bodyweight Suit | 11 | None | 1,000eb (V. Expensive) |
| Medium Armorjack | 12 | -2 REF, DEX, MOVE | 100eb (Premium) |
| Heavy Armorjack | 13 | -2 REF, DEX, MOVE | 500eb (Expensive) |
| Flak | 15 | -4 REF, DEX, MOVE | 500eb (Expensive) |
| Metalgear | 18 | -4 REF, DEX, MOVE | 5,000eb (Luxury) |
| Bulletproof Shield | 10 HP | None (takes up one arm) | 100eb (Premium) |

### Armor Descriptions
- **Leathers:** Thin leather with reinforced pads. Favored by Nomads and bikers.
- **Kevlar:** Heat-resistant synthetic fiber. Can be made into clothes, vests, suits, bikinis.
- **Light Armorjack:** Kevlar + plastic mesh. Superior bullet protection.
- **Bodyweight Suit:** Sintered armorgel skinsuit. Breathable, stores Cyberdeck, supports Interface Plugs. Must wear on both body and head. Adds 1 Hardware-only slot to connected Cyberdeck.
- **Medium Armorjack:** Heavier with solid plastic plating.
- **Heavy Armorjack:** Thickest Armorjack with dense Kevlar and layered mix.
- **Flak:** Metal plates designed for protection from explosives and high-caliber rounds.
- **Metalgear:** Solid metal and plastic plates. Stops almost anything but makes you slow.

### Armor Rules
- SP does **not stack** -- only highest SP counts
- Armor penalty applies once (worst penalty of all worn armor)
- All worn armor in a location is ablated simultaneously
- Melee weapons ignore **half** armor (round up); Brawling does not`,
    related: ['weapons-catalog', 'damage-armor', 'gear-catalog'],
  },
  {
    id: 'gear-catalog',
    title: 'General Gear Catalog',
    category: 'Equipment',
    content: `## General Gear

### Electronics & Surveillance

| Item | Cost |
|---|---|
| Agent | 100eb (Premium) |
| Audio Recorder | 100eb (Premium) |
| Braindance Viewer | 1,000eb (V. Expensive) |
| Bug Detector | 500eb (Expensive) |
| Chemical Analyzer | 1,000eb (V. Expensive) |
| Computer | 50eb (Costly) |
| Cyberdeck (Poor Quality, 5 slots) | 100eb (Premium) |
| Cyberdeck (Standard, 7 slots) | 500eb (Expensive) |
| Cyberdeck (Excellent, 9 slots) | 1,000eb (V. Expensive) |
| Disposable Cell Phone | 50eb (Costly) |
| Homing Tracer | 500eb (Expensive) |
| Medscanner | 1,000eb (V. Expensive) |
| Radar Detector | 500eb (Expensive) |
| Radio Communicator | 100eb (Premium) |
| Radio Scanner/Music Player | 50eb (Costly) |
| Scrambler/Descrambler | 500eb (Expensive) |
| Smart Glasses | 500eb (Expensive) |
| Techscanner | 1,000eb (V. Expensive) |
| Video Camera | 100eb (Premium) |
| Virtuality Goggles | 100eb (Premium) |

### Medical Equipment

| Item | Cost |
|---|---|
| Airhypo | 50eb (Costly) |
| Cryopump | 5,000eb (Luxury) |
| Cryotank | 5,000eb (Luxury) |
| Medtech Bag | 100eb (Premium) |

### Survival Gear

| Item | Cost |
|---|---|
| Anti-Smog Breathing Mask | 20eb (Everyday) |
| Auto Level Dampening Ear Protectors | 1,000eb (V. Expensive) |
| Binoculars | 50eb (Costly) |
| Duct Tape | 20eb (Everyday) |
| Flashlight | 20eb (Everyday) |
| Glow Paint | 20eb (Everyday) |
| Glow Stick | 10eb (Cheap) |
| Grapple Gun | 100eb (Premium) |
| Handcuffs | 50eb (Costly) |
| Inflatable Bed & Sleep-bag | 20eb (Everyday) |
| Lock Picking Set | 20eb (Everyday) |
| Personal CarePak | 20eb (Everyday) |
| Radiation Suit | 1,000eb (V. Expensive) |
| Road Flare | 10eb (Cheap) |
| Rope (60m/yds) | 20eb (Everyday) |
| Shovel or Axe | 50eb (Costly) |
| Tech Bag | 500eb (Expensive) |
| Techtool | 100eb (Premium) |
| Tent & Camping Equipment | 50eb (Costly) |

### Consumables & Misc

| Item | Cost |
|---|---|
| Food Stick | 10eb (Cheap) |
| Kibble Pack | 10eb (Cheap) |
| MRE | 10eb (Cheap) |
| Memory Chips | 10eb (Cheap) |
| Vial of Biotoxin | 500eb (Expensive) |
| Vial of Poison | 100eb (Premium) |
| Drum Synthesizer | 500eb (Expensive) |
| Electric Guitar/Instrument | 500eb (Expensive) |
| Pocket Amplifier | 50eb (Costly) |

### Linear Frames

| Item | Cost | Effect |
|---|---|---|
| Linear Frame Beta | 5,000eb (Luxury) | Powered exoskeleton |
| Linear Frame Sigma | 1,000eb (V. Expensive) | Lighter powered frame |`,
    related: ['weapons-catalog', 'armor-catalog', 'ammo-types'],
  },
  {
    id: 'ammo-types',
    title: 'Ammunition Types',
    category: 'Equipment',
    content: `## Ammunition

Ammunition comes in types: Bullet (M/H/VH Pistol, Slug, Rifle), Shotgun Shell, Arrow, Grenade, and Rocket. Grenades and Rockets purchased individually; all others in increments of **10**.

| Ammo Type | Cost | Available For | Effect |
|---|---|---|---|
| **Basic** | 10eb | All except Grenades/Rockets | Standard, no special features |
| **Armor-Piercing** | 100eb | All except Shotgun Shells | Ablate armor by **2** instead of 1 |
| **Biotoxin** | 500eb | Arrows and Grenades only | No damage; DV15 Resist Torture/Drugs or 3d6 direct to HP |
| **EMP** | 500eb | Grenades only | No damage; DV15 Cybertech or GM disables 2 cyberware/electronics for 1 min |
| **Expansive** | 100eb | Arrows, Bullets, Slugs | Foreign Object injury forces re-roll until non-Foreign Object result (no extra Bonus Damage) |
| **Flashbang** | 100eb | Grenades only | No damage; DV15 Resist T/D or Damaged Eye + Damaged Ear for 1 min |
| **Incendiary** | 100eb | Arrows, Bullets, Grenades, Shells | If damage gets through armor, target ignited: 2 HP/turn until extinguished |
| **Poison** | 100eb | Arrows and Grenades only | No damage; DV13 Resist T/D or 2d6 direct to HP |
| **Rubber** | 10eb | Arrows, Bullets, Slugs | Cannot cause Critical Injury, cannot ablate armor, cannot kill (leaves at 1 HP) |
| **Sleep** | 500eb | Arrows and Grenades | No damage; DV13 Resist T/D or Prone + Unconscious 1 min |
| **Smart** | 500eb | Arrows, Bullets, Rockets | Requires Targeting Scope. Miss by 4 or less = second chance (roll d10+10 vs DV) |
| **Smoke** | 50eb | Grenades only | Obscures 10m x 10m area for 1 min (-4 penalty) |
| **Teargas** | 50eb | Grenades only | No damage; DV13 Resist T/D or Damaged Eye for 1 min (meat eyes only) |

### Magazine Sizes

| Weapon | Standard | Extended | Drum |
|---|---|---|---|
| Medium Pistol | 12 | 18 | 36 |
| Heavy Pistol | 8 | 14 | 28 |
| Very Heavy Pistol | 8 | 14 | 28 |
| SMG | 30 | 40 | 50 |
| Heavy SMG | 40 | 50 | 60 |
| Shotgun | 4 | 8 | 16 |
| Assault Rifle | 25 | 35 | 45 |
| Sniper Rifle | 4 | 8 | 12 |
| Grenade Launcher | 2 | 4 | 6 |
| Rocket Launcher | 1 | 2 | 3 |`,
    related: ['weapons-catalog', 'weapon-attachments', 'ranged-combat'],
  },
  {
    id: 'weapon-attachments',
    title: 'Weapon Attachments',
    category: 'Equipment',
    content: `## Weapon Attachments

Each Non-Exotic Ranged Weapon has **3 Attachment Slots**. Same attachment twice does nothing. Attachments are weapon-type specific.

| Attachment | Cost | Slots | Eligible | Effect |
|---|---|---|---|---|
| **Bayonet** | 100eb | 1 | Shoulder Arms weapons | Can also be used as Light Melee Weapon. Cannot conceal. |
| **Drum Magazine** | 500eb | 1 | All except Bows/Crossbows | Holds Drum capacity (see ammo table). Cannot conceal. |
| **Extended Magazine** | 100eb | 1 | All except Bows/Crossbows | Holds Extended capacity. Cannot conceal. |
| **Grenade Launcher Underbarrel** | 500eb | 2 | Shoulder Arms weapons | Also usable as Grenade Launcher (1 grenade mag). 2-handed. Cannot conceal. |
| **Infrared Nightvision Scope** | 500eb | 1 | All Non-Exotic | Reduces darkness/smoke/fog penalties to 0. Can distinguish hot meat from cold metal. |
| **Shotgun Underbarrel** | 500eb | 2 | Shoulder Arms weapons | Also usable as Shotgun (2-shot mag). 2-handed. Cannot conceal. |
| **Smartgun Link** | 500eb | 2 | All Non-Exotic | +1 to Ranged Attacks. Requires Interface Plugs or Subdermal Grip (both need Neural Link). |
| **Sniping Scope** | 100eb | 1 | All Non-Exotic | See detail 800m away. +1 to single shot/Aimed Shot at 51m+. Does not stack with TeleOptics. |

Only one magazine attachment (Drum or Extended) can be on a weapon at a time.`,
    related: ['weapons-catalog', 'ammo-types', 'ranged-combat'],
  },
  {
    id: 'exotic-weapons',
    title: 'Exotic Weapons',
    category: 'Equipment',
    content: `## Exotic Weapons

All Exotic Weapons are **Average Quality** and incompatible with Weapon Attachments and Non-Basic Ammunition unless otherwise noted.

| Weapon | Cost | Description |
|---|---|---|
| **Air Pistol** | 100eb | Exotic Medium Pistol. Fires paintballs (no damage). Acid paintballs lower target SP by 1 per hit. Cannot cause Critical Injuries. |
| **Battleglove** | 1,000eb | Heavy gauntlet with 3 Cyberarm option slots. Putting on/off = Action. Cannot conceal. |
| **Constitution Arms Hurricane** | 5,000eb | Exotic 2 ROF Shotgun. 16-shot drum. Reload = 2 Actions. Requires BODY 11+ unless mounted. No Aimed Shots. |
| **Dartgun** | 100eb | Exotic VH Pistol. Only loads Non-Basic Arrow Ammo. Clip of 8. |
| **Flamethrower** | 500eb | Exotic Shotgun (Heavy Weapons Skill). Fires incendiary shells only. Ignited targets take **4 HP/turn**. Cannot cause Critical Injuries or Aimed Shots. |
| **Kendachi Mono-Three** | 5,000eb | Excellent Quality 2-Handed Exotic VH Melee. With biometric key: ignores armor below SP11. Crystal blade with optional laser glow. |
| **Malorian Arms 3516** | 10,000eb | Excellent Quality Exotic VH Pistol. **5d6 damage**. Permanent Smartgun Link (must be connected to fire). Extremely rare. |
| **Microwaver** | 500eb | Exotic VH Pistol. No damage; DV15 Cybertech or GM disables 2 cyberware/electronics for 1 min. Battery: 8 shots, 1hr recharge, 50eb replacement. |
| **Militech "Cowboy" U-56** | 5,000eb | Exotic **2 ROF** Grenade Launcher. 4-grenade mag. Can fire all Grenade Ammo types. Reload = 2 Actions. BODY 11+ unless mounted. |
| **Rhinemetall EMG-86 Railgun** | 5,000eb | Exotic Assault Rifle (Heavy Weapons Skill). No Autofire or Aimed Shots. 4 shots. Ignores armor below SP11. Reload = 2 Actions. BODY 11+ unless mounted. |
| **Shrieker** | 500eb | Exotic VH Pistol. Causes Damaged Ear to user without ear protection. DV15 Resist T/D or Damaged Ear to target. Battery: 8 shots, 50eb replacement. |
| **Stun Baton** | 100eb | 1-Handed Exotic Medium Melee. Cannot kill (1 HP + Unconscious). No Critical Injuries, no ablation. |
| **Stun Gun** | 100eb | Exotic Heavy Pistol. Cannot kill (1 HP + Unconscious). No Critical Injuries, no ablation. Battery: 8 shots, 50eb replacement. |
| **Tsunami Arms Helix** | 5,000eb | Exotic Assault Rifle (Autofire Skill only). Consumes **20 bullets** per attack. 40-round mag. Max multiplier **5**. Reload = 2 Actions. BODY 11+ unless mounted. |`,
    related: ['weapons-catalog', 'ammo-types', 'weapon-attachments'],
  },

  // ============================================================
  // GM TOOLS
  // ============================================================
  {
    id: 'running-the-game',
    title: 'Running the Game',
    category: 'GM Tools',
    content: `## Running Cyberpunk RED

### The Four Tricks
1. **Know the World:** Immerse yourself in the genre. Urban environments should feel gritty -- garbage-strewn alleys, bodies in gutters, firefights at corners.
2. **Play for Keeps:** Don't be afraid to kill PCs. Constantly get them into fights, traps, and betrayals. No place is absolutely safe.
3. **Set the Mood:** Dim blue lights, heavy rock music, encourage leather and mirrorshades. This is the Dark Future.
4. **Teams are the Hook:** PCs need a solid reason to cooperate. The team is thrown together by fate.

### Team Types
- **Neocorporate Teams:** Execs, Netrunner, Fixer, Tech/Medtech, 2-3 Solos
- **Bands:** Rockerboys + Fixer (manager) + Tech + Solo bodyguards
- **Mercenaries:** Fixer + Netrunner + Tech + Medtech + Solos/Nomads
- **Nomad Packs:** Fixers + Netrunner + Techs/Medtechs + Nomads/Solos
- **Lawmen:** Fixers (Vice) + Netrunner + Exec (Captain) + grunt cops + Psycho Squad Solos
- **Trauma Teams:** Driver + Medtechs + Solos (security)
- **Reclaimers:** Nomad leader + Solos/Fixers + Netrunner

### The Caper Crew Roles
| Role | Function |
|---|---|
| **The Mastermind** | Organizes the Job (Fixer or Exec) |
| **The Runner** | NET cover (Netrunner) |
| **The Tech** | Brings and maintains gear |
| **The Medtech** | Patches holes |
| **The Ninja** | Stealth specialist (Solo variant) |
| **The Face** | Distraction / social engineering (Rockerboy) |
| **The Driver** | Transport (Nomad) |
| **The Muscle** | Raw strength and violence |
| **The Killer** | Snipers, hit men |
| **The Scrounger** | Sources obscure items (Fixer/Tech/Exec) |

### Beat Charts (Adventure Structure)
Every adventure has 5 Beat types: **Hook**, **Development**, **Cliffhanger**, **Climax**, **Resolution**.

**Rules:**
1. Always begins with a **Hook**
2. Always ends with a **Climax** + **Resolution**
3. Alternate Developments and Cliffhangers (never two of the same in a row)
4. Each Beat = ~30 minutes of real-world play

**Hook Types:** Coronet Blue (amnesia), Crisis, Discovery, False Accusation, Kidnapped, Looming Threat, Murder, Revelation

**Cliffhanger Types:** Ambush, Battle, Chase, Confrontation, Contest, Dogfight, Duel, Fist Fight, Monster, Obstacles, Pursuit, Race, Skirmish

**Development Types:** Advantage Revealed, Alliance, Back from Dead, Betrayal, Clue, Foreshadowing, Framed!, Gain Mastery, Hazardous Quest, Hesitation, Lie Revealed, Mistaken Identity, Monologue, Not What It Seems, Obsession, Personal Stake, Puzzle, Rescuers!, Retreat, Revealed Weakness, Revelation, Romance, Sabotage!, Second Chance, Secret Meeting, Strange Bedfellows, Turnabout!, Vengeance!, Warning

**Climax Types:** Final Battle, Final Revelation, Final Act

**Resolution Types:** Antagonist Escapes, Antagonist Killed, Antagonist Toppled, Edgerunners Captured, Edgerunners Escape, Ending Cliffhanger, Greater Threat, Happy Ending, Pyrrhic Victory

### Battle Scaling
| Enemy Type | Equivalent | Notes |
|---|---|---|
| **Mook** | 1 Edgerunner | Bodyguards, Boosters, Road Gangers, Security Operatives |
| **Lieutenant** | 2 Edgerunners | Netrunners, Reclaimer Chiefs, Security Officers |
| **Mini Boss** | 3 Edgerunners | Outriders, Pyros |
| **Cyberpsycho** | Full Boss | Only use when Edgerunners are ready |`,
    related: ['improvement-points', 'encounter-tables', 'combat-overview'],
  },
  {
    id: 'improvement-points',
    title: 'Improvement Points',
    category: 'GM Tools',
    content: `## Improvement Points (IP)

### Earning IP
After each game session, the GM awards IP based on **Playstyle** and performance. Four playstyles exist:
- **Warriors:** Combat-oriented
- **Socializers:** Supportive, group-focused
- **Explorers:** Investigation and discovery
- **Roleplayers:** In-character portrayal

| IP | Group Achievement | Warrior | Socializer | Explorer | Roleplayer |
|---|---|---|---|---|---|
| **10** | Tried valiantly but failed | Used combat Skills often | Supportive part of party | Attempted to investigate | Attempted to roleplay |
| **20** | Barely accomplished goals | Effective combat, took out key opponents | Helpful for party unity | Effective exploration | Roleplayed in character often |
| **30** | Worked together well | Defeated most dangerous opponents | Frequent helpful activities | Furthered personal/party goals | Frequent effective roleplaying |
| **40** | Accomplished most goals well | Something out of the ordinary | Encouraged group overall | Discovered something extraordinary | Clever speech or interaction |
| **50** | Most goals + stellar moments | Very clever combat tactics | Very effective group support | Very clever investigation | Very effective roleplaying moment |
| **60** | Strong success, all goals met | Combat critical to session outcome | Participation critical to group success | Investigation critical to session | Roleplaying changed personal outcome |
| **70** | Resounding success + side goals | Combat saved entire party | Support critical to group goals | Investigation critical to entire party | Roleplaying changed entire game |
| **80** | Legendary, all goals + all side goals | Truly incredible combat feat | Incredible group support | Incredible investigation discovery | Incredible roleplaying moment |

### Spending IP

**Typical Skill Improvement:**

| Level | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| **IP Cost** | 20 | 40 | 60 | 80 | 100 | 120 | 140 | 160 | 180 | 200 |

**Difficult (x2) Skill Improvement:**

| Level | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| **IP Cost** | 40 | 80 | 120 | 160 | 200 | 240 | 280 | 320 | 360 | 400 |

**Role Ability Rank Improvement:**

| Rank | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| **IP Cost** | 60 | 120 | 180 | 240 | 300 | 360 | 420 | 480 | 540 | 600 |

You cannot skip Levels/Ranks. Spend some time at your new Level before advancing.

### Multiclassing
- Cannot start with two Roles
- After reaching **Rank 4** in current Role, can buy Rank 1 in a new Role with IP
- Locked from multiclassing again until new Role is at Rank 4
- Retain all features of previous Role
- Can continue improving both Role Abilities`,
    related: ['running-the-game', 'skills-overview', 'encounter-tables'],
  },
  {
    id: 'encounter-tables',
    title: 'Encounter Tables',
    category: 'GM Tools',
    content: `## Encounters in Night City

Roll percentile (2d10) to determine encounters. Adjust based on zone Threat Rating:
- **Corporate zones:** Avoid encounters above 50 unless desired. Corp police arrive in 1d10 rounds if combat breaks out.
- **Combat/Hot zones:** Avoid encounters below 50 unless it's a slow day. Combat more likely, peaceful resolution harder.
- **Executive Zone:** No random encounters -- constant paranoid Corporate surveillance instead.

### Daytime Encounters (d100)

| Roll | Encounter |
|---|---|
| **01-05** | **Local Law:** Patrol officers (half Players). Assault Rifles, Kevlar. Demand ID if armed. |
| **06-11** | **Corporate Guards:** Guards (= Players). Light Armorjack, SMGs. Move along or else. |
| **12-13** | **Techs:** Techs (half Players). Working on city systems or heading to work. |
| **14-17** | **Private Investigator:** PI in Medium Armorjack. Hassling informant, shadowing target, or questioning you. |
| **18-20** | **Corporates:** Corporates (= Players) in Kevlar suits. 1-4: followed by gangers; 5-8: think you're boosters; 9-10: call backup. |
| **21-27** | **Locals:** Two young people. 1-5: held up by Red Chrome Legion; 6-10: beaten by Inquisitors. |
| **28-32** | **Reclaimers:** Group hot-wiring a building. May ignore you, confront you, or blow a transformer (blackout). |
| **33-37** | **Medias:** Camera crew on assignment. 1-5: spotted by story-subject, firefight ensues (you're in the middle). |
| **38-41** | **Private Investigator:** PI beating an informant, breaking into a car, or demanding answers from you. |
| **42-46** | **Trauma Team:** AV-4 lands at firefight scene. 1-5: ignore you; 6-10: think you're the problem. |
| **47-57** | **Scavvers:** Scavengers (= Players). 1-6: beg for cash; 7-8: ignore; 9-10: try to rob you. May have 6 more nearby. |
| **58-63** | **Nomads:** Nomads (= Players). Drunk, looking for a fight, hassling attractive party members. |
| **64-70** | **Boostergang (Piranhas):** Street punks (= Players) with VH Pistols and Rippers. Rough you up for money. |
| **71-76** | **Street Punks:** Smash-heads (= Players). No armor, knives and clubs. Rush you for drug money. |
| **77-82** | **Culties (Reckoners):** Cultists (= Players) with knives, clubs, Heavy Pistols. Preach End Times, then beat truth into you. |
| **83-88** | **Nomad Truck:** Steel Vaqueros (half Players) with broken truck + local gangers (= Players). May accept help. |
| **89-94** | **Boostergang (Iron Sights):** Tough gang (= Players) with SMGs, Rippers, Low Light eyes, Speedware. Shakedown. |
| **95-00** | **Major Criminal:** Vilshenko syndicate operation. Solos unloading contraband. 1-4: don't notice; 5-8: warn off; 9-10: decide to eliminate witnesses. |

### Evening Encounters (d100)

| Roll | Key Encounters |
|---|---|
| **01-05** | **City Police:** Officers in Medium Armorjack with Assault Rifles |
| **06-11** | **Corporate Guards:** Heavy Armorjack, Heavy SMGs |
| **21-25** | **Rockerboys:** On way to a gig with Solo bodyguards and Fixer manager |
| **31-33** | **Philharmonic Vampyres:** Elaborate pranks (hacked streetlights, fake news, fake money). DV14 Electronics/Security to undo. |
| **41-46** | **Roaming Netrunner:** Two Netrunners breaking into corporate NET Architecture. Security turrets may fire on you. |
| **64-69** | **Chromers:** Chromatic Rock fans with chrome cyberarms and Wolvers. 1-5: fight; 6-7: rude comments; 8-10: invite you. |
| **70-76** | **Solo Teams:** Assassins with swords, Heavy Pistols, cybereyes, cyberlegs. 1-5: dodge you; 6-10: eliminate witnesses. |
| **94-100** | **Firefight:** Maelstrom vs Red Chrome Legion. Full gang war. Pick a side or a target. |

### Midnight Encounters (d100)

| Roll | Key Encounters |
|---|---|
| **01-10** | **City Police:** Smartgun-linked ARs. You have no business out after midnight. Will find any pretext to bust you. |
| **11-22** | **Corporate Guards:** Smartgun-linked Heavy SMGs. Extremely hostile to non-Corporates. |
| **30-39** | **Edgerunner Team:** Netrunner + Solo + Nomad preparing to break into Corporate office. May offer you a piece. |
| **43-45** | **Ranger:** Lawman + deputy hunting 6 scavengers. May offer bounty for help. |
| **46-58** | **Nomads (Wildman Pack):** Beating a Corporate couple bloody. Ignore you if you stay clear of their bikes. |
| **59-63** | **Culties (Inquisitors):** Maximum force. Nunchaku, handguns, whips. Air Pistols with Acid rounds. "Hack the heretics!" |
| **64-73** | **Street Punks:** Black Lace addicts (= Players + 2). Rush you regardless of colors. Knives and clubs, no armor. |
| **74-82** | **Boostergang:** Armed gangers with automatic weapons, cyberweapons. Stronger than daytime encounters. |
| **83-88** | **Solo Team:** Smartgun-linked ARs, boosted reflexes/hearing, cybereyes with IR/targeting. Grey ops. |
| **91-100** | **Major Criminal/Firefight:** Syndicate ops or full gang war with heavy weaponry. |`,
    related: ['running-the-game', 'improvement-points', 'combat-overview'],
  },

  // ============================================================
  // CHARACTER CREATION
  // ============================================================
  {
    id: 'chargen-overview',
    title: 'Character Creation Overview',
    category: 'Character Creation',
    content: `## The Three Methods of Character Creation

Cyberpunk RED offers three methods for creating a Character, each with different levels of complexity and customization.

### 1. Streetrat (Templates)
The fastest method. Everything is predetermined -- STATs, Skills, Weapons, Armor, Gear, and Cyberware are all pre-assigned based on your Role. Best for new players or quick starts.
- **STATs:** Pre-rolled template values
- **Skills:** Predetermined by Role
- **Starting Gear:** Predetermined by Role (see tables below)
- **Starting Money:** **500eb** to spend on extra items or save
- **Cyberware:** Predetermined by Role

### 2. Edgerunner (Fast and Dirty)
A middle ground. You roll STATs randomly and pick from a curated list of Skills, but Weapons, Armor, Gear, and Cyberware are still predetermined by Role.
- **STATs:** Roll randomly (roll a number of d10, arrange as desired)
- **Skills:** Choose from a prioritized skill package
- **Starting Gear:** Predetermined by Role
- **Starting Money:** **500eb** to spend on extra items or save
- **Cyberware:** Predetermined by Role

### 3. Complete Package (Calculated)
The most complex and customizable method. You buy everything with points and money.
- **STATs:** Buy with 62 points (no STAT higher than 8 or lower than 2)
- **Skills:** Buy with 86 Skill points (no Skill higher than 6; all Basic Skills must be at least 2)
- **Starting Money:** **2,550eb** for Weapons, Armor, Gear, and Cyberware
- **Fashion Allowance:** Additional **800eb** for Fashion and Fashionware only (unspent is lost)
- **Cyberware:** Buy individually from Night Market listings

### Character Creation Steps (All Methods)
1. Pick a Role -- set Role Ability to Rank 4
2. Run your [[lifepath-cultural-origins]] and [[lifepath-role-specific]]
3. Set your Statistics (method varies)
4. Calculate [[derived-stats]] (HP, Wound Threshold, Death Save, Humanity)
5. Set your Skills
6. Record Weapons & Armor
7. Record Outfit & Gear
8. Record Cyberware

### Starting Cyberware by Role (Streetrat & Edgerunner)

| Role | Cyberware | Humanity Loss |
|---|---|---|
| Rockerboy | Audio Recorder, Chemskin, Cyberaudio Suite, Techhair | 9 (-1 EMP) |
| Solo | Biomonitor, Neural Link, Sandevistan or Wolvers | 14 (-2 EMP) |
| Netrunner | Interface Plugs, Neural Link, Shift Tacts | 14 (-2 EMP) |
| Tech | Cybereye, MicroOptics, Skinwatch, Tool Hand | 12 (-2 EMP) |
| Medtech | Biomonitor, Cybereye, Nasal Filters or Toxin Binders, TeleOptics | 12 (-2 EMP) |
| Media | Amplified Hearing or Voice Stress Analyzer, Cyberaudio Suite, Light Tattoo | 10 (-2 EMP) |
| Lawman | Hidden Holster, Subdermal Pocket | 10 (-2 EMP) |
| Exec | Biomonitor or Techhair, Cyberaudio Suite, Internal Agent, Toxin Binders or Nasal Filters | 12 (-2 EMP) |
| Fixer | Cyberaudio Suite, Internal Agent, Subdermal Pocket, Voice Stress Analyzer or Amplified Hearing | 16 (-2 EMP) |
| Nomad | Interface Plugs or Wolvers, Neural Link | 14 (-2 EMP) |

### Lifestyle at Character Creation
- **Non-Exec:** Start in a rented Cargo Container (Suburbs or Combat Zone) with Kibble Lifestyle. First month free; 1,100eb due on the 1st of next month.
- **Exec:** Start in a Corporate Conapt (Corporate Zone) with Good Prepak Lifestyle, rent-free. Lifestyle costs 600eb/month.`,
    related: ['lifepath-cultural-origins', 'lifepath-personality', 'lifepath-background', 'lifepath-role-specific', 'stats-overview', 'skills-overview', 'housing-and-rent'],
  },
  {
    id: 'lifepath-cultural-origins',
    title: 'Lifepath: Cultural Origins & Languages',
    category: 'Character Creation',
    content: `## Cultural Origins

The Cyberpunk world is multicultural. Your Cultural Origin determines your native language. Everyone speaks **Streetslang**, plus one additional primary language from your region. You begin with **4 points** in your chosen Language Skill.

Roll 1d10 or choose one.

| Roll | Cultural Region | Languages (pick one) |
|---|---|---|
| 1 | North American | Chinese, Cree, Creole, English, French, Navajo, Spanish |
| 2 | South/Central American | Creole, English, German, Guarani, Mayan, Portuguese, Quechua, Spanish |
| 3 | Western European | Dutch, English, French, German, Italian, Norwegian, Portuguese, Spanish |
| 4 | Eastern European | English, Finnish, Polish, Romanian, Russian, Ukrainian |
| 5 | Middle Eastern/North African | Arabic, Berber, English, Farsi, French, Hebrew, Turkish |
| 6 | Sub-Saharan African | Arabic, English, French, Hausa, Lingala, Oromo, Portuguese, Swahili, Twi, Yoruba |
| 7 | South Asian | Bengali, Dari, English, Hindi, Nepali, Sinhalese, Tamil, Urdu |
| 8 | South East Asian | Arabic, Burmese, English, Filipino, Hindi, Indonesian, Khmer, Malayan, Vietnamese |
| 9 | East Asian | Cantonese Chinese, English, Japanese, Korean, Mandarin Chinese, Mongolian |
| 10 | Oceania/Pacific Islander | English, French, Hawaiian, Maori, Pama-Nyungan, Tahitian |

If your desired language is not listed, you may choose it instead of one from the table, as long as it makes sense for your background.`,
    related: ['chargen-overview', 'lifepath-personality', 'lifepath-background', 'skills-overview'],
  },
  {
    id: 'lifepath-personality',
    title: 'Lifepath: Personality, Style & Affectations',
    category: 'Character Creation',
    content: `## Personality

What you are like as a person. Roll 1d10 or choose one.

| Roll | What Are You Like? |
|---|---|
| 1 | Shy and secretive |
| 2 | Rebellious, antisocial, and violent |
| 3 | Arrogant, proud, and aloof |
| 4 | Moody, rash, and headstrong |
| 5 | Picky, fussy, and nervous |
| 6 | Stable and serious |
| 7 | Silly and fluff-headed |
| 8 | Sneaky and deceptive |
| 9 | Intellectual and detached |
| 10 | Friendly and outgoing |

## Dress & Personal Style

In Cyberpunk, what you look like is a snapshot of who you are. Your clothing style is about the *style* you favor, not individual items. Roll 1d10 or choose one for each column.

| Roll | Clothing Style | Hairstyle |
|---|---|---|
| 1 | Generic Chic (Standard, Colorful, Modular) | Mohawk |
| 2 | Leisurewear (Comfort, Agility, Athleticism) | Long and ratty |
| 3 | Urban Flash (Flashy, Technological, Streetwear) | Short and spiked |
| 4 | Businesswear (Leadership, Presence, Authority) | Wild and all over |
| 5 | High Fashion (Exclusive, Designer, Couture) | Bald |
| 6 | Bohemian (Folksy, Retro, Free-spirited) | Striped |
| 7 | Bag Lady Chic (Homeless, Ragged, Vagrant) | Wild colors |
| 8 | Gang Colors (Dangerous, Violent, Rebellious) | Neat and short |
| 9 | Nomad Leathers (Western, Rugged, Tribal) | Short and curly |
| 10 | Asia Pop (Bright, Costume-like, Youthful) | Long and straight |

## Affectation You Are Never Without

Roll 1d10 or choose one.

| Roll | Affectation |
|---|---|
| 1 | Tattoos |
| 2 | Mirrorshades |
| 3 | Ritual scars |
| 4 | Spiked gloves |
| 5 | Nose rings |
| 6 | Tongue or other piercings |
| 7 | Strange fingernail implants |
| 8 | Spiked boots or heels |
| 9 | Fingerless gloves |
| 10 | Strange contacts |

See [[fashion-and-style]] for detailed clothing costs and categories.`,
    related: ['chargen-overview', 'lifepath-cultural-origins', 'lifepath-background', 'fashion-and-style'],
  },
  {
    id: 'lifepath-background',
    title: 'Lifepath: Family Background & Environment',
    category: 'Character Creation',
    content: `## Original Family Background

Who are you and where did you come from? Roll 1d10 or choose one.

| Roll | Background | Description |
|---|---|---|
| 1 | Corporate Execs | Wealthy, powerful, servants, luxury homes, private security. Big-name private school. |
| 2 | Corporate Managers | Well to do, large homes, safe neighborhoods. Mix of private and corporate education. |
| 3 | Corporate Technicians | Middle class, comfortable conapts or Beaverville homes, corporate-run technical schools. |
| 4 | Nomad Pack | Rugged trailers and road kombis. Learned to drive and fight young. Fresh food. Home schooled. |
| 5 | Ganger "Family" | Savage, violent home. Usually hungry, cold, and scared. Gang taught you to fight, kill, and steal. |
| 6 | Combat Zoners | Decaying, fortified building in the Zone. Hungry at times but regular bed and meals. Home schooled. |
| 7 | Urban Homeless | Lived in cars, dumpsters, or abandoned shipping modules. School of Hard Knocks. |
| 8 | Megastructure Warren Rats | Tiny conapt in a megastructure, kibble for food, mostly warm bed. Limited schooling. |
| 9 | Reclaimers | Started on the road, then moved to rebuild a deserted town. Pioneer life: dangerous but with food and safety. |
| 10 | Edgerunners | Home always changing based on parents' current job. Food and shelter ranged from gourmet to kibble. |

## Childhood Environment

How did you grow up? Roll 1d10 or choose one.

| Roll | Childhood Environment |
|---|---|
| 1 | Ran on The Street, with no adult supervision |
| 2 | Spent in a safe Corp Zone walled off from the rest of the City |
| 3 | In a Nomad pack moving from place to place |
| 4 | In a Nomad pack with roots in transport (ships, planes, caravans) |
| 5 | In a decaying, once upscale neighborhood, now holding off the boosters to survive |
| 6 | In the heart of the Combat Zone, living in a wrecked building or other squat |
| 7 | In a huge megastructure building controlled by a Corp or the City |
| 8 | In the ruins of a deserted town or city taken over by Reclaimers |
| 9 | In a Drift Nation (a floating offshore city) that is a meeting place for all kinds of people |
| 10 | In a Corporate luxury starscraper, high above the teeming rabble |

## Family Crisis

Something happened to your family. Roll 1d10 or choose one.

| Roll | Family Crisis |
|---|---|
| 1 | Your family lost everything through betrayal |
| 2 | Your family lost everything through bad management |
| 3 | Your family was exiled or driven from their original home/nation/Corporation |
| 4 | Your family is imprisoned, and you alone escaped |
| 5 | Your family vanished. You are the only remaining member |
| 6 | Your family was killed, and you were the only survivor |
| 7 | Your family is involved in a long-term conspiracy, organization, or crime family |
| 8 | Your family was scattered to the winds due to misfortune |
| 9 | Your family is cursed with a hereditary feud that has lasted for generations |
| 10 | You are the inheritor of a family debt; you must honor this debt before moving on |`,
    related: ['chargen-overview', 'lifepath-cultural-origins', 'lifepath-motivations', 'lifepath-friends-enemies'],
  },
  {
    id: 'lifepath-motivations',
    title: 'Lifepath: Motivations & Values',
    category: 'Character Creation',
    content: `## What Do You Value Most?

Roll 1d10 or choose one.

| Roll | Value |
|---|---|
| 1 | Money |
| 2 | Honor |
| 3 | Your word |
| 4 | Honesty |
| 5 | Knowledge |
| 6 | Vengeance |
| 7 | Love |
| 8 | Power |
| 9 | Family |
| 10 | Friendship |

## How Do You Feel About Most People?

Roll 1d10 or choose one.

| Roll | Feeling |
|---|---|
| 1-2 | I stay neutral |
| 3 | I like almost everyone |
| 4 | I hate almost everyone |
| 5 | People are tools. Use them for your own goals then discard them |
| 6 | Every person is a valuable individual |
| 7 | People are obstacles to be destroyed if they cross me |
| 8 | People are untrustworthy. Don't depend on anyone |
| 9 | Wipe 'em all out and let the cockroaches take over |
| 10 | People are wonderful! |

## Most Valued Person in Your Life

Roll 1d10 or choose one.

| Roll | Person |
|---|---|
| 1 | A parent |
| 2 | A brother or sister |
| 3 | A lover |
| 4 | A friend |
| 5 | Yourself |
| 6 | A pet |
| 7 | A teacher or mentor |
| 8 | A public figure |
| 9 | A personal hero |
| 10 | No one |

## Most Valued Possession

Roll 1d10 or choose one.

| Roll | Possession |
|---|---|
| 1 | A weapon |
| 2 | A tool |
| 3 | A piece of clothing |
| 4 | A photograph |
| 5 | A book or diary |
| 6 | A recording |
| 7 | A musical instrument |
| 8 | A piece of jewelry |
| 9 | A toy |
| 10 | A letter |

## Life Goals

Roll 1d10 or choose one.

| Roll | Life Goal |
|---|---|
| 1 | Get rid of a bad reputation |
| 2 | Gain power and control |
| 3 | Get off The Street no matter what it takes |
| 4 | Cause pain and suffering to anyone who crosses you |
| 5 | Live down your past life and try to forget it |
| 6 | Hunt down those responsible for your miserable life and make them pay |
| 7 | Get what's rightfully yours |
| 8 | Save anyone else involved in your background (lover, family member) |
| 9 | Gain fame and recognition |
| 10 | Become feared and respected |`,
    related: ['chargen-overview', 'lifepath-background', 'lifepath-friends-enemies', 'lifepath-romance'],
  },
  {
    id: 'lifepath-role-specific',
    title: 'Lifepath: Role-Specific Tables',
    category: 'Character Creation',
    content: `## Role-Specific Lifepaths

Each Role has additional Lifepath tables that supplement the general Lifepath. These cover your specific career background, enemies, and circumstances.

### Rockerboy (pg. 54)
- **What kind?** (d10): Musician, Slam Poet, Street Artist, Performance Artist, Comedian, Orator, Politico, Rap Artist, DJ, Idoru
- **Who's gunning for you?** (d6): Old group member, Rival group, Corporate enemies, Critic/influencer, Older media star, Romantic interest seeking revenge
- **Where do you perform?** (d6): Alternative Cafes, Private Clubs, Seedy Dive Bars, Guerrilla Performances, Nightclubs, On the Data Pool
- **Solo or Group act?** Choose one. If you were once in a group, roll why you left (d6).

### Solo (pg. 55)
- **What kind?** (d6): Bodyguard, Street Muscle, Corporate Enforcer, Black Ops Agent, Local Vigilante, Assassin/Hitman
- **Moral compass** (d6): Always good, Spare the innocent, Occasionally unethical, Ruthless profit-centered, Willing to bend rules, Totally evil
- **Who's gunning for you?** (d6): Corporation, Boostergang, Corrupt Lawmen, Rival Solo (Corp), Fixer, Rival Solo (nemesis)
- **Operational territory** (d6): Corporate Zone, Combat Zones, Whole City, Single Corp territory, Fixer's territory, Wherever the money takes you

### Netrunner (pg. 56)
- **What kind?** (d6): Freelancer, Corporate clone runner, Hacktivist, Just for fun, Regular team, Hired by Media/politico/Lawman
- **Partner or solo?** Choose one. If partnered, who? (d6)
- **Workspace** (d6): Screens everywhere, Better in Virtuality, Filthy bed with wires, Corporate/modular, Minimalist/clean, Taken over entire living space
- **Where do you get programs?** (d6): Abandoned City Zones, Steal from other runners, Fixer exchange, Corporate supply, Backdoor into warehouses, Night Markets

### Tech (pg. 58)
- **What kind?** (d10): Cyberware Tech, Vehicle Mechanic, Jack of All Trades, Small Electronics, Weaponsmith, Crazy Inventor, Robot/Drone Mechanic, Heavy Machinery, Scavenger, Nautical Mechanic
- **Workspace, Partner, Clients, Supplies, Enemies** (d6 each)

### Medtech (pg. 60)
- **What kind?** (d10): Surgeon, General Practitioner, Trauma Medic, Psychiatrist, Cyberpsycho Therapist, Ripperdoc, Cryosystems Operator, Pharmacist, Bodysculptor, Forensic Pathologist
- **Partner, Workspace, Clients, Supplies** (d6 each)

### Media (pg. 62)
- **What kind?** (d6): Blogger, Writer, Videographer, Documentarian, Investigative Reporter, Street Scribe
- **How does your work reach the public?** (d6): Monthly magazine, Blog, Mainstream vid feed, News channel, Book sales, Screamsheets
- **Ethics** (d6): From fully ethical to totally corrupt
- **Stories** (d6): Political Intrigue, Ecological Impact, Celebrity News, Corporate Takedowns, Editorials, Propaganda

### Exec (pg. 63)
- **Corp type** (d10): Financial, Media/Comms, Cybertech/Medical, Pharma/Biotech, Food/Clothing, Energy, Electronics/Robotics, Corporate Services, Consumer Services, Real Estate
- **Division** (d6): Procurement, Manufacturing, R&D, Human Resources, Public Affairs, Mergers & Acquisitions
- **Corp ethics** (d6): From fully ethical to totally evil
- **Corp location** (d6): One city to international
- **Who's gunning** (d6), **Current state with boss** (d6)

### Lawman (pg. 65)
- **Position** (d6): Guard, Standard Beat, Criminal Investigation, SWAT, Motor Patrol, Internal Affairs
- **Jurisdiction** (d6): Corporate Zones, Standard Patrol, Combat Zones, Outer City, Recovery Zones, Open Highways
- **Corruption level** (d6), **Who's gunning** (d6), **Major target** (d6)

### Fixer (pg. 66)
- **What kind?** (d10): Gang broker, Rare resource procurer, Solo/Tech agent, Night Market supplier, Illegal resources, Tech/Medtech supply, Night Market operator, Heavy machinery broker, Scav fence, Exclusive agent
- **Partner, Office, Side clients, Enemies** (d6 each)

### Nomad (pg. 68)
- **Pack size** (d6): Single family to Affiliated Family (several Blood Families)
- **Land/Air/Sea?** Choose one, then roll type (d10 for Land, d6 for Air/Sea)
- **Your role in the Pack** (d6): Scout, Outrider, Transport pilot, Loadmaster, Solo smuggler, Procurement
- **Pack philosophy** (d6): From always good to totally evil
- **Who's gunning for pack** (d6)`,
    related: ['chargen-overview', 'lifepath-cultural-origins', 'lifepath-friends-enemies', 'role-rockerboy', 'role-solo', 'role-netrunner'],
  },
  {
    id: 'lifepath-friends-enemies',
    title: 'Lifepath: Friends & Enemies',
    category: 'Character Creation',
    content: `## Friends

Roll **1d10 - 7** (minimum 0) to determine how many friends you have. For each friend, roll on the table below.

| Roll (d10) | Friend's Relationship to You |
|---|---|
| 1 | Like an older sibling to you |
| 2 | Like a younger sibling to you |
| 3 | A teacher or mentor |
| 4 | A partner or coworker |
| 5 | A former lover |
| 6 | An old enemy |
| 7 | Like a parent to you |
| 8 | An old childhood friend |
| 9 | Someone you know from The Street |
| 10 | Someone with a common interest or goal |

## Enemies

Roll **1d10 - 7** (minimum 0) to determine how many enemies you have. For each enemy, decide who was the injured party, then roll on each column.

| Roll (d10) | Enemy | What Caused It |
|---|---|---|
| 1 | Ex-friend | Caused the other to lose face or status |
| 2 | Ex-lover | Caused the loss of lover, friend, or relative |
| 3 | Estranged relative | Caused a major public humiliation |
| 4 | Childhood enemy | Accused the other of cowardice or a major personal flaw |
| 5 | Person working for you | Deserted or betrayed the other |
| 6 | Person you work for | Turned down the other's offer of a job or romance |
| 7 | Partner or coworker | You just don't like each other |
| 8 | Corporate exec | One of you was a romantic rival |
| 9 | Government official | One of you was a business rival |
| 10 | Boosterganger | One of you set the other up for a crime they didn't commit |

### What Can They Throw at You?

| Roll (d10) | Resources |
|---|---|
| 1 | Just themselves (won't go out of their way) |
| 2 | Just themselves |
| 3 | Themselves and a close friend |
| 4 | Themselves and a few (1d6/2) friends |
| 5 | Themselves and a few (1d10/2) friends |
| 6 | An entire gang (at least 1d10+5 people) |
| 7 | The local cops or other Lawmen |
| 8 | A powerful gang lord or small Corporation |
| 9 | A powerful Corporation |
| 10 | An entire city, government, or agency |

### Sweet Revenge! (What will you/they do about it?)

| Roll (d10) | Action |
|---|---|
| 1-2 | Avoid the scum |
| 3-4 | Go into a murderous rage and try to physically rip their face off |
| 5-6 | Backstab them indirectly |
| 7-8 | Verbally attack them |
| 9 | Set them up for a crime they didn't commit |
| 10 | Set out to murder or maim them |`,
    related: ['chargen-overview', 'lifepath-background', 'lifepath-romance', 'lifepath-motivations'],
  },
  {
    id: 'lifepath-romance',
    title: 'Lifepath: Tragic Love Affairs',
    category: 'Character Creation',
    content: `## Tragic Love Affairs

Roll **1d10 - 7** (minimum 0) to see how many tragic love affairs you have had. For each, roll on the table below.

| Roll (d10) | What Happened? |
|---|---|
| 1 | Your lover died in an accident |
| 2 | Your lover mysteriously vanished |
| 3 | It just didn't work out |
| 4 | A personal goal or vendetta came between you and your lover |
| 5 | Your lover was kidnapped |
| 6 | Your lover went insane or cyberpsycho |
| 7 | Your lover committed suicide |
| 8 | Your lover was killed in a fight |
| 9 | A rival cut you out of the action |
| 10 | Your lover is imprisoned or exiled |

These tragic affairs are part of what shapes your Character's emotional landscape and can serve as powerful plot hooks for your GM. The details -- who they were, what they looked like, what you had in common -- are entirely up to you.`,
    related: ['lifepath-friends-enemies', 'lifepath-motivations', 'chargen-overview'],
  },
  {
    id: 'multiclassing',
    title: 'Multiclassing Roles',
    category: 'Character Creation',
    content: `## Taking a Second Role (Multiclassing)

In Cyberpunk RED, your Role is not a job -- it is who you are. However, Characters can pick up a second Role during gameplay.

### How It Works
- Characters start at **Role Ability Rank 4** in their primary Role.
- At any point during play, a Character may choose to begin advancing a **second Role** at Rank 1.
- You advance both Roles independently using **Improvement Points (IP)**.
- Each Role Ability rank must be purchased separately with IP, at the costs listed in the advancement table.

### Restrictions
- You can only have **two Roles** at most.
- Starting a second Role does **not** reduce or affect your primary Role.
- Both Role Abilities function simultaneously according to their current Rank.
- The IP cost to advance each Role is the same as for single-Role Characters.

### IP Cost for Role Ability Advancement

The IP cost to raise a Role Ability from one Rank to the next varies by Role. Each Role has its own progression table. Consult the specific Role Ability section for exact IP costs.

### Why Multiclass?
Some combinations offer powerful synergies. A Solo/Netrunner can protect themselves in both Meatspace and the NET. A Fixer/Exec can leverage both corporate connections and street-level deal-making. However, spreading IP across two Roles means slower progression in each.

See [[role-rockerboy]], [[role-solo]], [[role-netrunner]], and other Role entries for specific Role Ability details.`,
    related: ['chargen-overview', 'role-rockerboy', 'role-solo', 'role-netrunner', 'improvement-points'],
  },

  // ============================================================
  // LIFESTYLE
  // ============================================================
  {
    id: 'fashion-and-style',
    title: 'Fashion & Wardrobe',
    category: 'Lifestyle',
    content: `## Fashion in the Time of the Red

In Cyberpunk, fashion is identity. What you wear tells the world who you are. There are **10 fashion styles**, each with different price tiers for individual clothing items.

### Fashion Styles Overview

| Style | Vibe | Bottoms | Top | Jacket | Footwear |
|---|---|---|---|---|---|
| Bag Lady Chic | Homeless, Ragged, Vagrant | 10eb | 10eb | 20eb | 20eb |
| Bohemian | Folksy, Retro, Free-spirited | 20eb | 20eb | 50eb | 20eb |
| Gang Colors | Dangerous, Violent, Rebellious | 20eb | 20eb | 50eb | 20eb |
| Generic Chic | Standard, Colorful, Modular | 20eb | 20eb | 50eb | 50eb |
| Leisurewear | Comfort, Agility, Athleticism | 50eb | 50eb | 50eb | 50eb |
| Nomad Leathers | Western, Rugged, Tribal | 50eb | 50eb | 100eb | 50eb |
| Asia Pop | Bright, Costume-like, Youthful | 50eb | 50eb | 100eb | 50eb |
| Urban Flash | Flashy, Technological, Streetwear | 100eb | 100eb | 100eb | 100eb |
| Businesswear | Leadership, Presence, Authority | 100eb | 100eb | 500eb | 100eb |
| High Fashion | Exclusive, Designer, Couture | 1,000eb | 1,000eb | 1,000eb | 1,000eb |

### Accessories by Style

| Style | Jewelry | Mirrorshades/Glasses | Contact Lenses | Hats |
|---|---|---|---|---|
| Bag Lady Chic | 10eb | 10eb | 10eb | 10eb |
| Bohemian | 10eb | 10eb | 10eb | 10eb |
| Gang Colors | 10eb | 10eb | 10eb | 10eb |
| Generic Chic | 10eb | 10eb | 10eb | 10eb |
| Leisurewear | 20eb | 50eb | 20eb | 50eb |
| Nomad Leathers | 20eb | 100eb | 20eb | 100eb |
| Asia Pop | 100eb | 100eb | 100eb | 100eb |
| Urban Flash | 100eb | 100eb | 100eb | 100eb |
| Businesswear | 500eb | 100eb | 500eb | 500eb |
| High Fashion | 5,000eb | 1,000eb | 1,000eb | 5,000eb |

### Price Categories Reference

| Category | Price Range |
|---|---|
| Cheap | 10eb |
| Everyday | 20eb |
| Costly | 50eb |
| Premium | 100eb |
| Expensive | 500eb |
| Very Expensive | 1,000eb |
| Luxury | 5,000eb |
| Super Luxury | 10,000eb+ |

### Complete Package Fashion Allowance
Complete Package Characters get **800eb** to spend exclusively on Fashion and Fashionware. Anything unspent is lost.

See [[lifepath-personality]] for clothing style as part of your Lifepath and [[cyberware-overview]] for Fashionware options.`,
    related: ['lifepath-personality', 'chargen-overview', 'cyberware-overview', 'housing-and-rent'],
  },
  {
    id: 'housing-and-rent',
    title: 'Housing & Rent',
    category: 'Lifestyle',
    content: `## Housing in the Time of the Red

You have to sleep sometime. A safe and comfortable place is preferable.

At the beginning of every month, settle your Housing and Lifestyle costs. If you must pick one or the other, it is better to be evicted than to starve to death.

### Sleep Rules
- Going without at least **6 hours** of sleep gives **-2 to everything** for each day since you last slept a full 6 hours.
- Sleeping **uncomfortably** gives an additional **-2 to everything** while fatigued.
- **Uncomfortable** means: crammed housing (more persons than 1 + number of bedrooms), sleeping on the street (DV15 Endurance to avoid fatigue), or sleeping in the wilderness (DV15 Wilderness Survival).

### Real Estate

| Housing Type | Monthly Rent | Purchase Price |
|---|---|---|
| Living on the Street | Free | N/A |
| Living in a Vehicle | Free | N/A |
| Cube Hotel | 500eb | N/A |
| Cargo Container | 1,000eb | 15,000eb |
| Studio Apartment | 1,500eb | 25,000eb |
| Two-Bedroom Apartment | 2,500eb | 35,000eb |
| Corporate Conapt | Free (Corp-provided) | N/A |
| Upscale Conapt | 7,500eb | 85,000eb |
| Luxury Penthouse | 15,000eb | 500,000eb |
| Corporate Beaverville House | Free (Corp-provided) | 200,000eb |
| Corporate Beaverville McMansion | Free (Corp-provided) | 500,000eb |

### Housing Descriptions

- **Living on the Street:** DV15 Endurance each night or be fatigued. No security, heating, or electricity. Can't carry more than you can hold.
- **Living in a Vehicle:** Requires fully enclosed vehicle. Limited security unless vehicle has Security upgrade and Bulletproof windows. Can't park in Corporate, Executive, or Moderate Zones.
- **Cube Hotel:** Cheapest city option. Single windowless room, arms-width walls. Flatpack furniture. Common room with water/shower (dangerous). Located in Corporate, Moderate, and Combat Zones.
- **Cargo Container:** Located in Suburbs, Reclaimed Perimeter, and Combat Zone. Bed, desk, electricity, fridge, microwave, sink, strong lock. Shared restrooms and showers.
- **Studio Apartment:** First truly private space. Own bathroom, small kitchen, tiny living room. One parking space. Located in Corporate, Moderate, or Combat Zones.
- **Two-Bedroom Apartment:** Two bedrooms, full kitchen, one bathroom, living room, in-unit laundry. Two parking spaces.
- **Corporate Conapt:** Luxury. Two bedrooms, two bathrooms, full kitchen, dining room, large living room, balcony. Surveillance by Corp expected in all rooms except bathrooms. Two parking spaces. Rent-free for Execs.
- **Upscale Conapt:** Two-floor. Two bedrooms + master suite. Full kitchen, dining room, two living rooms, balcony. Three parking spaces (one rooftop for air vehicles).
- **Luxury Penthouse:** Top-tier urban living.
- **Beaverville House/McMansion:** Corp-provided suburban housing.

### Starting Housing
- **Non-Exec Characters:** Start in a Cargo Container (Suburbs or Combat Zone) with first month free. Owe **1,100eb** on the 1st of next month (1,000eb rent + 100eb Kibble lifestyle).
- **Exec Characters:** Start in a Corporate Conapt in a Corporate Zone, rent-free. Good Prepak lifestyle costs 600eb/month.
- **Nomads:** Have additional Housing options via their Moto Role Ability.`,
    related: ['services-entertainment', 'chargen-overview', 'fashion-and-style', 'home-defenses'],
  },
  {
    id: 'services-entertainment',
    title: 'Services, Entertainment & Medical',
    category: 'Lifestyle',
    content: `## Services and Entertainment

### Lifestyle Tiers

| Lifestyle | What It Entails | Monthly Cost |
|---|---|---|
| Kibble | Horrible food. Once a month, see a movie or braindance. | 100eb |
| Generic Prepak | Better-tasting food. Weekends at a good bar or sit-down restaurant. | 300eb |
| Good Prepak | Restaurant-quality food (artificial but tastes real). Excellent bars/restaurants. One live concert or sporting event per month. | 600eb |
| Fresh Food | Real food. Occasional hotel room. Executive bars. One world-class restaurant meal per month. | 1,500eb |

If you don't pay for your lifestyle at the start of a month, you have **one week** before you must roll a **Death Save** at the start of each day you don't pay. You can starve to death!

### Services & Entertainment Costs

| Service | Cost |
|---|---|
| Bodysculpting (Standard) | 500eb (Expensive) |
| Bodysculpting (Exotic) | 1,000eb (Very Expensive) |
| Braindance | 20eb (Everyday) |
| Drink, Dive Bar | 10eb (Cheap) |
| Drink, Good Bar | 10eb (Cheap) |
| Drink, Excellent Bar | 20eb (Everyday) |
| Drink, Executive Bar | 50eb (Costly) |
| Hotel, Per Night | 100eb (Premium) |
| Hotel, Luxury, Per Night | 500eb (Expensive) |
| Interactive Braindance | 50eb (Costly) |
| Live Concert / Sporting Event | 100eb (Premium) |
| Movie | 20eb (Everyday) |
| Video Game | 50eb (Costly) |
| Restaurant Meal, Fast Food | 10eb (Cheap) |
| Restaurant Meal, Good | 20eb (Everyday) |
| Restaurant Meal, Excellent | 50eb (Costly) |
| Restaurant Meal, World Class | 500eb (Expensive) |
| Taxi | 20eb (Everyday) |

### Professional Services

| Service | Cost |
|---|---|
| Good, Per Hour | 100eb (Premium) |
| Excellent, Per Hour | 500eb (Expensive) |
| World Class, Per Job | 5,000eb (Luxury) |

### Medical Services

| Service | Cost |
|---|---|
| Found Cyberware Installation (Mall) | 100eb (Premium) |
| Found Cyberware Installation (Clinic) | 500eb (Expensive) |
| Found Cyberware Installation (Hospital) | 1,000eb (Very Expensive) |
| Hospital Treatment (DV10) | 50eb (Costly) |
| Hospital Treatment (DV13) | 100eb (Premium) |
| Hospital Treatment (DV15) | 500eb (Expensive) |
| Hospital Treatment (DV17+) | 1,000eb (Very Expensive) |

### Therapy

| Type | Cost |
|---|---|
| Standard Humanity Loss | 500eb (Expensive) |
| Extreme Humanity Loss | 1,000eb (Very Expensive) |
| Addiction | 1,000eb (Very Expensive) |

### Trauma Team

| Plan | Monthly Cost |
|---|---|
| Silver | 500eb (Expensive) |
| Executive | 1,000eb (Very Expensive) |

Trauma Team is a premium emergency medical Corporation. The Silver plan covers basic emergency extraction and stabilization. The Executive plan provides faster response times and more comprehensive care.

See [[housing-and-rent]] for living costs and [[healing-overview]] for in-game healing rules.`,
    related: ['housing-and-rent', 'healing-overview', 'therapy', 'fashion-and-style'],
  },
  {
    id: 'home-defenses',
    title: 'Home Defenses & Security Systems',
    category: 'Lifestyle',
    content: `## Home Defenses

Security systems can be installed in housing or other locations to protect against intruders. These range from observation cameras to lethal automated weapons.

### Defense Categories

Defenses fall into three categories: **Active Defenses** (drones), **Emplaced Defenses** (turrets and traps), and **Environmental Defenses** (passive/triggered hazards).

### Control Node Defenses

Defenses can be linked to a NET Architecture's Control Nodes, allowing a [[netrunning-overview]] Netrunner or Demon to operate them remotely.

| Defense DV (Electronics/Security Tech) | Price |
|---|---|
| DV9 | 500eb (Expensive) |
| DV13 | 1,000eb (V. Expensive) |
| DV17 | 5,000eb (Luxury) |
| DV21 | 10,000eb (Super Luxury) |

### Active Defenses (Drones)

| Type | Description | MOVE | HP | Counter DV | Time |
|---|---|---|---|---|---|
| Air Swarm Drone Cloud | Tiny flying drones with nanowire cutting surfaces. Treat as single entity with Very Heavy Melee Weapon. | 8 | 15 | DV17 | 5 min |
| Ground Drone | Rolling Ball, Tracked, Wheeled, or Snake form. Equipped with 2 of: VH Pistol (8 AP rounds), Medium SMG (30 Basic), or Observation camera. | 4 | 30 | DV21 | 5 min |
| Large Air Drone | Equipped with 2 of: Dartgun (8 Poison Arrows), VH Pistol (8 AP rounds), or Observation camera. | 6 | 20 | DV21 | 5 min |
| Mini Air Drone | Equipped with 1 of: Dartgun (8 Poison Arrows), VH Pistol (8 AP rounds), or Observation camera. | 6 | 15 | DV17 | 5 min |
| Spider Walking Drone | Equipped with 2 of: Grenade Launcher (2 Teargas), VH Melee Weapon, Heavy SMG (40 Basic), or Observation camera. | 4 | 40 | DV21 | 5 min |

**Default Trigger:** Target enters area without wearing proper pass or badge.

### Emplaced Defenses

| Type | Effect | Counter DV |
|---|---|---|
| Automated Blood Swarm | Red nanite fog. DV15 Resist Torture/Drugs or take 3d6 damage to HP (ignores armor, no ablation). Blocked by gas filters. | DV21 (5 min) |
| Automated Melee Weapon | VH Melee Weapon (industrial water cutter or monofilament wire). Combat Number 14, 25 HP. Attacks until targets are dead or leave range. | DV17 (5 min) |
| Automated Turret | Ceiling-mounted weapon. Options: Assault Rifle (25 Basic), Flamethrower (4 Incendiary Shells), Dartgun (8 Poison Arrows), VH Pistol (8 AP), or Heavy SMG (40 Basic). Combat Number 14, 25 HP. | DV17 (5 min) |

### Environmental Defenses

| Type | Effect | Counter DV |
|---|---|---|
| Observation Cameras | See in Low Light, IR, and UV. Report to Demon or security. 5 HP. Perception DV17 to spot. | DV9 (1 min) |
| Tanglefoot Flooring | Nanowire carpet. Reduces MOVE by 1d6 until destroyed or escaped. 20 HP. DV17 to spot. | DV13 (1 min) |
| Electrical Flooring | Delivers 6d6 damage (reduced by armor, no ablation). Shocks again each Turn until target leaves. 20 HP. DV17 to spot. | DV13 (1 min) |
| Laser Grid | Touching a laser = VH Melee Weapon hit. DV17 Contortionist to cross safely. DV17 to spot. | DV17 (5 min) |
| Tip-Floor | Drops target into pit. DV15 Athletics to catch yourself. Pit may have nanowire/spikes for 6d6 damage. DV17 to spot. | DV13 (1 min) |
| Goop | Sprayers reduce MOVE by 2d6. 10 HP. DV17 to spot. | DV13 (1 min) |
| Ceiling/Wall Punchers | Steel rods slam down for 6d6 damage (reduced by armor). 20 HP. DV17 to spot. | DV13 (5 min) |
| Slip-Floor | Super slick liquid. DV15 Athletics or fall Prone when moving. 10 HP. DV17 to spot. | DV13 (1 min) |
| Stun Panels | Blinding light and sound. DV15 Resist Torture/Drugs or suffer Damaged Eye + Damaged Ear for 1 minute (no Bonus Damage). 5 HP. DV17 to spot. | DV13 (1 min) |
| Sleep Gas Elevator | Space seals hermetically. DV13 Resist Torture/Drugs each Turn or fall Unconscious. 60 HP. DV17 to spot. | DV17 (5 min) |

See [[net-architecture-building]] for linking defenses to NET Architectures and [[services-entertainment]] for security installation costs.`,
    related: ['housing-and-rent', 'net-architecture-building', 'services-entertainment', 'netrunning-overview'],
  },

  // ============================================================
  // NETRUNNING (additional entries)
  // ============================================================
  {
    id: 'net-architecture-building',
    title: 'Building a NET Architecture',
    category: 'Netrunning',
    content: `## Building a NET Architecture

NET Architectures are digital fortresses that protect data, files, and control systems. They can be purchased and customized with floors, passwords, Black ICE, Demons, Control Nodes, and files.

### Architecture Size & Cost

| Number of Floors | Max Control Nodes | Portable? | Cost per Floor |
|---|---|---|---|
| 3 to 6 | 2 | Yes | 1,000eb (V. Expensive) |
| 7 to 12 | 3 | No | 5,000eb (Luxury) |
| 13 to 18 | N/A | No | 10,000eb (Super Luxury) |

**Portable** architectures (3-6 floors) can be installed in a cyberdeck or carried on a device. Larger architectures are stationary installations.

### Adding Passwords, Control Nodes, and Files

Each feature has a DV that Netrunners must beat to bypass it, and a cost to install.

| Netrunner DV to Beat | Cost |
|---|---|
| DV6 | 500eb (Expensive) |
| DV8 | 1,000eb (V. Expensive) |
| DV10 | 5,000eb (Luxury) |
| DV12 | 10,000eb (Super Luxury) |

### Adding Black ICE

You can place **2 or 3 Black ICE** on the same floor, but costs multiply:
- **2 Black ICE on a floor:** Double the cost of both
- **3 Black ICE on a floor:** Triple the cost of each
- Maximum **one Demon per floor**, and no more than **one Demon per six floors** of Architecture

### Demons

Demons are powerful Black ICE intelligent systems that can operate Control Nodes and target intruders in both the NET and Meatspace.

| Demon | REZ | Interface | NET Actions | Combat Number | Cost |
|---|---|---|---|---|---|
| Imp | 15 | 3 | 2 | 14 | 1,000eb (V. Expensive) |
| Efreet | 25 | 4 | 3 | 14 | 5,000eb (Luxury) |
| Balron | 30 | 7 | 4 | 14 | 10,000eb (Super Luxury) |

**Imp Icon:** Small orange sphere of light with red horns.
**Efreet Icon:** Tall, powerfully built man in elegant evening clothes with a fez and dagger.
**Balron Icon:** Huge humanoid monster in futuristic black armor covered with hissing green glowing tentacles.

### Architecture Structure
A NET Architecture is a vertical "elevator" of floors. The top floor is the **Lobby** (entry point). Deeper floors contain increasingly valuable data and stronger defenses. The bottom floor is where a Netrunner must reach to leave a permanent [[netrunning-interface]] Virus.

Each floor may contain:
- **Password** -- blocks progress until bypassed via [[netrunning-interface]] Backdoor
- **File** -- data that can be copied or identified via Eye-Dee
- **Control Node** -- allows remote operation of connected physical systems (cameras, drones, turrets, etc.)
- **Black ICE** -- defensive programs lying in wait

See [[netrunning-blackice]] for Black ICE details, [[home-defenses]] for physical defenses linked to Control Nodes, and [[cyberdeck-hardware]] for deck specifications.`,
    related: ['netrunning-overview', 'netrunning-blackice', 'home-defenses', 'cyberdeck-hardware', 'programs-full-catalog'],
  },
  {
    id: 'programs-full-catalog',
    title: 'Programs: Full Catalog',
    category: 'Netrunning',
    content: `## Programs: Complete Listing

Programs are the tools a Netrunner uses to fight, protect, and explore the NET. Activating or Deactivating a Program is a **NET Action**. Each Program can only be Activated **once per Meatspace Round**. You can run multiple copies of the same Program (effects stack unless noted). Installing/Uninstalling a Program takes **1 hour**.

### Three Kinds of Non-Black ICE Programs

| Class | Description |
|---|---|
| **Booster** | Improves your abilities in the NET while Rezzed |
| **Defender** | Stops or reduces attacks while Rezzed |
| **Attacker** | Damages or disables targets, then auto-Deactivates |

### Booster Programs

| Name | ATK | DEF | REZ | Effect | Cost |
|---|---|---|---|---|---|
| Eraser | 0 | 0 | 7 | +2 to all Cloak Checks while Rezzed | 20eb (Everyday) |
| See Ya | 0 | 0 | 7 | +2 to all Pathfinder Checks while Rezzed | 20eb (Everyday) |
| Speedy Gonzalvez | 0 | 0 | 7 | +2 to Speed while Rezzed | 100eb (Premium) |
| Worm | 0 | 0 | 7 | +2 to all Backdoor Checks while Rezzed | 50eb (Costly) |

### Defender Programs

| Name | ATK | DEF | REZ | Effect | Cost |
|---|---|---|---|---|---|
| Armor | 0 | 0 | 7 | Lowers all brain damage by 4 while Rezzed. Only 1 copy running at a time. Once per Netrun. | 50eb (Costly) |
| Flak | 0 | 0 | 7 | Reduces ATK of all Non-Black ICE Attacker Programs to 0 while Rezzed. Only 1 copy at a time. Once per Netrun. | 50eb (Costly) |
| Shield | 0 | 0 | 7 | Stops the first successful Non-Black ICE Program Effect from dealing brain damage, then Derezzes itself. Only 1 copy at a time. Once per Netrun. | 20eb (Everyday) |

### Attacker Programs (Anti-Program)

| Name | ATK | DEF | REZ | Effect | Cost |
|---|---|---|---|---|---|
| Banhammer | 1 | 0 | 0 | 3d6 REZ to Non-Black ICE Program, or 2d6 REZ to Black ICE | 50eb (Costly) |
| Sword | 1 | 0 | 0 | 3d6 REZ to Black ICE Program, or 2d6 REZ to Non-Black ICE | 50eb (Costly) |

### Attacker Programs (Anti-Personnel)

| Name | ATK | DEF | REZ | Effect | Cost |
|---|---|---|---|---|---|
| DeckKRASH | 0 | 0 | 0 | Enemy Netrunner is forcibly and unsafely Jacked Out, suffering effects of all Rezzed enemy Black ICE | 100eb (Premium) |
| Hellbolt | 2 | 0 | 0 | 2d6 brain damage. Cyberdeck catches fire (unless insulated); 2 HP damage each Turn until extinguished (Meat Action). Does not stack. | 100eb (Premium) |
| Nervescrub | 0 | 0 | 0 | Enemy Netrunner's INT, REF, and DEX each lowered by 1d6 for 1 hour (min 1). Psychosomatic, no permanent effects. | 100eb (Premium) |
| Poison Flatline | 0 | 0 | 0 | Destroys a single Non-Black ICE Program on target's Cyberdeck at random | 100eb (Premium) |
| Superglue | 2 | 0 | 0 | Enemy cannot progress deeper or Jack Out safely for 1d6 Rounds (unsafe Jack Out still possible). Once per Netrun. | 100eb (Premium) |
| Vrizzbolt | 1 | 0 | 0 | 1d6 brain damage and lowers enemy's NET Actions by 1 on their next Turn (min 2) | 50eb (Costly) |

### Black ICE Programs (Anti-Personnel)

| Name | PER | SPD | ATK | DEF | REZ | Effect | Cost |
|---|---|---|---|---|---|---|---|
| Asp | 4 | 6 | 2 | 2 | 15 | Destroys a random Program on enemy deck | 100eb (Premium) |
| Giant | 2 | 2 | 8 | 4 | 25 | 3d6 brain damage; forcibly/unsafely Jacked Out (suffers all Rezzed Black ICE effects, excluding Giant) | 1,000eb (V. Expensive) |
| Hellhound | 6 | 6 | 6 | 2 | 20 | 2d6 brain damage; deck catches fire (2 HP/Turn until extinguished) | 500eb (Expensive) |
| Liche | 8 | 2 | 6 | 2 | 25 | INT, REF, DEX each lowered by 1d6 for 1 hour (min 1). Psychosomatic. | 500eb (Expensive) |
| Raven | 6 | 4 | 4 | 2 | 15 | Derezzes a random Defender Program, then 1d6 brain damage | 50eb (Costly) |
| Scorpion | 2 | 6 | 2 | 2 | 15 | MOVE lowered by 1d6 for 1 hour (min 1). Psychosomatic. | 100eb (Premium) |
| Skunk | 2 | 4 | 4 | 2 | 10 | -2 to all Slide Checks while Rezzed. Stacks with multiple Skunks. | 500eb (Expensive) |
| Wisp | 4 | 4 | 4 | 2 | 15 | 1d6 brain damage; lowers NET Actions by 1 next Turn (min 2) | 50eb (Costly) |

### Black ICE Programs (Anti-Program)

| Name | PER | SPD | ATK | DEF | REZ | Effect | Cost |
|---|---|---|---|---|---|---|---|
| Dragon | 6 | 4 | 6 | 6 | 30 | 6d6 damage to a Program. If enough to Derezz, Program is Destroyed instead. | 1,000eb (V. Expensive) |
| Killer | 4 | 8 | 6 | 2 | 20 | 4d6 damage to a Program. If enough to Derezz, Program is Destroyed instead. | 500eb (Expensive) |
| Sabertooth | 8 | 6 | 6 | 2 | 25 | 6d6 damage to a Program. If enough to Derezz, Program is Destroyed instead. | 1,000eb (V. Expensive) |

**Note:** Black ICE takes **2 slots** on a Cyberdeck. A Program is **Derezzed** at 0 REZ (can be reactivated with 2 NET Actions) but a **Destroyed** Program is permanently erased.

See [[netrunning-blackice]] for Black ICE encounter rules and [[cyberdeck-hardware]] for deck slot management.`,
    related: ['netrunning-overview', 'netrunning-blackice', 'cyberdeck-hardware', 'net-architecture-building'],
  },
  {
    id: 'cyberdeck-hardware',
    title: 'Cyberdeck Hardware',
    category: 'Netrunning',
    content: `## Cyberdecks

Cyberdecks are modular platforms where Programs and Hardware are installed for Netrunning. Both Programs and Hardware share the same limited slots. What distinguishes a powerful Cyberdeck from a cheaper one is its **number of slots**.

### Cyberdeck Types

| Type | Slots | Cost |
|---|---|---|
| Poor Quality Cyberdeck | 5 | 100eb (Premium) |
| Cyberdeck (Standard) | 7 | 500eb (Expensive) |
| Excellent Quality Cyberdeck | 9 | 1,000eb (V. Expensive) |

### Requirements to Netrun
- **Neural Link** (Cyberware, 500eb, Clinic install)
- **Interface Plugs** (Cyberware, 500eb, Clinic install) -- plugs in wrist or head to connect to machines
- **Cyberdeck** loaded with Programs
- **Virtuality Goggles** (100eb) -- project cyberspace imagery over real-world view

Without Virtuality Goggles, you can still Netrun old-school, but you are effectively **Unconscious** in Meatspace until you Jack Out.

### Slot Management
- Standard (Non-Black ICE) Programs take **1 slot** each
- **Black ICE** Programs take **2 slots** each
- Hardware options also take slots
- Installing or Uninstalling a Program takes **1 hour**

### Interface Rank and NET Actions

Your Interface Rank (the Netrunner Role Ability) determines how many NET Actions you can take per Turn:

| Interface Rank | NET Actions per Turn |
|---|---|
| 1-3 | 2 |
| 4-6 | 3 |
| 7-9 | 4 |
| 10 | 5 |

### Cyberdeck in a Cyberarm
A Cyberdeck can be installed in a [[cyberware-overview]] Cyberarm for 500eb (Expensive), taking 3 Option Slots. This frees your hands but limits your deck to the arm's integrated version.

### Key Netrunning Gear Costs Summary

| Item | Cost |
|---|---|
| Neural Link | 500eb (Expensive) |
| Interface Plugs | 500eb (Expensive) |
| Virtuality Goggles | 100eb (Premium) |
| Poor Quality Cyberdeck (5 slots) | 100eb (Premium) |
| Standard Cyberdeck (7 slots) | 500eb (Expensive) |
| Excellent Cyberdeck (9 slots) | 1,000eb (V. Expensive) |

See [[netrunning-overview]] for basic Netrunning rules, [[programs-full-catalog]] for all available Programs, and [[net-architecture-building]] for Architecture construction.`,
    related: ['netrunning-overview', 'programs-full-catalog', 'net-architecture-building', 'cyberware-overview'],
  },

  // ============================================================
  // LORE & HISTORY
  // ============================================================
  {
    id: 'timeline-overview',
    title: 'Dark Future Timeline Overview',
    category: 'Lore & History',
    content: `## The Dark Future: Major Events (1990--2045)

The world of Cyberpunk RED is the product of decades of cascading catastrophes. What follows is a high-level summary of the major eras that shaped the Time of the Red.

### The Collapse Era (1990s)

| Year(s) | Event |
|---|---|
| 1990--1993 | The **Gang of Four** -- a coalition led by the Vice President -- stages a secret coup, ending federal democracy. Many states declare themselves "Free States." |
| 1990--1993 | **First Central American Conflict** begins. U.S. imperial ambitions kill hundreds of thousands; returning veterans drive demand for cyberware. |
| 1992 | Treaty of 1992 establishes the **European Economic Community** and the **Eurodollar**. |
| 1993 | DEA-developed bio-plagues wipe out coca and opium crops worldwide. Colombian drug lords retaliate with a **nuclear device in New York**, killing 15,000. |
| 1994 | **World Stock Market Crash** -- U.S. caught manipulating markets; worldwide financial meltdown. |
| 1996 | **Collapse of the United States**. Local governments bankrupt. 1 in 4 Americans homeless. **Nomad Riots**. Constitution suspended, martial law declared. |
| 1997--1998 | **Mideast Meltdown** -- limited nuclear war destroys much of the Middle East. World oil supply drops by half. |
| 1998 | **Drought of '98** reduces Midwest to parched grassland. 10.5 quake shatters Los Angeles -- 65,000 killed. |
| 1999 | **Wasting Plague** hits U.S. and Europe, killing millions. Millennium cults appear. |

### The Cyberpunk Age (2000--2020)

| Year(s) | Event |
|---|---|
| 2000 | Millennium cults self-destruct. **Crystal Palace** space station begins construction. |
| 2001 | The **NET** framework established via WorldSat network. |
| 2002 | **Food Crash** -- mutated virus wipes out Canadian/Neo-Soviet crops. |
| 2003 | **Second Central American War**. Media Tesla Johanneson exposes the Gang of Four; the Gang is swept away. |
| 2004--2006 | **1st Corporate War** (EBM vs. Orbital Air). First direct Corporate military conflict. |
| 2007 | **Braindance** developed at UC Santa Cruz. |
| 2008--2010 | **2nd Corporate War** (SovOil vs. Petrochem). Devastating naval conflict poisons the South China Sea. |
| 2009 | Corporations eradicate mob rule in Night City. |
| 2013 | Johnny Silverhand concert riot in Night City. **Soulkiller** virus developed by Alt Cunningham at ITS. First true **AI** developed at Microtech. |
| 2014 | **Ihara-Grubb Transformations** redesign the NET. Rache Bartmoss plants the **DataKrash** virus. |
| 2016 | **3rd Corporate War** -- fought almost entirely in the NET. |
| 2020 | **Carbon Plague** incident in Night City. Chicago Rebuilding Project begins. |

### The 4th Corporate War & Aftermath (2021--2025)

| Year(s) | Event |
|---|---|
| 2021--2022 | CINO/OTEC ocean war escalates as [[corp-arasaka]] and [[corp-militech]] are hired, then turn on each other. |
| 2022 | Rache Bartmoss killed; **DataKrash** virus activates. **4th Corporate War** goes hot. |
| 2023 | **Night City Holocaust** -- nuclear device detonates in Arasaka Towers. 500,000+ killed. NET officially shut down. **Time of the Red** begins. |
| 2025 | End of the 4th Corp War. Arasaka reduced to Japan-only. Militech nationalized. |

### The Time of the Red (2026--2045)

| Year(s) | Event |
|---|---|
| 2026--2030 | **The Diaspora** -- displaced groups reclaim abandoned cities. Nomads establish trade convoys. |
| 2030--2035 | Start of **CitiNets** and **Data Pools** replacing the dead NET. Night City reconstruction begins. Mega Buildings rise. |
| 2035--2045 | First Wave Cities reclaimed. New factories replace lost tech. Rumors of [[corp-arasaka]] factions and sightings of Solo Morgan Blackhand. |
| 2045 | **The Present** -- the world of Cyberpunk RED. |

See [[timeline-pre-war]], [[fourth-corp-war]], and [[time-of-the-red]] for detailed accounts of each era.`,
    related: ['timeline-pre-war', 'fourth-corp-war', 'time-of-the-red', 'night-city-overview'],
  },
  {
    id: 'timeline-pre-war',
    title: 'Before the War: Collapse & Rise of the Corps',
    category: 'Lore & History',
    content: `## Before the War: The World that Made Cyberpunk

### The Gang of Four

In the latter half of the 20th century, a coalition of U.S. government agencies launched a secret coup, effectively ending federal democracy. The cabal, later exposed by investigative Media **Tesla Johanneson**, consisted of:

| Member | Role | Description |
|---|---|---|
| **James Richard Allen** | President | Generally amiable but not bright; easily manipulated by his VP and NSC. |
| **Harold Harrison Hunt** | Vice President | Venial psychopath with family wealth. Mastermind of the coup. Parlayed business empire into government takeover. |
| **NSA** | National Security Council | Conspired with VP to overthrow SouthAm nations for resources and Corporate clients. |
| **CIA** | Intelligence | Provided intel, black ops, and mercenaries. Concerned with growing SouthAm independence threatening U.S. Megacorp markets. |
| **FBI** | Federal Bureau | Used for wiretapping, surveillance, and prosecuting "enemies of the state." Employed mercenary "federal agents." |
| **DEA** | Drug Enforcement | Provided the excuse for SouthAm invasion. Developed bio-plagues targeting coca and opium plants. |

The Gang's machinations led to the **SouthAm Wars**, the **Crash of '94** (stock manipulation exposed by Interpol), President Allen's assassination, and eventually the **Collapse of 1996** -- martial law, the Nomad Riots, and the fragmentation of the U.S. into Free States.

When WNS Media star **Tesla Johanneson** exposed secret NSA transcripts, armed mobs stormed the Capitol. President Hunt was hunted down and set afire by a cheering mob. The Gang was swept away, and elections resumed -- though heavily influenced by Megacorporations.

### The Succession Wars

States began leaving the Union through economic strikes and blockades. California declared separation after the Gang's paramilitary forces attacked San Francisco. The military refused to reconquer the country, citing Posse Comitatus, and the **Free States stayed free**.

### The Rise of Megacorporations

As governments collapsed, Megacorps stepped into the power vacuum. They were nearly nations in themselves -- with their own laws, cities, factories, and armies. Key sectors included:

- **Manufacturing:** Oil, steel, automobiles, weapons, computers, cybernetics, biotech
- **Mediacorps:** Centralized media under a few conglomerates (e.g., [[corp-network-54]]). Controlled public opinion and political narrative.
- **Finance:** Banks and investment firms became kingmakers
- **Security:** Companies like [[corp-arasaka]] and [[corp-militech]] maintained private armies

By the mid-2010s, Megacorps ruled the world economy. Most nations simply collected what taxes they could from their oversized corporate neighbors.

### Global Catastrophes

| Crisis | Details |
|---|---|
| **Wasting Plague (1999)** | Attacked intestines; victims starved regardless of food intake. Killed 14+ million in the U.S. alone. Vaccine finally developed in Japan. |
| **Mideast Meltdown (1997)** | Limited nuclear war left vast areas of Iran, Libya, Iraq as radioactive glass. Only Egypt, Syria, and Israel survived intact. |
| **LA Earthquake (1998)** | 10.5 quake; Pacific Ocean inundated 35% of the city. 65,000 killed. |
| **Drought of '98** | Midwest reduced to parched grasslands. Family farms disappeared. |
| **Ecological Disaster** | Global warming, acid rain, nuclear waste, orbital rock strikes on Tampa and Colorado Springs. Marine life die-off. |

### The Broken World of 2020

By 2020 the world was divided into distinct power blocs:

- **Unified Europa:** Stable, Corporate-run, relatively prosperous but boring. The "Corporate Beaverville."
- **Russian Revanchment:** Ruled by the Neo-Soviet Party -- a "capitalist-crony kleptocracy." [[corp-sov-oil]] was the major economic engine.
- **Asia Ascendant:** China, Japan, Korea shifted to CHOOH2 and ocean algae. Dense populations with high food security but limited personal freedoms.
- **Pan-African Alliance:** Reborn through the Kilimanjaro mass driver project. Nearly one-third of space workers were African. Birthed the **Highriders**.
- **Central/South America:** Strong union of independent states after wars with U.S. The OAS became a major world power.
- **United States:** A hollowed-out wreck. Megacorps ruled the cities, Nomads roamed the highways, and the Gang of Four's legacy left the nation fragmented.

See [[timeline-overview]] for a condensed timeline and [[fourth-corp-war]] for what happened next.`,
    related: ['timeline-overview', 'fourth-corp-war', 'corp-arasaka', 'corp-militech'],
  },
  {
    id: 'fourth-corp-war',
    title: 'The 4th Corporate War',
    category: 'Lore & History',
    content: `## The 4th Corporate War

The defining conflict of the Cyberpunk world. What began as a proxy war between ocean-based Megacorps escalated into a global catastrophe that reshaped civilization.

### Phase One: The Shadow War (2021--2022)

In 2021, **IHAG** (underwater shipping Megacorp) went bankrupt. Rivals **CINO** and **OTEC** squared off for a hostile takeover of IHAG's assets. Starting with stock manipulation and espionage, both escalated to outright warfare -- and hired bigger guns:

| Side | Hired Megacorp |
|---|---|
| OTEC | [[corp-militech]] (U.S.-based arms manufacturer and mercenary army) |
| CINO | [[corp-arasaka]] (Japanese security Megacorp) |

As the two leading paramilitary Corporations in the world, Arasaka and Militech had been spoiling for a fight for years. The CINO/OTEC conflict provided the excuse. Operations grew in frequency and lethality, and whatever resolution CINO and OTEC reached became secondary to the collision course between the two giants.

### Phase Two: The Hot War (2022--2023)

Both Arasaka and Militech fielded armies in the **tens of thousands**, with advanced transportation and logistics allowing strikes across the globe. The war featured:

- **ACPAs and Combat Cyborgs** fielded in large numbers for the first time
- **Remotes, battlefield robots, and infantry** clashing in high-tech nightmares
- **Ortillery** (orbital artillery) -- rocks fired from space with devastating precision
- **Bioplagues** deployed against strategic seaport hubs (Hong Kong, Shanghai, Long Beach)
- **Autonomous sea weapons** sinking friendlies and neutrals alike

### The Sea War

Both sides attempted to deny the other access to global shipping. The result was a **total suspension of world transshipping trade**, creating a worldwide economic crisis. Container ships sat abandoned mid-transit, forming ghost fleets later scavenged by Nomads. Submarines pounded the sea floor, obliterating almost all OTEC and CINO assets that had started the war.

### The DataKrash

During the NET war, the **DataKrash** -- a deadly viral plague created by Netrunner **Rache Bartmoss** -- tore through the worldwide information network. Bartmoss had hidden his virus inside the I-G Transformation Algorithms that ran the NET itself; every computer running the NET was automatically infected. The virus:

- Randomly shifted, erased, or rewrote data worldwide
- Invalidated the information structure that made Megacorps and governments viable
- Released AI and Soulkilled Pseudo Intellects to roam the NET freely
- Spawned **R.A.B.I.D.s** (Roving Autonomous Bartmoss Interface Drones) -- self-replicating killer programs numbering in the hundreds of thousands

On March 5th, 2023, **Netwatch** gave up and shut down the NET entirely.

### The Seven-Hour War

Fed up with the fighting threatening their habitats, the **Highriders** (space-dwelling colonists at O'Neill Two) declared independence. Using mass drivers and scavenged weapons, they dropped dozens of lunar rocks at key sites on both sides, causing widespread death and destruction. Both the U.S. and Japan recognized the new government.

### Night City Holocaust (August 20, 2023)

An incursion team led by Solo **Morgan Blackhand** and Rockerboy **Johnny Silverhand** attempted to steal/destroy the Arasaka Secure Database in Arasaka Towers. During the assault, an **area denial nuclear device** detonated, destroying most of central Night City.

| Statistic | Detail |
|---|---|
| **Immediate dead** | Over 500,000 |
| **Aftermath deaths** | Another 250,000 |
| **Atmospheric effect** | Particulate debris created a red pall over skies worldwide for nearly two years |
| **Militech response** | Nationalized by President Elizabeth Kress, who reactivated CEO Gen. Lundee's reserve commission |

### The End

By 2025, pockets of fighting were quelled. The war included only one nuclear detonation, but the world's infrastructure was severely impacted. Arasaka was reduced to a Japan-only Corporation. The NET was dead. The **Time of the Red** had begun.

See [[time-of-the-red]] for what came after, and [[adventure-never-fade-away]] for Johnny Silverhand's earlier raid on Arasaka in 2013.`,
    related: ['timeline-overview', 'time-of-the-red', 'corp-arasaka', 'corp-militech', 'adventure-never-fade-away'],
  },
  {
    id: 'time-of-the-red',
    title: 'The Time of the Red (2023--2045)',
    category: 'Lore & History',
    content: `## The Time of the Red

Named for the eerie red skies caused by atmospheric particles from the Night City nuclear blast, orbital rock strikes, and the burning of cities and agricultural areas during the 4th Corp War. For nearly two years skies were tinged blood red; brilliant red sunrises and sunsets persisted for a decade.

### The Diaspora (2026--2030)

Groups displaced from wrecked cities set out to **Reclaim** nearby cities abandoned since the 1990s Collapse. Key developments:

- **Nomad convoys** set up trade routes between cities, supporting the Reclaimers
- Massive looting of old tech and abandoned Megacorp storehouses
- Only scattered Corps still functioning, on a very reduced basis
- Local businesses filled the gap, often with plundered Corporate resources
- Very limited VPNs within Corporate parks. AIs occasionally crept into wrecked cities' old NETs to seek others for the **Ghost World** established by Alt Cunningham

### Arasaka Fragments

After the war, Arasaka broke into **three warring factions**:

| Faction | Leader | Philosophy |
|---|---|---|
| **Kiji (Green Pheasant)** | Hanako Arasaka | Continuation of Saburo's mainline regime. Seeks peaceful reconciliation with the New U.S. |
| **Taka (Hawk)** | Yorinobu Arasaka | Renegade opposing the other factions. Escaped being Soulkilled via a body double. |
| **Hato (Dove)** | Michiko Sanderson (nee Arasaka) | Allied behind Kei's American-born daughter. She wants nothing to do with family machinations but serves as a figurehead. |

### Rebuilding Night City (2030--2045)

- **Resettlement of Suburban Night City** -- foothills and small cities around NC packed with refugees from the radioactive ruins
- **Nomad High Roads** reestablished -- Nomads now operate ports and container ships. Corps branch out regionally along these routes.
- **CitiNets** and **Data Pools** replace the dead NET -- local VPNs, "air gapped," with limited access between cities. Built and maintained by [[corp-zhirafa]] subsidiary Ziggurat.
- **Johnny Silverhand sightings** -- rumors that his body was kept in cold storage by a fullbody conversion fan. Never substantiated.
- **Mega Buildings** rise to house the homeless population -- "all-in-one" arcologies designed for rapid habitation
- **Netwatch** tried and failed to clear R.A.B.I.D.s from the Old NET over three years, then shut down all major nodes

### The New United States

The remaining United States became a functional dictatorship under **President Elizabeth Kress'** State of Emergency. While local elections resumed, there would be no national elections until a treaty existed between Free States and the remaining United States. Kress' stance: *"We have no United States until we have a country again."*

### The Present (2045)

The world of Cyberpunk RED. Night City is rebuilding. The red sky has faded to vivid sunrises and sunsets. Corporations are rising again from the wreckage. The NET is gone, replaced by local Data Pools. Edgerunners walk the streets, carving out lives in a world where the old power structures were shattered -- and new ones are hungry to take their place.

As the Rockerboy Lilayah puts it: *"The Time of the Red is almost biblical sometimes. A lot of big stuff went down and the world was changed even more than it had been by the Collapse."*

See [[night-city-overview]] for the current state of Night City and [[timeline-overview]] for the full timeline.`,
    related: ['timeline-overview', 'fourth-corp-war', 'night-city-overview', 'corp-arasaka'],
  },

  // ============================================================
  // CORPORATIONS
  // ============================================================
  {
    id: 'corp-arasaka',
    title: 'Arasaka Corporation',
    category: 'Corporations',
    content: `## Arasaka Corporation

**Corporate security, Corporate police, and various Corporate suboperations**

| Detail | Info |
|---|---|
| **Headquarters** | Tokyo, Japan |
| **Regional Offices** | Offices throughout the world |
| **Chief Officer** | Hanako Arasaka |
| **Employees** | 1,000,000 |
| **Specialization** | Security services, mercenary forces |

### Background

If you want it protected, Arasaka is still the name. Even after the [[fourth-corp-war]], Arasaka maintains one of the largest armed forces of any Corporation. Though operations are severely reduced and headquarters limited to the Japanese mainland, they hold on to most assets through a strong alliance with the Japanese government.

Post-War, Arasaka troops are covertly licensed to other firms as security guards, couriers, and mercenaries -- wearing the uniforms of their "employers." They are the best trained and hardest operatives in the business, loyal to Arasaka to the point of death. The Corporation is more focused on protecting its own damaged assets than guarding others, using positions of trust to gain inside information and advantages toward their ultimate goal: returning to the heights they once held.

### The Three Factions (as of 2045)

| Faction | Leader | Philosophy |
|---|---|---|
| **Kiji (Green Pheasant)** | Hanako Arasaka | Mainline continuation of Saburo's vision. Seeks peaceful reconciliation with the New U.S. |
| **Taka (Hawk)** | Yorinobu Arasaka | Renegade opposing the family. Escaped being Soulkilled via a body double during the War. |
| **Hato (Dove)** | Michiko Sanderson | Centered on Kei's American-born daughter. Figurehead for a faction seeking legitimacy through her U.S. citizenship. |

All three factions vie for dominance while the aged patriarch **Saburo Arasaka** still nominally controls the Corporation.

### Face: Hanako Arasaka

The eldest Arasaka daughter, Hanako has always been a recluse. A Netrunner of high skill, she prefers working on digital projects -- particularly a revised version of **Soulkiller** that will allow movement into clone bodies (she alone grasped the true meaning of Alt Cunningham's work). The Old Guard has unified around her as the Kiji faction. She is also instrumental in trying to get her brother Yorinobu to reconcile with the Family.

### Attitude Toward Edgerunners

Arasaka hires through intermediaries. Edgerunners who prove useful may be retained, but Arasaka considers everyone expendable. Trust is rare and always conditional. Betraying Arasaka is a death sentence -- they have long memories and longer reach.

See [[fourth-corp-war]] for Arasaka's role in the war and [[adventure-never-fade-away]] for Johnny Silverhand's 2013 raid on their Night City complex.`,
    related: ['corp-militech', 'fourth-corp-war', 'adventure-never-fade-away', 'time-of-the-red'],
  },
  {
    id: 'corp-militech',
    title: 'Militech International',
    category: 'Corporations',
    content: `## Militech International

**Arms manufacturing and distribution, mercenaries**

| Detail | Info |
|---|---|
| **Headquarters** | Washington D.C. |
| **Regional Offices** | New York, Miami, Chicago, Montreal, London, Rome, Zurich, Night City, Los Angeles, Toronto, Tokyo, Beijing |
| **Chief Officer** | Gen. Donald Lundee, USMC (ret.) |
| **Employees** | 350,000 (700,000 contracted to U.S. Military) |
| **Specialization** | Weapons manufacturing, mercenary forces |

### Background

One of the major players in the [[fourth-corp-war]], Militech fought [[corp-arasaka]] to a bloody standstill that ended only when the President ordered them to stand down. Currently laboring under controls from Washington D.C. as a **nationalized Corporate asset** of the New United States, MTI is secretly rebuilding to its former role as arms merchant and mercenary army.

Even greatly reduced, Militech is still the world's largest producer of military weapons -- from revolvers to tanks to jet fighters. The New United States is their largest customer, but MTI deals worldwide with anyone who has money.

### Key Figures

**Gen. Donald Lundee (CEO):** Ex-Marine who took his war with Arasaka personally. Convinced he would have won if President Kress hadn't reactivated his commission and ordered a ceasefire. Mercurial temper, more enemies than friends, but possessed of a dogged determination. His impulsiveness caused some defeats (like the opening assault on the Osaka Arms Works) but he remains capable of mustering troops.

**Gen. Samantha Lee "Sammy Lee" Young (Face):** Tall, confident Marine General (ret.). Brilliant tactical mind who earned the nickname "Sammy Slaughter Lee" in the SouthAm Wars. Her tactical foresight was folding Arasaka into a defensive posture before the ceasefire. Even in her sixties, she is still a force -- impeccable cyberware, long silver hair, ramrod posture. She never loses her temper, responding to provocations with a wry smile.

*"I know I'm a soldier. But as a soldier, I know that every time you go to war; every time you pick up that gun, there's a price to pay."* -- General Samantha Lee

### Attitude Toward Edgerunners

Militech hires freelancers regularly -- field testers for new weapons, deniable assets for covert ops, and expendable operatives for dirty work. They pay well but expect results. Double-crossing Militech is unwise; they have the firepower of a small nation and the willingness to use it.`,
    related: ['corp-arasaka', 'fourth-corp-war', 'timeline-overview'],
  },
  {
    id: 'corp-biotechnica',
    title: 'Biotechnica',
    category: 'Corporations',
    content: `## Biotechnica

**Genetic engineering, microbiological, and biochemical research**

| Detail | Info |
|---|---|
| **Headquarters** | La Jolla, California |
| **Regional Offices** | London, Bonn, Paris, Seattle, Dallas, Night City, Sydney, Rio de Janeiro |
| **Chief Officer** | Nicolo Loggagia |
| **Employees** | 36,256 |
| **Specialization** | Biotech, genetic engineering, CHOOH2 fuel |

### Background

When the fuel crisis hit in the late 1990s, Biotechnica -- then a small firm with one office -- developed **CHOOH2** (pronounced "chew two"), a complex grain alcohol produced by genetically engineered yeasts and wheat strains. Within a few years, all fuel-burning vehicles and power plants had converted. Unable to meet worldwide demand alone, Biotechnica licensed production to large Agricorps and PetroCorps, making them extremely wealthy but not particularly large.

Biotechnica is probably the closest thing to a **"good guy" Corporation** in the Time of the Red. Its labs provide much of the tech enabling the Pacific Confed to develop bio-engineered replacement species. They are active in restoring animals and habitat throughout blighted environments, with projects including:

- **Reference Forests** -- genetically engineered forests to restore decimated woodlands
- **Project Orchard** -- agricultural genetic engineering for "super crops"
- **Replacement species** -- bio-engineered flora and fauna for ecosystem restoration

### Face: Nicolo Loggagia

Brilliant but erratic biochemist. Slight, white-haired, dapper, with a slightly abstracted air. His grandson Mario and wife Luchessia handle business. Loggagia's dream is to **restore the biosphere**, starting with endangered and extinct animals. Knowing the greedy would destroy his creations, he has redesigned many animals with defensive capabilities -- koalas with venomous fangs, for example. He has also created new species: pattern-panthers in the Northwest forests and ptero-raptors in the Canadian Rockies.

*He may well be the Doctor Moreau of the Time of the Red.*

### Attitude Toward Edgerunners

Biotechnica frequently hires Edgerunners for site security, specimen recovery, and protection of researchers in the field. They pay fairly and treat freelancers with relative decency -- but don't mistake their pleasant demeanor for weakness. They protect their patents ruthlessly.`,
    related: ['corp-petrochem', 'corp-continental-brands', 'everyday-food'],
  },
  {
    id: 'corp-petrochem',
    title: 'Petrochem',
    category: 'Corporations',
    content: `## Petrochem

**Petrochemical products and agribusiness; world's largest CHOOH2 producer**

| Detail | Info |
|---|---|
| **Headquarters** | Dallas, Free State of Texas |
| **Regional Offices** | New York, Washington, Miami, Chicago, San Francisco, Tokyo, London, Hamburg, Paris, Rome |
| **Chief Officer** | Angus Youngblood |
| **Employees** | 338,000 |
| **Specialization** | CHOOH2 fuel production, oil, agribusiness |

### Background

The world's largest producer of **CHOOH2** (under license from [[corp-biotechnica]]) and controller of millions of acres of arable land used to grow the genetically altered wheat for synthetic fuel. Also one of the world's largest oil producers, though dwindling supplies mean remaining fossil fuels are mostly used for plastics and synthetics.

During the [[fourth-corp-war]], Petrochem and [[corp-sov-oil]] cheerfully sold both Arasaka and Militech almost their entire aviation fuel reserves, causing artificial shortages and massive price increases. However, protecting their vast far-flung assets drew so heavily on Petrochem that it entered the post-War period seriously depleted.

Still chafing under its CHOOH2 license from Biotechnica, it is only a matter of time before Petrochem's CEO finds a way to absorb the smaller biotech company for good.

### Face: Angus Youngblood

Rich young Australian investor who became a major shareholder in 2013, then married the aging Board Chairman Ellen Trieste as a tool to take over. Now that Ellen is dead, he no longer must cater to her romantic fantasies. Always suave, witty, and stylish -- a front that has disarmed many rivals. But make no mistake: Angus Youngblood is as shrewd and ruthless as ever.

### Attitude Toward Edgerunners

Petrochem hires freelancers for protecting assets, sabotaging competitors, and industrial espionage. The pay is good but the work is often in remote, dangerous locations -- oil fields, agricultural zones, and contested territory.`,
    related: ['corp-biotechnica', 'corp-sov-oil', 'corp-continental-brands', 'fourth-corp-war'],
  },
  {
    id: 'corp-continental-brands',
    title: 'Continental Brands',
    category: 'Corporations',
    content: `## Continental Brands

**Organic and synthetic food and drink**

| Detail | Info |
|---|---|
| **Headquarters** | Tulsa, Oklahoma |
| **Regional Offices** | Chicago, Atlanta, Baltimore, Seattle, Dallas, Night City |
| **Chief Officer** | Olivia Forsythe |
| **Employees** | 147,000 |
| **Specialization** | Food production, kibble, retail (Oasis stores) |

### Background

Continental Brands was born from a corporate heist. Originally Continental Agricorp, a subsidiary of [[corp-petrochem]] tasked with selling surplus wheat, the company was spun off through an audacious coup. In 2040, marketing directors **Olivia Forsythe** and **Lewis "Mr. Moo-Moo Burger" McAllister** drafted a secret plan to cut out Petrochem. Over three years, they put half of Petrochem's American Agribusiness into a metaphorical sack and hoisted it over their shoulder -- stealing staff, gas stations, R&D, and even the judge when Petrochem tried to sue.

Continental Brands capitalizes on food instability with their **Oasis stores** -- if an Oasis is the only place to reliably purchase food, and only sells their brands, profit is assured.

### The Oasis Community Loyalty Program

Communities are entered into a loyalty point system:

| Action | Result |
|---|---|
| **Purchasing CB products** | Earn points for the whole community |
| **Gold Status** | Royal visit from an Olivia body double throwing merch from an AV-4 |
| **Importing outside food** | Point penalty |
| **Growing your own food** | Point penalty |
| **Organizing against CB** | Point penalty, possible "Wanted" posters |
| **Worst punishment** | The **Discovery Program** -- forced to test a single new kibble flavor until loyalty improves |

### Face: Olivia Forsythe

A home-grown monster of the Corporate world, filled with malice toward everything that does not directly benefit her. The public knows her as "The Kibble Queen" -- a mascot persona created by her marketing department. In reality, she detests the character, is rarely seen in public, and wants nothing more than to slink back into the shadows of her Corporate office. She drinks six cans of Triti-Fizz a day and does two lines of synthcoke each morning.

### Attitude Toward Edgerunners

Continental Brands hires Edgerunners for supply chain protection, eliminating competitors (especially guerrilla gardeners), and enforcing Loyalty Program compliance. They pay in corporate scrip as often as eurodollars.`,
    related: ['corp-petrochem', 'everyday-food'],
  },
  {
    id: 'corp-trauma-team',
    title: 'Trauma Team',
    category: 'Corporations',
    content: `## Trauma Team

**Ambulance and paramedic services**

| Detail | Info |
|---|---|
| **Headquarters** | Seattle, Washington |
| **Regional Offices** | Most major North American cities |
| **Chief Officers** | Carrie Lachanan and Bob Jones |
| **Employees** | 15,000 |
| **Specialization** | Emergency medical extraction and treatment |

### Background

Still one of the largest private medical firms in the world. Equipped with **1,305 AV-4 aerodynes**, thirty Corporate jets, twenty-two Osprey II aircraft, and four C-29 heavy cargo jets. Each franchise office has its own surgical infirmary and hospital arrangements.

During the [[fourth-corp-war]], Trauma Team declared they would not respond to alerts from Arasaka or Militech members -- one battle would tie up every TT team in a city. They responded only to civilian requests at combat rates.

The War changed TT's look: once-crisp blue and yellow uniforms have given way to mil-spec helmets, heavy armor, power armor support systems, and combat medipacs. The new face of Trauma Team is harried, overworked, angry, and impatient.

### Faces: Carrie Lachanan and Bob Jones

Married couple, each representing a different area of the company. Lachanan handles day-to-day operations; Jones covers manpower and materiel. Both are top-rated doctors who put patients first. They tolerate being "Faces" but hate Corporate events.

### Attitude Toward Edgerunners

Trauma Team sells service contracts (see [[trauma-team]]). They are strictly neutral and professional. Edgerunners with TT cards get treated; those without get ignored. Groups of Edgerunners sometimes pool money for a single shared card.`,
    related: ['trauma-team', 'healing-overview', 'fourth-corp-war'],
  },
  {
    id: 'corp-danger-girl',
    title: 'Danger Girl',
    category: 'Corporations',
    content: `## Danger Girl

**Private investigation and security firm**

| Detail | Info |
|---|---|
| **Headquarters** | Night City |
| **Regional Offices** | New York, Miami, Montreal, London, Rome, Zurich, Washington D.C., Los Angeles, Toronto |
| **Chief Officer** | Michiko Sanderson |
| **Employees** | 1,800 |
| **Specialization** | Private investigation, celebrity security |

### Background

As [[corp-arasaka]] was forced back to Japan after the War, Kei Arasaka's American-born daughter **Michiko** faced deportation. Her solution was characteristically clever: she traveled to Washington D.C. to meet President Elizabeth Kress, apologized for her family's role in the War, and made a deal to remain in America. Part of that deal: **locating and dismantling any Arasaka operations in and around the United States**.

Michiko graduated from Stanford with a degree in criminology, then started **Danger Girl** -- on the surface a private investigation firm for celebrities and socially important clients. Behind the bright pink "Little Detective" logo, she has access to a Presidential slush fund, covert Arasaka databases, and her lifelong bodyguard **Kenichi Zaburo** (once one of Arasaka's top Solos, the only man who could battle Morgan Blackhand to a draw).

### Face: Michiko Sanderson

Now in her thirties, she still exudes bubbly, enthusiastic charm. A constant sight at social galas, with a string of successfully solved cases. She can read a room like a book while revealing nothing but her cheerful facade.

*If you see Michiko Sanderson wink at you, run.*

### Attitude Toward Edgerunners

Danger Girl hires Edgerunners for delicate cases requiring deniable assets. The pay is excellent, but Michiko expects discretion and competence. Those who prove reliable may find themselves drawn into a much larger game against Arasaka's warring factions.`,
    related: ['corp-arasaka', 'fourth-corp-war'],
  },
  {
    id: 'corp-network-54',
    title: 'Network 54',
    category: 'Corporations',
    content: `## Network 54

**Nationwide broadcasting service**

| Detail | Info |
|---|---|
| **Headquarters** | Santa Fe, New Mexico (Fifty Pines Ranch) |
| **Regional Offices** | Atlanta, Chicago, New Orleans, Dallas, Denver, Arizona, Portland, Seattle, Los Angeles, San Francisco, plus subsidiary stations in most major cities |
| **Chief Officer** | Michelle Dreyer |
| **Employees** | 62,000 |
| **Specialization** | Television broadcasting, news, entertainment |

### Background

Network News 54 is a wavelength monopolizer, operating on Channel 54 nationwide. Despite its name, N54 offers far more than news -- every regional office has a slightly different schedule with syndicated series, movies, and local programming. Universal broadcasts include prime-time series and bi-hourly national/world news shows.

By 2010, Network 54 controlled 62% of all media broadcasting in the U.S. Their reach was severely curtailed by the War but they remain the dominant broadcaster.

### Popular Shows

| Show | Description |
|---|---|
| **Cooking with Kibble** | Frenetic cooking competition using Continental Brands Kibble |
| **The Elflands Online! Chronicles** | Cheesy series about a Netrunner trapped in a fantasy braindance world |
| **Hot Zone Divers** | Reality show about "Nomads" (actually actors) retrieving tech from the Hot Zone |
| **La Pasion Dorada** | Over-the-top telenovela about a climbing Exec |

### Face: Michelle Dreyer

Widow of founder Edwin Dreyer. To keep her husband's legacy alive, she has almost entirely replaced her original body with a **Gemini full-body conversion**, fixing her apparent age at mid-fifties. A good, God-fearing woman from Albuquerque uncomfortable with her augmentations. Has become a recluse in recent years.

### Attitude Toward Edgerunners

Network 54 hires freelancers for stories -- as subjects, sources, or muscle protecting camera crews in dangerous zones. Getting on N54's good side means publicity; getting on their bad side means being painted as a villain to millions.`,
    related: ['everyday-media', 'corp-danger-girl'],
  },
  {
    id: 'corp-rocklin-augmentics',
    title: 'Rocklin Augmentics',
    category: 'Corporations',
    content: `## Rocklin Augmentics

**American cybernetics and structural enhancements specialists**

| Detail | Info |
|---|---|
| **Headquarters** | Austin, Free State of Texas |
| **Regional Offices** | Washington D.C., Chicago, Denver, Atlanta, Baltimore, Seattle, Dallas, Night City |
| **Chief Officer** | Jacinda Hidalgo |
| **Employees** | 125,000 |
| **Specialization** | Cyberlimbs, skeletal enhancements, designer cyberware |

### Background

Founded in 2004 by Andrew Rocklin as a prosthetic limb supplier. Eclipsed by aggressive cybercorps like Dynalar and Kiroshi, the company eked out an existence through government contracts. Then in 2030, Andrew's daughter **Jacinda Hidalgo** reborn the company as **Rocklin Augmentics** with bleeding-edge designs emphasizing artificial aesthetics -- open frameworks, bizarre color schemes, and brazenly inhuman proportions. Public response was immediate and enthusiastic.

Her **Signature Cybernetics Series** -- each created by a popular artist (street calligrapher Visser, Art Nouveau stylist Hamilton Welch) -- has made Rocklin's outrageous lines burn up the Data Terms. The company proclaims itself "an American company first and foremost" and employs many people displaced during the Time of the Red.

### Controversy

In 2041, former designers claimed they were instructed to sign their names to prototypes implying a "cyberware gestalt" -- possibly violating **AI Protocols**. Netwatch investigated but no charges were filed. One of the whistleblower designers has been missing for two months.

### Face: Jacinda Hidalgo

Lost both legs to a landmine in Costa Rica at age 10. She took control at 26 when her adoptive father disappeared during the War. Now 42, she still has the face of a young woman but much of her body is a display case for Rocklin products. She changes cyberlimbs like evening dresses, performing acrobatics that would be the envy of trained martial artists. Her enemies call her "The War Orphan." Her response: *"They don't know what war is. But they will."*

### Attitude Toward Edgerunners

Rocklin hires Edgerunners as field testers for new cyberware, security for their facilities, and covert operatives when competition gets rough. They sometimes pay in product rather than cash.`,
    related: ['cyberware-overview', 'cyberware-catalog', 'key-locations'],
  },
  {
    id: 'corp-sov-oil',
    title: 'SovOil',
    category: 'Corporations',
    content: `## SovOil

**Petrochemical products and agribusiness**

| Detail | Info |
|---|---|
| **Headquarters** | Moscow, Russia |
| **Regional Offices** | Toshkent, St. Petersburg, Tokyo, Seoul, Beijing, Manila, Ho Chi Minh City, Havana, Night City |
| **Chief Officers** | Central Committee (actual membership unknown) |
| **Employees** | 245,000 |
| **Specialization** | Oil production, mining, shipbuilding |

### Background

Sitting on top of the world's largest remaining oil reservoirs, SovOil's oligarch leaders know the oil will not flow forever. Developments like [[corp-biotechnica]]'s CHOOH2 have rapidly undermined their strategic dominance. After a savage war with [[corp-petrochem]] in the 2010s over South China Sea territories, SovOil was forced to explore untapped Siberian oilfields while Petrochem shifted to CHOOH2.

The [[fourth-corp-war]] only delayed the inevitable reckoning. SovOil's Central Committee is moving pieces for the next step: **diversification**. As the major economic force in the Neo-Soviet Union and Eastern Europe, they are already active in mining, shipbuilding, and research, and expanding into aircraft, computers, synthetics, CHOOH2 power systems, and agriculture. By 2050, they hope to have a product base diverse enough for the coming war with Petrochem.

### Face: Anatoly Novaragov

Large, loud, ostentatious -- exactly the Western idea of a Russian oligarch. Bright expensive shirts open to the navel, gold jewelry, expensive cars. But those who knew the earlier Anatoly recall a faceless bureaucrat in shabby suits who hoarded every penny. Is this the real Novaragov? A midlife crisis? A clever Committee ruse? An actor replacing a man long buried behind a dacha? No one knows.

What has not changed is his reputation for ruthlessness -- leveraging old KGB and **Bratva** (Russian mafia) connections to make rivals disappear, sometimes resurfacing as collections of body parts in St. Petersburg parks.

### Attitude Toward Edgerunners

SovOil hires through Fixers and intermediaries, often for sabotage against Petrochem facilities, protection of Siberian operations, or intelligence gathering. They pay well but expect absolute loyalty for the duration of a contract. Betrayal results in the Bratva paying a visit.`,
    related: ['corp-petrochem', 'fourth-corp-war', 'key-locations'],
  },
  {
    id: 'corp-zhirafa',
    title: 'Zhirafa Technical Manufacturing',
    category: 'Corporations',
    content: `## Zhirafa Technical Manufacturing

**Manufacturer of drones, autonomous robotics, and construction mecha**

| Detail | Info |
|---|---|
| **Headquarters** | Vladivostok, Russia |
| **Regional Offices** | London, Paris, Tel Aviv, Mumbai, Singapore, Night City |
| **Chief Officer** | Artyom Sokolov |
| **Employees** | 225,000 |
| **Specialization** | Drones, robotics, construction equipment |

### Background

In the wake of the [[fourth-corp-war]], the Neo-Soviet Union was weakened by antiquated technology and an economy based almost entirely on fossil fuels. Russia's few technical exports were recognized by the rest of the world as poor-quality garbage. Zhirafa changed that. Rising from the Russian tech sector, the company has become a major manufacturer of **drones, autonomous robotics, and construction mecha** that are ubiquitous across Night City's rebuilding zones.

Zhirafa equipment is everywhere in Night City -- construction sites, police patrols (City Police Precinct #2 relies on Zhirafa drones), and Corporate office parks. Their **Zhirafa Office Park** in the Heywood Industrial Zone was built on an existing factory park, with drones and animal mecha patrolling the grounds.

### Ziggurat Subsidiary

Zhirafa's subsidiary **Ziggurat** is the backbone of modern communications, building and maintaining the **CitiNets** and **Data Pools** that replaced the dead NET. See [[everyday-communications]] for details on the Data Pool system.

### Attitude Toward Edgerunners

Zhirafa hires Edgerunners for testing new robotics in field conditions, protecting construction sites from sabotage (a growing problem), and retrieving stolen drone technology. Their Russian management style is blunt and transactional -- deliver results, get paid.`,
    related: ['night-city-overview', 'key-locations', 'everyday-communications', 'time-of-the-red'],
  },
  {
    id: 'corp-kang-tao',
    title: 'Kang Tao & Other Notable Corps',
    category: 'Corporations',
    content: `## Other Notable Corporations

While the major Corps dominate the Time of the Red, dozens of second-tier companies operate in their shadows. These Corps rarely make the screamsheets but provide essential goods and services -- and plenty of work for Edgerunners.

| Corporation | Specialty | Notes |
|---|---|---|
| **Kang Tao** | Chinese weapons manufacturer | Rising power in the arms market. Specializes in smart weapons and guided munitions. Expanding aggressively into markets left vacant by the War. |
| **Constitution Arms** | Heavy weaponry manufacturer | Produces extremely heavy ordnance |
| **GunMart** | Budget weapons manufacturer | Low-quality but cheap and ubiquitous |
| **Kendachi Arms** | Japanese arms manufacturer | Specializes in mono-molecular blades (e.g., the Kendachi Mono-Three) |
| **Kiroshi Optics** | Cyberoptics | Leading Corp in cybereye design. Still dominates the market. |
| **Merrill, Asukaga & Finch** | Investment and financial counseling | Highly exclusive firm. Central to the 3rd Corp War. Offices in The Glen. |
| **Raven Microcybernetics** | Cybernetics | Once-powerful Corp knocked down a peg by [[corp-rocklin-augmentics]] |
| **Thornton Motor Company** | Vehicle manufacturer | Mid-tier company building extremely durable ground cars |
| **WorldSat CommNet** | International communications | Still rules direct audio/visual communication between cities |
| **Zetatech** | Software and heavy machinery | Significant player in the 1st Corp War; still active |
| **Ziggurat** | Communications infrastructure | Subsidiary of [[corp-zhirafa]]. Builds CitiNets and Data Pools. See [[everyday-communications]] |

### The Rule of the Faces

Since the end of the 4th Corp War, Corporations must assign a **"Face"** -- the single largest stockholder -- who is **personally responsible** for any malfeasance committed by the company. If the Corporation commits murder or fraud, the Face takes the punishment, potentially including the death penalty. This is intended to keep Corporate behavior in check, or at least ensure the management hides its misdeeds carefully.

### Local Corps

Local Corps make great cannon fodder for Cyberpunk RED games. They have just enough hardware and clout to make local baddies take notice, but are easy pickings for the big players. They often hire freelancers since they cannot afford regular talent, sometimes paying in stock or ownership instead of cash -- which can be a great plot hook.`,
    related: ['corp-arasaka', 'corp-militech', 'corp-rocklin-augmentics', 'corp-zhirafa'],
  },

  // ============================================================
  // EVERYDAY LIFE
  // ============================================================
  {
    id: 'everyday-communications',
    title: 'Communications: Agents, Data Pools & the NET',
    category: 'Everyday Life',
    content: `## Communications in the Time of the Red

### Meet Your Agent

The cell phone of the 2000s has been replaced by the **Agent** -- a device the size of a pack of cigarettes that goes far beyond taking calls.

**Self-Adaptive AI (SAAI):** Your Agent's programming "learns" by interacting with you. It manages your life -- scheduling, shopping, monitoring your health.

| Function | Capability |
|---|---|
| **Phone** | Voice, video, answer mode. Generates a realistic talking headshot of you for messages. Screens calls with customized responses. |
| **Text/News** | Send/receive messages. Download screamsheet updates keyed to subjects you track. |
| **Personal Assistant** | Keeps appointments, compiles data on your contacts ("farley file"), orders gifts, pays from your cred account. |
| **Personality** | Can be given a name, voice, avatar face/body. Some lonely souls reprogram Agents as surrogate companions. |
| **Database** | Autonomous search of the Data Pool. Compiles reports in text, graphics, or voice. Locates people, places, things. |
| **Lifestyle Manager** | Talks to your fridge, cupboards, toilet paper roller. Orders supplies, schedules vehicle maintenance, monitors body signs with a Biomonitor link. |
| **Entertainment** | Stores thousands of hours of programming. Projects to any screen. Tracks your viewing habits and auto-downloads new episodes. |
| **Creative Tools** | Word processing, image capture (2D/3D), music mixing, CGI generation, braindance playback. |

### Data Pools

With the **NET dead** (destroyed by the [[fourth-corp-war]] and the DataKrash), communication now runs through **Data Pools** -- city-wide LAN networks built and maintained by Ziggurat ([[corp-zhirafa]]'s subsidiary).

| Feature | Details |
|---|---|
| **Structure** | Hardwired LAN, "air gapped" with limited access between cities |
| **Account** | Required to log on. Cost included in any Lifestyle. |
| **Content** | Open-ended database. Anyone can drop new PopMedia programming in. |
| **City-to-City** | Text, voice, and video messages only (hourly data-packet burst transfers via reclaimed phone lines, free-space optics, and Nomad couriers). Direct A/V requires WorldSat contract. |
| **Search** | Agent search functions cruise the Data Pool automatically. Ziggurat's **Ask Alex Anything** app is the standard search tool. |

### Data Terms

Street-corner computer terminals in armored concrete posts. Direct NET link to the city's Data Pool. Cost: ~10eb per minute. Operated by Ziggurat or local services.

### The Old NET

The NET is gone. Destroyed by the DataKrash and infested with **R.A.B.I.D.s** (Roving Autonomous Bartmoss Interface Drones) -- self-replicating killer programs. Netwatch tried for three years to clear them out, failed, and shut down all major nodes. Some Netrunners still venture in to loot abandoned systems, but it is extremely dangerous.

Rumors persist of "NET ghosts" -- memory scans of Netrunners trapped when the NET was closed. Are they sentient? Professor Killgrave Shaw says yes: *"They feel the emotions the Netrunner would have felt. This makes them living beings."* Reverend Phillip Longfellow disagrees: *"A program is just that, a program."*

See [[netrunning-overview]] for current Netrunning rules and [[fourth-corp-war]] for how the NET was destroyed.`,
    related: ['netrunning-overview', 'corp-zhirafa', 'fourth-corp-war', 'everyday-media'],
  },
  {
    id: 'everyday-transport',
    title: 'Getting Around: Transport in the Dark Future',
    category: 'Everyday Life',
    content: `## Transportation in the Time of the Red

Years of economic strife and civil unrest have discouraged new transportation developments. Don't expect crowded freeways, packed trains, and swarming airports. Think badly up-kept roads, abandoned airports, and trains plagued by gangs and intermittent service.

### Ground Transport

**Groundcars** -- No major changes since the 1980s externally. Almost all powered by **CHOOH2** or methane. Electric cars are the exception (no charging infrastructure). Cybernetic control systems let you "stud in" and think the car through its motions. Top speed: 100--300 MPH. SDP: 50.

**Cyberbikes** -- Huge variety. Hydro or CHOOH2 fueled. Brands: Kundalini, Harlon-Dawson, Zondo, Toyo-Tomo. Top speed: 100--300 MPH. SDP: 35.

### Sea Transport

**Speedboats** -- Light mono-hulled craft for smuggling, rescue, law enforcement, piracy. Dense polymer hulls with titanium reinforcement. Common upgrades: onboard machine guns. 60 MPH, SDP: 50.

**Minisubs** (OTEC Hammerhead) -- Shuttle subs used as taxis. 60 MPH submerged. SDP: 100.

**Cargo Subs** (CINO RELaCS) -- Over 100m long, 10+ decks. Operated by full Nomad clans. Can be crewed by just 6 people. SDP: 300.

### Air Transport

| Vehicle | Top Speed | SDP | Cost | Notes |
|---|---|---|---|---|
| **Gyrocopter** | 100 MPH | 35 | 20,000eb | Light helicopter. Police, Corporate, Solo teams, drug runners. |
| **Helicopter** | 200 MPH | 60 | 50,000eb | Tilt-rotor design. Commuter/Corporate use from rooftop pads. |
| **AV-4 Aerodyne** | 200 MPH | 100 | 50,000eb | The jet-car of the Dark Future. Urban assault, police, Trauma Team, Corporate delivery. |
| **AV-9 Super Aerodyne** | 300 MPH | 60 | 100,000eb | Twin-fan sports car of the sky. Wealthy recreation. |
| **Delta 4 Spaceplane** | Mach 6 | 40 | Extremely rare | Suborbital combat spacecraft. Holdover from the War. |

### Mass Transit

**Light Rail Lev Trains** -- Superconductor magnetic levitation. 300 MPH. Underground in cities, elevated in suburbs. 1eb per station passed. Corporate lev stations are clean and guarded; city stations are not. Tickets from automatic machines.

**AeroZeps** (K151) -- Cargo hauler airships based on the pre-War Overlord design. Primary heavy-lift transports for aerial Nomad Families. Always kept far from Combat Zones, guarded by fast-strike combat AVs.

### Getting Weapons Where You're Going

Almost all transport involves the risk of ambush. Nomad convoys are the safest way to move goods between cities, but even they face road gangers and desperate scavvers. See [[vehicle-combat]] for rules on vehicular combat.`,
    related: ['vehicle-combat', 'role-nomad', 'everyday-law'],
  },
  {
    id: 'everyday-food',
    title: 'What People Eat: Kibble, Prepak & Fresh Food',
    category: 'Everyday Life',
    content: `## Food in the Time of the Red

Pollution, toxic waste, and wanton resource stripping have left many croplands barren. America's response: processed substitutes for everything.

### SynthFood

**Kibble** -- The baseline. Mass-produced nutrient made from kelp, plankton, and soy proteins. Smells and tastes about as good as its canine namesake. Neocorps dispense it to laborers (cost deducted from pay). Most urban dwellers have at least one kibble meal per day.

**Prepack** -- Step up. Microwaveable or self-heating meals. Soy and grain-based "faux food" with better flavoring and maybe some real meat or veggies. "Good Prepack" has a higher percentage of natural food -- like restaurant fare in a bag. Press the tab, heat and eat. Significantly more expensive; common in Executive homes.

### Fresh Food

Fresh food was always standard for the City elite and a rare luxury for everyone else. After the War, getting any food into cities past raiders, warring Megacorps, and broken transportation was nearly impossible.

**Guerrilla Gardening** -- Edgerunners tore up abandoned lots and built rooftop gardens. Within a couple years, small farming sites were feeding local Conapts and squats. The food was actually good (if you ignored the radioactivity).

**Killing for Cabbages** -- Non-farming communities (Boosters, gogangers) launched savage wars over food-growing areas. Neighborhoods armed up and patrolled their rooftop gardens, ready to maim anyone who touched a tomato.

**Meet the Meat** -- Enterprising farmers began raising real chickens, dwarf pigs, and goats (cows remain rare). Herds ship under Nomad protection with heavy Solo escort -- a modern "cattle drive." Rustlers end up in the Night City equivalent of Boot Hill.

### Food Costs

| Lifestyle | Food Quality | Monthly Cost |
|---|---|---|
| Kibble | Horrible; nutritionally adequate | 100eb |
| Generic Prepak | Better taste; mostly synthetic | 300eb |
| Good Prepak | Restaurant quality (artificial but real-tasting) | 600eb |
| Fresh Food | Real food, occasional fine dining | 1,500eb |

*Not paying for food: after one week, roll a Death Save at the start of each day.*

See [[services-entertainment]] for full lifestyle costs and [[corp-continental-brands]] for the corporation controlling much of Night City's food supply.`,
    related: ['services-entertainment', 'corp-continental-brands', 'corp-biotechnica'],
  },
  {
    id: 'everyday-media',
    title: 'Media: Screamsheets, TV, Braindance & PopMedia',
    category: 'Everyday Life',
    content: `## Media in the Time of the Red

### Screamsheets

Digital newspapers. Pages typeset and laid out by computer, transmitted to hundreds of newsboxes that print on the spot using high-speed replication. You can:

- Dial the newsbox to print only sections you want (0.1eb per page)
- Download to your Agent
- Updates at 6:00 AM, 12:00 PM, 5:00 PM, and 10:00 PM

Screamsheets are the primary way people stay informed on The Street. In the game, "screamsheets" also refer to adventure scenarios formatted as in-world newspaper pages paired with GM instructions.

### Broadcast Television

Far fewer channels than the old days. Most are cable/subscriber channels limited to a single city or a few hundred miles. Coverage includes sports, news, music videos, old movies, foreign shows, religious programming, adult content, business news, and weather. Plus many single-band pirate radio stations.

Three networks dominate in the U.S.:
- **New Century Broadcasting (NCB)** -- recent arrival
- **World Broadcasting Network (WBN)**
- **[[corp-network-54]]** -- the biggest, on Channel 54 everywhere

### PopMedia

The post-War replacement for traditional media. Entertainment and news created by **independent producers** rather than Mediacorps, combining audio, data, and visuals in a podcast-like format distributed via the Data Pool. Five main sources:

| Source | Description |
|---|---|
| **New Mediacorps** | Can be huge multi-city operations or as small as a dozen artists/techs/producers |
| **Rockerboys** | Concert footage, music tracks, personal observations, braindance experiences |
| **Idols** | Reality-show-style content -- all about the Idol |
| **Independents** | News, gossip, documentaries, commentary |
| **Medias** | Investigative reporting, talk shows, informational programming |

Most PopMedia is consumed via **The Garden** -- Ziggurat's content platform. Anyone can set up a free **Garden Patch** to share creations. Ziggurat runs targeted ads and cuts creators in for 10% of revenue.

### Braindance

Neural interface technology that records complete sensory experiences -- visual, auditory, emotional, and tactile. Braindance chips let you feel what the performer felt. Once seen as the next great entertainment step, psychological addiction and expensive production have made it less popular than predicted. Still used to pacify prisoners (see [[everyday-law]]).

### The Body Lotto

Night City's nightly lottery where six winning numbers are chosen based on **how many corpses** are found in areas of the city. Numbers from six random districts, accumulated by NCPD and verified by Merrill, Asukaga & Finch. Winners contact MA&F by 10 AM. Unclaimed: next night's pot goes up by 1,000eb.

See [[everyday-communications]] for how the Data Pool works and [[role-media]] for the Media Role.`,
    related: ['everyday-communications', 'role-media', 'corp-network-54', 'role-rockerboy'],
  },
  {
    id: 'everyday-law',
    title: 'Law Enforcement & Justice',
    category: 'Everyday Life',
    content: `## Law in the Time of the Red

### The Lawmen

Most police are now called **Lawmen**, since their jurisdiction covers far more than the old city beat. They are organized much as in the 20th century -- Homicide, Vice, Burglary, Traffic Squads (about 5 per squad) -- plus the **Cyberpsycho Squad (Psycho Squad / MAX-TAC)** which deploys aerogyros, AV-4s, miniguns, assault weapons, and Stinger missile launchers.

| Officer Type | Equipment | Jurisdiction |
|---|---|---|
| **City Cops** | Armored squad cars, armor jackets, helmets, smart-chipped Minami-10 | All city areas |
| **Corporate Cops** | Better armed/armored, full Trauma Team coverage. More vicious. | Corporate facilities (can cover entire downtown regions) |
| **Highway Lawmen** | Wandering marshals like Wyatt Earps -- hard riding, fast shooting | Open highways and Reclaimed Cities without police forces |
| **Psycho Squad** | AV-4s, miniguns, assault weapons, Stinger missiles | Citywide; cyberpsycho incidents |

### The Legal Code

After the **Purge of 1996** (citizens' groups lynched hundreds of criminal defense lawyers), martial law replaced the legal structure. The **Military Justice Code** became the basis for the **Uniform Civilian Justice Code** -- still the law of the land.

Night City is not part of the New United States but bases its laws on the Uniform Civilian Justice Code. How much gets enforced depends entirely on **what part of the City you are in and your annual income**.

### Crime on The Street

| Crime | Reality |
|---|---|
| **Theft** | Too common to police. The Street deals with it -- beatings, hunting, killing. Corps burn out your frontal lobes. |
| **Fraud** | A way of life. Corps are "pretty legal" about it -- they hand what is left of you to authorities. Eventually. |
| **Drugs** | Theoretically illegal but designer drugs are defined as "medicinal." Night City is not part of the U.S. anyway. |
| **Assault/Rape** | Not much difference on The Street. Hire Solos for justice. Assaulting a Nomad = dragged behind a vehicle until you are hamburger. |
| **Murder** | If you both had weapons, The Street considers it self-defense and whoever died probably deserved it. |

### Punishments

| Punishment | Description |
|---|---|
| **Personality Adjustment** | Aversion implant. Side effects include terror of situations related to the crime. |
| **Electroflogging** | Tied to an X-cross while an electrified metal whip tears your back apart. 10 lashes usually kill. Minor crimes: 3 lashes. |
| **Exile** | Implant causes excruciating pain when entering a specific city. Enough crimes = unable to enter civilization again. |
| **Prison (Low Security)** | Overcrowded, deadly. Guards shoot nuisances. Prisoners work chain-gang-style menial tasks. |
| **Prison (Top Security)** | Locked down almost all the time. No interpersonal interaction. Automated sentries, death penalty for security violations. |
| **Braindance** | Placed in cryotanks, wired to loop programs. Body cooled, mind fully active in total sensory deprivation. 15+ years drives even hardened cons to beg. |
| **Execution** | State Executioner: one .44 slug at point-blank range. Also empowered to hunt escapees. |

See [[role-lawman]] for the Lawman Role and [[night-city-overview]] for zone types.`,
    related: ['role-lawman', 'night-city-overview', 'everyday-weapons-carry'],
  },
  {
    id: 'everyday-weapons-carry',
    title: 'Carrying Weapons: Laws & Reality',
    category: 'Everyday Life',
    content: `## Weapons in the Time of the Red

### The Legal Framework

By 1997, gun-control statutes were buried under public protest as crime rates made America a siege state. The **Federal Weapons Statute of 1999** established:

1. Fill out a "carry application" for a concealed handgun
2. Wait four days for background check (can be refused for criminal record or mental illness)
3. Pay 25eb fee; serial number laser-etched on gun butt, cataloged with ballistics at FBI/CIA HQ

**Everyone pretty much ignores all of the above.**

### Key Rules

| Rule | Details |
|---|---|
| **Registered weapons** | If a gun with your ID number is used in a crime, you are liable unless you reported it lost/stolen |
| **Automatic weapons** | Illegal to carry; 5--7 year mandatory sentence. Does not stop anyone. |
| **Concealment** | What you can hide matters more than what is legal. Concealable weapons get you past most checkpoints. |
| **Zone enforcement** | Corporate Zones: weapons checks at every entrance. Combat Zones: nobody cares. Executive Zones: armed security takes yours. |

### Where to Get Weapons

There are no Militech showrooms anymore. Sources include:

- **Night Markets** -- through a Fixer. Potluck selection but you might score a classic Malorian or wheellock.
- **Pawn shops** -- Used Berettas, Webleys, and "obsolete" weapons at reasonable prices. Ammo for old guns requires loading your own (caseless ammo is standard now).
- **Military Surplus** -- After a war across five continents, hardware is everywhere. Handguns, rifles, missile launchers, flamethrowers.
- **Vendit Machines** -- Some actually dispense guns and ammo.
- **Polymer One-Shots** -- 3D-printed disposable handguns. Bright designer colors. Available in Oasis Convenience stores. "The perfect gift for the young consumer interested in personal defense."

### Ammunition

Most modern guns use **caseless ammunition** grouped by firepower:
- **Light** (equivalent to 6mm)
- **Medium** (9mm)
- **Heavy** (11mm)
- **Very Heavy** (12mm)
- **Rifle** (standardized 7.62x39mm equivalent)

See [[weapons-catalog]] for a full list and [[ammo-types]] for ammunition types and costs.`,
    related: ['weapons-catalog', 'ammo-types', 'everyday-law', 'role-fixer'],
  },

  // ============================================================
  // ADVENTURES
  // ============================================================
  {
    id: 'adventure-screamsheets',
    title: 'Screamsheet Adventures',
    category: 'Adventures',
    content: `## Screamsheet Adventures

In Cyberpunk RED, **screamsheets** serve double duty: they are both in-world newspapers and the format for published adventures. Each screamsheet adventure pairs a page of in-world Night City Today text with instructions for running a scenario.

### How They Work

Each screamsheet contains:
- **In-world news articles** -- real screamsheet content your players can read
- **Player Information** -- what the Edgerunners know going in
- **Gamemaster Notes** -- the real story, NPC stats, twists, and complications

### Published Screamsheets in the Core Book

#### Wood Pirates (pp. 425--428)
[[corp-biotechnica]] hires the team to guard **Reference Forest RF003** in northern California against "wood pirates" stealing valuable genetically engineered trees. The pirates are actually funded by Washington State investors trying to drive Biotechnica out of NorCal. Features security drones, a firewatch tower, seismographs, chainsaw-wielding pirates, and undetectable micro-bombs in prisoner's heads.

**Key details:**
- Pay: 1,000eb per person, room and board
- Pirates arrive in two teams with logging trucks
- Reduced pay (-100eb per tree lost)
- Extended contract offered at conclusion

#### Smash the Box (pp. 429--430)
[[corp-militech]] has placed an "indestructible" **Maximum Security Safe** (100 HP) on a sidewalk in gang territory as guerrilla marketing. Inside: 5,000eb, an Excellent Quality Medium Pistol, an Excellent Quality Shotgun, and a teddy bear with a Militech job fair invite. The area erupts into a firefight between the **Albino Alligators**, the **Piranhas**, and random locals. An old man offers to split the contents if the crew clears the crowd.

**Key details:**
- Safe is transparent material secured with iron bolts
- Hidden cameras and drones record everything
- Old man uses an aerosol solvent to break the sealant
- May turn on the crew if they are badly wounded

#### The Big Break (pp. 431--433)
3D print artist **JayeZK** hires the crew as protection at a street art show where she is presenting to a Sanroo rep. She is being harassed by "Gangster 3D" -- actually a hired face for **DizCom**, a design firm run by half-a-man Netrunner **Winston Frumighter**. Features hologram-concealed drones, cartoon character battles (Buster Swine, Electric Bunny, Hyper-Active Hyena, Captain Piranha), and two NET Architectures.

**Key details:**
- DizCom on the 20th floor with multiple security layers
- Private elevator with Sleep Gas defense
- Cartoon characters are drones hidden inside holograms
- Plot twist: Sanroo decides not to use JayeZK regardless

### Tips for GMs

- Change locations, tie into Lifepaths, add your own NPCs
- Throw in random encounters from the encounter tables
- Each screamsheet is designed to fill a full session with minimal prep
- Players should not read the GM sections

See [[running-the-game]] for adventure structure and [[encounter-tables]] for random encounters to enhance screamsheet scenarios.`,
    related: ['running-the-game', 'encounter-tables', 'corp-biotechnica', 'corp-militech'],
  },
  {
    id: 'adventure-never-fade-away',
    title: 'Never Fade Away: Johnny Silverhand\'s Story',
    category: 'Adventures',
    content: `## Never Fade Away (2013)

*"He's coming out of the Hammer, about midnight, and he sees them. Three punks, mohawks bright and bristly with reflected neon..."*

**Never Fade Away** is the signature adventure of Cyberpunk RED, set 32 years before the Time of the Red. It tells the story of **Johnny Silverhand's** raid on the Arasaka Tower complex in Night City to rescue his girlfriend, **Alt Cunningham**, creator of the deadly Soulkiller program.

### The Setup

Alt Cunningham, ITS's pet Netrunner, created **Soulkiller** -- an AI superroutine that tears out a Netrunner's brain and recreates it in a frozen storage matrix. [[corp-arasaka]] wants her to build a mobile version: a black-program assassin that can walk the NET freely. They extract her through a staged boostergang attack that nearly kills Johnny.

### The Cast

| Character | Role | Description |
|---|---|---|
| **Johnny Silverhand** | Rockerboy | Lead singer of Samurai. Trademark silver cyberhand. Pale Kiroshi cybereyes. Armed with S&W Handcannon and autoshotgun. |
| **Alt Cunningham** | Netrunner | Johnny's girlfriend. Creator of Soulkiller. Kidnapped by Arasaka to rebuild the program for their use. |
| **Rogue** | Solo | The best Solo on The Street. Former lover of Johnny. Chipped reflexes, .44 Automag, mirrorshaded eyes. Partnered with Santiago. |
| **Santiago** | Solo (Nomad) | Rogue's partner. Burly, scowling, loyal. Packs a Minami 10 and a Nomad Long Rifle. |
| **Thompson** | Media | One-man camera/reporter team. Hardwired cyberoptic camera. Carries an FN-RAL assault rifle. "I was in the War. I like lead. Lots of lead." |
| **Toshiro** | Arasaka handler | Slender, well-tailored, glass of real Scotch. Smiling mouth, frozen eyes. |
| **Akira** | Arasaka muscle | Hulking presence with an athlete's grace and a killer's instincts. |

### The Plan

Thompson tracks Alt to Arasaka's office complex. Johnny calls in markers: Rogue and Santiago for 30,000eb. The plan:

1. **Johnny stages a massive concert** in Industrial Park, directly opposite the 22-story Arasaka complex, drawing 6,000 fans
2. **Santiago** positions on a rooftop with his sniper rifle
3. **Rogue and Thompson** infiltrate during the chaos
4. Johnny turns the crowd toward the complex -- a human wave that forces Arasaka guards to choose between holding position and massacring civilians

### The Assault

As Johnny leads the crowd toward the perimeter, a guard opens fire. The mob surges forward. Santiago picks off guards with his rifle. Rogue moves ahead:

- Throws a dazzle bomb over the security desk, followed by a frag grenade
- Opens each elevator car, spray-paints monitor lenses, sends them to random floors
- Plants a shaped charge on the ceiling of the last elevator car, sends it to the 22nd floor
- Collapses the stairwell with timed charges behind them

Meanwhile, Alt has been working inside the Arasaka mainframe, recreating Soulkiller under guard by three Netrunners. She manages to get a **Controller override** past her watchdogs and takes command of the program itself. *"I am your Controller,"* she tells it. *"You will follow my commands."*

### The Climax

As the team fights through the complex:
- Toshiro orders Arasaka fire teams to the elevators and stairwells
- When the diversions are discovered, he orders Alt to be eliminated: *"We have the program. If we do not have her body, there is no evidence."*
- Alt, still plugged in, permits herself a brief smile. *"A lot he knows."*

The adventure concludes with the team racing to reach Alt before Arasaka can dispose of her, while she uses her control of Soulkiller from within the NET to turn the tables on her captors.

### Legacy

Never Fade Away establishes the key lore threads of the Cyberpunk universe:
- Johnny Silverhand's legend and his enmity with Arasaka
- The creation and significance of Soulkiller
- Alt Cunningham's fate and her connection to the NET's Ghost World
- The seeds of conflict that would eventually lead to the [[fourth-corp-war]] and the Night City Holocaust of 2023

*"Why Johnny? Why now? Couldn't you have gotten anyone else?"*
*"I needed the best. And you're still the best, Rogue."*

See [[fourth-corp-war]] for the later assault on Arasaka Tower in 2023 and [[corp-arasaka]] for the Corporation's current state.`,
    related: ['fourth-corp-war', 'corp-arasaka', 'timeline-overview', 'night-city-overview'],
  },
];
