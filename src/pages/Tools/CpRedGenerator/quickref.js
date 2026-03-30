// Merged quick reference — 602 entries across 17 topics

export const QUICK_REF_TOPICS = [
  "Character Creation",
  "Combat",
  "Cyberware",
  "Drugs",
  "Environment",
  "Equipment",
  "GM Tips",
  "Lifestyle",
  "Lore",
  "Medical",
  "Netrunning",
  "Night City",
  "Roles",
  "Skills",
  "Social",
  "Stats",
  "Vehicles"
];

export const QUICK_REF = [
  {
    "id": "pc-drops-to-zero",
    "title": "A PC drops to 0 HP",
    "tags": [
      "death",
      "dying",
      "unconscious",
      "mortally wounded",
      "down",
      "zero hp"
    ],
    "icon": "☠",
    "steps": [
      "PC enters **Mortally Wounded** wound state. They are unconscious and cannot take Actions.",
      "At the start of each of their turns, they must make a **Death Save**: roll **1d10**. If the result is **under their BODY stat**, they survive. Rolling **10 always fails** (automatic death).",
      "If they **fail even one Death Save**, they **die**.",
      "Each time you **roll** a Death Save, the Death Save Penalty increases by **+1** (cumulative). Additionally, each time you take damage while Mortally Wounded, the penalty increases by **+1** and you suffer a **Critical Injury**.",
      "Another character can **Stabilize** them with a **First Aid or Paramedic Check (DV15)** for Mortally Wounded. This stops Death Saves and heals them to **1 HP**.",
      "A stabilized character is **Unconscious for 1 minute**, then wakes up in the **Seriously Wounded** wound state. The Death Save Penalty resets to their **Base Death Save Penalty**."
    ],
    "topic": "Medical"
  },
  {
    "id": "grapple",
    "title": "Someone wants to grapple",
    "tags": [
      "grapple",
      "grab",
      "choke",
      "throw",
      "wrestling",
      "restrain"
    ],
    "icon": "✊",
    "steps": [
      "**Grab**: Attacker rolls **DEX + Brawling + 1d10** vs Defender's **DEX + Brawling + 1d10**. Evasion is not used to resist a Grab.",
      "If attacker wins, target is **grabbed**. Both participants take **-2 to all Actions** while in a Grapple. Grabbed targets cannot Move or use Actions that require 2 hands.",
      "**Each turn while grabbed**, attacker chooses one: **Choke** (deals your **BODY stat** directly to HP, ignoring armor; choking the same target for 3 successive Rounds causes Unconsciousness regardless of HP) or **Throw** (deals your **BODY stat** directly to HP, ignoring armor; target is now Prone).",
      "Grabbed target can attempt to **break free** on their turn: roll **DEX + Brawling + 1d10** vs attacker's **DEX + Brawling + 1d10** (this is a Grab action to escape).",
      "If a Choke would reduce a target above 1 HP to below 0 HP, they are left at **1 HP and Unconscious** instead."
    ],
    "topic": "Combat"
  },
  {
    "id": "autofire",
    "title": "Using autofire",
    "tags": [
      "autofire",
      "full auto",
      "suppressive fire",
      "spray",
      "automatic"
    ],
    "icon": "🔫",
    "steps": [
      "Costs a full Action. Weapon must have **Autofire** capability.",
      "Autofire costs **10 bullets** per use. If you don't have 10 bullets remaining, you can't use Autofire.",
      "Roll **REF + Autofire Skill + 1d10** vs the **Autofire DV** for that range (different from single-shot DVs — check the Autofire range table).",
      "If you **hit**: roll **2d6** and multiply by the **amount you beat the DV**, up to a maximum of the weapon's Autofire value (**3 for SMGs, 4 for Assault Rifles**).",
      "Armor is ablated by **1** if any damage gets through (standard ablation rule, same as all attacks).",
      "**Suppressive Fire** (alternative): costs **10 bullets**. Everyone on foot, out of cover, within 25m in your line of sight must roll **WILL + Concentration + 1d10** vs your **REF + Autofire + 1d10**. Those who fail must use their next Move Action (and Run if needed) to get into cover. **No damage is dealt** by Suppressive Fire."
    ],
    "topic": "Combat"
  },
  {
    "id": "critical-injury",
    "title": "Someone rolled a critical injury",
    "tags": [
      "critical",
      "injury",
      "crit",
      "dismember",
      "broken",
      "damaged"
    ],
    "icon": "🩸",
    "steps": [
      "A Critical Injury occurs whenever **two or more dice rolled for damage** from a Melee or Ranged Attack **come up 6**. Critical Injuries occur regardless of whether damage got through armor. Mortally Wounded characters also suffer a Critical Injury every time they take damage from any attack.",
      "Roll **2d6** on the appropriate table: **Body** (if hit location is body) or **Head** (if hit location is head).",
      "Apply the effect immediately. Some effects are ongoing until treated.",
      "**Quick Fix** (temporary): another character uses **TECH + First Aid + 1d10** vs the listed Quick Fix DV to temporarily negate the effect.",
      "**Treatment** (permanent): requires **TECH + Paramedic or Surgery + 1d10** vs the listed Treatment DV. Surgery requires a hospital or proper facility.",
      "Some injuries (like dismemberment) cannot be Quick Fixed — only Treatment works."
    ],
    "topic": "Medical"
  },
  {
    "id": "netrun",
    "title": "A netrunner wants to hack something",
    "tags": [
      "netrun",
      "hack",
      "net",
      "cyberdeck",
      "interface",
      "jack in",
      "architecture"
    ],
    "icon": "💻",
    "steps": [
      "Netrunner must be **jacked in** via Interface Plugs to an access point within **6m of the NET Architecture**.",
      "The NET Architecture has **floors**. Netrunner starts at the top and moves down, one floor per NET Action.",
      "Each floor has either: a **Password** (DV check to bypass), a **File** (data to steal), a **Control Node** (controls something physical), or a **Program/Black ICE** (combat).",
      "Netrunner gets **NET Actions per turn** based on Interface Rank: **Rank 1-3 = 2, Rank 4-6 = 3, Rank 7-9 = 4, Rank 10 = 5**, plus their meat Actions (if they want to do anything in meatspace, but at a penalty).",
      "NET Actions: **Move** (go up/down one floor), **Use Program** (attack/defend), **Interface Check** (interact with nodes), **Jack Out** (escape).",
      "To fight Black ICE: use **Zap** (INT + Interface + 1d10) or an offensive Program (**Program ATK + Interface + 1d10**) vs **Black ICE DEF + 1d10**. Black ICE can deal damage directly to the Netrunner.",
      "If a Netrunner's brain HP (equal to their regular HP) hits 0 in the NET, they're **brain-dead**."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "death-save",
    "title": "Making a death save",
    "tags": [
      "death save",
      "dying",
      "mortal",
      "body check",
      "stabilize"
    ],
    "icon": "⚔",
    "steps": [
      "A Mortally Wounded character (0 HP or less) rolls a **Death Save at the start of each of their turns**.",
      "Roll **1d10**. If the result is **less than your BODY stat** (after Death Save Penalty), you survive this turn. A roll of **10 always fails** (automatic death).",
      "You must roll **under your BODY stat** on a d10. The Death Save Penalty is cumulative: it increases by **+1 every time you roll** a Death Save, making each successive save harder.",
      "Additionally, each time the character takes **damage** while Mortally Wounded, the Death Save Penalty increases by **+1** and they suffer a **Critical Injury**.",
      "The Death Save Penalty resets to your **Base Death Save Penalty** when stabilized to 1 HP.",
      "To stop Death Saves: someone must **Stabilize** the character with **First Aid (DV15)** or **Paramedic (DV15)** for Mortally Wounded. This puts them at **1 HP, Unconscious for 1 minute**, then Seriously Wounded."
    ],
    "topic": "Medical"
  },
  {
    "id": "aimed-shot",
    "title": "Player wants to aim for the head/legs",
    "tags": [
      "aimed shot",
      "called shot",
      "head shot",
      "target",
      "location"
    ],
    "icon": "🎯",
    "steps": [
      "An Aimed Shot targets a specific body part. It's harder to hit: the **DV to hit increases by 8**.",
      "Uses the weapon's **single shot mode only** (no autofire, no suppressive fire).",
      "**Head shot**: Multiply the damage that gets through your target's head armor by **2**. Critical Injuries are triggered normally (when 2+ damage dice show 6), rolled on the **Head** table.",
      "**Held Item**: if a single point of damage gets through body armor, the target **drops one item** of your choice that they are holding.",
      "**Leg shot**: if a single point of damage gets through body armor, the target suffers the **Broken Leg Critical Injury** (if they have any unbroken legs).",
      "Aimed Shots **cannot** be combined with Autofire or Suppressive Fire."
    ],
    "topic": "Combat"
  },
  {
    "id": "vehicle-chase",
    "title": "Vehicle chase/combat",
    "tags": [
      "vehicle",
      "car",
      "chase",
      "drive",
      "ram",
      "crash",
      "motorcycle"
    ],
    "icon": "🚗",
    "steps": [
      "Driver rolls **REF + Drive Land Vehicle + 1d10** vs a **DV based on the maneuver** (Simple DV13, Difficult DV15, Incredible DV17).",
      "If the driver **fails**, the vehicle goes out of control. Occupants take **4d6 damage** and the vehicle takes **6d6 damage**.",
      "Passengers can shoot from vehicles with a **-4 penalty** to attack rolls (unstable platform).",
      "**Ramming**: driver makes an attack roll using **REF + Drive + 1d10** vs the target vehicle's **REF + Drive + 1d10**. Damage = **6d6** to both vehicles. Occupants take **4d6**.",
      "Vehicles have HP and armor SP just like people. When a vehicle reaches **0 HP**, it's destroyed.",
      "**Weak points**: hitting a tire (DV+8 aimed shot) halves vehicle speed. Hitting the engine (DV+8) disables the vehicle."
    ],
    "topic": "Vehicles"
  },
  {
    "id": "facedown",
    "title": "Two characters have a facedown",
    "tags": [
      "facedown",
      "intimidate",
      "stare down",
      "reputation",
      "cool check"
    ],
    "icon": "😠",
    "steps": [
      "Both characters roll **COOL + Reputation Level + 1d10**. Both sides add their Reputation to the roll.",
      "If your Reputation is from **cowardice/failure**, your Reputation Level counts as **negative** (subtracted instead of added).",
      "Loser must choose: **back down** (lose face, suffer -2 to social checks for the rest of the scene) or **escalate to violence**.",
      "If they **back down**, they cannot initiate another Facedown for the rest of the encounter.",
      "If they **escalate**, initiative is rolled normally and combat begins.",
      "Facedowns can only happen between two individuals, not groups."
    ],
    "topic": "Social"
  },
  {
    "id": "armor-ablation",
    "title": "How does armor ablation work?",
    "tags": [
      "armor",
      "ablation",
      "SP",
      "damage",
      "reduce",
      "wear"
    ],
    "icon": "🛡",
    "steps": [
      "When a character takes damage, subtract the hit location's **Armor SP** from the damage. Remaining damage goes to HP.",
      "If the attack deals **any damage through the armor** (even 1 point), the armor's SP is **reduced by 1** (ablation).",
      "If the attack deals **no damage** (armor absorbed it all), the armor is **NOT ablated**.",
      "**Armor-Piercing ammo**: ablates armor by **2 instead of 1** per hit.",
      "Armor can be **repaired** by a Tech with a **Basic Tech Check** (DV depends on armor type). Repairs cost money for materials.",
      "Layering armor: you CAN wear armor over other armor, but only the **highest SP** counts. The penalty from **both** armors stacks."
    ],
    "topic": "Equipment"
  },
  {
    "id": "drugs-effect",
    "title": "Someone takes street drugs",
    "tags": [
      "drugs",
      "smash",
      "synthcoke",
      "black lace",
      "blue glass",
      "boost"
    ],
    "icon": "💊",
    "steps": [
      "Drug takes effect for a set duration (varies by drug). Primary effect is automatic.",
      "**After the drug wears off**, the user must make a **Resist Torture/Drugs Check** vs a DV (varies by drug) or suffer the Secondary Effect (addiction).",
      "**Smash** (DV15): Primary (4 hrs): +2 to Dance, Contortionist, Conversation, Human Perception, Persuasion, Acting. Secondary: -2 to same skills permanently until therapy.",
      "**Synthcoke** (DV15): Primary (4 hrs): +1 REF (can exceed 8), paranoid ideation. Secondary: -2 REF permanently unless under Primary Effect.",
      "**Black Lace** (DV17): Primary (24 hrs): 2d6 Humanity Loss (returned on successful resist), ignore Seriously Wounded. Secondary: HL becomes permanent, REF -2 while addicted.",
      "**Blue Glass** (DV15): Primary (4 hrs): GM occasionally tells you when you 'flash out' (hallucinate, lose your Action that turn). Secondary: flash out approximately once per hour permanently while addicted.",
      "**Boost** (DV17): Primary (24 hrs): +2 INT (all INT-linked skills, can exceed 8). Secondary: -2 INT permanently until therapy."
    ],
    "topic": "Drugs"
  },
  {
    "id": "healing-someone",
    "title": "Healing an injured character",
    "tags": [
      "heal",
      "first aid",
      "paramedic",
      "hospital",
      "surgery",
      "recovery"
    ],
    "icon": "⚕",
    "steps": [
      "**First Aid** is for **Stabilization** (TECH + First Aid + 1d10 vs wound state DV: Lightly DV10, Seriously DV13, Mortally DV15) and **Quick Fixing** common Critical Injuries. It does **NOT** directly restore HP.",
      "**Paramedic** (TECH + Paramedic + 1d10, DV varies): Treats Critical Injuries and stabilizes Mortally Wounded characters. Requires a Medtech Bag.",
      "**Natural healing**: **BODY HP per day** of full rest. If Seriously Wounded, must rest (no strenuous activity).",
      "**Hospital**: Provides treatment. Beds cost **100eb/night**. Healing is still natural (**BODY HP/day** of rest). Treatment cost depends on highest DV procedure required.",
      "**Surgery**: required for some Critical Injuries (Treatment DV on the injury table). Needs a proper facility, takes 2+ hours.",
      "**Therapy**: performed by a Medtech rolling **TECH + Medical Tech + 1d10** vs DV15 (Standard) or DV17 (Extreme). Restores Humanity or cures addictions. Costs 500-1,000eb/session."
    ],
    "topic": "Medical"
  },
  {
    "id": "fire-and-explosions",
    "title": "Something is on fire or exploding",
    "tags": [
      "fire",
      "explosion",
      "grenade",
      "incendiary",
      "burning",
      "flame"
    ],
    "icon": "🔥",
    "steps": [
      "**Fire intensity**: **Mild** (wood fire) = 2 HP/turn, **Strong** (gasoline fire) = 4 HP/turn, **Deadly** (thermite) = 6 HP/turn, all dealt directly to HP. Spend an Action to put yourself out (automatic success).",
      "**Catching fire**: if hit by incendiary ammo or a flamethrower, target is **on fire** and takes fire damage each turn until they spend an Action to extinguish.",
      "**Grenades**: thrown with **DEX + Athletics + 1d10** vs the **Grenade Launcher DV** for the range (not a flat DV). On hit, deals damage to everyone in a **10m x 10m area** (5x5 squares).",
      "**If the grenade throw misses**: it deviates. Roll 1d10 for meters of deviation in a random direction.",
      "**Explosive damage vs vehicles**: deals normal damage. Vehicles don't take Critical Injuries but can be destroyed.",
      "**Cover from explosions**: solid cover (wall, car) blocks grenade damage if between you and the blast."
    ],
    "topic": "Environment"
  },
  {
    "id": "falling",
    "title": "A character falls from height",
    "tags": [
      "fall",
      "falling",
      "height",
      "drop",
      "jump"
    ],
    "icon": "⬇",
    "steps": [
      "Falling **10m or more** deals **2d6 damage per 10m/yds fallen** (soaked by body armor).",
      "Falling damage **is soaked by body armor**.",
      "After a fall of 10m+, make a **DV15 Athletics Check** or suffer the **Broken Leg Critical Injury** in addition to fall damage.",
      "**Falls under 10m**: at the moment you leave solid ground, if an edge or ledge is nearby, you get one attempt to save yourself with a **DV15 Athletics Check** to grab on.",
      "Characters with **2 Cyberlegs** are immune to fall damage and Broken Leg injuries from falls up to **30m**.",
      "Example: 20m fall = 4d6 damage (soaked by body armor) + DV15 Athletics or Broken Leg."
    ],
    "topic": "Environment"
  },
  {
    "id": "drowning",
    "title": "A character is drowning",
    "tags": [
      "drown",
      "drowning",
      "water",
      "underwater",
      "swimming",
      "suffocate"
    ],
    "icon": "🌊",
    "steps": [
      "A character can hold their breath for **BODY minutes** (not seconds).",
      "When you can no longer hold your breath, you start **Drowning** -- there is no Endurance check.",
      "At the beginning of each Turn while Drowning, you take your **BODY stat directly to HP** in damage (armor doesn't help).",
      "This continues every turn until they reach air or drop to 0 HP (Mortally Wounded, then Death Saves as normal).",
      "Swimming in rough conditions: **DEX + Athletics Check** (DV varies: calm DV13, rough DV15, storm DV17).",
      "If wearing heavy armor (SP13+), swimming DVs increase by **+4**."
    ],
    "topic": "Environment"
  },
  {
    "id": "persuade-npc",
    "title": "Player wants to persuade/convince an NPC",
    "tags": [
      "persuade",
      "convince",
      "negotiate",
      "talk",
      "social",
      "cool",
      "persuasion",
      "influence"
    ],
    "icon": "🗣",
    "steps": [
      "The player describes what they want to convince the NPC of and how they frame their argument.",
      "Roll **COOL + Persuasion + 1d10** vs a **DV set by the GM** based on how reasonable the request is: trivial **DV10**, reasonable **DV13**, difficult **DV15**, outrageous **DV17+**.",
      "If the NPC has a strong reason to resist, the GM may instead make it **opposed**: **COOL + Persuasion + 1d10** vs the NPC's **COOL + Concentration + 1d10**.",
      "Good roleplay, offering incentives, or leveraging information the NPC cares about can grant a **+1 to +3 bonus** at GM discretion.",
      "Trying to persuade someone who has already refused the same request in this scene imposes a **-2 penalty** or may be impossible.",
      "Success means the NPC is convinced or at least willing to cooperate. It does **not** make them a loyal ally or override self-preservation."
    ],
    "topic": "Social"
  },
  {
    "id": "intimidate",
    "title": "Player tries to intimidate someone",
    "tags": [
      "intimidate",
      "threaten",
      "scare",
      "interrogation",
      "cool",
      "bully",
      "coerce",
      "fear"
    ],
    "icon": "😨",
    "steps": [
      "Player describes the threat — verbal, physical, or implied (brandishing a weapon, etc.).",
      "Roll **COOL + Interrogation + 1d10** vs the target's **COOL + Concentration + 1d10** (opposed roll).",
      "If the target is clearly outmatched (outnumbered, at gunpoint), the GM may grant the intimidator a **+2 to +4 bonus**.",
      "On **success**, the target is cowed and will comply with reasonable demands. They may flee, surrender information, or back down.",
      "On **failure**, the target calls the bluff. They may become hostile, escalate, or simply refuse — GM decides based on the NPC.",
      "Intimidation does **not** create loyalty. A successfully intimidated NPC will likely betray or sabotage the player at the first safe opportunity."
    ],
    "topic": "Social"
  },
  {
    "id": "bribe",
    "title": "Player offers a bribe",
    "tags": [
      "bribe",
      "bribery",
      "money",
      "payoff",
      "grease",
      "cool",
      "corrupt",
      "pay off"
    ],
    "icon": "💵",
    "steps": [
      "Player states who they are bribing and how much they are offering. The amount matters — context determines what's appropriate.",
      "Roll **COOL + Bribery + 1d10** vs a **DV set by the GM**: petty favor **DV10**, look the other way **DV13**, serious risk to the NPC **DV15**, career/life-ending risk **DV17+**.",
      "The **amount of money** modifies the roll: offering significantly more than expected grants **+1 to +3**. Offering insultingly little imposes **-2 or auto-fail**.",
      "Some NPCs are **unbribable** (ideologues, corporate loyalists being watched, people who hate the player). The GM should telegraph this.",
      "On **success**, the NPC accepts the bribe and performs the favor. On **failure**, the NPC refuses — and may report the attempt or demand more.",
      "Guideline amounts: street-level favor **50-100eb**, corp guard looking away **500eb**, serious risk **1,000eb+**, betraying an employer **5,000eb+**."
    ],
    "topic": "Social"
  },
  {
    "id": "disguise",
    "title": "Player wants to disguise themselves",
    "tags": [
      "disguise",
      "impersonate",
      "costume",
      "personal grooming",
      "tech",
      "appearance",
      "identity",
      "blend"
    ],
    "icon": "🎭",
    "steps": [
      "Player describes the disguise: are they just changing appearance, or impersonating a specific person?",
      "Creating the disguise: roll **TECH + Personal Grooming + 1d10** vs **DV13** for a generic disguise (different look) or **DV17** for impersonating a specific person.",
      "The disguise holds until someone has reason to scrutinize the player. At that point, the observer rolls **INT + Human Perception + 1d10** vs the original disguise check result.",
      "If impersonating someone the observer **knows personally**, the observer gets a **+2 to +4 bonus** to see through it.",
      "Proper materials (wigs, makeup kit, wardrobe) are required. Without them, the DV increases by **+2** or the attempt may be impossible.",
      "Maintaining a disguise while acting: if the player needs to talk or behave as the impersonated person, they may also need **COOL + Acting** checks at GM discretion."
    ],
    "topic": "Social"
  },
  {
    "id": "lie-detect",
    "title": "Detecting if someone is lying",
    "tags": [
      "lie",
      "detect",
      "truth",
      "deception",
      "human perception",
      "read",
      "bluff",
      "insight"
    ],
    "icon": "🤔",
    "steps": [
      "When a player suspects an NPC is lying (or vice versa), this is an **opposed check**.",
      "The liar rolls **COOL + Acting + 1d10** (for outright deception) or **EMP + Conversation + 1d10** (for subtle misdirection/half-truths).",
      "The detector rolls **EMP + Human Perception + 1d10** against the liar's result.",
      "If the detector **wins**, they sense something is off — the GM describes a tell (nervous tick, inconsistency, too-smooth delivery). They know the NPC is being deceptive.",
      "If the detector **loses**, the lie is convincing. The GM gives no indication of deception.",
      "The GM should only call for this check when the lie is plausible. Absurd lies may auto-fail regardless of the roll."
    ],
    "topic": "Social"
  },
  {
    "id": "repair-item",
    "title": "Repairing broken gear or weapons",
    "tags": [
      "repair",
      "fix",
      "broken",
      "tech",
      "basic tech",
      "weaponstech",
      "maintenance",
      "gear"
    ],
    "icon": "🔧",
    "steps": [
      "Determine the item's **Price Category** to find the repair DV: Cheap/Everyday **DV9**, Costly **DV13**, Premium **DV17**, Expensive **DV21**, Very Expensive **DV24**, Luxury **DV29**.",
      "Roll **TECH + appropriate Skill + 1d10** vs the DV. Use **Weaponstech** for weapons, **Basic Tech** for general items, **Cybertech** for cyberware, or the relevant Vehicle Tech skill.",
      "Repair time depends on Price Category: Cheap **1 hour**, Costly **6 hours**, Premium **1 day**, Expensive **1 week**, Very Expensive **2 weeks**, Luxury **1 month**.",
      "Materials cost money — generally **10-25% of the item's original price** for repair materials.",
      "On a **failed check**, the item is not repaired and the time is wasted. Materials may also be consumed at GM discretion.",
      "A Tech with **Field Expertise** can jury-rig an item to working condition as an Action (lasts **10 min per Maker Rank**, then reverts to broken)."
    ],
    "topic": "Combat"
  },
  {
    "id": "craft-something",
    "title": "Tech wants to craft or invent something",
    "tags": [
      "craft",
      "build",
      "create",
      "invent",
      "fabricate",
      "maker",
      "tech",
      "manufacture"
    ],
    "icon": "⚒",
    "steps": [
      "Only characters with the **Maker** role ability (Tech role) can fabricate or invent items.",
      "Determine the item's **Price Category**. The GM sets this (minimum Expensive for inventions). This sets the DV and time: Cheap **DV9/1hr**, Costly **DV13/6hr**, Premium **DV17/1day**, Expensive **DV21/1wk**, V.Expensive **DV24/2wk**, Luxury **DV29/1mo**.",
      "For **Fabrication**: roll **TECH + repair Skill + Fabrication Expertise Rank + 1d10** vs the DV. Materials cost one Price Category lower than the item.",
      "For **Invention**: roll **TECH + repair Skill + Invention Expertise Rank + 1d10** vs the DV. Requires GM approval of the concept. Materials cost full Price Category.",
      "For **Upgrades**: roll **TECH + repair Skill + Upgrade Expertise Rank + 1d10** vs the DV. Can add option slots, lower Humanity Loss, make concealable, raise weapon quality, etc.",
      "On **failure**, materials are consumed and the time is wasted. The Tech can try again with fresh materials."
    ],
    "topic": "Combat"
  },
  {
    "id": "pick-lock",
    "title": "Picking a lock",
    "tags": [
      "lock",
      "pick lock",
      "lockpick",
      "door",
      "break in",
      "bypass",
      "tech",
      "security"
    ],
    "icon": "🔓",
    "steps": [
      "Player needs a **lockpick set** or improvised tools (at GM-imposed penalty) to attempt this.",
      "Roll **TECH + Pick Lock + 1d10** vs a **DV set by the lock quality**: cheap lock **DV10**, standard lock **DV13**, high-security **DV15**, corporate/military **DV17+**.",
      "Picking a lock takes roughly **1 minute** under calm conditions. In combat or under pressure, it costs **1 Action per attempt**.",
      "On **failure**, the lock remains locked. The player can retry, but some high-security locks may **jam after a failed attempt** or trigger an alarm at GM discretion.",
      "For **electronic locks**, use **TECH + Electronics/Security Tech + 1d10** instead. These may also require specific tools or a Cyberdeck.",
      "Brute force alternative: the player can try to **destroy the lock or door** by attacking it. Doors have HP based on material (wood **5-20 HP**, metal **25-50 HP**)."
    ],
    "topic": "Combat"
  },
  {
    "id": "hack-electronics",
    "title": "Hacking a non-NET electronic device",
    "tags": [
      "hack",
      "electronics",
      "security tech",
      "bypass",
      "tech",
      "camera",
      "alarm",
      "terminal"
    ],
    "icon": "🔌",
    "steps": [
      "This covers devices not connected to a NET Architecture: standalone cameras, alarms, electronic locks, terminals, etc.",
      "Roll **TECH + Electronics/Security Tech + 1d10** vs a **DV set by the device**: consumer-grade **DV13**, professional security **DV15**, corporate/military **DV17**, cutting-edge **DV21+**.",
      "The character needs physical access to the device (or its wiring/control panel). This may require opening a panel or reaching the device itself.",
      "Electronics/Security Tech is an **x2 cost skill** — it costs double IP to improve. Not everyone will have it.",
      "Success means the character can disable, reprogram, or bypass the device. The GM determines what is possible based on the device.",
      "Failure means the device is not bypassed. Alarms or security systems may **trigger on a failed attempt** if the GM decides the system is sophisticated enough."
    ],
    "topic": "Combat"
  },
  {
    "id": "cover-rules",
    "title": "How cover works in detail",
    "tags": [
      "cover",
      "hide",
      "barrier",
      "material",
      "lean out",
      "shield",
      "protection",
      "concealment"
    ],
    "icon": "🧱",
    "steps": [
      "A character is **in cover** if fully behind something that can stop a bullet. If the attacker has **any line of sight**, the target is **not in cover** — there is no partial cover.",
      "Cover has HP by material: **Steel 50/25** (thick/thin), **Stone 40/20**, **Bulletproof Glass 30/15**, **Concrete 25/10**, **Wood 20/5**, **Plaster 15/0** (thin plaster is NOT cover).",
      "Common examples: engine block **50 HP**, car door **25 HP**, concrete barricade **25 HP**, tree **20 HP**, overturned table **5 HP**, sofa **15 HP**.",
      "To shoot from behind cover, the character must **lean out** — this means they are no longer in cover and can be targeted normally that turn.",
      "Cover can be **destroyed** by attacking it directly. At **0 HP**, the cover is gone. Excess damage from destroying cover is **lost** (does not pass through), except with **explosives**.",
      "Shields (Bulletproof Shield **10 HP**, 100eb) work like portable cover. When attacked by a visible target, interpose the shield — it absorbs the full attack. At 0 HP, destroyed."
    ],
    "topic": "Combat"
  },
  {
    "id": "suppressive-fire-detail",
    "title": "Someone uses suppressive fire",
    "tags": [
      "suppressive fire",
      "suppress",
      "area denial",
      "autofire",
      "pin down",
      "cover fire",
      "ammo"
    ],
    "icon": "💥",
    "steps": [
      "Requires a weapon with the **Suppressive Fire** capability (SMGs, Heavy SMGs, Assault Rifles). Costs a **full Action** and **10 bullets** (not the whole magazine). If you don't have 10 bullets remaining, you can't use Suppressive Fire.",
      "Everyone on foot within **25m**, **out of cover**, and in your **line of sight** is affected.",
      "Each affected target must roll **WILL + Concentration + 1d10** vs the attacker's **REF + Autofire Skill + 1d10** (opposed roll, not a static DV).",
      "Targets who **fail** must use their next **Move Action** to get into cover. If one Move Action is insufficient, they must also use the **Run Action** to reach cover.",
      "Suppressive Fire deals **no damage**. Its only effect is forcing targets to move to cover.",
      "Targets **already in cover** when Suppressive Fire is declared are **not affected**."
    ],
    "topic": "Combat"
  },
  {
    "id": "shotgun-shells",
    "title": "How shotgun shell spread works",
    "tags": [
      "shotgun",
      "shells",
      "spread",
      "scatter",
      "shoulder arms",
      "blast",
      "close range"
    ],
    "icon": "💣",
    "steps": [
      "A shotgun firing **Shotgun Shells** (not slugs) fires a spread of pellets that hits multiple targets at close range.",
      "Roll **REF + Shoulder Arms + 1d10** vs a flat **DV13** regardless of range (max range 6m/yds).",
      "On a hit, every target **in front of you within 6m/yds** (3 squares) that you can see takes **3d6 damage**. Roll damage once for all targets.",
      "Aimed Shots **cannot** be made with Shotgun Shells — only with slug rounds.",
      "Targets with **REF 8+** can individually attempt to dodge the spread.",
      "Shotgun Shells are very effective at **close range** but have a maximum range of **6m/yds**. Beyond that, use slug rounds."
    ],
    "topic": "Combat"
  },
  {
    "id": "dual-wield",
    "title": "Can you fire two weapons at once?",
    "tags": [
      "dual wield",
      "two weapons",
      "two guns",
      "akimbo",
      "rof",
      "dual",
      "offhand"
    ],
    "icon": "🔫",
    "steps": [
      "You **cannot** fire two **1 ROF** weapons in the same Action. You can only make a maximum of **2 Attack Checks** per Action.",
      "If you have a **2 ROF** weapon (like a pistol), you can make **2 attacks** with it in one Action. You may split these attacks across movement.",
      "To use two weapons in the same turn: fire a **2 ROF weapon** for both attacks, OR fire a **1 ROF weapon** with your Action and accept that you only get one shot.",
      "You **can** hold a weapon in each hand, but only to swap between them quickly (drawing/dropping is free). Actually attacking with both in one Action requires 2 ROF on at least one weapon.",
      "There is **no off-hand penalty** in Cyberpunk Red. If your weapon is 2 ROF, you get 2 attacks regardless of which hand holds it.",
      "For melee: the same rules apply. **2 ROF melee weapons** allow 2 strikes per Action. You cannot attack with two 1 ROF melee weapons in the same Action."
    ],
    "topic": "Combat"
  },
  {
    "id": "reload",
    "title": "How reloading works",
    "tags": [
      "reload",
      "magazine",
      "ammo",
      "ammunition",
      "action cost",
      "clip",
      "out of ammo"
    ],
    "icon": "🔄",
    "steps": [
      "Reloading a weapon costs **1 Action**. The character fully replaces the magazine/clip with a fresh one.",
      "The character must have a **spare loaded magazine** available. If they don't, they cannot reload.",
      "After reloading, the weapon is at **full ammo capacity**. Partially spent magazines retain their remaining ammo if the player tracks it.",
      "Drawing an easily accessible weapon is **not an Action**, but stowing one **is an Action**. So swapping to a fresh weapon may be faster than reloading.",
      "Bows and crossbows **never need a Reload Action** — they are loaded as part of the attack. Basic arrows are retrievable after combat.",
      "Tip: keep track of ammo carefully with Autofire and Suppressive Fire, as these chew through rounds very fast (3-4 per Autofire attack, full magazine for Suppressive Fire)."
    ],
    "topic": "Combat"
  },
  {
    "id": "running-away",
    "title": "Disengaging from combat / fleeing",
    "tags": [
      "run",
      "flee",
      "escape",
      "disengage",
      "retreat",
      "withdraw",
      "running away",
      "chase"
    ],
    "icon": "🏃",
    "steps": [
      "On your turn, you get a **Move Action** (MOVE x 2 m/yds) for free, plus you can use your **Action to Run** (another MOVE x 2 m/yds). Total: **MOVE x 4 m/yds per turn**.",
      "There is **no opportunity attack** or disengagement penalty in Cyberpunk Red. You can simply move away from a melee opponent on your turn.",
      "Enemies may still have **held actions** or can chase on their turns. A fleeing character needs to get out of weapon range or line of sight.",
      "If trying to outrun a pursuer over multiple turns, the GM can call for an **opposed check**: **DEX + Athletics + 1d10** vs the pursuer's **DEX + Athletics + 1d10**. Higher MOVE stat gives an advantage.",
      "Getting into a **vehicle** requires an Action (Get into Vehicle) and another Action to start it (Start Vehicle). On the turn you start a vehicle, you jump to the top of the Initiative Queue.",
      "If grabbed/grappled, you must **break free first**: **DEX + (Brawling or Athletics) + 1d10** vs attacker's **DEX + Brawling + 1d10**."
    ],
    "topic": "Combat"
  },
  {
    "id": "surprise-attack",
    "title": "Ambush / surprise round rules",
    "tags": [
      "surprise",
      "ambush",
      "stealth",
      "sneak attack",
      "unaware",
      "initiative",
      "first strike"
    ],
    "icon": "🗡",
    "steps": [
      "If attackers achieve surprise (targets are unaware), they get a **free round of actions** before initiative is rolled.",
      "To set up an ambush, the attackers must be hidden: roll **DEX + Stealth + 1d10** vs each target's **INT + Perception + 1d10**.",
      "If the ambushers win, the targets are **unaware**. The ambushers get one full turn each (Move + Action) before combat formally begins.",
      "After the surprise round, roll **initiative normally** (REF + 1d10). The combat proceeds in standard order from round 2 onward.",
      "Targets caught in a surprise round **cannot dodge, block, or take any defensive actions** during that round.",
      "If the stealth check **fails**, the targets spot the ambush and initiative is rolled normally — no surprise round occurs."
    ],
    "topic": "Combat"
  },
  {
    "id": "combat-drugs",
    "title": "Using drugs mid-combat",
    "tags": [
      "drugs",
      "combat",
      "airhypo",
      "mid-fight",
      "stim",
      "boost",
      "action cost",
      "inject"
    ],
    "icon": "💉",
    "steps": [
      "Administering a drug via **Airhypo** to a willing target (including yourself) costs **1 Action**.",
      "To drug an **unwilling target**, make a **Melee Weapon Attack** with the Airhypo. On a hit, instead of dealing damage, the drug is administered.",
      "Drug effects are **immediate** — the Primary Effect kicks in on the same turn the drug is administered.",
      "Common combat drugs: **Black Lace** (ignore Seriously Wounded penalties, 2d6 Humanity Loss -- no stat bonuses), **Synthcoke** (+1 REF, paranoid ideation -- does NOT ignore Seriously Wounded), **Stim** (Medtech pharmaceutical, ignore Seriously Wounded 1hr).",
      "Multiple doses of the same drug **extend** the Primary Effect by its full duration. They do not stack the bonus.",
      "**Rapidetox** (Medtech pharmaceutical) immediately purges all drug effects, including both Primary and Secondary effects, plus poisons and intoxicants."
    ],
    "topic": "Drugs"
  },
  {
    "id": "black-ice-encounter",
    "title": "Netrunner hits Black ICE (step by step)",
    "tags": [
      "black ice",
      "net combat",
      "netrunner",
      "ice",
      "program",
      "cyberdeck",
      "brain damage",
      "encounter"
    ],
    "icon": "❄",
    "steps": [
      "When a Netrunner enters a floor with Black ICE lying in wait, immediately roll: **Interface + Speed bonus + 1d10** vs **Black ICE SPD + 1d10**.",
      "If the **Black ICE wins**, it gets the first hit: the Netrunner (or a random active Program) suffers its Effect immediately. The ICE enters the Initiative Queue at the top.",
      "If the **Netrunner wins**, they act first. They can attack (Zap for **1d6 brain/REZ damage**, or use an offensive Program), use Slide to flee, or Jack Out.",
      "NET combat resolution: **Interface + Program ATK + 1d10** vs **Black ICE DEF + 1d10**. On a hit, apply the Program's Effect (damage to REZ). At **0 REZ**, the Black ICE is **Derezzed**.",
      "Black ICE attacks back each turn: **Black ICE ATK + 1d10** vs **Netrunner's Interface + 1d10**. Anti-Personnel ICE deals **brain damage** (2d6 or 3d6 depending on type) directly to the Netrunner's HP.",
      "Black ICE **chases** the Netrunner through the entire Architecture until Derezzed or the Netrunner uses **Slide** (Interface + 1d10 vs ICE Perception + 1d10) to escape. Slide only works on Non-Demon ICE.",
      "If the Netrunner's HP reaches **0 from brain damage**, they are **brain-dead**. No Death Save — they are permanently gone."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "jack-out-emergency",
    "title": "Emergency jack out from the NET",
    "tags": [
      "jack out",
      "emergency",
      "disconnect",
      "net",
      "escape",
      "brain damage",
      "netrunner",
      "bail"
    ],
    "icon": "⚡",
    "steps": [
      "**Safe Jack Out**: costs **1 NET Action**. The Netrunner cleanly disconnects from the Architecture. All controlled nodes are released. All Programs deactivate.",
      "Safe Jack Out **removes you from the NET** entirely. Black ICE stops chasing. You can re-enter on a future turn by Jacking In again.",
      "**Unsafe (Forced) Jack Out**: happens when forced by certain Black ICE (Giant, Kraken) or enemy Programs (DeckKRASH). The Netrunner suffers all effects of Black ICE on every floor between their current position and the exit.",
      "During an unsafe Jack Out, the Netrunner takes **brain damage from each piece of Black ICE** they pass through on the way out. This can easily be fatal.",
      "A Netrunner who is **Superglued** (by the Superglue program) **cannot Jack Out safely** for **1d6 rounds**. They are trapped in the Architecture.",
      "After Jacking Out (safe or unsafe), the Netrunner's Cyberdeck retains all installed Programs but all active Programs are deactivated. The Netrunner is fully in meatspace."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "crack-password",
    "title": "Cracking a password in the NET",
    "tags": [
      "password",
      "crack",
      "backdoor",
      "net",
      "interface",
      "netrunner",
      "bypass",
      "hack"
    ],
    "icon": "🔐",
    "steps": [
      "Passwords appear as obstacles on floors of a NET Architecture. The Netrunner must bypass them to proceed deeper.",
      "Use the **Backdoor** Interface Ability (costs **1 NET Action**): roll **Interface + 1d10** vs the **Password's DV** (set by the Architecture design, typically **DV6 to DV12**).",
      "If the Netrunner **knows the actual password** (obtained through social engineering, bribery, data theft, etc.), they pass **automatically** — no roll needed.",
      "On a **failed Backdoor check**, the password remains locked. The Netrunner can try again on their next NET Action, but some Architectures may **trigger an alarm** or activate additional Black ICE on failure.",
      "Multiple passwords may exist on different floors of the same Architecture. Each one requires a separate Backdoor check.",
      "Tip: obtaining passwords through meatspace investigation (interrogation, bribery, hacking a terminal) can save NET Actions and avoid risky rolls deep in hostile Architectures."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "repair-vehicle",
    "title": "Fixing a damaged vehicle",
    "tags": [
      "repair",
      "vehicle",
      "fix",
      "car",
      "bike",
      "tech",
      "mechanic",
      "sdp",
      "maintenance"
    ],
    "icon": "🚙",
    "steps": [
      "Vehicles use **SDP** (Structural Damage Points) instead of HP. At 0 SDP, a vehicle is **Destroyed** and cannot move until repaired.",
      "Determine the damage level: **Minor** (still runs, cosmetic/light damage) **DV9, 3 hours**. **Major** (significant damage, barely operational) **DV13, 1 day**. **Destroyed** (0 SDP, non-functional) **DV17, 1 week**.",
      "Roll **TECH + Land Vehicle Tech + 1d10** (or Air/Sea Vehicle Tech as appropriate) vs the DV.",
      "Repair materials cost money — roughly proportional to the vehicle's value. A destroyed vehicle requires significant parts investment.",
      "On **success**, the vehicle is restored to working condition (full SDP). On **failure**, the time and materials are wasted.",
      "A Tech with **Field Expertise** can jury-rig a vehicle as an Action (lasts **10 min per Maker Rank**, then breaks down again). Great for emergency escapes."
    ],
    "topic": "Vehicles"
  },
  {
    "id": "called-shot-tire",
    "title": "Shooting out tires or targeting vehicle parts",
    "tags": [
      "tire",
      "called shot",
      "vehicle",
      "aimed shot",
      "weak point",
      "engine",
      "car",
      "disable"
    ],
    "icon": "🎯",
    "steps": [
      "Targeting a vehicle **weak point** (tires, engine, etc.) requires a **-8 penalty** to the attack check, just like an Aimed Shot.",
      "Roll **REF + weapon skill + 1d10 - 8** vs the DV for range. If the vehicle is **moving**, you must beat at least **DV13** regardless.",
      "If the attack hits and damage gets through the vehicle's SP, the damage is **multiplied by 2** against the vehicle's SDP.",
      "Specific effects: destroying a **tire** halves the vehicle's speed and forces a **DV15 Control check** or the driver loses control. Hitting the **engine** can disable the vehicle entirely.",
      "If the vehicle is **stationary**, melee attacks against weak points **auto-hit** (no roll needed).",
      "Vehicle glass (windshields) has **no HP** and provides **no cover**. You can target occupants directly through glass without an aimed shot penalty."
    ],
    "topic": "Vehicles"
  },
  {
    "id": "poison-gas",
    "title": "Someone deploys poison or gas",
    "tags": [
      "poison",
      "gas",
      "toxic",
      "chemical",
      "resist",
      "body",
      "biotoxin",
      "environmental",
      "hazard"
    ],
    "icon": "☠",
    "steps": [
      "When exposed to poison (ingested, injected, or inhaled gas), the target must make a **Resist check**: **WILL + Resist Torture/Drugs + 1d10** vs the **Poison's DV**.",
      "Poison intensity and DVs: **Mild** (belladonna, toxic waste) **DV11, 1d6 damage**. **Strong** (arsenic) **DV13, 2d6 damage**. **Deadly** (biotoxin, designer poison) **DV15, 3d6 damage**.",
      "Poison damage goes **directly to HP** — armor does **not** protect against it.",
      "For **gas/airborne poisons**, everyone in the affected area must resist. Gas typically fills a **5m radius** per grenade/canister unless otherwise specified.",
      "A gas mask or sealed environment (helmet, vehicle) provides **complete immunity** to inhaled poisons and gases.",
      "**Rapidetox** (Medtech pharmaceutical) immediately purges poison effects. Otherwise, poison effects typically last until treated or the victim drops to 0 HP."
    ],
    "topic": "Environment"
  },
  {
    "id": "electricity",
    "title": "Electrocution damage rules",
    "tags": [
      "electricity",
      "electrocution",
      "shock",
      "taser",
      "wire",
      "damage",
      "stun",
      "environmental"
    ],
    "icon": "⚡",
    "steps": [
      "Contact with a live electrical source deals **6d6 damage** immediately. This damage **is soaked by armor** (unlike fire and poison).",
      "If the character **remains in contact** with the source, they take **6d6 damage again** at the end of each of their turns.",
      "To break free from an electrical source (if grabbed by a live wire, etc.), the character must spend an **Action** or be pulled free by someone else.",
      "The person pulling them free must make a **DEX + Athletics check (DV13)** or they also take the electrocution damage.",
      "Water and metal **conduct electricity** — standing in water when a source is live means everyone in the water takes damage. GM determines the area of effect.",
      "Cyberware and cyberlimbs are **not specifically more vulnerable** to electricity unless the GM rules otherwise for narrative purposes."
    ],
    "topic": "Environment"
  },
  {
    "id": "extreme-cold-heat",
    "title": "Environmental temperature effects",
    "tags": [
      "cold",
      "heat",
      "exposure",
      "weather",
      "environment",
      "freezing",
      "desert",
      "hypothermia"
    ],
    "icon": "🌡",
    "steps": [
      "Prolonged exposure to extreme temperatures (blizzard, desert, industrial furnace proximity) deals **1d6 damage direct to HP** at the end of each day of exposure.",
      "This damage **ignores armor** entirely. A character cannot heal naturally while still exposed to extreme conditions.",
      "**Proper equipment** (cold weather gear, cooling suits, environmental protection) **prevents** exposure damage entirely.",
      "In **combat-relevant cold** (cryo weapons, liquid nitrogen): GM may impose **2d6 damage per round** of direct exposure, armor may or may not apply depending on the source.",
      "Extreme heat (being near a fire, in a burning building): treated as the **fire rules** — **2 damage/turn** (mild), **4 damage/turn** (strong), **6 damage/turn** (deadly), direct to HP.",
      "The GM may also impose **skill check penalties** (-2 to -4) for operating in extreme temperatures without proper gear, reflecting numb fingers, heat exhaustion, etc."
    ],
    "topic": "Lifestyle"
  },
  {
    "id": "surgery-critical",
    "title": "Performing surgery on a critical injury",
    "tags": [
      "surgery",
      "critical injury",
      "medtech",
      "operate",
      "hospital",
      "treatment",
      "doctor",
      "fix"
    ],
    "icon": "🏥",
    "steps": [
      "Check the Critical Injury table for the specific injury's **Treatment DV** (ranges from **DV13 to DV17** depending on severity).",
      "Surgery requires the **Surgery skill** (Medtech role ability only) and a proper facility (clinic or hospital). Roll **TECH + Surgery + 1d10** vs the Treatment DV.",
      "Surgery takes a **minimum of 2 hours**. During this time, the patient must be stabilized and the surgeon cannot do anything else.",
      "On **success**, the Critical Injury is **permanently cured**. The patient begins healing normally.",
      "On **failure**, the surgery does not work — the injury persists. The surgeon can try again after another preparation period, but may need fresh materials.",
      "Some Critical Injuries (like Brain Injury, Lost Eye, Lost Limb) can only be treated with Surgery — **First Aid and Paramedic cannot fix them**. Replacement cyberware may be needed for lost parts."
    ],
    "topic": "Medical"
  },
  {
    "id": "cybersurgery",
    "title": "Installing cyberware",
    "tags": [
      "cyberware",
      "install",
      "surgery",
      "medtech",
      "humanity",
      "chrome",
      "implant",
      "cybernetics"
    ],
    "icon": "🦾",
    "steps": [
      "Only a **Medtech with the Surgery specialty** can install cyberware. The patient cannot install cyberware on themselves (except Mall-level installations).",
      "Installation DV depends on facility: **Mall DV13**, **Clinic DV15**, **Hospital DV17**. Installation surgery is **included at no extra charge** when purchasing new cyberware. Found cyberware installation costs: Mall 100eb, Clinic 500eb, Hospital 1,000eb.",
      "Roll **TECH + Surgery + 1d10** vs the Installation DV. On **failure**, the cyberware is **destroyed** and **2 hours** are wasted.",
      "On **success**, the cyberware is installed. The patient immediately suffers **Humanity Loss (HL)** — at character generation this is preset; after character gen, roll the dice listed (e.g., 2d6, 3d6).",
      "Each piece of cyberware reduces **max Humanity by 2** (borgware reduces it by **4**). If current Humanity drops to 0 or below, the character enters **cyberpsychosis** and becomes an NPC.",
      "Cyberware with **0 HL** on installation does not reduce max Humanity. Humanity can be restored via **Therapy sessions** (DV15, costs 500-1,000eb per session, restores 2d6 or 4d6)."
    ],
    "topic": "Medical"
  },
  {
    "id": "stabilize-dying",
    "title": "Stabilizing a mortally wounded character",
    "tags": [
      "stabilize",
      "mortally wounded",
      "dying",
      "first aid",
      "paramedic",
      "save",
      "emergency",
      "death"
    ],
    "icon": "❤",
    "steps": [
      "The dying character is at **0 HP** and making **Death Saves** each turn. Roll **1d10**: roll **under BODY** to survive. Rolling **10 always fails**. Each roll increases the Death Save Penalty by **+1**. You need to act fast.",
      "Move to the dying character (must be **adjacent/within reach**). Stabilizing costs **1 Action**.",
      "Roll **TECH + First Aid + 1d10 vs DV15** (Mortally Wounded stabilization DV) or **TECH + Paramedic + 1d10 vs DV15**.",
      "On **success**, the character is stabilized at **1 HP**. They are **Unconscious for 1 minute**, then wake up in the **Seriously Wounded** wound state. Death Save Penalty resets to Base.",
      "On **failure**, stabilization does not work. The character continues making Death Saves. You can try again on your next turn.",
      "Once stabilized, the character heals **BODY HP per full day** of rest. If they push themselves (strenuous activity), they gain no HP that day and need re-stabilization.",
      "Remember: every hit the dying character takes **before** you stabilize them increases their Death Save Penalty by +1 AND triggers a **Critical Injury**."
    ],
    "topic": "Medical"
  },
  {
    "id": "trauma-team-call",
    "title": "Calling Trauma Team",
    "tags": [
      "trauma team",
      "emergency",
      "medical",
      "response",
      "ambulance",
      "helicopter",
      "av4",
      "rescue"
    ],
    "icon": "🚑",
    "steps": [
      "The character (or their Agent + Biomonitor) must **call Trauma Team**. Calling costs **1 Action**. With a Biomonitor, it auto-calls when HP drops below BODY or a body part is lost.",
      "The character must have an **active Trauma Team subscription**: **Silver** (500eb/month, surgery extra) or **Executive** (1,000eb/month, surgery included).",
      "Roll **1d6** to determine response time in **combat rounds**. The Trauma Team arrives in an **AV-4** and joins at the **top of the Initiative Queue**.",
      "The team consists of: **1 Doctor** (Combat 10, SP11, HP20, Heavy Pistol, Cryopump, 2x Rapidetox), **1 Medical Assistant** (Combat 10, SP7, HP25, Bulletproof Shield), **1 Pilot** (Combat 10, SP7, HP25, Very Heavy Pistol), **2 Security Officers** (Combat 10, SP13, HP30, Assault Rifles).",
      "Trauma Team will stabilize and extract the subscriber. They will engage hostiles if necessary to reach their client. They do **not** treat non-subscribers.",
      "Plans are **transferable 1-for-1**: a subscriber can cover one friend instead of themselves, but not both simultaneously."
    ],
    "topic": "Combat"
  },
  {
    "id": "addiction",
    "title": "Drug addiction mechanics",
    "tags": [
      "addiction",
      "drugs",
      "secondary effect",
      "withdrawal",
      "therapy",
      "resist",
      "will",
      "dependent"
    ],
    "icon": "💔",
    "steps": [
      "Addiction occurs when a character **fails** the Secondary Effect roll after a drug wears off: **WILL + Resist Torture/Drugs + 1d10** vs the drug's **Secondary Effect DV** (DV13-DV17 depending on the drug).",
      "Once addicted, the Secondary Effect is **permanent** until treated with Therapy. The character suffers the listed penalty (e.g., REF -2 for Black Lace, INT -2 for Boost) at all times unless currently under the Primary Effect.",
      "An addicted character **craves the drug**. The GM should roleplay this — the character seeks out the drug, may spend money recklessly on it, and becomes irritable without it.",
      "Multiple doses of the same drug **extend** the Primary Effect duration but do not cause additional addiction rolls. The addiction roll happens only when the Primary Effect finally ends.",
      "To cure addiction: **Therapy** session. Costs **1,000eb** (500eb materials). Medtech rolls **TECH + Medical Tech + 1d10 vs DV15**. Takes 1 full week. On success, the addiction is cured.",
      "After being cured of an addiction, the character **automatically fails** Secondary Effect rolls for that drug for **1 year**. Avoid that drug."
    ],
    "topic": "Drugs"
  },
  {
    "id": "reputation-gain",
    "title": "How to gain or lose reputation",
    "tags": [
      "reputation",
      "fame",
      "infamy",
      "gain",
      "lose",
      "level",
      "street cred",
      "known",
      "recognition"
    ],
    "icon": "⭐",
    "steps": [
      "Reputation is **awarded by the GM** based on notable actions during gameplay. It is not purchased with IP or experience.",
      "A new Reputation only **replaces the old one** if the new Level is higher. You cannot have multiple Reputations at different levels.",
      "Reputation Levels: **1** (witnesses know), **2-3** (friends/acquaintances know), **4-5** (known beyond local area), **6-7** (in the news), **8-9** (regularly in headlines), **10** (worldwide fame).",
      "When meeting someone new, they roll **1d10**. If they roll **under** the character's Reputation Level, they have heard of them and react accordingly.",
      "**Negative Reputation** is possible: cowardice, betrayal, or humiliating failure can earn Reputation where people know you for your failures. This Reputation counts as **negative** in Facedowns.",
      "Reputation directly affects **Facedowns** (added to the COOL + 1d10 roll) and social interactions — high-Rep characters get respect, fear, or attention depending on what they are known for."
    ],
    "topic": "Social"
  },
  {
    "id": "facedown-detailed",
    "title": "Detailed facedown with all modifiers",
    "tags": [
      "facedown",
      "stare down",
      "intimidate",
      "reputation",
      "cool",
      "will",
      "duel",
      "social combat"
    ],
    "icon": "👁",
    "steps": [
      "A Facedown is a **duel of wills** before a fight or confrontation. The GM calls for one when two characters square off. It can only happen between **two individuals**, not groups.",
      "Both characters roll: **COOL + Reputation Level + 1d10** vs each other. If your Reputation is from **cowardice/failure**, your Reputation Level counts as **negative** (subtracted instead of added).",
      "On a **tie**, both are uncertain — nothing happens. Neither side gains an advantage and the standoff continues or shifts to something else.",
      "The **loser** must choose one of two consequences: **Back Down** (concede, lose face, cannot initiate another Facedown this encounter) OR take a **-2 to all Actions against the winner** until they have defeated the winner once.",
      "If the loser chooses to **escalate to violence** instead of accepting either consequence, initiative is rolled immediately and combat begins.",
      "The GM may apply situational modifiers: a character with a weapon drawn on an unarmed opponent might get **+2 to +4**. Outnumbered characters may suffer penalties. Environmental factors (home turf, audience) can also shift the balance."
    ],
    "topic": "Social"
  },
  {
    "id": "how-combat-works",
    "title": "How combat works (full round structure)",
    "tags": [
      "combat",
      "round",
      "turn",
      "initiative",
      "order",
      "structure",
      "combat flow",
      "how to fight"
    ],
    "icon": "⚔",
    "steps": [
      "When combat starts, every participant rolls **Initiative: REF + 1d10**. Highest goes first. Ties are broken by higher REF; if still tied, re-roll between the tied characters.",
      "Play proceeds in **descending initiative order**. Each participant takes one full Turn before the next person goes. Once everyone has gone, the **Round** ends (~3 seconds of game time).",
      "On your Turn you get: **1 Move Action** (move up to **MOVE x 2 meters**) and **1 Action** (attack, use a skill, reload, etc.). You can split your Move before and after your Action.",
      "After all turns are taken, the Round ends and a **new Round** begins. The GM can either keep the same initiative order or have everyone re-roll (GM choice, but keeping the same order is most common).",
      "Combat ends when one side is dead, surrenders, flees, or the conflict is otherwise resolved. There is no set number of rounds.",
      "Free things you can do on your turn without spending your Action: **speak a few sentences**, **drop an item**, **drop prone**, **draw a weapon into a free hand**."
    ],
    "topic": "Combat"
  },
  {
    "id": "shoot-someone",
    "title": "How to shoot someone (step by step)",
    "tags": [
      "shoot",
      "ranged attack",
      "gun",
      "pistol",
      "fire weapon",
      "how to shoot",
      "attack roll",
      "hit"
    ],
    "icon": "🔫",
    "steps": [
      "Pick your target. They must be within your weapon's maximum range and you must have line of sight.",
      "Determine the **range band** between you and the target, then look up the **DV** for your weapon type at that range (e.g., a Pistol at 13-25m is DV20). Use the Range DV Table.",
      "Roll **REF + Weapon Skill + 1d10** vs that DV. If the target has **REF 8+**, they can choose to dodge instead: you roll vs their **DEX + Evasion + 1d10**. If you meet or beat the DV, you hit.",
      "Roll **hit location: 1d6** (1 = Head, 2-5 = Body, 6 = Leg). If it was an Aimed Shot, skip this — you already chose the location (but took a **-8 penalty** to hit).",
      "Roll your weapon's **damage dice** (e.g., 3d6 for a Heavy Pistol). Subtract the target's **Armor SP** in the hit location. Remaining damage is subtracted from their **HP**.",
      "If any damage got through the armor, the armor is **ablated by 1 SP** (reduced permanently until repaired). Update the target's wound state if they crossed a threshold."
    ],
    "topic": "Combat"
  },
  {
    "id": "melee-attack",
    "title": "How to hit someone in melee",
    "tags": [
      "melee",
      "melee attack",
      "sword",
      "knife",
      "punch",
      "brawl",
      "close combat",
      "hit melee"
    ],
    "icon": "🗡",
    "steps": [
      "You must be within **2 meters** of your target (melee reach). Move to them using your Move Action if needed.",
      "Roll an **opposed check**: your **DEX + Melee Weapon Skill + 1d10** vs the defender's **DEX + Evasion + 1d10**. Defender wins ties.",
      "If you're using **Brawling** (fists, kicks), roll **DEX + Brawling + 1d10** instead. Brawling damage is based on your BODY stat (BODY 4-: 1d6, BODY 5-6: 2d6, BODY 7-10: 3d6, BODY 11+: 4d6).",
      "If you hit, **melee weapons ignore half the defender's armor SP** (round up). So SP 11 counts as SP 6. Brawling does NOT get this benefit — full armor applies.",
      "Roll hit location (**1d6**: 1=Head, 2-5=Body, 6=Leg), roll damage, subtract the (halved) armor, apply remaining damage to HP, and ablate armor by 1 if any damage got through.",
      "Most melee weapons are **ROF 2**, meaning you can make **two attacks** with your Action. Very Heavy melee weapons (chainsaw, sledgehammer) are ROF 1."
    ],
    "topic": "Combat"
  },
  {
    "id": "what-is-an-action",
    "title": "What counts as an Action",
    "tags": [
      "action",
      "actions",
      "what can I do",
      "turn actions",
      "action economy",
      "action list",
      "one action"
    ],
    "icon": "⚡",
    "steps": [
      "You get **one Action per turn**. This is separate from your Move Action (which is free). Your Action is the main thing you do on your turn.",
      "Common Actions: **Attack** (melee or ranged), **Reload** (swap magazine), **Use Skill** (pick a lock, first aid, etc.), **Stabilize** a dying character, **Get Up** from prone.",
      "Other Actions: **Grab** (grapple someone), **Choke** (while grappling), **Throw** (a grabbed person or object), **Run** (take a second Move Action), **Hold Action** (delay until a trigger).",
      "More Actions: **Use Object** (open a door, press a button), **Equip/Drop Shield**, **Get into Vehicle**, **Start Vehicle**, **Human Shield** (use a grabbed target as cover).",
      "**NOT Actions** (these are free): speaking a few sentences, dropping an item from your hand, dropping prone, drawing an easily accessible weapon into a free hand.",
      "You can **never take two Actions** on the same turn. If something says \"costs an Action,\" that's your entire Action for the turn. The one exception is ROF 2 weapons letting you attack twice within a single Attack Action."
    ],
    "topic": "Combat"
  },
  {
    "id": "what-is-a-move",
    "title": "What is a Move Action",
    "tags": [
      "move",
      "movement",
      "move action",
      "how far",
      "distance",
      "speed",
      "meters",
      "walk"
    ],
    "icon": "🏃",
    "steps": [
      "Every turn you get a **free Move Action**. You can move up to **MOVE stat x 2 meters** (or yards). A character with MOVE 6 can move 12 meters per turn.",
      "You can **split your movement** around your Action: move some meters, take your Action (e.g., shoot), then move the rest of your available distance.",
      "If you want to move **further**, you can spend your Action on **Run**: this gives you a second Move Action, for a total of **MOVE x 4 meters** in one turn. But then you can't attack or do anything else.",
      "Swimming, climbing, and jumping with a running start cost **2 meters of movement per 1 meter traveled**. A standing jump covers half the distance of a running jump.",
      "Armor penalties can reduce your MOVE stat. **Medium/Heavy Armorjack** gives -2 MOVE. **Flak/Metalgear** gives -4 MOVE. MOVE can be reduced to 0 (immobile).",
      "On a grid/battlemap, each square is **2m x 2m**. Your Move Action lets you move **MOVE squares** (including diagonals)."
    ],
    "topic": "Combat"
  },
  {
    "id": "rate-of-fire",
    "title": "How Rate of Fire (ROF) works",
    "tags": [
      "rof",
      "rate of fire",
      "rof 2",
      "rof 1",
      "attacks per turn",
      "two attacks",
      "fire rate"
    ],
    "icon": "🔄",
    "steps": [
      "Every weapon has a **Rate of Fire (ROF)** stat: either **1** or **2**. This tells you how many attack rolls you make when you use your Action to attack with that weapon.",
      "**ROF 2** (most pistols, light/medium/heavy melee weapons, brawling): you make **two separate attack rolls** with your Action. Each roll is independent — different targets are allowed.",
      "**ROF 1** (Very Heavy Pistol, SMG in single-shot, Assault Rifle in single-shot, Shotgun, Sniper Rifle, Very Heavy Melee): you make **one attack roll** and that consumes your entire Action.",
      "You can **split ROF 2 attacks across movement**: attack once, move, then attack again. Both attacks still happen within your single Action.",
      "You can **never make more than 2 attack rolls** per Action, regardless of circumstances. Dual-wielding two ROF 1 weapons does NOT let you fire both — pick one.",
      "Autofire and Suppressive Fire are their own special attack modes that consume your Action. They follow different rules (see autofire entry)."
    ],
    "topic": "Combat"
  },
  {
    "id": "initiative-explained",
    "title": "How initiative works in detail",
    "tags": [
      "initiative",
      "turn order",
      "who goes first",
      "ref",
      "combat order",
      "initiative roll",
      "speed"
    ],
    "icon": "🎿",
    "steps": [
      "At the start of combat, everyone rolls **REF + 1d10**. This is your initiative score. Highest score goes first, then descending order.",
      "If two characters **tie**, the one with the higher **REF stat** goes first. If REF is also tied, those characters re-roll between themselves.",
      "The GM can choose to either **keep the same initiative order** for the entire combat or **re-roll each round**. Keeping the same order is faster and more common.",
      "A character who uses the **Hold Action** can delay their turn until a specific trigger occurs or a specific initiative count. If the trigger never happens, they act at the end of the round.",
      "If a character **starts a vehicle**, they jump to the **top of the Initiative Queue** on the turn they start it.",
      "Surprise rounds happen **before** initiative is rolled. If ambushers succeed at stealth, they get a full free round of actions, then initiative is rolled normally for subsequent rounds."
    ],
    "topic": "Combat"
  },
  {
    "id": "hit-location",
    "title": "How hit location works",
    "tags": [
      "hit location",
      "body part",
      "where hit",
      "head",
      "body",
      "leg",
      "1d6",
      "location roll"
    ],
    "icon": "🎯",
    "steps": [
      "After a successful attack, roll **1d6** to determine where you hit: **1 = Head**, **2-5 = Body**, **6 = Leg**.",
      "The hit location determines **which armor SP** is used to reduce damage. Head armor and body armor can be different values.",
      "**Aimed Shots to the head** multiply damage through head armor by **x2** and any resulting Critical Injury uses the **Head table**. Random head hits (roll of 1) use head armor but do **NOT** automatically cause Critical Injuries -- the normal crit trigger (2+ dice showing 6) still applies.",
      "A hit to the **Body** is the most common result (66% chance). Body armor applies normally.",
      "A hit to the **Leg** uses body armor SP. If a Critical Injury is triggered (2+ dice showing 6), roll on the Body table.",
      "If the attacker made an **Aimed Shot** (at -8 to hit), they skip the location roll entirely and choose Head, Body, or Leg."
    ],
    "topic": "Combat"
  },
  {
    "id": "damage-calculation",
    "title": "Full damage calculation walkthrough",
    "tags": [
      "damage",
      "calculate damage",
      "armor",
      "hp",
      "wound state",
      "damage math",
      "how much damage"
    ],
    "icon": "💥",
    "steps": [
      "Step 1: Roll the weapon's **damage dice** (e.g., Heavy Pistol = 3d6, Assault Rifle = 5d6). This is the raw damage.",
      "Step 2: Determine the **hit location** (roll 1d6 or Aimed Shot). Check the target's **Armor SP** in that location.",
      "Step 3: Subtract the **Armor SP** from the raw damage. If the result is **0 or less**, no damage gets through and the armor is NOT ablated. Stop here.",
      "Step 4: If damage gets through, subtract the remaining amount from the target's **HP**. Then **ablate the armor by 1** (reduce its SP by 1 permanently until repaired).",
      "Step 5: Check the target's **wound state**. Below half HP (rounded up) = **Seriously Wounded** (-2 to all Actions). At 0 HP = **Mortally Wounded** (unconscious, Death Saves begin).",
      "Step 6: **Critical Injuries** occur when **two or more damage dice show 6**, regardless of wound state. Roll 2d6 on the Body or Head table. Mortally Wounded characters also suffer a Critical Injury every time they take damage from any attack."
    ],
    "topic": "Combat"
  },
  {
    "id": "range-bands",
    "title": "Range DVs quick reference",
    "tags": [
      "range",
      "range bands",
      "dv table",
      "distance",
      "how far",
      "weapon range",
      "range penalty"
    ],
    "icon": "📏",
    "steps": [
      "**Pistol DVs**: 0-6m: DV13, 7-12m: DV15, 13-25m: DV20, 26-50m: DV25, 51-100m: DV30. Cannot shoot beyond 100m.",
      "**SMG DVs** (single shot): 0-6m: DV15, 7-12m: DV13, 13-25m: DV15, 26-50m: DV20, 51-100m: DV25. Best at close-medium range.",
      "**Assault Rifle DVs**: 0-6m: DV17, 7-12m: DV16, 13-25m: DV13, 26-50m: DV15, 51-100m: DV20, 101-200m: DV25, 201-400m: DV30. Best at medium range.",
      "**Sniper Rifle DVs**: 0-6m: DV30, 7-12m: DV25, 13-25m: DV25, 26-50m: DV15, 51-100m: DV13, 101-200m: DV15, 201-400m: DV17, 401-800m: DV20. Terrible up close, best at long range.",
      "**Shotgun (Slug) DVs**: 0-6m: DV13, 7-12m: DV15, 13-25m: DV20, 26-50m: DV25, 51-100m: DV30, 101-200m: DV35. Shotgun Shells use a flat DV13 and hit everyone within 6m.",
      "**Autofire DVs** (separate table): SMG: 0-6m DV20, 7-12m DV17, 13-25m DV20, 26-50m DV25. Assault Rifle: 0-6m DV22, 7-12m DV20, 13-25m DV17, 26-50m DV20, 51-100m DV25."
    ],
    "topic": "Combat"
  },
  {
    "id": "critical-success",
    "title": "What happens on a natural 10 (critical success)",
    "tags": [
      "critical success",
      "natural 10",
      "exploding dice",
      "crit success",
      "nat 10",
      "roll 10"
    ],
    "icon": "🌟",
    "steps": [
      "When you roll a **natural 10** on the d10 for any skill check or attack roll, it's a **Critical Success**.",
      "Roll **another d10** and **add** the result to your total. So if your base was STAT 6 + Skill 4 + 10 = 20, and you roll a 7 on the extra die, your total is **27**.",
      "In the core rules, a **second 10 does NOT explode again**. You add the second roll and stop. (Some GMs house-rule infinite explosions, but RAW it's one extra roll.)",
      "Critical Successes apply to **all d10 rolls** in the game: attack rolls, skill checks, initiative, and defense rolls.",
      "This can turn impossible shots possible. Even a DV30 sniper shot can be hit with mediocre stats if the dice explode."
    ],
    "topic": "Combat"
  },
  {
    "id": "critical-failure",
    "title": "What happens on a natural 1 (critical failure)",
    "tags": [
      "critical failure",
      "natural 1",
      "fumble",
      "crit fail",
      "nat 1",
      "roll 1",
      "jam",
      "poor quality"
    ],
    "icon": "💢",
    "steps": [
      "When you roll a **natural 1** on the d10 for any skill check or attack roll, it's a potential **Critical Failure**.",
      "Roll **another d10** and **subtract** the result from your total. So if your base was STAT 5 + Skill 3 + 1 = 9, and you roll a 6 on the extra die, your total is **3**.",
      "A second 1 on the subtraction roll does **NOT** trigger another subtraction. You subtract the second roll and stop.",
      "For **Poor Quality weapons**: any time you roll a **natural 1** on an attack roll, the weapon **jams** immediately, regardless of the second roll. Unjamming costs an Action (no roll needed).",
      "Standard and Excellent quality weapons do **not** jam on a natural 1 — they just suffer the normal subtraction penalty."
    ],
    "topic": "Combat"
  },
  {
    "id": "dodge-bullets",
    "title": "Can you dodge bullets?",
    "tags": [
      "dodge",
      "dodge ranged",
      "dodge bullets",
      "evasion",
      "ref 8",
      "sandevistan",
      "kerenzikov"
    ],
    "icon": "💨",
    "steps": [
      "By default, **no**. Normal characters cannot dodge ranged attacks. The attacker simply rolls vs the static Range DV and if they beat it, they hit.",
      "Characters with **REF 8 or higher** CAN choose to dodge ranged attacks. When targeted, they roll **DEX + Evasion + 1d10** — the attacker must beat this instead of the Range DV.",
      "The defender can choose whether to dodge or not (sometimes the Range DV is higher than your Evasion roll would be, so letting the DV protect you is smarter).",
      "Cyberware that boosts REF (like **Kerenzikov** or **Sandevistan**) can push you to REF 8+, granting this ability.",
      "Dodging is a **reaction**, not an Action. You can dodge as many attacks as target you in a round. It does not use up your Action or Move.",
      "Autofire, Suppressive Fire, and Shotgun Shells can all be dodged by REF 8+ characters individually."
    ],
    "topic": "Combat"
  },
  {
    "id": "evade-melee",
    "title": "Dodging melee attacks",
    "tags": [
      "evade",
      "dodge melee",
      "evasion",
      "melee defense",
      "block",
      "parry",
      "defend melee"
    ],
    "icon": "🤼",
    "steps": [
      "All melee attacks are **opposed rolls**: attacker's **DEX + Melee Skill + 1d10** vs defender's **DEX + Evasion + 1d10**. The defender wins ties.",
      "You do **not** need REF 8+ to defend against melee. Everyone gets to roll Evasion against melee attacks.",
      "The Evasion skill is linked to **DEX**, not REF. A high DEX character is naturally harder to hit in melee.",
      "**Brawling** is only used to defend against **Grab** attempts, not regular melee attacks. For standard melee defense, Evasion is the skill used.",
      "If you are **prone**, you are easier to hit in melee — the attacker gets a bonus. You must spend an Action to Get Up before you can move."
    ],
    "topic": "Combat"
  },
  {
    "id": "go-prone",
    "title": "Going prone in combat",
    "tags": [
      "prone",
      "drop prone",
      "lying down",
      "get up",
      "stand up",
      "duck",
      "hit the deck"
    ],
    "icon": "⬇",
    "steps": [
      "Dropping **prone** is a **free action** — you can do it on your turn without spending your Action.",
      "While prone, ranged attacks against you from beyond **25 meters** suffer a penalty (GM discretion, typically the DV increases). You're a smaller target at distance.",
      "However, while prone you **cannot use your Move Action** to move until you stand up. Standing up from prone costs **your Action** (Get Up).",
      "A martial artist with a Martial Arts form can attempt the **Recovery** special move: roll vs DV13 to Get Up without spending an Action.",
      "Melee attackers have an **easier time** hitting a prone target. Prone is great against distant shooters but dangerous if enemies close to melee range."
    ],
    "topic": "Combat"
  },
  {
    "id": "take-cover",
    "title": "How to use cover in combat",
    "tags": [
      "cover",
      "take cover",
      "hide behind",
      "barrier",
      "lean out",
      "protection",
      "behind cover"
    ],
    "icon": "🧱",
    "steps": [
      "Move behind something that can stop a bullet (concrete wall, engine block, car door, etc.). You are now **in cover** and cannot be targeted by ranged attacks.",
      "There is **no partial cover** in Cyberpunk Red. You are either fully behind something (in cover) or you're not. If the attacker has any line of sight, you're NOT in cover.",
      "To **shoot from cover**, you must **lean out** — this means you are no longer in cover for that turn and can be targeted normally.",
      "Cover has **HP by material**: Steel 50/25 (thick/thin), Stone 40/20, Concrete 25/10, Wood 20/5. Enemies can destroy your cover by shooting it. At 0 HP, the cover is gone.",
      "Common cover HP: engine block **50 HP**, car door **25 HP**, concrete barricade **25 HP**, tree **20 HP**, overturned table **5 HP** (don't count on it).",
      "If cover is destroyed, excess damage is **lost** (does not pass through to you), except for **explosives** which can blast through."
    ],
    "topic": "Combat"
  },
  {
    "id": "human-shield",
    "title": "Using someone as a human shield",
    "tags": [
      "human shield",
      "meat shield",
      "grabbed",
      "hostage",
      "body shield",
      "cover person"
    ],
    "icon": "🛡",
    "steps": [
      "First, you must have a target **Grabbed** (use the Grab Action: **DEX + Brawling + 1d10** vs their **DEX + Brawling or Evasion + 1d10**).",
      "On a subsequent turn, spend your **Action** to equip the grabbed target as a **Human Shield**.",
      "While using a Human Shield, they are treated as **cover** against **Ranged Attacks only** (not melee or head-targeted Aimed Shots). Attacks hit the shield instead of you.",
      "The Human Shield takes the full damage of any attack that hits them. Their armor applies to protect them, not you.",
      "If the Human Shield **dies**, they become a **Corpse Shield** with HP equal to their **BODY stat**. It functions like a regular cover object until destroyed.",
      "The Human Shield can attempt to **break free** on their turn using the normal grapple escape rules: **DEX + (Brawling or Athletics) + 1d10** vs your **DEX + Brawling + 1d10**."
    ],
    "topic": "Combat"
  },
  {
    "id": "free-actions",
    "title": "What you can do for free on your turn",
    "tags": [
      "free action",
      "free",
      "no action",
      "speak",
      "drop item",
      "draw weapon",
      "bonus action"
    ],
    "icon": "🆓",
    "steps": [
      "**Speak**: you can say a few sentences on your turn for free. Full conversations or persuasion attempts may require an Action at GM discretion.",
      "**Drop an item**: letting go of something you're holding (dropping a weapon, releasing a grenade pin) is free.",
      "**Drop prone**: falling to the ground is free. Standing up costs an Action.",
      "**Draw a weapon**: pulling an easily accessible weapon into a free hand is free. But **stowing** a weapon (holstering it carefully) IS an Action.",
      "**Perception**: noticing obvious things around you is free. Active searching or detailed observation may require an Action (INT + Perception check).",
      "These free things can be done at any point during your turn, even in the middle of your Move Action or before/after your Action."
    ],
    "topic": "Combat"
  },
  {
    "id": "full-action-list",
    "title": "Complete list of all possible Actions",
    "tags": [
      "action list",
      "all actions",
      "what can i do",
      "combat actions",
      "possible actions",
      "options",
      "turn options"
    ],
    "icon": "📋",
    "steps": [
      "**Attack**: make a melee or ranged attack (ROF 2 weapons get two attack rolls). **Aim Shot**: attack at -8 to target a specific location.",
      "**Run**: take a second Move Action (total MOVE x 4m this turn). **Grab**: grapple someone, take their item, or break free. **Choke**: deal BODY damage to HP on a grabbed target (ignores armor). **Throw**: throw a grabbed person or held object.",
      "**Reload**: fully replace a magazine. **Get Up**: stand from prone. **Equip/Drop Shield**: ready or drop a bulletproof shield. **Human Shield**: equip a grabbed target as cover.",
      "**Use Skill**: attempt any skill check that can be done in ~3 seconds (first aid, pick lock under pressure, etc.). **Use Object**: open a door, press a button, activate a device.",
      "**Hold Action**: delay your Action until a specific trigger or initiative count. **Start Vehicle**: start a vehicle and jump to top of initiative. **Get into Vehicle**: climb into an unlocked vehicle.",
      "**Stabilize**: perform first aid on a Mortally Wounded character (TECH + First Aid + 1d10 vs DV15). **Vehicle Maneuver**: execute a dangerous driving maneuver. **Use NET Actions**: Netrunner only."
    ],
    "topic": "Combat"
  },
  {
    "id": "move-and-shoot",
    "title": "Can you move and shoot on the same turn?",
    "tags": [
      "move and shoot",
      "move then attack",
      "shoot and move",
      "split movement",
      "mobile combat"
    ],
    "icon": "🏃",
    "steps": [
      "**Yes.** You get a Move Action AND an Action every turn. Moving and attacking are separate — you can absolutely do both.",
      "You can **split your movement** around your Action: move 4 meters, fire your pistol, then move 8 more meters (if you have 12m of movement total).",
      "With **ROF 2 weapons**, you can even split attacks across movement: move, shoot once, move more, shoot again.",
      "There are **no penalties** for moving and shooting in the same turn. Your attack roll is not reduced by having moved.",
      "If you use your Action to **Run** instead of attack, you move a total of **MOVE x 4 meters** but cannot attack at all that turn."
    ],
    "topic": "Combat"
  },
  {
    "id": "delay-turn",
    "title": "Can you delay or hold your turn?",
    "tags": [
      "delay",
      "hold action",
      "hold turn",
      "ready action",
      "wait",
      "overwatch",
      "trigger"
    ],
    "icon": "⏸",
    "steps": [
      "**Yes.** You can use the **Hold Action** on your turn. You specify a **trigger condition** (e.g., \"I shoot the first person who comes through that door\") or a specific initiative count.",
      "When the trigger occurs, you interrupt the current turn and take your **held Action** immediately. After resolving it, play continues normally.",
      "If the trigger **never happens** by the end of the round, you can take your Action at the very end of the round, or lose it.",
      "You can Hold your **Action** but still use your **Move Action** normally on your turn. You don't have to hold both.",
      "Held Actions are commonly used for **overwatch** (guarding a doorway), **reaction shots** (shooting someone who tries to run), or **coordinated tactics** (acting simultaneously with an ally)."
    ],
    "topic": "Combat"
  },
  {
    "id": "multiple-attacks",
    "title": "When can you attack more than once?",
    "tags": [
      "multiple attacks",
      "two attacks",
      "extra attack",
      "attack twice",
      "second attack",
      "dual attack"
    ],
    "icon": "⚔",
    "steps": [
      "**ROF 2 weapons**: most pistols and most melee weapons (light, medium, heavy) have ROF 2, giving you **two attack rolls** per Action. Each is a separate roll that can target different enemies.",
      "**Autofire**: weapons with autofire capability (SMG, Heavy SMG, Assault Rifle) can spray bullets for massive damage in a single attack roll. This replaces normal attacks for the turn.",
      "**Martial Arts**: martial arts attacks are ROF 2, so martial artists get two strikes per Action.",
      "You can **never exceed 2 attack rolls** per Action, even with cyberware or other bonuses. Two is the hard cap.",
      "You **cannot** attack with two different ROF 1 weapons in the same Action. If you hold a shotgun and a sword, you pick one.",
      "Brawling is also **ROF 2** — you can punch twice per Action."
    ],
    "topic": "Combat"
  },
  {
    "id": "single-shot-vs-autofire",
    "title": "When to use single shot vs autofire",
    "tags": [
      "single shot",
      "autofire",
      "comparison",
      "which is better",
      "semi auto",
      "full auto",
      "tradeoff"
    ],
    "icon": "🔫",
    "steps": [
      "**Single shot** uses your weapon's normal skill (Handgun, Shoulder Arms) and the **standard Range DV table**. Damage = weapon's listed dice (e.g., 5d6 for Assault Rifle).",
      "**Autofire** uses the **Autofire skill** (a separate, expensive x2 skill) and the **Autofire Range DV table** (different, often harder DVs). Costs **10 bullets** per use.",
      "Autofire damage is calculated as **2d6 x (amount you beat the DV)**, up to a max multiplier (x3 for SMG, x4 for Assault Rifle). This can be **devastating** if you beat the DV by a lot.",
      "Single shot is **more reliable** — easier DVs, uses a cheaper skill, consumes only 1 bullet. Better at long range and when ammo is scarce.",
      "Autofire is **higher risk, higher reward**. If you have a high Autofire skill and are at optimal range, the damage can far exceed single shot. But if you barely beat the DV, damage is poor.",
      "Bottom line: invest in Autofire skill if you plan to use it. Otherwise, single shot is more consistent and ammo-efficient."
    ],
    "topic": "Combat"
  },
  {
    "id": "how-magazines-work",
    "title": "How magazines and ammo work",
    "tags": [
      "magazine",
      "mag",
      "ammo",
      "ammunition",
      "clip",
      "reload",
      "drum",
      "extended mag",
      "bullets"
    ],
    "icon": "🔫",
    "steps": [
      "Each weapon has a **magazine size**: Medium Pistol 12, Heavy Pistol 8, Very Heavy Pistol 8, SMG 30, Heavy SMG 40, Assault Rifle 25, Shotgun 4, Sniper Rifle 4.",
      "Each single shot consumes **1 bullet**. Each Autofire attack consumes **10 bullets**. Suppressive Fire dumps the **entire remaining magazine**.",
      "**Reloading** costs **1 Action**. You swap out the magazine for a full one. You must have a spare loaded magazine on your person.",
      "**Drum magazines** and **extended magazines** are available as upgrades from a Tech. They increase ammo capacity but may affect concealability.",
      "Bows and crossbows **never need to reload** — they are loaded as part of the attack. Basic arrows can be retrieved after combat.",
      "Tip: track ammo carefully. An Assault Rifle with Autofire can burn through 25 rounds in just 2-3 attacks. Always carry spare magazines."
    ],
    "topic": "Combat"
  },
  {
    "id": "weapon-jams",
    "title": "When weapons jam and how to fix them",
    "tags": [
      "jam",
      "weapon jam",
      "unjam",
      "poor quality",
      "malfunction",
      "misfire",
      "broken weapon"
    ],
    "icon": "🔧",
    "steps": [
      "**Poor Quality weapons** jam whenever you roll a **natural 1** on an attack roll. The weapon cannot fire until unjammed.",
      "**Standard and Excellent Quality weapons** do NOT jam on a natural 1. They still suffer the Critical Failure subtraction penalty, but the weapon keeps working.",
      "To **unjam** a weapon, spend **1 Action**. No roll is required — it automatically succeeds. The weapon is ready to fire again on your next turn.",
      "A jammed weapon **cannot be fired, used for autofire, or used for suppressive fire** until unjammed. It can still be used as an improvised melee weapon (GM discretion).",
      "This is why Poor Quality weapons are cheap (half price) but dangerous. In a firefight, a jam can be lethal if it happens at the wrong moment."
    ],
    "topic": "Combat"
  },
  {
    "id": "thrown-weapons",
    "title": "Throwing grenades, knives, and objects",
    "tags": [
      "throw",
      "grenade",
      "thrown weapon",
      "throwing",
      "lob",
      "knife throw",
      "athletics",
      "toss"
    ],
    "icon": "💣",
    "steps": [
      "Throwing uses **DEX + Athletics + 1d10** vs a DV based on range. Maximum throwing range is **25 meters**. Use the **Grenade Launcher DV table** for range DVs.",
      "**Grenades**: on a hit, deal grenade damage to the target and everyone in a **10m x 10m area** (5x5 squares on a grid). Roll damage once for all targets.",
      "If the grenade throw **misses**, it deviates. The GM determines where it lands (typically 1d10 meters in a random direction).",
      "**Thrown melee weapons** (knives, tomahawks): deal their listed melee damage but do **NOT** halve the target's armor (only melee attacks in hand halve armor).",
      "Throwing an object costs your **Action**. Drawing a grenade or knife to throw is free (if easily accessible).",
      "REF 8+ targets can attempt to **dodge** thrown weapons and grenades, just like any ranged attack."
    ],
    "topic": "Combat"
  },
  {
    "id": "explosives-area",
    "title": "How explosive damage and area effects work",
    "tags": [
      "explosion",
      "explosive",
      "area damage",
      "blast radius",
      "grenade damage",
      "rocket",
      "aoe",
      "splash"
    ],
    "icon": "🔥",
    "steps": [
      "All explosive weapons (grenades, grenade launchers, rocket launchers) affect a **10m x 10m area** (5x5 squares) centered on the target/impact point.",
      "Roll damage **once** — all targets in the area take the **same damage**. Each target's armor reduces damage individually.",
      "Targets behind cover that the explosion damage **cannot destroy** are protected. If the damage would destroy the cover, targets behind it take full damage.",
      "REF 8+ targets can individually attempt to **dodge** the blast.",
      "Grenade Launcher deals **6d6**, Rocket Launcher deals **8d6**. Frag grenades typically deal **6d6** in the area.",
      "Explosive damage to **vehicles** works normally — apply damage vs the vehicle's SP and SDP. Vehicles do not take Critical Injuries but can be destroyed."
    ],
    "topic": "Combat"
  },
  {
    "id": "how-skill-checks-work",
    "title": "How skill checks work (the basic formula)",
    "tags": [
      "skill check",
      "how to roll",
      "basic roll",
      "stat skill",
      "check",
      "dice",
      "resolution",
      "core mechanic"
    ],
    "icon": "🎲",
    "steps": [
      "The core mechanic of Cyberpunk Red: **STAT + Skill + 1d10** vs a **target number**. That's it. Everything in the game uses this formula.",
      "The target number is either a **Difficulty Value (DV)** set by the GM for static tasks, or an **opponent's STAT + Skill + 1d10** for opposed checks.",
      "If your total **meets or exceeds** the DV, you succeed. In opposed checks, the **defender wins ties**.",
      "If you don't have the required Skill, you roll **STAT + 0 + 1d10** (just the stat and the die, no skill bonus).",
      "You can spend **LUCK points** before rolling to add +1 per point spent. Your LUCK pool refills at the start of each session.",
      "A natural **10** explodes (roll again, add). A natural **1** implodes (roll again, subtract). See the critical success/failure entries for details."
    ],
    "topic": "Skills"
  },
  {
    "id": "opposed-vs-static",
    "title": "When to use opposed vs static checks",
    "tags": [
      "opposed check",
      "static check",
      "vs dv",
      "vs person",
      "contested",
      "when to oppose",
      "roll type"
    ],
    "icon": "⚖",
    "steps": [
      "**Static check** (vs DV): use this when a character is acting against the environment, an object, or a task. Examples: picking a lock, climbing a wall, hacking a terminal, treating a wound.",
      "**Opposed check** (vs another person): use this when two characters are directly competing. Examples: lying to someone, sneaking past a guard, arm wrestling, chasing someone.",
      "In a **static check**, the GM sets a DV based on difficulty. The player rolls **STAT + Skill + 1d10** and needs to meet or beat the DV.",
      "In an **opposed check**, both sides roll **STAT + Skill + 1d10**. The higher total wins. **Ties go to the defender** (the person being acted upon).",
      "Common opposed checks: Persuasion vs Concentration, Stealth vs Perception, Acting vs Human Perception, Brawling vs Brawling (grapple), melee attack vs Evasion.",
      "The GM decides which type to use. Rule of thumb: if there's a living opponent actively resisting, it's opposed. If it's a task or obstacle, it's static."
    ],
    "topic": "Skills"
  },
  {
    "id": "difficulty-values",
    "title": "The DV scale (difficulty values)",
    "tags": [
      "dv",
      "difficulty value",
      "difficulty",
      "how hard",
      "dv scale",
      "target number",
      "dv chart"
    ],
    "icon": "📊",
    "steps": [
      "**Simple (DV 9)**: Most people can do this without thinking. Routine tasks under normal conditions.",
      "**Everyday (DV 13)**: Most people can manage this without special training. Requires some effort or focus.",
      "**Difficult (DV 15)**: Hard without training or natural talent. This is where untrained characters start to struggle.",
      "**Professional (DV 17)**: Takes actual professional training. Most NPCs without relevant skills will fail this.",
      "**Heroic (DV 21)**: Only the best of the best can pull this off. Requires high stats AND high skill.",
      "**Incredible (DV 24)** and **Legendary (DV 29)**: Olympic-level and beyond. Awe-inspiring feats that stories are written about. Virtually impossible without maxed stats, high skill, and good rolls."
    ],
    "topic": "Skills"
  },
  {
    "id": "complementary-skills",
    "title": "Can other players help? (assisting and complementary skills)",
    "tags": [
      "assist",
      "help",
      "teamwork",
      "complementary",
      "aid",
      "cooperation",
      "group check",
      "bonus"
    ],
    "icon": "🤝",
    "steps": [
      "**Complementary Skill**: if a character succeeds at a related skill check first, they can grant a **+1 bonus** to another character's subsequent skill check. This does not stack — only one +1 from complementary skills.",
      "Example: a character succeeds at a Library Search check to find blueprints, then grants +1 to another character's Pick Lock check on that building's door.",
      "The complementary skill must be **logically related** to the primary task. The GM decides if it applies.",
      "There is no formal \"Help Action\" in combat. Outside of complementary skills, the GM may allow situational bonuses (+1 to +3) for clever teamwork at their discretion.",
      "**Taking Extra Time**: if you spend **4x the normal time** on a task, you get a **+1 bonus**. This stacks with the complementary skill bonus.",
      "Multiple characters cannot all roll for the same task and take the best result — only one character makes the check, potentially with the +1 complementary bonus."
    ],
    "topic": "Skills"
  },
  {
    "id": "how-much-things-cost",
    "title": "Price categories and what things cost",
    "tags": [
      "price",
      "cost",
      "money",
      "eddies",
      "economy",
      "price category",
      "how much",
      "shopping",
      "eurobucks"
    ],
    "icon": "💰",
    "steps": [
      "**Cheap (10eb)**: bottled water, loose ammo, basic food, toiletries. The kind of stuff you buy at a vending machine.",
      "**Everyday (20eb)**: street food, basic clothing, leathers (SP4 armor), generic drugs, kibble rations for a week.",
      "**Costly (50eb)**: decent meal, melee weapons (knife, bat), medium pistol, kevlar vest (SP7), a night in a cheap hotel.",
      "**Premium (100eb)**: heavy pistol, SMG, light armorjack (SP11), medium armorjack, a basic cyberdeck (poor quality), bulletproof shield.",
      "**Expensive (500eb)**: assault rifle, shotgun, sniper rifle, heavy armorjack (SP13), flak armor, vehicle repairs, a decent apartment for a month.",
      "**Very Expensive (1,000eb)**: bodyweight suit (SP11, no penalty), standard cyberdeck, most cyberware installations. **Luxury (5,000eb)**: metalgear (SP18), high-end cyberware. **Super Luxury (10,000eb+)**: vehicles, exotic weapons, corporate-grade gear."
    ],
    "topic": "Equipment"
  },
  {
    "id": "getting-paid",
    "title": "Typical job pay ranges for gigs",
    "tags": [
      "pay",
      "payment",
      "job",
      "gig",
      "salary",
      "reward",
      "income",
      "fixer",
      "how much earned"
    ],
    "icon": "💵",
    "steps": [
      "**Starter gigs** (low risk, simple tasks): **100-500eb** per person. Examples: deliver a package, rough someone up, stand guard for a night.",
      "**Standard gigs** (moderate risk, some complexity): **500-1,000eb** per person. Examples: steal data from a small business, extract a person, investigate a disappearance.",
      "**Dangerous gigs** (high risk, significant opposition): **1,000-2,000eb** per person. Examples: hit a gang hideout, infiltrate a corporate facility, kidnap a mid-level exec.",
      "**Elite gigs** (extreme risk, major players involved): **2,000-5,000eb+** per person. Examples: steal from Arasaka, assassinate a corporate officer, run a major heist.",
      "Fixers with high Operator rank can negotiate **better pay** (+10% to +20% per rank). The Trading skill can also be used to haggle for more eddies.",
      "Monthly living expenses eat into earnings: a basic **Cargo Container** lifestyle is free but miserable, a **Conapt** costs around **1,000eb/month**, an **Apartment** runs **2,000-5,000eb/month**."
    ],
    "topic": "Equipment"
  },
  {
    "id": "netrun-step-by-step",
    "title": "Complete netrun procedure (step by step)",
    "tags": [
      "netrun",
      "hack",
      "net",
      "procedure",
      "jack in",
      "floor",
      "architecture",
      "step by step",
      "how to netrun"
    ],
    "icon": "🧠",
    "steps": [
      "Netrunner needs **Neural Link + Interface Plugs** (cyberware) and a **Cyberdeck** loaded with programs. They must be within **6m of an access point** connected to the target NET Architecture.",
      "**Jack In** (costs 1 NET Action): the Netrunner enters the Architecture and appears on the **top floor**. Their body remains in meatspace (vulnerable!).",
      "Each floor of the Architecture contains one element: a **Password** (Backdoor check to bypass), a **File** (data to grab), a **Control Node** (operate attached devices), or a **Black ICE / Program** (combat encounter).",
      "Each turn the Netrunner gets **meat Actions** (Move + Action in meatspace) AND **NET Actions** based on Interface Rank: **Rank 1-3 = 2, Rank 4-6 = 3, Rank 7-9 = 4, Rank 10 = 5**.",
      "To descend, spend NET Actions to move one floor at a time. At each floor, resolve the encounter — crack the Password, grab the File, use the Control Node, or fight the program.",
      "If a Password blocks you: **Backdoor Check** = Interface + 1d10 vs. the Password DV. Failure means you cannot pass — try again next turn.",
      "When you reach the **bottom floor**, you can use the **Virus** NET Action to leave lasting effects on the Architecture (DV set by GM, can require multiple NET Actions).",
      "To leave: **Jack Out** (1 NET Action) from any floor. If you Jack Out safely, you disconnect cleanly. If forced out (DeckKRASH, Black ICE effect), you suffer an **unsafe Jack Out** — take all effects of any Black ICE still active on your floor."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "net-actions-list",
    "title": "All NET Actions explained",
    "tags": [
      "net actions",
      "interface",
      "move",
      "use program",
      "jack out",
      "eye-dee",
      "pathfinder",
      "scanner",
      "slide",
      "virus",
      "zap",
      "cloak",
      "backdoor",
      "control"
    ],
    "icon": "⌨",
    "steps": [
      "**Jack In / Jack Out** (1 NET Action each): Enter or leave the Architecture. Unsafe Jack Out triggers all active Black ICE effects.",
      "**Backdoor** (1 NET Action): Break through a Password. Roll INT + Interface + 1d10 vs. Password DV. If you already know the password, you pass automatically.",
      "**Cloak** (1 NET Action): Hide your presence. Another Netrunner must beat your Cloak Check with Pathfinder to detect you. Without Cloak, your traces are found automatically.",
      "**Control** (1 NET Action): Operate a device attached via a Control Node (cameras, drones, turrets, doors, elevators). Each device operation is a separate NET Action. You lose control when you Jack Out.",
      "**Eye-Dee** (1 NET Action): Identify an unknown program or file. Roll INT + Interface + 1d10 vs. the program/file's DV to learn what it is.",
      "**Pathfinder** (1 NET Action): Reveal the \"map\" of the Architecture. You see a number of floors equal to your Check result, up to the first obstruction with a DV higher than your roll.",
      "**Scanner** (1 NET Action, meatspace): Find meatspace locations of access points to nearby NET Architectures. Higher roll = more found and at greater distances.",
      "**Slide** (1 NET Action): Flee combat with a single Non-Demon Black ICE. Roll Interface + 1d10 vs. Black ICE's Perception + 1d10. Success = escape to adjacent floor; Black ICE stops chasing. Only once per turn. Cannot be used preemptively.",
      "**Virus** (1 NET Action, lowest floor only): Leave a custom Virus to perform up to 2 actions/changes. DV set by GM. May require multiple NET Actions. DV to destroy the Virus = your Virus Check result.",
      "**Zap** (1 NET Action): Attack a program or enemy Netrunner. Roll INT + Interface + 1d10 vs. Program's DEF + 1d10 (or enemy Netrunner's INT + Interface + 1d10). Deals **1d6 damage** to program REZ or directly to Netrunner's brain.",
      "**Activate / Deactivate** (1 NET Action): Turn a program in your Cyberdeck on or off. Each program can only be activated once per Round."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "net-combat-round",
    "title": "NET combat round (vs program or Black ICE)",
    "tags": [
      "net combat",
      "black ice fight",
      "program combat",
      "rez",
      "brain damage",
      "netrunner combat"
    ],
    "icon": "⚡",
    "steps": [
      "When you encounter Black ICE on a floor, **roll Initiative**: your INT + Interface + Speed bonus + 1d10 vs. Black ICE's SPD + 1d10. Winner goes first.",
      "If the Black ICE wins Initiative, it attacks immediately. Anti-Personnel ICE deals damage directly to your **brain** (your regular HP pool). Anti-Program ICE targets one of your active programs.",
      "On your NET Actions, you can: **Zap** (INT + Interface + 1d10 vs. Black ICE's DEF + 1d10, dealing 1d6 REZ damage), **Use an Attack Program** (e.g., Sword deals 3d6 REZ to Black ICE; Banhammer deals 2d6), or **Slide** to flee.",
      "Black ICE is destroyed (\"Derezzed\") when its **REZ drops to 0**. Common REZ values: 15 (Raven, Scorpion, Wisp) to 25 (Giant, Kraken).",
      "Defensive programs help you survive: **Armor** lowers brain damage by 4 (once per netrun), **Shield** stops the first brain damage hit then Derezzes, **Flak** reduces ATK of Non-Black ICE to 0.",
      "Black ICE chases you through the Architecture until Derezzed or you successfully **Slide** away. It does NOT stop if you move to another floor without Sliding.",
      "If your HP (brain HP) hits **0 in the NET**, you are **brain-dead**. No Death Save — instant permanent death."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "net-control-nodes",
    "title": "What control nodes do",
    "tags": [
      "control node",
      "netrun",
      "camera",
      "drone",
      "turret",
      "door",
      "elevator",
      "operate",
      "hack device"
    ],
    "icon": "🎮",
    "steps": [
      "A **Control Node** is a floor element in a NET Architecture that is connected to physical devices — cameras, turrets, doors, locks, elevators, drones, alarms, etc.",
      "To use a Control Node, spend **1 NET Action** and make an **INT + Interface + 1d10** check vs. the Control Node's DV (set by the Architecture).",
      "Once you gain control, you can **operate** each attached device as a separate NET Action. Examples: turn off a camera, open a locked door, redirect a turret to fire at enemies, call an elevator.",
      "You maintain control of the node as long as you remain **Jacked In**. The moment you Jack Out (safely or not), you lose control and devices revert to default behavior.",
      "A **Demon** (special Black ICE) may be assigned to guard Control Nodes. Demons cannot fit in Cyberdecks and operate exclusively from the Architecture. One Demon per 6 floors.",
      "Control Nodes are one of the most tactically valuable targets in a netrun — hacking cameras and doors can make physical infiltration trivial for the rest of the team."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "defend-your-architecture",
    "title": "Your NET Architecture is being attacked",
    "tags": [
      "defend",
      "architecture",
      "home net",
      "net defense",
      "enemy netrunner",
      "intrusion"
    ],
    "icon": "🛡",
    "steps": [
      "If you own a NET Architecture (e.g., a crew's base), an enemy Netrunner can try to hack it the same way you hack theirs — by finding an access point within 6m and Jacking In.",
      "Your Architecture's defenses are its **Passwords** (DV barriers on floors) and any **Black ICE** you have installed on its floors. Arrange them strategically — hard passwords and lethal Black ICE deeper down.",
      "If you are Jacked In to your own Architecture when the intruder enters, you are alerted. You can move to the intruder's floor and fight them directly using **Zap** or your own programs.",
      "If you are NOT Jacked In, your Black ICE acts autonomously. Anti-Personnel ICE attacks the intruder on sight. Passwords block their progress. But no one is actively piloting your defenses.",
      "An intruder who reaches your Control Nodes can take over your cameras, locks, and turrets. An intruder who reaches the bottom floor can leave a **Virus** with lasting effects.",
      "Best defense: have a Netrunner on standby, install strong Passwords (DV15-17+), and layer Black ICE across multiple floors. Demons guard Control Nodes automatically."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "negotiate-pay",
    "title": "Negotiating job pay with a fixer",
    "tags": [
      "negotiate",
      "pay",
      "fixer",
      "haggle",
      "trading",
      "job",
      "money",
      "deal",
      "salary"
    ],
    "icon": "💰",
    "steps": [
      "When the Fixer offers a job, the pay is set by the GM. Players can try to **negotiate higher pay** using **Trading** skill.",
      "Fixer PCs have the **Haggle** ability (part of the Operator Role Ability). Haggle Check: **COOL + Trading + Operator Rank + 1d10** vs. the other party's **COOL + Trading + their Operator Rank (if also a Fixer) + 1d10**.",
      "Haggle deals scale with Operator Rank: **Rank 1-2** = 10% better price, **Rank 3-4** = buy 5 items get 1 free, **Rank 5-6** = Night Markets (all categories available), **Rank 7-8** = pay half now/half in 1 month for Luxury items, **Rank 9-10** = double pay for Dangerous Jobs.",
      "Non-Fixer PCs negotiate with a simple **COOL + Trading + 1d10** vs. the NPC Fixer's roll. Winning might earn a modest increase (10-15%) at GM discretion.",
      "Only **one Fixer Haggle** is allowed per transaction — the party can't all try individually.",
      "Pushing too hard can have consequences. If the GM decides the NPC is offended, they might pull the job, reduce future offers, or demand a favor in return."
    ],
    "topic": "Social"
  },
  {
    "id": "gather-information",
    "title": "Gathering intel before a job",
    "tags": [
      "gather",
      "information",
      "intel",
      "research",
      "library search",
      "streetwise",
      "investigate",
      "recon"
    ],
    "icon": "🔍",
    "steps": [
      "**Library Search** (INT + Library Search + 1d10): Research public/digital information. Use the Data Pool, old NET databases, or physical archives. DV9 for common knowledge, DV13 for obscure info, DV15 for buried/classified intel, DV17+ for corporate secrets.",
      "**Streetwise** (COOL + Streetwise + 1d10): Hit the streets and talk to contacts for word-of-mouth intel. DV9 to find common rumors, DV13 for useful leads, DV15 for closely guarded street knowledge.",
      "**Human Perception** (EMP + Human Perception + 1d10): Read someone during a conversation to detect lies, nervousness, or hidden motives. Opposed by the target's COOL + Acting + 1d10.",
      "**Persuasion / Conversation** (COOL + Persuasion or EMP + Conversation + 1d10): Convince NPCs to share what they know. DV depends on how willing they are and what you're asking.",
      "A **Fixer's Contacts** (Operator ability) can provide leads automatically depending on the Fixer's Rank and Reach. Higher Rank = more powerful contacts with better info.",
      "Combine methods for best results: Library Search for background, Streetwise for street-level intel, Human Perception to verify what you're told, and a Netrunner can hack for digital records."
    ],
    "topic": "Social"
  },
  {
    "id": "streetwise-check",
    "title": "Using Streetwise to find things on The Street",
    "tags": [
      "streetwise",
      "find",
      "black market",
      "illegal",
      "contacts",
      "services",
      "cool",
      "the street"
    ],
    "icon": "🌃",
    "steps": [
      "**Streetwise** = COOL + Streetwise + 1d10. This skill covers finding illegal goods, services, people, or information through the criminal underworld.",
      "DV9 (Simple): Find common street goods, locate a basic dealer, find a cheap ripperdoc, hear common rumors.",
      "DV13 (Everyday): Find specific illegal items (weapons, drugs), locate a reliable fence, get a referral to a mid-tier service provider.",
      "DV15 (Difficult): Find rare or restricted goods, track down a specific person in the Combat Zone, identify which gang controls a territory.",
      "DV17 (Professional): Source military-grade hardware, find a specific person who doesn't want to be found, get an introduction to a major player.",
      "DV21+ (Heroic): Locate someone under corporate protection, find out where a hidden stash is, source experimental tech.",
      "Streetwise checks take time — the GM should determine how long based on the difficulty. A simple query might take an hour; a major search could take a day or more."
    ],
    "topic": "Social"
  },
  {
    "id": "read-the-room",
    "title": "Reading social situations",
    "tags": [
      "read",
      "room",
      "human perception",
      "empathy",
      "detect lies",
      "social",
      "motives",
      "body language"
    ],
    "icon": "👁",
    "steps": [
      "**Human Perception** (EMP + Human Perception + 1d10) is the core skill for reading people. Use it to detect lies, gauge emotions, spot nervousness, or sense hidden hostility.",
      "To **detect a lie**: Roll EMP + Human Perception + 1d10 vs. the liar's **COOL + Acting + 1d10**. Success means you sense something is off. The GM decides how much you learn.",
      "To **read a room**: GM sets a DV. DV9 = obvious tension, DV13 = hidden unease or someone watching you, DV15 = subtle power dynamics or concealed weapons, DV17 = deeply hidden motives.",
      "Cyberware can help: **Voice Stress Analyzer** gives +2 to Human Perception & Interrogation checks. **Image Enhance** cybereyes give +2 to Perception (can help spot tells).",
      "This is a **passive** read — it doesn't alert the target that you're analyzing them, unlike Interrogation (which is active and obvious).",
      "If EMP has dropped due to cyberware (Humanity loss), Human Perception suffers. A chrome-heavy character literally has a harder time reading other people."
    ],
    "topic": "Social"
  },
  {
    "id": "make-a-contact",
    "title": "Making a new contact or ally",
    "tags": [
      "contact",
      "ally",
      "friend",
      "connection",
      "persuasion",
      "network",
      "favor",
      "reputation"
    ],
    "icon": "🤝",
    "steps": [
      "Making a contact is a **roleplay process**, not a single roll. The GM should require the player to establish a reason for the relationship — shared interests, mutual benefit, or a favor done.",
      "Initial approach typically requires a **COOL + Persuasion + 1d10** check (DV varies by NPC disposition: DV9 friendly, DV13 neutral, DV15 suspicious, DV17 hostile).",
      "A **Fixer** has a built-in advantage: the Operator Role Ability provides Contacts automatically at each Rank. Rank 1-2 gets local street-level contacts; Rank 5-6 gets major city players and politicos.",
      "Building the contact over time: repeated positive interactions, doing favors, paying for services, or sharing valuable information all deepen the relationship at GM discretion.",
      "**Reputation** matters. A character with high positive Reputation gets more respect and easier access. A character with negative Reputation (cowardice/failure) faces suspicion.",
      "Contacts are a two-way street — they will ask for favors in return. The GM should occasionally have contacts call in debts, creating hooks for future jobs or complications."
    ],
    "topic": "Social"
  },
  {
    "id": "install-cyberware-process",
    "title": "Full process of getting cyberware installed",
    "tags": [
      "cyberware",
      "install",
      "ripperdoc",
      "surgery",
      "medtech",
      "clinic",
      "implant",
      "chrome",
      "process"
    ],
    "icon": "🩺",
    "steps": [
      "**Step 1 — Find a provider**: A licensed Medtech (clinic/hospital) or a street Ripperdoc. Hospital installs are safest but most expensive. Street ripperdocs are cheaper but riskier.",
      "**Step 2 — Pay costs**: Cyberware cost + installation cost. Installation costs by surgery type: Mall = 100eb, Clinic = 500eb, Hospital = 1,000eb. The cyberware item has its own separate cost.",
      "**Step 3 — Surgery**: Only a **Medtech** can perform installation surgery. Surgery DV: Mall-type = DV13, Clinic-type = DV15, Hospital-type = DV17. The Medtech rolls TECH + Surgery + 1d10 vs. the DV.",
      "**Step 4 — Failure consequences**: If surgery fails, the cyberware is **destroyed** and 2 hours are wasted. You must buy new cyberware and try again.",
      "**Step 5 — Humanity Loss**: Roll the HL dice listed for the cyberware (e.g., 2d6, 1d6, etc.) and subtract from your current Humanity. Recalculate your effective EMP (tens digit of current Humanity).",
      "**Self-installation**: You can only install cyberware on yourself if the typical installation is **Mall**-level. Anything Clinic or Hospital level requires another Medtech.",
      "At **character generation**, installation surgery is included free and HL is preset (not rolled). After character gen, you always roll HL."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "humanity-loss-calc",
    "title": "How to calculate humanity loss",
    "tags": [
      "humanity",
      "loss",
      "calculate",
      "emp",
      "cyberware",
      "humanity loss",
      "dice",
      "empathy"
    ],
    "icon": "🧩",
    "steps": [
      "Starting Humanity = **EMP x 10** (e.g., EMP 7 = 70 Humanity).",
      "When cyberware is installed (after character gen), roll the **HL dice** listed for that cyberware. Common values: 0 (fashionware), 3 (1d6/2), 7 (2d6), 14 (4d6).",
      "Subtract the rolled HL from your current Humanity. Example: 52 Humanity, install Kerenzikov (HL 14 = 4d6), roll 4d6 = 11, new Humanity = 41.",
      "Your effective **EMP** equals the **tens digit** of your current Humanity. 52 Humanity = EMP 5. 41 Humanity = EMP 4. 39 Humanity = EMP 3.",
      "Losing EMP affects all EMP-based skills: **Conversation, Human Perception, Persuasion, Acting**. More chrome = less human empathy.",
      "If Humanity drops **below 0** (not to 0, but below it), the character enters **cyberpsychosis** and becomes an NPC under GM control.",
      "Max recoverable Humanity is reduced by **2 per piece of cyberware** installed (4 per borgware). Cyberware with 0 HL does not reduce the max."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "going-cyberpsycho",
    "title": "What happens when EMP hits 0 (cyberpsychosis)",
    "tags": [
      "cyberpsychosis",
      "cyberpsycho",
      "emp zero",
      "humanity zero",
      "lose control",
      "npc",
      "psycho"
    ],
    "icon": "🤯",
    "steps": [
      "When a character's Humanity drops **below 0**, they enter **cyberpsychosis** — a dissociative disorder where they no longer see themselves or others as complete living beings.",
      "The character becomes an **NPC under GM control**. The player loses agency over that character. This is effectively a character death for gameplay purposes.",
      "Symptoms: lack of self-preservation, complete disregard for others, poor impulse control, explosive outbursts. The character becomes unpredictable and violent.",
      "The **Psycho Squad (MAX-TAC)** — specialized police — will hunt down cyberpsychos. They carry heavy weapons, Metalgear armor, and arrive in AV-4 assault vehicles. They end fights regardless of who started them.",
      "Prevention: monitor Humanity closely, consider **Therapy** sessions (Standard: regain 2d6 Humanity for 500eb; Extreme: regain 4d6 for 1,000eb). Avoid installing cyberware with high HL when Humanity is low.",
      "There is no quick fix for cyberpsychosis once it triggers. It is the ultimate consequence of over-chroming. The GM may allow a long-term recovery arc, but the core rules treat it as permanent removal from play."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "therapy-session",
    "title": "How a therapy session works",
    "tags": [
      "therapy",
      "humanity",
      "recover",
      "medtech",
      "mental health",
      "healing",
      "emp recovery"
    ],
    "icon": "💬",
    "steps": [
      "Therapy is performed by a **Medtech** using the **Medical Tech Skill**. The Medtech cannot perform therapy on themselves.",
      "Each therapy session takes **1 entire week**. During that week, both the doctor and the patient can do nothing else.",
      "**Standard Humanity Therapy**: Costs **500eb** (Expensive). Medtech rolls TECH + Medical Tech + 1d10 vs. DV15. On success, patient regains **2d6 Humanity**.",
      "**Extreme Humanity Therapy**: Costs **1,000eb** (Very Expensive). Medtech rolls TECH + Medical Tech + 1d10 vs. DV17. On success, patient regains **4d6 Humanity**.",
      "**Addiction Therapy**: Costs **1,000eb** (Very Expensive). DV15. On success, patient is freed from one addiction. However, they auto-fail Secondary Effect rolls for drugs for **1 year** afterward.",
      "Humanity cannot be recovered above the patient's **max Humanity**, which is reduced by **2 per installed cyberware** (4 per borgware). To fully recover, some chrome must be removed.",
      "If the Medtech **fails** the check, the week and materials are wasted. The patient can try again with another week of therapy."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "buy-a-vehicle",
    "title": "Vehicle costs and availability",
    "tags": [
      "vehicle",
      "buy",
      "cost",
      "car",
      "bike",
      "helicopter",
      "av-4",
      "purchase",
      "price"
    ],
    "icon": "🚗",
    "steps": [
      "Vehicles are purchased outright (no financing rules in core). Standard costs: **Roadbike** 20,000eb, **Compact Groundcar** 30,000eb, **High Performance Groundcar** 50,000eb.",
      "Air vehicles: **Gyrocopter** 20,000eb, **Helicopter** 50,000eb, **AV-4** 50,000eb. Piloting air vehicles uses **Pilot Air Vehicle** skill (costs x2 IP to improve).",
      "A **Nomad** gets vehicles through the **Moto** Role Ability (Family Motorpool). Each Rank increase adds a new stock vehicle of that Rank or upgrades an existing one. Only one Family Vehicle out at a time (swap next morning).",
      "Vehicle upgrades (Nomad exclusive at base): Bulletproof Glass, Run Flat Tires, Heavy Chassis, Combat Plow (no ram damage), Vehicle Heavy Weapon Mount (Rank 5), Hover Upgrade (Rank 5), AV-4 Engine (Rank 7).",
      "Alternative to buying: steal one (requires hotwiring or a Netrunner), borrow from a Fixer contact, or rent (GM sets terms).",
      "Living in a vehicle is **free housing** but requires a fully enclosed vehicle. Limited security unless the vehicle has the Security upgrade and bulletproof windows."
    ],
    "topic": "Vehicles"
  },
  {
    "id": "vehicle-hp-armor",
    "title": "Vehicle stat blocks (SDP, seats, speed)",
    "tags": [
      "vehicle",
      "stats",
      "sdp",
      "hp",
      "armor",
      "seats",
      "speed",
      "stat block",
      "structural damage"
    ],
    "icon": "📊",
    "steps": [
      "Vehicles use **SDP (Structural Damage Points)** instead of HP. At 0 SDP, the vehicle is **Destroyed** — no longer provides cover, cannot move until repaired.",
      "**Roadbike**: 35 SDP, 2 seats, MOVE 20, 100 MPH, 20,000eb. **Superbike**: 35 SDP, 2 seats, MOVE 60, 300 MPH, 100,000eb.",
      "**Compact Groundcar**: 50 SDP, 4 seats, MOVE 20, 100 MPH, 30,000eb. **High Performance Groundcar**: 50 SDP, 4 seats, MOVE 40, 200 MPH, 50,000eb.",
      "**Gyrocopter**: 35 SDP, 2 seats, MOVE 20, 100 MPH, 20,000eb. **Helicopter**: 60 SDP, 4 seats, MOVE 40, 200 MPH, 50,000eb. **AV-4**: 100 SDP, 6 seats, MOVE 40, 200 MPH, 50,000eb.",
      "Vehicle glass has **no SP** and provides **no cover**. Occupants can be targeted directly through glass. Bulletproof Glass (Nomad upgrade) changes this.",
      "Vehicle **Weak Points** (Aimed Shot at -8): if damage gets through, it is **multiplied by 2**. Stationary vehicles can be hit by Melee automatically (no roll). Moving vehicle = DV13.",
      "Ramming: both vehicle and target take **6d6 damage**. Everyone involved suffers the **Whiplash** Critical Injury. A Combat Plow upgrade negates ram damage to your vehicle."
    ],
    "topic": "Vehicles"
  },
  {
    "id": "aerial-combat",
    "title": "Aerial / AV combat rules",
    "tags": [
      "aerial",
      "air",
      "av-4",
      "helicopter",
      "gyrocopter",
      "flying",
      "pilot",
      "air combat",
      "aviation"
    ],
    "icon": "✈",
    "steps": [
      "Air vehicles (Gyrocopter, Helicopter, AV-4) use the same vehicle combat rules as ground vehicles, with the **Pilot Air Vehicle** skill instead of Drive Land Vehicle.",
      "**Landing** is a maneuver that requires an Action + Move Action, DV13. Failure = Lose Control (crash).",
      "**Aerobatic Maneuver** (loops, rolls, sharp dives): DV17. Failure = Lose Control at altitude, which is extremely dangerous.",
      "Passengers in air vehicles can fire at ground targets or other air vehicles normally, using standard ranged attack rules and range DVs.",
      "Pilot Air Vehicle skill costs **double IP** to improve, reflecting the difficulty and rarity of flight training in 2045.",
      "Air vehicles have the same SDP and can be damaged the same way. An AV-4 at 0 SDP while airborne crashes — everyone inside takes **6d6 damage** (as a Ram) plus a Whiplash Critical Injury. The GM may increase this for high-altitude crashes."
    ],
    "topic": "Vehicles"
  },
  {
    "id": "breaking-things",
    "title": "Breaking down a door or object",
    "tags": [
      "break",
      "door",
      "object",
      "destroy",
      "hp",
      "material",
      "bash",
      "smash",
      "breach",
      "melee"
    ],
    "icon": "🚪",
    "steps": [
      "Objects have **HP by material**. Approximate values: Wooden door = 20 HP, Metal door = 40 HP, Reinforced/security door = 60 HP, Concrete wall = 80+ HP, Glass = 5 HP.",
      "Melee attacks against objects **automatically hit** (no roll needed). Just roll damage. Subtract the object's SP (if any) from the damage dealt.",
      "Ranged attacks also auto-hit stationary objects. However, some materials resist certain damage types — the GM may rule that bullets do reduced damage to thick metal or concrete.",
      "Armor SP of materials (approximate): Wood = SP5, Sheet metal = SP10, Reinforced steel = SP15, Concrete = SP10-15.",
      "Using appropriate tools (sledgehammer, explosives, cutting torch) may double effective damage or bypass SP at GM discretion.",
      "Once the object's HP reaches 0, it is destroyed / breached. A door can be passed through, a wall has a hole, etc."
    ],
    "topic": "Environment"
  },
  {
    "id": "stealth-and-detection",
    "title": "Sneaking past someone (stealth vs perception)",
    "tags": [
      "stealth",
      "sneak",
      "hide",
      "perception",
      "detection",
      "dex",
      "int",
      "quiet",
      "infiltrate"
    ],
    "icon": "🥷",
    "steps": [
      "Stealth is an **opposed check**: Sneaker rolls **DEX + Stealth + 1d10** vs. Watcher's **INT + Perception + 1d10**.",
      "If the sneaker's total **beats** the watcher's total, they remain undetected. If the watcher wins, they spot the sneaker.",
      "Environmental modifiers: **Darkness/low light** gives -1 to Perception (or more at GM discretion). **Noisy environment** can mask sounds (+1-2 to Stealth). **Open ground with no cover** can give -2 or more to Stealth.",
      "Multiple watchers: roll separately for each one, or the GM can use the best Perception score among the group.",
      "Cyberware bonuses: **Tactile Boost** (detect motion within 20m) and **Image Enhance** (+2 Perception) help the watcher. **Grip Foot** (no climbing movement penalty) can help the sneaker reach unexpected routes.",
      "A failed Stealth check does not necessarily mean combat starts — the watcher might investigate, raise an alarm, or call for backup. The GM decides the reaction."
    ],
    "topic": "Environment"
  },
  {
    "id": "tracking-someone",
    "title": "Following or tracking someone",
    "tags": [
      "tracking",
      "follow",
      "trail",
      "hunt",
      "int",
      "urban",
      "wilderness",
      "pursue",
      "find"
    ],
    "icon": "👣",
    "steps": [
      "Tracking uses **INT + Tracking + 1d10** vs. a DV set by the GM based on conditions.",
      "Urban tracking (following someone through streets): DV13 for crowded areas (easy to blend in but hard to follow), DV15 for sparse areas (hard to stay hidden), DV17 for someone actively using counter-surveillance.",
      "Wilderness tracking (following physical trails): DV9 for fresh tracks in mud/snow, DV13 for older tracks on soft ground, DV15 for dry/hard terrain, DV17 for deliberately hidden trails.",
      "The tracker must make checks periodically (GM decides frequency — every hour, every few blocks, etc.). Failure means the trail is lost.",
      "**Olfactory Boost** chipware lets you track by scent, which can provide a bonus (+2) or allow tracking in situations where visual tracking fails.",
      "Counter-tracking: the target can roll **INT + Streetwise + 1d10** (urban) or **INT + Wilderness Survival + 1d10** (wilderness) to throw off pursuers. This becomes the DV the tracker must beat."
    ],
    "topic": "Environment"
  },
  {
    "id": "swimming-rules",
    "title": "Swimming checks by water condition",
    "tags": [
      "swimming",
      "swim",
      "water",
      "drown",
      "athletics",
      "dex",
      "ocean",
      "river"
    ],
    "icon": "🌊",
    "steps": [
      "Swimming uses **DEX + Athletics + 1d10** vs. a DV based on water conditions.",
      "Swimming movement costs **2 m/yds per 1 m/yd** traveled (double the normal movement cost).",
      "DV9 (Simple): Calm water, swimming pool, still lake.",
      "DV13 (Everyday): Mild current, choppy water, light waves.",
      "DV15 (Difficult): Strong current, river rapids, rough ocean.",
      "DV17+ (Professional/Heroic): Flood waters, storm seas, heavy undertow.",
      "Failure on a swimming check means you go under — see Drowning rules. You can hold your breath for **BODY x 10 seconds** (BODY x 1 Round). After that, you lose 1 HP per turn until rescued or dead.",
      "**Web Foot** cyberware removes the swimming movement penalty (paired, costs 500eb, Clinic install, HL 3)."
    ],
    "topic": "Environment"
  },
  {
    "id": "climbing-rules",
    "title": "Climbing checks by surface type",
    "tags": [
      "climbing",
      "climb",
      "athletics",
      "dex",
      "wall",
      "surface",
      "rope",
      "ladder"
    ],
    "icon": "⛰",
    "steps": [
      "Climbing uses **DEX + Athletics + 1d10** vs. a DV based on surface difficulty.",
      "Climbing movement costs **2 m/yds per 1 m/yd** traveled (double normal cost), same as swimming.",
      "DV9 (Simple): Ladder, knotted rope, heavily textured wall with many handholds.",
      "DV13 (Everyday): Chain-link fence, rough brick wall, tree with branches.",
      "DV15 (Difficult): Smooth brick, concrete wall with few handholds, wet surfaces.",
      "DV17+ (Professional): Smooth metal or glass surface, very slick/wet conditions, overhangs.",
      "Failure means you fall — take **falling damage** based on height: 1d6 per 3m/yds fallen (max typically set by GM). Characters fall 40 m/yds at the end of a Turn if falling in combat.",
      "**Grip Foot** cyberware removes the climbing movement penalty (paired, costs 500eb, Clinic install, HL 3)."
    ],
    "topic": "Environment"
  },
  {
    "id": "long-distance-travel",
    "title": "Travel times and road encounters",
    "tags": [
      "travel",
      "road",
      "distance",
      "encounter",
      "nomad",
      "drive",
      "highway",
      "long distance"
    ],
    "icon": "🛣",
    "steps": [
      "In Cyberpunk Red, long-distance travel uses **Narrative Speed** rather than combat MOVE. A Compact Groundcar does ~100 MPH on open highway, a High Performance does ~200 MPH.",
      "Night City to other major locations: the GM sets travel time based on distance and road conditions. The Interlock system does not provide a hex map — it is abstracted.",
      "Road encounters are at GM discretion. Common encounters: Nomad road gangs, Raffen Shiv (hostile Nomads), corporate convoys, broken-down travelers, roadblocks, wildlife.",
      "For random encounters, the GM can roll on the encounter tables or simply place appropriate obstacles. The **Open Road** environment is specifically called out as Nomad and road gang territory.",
      "Fuel is abstracted — the GM can impose fuel costs or scarcity as a plot device but there are no detailed fuel-tracking rules in the core book.",
      "A **Nomad's Moto** ability adds their Rank to Drive Land Vehicle, Pilot Air Vehicle, and Pilot Sea Vehicle checks. Nomads are the best long-distance travelers."
    ],
    "topic": "Environment"
  },
  {
    "id": "calling-for-help",
    "title": "Calling allies, backup, or Trauma Team",
    "tags": [
      "call",
      "help",
      "backup",
      "allies",
      "trauma team",
      "reinforcements",
      "agent",
      "biomonitor",
      "response"
    ],
    "icon": "📞",
    "steps": [
      "**Calling Trauma Team**: Costs **1 Action**. With an Agent + Biomonitor cyberware combo, the call is made **automatically** when HP drops below BODY or a body part is lost.",
      "Trauma Team arrives in **1d6 Rounds** after the call. They join at the **top of the Initiative Queue**. Team: Doctor (Combat Number 10), Medical Assistant, Pilot, 2 Security Officers — arrive in an AV-4.",
      "Trauma Team requires a **subscription**: Silver = 500eb/month (surgery treatments charged extra), Executive = 1,000eb/month (surgery included). Plans are transferable 1-for-1.",
      "**Calling other allies/contacts**: Costs 1 Action to make the call. Arrival time is at GM discretion based on distance and circumstances — could be minutes or hours.",
      "A **Lawman's Backup** (Role Ability) provides police backup that scales with Rank. Rank 1-2 gets beat cops; higher ranks get SWAT, detectives, or even MAX-TAC. Response time is typically 1d6+2 Rounds.",
      "An **Exec's Team** (Role Ability) provides corporate employees who can be deployed. Their capabilities depend on Exec Rank.",
      "In combat, calling for help uses your Action for that turn — you can still Move but cannot attack or perform other Actions."
    ],
    "topic": "Environment"
  },
  {
    "id": "what-happens-at-zero-emp",
    "title": "Detailed cyberpsychosis trigger and effects",
    "tags": [
      "zero emp",
      "cyberpsychosis",
      "trigger",
      "effects",
      "humanity",
      "emp",
      "psycho squad",
      "max-tac",
      "mental breakdown"
    ],
    "icon": "🔥",
    "steps": [
      "Cyberpsychosis triggers when Humanity drops **below 0** (not at 0 — AT 0 you are on the edge but still functional with EMP 0, unable to use EMP-based skills effectively).",
      "The moment Humanity goes negative, the **GM takes control** of the character. They become an NPC. The player must create a new character.",
      "The now-NPC cyberpsycho exhibits: **lack of self-preservation** (charges into danger), **complete disregard for others** (allies become targets), **poor impulse control**, and **explosive violent outbursts**.",
      "In-world response: **MAX-TAC (the Psycho Squad)** is dispatched. They are heavily armed (heavy weapons, Metalgear armor, AV-4 assault vehicles) and authorized to use lethal force. They end the situation by any means necessary.",
      "EMP 0 (Humanity 0-9) is a warning zone: the character can still function but has **EMP 0**, meaning all EMP-based skill checks (Conversation, Human Perception, Persuasion, Acting) use +0 from the stat. They are emotionally flat and disconnected.",
      "Prevention strategies: track Humanity carefully, use **medical-grade cyberware** (0 HL replacements) when possible, schedule regular **Therapy** (Standard 500eb/week for 2d6 recovery, Extreme 1,000eb/week for 4d6), and avoid unnecessary chrome.",
      "Reversal: the core rules do not provide a mechanical path back from full cyberpsychosis. Some GMs may allow a long-term story arc involving extensive therapy, cyberware removal, and roleplay — but this is entirely optional and outside RAW."
    ],
    "topic": "Combat"
  },
  {
    "id": "what-does-int-do",
    "title": "What does INT affect?",
    "tags": [
      "intelligence",
      "INT",
      "perception",
      "skills",
      "education",
      "tracking",
      "awareness",
      "knowledge"
    ],
    "icon": "🧠",
    "steps": [
      "**INT (Intelligence)** measures brightness, cleverness, awareness, and ability to learn. Rated **1-8** at character creation.",
      "INT is the linked STAT for all **Awareness skills**: Conceal/Reveal Object, Lip Reading, **Perception** (spotting hidden things, clues, traps), and Tracking.",
      "INT is the linked STAT for all **Education skills**: Accounting, Animal Handling, Bureaucracy, Business, Composition, Criminology, Cryptography, Deduction, Education, Gamble, Language, Library Search, Local Expert, Science, Tactics, and Wilderness Survival.",
      "Skill checks roll **INT + Skill Level + 1d10** vs a DV or opposed roll.",
      "Netrunners use **Interface + INT + 1d10** for NET combat against Black ICE and enemy programs.",
      "INT has no derived statistics but affects the largest number of skills in the game -- a low INT character struggles with knowledge, investigation, and awareness."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-does-ref-do",
    "title": "What does REF affect?",
    "tags": [
      "reflexes",
      "REF",
      "initiative",
      "ranged",
      "combat",
      "shooting",
      "dodge",
      "driving"
    ],
    "icon": "🎯",
    "steps": [
      "**REF (Reflexes)** measures response time and coordination. Rated **1-8** at character creation.",
      "**Initiative** = **REF + 1d10** each combat round. Higher goes first; ties re-roll.",
      "REF is the linked STAT for all **Ranged Weapon skills**: Handgun, Shoulder Arms, Autofire, Heavy Weapons, and Archery.",
      "REF is the linked STAT for all **Control skills**: Drive Land Vehicle, Pilot Air Vehicle (x2 cost), Pilot Sea Vehicle, and Riding.",
      "Characters with **REF 8+** can use Evasion to **dodge ranged attacks** -- otherwise you can only dodge melee.",
      "Ranged attack rolls: **REF + Weapon Skill + 1d10** vs the range DV for that weapon."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-does-dex-do",
    "title": "What does DEX affect?",
    "tags": [
      "dexterity",
      "DEX",
      "melee",
      "stealth",
      "athletics",
      "evasion",
      "dodge",
      "brawling"
    ],
    "icon": "🤸",
    "steps": [
      "**DEX (Dexterity)** measures physical competence, balance, and combat finesse. Rated **1-8** at character creation.",
      "DEX is the linked STAT for all **Fighting skills**: Brawling, Evasion, Martial Arts (x2 cost), and Melee Weapon.",
      "DEX is the linked STAT for all **Body skills** involving agility: Athletics (jumping, climbing, throwing), Contortionist, Dance, and **Stealth** (opposed by Perception).",
      "**Evasion** (dodging attacks) uses **DEX + Evasion + 1d10**. Only melee attacks can be dodged unless you have **REF 8+**.",
      "Melee attack rolls: **DEX + Melee Weapon (or Brawling) + 1d10** vs defender's **DEX + Evasion + 1d10**.",
      "Athletics is used for **thrown weapons**. Suppressive Fire is resisted by **WILL + Concentration** (not Athletics)."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-does-tech-do",
    "title": "What does TECH affect?",
    "tags": [
      "technique",
      "TECH",
      "crafting",
      "repair",
      "cyberware",
      "medical",
      "first aid",
      "electronics"
    ],
    "icon": "🔧",
    "steps": [
      "**TECH (Technique)** measures ability to manipulate tools and instruments. Not the same as REF. Rated **1-8** at character creation.",
      "TECH is the linked STAT for all **Technique skills**: Basic Tech, Cybertech, Weaponstech, Land/Air/Sea Vehicle Tech, Electronics/Security Tech (x2), Demolitions (x2), and more.",
      "**First Aid** (TECH-linked) stabilizes wounds and treats common Critical Injuries. All characters start with at least **+2** in First Aid.",
      "**Paramedic** (TECH-linked, x2 cost) treats all but the deadliest Critical Injuries.",
      "Repair checks use **TECH + appropriate repair Skill + 1d10** vs a DV based on item price category (Cheap DV9 up to Super Luxury DV29).",
      "Critical Injury treatment: **TECH + First Aid/Paramedic/Surgery + 1d10** vs the injury's Quick Fix or Treatment DV.",
      "Play Instrument is also TECH-linked for Rockerboy-adjacent characters."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-does-cool-do",
    "title": "What does COOL affect?",
    "tags": [
      "cool",
      "COOL",
      "social",
      "intimidation",
      "persuasion",
      "streetwise",
      "charisma",
      "trading"
    ],
    "icon": "😎",
    "steps": [
      "**COOL** measures ability to impress and influence people, charisma, and social poise. Rated **1-8** at character creation.",
      "COOL is the linked STAT for most **Social skills**: Bribery, Interrogation, Persuasion, Personal Grooming, Streetwise, Trading, and Wardrobe & Style.",
      "**Acting** (Performance skill) is also COOL-linked -- used for disguise, faking emotions, and assuming roles.",
      "Fixer's **Haggle Check** uses **COOL + Trading + Operator Rank + 1d10** in opposed rolls.",
      "Social skill checks: **COOL + Social Skill + 1d10** vs a DV or opposed roll. Streetwise is essential for finding illegal items and talking to the criminal element.",
      "COOL is separate from EMP -- COOL is about projecting confidence and influence, while EMP is about genuine empathy and reading people."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-does-will-do",
    "title": "What does WILL affect?",
    "tags": [
      "willpower",
      "WILL",
      "concentration",
      "resist",
      "torture",
      "drugs",
      "endurance",
      "hit points"
    ],
    "icon": "🔥",
    "steps": [
      "**WILL (Willpower)** measures determination, courage, and ability to face danger and stress. Rated **1-8** at character creation.",
      "WILL is used to calculate **Hit Points**: HP = **10 + (5 x average of BODY and WILL, rounded up)**. Higher WILL means more HP.",
      "WILL is the linked STAT for **Concentration** (focus, memory, mental control) and **Resist Torture/Drugs** (resisting interrogation, torture, and drug effects).",
      "**Endurance** (WILL-linked) lets you withstand harsh conditions and hardship over extended periods.",
      "Resist Torture/Drugs is rolled as **WILL + Resist Torture/Drugs + 1d10** -- critical for captured characters or those hit with chemical agents.",
      "WILL is part of the Mental Group alongside INT, COOL, and EMP."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-does-luck-do",
    "title": "How does LUCK work?",
    "tags": [
      "luck",
      "LUCK",
      "pool",
      "points",
      "reroll",
      "session",
      "spend",
      "refresh"
    ],
    "icon": "🍀",
    "steps": [
      "**LUCK** gives you a pool of points equal to your LUCK stat. Rated **1-8** at character creation.",
      "**Before rolling**, you can spend LUCK points from your pool to add **+1 to the roll per point spent**. You choose how many to spend.",
      "Spent LUCK points are gone until the pool **refills at the beginning of the next session**.",
      "LUCK can be spent on almost any d10 roll -- skill checks, attack rolls, initiative. However, **LUCK cannot be spent on Believability checks** (Media role ability).",
      "LUCK is a strategic resource: spend it when a roll truly matters, conserve it for critical moments later in the session.",
      "LUCK is the only stat in the Fortune Group -- it stands alone as your \"edge\" resource."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-does-move-do",
    "title": "What does MOVE affect?",
    "tags": [
      "movement",
      "MOVE",
      "speed",
      "distance",
      "run",
      "meters",
      "sprint",
      "tactical"
    ],
    "icon": "🏃",
    "steps": [
      "**MOVE** determines how fast you can move. Rated **1-8** at character creation.",
      "Each Turn you get a **Move Action**: move up to **MOVE x 2 meters/yards** (or MOVE squares on a grid, including diagonals).",
      "You can use your Action to **Run**, gaining a second Move Action for a total of **MOVE x 4 meters/yards** in one Turn.",
      "You can **split your Move Action** around your Action -- move some, attack, then move the rest.",
      "**Swimming, climbing, and jumping with a running start** cost **2 m/yds per 1 m/yd** actually traveled. Standing jump = half running jump distance.",
      "MOVE has no linked skills -- it purely determines your tactical movement speed in and out of combat."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-does-body-do",
    "title": "What does BODY affect?",
    "tags": [
      "body",
      "BODY",
      "hit points",
      "HP",
      "death save",
      "melee damage",
      "toughness",
      "carry"
    ],
    "icon": "💪",
    "steps": [
      "**BODY** measures size, toughness, and ability to stay alive. Rated **1-8** at character creation.",
      "BODY is used to calculate **Hit Points**: HP = **10 + (5 x average of BODY and WILL, rounded up)**. Example: BODY 6 + WILL 4 = average 5, so HP = 10 + 25 = **35 HP**.",
      "**Death Save** = your **BODY stat**. When Mortally Wounded (0 HP), roll d10 each turn -- roll **under BODY** to survive. A roll of 10 always fails.",
      "Each time you take additional damage while Mortally Wounded, **Death Save DV increases by 1** permanently until healed.",
      "**Seriously Wounded Threshold** = half your total HP, rounded up. Below this, you take **-2 to all Actions**.",
      "BODY is in the Physical Group alongside DEX and MOVE. It is arguably the most important stat for staying alive."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-does-emp-do",
    "title": "What does EMP affect?",
    "tags": [
      "empathy",
      "EMP",
      "humanity",
      "cyberpsychosis",
      "social",
      "cyberware",
      "human perception"
    ],
    "icon": "❤️",
    "steps": [
      "**EMP (Empathy)** measures ability to relate to and care for others. Rated **1-8** at character creation.",
      "Starting **Humanity = EMP x 10**. Example: EMP 6 = 60 Humanity points.",
      "As you install **cyberware**, you lose Humanity. Your effective EMP equals the **tens digit** of your current Humanity. E.g., 44 Humanity = EMP 4; drop to 39 = EMP 3.",
      "If Humanity drops **below 0**, the character enters **cyberpsychosis** and becomes an NPC under GM control.",
      "EMP is the linked STAT for **Conversation** (extracting info through careful talk) and **Human Perception** (reading facial expressions, detecting lies).",
      "EMP creates a tension: more cyberware makes you stronger but erodes your social skills and risks cyberpsychosis.",
      "Lost EMP can be restored through **Therapy** -- a week-long process performed by a Medtech."
    ],
    "topic": "Stats"
  },
  {
    "id": "how-is-hp-calculated",
    "title": "How to calculate HP",
    "tags": [
      "hit points",
      "HP",
      "health",
      "BODY",
      "WILL",
      "calculate",
      "wound threshold"
    ],
    "icon": "🩺",
    "steps": [
      "HP = **10 + (5 x average of BODY and WILL, rounded up)**.",
      "Step 1: Add BODY + WILL. Step 2: Divide by 2 and **round up**. Step 3: Multiply by 5. Step 4: Add 10.",
      "Example: BODY 6, WILL 5 -> average = 5.5, rounds up to 6 -> 6 x 5 = 30 -> 30 + 10 = **40 HP**.",
      "Quick reference: BODY 4 / WILL 4 = **30 HP**. BODY 6 / WILL 6 = **40 HP**. BODY 8 / WILL 8 = **50 HP**.",
      "**Seriously Wounded Threshold** = half your total HP, rounded up. Below this you take **-2 to all Actions** until healed above it.",
      "HP range at character creation (stats 2-8) goes from a minimum of **20 HP** (BODY 2, WILL 2) to a maximum of **50 HP** (BODY 8, WILL 8)."
    ],
    "topic": "Stats"
  },
  {
    "id": "how-does-luck-pool-work",
    "title": "LUCK pool mechanics",
    "tags": [
      "luck",
      "pool",
      "spend",
      "refresh",
      "session",
      "before roll",
      "bonus",
      "resource"
    ],
    "icon": "🎲",
    "steps": [
      "Your LUCK pool starts each session equal to your **LUCK stat** (1-8 at character creation).",
      "**Before rolling** any d10, declare how many LUCK points you want to spend. Each point adds **+1 to the total**.",
      "You must decide to spend LUCK **before** you roll -- you cannot spend it after seeing the result.",
      "Spent points are subtracted from your pool. Once your pool hits 0, no more LUCK until next session.",
      "The pool **fully refreshes at the start of each new game session**, regardless of how many points were spent.",
      "LUCK **cannot** be spent on Media Believability checks. It can be used on almost everything else: attacks, skill checks, initiative, and Death Saves."
    ],
    "topic": "Stats"
  },
  {
    "id": "what-can-rockerboy-do",
    "title": "What can a Rockerboy do?",
    "tags": [
      "rockerboy",
      "charismatic impact",
      "fans",
      "influence",
      "performance",
      "role ability",
      "social"
    ],
    "icon": "🎸",
    "steps": [
      "Role Ability: **Charismatic Impact** -- influence Fans through performance, art, rhetoric, or sheer presence.",
      "Convert non-fans by rolling **Charismatic Impact + 1d10** vs DV: Single Person **DV8**, Small Group (up to 6) **DV10**, Huge Group **DV12**.",
      "At **Rank 1-2**: play small local clubs, fans do small favors (drinks, rides). At **Rank 5-6**: large clubs, fans commit minor crimes, act as a personal posse.",
      "At **Rank 7-8**: small concert halls, fans risk their lives or commit minor crimes. At **Rank 9-10**: huge stadiums, international video, cult-like following that will riot or kill.",
      "On a **failed** Charismatic Impact check, you cannot ask the same favor from those fans for **one week**.",
      "Rockerboys could be musicians, poets, dancers, cult leaders, or political activists -- anyone who uses personal magnetism to move crowds."
    ],
    "topic": "Roles"
  },
  {
    "id": "what-can-solo-do",
    "title": "What can a Solo do?",
    "tags": [
      "solo",
      "combat awareness",
      "damage deflection",
      "precision attack",
      "fighter",
      "role ability",
      "mercenary"
    ],
    "icon": "⚔️",
    "steps": [
      "Role Ability: **Combat Awareness** -- allocate your total Rank in points across combat sub-abilities. Reallocate before combat, outside combat, or by spending an **Action** in combat.",
      "**Damage Deflection** (2/4/6/8/10 pts): reduce first damage taken each Round by 1/2/3/4/5.",
      "**Precision Attack** (3/6/9 pts): +1/+2/+3 to Attack checks. **Spot Weakness** (1 pt each): +1 per point to damage of first successful Attack per Round.",
      "**Initiative Reaction** (1 pt each): +1 per point to Initiative. **Threat Detection** (1 pt each): +1 per point to Perception checks.",
      "**Fumble Recovery** (4 pts): ignore critical failures (natural 1s) on attack rolls -- the 1 still counts as 1 but no extra d10 is subtracted.",
      "Example: A **Rank 6** Solo could split into Damage Deflection 1 (2 pts) + Spot Weakness 2 (2 pts) + Threat Detection 2 (2 pts)."
    ],
    "topic": "Roles"
  },
  {
    "id": "what-can-netrunner-do",
    "title": "What can a Netrunner do?",
    "tags": [
      "netrunner",
      "interface",
      "hacking",
      "NET",
      "cyberdeck",
      "programs",
      "role ability",
      "black ice"
    ],
    "icon": "💻",
    "steps": [
      "Role Ability: **Interface** -- Netrun through NET Architectures using a cyberdeck. NET Actions per Turn: Rank 1-3 = **2**, Rank 4-6 = **3**, Rank 7-9 = **4**, Rank 10 = **5**.",
      "**Backdoor**: break through Passwords. **Cloak**: hide your presence. **Control**: operate cameras, drones, turrets attached to the Architecture.",
      "**Eye-Dee**: identify data and its value. **Pathfinder**: reveal the Architecture's map. **Scanner**: find meatspace locations of access points.",
      "**Zap**: deal **1d6 damage** to a Program's REZ or directly to an enemy Netrunner's brain. **Slide**: slip away from one non-Demon Black ICE. **Virus**: leave a custom virus at the Architecture's core.",
      "Must be **jacked in** via Interface Plugs within **6m of an access point**. Move through floors one at a time, encountering Passwords, Files, Control Nodes, and Black ICE.",
      "If your brain HP (equal to regular HP) hits **0 in the NET**, you are **brain-dead**. NET combat is lethal."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "what-can-tech-do",
    "title": "What can a Tech do?",
    "tags": [
      "tech",
      "maker",
      "fabrication",
      "upgrade",
      "invention",
      "repair",
      "role ability",
      "crafting"
    ],
    "icon": "🛠️",
    "steps": [
      "Role Ability: **Maker** -- each time you increase Maker Rank, gain **1 Rank in two different Maker Specialties** of your choice.",
      "**Field Expertise**: add Rank to any TECH Skill Check. Can **jury-rig** items to perfect condition as an Action (lasts 10 min per Rank, then reverts).",
      "**Upgrade Expertise**: improve items -- lower Humanity Loss by 1d6, add option slots, make weapons concealable, raise weapon quality, add SP +1, etc. Roll **TECH + repair Skill + Rank + 1d10** vs DV.",
      "**Fabrication Expertise**: create items from materials **one price category lower** than normal. Same roll formula vs DV.",
      "**Invention Expertise**: invent entirely new items or upgrades. GM sets Price Category (minimum Expensive). Same roll formula vs DV.",
      "DVs scale by price: Cheap/Everyday **DV9** (1 hour), Costly **DV13** (6 hours), Premium **DV17** (1 day), Expensive **DV21** (1 week), Very Expensive **DV24** (2 weeks), Luxury+ **DV29** (1 month)."
    ],
    "topic": "Roles"
  },
  {
    "id": "what-can-medtech-do",
    "title": "What can a Medtech do?",
    "tags": [
      "medtech",
      "medicine",
      "surgery",
      "pharmaceuticals",
      "cryosystem",
      "healing",
      "role ability",
      "doctor"
    ],
    "icon": "🩺",
    "steps": [
      "Role Ability: **Medicine** -- each Rank increase lets you put 1 point into one of three specialties: Surgery, Pharmaceuticals, or Cryosystem Operation.",
      "**Surgery**: each point grants **2 points** in Surgery Skill (max 10). Only Medtechs can perform Surgery to treat the deadliest Critical Injuries and **install cyberware**.",
      "**Pharmaceuticals** (max 5 pts): each point grants +1 Medical Tech Skill and access to one drug: **Antibiotic** (+2 HP/day), **Rapidetox** (purge poisons), **Speedheal** (heal BODY+WILL HP immediately -- target must NOT be Mortally Wounded), **Stim** (ignore Seriously Wounded penalties 1hr), **Surge** (no sleep 24hrs).",
      "Synthesize pharmaceutical doses: **DV13 Medical Tech Check**, 200eb materials = doses equal to Medical Tech Skill level in 1 hour.",
      "**Cryosystem Operation** (max 5 pts): gain Cryopumps and Cryotanks to preserve dying patients. At 5 pts: 6 total Cryotanks, Cryopump holds 3 charges.",
      "Medtechs can also perform **Therapy** to restore lost Humanity/EMP -- takes 1 full week per session, cannot self-treat."
    ],
    "topic": "Roles"
  },
  {
    "id": "what-can-media-do",
    "title": "What can a Media do?",
    "tags": [
      "media",
      "credibility",
      "rumors",
      "audience",
      "reporter",
      "believability",
      "role ability",
      "journalist"
    ],
    "icon": "📰",
    "steps": [
      "Role Ability: **Credibility** -- determines your audience reach, access to sources, believability of stories, and impact of published work.",
      "**Rumors**: at least twice per week, GM secretly rolls **Credibility Rank + 1d10** vs passive DVs to see what rumors you pick up. Vague Rumor DV7, Typical DV9, Substantial DV11, Detailed DV13.",
      "You can also **actively investigate** rumors at higher DVs: Vague DV13, Typical DV15, Substantial DV17, Detailed DV21.",
      "At **Rank 1-2**: access local honchos, neighborhood audience, Believability 2/10. At **Rank 5-6**: access major City players, citywide audience, Believability 4/10.",
      "At **Rank 9-10**: access divisional Corp heads or world leaders, national/worldwide audience, Believability 6-7/10. Published stories can topple Megacorps.",
      "Verifiable evidence grants **+1** (single piece) or **+2** (4+ pieces) to Believability. **LUCK cannot be spent** on Believability checks."
    ],
    "topic": "Roles"
  },
  {
    "id": "what-can-exec-do",
    "title": "What can an Exec do?",
    "tags": [
      "exec",
      "teamwork",
      "corporate",
      "team members",
      "loyalty",
      "role ability",
      "management"
    ],
    "icon": "👔",
    "steps": [
      "Role Ability: **Teamwork** -- build a corporate team of NPCs who carry out tasks for you, controlled by the GM based on **Loyalty**.",
      "Team Members arrive at **Rank 3** (first), **Rank 5** (second), and **Rank 9** (third, max 3). Rolled from charts: Company Bodyguard, Covert Operative, Driver, Netrunner, or Technician.",
      "Corporate perks: **Rank 1** signing bonus (suit), **Rank 2** free Conapt, **Rank 6** Trauma Team Silver, **Rank 7** Beaverville House, **Rank 8** Trauma Team Executive, **Rank 10** McMansion/Luxury Penthouse.",
      "Team Loyalty starts at **1d6+1** (max 10). GM rolls **1d6 under Loyalty** for each task -- failure means refusal, botching, or betrayal. At 0 or below = **active betrayal**.",
      "Gain Loyalty: compliment work (+1), give bonus 200eb+ (+4), risk harm for them (+8). Lose Loyalty: berate (-2), ignore contribution (-4), abandon under fire (**-8**).",
      "Team members **cannot** wear armor heavier than Light Armorjack and **do not** improve Skills over time."
    ],
    "topic": "Roles"
  },
  {
    "id": "what-can-lawman-do",
    "title": "What can a Lawman do?",
    "tags": [
      "lawman",
      "backup",
      "police",
      "law enforcement",
      "reinforcements",
      "role ability",
      "authority"
    ],
    "icon": "🚨",
    "steps": [
      "Role Ability: **Backup** -- as an Action, roll **d10 equal to or under your Backup Rank** to call for reinforcements. Then roll **d6** for Rounds until arrival.",
      "**Rank 1-2**: 4 Corporate Security (Heavy Pistols, Kevlar, Combat# 8, 20 HP). **Rank 3-4**: 4 Local Beat Cops with 2 Groundcars (Combat# 10, 25 HP).",
      "**Rank 5-7**: 2 County Mounties (High Perf. Groundcar, Assault Rifles + Heavy Pistols, Heavy Armorjack, Combat# 14, 35 HP).",
      "**Rank 8**: 1 Recovery Zone Marshal (Superbike, VH Pistol + AR + Grenade Launcher, Flak armor, Combat# 16, 50 HP). **Rank 9**: 2 C-SWAT (AV-4, ARs + Rocket Launchers, Metalgear, Combat# 15, 35 HP).",
      "On a **d6 roll of 6**, backup arrives from the **next highest tier** instead. At Rank 10, a roll of 6 sends **two groups**.",
      "**Rank 10** agents (National/Interpol/FBI/Netwatch) stick around to investigate the case, respond to all related calls, and can use Combat Number for investigation Skills. **Abusing Backup** gets you fired or fined."
    ],
    "topic": "Roles"
  },
  {
    "id": "what-can-fixer-do",
    "title": "What can a Fixer do?",
    "tags": [
      "fixer",
      "operator",
      "contacts",
      "haggle",
      "night market",
      "deals",
      "role ability",
      "fence"
    ],
    "icon": "🤝",
    "steps": [
      "Role Ability: **Operator** -- four components: **Contacts**, **Reach**, **Haggle**, and **Grease**.",
      "**Reach** (what you can source): Rank 1-2 Cheap/Everyday items, Rank 3-4 up to Expensive, Rank 5-6 up to Expensive individually but can organize **Night Markets** (all categories available), Rank 7-8 up to Very Expensive, Rank 9 up to Luxury + **Midnight Markets** (invite-only), Rank 10 up to Super Luxury.",
      "**Haggle Check**: **COOL + Trading + Operator Rank + 1d10** vs target's opposed roll. Rank 1-2: 10% better price. Rank 5+: buy 5 get 1 free. Rank 7-8: pay half now, half in 1 month for Luxury items. Rank 10: double pay for Dangerous Jobs.",
      "**Contacts** scale with Rank: local honchos at Rank 1-2, Corp Execs at Rank 3-4, major City players at Rank 5-6, up to major world leaders at Rank 10.",
      "**Grease**: Rank 1-2 know your neighborhood. Rank 3-4 gain +1 culture and +1 language at Skill 4. By Rank 7-8: 6 total cultures and languages. Rank 10: blend with almost any group including secret societies.",
      "**Night Markets** (Rank 5+): open events with all price categories. **Midnight Markets** (Rank 9+): invite-only flash markets with 1d10+5 rare items and criminal underworld leadership."
    ],
    "topic": "Roles"
  },
  {
    "id": "what-can-nomad-do",
    "title": "What can a Nomad do?",
    "tags": [
      "nomad",
      "moto",
      "vehicles",
      "motorpool",
      "driving",
      "family",
      "role ability",
      "transport"
    ],
    "icon": "🚗",
    "steps": [
      "Role Ability: **Moto** -- add Moto Rank to any **Drive Land Vehicle, Pilot Air/Sea Vehicle**, and any **Vehicle Tech** Skill Check.",
      "**Family Motorpool**: each Rank increase, either add a new stock vehicle of that Rank or lower, or upgrade an existing one.",
      "Available vehicles by Rank: **1-4** Compact Groundcar, Gyrocopter, Jetski, Roadbike. **5-6** Helicopter, High Perf. Groundcar, Speedboat. **7-8** AV-4, Cabin Cruiser, Superbike. **9-10** Aerozep, AV-9, Super Groundcar, Yacht.",
      "Only **one Family Vehicle out at a time** (swap next morning). Destroyed vehicles repaired by Family in **1 week for 500eb**.",
      "At **Rank 10**: promoted to Family leadership -- can have **all vehicles out at once**.",
      "Key upgrades include: Armored Chassis (SP13, Rank 5), Bulletproof Glass, NOS (extra Move Action 1/day), Onboard Weapons, Combat Plow (no ram damage to you), AV-4 Engine Upgrade (Rank 7, land vehicle gains flight), and Enhanced Interface Plug Integration (Rank 5, bikes can dodge)."
    ],
    "topic": "Roles"
  },
  {
    "id": "how-to-make-a-character",
    "title": "How to make a character (3 methods)",
    "tags": [
      "character creation",
      "streetrat",
      "edgerunner",
      "complete package",
      "new character",
      "methods",
      "setup"
    ],
    "icon": "📋",
    "steps": [
      "Cyberpunk RED has **3 creation methods**: Streetrat (fastest), Edgerunner (middle), and Complete Package (most customizable).",
      "**Streetrat (Templates)**: everything predetermined -- STATs, Skills, Gear, Cyberware. Best for new players or quick starts. Starting money: **500eb**.",
      "**Edgerunner (Fast and Dirty)**: roll STATs randomly (d10s, arrange as desired), choose Skills from a prioritized package, but Gear/Cyberware still predetermined. Starting money: **500eb**.",
      "**Complete Package (Calculated)**: buy STATs with **62 points** (2-8 range), buy Skills with **86 points** (max 6, all basics at least 2). Starting money: **2,550eb** for gear + **800eb** fashion allowance.",
      "All methods follow the same steps: 1) Pick a Role (starts at Rank 4), 2) Run Lifepath, 3) Set Stats, 4) Calculate Derived Stats (HP, Humanity, Death Save), 5) Set Skills, 6-8) Record Gear, Armor, Cyberware.",
      "Non-Exec characters start in a rented **Cargo Container** (Suburbs or Combat Zone) with Kibble Lifestyle. First month free; **1,100eb** due on the 1st of next month."
    ],
    "topic": "Character Creation"
  },
  {
    "id": "how-stats-work",
    "title": "How stat allocation works",
    "tags": [
      "stats",
      "allocation",
      "points",
      "statistics",
      "complete package",
      "rolling",
      "character creation"
    ],
    "icon": "🔢",
    "steps": [
      "**Streetrat**: STATs are pre-assigned from a template. No choices to make -- just use what the template gives you.",
      "**Edgerunner**: roll a number of d10s and arrange the results among your 10 STATs as desired. Quick and random.",
      "**Complete Package**: distribute **62 points** across 10 STATs. No single STAT can be **higher than 8** or **lower than 2**.",
      "The 10 STATs are: **INT, WILL, COOL, EMP** (Mental), **TECH, REF** (Combat), **LUCK** (Fortune), **BODY, DEX, MOVE** (Physical).",
      "After setting primary STATs, calculate **Derived Stats**: HP = 10 + (5 x avg of BODY & WILL rounded up), Death Save = BODY, Humanity = EMP x 10, Seriously Wounded = half HP rounded up.",
      "With 62 points across 10 stats, the average is ~6 per stat. Specializing means some stats will be low (2-3), so plan around your Role's key stats."
    ],
    "topic": "Character Creation"
  },
  {
    "id": "what-is-lifepath",
    "title": "What is Lifepath and why it matters",
    "tags": [
      "lifepath",
      "background",
      "cultural origin",
      "personality",
      "enemies",
      "romance",
      "character creation"
    ],
    "icon": "📖",
    "steps": [
      "**Lifepath** is a series of tables (rolled or chosen) that build your character's backstory, personality, and connections. All three creation methods use it.",
      "**Cultural Origin**: determines your native language. Roll d10 for region (North American, East Asian, etc.) then pick a language. You start with **4 points** in that Language Skill plus Streetslang.",
      "**Personality & Style**: what you're like (shy, rebellious, intellectual, etc.), your clothing style (Urban Flash, Nomad Leathers, etc.), hairstyle, and a signature affectation (tattoos, mirrorshades, etc.).",
      "**Family Background**: your original family (Corp Execs, Nomad Pack, Combat Zoners, etc.), childhood environment, and a **Family Crisis** (betrayal, exile, murder, imprisonment, etc.).",
      "**Friends & Enemies**: for each year from age 16+, determine if you made a friend, an enemy, or had a romantic entanglement. Enemies have **who**, **what happened**, **what they can throw at you**, and **how far they'll go**.",
      "**Motivations**: what you value most, how you feel about people, and your most valued possession. These guide roleplaying and give the GM hooks.",
      "Each Role also has a **Role-Specific Lifepath** covering career-specific background, rivals, and circumstances."
    ],
    "topic": "Character Creation"
  },
  {
    "id": "starting-money",
    "title": "How much money do you start with?",
    "tags": [
      "money",
      "eurobucks",
      "starting cash",
      "eb",
      "funds",
      "character creation",
      "budget"
    ],
    "icon": "💰",
    "steps": [
      "**Streetrat**: **500eb** to spend on extra items or save. Gear, weapons, armor, and cyberware are already provided by your template.",
      "**Edgerunner**: **500eb** to spend on extra items or save. Gear, weapons, armor, and cyberware are predetermined by your Role.",
      "**Complete Package**: **2,550eb** to buy Weapons, Armor, Gear, and Cyberware from Night Market listings. Plus an additional **800eb** exclusively for Fashion and Fashionware (unspent fashion money is lost).",
      "All non-Exec characters start in a **Cargo Container** with Kibble Lifestyle. First month is free, then **1,100eb/month** rent + lifestyle is due.",
      "**Execs** start in a Corporate Conapt (Corporate Zone) with Good Prepak Lifestyle, rent-free. Lifestyle costs **600eb/month**.",
      "Budget carefully with Complete Package -- 2,550eb must cover weapons, armor, gear, AND cyberware. Prioritize based on your Role."
    ],
    "topic": "Character Creation"
  },
  {
    "id": "starting-gear",
    "title": "What gear do you start with by role?",
    "tags": [
      "starting gear",
      "cyberware",
      "equipment",
      "weapons",
      "armor",
      "role",
      "character creation"
    ],
    "icon": "🎒",
    "steps": [
      "**Streetrat & Edgerunner** methods give predetermined gear and cyberware by Role. Complete Package characters buy everything from their 2,550eb budget.",
      "Starting **Cyberware by Role** (Streetrat/Edgerunner): Rockerboy gets Audio Recorder, Chemskin, Cyberaudio, Techhair (9 HL). Solo gets Biomonitor, Neural Link, Sandevistan or Wolvers (14 HL). Netrunner gets Interface Plugs, Neural Link, Shift Tacts (14 HL).",
      "Tech gets Cybereye, MicroOptics, Skinwatch, Tool Hand (12 HL). Medtech gets Biomonitor, Cybereye, Nasal Filters or Toxin Binders, TeleOptics (12 HL). Media gets Amplified Hearing or Voice Stress Analyzer, Cyberaudio, Light Tattoo (10 HL).",
      "Lawman gets Hidden Holster, Subdermal Pocket (10 HL). Exec gets Biomonitor or Techhair, Cyberaudio, Internal Agent, Toxin Binders or Nasal Filters (12 HL). Fixer gets Cyberaudio, Internal Agent, Subdermal Pocket, VSA or Amplified Hearing (16 HL). Nomad gets Interface Plugs or Wolvers, Neural Link (14 HL).",
      "Humanity Loss (HL) from starting cyberware reduces your starting Humanity. Most roles lose **1-2 EMP** from their starting chrome.",
      "All characters start Role Ability at **Rank 4**. All characters have at least **+2 in First Aid** regardless of method."
    ],
    "topic": "Character Creation"
  },
  {
    "id": "how-weapon-quality-works",
    "title": "How Weapon Quality Works",
    "tags": [
      "weapon",
      "quality",
      "poor",
      "standard",
      "excellent",
      "jam",
      "attack bonus"
    ],
    "icon": "⚙️",
    "steps": [
      "Weapons come in three qualities: **Poor**, **Standard**, and **Excellent** -- each with different costs and mechanical effects.",
      "**Poor Quality** costs one price category lower (e.g., 50eb Standard becomes 20eb Poor). On a **Critical Failure (natural 1)**, the weapon **jams** and requires an Action to unjam.",
      "**Standard Quality** is the baseline -- no bonuses, no penalties. A 50eb Costly weapon stays 50eb.",
      "**Excellent Quality** costs one price category higher (e.g., 50eb Standard becomes 100eb Excellent). Grants **+1 to all Attack checks** made with that weapon.",
      "Quality price scaling: **50eb -> 20eb/100eb**, **100eb -> 50eb/500eb**, **500eb -> 100eb/1,000eb** for Poor/Excellent respectively.",
      "Brand examples: Dai Lung Streetmaster (Poor Medium Pistol), Federated Arms X-9mm (Standard), Militech \"Avenger\" (Excellent)."
    ],
    "topic": "Equipment"
  },
  {
    "id": "buy-new-weapon",
    "title": "Where to Buy Weapons",
    "tags": [
      "weapon",
      "buy",
      "purchase",
      "night market",
      "fixer",
      "shop",
      "price"
    ],
    "icon": "🛒",
    "steps": [
      "There are no Militech showrooms in the Time of the Red. Weapons come from **Night Markets** (via a Fixer), **pawn shops**, **military surplus**, and even **vendit machines**.",
      "**Night Markets** are run by Fixers at **Rank 5-6+**. All price categories are available. Selection is potluck but you might score rare finds. Fixers can also **Haggle** for better prices.",
      "**Pawn shops** carry used weapons at reasonable prices. Ammo for older guns may require hand-loading since **caseless ammo** is now standard.",
      "**Military surplus** is everywhere after the 4th Corporate War -- handguns, rifles, even missile launchers and flamethrowers.",
      "Price categories: **Cheap 10eb, Everyday 20eb, Costly 50eb, Premium 100eb, Expensive 500eb, Very Expensive 1,000eb, Luxury 5,000eb, Super Luxury 10,000eb+**.",
      "Pistols start at **50-100eb**, shoulder arms at **500eb**, and heavy/exotic weapons at **500-10,000eb**. A starting edgerunner can afford a Medium Pistol (50eb) or Heavy Pistol (100eb)."
    ],
    "topic": "Equipment"
  },
  {
    "id": "upgrade-weapon",
    "title": "Weapon Attachments & Upgrades",
    "tags": [
      "weapon",
      "attachment",
      "upgrade",
      "smartgun",
      "scope",
      "magazine",
      "slot"
    ],
    "icon": "🔧",
    "steps": [
      "Each non-Exotic ranged weapon has **3 Attachment Slots**. Installing the same attachment twice does nothing.",
      "**Extended Magazine** (100eb, 1 slot): Increases mag capacity. **Drum Magazine** (500eb, 1 slot): Even larger capacity. Only one magazine attachment allowed. Both make the weapon non-concealable.",
      "**Smartgun Link** (500eb, **2 slots**): Grants **+1 to Ranged Attacks**. Requires **Interface Plugs or Subdermal Grip** (both need Neural Link cyberware).",
      "**Sniping Scope** (100eb, 1 slot): See detail at 800m. **+1 to single shot/Aimed Shot at 51m+**. Does not stack with TeleOptics cyberoptic.",
      "**Infrared Nightvision Scope** (500eb, 1 slot): Reduces darkness/smoke/fog penalties to **0**. Can distinguish hot targets from cold metal.",
      "**Bayonet** (100eb, 1 slot): Shoulder Arms only. Also usable as a Light Melee Weapon. **Underbarrel Grenade Launcher/Shotgun** (500eb, 2 slots): Adds a secondary weapon to Shoulder Arms.",
      "Exotic Weapons are **incompatible** with attachments and non-Basic ammo unless stated otherwise."
    ],
    "topic": "Equipment"
  },
  {
    "id": "what-ammo-should-i-use",
    "title": "Ammo Types: Quick Comparison",
    "tags": [
      "ammo",
      "ammunition",
      "armor-piercing",
      "incendiary",
      "rubber",
      "smart",
      "basic"
    ],
    "icon": "🔫",
    "steps": [
      "**Basic** (10eb/10 rounds): No special effects. Cheap and reliable -- your default choice for most situations.",
      "**Armor-Piercing** (100eb/10): Ablates armor by **2 instead of 1** per hit. Best against heavily armored targets. Not available for Shotgun Shells.",
      "**Incendiary** (100eb/10): If damage gets through armor, target is **set on fire** (2 HP/turn until extinguished). Great for area denial and terrifying enemies.",
      "**Smart** (500eb/10): Requires a **Targeting Scope**. If you miss by 4 or less, get a second chance (roll d10+10 vs DV). Expensive but forgiving for important shots.",
      "**Rubber** (10eb/10): Cannot kill (leaves target at 1 HP), cannot cause Critical Injuries, cannot ablate armor. Use for non-lethal takedowns.",
      "**Biotoxin** (500eb each, Arrows/Grenades only): No damage but DV15 Resist or **3d6 direct to HP** bypassing armor. **Poison** (100eb, Arrows/Grenades): Same idea, DV13 for 2d6. Both are devastating against unprotected targets.",
      "**Grenades** have unique types: **Flashbang** (DV15 or blinded+deafened), **EMP** (disables cyberware), **Smoke** (obscures area, -4 penalty), **Sleep** (DV13 or unconscious)."
    ],
    "topic": "Equipment"
  },
  {
    "id": "how-armor-penalties-work",
    "title": "Armor Penalties Explained",
    "tags": [
      "armor",
      "penalty",
      "REF",
      "DEX",
      "MOVE",
      "armorjack",
      "flak",
      "metalgear"
    ],
    "icon": "🛡️",
    "steps": [
      "Heavier armor imposes penalties to **REF**, **DEX**, and **MOVE**. Only the **worst penalty** among all worn armor applies (they do not stack).",
      "**No penalty**: Leathers (SP 4, 20eb), Kevlar (SP 7, 50eb), Light Armorjack (SP 11, 100eb), Bodyweight Suit (SP 11, 1,000eb).",
      "**-2 to REF, DEX, and MOVE**: Medium Armorjack (SP 12, 100eb) and Heavy Armorjack (SP 13, 500eb). This affects attack rolls, evasion, initiative, and movement.",
      "**-4 to REF, DEX, and MOVE**: Flak (SP 15, 500eb) and Metalgear (SP 18, 5,000eb). Severe -- can reduce MOVE to 0 (immobile).",
      "Armor SP does **not stack** -- only the highest SP in a location counts. All worn armor in a location is **ablated simultaneously** (SP -1 per hit that deals damage).",
      "Melee weapons **ignore half** your armor SP (round up). Example: SP 11 is treated as SP 6 vs melee. Brawling does NOT halve armor.",
      "The sweet spot for most edgerunners: **Light Armorjack** (SP 11, no penalty, 100eb) or **Kevlar** (SP 7, no penalty, 50eb) if on a budget."
    ],
    "topic": "Equipment"
  },
  {
    "id": "best-starting-weapons",
    "title": "Best Starting Weapons by Budget",
    "tags": [
      "weapon",
      "starting",
      "budget",
      "new character",
      "recommendation",
      "pistol",
      "rifle"
    ],
    "icon": "🎯",
    "steps": [
      "**Budget (50eb)**: Medium Pistol -- 2d6 damage, ROF 2, concealable, 12-round mag. Reliable and cheap. Pair with Handgun skill.",
      "**Mid-range (100eb)**: Heavy Pistol -- 3d6 damage, ROF 2, concealable, 8-round mag. Best bang-for-buck sidearm. Or an SMG (2d6 but with Autofire capability).",
      "**Premium (100eb)**: Very Heavy Pistol -- 4d6 damage, ROF 1, NOT concealable. Maximum single-shot pistol damage. Heavy SMG (3d6 + Autofire) is also 100eb.",
      "**Expensive (500eb)**: Assault Rifle -- 5d6 damage, 25-round mag, Autofire(4). The king of mid-range combat. Or Shotgun for close-range devastation (5d6 slug or 3d6 shells to everyone in 6m).",
      "**Melee picks**: Combat Knife (1d6, 50eb, concealable, ROF 2) for backup. Sword/Heavy Melee (3d6, 100eb) for dedicated melee builds. Remember melee **halves enemy armor**.",
      "**Excellent Quality** adds +1 to attacks at one price category higher. An Excellent Heavy Pistol (500eb) is a solid investment for a combat character."
    ],
    "topic": "Equipment"
  },
  {
    "id": "how-cyberware-slots-work",
    "title": "How Cyberware Slots Work",
    "tags": [
      "cyberware",
      "slots",
      "foundation",
      "option",
      "install",
      "humanity",
      "categories"
    ],
    "icon": "🧠",
    "steps": [
      "Cyberware is organized into **8 categories**. Some require a **Foundational** piece before you can add options; others allow up to **7 Option Slots** with no foundation.",
      "**Needs a Foundation**: Neuralware (Neural Link, 5 slots), Cyberoptics (Cybereye, 3 slots each), Cyberaudio (Cyberaudio Suite, 3 slots), Cyberarm (4 slots), Cyberleg (3 slots).",
      "**No Foundation needed (7 slots)**: Fashionware, Internal Body Cyberware, and External Body Cyberware. You can install up to 7 options in each category.",
      "Installation levels determine where surgery happens: **Mall** (DV13, 100eb), **Clinic** (DV15, 500eb), **Hospital** (DV17, 1,000eb). Only a **Medtech** can perform installations.",
      "Each piece of cyberware costs **Humanity Loss (HL)**. Your EMP equals the tens digit of your current Humanity (44 HUM = EMP 4). If Humanity drops below 0, you go **cyberpsycho** (NPC).",
      "Benefits from **multiple copies of the same cyberware do not stack** unless noted. Only **1 piece of Speedware** (Kerenzikov or Sandevistan) can be installed at a time.",
      "Each piece of cyberware lowers your **maximum recoverable Humanity by 2** (4 for borgware). Therapy can restore Humanity but never past this cap."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "best-cyberware-for-combat",
    "title": "Best Cyberware for Combat",
    "tags": [
      "cyberware",
      "combat",
      "solo",
      "kerenzikov",
      "sandevistan",
      "subdermal",
      "wolvers"
    ],
    "icon": "⚔️",
    "steps": [
      "**Neural Link** (500eb, HL 7) is the gateway. Required for Speedware and Interface Plugs (which enable Smartgun Links for +1 ranged attacks).",
      "**Kerenzikov** (500eb, HL 14): Speedware granting **+2 Initiative permanently**. Best for consistent combat advantage. OR **Sandevistan** (500eb, HL 7): **+3 Initiative for 1 minute** with a 1-hour cooldown -- burst advantage.",
      "**Subdermal Armor** (1,000eb, HL 14, Hospital): SP 11 on body AND head, always on, no penalty. Does not stack with worn armor but protects your head without a helmet. Or **Skin Weave** (500eb, HL 7) for SP 7.",
      "**Grafted Muscle & Bone Lace** (1,000eb, HL 14, Hospital): **BODY +2** (max 10). Changes HP, Wound Threshold, Death Save, and Brawling damage. Huge survivability boost.",
      "**Cyberarm with Wolvers** (500eb arm + 500eb Wolvers, HL 7+7): Concealable **Heavy Melee Weapon** (3d6, ROF 2) that halves enemy armor. Or **Popup Ranged Weapon** for a hidden gun.",
      "**Cybereye with Image Enhance** (100eb eye + 500eb, paired): **+2 to Perception, Lip Reading, and Conceal/Reveal**. Targeting Scope (500eb, 1 slot) gives +1 to Aimed Shots.",
      "**Pain Editor** (1,000eb, HL 14, Chipware): Ignore **Seriously Wounded** penalties. Requires Neural Link + Chipware Socket. Keeps you fighting at full capacity longer."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "best-cyberware-for-netrunning",
    "title": "Essential Netrunner Cyberware",
    "tags": [
      "cyberware",
      "netrunner",
      "neural link",
      "interface plugs",
      "cyberdeck",
      "virtuality"
    ],
    "icon": "💻",
    "steps": [
      "You **cannot Netrun** without these four things: **Neural Link** (500eb, Clinic), **Interface Plugs** (500eb, Clinic), a **Cyberdeck**, and **Virtuality Goggles** (100eb).",
      "**Neural Link** (HL 7) is the foundation for all Neuralware. It has 5 option slots. Interface Plugs take 1 slot and let you connect to machines mentally.",
      "**Cyberdeck quality matters**: Poor (5 slots, 100eb), Standard (7 slots, 500eb), Excellent (9 slots, 1,000eb). Programs take 1 slot each; Black ICE takes **2 slots**.",
      "**Virtuality Goggles** project cyberspace over your real-world vision. Without them you are **effectively Unconscious** in Meatspace while jacked in -- a death sentence in the field.",
      "Consider a **Cybereye with Virtuality** (100eb eye + 100eb option, paired): Replaces goggles with built-in projection. Frees your face and is harder to knock off.",
      "Your **Interface Rank** (Role Ability) determines NET Actions per Turn: Rank 1-3 = 2, Rank 4-6 = 3, Rank 7-9 = 4, Rank 10 = 5.",
      "Optional: **Cyberdeck in a Cyberarm** (500eb, 3 arm slots) frees your hands. A **Chipware Socket** enables Skill Chips for out-of-NET utility."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "what-is-borgware",
    "title": "What Is Borgware?",
    "tags": [
      "borgware",
      "cyberware",
      "full body",
      "conversion",
      "humanity",
      "cyberpsychosis",
      "extreme"
    ],
    "icon": "🤖",
    "steps": [
      "**Borgware** is full-body cybernetic conversion -- replacing most or all of your organic body with a mechanical chassis. It is the most extreme form of cyberware.",
      "Borgware has **massive Humanity costs**. Each piece of borgware reduces your maximum recoverable Humanity by **4** (double the normal 2 per cyberware).",
      "The Humanity cost makes cyberpsychosis a near-certainty without extensive therapy. Many full borgs teeter on the edge -- or have already fallen over it.",
      "In the Time of the Red, full-body conversions like the **Gemini** exist. Network 54 CEO Michelle Dreyer uses one to fix her appearance at mid-fifties.",
      "Full borgs were deployed in the 4th Corporate War as **combat cyborgs**. Post-war, many are social outcasts -- feared, pitied, or hunted by MAX-TAC.",
      "The bar **MetalStorm** in the Overpacked Suburbs caters specifically to chromers and full borgs -- one of the few places they are accepted."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "fashionware-options",
    "title": "Fashionware: All Options & Costs",
    "tags": [
      "fashionware",
      "cyberware",
      "cosmetic",
      "techhair",
      "chemskin",
      "light tattoo",
      "shift tacts"
    ],
    "icon": "✨",
    "steps": [
      "Fashionware has **7 Option Slots** with **no foundation required**. All are **Mall installs** (DV13) and cost **0 Humanity Loss** (except as noted). Installation surgery is **included at no extra charge**.",
      "**Biomonitor** (100eb, HL 0): Readout of your vitals, links to your Agent. Auto-calls Trauma Team when HP drops below BODY or you lose a body part.",
      "**Chemskin** (100eb, HL 0): Permanent skin hue change. Combined with Techhair, grants **+2 Personal Grooming**.",
      "**EMP Threading** (10eb, HL 0): Silver circuit-like patterns on your body. Purely cosmetic but very cyberpunk.",
      "**Light Tattoo** (100eb, HL 0): Colored tattoos under the skin that glow. With **3 or more Light Tattoos**, grants **+2 Wardrobe & Style**.",
      "**Shift Tacts** (100eb, HL 0): Color-changing eye lenses. **Skinwatch** (100eb, HL 0): Subdermal LED watch.",
      "**Techhair** (100eb, HL 0): Color-light artificial hair. Combined with Chemskin, grants **+2 Personal Grooming**. Total combo cost: 200eb for a permanent +2 to looking good."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "how-much-is-rent",
    "title": "Housing Costs: How Much Is Rent?",
    "tags": [
      "housing",
      "rent",
      "apartment",
      "cargo container",
      "cube hotel",
      "lifestyle",
      "cost"
    ],
    "icon": "🏠",
    "steps": [
      "**Street**: Free — but you must pass a **DV15 Endurance Check** or be fatigued the next day. Also asking for trouble.",
      "**In a Vehicle**: Free — if you own one. Sleeping in a vehicle is uncomfortable unless it has proper sleeping arrangements.",
      "**Cube Hotel**: **500eb/month** — windowless cell where you can touch both walls. Strong lock, shared bathroom. Sleeping with 2 people = fatigued.",
      "**Cargo Container**: **1,000eb/month** — bed, desk, electricity, fridge, microwave, sink. Shared restrooms. Located in suburbs or Combat Zone.",
      "**Studio Apartment**: **1,500eb/month** — private bathroom, small kitchen, tiny living room. First housing that feels like your own space. 1 parking spot.",
      "**Two-Bedroom Apartment**: **2,500eb/month** — two bedrooms, full kitchen, living room, in-unit laundry. 2 parking spots.",
      "**Upscale Conapt**: **7,500eb/month** — two-floor, 3 bedrooms, 3 bathrooms, balcony, nice view. 3 parking spots (1 rooftop for AV). **Luxury Penthouse**: **15,000eb/month**.",
      "**Corporate Conapt / Beaverville**: **Free** — but only for Execs. Given by your corp. Expect surveillance in every room except bathrooms."
    ],
    "topic": "Lifestyle"
  },
  {
    "id": "what-do-i-eat",
    "title": "Food Tiers: What Do I Eat?",
    "tags": [
      "food",
      "kibble",
      "prepak",
      "fresh food",
      "lifestyle",
      "cost",
      "eating"
    ],
    "icon": "🍜",
    "steps": [
      "**Kibble** (100eb/month): Mass-produced nutrient made from kelp, plankton, and soy proteins. Tastes like its canine namesake. Most urban dwellers eat at least one kibble meal per day.",
      "**Generic Prepak** (300eb/month): Microwaveable soy-and-grain meals with better flavoring. Maybe some real meat or veggies. Press the tab, heat, and eat.",
      "**Good Prepak** (600eb/month): Restaurant-quality artificial food that actually tastes real. Higher percentage of natural ingredients. Common in Executive homes.",
      "**Fresh Food** (1,500eb/month): Real food -- actual meat, vegetables, fruit. Occasional fine dining. A rare luxury requiring Nomad supply lines and armed escorts.",
      "If you **do not pay** for food at the start of a month, you have **one week** before you must roll a **Death Save** each day. You can literally starve to death.",
      "**Guerrilla gardening** is a thing -- edgerunners tear up abandoned lots for rooftop gardens. Neighborhoods arm up to protect their tomatoes. Fresh meat comes via Nomad \"cattle drives\" with heavy Solo escort."
    ],
    "topic": "Lifestyle"
  },
  {
    "id": "what-to-wear",
    "title": "Fashion Styles & Why They Matter",
    "tags": [
      "fashion",
      "clothing",
      "style",
      "wardrobe",
      "appearance",
      "cost",
      "identity"
    ],
    "icon": "👔",
    "steps": [
      "In Cyberpunk, **fashion is identity**. What you wear tells the world who you are. There are **10 fashion styles**, each with different price tiers.",
      "**Cheapest styles** (10-20eb per piece): Bag Lady Chic (homeless, ragged), Bohemian (folksy, retro), Gang Colors (dangerous, rebellious), Generic Chic (standard, colorful).",
      "**Mid-range** (50-100eb per piece): Leisurewear (comfort, athleticism), Nomad Leathers (western, rugged), Asia Pop (bright, costume-like), Urban Flash (flashy, technological).",
      "**Expensive** (100-1,000eb per piece): Businesswear (leadership, authority). **Luxury** (1,000-5,000eb per piece): High Fashion (exclusive, designer, couture).",
      "Complete Package characters get an **800eb Fashion Allowance** for clothing and Fashionware only. Unspent fashion money is **lost**.",
      "Fashion affects social interactions through the **Wardrobe & Style** and **Personal Grooming** skills (both COOL-linked). Looking the part can be as important as having the skills.",
      "Combine fashion with **Fashionware** for bonuses: Chemskin + Techhair = **+2 Personal Grooming**. Three or more Light Tattoos = **+2 Wardrobe & Style**."
    ],
    "topic": "Lifestyle"
  },
  {
    "id": "cost-of-living",
    "title": "Monthly Budget for an Edgerunner",
    "tags": [
      "budget",
      "monthly",
      "cost",
      "rent",
      "food",
      "lifestyle",
      "expenses",
      "money"
    ],
    "icon": "💰",
    "steps": [
      "**Bare minimum survival**: Cargo Container (1,000eb) + Kibble (100eb) = **1,100eb/month**. This is what starting characters owe after their free first month.",
      "**Comfortable street-level**: Studio Apartment (1,500eb) + Generic Prepak (300eb) = **1,800eb/month**. Private bathroom, better food, actual dignity.",
      "**Solid edgerunner**: Two-Bedroom (2,500eb) + Good Prepak (600eb) = **3,100eb/month**. Room for gear, real-tasting food, concerts or sporting events.",
      "**Living well**: Upscale Conapt (7,500eb) + Fresh Food (1,500eb) = **9,000eb/month**. Real food, multiple floors, rooftop AV parking.",
      "Add-ons that eat your budget: **Trauma Team Silver** (500eb/month), **Trauma Team Executive** (1,000eb/month). Braindances (20eb each), bar drinks (10-50eb), taxi rides (20eb).",
      "Entertainment costs: Movie (20eb), Braindance (20eb), Interactive Braindance (50eb), Video Game (50eb), Live Concert (100eb), Good Bar drink (10eb), Executive Bar drink (50eb).",
      "A typical gig pays **1,000-10,000eb** depending on difficulty. Most edgerunners need **at least one job per month** just to keep the lights on."
    ],
    "topic": "Lifestyle"
  },
  {
    "id": "how-services-work",
    "title": "Services: Medical, Trauma Team & More",
    "tags": [
      "services",
      "medical",
      "trauma team",
      "hospital",
      "braindance",
      "therapy",
      "cost"
    ],
    "icon": "🏥",
    "steps": [
      "**Hospital Treatment** by DV: DV10 = 50eb, DV13 = 100eb, DV15 = 500eb, DV17+ = 1,000eb. Hotels cost **100eb/night**. Lower-DV treatments included free with the highest.",
      "**Trauma Team Silver** (500eb/month): Emergency extraction and stabilization. Surgery treatments charged extra at hospital price. **Executive** (1,000eb/month): Surgery included.",
      "TT responds in **1d6 Rounds** after calling. With Agent + Biomonitor, auto-calls when HP drops below BODY or you lose a body part. Plans are transferable 1-for-1.",
      "**Therapy** restores Humanity: Standard (500eb, regains 2d6 HUM), Extreme (1,000eb, regains 4d6 HUM), Addiction (1,000eb). Each takes **1 full week** with a Medtech.",
      "**Cyberware Installation**: Mall (100eb), Clinic (500eb), Hospital (1,000eb). Only Medtechs can perform the surgery. Failed surgery **destroys** the cyberware.",
      "**Professional Services**: Good (100eb/hour), Excellent (500eb/hour), World Class (5,000eb/job). Covers lawyers, bodyguards, consultants, and similar professionals.",
      "**Braindance** (20eb) for passive viewing, **Interactive Braindance** (50eb) for full sensory experience. Bodysculpting: Standard (500eb, no HL), Exotic (1,000eb, 4d6 HL)."
    ],
    "topic": "Lifestyle"
  },
  {
    "id": "night-city-zones",
    "title": "Night City Zone Types",
    "tags": [
      "night city",
      "zone",
      "corporate",
      "combat",
      "hot zone",
      "moderate",
      "executive"
    ],
    "icon": "🏙️",
    "steps": [
      "**Executive Zone**: Gated community for high-level Corporate execs. Golf, spas, armed security. No random encounters -- constant paranoid surveillance instead.",
      "**Corporate Zone**: Patrolled by Corporate security. Safe from Combat Zone chaos but with high-budget dangers. Corporate police presence is constant.",
      "**Moderate Zone**: Buffer zones outside Corporate areas. Relative safety but Combat Zone violence bleeds over. Where most working people live.",
      "**Combat Zone**: The most dangerous and lawless areas. Gangs rule absolutely. People die and nobody cleans up. Most encounters are hostile. This is where Old Japantown, Little China, and South Night City are.",
      "**Hot Zone**: Blasted terrain around the old Corporate Center where the nuke hit in 2023. Wrecked skyscrapers, radiation, the worst gangs. Extremely dangerous to enter.",
      "**Overpacked Suburbs**: Former Beavervilles now crammed with tent cities and refugee camps. Overworked police (Precinct #2 relies on Zhirafa drones). Where most starting characters live.",
      "**Reclaimed Perimeter/Open Road**: Just outside the City sprawl. Nomad Families, private security, road gangers. Your own laws apply."
    ],
    "topic": "Night City"
  },
  {
    "id": "which-gang-controls-what",
    "title": "Gang Territory Quick Reference",
    "tags": [
      "gang",
      "territory",
      "maelstrom",
      "tyger claws",
      "voodoo boys",
      "6th street",
      "bozo"
    ],
    "icon": "🔥",
    "steps": [
      "**Tyger Claws**: Protect the Asian community, especially Japantown. Known for fast bikes, enhanced reflexes, killer martial arts. Formerly under Arasaka.",
      "**Maelstrom**: Combat/Cyber gang formed from Metal Warriors. Extreme visible cyberware, hate organic flesh. Constantly at war with the Inquisitors.",
      "**6th Street**: Veterans of the 4th Corporate War. Well-armed, heavily cybered vigilantes. Protect neighborhoods but forced into extortion/smuggling. Guard Holy Angels Church.",
      "**Inquisitors**: Cult gang that believes cyberware is blasphemous. Will **tear cyberware from your body** to \"save your soul.\" At war with every other gang. Everyone hates them.",
      "**Voodoo Boys**: Crime contacts in Florida/Caribbean. Deal non-synthetic drugs. Real Haitian immigrants clashing with them violently.",
      "**Other notable gangs**: Bozos (biosculpted killer clowns), Piranhas (party gang, mug people), Red Chrome Legion (neo-fascist hate gang), Reckoners (apocalyptic cult with explosives).",
      "**Scavvers** are not really a gang -- desperate homeless squatting in ruins, digging for anything saleable. Many die in unsafe terrain. Iron Sights are small but tough borderline cyberpsychos."
    ],
    "topic": "Night City"
  },
  {
    "id": "where-to-find-things",
    "title": "Where to Find Services in Night City",
    "tags": [
      "location",
      "ripperdoc",
      "fixer",
      "night market",
      "bar",
      "hospital",
      "services"
    ],
    "icon": "📍",
    "steps": [
      "**Ripperdocs**: Savage Docs in the Combat Zone (run by 5 apprentices, Yakuza/Tyger Claw protection). City Medical Center in Upper Marina for legit work. Rocklin Augmentics campus in Suburbs.",
      "**Fixers & Night Markets**: Night Markets run by Fixers at Rank 5-6+, once per month. Midnight Markets (Rank 9+) are invite-only with rare items. Fixers found through Streetwise checks.",
      "**Solo Bars**: The Afterlife (Upper Marina) -- premiere Solo bar in a converted morgue, run by legendary Solo Rogue. The Forlorn Hope (Combat Zone) -- exclusive veteran Solo bar.",
      "**Tech/Netrunner Hangout**: Short Circuit in Little Europe -- patrons haul in wrecked tech to tinker with. The place to find a Tech or Netrunner.",
      "**Medical**: City Medical Center (Upper Marina) for therapy and biosculpting. Crisis Medical Center (Combat Zone) for no-questions-asked treatment, neutral ground for all factions.",
      "**Dangerous Hangouts**: Totentanz (edge of Hot Zone, boostergang bar, body count under 20 is a good night), Jesse James' Kosher Deli (Nomad/Booster saloon with nightly body count), The Slammer (ganger bar with cinder block arena).",
      "**Corporate Services**: 1st Night City Bank (The Glen), Merrill Asukaga & Finch (financial), Trauma Team Tower (Watson Development for medical emergencies)."
    ],
    "topic": "Night City"
  },
  {
    "id": "dangerous-areas",
    "title": "Most Dangerous Areas & Why",
    "tags": [
      "danger",
      "combat zone",
      "hot zone",
      "radiation",
      "gangs",
      "warning",
      "death"
    ],
    "icon": "☠️",
    "steps": [
      "**The Hot Zone** is the most dangerous area in Night City. The 2023 nuclear blast leveled the old Corporate Center. Wrecked skyscrapers, lingering radiation, and the worst gangs make this near-suicidal to enter.",
      "**Combat Zones** (Old Japantown, Little China, Old Combat Zone, South Night City): Gangs rule absolutely. No law enforcement responds. People die and nobody cleans up. Avoid encounters below 50 on the encounter table.",
      "**Midnight in any zone** is exponentially more dangerous. City Police become hostile (smartgun-linked ARs, \"you have no business out\"). Corporate Guards are extremely hostile to non-Corporates. Street punks on Black Lace rush you regardless.",
      "**The Totentanz** bar sits at the edge of the Hot Zone. A boostergang hangout where a \"good\" night means fewer than 20 bodies. Going here is asking for trouble.",
      "Even **Overpacked Suburbs** are dangerous -- tent cities, overworked police, gang overflow. Precinct #2 relies on Zhirafa drones because they are so understaffed.",
      "Night City is **not part of the New United States**. Laws are enforced based on **where you are and your income**. In the Combat Zone, the only law is what you can enforce yourself."
    ],
    "topic": "Night City"
  },
  {
    "id": "who-are-the-big-corps",
    "title": "Major Corporations Overview",
    "tags": [
      "corporation",
      "arasaka",
      "militech",
      "biotechnica",
      "petrochem",
      "trauma team",
      "corps"
    ],
    "icon": "🏢",
    "steps": [
      "**Arasaka** (Tokyo): Security, mercenaries. 1 million employees. Reduced to Japan-only after the War but still the best-trained operatives. Three warring factions: Kiji (Hanako), Taka (Yorinobu), Hato (Michiko).",
      "**Militech** (Washington D.C.): Arms manufacturing, mercenaries. 350K employees + 700K contracted to US Military. Nationalized after the War but secretly rebuilding. World's largest weapons producer.",
      "**Biotechnica** (La Jolla, CA): Biotech, genetic engineering, CHOOH2 fuel. 36K employees. Closest thing to a \"good guy\" Corp. Restoring ecosystems, creating new species. Invented CHOOH2.",
      "**Petrochem** (Dallas, TX): World's largest CHOOH2 producer. 338K employees. Controls millions of acres of farmland. Wants to absorb Biotechnica. Rival to SovOil.",
      "**Continental Brands** (Tulsa, OK): Food production. 147K employees. Controls food supply through Oasis stores and loyalty programs. CEO Olivia \"Kibble Queen\" Forsythe is ruthless.",
      "**Other major players**: Trauma Team (emergency medical), Network 54 (broadcasting), Zhirafa (drones/robotics/construction), Rocklin Augmentics (cyberware), SovOil (Russian oil/mining), Danger Girl (Michiko Sanderson's PI firm).",
      "Post-War rule: every Corp must assign a **\"Face\"** -- the largest stockholder who is **personally liable** for corporate crimes, up to and including the death penalty."
    ],
    "topic": "Lore"
  },
  {
    "id": "working-for-corps",
    "title": "Taking a Corporate Job",
    "tags": [
      "corporation",
      "job",
      "work",
      "edgerunner",
      "risk",
      "reward",
      "fixer",
      "contract"
    ],
    "icon": "📋",
    "steps": [
      "Corporations hire edgerunners through **intermediaries** (usually Fixers) for deniable work. The Corp wants distance -- if you get caught, they never heard of you.",
      "Common Corp jobs: field testing weapons (Militech), protecting researchers (Biotechnica), sabotaging competitors (Petrochem), eliminating food rivals (Continental Brands), covert ops (Arasaka).",
      "**Pay is good** but expectations are high. Militech expects results. Arasaka considers everyone expendable. Biotechnica treats freelancers with relative decency but protects patents ruthlessly.",
      "**Betraying a Corp is a death sentence.** Arasaka has long memories and longer reach. Militech has the firepower of a small nation. SovOil sends the Bratva (Russian mafia).",
      "Some Corps pay in **corporate scrip** or **product** instead of eurodollars. Continental Brands loves paying in scrip. Rocklin Augmentics sometimes pays in cyberware.",
      "Execs can hire edgerunners directly through their **Teamwork** Role Ability. Their team members are GM-controlled NPCs with Loyalty scores that determine reliability."
    ],
    "topic": "Lore"
  },
  {
    "id": "corp-vs-corp",
    "title": "Corporate Landscape & Rivalries",
    "tags": [
      "corporation",
      "rivalry",
      "arasaka",
      "militech",
      "petrochem",
      "sovoil",
      "war"
    ],
    "icon": "⚡",
    "steps": [
      "**Arasaka vs Militech**: The defining rivalry. They fought the 4th Corporate War to a bloody standstill. Arasaka is reduced to Japan-only; Militech is nationalized. Both are secretly rebuilding for round two.",
      "**Petrochem vs SovOil**: Fought the 2nd Corporate War over South China Sea territories. Still bitter rivals over fuel production. Both profited by selling fuel to both sides in the 4th War.",
      "**Petrochem vs Biotechnica**: Petrochem is the world's largest CHOOH2 producer but operates under **license** from Biotechnica (who invented it). Petrochem wants to absorb Biotechnica. It is only a matter of time.",
      "**Continental Brands vs Everyone**: Stolen from Petrochem in a corporate heist. Controls food supply through monopolistic Oasis stores. Punishes communities for growing their own food.",
      "**Arasaka's internal war**: Three factions -- Kiji (Hanako, mainline), Taka (Yorinobu, renegade), and Hato (Michiko, figurehead). Patriarch Saburo still nominally controls. Hanako is secretly working on a new version of **Soulkiller**.",
      "**Danger Girl** (Michiko Sanderson) has a secret deal with President Kress to locate and dismantle Arasaka operations in the US -- while being an Arasaka heir herself."
    ],
    "topic": "Lore"
  },
  {
    "id": "what-happened-to-night-city",
    "title": "What Happened to Night City?",
    "tags": [
      "history",
      "nuke",
      "night city",
      "red sky",
      "aftermath",
      "4th corporate war",
      "holocaust"
    ],
    "icon": "💥",
    "steps": [
      "In **2023**, a nuclear device detonated in **Arasaka Towers** in central Night City during the 4th Corporate War. Roughly **2 million people** in the greater Night City region were left homeless from the direct effects of the Bomb.",
      "An incursion team led by Solo **Morgan Blackhand** and Rockerboy **Johnny Silverhand** attempted to steal or destroy the Arasaka Secure Database. During the assault, an **area denial nuclear device** went off.",
      "The blast created a **red pall** of particulate debris over skies worldwide for nearly two years -- the **Time of the Red**. Vivid red sunrises and sunsets persisted for a decade.",
      "The NET was already dying: **Rache Bartmoss's DataKrash** virus (created by deranged Netrunner Rache Bartmoss shortly before his death in **2021**) had been destroying data worldwide. **Netwatch** eventually shut down the NET entirely. It has never come back.",
      "Post-War: **Arasaka** was reduced to Japan-only. **Militech** was nationalized by President Kress. The world's infrastructure was severely damaged. Displaced groups began the **Diaspora** to reclaim abandoned cities.",
      "By 2045 (the present), Night City is rebuilding. Red skies have faded. Corporations are rising from the wreckage. The NET is replaced by local **Data Pools** and **CitiNets**. New power structures are hungry to take the place of the old."
    ],
    "topic": "Night City"
  },
  {
    "id": "who-is-johnny-silverhand",
    "title": "Who Is Johnny Silverhand?",
    "tags": [
      "johnny silverhand",
      "rockerboy",
      "samurai",
      "arasaka",
      "alt cunningham",
      "legend",
      "lore"
    ],
    "icon": "🎸",
    "steps": [
      "**Johnny Silverhand** was the lead singer of the band **Samurai** and one of the most famous Rockerboys in Night City. Named for his signature **silver cybernetic hand**.",
      "In **2013**, Johnny led a raid on the Arasaka Tower complex to rescue his girlfriend **Alt Cunningham**, creator of the deadly **Soulkiller** program. Alt had been kidnapped by Arasaka to build a mobile version.",
      "The 2013 raid involved a massive concert as cover, with legendary Solo **Rogue** and Nomad **Santiago** providing combat support. This is the adventure **\"Never Fade Away.\"**",
      "In **2023**, Johnny was part of the team (alongside Solo **Morgan Blackhand**) that assaulted Arasaka Towers during the 4th Corporate War -- the raid that ended with the **nuclear detonation**.",
      "Johnny's fate is unknown. He has been \"sighted\" multiple times but nothing has been substantiated. His ultimate fate at ground zero of the nuke remains one of Night City's greatest mysteries.",
      "His legacy defines Night City: the rebel who fought Arasaka, the man at ground zero of the nuke, the legend whose story is told in bars and screamsheets across the city."
    ],
    "topic": "Lore"
  },
  {
    "id": "what-is-the-blackwall",
    "title": "What Is the Blackwall?",
    "tags": [
      "blackwall",
      "NET",
      "netwatch",
      "AI",
      "RABID",
      "datakrash",
      "danger"
    ],
    "icon": "🔒",
    "steps": [
      "The **Blackwall** is the barrier separating the surviving local networks (CitiNets and Data Pools) from the **ruins of the old NET**, which is infested with deadly programs.",
      "The old NET was destroyed by the **DataKrash** -- a virus created by Netrunner **Rache Bartmoss** hidden inside the core algorithms. It randomly shifted, erased, or rewrote data worldwide.",
      "The DataKrash also released **AI** and Soulkilled pseudo-intellects to roam freely, and spawned **R.A.B.I.D.s** (Roving Autonomous Bartmoss Interface Drones) -- self-replicating killer programs numbering in the hundreds of thousands.",
      "**Netwatch** tried for three years to clear the R.A.B.I.D.s. They failed and shut down all major nodes. The Blackwall is what keeps the old NET's horrors contained.",
      "Beyond the Blackwall, rogue AIs and Soulkilled pseudo-intellects roam freely. AIs occasionally creep into wrecked cities' old NETs seeking others. *(Note: some lore about Alt Cunningham's Ghost World comes from CP2077 and supplementary material, not the RED core rulebook.)*",
      "Some Netrunners still venture beyond the Blackwall to loot abandoned systems. It is **extremely dangerous**. The things lurking there do not distinguish between friend and foe."
    ],
    "topic": "Lore"
  },
  {
    "id": "what-are-nomads-like",
    "title": "Nomad Culture & Packs",
    "tags": [
      "nomad",
      "pack",
      "family",
      "highway",
      "transport",
      "culture",
      "aldecaldo"
    ],
    "icon": "🚗",
    "steps": [
      "Nomads are transport experts, road warriors, and smugglers who keep the post-War world connected. They operate in **packs** (Families) ranging from single families to large affiliated groups.",
      "Nomad packs can be **land**, **air**, or **sea** based. Land nomads are most common, running convoy routes between cities. The **Steel Vaqueros** run the coastal highway from Santa Cruz south. The **Aldecaldos** maintain a major trade hub at the edge of Night City.",
      "Nomads are the **backbone of inter-city trade**. After the War destroyed shipping infrastructure, Nomad convoys became the safest way to move goods. They now operate ports and container ships.",
      "Pack roles include: Scout, Outrider, Transport pilot, Loadmaster, Solo smuggler, and Procurement. Philosophy ranges from noble protectors to ruthless pirates.",
      "The **Moto** Role Ability gives Nomads access to a **Family Motorpool** -- vehicles they can call upon (one at a time until Rank 10). Destroyed vehicles are repaired by the Family in 1 week for 500eb.",
      "Nomad culture values: loyalty to the pack, self-reliance, freedom of the open road. Food is often fresh (from their own herds), and pack members look after each other. Assault a Nomad and expect to be **dragged behind a vehicle until you are hamburger**."
    ],
    "topic": "Lore"
  },
  {
    "id": "whats-the-net-like-now",
    "title": "The State of the NET in 2045",
    "tags": [
      "NET",
      "data pool",
      "citinet",
      "communication",
      "agent",
      "ziggurat",
      "netrunning"
    ],
    "icon": "🌐",
    "steps": [
      "The **old NET is dead**. Destroyed by the DataKrash in 2022 and officially shut down by Netwatch in 2023. It is now a wasteland of R.A.B.I.D.s, rogue AI, and ghost programs.",
      "Replacing it are **Data Pools** -- city-wide LAN networks built by **Ziggurat** (subsidiary of Zhirafa). They are **\"air gapped\"** with limited connections between cities.",
      "City-to-city communication is limited to **text, voice, and video messages** sent via hourly data-packet bursts through reclaimed phone lines, free-space optics, and Nomad couriers. Direct A/V requires a WorldSat contract.",
      "The **Agent** is your primary device -- a pack-of-cigarettes-sized AI assistant that manages your life, searches the Data Pool, handles communications, and monitors your health (with a Biomonitor).",
      "**Data Terms** are street-corner computer terminals in armored concrete posts. Direct link to the city's Data Pool at about 10eb per minute. Ziggurat's **Ask Alex Anything** is the standard search tool.",
      "Netrunning still happens but is **local** -- you hack into NET Architectures (digital fortresses) protecting specific buildings, Corps, or systems. You need **Neural Link + Interface Plugs + Cyberdeck + Virtuality Goggles**.",
      "The NET's destruction means **no cloud, no global internet, no instant worldwide communication**. Information is siloed. Power belongs to whoever controls the local Data Pool."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "how-much-to-pay-players",
    "title": "How Much to Pay Players for Jobs",
    "tags": [
      "pay",
      "job",
      "money",
      "reward",
      "GM",
      "gig",
      "eurobucks",
      "guidelines"
    ],
    "icon": "💵",
    "steps": [
      "Pay should cover **lifestyle costs plus extra** for risk. A starting character needs at least **1,100eb/month** just to survive (rent + kibble). Factor this into job payouts.",
      "**Easy gigs** (guard duty, deliveries, info gathering): **500-1,000eb per person**. Low risk, low reward. Good for downtime between big jobs.",
      "**Standard gigs** (break-ins, extractions, Night Market deals): **1,000-3,000eb per person**. Moderate risk, some combat expected. This is the bread and butter.",
      "**Dangerous gigs** (Corporate infiltration, gang war intervention, Hot Zone runs): **3,000-5,000eb per person**. High risk of death or serious injury.",
      "**Legendary gigs** (taking on a Megacorp, cyberpsycho hunts, cross-city operations): **5,000-10,000eb+ per person**. These should be rare and story-defining.",
      "Fixers at **Rank 10** can **double pay** for Dangerous Jobs. Consider non-cash rewards too: cyberware, weapons, favors, safe houses, contacts, or Corporate access.",
      "The published screamsheet \"Wood Pirates\" pays **1,000eb per person** with room and board for guarding a forest -- a good baseline for a standard gig."
    ],
    "topic": "GM Tips"
  },
  {
    "id": "how-ip-works",
    "title": "How Improvement Points Work",
    "tags": [
      "IP",
      "improvement",
      "experience",
      "advancement",
      "skill",
      "role",
      "GM",
      "award"
    ],
    "icon": "📈",
    "steps": [
      "After each session, award IP based on **group achievement** (10-80 IP) and individual performance across four playstyles: **Warrior, Socializer, Explorer, Roleplayer** (10-80 IP each).",
      "**10 IP**: Tried but failed. **30 IP**: Worked together well. **50 IP**: Stellar moments. **70 IP**: Resounding success. **80 IP**: Legendary, all goals plus side goals achieved.",
      "**Spending IP on Skills**: Level 1 costs 20 IP, Level 2 costs 40 IP, up to Level 10 at 200 IP. Each level costs **20 x the new level**. Difficult (x2) Skills cost double.",
      "**Spending IP on Role Ability**: Rank 1 costs 60 IP, Rank 2 costs 120 IP, up to Rank 10 at 600 IP. Each rank costs **60 x the new rank**.",
      "**Multiclassing**: After reaching Rank 4 in your current Role, you can buy Rank 1 in a new Role. Locked from multiclassing again until the new Role reaches Rank 4.",
      "You **cannot skip levels or ranks**. Characters should spend some time at their new level before advancing. A typical session awards 40-60 IP total per player."
    ],
    "topic": "GM Tips"
  },
  {
    "id": "how-to-set-dvs",
    "title": "Quick Guide to Setting DVs",
    "tags": [
      "DV",
      "difficulty",
      "skill check",
      "GM",
      "value",
      "target number",
      "guide"
    ],
    "icon": "🎲",
    "steps": [
      "DVs represent how hard a task is. The formula is **STAT + Skill + 1d10 vs DV**. Average characters have STAT 5 + Skill 4 = 9 base, meaning they roll 10-19.",
      "**DV 9 (Simple)**: Most people can do without thinking. Walking, basic conversation, simple tasks.",
      "**DV 13 (Everyday)**: Most people can do without special training. Driving in traffic, finding a store, basic repairs.",
      "**DV 15 (Difficult)**: Hard without training or natural talent. Picking a lock, treating wounds, hacking a simple system.",
      "**DV 17 (Professional)**: Takes actual training. Surgery, complex repairs, infiltrating a guarded building.",
      "**DV 21 (Heroic)**: Only the best of the best. Defusing a bomb under fire, outrunning a vehicle on foot, legendary feats.",
      "**DV 24 (Incredible)** and **DV 29 (Legendary)**: Truly Olympian and awe-inspiring feats. Stories are written about these. Reserve for dramatic moments."
    ],
    "topic": "GM Tips"
  },
  {
    "id": "how-night-markets-work",
    "title": "Running a Night Market",
    "tags": [
      "night market",
      "fixer",
      "shopping",
      "buy",
      "sell",
      "GM",
      "midnight market"
    ],
    "icon": "🌙",
    "steps": [
      "Night Markets are set up by **Fixers at Rank 5-6+**, once per month. They are **open events** where all price categories of equipment are available for purchase.",
      "The Fixer uses their **Operator** ability to source items. Haggle Check: **COOL + Trading + Operator Rank + 1d10** vs target's roll. Only 1 Fixer deal per transaction.",
      "At the table, describe the market as a chaotic, crowded affair -- abandoned warehouse, rooftop, or back alley. Vendors sell from vehicle trunks and folding tables. Armed guards patrol.",
      "**Midnight Markets** (Fixer Rank 9+) are invite-only flash markets. They contain **1d10+5 rare items** and gather criminal underworld leadership. Much more dangerous, much better loot.",
      "GMs can use Night Markets as social encounters: introduce contacts, seed rumors, create complications (rival gangs, police raids, stolen goods, double-crosses).",
      "Haggle bonuses by Fixer Rank: Rank 1-2 = 10% better price, Rank 5-6 = buy 5 get 1 free, Rank 7-8 = pay half now/half later for Luxury+, Rank 9-10 = 20% better buy/sell."
    ],
    "topic": "GM Tips"
  },
  {
    "id": "how-rep-affects-gameplay",
    "title": "What Reputation Actually Does",
    "tags": [
      "reputation",
      "facedown",
      "recognition",
      "COOL",
      "social",
      "GM",
      "mechanics"
    ],
    "icon": "🌟",
    "steps": [
      "Reputation is earned through **notable actions** and awarded by the GM. A new Reputation only replaces the old if the Level is higher. Most starting characters have **Reputation 0**.",
      "When meeting someone new, they roll **1d10**. If they roll **under** your Reputation Level, they have heard of you. Rep 5 = recognized by name beyond your local area.",
      "**Facedowns** use Reputation directly: **COOL + Reputation + 1d10 vs COOL + Reputation + 1d10**. The loser must either **back down** or take **-2 to all Actions** against the winner.",
      "**Negative Reputation** is possible for cowardice or betrayal. People have heard of your failures. In Facedowns, negative Rep counts against you.",
      "Rep Levels: 1 (anyone there knows), 3 (acquaintances know), 5 (recognized beyond local area), 7 (in the news), 9 (always in screamsheets and TV), 10 (known worldwide).",
      "High Rep is a double-edged sword: doors open, people respect you, but enemies know your name too. Corps, gangs, and rivals may come looking for someone with a big reputation."
    ],
    "topic": "GM Tips"
  },
  {
    "id": "first-aid-vs-paramedic",
    "title": "First Aid vs Paramedic — when to use which",
    "tags": [
      "first aid",
      "paramedic",
      "healing",
      "stabilize",
      "treat",
      "quick fix",
      "medtech",
      "surgery"
    ],
    "icon": "⚕",
    "steps": [
      "**First Aid** (TECH + First Aid + 1d10): Stabilizes wounds at any wound state. Can **Quick Fix** common Critical Injuries (Foreign Object, Concussion, Torn Muscle). Everyone has at least **+2** in First Aid.",
      "**Paramedic** (TECH + Paramedic + 1d10): Does everything First Aid does, plus can **Quick Fix or Treat** all Critical Injuries except the deadliest (Dismembered Arm/Hand/Leg, Brain Injury, Lost Eye/Ear, Crushed Windpipe). Costs **double IP** to improve.",
      "**Surgery** (Medtech only): Treats even the deadliest Critical Injuries (DV17). Requires a hospital or proper facility. Only Medtechs have access to this skill.",
      "**Stabilization DVs**: Lightly Wounded **DV10**, Seriously Wounded **DV13**, Mortally Wounded **DV15** (heals to 1 HP, then Unconscious 1 min).",
      "**Quick Fix** removes an injury effect for the rest of the day, takes **1 minute**, and can be done on yourself.",
      "**Treatment** removes an injury effect **permanently**, takes **4 hours**, and **cannot** be done on yourself."
    ],
    "topic": "Medical"
  },
  {
    "id": "hospital-recovery",
    "title": "How hospital stays work",
    "tags": [
      "hospital",
      "recovery",
      "cost",
      "healing",
      "treatment",
      "bed",
      "stabilization",
      "money"
    ],
    "icon": "🏥",
    "steps": [
      "Hospital beds cost **100eb per night**. All stabilization and treatments below the highest DV procedure are included free.",
      "Treatment costs by highest DV needed: **DV10** = 50eb, **DV13** = 100eb, **DV15** = 500eb, **DV17+** = 1,000eb.",
      "While hospitalized, you heal via natural healing: **BODY HP per full day** of rest (light activity only).",
      "If the patient pushes themselves (does anything strenuous), they gain **no HP** that day and require **re-stabilization**.",
      "Trauma Team Silver members (500eb/month) get Surgery treatments charged extra at hospital prices. Trauma Team **Executive** (1,000eb/month) covers everything including Surgery."
    ],
    "topic": "Medical"
  },
  {
    "id": "natural-healing-rate",
    "title": "How fast you heal naturally",
    "tags": [
      "healing",
      "rest",
      "natural",
      "hp per day",
      "recovery",
      "body",
      "stabilize"
    ],
    "icon": "💤",
    "steps": [
      "You must be **stabilized** before natural healing begins. Without stabilization, you do not heal.",
      "Once stabilized, heal **HP equal to your BODY stat per full day** of rest (light activity only — no combat, no running, no strenuous work).",
      "If you push yourself (strenuous activity), you gain **no HP** that day and need to be **re-stabilized** before healing resumes.",
      "**Antibiotic** (Medtech pharmaceutical): an already-healing target heals an extra **2 HP/day for 1 week**. Only one use at a time.",
      "**Speedheal** (Medtech pharmaceutical): immediately heal **BODY + WILL** HP. Target must **NOT be Mortally Wounded**. Once per day.",
      "**Enhanced Antibodies** (cyberware, 500eb): heal **BODY x 2** per day resting after stabilization — doubles your natural rate."
    ],
    "topic": "Medical"
  },
  {
    "id": "can-i-heal-myself",
    "title": "Can you use First Aid on yourself?",
    "tags": [
      "self heal",
      "first aid",
      "treat yourself",
      "solo",
      "penalty",
      "quick fix",
      "stabilize"
    ],
    "icon": "🩹",
    "steps": [
      "**Yes**, you can stabilize yourself using First Aid or Paramedic — same check: **TECH + First Aid/Paramedic + 1d10** vs the wound state DV.",
      "**Quick Fix on yourself**: allowed. Takes 1 minute, removes the injury effect for the rest of the day.",
      "**Treatment on yourself**: **NOT allowed**. Treatment takes 4 hours and cannot be self-administered.",
      "You **cannot** perform Surgery on yourself (Medtechs included), unless the cyberware installation is Mall-level.",
      "Consider the **Seriously Wounded penalty (-2 to all Actions)** when rolling on yourself — your check is reduced if you are badly hurt.",
      "Tip: carry an **Airhypo** loaded with Speedheal or Stim. Applying a dose is **1 Action** and does not require a skill check."
    ],
    "topic": "Medical"
  },
  {
    "id": "treating-specific-injuries",
    "title": "Quick reference for common critical injury treatments",
    "tags": [
      "critical injury",
      "treatment",
      "quick fix",
      "surgery",
      "paramedic",
      "first aid",
      "broken",
      "DV"
    ],
    "icon": "🩸",
    "steps": [
      "**Foreign Object** (body or head): Quick Fix with First Aid or Paramedic **DV13** — removes it **permanently**. Easiest injury to fix.",
      "**Concussion**: Quick Fix with First Aid or Paramedic **DV13** — removes it **permanently**. No further treatment needed.",
      "**Torn Muscle**: Quick Fix with First Aid or Paramedic **DV13** — removes it **permanently**.",
      "**Broken Ribs / Broken Arm / Broken Leg**: Quick Fix with Paramedic **DV13** (temporary). Treatment: Paramedic **DV15** or Surgery **DV13** (permanent).",
      "**Collapsed Lung / Spinal Injury**: Quick Fix with Paramedic **DV15** (temporary). Treatment: Surgery **DV15** (permanent). Both increase Death Save Penalty by +1.",
      "**Dismembered Arm/Hand/Leg, Brain Injury, Lost Eye/Ear, Crushed Windpipe**: **No Quick Fix**. Treatment: Surgery **DV17** only. Requires a Medtech with Surgery skill and a hospital.",
      "Replacement for lost limbs: **cloned replacement** (no benefits, no Humanity Loss) or **full cyberware** (pay treatment cost + cyberware cost)."
    ],
    "topic": "Medical"
  },
  {
    "id": "how-long-until-healed",
    "title": "Recovery time estimates by wound severity",
    "tags": [
      "recovery",
      "time",
      "healing",
      "days",
      "rest",
      "wound",
      "how long",
      "body"
    ],
    "icon": "⏱",
    "steps": [
      "Natural healing rate: **BODY HP per day** of full rest. With Enhanced Antibodies cyberware: **BODY x 2 per day**.",
      "**Lightly Wounded** (above half HP): A character with BODY 6 missing ~10 HP heals in about **2 days** of rest.",
      "**Seriously Wounded** (at or below half HP): A character with BODY 6 missing ~20 HP heals in about **3-4 days** of rest.",
      "**Mortally Wounded** (below 1 HP): Must be stabilized first (healed to 1 HP, Unconscious 1 min). Then full rest — a BODY 6 character at 1/40 HP needs roughly **7 days**.",
      "**Speedheal** (Medtech pharma) instantly heals **BODY + WILL** HP once per day. **Antibiotic** adds +2 HP/day for a week. These stack with rest.",
      "**Hospital stay**: 100eb/night. Good option if the team can afford downtime and the cost."
    ],
    "topic": "Medical"
  },
  {
    "id": "what-is-therapy-for",
    "title": "What therapy does in Cyberpunk Red",
    "tags": [
      "therapy",
      "humanity",
      "cyberpsychosis",
      "empathy",
      "mental health",
      "medtech",
      "addiction"
    ],
    "icon": "🧠",
    "steps": [
      "Therapy **recovers Humanity** lost from cyberware installation, trauma, and other sources. It is the primary way to stave off cyberpsychosis.",
      "Therapy can also **cure addictions** (from street drugs like Black Lace, Smash, Synthcoke, etc.).",
      "Only a **Medtech** with the Medical Tech skill can perform therapy. Medtechs **cannot** do therapy on themselves.",
      "Each therapy session takes **1 entire week** — both the doctor and patient do nothing else during that time.",
      "Your effective **EMP** equals the tens digit of your current Humanity (e.g., 44 Humanity = EMP 4). Losing Humanity lowers your EMP, which affects social skills.",
      "If Humanity drops **below 0**, the character enters **cyberpsychosis** and becomes an NPC under GM control."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "therapy-mechanics",
    "title": "Full therapy session mechanics",
    "tags": [
      "therapy",
      "mechanics",
      "medical tech",
      "DV",
      "cost",
      "humanity",
      "addiction",
      "cyberpsychosis"
    ],
    "icon": "📋",
    "steps": [
      "The Medtech rolls **TECH + Medical Tech + 1d10** vs the therapy DV. This is NOT a patient roll — it is the doctor's skill check.",
      "**Addiction Therapy**: DV15, costs **1,000eb** (500eb materials). Frees the patient of one addiction. Patient auto-fails Secondary Effect rolls for **1 year** after.",
      "**Standard Humanity Loss Therapy**: DV15, costs **500eb** (100eb materials). Patient regains **2d6 Humanity**.",
      "**Extreme Humanity Loss Therapy**: DV17, costs **1,000eb** (500eb materials). Patient regains **4d6 Humanity**.",
      "Max Humanity is reduced by **2 per piece of cyberware** installed (4 per borgware). Cyberware with 0 HL on installation does not reduce max Humanity.",
      "Humanity **cannot be fully restored** without removing cyberware. Therapy only recovers up to the reduced maximum.",
      "Each session takes **1 full week** of downtime for both doctor and patient."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "improving-humanity",
    "title": "How to get Humanity back",
    "tags": [
      "humanity",
      "recovery",
      "therapy",
      "cyberware",
      "removal",
      "empathy",
      "cyberpsychosis",
      "EMP"
    ],
    "icon": "❤",
    "steps": [
      "**Therapy sessions** are the main method: Standard (regain **2d6**) or Extreme (regain **4d6**). Requires a Medtech and 1 week of downtime.",
      "**Removing cyberware** raises your maximum Humanity by **2 per piece removed** (4 per borgware). You still need therapy to actually recover the points.",
      "**Medical-grade cyberware** (replacement parts with no enhancements) has **no Humanity cost** — useful for replacing lost limbs without further loss.",
      "**Bodysculpting** for therapeutic purposes also has **no Humanity cost**.",
      "Your effective **EMP** is the tens digit of current Humanity. Recovering from 39 to 40 Humanity bumps EMP from 3 to 4 — a significant improvement to social skills.",
      "Prioritize therapy if any character drops below a Humanity tens threshold (e.g., 40, 30, 20). The EMP loss cascades into Empathy-linked skills."
    ],
    "topic": "Cyberware"
  },
  {
    "id": "using-smash",
    "title": "Smash — effects, duration, and addiction",
    "tags": [
      "smash",
      "drug",
      "street drug",
      "euphoria",
      "social",
      "addiction",
      "cheap"
    ],
    "icon": "💥",
    "steps": [
      "**Cost:** 10eb (Cheap). Administered via **Airhypo** (1 Action).",
      "**Primary Effect (4 hours):** Euphoric. Gain **+2** to Dance, Contortionist, Conversation, Human Perception, Persuasion, and Acting.",
      "When the Primary Effect ends, roll **WILL + Resist Torture/Drugs + 1d10 vs DV15** to avoid the Secondary Effect.",
      "**Secondary Effect (addiction):** Permanent **-2** to the same skills (Dance, Contortionist, Conversation, Human Perception, Persuasion, Acting). Crave more Smash periodically.",
      "Taking additional doses **extends** the Primary Effect by another 4 hours each.",
      "Addiction is permanent until cured by **therapy** (1,000eb, DV15, 1 week). After therapy, auto-fail Secondary Effect rolls for 1 year."
    ],
    "topic": "Drugs"
  },
  {
    "id": "using-synthcoke",
    "title": "Synthcoke — effects, duration, and addiction",
    "tags": [
      "synthcoke",
      "drug",
      "street drug",
      "REF",
      "paranoia",
      "addiction",
      "everyday"
    ],
    "icon": "❄",
    "steps": [
      "**Cost:** 20eb (Everyday). Administered via **Airhypo** (1 Action).",
      "**Primary Effect (4 hours):** REF **+1** (can exceed the normal max of 8). Prone to **paranoid ideation** — GM may call for Concentration checks or roleplay erratic behavior.",
      "When the Primary Effect ends, roll **WILL + Resist Torture/Drugs + 1d10 vs DV15** to avoid the Secondary Effect.",
      "**Secondary Effect (addiction):** REF **-2** unless currently under the Primary Effect. Cravings drive you to seek more.",
      "Additional doses extend the Primary Effect by 4 hours each. The REF bonus does not stack — it stays at +1.",
      "Synthcoke addicts become dependent on the drug just to function at normal REF. Without it, they are noticeably slower and clumsier."
    ],
    "topic": "Drugs"
  },
  {
    "id": "using-black-lace",
    "title": "Black Lace — why it's the most dangerous drug",
    "tags": [
      "black lace",
      "drug",
      "street drug",
      "humanity loss",
      "dangerous",
      "addiction",
      "frenzy",
      "REF"
    ],
    "icon": "🕳",
    "steps": [
      "**Cost:** 50eb (Costly). Administered via **Airhypo** (1 Action).",
      "**Primary Effect (24 hours):** Take **2d6 Humanity Loss** immediately. Ignore **Seriously Wounded** penalties for the duration.",
      "The Humanity Loss is returned **only if** you succeed the Secondary Effect save when the Primary Effect ends.",
      "When the Primary Effect ends, roll **WILL + Resist Torture/Drugs + 1d10 vs DV17** — this is a very difficult save.",
      "**Secondary Effect (addiction):** The 2d6 Humanity Loss becomes **permanent**. REF **-2** unless currently under the Primary Effect. This can push characters toward cyberpsychosis.",
      "Black Lace is favored by boostergangs and desperate solos. Repeated use spirals Humanity rapidly — a few bad rolls and the character is an NPC cyberpsycho.",
      "Cure: **Addiction therapy** (1,000eb, DV15, 1 week). Humanity still needs separate therapy to recover."
    ],
    "topic": "Drugs"
  },
  {
    "id": "using-blue-glass",
    "title": "Blue Glass — effects and hallucinations",
    "tags": [
      "blue glass",
      "drug",
      "street drug",
      "hallucination",
      "flash out",
      "addiction",
      "everyday"
    ],
    "icon": "🔵",
    "steps": [
      "**Cost:** 20eb (Everyday). Administered via **Airhypo** (1 Action).",
      "**Primary Effect (4 hours):** The GM decides when you \"**flash out**\" — you hallucinate and lose your Action for that Turn. Timing is entirely at the GM's discretion.",
      "When the Primary Effect ends, roll **WILL + Resist Torture/Drugs + 1d10 vs DV15** to avoid the Secondary Effect.",
      "**Secondary Effect (addiction):** You \"flash out\" approximately **once per hour** at the GM's discretion, even when sober.",
      "Plot twist: once addicted, taking Blue Glass now grants **immunity** to flashing out. The drug becomes the cure for its own side effect.",
      "Additional doses extend the Primary Effect by 4 hours each. Blue Glass is mainly a recreational drug — few combat applications."
    ],
    "topic": "Drugs"
  },
  {
    "id": "using-boost",
    "title": "Boost — intelligence enhancement drug",
    "tags": [
      "boost",
      "drug",
      "street drug",
      "INT",
      "intelligence",
      "addiction",
      "netrunner"
    ],
    "icon": "🧠",
    "steps": [
      "**Cost:** 50eb (Costly). Administered via **Airhypo** (1 Action).",
      "**Primary Effect (24 hours):** INT **+2** (can exceed the normal max of 8). Affects all INT-linked skills: Perception, Education skills, Tracking, etc.",
      "When the Primary Effect ends, roll **WILL + Resist Torture/Drugs + 1d10 vs DV17** — this is a hard save, same as Black Lace.",
      "**Secondary Effect (addiction):** INT **-2** permanently until cured. This devastates Netrunners and anyone relying on INT-based skills.",
      "Additional doses extend the Primary Effect by 24 hours each. The INT bonus does not stack beyond +2.",
      "Boost is popular with Netrunners, Techs, and Medtechs who need that extra INT edge — but the DV17 resist makes addiction a real risk."
    ],
    "topic": "Drugs"
  },
  {
    "id": "drug-interactions",
    "title": "Can you stack drugs? What happens?",
    "tags": [
      "drug",
      "stacking",
      "multiple",
      "interaction",
      "doses",
      "overdose",
      "combine"
    ],
    "icon": "⚠",
    "steps": [
      "Taking **multiple doses of the same drug** extends the Primary Effect by its full duration. The bonus does not stack — just the timer resets.",
      "The rules do not explicitly cover taking **different drugs simultaneously**. GM adjudication applies.",
      "Each drug has its own separate Secondary Effect roll when its Primary Effect ends. You could become addicted to multiple drugs at once.",
      "**Rapidetox** (Medtech pharmaceutical) immediately purges the effects of **any** drug, poison, or intoxicant. This ends the Primary Effect and skips the Secondary Effect roll entirely.",
      "Common GM ruling: stacking different drugs may impose additional penalties or require Endurance checks. The system is deliberately loose here."
    ],
    "topic": "Drugs"
  },
  {
    "id": "overdose-rules",
    "title": "What happens if you take too much",
    "tags": [
      "overdose",
      "drug",
      "too much",
      "death",
      "addiction",
      "secondary effect",
      "rapidetox"
    ],
    "icon": "☠",
    "steps": [
      "Cyberpunk Red does not have explicit overdose mechanics for street drugs. Multiple doses simply **extend** the Primary Effect duration.",
      "The real danger is **addiction**: each time the Primary Effect ends, you roll against the Secondary Effect DV. More doses = more chances to finally fail that roll.",
      "Black Lace is the most dangerous: each dose costs **2d6 Humanity Loss** upfront, and failing the DV17 resist makes it permanent.",
      "**Poison** has its own intensity system: Mild (DV11, 1d6 HP), Strong (DV13, 2d6 HP), Deadly (DV15, 3d6 HP). These deal damage direct to HP via **WILL + Resist Torture/Drugs + 1d10**.",
      "**Rapidetox** is the emergency solution: immediately purges all drug/poison/intoxicant effects. Only Medtechs can synthesize it (DV13 Medical Tech, 200eb materials)."
    ],
    "topic": "Drugs"
  },
  {
    "id": "dismembered-arm",
    "title": "Dismembered Arm — what happens and treatment",
    "tags": [
      "dismembered arm",
      "critical injury",
      "body",
      "lost arm",
      "surgery",
      "cyberarm",
      "death save"
    ],
    "icon": "🦾",
    "steps": [
      "Rolled on **Body Critical Injury table, result 2**. Arm is gone. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Immediate effect:** Drop all items held in that hand. The arm is completely unusable. **Death Save Penalty +1** (permanent until treated).",
      "**No Quick Fix exists.** This injury cannot be temporarily patched.",
      "**Treatment:** Surgery **DV17** only. Requires a Medtech with Surgery skill and a hospital facility. Treatment cost: **1,000eb** (V. Expensive).",
      "Replacement options: **Cloned arm** or **medical-grade cyberware** (no bonuses, no option slots, no Humanity Loss) just restores function. Or install a full **Cyberarm** (500eb, Hospital, HL 7, 4 option slots) for enhancement.",
      "Until treated, the character cannot use two-handed weapons, climb effectively, or perform any task requiring both arms."
    ],
    "topic": "Medical"
  },
  {
    "id": "dismembered-leg",
    "title": "Dismembered Leg — what happens and treatment",
    "tags": [
      "dismembered leg",
      "critical injury",
      "body",
      "lost leg",
      "surgery",
      "cyberleg",
      "move"
    ],
    "icon": "🦿",
    "steps": [
      "Rolled on **Body Critical Injury table, result 12**. Leg is gone. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Immediate effect:** MOVE reduced by **-6** (minimum 1). Character **cannot dodge** attacks. **Death Save Penalty +1** (permanent until treated).",
      "**No Quick Fix exists.** This injury cannot be temporarily patched.",
      "**Treatment:** Surgery **DV17** only. Requires a Medtech with Surgery skill and hospital. Treatment cost: **1,000eb** (V. Expensive).",
      "Replacement options: **Cloned leg** or **medical-grade cyberware** (no bonuses, no Humanity Loss) restores basic function. Full **Cyberleg** (100eb, Hospital, HL 3, 3 option slots) allows enhancements.",
      "A character with **2 Cyberlegs** gains immunity to fall damage and Critical Injuries from falls under 30 m/yds. Missing one leg is devastating in combat — prioritize treatment."
    ],
    "topic": "Medical"
  },
  {
    "id": "collapsed-lung",
    "title": "Collapsed Lung — effects and treatment",
    "tags": [
      "collapsed lung",
      "critical injury",
      "body",
      "move",
      "death save",
      "paramedic",
      "surgery"
    ],
    "icon": "🌬",
    "steps": [
      "Rolled on **Body Critical Injury table, result 4**. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Ongoing effect:** MOVE reduced by **-2** (minimum 1). **Death Save Penalty +1** (permanent until treated).",
      "**Quick Fix:** Paramedic **DV15** — removes the effect for the rest of the day. Takes 1 minute.",
      "**Treatment:** Surgery **DV15** — removes the effect permanently. Takes 4 hours. Cannot be self-administered.",
      "The Death Save Penalty increase is particularly dangerous. Combined with other injuries, it can make Death Saves very difficult to pass."
    ],
    "topic": "Medical"
  },
  {
    "id": "broken-ribs",
    "title": "Broken Ribs — effects and treatment",
    "tags": [
      "broken ribs",
      "critical injury",
      "body",
      "move",
      "bonus damage",
      "paramedic",
      "surgery"
    ],
    "icon": "🦴",
    "steps": [
      "Rolled on **Body Critical Injury table, result 5**. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Ongoing effect:** Every time you move **4+ m/yds** in a Turn, you re-suffer **5 Bonus Damage** directly to HP. This triggers on every movement, making combat extremely painful.",
      "**Quick Fix:** Paramedic **DV13** — removes the effect for the rest of the day. Takes 1 minute.",
      "**Treatment:** Paramedic **DV15** or Surgery **DV13** — removes the effect permanently. Takes 4 hours.",
      "Tactical note: a character with Broken Ribs should **stay still** in combat. Use cover, ranged attacks, and let allies come to you. Moving is self-inflicted damage."
    ],
    "topic": "Medical"
  },
  {
    "id": "concussion",
    "title": "Concussion — effects and treatment",
    "tags": [
      "concussion",
      "critical injury",
      "head",
      "all actions",
      "penalty",
      "first aid",
      "quick fix"
    ],
    "icon": "💫",
    "steps": [
      "Rolled on **Head Critical Injury table, result 5**. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Ongoing effect:** **-2 to all Actions**. This stacks with Seriously Wounded penalties if applicable.",
      "**Quick Fix:** First Aid or Paramedic **DV13** — removes the effect **permanently**. This is one of the easiest injuries to treat.",
      "Since Quick Fix removes it permanently, there is no separate Treatment needed. Just spend 1 minute and roll DV13.",
      "Despite being a head injury, Concussion has no Death Save Penalty increase. It is debilitating but not life-threatening on its own."
    ],
    "topic": "Medical"
  },
  {
    "id": "brain-injury",
    "title": "Brain Injury — effects and treatment",
    "tags": [
      "brain injury",
      "critical injury",
      "head",
      "all actions",
      "death save",
      "surgery",
      "severe"
    ],
    "icon": "🧠",
    "steps": [
      "Rolled on **Head Critical Injury table, result 3**. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Ongoing effect:** **-2 to all Actions**. **Death Save Penalty +1** (permanent until treated).",
      "**No Quick Fix exists.** This is one of the most severe head injuries.",
      "**Treatment:** Surgery **DV17** only. Requires a Medtech with Surgery skill and a full hospital. Treatment cost: **1,000eb** (V. Expensive).",
      "Functionally similar to a Concussion but far worse: no temporary fix, higher DV to treat, and it increases Death Save Penalty.",
      "Combined with Seriously Wounded (-2), a Brain Injury puts a character at **-4 to all Actions**. Prioritize getting to a hospital."
    ],
    "topic": "Medical"
  },
  {
    "id": "lost-eye",
    "title": "Lost Eye — effects and cybereye replacement",
    "tags": [
      "lost eye",
      "critical injury",
      "head",
      "ranged",
      "perception",
      "surgery",
      "cybereye",
      "death save"
    ],
    "icon": "👁",
    "steps": [
      "Rolled on **Head Critical Injury table, result 2**. Eye is gone. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Ongoing effect:** **-4 to Ranged Attacks** and **-4 to vision-based Perception** checks. **Death Save Penalty +1**.",
      "**No Quick Fix exists.** This cannot be temporarily patched.",
      "**Treatment:** Surgery **DV17** only. Hospital required. Treatment cost: **1,000eb** (V. Expensive).",
      "Replacement: a **Cybereye** (100eb, Clinic install, HL 7) restores vision and can hold options like **IR/UV vision, targeting scope (+1 Aimed Shots), or Low Light**.",
      "Note: **Damaged Eye** (result 4) is less severe (-2 penalties instead of -4, no Death Save increase) and can be Quick Fixed with Paramedic DV15."
    ],
    "topic": "Medical"
  },
  {
    "id": "lost-ear",
    "title": "Lost Ear — effects and treatment",
    "tags": [
      "lost ear",
      "critical injury",
      "head",
      "hearing",
      "perception",
      "move",
      "surgery",
      "cyberaudio"
    ],
    "icon": "👂",
    "steps": [
      "Rolled on **Head Critical Injury table, result 12**. Ear is gone. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Ongoing effect:** Moving **4+ m/yds** means **no Move Action next Turn** (balance disruption). **-4 to hearing-based Perception**. **Death Save Penalty +1**.",
      "**No Quick Fix exists.** This cannot be temporarily patched.",
      "**Treatment:** Surgery **DV17** only. Hospital required. Treatment cost: **1,000eb** (V. Expensive).",
      "Replacement: **Cyberaudio Suite** (500eb, Clinic, HL 7) restores hearing and offers options like **radio communicator, radar detector, homing tracer, or bug detector**.",
      "Note: **Damaged Ear** (result 10) is less severe (-2 hearing Perception, same movement penalty) and can be Quick Fixed with Paramedic DV13."
    ],
    "topic": "Medical"
  },
  {
    "id": "foreign-object",
    "title": "Foreign Object stuck in you — what to do",
    "tags": [
      "foreign object",
      "critical injury",
      "body",
      "head",
      "first aid",
      "quick fix",
      "move",
      "easy"
    ],
    "icon": "🔩",
    "steps": [
      "Can occur on **both Body (result 7) and Head (result 7)** Critical Injury tables. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Ongoing effect:** Moving **4+ m/yds** causes you to re-suffer **5 Bonus Damage** directly to HP each time.",
      "**Quick Fix:** First Aid or Paramedic **DV13** — removes the Foreign Object **permanently**. This is the easiest critical injury to treat.",
      "Since Quick Fix removes it permanently, there is no separate Treatment step needed. Spend 1 minute and roll DV13.",
      "Anyone can attempt this — First Aid is all you need, and everyone has at least **+2** in First Aid.",
      "**Expansive ammo** (100eb) forces a re-roll if the Critical Injury result is Foreign Object, replacing it with a different injury."
    ],
    "topic": "Medical"
  },
  {
    "id": "spinal-injury",
    "title": "Spinal Injury — effects and treatment",
    "tags": [
      "spinal injury",
      "critical injury",
      "body",
      "no action",
      "death save",
      "paramedic",
      "surgery"
    ],
    "icon": "⚡",
    "steps": [
      "Rolled on **Body Critical Injury table, result 10**. **5 Bonus Damage** dealt directly to HP (ignores armor).",
      "**Ongoing effect:** On your **next Turn**, you cannot take an Action (you can still Move). **Death Save Penalty +1** (permanent until treated).",
      "The \"no Action next Turn\" triggers each time you take your turn — it is not a one-time effect. You lose your Action every turn until fixed.",
      "**Quick Fix:** Paramedic **DV15** — removes the effect for the rest of the day. Takes 1 minute.",
      "**Treatment:** Surgery **DV15** — removes the effect permanently. Takes 4 hours. Hospital required.",
      "This is one of the most combat-crippling injuries: you can move but cannot attack, use skills, or interact. Combined with the Death Save increase, it demands immediate attention."
    ],
    "topic": "Medical"
  },
  {
    "id": "fighting-in-darkness",
    "title": "Penalties for darkness and how vision helps",
    "tags": [
      "darkness",
      "night",
      "low light",
      "infrared",
      "IR",
      "visibility",
      "penalty",
      "cybereye"
    ],
    "icon": "🌙",
    "steps": [
      "**Low lighting / night:** **-1 penalty** to relevant skill checks (perception, combat, etc.).",
      "**Smoke or total darkness:** **-4 penalty** to tasks obscured by the condition.",
      "**Low Light cybereye option:** Negates the -1 penalty for low-light conditions. Does not help in total darkness or smoke.",
      "**Infrared (IR) cybereye option:** Allows seeing heat signatures. Negates darkness penalties when targets emit heat. Smoke may still obscure if dense.",
      "Without any vision enhancement, fighting in total darkness means **-4 to attacks and perception**. Combined with Seriously Wounded (-2), a character is at -6.",
      "Tactical tip: if your team has IR and the enemy does not, **shoot out the lights**. This gives you a massive advantage."
    ],
    "topic": "Combat"
  },
  {
    "id": "fighting-underwater",
    "title": "Underwater combat rules",
    "tags": [
      "underwater",
      "drowning",
      "swimming",
      "combat",
      "breath",
      "BODY",
      "damage",
      "gills"
    ],
    "icon": "🌊",
    "steps": [
      "Characters can hold their breath for a number of **minutes equal to BODY**. After that, take **BODY as damage** direct to HP at the start of each Turn (ignores armor).",
      "Ranged weapons generally do not work underwater (GM discretion). Melee weapons function but may suffer penalties.",
      "**Gills** cyberware (1,000eb, Hospital, HL 7) lets you breathe underwater indefinitely.",
      "**Independent Air Supply** cyberware (1,000eb, Hospital, HL 2) provides **30 minutes** of oxygen with a 1-hour refill time.",
      "Movement underwater typically requires **Athletics (DEX + Athletics + 1d10)** checks. MOVE may be reduced at GM discretion.",
      "Explosives are especially dangerous underwater — water transmits shockwaves effectively. GM may rule increased damage or range."
    ],
    "topic": "Combat"
  },
  {
    "id": "fighting-while-driving",
    "title": "Shooting from a moving vehicle",
    "tags": [
      "vehicle",
      "driving",
      "shooting",
      "passenger",
      "combat",
      "maneuver",
      "glass",
      "action"
    ],
    "icon": "🚗",
    "steps": [
      "The **driver** uses their Action for driving (maneuvers, maintaining control). If REF + Control Skill > 9, basic driving needs no Action — freeing them to shoot.",
      "**Passengers** can take normal combat Actions (shoot, reload, etc.) without penalty while the vehicle is moving.",
      "**Vehicle glass has no HP and provides no cover.** You can target occupants directly through windows.",
      "To dodge a vehicle: **DEX + Evasion + 1d10 vs DV13**. Success = you can choose to be on top of the vehicle.",
      "**Ramming:** Both the vehicle and target take **6d6 damage**. Everyone involved suffers the **Whiplash** Critical Injury (Death Save Penalty +1).",
      "**Vehicle Weak Points (Aimed Shot):** -8 penalty. If successful, damage through SP is multiplied by **x2**. If the vehicle is stationary, melee auto-hits."
    ],
    "topic": "Combat"
  },
  {
    "id": "multiple-enemies",
    "title": "Tips for fighting outnumbered",
    "tags": [
      "outnumbered",
      "tactics",
      "multiple",
      "enemies",
      "cover",
      "autofire",
      "grenade",
      "retreat"
    ],
    "icon": "⚔",
    "steps": [
      "**Use cover aggressively.** Cover blocks damage entirely if the attack cannot destroy it. Excess damage through destroyed cover is lost (except explosives).",
      "**Autofire and Suppressive Fire** are force multipliers. Suppressive Fire (25m x 25m area) forces everyone in the zone to beat **DV15 Athletics/Evasion** or take damage.",
      "**Explosives** hit all targets in a **10m x 10m area** (5x5 squares). One grenade can hit many enemies. REF 8+ targets can individually dodge.",
      "**Bottleneck the enemy.** Force them through doorways or narrow spaces. They cannot all attack at once, and you can pick them off.",
      "**Choke and grapple** targets to use them as cover against their allies. Attacks against grappled pairs are at **-4 penalty** with risk of hitting the wrong person.",
      "Know when to **retreat**. If outnumbered and outgunned, use smoke grenades, suppressive fire, or vehicle escape. Staying is not always the best option."
    ],
    "topic": "Combat"
  },
  {
    "id": "retreat-tactics",
    "title": "How to disengage and retreat safely",
    "tags": [
      "retreat",
      "disengage",
      "escape",
      "run",
      "suppressive",
      "smoke",
      "vehicle",
      "move"
    ],
    "icon": "🏃",
    "steps": [
      "**Running:** Use your Move Action to move up to your MOVE stat in m/yds. Use the **Run** Action to move an additional MOVE distance (total = 2x MOVE in one turn).",
      "**Suppressive Fire** to cover your retreat: designate a 25m x 25m area. Anyone entering or inside must beat **DV15** or take damage. Enemies will think twice about following.",
      "**Smoke or darkness** eliminates line of sight. Smoke grenades impose **-4 penalty** to attacks through them. Retreat behind the smoke screen.",
      "**Vehicles:** Getting into an unlocked vehicle is a Move Action. Starting it is an Action. On the next turn, the driver jumps to the **top of the Initiative Queue** and can drive away.",
      "If enemies are in melee range, **Grab and Throw** (DEX + Brawling) can create distance. A thrown target is **Prone** and must spend an Action to stand.",
      "Consider having a **rear guard** use Suppressive Fire or Hold Action to shoot anyone who pursues, while the rest of the team moves to safety."
    ],
    "topic": "Combat"
  },
  {
    "id": "using-explosives-tactically",
    "title": "When and how to use grenades effectively",
    "tags": [
      "grenade",
      "explosives",
      "area",
      "damage",
      "heavy weapons",
      "cover",
      "tactics",
      "dodge"
    ],
    "icon": "💣",
    "steps": [
      "All explosives deal damage in a **10m x 10m area** (5x5 squares), centered on the target. Roll damage **once** for all targets in the blast.",
      "**Throwing a grenade:** Use an Action. Roll **DEX + Athletics + 1d10** vs Grenade Launcher DVs on the range table (up to 25 m/yds).",
      "**Grenade Launcher:** Roll **REF + Heavy Weapons + 1d10** vs range table. Costs 2 grenade ammo per shot. Deals **6d6 damage**.",
      "If you **miss**, the GM decides where in the area the explosive lands. It still detonates and can hit unintended targets.",
      "**REF 8+ targets** can individually attempt to dodge the blast. Others in the area are hit automatically.",
      "Explosives **ignore cover** that the damage is sufficient to destroy. If the cover survives, targets behind it take **no damage** — the excess is lost.",
      "Tactical use: open a fight with a grenade into a cluster of enemies before they spread out. Combine with Suppressive Fire to control the battlefield."
    ],
    "topic": "Combat"
  },
  {
    "id": "best-programs-to-bring",
    "title": "Program loadout recommendations by situation",
    "tags": [
      "programs",
      "loadout",
      "cyberdeck",
      "netrunning",
      "black ice",
      "defense",
      "attack",
      "slots"
    ],
    "icon": "📦",
    "steps": [
      "**Standard deck has 7 slots.** Black ICE takes 2 slots each. Plan carefully — you cannot swap programs mid-run (installing takes 1 hour).",
      "**Must-haves for any run:** **Sword** (3d6 vs Black ICE, 2d6 vs other) and **Shield** (blocks first brain damage). These cover offense and defense basics.",
      "**Anti-Black ICE focus:** Bring **Sword** (3d6 vs Black ICE) and consider **Armor** (reduces brain damage by 4). Black ICE is the primary threat in most architectures.",
      "**Anti-Netrunner focus:** Bring **Banhammer** (3d6 vs non-Black ICE, 2d6 vs Black ICE), **Flak** (reduces enemy ATK to 0), and **DeckKRASH** (forces unsafe Jack Out).",
      "**Stealth run:** Bring **Eraser** (+2 Cloak) and **See Ya** (+2 Pathfinder) to sneak through architectures without fighting. Add **Worm** (+2 Backdoor) for password-heavy setups.",
      "**Speed run:** **Speedy Gonzalvez** (+2 Speed) helps win initiative against Black ICE. Pair with **Sword** and **Shield** for quick, aggressive penetration.",
      "On an Excellent deck (9 slots), consider adding **Hellbolt** (2d6 brain damage + fire) for a secondary anti-personnel weapon."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "net-architecture-difficulty",
    "title": "What architecture difficulty means for a Netrunner",
    "tags": [
      "architecture",
      "difficulty",
      "floors",
      "password",
      "DV",
      "black ice",
      "demon",
      "netrunning"
    ],
    "icon": "🏚",
    "steps": [
      "**Small (3-6 floors):** Portable, usually on a device or cyberdeck. Max 2 Control Nodes. Cost: 1,000eb/floor. Typical for personal or small business security.",
      "**Medium (7-12 floors):** Stationary installation. Max 3 Control Nodes. Cost: 5,000eb/floor. Corporate offices, gang hideouts, secure facilities.",
      "**Large (13-18 floors):** Stationary, extremely expensive. Cost: 10,000eb/floor. Major corporate or government installations.",
      "**Password DVs** range from DV6 (500eb) to DV12 (10,000eb). Your **Interface + 1d10** must beat this. Low-rank Netrunners may struggle with DV10+ passwords.",
      "**Black ICE stacking:** 2 Black ICE on one floor = double cost of both. 3 on one floor = triple each. Max 1 Demon per floor (1 per 6 floors total). Multiple ICE on one floor is a death trap.",
      "Use **Pathfinder** before advancing: see floors ahead equal to your check, up to the first obstruction you cannot beat. This prevents walking blind into Black ICE."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "what-if-netrunner-dies-in-net",
    "title": "What happens to the body if brain-dead in NET",
    "tags": [
      "netrunner",
      "death",
      "brain dead",
      "body",
      "NET",
      "jack out",
      "HP",
      "brain damage"
    ],
    "icon": "💀",
    "steps": [
      "Netrunner brain HP equals their **regular HP**. When brain HP hits 0 from NET damage (Black ICE, enemy programs, Zap), the Netrunner is **brain-dead**.",
      "**Brain-dead means dead.** The body is technically alive but there is no mind left. This is not Mortally Wounded — there are no Death Saves. The character is gone.",
      "The physical body slumps unconscious. If wearing **Virtuality Goggles**, the body was already visible and accessible in meatspace throughout the run.",
      "Without Virtuality Goggles, the Netrunner is **effectively Unconscious** in meatspace while jacked in — they cannot perceive or react to the real world at all.",
      "**Unsafe Jack Out** (forced by DeckKRASH, Giant, or Kraken): the Netrunner suffers the effects of **every Black ICE** they have not yet defeated in the architecture. This can easily kill.",
      "Prevention: bring **Armor** (reduces brain damage by 4), **Shield** (blocks first hit), and know when to **Slide** (flee one Black ICE per turn) or Jack Out safely."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "netrun-while-team-fights",
    "title": "Splitting attention between NET and meatspace",
    "tags": [
      "netrunner",
      "meatspace",
      "split",
      "action",
      "team",
      "combat",
      "NET actions",
      "virtuality"
    ],
    "icon": "⚖",
    "steps": [
      "On each Turn, the Netrunner chooses **one**: take a **Meat Action** (normal action in reality) OR take **NET Actions** (2-5 actions in the NET depending on Interface rank).",
      "You **always** get your **Move Action** regardless of which you choose. You can physically reposition even while taking NET Actions.",
      "**Virtuality Goggles** are essential: they overlay cyberspace on your real-world vision, so you can see both. Without them, you are blind and deaf in meatspace while in the NET.",
      "**Interface Rank 1-3:** 2 NET Actions. **Rank 4-6:** 3 NET Actions. **Rank 7-9:** 4 NET Actions. **Rank 10:** 5 NET Actions.",
      "Coordinating with the team: the Netrunner can use **Control Nodes** to operate cameras, turrets, drones, and doors — directly supporting the firefight from the NET.",
      "Tactical tip: have the team **defend the Netrunner's body** while they work the NET. The runner can open locked doors, disable turrets, and control drones to support the team. Alternate between Meat and NET Actions as the situation demands."
    ],
    "topic": "Netrunning"
  },
  {
    "id": "using-a-pistol",
    "title": "Using a Medium Pistol",
    "topic": "Equipment",
    "tags": [
      "pistol",
      "medium pistol",
      "handgun",
      "sidearm",
      "concealable",
      "ranged"
    ],
    "icon": "🔫",
    "steps": [
      "Medium Pistol deals **2d6 damage**, uses **Handgun Skill** (REF + Handgun + 1d10 vs DV).",
      "Rate of fire is **ROF 2** -- you can make **two attacks per Action**, splitting them across movement if desired.",
      "Magazine holds **12 rounds** (M Pistol ammo type). Reloading costs an Action.",
      "The medium pistol is **concealable** and requires only **1 hand** to fire.",
      "Single shot DVs by range: **0-6m: DV13**, **7-12m: DV15**, **13-25m: DV20**, **26-50m: DV25**, **51-100m: DV30**. Cannot fire beyond 100m.",
      "Cost is **50eb (Costly)**. Compatible with all standard bullet ammo types and weapon attachments (3 slots).",
      "Solid all-rounder sidearm. Cheap, concealable, decent ROF -- the everyday carry of Night City."
    ]
  },
  {
    "id": "using-a-heavy-pistol",
    "title": "Using a Heavy Pistol",
    "topic": "Equipment",
    "tags": [
      "heavy pistol",
      "handgun",
      "concealable",
      "ranged",
      "3d6"
    ],
    "icon": "🔫",
    "steps": [
      "Heavy Pistol deals **3d6 damage**, uses **Handgun Skill** (REF + Handgun + 1d10 vs DV).",
      "Rate of fire is **ROF 2** -- two attacks per Action, same as a medium pistol.",
      "Magazine holds **8 rounds** (H Pistol ammo type). Reloading costs an Action.",
      "The heavy pistol is **concealable** and requires only **1 hand** to fire.",
      "Uses the **Pistol DV table**: **0-6m: DV13**, **7-12m: DV15**, **13-25m: DV20**, **26-50m: DV25**, **51-100m: DV30**.",
      "Cost is **100eb (Premium)**. Compatible with all standard bullet ammo types and weapon attachments (3 slots).",
      "A solid upgrade from the medium pistol -- more damage per shot with the same concealability, at the cost of a smaller magazine."
    ]
  },
  {
    "id": "using-a-very-heavy-pistol",
    "title": "Using a Very Heavy Pistol",
    "topic": "Equipment",
    "tags": [
      "very heavy pistol",
      "vh pistol",
      "handgun",
      "ranged",
      "4d6",
      "hand cannon"
    ],
    "icon": "🔫",
    "steps": [
      "Very Heavy Pistol deals **4d6 damage**, uses **Handgun Skill** (REF + Handgun + 1d10 vs DV).",
      "Rate of fire is only **ROF 1** -- takes your entire Action for a single shot. You can still split movement around it.",
      "Magazine holds **8 rounds** (VH Pistol ammo type). Reloading costs an Action.",
      "The VH pistol is **NOT concealable** but requires only **1 hand** to fire.",
      "Uses the **Pistol DV table**: **0-6m: DV13**, **7-12m: DV15**, **13-25m: DV20**, **26-50m: DV25**, **51-100m: DV30**.",
      "Cost is **100eb (Premium)**. Compatible with all standard bullet ammo types and weapon attachments (3 slots).",
      "The hand cannon of the pistol world -- massive damage per shot, but the ROF 1 and lack of concealability are real trade-offs."
    ]
  },
  {
    "id": "using-an-smg",
    "title": "Using an SMG",
    "topic": "Equipment",
    "tags": [
      "smg",
      "submachine gun",
      "autofire",
      "suppressive fire",
      "concealable",
      "ranged"
    ],
    "icon": "🔫",
    "steps": [
      "SMG deals **2d6 damage** on single shots, uses **Handgun Skill** (REF + Handgun + 1d10 vs DV).",
      "Rate of fire for single shots is **ROF 1**. However, the SMG can use **Autofire** and **Suppressive Fire**.",
      "**Autofire**: Costs 10 bullets. Roll **REF + Autofire + 1d10** vs Autofire DV. If you beat the DV, roll **2d6 x (amount beaten, max 3)**.",
      "**Autofire DVs**: **0-6m: DV20**, **7-12m: DV17**, **13-25m: DV20**, **26-50m: DV25**, **51-100m: DV30**.",
      "**Suppressive Fire**: Costs 10 bullets. Everyone on foot within **25m**, out of cover, and in line of sight must roll **WILL + Concentration + 1d10** vs your **REF + Autofire + 1d10** or be forced into cover.",
      "Magazine holds **30 rounds** (uses M Pistol ammo). The SMG is **concealable** and **1-handed**.",
      "Cost is **100eb (Premium)**. Single shot uses the **SMG DV table**: **0-6m: DV15**, **7-12m: DV13**, **13-25m: DV15**, **26-50m: DV20**, **51-100m: DV25**."
    ]
  },
  {
    "id": "using-a-heavy-smg",
    "title": "Using a Heavy SMG",
    "topic": "Equipment",
    "tags": [
      "heavy smg",
      "submachine gun",
      "autofire",
      "suppressive fire",
      "ranged",
      "3d6"
    ],
    "icon": "🔫",
    "steps": [
      "Heavy SMG deals **3d6 damage** on single shots, uses **Handgun Skill** (REF + Handgun + 1d10 vs DV).",
      "Rate of fire for single shots is **ROF 1**. Can use **Autofire (max multiplier 3)** and **Suppressive Fire**, same as a standard SMG.",
      "**Autofire**: Costs 10 bullets. Roll **REF + Autofire + 1d10** vs Autofire DV. Hit = **2d6 x (amount beaten, max 3)**.",
      "Uses the **SMG DV table** for both single shot and autofire ranges.",
      "Magazine holds **40 rounds** (uses H Pistol ammo) -- more ammo than the standard SMG.",
      "The Heavy SMG is **NOT concealable** but still **1-handed**.",
      "Cost is **100eb (Premium)**. A meaningful upgrade over the standard SMG: more damage, bigger magazine, but you lose concealability."
    ]
  },
  {
    "id": "using-a-shotgun",
    "title": "Using a Shotgun",
    "topic": "Equipment",
    "tags": [
      "shotgun",
      "shells",
      "slug",
      "shoulder arms",
      "spread",
      "ranged"
    ],
    "icon": "🔫",
    "steps": [
      "Shotgun deals **5d6 damage** with slugs, uses **Shoulder Arms Skill** (REF + Shoulder Arms + 1d10 vs DV).",
      "Rate of fire is **ROF 1**. Magazine holds **4 rounds** (Slug ammo). Reloading costs an Action. Requires **2 hands**.",
      "**Slug DVs**: **0-6m: DV13**, **7-12m: DV15**, **13-25m: DV20**, **26-50m: DV25**, **51-100m: DV30**, **101-200m: DV35**.",
      "**Shotgun Shells** are the unique feature: 1 Attack (REF + Shoulder Arms + 1d10) vs flat **DV13**. If you hit, **every target** in front of you **within 6m** (3 squares) that you can see takes **3d6 damage**.",
      "Shells **cannot** be used for Aimed Shots. Targets with **REF 8+** can individually attempt to dodge shell spread.",
      "The shotgun is **NOT concealable**. Cost is **500eb (Expensive)**.",
      "Shells make the shotgun devastating in close quarters against groups. Slugs give you range but only hit one target."
    ]
  },
  {
    "id": "using-an-assault-rifle",
    "title": "Using an Assault Rifle",
    "topic": "Equipment",
    "tags": [
      "assault rifle",
      "rifle",
      "autofire",
      "suppressive fire",
      "shoulder arms",
      "ranged"
    ],
    "icon": "🔫",
    "steps": [
      "Assault Rifle deals **5d6 damage** on single shots, uses **Shoulder Arms Skill** (REF + Shoulder Arms + 1d10 vs DV).",
      "Rate of fire for single shots is **ROF 1**. Can use **Autofire (max multiplier 4)** and **Suppressive Fire**.",
      "**Single shot DVs**: **0-6m: DV17**, **7-12m: DV16**, **13-25m: DV13**, **26-50m: DV15**, **51-100m: DV20**, **101-200m: DV25**, **201-400m: DV30**.",
      "**Autofire DVs**: **0-6m: DV22**, **7-12m: DV20**, **13-25m: DV17**, **26-50m: DV20**, **51-100m: DV25**. Autofire max multiplier of **4** (vs SMG's 3).",
      "Autofire costs **10 bullets**. Hit = **2d6 x (amount beaten, max 4)**. At optimal range this is devastating.",
      "Magazine holds **25 rounds** (Rifle ammo). Requires **2 hands**. **NOT concealable**. Cost is **500eb (Expensive)**.",
      "The AR excels at medium range (13-25m, DV13) and has the best autofire multiplier of standard weapons. The go-to combat weapon for Solos."
    ]
  },
  {
    "id": "using-a-sniper-rifle",
    "title": "Using a Sniper Rifle",
    "topic": "Equipment",
    "tags": [
      "sniper rifle",
      "sniper",
      "long range",
      "shoulder arms",
      "ranged",
      "sniping scope"
    ],
    "icon": "🎯",
    "steps": [
      "Sniper Rifle deals **5d6 damage**, uses **Shoulder Arms Skill** (REF + Shoulder Arms + 1d10 vs DV).",
      "Rate of fire is **ROF 1** -- single shot only. No Autofire, no Suppressive Fire.",
      "**DVs by range**: **0-6m: DV30**, **7-12m: DV25**, **13-25m: DV25**, **26-50m: DV15**, **51-100m: DV13**, **101-200m: DV15**, **201-400m: DV17**, **401-800m: DV20**.",
      "The sniper excels at **long range** -- DV13 at 51-100m and DV15 at 26-50m. It is terrible up close (DV30 at 0-6m).",
      "Magazine holds **4 rounds** (Rifle ammo). Requires **2 hands**. **NOT concealable**. Cost is **500eb (Expensive)**.",
      "Pair with a **Sniping Scope** (100eb, 1 slot): see detail 800m away, **+1 to single shot/Aimed Shot at 51m+**. Does not stack with TeleOptics.",
      "Aimed Shots are particularly potent with a sniper: **-8 penalty** but targeting the **Head** multiplies damage through armor by **x2**."
    ]
  },
  {
    "id": "using-a-bow",
    "title": "Using a Bow or Crossbow",
    "topic": "Equipment",
    "tags": [
      "bow",
      "crossbow",
      "archery",
      "arrows",
      "ranged",
      "silent"
    ],
    "icon": "🏹",
    "steps": [
      "Bow/Crossbow deals **4d6 damage**, uses **Archery Skill** (REF + Archery + 1d10 vs DV).",
      "Rate of fire is **ROF 1**. Requires **2 hands**. **NOT concealable**. Cost is **100eb (Premium)**.",
      "**DVs by range**: **0-6m: DV15**, **7-12m: DV13**, **13-25m: DV15**, **26-50m: DV17**, **51-100m: DV20**, **101-200m: DV22**.",
      "Key advantage: **never needs a Reload Action**. Basic arrows are retrievable after combat.",
      "Bows can use **special arrow ammo types**: Armor-Piercing (ablate 2), Biotoxin (DV15, 3d6 HP), Expansive, Incendiary, Poison (DV13, 2d6 HP), Rubber, Sleep (DV13, unconscious), Smart.",
      "Arrow ammo is purchased in increments of **10**, same as bullets. Special arrows make the bow extremely versatile.",
      "A quiet, cheap, reload-free weapon with access to the widest range of special ammo. Ideal for stealth ops and non-lethal takedowns."
    ]
  },
  {
    "id": "using-a-grenade-launcher",
    "title": "Using a Grenade Launcher",
    "topic": "Equipment",
    "tags": [
      "grenade launcher",
      "heavy weapons",
      "explosive",
      "grenades",
      "area",
      "ranged"
    ],
    "icon": "💥",
    "steps": [
      "Grenade Launcher deals **6d6 damage** (explosive), uses **Heavy Weapons Skill** (REF + Heavy Weapons + 1d10 vs DV). Heavy Weapons costs **double IP** to level.",
      "Rate of fire is **ROF 1**. Magazine holds **2 grenades**. Requires **2 hands**. **NOT concealable**. Cost is **500eb (Expensive)**.",
      "**DVs by range**: **0-6m: DV16**, **7-12m: DV15**, **13-25m: DV15**, **26-50m: DV20**, **51-100m: DV20**, **101-200m: DV25**, **201-400m: DV30**.",
      "Explosives deal damage to **all targets in a 10m x 10m area** (5x5 squares) centered on the target. Roll damage **once** for all.",
      "If you **miss**, the GM decides where the explosive actually lands in that area.",
      "Targets with **REF 8+** can individually attempt to dodge. Explosives **ignore cover** if the blast would destroy it; otherwise cover fully protects.",
      "Can fire different grenade types: Basic (6d6), Flashbang, Smoke, Teargas, EMP, Biotoxin, Incendiary, Poison. Each grenade purchased individually."
    ]
  },
  {
    "id": "using-a-rocket-launcher",
    "title": "Using a Rocket Launcher",
    "topic": "Equipment",
    "tags": [
      "rocket launcher",
      "heavy weapons",
      "explosive",
      "rocket",
      "area",
      "ranged"
    ],
    "icon": "🚀",
    "steps": [
      "Rocket Launcher deals **8d6 damage** (explosive), uses **Heavy Weapons Skill** (REF + Heavy Weapons + 1d10 vs DV). Heavy Weapons costs **double IP** to level.",
      "Rate of fire is **ROF 1**. Magazine holds **1 rocket**. Requires **2 hands**. **NOT concealable**. Cost is **500eb (Expensive)**.",
      "Requires **BODY 11+** to fire unless weapon is mounted (vehicle, tripod, etc.).",
      "**DVs by range**: **0-6m: DV17**, **7-12m: DV15**, **13-25m: DV15**, **26-50m: DV20**, **51-100m: DV20**, **101-200m: DV25**, **201-400m: DV30**.",
      "Explosives deal damage to **all targets in a 10m x 10m area** (5x5 squares). Roll damage once for all targets.",
      "If you miss, GM decides landing spot. **REF 8+** targets can dodge. Cover protects unless the blast would destroy it.",
      "Rockets can use **Smart ammo** (miss by 4 or less = second chance: d10+10 vs DV). The single-shot magazine means every round counts."
    ]
  },
  {
    "id": "using-melee-light",
    "title": "Using Light Melee Weapons",
    "topic": "Equipment",
    "tags": [
      "light melee",
      "knife",
      "tomahawk",
      "melee",
      "concealable",
      "1d6"
    ],
    "icon": "🔪",
    "steps": [
      "Light Melee Weapons (knife, tomahawk) deal **1d6 damage**. Uses **DEX + Melee Weapon Skill + 1d10** vs Defender's **DEX + Evasion + 1d10**.",
      "Rate of fire is **ROF 2** -- two attacks per Action, and you can split attacks across movement.",
      "Light melee weapons are **concealable** and require **1 hand**. Cost is **50eb (Costly)**.",
      "All melee weapons **ignore half** of Defender's armor (round up). Example: **SP 11** armor is treated as **SP 6** vs melee.",
      "If wielder has **BODY 8+**, they can wield a two-handed melee weapon in one hand.",
      "Can be **thrown** using **DEX + Athletics + 1d10** up to 25m using Grenade Launcher DVs. Thrown melee weapons deal their stated damage but do **NOT** halve SP.",
      "The knife is the quintessential concealable backup weapon. Low damage, but ROF 2 and armor-halving keep it relevant."
    ]
  },
  {
    "id": "using-melee-medium",
    "title": "Using Medium Melee Weapons",
    "topic": "Equipment",
    "tags": [
      "medium melee",
      "bat",
      "crowbar",
      "machete",
      "melee",
      "2d6"
    ],
    "icon": "⚔️",
    "steps": [
      "Medium Melee Weapons (bat, crowbar, machete) deal **2d6 damage**. Uses **DEX + Melee Weapon Skill + 1d10** vs Defender's **DEX + Evasion + 1d10**.",
      "Rate of fire is **ROF 2** -- two attacks per Action.",
      "Medium melee weapons are **NOT concealable** and require **1 hand**. Cost is **50eb (Costly)**.",
      "All melee weapons **ignore half** of Defender's armor (round up). Example: **SP 11** becomes **SP 6** against melee.",
      "If wielder has **BODY 8+**, they can wield a two-handed melee weapon in one hand.",
      "Damage is based on **weapon classification, not BODY stat** -- that is Brawling. Two attacks of 2d6 with armor halving makes medium melee quite effective.",
      "The sweet spot for melee: decent damage, ROF 2, one-handed. A machete or crowbar is a common booster gang weapon for good reason."
    ]
  },
  {
    "id": "using-melee-heavy",
    "title": "Using Heavy Melee Weapons",
    "topic": "Equipment",
    "tags": [
      "heavy melee",
      "sword",
      "spiked bat",
      "lead pipe",
      "melee",
      "3d6"
    ],
    "icon": "⚔️",
    "steps": [
      "Heavy Melee Weapons (lead pipe, sword, spiked bat) deal **3d6 damage**. Uses **DEX + Melee Weapon Skill + 1d10** vs Defender's **DEX + Evasion + 1d10**.",
      "Rate of fire is **ROF 2** -- two attacks per Action.",
      "Heavy melee weapons are **NOT concealable** and require **2 hands** (unless wielder has **BODY 8+**, then 1 hand).",
      "All melee weapons **ignore half** of Defender's armor (round up). Against **SP 11**, you only face **SP 6**.",
      "Cost is **100eb (Premium)**. Two swings at 3d6 each with armor halving is devastating -- up to **36 damage** before armor per Action.",
      "Damage is based on **weapon classification, not BODY stat**. Even a BODY 4 character hits for 3d6 with a sword.",
      "The best ROF 2 melee option. A sword-wielding Solo with high DEX and Melee Weapon skill is a terror in close quarters."
    ]
  },
  {
    "id": "using-melee-very-heavy",
    "title": "Using Very Heavy Melee Weapons",
    "topic": "Equipment",
    "tags": [
      "very heavy melee",
      "sledgehammer",
      "chainsaw",
      "melee",
      "4d6"
    ],
    "icon": "🔨",
    "steps": [
      "Very Heavy Melee Weapons (sledgehammer, chainsaw) deal **4d6 damage**. Uses **DEX + Melee Weapon Skill + 1d10** vs Defender's **DEX + Evasion + 1d10**.",
      "Rate of fire is only **ROF 1** -- takes your full Action for a single attack. You can still split movement around the attack.",
      "Very Heavy melee weapons are **NOT concealable** and require **2 hands** (unless wielder has **BODY 8+**, then 1 hand).",
      "All melee weapons **ignore half** of Defender's armor (round up). Against **SP 11**, you only face **SP 6**.",
      "Cost is **500eb (Expensive)**. A single hit of 4d6 (avg 14) with armor halving is brutal, but you only get one swing.",
      "Compare: Heavy Melee is ROF 2 for **3d6 x2 = up to 36 damage**. Very Heavy is ROF 1 for **4d6 = up to 24 damage**. Heavy melee has higher damage potential per Action.",
      "Best used when you need raw single-hit damage to trigger Critical Injuries or when combined with Aimed Shots for devastating single strikes."
    ]
  },
  {
    "id": "using-air-pistol",
    "title": "Using an Air Pistol",
    "topic": "Equipment",
    "tags": [
      "air pistol",
      "exotic",
      "acid",
      "paintball",
      "SP reduction",
      "armor strip"
    ],
    "icon": "🎨",
    "steps": [
      "The Air Pistol is an **Exotic Medium Pistol** that fires paintballs. Cost is **100eb**.",
      "Normal paintballs deal **no damage** -- the gun is essentially non-lethal by default.",
      "The real use is **acid paintballs**: each hit **lowers target's SP by 1** in the hit location.",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments and Non-Basic Ammunition.",
      "Uses the **Pistol DV table** and **Handgun Skill**. Concealable, 1-handed.",
      "Cannot cause **Critical Injuries** even with acid rounds.",
      "Tactical use: strip enemy armor with acid rounds before your team opens fire with real weapons. Stack hits to reduce SP rapidly."
    ]
  },
  {
    "id": "using-battleglove",
    "title": "Using a Battleglove",
    "topic": "Equipment",
    "tags": [
      "battleglove",
      "exotic",
      "cyberarm",
      "options",
      "melee",
      "gauntlet"
    ],
    "icon": "🤜",
    "steps": [
      "The Battleglove is a heavy gauntlet with **3 Cyberarm Option slots**. Cost is **1,000eb (Very Expensive)**.",
      "You can install Cyberarm options into the glove -- things like a **Popup Ranged Weapon**, **Grapple Hand**, **Rippers/Wolvers**, or **Tool Hand**.",
      "Putting on or taking off a Battleglove costs an **Action**.",
      "The Battleglove is **NOT concealable**.",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments and Non-Basic Ammunition.",
      "Does not require actual Cyberarm installation -- it is worn externally. The option slots function as if they were Cyberarm slots.",
      "A versatile platform for characters who want Cyberarm options without the Humanity cost of a full Cyberarm."
    ]
  },
  {
    "id": "using-hurricane",
    "title": "Using a Constitution Arms Hurricane",
    "topic": "Equipment",
    "tags": [
      "hurricane",
      "exotic",
      "shotgun",
      "drum",
      "BODY 11",
      "high capacity"
    ],
    "icon": "🌪️",
    "steps": [
      "The Constitution Arms Hurricane is an **Exotic 2 ROF Shotgun** with a **16-shot drum magazine**. Cost is **5,000eb (Super Luxury)**.",
      "Unlike standard shotguns (ROF 1), the Hurricane fires at **ROF 2** -- two shotgun attacks per Action.",
      "Requires **BODY 11+** to fire unless the weapon is mounted on a vehicle or tripod.",
      "Reloading the drum costs **2 Actions** instead of the standard 1.",
      "Cannot make **Aimed Shots**. Uses **Shoulder Arms Skill**.",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments and Non-Basic Ammunition.",
      "With shells, this means you can blanket an area twice per turn: **DV13** to hit, **3d6 damage** to all targets within 6m, twice. Devastating against groups."
    ]
  },
  {
    "id": "using-dartgun",
    "title": "Using a Dartgun",
    "topic": "Equipment",
    "tags": [
      "dartgun",
      "exotic",
      "dart",
      "poison",
      "sleep",
      "biotoxin",
      "non-lethal"
    ],
    "icon": "💉",
    "steps": [
      "The Dartgun is an **Exotic Very Heavy Pistol** that only loads **Non-Basic Arrow Ammo**. Cost is **100eb**.",
      "Clip holds **8 darts**. Uses the **VH Pistol DV table** and **Handgun Skill**. ROF 1, 1-handed.",
      "Available ammo types include: **Poison** (DV13 Resist, 2d6 direct to HP), **Biotoxin** (DV15 Resist, 3d6 direct to HP), **Sleep** (DV13 Resist, unconscious 1 min).",
      "Also compatible with: **Armor-Piercing arrows** (ablate 2), **Expansive arrows**, **Rubber arrows** (non-lethal), **Smart arrows** (second chance on near miss).",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments.",
      "The dartgun deals **no base damage** -- it relies entirely on the ammo effect. If the target resists, nothing happens.",
      "Perfect for stealth ops: sleep darts for silent takedowns, biotoxin for assassination. The cheapest exotic weapon at 100eb."
    ]
  },
  {
    "id": "using-flamethrower",
    "title": "Using a Flamethrower",
    "topic": "Equipment",
    "tags": [
      "flamethrower",
      "exotic",
      "fire",
      "incendiary",
      "burn",
      "area"
    ],
    "icon": "🔥",
    "steps": [
      "The Flamethrower is an **Exotic Shotgun** that uses the **Heavy Weapons Skill**. Cost is **500eb (Expensive)**.",
      "Fires **incendiary shells only**. Uses shotgun shell mechanics: **DV13** to hit, **3d6 damage** to all targets in front within **6m**.",
      "Targets hit are **set on fire**: they take **4 HP damage per turn** directly to HP (no armor ablation) until they spend an Action to extinguish.",
      "The fire damage of **4 HP/turn** counts as **Strong fire** (gasoline level). This bypasses armor entirely.",
      "Cannot cause **Critical Injuries** and cannot make **Aimed Shots**.",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments and Non-Basic Ammunition.",
      "The flamethrower is area denial incarnate. Even if the initial 3d6 is absorbed by armor, the ongoing 4 HP/turn fire forces enemies to waste Actions extinguishing themselves."
    ]
  },
  {
    "id": "using-monokatana",
    "title": "Using a Kendachi Mono-Three (Monokatana)",
    "topic": "Equipment",
    "tags": [
      "monokatana",
      "mono-three",
      "kendachi",
      "exotic",
      "melee",
      "ignores armor",
      "sword"
    ],
    "icon": "⚔️",
    "steps": [
      "The Kendachi Mono-Three is an **Excellent Quality** 2-handed **Exotic Very Heavy Melee Weapon**. Cost is **5,000eb (Super Luxury)**.",
      "Deals **4d6 damage** (same as standard VH melee). Uses **DEX + Melee Weapon Skill + 1d10** vs Defender's **DEX + Evasion + 1d10**.",
      "Key ability: with the **biometric key** activated, it **ignores armor below SP 11**. Against SP 10 or lower, it cuts clean through.",
      "Remember melee also **halves armor** -- so against SP 11, it becomes SP 6, which the monokatana does NOT ignore (only ignores below SP 11 before halving).",
      "Being **Excellent Quality** gives it a **+1 to attack rolls** compared to standard Average Quality weapons.",
      "Features a crystal blade with optional laser glow. ROF 1 (Very Heavy category). 2-handed unless wielder has BODY 8+.",
      "As an Exotic Weapon, it is **incompatible** with standard Weapon Attachments and Non-Basic Ammunition. The biometric key means only the registered user can unlock its armor-ignoring property."
    ]
  },
  {
    "id": "using-malorian-3516",
    "title": "Using a Malorian Arms 3516",
    "topic": "Equipment",
    "tags": [
      "malorian",
      "3516",
      "exotic",
      "pistol",
      "5d6",
      "smartgun",
      "silverhand",
      "legendary"
    ],
    "icon": "⭐",
    "steps": [
      "The Malorian Arms 3516 is an **Excellent Quality Exotic Very Heavy Pistol** dealing **5d6 damage**. Cost is **10,000eb (Super Luxury)**.",
      "This is the most damaging handgun in the game. **5d6 averages 17.5 damage** before armor.",
      "Has a **permanent Smartgun Link** built in. The wielder **must be connected** via Interface Plugs or Subdermal Grip (both require Neural Link) to fire it at all.",
      "The built-in Smartgun Link provides **+1 to Ranged Attacks**. Being Excellent Quality provides an additional **+1** for a total of **+2 to hit**.",
      "Uses **Handgun Skill** and the **Pistol DV table**. ROF 1, 1-handed. Uses VH Pistol ammo (8 rounds).",
      "As an Exotic Weapon, it is **incompatible** with additional Weapon Attachments and Non-Basic Ammunition.",
      "Extremely rare and iconic. This is Johnny Silverhand's weapon. Finding one is an adventure in itself."
    ]
  },
  {
    "id": "using-microwaver",
    "title": "Using a Microwaver",
    "topic": "Equipment",
    "tags": [
      "microwaver",
      "exotic",
      "cyberware",
      "disable",
      "electronics",
      "EMP"
    ],
    "icon": "⚡",
    "steps": [
      "The Microwaver is an **Exotic Very Heavy Pistol** that deals **no damage**. Cost is **500eb (Expensive)**.",
      "On hit, the target must pass **DV15 Cybertech** (or GM decides) or have **2 pieces of cyberware or electronics disabled for 1 minute**.",
      "Uses **Handgun Skill** and the **Pistol DV table**. ROF 1, 1-handed.",
      "Powered by a **battery**: 8 shots per charge. Battery recharges in **1 hour** or can be replaced for **50eb**.",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments and Non-Basic Ammunition.",
      "Countered by **Hardened Shielding** cyberware (1,000eb, Clinic, HL 3) which makes the user immune to EMP and non-Black ICE disabling effects.",
      "Devastating against heavily cybered opponents. Disable their Sandevistan, Kerenzikov, or cyberlimbs and they become far less dangerous."
    ]
  },
  {
    "id": "using-railgun",
    "title": "Using a Rhinemetall EMG-86 Railgun",
    "topic": "Equipment",
    "tags": [
      "railgun",
      "rhinemetall",
      "EMG-86",
      "exotic",
      "ignores armor",
      "heavy weapons",
      "BODY 11"
    ],
    "icon": "🔩",
    "steps": [
      "The Rhinemetall EMG-86 Railgun is an **Exotic Assault Rifle** using the **Heavy Weapons Skill**. Cost is **5,000eb (Super Luxury)**.",
      "Deals **5d6 damage** (Assault Rifle stats). Key ability: **ignores armor below SP 11**.",
      "Requires **BODY 11+** to fire unless the weapon is mounted.",
      "Magazine holds **4 rounds**. Reloading costs **2 Actions**. ROF 1. 2-handed.",
      "Cannot use **Autofire** or **Aimed Shots** despite being classified as an Assault Rifle.",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments and Non-Basic Ammunition.",
      "Against targets in Kevlar (SP 7) or Bodyweight Suit (SP 7), the railgun ignores their armor completely. Only Light Armorjack SP 11+ or Subdermal Armor SP 11 can protect against it."
    ]
  },
  {
    "id": "using-shrieker",
    "title": "Using a Shrieker",
    "topic": "Equipment",
    "tags": [
      "shrieker",
      "exotic",
      "sonic",
      "ear damage",
      "sound",
      "non-lethal"
    ],
    "icon": "🔊",
    "steps": [
      "The Shrieker is an **Exotic Very Heavy Pistol** that weaponizes sound. Cost is **500eb (Expensive)**.",
      "On hit, the target must pass **DV15 Resist Torture/Drugs** or suffer the **Damaged Ear** Critical Injury.",
      "The user also suffers **Damaged Ear** unless wearing ear protection (earplugs, Cyberaudio Suite, etc.).",
      "Uses **Handgun Skill** and the **Pistol DV table**. ROF 1, 1-handed.",
      "Powered by a **battery**: 8 shots per charge. Replacement battery costs **50eb**.",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments and Non-Basic Ammunition.",
      "Damaged Ear imposes **-2 to Perception checks involving hearing**. Stack with flashbangs or other sensory attacks to cripple awareness."
    ]
  },
  {
    "id": "using-stun-baton",
    "title": "Using a Stun Baton",
    "topic": "Equipment",
    "tags": [
      "stun baton",
      "exotic",
      "non-lethal",
      "melee",
      "unconscious",
      "takedown"
    ],
    "icon": "⚡",
    "steps": [
      "The Stun Baton is a **1-handed Exotic Medium Melee Weapon**. Cost is **100eb**.",
      "Deals **2d6 damage** (Medium Melee stats). Uses **DEX + Melee Weapon Skill + 1d10** vs Defender's **DEX + Evasion + 1d10**.",
      "Key feature: **cannot kill**. If damage would reduce the target below 1 HP, they are left at **1 HP and fall Unconscious** instead.",
      "Cannot cause **Critical Injuries** and does **not ablate armor**.",
      "All melee weapons **ignore half** of Defender's armor (round up), so against SP 11 you face SP 6.",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments and Non-Basic Ammunition.",
      "The go-to weapon for non-lethal takedowns in melee range. Lawmen love it. ROF 2 means two chances to knock someone out per Action."
    ]
  },
  {
    "id": "using-stun-gun",
    "title": "Using a Stun Gun",
    "topic": "Equipment",
    "tags": [
      "stun gun",
      "exotic",
      "non-lethal",
      "ranged",
      "unconscious",
      "taser"
    ],
    "icon": "⚡",
    "steps": [
      "The Stun Gun is an **Exotic Heavy Pistol**. Cost is **100eb**.",
      "Deals **3d6 damage** (Heavy Pistol stats). Uses **Handgun Skill** and the **Pistol DV table**.",
      "Key feature: **cannot kill**. If damage would reduce the target below 1 HP, they are left at **1 HP and fall Unconscious** instead.",
      "Cannot cause **Critical Injuries** and does **not ablate armor**.",
      "Powered by a **battery**: 8 shots per charge. Replacement battery costs **50eb**.",
      "As an Exotic Weapon, it is **Average Quality** and **incompatible** with standard Weapon Attachments and Non-Basic Ammunition.",
      "The ranged non-lethal option. 3d6 with no ablation means you can keep shooting without stripping their armor for follow-up allies."
    ]
  },
  {
    "id": "using-helix",
    "title": "Using a Tsunami Arms Helix",
    "topic": "Equipment",
    "tags": [
      "helix",
      "tsunami arms",
      "exotic",
      "autofire",
      "multiplier 5",
      "BODY 11",
      "rifle"
    ],
    "icon": "🌀",
    "steps": [
      "The Tsunami Arms Helix is an **Exotic Assault Rifle** that can **only fire in Autofire mode**. Cost is **5,000eb (Super Luxury)**.",
      "Uses **Autofire Skill only** (not Shoulder Arms). Consumes **20 bullets per attack** (double the normal 10).",
      "Maximum autofire multiplier is **5** (vs AR's 4, SMG's 3). Hit = **2d6 x (amount beaten, max 5)**.",
      "Magazine holds **40 rounds** -- enough for exactly **2 autofire bursts** before reloading.",
      "Reloading costs **2 Actions**. Requires **BODY 11+** to fire unless mounted.",
      "Uses the **Assault Rifle Autofire DV table**: **0-6m: DV22**, **7-12m: DV20**, **13-25m: DV17**, **26-50m: DV20**, **51-100m: DV25**.",
      "At optimal range (13-25m, DV17), beating DV by 5 means **2d6 x 5**. With average 2d6=7, that is **35 damage** before armor. The highest burst damage potential in the game."
    ]
  },
  {
    "id": "using-ap-ammo",
    "title": "Using Armor-Piercing Ammo",
    "topic": "Equipment",
    "tags": [
      "armor-piercing",
      "AP",
      "ammo",
      "ablation",
      "armor strip"
    ],
    "icon": "🛡️",
    "steps": [
      "**Armor-Piercing** ammo ablates armor by **2 instead of 1** when damage gets through. Cost is **100eb per 10 rounds**.",
      "Available for: **Bullets (M/H/VH Pistol, Rifle), Slugs, and Arrows**. NOT available for Shotgun Shells.",
      "Normal ablation: each hit that deals damage reduces SP by 1. AP doubles this to **SP reduced by 2 per hit**.",
      "Does not increase raw damage -- the same dice are rolled. The benefit is purely faster armor degradation.",
      "Purchased in increments of **10** for bullets/slugs/arrows.",
      "Particularly effective on high-ROF weapons: a Heavy Pistol with AP ammo and ROF 2 can strip **4 SP per Action** if both shots connect.",
      "The bread-and-butter special ammo. Against heavily armored targets (SP 11+), AP ammo strips their protection twice as fast."
    ]
  },
  {
    "id": "using-biotoxin-ammo",
    "title": "Using Biotoxin Ammo",
    "topic": "Equipment",
    "tags": [
      "biotoxin",
      "ammo",
      "poison",
      "deadly",
      "direct HP",
      "arrows",
      "grenades"
    ],
    "icon": "☠️",
    "steps": [
      "**Biotoxin** ammo deals **no normal damage**. Instead, target must roll **DV15 Resist Torture/Drugs** or take **3d6 damage directly to HP** (ignores armor). Cost is **500eb**.",
      "Available for: **Arrows and Grenades only**. Grenades are purchased individually; arrows in increments of 10.",
      "As a grenade, biotoxin affects all targets in a **10m x 10m area** (5x5 squares). Each must independently resist.",
      "The damage bypasses armor entirely -- **3d6 direct to HP** (average 10.5) is devastating against any target regardless of SP.",
      "If the target passes the **DV15 Resist Torture/Drugs** check, nothing happens. All-or-nothing.",
      "Countered by **Nasal Filters** or **Toxin Binders** cyberware, which may grant bonuses to resist.",
      "The deadliest special ammo in the game. Use with a Dartgun for silent assassination or as grenades for area denial."
    ]
  },
  {
    "id": "using-emp-ammo",
    "title": "Using EMP Grenades",
    "topic": "Equipment",
    "tags": [
      "EMP",
      "grenade",
      "ammo",
      "cyberware",
      "disable",
      "electronics"
    ],
    "icon": "⚡",
    "steps": [
      "**EMP** grenades deal **no damage**. Instead, targets must roll **DV15 Cybertech** (or GM decides) or have **2 pieces of cyberware/electronics disabled for 1 minute**. Cost is **500eb per grenade**.",
      "Available for: **Grenades only**. Purchased individually.",
      "Affects all targets in a **10m x 10m area** (5x5 squares). Each target rolls independently.",
      "Disables **2 cyberware pieces or electronics** on a failed save -- the GM or attacker chooses which pieces.",
      "Countered by **Hardened Shielding** cyberware (1,000eb, Clinic, HL 3) which provides immunity to EMP effects.",
      "Does not damage or destroy the cyberware -- it resumes functioning after **1 minute**.",
      "Incredible against cybered-up opponents. Disable a Solo's Sandevistan and Kerenzikov in one throw. Also shuts down turrets, drones, and other electronics."
    ]
  },
  {
    "id": "using-expansive-ammo",
    "title": "Using Expansive Ammo",
    "topic": "Equipment",
    "tags": [
      "expansive",
      "ammo",
      "critical injury",
      "hollow point",
      "reroll"
    ],
    "icon": "💢",
    "steps": [
      "**Expansive** ammo changes how Critical Injuries work: if a **Foreign Object** result is rolled, it forces a **re-roll until a non-Foreign Object result** is obtained. Cost is **100eb per 10 rounds**.",
      "Available for: **Arrows, Bullets, and Slugs**. Not available for Shotgun Shells, Grenades, or Rockets.",
      "Does **not** grant extra Bonus Damage on the re-rolled Critical Injury.",
      "Critical Injuries trigger when a target is **already Mortally Wounded** and takes damage, or on a natural 10 followed by confirming roll.",
      "The Foreign Object injury is relatively minor (removal is easy). Expansive ammo ensures you get a more impactful injury instead.",
      "Purchased in increments of **10** for bullets/slugs/arrows.",
      "A cheap upgrade at 100eb/10. Best on high-damage weapons where Critical Injuries are more likely to trigger."
    ]
  },
  {
    "id": "using-flashbang-ammo",
    "title": "Using Flashbang Grenades",
    "topic": "Equipment",
    "tags": [
      "flashbang",
      "grenade",
      "ammo",
      "blind",
      "deaf",
      "stun",
      "sensory"
    ],
    "icon": "💡",
    "steps": [
      "**Flashbang** grenades deal **no damage**. Targets must roll **DV15 Resist Torture/Drugs** or suffer **Damaged Eye + Damaged Ear** for **1 minute**. Cost is **100eb per grenade**.",
      "Available for: **Grenades only**. Purchased individually.",
      "Affects all targets in a **10m x 10m area** (5x5 squares). Each target rolls independently.",
      "**Damaged Eye** imposes **-4 to all ranged attacks and Perception checks involving sight**.",
      "**Damaged Ear** imposes **-2 to Perception checks involving hearing**.",
      "Combined effect is crippling for combat effectiveness. A flashbanged target is fighting at significant penalties for a full minute.",
      "One of the best opening moves in any ambush. At 100eb per grenade, it is cheap and effective. Pair with IR/UV cyberoptics to remain unaffected."
    ]
  },
  {
    "id": "using-incendiary-ammo",
    "title": "Using Incendiary Ammo",
    "topic": "Equipment",
    "tags": [
      "incendiary",
      "ammo",
      "fire",
      "burn",
      "ongoing damage"
    ],
    "icon": "🔥",
    "steps": [
      "**Incendiary** ammo sets the target **on fire** if any damage gets through armor. Cost is **100eb per 10 rounds** (or per grenade).",
      "Available for: **Arrows, Bullets, Grenades, and Shotgun Shells**.",
      "Ignited targets take **2 HP per turn** directly to HP (no armor ablation) until they spend an **Action to extinguish** themselves.",
      "The fire damage bypasses armor entirely. Even heavily armored targets burn.",
      "As a grenade, incendiary affects all targets in a **10m x 10m area**. Each target that takes damage is set on fire.",
      "Note: the base Flamethrower exotic weapon deals **4 HP/turn** fire damage (Strong fire), while standard incendiary ammo deals **2 HP/turn** (Mild fire).",
      "Forces targets to choose: keep fighting and take 2 HP/turn, or waste an Action putting themselves out. Excellent for action economy denial."
    ]
  },
  {
    "id": "using-poison-ammo",
    "title": "Using Poison Ammo",
    "topic": "Equipment",
    "tags": [
      "poison",
      "ammo",
      "arrows",
      "grenades",
      "direct HP",
      "resist"
    ],
    "icon": "☠️",
    "steps": [
      "**Poison** ammo deals **no normal damage**. Target must roll **DV13 Resist Torture/Drugs** or take **2d6 damage directly to HP** (ignores armor). Cost is **100eb**.",
      "Available for: **Arrows and Grenades only**. Grenades purchased individually; arrows in increments of 10.",
      "Weaker than Biotoxin (DV13 vs DV15, 2d6 vs 3d6) but **5x cheaper** (100eb vs 500eb).",
      "As a grenade, poison affects all targets in a **10m x 10m area** (5x5 squares). Each rolls independently.",
      "The **2d6 direct to HP** (average 7) bypasses all armor. Effective against any target.",
      "Countered by **Nasal Filters** or **Toxin Binders** cyberware.",
      "The budget version of Biotoxin. Use with Dartgun for affordable silent takedowns, or as grenades for area denial on a budget."
    ]
  },
  {
    "id": "using-rubber-ammo",
    "title": "Using Rubber Ammo",
    "topic": "Equipment",
    "tags": [
      "rubber",
      "ammo",
      "non-lethal",
      "no ablation",
      "no kill",
      "less-lethal"
    ],
    "icon": "⚫",
    "steps": [
      "**Rubber** ammo makes any weapon non-lethal. Cost is only **10eb per 10 rounds**.",
      "Available for: **Arrows, Bullets, and Slugs**.",
      "Three key restrictions: **cannot cause Critical Injuries**, **cannot ablate armor**, and **cannot kill** (leaves target at **1 HP and Unconscious**).",
      "Damage dice are rolled normally -- the restrictions only apply to outcomes.",
      "No ablation means you can shoot someone repeatedly without degrading their (or your allies') armor.",
      "Purchased in increments of **10**. The cheapest special ammo in the game.",
      "Essential for Lawmen, bounty hunters, or anyone who needs targets alive. Load rubber rounds in a high-ROF weapon for non-lethal suppression."
    ]
  },
  {
    "id": "using-sleep-ammo",
    "title": "Using Sleep Ammo",
    "topic": "Equipment",
    "tags": [
      "sleep",
      "ammo",
      "unconscious",
      "arrows",
      "grenades",
      "knockout"
    ],
    "icon": "💤",
    "steps": [
      "**Sleep** ammo deals **no damage**. Target must roll **DV13 Resist Torture/Drugs** or fall **Prone and Unconscious for 1 minute**. Cost is **500eb**.",
      "Available for: **Arrows and Grenades only**. Grenades purchased individually; arrows in increments of 10.",
      "As a grenade, sleep affects all targets in a **10m x 10m area** (5x5 squares). Each rolls independently.",
      "Unconscious for 1 minute = **10 combat rounds**. Effectively removes the target from the fight entirely.",
      "The DV13 check is relatively low -- most trained combatants have a decent chance to resist. Best against untrained targets.",
      "Does not bypass armor -- the arrow/grenade must hit normally. But the effect requires no damage to get through.",
      "Use with a Dartgun for silent, non-lethal elimination. Sleep grenades can neutralize an entire room of guards."
    ]
  },
  {
    "id": "using-smart-ammo",
    "title": "Using Smart Ammo",
    "topic": "Equipment",
    "tags": [
      "smart",
      "ammo",
      "tracking",
      "second chance",
      "targeting scope",
      "guided"
    ],
    "icon": "🎯",
    "steps": [
      "**Smart** ammo gives a **second chance to hit** on a near miss. Cost is **500eb per 10 rounds** (or per rocket).",
      "Available for: **Arrows, Bullets, and Rockets**. Requires a **Targeting Scope** attachment on the weapon.",
      "If you **miss the DV by 4 or less**, you get a second chance: roll **d10 + 10** vs the original DV.",
      "Example: DV is 17, you roll 14 (miss by 3). Smart ammo triggers: roll d10+10. A 7+ on the d10 means the round curves to hit.",
      "The second chance roll of **d10+10** means you have a range of 11-20. Against DV17, you need a 7+ on the d10 (40% hit chance on the retry).",
      "Targeting Scope costs **100eb** and takes **1 attachment slot**. Reduces Aimed Shot penalties by 2.",
      "Expensive but dramatically improves hit rate. Best on weapons where every shot counts -- Rocket Launchers with Smart rockets turn near-misses into hits."
    ]
  },
  {
    "id": "using-smoke-ammo",
    "title": "Using Smoke Grenades",
    "topic": "Equipment",
    "tags": [
      "smoke",
      "grenade",
      "ammo",
      "concealment",
      "obscure",
      "cover",
      "penalty"
    ],
    "icon": "🌫️",
    "steps": [
      "**Smoke** grenades obscure a **10m x 10m area** for **1 minute**, imposing a **-4 penalty** to attacks and Perception through the smoke. Cost is **50eb per grenade**.",
      "Available for: **Grenades only**. Purchased individually.",
      "The -4 penalty applies to anyone trying to **shoot through, into, or out of** the smoke cloud.",
      "Does **no damage**. Purely a tactical tool for concealment and repositioning.",
      "Countered by **Infrared Nightvision Scope** (500eb, 1 attachment slot) or **Low Light/IR/UV cyberoptics** which reduce darkness/smoke/fog penalties to 0.",
      "Lasts **1 minute** (10 combat rounds) -- plenty of time to reposition, retreat, or set up.",
      "The cheapest grenade at 50eb. Use to break line of sight, cover a retreat, block a sniper, or create confusion. Essential tactical equipment."
    ]
  },
  {
    "id": "using-teargas-ammo",
    "title": "Using Teargas Grenades",
    "topic": "Equipment",
    "tags": [
      "teargas",
      "grenade",
      "ammo",
      "blind",
      "eye damage",
      "area denial"
    ],
    "icon": "😭",
    "steps": [
      "**Teargas** grenades deal **no damage**. Targets must roll **DV13 Resist Torture/Drugs** or suffer **Damaged Eye for 1 minute**. Cost is **50eb per grenade**.",
      "Available for: **Grenades only**. Purchased individually.",
      "Affects all targets in a **10m x 10m area** (5x5 squares). Each target rolls independently.",
      "**Damaged Eye** imposes significant combat penalties -- **-4 to ranged attacks and Perception checks involving sight**.",
      "Only affects **meat eyes** -- characters with full **cyberoptics** are immune.",
      "DV13 is relatively easy to resist for trained combatants, but against groups, some will fail.",
      "At 50eb per grenade (same as smoke), teargas is incredibly cost-effective. Use against groups without cyberoptics to cripple their combat effectiveness."
    ]
  },
  {
    "id": "flanking-enemies",
    "title": "Flanking and Positioning Tactics",
    "topic": "Combat",
    "tags": [
      "flanking",
      "positioning",
      "cover",
      "angles",
      "tactics",
      "movement"
    ],
    "icon": "🗺️",
    "steps": [
      "Cyberpunk Red has **no facing rules** -- characters can see and attack in all directions. Flanking does not grant mechanical bonuses.",
      "However, **cover** is directional. A target behind a wall has cover from one direction but may be exposed from another angle.",
      "Moving to a position where the enemy's **cover does not protect them** is the key tactical advantage of positioning.",
      "Cover provides **HP-based protection**: Thin Cover (wood, drywall) has low HP, Heavy Cover (concrete, steel) has high HP. Shots destroy cover over time.",
      "If cover drops to **0 HP**, excess damage is **lost** (does not carry through to the target) unless using explosives.",
      "Movement each turn: **MOVE x 2 m/yds** as a Move Action. You can split movement around your Action.",
      "The goal: position so enemies must **leave cover to engage you**, or so your team can attack from angles their cover does not protect."
    ]
  },
  {
    "id": "fighting-in-cramped-space",
    "title": "Fighting in Cramped Spaces",
    "topic": "Combat",
    "tags": [
      "cramped",
      "close quarters",
      "CQB",
      "melee",
      "shotgun",
      "tight spaces"
    ],
    "icon": "🚪",
    "steps": [
      "In tight spaces (hallways, small rooms, elevators), **melee weapons** have a major advantage: they ignore half armor and have ROF 2.",
      "**Shotgun shells** are devastating indoors: flat **DV13** to hit, **3d6 to all targets within 6m** in your field of fire.",
      "Close range (0-6m) DVs favor pistols (**DV13**) and SMGs (**DV15**). Assault Rifles are poor at close range (**DV17**). Sniper Rifles are terrible (**DV30**).",
      "Autofire in cramped spaces is risky -- **Suppressive Fire** forces everyone in 25m out of cover to flee, including allies if they are in the cone.",
      "**Grappling** becomes more viable: DEX + Brawling + 1d10 to grab, then **Choke for 3d6 direct to HP** ignoring armor each turn.",
      "Grenades in tight spaces are extremely dangerous to the thrower -- the **10m x 10m blast area** may include your own position.",
      "Key tactic: **control doorways and chokepoints**. A melee fighter in a doorway can engage enemies one at a time with ROF 2 attacks."
    ]
  },
  {
    "id": "sniper-duel",
    "title": "Long Range Sniper Combat",
    "topic": "Combat",
    "tags": [
      "sniper",
      "long range",
      "scope",
      "cover",
      "duel",
      "overwatch"
    ],
    "icon": "🎯",
    "steps": [
      "Sniper Rifle DVs favor extreme range: **51-100m: DV13**, **101-200m: DV15**, **201-400m: DV17**, **401-800m: DV20**.",
      "Equip a **Sniping Scope** (100eb, 1 slot): see detail at 800m, **+1 to single shot and Aimed Shot at 51m+**.",
      "**Aimed Shot to the Head**: take a **-8 penalty** but damage that gets through head armor is **multiplied by x2**. With scope at 51m+, net penalty is -7.",
      "Heavy cover is essential. Find a position with **good line of sight** and **solid cover** (concrete, steel). Return fire at your position will chip away at cover HP.",
      "Counter-sniping: if you cannot spot the sniper, use **INT + Perception + 1d10** to locate them. Muzzle flash, sound, etc.",
      "Smoke grenades (**-4 penalty** to attacks through smoke) can break a sniper's line of sight. IR optics negate smoke penalties.",
      "At extreme range (400-800m, DV20), even skilled snipers need Skill Base 10+ to have a reasonable chance. Most combatants simply cannot engage at this distance."
    ]
  },
  {
    "id": "fighting-cyberpsycho",
    "title": "Fighting a Cyberpsycho",
    "topic": "Combat",
    "tags": [
      "cyberpsycho",
      "boss fight",
      "high HP",
      "high armor",
      "tactics",
      "dangerous"
    ],
    "icon": "🦠",
    "steps": [
      "A typical Cyberpsycho is a **boss-level threat**: approximately **HP 50-60**, **SP 11+ (Subdermal Armor)**, **combat skills around 14-17**, and loaded with offensive cyberware.",
      "With **SP 11**, most standard weapons deal minimal damage. Melee **halves armor** (SP 11 becomes SP 6) making melee viable.",
      "Weapons that **ignore armor below SP 11**: the **Kendachi Mono-Three** and **Rhinemetall EMG-86 Railgun**. These cut straight through Subdermal Armor.",
      "**Armor-Piercing ammo** ablates 2 SP per hit instead of 1. Coordinate fire to strip armor quickly. An SMG with AP ammo on autofire is effective.",
      "**EMP grenades** (DV15 Cybertech) can disable **2 cyberware pieces for 1 min** -- potentially shutting down their Sandevistan, Kerenzikov, or cyberlimbs.",
      "A cyberpsycho likely has **REF 8+** and can **dodge ranged attacks**. Autofire, shotgun shells, and explosives force individual dodge rolls for each.",
      "Do not engage alone. Use **Suppressive Fire** to control movement, **flashbangs** (DV15, Damaged Eye+Ear) to debuff, and focus fire from multiple angles. Treat it like a military operation."
    ]
  },
  {
    "id": "outnumbered-tactics",
    "title": "Fighting When Outnumbered",
    "topic": "Combat",
    "tags": [
      "outnumbered",
      "tactics",
      "chokepoint",
      "suppressive fire",
      "retreat",
      "defensive"
    ],
    "icon": "🛡️",
    "steps": [
      "When outnumbered, **action economy** is your biggest enemy. More enemies = more attacks per round. Reduce their effective numbers.",
      "**Suppressive Fire** forces all targets within 25m and out of cover to flee to cover (WILL + Concentration vs your REF + Autofire). This burns their Actions on movement.",
      "**Chokepoints** are critical. Position so enemies can only approach 1-2 at a time. A hallway or doorway negates numerical advantage.",
      "**Shotgun shells** (DV13, 3d6 to all within 6m) and **Autofire** hit multiple targets or deal massive damage to single targets.",
      "**Grenades** of any type affect a **10m x 10m area** -- flashbangs, smoke, teargas, or fragmentation all reduce enemy effectiveness against groups.",
      "**Smoke grenades** (50eb, -4 penalty) break line of sight. Enemies cannot shoot what they cannot see. Use smoke to control engagement range.",
      "If retreat is an option, use **Suppressive Fire + Smoke** to disengage. Enemies forced into cover by suppression cannot pursue while smoke blocks line of sight."
    ]
  },
  {
    "id": "protecting-a-client",
    "title": "Bodyguard / Client Protection",
    "topic": "Combat",
    "tags": [
      "bodyguard",
      "protection",
      "VIP",
      "escort",
      "client",
      "solo"
    ],
    "icon": "👤",
    "steps": [
      "Priority one: **keep the client behind cover** at all times. Cover absorbs damage; if it drops to 0 HP, excess damage is lost (does not carry through).",
      "Use **Human Shield** rules in reverse: you can Grab and position yourself as cover for your client. Grabbed characters are treated as cover for Ranged Attacks.",
      "**Threat detection**: use **INT + Perception + 1d10** to spot danger before it happens. Conceal/Reveal Object checks to detect hidden weapons on approaching people.",
      "Equip your client with at least a **Kevlar vest (SP 7)** or **Light Armorjack (SP 11)**. Even non-combatants benefit from passive armor.",
      "Carry a **concealable weapon** (Medium/Heavy Pistol, SMG) for subtle environments and a heavier option (AR, Shotgun) for known danger.",
      "Position yourself **between the client and the most likely threat vector**. In a restaurant, face the door. In a car, sit on the street side.",
      "Escape plan: always have an exit route mapped. MOVE x 2 m/yds per turn for each character. If the client has low MOVE, you may need to carry or drag them."
    ]
  },
  {
    "id": "ambush-setup",
    "title": "Setting Up an Ambush",
    "topic": "Combat",
    "tags": [
      "ambush",
      "surprise",
      "stealth",
      "initiative",
      "tactics",
      "setup"
    ],
    "icon": "🌿",
    "steps": [
      "An ambush starts with **stealth**: attackers roll **DEX + Stealth + 1d10** vs targets' **INT + Perception + 1d10**. If targets fail, they are surprised.",
      "Surprised targets **lose their first turn** -- they cannot take Actions or Move Actions on the first round of combat.",
      "Position your team to create a **kill zone**: overlapping fields of fire from multiple angles so the enemy has no safe cover direction.",
      "Open with **maximum impact**: grenades (flashbang for debuff, frag for damage), autofire, or aimed shots. The first round with surprise is your biggest advantage.",
      "**Suppressive Fire** on the opening round forces any survivors to spend their next Actions getting into cover instead of fighting back.",
      "Place at least one team member to **cover the escape route**. Ambushed enemies will try to flee; cut off that option.",
      "After the opening volley, the ambush becomes a normal fight. Maintain cover, keep up fire superiority, and press the advantage before the enemy regroups."
    ]
  },
  {
    "id": "solo-damage-deflection",
    "title": "Solo: Damage Deflection",
    "topic": "Roles",
    "tags": [
      "solo",
      "damage deflection",
      "combat awareness",
      "reduce damage",
      "soak",
      "defense"
    ],
    "icon": "🛡",
    "steps": [
      "Damage Deflection is one of six **Combat Awareness** sub-abilities a Solo can allocate points to.",
      "Cost: **2 / 4 / 6 / 8 / 10** Combat Awareness points for Levels 1–5.",
      "Effect: Reduce the **first damage you take each Round** (after armor) by **1 / 2 / 3 / 4 / 5** points.",
      "Only applies to the **first** hit each Round — subsequent hits in the same Round are not reduced.",
      "The reduction applies **after** armor has been subtracted from the damage.",
      "You can reallocate your Combat Awareness points by spending an **Action** during combat, or freely outside of combat or before Initiative is rolled.",
      "Example: A Rank 8 Solo puts 6 pts into Damage Deflection (Level 3). The first hit that Round deals 12 damage after armor — they only take **9**."
    ]
  },
  {
    "id": "solo-precision-attack",
    "title": "Solo: Precision Attack",
    "topic": "Roles",
    "tags": [
      "solo",
      "precision attack",
      "combat awareness",
      "attack bonus",
      "to-hit",
      "accuracy"
    ],
    "icon": "🎯",
    "steps": [
      "Precision Attack adds a flat bonus to your **Attack checks** (ranged or melee).",
      "Cost: **3 / 6 / 9** Combat Awareness points for +1 / +2 / +3 to Attack rolls.",
      "This bonus stacks with your normal STAT + Skill + 1d10.",
      "Applies to **all** Attack checks, not just the first — every attack you make that Round benefits.",
      "At maximum (+3), this costs 9 of your Combat Awareness points, so high-rank Solos benefit most.",
      "Combine with Spot Weakness for both accuracy and extra damage, but watch your point budget.",
      "Reallocate freely before Initiative, or spend an **Action** in combat to reassign."
    ]
  },
  {
    "id": "solo-spot-weakness",
    "title": "Solo: Spot Weakness",
    "topic": "Roles",
    "tags": [
      "solo",
      "spot weakness",
      "combat awareness",
      "damage bonus",
      "extra damage"
    ],
    "icon": "🔪",
    "steps": [
      "Spot Weakness adds bonus damage to your attacks.",
      "Cost: **1 Combat Awareness point per +1** to damage. No maximum other than your total points.",
      "Effect: Add the bonus to the damage (before armor) of your **first successful Attack each Round**.",
      "Only the **first** successful hit per Round gets the bonus — not every hit.",
      "The bonus is added **before** the target's armor is subtracted, so heavy armor may still absorb it.",
      "Very efficient at 1 point per +1 — a Rank 4 Solo could put all 4 points here for +4 damage.",
      "Pairs well with high-damage weapons; less effective against heavily armored targets unless you stack enough."
    ]
  },
  {
    "id": "solo-threat-detection",
    "title": "Solo: Threat Detection",
    "topic": "Roles",
    "tags": [
      "solo",
      "threat detection",
      "combat awareness",
      "perception",
      "ambush",
      "awareness"
    ],
    "icon": "👁",
    "steps": [
      "Threat Detection adds a flat bonus to **Perception checks**.",
      "Cost: **1 Combat Awareness point per +1** to Perception. No cap other than total points.",
      "Applies to **all** Perception checks: spotting ambushes, noticing hidden enemies, detecting traps, etc.",
      "Works both in and out of combat — useful for scouting, overwatch, or walking point.",
      "Stacks with your normal INT + Perception Skill + 1d10.",
      "Also helps resist Stealth-based approaches: enemies roll DEX + Stealth vs. your boosted Perception.",
      "A common split: put a few points in Threat Detection for passive awareness and the rest into combat abilities."
    ]
  },
  {
    "id": "solo-fumble-recovery",
    "title": "Solo: Fumble Recovery",
    "topic": "Roles",
    "tags": [
      "solo",
      "fumble recovery",
      "combat awareness",
      "critical failure",
      "natural 1",
      "fumble"
    ],
    "icon": "🎲",
    "steps": [
      "Fumble Recovery lets you **ignore critical failures** on attack rolls.",
      "Cost: **4 Combat Awareness points** (flat cost, not tiered).",
      "When you roll a natural 1 on your attack d10, you do **not** roll the extra d10 and subtract it.",
      "The roll is still treated as a **1** — it just prevents the catastrophic subtraction that can result in a fumble.",
      "This is an all-or-nothing ability: you either have it active (4 pts) or you don't.",
      "Particularly valuable for Solos who make multiple attacks per Round (e.g., Autofire or dual-wielding).",
      "A Rank 4 Solo spending all 4 points on this gains reliable attacks but no other Combat Awareness benefits that Round."
    ]
  },
  {
    "id": "solo-initiative-reaction",
    "title": "Solo: Initiative Reaction",
    "topic": "Roles",
    "tags": [
      "solo",
      "initiative reaction",
      "combat awareness",
      "initiative",
      "speed",
      "first turn"
    ],
    "icon": "⚡",
    "steps": [
      "Initiative Reaction adds a flat bonus to your **Initiative rolls**.",
      "Cost: **1 Combat Awareness point per +1** to Initiative. No cap other than total points.",
      "Normal Initiative = REF + 1d10. With this ability, it becomes REF + 1d10 + bonus.",
      "Going first in combat can be decisive — take out threats before they act.",
      "Stacks with Speedware (Kerenzikov +2, Sandevistan +3) for even higher Initiative totals.",
      "Less useful if your REF is already very high compared to opponents; consider Precision Attack or Spot Weakness instead.",
      "Efficient at 1 pt per +1, making it easy to add a small Initiative edge alongside other abilities."
    ]
  },
  {
    "id": "tech-field-expertise",
    "title": "Tech: Field Expertise",
    "topic": "Roles",
    "tags": [
      "tech",
      "field expertise",
      "maker",
      "repair",
      "jury-rig",
      "field repair"
    ],
    "icon": "🔧",
    "steps": [
      "Field Expertise is one of four **Maker** specialties. Each time your Maker Rank increases, you allocate 1 point to two different specialties.",
      "Passive benefit: Add your Field Expertise Rank to **any TECH-based Skill Check** made for non-Maker purposes (e.g., repairing a vehicle, picking a lock).",
      "Active benefit: **Jury-rig** any item to perfect working condition as an **Action**.",
      "Jury-rigged items work perfectly for **10 minutes per Field Expertise Rank**, then revert to their damaged state.",
      "Uses: fix a broken gun mid-fight, get a busted car running for a getaway, restore a damaged cyberdeck temporarily.",
      "The passive bonus applies broadly — Basic Tech, Cybertech, Weaponstech, Electronics/Security Tech, Land Vehicle Tech, etc.",
      "No DV roll is needed for jury-rigging; it just works for the duration."
    ]
  },
  {
    "id": "tech-upgrade",
    "title": "Tech: Upgrade Expertise",
    "topic": "Roles",
    "tags": [
      "tech",
      "upgrade",
      "maker",
      "improve",
      "option slots",
      "weapon quality",
      "armor"
    ],
    "icon": "⬆",
    "steps": [
      "Upgrade Expertise lets you **permanently improve** existing items.",
      "Roll: **TECH + appropriate repair Skill + Upgrade Expertise Rank + 1d10** vs. DV based on item Price Category.",
      "DVs by Price Category: Cheap/Everyday **DV9** (1 hr), Costly **DV13** (6 hrs), Premium **DV17** (1 day), Expensive **DV21** (1 week), Very Expensive **DV24** (2 weeks), Luxury **DV29** (1 month).",
      "Possible upgrades include: lower cyberware Humanity Loss by 1d6, add option slots, reduce repair time, make weapons concealable, raise weapon quality by one tier, add +1 SP to armor.",
      "Each upgrade is a **one-time permanent** change to the item.",
      "Failed upgrade roll: item is not improved but materials are not lost — you can try again after the time passes.",
      "The GM determines which upgrades are appropriate for which items."
    ]
  },
  {
    "id": "tech-fabrication",
    "title": "Tech: Fabrication Expertise",
    "topic": "Roles",
    "tags": [
      "tech",
      "fabrication",
      "maker",
      "craft",
      "create",
      "build",
      "manufacture"
    ],
    "icon": "🏭",
    "steps": [
      "Fabrication Expertise lets you **create items from scratch** using materials one Price Category lower than the item's listed price.",
      "Roll: **TECH + appropriate repair Skill + Fabrication Expertise Rank + 1d10** vs. DV based on item Price Category.",
      "DVs and times: Cheap/Everyday **DV9** (1 hr), Costly **DV13** (6 hrs), Premium **DV17** (1 day), Expensive **DV21** (1 week), Very Expensive **DV24** (2 weeks), Luxury **DV29** (1 month).",
      "You buy materials at **one Price Category lower** than the finished item. E.g., a Premium item needs only Costly materials.",
      "This means a Costly item only needs Cheap/Everyday materials (50eb or less), making it extremely economical.",
      "Failed fabrication roll: materials are **destroyed** and time is wasted. You must acquire new materials.",
      "You must have appropriate tools and workspace. The GM decides if the environment is suitable."
    ]
  },
  {
    "id": "tech-invention",
    "title": "Tech: Invention Expertise",
    "topic": "Roles",
    "tags": [
      "tech",
      "invention",
      "maker",
      "invent",
      "new item",
      "custom",
      "prototype"
    ],
    "icon": "💡",
    "steps": [
      "Invention Expertise lets you **create entirely new items or upgrades** that don't exist in the standard catalog.",
      "Roll: **TECH + appropriate repair Skill + Invention Expertise Rank + 1d10** vs. DV based on the GM-assigned Price Category.",
      "The GM sets the Price Category of the invention at **minimum Expensive** (DV21, 1 week).",
      "DVs and times follow the same table: Expensive **DV21** (1 week), Very Expensive **DV24** (2 weeks), Luxury **DV29** (1 month), Super Luxury **DV29** (1 month per 10,000eb).",
      "The GM determines what the invention can do. Inventions should be powerful but not game-breaking.",
      "Failed invention roll: materials are destroyed and time is wasted.",
      "Inventions are **unique prototypes** — mass production would require Fabrication and significant resources."
    ]
  },
  {
    "id": "medtech-surgery",
    "title": "Medtech: Surgery Specialty",
    "topic": "Roles",
    "tags": [
      "medtech",
      "surgery",
      "medicine",
      "critical injury",
      "treatment",
      "cyberware install"
    ],
    "icon": "🩺",
    "steps": [
      "Surgery is one of three **Medicine** specialties. Each point invested grants **2 points** in the Surgery Skill (max Skill Level 10).",
      "Surgery is **exclusive to Medtechs** — no other Role can access the Surgery Skill.",
      "Surgery treats the most severe Critical Injuries that Paramedic cannot handle: Lost Limb (DV17), Lost Eye (DV17), Brain Injury (DV17), etc.",
      "Surgery is also required for **cyberware installation**: Mall DV13, Clinic DV15, Hospital DV17.",
      "Roll: **TECH + Surgery + 1d10** vs. the Treatment or Installation DV.",
      "Surgery requires a proper facility (hospital or clinic) and takes significant time. Cannot be done in the field.",
      "Failed surgery: for cyberware, the ware is **destroyed** and 2 hours are wasted. For treatment, the injury persists."
    ]
  },
  {
    "id": "medtech-pharma",
    "title": "Medtech: Pharmaceuticals Specialty",
    "topic": "Roles",
    "tags": [
      "medtech",
      "pharmaceuticals",
      "medicine",
      "drugs",
      "craft drugs",
      "speedheal",
      "stim"
    ],
    "icon": "💊",
    "steps": [
      "Pharmaceuticals is a Medicine specialty (max 5 points). Each point grants **1 point** in Medical Tech Skill (max 10) and unlocks one pharmaceutical.",
      "Available pharmaceuticals (unlocked in order): **Antibiotic** (healing target heals +2 HP/day for 1 week), **Rapidetox** (purges any drug/poison/intoxicant immediately), **Speedheal** (heal BODY + WILL HP instantly, 1/day, not if Mortally Wounded), **Stim** (ignore Seriously Wounded penalties for 1 hour, 1/day), **Surge** (no sleep needed for 24 hrs, 1/week).",
      "Synthesizing doses: Roll **TECH + Medical Tech + 1d10 vs. DV13**.",
      "Materials cost **200eb** per batch. A successful roll produces doses equal to your **Medical Tech Skill Level**.",
      "Synthesis takes **1 hour** per batch.",
      "Pharmaceuticals are for personal use or distribution to your team. They cannot normally be sold on the market.",
      "Each pharmaceutical can only affect a person at the listed frequency (1/day, 1/week, etc.)."
    ]
  },
  {
    "id": "medtech-cryo",
    "title": "Medtech: Cryosystem Operation",
    "topic": "Roles",
    "tags": [
      "medtech",
      "cryosystem",
      "cryopump",
      "cryotank",
      "freeze",
      "stabilize",
      "medicine"
    ],
    "icon": "❄",
    "steps": [
      "Cryosystem Operation is a Medicine specialty (max 5 points) that provides equipment for freezing critically injured patients.",
      "**1 point:** Gain one **Cryopump** — a portable device that puts a Mortally Wounded character into cryogenic stasis, stopping Death Saves.",
      "**2 points:** Become a Registered Cryotank Technician — unlimited access to one Cryotank at a medical facility.",
      "**3 points:** Gain **1 personal Cryotank** for your home or base.",
      "**4 points:** Gain **2 more Cryotanks** (3 total). Cryopump now has **2 charges** and can hold **2 people**.",
      "**5 points:** Gain **3 more Cryotanks** (6 total). Cryopump has **3 charges** and holds **3 people**.",
      "A frozen patient is in stasis: no Death Saves, no healing, no deterioration. They stay frozen until thawed and properly treated (usually via Surgery)."
    ]
  },
  {
    "id": "fixer-reach",
    "title": "Fixer: Reach — Sourcing Items by Rank",
    "topic": "Roles",
    "tags": [
      "fixer",
      "operator",
      "reach",
      "sourcing",
      "price category",
      "night market",
      "shopping"
    ],
    "icon": "📦",
    "steps": [
      "Reach determines the **maximum Price Category** of items a Fixer can source through their contacts.",
      "**Rank 1–2:** Source **Cheap and Everyday** items only (up to 100eb).",
      "**Rank 3–4:** Source up to **Expensive** items (up to 5,000eb).",
      "**Rank 5–6:** Can organize a **Night Market** (once per month) where all price categories are available. Can source up to **Super Luxury** at the market.",
      "**Rank 7–8:** Source up to **Very Expensive** items (up to 10,000eb) through normal contacts.",
      "**Rank 9:** Source up to **Luxury** items (up to 50,000eb). Can organize a **Midnight Market** — invite-only, contains 1d10+5 rare items.",
      "**Rank 10:** Source up to **Super Luxury** (100,000eb+) through normal contacts, anytime."
    ]
  },
  {
    "id": "fixer-haggle",
    "title": "Fixer: Haggle — Negotiating Better Prices",
    "topic": "Roles",
    "tags": [
      "fixer",
      "operator",
      "haggle",
      "negotiate",
      "discount",
      "trading",
      "better price",
      "pay"
    ],
    "icon": "💰",
    "steps": [
      "Haggle lets a Fixer negotiate better prices on purchases, sales, and job pay.",
      "Haggle Check: **COOL + Trading + Operator Rank + 1d10** vs. target's **COOL + Trading + their Operator Rank (if Fixer) + 1d10**.",
      "**Rank 1–2:** Negotiate **10% better price** when buying or selling.",
      "**Rank 3–4:** Buy **5 items of the same type, get 1 free**.",
      "**Rank 5–6:** **Buy 5 items, get 1 free** (broader categories). Night Markets make all price categories available.",
      "**Rank 7–8:** For Luxury/Super Luxury items, pay **half now** and the other half **in 1 month** (credit terms).",
      "**Rank 9:** Negotiate **better buy and sell prices** across the board.",
      "**Rank 10:** Negotiate **double pay** for Dangerous Jobs.",
      "Only **one Fixer deal** can apply per transaction. You cannot stack multiple Haggle benefits."
    ]
  },
  {
    "id": "fixer-grease",
    "title": "Fixer: Grease — Cultural Knowledge & Blending In",
    "topic": "Roles",
    "tags": [
      "fixer",
      "operator",
      "grease",
      "culture",
      "language",
      "blend in",
      "infiltration"
    ],
    "icon": "🌍",
    "steps": [
      "Grease represents street-level cultural knowledge, letting the Fixer blend into different social groups.",
      "**Rank 1–2:** Know your **neighborhood** and local gangs inside and out.",
      "**Rank 3–4:** Gain **+1 culture** and **+1 language** at Skill Level 4 (free, on top of normal Skills).",
      "**Rank 5–6:** Gain **+2 more cultures** and **+2 more languages** (3 cultures, 3 languages total from Grease).",
      "**Rank 7–8:** Gain **+3 more cultures** and **+3 more languages** (6 total each from Grease).",
      "**Rank 9:** Blend seamlessly with **Corporate and governmental agencies** — pass as an insider.",
      "**Rank 10:** Blend with **almost any group** including secret societies, foreign intelligence, and exclusive circles.",
      "Cultural knowledge helps with Streetwise, Conversation, and Human Perception checks in those contexts."
    ]
  },
  {
    "id": "exec-team-members",
    "title": "Exec: Team Members — What They Can Do",
    "topic": "Roles",
    "tags": [
      "exec",
      "teamwork",
      "team members",
      "corporate",
      "npc",
      "bodyguard",
      "operative"
    ],
    "icon": "👥",
    "steps": [
      "Execs gain Team Members at **Rank 3** (first), **Rank 5** (second), and **Rank 9** (third, max 3).",
      "Team Member types (rolled on charts): **Company Bodyguard**, **Covert Operative**, **Driver**, **Netrunner**, **Technician**.",
      "Team Members are controlled by the **GM** based on their **Loyalty** score.",
      "Restrictions: Cannot wear armor heavier than **Light Armorjack** (SP 11). Do **not** improve Skills over time.",
      "Team Members act on their own Initiative and follow reasonable orders — if Loyalty is high enough.",
      "Additional Teamwork perks: Rank 1 = business suit, Rank 2 = free Conapt housing, Rank 6 = Trauma Team Silver, Rank 7 = Executive Zone house, Rank 8 = Trauma Team Executive, Rank 10 = McMansion.",
      "If a Team Member dies, you can request a replacement at the next Rank increase."
    ]
  },
  {
    "id": "exec-loyalty-system",
    "title": "Exec: Loyalty System — Gaining & Losing",
    "topic": "Roles",
    "tags": [
      "exec",
      "loyalty",
      "teamwork",
      "morale",
      "betrayal",
      "team management"
    ],
    "icon": "🤝",
    "steps": [
      "Team Member Loyalty starts at **1d6+1** (range 2–7) with a maximum of **10**.",
      "**Gaining Loyalty:** Compliment work (+1), give bonus/perk of 200eb+ (+4), support against Management (+4), give 20% cut of earnings (+6), paid time off for full session (+6), risk physical harm for them (+8).",
      "**Losing Loyalty:** No Loyalty gained during a session (-1), berate/chew out (-2), ignore their contribution (-4), forget their birthday (-6), fail to deliver a promised bonus (-6), throw under the bus to Management (-8), abandon under fire (**-8**).",
      "**Loyalty Save:** When given a task, the GM rolls **1d6**. If the roll is **under** the member's current Loyalty, they comply. If it **equals or exceeds** Loyalty, they refuse, botch, or betray.",
      "At **Loyalty 0 or below**, the Team Member **actively betrays** the Exec — sabotage, selling secrets, or worse.",
      "Loyalty is tracked **between sessions** and changes persist.",
      "Treat your team well! A disloyal operative with access to your corporate secrets is a serious liability."
    ]
  },
  {
    "id": "lawman-backup-tiers",
    "title": "Lawman: Backup Tiers — Who Shows Up",
    "topic": "Roles",
    "tags": [
      "lawman",
      "backup",
      "police",
      "reinforcements",
      "swat",
      "law enforcement"
    ],
    "icon": "🚨",
    "steps": [
      "To call Backup, spend an **Action** and roll **d10 equal to or under your Backup Rank**. Then roll **d6** for Rounds until arrival.",
      "**Rank 1–2:** 4 Corporate Security (foot patrol, Heavy Pistols, Kevlar — SP 7, HP 20, Combat# 8).",
      "**Rank 3–4:** 4 Local Beat Cops (2 Compact Groundcars, Heavy Pistols, Kevlar — SP 7, HP 25, Combat# 10).",
      "**Rank 5–7:** 2 County Mounties (High-Performance Groundcar, Heavy Pistols + Assault Rifles, Heavy Armorjack — SP 13, HP 35, Combat# 14).",
      "**Rank 8:** 1 Recovery Zone Marshal (Superbike, VH Pistol + AR + Grenade Launcher, Flak — SP 15, HP 50, Combat# 16).",
      "**Rank 9:** 2 C-SWAT (AV-4, Assault Rifles + Rocket Launchers, Metalgear — SP 18, HP 35, Combat# 15).",
      "**Rank 10:** 2 National/Interpol/FBI/Netwatch agents (AV-4, VH Pistols + ARs, Light Armorjack — SP 11, HP 35, Combat# 14). They **stay to investigate** and respond to all related calls.",
      "On a **d6 roll of 6**, backup arrives from the **next highest tier** instead. At Rank 10, you get **two groups**. Abusing Backup gets you fired or fined."
    ]
  },
  {
    "id": "nomad-motorpool",
    "title": "Nomad: Family Motorpool — Vehicles by Rank",
    "topic": "Roles",
    "tags": [
      "nomad",
      "moto",
      "motorpool",
      "vehicle",
      "family",
      "car",
      "helicopter",
      "av-4"
    ],
    "icon": "🚗",
    "steps": [
      "Each time your **Moto Rank** increases, you either **add a new stock vehicle** of that Rank or lower, or **upgrade an existing one**.",
      "**Rank 1–4 vehicles:** Compact Groundcar, Gyrocopter, Jetski, Roadbike.",
      "**Rank 5–6 vehicles:** Helicopter, High-Performance Groundcar, Speedboat.",
      "**Rank 7–8 vehicles:** AV-4, Cabin Cruiser, Superbike.",
      "**Rank 9–10 vehicles:** Aerozep, AV-9, Super Groundcar, Yacht.",
      "Only **one Family Vehicle** can be out at a time (swap the next morning). Destroyed vehicles are repaired by your Family in **1 week for 500eb**.",
      "At **Rank 10**, you become Family leadership and can have **all vehicles out at once**.",
      "**Vehicle Familiarity:** Add your Moto Rank to Drive Land Vehicle, Pilot Air Vehicle, Pilot Sea Vehicle, and all vehicle Tech Skill checks."
    ]
  },
  {
    "id": "media-rumor-system",
    "title": "Media: How Rumors Work",
    "topic": "Roles",
    "tags": [
      "media",
      "credibility",
      "rumor",
      "story",
      "believability",
      "journalist",
      "news"
    ],
    "icon": "📰",
    "steps": [
      "The GM secretly rolls **Credibility Rank + 1d10** at least **twice per week** against passive Rumor DVs.",
      "Passive DVs: Vague Rumor **DV7**, Typical Rumor **DV9**, Substantial Rumor **DV11**, Detailed Rumor **DV13**.",
      "The Media can also **actively investigate** rumors with higher DVs: Vague **DV13**, Typical **DV15**, Substantial **DV17**, Detailed **DV21**.",
      "**Believability** determines if people believe your published story (rated X/10 based on Rank). Rank 1–2 = 2/10, Rank 3–4 = 3/10, Rank 5–6 = 4/10, Rank 7–8 = 5/10, Rank 9 = 6/10, Rank 10 = 7/10.",
      "**Verifiable evidence** grants +1 (single piece) or +2 (4+ pieces) to Believability checks. **LUCK cannot be spent** on Believability.",
      "**Impact** scales with Rank: small local change (1–2) up to worldwide change and Megacorp collapse (10).",
      "**Access/Sources** also scale: local honcho at Rank 1–2, up to major world leaders and Corp heads at Rank 10."
    ]
  },
  {
    "id": "rockerboy-venues",
    "title": "Rockerboy: Venues & Audience by Rank",
    "topic": "Roles",
    "tags": [
      "rockerboy",
      "charismatic impact",
      "venue",
      "fans",
      "audience",
      "performance",
      "influence"
    ],
    "icon": "🎸",
    "steps": [
      "Charismatic Impact lets you influence **Fans**. Convert non-fans by rolling Charismatic Impact + 1d10 vs. DV by group size: Single Person **DV8**, Small Group (up to 6) **DV10**, Huge Group **DV12**.",
      "**Rank 1–2:** Small local clubs. Single fans do small favors (drink, meal, ride). Small groups ask for autographs.",
      "**Rank 3–4:** Well-known clubs. Single fans do major favors (bed, good word). Small groups hang out, provide party favors.",
      "**Rank 5–6:** Large important clubs. Single fans commit minor crimes for you. Small groups act as your personal posse. Huge groups do major favors.",
      "**Rank 7–8:** Small concert halls, local video. Single fans risk their life. Small groups commit minor crimes. Huge groups are rabidly loyal and fight rival fans.",
      "**Rank 9:** Large concert halls, national video. Small and huge groups commit major crimes. Huge groups have cult-like following — will riot, destroy, even kill.",
      "**Rank 10:** Huge stadiums, international video. Single fans sacrifice themselves. Huge groups are a worldwide cult-like army.",
      "On a **failed** Charismatic Impact check, you cannot ask the same favor from those fans for **one week**."
    ]
  },
  {
    "id": "using-athletics",
    "title": "Using Athletics",
    "topic": "Skills",
    "tags": [
      "athletics",
      "climbing",
      "swimming",
      "jumping",
      "throwing",
      "physical",
      "dex"
    ],
    "icon": "🏃",
    "steps": [
      "**What it is:** The skill of jumping, climbing, throwing, swimming, and lifting weights -- your go-to for all active physical feats.",
      "**How to roll:** **DEX + Athletics + 1d10** vs DV set by the GM. Climbing a ladder DV9, rough wall DV13, smooth wall DV17. Swimming calm water DV9, rough DV13, stormy DV17. Throwing grenades uses Grenade Launcher DVs on the range table.",
      "**When to use it:** Any time a character attempts an active physical feat: scaling a building, leaping across rooftops (MOVE x2 m horizontal, MOVE m vertical with running start, halved from standing), swimming a flooded tunnel, throwing a grenade, or catching a ledge mid-fall (DV15).",
      "**When NOT to use it -- use Endurance instead:** Athletics is for **active** physical feats (climbing, jumping, swimming). Endurance is for **passive** physical resistance (marching all day, going without sleep, resisting harsh weather). If the character is *doing* something physical, it is Athletics. If they are *enduring* something physical, it is Endurance.",
      "**When NOT to use it -- use Evasion instead:** Athletics does not cover dodging attacks in combat. Dodging melee or ranged attacks is always Evasion (DEX + Evasion). Athletics can be used to break free from a grapple as an alternative to Brawling.",
      "**Key DVs:** Ladder DV9, rough wall DV13, smooth wall DV17. Calm water DV9, rough DV13, stormy DV17. Catching a ledge DV15. Failure on climbing = fall. Failure on swimming = start drowning (BODY damage direct to HP each Turn).",
      "**Special rules:** Athletics is a Basic Skill (all characters start with at least 2). It is one of the most commonly called-for skills outside combat -- keep it reasonably high on any physical character."
    ]
  },
  {
    "id": "using-brawling",
    "title": "Using Brawling",
    "topic": "Skills",
    "tags": [
      "brawling",
      "unarmed",
      "melee",
      "punch",
      "kick",
      "fist",
      "body",
      "dex"
    ],
    "icon": "👊",
    "steps": [
      "**What it is:** The skill of fighting and grappling with brute strength -- untrained unarmed combat including punches, kicks, headbutts, and wrestling.",
      "**How to roll:** **DEX + Brawling + 1d10** vs defender's **DEX + Evasion + 1d10** (or DEX + Brawling + 1d10 for grapple attempts). Damage based on BODY: BODY 4-5 = 1d6, BODY 6-7 = 2d6, BODY 8-9 = 3d6, BODY 10-11 = 4d6, BODY 12+ = 5d6. ROF 2 (two strikes per Action).",
      "**When to use it:** Unarmed strikes, grappling (grab, choke, throw), barroom brawls, any untrained hand-to-hand fighting. Also used to resist grapple attempts and break free from grabs.",
      "**When NOT to use it -- use Martial Arts instead:** Brawling is **untrained** fighting -- raw punches and brute force. Martial Arts is **trained** fighting with a specific form (Karate, Taekwondo, Judo, Aikido) that grants special moves and halves enemy armor. Brawling does NOT halve armor; full SP applies. If a character has invested in Martial Arts, they should almost always use it over Brawling for attacks.",
      "**When NOT to use it -- use Melee Weapon instead:** If the character is wielding any melee weapon (knife, bat, sword), use DEX + Melee Weapon, not Brawling. Brawling is strictly empty-handed (or with cyberware body weapons like Big Knucks that explicitly use Brawling).",
      "**Key rules:** Brawling is a Basic Skill (all characters start with at least 2). Grapple: DEX + Brawling to grab (Evasion cannot resist a grab), then choke (BODY stat direct to HP, 3 successive rounds = unconscious) or throw (BODY stat direct to HP + prone). Both participants take -2 to all Actions while grappling.",
      "**Special note:** Brawling damage scales with BODY, making it especially effective for high-BODY characters. Cyberarms with BODY bonuses increase Brawling damage when striking with that arm."
    ]
  },
  {
    "id": "using-concentration",
    "title": "Using Concentration",
    "topic": "Skills",
    "tags": [
      "concentration",
      "willpower",
      "focus",
      "facedown",
      "resist",
      "mental",
      "will"
    ],
    "icon": "🧠",
    "steps": [
      "**What it is:** The skill of focus and mental control, encompassing feats of memory, recall, ignoring distractions, and physiological mastery.",
      "**How to roll:** **WILL + Concentration + 1d10** vs DV or opposed. Most commonly rolled as a **defense**: COOL + Concentration + 1d10 to resist Facedowns, WILL + Concentration + 1d10 to resist Suppressive Fire.",
      "**When to use it:** Resisting Facedowns (intimidation), resisting Suppressive Fire, staying focused under stress, maintaining composure during distractions, feats of memory or recall.",
      "**When NOT to use it -- use Resist Torture/Drugs instead:** Concentration is for **mental focus and composure** (Facedowns, suppressive fire, distractions). Resist Torture/Drugs is for **physical endurance against pain, drugs, and poisons** (interrogation, drug secondary effects, biotoxin). If someone is being intimidated socially, it is Concentration. If someone is being physically tortured or drugged, it is Resist Torture/Drugs.",
      "**When NOT to use it -- use Endurance instead:** Concentration is mental resilience. Endurance is physical resilience against harsh conditions and prolonged exertion. A sleepless stakeout might call for Endurance (physical toll) AND Concentration (staying alert).",
      "**Key rules:** Concentration is a Basic Skill (all characters start with at least 2). It is the primary **social defense** stat -- almost every social attack (Persuasion, Facedowns) is resisted with Concentration. If you lose a Facedown, you back down from the confrontation but do not have to flee.",
      "**Special note:** A character with high COOL + Concentration is extremely hard to rattle socially. This is the single most important defensive social skill in the game."
    ]
  },
  {
    "id": "using-conversation",
    "title": "Using Conversation",
    "topic": "Skills",
    "tags": [
      "conversation",
      "lying",
      "fast talk",
      "deception",
      "social",
      "emp",
      "information"
    ],
    "icon": "💬",
    "steps": [
      "**What it is:** The skill of extracting information from people without alerting them, through careful and casual conversation.",
      "**How to roll:** **EMP + Conversation + 1d10** vs target's **COOL + Concentration + 1d10** (opposed) or a DV set by the GM.",
      "**When to use it:** Getting someone talking about a sensitive topic at a bar, slipping questions into friendly chat, learning secrets through charm, social information-gathering without raising suspicion.",
      "**When NOT to use it -- use Persuasion instead:** Conversation is **subtle extraction** -- you are trying to get information out of someone without them realizing it. Persuasion is **direct convincing** -- you are openly trying to change their mind or get them to do something. If the player says 'I try to convince the guard to let us in,' that is Persuasion. If the player says 'I chat up the guard to find out when shifts change,' that is Conversation.",
      "**When NOT to use it -- use Human Perception instead:** Conversation **gets them to talk**; Human Perception **reads them**. Use Conversation to draw out information, then Human Perception to check if what they said was true.",
      "**Key rules:** Conversation is a Basic Skill (all characters start with at least 2). It is EMP-linked, so losing Humanity to cyberware directly weakens it. Failed checks mean the target realizes you are fishing for info and clams up or becomes suspicious.",
      "**Special note:** Works best in casual social settings (bars, parties, meetings). Less effective in hostile or formal situations where the target is already on guard. Pairs extremely well with Human Perception for a 'chat then read' approach."
    ]
  },
  {
    "id": "using-education",
    "title": "Using Education",
    "topic": "Skills",
    "tags": [
      "education",
      "knowledge",
      "general knowledge",
      "history",
      "science",
      "int",
      "lore"
    ],
    "icon": "📚",
    "steps": [
      "**What it is:** The skill of general knowledge, equivalent to a basic school education -- reading, writing, basic math, history, and enough knowledge to get by in the world.",
      "**How to roll:** **INT + Education + 1d10** vs DV set by GM. Common knowledge DV9, specialized topic DV13, obscure fact DV15, extremely rare knowledge DV17+.",
      "**When to use it:** Whenever a character needs to recall general knowledge that does not fall under a more specific skill -- identifying a historical event, understanding politics, reading a technical manual, general trivia, current events.",
      "**When NOT to use it -- use Science instead:** Education covers **broad general knowledge**. Science covers **specific academic fields** (physics, chemistry, biology, etc.) in depth. If the question is 'do I know what radiation does to a person?' that is Education. If the question is 'can I calculate the radiation dosage from this isotope?' that is Science.",
      "**When NOT to use it -- use Library Search instead:** Education is what you **already know**. Library Search is **looking things up** in databases, Data Pools, and archives. If the character has to research it, use Library Search. If it is something they would just know from their education, use Education.",
      "**Key rules:** Education is a Basic Skill (all characters start with at least 2). It is the 'catch-all' knowledge skill when no specialized skill applies. DVs: Common DV9, Specialized DV13, Obscure DV15, Rare DV17+.",
      "**Special note:** A complementary Education check can grant +1 to subsequent related skill checks. A well-educated character saves time by not needing to research what they already know."
    ]
  },
  {
    "id": "using-evasion",
    "title": "Using Evasion",
    "topic": "Skills",
    "tags": [
      "evasion",
      "dodge",
      "melee",
      "defense",
      "dex",
      "ranged",
      "ref 8"
    ],
    "icon": "💨",
    "steps": [
      "**What it is:** The skill of getting out of the way of someone attacking you -- your primary combat defense skill for dodging melee and (if fast enough) ranged attacks.",
      "**How to roll:** **DEX + Evasion + 1d10** vs attacker's attack roll. Against melee: always available. Against ranged: only if your **REF is 8 or higher**. Against vehicles: DEX + Evasion + 1d10 vs DV13.",
      "**When to use it:** Dodging any incoming attack you are aware of. This is a **reaction** -- it does not cost your Action, so you can evade and still act on your turn. Used against melee strikes, ranged shots (REF 8+ only), and vehicle rams.",
      "**When NOT to use it -- use Brawling instead:** You cannot use Evasion to resist a **Grab** (grapple attempt). Grabs are opposed by DEX + Brawling + 1d10, not Evasion. Once grabbed, escaping also uses Brawling (or Athletics), not Evasion.",
      "**When NOT to use it -- use Athletics instead:** Evasion is strictly for dodging **attacks**. Jumping across a gap, dodging falling debris, or other non-attack physical avoidance is Athletics. If it is a combat attack roll, use Evasion. If it is an environmental hazard, use Athletics.",
      "**Key rules:** Evasion is a Basic Skill (all characters start with at least 2). You CANNOT evade attacks you are unaware of (ambush, attacked from behind). If REF < 8, ranged attacks hit against the Range DV only -- you cannot actively dodge bullets.",
      "**Special note:** Evasion is arguably the single most important combat survival skill. Even 2-3 points can make the difference between life and death. Solos can add Combat Awareness points to Evasion via Damage Deflection."
    ]
  },
  {
    "id": "using-first-aid-skill",
    "title": "Using First Aid",
    "topic": "Skills",
    "tags": [
      "first aid",
      "healing",
      "stabilize",
      "tech",
      "quick fix",
      "bandage",
      "treat"
    ],
    "icon": "🩹",
    "steps": [
      "**What it is:** The skill of applying basic medical treatment to keep a wounded person from dying and to temporarily fix the most common Critical Injuries.",
      "**How to roll:** **TECH + First Aid + 1d10** vs DV. Stabilize Mortally Wounded: DV13. Quick Fix varies by injury: DV13 (Foreign Object, Torn Muscle, Concussion) to DV15 (others).",
      "**When to use it:** Stabilizing someone at 0 HP to stop Death Saves (brings to 1 HP), Quick Fixing common Critical Injuries in the field, basic wound care. This is the first response to any combat injury.",
      "**When NOT to use it -- use Paramedic instead:** First Aid handles **stabilization and common injuries only**. Paramedic can treat **all Critical Injuries not requiring Surgery** (Collapsed Lung, Spinal Injury, Cracked Skull, etc.). If First Aid fails on an injury, only Paramedic or Surgery can help -- you cannot retry with First Aid.",
      "**When NOT to use it -- use Surgery (Medtech only) instead:** The most severe injuries (Lost Limb, Lost Eye, Brain Injury) require Surgery, which is only available through the Medtech's Medicine Role Ability. Neither First Aid nor Paramedic can treat these.",
      "**Key rules:** First Aid is a Basic Skill (all characters start with at least 2). Quick Fix is **temporary** -- it negates the injury's effect but does not fully heal it. Only one First Aid attempt per injury. Paramedic is the x2-cost upgrade path.",
      "**Special note:** Every party member should have decent First Aid. In combat, stabilizing a downed ally takes one Action and DV13 -- achievable even with moderate TECH + 2 base skill."
    ]
  },
  {
    "id": "using-human-perception",
    "title": "Using Human Perception",
    "topic": "Skills",
    "tags": [
      "human perception",
      "read people",
      "detect lies",
      "empathy",
      "emp",
      "social",
      "insight"
    ],
    "icon": "🧐",
    "steps": [
      "**What it is:** The skill of reading a person's facial expressions and body language to discern their emotional state and detect lies or deception.",
      "**How to roll:** **EMP + Human Perception + 1d10** vs target's **COOL + Acting + 1d10** (if they are lying/hiding something) or a DV set by the GM for general reads.",
      "**When to use it:** Detecting lies, reading body language for intent, sensing emotional state, judging trustworthiness, noticing if someone is nervous, afraid, or hiding something. This is a **reactive/analytical** skill -- you are reading them, not influencing them.",
      "**When NOT to use it -- use Perception instead:** Human Perception is for reading **people** (emotions, lies, intent). Perception is for noticing **things and environments** (hidden objects, ambushes, clues). If you are trying to spot a hidden enemy, use Perception. If you are trying to tell if someone is lying to your face, use Human Perception.",
      "**When NOT to use it -- use Conversation instead:** Human Perception **reads** what someone is feeling or hiding. Conversation **gets them to talk** and reveal information. Use Conversation to draw them out, then Human Perception to verify what they said.",
      "**Key rules:** Human Perception is a Basic Skill (all characters start with at least 2). It is EMP-linked, so heavy cyberware users lose effectiveness. Cyberware bonus: **Voice Stress Analyzer** grants +2 to Human Perception and Interrogation checks.",
      "**Special note:** A failed check means you cannot get a read -- you are not sure if they are lying or telling the truth. The target does not know you tried to read them (this is passive, unlike Interrogation which is active and obvious)."
    ]
  },
  {
    "id": "using-perception",
    "title": "Using Perception",
    "topic": "Skills",
    "tags": [
      "perception",
      "notice",
      "spot",
      "ambush",
      "hidden",
      "awareness",
      "int",
      "search"
    ],
    "icon": "🔍",
    "steps": [
      "**What it is:** The skill of spotting hidden things like clues, traps, and people using the Stealth skill -- your environmental awareness and observational ability.",
      "**How to roll:** **INT + Perception + 1d10** vs DV or vs an opposed **DEX + Stealth + 1d10** check. DV examples: obvious clue DV9, hidden but findable DV13, well-concealed DV15, expertly hidden DV17+.",
      "**When to use it:** Spotting hidden enemies, detecting ambushes, noticing environmental details and clues, searching an area, hearing suspicious sounds, catching someone following you.",
      "**When NOT to use it -- use Human Perception instead:** Perception is for **things and environments** (hidden objects, traps, ambushes, clues). Human Perception is for **reading people** (detecting lies, reading emotions, judging intent). Spotting someone hiding behind a wall = Perception. Spotting that someone is lying to your face = Human Perception.",
      "**When NOT to use it -- use Conceal/Reveal Object instead:** Perception spots hidden **people** (opposed by Stealth) and environmental details. Finding hidden **objects** that someone deliberately concealed uses Conceal/Reveal Object (opposed by their Conceal/Reveal). A casual search of a room is Perception; a targeted search for a hidden weapon is Conceal/Reveal.",
      "**Key DVs and bonuses:** Cyberware: **Image Enhance** (+2 Perception visual), **Amplified Hearing** (+2 auditory). Solos: **Threat Detection** from Combat Awareness adds +1 per allocated point. The GM may roll Perception passively for detecting ambushes.",
      "**Special note:** Perception is a Basic Skill (all characters start with at least 2). It is one of the most commonly rolled skills in the game. Keep it high for survival -- missing an ambush means you cannot use Evasion against the first attack."
    ]
  },
  {
    "id": "using-persuasion-skill",
    "title": "Using Persuasion",
    "topic": "Skills",
    "tags": [
      "persuasion",
      "convince",
      "influence",
      "negotiate",
      "cool",
      "social",
      "diplomacy"
    ],
    "icon": "🗣",
    "steps": [
      "**What it is:** The skill of convincing, persuading, or influencing individuals -- honest, direct attempts to change someone's mind or get them to act.",
      "**How to roll:** **COOL + Persuasion + 1d10** vs target's **COOL + Concentration + 1d10** (opposed) or DV set by GM. DVs: reasonable request DV13, against their interest DV15, dangerous request DV17, life-threatening DV21+.",
      "**When to use it:** Talking your way past guards, convincing NPCs to help, calming hostile situations, negotiating non-commercial agreements, making a case for your point of view. Persuasion is **honest convincing** -- you believe what you are saying.",
      "**When NOT to use it -- use Conversation instead:** Persuasion is **direct convincing** -- the target knows you are trying to influence them. Conversation is **subtle extraction** -- you are trying to get information without them realizing. 'I convince the fixer to give us the job' = Persuasion. 'I chat with the fixer to learn who else is bidding' = Conversation.",
      "**When NOT to use it -- use Trading instead:** Persuasion is for **non-commercial** convincing. Trading is specifically for **buy/sell price negotiation**. Haggling over the price of a weapon = Trading. Convincing a vendor to sell you something they do not normally sell = Persuasion.",
      "**Key rules:** Persuasion is a Basic Skill (all characters start with at least 2). Repeated attempts on the same target/topic increase DV by +2 each time. NPCs with strong opposing motivations may be impossible to Persuade. COOL-linked, so it is unaffected by Humanity loss.",
      "**Special note:** If the character is **lying** rather than honestly persuading, use COOL + Acting (deception) or EMP + Conversation (subtle misdirection) instead. Persuasion assumes the speaker believes their own argument."
    ]
  },
  {
    "id": "using-stealth-skill",
    "title": "Using Stealth",
    "topic": "Skills",
    "tags": [
      "stealth",
      "sneak",
      "hide",
      "shadow",
      "infiltrate",
      "dex",
      "quiet"
    ],
    "icon": "🥷",
    "steps": [
      "**What it is:** The skill of moving quietly, hiding, doing an Action discreetly, or otherwise evading detection -- your personal invisibility skill.",
      "**How to roll:** **DEX + Stealth + 1d10** vs observer's **INT + Perception + 1d10** (opposed). Movement may be limited to half MOVE while sneaking (GM discretion).",
      "**When to use it:** Sneaking past guards, hiding in shadows, tailing/shadowing someone, performing an action without being noticed, setting up an ambush. Opposed check each significant interval when tailing.",
      "**When NOT to use it -- use Conceal/Reveal Object instead:** Stealth is for hiding **yourself** (your whole body, your movement, your presence). Conceal/Reveal Object is for hiding **items** (weapons on your person, objects in a room, evidence). Sneaking past a guard = Stealth. Hiding a gun under your jacket = Conceal/Reveal.",
      "**When NOT to use it -- use Acting instead:** Stealth is about being **unseen and unheard**. Acting is about being **seen but not recognized** (disguise, impersonation). If you want to avoid detection entirely, use Stealth. If you want to walk through openly but as someone else, use Acting.",
      "**Key rules:** Stealth is a Basic Skill (all characters start with at least 2). Modifiers: low light/darkness gives -1 to -4 on the observer's Perception. Noisy environments help sneaking. Success before combat = **ambush** (target cannot use Evasion against your first attack).",
      "**Special note:** Stealth is DEX-linked and pairs naturally with ambush tactics. A successful Stealth + first-strike combo is one of the most lethal openers in the game, especially for Solos who can pile on Combat Awareness bonuses."
    ]
  },
  {
    "id": "using-resist-torture",
    "title": "Using Resist Torture/Drugs",
    "topic": "Skills",
    "tags": [
      "resist torture",
      "drugs",
      "interrogation",
      "willpower",
      "will",
      "poison",
      "endurance"
    ],
    "icon": "💪",
    "steps": [
      "**What it is:** The skill of resisting painful effects including interrogation, torture, drugs, and poisons -- your body's trained resistance to being broken.",
      "**How to roll:** **WILL + Resist Torture/Drugs + 1d10** vs DV or opposed. Drug secondary effects: usually DV15. Poisons: Mild DV11, Strong DV13, Deadly DV15. Biotoxin: DV15 or 3d6 direct to HP. Interrogation: opposed vs COOL + Interrogation + 1d10.",
      "**When to use it:** Resisting drug side effects and addiction, resisting poisons and biotoxins, withstanding interrogation and torture, resisting truth serums, enduring physical pain without breaking.",
      "**When NOT to use it -- use Concentration instead:** Resist Torture/Drugs is for **physical pain, drugs, and poisons**. Concentration is for **mental focus and composure** (resisting Facedowns, Suppressive Fire, staying alert under stress). If someone threatens you verbally, that is Concentration. If someone is physically hurting you or drugging you, that is Resist Torture/Drugs.",
      "**When NOT to use it -- use Endurance instead:** Resist Torture/Drugs is for **acute painful effects** (torture, drugs, poisons). Endurance is for **prolonged physical hardship** (days without sleep, marching, harsh weather). Being tortured for information = Resist Torture/Drugs. Surviving a desert crossing = Endurance.",
      "**Key rules:** Cyberware bonus: **Toxin Binders** grant +2 to Resist Torture/Drugs checks. Drug secondary effects trigger when the primary effect wears off. Failure against poison = take poison damage. Failure against biotoxin = 3d6 direct to HP.",
      "**Special note:** A high-WILL character with invested skill points and Toxin Binders is extremely hard to crack through interrogation or poison. Defenders can spend LUCK on these rolls like any other check."
    ]
  },
  {
    "id": "using-trading",
    "title": "Using Trading",
    "topic": "Skills",
    "tags": [
      "trading",
      "haggling",
      "buying",
      "selling",
      "prices",
      "cool",
      "commerce",
      "bargain"
    ],
    "icon": "💵",
    "steps": [
      "**What it is:** The skill of striking a good bargain with a merchant or customer -- commercial price negotiation for buying and selling goods.",
      "**How to roll:** **COOL + Trading + 1d10** vs seller/buyer's **COOL + Trading + 1d10** (opposed). Success = better deal (typically 10-20% off). Failure = standard listed price. Critical failure = seller raises the price.",
      "**When to use it:** Haggling over prices at shops, negotiating loot sale prices, bartering goods, any commercial buy/sell negotiation. Also used when selling loot (base is ~50% of listed price; Trading can push it higher).",
      "**When NOT to use it -- use Persuasion instead:** Trading is strictly for **commercial price negotiation**. Persuasion is for **non-commercial convincing**. 'I want to pay less for this gun' = Trading. 'I want the vendor to sell me something he says is not for sale' = Persuasion. Once Persuasion gets the item on the table, Trading sets the price.",
      "**When NOT to use it -- use Streetwise instead:** Trading handles the **price negotiation**. Streetwise handles **finding** the illegal goods, black market dealers, and contraband sources in the first place. You need Streetwise to locate the dealer, then Trading to haggle the price.",
      "**Key rules:** Fixers add their **Operator Rank** to Trading checks via their Haggle ability, making them by far the best negotiators. Night Markets and Midnight Markets may have different pricing rules. COOL-linked, unaffected by Humanity loss.",
      "**Special note:** Trading is one of the most economically impactful skills in the game. A Fixer with high Operator Rank + Trading can save the party thousands of eddies over a campaign."
    ]
  },
  {
    "id": "using-streetwise-skill",
    "title": "Using Streetwise",
    "topic": "Skills",
    "tags": [
      "streetwise",
      "street",
      "finding things",
      "contacts",
      "criminal",
      "cool",
      "underworld"
    ],
    "icon": "🏙",
    "steps": [
      "**What it is:** The skill of making and using contacts to get illegal goods and contraband, talking to the criminal element, and avoiding bad situations in bad neighborhoods.",
      "**How to roll:** **COOL + Streetwise + 1d10** vs DV set by GM. Common street info DV9, specific illegal item DV13, rare contraband DV15, well-hidden criminal DV17+.",
      "**When to use it:** Finding illegal goods, locating black market dealers, identifying gang affiliations and turf, reading street situations, getting word on the street, knowing which alleys to avoid, finding underground services.",
      "**When NOT to use it -- use Local Expert instead:** Streetwise is **general street culture and criminal underworld knowledge** that applies anywhere. Local Expert is **specific to one neighborhood** -- detailed knowledge of who lives there, what businesses exist, local power structures. 'Do I know where to buy illegal chrome in Night City?' = Streetwise. 'Do I know the back entrance to that specific ripperdoc's clinic in Little China?' = Local Expert: Little China.",
      "**When NOT to use it -- use Trading instead:** Streetwise **finds** the dealer or the goods. Trading **negotiates the price**. They are often used sequentially: Streetwise to locate the black market source, then Trading to haggle.",
      "**Key rules:** COOL-linked, unaffected by Humanity loss. Streetwise is about knowing the right people and places -- the social navigation of the street. A Fixer's Operator ability overlaps significantly, but Streetwise is available to everyone.",
      "**Special note:** Streetwise pairs naturally with Local Expert and Conversation. A character with high scores in all three is a master of the Night City social landscape -- they know where to go, who to talk to, and how to get what they need."
    ]
  },
  {
    "id": "using-basic-tech",
    "title": "Using Basic Tech",
    "topic": "Skills",
    "tags": [
      "basic tech",
      "repair",
      "tech",
      "fix",
      "maintain",
      "electronics",
      "simple"
    ],
    "icon": "🛠",
    "steps": [
      "**What it is:** The skill of identifying, understanding, and repairing simple electronic and mechanical devices and **all items not covered by another Technique Skill**.",
      "**How to roll:** **TECH + Basic Tech + 1d10** vs DV. Simple repair DV9, moderate damage DV13, complex repair DV15, near-destroyed DV17+. Repair DVs also scale by price category: Cheap/Everyday DV9, Costly DV13, Premium DV17, Expensive DV21.",
      "**When to use it:** Repairing household electronics, basic machinery, doors, locks (mechanical components), generic equipment, non-weapon/non-vehicle/non-cyber items. Basic Tech is the **catch-all** repair skill.",
      "**When NOT to use it -- use Cybertech instead:** Basic Tech is for **general items**. Cybertech is for **cyberware** (cyberlimbs, implants, neural hardware). If the item is installed in a person, it is probably Cybertech. If it is sitting on a table, it is probably Basic Tech.",
      "**When NOT to use it -- use Weaponstech or Vehicle Tech instead:** Weapons (firearms, melee weapons) use **Weaponstech**. Vehicles use **Land/Air/Sea Vehicle Tech**. Complex electronics and security systems use **Electronics/Security Tech**. Basic Tech only covers what none of these specialized skills cover.",
      "**Key rules:** Techs add their **Field Expertise** Rank to Basic Tech checks for non-Maker purposes. Repair time scales with price: Cheap/Everyday 1 hour, Costly 6 hours, Premium 1 day, Expensive 1 week, Very Expensive 2 weeks, Luxury 1 month.",
      "**Special note:** Basic Tech is the broadest TECH skill and the most commonly needed. If you can only invest in one TECH skill as a non-Tech character, this is the one -- it covers the widest range of situations."
    ]
  },
  {
    "id": "using-cybertech",
    "title": "Using Cybertech",
    "topic": "Skills",
    "tags": [
      "cybertech",
      "cyberware",
      "repair",
      "modify",
      "tech",
      "implant",
      "maintenance"
    ],
    "icon": "🤖",
    "steps": [
      "**What it is:** The skill of identifying, understanding, and repairing cybernetics -- maintenance and repair of all cyberware implants and cybernetic systems.",
      "**How to roll:** **TECH + Cybertech + 1d10** vs DV. Standard repair DVs by price category apply. EMP Grenade/Microwaver recovery: DV15 Cybertech check.",
      "**When to use it:** Repairing damaged cyberware (cyberlimbs, optics, neural hardware), recovering cyberware disabled by EMP, Quick Fixing/Treating Critical Injuries to cybernetic replacement parts, routine cyberware maintenance.",
      "**When NOT to use it -- use Basic Tech instead:** Cybertech is specifically for **cyberware** (items installed in a person's body). Basic Tech is for **general electronics and devices** not installed in a person. A cyberdeck sitting on a table might be Electronics/Security Tech; a cyberarm is Cybertech.",
      "**When NOT to use it -- use Surgery (Medtech) instead:** Cybertech can **repair** existing cyberware but cannot **install or remove** cyberware. Installation and removal require the **Surgery** skill, which is only available through the Medtech's Medicine Role Ability.",
      "**Key rules:** Techs add **Field Expertise** Rank to Cybertech checks for non-Maker purposes. EMP disables 2 pieces of cyberware/electronics for 1 minute unless recovered with a DV15 Cybertech check. Repair time follows standard price category rules.",
      "**Special note:** Essential for any team relying on cyberware. A cyberarm with a broken actuator is dead weight. Having a team member with decent Cybertech means faster recovery from EMP grenades and Microwaver attacks, which are increasingly common threats."
    ]
  },
  {
    "id": "using-weaponstech",
    "title": "Using Weaponstech",
    "topic": "Skills",
    "tags": [
      "weaponstech",
      "weapons",
      "repair",
      "modify",
      "gun",
      "tech",
      "maintenance"
    ],
    "icon": "🔫",
    "steps": [
      "**What it is:** The skill of repairing and maintaining weapons of all types -- firearms, melee weapons, heavy weapons, exotic weapons, ammunition, and weapon modifications.",
      "**How to roll:** **TECH + Weaponstech + 1d10** vs DV. Repair DVs by price: Cheap/Everyday DV9, Costly DV13, Premium DV17, Expensive DV21, Very Expensive DV24, Luxury DV29.",
      "**When to use it:** Repairing damaged weapons, maintaining weapons to prevent degradation, field-stripping and cleaning, diagnosing weapon malfunctions. Also the relevant skill for Tech Maker abilities (Upgrade, Fabrication) applied to weapons.",
      "**When NOT to use it -- use Basic Tech instead:** Weaponstech is exclusively for **weapons** (anything designed to deal damage). Basic Tech covers **everything else** (electronics, machinery, general equipment). If it is a gun, sword, or explosive device, it is Weaponstech. If it is a tool, comm unit, or household device, it is Basic Tech.",
      "**When NOT to use it -- use Demolitions instead:** Weaponstech covers weapons including grenades and launchers. Demolitions covers **setting and defusing explosive charges** (C4, mines, shaped charges). Repairing a grenade launcher = Weaponstech. Planting a shaped charge on a wall = Demolitions.",
      "**Key rules:** Techs add **Field Expertise** Rank to Weaponstech checks for non-Maker purposes. Techs with **Upgrade Expertise** can raise weapon quality tier, make weapons concealable, or add option slots. **Fabrication Expertise** allows crafting weapons from cheaper materials.",
      "**Special note:** Weaponstech is essential for keeping the team armed and operational. A broken weapon in a firefight is a death sentence. Weapon repairs follow the standard time-by-price rules."
    ]
  },
  {
    "id": "using-electronics-security",
    "title": "Using Electronics/Security Tech",
    "topic": "Skills",
    "tags": [
      "electronics",
      "security",
      "tech",
      "hack",
      "alarm",
      "bypass",
      "camera",
      "x2 skill"
    ],
    "icon": "🔌",
    "steps": [
      "**What it is:** The skill of identifying, understanding, repairing, countering, and installing complex electronic devices including computers, cyberdecks, personal electronics, electronic security systems, bugs, tracers, pressure plates, and laser tripwires.",
      "**How to roll:** **TECH + Electronics/Security Tech + 1d10** vs DV. Cheap alarms DV9, standard DV13, high-security DV17, corporate-grade DV21+. This is a **x2 cost skill** (double IP to level: Level 1 = 40 IP, Level 5 = 200 IP, Level 10 = 400 IP).",
      "**When to use it:** Bypassing alarm systems, disabling cameras, cracking electronic locks, repairing cyberdecks, planting or detecting bugs and tracers, installing complex electronics, working with security hardware.",
      "**When NOT to use it -- use Basic Tech instead:** Electronics/Security Tech covers **complex** electronics, security systems, and cyberdecks. Basic Tech covers **simple** electronics and general devices. If it is a security camera, electronic lock, or cyberdeck, use Electronics/Security Tech. If it is a radio, flashlight, or household appliance, use Basic Tech.",
      "**When NOT to use it -- use Netrunning instead:** Electronics/Security Tech is the **physical hardware** approach -- you work on the actual devices with your hands. Netrunning is the **software/virtual** approach -- you jack into the NET Architecture remotely. A Netrunner can disable alarms through the NET; an Electronics/Security Tech specialist does it at the physical panel.",
      "**Key rules:** Techs add **Field Expertise** Rank to checks for non-Maker purposes. Failure when bypassing an alarm **triggers the alarm** unless the GM rules otherwise. Electronic locks cannot be bypassed with Pick Lock -- they require this skill. Time: ~1 min for DV9, ~5 min for DV13-17, longer for DV21+.",
      "**Special note:** The x2 IP cost makes this an expensive investment, but it is irreplaceable for heist-style missions. Many groups rely on a Netrunner for electronic bypass, but having a physical Electronics/Security specialist provides a crucial backup when the NET Architecture is not accessible."
    ]
  },
  {
    "id": "using-land-vehicle-tech",
    "title": "Using Land Vehicle Tech",
    "topic": "Skills",
    "tags": [
      "land vehicle tech",
      "vehicle",
      "repair",
      "car",
      "motorcycle",
      "tech",
      "maintenance"
    ],
    "icon": "🔧",
    "steps": [
      "**What it is:** The skill of repairing and maintaining land vehicles -- groundcars, superbikes, roadbikes, trucks, APCs, and any ground-based vehicle.",
      "**How to roll:** **TECH + Land Vehicle Tech + 1d10** vs DV. DVs follow standard price category scale: Cheap/Everyday DV9, Costly DV13, Premium DV17, Expensive DV21, Very Expensive DV24, Luxury DV29.",
      "**When to use it:** Repairing vehicle damage after combat or accidents, routine maintenance, diagnosing mechanical problems, field repairs on the road, restoring wrecked vehicles.",
      "**When NOT to use it -- use Air/Sea Vehicle Tech instead:** Land Vehicle Tech covers **ground vehicles only**. Air vehicles (AVs, gyrocopters, helicopters) use **Air Vehicle Tech**. Sea vehicles (boats, subs) use **Sea Vehicle Tech**. Each vehicle type has its own dedicated repair skill.",
      "**When NOT to use it -- use Drive Land Vehicle instead:** Land Vehicle Tech is for **repairing and maintaining** vehicles. Drive Land Vehicle is for **operating** them (driving, maneuvers, chases). Fixing a busted engine = Land Vehicle Tech. Performing a bootleg turn = Drive Land Vehicle.",
      "**Key rules:** **Nomads** add their Moto Rank to Land Vehicle Tech checks, making them the best vehicle mechanics. **Techs** add Field Expertise Rank for non-Maker purposes. Destroyed Nomad Family vehicles are repaired by the Family in 1 week for 500eb; non-Family vehicles need manual repair.",
      "**Special note:** Repair time scales with price category (1 hour to 1 month). Having a dedicated mechanic in the party saves enormous amounts of money, since professional vehicle repair in Night City is expensive and unreliable."
    ]
  },
  {
    "id": "using-paramedic-skill",
    "title": "Using Paramedic",
    "topic": "Skills",
    "tags": [
      "paramedic",
      "critical injury",
      "treatment",
      "medical",
      "tech",
      "x2 skill",
      "heal"
    ],
    "icon": "🚑",
    "steps": [
      "**What it is:** The skill of applying advanced medical treatment to treat all Critical Injuries not requiring Surgery and to keep wounded people from dying -- the step above First Aid.",
      "**How to roll:** **TECH + Paramedic + 1d10** vs DV. Stabilize Mortally Wounded: DV13. Quick Fix: Collapsed Lung DV15, Broken Ribs/Arm/Leg DV13, Spinal Injury DV15, Cracked Skull DV15, Whiplash DV13. Treatment (permanent fix): Broken Ribs/Arm/Leg DV15, Collapsed Lung/Spinal Injury DV15.",
      "**When to use it:** Treating Critical Injuries that First Aid cannot handle, stabilizing mortally wounded characters (same as First Aid), performing field treatments when Surgery is not available, treating injuries permanently (Treatment vs Quick Fix).",
      "**When NOT to use it -- use First Aid instead:** First Aid is the **basic** medical skill for stabilization and common injuries. Paramedic handles **serious** Critical Injuries. If First Aid can handle it (and has not already been tried and failed on that injury), try First Aid first -- it is cheaper to level. Paramedic is needed when First Aid fails or the injury is beyond its scope.",
      "**When NOT to use it -- use Surgery (Medtech) instead:** Paramedic cannot treat the **most severe injuries**: Lost Limb, Lost Eye, Brain Injury. These require **Surgery**, which is only available through the Medtech's Medicine Role Ability and requires a hospital or clinic.",
      "**Key rules:** This is a **x2 cost skill** (Level 1 = 40 IP, Level 5 = 200 IP, Level 10 = 400 IP). Quick Fix is temporary (negates effect but does not fully heal). Treatment is permanent but has higher DVs. Can be used in the field, unlike Surgery.",
      "**Special note:** Paramedic is the most important medical skill for non-Medtech characters. A party without a Medtech desperately needs someone with Paramedic to handle Collapsed Lungs, Spinal Injuries, and other serious battlefield injuries."
    ]
  },
  {
    "id": "using-demolitions",
    "title": "Using Demolitions",
    "topic": "Skills",
    "tags": [
      "demolitions",
      "explosives",
      "bomb",
      "defuse",
      "tech",
      "grenade",
      "detonate"
    ],
    "icon": "💣",
    "steps": [
      "**What it is:** The skill of setting and defusing explosives, and knowing how much explosive will accomplish a desired result. This is a **x2 cost skill** (double IP to level).",
      "**How to roll:** **TECH + Demolitions + 1d10** vs DV. Setting: simple detonation DV9, shaped charge/wall breach DV13, precision demolition DV15, complex timed sequence DV17+. Defusing: opposed vs setter's TECH + Demolitions + 1d10 or GM-set DV.",
      "**When to use it:** Setting explosive charges (C4-equivalent, mines, shaped charges), defusing bombs and mines, breaching walls and doors with explosives, identifying explosive traps, understanding structural weak points for maximum demolition effect.",
      "**When NOT to use it -- use Heavy Weapons instead:** Demolitions is for **setting and defusing stationary explosive charges**. Heavy Weapons is for **firing** explosive weapons (grenade launchers, rocket launchers) in combat. Planting a charge on a wall = Demolitions. Firing a grenade launcher at an enemy = REF + Heavy Weapons.",
      "**When NOT to use it -- use Weaponstech instead:** Demolitions covers **using** explosives tactically. Weaponstech covers **repairing** explosive weapons (grenade launchers, rocket launchers). Building a bomb = Demolitions. Fixing a jammed grenade launcher = Weaponstech.",
      "**Key rules:** x2 cost skill (Level 1 = 40 IP, Level 10 = 400 IP). Failure when setting = premature detonation or dud. Failure when defusing = it goes off in your face. Explosive types: grenades (frag, incendiary, flashbang, smoke, EMP, teargas, biotoxin), mines, shaped charges.",
      "**Special note:** Demolitions knowledge helps identify traps and calculate blast radius. A character with high Demolitions can create precise breaching charges that open a wall without collapsing the building -- invaluable for heist and extraction missions."
    ]
  },
  {
    "id": "leveling-up-skills",
    "title": "Leveling Up Skills — IP Cost Table",
    "topic": "Character Creation",
    "tags": [
      "ip",
      "improvement points",
      "skill",
      "level up",
      "advance",
      "progression",
      "cost"
    ],
    "icon": "📈",
    "steps": [
      "**Typical Skills** (most Skills) cost: Level 1 = **20 IP**, Level 2 = **40 IP**, Level 3 = **60 IP**, Level 4 = **80 IP**, Level 5 = **100 IP**, Level 6 = **120 IP**, Level 7 = **140 IP**, Level 8 = **160 IP**, Level 9 = **180 IP**, Level 10 = **200 IP**.",
      "Formula: **Level x 20 IP** for typical Skills.",
      "**Difficult (x2) Skills** (Paramedic, Electronics/Security Tech, etc.) cost **double**: Level 1 = **40 IP**, Level 5 = **200 IP**, Level 10 = **400 IP**.",
      "Formula: **Level x 40 IP** for x2 Skills.",
      "Total IP to max a typical Skill (1→10): **1,100 IP**. Total for a x2 Skill: **2,200 IP**.",
      "You **cannot skip levels** — must buy each level in order.",
      "The GM should allow some in-game time at each new level before advancing further."
    ]
  },
  {
    "id": "leveling-up-role",
    "title": "Leveling Up Role Ability — IP Cost Table",
    "topic": "Character Creation",
    "tags": [
      "ip",
      "improvement points",
      "role",
      "rank",
      "level up",
      "advance",
      "progression",
      "cost"
    ],
    "icon": "👑",
    "steps": [
      "**Role Ability Rank** costs: Rank 1 = **60 IP**, Rank 2 = **120 IP**, Rank 3 = **180 IP**, Rank 4 = **240 IP**, Rank 5 = **300 IP**, Rank 6 = **360 IP**, Rank 7 = **420 IP**, Rank 8 = **480 IP**, Rank 9 = **540 IP**, Rank 10 = **600 IP**.",
      "Formula: **Rank x 60 IP** per level.",
      "Total IP to max a Role Ability (1→10): **3,300 IP**.",
      "Characters start at **Rank 4** in their Role Ability during character creation.",
      "**Multiclassing:** After reaching Rank 4 in your current Role, you can buy Rank 1 in a second Role for 60 IP. Must reach Rank 4 in the new Role before multiclassing again.",
      "You cannot skip Ranks — each must be purchased in order.",
      "Role Ability advancement is the most expensive progression in the game — budget IP carefully."
    ]
  },
  {
    "id": "what-ip-buys",
    "title": "What Different IP Amounts Can Buy",
    "topic": "GM Tips",
    "tags": [
      "ip",
      "improvement points",
      "budget",
      "spending",
      "value",
      "progression",
      "reward"
    ],
    "icon": "💲",
    "steps": [
      "**20 IP:** One level in a typical Skill at Level 1. A small but meaningful improvement.",
      "**40–60 IP:** One level in a typical Skill at Level 2–3, or Level 1 in a x2 Skill. Noticeable growth.",
      "**60–80 IP:** One Rank in a Role Ability at Rank 1, or a typical Skill at Level 3–4. A significant session reward.",
      "**100–120 IP:** One typical Skill level at 5–6 (solidly professional), or one Role Rank at 2.",
      "**180–240 IP:** One Role Rank at 3–4. Multiple sessions of saving. Represents major character growth.",
      "**300+ IP:** High-level Role Ranks (5+) or maxing out Skills. Represents long-term investment.",
      "Typical session awards range from **10–80 IP** across five categories (Accomplishment, Combat, Support, Investigation, Roleplaying), with each category awarding 0–80 IP.",
      "A balanced player earning average rewards might gain **40–70 total IP per session**."
    ]
  },
  {
    "id": "milestone-power-levels",
    "title": "Milestone Power Levels — Starting vs Veteran",
    "topic": "GM Tips",
    "tags": [
      "power level",
      "starting",
      "experienced",
      "veteran",
      "character",
      "progression",
      "milestone",
      "campaign"
    ],
    "icon": "🏆",
    "steps": [
      "**Starting character (0 extra IP):** Role Ability Rank 4. Skills mostly at 2–6. Competent in their specialty but vulnerable outside it. Total roll (STAT + Skill + d10) typically 12–20.",
      "**Experienced character (~500 IP spent):** Role Ability Rank 5–6. Core Skills at 6–8. Can reliably hit Professional DVs (17) in their expertise. Owns decent cyberware and weapons.",
      "**Veteran character (~1,500 IP spent):** Role Ability Rank 7–8. Multiple Skills at 8–10. Consistently hits Heroic DVs (21). Well-equipped with quality cyberware. A serious threat.",
      "**Legend (~3,000+ IP spent):** Role Ability Rank 9–10. Key Skills maxed at 10. Can attempt Legendary DVs (29). Heavily augmented, well-connected, and feared/respected.",
      "At starting level, a typical check in your specialty rolls around **STAT (5–7) + Skill (4–6) + d10 = 14–23** before criticals.",
      "Progression is **not linear** — higher levels cost dramatically more. The jump from Rank 4 to 5 costs 300 IP; from 9 to 10 costs 600 IP.",
      "GMs: adjust encounter difficulty based on party IP spent. A starting party should face Combat# 8–10 enemies; veterans face Combat# 14–16."
    ]
  },
  {
    "id": "what-is-kerenzikov",
    "title": "Kerenzikov speedware",
    "topic": "Cyberware",
    "tags": [
      "kerenzikov",
      "speedware",
      "initiative",
      "neuralware",
      "reflexes",
      "speed"
    ],
    "icon": "⚡",
    "steps": [
      "Kerenzikov is **Neuralware speedware** installed in a Neural Link (requires Neural Link foundation).",
      "Effect: **+2 to Initiative** permanently while installed. Always active -- no activation needed.",
      "Install: **Clinic**. Cost: **500eb** (Expensive). Humanity Loss: **14 HL** (2d6).",
      "Cannot stack with Sandevistan -- you may only benefit from one speedware at a time.",
      "The heavy HL cost (14) means installing this will drop your EMP by at least 1. Plan your Humanity budget carefully.",
      "Best for characters who need a reliable, always-on edge in combat initiative order."
    ]
  },
  {
    "id": "what-is-sandevistan",
    "title": "Sandevistan speedware",
    "topic": "Cyberware",
    "tags": [
      "sandevistan",
      "speedware",
      "initiative",
      "neuralware",
      "burst speed",
      "sandy"
    ],
    "icon": "⚡",
    "steps": [
      "Sandevistan is **Neuralware speedware** installed in a Neural Link (requires Neural Link foundation).",
      "Effect: **+3 to Initiative** when activated. Lasts **1 minute** (about 10 combat rounds), then requires a **1-hour cooldown** before reuse.",
      "Install: **Clinic**. Cost: **500eb** (Expensive). Humanity Loss: **7 HL** (1d6).",
      "Cannot stack with Kerenzikov -- only one speedware active at a time.",
      "Compared to Kerenzikov: higher Initiative bonus (+3 vs +2) but limited duration and cooldown. Half the Humanity cost (7 vs 14).",
      "Ideal for Solos who want burst speed for planned engagements. Comes as default cyberware for the Solo role at character creation."
    ]
  },
  {
    "id": "what-is-pain-editor",
    "title": "Pain Editor",
    "topic": "Cyberware",
    "tags": [
      "pain editor",
      "chipware",
      "wound penalty",
      "seriously wounded",
      "ignore pain"
    ],
    "icon": "🩸",
    "steps": [
      "Pain Editor is **Chipware** that slots into a Chipware Socket (which itself requires a Neural Link).",
      "Effect: **ignore all Seriously Wounded wound state penalties** while active. You still take damage normally -- you just do not suffer the -2 to all Actions.",
      "Install: **N/A** (chipware -- plug it in). Cost: **1,000eb** (Very Expensive). Humanity Loss: **14 HL** (2d6).",
      "Danger: you cannot feel pain at all. The GM may rule you are unaware of ongoing damage sources (fire, bleeding, acid) since you feel nothing.",
      "Very high HL for chipware (14). Combined with the Chipware Socket (7 HL) and Neural Link (7 HL), the full chain costs 28 Humanity.",
      "Extremely powerful in combat -- effectively doubles your useful HP since you fight at full effectiveness until you drop."
    ]
  },
  {
    "id": "what-is-subdermal-armor",
    "title": "Subdermal Armor",
    "topic": "Cyberware",
    "tags": [
      "subdermal armor",
      "armor",
      "SP",
      "external body",
      "protection",
      "skin"
    ],
    "icon": "🛡️",
    "steps": [
      "Subdermal Armor is **External Body Cyberware** -- armor plating implanted under the skin.",
      "Effect: body and head are armored at **SP 11**. Does not stack with worn armor -- use whichever SP is higher.",
      "Armor ablates normally (loses 1 SP when penetrated). Recovers **1 SP per day** naturally.",
      "Install: **Hospital**. Cost: **1,000eb** (Very Expensive). Humanity Loss: **14 HL** (2d6).",
      "Compare with Skin Weave: SP 7 at 500eb and 7 HL. Subdermal Armor is double the cost, double the HL, but significantly more protection.",
      "Great for characters who want to be armored without visibly wearing armor. SP 11 stops most pistol rounds outright."
    ]
  },
  {
    "id": "what-is-grafted-muscle",
    "title": "Grafted Muscle & Bone Lace",
    "topic": "Cyberware",
    "tags": [
      "grafted muscle",
      "bone lace",
      "body",
      "BODY stat",
      "strength",
      "internal cyberware"
    ],
    "icon": "💪",
    "steps": [
      "Grafted Muscle & Bone Lace is a single **Internal Body Cyberware** implant that enhances your physical frame.",
      "Effect: **BODY stat +2** (maximum 10). This changes your HP, Seriously Wounded Threshold, and Death Save.",
      "Install: **Hospital**. Cost: **1,000eb** (Very Expensive). Humanity Loss: **14 HL** (2d6).",
      "Example: BODY 6 becomes BODY 8. HP recalculates using the new BODY value. Death Save now uses BODY 8.",
      "Also affects unarmed damage: BODY 5-6 deals 2d6, BODY 7-10 deals 3d6. Going from BODY 6 to BODY 8 bumps your punch damage up a tier.",
      "One of the most impactful single implants in the game -- more HP, harder to kill, stronger punches. The 14 HL is steep but worth it for combat characters."
    ]
  },
  {
    "id": "what-is-bone-lace",
    "title": "Bone Lace (part of Grafted Muscle)",
    "topic": "Cyberware",
    "tags": [
      "bone lace",
      "grafted muscle",
      "toughness",
      "BODY",
      "damage resistance"
    ],
    "icon": "🦴",
    "steps": [
      "In Cyberpunk RED, Bone Lace is **not a separate implant** -- it comes bundled with Grafted Muscle as a single piece of cyberware.",
      "The combined implant is called **Grafted Muscle & Bone Lace**. You cannot install one without the other.",
      "Effect: **BODY +2** (max 10). This increases HP, Wound Threshold, Death Save, and may increase unarmed damage tier.",
      "Install: **Hospital**. Cost: **1,000eb**. HL: **14**.",
      "The bone lace component reinforces the skeleton to handle the increased muscle mass. Narratively, your bones are laced with carbon fiber or titanium.",
      "If you see older Cyberpunk editions referencing Bone Lace separately, note that RED consolidated them into one package."
    ]
  },
  {
    "id": "what-is-gorilla-arms",
    "title": "Gorilla Arms (Big Knucks)",
    "topic": "Cyberware",
    "tags": [
      "gorilla arms",
      "big knucks",
      "cyberarm",
      "punch",
      "melee",
      "unarmed",
      "brawling"
    ],
    "icon": "🤜",
    "steps": [
      "In Cyberpunk RED, the closest equivalent to \"Gorilla Arms\" is **Big Knucks** -- a Cyberarm option.",
      "Big Knucks are a **Medium Melee Weapon** (2d6 damage) built into a Cyberarm. They are **concealable**.",
      "Requires a **Cyberarm** foundation (500eb, Hospital, 7 HL, 4 option slots). Big Knucks cost **100eb**, Clinic install, **3 HL**, and take 1 option slot.",
      "Total cost for one arm with Big Knucks: **600eb** and **10 HL**. For both arms: **1,200eb** and **20 HL**.",
      "Compared to unarmed (1d6 for BODY 4 or less): Big Knucks always deal 2d6 regardless of BODY stat.",
      "For heavier cyber-fists, consider Rippers (Medium Melee, 2d6, concealable, 500eb) or Wolvers (Heavy Melee, 3d6, concealable, 500eb, 7 HL)."
    ]
  },
  {
    "id": "what-is-mantis-blades",
    "title": "Mantis Blades (Wolvers/Rippers)",
    "topic": "Cyberware",
    "tags": [
      "mantis blades",
      "wolvers",
      "rippers",
      "cyberarm",
      "blades",
      "melee",
      "concealable"
    ],
    "icon": "🔪",
    "steps": [
      "Cyberpunk RED does not have an item literally named \"Mantis Blades\" but offers similar cyberarm weapons.",
      "**Wolvers**: Long retractable claws. **Heavy Melee Weapon** (3d6 damage), **concealable**. Cost: 500eb, Clinic install, 7 HL, 1 option slot in a Cyberarm.",
      "**Rippers**: Carbo-glass claws. **Medium Melee Weapon** (2d6 damage), **concealable**. Cost: 500eb, Clinic install, 3 HL, 1 option slot.",
      "**Scratchers**: Carbo-glass nails. **Light Melee Weapon** (1d6 damage), **concealable**. Cost: 100eb, Mall install, 2 HL.",
      "All require a **Cyberarm** foundation (500eb, Hospital, 7 HL). Concealment is the key advantage -- they pass weapons checks that external weapons fail.",
      "Wolvers at 3d6 concealable are among the best melee options in the game. Solo starting cyberware offers a choice between Sandevistan or Wolvers."
    ]
  },
  {
    "id": "what-is-monowire",
    "title": "Monowire (Slice N Dice)",
    "topic": "Cyberware",
    "tags": [
      "monowire",
      "slice n dice",
      "monofilament",
      "whip",
      "cyberarm",
      "melee"
    ],
    "icon": "🪢",
    "steps": [
      "The Cyberpunk RED monowire weapon is called **Slice N Dice** -- a monofilament whip housed in a Cyberarm.",
      "It functions as a **Medium Melee Weapon** (2d6 damage) and is **concealable**.",
      "Cost: **500eb**, Clinic install, **3 HL**, takes 1 option slot in a Cyberarm.",
      "Requires a **Cyberarm** foundation (500eb, Hospital, 7 HL). Total: 1,000eb and 10 HL for the arm + whip.",
      "Uses the **Melee Weapon** skill (not Brawling). Standard melee range -- the whip does not grant extra reach in the RED rules.",
      "Damage is identical to Rippers (2d6). Choose based on flavor -- monofilament whip vs retractable claws. For higher damage, Wolvers deal 3d6."
    ]
  },
  {
    "id": "what-is-projectile-launcher",
    "title": "Popup Projectile Launcher",
    "topic": "Cyberware",
    "tags": [
      "popup",
      "grenade launcher",
      "projectile",
      "cyberarm",
      "ranged",
      "launcher",
      "concealed weapon"
    ],
    "icon": "🚀",
    "steps": [
      "The **Popup Grenade Launcher** is a Cyberarm option -- a concealable grenade launcher built into your forearm.",
      "Functions as a standard **Grenade Launcher** weapon. It fires grenades and uses the Heavy Weapons skill.",
      "Cost: **500eb**, Clinic install, **7 HL**. Takes **2 option slots** in a Cyberarm (out of 4 total).",
      "Requires a **Cyberarm** foundation (500eb, Hospital, 7 HL). Total: 1,000eb and 14 HL.",
      "The key advantage is **concealment** -- it is hidden inside your arm until deployed. Standard grenade launchers cannot be concealed.",
      "There are also **Popup Melee Weapon** (concealable melee, 2 slots, 500eb) and **Popup Ranged Weapon** (concealable one-handed ranged, 2 slots, 500eb) options."
    ]
  },
  {
    "id": "what-is-cyberdeck-basic",
    "title": "Basic Cyberdeck",
    "topic": "Cyberware",
    "tags": [
      "cyberdeck",
      "netrunning",
      "slots",
      "programs",
      "deck",
      "hardware"
    ],
    "icon": "💻",
    "steps": [
      "A Cyberdeck is the platform a Netrunner uses to run Programs in the NET. It is NOT cyberware -- it is equipment.",
      "Decks come in three quality tiers: **Poor** (5 slots, 100eb), **Standard** (7 slots, 500eb), **Excellent** (9 slots, 1,000eb).",
      "Standard programs take **1 slot** each. **Black ICE** programs take **2 slots** each.",
      "A deck can also be installed in a **Cyberarm** (500eb, 3 slots only, takes 1 Cyberarm option slot).",
      "To use a Cyberdeck you need: **Neural Link** (cyberware, 500eb), **Interface Plugs** (cyberware, 500eb), and **Virtuality Goggles** (100eb). Without goggles, you are unconscious in meatspace while netrunning.",
      "Installing or uninstalling a program takes **1 hour**. Choose your loadout before the run."
    ]
  },
  {
    "id": "what-is-neural-link",
    "title": "Neural Link",
    "topic": "Cyberware",
    "tags": [
      "neural link",
      "neuralware",
      "foundation",
      "cyberware base",
      "interface",
      "brain"
    ],
    "icon": "🧠",
    "steps": [
      "The Neural Link is the **Neuralware foundation** -- the base implant required for all other Neuralware.",
      "Install: **Clinic**. Cost: **500eb** (Expensive). Humanity Loss: **7 HL** (1d6). Provides **5 option slots** for Neuralware.",
      "Without a Neural Link, you cannot install: Interface Plugs, Kerenzikov, Sandevistan, Chipware Socket, Braindance Recorder, or any chipware.",
      "Interface Plugs (installed in the Neural Link) are required to: **jack into the NET**, use **Smartgun Links**, and connect to **vehicles** mentally.",
      "The Neural Link is the single most important piece of cyberware in the game. Most roles start with one at character creation (Solo, Netrunner, Nomad, Fixer).",
      "At only 7 HL and 500eb, it is a cheap investment that unlocks the entire Neuralware tree and all brain-computer interaction."
    ]
  },
  {
    "id": "program-armor",
    "title": "Armor program",
    "topic": "Netrunning",
    "tags": [
      "armor",
      "defender",
      "program",
      "brain damage",
      "protection",
      "netrunning"
    ],
    "icon": "🛡️",
    "steps": [
      "**Armor** is a Defender Program. REZ: 7. Cost: **50eb** (Costly).",
      "Effect: while Rezzed (active), **lowers all brain damage by 4**.",
      "Restriction: only **1 copy** of Armor can be running at a time. Can only be used **once per Netrun**.",
      "Takes 1 slot on your Cyberdeck. Activating it costs 1 NET Action.",
      "This is your primary damage mitigation in the NET. 4 points off every brain hit adds up fast against multiple Black ICE.",
      "Combine with Shield for layered defense: Shield blocks the first hit entirely, Armor reduces everything after."
    ]
  },
  {
    "id": "program-banhammer",
    "title": "Banhammer program",
    "topic": "Netrunning",
    "tags": [
      "banhammer",
      "attacker",
      "anti-program",
      "program",
      "netrunning",
      "damage"
    ],
    "icon": "🔨",
    "steps": [
      "**Banhammer** is an Attacker Program (Anti-Program). ATK: 1. Cost: **50eb** (Costly).",
      "Effect: deals **3d6 REZ damage** to a Non-Black ICE Program, or **2d6 REZ damage** to Black ICE.",
      "Banhammer is the opposite of Sword: better against regular programs, weaker against Black ICE.",
      "Takes 1 slot. No REZ of its own (0) -- it cannot be damaged by enemy programs since it has no persistent state.",
      "Use Banhammer when facing enemy Netrunner programs (Armor, Shield, Worm, etc.). Switch to Sword for Black ICE.",
      "You can load multiple copies -- effects do not interfere with each other. Each copy is a separate attack option."
    ]
  },
  {
    "id": "program-eraser",
    "title": "Eraser program",
    "topic": "Netrunning",
    "tags": [
      "eraser",
      "booster",
      "cloak",
      "stealth",
      "netrunning",
      "program"
    ],
    "icon": "🧹",
    "steps": [
      "**Eraser** is a Booster Program. REZ: 7. Cost: **20eb** (Everyday).",
      "Effect: while Rezzed, grants **+2 to all Cloak Checks**. Cloak is the NET action for hiding from programs and ICE.",
      "Takes 1 slot. Passive effect -- stays active until Derezzed or you deactivate it.",
      "At REZ 7, it can be destroyed if hit by enemy programs (Banhammer deals 3d6 to non-Black ICE programs).",
      "Cheap and effective for stealth-focused netrunning. Stack with high Interface skill for reliable Cloak attempts.",
      "Not an \"anti-personnel memory wipe\" despite the name -- in RED, Eraser purely boosts your digital stealth."
    ]
  },
  {
    "id": "program-hellbolt",
    "title": "Hellbolt program",
    "topic": "Netrunning",
    "tags": [
      "hellbolt",
      "attacker",
      "anti-personnel",
      "brain damage",
      "fire",
      "netrunning"
    ],
    "icon": "🔥",
    "steps": [
      "**Hellbolt** is an Attacker Program (Anti-Personnel). ATK: 2. Cost: **100eb** (Premium).",
      "Effect: deals **2d6 brain damage** to the enemy Netrunner. Their Cyberdeck **catches fire** (2 HP damage to the Netrunner each Turn until extinguished).",
      "Extinguishing the fire requires a **Meat Action** -- the target must spend a physical action to put it out.",
      "The fire effect does NOT stack with itself. Multiple Hellbolts only deal brain damage, not multiple fires.",
      "Deck insulation (hardware) can prevent the fire effect. Without it, Hellbolt is devastating -- ongoing meatspace damage while you are stuck in the NET.",
      "One of the most aggressive anti-Netrunner weapons. ATK 2 means +2 to your attack roll against their defense."
    ]
  },
  {
    "id": "program-shield",
    "title": "Shield program",
    "topic": "Netrunning",
    "tags": [
      "shield",
      "defender",
      "program",
      "block",
      "brain damage",
      "netrunning"
    ],
    "icon": "🛡️",
    "steps": [
      "**Shield** is a Defender Program. REZ: 7. Cost: **20eb** (Everyday).",
      "Effect: **stops the first successful Non-Black ICE program effect** from dealing brain damage, then **Derezzes itself**.",
      "Restriction: only **1 copy** running at a time. Once per Netrun.",
      "Shield blocks enemy Netrunner attacks (Hellbolt, Vrizzbolt, etc.) but does NOT block Black ICE attacks.",
      "Think of it as a one-shot barrier against the first program hit. After it absorbs one attack, it is gone.",
      "Cheap at 20eb. Always bring one. Layer with Armor (which reduces Black ICE damage) for full coverage."
    ]
  },
  {
    "id": "program-sword",
    "title": "Sword program",
    "topic": "Netrunning",
    "tags": [
      "sword",
      "attacker",
      "anti-program",
      "black ice",
      "netrunning",
      "damage"
    ],
    "icon": "⚔️",
    "steps": [
      "**Sword** is an Attacker Program (Anti-Program). ATK: 1. Cost: **50eb** (Costly).",
      "Effect: deals **3d6 REZ damage** to Black ICE, or **2d6 REZ damage** to Non-Black ICE Programs.",
      "Sword is the opposite of Banhammer: better against Black ICE, weaker against regular programs.",
      "Takes 1 slot. No REZ (0) -- cannot be targeted by enemy anti-program attacks.",
      "Your primary weapon against Black ICE defenders in an Architecture. Most Black ICE has 15-25 REZ, so 3d6 can take one down in 2-3 hits.",
      "Load at least one Sword on every Netrun. Black ICE is everywhere and you need a way to fight it."
    ]
  },
  {
    "id": "program-worm",
    "title": "Worm program",
    "topic": "Netrunning",
    "tags": [
      "worm",
      "booster",
      "backdoor",
      "password",
      "netrunning",
      "program"
    ],
    "icon": "🐛",
    "steps": [
      "**Worm** is a Booster Program. REZ: 7. Cost: **50eb** (Costly).",
      "Effect: while Rezzed, grants **+2 to all Backdoor Checks**. Backdoor is the NET action for bypassing passwords on Architecture floors.",
      "Takes 1 slot. Passive effect while active.",
      "Passwords are the most common obstacle in NET Architectures. Without Worm, you rely solely on Interface + INT + 1d10 vs the password DV.",
      "At REZ 7, vulnerable to anti-program attacks. Protect it with Flak if facing an enemy Netrunner.",
      "Essential utility program. Bring one on any run where you expect to crack passwords (which is almost every run)."
    ]
  },
  {
    "id": "program-deckkrash",
    "title": "DeckKRASH program",
    "topic": "Netrunning",
    "tags": [
      "deckkrash",
      "attacker",
      "anti-personnel",
      "jack out",
      "destroy deck",
      "netrunning"
    ],
    "icon": "💥",
    "steps": [
      "**DeckKRASH** is an Attacker Program (Anti-Personnel). ATK: 0. Cost: **100eb** (Premium).",
      "Effect: forces the enemy Netrunner to **unsafely Jack Out**, suffering the effects of ALL Rezzed enemy Black ICE as they are expelled.",
      "This is devastating if the target is deep in an Architecture with multiple Black ICE active -- they take every hit on the way out.",
      "ATK 0 means no bonus to your attack roll. You are relying purely on Interface + INT + 1d10 vs their defense.",
      "Does not deal direct damage -- the damage comes from Black ICE effects triggered by the unsafe Jack Out.",
      "Best used in combination with friendly Black ICE in a defensive Architecture, or when the enemy has multiple hostile ICE already Rezzed."
    ]
  },
  {
    "id": "program-speedworm",
    "title": "Speedy Gonzalvez program",
    "topic": "Netrunning",
    "tags": [
      "speedy gonzalvez",
      "speedworm",
      "booster",
      "speed",
      "initiative",
      "netrunning"
    ],
    "icon": "🏃",
    "steps": [
      "**Speedy Gonzalvez** (often called \"Speedworm\") is a Booster Program. REZ: 7. Cost: **100eb** (Premium).",
      "Effect: while Rezzed, grants **+2 to Speed** in the NET. Speed affects initiative and who acts first in NET combat.",
      "Takes 1 slot. Passive effect while active.",
      "NET initiative = Interface + Speed bonus + 1d10 vs Black ICE SPD + 1d10. The +2 can make the difference between acting first and eating a Black ICE effect.",
      "At 100eb, the most expensive Booster program. Worth it when facing fast Black ICE like Hellhound (SPD 6) or Asp (SPD 6).",
      "At REZ 7, can be destroyed by enemy anti-program attacks. Protect it or accept losing it."
    ]
  },
  {
    "id": "program-vrizzbolt",
    "title": "Vrizzbolt program",
    "topic": "Netrunning",
    "tags": [
      "vrizzbolt",
      "attacker",
      "anti-personnel",
      "brain damage",
      "action loss",
      "netrunning"
    ],
    "icon": "⚡",
    "steps": [
      "**Vrizzbolt** is an Attacker Program (Anti-Personnel). ATK: 1. Cost: **50eb** (Costly).",
      "Effect: deals **1d6 brain damage** AND the target **loses 1 NET Action** on their next Turn (minimum 2 actions remaining).",
      "Cheaper than Hellbolt (50eb vs 100eb) with lower damage (1d6 vs 2d6) but the action loss effect is powerful.",
      "Reducing an enemy Netrunner from 2 NET Actions to the minimum 2 means the action loss kicks in only if they had 3+. Standard Netrunners get 2 NET Actions, so the penalty matters more for skilled runners.",
      "No fire effect like Hellbolt, making it safer to use in environments where fire is a concern.",
      "Good budget option for anti-Netrunner combat. Load alongside Hellbolt for versatility."
    ]
  },
  {
    "id": "what-is-black-ice-asp",
    "title": "Asp Black ICE",
    "topic": "Netrunning",
    "tags": [
      "asp",
      "black ice",
      "anti-personnel",
      "program destruction",
      "netrunning"
    ],
    "icon": "🐍",
    "steps": [
      "**Asp** is Anti-Personnel Black ICE. Cost: **100eb** (Premium). Takes 2 Cyberdeck slots.",
      "Stats: PER 4, SPD 6, ATK 2, DEF 2, REZ 15.",
      "Effect: **destroys a random program** on the enemy Netrunner's Cyberdeck.",
      "Fast (SPD 6) and cheap. Good at stripping enemy programs but does not deal brain damage directly.",
      "With only REZ 15, it goes down to 2-3 hits from a Sword (3d6). Not very durable.",
      "Useful for defensive Architectures on a budget. Pair with brain-damage ICE for a layered defense."
    ]
  },
  {
    "id": "what-is-black-ice-giant",
    "title": "Giant Black ICE",
    "topic": "Netrunning",
    "tags": [
      "giant",
      "black ice",
      "anti-personnel",
      "brain damage",
      "forced jack out",
      "netrunning"
    ],
    "icon": "🧌",
    "steps": [
      "**Giant** is Anti-Personnel Black ICE. Cost: **1,000eb** (Very Expensive). Takes 2 Cyberdeck slots.",
      "Stats: PER 2, SPD 2, ATK 8, DEF 4, REZ 25.",
      "Effect: **3d6 brain damage** AND forces an **unsafe Jack Out** (target suffers effects of all other Rezzed Black ICE, excluding Giant itself).",
      "Slow (SPD 2) but absolutely devastating if it hits. ATK 8 is the highest attack value among anti-personnel ICE.",
      "REZ 25 makes it very durable -- takes significant sustained fire to bring down.",
      "The forced unsafe Jack Out combined with other Black ICE can chain-kill a Netrunner. One of the deadliest ICE in the game."
    ]
  },
  {
    "id": "what-is-black-ice-hellhound",
    "title": "Hellhound Black ICE",
    "topic": "Netrunning",
    "tags": [
      "hellhound",
      "black ice",
      "anti-personnel",
      "brain damage",
      "fire",
      "netrunning"
    ],
    "icon": "🔥",
    "steps": [
      "**Hellhound** is Anti-Personnel Black ICE. Cost: **500eb** (Expensive). Takes 2 Cyberdeck slots.",
      "Stats: PER 6, SPD 6, ATK 6, DEF 2, REZ 20.",
      "Effect: **2d6 brain damage** AND the target's Cyberdeck **catches fire** (2 HP damage per Turn until extinguished with a Meat Action).",
      "Fast (SPD 6) with high Perception (6) -- hard to sneak past and acts early in initiative.",
      "The fire effect is brutal -- continuous meatspace damage while the Netrunner is trying to fight in the NET.",
      "Mid-tier price and very effective. One of the most commonly deployed Black ICE in corporate Architectures."
    ]
  },
  {
    "id": "what-is-black-ice-kraken",
    "title": "Kraken Black ICE",
    "topic": "Netrunning",
    "tags": [
      "kraken",
      "black ice",
      "anti-personnel",
      "brain damage",
      "jack out",
      "netrunning"
    ],
    "icon": "🦑",
    "steps": [
      "**Kraken** is Anti-Personnel Black ICE. Cost: **1,000eb** (Very Expensive). Takes 2 Cyberdeck slots.",
      "Stats: PER 6, SPD 2, ATK 8, DEF 4, REZ 25.",
      "Effect: **3d6 brain damage** AND forces an **unsafe Jack Out** (suffers all Rezzed Black ICE effects).",
      "Similar to Giant but with much higher Perception (6 vs 2). Harder to sneak past, easier to outrun.",
      "Same devastating combo of brain damage + forced Jack Out. REZ 25 means it takes a beating.",
      "Choosing between Giant and Kraken: Giant is harder to dodge (ATK 8, slow); Kraken is harder to hide from (PER 6, also ATK 8). Both are top-tier threats."
    ]
  },
  {
    "id": "what-is-black-ice-scorpion",
    "title": "Scorpion Black ICE",
    "topic": "Netrunning",
    "tags": [
      "scorpion",
      "black ice",
      "anti-personnel",
      "movement",
      "slow",
      "netrunning"
    ],
    "icon": "🦂",
    "steps": [
      "**Scorpion** is Anti-Personnel Black ICE. Cost: **100eb** (Premium). Takes 2 Cyberdeck slots.",
      "Stats: PER 2, SPD 6, ATK 2, DEF 2, REZ 15.",
      "Effect: target's **MOVE lowered by 1d6** for 1 hour (minimum 1). Psychosomatic -- no permanent damage.",
      "Fast (SPD 6) and cheap (100eb). Low direct threat but the MOVE penalty hampers the Netrunner in meatspace.",
      "REZ 15 -- fragile. Goes down quickly to Sword attacks.",
      "Good as a support ICE alongside brain-damage dealers. The meatspace movement penalty can be dangerous if the Netrunner needs to physically escape."
    ]
  },
  {
    "id": "what-is-black-ice-dragon",
    "title": "Dragon Black ICE",
    "topic": "Netrunning",
    "tags": [
      "dragon",
      "black ice",
      "anti-program",
      "destroy",
      "netrunning",
      "boss"
    ],
    "icon": "🐲",
    "steps": [
      "**Dragon** is Anti-Program Black ICE -- the most powerful program-killer in the game. Cost: **1,000eb** (Very Expensive). Takes 2 slots.",
      "Stats: PER 6, SPD 4, ATK 6, DEF 6, REZ 30.",
      "Effect: deals **6d6 damage** to a Program. If the damage is enough to Derezz it, the Program is **Destroyed** (permanently erased, not recoverable).",
      "REZ 30 is the highest in the game. DEF 6 is also the highest. This thing is a tank.",
      "It hunts your programs -- Sword, Armor, Shield, Boosters -- and permanently destroys them. Losing a program to Dragon means buying a new copy.",
      "If you encounter Dragon in an Architecture, consider whether the objective is worth the risk. A well-defended corp server with Dragon ICE is a nightmare scenario."
    ]
  },
  {
    "id": "about-watson",
    "title": "Watson district",
    "topic": "Night City",
    "tags": [
      "watson",
      "district",
      "development",
      "petrochem",
      "sovoil",
      "trauma team tower"
    ],
    "icon": "🏗️",
    "steps": [
      "**Watson Development** is a developing district in the Rebuilding Urban Center where megabuildings and arcologies are being built to house the thousands of homeless from the War.",
      "Much of Night City's **Asian population** has moved to the Watson neighborhood colloquially known as **Kabuki**.",
      "Key locations: **City Police Precinct #3** (veteran officers with Militech weaponry), **Petrochem Offices**, **SovOil Offices**, and **Trauma Team Tower** (hospital, AV-4 repair bay, air traffic control).",
      "Petrochem and SovOil offices sit directly across from each other -- a Cold War in miniature. Corporate espionage and tension are constant.",
      "Danger level: **Moderate**. Corporate security keeps the area relatively safe, but the presence of rival megacorps creates flashpoints.",
      "Watson is undergoing active reconstruction. Reclaimers and construction crews are common. Jobs here tend toward corporate espionage, security work, and logistics."
    ]
  },
  {
    "id": "about-westbrook",
    "title": "Westbrook / Japantown",
    "topic": "Night City",
    "tags": [
      "westbrook",
      "japantown",
      "new westbrook",
      "tyger claws",
      "asian community",
      "suburb"
    ],
    "icon": "⛩️",
    "steps": [
      "**New Westbrook** is an overpacked suburb in the Time of the Red. **Old Japantown** is a Combat Zone.",
      "Old Japantown was a popular Japanese cultural center that fell into chaos during the 4th Corporate War and is now a **Combat Zone**. The **Tyger Claws** have had a significant role in rebuilding sections of Japantown, acting as a dangerous protector gang for the Asian community.",
      "The Tyger Claws control most of the area -- expect martial arts dojos, fast bikes, neon signs in Japanese and Korean, and enhanced-reflex enforcers.",
      "New Westbrook is a dense suburban area -- crowded apartments, street markets, and small businesses catering to the displaced Japantown population.",
      "Danger level: **Moderate to High** in Old Japantown (Combat Zone rules apply), **Low to Moderate** in New Westbrook suburbs.",
      "Good place for characters with connections to Asian culture, Tyger Claws contacts, or martial arts backgrounds."
    ]
  },
  {
    "id": "about-city-center",
    "title": "City Center / Corporate Zone",
    "topic": "Night City",
    "tags": [
      "city center",
      "corporate zone",
      "executive zone",
      "corporate",
      "arasaka",
      "downtown"
    ],
    "icon": "🏢",
    "steps": [
      "The old City Center was **destroyed by the Arasaka Tower nuclear detonation in 2023**. It is now the **Hot Zone** -- irradiated and off-limits.",
      "Corporate life has relocated to the **Executive Zone** -- a single gated district for the Corporate elite, and scattered Corporate offices in rebuilding areas.",
      "The Executive Zone has extreme security: private Corporate police, checkpoints, surveillance, and zero tolerance for street crime.",
      "Danger level in the Executive Zone: **Low for crime, Extreme for corporate intrigue**. You will not get mugged, but you might get \"disappeared.\"",
      "Non-Exec characters cannot rent housing in the Executive Zone. You need Corporate credentials or an invitation.",
      "The Hot Zone itself is scavenged by desperate Edgerunners seeking pre-War tech, but radiation, gangs, and structural collapse make it lethal. *(R.A.B.I.D.s exist in the old NET beyond the Blackwall, not in meatspace.)*"
    ]
  },
  {
    "id": "about-heywood",
    "title": "Heywood district",
    "topic": "Night City",
    "tags": [
      "heywood",
      "santo domingo",
      "suburb",
      "industrial",
      "rancho coronado",
      "overpacked"
    ],
    "icon": "🏘️",
    "steps": [
      "**Heywood** is a truly overpacked sector of Night City, housing a large percentage of the City's population. It encompasses Heywood proper, the **Heywood Industrial Zone**, and **Rancho Coronado**.",
      "Already starting to divide based on **wealth and power** -- the rich in the north, the poor in the south (who call the area **Santo Domingo** instead).",
      "The Heywood Industrial Zone hosts the **Zhirafa Office Park** (drones and construction mecha patrolling the grounds) and other corporate facilities.",
      "Rancho Coronado is a working-class area -- cargo container housing, modest apartments, and people trying to survive paycheck to paycheck. The **Aldecaldo Camp** is located nearby.",
      "Danger level: **Moderate**. An overpacked suburb with tensions between wealthy northern residents and struggling southern neighborhoods.",
      "Good setting for street-level stories: community drama, wealth stratification, blue-collar survival, and the tension between corporate encroachment and neighborhood identity."
    ]
  },
  {
    "id": "about-pacifica",
    "title": "Pacifica Playground",
    "topic": "Night City",
    "tags": [
      "pacifica",
      "playground",
      "corporate",
      "development",
      "amusement park",
      "playland"
    ],
    "icon": "🎡",
    "steps": [
      "**Pacifica Playground** is a largely **Corporate-sponsored district** built around the **Playland by the Sea** amusement park, which is in the midst of massive development.",
      "In the Time of the Red (2045), Pacifica is being actively developed -- it is NOT the abandoned wasteland depicted in CP2077.",
      "Corporate investment is driving construction and entertainment infrastructure. This is one of the more optimistic areas of Night City's rebuilding efforts.",
      "Danger level: **Moderate**. Corporate security presence is growing with the development. The area is under construction but not lawless.",
      "Good setting for corporate intrigue scenarios, construction-related jobs, and entertainment district adventures.",
      "*(Note: The CP2077 video game depicts a very different Pacifica set decades later. In the RED timeline, it is a developing district.)*"
    ]
  },
  {
    "id": "about-santo-domingo",
    "title": "Santo Domingo district",
    "topic": "Night City",
    "tags": [
      "santo domingo",
      "6th street",
      "industrial",
      "veteran",
      "working class",
      "suburb"
    ],
    "icon": "🏭",
    "steps": [
      "**Santo Domingo** is part of the overpacked suburbs, closely associated with the **Heywood** area.",
      "Heavily industrial -- factories, warehouses, power plants, and blue-collar infrastructure.",
      "Controlled largely by the **6th Street** gang -- military veterans of the 4th Corporate War who \"protect\" the neighborhood through a mix of vigilante justice and extortion.",
      "6th Street patrols are well-armed (ex-military hardware) and heavily cybered. They enforce their own law, not the city's.",
      "Danger level: **Moderate to High**. Safe if you are on 6th Street's good side or a recognized local. Dangerous if you are an outsider or cross them.",
      "Good for stories involving veteran culture, industrial sabotage, weapons smuggling, and the thin line between neighborhood protector and gang enforcer."
    ]
  },
  {
    "id": "about-the-badlands",
    "title": "The Badlands",
    "topic": "Night City",
    "tags": [
      "badlands",
      "nomad",
      "outside",
      "wasteland",
      "highway",
      "raffen shiv"
    ],
    "icon": "🏜️",
    "steps": [
      "The **Badlands** are everything outside Night City's walls -- a vast wasteland of broken highways, abandoned towns, and open desert.",
      "Nomad territory. Nomad families like the **Steel Vaqueros** and various packs move through, running trade convoys and maintaining mobile communities.",
      "Dangers include: **Raffen Shiv** (psychotic nomad packs), bandits, wildlife, extreme weather, radiation pockets, and total lack of infrastructure.",
      "No police, no hospitals, no services. Self-sufficiency or Nomad pack membership is required for survival.",
      "Resources out here include salvageable pre-War tech, abandoned military installations, and the trade routes that keep Night City supplied.",
      "The Badlands are where Nomad characters feel at home. For city-dwellers, leaving the walls is stepping into a different (and more dangerous) world."
    ]
  },
  {
    "id": "gang-tyger-claws",
    "title": "Tyger Claws gang",
    "topic": "Night City",
    "tags": [
      "tyger claws",
      "gang",
      "japanese",
      "martial arts",
      "bikes",
      "japantown",
      "arasaka"
    ],
    "icon": "🐯",
    "steps": [
      "**Tyger Claws** are a Protector-type gang. Formerly under Arasaka patronage before the 4th Corporate War.",
      "Territory: **Japantown** and surrounding Asian community areas. They protect the Asian population and their businesses.",
      "Style: fast bikes, enhanced reflexes (speedware), killer martial arts. Known for katanas, monofilament weapons, and cybered-up enforcers.",
      "Weapons of choice: melee weapons (swords, Wolvers), SMGs, and fast-strike tactics. They favor speed over firepower.",
      "Helped rebuild Japantown after the War. They are protectors first -- but protection has a price, and they run gambling, smuggling, and loan operations.",
      "Threat level: **High**. Well-organized, well-cybered, and fiercely loyal to their community. Do not start trouble in Tyger Claws territory unless you are ready for a fast, violent response."
    ]
  },
  {
    "id": "gang-maelstrom",
    "title": "Maelstrom gang",
    "topic": "Night City",
    "tags": [
      "maelstrom",
      "gang",
      "cyberware",
      "chrome",
      "combat",
      "cyberpsycho",
      "metal warriors"
    ],
    "icon": "⚙️",
    "steps": [
      "**Maelstrom** is a Combat/Cyber-type gang formed from the remnants of the **Metal Warriors** -- a gang virtually wiped out in one night by the Inquisitors. They later absorbed members of the **Red Chrome Legion** and **Iron Sights**.",
      "Philosophy: they worship cyberware and despise unaugmented flesh. After absorbing a smaller cyberpsycho gang, they adopted extreme meat-hating philosophies. Many members are borderline cyberpsychos.",
      "Appearance: extreme visible cyberware -- exposed metal skulls, replaced jaws, multiple cyberlimbs, glowing optical implants. They look inhuman on purpose.",
      "Constantly at war with the **Inquisitors** (anti-cyberware cult). This conflict is a running battle across Night City.",
      "Territory: scattered strongholds, usually in industrial or Combat Zone areas. No fixed \"safe\" territory.",
      "Threat level: **Very High**. Heavily armed, heavily cybered, unpredictable, and fanatical. Encountering Maelstrom often means a fight to the death."
    ]
  },
  {
    "id": "gang-valentinos",
    "title": "Valentinos gang (CP2077 only)",
    "topic": "Night City",
    "tags": [
      "valentinos",
      "gang",
      "2077",
      "not in red"
    ],
    "icon": "💛",
    "steps": [
      "**Note: The Valentinos are NOT a gang in the Cyberpunk RED core rulebook.** They appear in the Cyberpunk 2077 video game, which is set decades later.",
      "In CP2077, the Valentinos are one of the largest gangs in Night City, rooted in Latino culture and community, operating primarily out of Heywood.",
      "They are included here for reference only. GMs running RED-era campaigns should not include the Valentinos as an established gang unless adapting 2077 content.",
      "The RED core rulebook gangs are: 6th Street, Bozos, Inquisitors, Iron Sights, Maelstrom, Philharmonic Vampyres, Piranhas, Prime-Time Players, Reckoners, Red Chrome Legion, Scavvers, Steel Vaqueros, Tyger Claws, and Voodoo Boys."
    ]
  },
  {
    "id": "gang-6th-street",
    "title": "6th Street gang",
    "topic": "Night City",
    "tags": [
      "6th street",
      "gang",
      "veteran",
      "military",
      "vigilante",
      "santo domingo",
      "weapons"
    ],
    "icon": "🎖️",
    "steps": [
      "**6th Street** is a Vigilante-type gang composed of **veterans of the 4th Corporate War**.",
      "Territory: **Santo Domingo** and parts of Heywood. They see themselves as protectors of working-class neighborhoods.",
      "Well-armed with ex-military hardware: assault rifles, SMGs, grenades, military-grade cyberware. They train and drill like soldiers.",
      "Started as genuine neighborhood defenders but have been forced into **extortion and smuggling** to fund their operations.",
      "They protect Holy Angels Church (run by Father Kevin) -- one of the few true sanctuaries in Night City.",
      "Threat level: **High**. Disciplined, well-equipped, and experienced in actual warfare. Not a street gang -- more like a militia."
    ]
  },
  {
    "id": "gang-voodoo-boys",
    "title": "Voodoo Boys gang",
    "topic": "Night City",
    "tags": [
      "voodoo boys",
      "gang",
      "netrunner",
      "pacifica",
      "blackwall",
      "caribbean",
      "hacker"
    ],
    "icon": "🔮",
    "steps": [
      "**Voodoo Boys** are a **terrorist gang** with ritual magic overtones and **major crime contacts in Florida and the Caribbean**.",
      "Known for dealing **non-synthetic drugs** (real narcotics from Caribbean sources). They may have been the beginning of a gang rooted in Caribbean criminal connections.",
      "Real **Haitian immigrants** have clashed violently with the Voodoo Boys, creating significant internal conflict.",
      "In the RED core rulebook, the Voodoo Boys do **not** control Pacifica (that is a CP2077 detail). Their territory and operations in the 2045 timeline are less clearly defined.",
      "Threat level: **High**. A dangerous terrorist-type gang with criminal connections spanning the Caribbean.",
      "*(Note: The CP2077 version of the Voodoo Boys -- Pacifica rulers with Blackwall expertise -- does not match the RED timeline.)*"
    ]
  },
  {
    "id": "gang-animals",
    "title": "Animals gang (CP2077 only)",
    "topic": "Night City",
    "tags": [
      "animals",
      "gang",
      "2077",
      "not in red"
    ],
    "icon": "💪",
    "steps": [
      "**Note: The Animals are NOT a gang in the Cyberpunk RED core rulebook.** They appear in the Cyberpunk 2077 video game, which is set decades later.",
      "In CP2077, the Animals are a gang focused on physical enhancement through chemical cocktails, favoring melee combat and brute force.",
      "They are included here for reference only. GMs running RED-era campaigns should not include the Animals as an established gang unless adapting 2077 content.",
      "The RED core rulebook gangs are: 6th Street, Bozos, Inquisitors, Iron Sights, Maelstrom, Philharmonic Vampyres, Piranhas, Prime-Time Players, Reckoners, Red Chrome Legion, Scavvers, Steel Vaqueros, Tyger Claws, and Voodoo Boys."
    ]
  },
  {
    "id": "gang-scavengers",
    "title": "Scavengers (Scavvers)",
    "topic": "Night City",
    "tags": [
      "scavengers",
      "scavvers",
      "gang",
      "salvage",
      "desperate",
      "ruins",
      "homeless"
    ],
    "icon": "🦤",
    "steps": [
      "**Scavvers** are not a gang per se -- they are **desperate homeless** who squat in the ruined City Zones left behind by the War.",
      "They scour the **treacherous debris** for salable items such as **copper, platinum, old tech, and even abandoned weapons**.",
      "They live in abandoned buildings, wrecked vehicles, and collapsed infrastructure. Many die from structural collapse, toxic exposure, or violence.",
      "Equipment: whatever they can scavenge. Expect improvised weapons, scavenged pistols, and desperation-fueled violence.",
      "Threat level: **Low to Moderate** individually, but dangerous in numbers and desperate situations. They have nothing to lose.",
      "*(Note: The organ/cyberware harvesting angle comes from CP2077, not the RED core rulebook. In RED, Scavvers are salvagers, not organ harvesters.)*"
    ]
  },
  {
    "id": "gang-inquisitors",
    "title": "Inquisitors gang",
    "topic": "Night City",
    "tags": [
      "inquisitors",
      "gang",
      "cult",
      "anti-cyberware",
      "religious",
      "fanatic",
      "tear"
    ],
    "icon": "✝️",
    "steps": [
      "**Inquisitors** are an anti-cyberware **cult** that believes augmentation is blasphemous.",
      "They will **tear cyberware from your body** to \"save your soul.\" This is not metaphorical -- they use tools and force.",
      "At war with **every other gang** in Night City, especially **Maelstrom** (who worship cyberware). Everyone hates the Inquisitors.",
      "They think nothing of **tearing cyberware right out of your body**. Their tactics emphasize swarming and fanaticism.",
      "Encountered at night with maximum force. They do not negotiate, do not take prisoners, and do not retreat easily.",
      "Threat level: **High**. Not because they are well-equipped, but because they are fanatical, numerous, and attack without warning or reason."
    ]
  },
  {
    "id": "what-is-kibble",
    "title": "What kibble actually is",
    "topic": "Lifestyle",
    "tags": [
      "kibble",
      "food",
      "nutrition",
      "synthfood",
      "poverty",
      "lifestyle",
      "eating"
    ],
    "icon": "🍜",
    "steps": [
      "**Kibble** is mass-produced synthetic nutrient made from **kelp, plankton, and soy proteins**. Named after its resemblance to pet food.",
      "Smells and tastes terrible. It is nutritionally adequate -- you will not die of malnutrition -- but eating it every day is soul-crushing.",
      "Neocorps dispense kibble to laborers with the cost **deducted from pay**. Most urban dwellers eat at least one kibble meal per day.",
      "Monthly cost as a lifestyle: **100eb**. This covers food plus one movie or braindance per month. That is the absolute floor of survival.",
      "Social stigma: eating kibble marks you as the bottom rung. Prepak eaters look down on kibble eaters. Fresh food eaters do not acknowledge either.",
      "Continental Brands (the \"Kibble Queen\" Olivia Forsythe's corporation) controls much of Night City's kibble supply through Oasis stores. See the Continental Brands corp entry."
    ]
  },
  {
    "id": "what-is-prepak",
    "title": "Prepak food explained",
    "topic": "Lifestyle",
    "tags": [
      "prepak",
      "prepack",
      "food",
      "synthfood",
      "lifestyle",
      "generic",
      "good"
    ],
    "icon": "🍱",
    "steps": [
      "**Prepak** (also \"Prepack\") is microwaveable or self-heating synthetic meals. Soy and grain-based \"faux food\" with better flavoring than kibble.",
      "**Generic Prepak** (300eb/month): better-tasting food. Weekends at a good bar or sit-down restaurant. The step up from survival to \"living.\"",
      "**Good Prepak** (600eb/month): restaurant-quality food that is artificial but tastes real. Access to excellent bars/restaurants and one live concert or sporting event per month.",
      "Press a tab, the meal heats itself. Common in Executive homes. Comes in hundreds of flavors and ethnic varieties.",
      "Good Prepak has a higher percentage of natural ingredients -- maybe some real meat or vegetables mixed in. It is the standard for comfortable middle-class life.",
      "The jump from Kibble (100eb) to Generic Prepak (300eb) is the single biggest quality-of-life upgrade in Night City. Characters will fight to maintain it."
    ]
  },
  {
    "id": "what-is-braindance",
    "title": "How braindance works",
    "topic": "Lifestyle",
    "tags": [
      "braindance",
      "BD",
      "entertainment",
      "neural",
      "sensory",
      "addiction",
      "recording"
    ],
    "icon": "🎭",
    "steps": [
      "**Braindance** (BD) is neural interface technology that records **complete sensory experiences** -- visual, auditory, emotional, and tactile.",
      "A braindance chip lets you feel exactly what the performer felt. You experience their memories as if they were your own.",
      "Cost: **20eb** (Everyday) for a standard braindance. **50eb** (Costly) for interactive braindance where you can influence the experience.",
      "Recording requires a **Braindance Recorder** (Neuralware, 500eb, 7 HL, requires Neural Link and Chipware Socket).",
      "Addiction is a real danger. Psychological dependency on living through other people's experiences rather than facing your own reality.",
      "Used by the government to **pacify prisoners** -- keep inmates sedated in braindance loops. Also used for training, therapy, entertainment, and darker purposes."
    ]
  },
  {
    "id": "cube-hotel-life",
    "title": "Living in a cube hotel",
    "topic": "Lifestyle",
    "tags": [
      "cube hotel",
      "housing",
      "cheap",
      "coffin hotel",
      "living conditions",
      "rent"
    ],
    "icon": "🖾",
    "steps": [
      "A **Cube Hotel** is the cheapest city housing option. A single windowless room barely wide enough to stretch your arms.",
      "Contents: flatpack furniture -- fold-down bed, tiny desk, maybe a shelf. No kitchen, no private bathroom.",
      "Shared **common room** with water and shower facilities. These common areas are **dangerous** -- theft and violence are common.",
      "Located in Corporate, Moderate, and Combat Zones. Rent varies by zone quality.",
      "This is where you go when you cannot afford anything better but refuse to sleep on the street. One step above homelessness.",
      "Living in a Cube Hotel means you have almost no personal space, no security for your belongings, and no privacy. Store valuables on your person or lose them."
    ]
  },
  {
    "id": "cargo-container-life",
    "title": "Living in a cargo container",
    "topic": "Lifestyle",
    "tags": [
      "cargo container",
      "housing",
      "starting home",
      "suburb",
      "combat zone",
      "rent"
    ],
    "icon": "📦",
    "steps": [
      "A **Cargo Container** is the starting housing for most non-Exec characters at character creation.",
      "Contents: bed, desk, electricity, fridge, microwave, sink, and a **strong lock**. Shared restrooms and showers (separate from living space).",
      "Located in **Suburbs** or **Combat Zone**. Suburbs are safer; Combat Zone is cheaper and more dangerous.",
      "Monthly rent: **1,000eb** (this is the standard housing cost). First month is free at character creation. Kibble lifestyle adds 100eb.",
      "More private and secure than a Cube Hotel. You have your own locking door and basic amenities. It is small but livable.",
      "Many Edgerunners call a cargo container home for months or years. Customize it with personal touches, security upgrades, and home defenses."
    ]
  },
  {
    "id": "nomad-camp-life",
    "title": "Nomad camp lifestyle",
    "topic": "Lifestyle",
    "tags": [
      "nomad",
      "camp",
      "mobile",
      "family",
      "pack",
      "badlands",
      "vehicle",
      "convoy"
    ],
    "icon": "🚚",
    "steps": [
      "**Nomad camps** are mobile communities that travel the Badlands and highways in vehicle convoys.",
      "Life centers on the **pack** (Nomad family). Everyone has a role: drivers, mechanics, scouts, fighters, medics, traders.",
      "Housing is your vehicle. Nomads live in modified trucks, RVs, converted buses, and armored transports. Personal space is whatever your ride offers.",
      "Food comes from trade, hunting, farming stops, and convoy supply runs. Quality varies wildly -- feast or famine depending on trade luck.",
      "Security is communal. The pack watches out for its own. Threats include **Raffen Shiv** (psycho nomad packs), bandits, and corporate patrols.",
      "Nomad lifestyle is free in terms of rent but demanding in terms of labor, loyalty, and danger. You earn your place every day."
    ]
  },
  {
    "id": "about-arasaka",
    "title": "Arasaka quick summary",
    "topic": "Lore",
    "tags": [
      "arasaka",
      "corporation",
      "security",
      "japan",
      "soulkiller",
      "hanako",
      "saburo"
    ],
    "icon": "🏯",
    "steps": [
      "**Arasaka Corporation** -- Corporate security, mercenary forces. HQ: Tokyo, Japan. ~1,000,000 employees.",
      "What they want: **return to global dominance**. Reduced to Japan-only operations after the 4th Corp War, they are covertly rebuilding worldwide.",
      "Led by **Hanako Arasaka** (Kiji faction). Three internal factions fight for control: Kiji (mainline), Taka (renegade Yorinobu), Hato (Michiko's figurehead faction).",
      "Hanako is secretly developing a revised **Soulkiller** -- technology to transfer consciousness into clone bodies. This is world-changing tech.",
      "Arasaka troops are covertly licensed to other firms, wearing employer uniforms. They are the best-trained operatives in the world.",
      "Danger level: **Maximum**. They hire through intermediaries and consider everyone expendable. Betraying Arasaka is a death sentence with no statute of limitations."
    ]
  },
  {
    "id": "about-militech",
    "title": "Militech quick summary",
    "topic": "Lore",
    "tags": [
      "militech",
      "corporation",
      "weapons",
      "military",
      "usa",
      "nationalized",
      "lundee"
    ],
    "icon": "🏯",
    "steps": [
      "**Militech International** -- arms manufacturing, mercenaries. HQ: Washington D.C. ~350,000 employees (+700,000 contracted to U.S. Military).",
      "Currently **nationalized** -- a Corporate asset of the New United States, placed under government control after the 4th Corp War.",
      "Secretly rebuilding to their former role as the world's premier arms merchant and mercenary army.",
      "Led by **Gen. Donald Lundee** (mercurial ex-Marine CEO) and **Gen. Samantha \"Sammy Lee\" Young** (brilliant tactician, the real brains).",
      "World's largest producer of military weapons -- revolvers to tanks to jet fighters. The New United States is their biggest customer.",
      "They hire freelancers regularly as field testers, deniable assets, and expendable operatives. Good pay, but double-crossing them means facing the firepower of a small nation."
    ]
  },
  {
    "id": "about-biotechnica",
    "title": "Biotechnica quick summary",
    "topic": "Lore",
    "tags": [
      "biotechnica",
      "corporation",
      "biotech",
      "CHOOH2",
      "genetic",
      "good guys",
      "environment"
    ],
    "icon": "🧬",
    "steps": [
      "**Biotechnica** -- genetic engineering, biochemical research. HQ: La Jolla, California. ~36,000 employees.",
      "Developed **CHOOH2** (\"chew two\") -- the synthetic fuel that powers the entire world. Licensed production made them wealthy.",
      "Probably the closest thing to a **\"good guy\" Corporation** in the Time of the Red. Active in environmental restoration.",
      "Projects include: Reference Forests (engineered woodland restoration), Project Orchard (super crops), and replacement species for damaged ecosystems.",
      "Led by **Nicolo Loggagia** -- a brilliant but erratic biochemist who creates bio-engineered animals with defensive capabilities (venomous koalas, ptero-raptors).",
      "Hires Edgerunners for site security, specimen recovery, and researcher protection. Fair pay and decent treatment -- but they protect their patents ruthlessly."
    ]
  },
  {
    "id": "about-trauma-team-corp",
    "title": "Trauma Team corporation",
    "topic": "Lore",
    "tags": [
      "trauma team",
      "corporation",
      "medical",
      "ambulance",
      "AV-4",
      "emergency",
      "extraction"
    ],
    "icon": "🚑",
    "steps": [
      "**Trauma Team** -- emergency medical extraction and treatment. HQ: Seattle. ~15,000 employees.",
      "Fleet: **1,305 AV-4 aerodynes**, 30 Corporate jets, 22 Osprey II aircraft, 4 C-29 heavy cargo jets. Each office has its own surgical infirmary.",
      "Two subscription plans: **Silver** (500eb/month) for basic extraction and stabilization, **Executive** (1,000eb/month) for faster response and comprehensive care.",
      "Post-War look: mil-spec helmets, heavy armor, power armor, combat medipacs. They are harried, overworked, angry, and impatient.",
      "During the 4th Corp War, they refused to respond to Arasaka or Militech alerts -- one battle would tie up every team in a city.",
      "Strictly neutral and professional. Have a card, get treated. No card, get ignored. Many Edgerunner groups pool money for a single shared TT card."
    ]
  },
  {
    "id": "about-danger-girl",
    "title": "Danger Girl -- Michiko's mission",
    "topic": "Lore",
    "tags": [
      "danger girl",
      "michiko",
      "sanderson",
      "arasaka",
      "investigation",
      "secret",
      "pink"
    ],
    "icon": "🕵️",
    "steps": [
      "**Danger Girl** -- private investigation and security firm. HQ: Night City. ~1,800 employees. Run by **Michiko Sanderson** (nee Arasaka).",
      "Surface: a celebrity PI firm with a bright pink \"Little Detective\" logo, solving cases for the socially important.",
      "Secret: Michiko made a deal with President Kress to **locate and dismantle Arasaka operations** in and around the United States.",
      "She has access to a **Presidential slush fund**, covert Arasaka databases, and her lifelong bodyguard **Kenichi Zaburo** -- once one of Arasaka's top Solos (could fight Morgan Blackhand to a draw).",
      "Michiko graduated Stanford with a criminology degree. Now in her thirties, she exudes bubbly charm while reading rooms like a book.",
      "Hires Edgerunners for delicate deniable operations. Excellent pay, but expects discretion. \"If you see Michiko Sanderson wink at you, run.\""
    ]
  },
  {
    "id": "about-kang-tao",
    "title": "Kang Tao (CP2077 only)",
    "topic": "Lore",
    "tags": [
      "kang tao",
      "corporation",
      "2077",
      "not in red"
    ],
    "icon": "🏯",
    "steps": [
      "**Note: Kang Tao is NOT listed among the corporations with influence in Night City during the Time of the Red.** They are primarily from the Cyberpunk 2077 video game.",
      "In CP2077, Kang Tao is a Chinese weapons manufacturer specializing in smart weapons and guided munitions.",
      "The corporations listed in the RED core rulebook with Night City influence are: **Biotechnica, Continental Brands, Danger Girl, Militech, Network 54, Petrochem, Rocklin Augmentics, SovOil, Trauma Team, Ziggurat, Zhirafa**, and (covertly) **Arasaka**.",
      "Kang Tao is included here for reference only. GMs adapting 2077 content may include them as an emerging force."
    ]
  },
  {
    "id": "can-i-shoot-two-guns",
    "title": "Can I dual wield / shoot two guns?",
    "topic": "Combat",
    "tags": [
      "dual wield",
      "two guns",
      "akimbo",
      "two weapons",
      "both hands"
    ],
    "icon": "🔫",
    "steps": [
      "There are **no official dual-wield rules** in Cyberpunk RED. You get **one Action per turn**, which is one attack.",
      "Common GM ruling: allow a second attack at a **-4 penalty** to both shots, each using a separate one-handed weapon.",
      "Each shot still costs its own ammo and is rolled separately against the appropriate **ranged DV** for that range bracket.",
      "Some GMs instead allow it as a single Action that splits the **damage dice** between two targets — discuss with your table.",
      "RAW: you can hold two weapons but only fire one per turn. Switching weapons is a **free action** if holstered."
    ]
  },
  {
    "id": "can-i-shoot-while-running",
    "title": "Can I shoot while moving?",
    "topic": "Combat",
    "tags": [
      "move and shoot",
      "shoot while moving",
      "run and gun",
      "moving attack"
    ],
    "icon": "🏃",
    "steps": [
      "**Yes.** Each turn you get a **Move Action** and an **Action**. These can happen in any order.",
      "You can move up to **MOVE x 2 meters**, then fire your weapon (or fire first, then move).",
      "There is **no penalty** for shooting after moving in the same turn — this is normal combat.",
      "You can also **Run** (MOVE x 4 meters) but running replaces your Action — you **cannot attack and Run** in the same turn.",
      "Split movement (move some, attack, move the rest) is **not RAW** but some GMs allow it."
    ]
  },
  {
    "id": "can-i-dodge-a-bullet",
    "title": "Can I dodge a ranged attack?",
    "topic": "Combat",
    "tags": [
      "dodge bullet",
      "evade ranged",
      "dodge gunfire",
      "matrix dodge",
      "evasion ranged"
    ],
    "icon": "💨",
    "steps": [
      "**No, not normally.** Ranged attacks are rolled against a **fixed DV based on range**, not the defender's Evasion.",
      "You **cannot** use DEX + Evasion to dodge bullets — the DV table determines if the shot hits.",
      "**Exception: Sandevistan** cyberware lets you spend charges to add **+3 to the attacker's DV** per charge, representing enhanced reflexes.",
      "**Exception: Kerenzikov** cyberware gives a similar ability to react faster, also increasing the attacker's DV.",
      "Against **melee** attacks, defenders DO roll **DEX + Evasion + 1d10** to defend. Ranged is the one you can't dodge."
    ]
  },
  {
    "id": "can-i-catch-a-grenade",
    "title": "Can I catch/throw back a grenade?",
    "topic": "Combat",
    "tags": [
      "catch grenade",
      "throw back grenade",
      "return grenade",
      "grenade reaction"
    ],
    "icon": "💣",
    "steps": [
      "There are **no official rules** for catching grenades. This is a **GM ruling** situation.",
      "Suggested ruling: require a **DEX + Athletics check at DV17** as a reaction (costs your next Action).",
      "The character must be **aware** of the grenade and within reach — not surprised or facing away.",
      "If caught, throwing it back could be a **free action** (same turn) or cost the character's next Action, GM's call.",
      "On a **failed catch attempt**, the grenade detonates as normal. Consider: grenades in CPR explode at **end of the thrower's next turn**, giving a small window.",
      "A **fumble** (natural 1) might mean the grenade goes off in your hand — **7d6 damage, no armor**."
    ]
  },
  {
    "id": "can-i-shoot-through-walls",
    "title": "Can I shoot through cover/walls?",
    "topic": "Combat",
    "tags": [
      "shoot through cover",
      "penetrate wall",
      "cover hp",
      "shoot through wall",
      "barrier"
    ],
    "icon": "🧱",
    "steps": [
      "**Yes — cover has HP.** When a target is behind cover, the cover absorbs damage like armor with its own HP pool.",
      "Common cover HP values: **Drywall/thin wood: 15 HP**, **Heavy wood/thin metal: 25 HP**, **Brick/stone: 30 HP**, **Concrete: 40 HP**, **Reinforced/armored: 50+ HP**.",
      "If your damage **exceeds the cover's remaining HP**, the excess passes through to the target behind it.",
      "The target's **personal armor** still applies to any damage that penetrates cover.",
      "Cover is **ablated** like armor — each hit reduces its HP permanently until repaired or destroyed.",
      "Explosives and **AP ammo** are especially effective at destroying cover quickly."
    ]
  },
  {
    "id": "can-i-use-someone-as-shield",
    "title": "Can I use a grappled person as a human shield?",
    "topic": "Combat",
    "tags": [
      "human shield",
      "meat shield",
      "grapple shield",
      "hostage",
      "body shield"
    ],
    "icon": "🛡",
    "steps": [
      "**Yes, if you have them grappled.** You must first succeed on a **Grab** action (DEX + Brawling vs DEX + Evasion/Brawling).",
      "While using a grabbed target as a shield, ranged attackers shooting at you must make an **Aimed Shot** (increasing their DV by +8) to avoid hitting the shield.",
      "If the attacker **misses** the aimed shot but would have hit the normal DV, the **human shield takes the damage** instead.",
      "The human shield's **armor** (if any) applies to damage they absorb.",
      "You **cannot attack with two-handed weapons** while holding a human shield — one hand is occupied.",
      "The shield can attempt to **break free** on their turn: **DEX + Brawling/Athletics + 1d10** vs your **DEX + Brawling + 1d10**."
    ]
  },
  {
    "id": "can-i-attack-while-grappled",
    "title": "Can I attack while grabbed/grappled?",
    "topic": "Combat",
    "tags": [
      "attack while grappled",
      "fight while grabbed",
      "grapple attack",
      "grabbed weapon"
    ],
    "icon": "✊",
    "steps": [
      "**Yes, but only with one-handed weapons.** While grabbed, you cannot use anything requiring two hands.",
      "One-handed melee weapons (knife, baton) and pistols are fair game — roll to attack as normal.",
      "You **cannot** use rifles, SMGs (two-handed), shotguns, or heavy weapons while grabbed.",
      "**Brawling attacks** (punches, kicks) are always available while grappled.",
      "Alternatively, you can spend your Action trying to **break free**: **DEX + (Brawling or Athletics) + 1d10** vs attacker's **DEX + Brawling + 1d10**.",
      "If you have **cyberweapons** (Wolvers, Mantis Blades), these are one-handed and work while grappled."
    ]
  },
  {
    "id": "can-i-shoot-a-grenade-midair",
    "title": "Can I shoot a grenade in midair?",
    "topic": "Combat",
    "tags": [
      "shoot grenade",
      "grenade midair",
      "detonate grenade",
      "trick shot"
    ],
    "icon": "🎯",
    "steps": [
      "There are **no official rules** for this. Pure **GM ruling** territory.",
      "Suggested ruling: treat the grenade as a tiny, fast-moving target — **DV 25+** (nearly impossible for most characters).",
      "Even if hit, the grenade may not **detonate** — bullets don't reliably set off explosives. GM decides if it detonates, is deflected, or is destroyed.",
      "If it does detonate midair, everyone within the **blast radius** (varies by grenade, usually **5m**) takes the grenade damage.",
      "A more practical alternative: allow a **DEX + Athletics DV17** check to bat the grenade away with a melee weapon or kick it.",
      "Rule of cool applies — this is a cinematic moment. Let the player try, but make the DV reflect the absurdity."
    ]
  },
  {
    "id": "can-i-parry",
    "title": "Can I parry with a melee weapon?",
    "topic": "Combat",
    "tags": [
      "parry",
      "block",
      "deflect",
      "melee defense",
      "sword block"
    ],
    "icon": "⚔",
    "steps": [
      "**There is no separate parry mechanic** in Cyberpunk RED. Defense against melee is handled by **Evasion**.",
      "When attacked in melee, the defender rolls **DEX + Evasion + 1d10** against the attacker's **DEX + melee skill + 1d10**.",
      "This Evasion roll **abstractly represents** dodging, blocking, parrying, and footwork — it's all bundled together.",
      "Having a melee weapon in hand does **not** give a bonus to your Evasion defense roll.",
      "Some GMs house-rule allowing **DEX + Melee Weapon skill** as an alternative defense, but this is **not RAW**.",
      "If you want to feel like you're parrying, describe your Evasion roll as a parry — mechanics stay the same."
    ]
  },
  {
    "id": "can-i-disarm-someone",
    "title": "Can I knock a weapon out of someone's hand?",
    "topic": "Combat",
    "tags": [
      "disarm",
      "knock weapon",
      "take weapon",
      "steal gun",
      "aimed shot hand"
    ],
    "icon": "🤚",
    "steps": [
      "**Option 1 — Aimed Shot at Hand:** Make a ranged or melee attack with an **additional +8 to the DV** (aimed shot penalty). If you deal damage, the target drops the weapon.",
      "**Option 2 — Grapple:** Successfully **Grab** the target (DEX + Brawling vs DEX + Evasion/Brawling), then on the following turn you can choose to disarm instead of Choke/Throw.",
      "**Option 3 — Critical Injury:** If you roll a **Dismembered Hand** critical injury on the target, the weapon is dropped permanently.",
      "A dropped weapon falls at the target's feet. Anyone adjacent can pick it up using a **Move Action** (not their Action).",
      "The aimed shot at the hand is the most common method — **DV is base ranged DV + 8**, making it very difficult at range."
    ]
  },
  {
    "id": "can-i-nonlethal-takedown",
    "title": "Can I knock someone out without killing them?",
    "topic": "Combat",
    "tags": [
      "nonlethal",
      "knockout",
      "subdue",
      "stun",
      "rubber bullets",
      "choke out",
      "takedown"
    ],
    "icon": "😴",
    "steps": [
      "**Rubber Ammo:** Any firearm can load rubber ammunition. It deals **half damage** (after armor) and a target reduced to 0 HP is **unconscious, not dying**.",
      "**Choke in Grapple:** Successfully Grab, then choose **Choke** — deals **3d6 damage directly to HP** (bypasses armor). At 0 HP, target is unconscious.",
      "**Stun Weapons:** Biotechnica Stun Gun, Air Pistol with tranq darts, or taser cyberware — check weapon stats for specifics.",
      "**Brawling:** Unarmed attacks (punches, kicks) deal **1d6 damage**. You can declare nonlethal intent — at 0 HP, target is KO'd.",
      "**Poor Man's Slap Patch:** Grab the target, then have someone apply a sedative slap patch — target must beat **DV15 Resist Torture/Drugs** or fall unconscious.",
      "Note: any weapon **not** declared nonlethal that drops a target to 0 HP causes **Mortally Wounded** — they will die without stabilization."
    ]
  },
  {
    "id": "can-i-shoot-a-lock",
    "title": "Can I shoot a lock off a door?",
    "topic": "Combat",
    "tags": [
      "shoot lock",
      "break lock",
      "door lock",
      "shoot door",
      "blast open"
    ],
    "icon": "🔒",
    "steps": [
      "**Yes — locks have HP** just like any other object. Shooting the lock deals damage against its HP pool.",
      "Typical lock HP: **Standard padlock: 15 HP**, **Electronic door lock: 20 HP**, **Heavy-duty/security lock: 30 HP**, **Reinforced vault lock: 50+ HP**.",
      "The lock is a small target — GM may impose an **aimed shot penalty (+8 DV)** or simply require a normal hit at close range.",
      "Armor-Piercing (AP) ammo is effective — it **halves the lock's effective HP** for that shot.",
      "**Alternative methods:** TECH + Pick Lock (DV varies), TECH + Electronics/Security for electronic locks, or just **destroy the whole door** (see door HP).",
      "Shooting a lock is **loud** — any stealth approach is immediately compromised."
    ]
  },
  {
    "id": "can-i-ricochet-a-shot",
    "title": "Can I ricochet/bank a shot off a surface?",
    "topic": "Combat",
    "tags": [
      "ricochet",
      "bank shot",
      "trick shot",
      "bounce bullet",
      "indirect fire"
    ],
    "icon": "↩",
    "steps": [
      "There are **no standard ricochet rules** in Cyberpunk RED. This is purely a **GM ruling**.",
      "Suggested ruling: treat as a called shot at **+6 to +10 DV** depending on the angle and surface.",
      "The surface must be **hard and reflective enough** — metal, concrete, tile. Soft surfaces absorb the bullet.",
      "Damage should be **reduced by 50%** after the ricochet to represent energy loss.",
      "The **Techie** role ability Maker or specific exotic ammo could theoretically enable smart ricochets, but this is homebrew.",
      "A more practical approach: use this as flavor text for a normal attack roll — 'I bank it off the wall' with no mechanical change, just cool narration."
    ]
  },
  {
    "id": "can-i-hold-my-action",
    "title": "Can I hold/delay my action?",
    "topic": "Combat",
    "tags": [
      "hold action",
      "delay turn",
      "ready action",
      "wait",
      "reaction",
      "overwatch"
    ],
    "icon": "⏳",
    "steps": [
      "**There is no official held action mechanic** in Cyberpunk RED. You act on your initiative, period.",
      "When your turn comes, you must **use it or lose it** — you cannot bank your Action for later.",
      "If you want to 'wait for someone to come around the corner,' you simply **attack them on your next turn** when they're in position.",
      "Some GMs house-rule a simple held action: declare a trigger and action, act when the trigger occurs but at a **-2 penalty**.",
      "**Overwatch** (for Netrunners) does exist — placing programs on alert in the NET — but this is NET-specific, not general combat.",
      "The initiative system is designed for fast, fluid combat — held actions slow things down. If you don't like your position, **take cover or reposition**."
    ]
  },
  {
    "id": "can-i-seduce-npc",
    "title": "Can I seduce an NPC?",
    "topic": "Social",
    "tags": [
      "seduce",
      "romance",
      "flirt",
      "charm",
      "attract",
      "persuade romantically"
    ],
    "icon": "💋",
    "steps": [
      "**Mechanically:** roll **COOL + Persuasion + 1d10** vs a DV set by the GM based on the NPC's disposition.",
      "DV guidelines: **Friendly/interested NPC: DV13**, **Neutral NPC: DV15**, **Hostile/uninterested NPC: DV17+**, **Completely opposed: DV21 or impossible**.",
      "**Context matters enormously.** An NPC's preferences, current situation, and your character's appearance/reputation all affect the DV.",
      "One roll does not equal instant romance — a success means you've **made a favorable impression**, not mind-controlled them.",
      "NPCs with **high COOL or Human Perception** may see through shallow attempts. Opposed roll: their **COOL + Human Perception + 1d10** vs yours.",
      "Some NPCs are simply **not available** regardless of rolls — GMs are within their rights to say 'this NPC is not interested, period.'"
    ]
  },
  {
    "id": "can-i-bluff-my-way-in",
    "title": "Can I talk my way past guards?",
    "topic": "Social",
    "tags": [
      "bluff",
      "talk past guards",
      "social infiltration",
      "fast talk",
      "deception"
    ],
    "icon": "🗣",
    "steps": [
      "**Primary roll:** COOL + Persuasion + 1d10 (to convince) or **COOL + Acting + 1d10** (to impersonate someone).",
      "This is typically an **opposed check** vs the guard's **INT + Human Perception + 1d10** (or COOL + Concentration).",
      "**Preparation matters:** having a fake ID (**+2**), wearing the right uniform (**+2**), having insider knowledge (**+1 to +3**) — GMs should grant bonuses.",
      "If the guards have been **warned** or are on high alert, apply **+2 to +4** to their check.",
      "**Conversation skill** works for extended social encounters — use it if you need to maintain a cover story over multiple exchanges.",
      "**Failure** doesn't always mean combat — guards might turn you away, call for backup, or demand a bribe (COOL + Trading check)."
    ]
  },
  {
    "id": "can-i-forge-documents",
    "title": "Can I forge an ID or document?",
    "topic": "Social",
    "tags": [
      "forge",
      "fake id",
      "forged documents",
      "counterfeit",
      "falsify"
    ],
    "icon": "📄",
    "steps": [
      "**To create a forgery:** roll **TECH + Forgery + 1d10**. The DV depends on document complexity.",
      "DV examples: **Simple note/letter: DV13**, **Official ID card: DV15**, **Corporate credentials: DV17**, **Military/government clearance: DV21**.",
      "**To detect a forgery:** examiner rolls **INT + Perception + 1d10** (casual glance) or **INT + Forgery + 1d10** (expert examination) vs your original Forgery result.",
      "Electronic documents may additionally require **INT + Electronics/Security** to fake digital signatures or embedded chips.",
      "**Time required:** quick forgery takes **1 hour**, quality work takes **4-8 hours**, masterwork takes **days**. Rushing imposes **-2 to -4 penalty**.",
      "In Night City, you can also just **buy** fake documents — **100-500eb** from a Fixer, quality varies."
    ]
  },
  {
    "id": "can-i-hack-without-netrunning",
    "title": "Can I hack something without being a Netrunner?",
    "topic": "Social",
    "tags": [
      "hack without netrunner",
      "basic hacking",
      "electronics",
      "non-netrunner hack",
      "security tech"
    ],
    "icon": "💻",
    "steps": [
      "**You cannot access NET architectures** without the Netrunner's **Interface** role ability and a cyberdeck. Period.",
      "However, you CAN interact with basic electronics using **TECH + Electronics/Security Tech + 1d10**.",
      "Examples of non-Netrunner tech tasks: **Disabling an alarm (DV15)**, **Bypassing a keypad lock (DV13)**, **Tapping a phone line (DV17)**, **Looping camera footage (DV15)**.",
      "These represent **physical tampering** — opening panels, rewiring circuits, spoofing signals — not hacking through the NET.",
      "Anything connected to a **NET architecture** (firewalls, Black ICE, data fortresses) is **Netrunner-only** territory.",
      "A **Techie** with the Maker role ability can build devices that simulate some hacking effects, but this is crafting, not netrunning."
    ]
  },
  {
    "id": "can-i-intimidate-a-group",
    "title": "Can I intimidate multiple people at once?",
    "topic": "Social",
    "tags": [
      "intimidate group",
      "facedown",
      "scare multiple",
      "threaten crowd",
      "mass intimidation"
    ],
    "icon": "😤",
    "steps": [
      "The **Facedown** mechanic is strictly **1v1**: your **COOL + Personal Grooming + Wardrobe + Reputation + 1d10** vs their same.",
      "The loser of a Facedown must either **back down** or **immediately attack** (starting combat).",
      "For **group intimidation**, there are no official rules. This is a **GM ruling** situation.",
      "Suggested ruling: roll **COOL + Persuasion + 1d10** vs a DV based on group size — **DV13 (2-3 people)**, **DV15 (4-6)**, **DV17 (7-10)**, **DV21 (crowd)**.",
      "**Modifiers:** displaying a heavy weapon (**+2**), having visible cyberware (**+1**), high Reputation (**+1 per 2 Rep**), just killed someone (**+3**).",
      "Groups with a **leader** may only need the leader intimidated — the rest follow. Take out the biggest threat first."
    ]
  },
  {
    "id": "can-i-lie-to-a-fixer",
    "title": "Can I deceive/lie to a Fixer?",
    "topic": "Social",
    "tags": [
      "lie to fixer",
      "deceive fixer",
      "bluff fixer",
      "cheat fixer",
      "fixer deception"
    ],
    "icon": "🤥",
    "steps": [
      "**Yes, but it's dangerous.** Roll your **COOL + Conversation + 1d10** vs the Fixer's **COOL + Human Perception + 1d10**.",
      "Fixers typically have **high COOL (6-8)** and good Human Perception skill. They are professional people-readers.",
      "Many Fixers carry a **Voice Stress Analyzer** (costs 500eb) — a cyberware or external device that grants **+2 to detecting lies**.",
      "If the Fixer catches you lying: **trust is destroyed**, future jobs dry up, your **Reputation may take a hit**, and they may send people after you.",
      "Even if you succeed, Fixers **verify information** through their networks. A successful lie may only buy you **hours to days** before they find out.",
      "Consider the cost-benefit: a Fixer's network of contacts, safehouses, and jobs is worth far more than whatever you gain from one deception."
    ]
  },
  {
    "id": "can-i-jump-between-buildings",
    "title": "How far can I jump?",
    "topic": "Environment",
    "tags": [
      "jump",
      "leap",
      "jump distance",
      "long jump",
      "running jump",
      "gap"
    ],
    "icon": "🦘",
    "steps": [
      "**Running jump (horizontal):** you can jump a distance equal to your **MOVE stat in meters** with a running start.",
      "**Standing jump (horizontal):** half your MOVE stat in meters, **rounded up**.",
      "**Vertical jump:** roughly **MOVE / 3 meters** (not explicitly defined, GM ruling).",
      "For gaps between buildings, compare the distance to your MOVE. **Under MOVE = automatic**, **equal to MOVE = DEX + Athletics DV13**, **over MOVE = DV17+ or impossible**.",
      "**Falling short** means you need to catch the ledge: **DEX + Athletics DV15** to grab on, failure means you fall.",
      "Factor in height differences: jumping **down** to a lower roof adds distance, jumping **up** to a higher one subtracts. Every 2m of height difference = roughly 1m of effective distance."
    ]
  },
  {
    "id": "can-i-break-down-a-door",
    "title": "Can I kick down / break through a door?",
    "topic": "Environment",
    "tags": [
      "break door",
      "kick door",
      "bash door",
      "door hp",
      "breach"
    ],
    "icon": "🚪",
    "steps": [
      "**Doors have HP.** Attack them with melee (or ranged) and deal damage until HP reaches 0.",
      "Door HP values: **Interior wooden door: 20 HP**, **Standard exterior door: 25 HP**, **Reinforced/security door: 40 HP**, **Heavy vault/blast door: 60+ HP**.",
      "**Kicking a door** uses BODY + Athletics or Brawling. A successful hit deals your **melee damage** against the door's HP.",
      "**Shoulder check:** BODY + Athletics + 1d10 vs **DV13** (wood), **DV15** (standard), **DV17** (reinforced). Success forces it open regardless of remaining HP if it's not barricaded.",
      "Locked doors can also be bypassed with **TECH + Pick Lock** (DV varies) or **TECH + Electronics/Security** (electronic locks).",
      "Explosives work too: a standard grenade (**7d6 damage**) will destroy most non-reinforced doors in one blast."
    ]
  },
  {
    "id": "can-i-drive-and-shoot",
    "title": "Can I drive and shoot at the same time?",
    "topic": "Vehicles",
    "tags": [
      "drive and shoot",
      "vehicle combat",
      "shoot from car",
      "chase",
      "drive-by"
    ],
    "icon": "🚗",
    "steps": [
      "**No — driving requires your Action.** You cannot drive and fire a weapon in the same turn.",
      "The **driver** spends their Action on vehicle control (accelerating, turning, evasive maneuvers).",
      "**Passengers** can freely attack from the vehicle using their own Actions — this is the intended design.",
      "If you **stop the vehicle** (no movement this turn), you can fire a weapon instead of driving.",
      "**Mounted weapons** (turrets, weapon mounts) may have special rules allowing the driver to fire — check the specific vehicle modification.",
      "In a chase, the driver makes **REF + Drive Land/Sea/Air + 1d10** checks. Passengers shoot at the other vehicle using normal ranged DVs modified by **speed and distance**."
    ]
  },
  {
    "id": "can-i-hide-a-body",
    "title": "How do I hide a body?",
    "topic": "Environment",
    "tags": [
      "hide body",
      "dispose body",
      "conceal corpse",
      "clean up",
      "evidence"
    ],
    "icon": "🗑",
    "steps": [
      "**Roll: DEX + Stealth + 1d10** to conceal the body. The DV depends on the location.",
      "DV examples: **Dark alley with dumpsters: DV9**, **Inside a building: DV13**, **Busy street: DV17**, **Well-lit public area: DV21+**.",
      "Searchers roll **INT + Perception + 1d10** vs your Stealth result to find the body later.",
      "**Time matters:** a quick hide (stuffing in a dumpster) takes **1 minute**. Proper disposal (dismemberment, acid, incinerator) takes **1-4 hours**.",
      "In Night City, there are **body disposal services** available through Fixers — typically **100-500eb** depending on discretion needed.",
      "**Forensic evidence** (blood, DNA) requires separate cleanup: **TECH + Basic Tech DV15** or specialized cleaning supplies."
    ]
  },
  {
    "id": "can-i-pick-a-pocket",
    "title": "Can I pickpocket someone?",
    "topic": "Skills",
    "tags": [
      "pickpocket",
      "steal",
      "lift",
      "swipe",
      "pick pocket",
      "theft"
    ],
    "icon": "🤏",
    "steps": [
      "**Roll: DEX + Pick Pocket + 1d10** vs the target's **INT + Perception + 1d10** (opposed check).",
      "If you win, you successfully lift the item without the target noticing.",
      "**Modifiers:** crowded area (**+2 to your roll**), target is distracted (**+2**), item is in a secure pocket/holster (**-2 to -4**), item is large/heavy (**-4**).",
      "On a **failure**, the target notices your hand. This likely triggers a confrontation or combat.",
      "You can only pickpocket items that are **physically accessible** — belt pouches, outer pockets, dangling equipment.",
      "**Holstered weapons** are especially hard: **-4 penalty** minimum, and many holsters have retention mechanisms requiring an additional **TECH + Pick Lock DV13**."
    ]
  },
  {
    "id": "can-i-climb-a-building",
    "title": "Can I climb a building/surface?",
    "topic": "Environment",
    "tags": [
      "climb",
      "climbing",
      "scale wall",
      "climb building",
      "vertical movement"
    ],
    "icon": "🧗",
    "steps": [
      "**Roll: DEX + Athletics + 1d10** vs a DV based on the surface difficulty.",
      "DV by surface: **Ladder/scaffolding: DV9 (automatic for most)**, **Rough stone/brick: DV13**, **Smooth concrete with ledges: DV15**, **Sheer wall/glass: DV17**, **Inverted surface/overhang: DV21**.",
      "**Climbing speed** is roughly **MOVE / 2 meters per round** (half normal movement).",
      "You must roll **each round** you continue climbing. A failure means you stop; a **fumble (natural 1)** means you fall.",
      "**Climbing gear** (grapple gun, suction cups, climbing claws cyberware) can give **+2 to +4** bonuses or reduce DVs.",
      "**Falling damage:** **1d6 per meter fallen**, maximum **10d6**. A **DEX + Athletics DV15** check halves the damage."
    ]
  },
  {
    "id": "can-i-survive-a-fall-from-height",
    "title": "What happens if I fall/jump from height?",
    "topic": "Environment",
    "tags": [
      "fall damage",
      "falling",
      "jump from building",
      "drop damage",
      "height"
    ],
    "icon": "⬇",
    "steps": [
      "**Fall damage: 1d6 per meter fallen**, up to a maximum of **10d6 damage** (terminal velocity).",
      "This damage **bypasses armor** — it goes directly to HP.",
      "A **DEX + Athletics check (DV15)** allows you to attempt a controlled landing — success **halves the damage** (round down).",
      "Example: falling 5 meters = **5d6 damage** (average 17.5). With a successful Athletics check = average ~9 damage.",
      "**Falling onto something soft** (water, trash pile, awning) may reduce damage at GM discretion — typically **halved or reduced by 2d6**.",
      "At **10+ meters**, you're rolling 10d6 (average 35 damage). Most characters have **30-50 HP**, so falls from 10+ meters are often lethal."
    ]
  },
  {
    "id": "i-want-to-modify-my-weapon",
    "title": "How do I add attachments to my weapon?",
    "topic": "Equipment",
    "tags": [
      "weapon mod",
      "attachment",
      "modify weapon",
      "weapon upgrade",
      "scope",
      "suppressor"
    ],
    "icon": "🔧",
    "steps": [
      "Each weapon has a number of **attachment slots** — typically **3 slots** for most weapons.",
      "Common attachments: **Scope (+1 to ranged DV at 51m+)**, **Extended Magazine (+50% ammo capacity)**, **Suppressor (reduces audible range)**, **Drum Magazine (doubles capacity, -1 to hit)**.",
      "**Installation:** requires **TECH + Weaponstech + 1d10 vs DV13** for standard mods. Some advanced mods require **DV15-17**.",
      "Cost varies: basic mods are **50-100eb**, quality mods **100-500eb**, exotic/military **500eb+**.",
      "**Removing** an attachment is also a TECH + Weaponstech check at **DV9** and takes about **30 minutes**.",
      "A weapon with all 3 slots filled **cannot accept more mods** without removing one first. Some mods take **2 slots**."
    ]
  },
  {
    "id": "i-want-to-build-something",
    "title": "Can I invent/craft an item?",
    "topic": "Equipment",
    "tags": [
      "craft",
      "build",
      "invent",
      "maker",
      "tech ability",
      "fabricate"
    ],
    "icon": "🏗",
    "steps": [
      "Crafting/inventing requires the **Maker** role ability (Techie role). Other roles **cannot** craft items from scratch.",
      "Maker Rank determines what you can create: **Rank 1-2: Cheap items**, **Rank 3-4: Costly items**, **Rank 5-6: Premium items**, **Rank 7-8: Expensive items**, **Rank 9-10: Very Expensive/Luxury items**.",
      "To craft, spend time and materials: **TECH + appropriate skill + 1d10** vs the item's **crafting DV**.",
      "**Time required:** Cheap items: **1 hour**, Costly: **4 hours**, Premium: **8 hours**, Expensive: **1 day**, Very Expensive: **several days**.",
      "Materials cost roughly **50% of the item's market price** — you save money but spend time.",
      "**Upgrades** (making an Excellent quality item) increase the DV and require higher Maker rank. Excellent quality weapons get **+1 to hit**."
    ]
  },
  {
    "id": "i-want-to-upgrade-my-cyberware",
    "title": "How do I get better cyberware?",
    "topic": "Cyberware",
    "tags": [
      "upgrade cyberware",
      "new chrome",
      "ripperdoc",
      "install cyberware",
      "better implants"
    ],
    "icon": "🦾",
    "steps": [
      "**Step 1 — Find a Ripperdoc.** They're available in most neighborhoods. Quality varies by price and location.",
      "**Step 2 — Choose your cyberware.** Check the price and **Humanity Loss** (HL) listed for each piece.",
      "**Step 3 — Pay up.** Cost includes the cyberware itself plus **installation fee** (typically 50-100% of item cost, negotiable with COOL + Trading).",
      "**Step 4 — Lose Humanity.** Each piece of cyberware costs **Humanity** (HL). Roll the listed dice (e.g., 2d6 HL) and subtract from your current Humanity. Your **EMP stat = tens digit** of current Humanity.",
      "**Step 5 — Surgery time.** Installation takes hours to days depending on complexity. You're out of action during recovery.",
      "**Warning:** if Humanity drops to **0 or below**, your character becomes a **Cyberpsycho NPC**. Track your Humanity carefully. Therapy can restore some Humanity over time."
    ]
  },
  {
    "id": "i-want-to-fix-my-armor",
    "title": "How do I repair ablated armor?",
    "topic": "Equipment",
    "tags": [
      "repair armor",
      "fix armor",
      "ablated armor",
      "armor repair",
      "restore sp"
    ],
    "icon": "🛠",
    "steps": [
      "Armor loses **1 SP per hit** that deals damage (ablation). Track current SP vs max SP on your sheet.",
      "**Field repair:** TECH + Basic Tech + 1d10 vs **DV13**. Each successful check restores **1 SP** to the armor. Takes **about 1 hour per SP** repaired.",
      "You need **repair materials** — basic toolkit and patches. Cost is roughly **10-20eb per SP** restored.",
      "**Professional repair** at a shop restores armor to full SP — costs about **25-50% of the armor's original price** and takes a day.",
      "**Armorjack (body armor)** that drops to **0 SP** is **destroyed** and must be replaced entirely.",
      "**Shield** items cannot be repaired — once their HP is depleted, they're scrap. Budget for replacements."
    ]
  },
  {
    "id": "i-want-to-set-a-trap",
    "title": "Can I set traps?",
    "topic": "Equipment",
    "tags": [
      "trap",
      "ambush",
      "tripwire",
      "mine",
      "booby trap",
      "explosives"
    ],
    "icon": "🪤",
    "steps": [
      "**Explosive traps:** TECH + Demolitions + 1d10. DV depends on complexity: **Simple tripwire/grenade: DV13**, **Shaped charge: DV15**, **Complex trigger: DV17**.",
      "**Improvised traps:** TECH + Basic Tech + 1d10. Examples: **Pit trap (DV13)**, **Net/snare (DV15)**, **Collapsing structure (DV17+)**.",
      "**Time to set:** quick traps take **10-30 minutes**, complex traps take **1-4 hours**.",
      "**Detection:** enemies must roll **INT + Perception + 1d10** vs your original crafting result to spot the trap before triggering it.",
      "Grenade traps deal the grenade's normal damage (**7d6 for frag**) in their blast radius upon triggering.",
      "**Disarming someone else's trap:** **TECH + Demolitions + 1d10** vs the original setter's result. Failure triggers the trap."
    ]
  },
  {
    "id": "i-want-to-hotwire-a-car",
    "title": "Can I steal/hotwire a car?",
    "topic": "Vehicles",
    "tags": [
      "hotwire",
      "steal car",
      "grand theft auto",
      "vehicle theft",
      "boost car"
    ],
    "icon": "🔑",
    "steps": [
      "**Hotwiring:** TECH + Electronics/Security Tech + 1d10 vs a DV based on vehicle quality.",
      "DV by vehicle: **Junker/old car: DV13**, **Standard vehicle: DV15**, **Nice/luxury car: DV17**, **Corporate/armored: DV21+**.",
      "**Time required:** hotwiring takes **1d6 minutes** (you're exposed the whole time). Working under pressure adds **-2 penalty**.",
      "**Getting in first:** locked doors require **TECH + Pick Lock DV13** or just smash the window (costs 1 Action, triggers alarms).",
      "Most vehicles in 2045 have **alarms** — TECH + Electronics/Security **DV13** to disable before hotwiring, or it starts screaming.",
      "**Consequences:** NCPD responds to vehicle theft. Expect **1d6 minutes** before a patrol shows up in decent zones. In the Combat Zone, nobody cares."
    ]
  },
  {
    "id": "i-want-to-hack-a-camera",
    "title": "How do I hack a security camera?",
    "topic": "Netrunning",
    "tags": [
      "hack camera",
      "security camera",
      "disable camera",
      "camera loop",
      "surveillance"
    ],
    "icon": "📷",
    "steps": [
      "**As a Netrunner:** jack into the local NET architecture. Navigate through floors until you find the **Control Node** connected to the camera system.",
      "Use the **Control** action on the node: **INT + Interface + 1d10** vs the node's **DV** (typically DV6-DV8 per floor).",
      "Once controlled, you can: **Turn cameras off**, **Loop footage**, **Pan/tilt to a blind spot**, or **View their feed** on your Agent.",
      "**Without a Netrunner:** TECH + Electronics/Security Tech + 1d10 vs **DV15** to physically disable or loop a single camera. This requires **physical access** to the camera or its wiring.",
      "Disabling a camera physically may trigger an **alert** at the security station — someone notices the feed died.",
      "**Spray paint** or a thrown jacket over the lens always works — no roll needed, but security WILL notice a blacked-out camera."
    ]
  },
  {
    "id": "i-want-to-open-a-door-remotely",
    "title": "Can I unlock doors through the NET?",
    "topic": "Netrunning",
    "tags": [
      "unlock door remotely",
      "hack door",
      "remote access",
      "net door",
      "open lock net"
    ],
    "icon": "🚪",
    "steps": [
      "**Yes, if the door lock is connected to the NET architecture.** Most electronic locks in secured buildings are.",
      "The Netrunner must **jack in** and navigate to the floor containing the **Control Node** linked to the door lock.",
      "Use the **Control** action: **INT + Interface + 1d10** vs the node's DV to take control of the lock.",
      "Once controlled, you can **lock or unlock** the door at will, or set it to stay permanently open/closed.",
      "**Not all doors are networked.** Mechanical locks, padlocks, and standalone electronic locks (not connected to an architecture) cannot be hacked remotely.",
      "**Timing matters:** the Netrunner can coordinate with the team — 'I'll unlock it on your go' — but they must maintain their Interface with the node."
    ]
  },
  {
    "id": "i-want-to-brick-someones-cyberware",
    "title": "Can I disable someone's cyberware remotely?",
    "topic": "Netrunning",
    "tags": [
      "brick cyberware",
      "disable chrome",
      "emp cyberware",
      "hack cyberware",
      "shut down implants"
    ],
    "icon": "⚡",
    "steps": [
      "**You cannot directly hack personal cyberware** through the NET — people's implants are not part of building architectures.",
      "**EMP Ammo:** Deals no direct damage but on hit, the GM selects **2 pieces of cyberware** on the target that are **disabled for 1 minute**.",
      "**Microwaver weapon:** A special exotic weapon that specifically targets and damages cyberware on hit.",
      "**Non-Standard Ammo (Smart ammo):** can be jammed by Netrunners if the target is using Smart weapons, but this is jamming, not bricking.",
      "**Cyberarm/Cyberleg disabled** by EMP acts as if the limb is **dismembered** — you can't use it until the effect wears off (1 minute / 10 rounds).",
      "There is **no Netrunner program** that lets you hack someone's brain or cyberware through the NET in standard CPR rules."
    ]
  },
  {
    "id": "i-want-to-trace-a-call",
    "title": "Can I trace a phone call or signal?",
    "topic": "Netrunning",
    "tags": [
      "trace call",
      "track signal",
      "phone trace",
      "locate caller",
      "signal tracking"
    ],
    "icon": "📡",
    "steps": [
      "**Basic trace:** TECH + Electronics/Security Tech + 1d10 vs **DV15** (standard Agent) or **DV17** (encrypted/bounced signal).",
      "This requires **equipment** — at minimum an Agent with tracer software, ideally a dedicated electronics kit.",
      "**Netrunner method:** use the **Scanner** ability if available, or trace through NET architecture if the call routes through one.",
      "A successful trace gives you the **general location** (neighborhood/building level), not an exact address. A second check at **DV17** narrows it to a specific floor/room.",
      "**Duration:** you need the call to last at least **30 seconds to 1 minute** to complete the trace. The target may hang up first.",
      "**Countermeasure:** targets using **VPN/signal bouncing** (common for criminals and corpos) add **+4 to the DV** to trace them."
    ]
  },
  {
    "id": "what-if-both-shoot-each-other",
    "title": "What if two people shoot each other simultaneously?",
    "topic": "Combat",
    "tags": [
      "simultaneous attack",
      "same time",
      "both shoot",
      "mutual kill",
      "tied initiative"
    ],
    "icon": "💥",
    "steps": [
      "**There is no simultaneous attack mechanic.** Each character acts on their own initiative count, in order from highest to lowest.",
      "Even if two characters are pointing guns at each other, the one with **higher initiative goes first**.",
      "If initiative is **tied**, the character with the **higher REF** goes first. If still tied, the character with the **higher DEX** goes. If STILL tied, roll off.",
      "The first character to act may kill or incapacitate the other before they get a turn — this is by design.",
      "**Mexican standoff** scenario: GM may call for a **COOL + Concentration** check to see who flinches — but mechanically, it still resolves in initiative order.",
      "If you want dramatic mutual kills, the GM can narrate both shots going off 'at once' — but mechanically resolve damage in initiative order."
    ]
  },
  {
    "id": "what-if-i-run-out-of-ammo",
    "title": "What if I run out of ammo mid-fight?",
    "topic": "Combat",
    "tags": [
      "out of ammo",
      "no ammo",
      "empty magazine",
      "ammo shortage",
      "reload"
    ],
    "icon": "🔫",
    "steps": [
      "**Reloading** a weapon costs your **full Action** for that turn. You can still Move while reloading.",
      "If you're out of spare magazines/ammo entirely, your options: **Switch to a sidearm** (free action if holstered), **draw a melee weapon**, or **use Brawling**.",
      "**Scrounging ammo** from downed enemies costs a **Move Action** to reach the body and an **Action** to search it.",
      "Running is always an option — use your **Run action** (MOVE x 4 meters) to get to cover or flee entirely.",
      "**Thrown weapons** (knives, grenades) are an option if you have them — throwing is a standard Action.",
      "This is why experienced Edgerunners carry **at least 2 spare magazines** and a **backup melee weapon**. Ammo management is survival."
    ]
  },
  {
    "id": "what-if-my-cyberware-is-disabled",
    "title": "What happens when my cyberware is hit by EMP?",
    "topic": "Cyberware",
    "tags": [
      "emp",
      "disabled cyberware",
      "cyberware shutdown",
      "emp grenade",
      "chrome disabled"
    ],
    "icon": "⚡",
    "steps": [
      "When hit by **EMP** (ammo or grenade), the GM selects **2 pieces of installed cyberware** that are **disabled for 1 minute** (10 combat rounds).",
      "**Cyberlimbs** (arms/legs) that are disabled function as if the limb is **dismembered** — you cannot use that hand/arm/leg at all.",
      "**Cyberoptics** disabled = **temporary blindness** in that eye. If both eyes are cyber, you're fully blind (**-4 to all actions**).",
      "**Cyberaudio** disabled = deafness on that side. Lose any audio-based bonuses (amplified hearing, radio, etc.).",
      "**Neural cyberware** (Sandevistan, Kerenzikov) disabled = lose the ability's benefits for the duration.",
      "After **1 minute**, all disabled cyberware reboots automatically. There is no permanent damage from EMP (unless GM rules otherwise for story purposes)."
    ]
  },
  {
    "id": "what-if-i-go-to-zero-humanity",
    "title": "What happens at 0 Humanity?",
    "topic": "Cyberware",
    "tags": [
      "zero humanity",
      "cyberpsycho",
      "cyberpsychosis",
      "humanity loss",
      "emp zero"
    ],
    "icon": "🤖",
    "steps": [
      "When Humanity drops to **0 or below**, the character's **EMP stat drops to 0** and they enter **Cyberpsychosis**.",
      "The character immediately becomes an **NPC** controlled by the GM. The player loses control of that character.",
      "A cyberpsycho is **violently unstable** — they may attack anyone, including former allies, and exhibit paranoid, aggressive behavior.",
      "**MAX-TAC** (Maximum Force Tactical Division) may be dispatched to neutralize the cyberpsycho. They are **extremely dangerous** — equivalent to heavily armed and chromed Solos.",
      "**Prevention:** track Humanity carefully. Therapy sessions can **restore Humanity** (2d6 Humanity per session, costs 500eb/week, takes time).",
      "If you're getting close to 0, consider **removing some cyberware** — each piece removed restores the Humanity that was lost when it was installed."
    ]
  },
  {
    "id": "what-if-i-kill-a-cop",
    "title": "What are the consequences of killing NCPD?",
    "topic": "Lore",
    "tags": [
      "kill cop",
      "ncpd",
      "police",
      "law enforcement",
      "consequences",
      "wanted"
    ],
    "icon": "🚔",
    "steps": [
      "**Immediate response:** more NCPD arrive within **1d6+2 minutes** in policed zones. Each wave is better equipped than the last.",
      "**Escalation ladder:** Beat cops → Detectives → MAX-TAC (cyberpsycho squad, heavily armed). Killing MAX-TAC operatives brings even worse heat.",
      "**Zone matters:** In the **Combat Zone**, NCPD rarely responds at all. In **Corporate zones**, response is near-instant with corporate security backing them up.",
      "**Reputation consequences:** killing cops gives you **heat**, not street cred. Fixers may refuse to work with you to avoid association.",
      "**Long-term:** NCPD may issue a **bounty** or BOLO (Be On Lookout). Other Edgerunners might be hired to bring you in.",
      "**Practical note:** NCPD in 2045 Night City are **underfunded and overworked**. In many areas, they simply don't have the resources to follow up — but don't count on it."
    ]
  },
  {
    "id": "what-if-i-betray-my-fixer",
    "title": "What happens if I screw over my Fixer?",
    "topic": "Social",
    "tags": [
      "betray fixer",
      "double cross",
      "screw fixer",
      "fixer revenge",
      "blacklisted"
    ],
    "icon": "🔪",
    "steps": [
      "**Immediate:** Your Fixer cuts you off. No more jobs, no more contacts through them, no more safe houses or support.",
      "**Word spreads:** Fixers talk to each other. You may be **blacklisted** across multiple Fixers in the area. This can effectively end your career as an Edgerunner.",
      "**Reputation loss:** Expect a **-2 to -4 Reputation hit** as word gets around that you can't be trusted.",
      "**Active retaliation:** A well-connected Fixer may put a **contract on your head**, send enforcers, or feed your location to your enemies.",
      "**Information weapon:** Your Fixer knows your **safe house, contacts, habits, and past jobs**. They can burn every one of these.",
      "**The math:** a Fixer's ongoing patronage (steady income, intel, contacts) is almost always worth more than whatever one-time gain you get from betrayal. Think carefully."
    ]
  },
  {
    "id": "what-if-my-deck-is-destroyed",
    "title": "What if my cyberdeck is destroyed while jacked in?",
    "topic": "Netrunning",
    "tags": [
      "deck destroyed",
      "cyberdeck broken",
      "jacked out",
      "forced disconnect",
      "deck damage"
    ],
    "icon": "💻",
    "steps": [
      "If your cyberdeck is **destroyed** while you're jacked into the NET, you are **forcibly jacked out** immediately.",
      "Being forcibly jacked out deals **direct brain damage** — take **3d6 damage directly to HP** (bypasses armor) from neural feedback.",
      "**All loaded programs are lost.** Programs are stored on the deck, and a destroyed deck means they're gone. You'll need to re-acquire them.",
      "You lose **any ongoing NET actions** — controlled nodes revert, active programs end, and Black ICE you were fighting disengages.",
      "**Replacing a cyberdeck** is expensive: cheapest decks start at **500eb**, quality decks run **1,000-5,000eb+**.",
      "**Tip:** always have a plan for if your deck goes down. Carry a **backup sidearm** and know where the exits are — you're useless as a Netrunner without your deck."
    ]
  },
  {
    "id": "what-if-i-cant-pay-rent",
    "title": "What if I can't afford rent/lifestyle?",
    "topic": "Lifestyle",
    "tags": [
      "rent",
      "lifestyle",
      "homeless",
      "cant pay",
      "broke",
      "poverty",
      "death save rent"
    ],
    "icon": "🏚",
    "steps": [
      "Each month, characters owe a **Lifestyle cost** based on their housing: **Kibble (free, you're homeless)**, **Pod (100eb/month)**, **Cargo Container (200eb/month)**, up to **Corporate Suite (10,000eb/month)**.",
      "If you **can't pay**, you have roughly **1 week of grace** before consequences hit.",
      "After the grace period, you're effectively **homeless** and living on the streets. You must make a **Death Save each day** to represent exposure, starvation, and street violence.",
      "Being homeless also means **no safe place to store gear**, no address for contacts to reach you, and **no healing between sessions** (you need shelter to rest properly).",
      "You can **downgrade your lifestyle** at any time to reduce costs — moving to a cheaper place is always an option.",
      "**Desperate options:** sell gear, take a dangerous job, borrow from a Fixer (with interest and strings attached), or crash with another PC."
    ]
  },
  {
    "id": "what-if-we-all-go-down",
    "title": "What happens in a total party wipe?",
    "topic": "GM Tips",
    "tags": [
      "tpk",
      "party wipe",
      "total party kill",
      "everyone dies",
      "all down"
    ],
    "icon": "💀",
    "steps": [
      "A TPK doesn't have to mean the campaign ends. Night City is brutal but there are narrative outs.",
      "**Scavengers** find the bodies — they loot everything valuable (weapons, cyberware, armor, eddies). If anyone survived at Mortally Wounded, they're stripped and left for dead (or worse, harvested for parts).",
      "**Rescue by contacts:** if anyone had a **Fixer, friend, or contact** who knew where they were, they might send help — but it'll cost favors owed.",
      "**Trauma Team:** if anyone had a **Trauma Team subscription** (active and paid up), they arrive in **7 minutes** and extract the subscriber only.",
      "**New characters:** if the TPK sticks, players roll new characters. The new crew can investigate what happened to the old crew as a plot hook.",
      "**GM advice:** if a TPK feels unfun or unfair, consider having the party **wake up captured** — they lost everything but their lives, and now must escape. This creates a new adventure instead of a dead end."
    ]
  },
  {
    "id": "what-if-i-want-to-change-role",
    "title": "Can I switch or multiclass into a different Role?",
    "topic": "Roles",
    "tags": [
      "change role",
      "multiclass",
      "switch role",
      "new role",
      "second role",
      "multi role"
    ],
    "icon": "🔄",
    "steps": [
      "**Yes — multiclassing is allowed** in Cyberpunk RED. You can add a second (or third) Role to your character.",
      "Acquiring **Rank 1** in a new Role costs **60 Improvement Points (IP)**. This represents training, mentorship, or self-teaching.",
      "You must have a **narrative justification** — you can't just wake up as a Netrunner. You need a teacher, training program, or significant in-game experience.",
      "Your **original Role** keeps its current rank. You now have two Role abilities, each at their respective ranks.",
      "Advancing the **new Role** costs IP as normal for that rank (increasing with each rank).",
      "**Important:** you don't lose anything from your original Role. Multiclassing is purely additive — but the IP cost is steep, so progress will be slow."
    ]
  },
  {
    "id": "what-is-an-edgerunner",
    "title": "What is an Edgerunner?",
    "topic": "Lore",
    "tags": [
      "edgerunner",
      "player",
      "character",
      "cyberpunk",
      "role",
      "street"
    ],
    "icon": "⭐",
    "steps": [
      "An **Edgerunner** is anyone who lives on the edge of society in Night City — mercs, hackers, fixers, solos, and more.",
      "They take dangerous jobs for **eddies** (eurobucks), the currency of the Dark Future.",
      "Edgerunners are defined by their **Role** (Solo, Netrunner, Tech, etc.) which gives them a unique **Role Ability**.",
      "Most Edgerunners have **cyberware** — cybernetic implants that enhance their abilities at the cost of **Humanity**.",
      "The game is about survival, style, and making your mark on Night City. **Style over substance** is the first rule."
    ]
  },
  {
    "id": "what-is-the-time-of-the-red",
    "title": "What is the Time of the Red?",
    "topic": "Lore",
    "tags": [
      "time of the red",
      "era",
      "setting",
      "2045",
      "red sky",
      "aftermath"
    ],
    "icon": "🔴",
    "steps": [
      "The **Time of the Red** is the current era (2040s) — named for the **red-tinted sky** caused by debris from the Arasaka Tower nuclear detonation in 2023.",
      "Night City is **rebuilding** from the 4th Corporate War. Supply lines are broken, the NET is dead, and corps are weakened.",
      "The **old NET** was destroyed by the **DataKrash** — rogue AIs roam beyond the **Blackwall** maintained by NetWatch.",
      "Local **Data Pools** and **CitiNets** have replaced the global NET. Communication is fragmented.",
      "This is a world of **scarcity and opportunity** — the old power structures are broken and edgerunners can carve out real influence."
    ]
  },
  {
    "id": "what-are-eddies",
    "title": "What are Eddies?",
    "topic": "Lifestyle",
    "tags": [
      "eddies",
      "money",
      "currency",
      "eurobucks",
      "eb",
      "payment",
      "cash"
    ],
    "icon": "💰",
    "steps": [
      "**Eddies** (eb) are Eurobucks — the standard currency in Night City and most of the world.",
      "They come in **physical chips** or **digital transfers** via your Agent (phone).",
      "**Price categories**: Cheap (10eb), Everyday (20eb), Costly (50eb), Premium (100eb), Expensive (500eb), Very Expensive (1,000eb), Luxury (5,000eb), Super Luxury (10,000eb+).",
      "A typical gig pays **500-2,000eb** per person. High-risk jobs can pay **5,000-10,000eb+**.",
      "Monthly living costs range from **1,100eb** (survival: cube + kibble) to **9,000eb+** (comfortable: apartment + good food + entertainment)."
    ]
  },
  {
    "id": "getting-around-night-city",
    "title": "How do I get around Night City?",
    "topic": "Lifestyle",
    "tags": [
      "taxi",
      "transport",
      "bus",
      "train",
      "lev",
      "travel",
      "NCART",
      "NCTC",
      "getting around"
    ],
    "icon": "🚕",
    "steps": [
      "**Lev Train (NCART)**: Magnetic levitation trains run underground in the city and on pillars in suburbs. Cost: **1eb per station passed** (3 stations = 3eb). Buy tickets from machines at stations or convenience stores.",
      "**Bus (NCTC)**: Night City Transit Corporation runs buses on major thoroughfares. Cheap but unreliable and potentially dangerous depending on the zone.",
      "**Corporate Lev Line**: One sealed line runs to the Executive Zone — requires an **entry pass**. Corp stations are clean, well-lit, guarded. City stations are not.",
      "**Personal Vehicle**: Most edgerunners drive groundcars (CHOOH2-powered). Parking is a concern — studio apartments and above come with protected parking. On the street, your car **will** get broken into in the Combat Zone.",
      "**There are no real taxis** in the Time of the Red. Transport infrastructure is fragmented from the war. You either own a vehicle, know a Nomad, take public transit, or walk.",
      "**Nomad Convoys**: For long-distance travel outside the city, Nomad packs run armed cargo convoys along defended \"Nomad High Roads.\" Getting a ride means knowing the right people.",
      "**Air Transport**: AVs and gyrocopters exist but are **Super Luxury (20,000eb+)**. Only corps and the very wealthy have them. Trauma Team uses AV-4s."
    ]
  },
  {
    "id": "overview-character-creation",
    "title": "Character Creation — Overview",
    "topic": "Character Creation",
    "tags": [
      "character creation",
      "overview",
      "chargen",
      "new character",
      "making a character",
      "start"
    ],
    "icon": "📝",
    "steps": [
      "**Character Creation** is how you build your edgerunner. CPR offers **3 methods**: Streetrat (fastest, pre-built), Edgerunner (balanced, some choices), Complete Package (full control, 62 stat points).",
      "Every character has **10 Stats** (INT, REF, DEX, TECH, COOL, WILL, LUCK, MOVE, BODY, EMP) that define their baseline abilities.",
      "You choose a **Role** (Solo, Netrunner, Fixer, Tech, etc.) which gives you a unique **Role Ability** that defines your playstyle.",
      "**Lifepath** gives your character history — cultural origin, personality, background, friends, enemies, and tragic romances.",
      "You start with **role-specific gear and weapons**, plus **500eb** (Streetrat/Edgerunner) or **2,550eb** (Complete Package) to buy more."
    ]
  },
  {
    "id": "overview-cyberware",
    "title": "Cyberware — Overview",
    "topic": "Cyberware",
    "tags": [
      "cyberware",
      "overview",
      "chrome",
      "implants",
      "cybernetics",
      "humanity",
      "ripperdoc"
    ],
    "icon": "⚙",
    "steps": [
      "**Cyberware** is cybernetic implants that enhance your body. Organized by **slot**: Neuralware, Cyberoptics, Cyberaudio, Internal/External Body, Cyberlimbs, Borgware, Fashionware.",
      "Each piece costs **Humanity Loss (HL)** — when Humanity drops too low, your **EMP stat decreases** and you risk **cyberpsychosis**.",
      "Installation requires a **ripperdoc**. Cost = item price + installation. **Foundational** cyberware must be installed before **Options**.",
      "In this section: Kerenzikov, Sandevistan, Pain Editor, Gorilla Arms, Mantis Blades, Monowire, Cyberdecks, installation, humanity, and cyberpsychosis."
    ]
  },
  {
    "id": "overview-drugs",
    "title": "Drugs — Overview",
    "topic": "Drugs",
    "tags": [
      "drugs",
      "overview",
      "street drugs",
      "smash",
      "synthcoke",
      "black lace",
      "boost",
      "blue glass"
    ],
    "icon": "💊",
    "steps": [
      "**Street drugs** give temporary stat boosts but carry risk of **secondary effects** when they wear off (Resist Torture/Drugs check).",
      "The 5 drugs: **Smash** (+BODY), **Synthcoke** (+INT), **Black Lace** (+REF/COOL, Frenzy on fail), **Blue Glass** (+COOL), **Boost** (+INT perception).",
      "**Black Lace** is the most dangerous — failure means losing all EMP for 1 hour and attacking the nearest person.",
      "Drugs **cannot be stacked**. In this section: each drug, interactions, overdose rules, and combat use."
    ]
  },
  {
    "id": "overview-environment",
    "title": "Environment — Overview",
    "topic": "Environment",
    "tags": [
      "environment",
      "overview",
      "hazards",
      "fire",
      "falling",
      "drowning",
      "stealth",
      "terrain"
    ],
    "icon": "🌍",
    "steps": [
      "**Environmental hazards**: fire (2 dmg/turn), falling (1d6/meter, max 10d6), drowning (3d6/round after BODY x 10 sec), poison, electricity.",
      "Also covers **stealth** (DEX + Stealth vs INT + Perception), **tracking**, **climbing**, **swimming**, and **long-distance travel**.",
      "Armor generally does **not** protect against environmental damage (falling, drowning, fire to HP).",
      "In this section: fire, explosions, falling, drowning, poison, electricity, temperature, stealth, tracking, climbing, swimming, and travel."
    ]
  },
  {
    "id": "overview-equipment",
    "title": "Equipment — Overview",
    "topic": "Equipment",
    "tags": [
      "equipment",
      "overview",
      "weapons",
      "armor",
      "gear",
      "buying",
      "quality",
      "attachments"
    ],
    "icon": "🔫",
    "steps": [
      "Weapons come in 3 **quality tiers**: Poor (jam on nat 1), Standard (normal), Excellent (+1 to attack). Melee: 1d6 to 4d6. Ranged: pistols through rockets.",
      "**Armor** absorbs damage (SP). When damage gets through, armor **ablates by 1 SP**. Heavier armor gives REF/DEX/MOVE penalties.",
      "**Ammo types** matter: AP (2x ablation), Incendiary (fire), Rubber (non-lethal), Smart (second chance to hit), and more.",
      "In this section: every weapon type, every exotic weapon, every ammo type, attachments, armor, and buying guides."
    ]
  },
  {
    "id": "overview-gm-tips",
    "title": "GM Tips — Overview",
    "topic": "GM Tips",
    "tags": [
      "gm",
      "overview",
      "gamemaster",
      "running",
      "tips",
      "encounter",
      "balance",
      "ip"
    ],
    "icon": "🎬",
    "steps": [
      "**DVs**: Simple 9, Everyday 13, Difficult 15, Professional 17, Heroic 21, Incredible 24, Legendary 29.",
      "**Paying players**: 500-2,000eb typical. High-risk: 5,000-10,000eb+. **IP awards**: 10-80 per session.",
      "**Encounter balance**: Mooks = equal to PCs. Lieutenants = 1 per 2 PCs. Mini Bosses = 1 per 3 PCs. Cyberpsycho = boss fight only.",
      "In this section: paying players, IP/leveling, setting DVs, night markets, encounter tables, and reputation."
    ]
  },
  {
    "id": "overview-lifestyle",
    "title": "Lifestyle — Overview",
    "topic": "Lifestyle",
    "tags": [
      "lifestyle",
      "overview",
      "housing",
      "food",
      "rent",
      "money",
      "cost of living",
      "fashion"
    ],
    "icon": "🏠",
    "steps": [
      "**Housing**: Street (free) to Luxury Penthouse (15,000eb/month). Cube Hotel (500eb) is cheapest indoors. Cargo Container (1,000eb).",
      "**Food**: Kibble (100eb/month) to Fresh Food (1,000eb+). **Fashion**: 10 styles from Bag Lady Chic to High Fashion.",
      "Can't pay rent? 1 week grace, then **Death Save every day**. Can't eat? Same deal.",
      "In this section: housing types, food, fashion, cost of living, transport, services, and home defenses."
    ]
  },
  {
    "id": "overview-medical",
    "title": "Medical — Overview",
    "topic": "Medical",
    "tags": [
      "medical",
      "overview",
      "healing",
      "injuries",
      "death",
      "surgery",
      "first aid",
      "recovery"
    ],
    "icon": "⚕",
    "steps": [
      "**Wound States**: Not Wounded → Lightly Wounded (half HP) → Seriously Wounded (-2 all) → Mortally Wounded (0 HP, Death Saves) → Dead.",
      "**Critical Injuries** from crossing Seriously Wounded threshold or head hits. Roll 2d6 on Body or Head table.",
      "**Healing**: First Aid (DV13), Paramedic (treats crits), Surgery (permanent), Hospital (0.5 HP/hour, 100-1000eb/day).",
      "In this section: every critical injury, healing methods, therapy, Trauma Team, drugs, and recovery times."
    ]
  },
  {
    "id": "overview-netrunning",
    "title": "Netrunning — Overview",
    "topic": "Netrunning",
    "tags": [
      "netrunning",
      "overview",
      "net",
      "hacking",
      "cyberdeck",
      "programs",
      "interface",
      "black ice"
    ],
    "icon": "💻",
    "steps": [
      "Need: **Neural Link + Interface Plugs + Cyberdeck**. Jack in within **6m of access point**. Architecture has **floors** — start at top, move down.",
      "Get **2 NET Actions per turn**. Actions: Move, Use Program, Interface Check, Jack Out, plus 9 Interface Abilities.",
      "**Black ICE** deals damage to your brain. Brain HP hits 0 = **brain-dead**. Programs are your weapons and shields in the NET.",
      "In this section: step-by-step netrunning, every program, every Black ICE, architecture building, cyberdecks, and emergencies."
    ]
  },
  {
    "id": "overview-night-city",
    "title": "Night City — Overview",
    "topic": "Night City",
    "tags": [
      "night city",
      "overview",
      "districts",
      "zones",
      "gangs",
      "locations",
      "territory"
    ],
    "icon": "🏙",
    "steps": [
      "**Zones**: Executive (locked), Corporate (policed), Moderate (typical), Combat (lawless), Hot (warzone).",
      "Districts: Watson, City Center, Westbrook/Japantown, Heywood, Pacifica, Santo Domingo, The Badlands.",
      "**14 major gangs** control territories. Services vary by zone — ripperdocs in Watson/Kabuki, fixers everywhere.",
      "In this section: every district, every gang, key locations, danger areas, and where to find things."
    ]
  },
  {
    "id": "overview-roles",
    "title": "Roles — Overview",
    "topic": "Roles",
    "tags": [
      "roles",
      "overview",
      "solo",
      "netrunner",
      "fixer",
      "tech",
      "medtech",
      "media",
      "exec",
      "lawman",
      "nomad",
      "rockerboy"
    ],
    "icon": "🎭",
    "steps": [
      "**10 Roles**: Solo (combat), Netrunner (hacking), Tech (crafting), Medtech (medicine), Fixer (deals), Nomad (vehicles), Media (rumors), Rockerboy (crowds), Exec (corporate team), Lawman (backup).",
      "Each has a unique **Role Ability** that improves with rank (1-10). Ranking up costs **60 IP per rank**.",
      "You can **multiclass** — take a second role for 60 IP at Rank 1.",
      "In this section: what each role can do, every sub-ability, and role-specific scenarios."
    ]
  },
  {
    "id": "overview-skills",
    "title": "Skills — Overview",
    "topic": "Skills",
    "tags": [
      "skills",
      "overview",
      "checks",
      "stat",
      "dv",
      "difficulty",
      "roll",
      "ability"
    ],
    "icon": "🎲",
    "steps": [
      "Every action: **STAT + Skill + 1d10** vs **DV** (or opposed roll). DVs: Simple 9, Everyday 13, Difficult 15, Professional 17, Heroic 21, Incredible 24, Legendary 29.",
      "**Opposed checks**: both roll, highest wins, ties to defender. Some skills cost **double IP** to level (x2 skills).",
      "Nat 10 = **critical success** (roll again, add). Nat 1 = **critical failure** (roll again, if 1 again = fumble).",
      "In this section: every individual skill, when to use each, DVs, and how checks work."
    ]
  },
  {
    "id": "overview-social",
    "title": "Social — Overview",
    "topic": "Social",
    "tags": [
      "social",
      "overview",
      "persuasion",
      "intimidation",
      "negotiation",
      "facedown",
      "reputation"
    ],
    "icon": "🗣",
    "steps": [
      "**Persuasion** (COOL + Persuasion vs DV/opposed), **Facedown** (COOL + Concentration + 1d10, Rep bonus), **Interrogation** (COOL + Interrogation).",
      "**Human Perception** (INT) detects lies and reads emotions. **Conversation** (INT) is for lying and fast-talking.",
      "In this section: persuasion, intimidation, bribes, disguises, lie detection, negotiation, facedowns, reputation, and contacts."
    ]
  },
  {
    "id": "overview-stats",
    "title": "Statistics — Overview",
    "topic": "Stats",
    "tags": [
      "stats",
      "overview",
      "statistics",
      "attributes",
      "int",
      "ref",
      "dex",
      "body",
      "cool",
      "emp"
    ],
    "icon": "📊",
    "steps": [
      "**10 Stats** (2-8 range): Physical (REF, DEX, MOVE, BODY), Mental (INT, TECH, WILL), Social (COOL, EMP), Special (LUCK).",
      "**Derived**: HP = 10 + (5 x ceil((BODY+WILL)/2)). Death Save = BODY. Humanity = EMP x 10. Movement = MOVE x 2m/turn.",
      "**LUCK** is a pool (refreshes each session) you can add to any roll before or after rolling.",
      "In this section: what each stat affects, HP calculation, LUCK pool mechanics, and derived values."
    ]
  },
  {
    "id": "overview-vehicles",
    "title": "Vehicles — Overview",
    "topic": "Vehicles",
    "tags": [
      "vehicles",
      "overview",
      "cars",
      "driving",
      "chase",
      "combat",
      "motorcycle",
      "av"
    ],
    "icon": "🚗",
    "steps": [
      "**Driving**: REF + Drive + 1d10 vs DV (Simple 13, Difficult 15, Incredible 17). Failed = out of control, 4d6 to occupants.",
      "**Shooting from vehicles**: -4 penalty. Driver cannot shoot and drive. **Ramming**: both take 6d6, occupants 4d6.",
      "Vehicles have **HP and armor SP**. Weak points: tires (halve speed, DV+8), engine (disable, DV+8).",
      "In this section: chases, ramming, shooting, vehicle stats, aerial combat, repair, and buying vehicles."
    ]
  },
  {
    "id": "choke-unconsciousness",
    "title": "Choke Unconsciousness Mechanic",
    "topic": "Combat",
    "tags": [
      "choke",
      "unconscious",
      "grapple",
      "grab",
      "knockout",
      "suffocate"
    ],
    "icon": "💤",
    "steps": [
      "While grappling, an attacker can use their Action to **Choke** the defender, dealing their **BODY stat** directly to HP (ignoring armor).",
      "If this would reduce a target above 1 HP to below 0 HP, they are left at **1 HP and Unconscious** instead.",
      "Choking the **same target for 3 successive Rounds** knocks them **Unconscious regardless of HP total**.",
      "This is one of the few reliable ways to take someone alive without risking a kill.",
      "To choke, you must first successfully **Grab** the target (DEX + Brawling + 1d10 vs DEX + Brawling + 1d10)."
    ]
  },
  {
    "id": "melee-halves-armor",
    "title": "Melee Weapons Halve Armor",
    "topic": "Combat",
    "tags": [
      "melee",
      "armor",
      "halve",
      "SP",
      "melee weapon",
      "brawling exception"
    ],
    "icon": "🗡",
    "steps": [
      "When attacking with a **Melee Weapon** (sword, knife, bat, etc.), the defender's armor SP is **halved** (round up) before subtracting from damage.",
      "This makes melee weapons significantly more effective against armored targets than their damage dice alone suggest.",
      "**Brawling attacks do NOT get this benefit** -- punches and kicks face the full armor SP.",
      "**Cyberarms with built-in weapons** (Wolvers, Mantis Blades, etc.) DO halve armor, as they count as melee weapons.",
      "Example: a target with SP 11 body armor takes a sword hit. Effective SP = ceil(11/2) = **6** against the melee attack.",
      "This is one of the most commonly forgotten rules in combat. Melee is much more viable than it appears at first glance."
    ]
  },
  {
    "id": "brawling-damage-by-body",
    "title": "Brawling Damage by BODY Stat",
    "topic": "Combat",
    "tags": [
      "brawling",
      "damage",
      "body",
      "fist",
      "punch",
      "unarmed",
      "cyberarm"
    ],
    "icon": "👊",
    "steps": [
      "Brawling damage is based on your **BODY stat**: BODY **4 or less** = 1d6, BODY **5-6** = 2d6, BODY **7-10** = 3d6, BODY **11+** = 4d6.",
      "Characters with a **Cyberarm** use a minimum of **2d6** for brawling damage, even if their BODY would give less.",
      "Brawling attacks do **NOT halve armor** -- unlike melee weapons, punches and kicks face the full SP of the target's armor.",
      "Brawling uses **DEX + Brawling + 1d10** vs the defender's **DEX + Evasion + 1d10**.",
      "Brawling is also the skill used to defend against **Grab** attempts (not Evasion)."
    ]
  },
  {
    "id": "martial-arts-forms",
    "title": "Martial Arts Forms & Special Moves",
    "topic": "Combat",
    "tags": [
      "martial arts",
      "karate",
      "taekwondo",
      "judo",
      "aikido",
      "special move",
      "form"
    ],
    "icon": "🥋",
    "steps": [
      "There are **4 Martial Arts forms**, each with two unique Special Moves. Martial Arts skill costs **x2 IP** to improve.",
      "**Karate**: Bone Breaking Strike (if damage gets through, target takes a Critical Injury) and Sweeping Kick (knock target Prone).",
      "**Taekwondo**: Pressure Point Strike (if damage gets through, target's next Action is at -2) and Flying Kick (+3 damage on a charge).",
      "**Judo**: Counter Throw (when successfully defending, throw attacker Prone and deal BODY damage) and Grapple Hold (on successful Grab, instantly Choke).",
      "**Aikido**: Iron Grip (+2 to Grab attempts) and Redirect (when defending, redirect attacker into another target).",
      "A Martial Arts practitioner can also attempt the **Recovery** special move: DV13 roll to Get Up from Prone without spending an Action."
    ]
  },
  {
    "id": "thrown-weapon-rules",
    "title": "Thrown Weapons & Objects",
    "topic": "Combat",
    "tags": [
      "thrown",
      "throw",
      "grenade",
      "athletics",
      "ranged",
      "dv table"
    ],
    "icon": "🎯",
    "steps": [
      "Thrown weapons and objects use **DEX + Athletics + 1d10** vs the **Grenade Launcher DV** entry on the range table (not a flat DV).",
      "Maximum throwing range is **25m/yds**.",
      "Thrown melee weapons deal their **listed damage** but do **NOT halve SP** (unlike regular melee attacks).",
      "Grenades and explosives deal damage to all targets in a **10m x 10m area** (5x5 squares).",
      "If the throw misses, the object deviates -- roll for deviation distance and direction."
    ]
  },
  {
    "id": "radiation-rules",
    "title": "Radiation Exposure Rules",
    "topic": "Environment",
    "tags": [
      "radiation",
      "hot zone",
      "nuclear",
      "fire",
      "damage",
      "irradiated"
    ],
    "icon": "☢",
    "steps": [
      "**Low radiation** acts as **Mild fire** (2 damage direct to HP per turn).",
      "**High radiation** (leaking reactor) acts as **Deadly fire** (6 damage direct to HP per turn).",
      "Unlike actual fire, radiation **cannot be 'put out'** while in the hot zone. The only solution is to leave the irradiated area.",
      "The **Hot Zone** around the old Corporate Center in Night City has radiation pockets that present this danger.",
      "Protective gear or cyberware may mitigate exposure at GM discretion, but the core rules treat it like fire damage."
    ]
  },
  {
    "id": "space-asphyxiation",
    "title": "Vacuum / Space Exposure",
    "topic": "Environment",
    "tags": [
      "space",
      "vacuum",
      "asphyxiation",
      "exposure",
      "INT",
      "death"
    ],
    "icon": "🌌",
    "steps": [
      "Characters in vacuum suffer **drowning effects** (BODY damage to HP per turn after breath runs out).",
      "Additionally, at the end of each Turn in vacuum, take **1d6 damage to INT, REF, and DEX** from vacuum exposure effects.",
      "If **INT reaches 0** from vacuum exposure, the character **dies**.",
      "Characters can hold their breath for **BODY minutes** before drowning effects begin."
    ]
  },
  {
    "id": "human-shield-restrictions",
    "title": "Human Shield Restrictions",
    "topic": "Combat",
    "tags": [
      "human shield",
      "hostage",
      "grab",
      "restriction",
      "aimed shot",
      "melee"
    ],
    "icon": "🛡",
    "steps": [
      "A grabbed target can be used as a **Human Shield** against ranged attacks.",
      "Human Shields **cannot block melee attacks** -- melee attackers can target the grabber directly.",
      "Human Shields **cannot block Aimed Shots to the head** -- a skilled shooter can aim past the shield.",
      "These restrictions mean that using a Human Shield is effective against ranged fire but not a complete defense."
    ]
  },
  {
    "id": "smg-uses-handgun-skill",
    "title": "SMGs Use the Handgun Skill",
    "topic": "Equipment",
    "tags": [
      "SMG",
      "handgun",
      "skill",
      "weapon",
      "heavy SMG",
      "common mistake"
    ],
    "icon": "🔫",
    "steps": [
      "**SMGs and Heavy SMGs** use the **Handgun** skill for attack rolls, not a separate SMG skill.",
      "This is a common misconception -- there is no dedicated SMG skill in Cyberpunk RED.",
      "Single-shot attacks with SMGs: **REF + Handgun + 1d10** vs range DV.",
      "Autofire with SMGs: **REF + Autofire + 1d10** vs Autofire DV.",
      "The Handgun skill covers: Pistols, Heavy Pistols, Very Heavy Pistols, SMGs, and Heavy SMGs."
    ]
  },
  {
    "id": "weapon-quality-effects",
    "title": "Weapon Quality: Poor, Standard, Excellent",
    "topic": "Equipment",
    "tags": [
      "weapon quality",
      "poor",
      "standard",
      "excellent",
      "jam",
      "bonus",
      "attack"
    ],
    "icon": "⭐",
    "steps": [
      "**Poor quality** weapons jam on a natural roll of **1 or 2** on the d10 (instead of just 1). They are cheaper but unreliable.",
      "**Standard quality** weapons work normally. Jams occur only on a natural 1.",
      "**Excellent quality** weapons grant **+1 to attack rolls**. This makes them significantly more accurate.",
      "Weapon quality can be improved by a **Tech** using the Upgrade Expertise ability.",
      "Quality affects reliability and accuracy but does **not** change the weapon's damage dice."
    ]
  },
  {
    "id": "multiple-drug-doses",
    "title": "Multiple Drug Doses -- Stacking Rules",
    "topic": "Drugs",
    "tags": [
      "drug",
      "doses",
      "stacking",
      "multiple",
      "extend",
      "duration"
    ],
    "icon": "💊",
    "steps": [
      "Taking **multiple doses of the same drug** extends the Primary Effect duration but does **NOT stack the bonuses**.",
      "Example: Taking a second Synthcoke while the first is active extends the +1 REF duration by another 4 hours, but REF does not become +2.",
      "The addiction roll (Resist Torture/Drugs) happens only when the Primary Effect **finally ends** after all doses wear off.",
      "Taking different drugs simultaneously is handled by GM adjudication -- the core rules do not explicitly cover drug interactions."
    ]
  },
  {
    "id": "self-stabilization",
    "title": "Stabilizing Yourself",
    "topic": "Medical",
    "tags": [
      "self",
      "stabilize",
      "first aid",
      "yourself",
      "solo",
      "mortally wounded"
    ],
    "icon": "🩹",
    "steps": [
      "You **can** stabilize yourself using First Aid or Paramedic -- same check: **TECH + First Aid/Paramedic + 1d10** vs the wound state DV.",
      "This is explicitly stated in the rules. You do not need another character to perform stabilization.",
      "Remember the **Seriously Wounded penalty (-2 to all Actions)** applies to your stabilization roll if you are badly hurt.",
      "If you are **Mortally Wounded**, you are unconscious and **cannot** stabilize yourself -- you need someone else."
    ]
  },
  {
    "id": "body-8-single-hand",
    "title": "BODY 8+ Single-Hand Wielding",
    "topic": "Combat",
    "tags": [
      "body",
      "two-handed",
      "one hand",
      "strength",
      "heavy weapon",
      "melee"
    ],
    "icon": "💪",
    "steps": [
      "Characters with **BODY 8 or higher** can wield **two-handed melee weapons** in one hand.",
      "This frees up the other hand for a shield, a second weapon, or other uses.",
      "This applies to melee weapons only -- ranged weapons that require two hands still need both hands regardless of BODY."
    ]
  },
  {
    "id": "medtech-pharmaceuticals-only",
    "title": "Medtech Pharmaceuticals -- Medtech Only",
    "topic": "Medical",
    "tags": [
      "medtech",
      "pharmaceutical",
      "antibiotic",
      "rapidetox",
      "speedheal",
      "stim",
      "surge"
    ],
    "icon": "💉",
    "steps": [
      "**Medtech Pharmaceuticals** (Antibiotic, Rapidetox, Speedheal, Stim, Surge) can **only be administered correctly by a Medtech**.",
      "Non-Medtechs cannot use these pharmaceuticals. They are not street drugs -- they require medical knowledge to administer.",
      "Each pharmaceutical is unlocked by putting points into the **Pharmaceuticals** specialty of the Medicine Role Ability.",
      "**Antibiotic**: +2 HP/day for 1 week. **Rapidetox**: purge all drugs/poisons. **Speedheal**: heal BODY+WILL HP (not Mortally Wounded). **Stim**: ignore Seriously Wounded 1hr. **Surge**: no sleep 24hrs.",
      "Synthesizing doses: **DV13 Medical Tech Check**, 200eb materials = doses equal to Medical Tech Skill level in 1 hour."
    ]
  },
  {
    "id": "gang-philharmonic-vampyres",
    "title": "Philharmonic Vampyres gang",
    "topic": "Night City",
    "tags": [
      "philharmonic vampyres",
      "gang",
      "prankster",
      "vampire",
      "tuxedo",
      "social commentary"
    ],
    "icon": "🧛",
    "steps": [
      "The **Philharmonic Vampyres** are a prankster gang known for their theatrical style -- tuxedos, capes, and vampire teeth.",
      "Their activities center around **social commentary** and elaborate pranks, making them one of the more unusual gangs in Night City.",
      "Less violent than most gangs, but their pranks can have serious consequences and they are not afraid to fight if cornered.",
      "Style: gothic elegance mixed with dark humor. They see themselves as performance artists as much as gang members."
    ]
  },
  {
    "id": "gang-prime-time-players",
    "title": "Prime-Time Players gang",
    "topic": "Night City",
    "tags": [
      "prime-time players",
      "gang",
      "poser",
      "biosculpt",
      "sitcom",
      "territorial"
    ],
    "icon": "📺",
    "steps": [
      "The **Prime-Time Players** are a poser gang that **biosculpts** to look like old sitcom characters.",
      "They are **territorial and protective** of their neighborhood, acting as a combination of entertainment and enforcement.",
      "Their appearance is unsettling -- imagine encountering a group of classic TV characters armed with real weapons.",
      "A unique gang that blurs the line between cosplay, community protection, and criminal activity."
    ]
  },
  {
    "id": "gang-steel-vaqueros",
    "title": "Steel Vaqueros gang",
    "topic": "Night City",
    "tags": [
      "steel vaqueros",
      "gang",
      "nomad",
      "salinas",
      "coastal highway",
      "transport"
    ],
    "icon": "🤠",
    "steps": [
      "The **Steel Vaqueros** are a Nomad pack from **Salinas** that runs the coastal highway.",
      "They are important for Night City's **transport and supply** lines, moving goods along the coast.",
      "As a Nomad pack rather than a traditional urban gang, they operate on the roads and perimeter of the city.",
      "They maintain trade routes and can be allies or obstacles depending on the party's relationship with Nomad culture."
    ]
  },
  {
    "id": "gang-iron-sights",
    "title": "Iron Sights gang",
    "topic": "Night City",
    "tags": [
      "iron sights",
      "gang",
      "combat",
      "cyberpsycho",
      "arasaka",
      "small gang"
    ],
    "icon": "🎯",
    "steps": [
      "The **Iron Sights** are a small but tough combat gang of **borderline cyberpsychos**.",
      "Once funded by **Arasaka**, they lost their corporate backing after the 4th Corporate War.",
      "Despite their small numbers, they are extremely dangerous due to heavy cyberware augmentation and combat experience.",
      "Some members were eventually absorbed into **Maelstrom**."
    ]
  },
  {
    "id": "gang-red-chrome-legion",
    "title": "Red Chrome Legion gang",
    "topic": "Night City",
    "tags": [
      "red chrome legion",
      "gang",
      "neo-fascist",
      "hate gang",
      "extremist"
    ],
    "icon": "🔴",
    "steps": [
      "The **Red Chrome Legion** is a **neo-fascist hate gang** operating in Night City.",
      "They are one of the most despised gangs in the city, driven by extremist ideology.",
      "Some members were eventually absorbed into **Maelstrom**.",
      "Threat level: **High**. Motivated by ideology rather than profit, making them unpredictable and difficult to negotiate with."
    ]
  },
  {
    "id": "gang-reckoners",
    "title": "Reckoners gang",
    "topic": "Night City",
    "tags": [
      "reckoners",
      "gang",
      "apocalyptic",
      "cult",
      "explosives",
      "doomsday"
    ],
    "icon": "💣",
    "steps": [
      "The **Reckoners** are an **apocalyptic cult gang** known for their use of explosives.",
      "They believe in an impending doomsday and act accordingly -- reckless, dangerous, and fanatical.",
      "Their use of explosives makes them a significant threat even to well-armed opponents.",
      "Threat level: **High**. Unpredictable zealots with access to demolitions expertise."
    ]
  },
  {
    "id": "housing-purchase-prices",
    "title": "Buying Property vs. Renting",
    "topic": "Lifestyle",
    "tags": [
      "housing",
      "buy",
      "purchase",
      "property",
      "investment",
      "rent vs buy"
    ],
    "icon": "🏠",
    "steps": [
      "Housing can be **purchased outright** instead of rented monthly:",
      "**Cargo Container**: 15,000eb to buy. **Studio Apartment**: 25,000eb. **Two-Bedroom**: 35,000eb.",
      "**Upscale Conapt**: 85,000eb. **Luxury Penthouse**: 500,000eb.",
      "Purchasing eliminates monthly rent but you still pay for utilities and maintenance.",
      "In a city as unstable as Night City, property ownership carries risks -- gang takeovers, corporate seizure, or structural damage."
    ]
  },
  {
    "id": "sleep-deprivation",
    "title": "Sleep Deprivation Rules",
    "topic": "Environment",
    "tags": [
      "sleep",
      "deprivation",
      "fatigue",
      "rest",
      "penalty",
      "tired"
    ],
    "icon": "😴",
    "steps": [
      "Characters need at least **6 hours of sleep** per day to avoid fatigue penalties.",
      "For each day without adequate sleep, suffer **-2 to everything** (all checks, attacks, defenses).",
      "Uncomfortable sleeping conditions (sleeping in a vehicle, on the street, or in a crowded cube hotel with 2 people) can also cause fatigue.",
      "The **Surge** Medtech pharmaceutical allows a character to go without sleep for 24 hours without penalty."
    ]
  },
  {
    "id": "corporate-conapt-surveillance",
    "title": "Corporate Conapt Surveillance",
    "topic": "Lifestyle",
    "tags": [
      "corporate",
      "conapt",
      "surveillance",
      "privacy",
      "camera",
      "exec"
    ],
    "icon": "📷",
    "steps": [
      "Corporate Conapts (free housing for Execs) have **mandatory surveillance in every room** except bathrooms.",
      "Tampering with the surveillance equipment results in a **50eb fine**.",
      "The corporation monitors everything -- conversations, visitors, activities. Privacy does not exist in corporate housing.",
      "This is a significant consideration for Exec characters planning anything their corporation would not approve of."
    ]
  },
  {
    "id": "night-market-player-guide",
    "title": "How Night Markets Work (Player Guide)",
    "topic": "Equipment",
    "tags": [
      "night market",
      "fixer",
      "shopping",
      "rare items",
      "midnight market",
      "operator"
    ],
    "icon": "🛒",
    "steps": [
      "**Night Markets** are open-air bazaars set up by Fixers (Operator Rank 5+). They make **all price categories** of items available for purchase.",
      "Night Markets are temporary events -- they appear, operate for a limited time, and disappear.",
      "**Midnight Markets** (Fixer Rank 9+) are invite-only flash markets with **1d10+5 rare items** and access to criminal underworld leadership.",
      "At a Night Market, normal pricing rules apply, but the **availability** of expensive and rare items is the main benefit.",
      "Finding a Night Market typically requires a Fixer contact or a Streetwise check."
    ]
  },
  {
    "id": "cyberware-install-restriction",
    "title": "Cyberware Installation Restrictions",
    "topic": "Cyberware",
    "tags": [
      "cyberware",
      "install",
      "restriction",
      "critical injury",
      "stacking",
      "limitation"
    ],
    "icon": "⚠",
    "steps": [
      "You **can't install cyberware** if you're suffering a **Critical Injury related to the installation area**. Heal the injury first.",
      "**Benefits from multiple installations of the same cyberware do not stack** unless otherwise noted.",
      "Only **1 piece of Speedware** can be installed at a time (applies to both Kerenzikov and Sandevistan).",
      "Installation surgery is **included at no extra charge** when purchasing new cyberware. Found cyberware requires separate installation fees: Mall 100eb, Clinic 500eb, Hospital 1,000eb."
    ]
  },
  {
    "id": "found-cyberware-install",
    "title": "Installing Found Cyberware",
    "topic": "Cyberware",
    "tags": [
      "cyberware",
      "found",
      "installation",
      "cost",
      "ripperdoc",
      "salvage"
    ],
    "icon": "🔧",
    "steps": [
      "When installing cyberware that was **found, looted, or gifted** (not purchased new), installation surgery has a separate cost:",
      "**Mall**: 100eb installation. **Clinic**: 500eb installation. **Hospital**: 1,000eb installation.",
      "This differs from purchasing new cyberware, where installation is **included at no extra charge**.",
      "The same DV requirements apply: Mall DV13, Clinic DV15, Hospital DV17. Failed surgery **destroys** the cyberware."
    ]
  },
  {
    "id": "max-tac-psycho-squad",
    "title": "MAX-TAC / Psycho Squad",
    "topic": "Lore",
    "tags": [
      "max-tac",
      "psycho squad",
      "cyberpsycho",
      "law enforcement",
      "heavy response"
    ],
    "icon": "🚨",
    "steps": [
      "**MAX-TAC** (also known as the Psycho Squad) is a specialized law enforcement unit that responds to cyberpsycho incidents.",
      "They **end fights no matter who starts them** and **hold no prisoners** -- cyberpsychos are taken down hard.",
      "MAX-TAC agents are heavily armed and cybered, capable of matching even the most augmented cyberpsychos.",
      "A cyberpsycho character (Humanity below 0) will eventually draw MAX-TAC attention, ending their career as a player character."
    ]
  },
  {
    "id": "data-pool-data-terms",
    "title": "Data Pool & Data Terms",
    "topic": "Netrunning",
    "tags": [
      "data pool",
      "data term",
      "citinet",
      "communication",
      "information",
      "search"
    ],
    "icon": "📡",
    "steps": [
      "The **Data Pool** is the citywide information network that replaced the old NET. It is essentially a city-wide LAN operated by **Ziggurat**.",
      "**Data Terms** are street-corner computer terminals in armored concrete posts. They provide direct access to the city's Data Pool at about **10eb per minute**.",
      "Data Pools are **air-gapped** between cities -- there is no global internet. City-to-city communication is limited to text, voice, and video via data-packet bursts.",
      "The standard search tool on Data Terms is Ziggurat's **Ask Alex Anything** service.",
      "Data Terms are public and accessible, but usage fees add up quickly for extended research."
    ]
  },
  {
    "id": "speedware-restriction",
    "title": "Speedware Limitation",
    "topic": "Cyberware",
    "tags": [
      "speedware",
      "kerenzikov",
      "sandevistan",
      "limitation",
      "one only",
      "stacking"
    ],
    "icon": "⚡",
    "steps": [
      "Only **1 piece of Speedware** can be installed at a time. This restriction applies to both **Kerenzikov** and **Sandevistan**.",
      "You cannot install a Kerenzikov AND a Sandevistan simultaneously -- choose one.",
      "You cannot install two of the same speedware for double the benefit.",
      "Upgrading your speedware requires removing the old one first, then installing the new one."
    ]
  },
  {
    "id": "borgware-linear-frame",
    "title": "Borgware Linear Frame Requirements",
    "topic": "Cyberware",
    "tags": [
      "borgware",
      "linear frame",
      "sigma",
      "beta",
      "prerequisite",
      "body"
    ],
    "icon": "🤖",
    "steps": [
      "**Linear Frame Sigma** requires: BODY 6 + Grafted Muscles and Bone Lace already installed.",
      "**Linear Frame Beta** requires: BODY 8 + 2 sets of Grafted Muscles and Bone Lace already installed.",
      "These are serious prerequisites -- characters need significant investment before they can access borgware.",
      "Linear Frames are among the most powerful cyberware in the game, effectively making the user a walking tank.",
      "Borgware reduces max Humanity by **4** per piece (instead of the standard 2)."
    ]
  },
  {
    "id": "exile-punishment",
    "title": "Exile Punishment",
    "topic": "Lore",
    "tags": [
      "exile",
      "punishment",
      "implant",
      "pain",
      "crime",
      "banishment"
    ],
    "icon": "🚫",
    "steps": [
      "Night City uses **exile implants** as punishment for certain crimes.",
      "These implants are keyed to city transmission signals and cause **pain** if the offender enters the city.",
      "This effectively banishes the criminal without the cost of imprisonment.",
      "Removal of the implant is illegal and would be treated as escape from punishment."
    ]
  },
  {
    "id": "braindance-punishment",
    "title": "Braindance Punishment (Prisons)",
    "topic": "Lore",
    "tags": [
      "braindance",
      "prison",
      "punishment",
      "cryotank",
      "interface loop",
      "incarceration"
    ],
    "icon": "🧊",
    "steps": [
      "Night City prisons use **braindance punishment** -- inmates are placed in **cryotanks** with interface loop programs.",
      "These create a nightmare of unending, bland horror -- an experience designed to be deeply unpleasant without causing physical harm.",
      "This system allows the city to incarcerate large numbers of prisoners cheaply, as cryotanks take up little space.",
      "The psychological effects of extended braindance punishment are severe and long-lasting."
    ]
  },
  {
    "id": "looting-a-body",
    "title": "Looting a fallen enemy",
    "topic": "Equipment",
    "tags": [
      "loot",
      "looting",
      "body",
      "dead",
      "search",
      "pickup",
      "scavenge",
      "fallen"
    ],
    "icon": "📦",
    "steps": [
      "Looting a body costs **1 Action** (takes your whole turn in combat, or about 1 minute outside combat).",
      "You find whatever the NPC was carrying: their **weapon**, **ammo** (remaining in magazine + spare), **armor** (at current ablated SP), and any **personal items**.",
      "Armor looted from enemies is at its **current SP** (already ablated from the fight). It can be repaired with **TECH + Basic Tech**.",
      "Weapons looted retain their **quality** (Poor/Standard/Excellent) and any attachments.",
      "The GM decides if the NPC had any **eddies**, **drugs**, **data chips**, or other valuables. Mooks typically carry **10-50eb**. Lieutenants may carry **50-200eb**."
    ]
  },
  {
    "id": "looting-a-location",
    "title": "Searching a room or location",
    "topic": "Equipment",
    "tags": [
      "search",
      "loot",
      "room",
      "location",
      "find",
      "hidden",
      "stash",
      "scavenge"
    ],
    "icon": "🔍",
    "steps": [
      "Searching a room takes **1 minute per 3m x 3m area** (roughly one small room).",
      "Roll **INT + Perception + 1d10** vs a DV set by the GM (hidden safe DV17, concealed compartment DV15, obvious desk drawer DV9).",
      "Finding hidden items may require **TECH + Electronics/Security Tech** (for electronic locks/safes) or **TECH + Pick Lock** (for physical locks).",
      "Larger locations (warehouses, offices) should be broken into zones. Each zone takes a separate search.",
      "Time pressure matters: searching during or right after combat risks reinforcements, alarms, or NCPD arrival."
    ]
  },
  {
    "id": "selling-loot",
    "title": "Selling looted gear",
    "topic": "Equipment",
    "tags": [
      "sell",
      "selling",
      "loot",
      "fence",
      "pawn",
      "value",
      "trade",
      "fixer"
    ],
    "icon": "💰",
    "steps": [
      "Looted gear sells for roughly **half its book price** at pawn shops and street dealers.",
      "A **Fixer** with the **Haggle** ability can negotiate better prices, potentially getting closer to full value depending on their rank.",
      "Use **COOL + Trading + 1d10** vs the buyer to negotiate price. Beat their roll and you get a better deal.",
      "**Hot merchandise** (visibly stolen corpo gear, identifiable weapons) sells for less and may attract unwanted attention.",
      "Cyberware can only be sold to **ripperdocs**, who will pay roughly half price. Removing installed cyberware from a body requires **Surgery**."
    ]
  },
  {
    "id": "stripping-cyberware",
    "title": "Taking cyberware from a body",
    "topic": "Cyberware",
    "tags": [
      "cyberware",
      "loot",
      "strip",
      "harvest",
      "ripperdoc",
      "surgery",
      "remove",
      "body"
    ],
    "icon": "✂",
    "steps": [
      "Removing cyberware from a body (alive or dead) requires **TECH + Surgery + 1d10** vs a DV based on the cyberware type.",
      "You need a **Medtech Bag** or proper surgical tools. Improvised tools impose a **-2 penalty**.",
      "Cyberware removed from a **dead body** has a chance of being damaged. GM may rule a quality check.",
      "Cyberware removed from a **living person** without anesthesia causes massive trauma. The subject takes damage and must make **Death Saves** if not already Mortally Wounded.",
      "Found cyberware still needs to be **installed by a ripperdoc** before you can use it. Installation costs and Humanity Loss still apply."
    ]
  },
  {
    "id": "what-do-enemies-carry",
    "title": "What do enemies typically carry?",
    "topic": "GM Tips",
    "tags": [
      "loot",
      "enemies",
      "carry",
      "equipment",
      "mook",
      "gear",
      "npc",
      "inventory"
    ],
    "icon": "🎒",
    "steps": [
      "**Boostergangers**: VH Pistol, Rippers, Light Armorjack (SP4), 1d6 x 10eb, street drugs (50% chance).",
      "**Bodyguards**: Shotgun or VH Pistol, Heavy Armorjack (SP7), 2d6 x 10eb, spare ammo.",
      "**Security Operatives**: Assault Rifle, VH Pistol, Heavy Armorjack (SP7), corporate ID, 3d6 x 10eb.",
      "**Security Officers**: Assault Rifle, VH Pistol, Medium Melee, Flak (SP13), corporate ID, 5d6 x 10eb, possible encrypted data chip.",
      "**Netrunners**: VH Pistol, Light Armorjack (SP11), Cyberdeck with programs, 3d6 x 10eb, data chips.",
      "**Cyberpsycho**: Multiple weapons, SP11 armor, extensive cyberware (not easily removable), 1d6 x 100eb."
    ]
  },
  {
    "id": "loot-tables-explained",
    "title": "How do loot tables work?",
    "topic": "GM Tips",
    "tags": [
      "loot",
      "table",
      "random",
      "generator",
      "drops",
      "rewards",
      "treasure"
    ],
    "icon": "🎰",
    "steps": [
      "CPR doesn't have traditional \"loot tables\" like D&D. Instead, NPCs carry **what makes sense for their role and situation**.",
      "The GM decides loot based on the enemy type: a corporate guard carries corporate weapons, a boosterganger carries street gear.",
      "For **random loot**, the Night Market tables (d100 per category) work well as a \"what did they have on them?\" generator.",
      "Weapon **quality** should match the enemy tier: Mooks carry Poor/Standard, Lieutenants carry Standard, Mini Bosses carry Standard/Excellent.",
      "The real loot in CPR is **information**: data chips, access codes, blackmail material, and contacts. These are often more valuable than gear."
    ]
  },
  {
    "id": "dividing-loot",
    "title": "How to split loot in a group",
    "topic": "Social",
    "tags": [
      "loot",
      "split",
      "divide",
      "share",
      "party",
      "eddies",
      "group",
      "fair"
    ],
    "icon": "⚖",
    "steps": [
      "CPR has no official loot-splitting rules. It's a **roleplay decision** for the crew.",
      "Common approaches: **equal split** of eddies, **need-based** for gear (whoever can use it best), or **finders keepers** (whoever searched gets it).",
      "A **Fixer** in the party often handles selling and distribution, using their Haggle ability to maximize value.",
      "Disputes over loot can be great **roleplay opportunities**, just make sure it doesn't derail the session.",
      "For mission pay from a Fixer, the standard is **per-person payment** (everyone gets the agreed amount, not a split of one sum)."
    ]
  },
  {
    "id": "luck-spending",
    "title": "How LUCK spending works",
    "topic": "Stats",
    "tags": [
      "luck",
      "luck pool",
      "spend luck",
      "luck points",
      "reroll",
      "bonus"
    ],
    "icon": "🍀",
    "steps": [
      "Each character has a **LUCK pool** equal to their LUCK stat that **refreshes at the start of each session**.",
      "You may spend LUCK points **before OR after rolling** to add **+1 per point spent** to any check.",
      "LUCK can be added to **any Skill Check, Attack Check, or opposed roll** — there is no limit to how many points you spend on a single roll.",
      "LUCK **cannot** be added to **damage rolls**, **Death Saves**, or **Humanity Loss rolls**.",
      "You can only spend LUCK on **your own rolls** — never on another character's roll or an NPC's roll.",
      "Once your pool is empty, you cannot spend more LUCK until the **next session** when it fully refills."
    ]
  },
  {
    "id": "initiative-ties",
    "title": "Resolving initiative ties",
    "topic": "Combat",
    "tags": [
      "initiative",
      "tie",
      "ties",
      "turn order",
      "ref",
      "simultaneous"
    ],
    "icon": "⚔️",
    "steps": [
      "Initiative is rolled as **REF + 1d10** at the start of combat. Characters act in **descending order**.",
      "If two or more characters tie on Initiative, the character with the **highest REF stat** goes first.",
      "If REF stats are also tied, those characters **act simultaneously** — their Actions resolve at the same time, meaning both can hit (or kill) each other in the same moment.",
      "The Initiative queue **repeats each Round** in the same order once established."
    ]
  },
  {
    "id": "autofire-into-melee",
    "title": "Autofire into melee",
    "topic": "Combat",
    "tags": [
      "autofire",
      "melee",
      "friendly fire",
      "miss",
      "stray bullets",
      "full auto"
    ],
    "icon": "💥",
    "steps": [
      "You **can** use Autofire against a target currently engaged in melee combat with an ally.",
      "Roll **REF + Autofire + 1d10** vs the **Autofire DV** for range as normal.",
      "If you **miss by 4 or less**, the burst hits their **melee opponent** (your ally) instead — roll full Autofire damage against them.",
      "If you miss by **5 or more**, the burst goes wide and hits nobody.",
      "Autofire costs **10 bullets** and uses the **Autofire Skill** and **Autofire DV table**, not the weapon's standard Skill. SMG max multiplier is **3**, Assault Rifle max multiplier is **4**."
    ]
  },
  {
    "id": "explosives-enclosed-space",
    "title": "Explosives in enclosed spaces",
    "topic": "Combat",
    "tags": [
      "explosive",
      "grenade",
      "room",
      "enclosed",
      "blast radius",
      "indoors",
      "aoe"
    ],
    "icon": "💣",
    "steps": [
      "Explosive weapons deal damage in a **10 m/yd x 10 m/yd area** (5x5 squares). Damage is rolled **once** for all targets.",
      "In an **enclosed space** (a room smaller than the blast radius), there is **no escaping the blast** — everyone in the room takes damage.",
      "**Cover within the room still works**: if a target is fully behind cover with sufficient HP, the cover absorbs damage normally. If the explosive damage would destroy the cover, the target takes **full damage**.",
      "If cover is destroyed (reduced to **0 HP**) by the blast, excess damage from explosives **does** pass through to targets behind it — unlike normal ranged attacks where excess damage is lost.",
      "Targets with **REF 8+** can individually attempt to dodge the blast even indoors."
    ]
  },
  {
    "id": "vehicle-as-cover",
    "title": "Using a vehicle as cover",
    "topic": "Combat",
    "tags": [
      "vehicle",
      "cover",
      "car",
      "hide",
      "sdp",
      "vehicle hp",
      "destruction"
    ],
    "icon": "🚗",
    "steps": [
      "Vehicles function as cover just like walls — they have **Structural Damage Points (SDP)** that absorb incoming attacks. Example: Compact Groundcar has **50 SDP**.",
      "Vehicle glass has **no HP** and provides **no cover** — attackers can target occupants directly through windows.",
      "When a vehicle used as cover takes damage, reduce its **SDP** by the damage dealt. Once SDP reaches **0**, the vehicle is **Destroyed**.",
      "A destroyed vehicle **no longer provides cover**, cannot move, and all occupants take **6d6 damage**.",
      "Unlike normal cover, excess damage that destroys a vehicle does **not** automatically pass through — occupants take the flat **6d6 destruction damage** instead."
    ]
  },
  {
    "id": "dual-wield-melee",
    "title": "Dual-wielding melee weapons",
    "topic": "Combat",
    "tags": [
      "dual wield",
      "two weapons",
      "melee",
      "ambidextrous",
      "off hand"
    ],
    "icon": "🗡️",
    "steps": [
      "Cyberpunk RED has **no official dual-wielding rules** for melee weapons. This is a **GM ruling** situation.",
      "Each melee weapon already has a **Rate of Fire (ROF)**. Light and Medium Melee Weapons have **ROF 2** (two attacks per Action). Heavy Melee has **ROF 2**. Very Heavy Melee has **ROF 1**.",
      "Since ROF 2 weapons already allow **two attack rolls per Action**, holding a second weapon does not grant additional attacks — you are already swinging twice.",
      "A common GM ruling: dual-wielding lets you use **either weapon** for each of your ROF attacks, but does **not** increase total attacks beyond the weapon's ROF.",
      "Two-handed weapons require both hands unless the wielder has **BODY 8+**, which allows wielding a two-handed weapon in one hand."
    ]
  },
  {
    "id": "armor-layering",
    "title": "Armor layering rules",
    "topic": "Equipment",
    "tags": [
      "armor",
      "layering",
      "stacking",
      "sp",
      "penalty",
      "multiple armor"
    ],
    "icon": "🛡️",
    "steps": [
      "You **can** wear multiple pieces of armor at the same time (e.g., Kevlar under a Light Armorjack).",
      "However, **only the highest SP counts** — armor SP does **not** stack. Wearing SP 7 Kevlar under SP 11 Light Armorjack gives you **SP 11**, not SP 18.",
      "**Penalties from all worn armor stack**: if you wear Medium Armorjack (**-2 REF, DEX, MOVE**) and also have Subdermal Armor, you still suffer the **-2 penalty** from the Armorjack even though Subdermal has no penalty.",
      "When you are hit and take damage through armor, **all worn armor in that location is ablated simultaneously** — each piece loses **1 SP**.",
      "Armor penalty is applied once using the **worst penalty** among all worn armor pieces."
    ]
  },
  {
    "id": "friendly-fire",
    "title": "Friendly fire rules",
    "topic": "Combat",
    "tags": [
      "friendly fire",
      "allies",
      "hitting friends",
      "miss",
      "aoe",
      "collateral"
    ],
    "icon": "🎯",
    "steps": [
      "Under normal single-shot ranged or melee attacks, there is **no friendly fire** — a miss simply misses. Stray bullets do not randomly hit allies.",
      "**Autofire exception**: if you miss your Autofire check by **4 or less**, the burst hits an **adjacent ally or bystander** in melee with the target. Roll full Autofire damage against them.",
      "**Explosives exception**: grenades, rockets, and explosive weapons deal damage to **everyone** in the **10 m/yd x 10 m/yd blast area** — allies included. There is no way to exclude friends from the blast.",
      "**Suppressive Fire** forces **everyone on foot within 25 m/yds**, out of cover, and in your line of sight to resist — including allies. Failed saves force them to seek cover.",
      "**Shotgun Shells** hit **every target in front of you within 6 m/yds** that you can see — allies in the cone are also hit."
    ]
  },
  {
    "id": "critical-on-melee",
    "title": "Critical Injuries on melee attacks",
    "topic": "Combat",
    "tags": [
      "critical",
      "crit",
      "melee",
      "injury",
      "halve armor",
      "double six"
    ],
    "icon": "🩸",
    "steps": [
      "Critical Injuries trigger when **2 or more damage dice show a 6** on any attack — melee attacks included.",
      "When a Critical Injury triggers, roll **2d6** on the Body Critical Injury table (or Head table if it was a head Aimed Shot). The injury deals an additional **5 Bonus Damage** directly to HP, ignoring armor.",
      "Melee weapons (not Brawling) **halve the defender's armor SP** (round up) before applying damage. Example: SP 11 armor becomes **SP 6** against melee.",
      "The Critical Injury is inflicted **regardless** of whether the melee damage gets through the halved armor — even **0 damage through SP** still causes the Critical Injury and its **5 Bonus Damage**.",
      "Brawling attacks do **not** halve armor, but they **can** still trigger Critical Injuries if 2+ dice show 6."
    ]
  },
  {
    "id": "can-npcs-use-luck",
    "title": "Can NPCs use LUCK?",
    "topic": "GM Tips",
    "tags": [
      "npc",
      "luck",
      "gm",
      "enemies",
      "mooks",
      "boss"
    ],
    "icon": "🎲",
    "steps": [
      "By default, **NPCs do not have LUCK** and cannot spend LUCK points on their rolls.",
      "The NPC stat blocks in the core rules list a **Combat Number** (STAT + Skill combined) but do **not** include a LUCK pool.",
      "The GM **may** choose to give a specific NPC a LUCK pool as a special ability — for example, a recurring villain or major boss. This is entirely at the GM's discretion.",
      "If the GM grants an NPC LUCK, it follows the same rules: **spend before or after rolling**, **+1 per point**, **cannot add to damage or Death Saves**, and **refreshes each session**.",
      "For most encounters, enemies rely purely on their **Combat Number + 1d10** without any LUCK cushion — which is why Edgerunners have a meaningful advantage."
    ]
  },
  {
    "id": "how-field-expertise-works",
    "title": "How Field Expertise works",
    "topic": "Skills",
    "tags": [
      "field expertise",
      "tech",
      "maker",
      "repair",
      "jury rig",
      "fix"
    ],
    "icon": "🔧",
    "steps": [
      "Field Expertise is a **Maker Specialty** available to the Tech role. Each time the Tech gains a Maker rank, they allocate **1 point** to two Maker Specialties of their choice.",
      "**Passive bonus**: Add your Field Expertise rank to **any TECH Skill Check** made for non-Maker purposes (e.g., repairing items normally with Basic Tech).",
      "**Jury-Rig** (Action): As an Action, restore any item to **perfect working condition** temporarily. It lasts **10 minutes per Field Expertise rank**, then reverts to its previous state.",
      "Normal repairs use **TECH + relevant repair Skill + 1d10 vs DV**. The DV depends on the item's price category: Cheap/Everyday **DV 9**, Costly **DV 13**, Premium **DV 17**, Expensive **DV 21**, Very Expensive **DV 24**, Luxury **DV 29**.",
      "Each repair attempt takes time based on price: Cheap/Everyday **1 hour**, Costly **6 hours**, Premium **1 day**, Expensive **1 week**, Very Expensive **2 weeks**, Luxury **1 month**."
    ]
  },
  {
    "id": "how-upgrade-works",
    "title": "How Upgrade Expertise works",
    "topic": "Skills",
    "tags": [
      "upgrade",
      "tech",
      "maker",
      "improve",
      "weapon",
      "armor",
      "quality"
    ],
    "icon": "⬆️",
    "steps": [
      "Upgrade Expertise is a **Maker Specialty** for the Tech role. It permanently improves existing items.",
      "Roll **TECH + relevant repair Skill + Upgrade Expertise rank + 1d10** vs the DV for the item's price category.",
      "Possible upgrades include: **lower Humanity Loss by 1d6**, add option slots, simplify repair time, make a weapon concealable, raise weapon quality, or **add +1 SP to armor**.",
      "Weapon quality can be raised one tier (Poor to Standard, Standard to Excellent). Excellent quality grants **+1 to Attack checks**.",
      "DV by price category: Cheap/Everyday **DV 9**, Costly **DV 13**, Premium **DV 17**, Expensive **DV 21**, Very Expensive **DV 24**, Luxury/Super Luxury **DV 29**.",
      "Each upgrade requires **materials** and time matching the price category. A failed Upgrade check does **NOT** waste materials — both the materials and the item being upgraded are uninjured. You must start over from scratch but can **reuse the same materials**."
    ]
  },
  {
    "id": "how-fabrication-works",
    "title": "How Fabrication Expertise works",
    "topic": "Skills",
    "tags": [
      "fabrication",
      "tech",
      "maker",
      "craft",
      "build",
      "create",
      "materials"
    ],
    "icon": "🏭",
    "steps": [
      "Fabrication Expertise is a **Maker Specialty** for the Tech role. It lets you build items from scratch.",
      "Fabrication works for **any existing item** (standard weapons, armor, gear) without needing separate blueprints. For items that don't already exist, you must first invent them using **Invention Expertise** to create the blueprint.",
      "Materials cost **one price category lower** than the finished item. Example: building a Premium item (100eb) requires Costly materials (50eb).",
      "Roll **TECH + relevant repair Skill + Fabrication Expertise rank + 1d10** vs the DV for the item's price category.",
      "DV and time: Cheap/Everyday **DV 9 / 1 hour**, Costly **DV 13 / 6 hours**, Premium **DV 17 / 1 day**, Expensive **DV 21 / 1 week**, Very Expensive **DV 24 / 2 weeks**, Luxury **DV 29 / 1 month**.",
      "A failed Fabrication check does **NOT** waste materials — they are uninjured. You must start over from scratch but can **reuse the same materials**."
    ]
  },
  {
    "id": "how-invention-works",
    "title": "How Invention Expertise works",
    "topic": "Skills",
    "tags": [
      "invention",
      "tech",
      "maker",
      "invent",
      "new item",
      "create",
      "homebrew"
    ],
    "icon": "💡",
    "steps": [
      "Invention Expertise is a **Maker Specialty** for the Tech role. It allows creating **entirely new items or upgrades** that don't already exist.",
      "The GM sets the **Price Category** of the invention (minimum **Expensive / DV 21**). More powerful inventions cost more.",
      "Roll **TECH + relevant repair Skill + Invention Expertise rank + 1d10** vs the DV set by the GM based on the item's price category.",
      "Invention creates the **design/blueprint** — it does not build the physical item. The physical item is then built using **Fabrication Expertise** (which costs materials one price category lower). Invention itself requires time and a check.",
      "Once successfully invented, the Tech gains the **blueprint** and can use **Fabrication Expertise** to produce the actual item (or additional copies).",
      "The GM has final say on what can be invented and at what price category. Inventions that break game balance should be priced appropriately high."
    ]
  },
  {
    "id": "repairing-armor",
    "title": "Repairing ablated armor",
    "topic": "Equipment",
    "tags": [
      "repair",
      "armor",
      "ablation",
      "sp",
      "fix armor",
      "restore",
      "tech"
    ],
    "icon": "🛠️",
    "steps": [
      "When armor is hit and damage gets through, it is **ablated** — SP reduced by **1** per hit (or **2** with Armor-Piercing ammo).",
      "To repair armor, roll **TECH + Basic Tech + 1d10** vs the DV based on the armor's price category: Everyday **DV 9**, Costly **DV 13**, Premium **DV 17**, Expensive **DV 21**, Luxury **DV 29**.",
      "A successful repair restores the armor to **full SP**. A failed repair wastes materials but the armor is not further damaged.",
      "Repair requires **materials** costing based on the armor's price category and takes time: Everyday **1 hour**, Costly **6 hours**, Premium **1 day**, Expensive **1 week**.",
      "**Skin Weave** (SP 7) and **Subdermal Armor** (SP 11) self-repair at **1 SP per day** and do not require a Tech check to restore.",
      "Armor at **0 SP** still functions — it just provides no protection until repaired. It is not destroyed."
    ]
  },
  {
    "id": "repairing-cyberware",
    "title": "Repairing damaged cyberware",
    "topic": "Cyberware",
    "tags": [
      "repair",
      "cyberware",
      "cybertech",
      "ripperdoc",
      "fix",
      "broken",
      "tech"
    ],
    "icon": "🦾",
    "steps": [
      "Damaged cyberware is repaired using **TECH + Cybertech + 1d10** vs a DV based on the cyberware's price category.",
      "DV by price: Cheap/Everyday **DV 9**, Costly **DV 13**, Premium **DV 17**, Expensive **DV 21**, Very Expensive **DV 24**, Luxury **DV 29**.",
      "**External** cyberware (cyberarms, cyberlegs, external options) can often be repaired by any character with the Cybertech skill.",
      "**Internal** cyberware and **neuralware** typically require a **ripperdoc (Medtech)** to access and repair, as the Surgery skill may be needed to open the patient up.",
      "Cyberware destroyed by a Critical Injury (e.g., Dismembered Arm) needs full **replacement** — a cloned part (no HL) or new cybernetic (costs Humanity Loss as listed).",
      "Repair time follows the same price-category table: Cheap/Everyday **1 hour**, Costly **6 hours**, Premium **1 day**, Expensive **1 week**, Very Expensive **2 weeks**."
    ]
  },
  {
    "id": "programs-vs-black-ice",
    "title": "Programs vs Black ICE combat",
    "topic": "Netrunning",
    "tags": [
      "program",
      "black ice",
      "net combat",
      "rez",
      "attack",
      "interface",
      "zap"
    ],
    "icon": "🖥️",
    "steps": [
      "**Anti-Program attacks** (Sword, Banhammer): Roll **Interface + Program ATK + 1d10** vs **target's DEF + 1d10**. On hit, deal program's listed REZ damage.",
      "**Sword** deals **3d6 REZ** to Black ICE, **2d6 REZ** to Non-Black ICE. **Banhammer** deals **3d6 REZ** to Non-Black ICE, **2d6 REZ** to Black ICE.",
      "**Zap** (Interface Ability): Roll **Interface + 1d10** vs **target Program's DEF + 1d10** or enemy **Netrunner's Interface + 1d10**. Deals **1d6 damage** to REZ or directly to a Netrunner's brain HP.",
      "**Black ICE attacks you**: It rolls **ATK + 1d10** vs your **Interface + 1d10**. Anti-Personnel ICE damages your brain; Anti-Program ICE targets your active Programs' REZ.",
      "When a Program or Black ICE reaches **0 REZ**, it is **Derezzed** (non-functional but still installed). Deactivate + Activate to restore it. If a Liche or Dragon derezes a target, it is **Destroyed** permanently.",
      "Defender Programs trigger automatically: **Shield** blocks the first brain damage then derezes, **Armor** reduces brain damage by **4**, **Flak** reduces a Non-Black ICE attacker's ATK to **0**. Each is one-use per Netrun."
    ]
  },
  {
    "id": "what-is-rez",
    "title": "What is REZ?",
    "topic": "Netrunning",
    "tags": [
      "rez",
      "program hp",
      "hit points",
      "black ice hp",
      "derez",
      "destroyed"
    ],
    "icon": "📊",
    "steps": [
      "**REZ** is the hit points of Programs and Black ICE in the NET. It functions exactly like HP does for characters in meatspace.",
      "When a Program or Black ICE takes damage from an attack (Sword, Banhammer, Zap, or enemy ICE), reduce its **REZ** by the damage dealt.",
      "At **0 REZ**, the Program or Black ICE is **Derezzed** — it stops functioning but remains installed in the Cyberdeck.",
      "A Derezzed Program can be restored by using a NET Action to **Deactivate** it, then another NET Action to **Activate** it. This restores it to full REZ.",
      "A **Destroyed** Program (from Liche or Dragon effects) is permanently erased from the Cyberdeck and must be repurchased and reinstalled (**1 hour** to install).",
      "Common REZ values: Booster/Defender Programs have **7 REZ**. Black ICE ranges from **15 REZ** (Asp, Raven, Wisp) to **25 REZ** (Giant, Kraken, Dragon)."
    ]
  },
  {
    "id": "net-architecture-floors",
    "title": "NET Architecture floors explained",
    "topic": "Netrunning",
    "tags": [
      "architecture",
      "floors",
      "net",
      "password",
      "file",
      "control node",
      "black ice",
      "structure"
    ],
    "icon": "🏗️",
    "steps": [
      "A NET Architecture is a series of **floors** stacked vertically. The Netrunner enters at the top and descends deeper.",
      "Each floor contains **one thing**: a **Password** (barrier requiring Backdoor to pass), a **File** (data that can be copied or identified with Eye-Dee), a **Control Node** (lets you operate connected devices), or **Black ICE** (hostile program that attacks).",
      "Moving between floors costs **no NET Actions** — you move **1 floor per move** as part of your NET turn. Moving is free but you can only move to adjacent floors.",
      "The Netrunner can use **Pathfinder** (1 NET Action) to reveal the map — see a number of floors equal to their check result, up to the first obstruction with a DV higher than the roll.",
      "Architectures typically have **3 to 10+ floors** depending on the facility's security level. Higher-security systems have more Black ICE, harder Passwords, and deeper Control Nodes.",
      "**One Demon** may be placed per **6 floors** of Architecture. Demons operate Control Nodes to defend physical spaces and cannot be loaded into Cyberdecks."
    ]
  },
  {
    "id": "interface-abilities-list",
    "title": "All Interface abilities at a glance",
    "topic": "Netrunning",
    "tags": [
      "interface",
      "abilities",
      "netrunner",
      "backdoor",
      "cloak",
      "control",
      "zap",
      "scanner",
      "slide",
      "virus",
      "pathfinder",
      "eye-dee"
    ],
    "icon": "🔌",
    "steps": [
      "**Scanner** (Meat Action, not NET Action): Locate meatspace access points to nearby NET Architectures. Higher rolls find more access points at greater distance.",
      "**Backdoor** (NET Action): Break through **Passwords** in an Architecture. Roll **Interface + 1d10 vs Password DV**. If you know the password, you pass automatically.",
      "**Cloak** (NET Action): Hide your presence and any Virus you left. Another Netrunner must beat your Cloak check with **Pathfinder** to detect your traces.",
      "**Control** (NET Action): Operate devices connected to a **Control Node** — cameras, drones, turrets, elevators, doors. Each device operation is a **separate NET Action**.",
      "**Eye-Dee** (NET Action): Identify a File's contents and value. Some Files have a DV to identify. **Pathfinder** (NET Action): Reveal the Architecture map — see floors equal to your check.",
      "**Slide** (NET Action): Escape combat with one **Non-Demon** Black ICE. Roll **Interface + 1d10 vs Black ICE's PER + 1d10**. Success = flee to adjacent floor, ICE stops chasing. Once per Turn.",
      "**Virus** (NET Action, lowest floor only): Leave a custom Virus to perform up to **2 actions/changes**. GM sets the DV. Destroying the Virus requires beating your Virus check. **Zap** (NET Action): Deal **1d6 damage** to a Program's REZ or directly to an enemy Netrunner's brain."
    ]
  },
  {
    "id": "what-happens-flatlined-in-net",
    "title": "What happens if you flatline in the NET",
    "topic": "Netrunning",
    "tags": [
      "flatline",
      "brain death",
      "netrunner death",
      "brain damage",
      "killed in net",
      "jack out"
    ],
    "icon": "💀",
    "steps": [
      "Anti-Personnel Black ICE and Anti-Personnel Programs deal damage directly to the Netrunner's **brain** (treated as HP). This damage **bypasses all meatspace armor**.",
      "If a Netrunner's brain HP reaches **0**, they are **brain-dead** — permanent, irreversible death. The body remains alive but the mind is gone. There is no Death Save for brain death.",
      "**Unsafe Jack Out**: If forced to Jack Out while Black ICE is on your floor (via DeckKRASH or Giant/Kraken), you suffer the **effects of all Black ICE** on your current floor simultaneously before disconnecting.",
      "**Safe Jack Out**: You can voluntarily Jack Out as a **NET Action** if no Black ICE is on your current floor. This is clean and safe.",
      "Defender Programs help prevent brain death: **Shield** absorbs the first instance of brain damage then derezes, **Armor** reduces one instance by **4 damage**, **Flak** reduces a Non-Black ICE attacker's ATK to 0. Each is one-use per Netrun.",
      "**Virtuality Goggles** let you see both the NET and meatspace simultaneously. Without them, you are effectively **blind and unconscious** in meatspace while Netrunning."
    ]
  },
  {
    "id": "can-netrunner-act-in-meatspace",
    "title": "Can a Netrunner act in meatspace?",
    "topic": "Netrunning",
    "tags": [
      "netrunner",
      "meatspace",
      "meat action",
      "real world",
      "multitask",
      "distracted"
    ],
    "icon": "🧠",
    "steps": [
      "Yes — on each Turn, a Netrunner chooses **one**: take a normal **Meat Action** (attack, use skill, etc.) **OR** take **NET Actions** (2-5 depending on Interface rank). Not both.",
      "The Netrunner **always** gets their **Move Action** in meatspace regardless of whether they chose Meat or NET Actions.",
      "NET Actions per Turn by Interface rank: Rank **1-3** = **2 NET Actions**, Rank **4-6** = **3**, Rank **7-9** = **4**, Rank **10** = **5**.",
      "While jacked in, the Netrunner is splitting attention between cyberspace and reality. **Virtuality Goggles** are required to see both — without them, the Netrunner is **effectively blind** in meatspace.",
      "A Netrunner **must be within 6 m/yds** of a physical access point (cable connection) to jack into a local Architecture. Wireless Netrunning across the old NET is not possible in the Time of the Red."
    ]
  },
  {
    "id": "vehicle-weak-points-detailed",
    "title": "Targeting vehicle weak points",
    "topic": "Vehicles",
    "tags": [
      "vehicle",
      "weak point",
      "aimed shot",
      "tires",
      "engine",
      "fuel tank",
      "disable"
    ],
    "icon": "🎯",
    "steps": [
      "Targeting a vehicle weak point is an **Aimed Shot** with **-8 to the attack check**. On a hit, damage that gets through SP is multiplied by **2**.",
      "**Tires**: A successful hit that deals damage **halves the vehicle's MOVE** (round down). A second tire hit reduces MOVE to **0** (vehicle stops). Driver must make a **DV13 control check** or Lose Control.",
      "**Engine**: A successful hit that deals damage **disables the engine** — the vehicle decelerates and cannot accelerate. Driver must make a **DV13 control check** or Lose Control on subsequent turns.",
      "**Fuel Tank**: A successful hit that deals damage creates an **explosion risk** — the GM determines if the vehicle catches fire. A burning vehicle deals **2 HP/turn** to all occupants until extinguished or evacuated.",
      "If the vehicle is **stationary**, melee attacks against it **automatically hit** (no roll needed). Against a **moving vehicle**, you must beat **DV 13** to hit.",
      "Vehicle glass has **no HP** and provides **no cover** — you can target occupants directly through windows without needing an Aimed Shot."
    ]
  },
  {
    "id": "passenger-actions-in-vehicle",
    "title": "What passengers can do in a vehicle",
    "topic": "Vehicles",
    "tags": [
      "passenger",
      "vehicle",
      "shoot from car",
      "bail out",
      "actions",
      "drive-by"
    ],
    "icon": "🚙",
    "steps": [
      "Passengers can **fire ranged weapons** from a moving vehicle at a **-4 penalty** to their attack check (unstable platform).",
      "Passengers can **reload weapons**, **use skills**, and **use objects** normally — these do not require the -4 penalty.",
      "Passengers can use their **Move Action** to change seats within the vehicle or to **bail out**.",
      "**Bailing out** of a moving vehicle means jumping — the passenger takes **falling damage** based on speed. At typical combat speeds, this is treated as a fall and requires a **DV15 Athletics check** to avoid a **Broken Leg** Critical Injury.",
      "Passengers **cannot** drive the vehicle or perform Vehicle Maneuvers unless they switch to the driver seat (uses a Move Action) and then use an Action to start driving.",
      "The driver can fire an **Onboard Machine Gun** or **Onboard Flamethrower** (vehicle upgrades) but cannot fire personal weapons while driving."
    ]
  },
  {
    "id": "vehicle-destruction",
    "title": "What happens when a vehicle is destroyed",
    "topic": "Vehicles",
    "tags": [
      "vehicle",
      "destroyed",
      "sdp",
      "zero hp",
      "explosion",
      "crash",
      "fire"
    ],
    "icon": "🔥",
    "steps": [
      "When a vehicle reaches **0 SDP** (Structural Damage Points), it is **Destroyed** — it can no longer move or provide cover.",
      "All occupants of a destroyed vehicle take **6d6 damage** immediately. This damage is soaked by personal armor as normal.",
      "All occupants also suffer the **Whiplash** Critical Injury (Death Save Penalty **+1**).",
      "The destroyed vehicle **may catch fire** at the GM's discretion, dealing **2 HP/turn** to anyone inside until they exit or the fire is extinguished.",
      "Occupants must use their next Action to **exit the vehicle** (Get into Vehicle action in reverse). If they cannot exit, they continue taking fire damage each turn.",
      "Vehicle repair is possible: Minor damage **DV 9 / 3 hours**, Major damage **DV 13 / 1 day**, Destroyed **DV 17 / 1 week**. Uses **TECH + Land/Air/Sea Vehicle Tech + 1d10**."
    ]
  },
  {
    "id": "ramming-rules-detailed",
    "title": "Ramming rules in detail",
    "topic": "Vehicles",
    "tags": [
      "ram",
      "ramming",
      "crash",
      "vehicle combat",
      "collision",
      "whiplash"
    ],
    "icon": "💢",
    "steps": [
      "To ram a target, the driver makes an **opposed check**: **REF + Drive Land Vehicle + 1d10** vs the target's **REF + Drive Land Vehicle + 1d10** (if in a vehicle) or **DEX + Evasion + 1d10 vs DV 13** (if on foot).",
      "On a successful ram, **both vehicles** take **6d6 damage** to their SDP. This damage is not reduced by vehicle armor.",
      "All occupants of **both vehicles** take **4d6 damage** (soaked by personal armor) and suffer the **Whiplash** Critical Injury (Death Save Penalty +1).",
      "A pedestrian hit by a ram takes **6d6 damage** (soaked by armor). They can attempt to dodge with **DEX + Evasion + 1d10 vs DV 13**. On success, they may choose to end up **on top of** the vehicle.",
      "The **Combat Plow** vehicle upgrade negates ram damage to your own vehicle and prevents Whiplash for your occupants — the target still takes full damage.",
      "After a ram, the driver must make a **DV13 control check** or **Lose Control** — the GM determines the vehicle's trajectory and any additional collisions."
    ]
  },
  {
    "id": "how-reputation-changes",
    "title": "How Reputation changes",
    "topic": "Social",
    "tags": [
      "reputation",
      "rep",
      "fame",
      "infamy",
      "gm",
      "level",
      "social"
    ],
    "icon": "⭐",
    "steps": [
      "Reputation is **awarded by the GM** based on notable actions the character performs during play. There is no IP cost or skill check involved.",
      "Reputation ranges from **Level 0** (nobody) to **Level 10** (known worldwide). When someone new meets you, they roll **1d10** — if the result is **under** your Reputation Level, they have heard of you.",
      "A new Reputation **only replaces** the old one if the new Level is **higher**. You cannot lose Reputation levels, but your Reputation can become **negative** (known for cowardice, betrayal, failure).",
      "**Negative Reputation** works mechanically the same — people have heard of you — but they know about your **failures and disgrace** rather than your accomplishments.",
      "Reputation is used in **Facedowns**: Roll **COOL + Reputation + 1d10** vs opponent's **COOL + Reputation + 1d10**. Negative Reputation counts as a **negative number** in Facedowns.",
      "Examples of actions that earn Reputation: pulling off a legendary heist, defeating a notorious gang leader, publicly humiliating a Corp exec, saving a neighborhood from disaster."
    ]
  },
  {
    "id": "how-facedown-modifiers-work",
    "title": "Facedown modifiers and bonuses",
    "topic": "Social",
    "tags": [
      "facedown",
      "intimidation",
      "cool",
      "reputation",
      "modifiers",
      "weapon display",
      "cyberware"
    ],
    "icon": "😎",
    "steps": [
      "A Facedown is a duel of wills. Both sides roll **COOL + Reputation + 1d10** — highest total wins. Ties mean both are uncertain and nothing happens.",
      "The **loser** must choose: either **Back Down** (concede) or take **-2 to all Actions** against the winner until they defeat them at least once.",
      "**Weapon display**: Visibly drawing or brandishing a weapon can give a **situational bonus** at the GM's discretion — a heavy weapon or exotic cyberweapon is more intimidating than a knife.",
      "**Visible cyberware**: Characters with obviously dangerous cyberware (Wolvers, chrome limbs, full-body conversions) may receive a **situational bonus** from the GM based on how threatening they appear.",
      "**Negative Reputation** (earned through cowardice or betrayal) counts as a **negative modifier** — your Reputation Level is subtracted rather than added to the Facedown roll.",
      "LUCK **can** be spent on Facedown rolls since it is a standard opposed check. The GM calls for Facedowns when appropriate — typically before a fight or tense standoff."
    ]
  },
  {
    "id": "how-does-the-humanity-system-work",
    "title": "How the Humanity system works",
    "topic": "Cyberware",
    "tags": [
      "humanity",
      "empathy",
      "emp",
      "cyberpsychosis",
      "humanity loss",
      "cyberware cost"
    ],
    "icon": "🧬",
    "steps": [
      "Starting Humanity equals **EMP x 10**. For example, EMP 7 = **70 Humanity**.",
      "Each piece of cyberware costs **Humanity Loss (HL)** when installed. During character creation, HL is a preset number. After character creation, HL is rolled as **dice** (e.g., 2d6 or 3d6).",
      "Your effective **EMP** equals your current Humanity divided by 10, **rounded down**. Example: 44 Humanity = EMP **4**. Drop to 39 Humanity = EMP **3**.",
      "EMP affects all EMP-linked skills: **Conversation**, **Human Perception**, **Persuasion**, and other social skills. Losing EMP makes you worse at connecting with people.",
      "If Humanity drops **below 0**, the character enters **cyberpsychosis** and becomes an **NPC** under GM control. This is permanent unless treated with extensive Therapy.",
      "**Therapy** can restore Humanity: Standard Therapy recovers **2d6 Humanity** (DV15, costs 500eb, 1 week). Extreme Therapy recovers **4d6 Humanity** (DV17, costs 1,000eb, 1 week). Max recoverable Humanity is reduced by **2 per installed cyberware** (4 per borgware)."
    ]
  },
  {
    "id": "how-do-languages-work",
    "title": "How languages work",
    "topic": "Skills",
    "tags": [
      "language",
      "languages",
      "speak",
      "lifepath",
      "skill",
      "ip",
      "education"
    ],
    "icon": "🗣️",
    "steps": [
      "Each language is its own **Language Skill** under the Education category, linked to **INT**. You choose a specific language each time you take the skill (e.g., Language: Japanese, Language: Spanish).",
      "Your **Streetslang** (the common tongue of Night City) starts at a functional level from your Lifepath. Additional languages are also gained during **Lifepath generation** based on your cultural background.",
      "Language skill levels represent fluency: Level **1-2** = broken/tourist phrases, Level **3-4** = conversational, Level **5-6** = fluent, Level **7-8** = native speaker, Level **9-10** = literary/poetic mastery.",
      "Languages are improved with **Improvement Points (IP)** like any other skill: the cost is **current level x 20 IP** per level (Language is a standard skill, not a difficult x2 skill).",
      "The GM may call for a **Language Skill Check** (INT + Language + 1d10 vs DV) when trying to understand technical jargon, thick accents, slang, or coded speech in that language.",
      "Fixer's **Grease** ability grants bonus languages at certain ranks: Rank 3-4 grants **+1 language at Skill 4**, with more at higher ranks."
    ]
  },
  {
    "id": "how-does-ip-spending-work-detailed",
    "title": "IP spending rules in detail",
    "topic": "GM Tips",
    "tags": [
      "ip",
      "improvement points",
      "experience",
      "xp",
      "level up",
      "advancement",
      "skill cost",
      "role ability"
    ],
    "icon": "📈",
    "steps": [
      "IP is awarded by the GM after each session, typically **40-80 IP** based on group achievement and individual playstyle performance (Warrior, Socializer, Explorer, Roleplayer).",
      "**Standard Skill improvement**: costs **current level x 20 IP** per level. Level 1 costs **20 IP**, Level 2 costs **40 IP**, Level 3 costs **60 IP**, and so on up to Level 10 at **200 IP**.",
      "**Difficult (x2) Skill improvement** (Martial Arts, Autofire, Pilot Air Vehicle, etc.): costs **current level x 40 IP** per level. Level 1 costs **40 IP**, Level 5 costs **200 IP**, Level 10 costs **400 IP**.",
      "**Role Ability Rank improvement**: costs **current rank x 60 IP** per rank. Rank 1 costs **60 IP**, Rank 5 costs **300 IP**, Rank 10 costs **600 IP**.",
      "You **cannot skip levels or ranks** — each must be purchased in order. The GM should ensure characters spend some time at a new level before advancing again.",
      "**Multiclassing**: After reaching Rank 4 in your primary Role, you can buy Rank 1 in a second Role for **60 IP**. You cannot multiclass again until the new Role reaches Rank 4. You keep all features of both Roles."
    ]
  },
  {
    "id": "using-handgun-skill",
    "title": "Using the Handgun skill",
    "topic": "Skills",
    "tags": [
      "handgun",
      "pistol",
      "smg",
      "medium pistol",
      "heavy pistol",
      "very heavy pistol",
      "heavy smg",
      "shooting"
    ],
    "icon": "🔫",
    "steps": [
      "**What it is:** The skill of accurately firing handheld projectile weapons -- pistols and SMGs. Covers Medium Pistol (2d6, 12 rds, ROF 2), Heavy Pistol (3d6, 8 rds, ROF 2), Very Heavy Pistol (4d6, 8 rds, ROF 1), SMG (2d6, 30 rds, ROF 1), and Heavy SMG (3d6, 40 rds, ROF 1).",
      "**How to roll:** **REF + Handgun + 1d10** vs the DV for the weapon type at your range. Pistol DVs: 13/15/20/25/30 (0-6m through 51-100m). SMG DVs: 15/13/15/20/25 (best at 7-12m).",
      "**When to use it:** Any single-shot attack with a pistol or SMG. ROF 2 weapons (Medium and Heavy Pistol) can fire twice per Action at same or different targets, rolling separately.",
      "**When NOT to use it -- use Autofire instead:** When an SMG or Heavy SMG uses its **Autofire** or **Suppressive Fire** mode, you roll **REF + Autofire + 1d10**, not Handgun. Handgun is for single shots only. Autofire costs 10 bullets per use and has its own DV table.",
      "**When NOT to use it -- use Shoulder Arms instead:** Handgun covers **one-handed** weapons (pistols and SMGs). Shoulder Arms covers **two-handed** long guns (shotgun, assault rifle, sniper rifle). If it braces against the shoulder, it is Shoulder Arms.",
      "**Key rules:** Medium Pistol, Heavy Pistol, and SMG are **concealable**. Very Heavy Pistol and Heavy SMG are not. All are one-handed -- you can hold a second item in the other hand. Reloading takes 1 Action.",
      "**Special note:** Handgun is the most versatile ranged combat skill -- it covers five different weapons from concealed sidearms to heavy firepower. Most starting characters should invest here for basic combat capability."
    ]
  },
  {
    "id": "using-shoulder-arms",
    "title": "Using the Shoulder Arms skill",
    "topic": "Skills",
    "tags": [
      "shoulder arms",
      "shotgun",
      "assault rifle",
      "sniper rifle",
      "rifle",
      "long gun",
      "two-handed"
    ],
    "icon": "🎯",
    "steps": [
      "**What it is:** The skill of accurately firing shoulder-braced projectile weapons -- rifles and shotguns. Covers Shotgun (5d6, 4 slugs, ROF 1), Assault Rifle (5d6, 25 rds, ROF 1), and Sniper Rifle (5d6, 4 rds, ROF 1). All require two hands, all not concealable.",
      "**How to roll:** **REF + Shoulder Arms + 1d10** vs DV at range. Shotgun best at 0-6m (DV13). Assault Rifle best at 13-25m (DV13). Sniper Rifle excels at 51-100m (DV13). All cost 500eb (Expensive).",
      "**When to use it:** Any single-shot attack with a shotgun, assault rifle, or sniper rifle. Shotgun Shells hit every target in front of you within 6m that you can see (roll damage once for all targets, no Aimed Shots with shells).",
      "**When NOT to use it -- use Autofire instead:** When an Assault Rifle uses **Autofire (4)** or **Suppressive Fire** mode, roll **REF + Autofire + 1d10**, not Shoulder Arms. Shoulder Arms is for single shots only. Autofire costs 10 bullets per use.",
      "**When NOT to use it -- use Handgun instead:** Shoulder Arms covers **two-handed long guns** that brace on the shoulder. Handgun covers **one-handed pistols and SMGs**. If you can fire it with one hand, it is Handgun. If it requires two hands and a shoulder brace, it is Shoulder Arms.",
      "**Key rules:** Reloading takes 1 Action. Shotgun Shells cannot be used for Aimed Shots. Shoulder Arms weapons accept attachments: Bayonets (usable as Light Melee), Grenade Launcher Underbarrels (1 grenade), Shotgun Underbarrels (2 shots).",
      "**Special note:** All three Shoulder Arms weapons deal 5d6 damage, making them the hardest-hitting standard firearms. The tradeoff is two-handed use, no concealment, and ROF 1. Shoulder Arms is the go-to skill for dedicated combat characters."
    ]
  },
  {
    "id": "using-autofire-skill",
    "title": "Using the Autofire skill",
    "topic": "Skills",
    "tags": [
      "autofire",
      "suppressive fire",
      "full auto",
      "spray",
      "automatic",
      "smg",
      "assault rifle"
    ],
    "icon": "💥",
    "steps": [
      "**What it is:** The skill of keeping a weapon's Autofire firing mode on target through recoil -- a separate skill from Handgun and Shoulder Arms used exclusively for full-auto attacks and Suppressive Fire.",
      "**How to roll:** **REF + Autofire + 1d10** vs the **Autofire DV table** (different from single-shot DVs). Costs 10 bullets per use. SMG Autofire DVs: 20/17/20/25. Assault Rifle Autofire DVs: 22/20/17/20/25. On a hit: 2d6 x (amount you beat the DV), capped at weapon's Autofire value (3 for SMGs, 4 for ARs).",
      "**When to use it:** Any time a character fires a weapon in full-auto mode (SMG, Heavy SMG, Assault Rifle) or uses Suppressive Fire. Suppressive Fire costs 10 bullets, deals no damage, but forces everyone on foot/out of cover within 25m to pass WILL + Concentration vs your Autofire roll or take cover.",
      "**When NOT to use it -- use Handgun instead:** Autofire is ONLY for full-auto bursts and Suppressive Fire. Single shots from an SMG or Heavy SMG use **REF + Handgun**. Single shots from an Assault Rifle use **REF + Shoulder Arms**. You need both skills to use these weapons to their full potential.",
      "**When NOT to use it -- use Heavy Weapons instead:** Autofire does not apply to grenade launchers, rocket launchers, or flamethrowers, even though they are 'heavy.' Those all use the Heavy Weapons skill. Autofire only applies to weapons with the Autofire firing mode (SMGs, Heavy SMGs, Assault Rifles).",
      "**Key rules:** This is a **x2 cost skill** (Level 1 = 40 IP, Level 10 = 400 IP). Armor is ablated by 1 SP if any damage gets through (standard ablation, not extra). You need 10+ bullets in the magazine to use Autofire -- if fewer remain, you cannot use it.",
      "**Special note:** Autofire is extremely powerful at high skill levels but very expensive to level. The 2d6 x multiplier damage formula means a skilled autofire user can deal devastating damage in a single burst. The x2 IP cost is the balancing factor."
    ]
  },
  {
    "id": "using-heavy-weapons",
    "title": "Using the Heavy Weapons skill",
    "topic": "Skills",
    "tags": [
      "heavy weapons",
      "grenade launcher",
      "rocket launcher",
      "flamethrower",
      "explosive",
      "exotic"
    ],
    "icon": "💣",
    "steps": [
      "**What it is:** The skill of accurately firing extremely large projectile weapons, including grenade and rocket launchers. Covers Grenade Launcher (6d6, 2 grenades, ROF 1), Rocket Launcher (8d6, 1 rocket, ROF 1), Flamethrower, and Railgun.",
      "**How to roll:** **REF + Heavy Weapons + 1d10** vs DV at range. Grenade Launcher DVs: 16/15/15/20/20/25/30. Rocket Launcher: 17/15/15/20/20/25/30. Both are Explosive (5m radius, everyone inside takes damage). This is a **x2 cost skill**.",
      "**When to use it:** Firing grenade launchers, rocket launchers, flamethrowers, or railguns. Area denial, anti-vehicle combat, breaching fortified positions, dealing with groups of enemies.",
      "**When NOT to use it -- use Demolitions instead:** Heavy Weapons is for **firing** explosive weapons in combat. Demolitions is for **setting and defusing** stationary explosive charges (C4, mines, shaped charges). Launching a grenade = Heavy Weapons. Planting a bomb on a door = Demolitions.",
      "**When NOT to use it -- use Shoulder Arms or Handgun instead:** Heavy Weapons covers only the heaviest launchers and exotic weapons. Standard firearms (pistols, SMGs, rifles, shotguns) use Handgun or Shoulder Arms. If it fires bullets, it is probably not Heavy Weapons.",
      "**Key rules:** x2 cost skill (Level 1 = 40 IP, Level 10 = 400 IP). All require two hands, not concealable, 500eb each. Flamethrower: fires incendiary only, ignited targets take 4 HP/turn, cannot cause Critical Injuries. Railgun: ignores armor below SP 11, requires BODY 11+ unless mounted.",
      "**Special note:** Explosive ammo types include Basic, AP, Biotoxin, EMP, Flashbang, Incendiary, Poison, Sleep, Smoke, and Teargas grenades -- each with unique secondary effects. Heavy Weapons are expensive to use and expensive to skill up, but nothing else clears a room like a grenade."
    ]
  },
  {
    "id": "using-archery",
    "title": "Using the Archery skill",
    "topic": "Skills",
    "tags": [
      "archery",
      "bow",
      "crossbow",
      "arrow",
      "silent",
      "ranged"
    ],
    "icon": "🏹",
    "steps": [
      "**What it is:** The skill of accurately firing bolt- or arrow-launching projectile weapons -- bows and crossbows. Damage 4d6, two hands, not concealable, 100eb (Costly).",
      "**How to roll:** **REF + Archery + 1d10** vs DV at range. DVs: 15 (0-6m), 13 (7-12m, best), 15 (13-25m), 17 (26-50m), 20 (51-100m), 22 (101-200m). Cannot hit beyond 200m. ROF 1.",
      "**When to use it:** Silent ranged attacks, stealth operations where gunfire would compromise the mission, sustained operations where ammo cost matters, any situation where being quiet is more important than raw damage.",
      "**When NOT to use it -- use Handgun or Shoulder Arms instead:** Archery does 4d6 damage with ROF 1. Firearms generally do more damage (5d6 for rifles) or have ROF 2 (pistols). Archery's advantages are **silence** and **no reload action** -- if neither matters, firearms are strictly better. Choose Archery when stealth or economy matter; choose firearms when raw combat power matters.",
      "**When NOT to use it -- use Heavy Weapons instead:** Archery cannot do area damage or anti-vehicle work. If you need explosive ordnance, that is Heavy Weapons. Archery is a precision single-target skill.",
      "**Key rules:** Bows **never need a Reload Action** -- nocking is part of the attack, making them uniquely action-efficient. Basic arrows are **retrievable** after combat (no ongoing ammo cost). Bows are **completely silent** -- no gunshot to alert enemies. Special arrows: AP (ablate 2 SP) and Poison available.",
      "**Special note:** Archery is the premier stealth ranged weapon. A character with high Stealth + Archery can eliminate targets silently at range without ever revealing their position. The no-reload-action advantage means you never waste a turn reloading."
    ]
  },
  {
    "id": "using-martial-arts",
    "title": "Using the Martial Arts skill",
    "topic": "Skills",
    "tags": [
      "martial arts",
      "karate",
      "taekwondo",
      "judo",
      "aikido",
      "unarmed",
      "melee",
      "special moves"
    ],
    "icon": "🥋",
    "steps": [
      "**What it is:** The skill of fighting with a trained Martial Arts Form (Karate, Taekwondo, Judo, or Aikido) -- each form grants unique special moves. You must choose a specific form when you take this skill. This is a **x2 cost skill**.",
      "**How to roll:** **DEX + Martial Arts + 1d10** vs defender's **DEX + Evasion + 1d10**. ROF 2. Damage based on BODY: 1d6 (BODY 4-), 2d6 (BODY 5-6), 3d6 (BODY 7-10), 4d6 (BODY 11+). MA damage **halves the defender's armor SP** (round up -- SP 11 counts as SP 6).",
      "**When to use it:** Trained unarmed combat, using special form moves (Bone Breaking Strike, Flying Kick, Counter Throw, etc.), any situation where armor-halving unarmed damage is needed.",
      "**When NOT to use it -- use Brawling instead:** Martial Arts requires at least **1 point** invested and is x2 cost. Brawling is the **untrained** alternative -- no special moves, no armor halving, but it is a Basic Skill everyone has. If a character has no Martial Arts training, they must use Brawling. Brawling does NOT halve armor; MA does. This makes MA far superior against armored targets.",
      "**When NOT to use it -- use Melee Weapon instead:** Martial Arts is **unarmed** fighting. If the character is wielding a melee weapon (knife, sword, bat), use DEX + Melee Weapon. Melee weapons have their own damage dice independent of BODY, while MA damage scales with BODY.",
      "**Forms:** **Karate**: Armor Breaking Combo (DV15, ablate 2 extra SP), Bone Breaking Strike (WILL 8+, inflicts Broken Ribs). **Taekwondo**: Pressure Point Strike (WILL 8+, inflicts Spinal Injury), Flying Kick (MOVE 8+, prone + vehicle dismount). **Judo**: Counter Throw (DV15, unavoidable throw), Grab Escape (DV15, break free + Broken Arm). **Aikido**: Disarming Combo (DV15, disarm), Iron Grip (DV15, -2 escape + no ranged).",
      "**Key rules:** All forms share **Recovery** (DV13 to stand from Prone without spending an Action). Special Moves cannot be used for Aimed Shots. x2 cost skill (Level 1 = 40 IP, Level 10 = 400 IP). You can learn multiple forms separately."
    ]
  },
  {
    "id": "using-drive-land-vehicle",
    "title": "Using Drive Land Vehicle",
    "topic": "Skills",
    "tags": [
      "drive",
      "driving",
      "car",
      "vehicle",
      "chase",
      "maneuver",
      "groundcar",
      "motorcycle"
    ],
    "icon": "🚗",
    "steps": [
      "**What it is:** The skill of driving and maneuvering land vehicles -- cars, motorcycles, trucks, APCs, and any ground-based vehicle.",
      "**How to roll:** **REF + Drive Land Vehicle + 1d10** vs DV. If REF + skill > 9, basic driving needs no check. Otherwise DV10 each turn or lose control. Maneuvers: Swerve DV13, Sharp Turn DV13, Emergency Stop DV13, Bootleg Turn DV17, Jump DV17. Each maneuver requires Action + Move Action.",
      "**When to use it:** Driving in combat, performing vehicle maneuvers, chases, evasive driving, any time vehicle control is in question. Starting a vehicle takes an Action (after an Action to get in).",
      "**When NOT to use it -- use Land Vehicle Tech instead:** Drive Land Vehicle is for **operating** the vehicle (driving, maneuvers). Land Vehicle Tech is for **repairing and maintaining** it. Performing a bootleg turn = Drive Land Vehicle. Fixing a busted engine = Land Vehicle Tech.",
      "**When NOT to use it -- use Pilot Air/Sea Vehicle instead:** Drive Land Vehicle covers **ground vehicles** only. Air vehicles use **Pilot Air Vehicle** (x2 cost). Sea vehicles use **Pilot Sea Vehicle**. Each vehicle domain has its own control skill.",
      "**Key rules:** Failed maneuver = Lose Control (GM decides movement). Ramming: 6d6 damage to both vehicle and target, everyone suffers Whiplash. Driver goes to top of Initiative; vehicle MOVE replaces personal MOVE; no Run Action. Glass provides no cover and no HP -- occupants are targetable through windows.",
      "**Special note:** **Nomads** add their Moto Rank to all Drive Land Vehicle checks, making them far superior drivers. A Nomad with Moto 4 + Drive Land Vehicle 6 already exceeds the DV10 threshold for basic driving without rolling."
    ]
  },
  {
    "id": "using-pilot-air-vehicle",
    "title": "Using Pilot Air Vehicle",
    "topic": "Skills",
    "tags": [
      "pilot",
      "flying",
      "av-4",
      "gyrocopter",
      "helicopter",
      "aerozep",
      "air vehicle"
    ],
    "icon": "🚁",
    "steps": [
      "**What it is:** The skill of piloting and maneuvering air vehicles -- gyrocopters, helicopters, AVs, and aerozeps. This is a **x2 cost skill** (double IP to level).",
      "**How to roll:** **REF + Pilot Air Vehicle + 1d10** vs DV. If REF + skill > 9, level flight needs no check. Otherwise DV10 each turn or lose control (catastrophic in the air). Landing DV13, Aerobatic Maneuver DV17. Standard maneuvers (Swerve, Sharp Turn, Emergency Stop all DV13) also apply.",
      "**When to use it:** Piloting any air vehicle in combat or tricky conditions, performing aerial maneuvers, landing, takeoff, air chases.",
      "**When NOT to use it -- use Drive Land Vehicle instead:** Pilot Air Vehicle is for **air vehicles** only (AVs, gyrocopters, helicopters). Ground vehicles use **Drive Land Vehicle**. Sea vehicles use **Pilot Sea Vehicle**. Each vehicle domain has its own control skill.",
      "**When NOT to use it -- use Air Vehicle Tech instead:** Pilot Air Vehicle is for **flying** the vehicle. Air Vehicle Tech is for **repairing and maintaining** it. Performing an aerobatic maneuver = Pilot Air Vehicle. Fixing a damaged rotor = Air Vehicle Tech.",
      "**Key rules:** x2 cost skill (Level 1 = 40 IP, Level 10 = 400 IP). Nomads add **Moto Rank** to checks. Access is rank-dependent: Gyrocopter at Rank 1-4, Helicopter at Rank 5-6, AV-4 at Rank 7-8, AV-9 at Rank 9-10. Air vehicles are hard to dodge on the ground (DEX + Evasion vs DV13).",
      "**Special note:** Air vehicles provide massive tactical advantages -- altitude makes melee impossible, passengers can fire down normally, and air superiority dominates ground engagements. The x2 IP cost reflects how powerful air mobility is."
    ]
  },
  {
    "id": "using-conceal-reveal",
    "title": "Using Conceal/Reveal Object",
    "topic": "Skills",
    "tags": [
      "conceal",
      "reveal",
      "hide",
      "hidden",
      "search",
      "find",
      "object",
      "weapon"
    ],
    "icon": "🔍",
    "steps": [
      "**What it is:** The skill of hiding objects and finding objects that have been hidden -- including concealing weapons under clothing and detecting concealed weapons.",
      "**How to roll:** **INT + Conceal/Reveal Object + 1d10** vs DV (to hide) or opposed vs hider's **INT + Conceal/Reveal + 1d10** (to find). DV varies by item size and concealment difficulty. Searching takes 1 Action in combat, 5-10 minutes outside.",
      "**When to use it:** Hiding a weapon on your person, concealing evidence at a scene, searching someone for hidden items (pat-down), finding objects hidden in a location, detecting concealed weapons at a security checkpoint.",
      "**When NOT to use it -- use Stealth instead:** Conceal/Reveal is for hiding **objects** (weapons, evidence, items). Stealth is for hiding **yourself** (your body, your movement). Hiding a gun under your jacket = Conceal/Reveal. Hiding behind a dumpster = Stealth. The two skills serve completely different purposes.",
      "**When NOT to use it -- use Perception instead:** Conceal/Reveal detects **deliberately hidden objects**. Perception notices **environmental details and hidden people**. Finding a gun taped under a table = Conceal/Reveal. Spotting a tripwire across a doorway = Perception. Finding a person hiding = Perception (vs their Stealth).",
      "**Key rules:** Only weapons marked **Concealable** can be hidden on your person: Medium Pistol, Heavy Pistol, SMG, Light Melee, Medium Melee. VHP, Heavy SMG, Shotgun, AR, Sniper, and Heavy Weapons are NEVER concealable. Cyberware: **Image Enhance** grants +2 to Conceal/Reveal checks.",
      "**Special note:** A Tech with **Upgrade Expertise** can modify a non-concealable weapon to become concealable. Cyberware weapons (Popup, Big Knucks, Wolvers) are inherently concealed inside the body and need no check."
    ]
  },
  {
    "id": "using-forgery",
    "title": "Using Forgery",
    "topic": "Skills",
    "tags": [
      "forgery",
      "fake",
      "document",
      "id",
      "counterfeit",
      "papers",
      "detect"
    ],
    "icon": "📝",
    "steps": [
      "**What it is:** The skill of creating and detecting false documents and identification -- fake IDs, permits, corporate badges, forged letters, and counterfeit credentials.",
      "**How to roll:** **TECH + Forgery + 1d10** vs DV to create. Simple document DV13, official ID/corporate badge DV15-17, government-level secure DV21+. Detection: opposed vs examiner's **INT + Forgery + 1d10** (trained) or **INT + Perception + 1d10** (untrained).",
      "**When to use it:** Creating fake IDs, forging permits and documents, making counterfeit corporate badges, detecting forged documents presented to you, creating false evidence.",
      "**When NOT to use it -- use Acting instead:** Forgery creates the **physical document or credential**. Acting lets you **impersonate the person** the document belongs to. Often used together: Forgery to create the fake badge, Acting to play the role of the person whose badge it is.",
      "**When NOT to use it -- use Electronics/Security Tech instead:** In the Time of the Red, most IDs are **Agent-based digital credentials**. Forgery creates the physical/visual component, but replicating the digital signature may also require an Electronics/Security Tech check. Complex forgeries may need both skills.",
      "**Key rules:** Quick forgery takes ~1 hour, quality work 4-8 hours, masterwork days. Rushing imposes -2 to -4 penalty. Working without proper tools imposes -2 penalty. Materials needed: blank stock, holographic overlays, chip writers for secure docs.",
      "**Special note:** Forgery is a TECH skill, not an INT skill -- it is about the technical craft of creating convincing fakes, not just knowing what a real document looks like. A complementary Library Search or Education check can help determine what details the forgery needs."
    ]
  },
  {
    "id": "using-library-search",
    "title": "Using Library Search",
    "topic": "Skills",
    "tags": [
      "library search",
      "research",
      "data pool",
      "information",
      "database",
      "knowledge"
    ],
    "icon": "📚",
    "steps": [
      "**What it is:** The skill of using databases, Data Pools, libraries, and other compiled information sources to find facts -- your research and information retrieval skill.",
      "**How to roll:** **INT + Library Search + 1d10** vs DV. Common knowledge DV9, public but specific DV13, restricted/specialized DV15, obscure/buried DV17, secret/classified DV21+.",
      "**When to use it:** Researching a target before a mission, finding public records, looking up corporate information, accessing the Data Pool for specific facts, checking news archives, finding blueprints or technical data.",
      "**When NOT to use it -- use Education instead:** Library Search is for **actively looking things up** in databases and archives. Education is for **things you already know** from your general education. If the character has to sit down and research it, that is Library Search. If it is something they would recall from school or common knowledge, that is Education.",
      "**When NOT to use it -- use Local Expert instead:** Library Search finds information from **recorded sources** (databases, archives). Local Expert provides **personal knowledge** of a specific neighborhood (who runs it, hidden locations, local customs). You can Library Search for a gang's public history, but you need Local Expert to know where their current hideout is.",
      "**Key rules:** The Data Pool is a patchwork of local city networks (not a global internet). Data Terms are public access points (free for basic lookups, 5-20eb for extended research). Each search takes 10 min to 1 hour. Taking 4x longer grants +1 bonus. A successful Library Search can grant +1 as a complementary bonus to subsequent related checks.",
      "**Special note:** Library Search is one of the best complementary skills in the game. Researching a target before Interrogation, a building before infiltration, or a corp before negotiation can provide +1 bonuses to the primary skill check."
    ]
  },
  {
    "id": "using-local-expert",
    "title": "Using Local Expert",
    "topic": "Skills",
    "tags": [
      "local expert",
      "neighborhood",
      "contacts",
      "area knowledge",
      "streetwise",
      "location"
    ],
    "icon": "🏙",
    "steps": [
      "**What it is:** The skill of knowing a specific area well and knowing the agendas of its various factions, both political and criminal. You choose a specific location (no larger than a single neighborhood) each time you increase this skill.",
      "**How to roll:** **INT + Local Expert + 1d10** vs DV. Common neighborhood info DV9, insider knowledge DV13, secret DV17, deeply hidden DV21. You can have multiple Local Expert skills for different areas.",
      "**When to use it:** Finding people, places, and services in a specific neighborhood. Need a ripperdoc in Little China? A black market in the Combat Zone? A safe house in Heywood? Local Expert tells you if it exists there and where to find it.",
      "**When NOT to use it -- use Streetwise instead:** Local Expert is **specific to one neighborhood** (Little China, Heywood, etc.). Streetwise is **general street knowledge** that applies anywhere -- criminal culture, gang dynamics, underworld navigation. 'Where is the best ripperdoc in Little China?' = Local Expert: Little China. 'How do I approach a black market dealer without getting shot?' = Streetwise.",
      "**When NOT to use it -- use Library Search instead:** Local Expert provides **personal knowledge** from living in/knowing an area. Library Search finds information from **recorded sources** (Data Pool, archives). You know the local gang's hideout from Local Expert; you find their corporate connections through Library Search.",
      "**Key rules:** All characters start with **Local Expert: Your Home** during Character Creation. Fixers gain additional areas through their Grease ability. Pairs powerfully with Streetwise and Library Search for complementary bonuses.",
      "**Special note:** Local Expert is one of the most underrated skills for GMs to call for. Before any job in a specific neighborhood, check if anyone in the party has Local Expert for that area -- it can provide critical advance intelligence."
    ]
  },
  {
    "id": "using-criminology",
    "title": "Using Criminology",
    "topic": "Skills",
    "tags": [
      "criminology",
      "forensics",
      "investigation",
      "crime scene",
      "evidence",
      "detective"
    ],
    "icon": "🔬",
    "steps": [
      "**What it is:** The skill of looking for clues by dusting for fingerprints, doing ballistic tests, examining evidence, and searching through police records and files -- crime-scene investigation and forensic analysis.",
      "**How to roll:** **INT + Criminology + 1d10** vs DV. Obvious evidence DV9, typical crime scene DV13, professionally cleaned DV15, expert concealment DV17, near-perfect cover-up DV21+.",
      "**When to use it:** Examining crime scenes, analyzing evidence (cause of death, time, number of participants, weapons used, direction of escape), reading forensic data, working police records, understanding criminal patterns and MOs.",
      "**When NOT to use it -- use Deduction instead:** Criminology is **crime-scene specific** -- examining physical evidence, forensic analysis, police records. Deduction is **general logical reasoning** -- connecting disparate clues, solving puzzles, predicting behavior. Analyzing blood spatter = Criminology. Figuring out the killer's motive from a set of clues = Deduction.",
      "**When NOT to use it -- use Perception instead:** Criminology **analyzes** evidence that has been found. Perception **finds** the evidence in the first place. Use Perception to spot the shell casing in the corner, then Criminology to determine the caliber and firing angle. Criminology can provide +1 complementary bonus to subsequent Perception or Tracking checks at the same scene.",
      "**Key rules:** Processing a crime scene takes 30 minutes to several hours. Rushing imposes penalties. Proper forensic tools avoid the -2 no-tools penalty. Lawman Backup at Rank 10 provides agents with forensic support.",
      "**Special note:** Criminology is invaluable for investigation-focused campaigns. A character with high Criminology turns every crime scene into a wealth of information. Pairs excellently with Library Search (checking records) and Tracking (following trails from the scene)."
    ]
  },
  {
    "id": "using-wardrobe-style",
    "title": "Using Wardrobe & Style",
    "topic": "Skills",
    "tags": [
      "wardrobe",
      "style",
      "fashion",
      "clothes",
      "appearance",
      "social",
      "impression"
    ],
    "icon": "👔",
    "steps": [
      "**What it is:** The skill of knowing the right clothes to wear and when to wear them -- dressing appropriately or impressively for any social situation.",
      "**How to roll:** **COOL + Wardrobe & Style + 1d10** vs DV. Fit in at a street bar DV9, impress at a club DV13, corporate function DV15, high-society gala DV17, set a new trend DV21.",
      "**When to use it:** Dressing for a social occasion, making a first impression, fitting in at a location above or below your station, looking the part for an infiltration, impressing contacts and fixers.",
      "**When NOT to use it -- use Personal Grooming instead:** Wardrobe & Style is about **clothes and accessories** -- what you wear. Personal Grooming is about **your body and presentation** -- hair, skin, hygiene, makeup. Together they define your complete visual identity. Picking the right outfit = Wardrobe & Style. Having the right haircut and clean nails for the meeting = Personal Grooming.",
      "**When NOT to use it -- use Acting instead:** Wardrobe & Style makes you **look right**. Acting makes you **behave right**. Use Wardrobe & Style to dress like a corporate exec, then Acting to convincingly play the role. Looking the part is step one; performing the role is step two.",
      "**Key rules:** A successful check grants **+1 complementary bonus** to subsequent social checks (Persuasion, Acting, Personal Grooming) when first impressions matter. Cyberware: **3+ Light Tattoos** grants +2 to Wardrobe & Style. COOL-linked, unaffected by Humanity loss.",
      "**Special note:** In Cyberpunk Red, style matters -- 'style over substance' is a core tenet. Looking the part can be the difference between getting past a bouncer, impressing a fixer, or being ignored. This skill is more useful than it first appears."
    ]
  },
  {
    "id": "how-do-interrogations-work",
    "title": "How do interrogations work",
    "topic": "Social",
    "tags": [
      "interrogation",
      "interrogate",
      "question",
      "extract",
      "information",
      "torture",
      "resist"
    ],
    "icon": "💬",
    "steps": [
      "Interrogation is an **opposed check**: roll **COOL + Interrogation + 1d10** vs the target's **WILL + Resist Torture/Drugs + 1d10**. The interrogator is trying to extract information; the target is resisting.",
      "**Cyberware advantage**: a **Voice Stress Analyzer** (Mall install, 100eb) grants **+2 to Human Perception and Interrogation** checks, helping detect lies and apply pressure effectively.",
      "**Time pressure** matters. A quick field interrogation might be a single opposed roll. Extended interrogation over hours or days can involve **multiple rolls**, with cumulative fatigue penalties on the target.",
      "**Torture** increases pressure but has diminishing returns. A tortured target may say anything to stop the pain. The GM may rule that after prolonged torture, information becomes **unreliable** -- the target tells you what you want to hear, not the truth.",
      "**Drugs** can assist: administering a drug to lower resistance (the target must resist with **WILL + Resist Torture/Drugs**). Failure means the drug takes full effect. **Rapidetox** can counter drug effects if administered in time.",
      "The defender can spend **LUCK** on their Resist Torture/Drugs roll just like any other check. A high-WILL character with invested skill points is extremely difficult to crack."
    ]
  },
  {
    "id": "concealing-a-weapon",
    "title": "Concealing a weapon on your person",
    "topic": "Equipment",
    "tags": [
      "conceal",
      "weapon",
      "hidden",
      "carry",
      "pistol",
      "smg",
      "melee",
      "pat down"
    ],
    "icon": "🔒",
    "steps": [
      "Only weapons marked **Concealable** can be hidden on your person: **Medium Pistol**, **Heavy Pistol**, **SMG**, **Light Melee Weapon**, and **Medium Melee Weapon**.",
      "To conceal: roll **INT + Conceal/Reveal Object + 1d10** vs a GM-set DV. Typical DV: **13** for loose clothing, **15** for fitted clothes, **17** for minimal clothing.",
      "To detect: another character rolls **INT + Perception + 1d10** (casual observation) or **INT + Conceal/Reveal + 1d10** (active search/pat-down). This is opposed by the original concealment roll.",
      "**Not concealable** (ever): Very Heavy Pistol, Heavy SMG, Shotgun, Assault Rifle, Sniper Rifle, all Heavy Weapons, Very Heavy Melee Weapons, and any two-handed weapon.",
      "A **Tech with Upgrade Expertise** can modify a non-concealable weapon to become concealable using the **Make Weapon Concealable** upgrade. This requires a TECH + appropriate repair skill + Upgrade Rank + 1d10 vs DV based on weapon cost.",
      "**Cyberware weapons** (Popup weapons, Big Knucks, Wolvers, etc.) are inherently concealed inside the body and require no check to hide. They are revealed when deployed."
    ]
  },
  {
    "id": "escaping-restraints",
    "title": "Escaping restraints",
    "topic": "Combat",
    "tags": [
      "escape",
      "restraints",
      "handcuffs",
      "zip ties",
      "bindings",
      "tied up",
      "contortionist"
    ],
    "icon": "⛓",
    "steps": [
      "To escape physical restraints, roll **DEX + Contortionist + 1d10** vs a DV based on restraint type. **Contortionist** is the primary skill for escaping bindings, fitting through tight spaces, and dislocating joints.",
      "Typical DVs: **rope or duct tape DV13**, **zip ties DV15**, **handcuffs DV17**, **professional restraints or chains DV21**. High-quality corporate restraints may be DV24+.",
      "**Athletics** (DEX) can substitute for brute-force escapes -- breaking the restraints rather than slipping them. DV is typically **higher** (add +2 to +4) and may require **BODY 7+** for metal restraints.",
      "Each escape attempt takes approximately **1 minute** outside combat, or **1 full Action** during combat. Failed attempts may alert captors. The GM may limit the number of attempts before the character is too fatigued.",
      "**Cyberware advantage**: characters with cyberlimbs may have enhanced BODY for breaking restraints, or specific options (like a **Tool Hand** or **hidden compartment**) that provide an edge.",
      "Being **restrained** in combat means you **cannot Move or take Actions requiring hands**. You can still speak, use purely mental abilities, and attempt to escape on your turn."
    ]
  },
  {
    "id": "seriously-wounded-penalty",
    "title": "The Seriously Wounded penalty",
    "topic": "Medical",
    "tags": [
      "seriously wounded",
      "wound state",
      "penalty",
      "half hp",
      "threshold",
      "pain",
      "actions"
    ],
    "icon": "🩹",
    "steps": [
      "When your HP drops to or below your **Seriously Wounded Threshold** (half your max HP, rounded up), you enter the **Seriously Wounded** wound state and take a **-2 penalty to ALL actions**.",
      "This penalty applies to **everything**: attack rolls, skill checks, Evasion, Initiative (if re-rolled), and any other roll you make. It stacks with other penalties (darkness -1, stress -2, etc.).",
      "You **can still fight and act normally** -- you are not incapacitated. You just do everything worse. Many combats are decided by who crosses this threshold first.",
      "**Ignoring the penalty**: **Black Lace** (street drug, 50eb) grants immunity to Seriously Wounded penalties for 24 hours as its Primary Effect, but risks a devastating Secondary Effect (addiction). **Stim** (Medtech pharmaceutical) removes the penalty for 1 hour, once per day.",
      "**Pain Editor** (Nervous System cyberware, Clinic install, 1,000eb) lets you turn off pain entirely, ignoring the Seriously Wounded penalty permanently while active. However, you also cannot feel injuries, which the GM may use against you.",
      "Healing above the threshold removes the penalty immediately. **Speedheal** (Medtech pharmaceutical) heals **BODY + WILL** HP instantly and may push you back above the threshold in one Action."
    ]
  },
  {
    "id": "tailing-someone",
    "title": "Tailing someone without being noticed",
    "topic": "Environment",
    "tags": [
      "tail",
      "follow",
      "stealth",
      "surveillance",
      "tracking",
      "shadowing",
      "perception"
    ],
    "icon": "👤",
    "steps": [
      "On foot, tailing is an **opposed check**: your **DEX + Stealth + 1d10** vs the target's **INT + Perception + 1d10**. The GM rolls periodically (every few blocks or whenever the target has reason to check).",
      "**Distance matters**: staying far back gives **+1 to +2 to Stealth** but risks losing the target. Staying close gives **-1 to -2 to Stealth** but the target is easier to track.",
      "**Crowded areas** grant a **+1 to +2 bonus** to the tail's Stealth check -- more people to blend into. Empty streets impose **-1 to -2** as there is nowhere to hide.",
      "**In a vehicle**, use **REF + Drive Land Vehicle + 1d10** (to keep up) and the target rolls **INT + Perception + 1d10** to notice they are being followed. Staying 2-3 cars back is standard technique.",
      "If the target **spots you**, they can attempt to lose you: opposed **DEX + Athletics + 1d10** (on foot) or **REF + Drive Land Vehicle + 1d10** (in vehicles) for a chase sequence.",
      "**Complementary skills**: a successful **INT + Local Expert + 1d10** check before the tail can grant **+1** -- you know shortcuts, chokepoints, and alternate routes in the area."
    ]
  },
  {
    "id": "stakeout-mechanics",
    "title": "Running a stakeout",
    "topic": "Environment",
    "tags": [
      "stakeout",
      "observation",
      "watch",
      "surveillance",
      "perception",
      "patience",
      "waiting"
    ],
    "icon": "👁",
    "steps": [
      "A stakeout uses **INT + Perception + 1d10** to observe a location over time. The GM sets a DV based on what you are looking for: **DV9** (obvious activity), **DV13** (normal patterns), **DV17** (subtle details), **DV21** (hidden operations).",
      "**Concentration** (WILL) is critical for long stakeouts. After each hour of observation, the GM may call for a **WILL + Concentration + 1d10 vs DV13** check to stay focused. Failure means you miss events during that period.",
      "**Fatigue** builds over time. After **8+ hours**, checks take a cumulative **-1 penalty** per additional 2 hours. After 16+ hours without rest, you are **Exhausted** (-4 to all checks).",
      "Useful gear: **Binoculars** or **Teleoptics cybereye** for distance observation. **Image Enhance cybereyes** grant **+2 to Perception** checks. A recording device captures evidence for later review.",
      "**Multiple watchers** can rotate shifts to avoid fatigue. If one character spots something with a successful Perception roll, they can alert the others -- no additional check needed.",
      "Detect patterns over time: the GM may grant **automatic information** after sufficient observation (e.g., \"after 3 days you notice the guards change shifts at 2 AM\") without requiring a roll."
    ]
  },
  {
    "id": "hiring-muscle",
    "title": "Hiring muscle (bodyguards and soldiers)",
    "topic": "Social",
    "tags": [
      "hire",
      "muscle",
      "bodyguard",
      "solo",
      "mercenary",
      "fixer",
      "cost",
      "loyalty"
    ],
    "icon": "💪",
    "steps": [
      "Finding hired muscle typically requires a **Fixer**. Roll **COOL + Trading + Operator Rank + 1d10** or use the Fixer's contact network. Without a Fixer, use **INT + Local Expert + 1d10 vs DV15** to find freelance muscle in your area.",
      "Typical rates for hired Solos: **100-500eb per day** depending on skill level and danger. Low-end boosterganger: 100eb/day. Competent street solo: 200-300eb/day. Elite professional: 500eb+/day.",
      "Hired muscle **follows instructions** but is not suicidally loyal. If the job turns out to be far more dangerous than advertised, they may demand hazard pay, refuse specific tasks, or abandon the contract entirely.",
      "**Loyalty** is not formally tracked for hired NPCs (unlike Exec Team Members). The GM adjudicates based on pay, treatment, and how badly the job goes. Underpaying or lying about the job's danger causes problems.",
      "For **ongoing protection**, a dedicated bodyguard costs **1,000-5,000eb per month** plus expenses. This is a significant lifestyle cost but provides reliable security.",
      "**Exec Team Members** are the formalized version of this -- loyal employees with tracked Loyalty scores, specific skill sets, and clear rules for what they will and will not do. Only Execs get this structured option."
    ]
  },
  {
    "id": "setting-up-safehouse",
    "title": "Setting up a safehouse",
    "topic": "Lifestyle",
    "tags": [
      "safehouse",
      "hideout",
      "security",
      "rent",
      "locks",
      "alarms",
      "safe",
      "housing"
    ],
    "icon": "🏠",
    "steps": [
      "A safehouse is a secondary residence used for hiding, storing gear, or laying low. Rent costs: **Cargo Container** (free, no security), **Cube Hotel** (100eb/month), **Conapt** (1,000eb/month), **Beaverville House** (10,000eb/month).",
      "**Locks** are the first line of security. Standard lock **DV13** to pick. Quality lock **DV15-17**. High-security lock **DV21**. Electronic locks can be hacked via **Interface** or bypassed with **Electronics/Security Tech**.",
      "**Alarms** alert you to intrusion. Basic alarm **DV13** to bypass with Electronics/Security Tech. Quality system **DV15-17**. Corporate-grade system **DV21+**. Alarms can notify your Agent or trigger other defenses.",
      "**Location matters by zone**: safe corporate zones are expensive but rarely raided; Combat Zone locations are cheap (even free in squats) but attract attention and may be contested by gangs.",
      "Useful additions: **hidden compartment** for stashing weapons/contraband (Conceal/Reveal DV to find), **medical supplies** for patching up, **spare clothes and identity documents**, **non-perishable food**.",
      "Keep the safehouse **compartmentalized** -- ideally only you (and maybe one trusted ally) know the location. If a team member is captured and interrogated, they cannot reveal what they do not know."
    ]
  },
  {
    "id": "car-crash-rules",
    "title": "What happens in a car crash",
    "topic": "Vehicles",
    "tags": [
      "crash",
      "car",
      "accident",
      "ram",
      "collision",
      "vehicle damage",
      "whiplash",
      "lose control"
    ],
    "icon": "💥",
    "steps": [
      "A crash occurs when a driver **fails a maneuver check** (REF + Drive Land Vehicle + 1d10 vs DV) and the vehicle hits something, or when a driver deliberately **Rams** a target.",
      "On a **Ram or crash**, both the vehicle and the target take **6d6 damage**. For vehicles, this is applied to their **SDP** (Structural Damage Points). At 0 SDP the vehicle is **Destroyed**.",
      "All **occupants** of a crashing vehicle suffer the **Whiplash** Critical Injury automatically. This is a Critical Injury to the Body -- no damage dice need to show sixes. Quick Fix: Paramedic DV13.",
      "Vehicle armor (**Armored Chassis SP13**) reduces incoming damage to the vehicle. Occupant armor reduces Whiplash bonus damage (5 HP direct) but does not prevent the Critical Injury itself.",
      "If the driver **Loses Control** (failed maneuver), the GM determines where the vehicle ends up. It may hit a wall, another vehicle, pedestrians, or careen off the road. Each collision is a separate Ram.",
      "**Dodging a vehicle** on foot: **DEX + Evasion + 1d10 vs DV13**. On success, you avoid being hit. You can even choose to end up **on top of the vehicle** if you succeed."
    ]
  },
  {
    "id": "what-happens-when-seriously-wounded",
    "title": "What happens when you cross the Seriously Wounded threshold",
    "topic": "Medical",
    "tags": [
      "seriously wounded",
      "threshold",
      "half hp",
      "wound state",
      "critical injury",
      "penalty",
      "combat"
    ],
    "icon": "❤",
    "steps": [
      "Your **Seriously Wounded Threshold** is half your maximum HP, **rounded up**. For example, a character with 40 max HP crosses the threshold at 20 HP or below.",
      "The moment you drop to or below this threshold, you enter the **Seriously Wounded** wound state. You immediately take a **-2 penalty to ALL actions** -- attacks, skills, evasion, everything.",
      "A **Critical Injury** is triggered when two or more damage dice come up **6** on a single attack, regardless of whether the damage got through armor. This can happen on the same hit that crosses the Seriously Wounded threshold.",
      "You **can still fight, move, and act normally** -- you are not incapacitated. The -2 penalty is painful but manageable. Many characters push through it to finish a fight.",
      "**Ways to remove the penalty**: heal above the threshold (First Aid, Paramedic, Speedheal), use **Stim** (Medtech pharma, 1 hour), take **Black Lace** (street drug, 24 hours but risk addiction), or have a **Pain Editor** (cyberware, permanent while active).",
      "If you drop to **0 HP**, you skip Seriously Wounded and go straight to **Mortally Wounded**: unconscious, Death Saves each turn. Stabilization (First Aid or Paramedic DV15) brings you to 1 HP in the Seriously Wounded state.",
      "**Tracking matters**: keep a clear HP tracker. The difference between 21 HP and 20 HP (on a 40 HP character) is the difference between full effectiveness and a -2 to everything."
    ]
  },
  {
    "id": "my-nomad-calls-family",
    "title": "My Nomad calls Family for a vehicle",
    "topic": "Roles",
    "tags": [
      "nomad",
      "moto",
      "family",
      "motorpool",
      "vehicle",
      "call",
      "role ability"
    ],
    "icon": "🚐",
    "steps": [
      "The Nomad's **Moto** ability gives access to the **Family Motorpool**. Only **one Family vehicle** can be out at a time (unless Rank 10). Swapping vehicles requires waiting until the **next morning**.",
      "Vehicles available by Rank: **Rank 1-4**: Compact Groundcar, Gyrocopter, Jetski, Roadbike. **Rank 5-6**: adds Helicopter, High Performance Groundcar, Speedboat. **Rank 7-8**: adds AV-4, Cabin Cruiser, Superbike. **Rank 9-10**: adds Aerozep, AV-9, Super Groundcar, Yacht.",
      "Each time the Nomad **increases Moto Rank**, they either add a **new stock vehicle** of that Rank or lower, or **upgrade an existing vehicle** with a vehicle upgrade (Armored Chassis, NOS, Weapons, etc.).",
      "**Vehicle Familiarity**: the Nomad adds their **Moto Rank to all vehicle skill checks** -- Drive Land Vehicle, Pilot Air Vehicle, Pilot Sea Vehicle, and all vehicle Tech skills. This is a massive bonus.",
      "If a Family vehicle is **destroyed**, the Family repairs it in **1 week for 500eb**. This is remarkably cheap -- a Compact Groundcar is normally worth 30,000eb.",
      "At **Rank 10**, the Nomad is promoted to **Family leadership** and can have **all vehicles out at once**. This effectively gives the entire party a fleet of vehicles for operations."
    ]
  },
  {
    "id": "my-media-publishes-story",
    "title": "My Media publishes a story",
    "topic": "Roles",
    "tags": [
      "media",
      "credibility",
      "story",
      "publish",
      "audience",
      "impact",
      "news",
      "reporter"
    ],
    "icon": "📰",
    "steps": [
      "The Media's **Credibility** ability determines four things: **Audience** (who sees it), **Access/Sources** (who they can reach), **Believability** (is it trusted), and **Impact** (what changes).",
      "**Audience by Rank**: Rank 1-2 (immediate neighborhood), Rank 3-4 (well-known local contributor), Rank 5-6 (citywide), Rank 7-8 (statewide, minor celebrity), Rank 9 (nationally known), Rank 10 (worldwide).",
      "**Believability** scales from **2/10** at Rank 1-2 to **7/10** at Rank 10. Verifiable evidence grants **+1** (single piece) or **+2** (4+ pieces). LUCK **cannot** be spent on Believability rolls.",
      "**Impact by Rank**: Rank 1-2 (small, incremental change), Rank 3-4 (small bad guys arrested), Rank 5-6 (changes all over the City), Rank 7-8 (changes across several cities), Rank 9 (national-level), Rank 10 (worldwide, Megacorps may fall).",
      "**Rumors**: at least twice per week the GM secretly rolls **Credibility Rank + 1d10** against passive Rumor DVs (Vague DV7, Typical DV9, Substantial DV11, Detailed DV13). The Media can also actively investigate rumors at higher DVs (13/15/17/21).",
      "Publishing a damaging story about a powerful target (Corp, gang leader, politician) **will provoke retaliation**. The Media's Credibility is their shield -- destroying a high-Credibility Media's reputation is harder than silencing them."
    ]
  },
  {
    "id": "my-rockerboy-rallies-crowd",
    "title": "My Rockerboy rallies a crowd",
    "topic": "Roles",
    "tags": [
      "rockerboy",
      "charismatic impact",
      "fans",
      "crowd",
      "rally",
      "influence",
      "performance"
    ],
    "icon": "🎸",
    "steps": [
      "The Rockerboy uses **Charismatic Impact** to influence fans. Roll **Charismatic Impact + 1d10** vs a DV based on group size: **DV8** (single person), **DV10** (small group, up to 6), **DV12** (huge group).",
      "**Venue scales with Rank**: Rank 1-2 (small local clubs), Rank 3-4 (well-known clubs), Rank 5-6 (large important clubs), Rank 7-8 (small concert halls, local video), Rank 9 (large halls, national video), Rank 10 (huge stadiums, international).",
      "**What favors you can ask** (Single Fan, DV8): Rank 1-2 (small favor: drink, meal, ride), Rank 3-4 (major favor: bed, good word), Rank 5-6 (commit minor crime), Rank 7-8 (risk life without question), Rank 9 (commit major crime), Rank 10 (sacrifice self).",
      "**Small Groups** (DV10): Rank 1-2 (ask for autographs), Rank 3-4 (hang out, provide party favors), Rank 5-6 (act as personal posse), Rank 7-8 (commit minor crime for you), Rank 9+ (commit major crime, risk lives).",
      "**Huge Groups** (DV12): Rank 5-6 (fans all over City, do major favors), Rank 7-8 (rabidly loyal, fight rivals, info networks), Rank 9 (cult-like, will riot, destroy, even kill), Rank 10 (worldwide cult-like army).",
      "On a **failed check**, the Rockerboy cannot ask the same favor from those fans for **one week**. This means failed rallies have real consequences -- you cannot just keep trying."
    ]
  },
  {
    "id": "my-exec-sends-team",
    "title": "My Exec sends a Team Member on a mission",
    "topic": "Roles",
    "tags": [
      "exec",
      "teamwork",
      "team member",
      "corporate",
      "loyalty",
      "mission",
      "employee"
    ],
    "icon": "💼",
    "steps": [
      "Execs gain **Team Members** at Rank 3 (first), Rank 5 (second), and Rank 9 (third, max 3). Team types: **Company Bodyguard**, **Covert Operative**, **Driver**, **Netrunner**, and **Technician**, rolled from special charts.",
      "Team Members are controlled by the **GM**, not the player, based on their **Loyalty** score (starting 1d6+1, max 10). Before each task, the GM rolls **1d6 under current Loyalty**. Failure means the Team Member refuses, botches, or betrays.",
      "**Building Loyalty**: compliment work (+1), give bonus/perk 200eb+ (+4), support against Management (+4), give 20% cut of earnings (+6), paid time off for entire session (+6), risk physical harm for them (+8).",
      "**Losing Loyalty**: no Loyalty gained during session (-1), berate/chew out (-2), ignore contribution (-4), forget birthday (-6), fail to deliver promised bonus (-6), throw under bus to Management (-8), abandon under fire (lose ALL remaining).",
      "At **Loyalty 0 or below**, the Team Member **actively betrays** the Exec -- selling secrets, sabotaging missions, or defecting to a rival. This is catastrophic and often irreversible.",
      "Team Members **cannot wear armor heavier than Light Armorjack** and **do not improve Skills** over time. They are useful but not as powerful as player characters. They are expendable assets, not equals."
    ]
  },
  {
    "id": "my-lawman-arrests-someone",
    "title": "My Lawman arrests someone",
    "topic": "Roles",
    "tags": [
      "lawman",
      "arrest",
      "backup",
      "authority",
      "jurisdiction",
      "police",
      "legal"
    ],
    "icon": "🚔",
    "steps": [
      "A Lawman's authority comes from their **Backup** role ability. This represents their agency affiliation (Corporate Security, NCPD, County, C-SWAT, Federal). **Without jurisdiction, an arrest is just kidnapping.**",
      "To call **Backup**: spend an **Action** and roll **d10 equal to or under your Backup Rank**. Success means backup is dispatched. Roll **d6** for arrival time in **Rounds**. On a **6**, backup arrives from the **next highest tier**.",
      "**Backup by Rank**: Rank 1-2 (4 Corporate Security, Heavy Pistols, Kevlar), Rank 3-4 (4 Beat Cops, 2 cars), Rank 5-7 (2 County Mounties, ARs, Heavy Armorjack), Rank 8 (Recovery Zone Marshal), Rank 9 (2 C-SWAT, AV-4, Assault Rifles, Rocket Launchers, Metalgear SP18), Rank 10 (FBI/Interpol/Netwatch).",
      "**Legal arrest** requires probable cause or witnessing a crime. In the Time of the Red, this is loosely enforced -- Lawmen have wide discretion, especially in lower-zone areas. Corporate zones have stricter procedures.",
      "**Abusing Backup** (calling it for personal vendettas, using excessive force without cause, or involving backup in criminal activity) gets you **fired or fined**. Repeated abuse may result in losing the Backup ability entirely.",
      "Rank 10 agents are special: they **stick around to investigate**, respond to all related calls until the case is closed, and can use their **Combat Number for investigation skills** (Criminology, Perception, Stealth, Tracking, etc.)."
    ]
  },
  {
    "id": "my-fixer-sets-up-night-market",
    "title": "My Fixer sets up a Night Market",
    "topic": "Roles",
    "tags": [
      "fixer",
      "operator",
      "night market",
      "midnight market",
      "buying",
      "selling",
      "deals",
      "rare items"
    ],
    "icon": "🏪",
    "steps": [
      "At **Operator Rank 5-6**, a Fixer can organize a **Night Market** once per month. This is an open event where items from **all price categories** become available for purchase -- including things normally hard to source.",
      "At **Rank 9+**, the Fixer can organize a **Midnight Market** -- an invite-only flash market containing **1d10+5 rare items** and gathering criminal underworld leadership. This is exclusive and dangerous.",
      "**Haggle Check** at the market: **COOL + Trading + Operator Rank + 1d10** vs the seller's **COOL + Trading + their Operator Rank (if Fixer) + 1d10**. Only **one Fixer deal per transaction**.",
      "**Haggle benefits by Rank**: Rank 1-2 (10% better price), Rank 3-4 (buy 5+ get 1 free), Rank 5-6 (negotiate job pay +20%), Rank 7-8 (Luxury/Super Luxury pay half now, half in 1 month), Rank 9 (20% better buy/sell), Rank 10 (double pay for dangerous jobs).",
      "**Reach** determines what you can source outside markets: Rank 1-2 (Cheap/Everyday), Rank 3-4 (up to Expensive), Rank 5-6 (up to Super Luxury at Night Market), Rank 7-8 (up to Very Expensive), Rank 9 (up to Luxury, plus Midnight Market), Rank 10 (up to Super Luxury anytime).",
      "Night Markets are **social events** as much as commercial ones. They are opportunities to make contacts, gather rumors, show off reputation, and set up future deals. The Fixer who organizes it gains significant social capital."
    ]
  },
  {
    "id": "my-tech-upgrades-weapon",
    "title": "My Tech upgrades a weapon",
    "topic": "Roles",
    "tags": [
      "tech",
      "maker",
      "upgrade",
      "weapon",
      "modify",
      "improve",
      "craft",
      "expertise"
    ],
    "icon": "🔧",
    "steps": [
      "A Tech uses **Upgrade Expertise** (a Maker Specialty) to improve weapons. Roll **TECH + appropriate repair skill + Upgrade Expertise Rank + 1d10** vs a DV based on the upgrade's price category.",
      "Available weapon upgrades include: **+1 to Attack checks** (weapon accuracy), **+1 damage for melee weapons**, **Expanded Magazine** (increased ammo capacity), **Make Weapon Concealable** (non-concealable becomes concealable), and **Raise Weapon Quality** (Excellent quality grants +1 to attacks).",
      "**DV and Time by price category**: Cheap/Everyday (DV9, 1 hour), Costly (DV13, 6 hours), Premium (DV17, 1 day), Expensive (DV21, 1 week), Very Expensive (DV24, 2 weeks), Luxury (DV29, 1 month).",
      "**Upgrade Expertise** also covers non-weapon improvements: **lower cyberware Humanity Loss by 1d6**, **add option slots** to cyberware, **add SP +1 to armor**, and **simplify repair time** for complex items.",
      "A Tech needs **appropriate tools** for the job. Working without them imposes the standard **-2 penalty**. A fully equipped workshop is ideal. Field modifications using **Field Expertise** (jury-rig) last only **10 minutes per Rank**.",
      "**Fabrication Expertise** lets a Tech create items from materials **one price category lower** than normal. Combined with Upgrade Expertise, a Tech can build a weapon cheaply and then upgrade it to exceed factory specs."
    ]
  },
  {
    "id": "my-medtech-makes-drugs",
    "title": "My Medtech synthesizes pharmaceuticals",
    "topic": "Roles",
    "tags": [
      "medtech",
      "pharmaceuticals",
      "drugs",
      "craft",
      "medicine",
      "antibiotic",
      "speedheal",
      "stim",
      "surge",
      "rapidetox"
    ],
    "icon": "💊",
    "steps": [
      "A Medtech with **Pharmaceuticals** specialty points can synthesize pharma drugs. Each Pharmaceuticals point grants **1 point in Medical Tech Skill** (max 10) and access to one pharmaceutical (5 total).",
      "The five pharmaceuticals (in unlock order): **Antibiotic** (heals extra 2 HP/day for 1 week on an already-healing target), **Rapidetox** (immediately purges any drug, poison, or intoxicant), **Speedheal** (heals BODY + WILL HP instantly, 1/day), **Stim** (ignore Seriously Wounded penalties for 1 hour, 1/day), **Surge** (no sleep needed for 24 hours, 1/week).",
      "To synthesize: roll **TECH + Medical Tech + 1d10 vs DV13**. Materials cost **200eb per batch**. Each successful batch produces doses equal to your **Medical Tech Skill level**. Synthesis takes **1 hour per batch**.",
      "Applying a dose costs **1 Action** to a willing target. Against an **unwilling target**, use a **Melee Weapon Attack with an Airhypo** -- on a hit, the dose is administered instead of dealing damage.",
      "**Stim** is arguably the most tactically valuable pharma in combat -- it removes the Seriously Wounded -2 penalty for a full hour. Applying Stim to a wounded ally mid-fight can turn the tide.",
      "Only a **Medtech** can administer Pharmaceuticals correctly. Non-Medtechs **cannot** use them — these require training to get medically correct proportions.",
      "**Cryosystem Operation** (the third Medicine specialty) provides Cryopumps and Cryotanks for stabilizing Mortally Wounded characters long-term. At 5 points: 3 charges, holds 3 people, plus 6 Cryotanks total."
    ]
  },
  {
    "id": "shooting-in-total-darkness",
    "title": "Shooting in total darkness",
    "topic": "Combat",
    "tags": [
      "darkness",
      "dark",
      "blind",
      "night",
      "visibility",
      "infrared",
      "lowlight",
      "penalty"
    ],
    "icon": "🌑",
    "steps": [
      "Attacking in **total darkness** applies a **-4 penalty** to all ranged attack rolls.",
      "You **cannot make Aimed Shots** in total darkness — you can't see well enough to target a specific body location.",
      "Targets beyond **25 m/yds** are **effectively invisible** — you cannot attack them at all without special optics.",
      "**Infrared or Low-Light cyberoptics** negate the penalty entirely, letting you see and shoot normally in the dark.",
      "Melee attacks in darkness also suffer the **-4 penalty** unless you have some way to perceive your opponent."
    ]
  },
  {
    "id": "attacking-while-prone",
    "title": "Attacking while prone",
    "topic": "Combat",
    "tags": [
      "prone",
      "lying down",
      "ground",
      "stand up",
      "melee",
      "ranged",
      "move action"
    ],
    "icon": "🛡️",
    "steps": [
      "**Ranged attacks** while prone are made at **no penalty** — lying down and shooting is perfectly viable.",
      "**Melee attacks** while prone take a **-2 penalty** to the attack roll — you're at a serious disadvantage swinging from the ground.",
      "**Standing up** from prone costs your **Action** (the Get Up Action). While prone, you **cannot use your Move Action** until you first Get Up.",
      "Being prone makes you **harder to hit at range** (GM ruling on cover), but easier to hit in melee since you can't dodge effectively.",
      "You can **drop prone for free** at any time on your turn — it only costs an Action to get back up."
    ]
  },
  {
    "id": "kick-grenade-away",
    "title": "Kicking a grenade away",
    "topic": "Combat",
    "tags": [
      "grenade",
      "kick",
      "athletics",
      "dex",
      "explosive",
      "reaction",
      "gm ruling"
    ],
    "icon": "🦵",
    "steps": [
      "Kicking a live grenade away is a **GM ruling** situation — there are no hard RAW rules for it, but a common house call.",
      "The standard ruling is a **DEX + Athletics check at DV 17** — this is not easy and represents a desperate, risky move.",
      "On a **success**, the grenade moves **5 m/yds** in a direction you choose — potentially saving your team from the blast.",
      "On a **failure**, the grenade **detonates at your feet** — you take full damage and are ground zero for the explosion.",
      "This typically costs your **Action for the turn** — you're diving to kick an explosive, not casually booting it aside."
    ]
  },
  {
    "id": "fighting-on-stairs",
    "title": "Fighting on stairs / high ground",
    "topic": "Combat",
    "tags": [
      "stairs",
      "high ground",
      "elevation",
      "cover",
      "concealment",
      "terrain"
    ],
    "icon": "🪜",
    "steps": [
      "Cyberpunk RED has **no specific mechanical bonus** for high ground or fighting on stairs — unlike some TTRPGs.",
      "However, the GM **can rule** that the higher position grants **cover or concealment** advantages depending on the situation.",
      "A character at the top of stairs may be treated as having **partial cover** (head and shoulders visible) against those below.",
      "Melee combat on stairs is unchanged mechanically, but the GM may impose **movement penalties** for difficult terrain.",
      "Tactical positioning still matters — funneling enemies up a staircase limits how many can engage you in melee at once."
    ]
  },
  {
    "id": "double-grapple",
    "title": "Two people grappling one target",
    "topic": "Combat",
    "tags": [
      "grapple",
      "grab",
      "double",
      "two grapplers",
      "restrain",
      "hold",
      "melee"
    ],
    "icon": "🤼",
    "steps": [
      "**Two characters can grapple the same target** — each one establishes and maintains their own **Grab** independently.",
      "Each grappler must have succeeded on their own **DEX + Brawling** check vs the target's **DEX + Brawling/Evasion** to initiate the Grab.",
      "The target takes a **-2 penalty from each active grapple**, making it extremely difficult to break free or act.",
      "To **escape**, the target must break **each Grab separately** — succeeding against one grappler doesn't free them from the other.",
      "Each grappler can independently choose to **Choke, restrain, or hold** the target on their own turns using their Action."
    ]
  },
  {
    "id": "attacking-through-window",
    "title": "Attacking through a window",
    "topic": "Combat",
    "tags": [
      "window",
      "glass",
      "cover",
      "full cover",
      "shatter",
      "break",
      "building"
    ],
    "icon": "🪟",
    "steps": [
      "Unbroken glass gives targets behind it **full cover** — you cannot target someone through an intact window.",
      "Glass has only **1 HP** — any attack that hits the window **shatters it instantly** with no meaningful damage reduction.",
      "Once the glass is broken, the window opening provides **no cover at all** — targets are fully exposed through the gap.",
      "You can deliberately **shoot out a window** on your turn (auto-hit, costs your Action) to open a line of fire for the next Round.",
      "Diving through a window deals **1d6 damage** from broken glass — a classic Night City entrance."
    ]
  },
  {
    "id": "crit-fail-melee",
    "title": "Critical failure on melee attack",
    "topic": "Combat",
    "tags": [
      "critical failure",
      "nat 1",
      "fumble",
      "melee",
      "weapon break",
      "poor quality"
    ],
    "icon": "💔",
    "steps": [
      "A **natural 1** on your attack d10 IS a **Critical Failure**. Roll another **d10** and **subtract** the result from your total. There is no confirmation roll — the natural 1 itself triggers the penalty.",
      "A second 1 on the subtraction die simply means you subtract 1 (the minimum penalty) — it does **not** trigger further subtraction.",
      "On a Critical Failure with a **Poor Quality melee weapon**, the weapon **breaks and is destroyed** on any natural 1 attack roll — it cannot be repaired.",
      "On a Critical Failure with a **Standard or Excellent Quality weapon**, the attack simply **misses badly** — no additional penalty beyond the lost Action and the subtracted d10.",
      "Critical Failures apply to **all attack types** (melee, ranged, autofire) — the mechanic (roll 1, subtract another d10) is the same across the board."
    ]
  },
  {
    "id": "fighting-in-civilian-crowd",
    "title": "Fighting in a civilian crowd",
    "topic": "Combat",
    "tags": [
      "civilians",
      "crowd",
      "bystanders",
      "collateral",
      "reputation",
      "autofire",
      "stray bullets"
    ],
    "icon": "👥",
    "steps": [
      "**Missed shots in a crowd** may hit civilians — this is a **GM ruling** based on the density of the crowd and weapon used.",
      "**Autofire is especially dangerous** in crowds — the wide spray of bullets makes collateral damage almost guaranteed on a miss.",
      "Killing innocent bystanders causes **Reputation loss** at the GM's discretion — Night City is violent, but indiscriminate killing is bad for business.",
      "The GM may assign civilians **simple stats** (HP 15, no armor) or simply narrate the consequences without rolling.",
      "Gangs and corps **will remember** if you shot up their neighborhood — expect retaliation or bounties from affected factions."
    ]
  },
  {
    "id": "shooting-someone-point-blank",
    "title": "Shooting someone point-blank",
    "topic": "Combat",
    "tags": [
      "point blank",
      "close range",
      "melee range",
      "0-6m",
      "pistol",
      "shotgun"
    ],
    "icon": "🔫",
    "steps": [
      "CPR has **no special point-blank rules** — there is no bonus for pressing a gun against someone at contact distance.",
      "At point-blank range, use the weapon's **0-6 m/yd range DV** — this is typically DV 13 for most weapons, making it easy to hit.",
      "**Melee weapons can also be used** at this range — the defender can choose to **Dodge or Parry** as normal.",
      "A ranged attacker engaged in melee is **not at a disadvantage** for using their firearm — they roll their normal ranged attack.",
      "The target can attempt to **Grab** the weapon using the Grapple rules if they want to disarm the shooter at this range."
    ]
  },
  {
    "id": "cyberarm-dismembered",
    "title": "Losing a cyberarm (dismemberment)",
    "topic": "Cyberware",
    "tags": [
      "cyberarm",
      "dismember",
      "critical injury",
      "broken",
      "lost arm",
      "replacement",
      "surgery"
    ],
    "icon": "🦾",
    "steps": [
      "If you suffer the **Dismembered Arm Critical Injury**, you lose the arm AND **all cyberware options installed in it** — they are destroyed.",
      "This includes any **weapons, tool hands, grapple hands, or other options** slotted into that cyberarm — all gone.",
      "The **Broken Cyberarm** Critical Injury is less severe — the arm stops functioning but can be **repaired** rather than replaced.",
      "A replacement cyberarm must be **purchased and installed fresh** by a Ripperdoc — you don't get the old options back for free.",
      "The Surgery DV to install a new cyberarm is **DV 15**, and the Humanity Loss is paid again for the new arm and any new options."
    ]
  },
  {
    "id": "two-cyberarms",
    "title": "Having two cyberarms",
    "topic": "Cyberware",
    "tags": [
      "cyberarm",
      "two arms",
      "dual",
      "both arms",
      "option slots",
      "humanity loss"
    ],
    "icon": "💪",
    "steps": [
      "Yes, you **can have two cyberarms** — each arm is a separate piece of cyberware installed independently.",
      "Each cyberarm has its **own set of option slots** — you can install different options in each arm.",
      "Each cyberarm costs **separate Humanity Loss** — installing two arms means paying HL twice (2d6 per arm).",
      "Having two cyberarms does **not** grant extra attacks — you still get one Action per turn like everyone else.",
      "Two cyberarms with **Big Knucks or Wolvers** do let you switch between weapons without spending an Action to draw."
    ]
  },
  {
    "id": "cyberware-after-death",
    "title": "Harvesting cyberware from the dead",
    "topic": "Cyberware",
    "tags": [
      "harvest",
      "dead",
      "corpse",
      "salvage",
      "ripperdoc",
      "sell",
      "surgery",
      "loot"
    ],
    "icon": "⚙️",
    "steps": [
      "Cyberware **can be harvested** from a dead body using a **TECH + Surgery** check — the DV matches the original installation DV.",
      "Harvested cyberware **may degrade in quality** at the GM's discretion — chrome ripped from a corpse isn't always in top shape.",
      "Ripperdocs will typically buy harvested cyberware at roughly **50% of its market value** — they know where it came from.",
      "You need proper **surgical tools** to extract cyberware — you can't just rip it out with pliers in an alley (well, you can, but it'll be destroyed).",
      "Installing harvested cyberware into a new recipient still requires a **full Surgery check** and the recipient pays **Humanity Loss** as normal."
    ]
  },
  {
    "id": "can-cyberware-be-hacked",
    "title": "Can cyberware be hacked?",
    "topic": "Netrunning",
    "tags": [
      "cyberware",
      "hack",
      "hacking",
      "emp",
      "microwaver",
      "disable",
      "netrunner",
      "electronics"
    ],
    "icon": "📡",
    "steps": [
      "Cyberware **cannot be hacked directly via the NET** — Netrunners cannot remotely take control of someone's chrome.",
      "**EMP grenades or EMP ammo** can disable cyberware — a successful hit **disables 2 pieces of cyberware for 1 minute**.",
      "The **Microwaver exotic weapon** can also disable cyberware — the target must make a **DV 15 Cybertech check** or lose functionality.",
      "The owner of disabled cyberware **chooses which pieces** are affected — they pick their least important chrome to shut down first.",
      "Disabled cyberware **reactivates after 1 minute** (roughly 10 combat Rounds) — no repair needed, it just reboots."
    ]
  },
  {
    "id": "pvp-facedown",
    "title": "PvP facedown between players",
    "topic": "Social",
    "tags": [
      "facedown",
      "pvp",
      "player vs player",
      "cool",
      "reputation",
      "intimidate",
      "social combat"
    ],
    "icon": "😤",
    "steps": [
      "PvP facedowns work **mechanically the same** as NPC facedowns — both players roll **COOL + Reputation + 1d10**.",
      "The **loser** of the opposed roll decides whether to **back down or escalate** to violence — the system doesn't force either outcome.",
      "Backing down means the loser **concedes the social situation** — they lose face but avoid combat.",
      "This is a **great roleplay opportunity** — let the dice inform the scene, but the players decide how their characters react.",
      "The GM should ensure **both players consent** to the facedown mechanic — forced PvP social combat can feel bad if one player isn't into it."
    ]
  },
  {
    "id": "beating-lie-detector",
    "title": "Beating a lie detector / reading lies",
    "topic": "Social",
    "tags": [
      "lie",
      "deception",
      "acting",
      "human perception",
      "voice stress analyzer",
      "detect lie"
    ],
    "icon": "🎭",
    "steps": [
      "Detecting lies is an **opposed roll**: the detector rolls **INT + Human Perception** vs the liar's **COOL + Acting**.",
      "If the detector wins, they **sense the deception** — they know something is off, though not necessarily what the truth is.",
      "The **Voice Stress Analyzer** cyberware gives a **+2 bonus to the detection roll** — very useful for Fixers and Lawmen.",
      "A skilled liar with high **COOL and Acting** can beat even cyberware-enhanced detection — chrome isn't foolproof.",
      "The GM may grant **situational modifiers** if the lie is particularly outrageous (+2 to detect) or well-prepared (-2 to detect)."
    ]
  },
  {
    "id": "refusing-fixer-job",
    "title": "Refusing a job from a Fixer",
    "topic": "Social",
    "tags": [
      "fixer",
      "job",
      "refuse",
      "reputation",
      "night market",
      "consequences",
      "work"
    ],
    "icon": "🤝",
    "steps": [
      "There is **no immediate mechanical penalty** for turning down a single job — Fixers understand that not every gig is a good fit.",
      "**Repeated refusals** damage your relationship with that Fixer — they'll stop calling and offer work to more reliable edgerunners.",
      "Losing a Fixer's trust may mean losing access to their **Night Markets** — your source for rare gear and cyberware dries up.",
      "Other Fixers in the area **may hear** that you're unreliable — word travels fast in Night City's underworld.",
      "The GM should use this as a **narrative consequence**, not a punishment — there are always other Fixers, but burning bridges has a cost."
    ]
  },
  {
    "id": "pvp-combat",
    "title": "PvP combat between players",
    "topic": "Combat",
    "tags": [
      "pvp",
      "player vs player",
      "combat",
      "attack",
      "player killing",
      "pk",
      "drama"
    ],
    "icon": "⚡",
    "steps": [
      "PvP combat works **mechanically identical** to NPC combat — same attack rolls, same damage, same armor, no special rules.",
      "The GM should ensure **both players are okay with PvP** before it happens — surprise PvP kills can ruin a campaign.",
      "Initiative, Actions, dodging, and damage all follow the **standard combat rules** — no player gets special treatment.",
      "PvP combat **can cause real table drama** — discuss it out-of-character before resolving it in-character if tensions are high.",
      "Consider offering **alternatives to lethal PvP**: facedowns, non-lethal weapons, or simply splitting the party temporarily."
    ]
  },
  {
    "id": "counterfeit-eddies",
    "title": "Counterfeiting eddies",
    "topic": "Social",
    "tags": [
      "counterfeit",
      "money",
      "eddies",
      "forgery",
      "crime",
      "tech",
      "perception",
      "fake money"
    ],
    "icon": "💵",
    "steps": [
      "Creating counterfeit eddies requires a **TECH + Forgery** check — the DV depends on the quality of fakes you're trying to produce.",
      "Detecting counterfeits is an **INT + Perception** check or an **electronic scanner** — merchants in high-end areas check routinely.",
      "Getting caught passing fake eddies is a **serious criminal charge** — NCPD and corporate security don't take kindly to it.",
      "**Corporations track serial numbers** on high-denomination credchips — trying to counterfeit corpo scrip is especially dangerous.",
      "Even successful counterfeits have a **shelf life** — word spreads about fake bills in circulation and merchants get wary."
    ]
  },
  {
    "id": "stealing-from-corps",
    "title": "Stealing from corporations",
    "topic": "Night City",
    "tags": [
      "corporation",
      "theft",
      "corporate",
      "security",
      "tracker",
      "arasaka",
      "stolen gear"
    ],
    "icon": "🏢",
    "steps": [
      "Corporations **track their inventory** meticulously — stolen equipment is flagged in their systems almost immediately.",
      "Stolen corporate gear **may have embedded trackers** — a TECH + Electronics/Security Tech check can find and disable them.",
      "**Corporate security will investigate** missing assets — the value of the theft determines how hard they look.",
      "Selling stolen corp gear requires a **Fixer or black market connection** — legitimate shops won't touch hot merchandise.",
      "**Arasaka never forgets** — stealing from the biggest corps means they will eventually send someone to recover their property (and punish you)."
    ]
  },
  {
    "id": "trauma-team-as-insurance",
    "title": "Trauma Team coverage and costs",
    "topic": "Lifestyle",
    "tags": [
      "trauma team",
      "insurance",
      "medical",
      "health",
      "extraction",
      "emt",
      "cost",
      "monthly"
    ],
    "icon": "🚁",
    "steps": [
      "**Silver coverage** costs **500 eb/month** — this is the basic tier most edgerunners can barely afford.",
      "**Executive coverage** costs **1,000 eb/month** — faster response and better treatment for those with deeper pockets.",
      "Response time is **1d6 combat Rounds** (~3-18 seconds) after activation — your Trauma Team card sends a signal when your vitals crash.",
      "Trauma Team **extracts and treats you** on-site or in transit — they stabilize you and get you to a medical facility alive.",
      "The response team includes **armed security** who will protect the medics — they will shoot anyone who interferes with the extraction.",
      "Trauma Team **does not care** about the legality of your situation — they save your life, not your reputation. But they won't enter active warzones for Silver members."
    ]
  },
  {
    "id": "scouting-a-location",
    "title": "Scouting a location",
    "topic": "Environment",
    "tags": [
      "scouting",
      "recon",
      "perception",
      "guards",
      "entry point",
      "observation",
      "intel",
      "infiltration"
    ],
    "icon": "🔭",
    "steps": [
      "Roll **INT + Perception + 1d10** to observe a target location — the GM sets the DV based on how well-secured it is (DV13 for lightly guarded, DV15 for standard, DV17+ for high-security).",
      "On a success, you learn useful details: **guard count and positions**, visible entry/exit points, lighting conditions, and any obvious security hardware (cameras, fences, checkpoints).",
      "**Time spent improves information quality** — a quick drive-by (1 minute) gives surface-level details, while an extended stakeout (1+ hours) reveals patrol timing, shift changes, and blind spots.",
      "Beating the DV by **4 or more** reveals additional intel the GM chooses: hidden entrances, camera blind spots, or weaknesses in the security routine.",
      "Failing the check means you **learn nothing useful** — and on a Critical Failure, security may notice you watching, increasing alertness for later attempts."
    ]
  },
  {
    "id": "disabling-alarms",
    "title": "Disabling alarm systems",
    "topic": "Skills",
    "tags": [
      "alarm",
      "security",
      "tech",
      "electronics",
      "disable",
      "stealth",
      "infiltration",
      "trap"
    ],
    "icon": "🚨",
    "steps": [
      "Disabling an alarm requires a **TECH + Electronics/Security Tech + 1d10** check vs the alarm's DV — cheap alarms are **DV9**, standard are **DV13**, high-security are **DV17**, and corporate-grade are **DV21**.",
      "Electronics/Security Tech is a **x2 cost Skill** (double IP to level up), so many characters will have low ranks — consider bringing a specialist or a Netrunner.",
      "**Failure triggers the alarm** unless the GM rules otherwise — this typically alerts guards, locks down entry points, and may summon backup within 1d6 Turns.",
      "A Netrunner can bypass alarms remotely by accessing the building's **NET Architecture** and using **Control Node** actions to disable them — this avoids the physical check entirely.",
      "Disabling takes approximately **1 minute for DV9**, **5 minutes for DV13-17**, and longer for DV21+ systems — plan accordingly when guards patrol nearby."
    ]
  },
  {
    "id": "bypassing-security-cameras",
    "title": "Bypassing security cameras",
    "topic": "Skills",
    "tags": [
      "camera",
      "security",
      "stealth",
      "netrunner",
      "electronics",
      "infiltration",
      "bypass",
      "surveillance"
    ],
    "icon": "📹",
    "steps": [
      "There are three approaches: **disable them** (TECH + Electronics/Security Tech), **avoid them** (DEX + Stealth), or **hack them** (Netrunner via Control Node).",
      "To physically disable a camera, roll **TECH + Electronics/Security Tech + 1d10** vs the camera's DV (typically **DV9** for standard observation cameras). Each camera is a separate check.",
      "To sneak past, roll **DEX + Stealth + 1d10** — cameras have a **Perception DV17 to spot** them first, and the GM determines the DV to avoid their field of view based on available cover.",
      "A **Netrunner jacked into the building's NET Architecture** can use a Control Node action to disable, loop, or redirect cameras — one NET Action per camera or per linked group.",
      "Observation cameras have only **5 HP** and can be shot out, but gunfire is loud and the destroyed feed will alert security monitoring stations immediately."
    ]
  },
  {
    "id": "social-engineering-entry",
    "title": "Social engineering past guards",
    "topic": "Social",
    "tags": [
      "social",
      "persuasion",
      "conversation",
      "disguise",
      "bluff",
      "guards",
      "infiltration",
      "cool"
    ],
    "icon": "🎭",
    "steps": [
      "Roll **COOL + Persuasion + 1d10** (to convince) or **COOL + Conversation + 1d10** (to chat your way in) as an **opposed check** vs the guard's **INT + Human Perception + 1d10**.",
      "Having a **convincing disguise** (correct uniform, badge, or corporate attire) can lower the DV by **-2 to -4** at GM discretion — looking the part matters more than talking.",
      "A **prepared cover story** that makes sense for the location (delivery, maintenance, expected visitor) gives a further **+2 bonus** — the more specific and verifiable, the better.",
      "On a failure, the guard gets **suspicious** — they may ask for ID, call their supervisor, or deny entry. A Critical Failure means they raise the alarm immediately.",
      "**COOL + Acting + 1d10** can supplement the approach if you need to maintain a persona over an extended interaction — one slip and the guard may re-check your credentials."
    ]
  },
  {
    "id": "picking-a-lock-detailed",
    "title": "Picking locks (detailed)",
    "topic": "Skills",
    "tags": [
      "lock",
      "pick lock",
      "tech",
      "lockpick",
      "door",
      "entry",
      "infiltration",
      "security"
    ],
    "icon": "🔐",
    "steps": [
      "Roll **TECH + Pick Lock + 1d10** vs the lock's DV: **DV13** for cheap/residential locks, **DV15** for standard commercial, and **DV17** for high-security mechanical locks.",
      "**Electronic locks** cannot be picked with Pick Lock — they require **TECH + Electronics/Security Tech + 1d10** instead, at the same DV range or higher (DV17-21 for corporate).",
      "You need **lock picking tools** (50eb, Costly) — without them, you take a **-2 penalty** or the GM may rule it impossible for higher-DV locks.",
      "Each attempt takes roughly **1 minute** — if guards patrol nearby, you may need to make multiple attempts between patrol windows, increasing the risk of discovery.",
      "Failure means the lock **doesn't open** but isn't damaged. On a Critical Failure, the pick breaks inside the lock, jamming it — now it can't be picked at all and must be forced or bypassed."
    ]
  },
  {
    "id": "cutting-through-walls",
    "title": "Cutting through walls & barriers",
    "topic": "Equipment",
    "tags": [
      "wall",
      "breach",
      "cutting torch",
      "explosives",
      "demolitions",
      "melee",
      "entry",
      "infiltration"
    ],
    "icon": "🧱",
    "steps": [
      "A **cutting torch** (100eb, Premium) can slice through walls and doors but takes time — approximately **1 minute per inch of material** — and produces visible sparks and noise.",
      "**Explosives** are faster: a standard charge blows through most walls in one Round, but requires a **TECH + Demolitions + 1d10** check (DV varies by wall thickness) and is extremely loud.",
      "You can attack barriers with **melee weapons** — walls and doors have HP assigned by the GM (light interior wall ~15 HP, reinforced door ~25 HP, concrete wall ~40 HP). Subtract weapon damage each hit.",
      "Demolitions is a **x2 cost Skill** — if nobody in the crew has it, consider buying pre-set charges from a Fixer, but mishandling explosives without the Skill risks premature detonation.",
      "The **noise factor** matters: cutting torches are audible within a room, melee bashing echoes through corridors, and explosives alert everyone in the building plus neighbors."
    ]
  },
  {
    "id": "guard-patrol-timing",
    "title": "Timing guard patrols",
    "topic": "GM Tips",
    "tags": [
      "guards",
      "patrol",
      "timing",
      "perception",
      "infiltration",
      "window",
      "stealth",
      "planning"
    ],
    "icon": "⏱️",
    "steps": [
      "Roll **INT + Perception + 1d10** to identify a guard patrol pattern — **DV13** for regular clockwork patrols, **DV15** for semi-regular with minor variation, **DV17** for deliberately randomized routes.",
      "On success, you learn the **patrol interval** (how often guards pass a given point) and the **window duration** (how long you have between passes to move through an area undetected).",
      "A typical patrol window is **2-5 minutes** for tight security and **10-15 minutes** for lax security — the GM should establish this before the infiltration begins.",
      "**Multiple observation periods** (watching for 30+ minutes) grant a **+2 bonus** to the check — patterns become clearer with more data points.",
      "GMs should note that **randomized patrols** (DV17) mean there is no guaranteed safe window — players must accept risk or find ways to distract or neutralize the patrol."
    ]
  },
  {
    "id": "training-between-sessions",
    "title": "Training between sessions",
    "topic": "Character Creation",
    "tags": [
      "training",
      "ip",
      "improvement points",
      "skills",
      "downtime",
      "leveling",
      "advancement",
      "role ability"
    ],
    "icon": "📚",
    "steps": [
      "Between sessions, spend **Improvement Points (IP)** to raise Skills or Role Ability Ranks. Typical Skill cost: **20 IP per level** (Level 1 = 20 IP, Level 2 = 40 IP, up to Level 10 = 200 IP).",
      "**x2 Skills** (Demolitions, Electronics/Security Tech, etc.) cost **double** — 40 IP for Level 1, 80 IP for Level 2, and so on up to 400 IP for Level 10.",
      "**Role Ability Ranks** cost more: **60 IP per Rank** (Rank 1 = 60 IP, Rank 2 = 120 IP, up to Rank 10 = 600 IP). You cannot skip ranks.",
      "The GM decides **how much in-game time passes** between sessions — training should logically fit the timeline. A week between jobs is enough for a Skill point; a month allows more.",
      "You **cannot raise a Skill above your current level +1** per downtime period at GM discretion — this represents needing time to practice and consolidate new abilities."
    ]
  },
  {
    "id": "working-a-day-job",
    "title": "Working a day job",
    "topic": "Lifestyle",
    "tags": [
      "job",
      "work",
      "income",
      "lifestyle",
      "money",
      "downtime",
      "rent",
      "eurobucks"
    ],
    "icon": "💼",
    "steps": [
      "A day job earns enough to cover your **monthly lifestyle costs** — this keeps you fed and housed but won't make you rich. The exact pay depends on your Role and the GM.",
      "Monthly costs vary: **Kibble lifestyle is 100eb/month**, **Good Prepak is 200eb**, and housing ranges from **free (street) to 1,000eb+ (Cargo Container and up)**.",
      "Your **Role determines job type**: Solos do security work, Techs do repairs, Medtechs work clinics, Fixers broker deals, Netrunners do contract hacking, and Rockerboys play gigs.",
      "Working a day job consumes your **entire downtime** for that period — you can't also train, scout locations, or do other downtime activities during the same time window.",
      "If you skip work and can't pay rent, you face **eviction** — and if you can't afford food, starvation rules apply (GM discretion, typically penalties similar to sleep deprivation)."
    ]
  },
  {
    "id": "shopping-for-gear",
    "title": "Shopping for gear",
    "topic": "Equipment",
    "tags": [
      "shopping",
      "night market",
      "fixer",
      "gear",
      "equipment",
      "buying",
      "downtime",
      "price"
    ],
    "icon": "🛒",
    "steps": [
      "The easiest source is a **Fixer contact** — their **Operator Rank determines what price category** they can source: Rank 1-2 gets Cheap/Everyday, Rank 3-4 up to Expensive, Rank 7-8 up to Very Expensive, Rank 9+ up to Luxury/Super Luxury.",
      "**Night Markets** (set up by Rank 5+ Fixers, once per month) offer **all price categories** in one location — this is where you find the good stuff. Midnight Markets (Rank 9+) have rare items.",
      "Legitimate stores sell **legal goods at full price** — no haggling. For weapons, ammo, and restricted gear, you need the black market (Fixer or Night Market).",
      "A Fixer can **Haggle** the price: **COOL + Trading + Operator Rank + 1d10** vs the seller's roll. Success gives **10-20% off** depending on Fixer Rank.",
      "Time to find items varies by price: **Cheap/Everyday takes 1 hour**, Costly takes **6 hours**, Premium takes **1 day**, Expensive takes **1 week**, Very Expensive takes **2 weeks**, Luxury+ takes **1 month**."
    ]
  },
  {
    "id": "recovery-downtime",
    "title": "Recovering during downtime",
    "topic": "Medical",
    "tags": [
      "healing",
      "recovery",
      "rest",
      "hospital",
      "therapy",
      "humanity",
      "critical injury",
      "downtime"
    ],
    "icon": "🏥",
    "steps": [
      "Once stabilized, natural healing restores **HP equal to your BODY stat per full day** of rest (light activity only). Pushing yourself means no healing that day and needing re-stabilization.",
      "**Speedheal** drugs heal **BODY + WILL HP immediately** (once per day, only if not Mortally Wounded). **Antibiotics** add an extra **2 HP/day for 1 week** on top of natural healing.",
      "**Critical Injuries** don't heal naturally — they require specific medical treatment: **First Aid or Paramedic checks** for minor ones, **Surgery** (DV13-DV17) for severe ones like dismemberment.",
      "**Therapy** restores lost Humanity: standard therapy costs **500eb**, takes **1 full week**, and requires a Medtech's **DV15 Medical Tech check** — recovering **2d6 Humanity** on success. Extreme therapy costs 1,000eb for **4d6 Humanity** at DV17.",
      "Enhanced Antibodies cyberware (500eb, Mall) **doubles natural healing** to BODY x 2 per day — a worthwhile investment for characters who take a lot of damage between jobs."
    ]
  },
  {
    "id": "building-relationships",
    "title": "Building NPC relationships",
    "topic": "Social",
    "tags": [
      "npc",
      "relationship",
      "loyalty",
      "persuasion",
      "favor",
      "contact",
      "downtime",
      "reputation"
    ],
    "icon": "🤝",
    "steps": [
      "Building trust with NPCs uses **COOL + Persuasion + 1d10** or **COOL + Conversation + 1d10** over multiple interactions — the GM tracks NPC disposition from hostile to loyal.",
      "**Doing favors** for an NPC (no check needed) is the most reliable way to improve their disposition — actions speak louder than words in Night City. Each meaningful favor shifts attitude one step.",
      "**Shared dangerous experiences** (surviving a firefight together, pulling them out of trouble) create strong bonds faster than smooth talk — the GM may grant bonus disposition shifts.",
      "For Fixers, NPC relationships tie into the **Operator ability** — contacts gained through Rank have built-in Loyalty scores. The GM rolls **1d6 under current Loyalty** for task compliance; failure means refusal or betrayal.",
      "Neglecting contacts or betraying trust **permanently damages relationships** — some NPCs may become enemies, sell you out, or refuse future dealings entirely."
    ]
  },
  {
    "id": "improving-your-home",
    "title": "Improving your home security",
    "topic": "Lifestyle",
    "tags": [
      "home",
      "security",
      "upgrade",
      "alarm",
      "camera",
      "defense",
      "housing",
      "downtime",
      "net architecture"
    ],
    "icon": "🏠",
    "steps": [
      "Home security upgrades range from basic locks to lethal automated defenses. Installation requires a **TECH + Electronics/Security Tech** check at the defense's DV (DV9 to DV21) and costs vary from **500eb to 10,000eb+**.",
      "**Environmental defenses** include observation cameras (DV9, 500eb), electrical flooring (DV13, 1,000eb), laser grids (DV17, 5,000eb), and more — each has a **Perception DV17 to spot** by intruders.",
      "**Active defenses** like drones (ground, air, spider walkers) cost more but can pursue intruders. They range from **mini air drones** (DV17 to counter) to **spider walking drones** with heavy weapons (DV21).",
      "Linking defenses to a **NET Architecture** allows a Netrunner or programmed Demon to control them remotely via Control Nodes — this turns your home into a defended network.",
      "Costs add up fast: a basic camera setup runs **500eb**, a full automated turret is **5,000eb+**, and a complete NET Architecture with Demon defenders can reach **10,000eb or more** — plan your budget."
    ]
  },
  {
    "id": "gathering-intel-for-job",
    "title": "Gathering intel for a job",
    "topic": "Social",
    "tags": [
      "intel",
      "information",
      "streetwise",
      "library search",
      "fixer",
      "bribe",
      "planning",
      "investigation"
    ],
    "icon": "🕵️",
    "steps": [
      "**Street-level info**: Roll **COOL + Streetwise + 1d10** — this taps into the criminal grapevine for rumors, gang territory info, and word on the street about your target. DV13 for common knowledge, DV17 for obscure details.",
      "**Public records**: Roll **INT + Library Search + 1d10** — access the Data Pool for corporate filings, property records, news archives, and publicly available information. DV13 for basic info, DV15+ for deeper digs.",
      "**Fixer contacts**: A Fixer's **Operator ability** provides access to a network of informants — higher Rank Fixers know more powerful people. This may cost favors or eurobucks rather than a Skill check.",
      "**Bribing for specifics**: Cold hard eddies loosen tongues. The GM sets a price based on how dangerous the info is — expect to pay **50-100eb** for low-risk intel, **500-1,000eb** for insider corporate details.",
      "Combine multiple sources for the best picture — Streetwise gives you who, Library Search gives you what, and Fixer contacts fill in the gaps that aren't public or street knowledge."
    ]
  },
  {
    "id": "hiring-specialists",
    "title": "Hiring NPC specialists",
    "topic": "Social",
    "tags": [
      "hire",
      "npc",
      "specialist",
      "fixer",
      "solo",
      "netrunner",
      "medtech",
      "planning",
      "cost"
    ],
    "icon": "📋",
    "steps": [
      "Finding specialists typically goes through a **Fixer** — their Operator Rank determines the caliber of talent they can locate. Higher-rank Fixers connect you with more skilled (and expensive) professionals.",
      "**Typical NPC rates**: Solos charge **200-500eb/day** for muscle and security, Netrunners charge **500-1,000eb per job** for NET runs, and Medtechs charge **100-300eb/day** for on-site medical support.",
      "**Techs** charge **200-500eb per job** for equipment work, demolitions, or electronics bypass. **Drivers/Nomads** charge **100-300eb/day** plus vehicle costs for transport and getaway services.",
      "Hired NPCs are **not as reliable as crew** — the GM may assign a Loyalty score or make Loyalty checks. Cheap hires are more likely to bail under fire or sell information about the job.",
      "Always **negotiate terms upfront**: half up front and half on completion is standard. Hazard pay (combat expected) typically **doubles the rate**. Betrayal in either direction burns the Fixer connection."
    ]
  },
  {
    "id": "getting-blueprints",
    "title": "Getting building blueprints",
    "topic": "Skills",
    "tags": [
      "blueprints",
      "floor plan",
      "library search",
      "fixer",
      "netrunner",
      "architecture",
      "planning",
      "maps"
    ],
    "icon": "📐",
    "steps": [
      "**Public buildings** (government offices, hospitals, older structures): Roll **INT + Library Search + 1d10 vs DV13** — these records are often accessible through the Data Pool or city archives.",
      "**Private/corporate buildings**: Require a Fixer contact (typically **500-2,000eb** depending on the corp's security level) or a favor owed — these blueprints are not publicly filed.",
      "A **Netrunner** can steal blueprints by infiltrating the building's **NET Architecture** or the construction company's records — this requires a full NET run with its own risks and time investment.",
      "Blueprints may be **outdated or incomplete** — renovations, secret rooms, and security additions since construction won't appear on original plans. The GM should note any discrepancies.",
      "Even partial blueprints give a significant advantage: knowing the **general layout, stairwell locations, elevator access, and room sizes** lets the team plan entry routes and escape paths before going in."
    ]
  },
  {
    "id": "buying-specific-gear",
    "title": "Buying mission-specific gear",
    "topic": "Equipment",
    "tags": [
      "gear",
      "fixer",
      "night market",
      "reach",
      "equipment",
      "planning",
      "rare",
      "shopping"
    ],
    "icon": "🎯",
    "steps": [
      "A Fixer's **Operator Reach** sets the ceiling: Rank 1-2 sources only **Cheap/Everyday** items, Rank 3-4 up to **Expensive**, Rank 7-8 up to **Very Expensive**, and Rank 9-10 up to **Super Luxury**.",
      "**Night Markets** (Rank 5+ Fixer, once per month) are the best option for mission-critical shopping — all price categories available, plus the chance to find unusual or rare items.",
      "**Time to acquire** scales with rarity: Everyday items within **1 hour**, Costly in **6 hours**, Premium in **1 day**, Expensive in **1 week**, Very Expensive in **2 weeks**, Luxury/Super Luxury in **1 month per 10,000eb**.",
      "For time-sensitive jobs, the crew may need to **pay a premium** (GM ruling, typically 25-50% markup) to rush acquisition, or settle for lower-quality alternatives that are available immediately.",
      "Plan gear needs **early in downtime** — waiting until the night before the job to source Very Expensive equipment means you won't have it in time. Smart crews start shopping as soon as a job is confirmed."
    ]
  },
  {
    "id": "using-environment-as-weapon",
    "title": "Using the environment as a weapon",
    "topic": "Combat",
    "tags": [
      "environment",
      "push",
      "fall",
      "electrify",
      "demolitions",
      "terrain",
      "hazard",
      "creative"
    ],
    "icon": "⚡",
    "steps": [
      "**Push someone off a height**: Use the **Grab** action (DEX + Brawling + 1d10 vs DEX + Brawling/Evasion + 1d10), then spend your next Action to shove them off. Fall damage is assigned by the GM based on height.",
      "**Electrify water or metal**: Requires **TECH + Electronics + 1d10** (DV set by GM, typically DV15) and a power source. Targets in contact take **6d6 electrical damage** (similar to Electrical Flooring defense rules).",
      "**Collapse a structure**: Roll **TECH + Demolitions + 1d10** vs a DV based on structural integrity (DV13 for damaged buildings, DV17 for reinforced). Demolitions is a **x2 cost Skill** — not everyone can do this.",
      "**Environmental hazards** already present (exposed wiring, gas leaks, unstable floors) can be triggered with appropriate Skill checks — the GM determines the DV and resulting damage.",
      "Characters with **2 Cyberlegs** don't take fall damage for falls under **30 m/yds** — keep this in mind when pushing enemies off buildings; chrome-legged opponents may survive the drop."
    ]
  },
  {
    "id": "taking-hostages",
    "title": "Taking a hostage",
    "topic": "Social",
    "tags": [
      "hostage",
      "grab",
      "human shield",
      "negotiation",
      "facedown",
      "intimidation",
      "threat"
    ],
    "icon": "🔪",
    "steps": [
      "First, **Grab** the target: roll **DEX + Brawling + 1d10** vs their **DEX + Brawling or Evasion + 1d10**. On success, you and the target enter a **Grapple** (both suffer **-2 to all Actions**).",
      "With a weapon to their throat, you can use the **Human Shield** action — the hostage is treated as **cover for Ranged Attacks** (not Melee or head-targeted Aimed Shots). Attackers hit the hostage first.",
      "Initiate a **Facedown** (COOL + Persuasion or Interrogation + 1d10) with a **massive bonus** (GM discretion, typically +4 to +6) — having a blade or gun to someone's throat is very persuasive.",
      "**NCPD** may negotiate (especially for civilian hostages) but **corporate security** may calculate acceptable losses. Some factions (Psycho Squad, Animals, Maelstrom) **do not negotiate at all**.",
      "If the hostage is killed or released, you **immediately lose your leverage** and the Human Shield cover bonus — enemies will open fire without hesitation."
    ]
  },
  {
    "id": "surrendering-in-combat",
    "title": "Surrendering in combat",
    "topic": "Combat",
    "tags": [
      "surrender",
      "give up",
      "drop weapon",
      "prone",
      "mercy",
      "capture",
      "prisoner"
    ],
    "icon": "🏳️",
    "steps": [
      "**Drop your weapons** as a free action and **go prone** — make it visually obvious you are giving up. Announce your surrender clearly.",
      "Whether enemies **accept surrender is entirely at GM discretion** — rational opponents (corporate security, NCPD, professional mercs) are more likely to accept than irrational ones.",
      "**Cyberpsychos, boosted gangers (Animals, Maelstrom), and some Solos** may not accept surrender at all — they may execute prisoners, torture for information, or simply not care.",
      "If accepted, you are typically **disarmed, restrained, and searched**. Cyberware weapons (Wolvers, Big Knuckles, Popup weapons) may be overlooked if concealed — **TECH + Conceal/Reveal** to hide them.",
      "Surrendering is a **gamble** — it preserves your life in the moment but puts you at the complete mercy of your captors. Have a backup plan or hope your crew mounts a rescue."
    ]
  },
  {
    "id": "playing-dead",
    "title": "Playing dead",
    "topic": "Social",
    "tags": [
      "playing dead",
      "feign death",
      "acting",
      "deception",
      "perception",
      "cool",
      "stealth",
      "trick"
    ],
    "icon": "💀",
    "steps": [
      "Roll **COOL + Acting + 1d10** vs the observer's **INT + Human Perception + 1d10** — this is an opposed check, and trained observers are much harder to fool.",
      "Being **actually wounded** gives a significant bonus (GM discretion, typically **+2 to +4**) — blood, genuine pain reactions, and visible injuries make the act far more convincing.",
      "You must **remain perfectly still** — any movement triggers a new opposed check, and the observer gets **+2** on the re-check since they're already suspicious.",
      "The major risk is **confirmation shots** — professional enemies (corporate security, experienced Solos) may put a round into downed targets as standard procedure. If they do, you take real damage.",
      "This works best in **chaotic combat situations** with multiple downed combatants — a single \"corpse\" on an otherwise clear battlefield is far more suspicious than one body among many."
    ]
  },
  {
    "id": "improvised-weapons",
    "title": "Using improvised weapons",
    "topic": "Combat",
    "tags": [
      "improvised",
      "weapon",
      "bottle",
      "chair",
      "pipe",
      "melee",
      "light melee",
      "poor quality",
      "break"
    ],
    "icon": "🪑",
    "steps": [
      "Any object used as a weapon (bottle, chair, pipe, brick, fire extinguisher) is treated as a **Light Melee Weapon** dealing **1d6 damage** with a ROF of 2.",
      "Improvised weapons are always **Poor Quality** — they have no bonus and are likely to break. After combat ends, the weapon is **destroyed** (it doesn't survive sustained use).",
      "Attack rolls use **DEX + Melee Weapon + 1d10** — since improvised weapons are treated as Light Melee Weapons, they use the Melee Weapon skill. The GM may alternatively allow Brawling.",
      "**Thrown improvised weapons** (bottles, bricks) use **DEX + Athletics + 1d10** with Grenade Launcher DVs for range — they deal their melee damage but don't halve SP on the way in.",
      "In a pinch, improvised weapons are better than fists (which deal **1d6 damage** as Light Melee anyway) only because some objects give reach or can be thrown — the real advantage is psychological."
    ]
  },
  {
    "id": "throwing-objects-as-weapons",
    "title": "Throwing objects as weapons",
    "topic": "Combat",
    "tags": [
      "throw",
      "thrown",
      "improvised",
      "athletics",
      "grenade launcher",
      "range",
      "toss"
    ],
    "icon": "🪨",
    "steps": [
      "Throwing any object uses an Action and rolls **DEX + Athletics + 1d10** against the **Grenade Launcher DV table** for range — not the standard ranged DV table.",
      "Melee weapons that are thrown deal their **stated melee damage** (e.g., a knife deals 1d6, a machete deals 2d6) but do **not** halve the target's SP like melee attacks normally would.",
      "Improvised thrown objects (bottles, rocks, loose debris) deal **1d6 damage** at GM discretion — they are not designed as weapons.",
      "Maximum throwing range is **25 m/yds** regardless of the object. Beyond that, it simply cannot be thrown accurately enough to matter.",
      "Grenades are also thrown using DEX + Athletics and use the Grenade Launcher DV table, but they deal their **normal explosive damage** in a 10m x 10m area on impact."
    ]
  },
  {
    "id": "fighting-handcuffed",
    "title": "Fighting while handcuffed or restrained",
    "topic": "Combat",
    "tags": [
      "handcuffs",
      "restrained",
      "bound",
      "escape",
      "contortionist",
      "grapple",
      "cuffed"
    ],
    "icon": "🔗",
    "steps": [
      "A handcuffed or bound character suffers **-4 to all Actions** that require the use of their hands — this includes most attacks, reloading, and skill checks involving manipulation.",
      "The character **can still kick** using **Brawling at -2** (feet are free), dealing Brawling damage based on BODY. This is the primary offensive option while restrained.",
      "To escape handcuffs, roll **DEX + Contortionist + 1d10** against a DV set by the GM (typically **DV15** for standard cuffs, higher for reinforced). Alternatively, brute-force escape uses **DEX + Athletics**.",
      "While restrained, the character **cannot use two-handed weapons**, cannot Grab or Grapple effectively, and cannot perform any Action requiring fine motor control without the -4 penalty.",
      "An ally can attempt to free you by picking the lock (**TECH + Pick Lock**) or cutting the restraint with an appropriate tool."
    ]
  },
  {
    "id": "vehicle-crashes-into-building",
    "title": "Vehicle crashing into a building",
    "topic": "Vehicles",
    "tags": [
      "vehicle",
      "crash",
      "building",
      "wall",
      "ram",
      "structure",
      "collapse",
      "sdp"
    ],
    "icon": "🏚️",
    "steps": [
      "Treat a building collision as a **Ram** — both the vehicle and the structure take damage. The vehicle takes damage equal to the **wall's HP**, and the wall takes damage equal to the **vehicle's remaining SDP**.",
      "All occupants of the vehicle take **6d6 damage** from the impact and suffer the **Whiplash** Critical Injury (Death Save Penalty +1), just like a standard Ram.",
      "If the wall's HP is reduced to **0**, the vehicle punches through. Anyone on the other side of the wall may be hit at GM discretion — treat them as targets of a Ram (**6d6 damage**).",
      "Structural collapse is a **GM call** — if a load-bearing wall is destroyed, the GM may rule that part of the building collapses, dealing additional damage (typically **4d6 to 6d6**) to anyone in the area.",
      "The vehicle's SDP is reduced by the wall's HP. If SDP hits **0**, the vehicle is **Destroyed** and all occupants take the flat **6d6 destruction damage** on top of Ram damage."
    ]
  },
  {
    "id": "vehicle-gets-emp",
    "title": "EMP grenade vs. a vehicle",
    "topic": "Vehicles",
    "tags": [
      "emp",
      "grenade",
      "vehicle",
      "electronics",
      "disable",
      "cyberware",
      "electromagnetic"
    ],
    "icon": "⚡",
    "steps": [
      "An **EMP grenade** deals no direct damage but forces a **DV15 Cybertech check** or the GM disables **2 pieces of cyberware or electronics** on each affected target for **1 minute**.",
      "Vehicle electronics (ignition, targeting systems, Agent dashboards) count as electronics. A disabled ignition means the vehicle **coasts to a stop** — the driver loses power steering and acceleration.",
      "Occupants with **cyberware** are also affected — each must make the DV15 check or lose 2 pieces of cyberware for 1 minute. Neural Links, Cybereyes, Interface Plugs, and Speedware are all valid targets.",
      "Cyberware with **Hardened Shielding** (1,000eb cyberlimb option) is **immune** to EMP and Non-Black ICE disabling effects.",
      "The driver must still maintain control of a coasting vehicle — roll **REF + Drive Land Vehicle + 1d10 vs. DV13** (Emergency Stop maneuver) or **Lose Control**, which the GM resolves as an uncontrolled Ram."
    ]
  },
  {
    "id": "running-someone-over",
    "title": "Running someone over with a vehicle",
    "topic": "Vehicles",
    "tags": [
      "vehicle",
      "run over",
      "ram",
      "pedestrian",
      "drive",
      "hit",
      "roadkill"
    ],
    "icon": "🚗",
    "steps": [
      "Hitting a pedestrian with a vehicle is treated as a **Ram attack**. The pedestrian can attempt to dodge: **DEX + Evasion + 1d10 vs. DV13**.",
      "If the pedestrian fails to dodge, they take **6d6 damage** and suffer the **Whiplash** Critical Injury (Death Save Penalty +1). This damage is direct — pedestrian armor applies normally.",
      "The vehicle takes **no meaningful damage** from hitting a person — human bodies do not have enough mass to damage a vehicle's SDP in the way another vehicle or wall would.",
      "If the pedestrian succeeds on their dodge (beats DV13), they can choose to end up **beside the vehicle or on top of it** — potentially setting up a dramatic next action.",
      "The driver suffers no Whiplash from hitting a pedestrian. The Ram rules are designed for vehicle-vs-vehicle, so hitting a person is mechanically simpler — the vehicle just keeps going."
    ]
  },
  {
    "id": "unarmed-vs-armed",
    "title": "Fighting unarmed against armed opponents",
    "topic": "Combat",
    "tags": [
      "unarmed",
      "brawling",
      "melee",
      "ranged",
      "disadvantage",
      "fist",
      "body"
    ],
    "icon": "👊",
    "steps": [
      "Unarmed attacks use **DEX + Brawling + 1d10** vs. the defender's **DEX + Evasion + 1d10**. Damage is determined by BODY: **1d6** (BODY 4-), **2d6** (BODY 5-6 or 4+ with Cyberarm), **3d6** (BODY 7-10), **4d6** (BODY 11+).",
      "Unlike melee weapons, Brawling attacks do **not** halve the defender's armor SP — you are punching directly into their full armor value, making it very hard to hurt armored targets.",
      "Against a **ranged** opponent, you must close distance fast. You get **MOVE x 2 m/yds** of movement per Turn plus a **Run Action** (MOVE x 4 total). If you cannot reach them in one Turn, you are eating bullets.",
      "Brawling is **2 ROF** (two punches per Action), which helps offset the lower damage. Combined with a Grab Action, you can grapple an armed opponent to neutralize their weapon advantage.",
      "Best strategy: **close distance immediately**, use a **Grab** to enter a Grapple (both at -2 to Actions, neither can use two-handed weapons), then **Choke** for BODY damage direct to HP ignoring armor."
    ]
  },
  {
    "id": "detached-cyberlimb-as-weapon",
    "title": "Using a detached cyberlimb as a weapon",
    "topic": "Combat",
    "tags": [
      "cyberlimb",
      "cyberarm",
      "cyberleg",
      "improvised",
      "weapon",
      "melee",
      "detached"
    ],
    "icon": "🦾",
    "steps": [
      "There is no explicit rule for this — it falls under **GM ruling**. A detached Cyberarm or Cyberleg is a solid chunk of metal and plastic, making it a reasonable improvised weapon.",
      "Treat it as an **improvised Heavy Melee Weapon** dealing **3d6 damage** — it has the weight and rigidity of a club or pipe. The GM may rule it as Medium Melee (2d6) for a smaller limb.",
      "As an improvised weapon, it should be treated as **Poor quality** — on a natural roll of **1** on the attack die, it jams (or in this case, breaks or becomes unwieldy for the rest of the fight).",
      "The attack roll uses **DEX + Melee Weapon + 1d10** vs. the defender's **DEX + Evasion + 1d10**, and like all melee weapons, it **halves the target's armor SP** (rounded up).",
      "The original owner of the limb now has a **Dismembered Arm/Leg Critical Injury** — drop held items, Death Save Penalty +1, and for a leg: -6 MOVE (min 1) and cannot dodge."
    ]
  },
  {
    "id": "multiple-netrunners-same-arch",
    "title": "Multiple Netrunners in the same Architecture",
    "topic": "Netrunning",
    "tags": [
      "netrunner",
      "multiple",
      "architecture",
      "coop",
      "same net",
      "two netrunners",
      "team"
    ],
    "icon": "🌐",
    "steps": [
      "Multiple Netrunners **can** be jacked into the same NET Architecture simultaneously — each one navigates the floors independently on their own Initiative.",
      "They can **share information** about what they have found — revealed floors, Black ICE positions, Password DVs, File locations — by communicating in meatspace or via Agent.",
      "One Netrunner can **trigger Black ICE** on a floor, causing it to chase them, which **clears the way** for the second Netrunner to pass that floor safely.",
      "Each Netrunner uses their own **Cyberdeck, Programs, and Interface Rank** independently. NET Actions are not pooled — each gets their own allotment based on their Interface Rank (2-5 per Turn).",
      "If one Netrunner uses **Cloak**, it only hides their own traces — the other Netrunner must Cloak separately or their presence is automatically detectable via Pathfinder."
    ]
  },
  {
    "id": "netrunner-vs-netrunner",
    "title": "Netrunner vs. Netrunner combat in the NET",
    "topic": "Netrunning",
    "tags": [
      "netrunner",
      "pvp",
      "net combat",
      "zap",
      "brain damage",
      "sword",
      "attack program"
    ],
    "icon": "⚔️",
    "steps": [
      "**Zap** is the basic Netrunner-vs-Netrunner attack: **Interface + 1d10 vs. enemy Netrunner's Interface + 1d10**. On a hit, it deals **1d6 damage directly to the target's brain** (their HP, not a Program).",
      "**Anti-Personnel Attacker Programs** also work against enemy Netrunners — Hellbolt deals **2d6 brain damage** and sets the target's Cyberdeck on fire, Vrizzbolt deals **1d6 brain damage** and costs them a NET Action.",
      "Programs like **Sword** (ATK 1, 3d6 to Black ICE / 2d6 to Non-Black ICE) and **Banhammer** are Anti-Program weapons — they target the enemy's **Programs and their REZ**, not the Netrunner's brain directly.",
      "**Defender Programs** protect the Netrunner's brain: **Armor** reduces brain damage by 4, **Shield** stops the first hit of Non-Black ICE brain damage, **Flak** reduces Non-Black ICE ATK to 0.",
      "If a Netrunner's **HP reaches 0** from brain damage, they are **brain-dead** — permanently and irreversibly dead. There is **no Death Save** for brain death in the NET. Their body in meatspace collapses, lifeless."
    ]
  },
  {
    "id": "access-point-destroyed-while-jacked",
    "title": "Access point destroyed while jacked in",
    "topic": "Netrunning",
    "tags": [
      "access point",
      "destroyed",
      "jack out",
      "forced",
      "damage",
      "disconnect",
      "netrunner"
    ],
    "icon": "🔌",
    "steps": [
      "If the access point is destroyed while a Netrunner is jacked in, the Netrunner is **forcefully jacked out** — this is not a safe disconnection.",
      "An unsafe Jack Out means the Netrunner suffers the effects of **all Black ICE currently in combat with them** — each piece of Black ICE gets to apply its Effect one final time as the connection severs.",
      "The forced disconnection also deals **direct brain damage** — typically **2d6 damage directly to HP** — as the neural link is violently interrupted. This damage ignores armor.",
      "Any Programs the Netrunner had **active are Deactivated** but not Destroyed — they can be Reactivated on the next Netrun. The Cyberdeck itself is not damaged unless Black ICE specifically caused fire.",
      "The Netrunner must find a **new access point** to jack back in. Access points must be within **6 m/yds** to connect — the old wireless NET died in the DataKrash and has not returned."
    ]
  },
  {
    "id": "can-you-netrun-wirelessly",
    "title": "Can you Netrun wirelessly?",
    "topic": "Netrunning",
    "tags": [
      "wireless",
      "wifi",
      "remote",
      "access point",
      "jack in",
      "datakrash",
      "old net"
    ],
    "icon": "📡",
    "steps": [
      "**No.** Wireless Netrunning is not possible in Cyberpunk RED. The old global wireless NET was destroyed in the **DataKrash** of 2022 when Rache Bartmoss unleashed RABIDS (self-replicating AI viruses).",
      "To Netrun, you must be **physically jacked in** via cable to an access point that is within **6 m/yds** of your position. This requires **Neural Link + Interface Plugs** cyberware.",
      "NET Architectures are now **local** — each building, compound, or facility has its own isolated Architecture. There is no global network to surf from your couch.",
      "The **Data Pool** exists as a city-level network for basic communication (Agents, messaging, media), but it is **not** Netrunnable — it has no Architecture, no ICE, and no loot. It is just infrastructure.",
      "This physical limitation is why Netrunners must **go on missions** with the team — they need to reach the access point in meatspace before they can do anything in the NET."
    ]
  },
  {
    "id": "time-in-net-vs-meatspace",
    "title": "Time in the NET vs. meatspace",
    "topic": "Netrunning",
    "tags": [
      "net",
      "time",
      "meatspace",
      "initiative",
      "speed",
      "turns",
      "action economy"
    ],
    "icon": "⏱️",
    "steps": [
      "There is **no time dilation** in the NET. NET Actions happen at the **same speed** as Meat Actions — one Turn in the NET is one Turn (6 seconds) in meatspace.",
      "A Netrunner acts on their **normal Initiative** (REF + 1d10). On their Turn, they choose to take either **Meat Actions** (one Action in reality) or **NET Actions** (multiple actions in the NET).",
      "The number of NET Actions per Turn depends on **Interface Rank**: Rank 1-3 = **2 NET Actions**, Rank 4-6 = **3**, Rank 7-9 = **4**, Rank 10 = **5**.",
      "The Netrunner always gets their **Move Action** regardless of whether they chose Meat or NET Actions — they can physically reposition in meatspace even while Netrunning.",
      "Without **Virtuality Goggles**, a Netrunner jacked into the NET is effectively **Unconscious** in meatspace — they cannot perceive reality. With goggles, cyberspace is overlaid on their real-world vision."
    ]
  },
  {
    "id": "both-medtechs-down",
    "title": "What to do when both Medtechs are down",
    "topic": "Medical",
    "tags": [
      "medtech",
      "down",
      "first aid",
      "stabilize",
      "no medic",
      "emergency",
      "anyone"
    ],
    "icon": "🚑",
    "steps": [
      "**Anyone** can attempt First Aid — the check is **TECH + First Aid + 1d10** vs. the wound state DV. Every character has at least a base of +2 in First Aid, so even untrained characters can try.",
      "Stabilization DVs are: **DV10** (Lightly Wounded), **DV13** (Seriously Wounded), **DV15** (Mortally Wounded). Mortally Wounded is the critical one — success heals to **1 HP** and the target falls Unconscious for 1 minute.",
      "Only a **Medtech** can perform **Surgery** (treating the deadliest Critical Injuries like Dismembered Arm, Brain Injury, Lost Eye) and synthesize **Pharmaceuticals** (Speedheal, Stim, etc.).",
      "**Paramedic** (TECH-linked, x2 cost skill) can Quick Fix or Treat most Critical Injuries short of the deadliest. It is separate from the Medtech role — anyone can invest in it.",
      "Priority order when no Medtech is available: **1)** Stabilize Mortally Wounded characters (DV15), **2)** Quick Fix Critical Injuries causing Death Save Penalty increases, **3)** Get to a hospital (100eb/night, treatments included)."
    ]
  },
  {
    "id": "surgery-on-yourself",
    "title": "Can you perform surgery on yourself?",
    "topic": "Medical",
    "tags": [
      "surgery",
      "self",
      "first aid",
      "self-surgery",
      "medtech",
      "treat",
      "quick fix"
    ],
    "icon": "🩹",
    "steps": [
      "**First Aid on yourself** is allowed with no stated penalty — roll **TECH + First Aid + 1d10** vs. the DV as normal. This includes stabilizing your own wounds.",
      "**Quick Fix** on yourself is also allowed — it removes a Critical Injury's Effect for the rest of the day, takes **1 minute**, and uses First Aid, Paramedic, or Cybertech depending on the injury.",
      "**Treatment** (the permanent fix for Critical Injuries) **cannot be performed on yourself** — it takes **4 hours** and the rules explicitly state it cannot be self-administered.",
      "**Surgery** is a Medtech-only skill used for Treatment of the deadliest injuries (DV17 entries like Dismembered Arm, Brain Injury, Lost Eye). Since Treatment cannot be self-performed, Surgery on yourself is **not possible** under standard rules.",
      "In a desperate situation, a GM might allow a self-surgery attempt at a **severe penalty** (-4 or worse), but this is a house rule, not RAW."
    ]
  },
  {
    "id": "can-you-revive-the-dead",
    "title": "Can you revive a dead character?",
    "topic": "Medical",
    "tags": [
      "dead",
      "death",
      "revive",
      "resurrection",
      "death save",
      "failed",
      "permanent death"
    ],
    "icon": "💀",
    "steps": [
      "**No.** Once a character fails a single Death Save, they are **dead**. There is no resurrection, revival, or second chance in Cyberpunk RED's standard rules.",
      "Death Saves are rolled at the start of each Turn while **Mortally Wounded** (below 1 HP): roll **d10 and must roll UNDER your BODY stat** to survive. A roll of **10 always fails**.",
      "The Death Save Penalty increases by **+1 for each Death Save made** AND **+1 each time the Mortally Wounded character takes damage**. This means death comes fast — a BODY 6 character might only survive 5-6 rolls.",
      "Stabilization is the only way to save a Mortally Wounded character — a successful **TECH + First Aid/Paramedic + 1d10 vs. DV15** heals them to **1 HP** and resets the penalty to their Base Death Save Penalty.",
      "Certain Critical Injuries (Dismembered Arm, Collapsed Lung, Spinal Injury, etc.) permanently increase the **Base Death Save Penalty by +1** each, making future Mortally Wounded situations even more dangerous."
    ]
  },
  {
    "id": "bleeding-out-timeline",
    "title": "How fast can you bleed out?",
    "topic": "Medical",
    "tags": [
      "bleeding",
      "mortally wounded",
      "death save",
      "timeline",
      "dying",
      "turns",
      "rounds"
    ],
    "icon": "🩸",
    "steps": [
      "A **Mortally Wounded** character (below 1 HP) must make a **Death Save** at the start of each Turn. Each Turn is **6 seconds**, so the clock is ticking fast.",
      "The Death Save Penalty increases by **+1 per Death Save rolled** — first save is at base penalty, second at +1, third at +2, and so on. A BODY 6 character starts failing reliably by the 4th or 5th roll.",
      "Taking **any damage** while Mortally Wounded adds another **+1 to the Death Save Penalty** AND inflicts an additional **Critical Injury**. Getting shot while dying can push the penalty past your BODY instantly.",
      "Mortally Wounded also imposes **-4 to all Actions** and **-6 to MOVE** (minimum 1). The character is barely functional — crawling, gasping, fading.",
      "Realistic timeline: a character with **BODY 6** and no prior injuries has roughly **18-30 seconds** (3-5 Turns) before the escalating penalty makes death nearly certain. With incoming fire, it can be **one Turn**."
    ]
  },
  {
    "id": "prosthetic-replacement",
    "title": "Replacing a lost limb",
    "topic": "Medical",
    "tags": [
      "prosthetic",
      "cyberarm",
      "cyberleg",
      "dismembered",
      "replacement",
      "limb",
      "surgery",
      "humanity"
    ],
    "icon": "🦿",
    "steps": [
      "A lost limb (from Dismembered Arm/Hand/Leg Critical Injuries) can be replaced with a **Cyberarm** (500eb, Hospital install, **7 Humanity Loss**) or **Cyberleg** (100eb, Hospital install, **3 Humanity Loss**).",
      "Installation requires **Surgery** (Medtech role ability) at the appropriate DV — typically **DV17** for dismemberment Treatment. The limb cannot be installed while the Critical Injury is untreated.",
      "Cyberlimbs come with **Option Slots** (Cyberarm: 4 slots, Cyberleg: 3 slots) that can hold upgrades like Wolvers, Popup Weapons, Grip Foot, Jump Booster, and more.",
      "Alternatively, a **biosculpted meat replacement** (medical-grade, therapeutic purpose) has **no Humanity cost** but offers no enhancement — it is just a normal limb. This is more expensive and harder to obtain.",
      "Each piece of cyberware installed reduces your **maximum recoverable Humanity by 2** (4 for borgware). A Cyberarm replacement means your Humanity cap drops by 2 permanently unless the cyberware is later removed."
    ]
  },
  {
    "id": "forcefully-drugging-someone",
    "title": "Forcefully drugging someone",
    "topic": "Drugs",
    "tags": [
      "drug",
      "airhypo",
      "force",
      "unwilling",
      "inject",
      "restrained",
      "grab",
      "dose"
    ],
    "icon": "💉",
    "steps": [
      "Drugs are administered via **Airhypo**. For a willing target, it costs **1 Action**. For an unwilling target, it requires a **Melee Weapon Attack** — on a hit, the dose is administered instead of dealing damage.",
      "The Airhypo attack uses **DEX + Melee Weapon Skill + 1d10** vs. the target's **DEX + Evasion + 1d10**. If the target is **restrained or Grabbed**, they cannot effectively dodge.",
      "Once dosed, the target is **automatically affected** by the drug's Primary Effect — there is no Resist check for the Primary Effect. The target only rolls **WILL + Resist Torture/Drugs + 1d10** against the **Secondary Effect DV** when the Primary Effect wears off.",
      "A Grabbed or restrained target makes drugging much easier — the Grapple imposes **-2 to all Actions** for both parties, and a restrained target effectively cannot resist the Airhypo delivery.",
      "Medtech **Pharmaceuticals** (Rapidetox, Speedheal, Stim, etc.) follow the same delivery rules — the Airhypo is the universal delivery method. Rapidetox can also be used to **purge** an unwanted drug already in effect."
    ]
  },
  {
    "id": "equipment-in-water",
    "title": "Equipment behavior underwater",
    "topic": "Equipment",
    "tags": [
      "water",
      "underwater",
      "swimming",
      "electronics",
      "guns",
      "melee",
      "waterproof"
    ],
    "icon": "🌊",
    "steps": [
      "**Electronics** (Agents, Cyberdecks, non-sealed cyberware) will short out underwater unless specifically waterproofed — this is a GM ruling, as CPR does not have explicit waterproofing rules for most gear.",
      "**Guns can fire underwater** but at a significant penalty — apply at least **-4** to the attack roll due to water resistance, reduced visibility, and altered ballistics. Exact ruling is GM discretion.",
      "**Melee weapons** work normally underwater — water resistance slows the swing but the rules do not impose a specific mechanical penalty. A knife fight underwater is just as dangerous.",
      "**Armor SP is unchanged** by water — Armorjack, Kevlar, and body armor still provide their listed SP. However, heavy armor may impose additional swimming difficulties at GM discretion.",
      "**Swimming** uses **DEX + Athletics + 1d10** for checks. Characters in heavy armor (Medium Armorjack or heavier, which already impose **-2 to DEX**) will struggle significantly."
    ]
  },
  {
    "id": "improvised-armor",
    "title": "Using improvised objects as armor and cover",
    "topic": "Equipment",
    "tags": [
      "improvised",
      "cover",
      "table",
      "car door",
      "dumpster",
      "hp",
      "barrier"
    ],
    "icon": "🪑",
    "steps": [
      "Improvised cover is treated as **barriers with HP** — they absorb damage until destroyed, at which point they no longer provide protection. This is **not** SP on your body.",
      "Typical HP values at GM discretion: a flipped **table** has roughly **10 HP**, a **car door** about **25 HP** (vehicle glass has **0 HP** and provides no cover), a **dumpster** around **30 HP**.",
      "When a barrier is hit, reduce its HP by the **full damage** of the attack. Unlike body armor, barriers do **not** ablate — they simply lose HP until they hit 0 and are destroyed.",
      "For **explosives**, if the blast destroys the cover (reduces it to 0 HP), excess damage **passes through** to targets behind it. This is different from normal ranged attacks, where excess damage is lost.",
      "You cannot wear improvised objects as armor — holding a car door in front of you is cover, not worn SP. The distinction matters: cover requires positioning, worn armor goes everywhere with you."
    ]
  },
  {
    "id": "weapon-maintenance",
    "title": "Weapon maintenance and degradation",
    "topic": "Equipment",
    "tags": [
      "weapon",
      "maintenance",
      "degrade",
      "jam",
      "poor quality",
      "repair",
      "break"
    ],
    "icon": "🔧",
    "steps": [
      "Cyberpunk RED has **no explicit weapon maintenance or degradation rules** — standard and excellent quality weapons do not wear out, jam, or break from normal use.",
      "**Poor quality weapons** have one critical weakness: on a natural roll of **1** on the attack die (before Critical Failure), the weapon **jams** and cannot be used until cleared (requires an Action).",
      "Weapons can be damaged or destroyed by **Critical Injury effects** or specific narrative circumstances (GM ruling), but there is no round count or cleaning schedule.",
      "A **Tech** character can repair damaged weapons using **TECH + Weaponstech + 1d10** against an appropriate DV. This also applies to upgrading weapon quality from Poor to Standard.",
      "The simplicity is intentional — CPR focuses on action movie pacing, not gear maintenance simulationism. If your weapon works, it works until the story says otherwise."
    ]
  },
  {
    "id": "modifying-armor",
    "title": "Modifying and improving armor",
    "topic": "Equipment",
    "tags": [
      "armor",
      "modify",
      "upgrade",
      "sp",
      "ablation",
      "repair",
      "layering",
      "tech"
    ],
    "icon": "🛡️",
    "steps": [
      "You **cannot add SP** to existing armor through modification — there is no crafting rule to turn SP11 Armorjack into SP13. What you buy is what you get.",
      "A **Tech** can repair **ablated SP** using **TECH + Basic Tech + 1d10** at an appropriate DV — this restores SP lost from combat, returning the armor to its original value.",
      "**Layering armor** is the only way to increase protection: wear two pieces, but **only the highest SP counts**. The lower-SP layer acts as a backup when the outer layer is fully ablated.",
      "Armor ablates by **1 SP** each time damage gets through it (2 SP for Armor-Piercing ammo). Once SP hits 0, the armor is destroyed and must be replaced.",
      "**Subdermal Armor** (SP11, 1,000eb cyberware) and **Skin Weave** (SP7, 500eb cyberware) do not stack with worn body armor — only the highest SP applies, same as layering."
    ]
  },
  {
    "id": "negotiating-with-gangs",
    "title": "Negotiating with gangs",
    "topic": "Social",
    "tags": [
      "gang",
      "negotiate",
      "streetwise",
      "persuasion",
      "cool",
      "reputation",
      "social"
    ],
    "icon": "🤝",
    "steps": [
      "Before negotiating, roll **COOL + Streetwise + 1d10** to assess the gang's culture, hierarchy, and what they value. This determines whether you even know the right approach — wrong customs can start a fight.",
      "The actual negotiation uses **COOL + Persuasion + 1d10** as an **Opposed Check** vs. the gang leader's **COOL + Persuasion (or Concentration) + 1d10**. Offer something they want to lower the effective DV.",
      "**Reputation** matters enormously — if the gang leader rolls under your Rep Level on a d10, they have heard of you. A high Rep can grant bonuses to social checks or make negotiation unnecessary.",
      "Bringing a **Fixer** helps — their **Operator** role ability provides Contacts who may have existing relationships with the gang, and their **Haggle** ability applies to deals involving goods or services.",
      "A wrong approach (insulting their colors, showing disrespect to leadership, flashing rival gang signs) can instantly escalate to combat. The GM sets the consequences based on the gang's temperament."
    ]
  },
  {
    "id": "blackmail-mechanics",
    "title": "How blackmail works mechanically",
    "topic": "Social",
    "tags": [
      "blackmail",
      "leverage",
      "persuasion",
      "social",
      "evidence",
      "threat",
      "coercion"
    ],
    "icon": "📁",
    "steps": [
      "Having genuine **leverage** (evidence of a crime, compromising information, proof of betrayal) effectively **skips the Persuasion check** for most reasonable requests — the target complies to avoid exposure.",
      "For extreme demands (betray their gang, give up their life savings, kill someone), the GM may still require a **COOL + Persuasion + 1d10** check even with leverage, as the target weighs compliance against consequences.",
      "The target may respond with **violence** instead of compliance — especially if they believe they can eliminate you and the evidence. Cornered people are dangerous; always have a dead man's switch.",
      "A **Fixer's** contacts can help **verify or obtain** blackmail material through the Operator ability. A **Media's Credibility** ability can threaten to publish, adding pressure through audience reach.",
      "Counter-blackmail is possible: the target may hire a Netrunner to find and destroy digital evidence, a Solo to eliminate you, or a Fixer to dig up dirt on you in return."
    ]
  },
  {
    "id": "spreading-false-info",
    "title": "Spreading false information",
    "topic": "Social",
    "tags": [
      "lies",
      "deception",
      "false info",
      "media",
      "credibility",
      "conversation",
      "human perception"
    ],
    "icon": "📰",
    "steps": [
      "For **mass disinformation**, a Media's **Credibility** role ability is the primary tool — higher Credibility Rank means larger Audience, greater Believability, and wider Impact of published stories.",
      "For **individual deception**, use **COOL + Conversation + 1d10** (for extracting info through careful conversation) or **COOL + Persuasion + 1d10** (for convincing someone of something specific).",
      "Detecting lies uses **INT + Human Perception + 1d10** as an Opposed Check against the liar's Persuasion or Conversation check. The detector wins ties.",
      "A **Fixer** can spread rumors through their contact network using the **Operator** ability — this is street-level disinformation that spreads organically through the criminal underworld.",
      "Digital disinformation requires a **Netrunner** to plant false files in a NET Architecture or manipulate data accessed through Control Nodes — this is a full Netrun with appropriate risks."
    ]
  },
  {
    "id": "building-a-crew",
    "title": "Building a crew for a job",
    "topic": "Social",
    "tags": [
      "crew",
      "team",
      "fixer",
      "contacts",
      "hiring",
      "loyalty",
      "jobs",
      "party"
    ],
    "icon": "👥",
    "steps": [
      "There are **no formal crew mechanics** in Cyberpunk RED — assembling a team is driven by roleplay, contacts, and the Fixer's Operator ability. Loyalty is earned through shared experience, not a stat.",
      "**Fixers** are the primary crew-builders — their **Operator** ability provides Contacts at various loyalty levels and Reach to find specialists. Higher Operator Rank = more contacts and wider reach.",
      "Common crew compositions: **Neocorporate** (Exec, Netrunner, Fixer, Tech/Medtech, Solos), **Mercenary** (Fixer, Netrunner, Tech, Medtech, Solos/Nomads), **Band** (Rockerboys, Fixer manager, Tech, Solo bodyguards).",
      "Trust is established through **shared jobs** — the GM can use the Lifepath system to create shared history, or simply have the crew's first mission together serve as the bonding experience.",
      "Betrayal is always possible. NPCs hired for a job have their own agendas. A Fixer's contacts come with loyalty ratings, but even loyal contacts may flip if the price is right or the danger too great."
    ]
  },
  {
    "id": "using-lip-reading",
    "title": "How does Lip Reading work?",
    "topic": "Skills",
    "tags": [
      "lip reading",
      "read lips",
      "silent",
      "observation",
      "awareness",
      "distance"
    ],
    "icon": "👄",
    "steps": [
      "**What it is:** The skill of reading someone's lips to tell what they are saying -- visual eavesdropping from a distance without needing to hear them.",
      "**How to roll:** **INT + Lip Reading + 1d10** vs DV set by GM. Clear view at close range DV13, far away or partial view DV17. This is a **x2 cost skill** (double IP to level).",
      "**When to use it:** Surveillance from a distance, reading a conversation through a window, eavesdropping in a loud environment where audio is useless, gathering intel without approaching the target.",
      "**When NOT to use it -- use Perception instead:** Lip Reading determines **what someone is saying**. Perception determines **what is happening around you**. You need Perception to spot the target in the first place, then Lip Reading to understand their conversation. They often work sequentially.",
      "**When NOT to use it -- use Human Perception instead:** Lip Reading tells you **the words** being spoken. Human Perception tells you **the emotions and intent** behind what someone says. Lip Reading is for gathering intel at a distance; Human Perception is for reading someone up close.",
      "**Key rules:** Requires **line of sight** to the target's face. Masks, being turned away, or obstructions make it impossible. x2 cost skill (Level 1 = 40 IP, Level 10 = 400 IP). The target language must be one you speak.",
      "**Special note:** Lip Reading is a niche but powerful surveillance skill. Combined with Image Enhance cybereyes and binoculars, a character can eavesdrop on conversations from across a crowded plaza or through a distant window."
    ]
  },
  {
    "id": "using-pilot-sea-vehicle",
    "title": "How does Pilot Sea Vehicle work?",
    "topic": "Skills",
    "tags": [
      "pilot",
      "sea",
      "boat",
      "ship",
      "submarine",
      "water vehicle",
      "sailing"
    ],
    "icon": "⛵",
    "steps": [
      "**What it is:** The skill of piloting and maneuvering sea vehicles -- boats, yachts, jet skis, submarines, and cargo subs.",
      "**How to roll:** **REF + Pilot Sea Vehicle + 1d10** vs DV. Calm water DV13, rough seas DV15, storm DV17. If REF + skill > 9, basic piloting needs no check.",
      "**When to use it:** Piloting any watercraft, performing maneuvers on water, navigating rough seas, submarine operations, waterborne chases.",
      "**When NOT to use it -- use Drive Land Vehicle or Pilot Air Vehicle instead:** Pilot Sea Vehicle is strictly for **water vehicles**. Ground vehicles use Drive Land Vehicle. Air vehicles use Pilot Air Vehicle. Each domain has its own control skill.",
      "**When NOT to use it -- use Sea Vehicle Tech instead:** Pilot Sea Vehicle is for **operating** the vessel. Sea Vehicle Tech is for **repairing and maintaining** it. Navigating rough seas = Pilot Sea Vehicle. Fixing a hull breach = Sea Vehicle Tech.",
      "**Key rules:** Failed checks risk capsizing or collision. Occupants of a capsized vessel may need to swim (DEX + Athletics). Nomads with Moto add their rank to this skill. Same basic control rules as land vehicles apply.",
      "**Special note:** Sea vehicles are less common in most campaigns but critical for coastal operations and the shipping lanes around Night City. Ship Rat Nomad families specialize in sea operations."
    ]
  },
  {
    "id": "using-riding",
    "title": "How does Riding work?",
    "topic": "Skills",
    "tags": [
      "riding",
      "horse",
      "animal",
      "mount",
      "control"
    ],
    "icon": "🐎",
    "steps": [
      "**What it is:** The skill of riding a living creature trained for the purpose -- horses, camels, and other rideable animals.",
      "**How to roll:** **REF + Riding + 1d10** vs DV. Simple riding DV9, difficult maneuvers (gallop through traffic) DV15, combat while mounted DV17.",
      "**When to use it:** Riding a horse or other mount, mounted combat, controlling an animal during stressful situations, performing riding maneuvers.",
      "**When NOT to use it -- use Animal Handling instead:** Riding is for **controlling a mount while riding it**. Animal Handling is for **interacting with animals in general** (calming, training, commanding). Galloping a horse through a firefight = Riding. Getting a spooked horse to calm down before you mount = Animal Handling.",
      "**When NOT to use it -- use Drive Land Vehicle instead:** Riding is for **living mounts**. Drive Land Vehicle is for **motorized ground vehicles**. In the Badlands, Nomads may use both -- motorcycles on roads, horses in rough terrain.",
      "**Key rules:** Falling from a mount is treated as falling damage based on speed. Mounted characters gain height advantage but are also larger targets. Mounts have their own HP and can be targeted separately.",
      "**Special note:** Riding is most relevant in Badlands campaigns where Nomad families may use horses for patrol and transport. In urban Night City, it is rare but not unheard of -- some gangs use horses for style and practicality in areas where vehicles cannot reach."
    ]
  },
  {
    "id": "using-accounting",
    "title": "How does Accounting work?",
    "topic": "Skills",
    "tags": [
      "accounting",
      "money",
      "finance",
      "books",
      "audit",
      "fraud"
    ],
    "icon": "📊",
    "steps": [
      "**What it is:** The skill of balancing books, creating and identifying false books, juggling numbers, creating budgets, and handling day-to-day business operations from a financial perspective.",
      "**How to roll:** **INT + Accounting + 1d10** vs DV. Simple books DV13, corporate accounting DV15, deliberately hidden fraud DV17+. This is a **x2 cost skill** (double IP to level).",
      "**When to use it:** Analyzing financial records, detecting embezzlement, tracing money flows, identifying fraud, understanding corporate finances, creating convincing false financial records, auditing books.",
      "**When NOT to use it -- use Business instead:** Accounting is for **financial records and number-crunching** specifically. Business is for **broader commercial knowledge** (corporate structures, market analysis, management, deals). Tracing money through shell companies = Accounting. Understanding a corporation's market strategy = Business.",
      "**When NOT to use it -- use Criminology instead:** Accounting finds **financial** crimes (embezzlement, fraud, money laundering). Criminology investigates **physical** crimes (murder, theft, forensics). If the evidence is in a spreadsheet, use Accounting. If it is at a crime scene, use Criminology.",
      "**Key rules:** x2 cost skill (Level 1 = 40 IP, Level 10 = 400 IP). Creating false books uses the same skill as detecting them (opposed check). A complementary Accounting check can grant +1 to subsequent investigation or social checks involving corporate targets.",
      "**Special note:** Accounting is niche but invaluable for campaigns involving corporate intrigue. Execs, Fixers, and Medias investigating corporations will find this skill opens doors that no amount of Persuasion can."
    ]
  },
  {
    "id": "using-animal-handling",
    "title": "How does Animal Handling work?",
    "topic": "Skills",
    "tags": [
      "animal handling",
      "tame",
      "train",
      "calm",
      "animals",
      "beast"
    ],
    "icon": "🐾",
    "steps": [
      "**What it is:** The skill of handling, training, and caring for animals -- calming hostile creatures, training commands, and managing domesticated or wild animals.",
      "**How to roll:** **INT + Animal Handling + 1d10** vs DV. Train a basic command DV13, calm a hostile animal DV15, handle an exotic animal DV17.",
      "**When to use it:** Calming a hostile or frightened animal, training an animal to follow commands, caring for pack animals, interacting with guard dogs, managing livestock, approaching wild animals safely.",
      "**When NOT to use it -- use Riding instead:** Animal Handling is for **interacting with animals** (calming, training, commanding). Riding is for **controlling a mount while riding it**. Getting a wild horse to accept a saddle = Animal Handling. Galloping that horse through a firefight = Riding.",
      "**When NOT to use it -- use Wilderness Survival instead:** Animal Handling is for **direct interaction** with specific animals. Wilderness Survival covers **general outdoor knowledge** including avoiding dangerous wildlife, finding animal trails, and understanding animal behavior in the wild at a broader level.",
      "**Key rules:** Failed checks may result in the animal attacking or fleeing. Time for training varies: basic commands take days to weeks of consistent work. Exotic or dangerous animals may have higher DVs at GM discretion.",
      "**Special note:** Most useful in Badlands campaigns where feral animals and Nomad pack animals are common. In urban Night City, guard dogs and bioengineered animals may require this skill. Some Nomad families use trained animals for security and transport."
    ]
  },
  {
    "id": "using-bureaucracy",
    "title": "How does Bureaucracy work?",
    "topic": "Skills",
    "tags": [
      "bureaucracy",
      "government",
      "paperwork",
      "permits",
      "red tape",
      "official"
    ],
    "icon": "📋",
    "steps": [
      "**What it is:** The skill of dealing with bureaucrats, knowing who to talk to in a bureaucracy, how to reach them, and how to extract information from bureaucracies -- navigating government and official systems.",
      "**How to roll:** **INT + Bureaucracy + 1d10** vs DV. Standard requests DV13, expedited processing DV15, bending rules DV17+.",
      "**When to use it:** Getting permits, filing paperwork, understanding regulations, dealing with government agencies, navigating corporate HR departments, expediting official processes, finding the right person in an organization.",
      "**When NOT to use it -- use Business instead:** Bureaucracy is for **government and official systems** (permits, regulations, government agencies). Business is for **commercial and corporate operations** (market analysis, corporate structure, business deals). Getting a building permit from city hall = Bureaucracy. Understanding Arasaka's corporate hierarchy = Business.",
      "**When NOT to use it -- use Persuasion instead:** Bureaucracy is about **knowing the system** (who to talk to, what forms to file, how to expedite). Persuasion is about **convincing a specific person**. Knowing which office handles your request = Bureaucracy. Convincing the clerk to process it faster = Persuasion.",
      "**Key rules:** Night City's bureaucracy is a mess. Most edgerunners skip it entirely, which is why Fixers exist. However, sometimes the legal route is the safest route, especially when dealing with Lawmen or official investigations.",
      "**Special note:** Bureaucracy is surprisingly useful for Lawmen and Execs who operate within official systems. A complementary Bureaucracy check before dealing with government entities can provide +1 to subsequent social checks with officials."
    ]
  },
  {
    "id": "using-business",
    "title": "How does Business work?",
    "topic": "Skills",
    "tags": [
      "business",
      "commerce",
      "management",
      "corporate",
      "negotiate",
      "deal"
    ],
    "icon": "💼",
    "steps": [
      "**What it is:** The skill of basic business practices, laws of supply and demand, employee management, procurement, sales, and marketing -- commercial and corporate knowledge. This is a **x2 cost skill**.",
      "**How to roll:** **INT + Business + 1d10** vs DV. Basic business knowledge DV13, market analysis DV15, complex corporate maneuvering DV17+.",
      "**When to use it:** Understanding corporate structures, evaluating business deals, managing resources, market analysis, identifying profitable opportunities, understanding corporate politics and power dynamics.",
      "**When NOT to use it -- use Bureaucracy instead:** Business is for **commercial and corporate operations** (deals, markets, corporate structure). Bureaucracy is for **government and official systems** (permits, regulations, agencies). Evaluating a merger opportunity = Business. Filing the regulatory paperwork for the merger = Bureaucracy.",
      "**When NOT to use it -- use Accounting instead:** Business covers **broad commercial knowledge** (strategy, management, markets). Accounting is specifically **financial records and number-crunching** (auditing, fraud detection, budgets). Understanding why a company is failing = Business. Finding where the money went = Accounting.",
      "**Key rules:** x2 cost skill (Level 1 = 40 IP, Level 10 = 400 IP). Essential for Execs running corporate operations. A complementary Business check can grant +1 to negotiations involving corporate deals or resource management.",
      "**Special note:** Business is the Exec's bread and butter. Combined with the Exec's Team role ability, high Business skill lets an Exec character navigate the corporate world with authority. Also useful for Fixers evaluating deals and Medias investigating corporate stories."
    ]
  },
  {
    "id": "using-composition",
    "title": "How does Composition work?",
    "topic": "Skills",
    "tags": [
      "composition",
      "writing",
      "poetry",
      "songwriting",
      "lyrics",
      "creative writing"
    ],
    "icon": "✍",
    "steps": [
      "**What it is:** The skill of professionally writing songs, articles, stories, poetry, propaganda, and other written works.",
      "**How to roll:** **INT + Composition + 1d10** vs DV. Decent work DV13, professional quality DV15, something truly moving/viral DV17+.",
      "**When to use it:** Writing songs (Rockerboys), articles and screamsheet copy (Medias), propaganda, manifestos, compelling letters, creative writing, coded messages disguised as normal text.",
      "**When NOT to use it -- use Forgery instead:** Composition creates **original written works** (songs, articles, stories). Forgery creates **fake documents designed to pass as real** (IDs, permits, official correspondence). Writing a propaganda broadsheet = Composition. Creating a fake corporate memo = Forgery.",
      "**When NOT to use it -- use Education instead:** Composition is the **craft of writing** -- creating compelling, well-structured text. Education is **general knowledge** including basic literacy. Anyone with Education can write a coherent sentence; Composition makes it persuasive, moving, or publishable.",
      "**Key rules:** Composition is an INT skill -- it rewards smart characters who can structure arguments and craft narratives. A complementary Composition check can grant +1 to subsequent Persuasion or social checks if the written piece is distributed beforehand.",
      "**Special note:** Rockerboys use Composition for lyrics paired with Play Instrument and Charismatic Impact. Medias use it for articles paired with Photography/Film and Credibility. A well-composed piece of propaganda can shift public opinion without the author ever being present."
    ]
  },
  {
    "id": "using-deduction",
    "title": "How does Deduction work?",
    "topic": "Skills",
    "tags": [
      "deduction",
      "logic",
      "reasoning",
      "puzzle",
      "figure out",
      "analyze"
    ],
    "icon": "🧠",
    "steps": [
      "**What it is:** The skill of logical reasoning, connecting clues, and drawing conclusions from available information.",
      "**How to roll:** **INT + Deduction + 1d10** vs DV set by GM (DV13 straightforward, DV15 complex, DV17+ leaps of logic).",
      "**When to use it:** Analyzing clues at a scene, solving puzzles, predicting someone's next move based on their pattern, connecting disparate pieces of information.",
      "**When to use something else:** Use **Criminology** for crime-scene-specific analysis (forensics, cause of death, evidence reading). Use **Education** for recalling known facts. Deduction is for *figuring out new things* from what you already know.",
      "**Key details:** The GM may provide bonus information or reveal hidden connections on a successful check. Complementary to Criminology and Perception."
    ]
  },
  {
    "id": "using-gamble",
    "title": "How does Gamble work?",
    "topic": "Skills",
    "tags": [
      "gamble",
      "gambling",
      "cards",
      "poker",
      "dice",
      "betting",
      "casino"
    ],
    "icon": "🎰",
    "steps": [
      "**What it is:** Knowledge of gambling games, betting strategy, reading other players, and knowing when to fold.",
      "**How to roll:** **INT + Gamble + 1d10** vs opponent's **INT + Gamble + 1d10** (opposed) for player-vs-player games.",
      "**When to use it:** Card games, dice games, betting on fights/races, reading a bluff at the poker table.",
      "**When to use something else:** Use **Human Perception** to read someone's emotions (Gamble only reads gambling tells). Use **TECH + Conceal/Reveal** to cheat (hiding cards, loaded dice), detected by opponent's **INT + Gamble**.",
      "**Key details:** Can be used for earning eddies during downtime. House always has an edge at DV-based games of chance."
    ]
  },
  {
    "id": "using-wilderness-survival",
    "title": "How does Wilderness Survival work?",
    "topic": "Skills",
    "tags": [
      "wilderness",
      "survival",
      "badlands",
      "camping",
      "foraging",
      "navigation",
      "outdoor"
    ],
    "icon": "🏕",
    "steps": [
      "**What it is:** Knowing how to survive outside the city: finding food, water, shelter, navigation, and avoiding environmental hazards.",
      "**How to roll:** **INT + Wilderness Survival + 1d10** vs DV (find food/water DV13, navigate without GPS DV15, survive harsh conditions DV17).",
      "**When to use it:** Travelling through the Badlands, surviving after a vehicle breakdown, foraging for food, reading weather, avoiding natural hazards.",
      "**When to use something else:** Use **Athletics** for physical feats in the wild (climbing, swimming). Use **Tracking** to follow someone through wilderness. Wilderness Survival is about *staying alive*, not pursuing targets.",
      "**Key details:** Critical in the Badlands. Failed checks mean getting lost, going hungry, or stumbling into danger. Nomads often have this at high levels."
    ]
  },
  {
    "id": "using-play-instrument",
    "title": "How does Play Instrument work?",
    "topic": "Skills",
    "tags": [
      "instrument",
      "music",
      "guitar",
      "play",
      "performance",
      "band"
    ],
    "icon": "🎸",
    "steps": [
      "**What it is:** The ability to play a musical instrument with skill. Each instrument is a *separate* skill (guitar, drums, synth, violin, etc.).",
      "**How to roll:** **TECH + Play Instrument + 1d10** vs DV (DV13 competent, DV15 impressive, DV17+ virtuoso).",
      "**When to use it:** Performing at a venue, busking for eddies, accompanying a Rockerboy, impressing someone, creating a distraction.",
      "**When to use something else:** Use **Composition** for *writing* music. Use **Charismatic Impact** (Rockerboy ability) for *moving crowds*. Play Instrument is the technical execution, not the creative or social impact.",
      "**Key details:** Rockerboys combine this with Charismatic Impact for maximum effect. You need an actual instrument to use this skill."
    ]
  },
  {
    "id": "using-air-vehicle-tech",
    "title": "How does Air Vehicle Tech work?",
    "topic": "Skills",
    "tags": [
      "air vehicle",
      "tech",
      "repair",
      "av",
      "helicopter",
      "gyrocopter",
      "maintain"
    ],
    "icon": "✈",
    "steps": [
      "**What it is:** The technical skill of repairing, maintaining, and modifying air vehicles (AVs, gyrocopters, helicopters, aerozeps).",
      "**How to roll:** **TECH + Air Vehicle Tech + 1d10** vs DV (routine maintenance DV13, field repairs DV15, major damage DV17+).",
      "**When to use it:** Fixing a damaged AV after combat, performing pre-flight checks, modifying an air vehicle, diagnosing engine problems.",
      "**When to use something else:** Use **Land Vehicle Tech** for ground vehicles. Use **Sea Vehicle Tech** for boats. Use **Basic Tech** only if no specific vehicle tech skill applies (and at higher DV). Use **Pilot Air Vehicle** for *flying*, not repairing.",
      "**Key details:** Nomads with Moto ability add their rank to this skill. Air vehicle parts are expensive and hard to find."
    ]
  },
  {
    "id": "using-paint-draw-sculpt",
    "title": "How does Paint/Draw/Sculpt work?",
    "topic": "Skills",
    "tags": [
      "paint",
      "draw",
      "sculpt",
      "art",
      "creative",
      "visual art",
      "illustration"
    ],
    "icon": "🎨",
    "steps": [
      "**What it is:** Creating visual art: painting, drawing, sculpting, tattoo design, graffiti, murals, and digital art.",
      "**How to roll:** **TECH + Paint/Draw/Sculpt + 1d10** vs DV (DV13 decent, DV15 professional, DV17+ masterpiece).",
      "**When to use it:** Creating art for sale, designing tattoos, painting gang tags, creating visual forgeries, sketching a suspect from description.",
      "**When to use something else:** Use **Forgery** for *documents and IDs*. Use **Composition** for *written works*. Use **Photography/Film** for *capturing* images rather than *creating* them. Paint/Draw/Sculpt is handmade visual creation.",
      "**Key details:** Can be used to create visual forgeries of art (opposed by INT + Forgery to detect). Useful for earning downtime eddies."
    ]
  },
  {
    "id": "using-photography-film",
    "title": "How does Photography/Film work?",
    "topic": "Skills",
    "tags": [
      "photography",
      "film",
      "camera",
      "video",
      "record",
      "surveillance",
      "media"
    ],
    "icon": "📷",
    "steps": [
      "**What it is:** Capturing images and video with professional quality: surveillance footage, evidence, media broadcasts, braindance recording.",
      "**How to roll:** **TECH + Photography/Film + 1d10** vs DV (DV13 clear documentation, DV15 professional composition, DV17+ award-winning).",
      "**When to use it:** Documenting evidence, surveillance photography, media broadcasts, recording braindance content, creating promotional material.",
      "**When to use something else:** Use **Paint/Draw/Sculpt** for *creating* images by hand. Use **Perception** for *noticing* things (Photography is about *capturing* them). Medias use Photography/Film constantly.",
      "**Key details:** Useful for evidence gathering, insurance claims, and blackmail material. Quality of the recording matters for credibility."
    ]
  },
  {
    "id": "using-sea-vehicle-tech",
    "title": "How does Sea Vehicle Tech work?",
    "topic": "Skills",
    "tags": [
      "sea vehicle",
      "tech",
      "repair",
      "boat",
      "ship",
      "submarine",
      "maintain"
    ],
    "icon": "⚓",
    "steps": [
      "**What it is:** The technical skill of repairing, maintaining, and modifying sea vehicles (boats, yachts, jet skis, submarines, cargo subs).",
      "**How to roll:** **TECH + Sea Vehicle Tech + 1d10** vs DV (routine maintenance DV13, field repairs DV15, major damage DV17+).",
      "**When to use it:** Fixing a damaged boat, performing hull maintenance, modifying a sea vehicle, diagnosing engine problems on the water.",
      "**When to use something else:** Use **Land Vehicle Tech** for ground vehicles. Use **Air Vehicle Tech** for aircraft. Use **Basic Tech** only if no specific vehicle tech applies. Use **Pilot Sea Vehicle** for *operating*, not repairing.",
      "**Key details:** Nomads with Moto add their rank. Ship Rat Nomad families specialize in this. Sea vehicle parts may need to be sourced through Fixers."
    ]
  }
];

export const KEYWORD_MAP = {};
QUICK_REF.forEach((entry) => {
  entry.tags.forEach((tag) => { KEYWORD_MAP[tag.toLowerCase()] = entry.id; });
});
