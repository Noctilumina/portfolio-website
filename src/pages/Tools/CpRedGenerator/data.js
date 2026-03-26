const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const roll = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pickN = (arr, n) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, arr.length));
};
function weightedPick(items, weights) {
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < items.length; i++) { r -= weights[i]; if (r <= 0) return items[i]; }
  return items[items.length - 1];
}

// ── Name data ──

const FIRST_NAMES = [
  'Vex', 'Raven', 'Jax', 'Nova', 'Kira', 'Zane', 'Nyx', 'Cruz', 'Mika', 'Ash',
  'Blade', 'Echo', 'Jinx', 'Riot', 'Sable', 'Dex', 'Haze', 'Volt', 'Rune', 'Oni',
  'Crimson', 'Ghost', 'Pixel', 'Slash', 'Widow', 'Hex', 'Cipher', 'Striker', 'Ember', 'Frost',
  'Johnny', 'Morgan', 'Casey', 'Yuki', 'Diego', 'Sasha', 'Viktor', 'Lana', 'Rico', 'Tanya',
  'Marcus', 'Priya', 'Tomás', 'Ava', 'Chen', 'Dante', 'Freya', 'Kai', 'Luna', 'Ren',
];
const LAST_NAMES = [
  'Chrome', 'Steele', 'Vance', 'Black', 'Torres', 'Nakamura', 'Volkov', 'Reyes', 'Park', 'Santos',
  'Kovacs', 'Wren', 'Huxley', 'Cross', 'Mercer', 'Ortega', 'Zhao', 'Kessler', 'Vasquez', 'Singh',
  'Tanaka', 'Morrison', 'Kurosawa', 'De Luca', 'Okafor', 'Petrov', 'Kim', 'Alvarez', 'Chen', 'Hoffman',
];
const HANDLES = [
  'Glitch', 'Razor', 'Specter', 'Neon', 'Pulse', 'Wraith', 'Byte', 'Phantom', 'Surge', 'Vector',
  'Daemon', 'Static', 'Zero', 'Apex', 'Rogue', 'Viper', 'Havoc', 'Shade', 'Crux', 'Flux',
];

// ── Roles ──

const ROLES = [
  { name: 'Solo', desc: 'Combat specialist and bodyguard for hire' },
  { name: 'Netrunner', desc: 'Hacker who dives into the NET' },
  { name: 'Fixer', desc: 'Dealmaker and information broker' },
  { name: 'Tech', desc: 'Inventor, mechanic, and gadgeteer' },
  { name: 'Medtech', desc: 'Street doctor and ripperdoc' },
  { name: 'Media', desc: 'Journalist chasing the truth' },
  { name: 'Nomad', desc: 'Road warrior from the wastelands' },
  { name: 'Exec', desc: 'Corporate power player' },
  { name: 'Lawman', desc: 'Badge-carrying authority figure' },
  { name: 'Rockerboy', desc: 'Rebel musician and street poet' },
];

const PERSONALITY = [
  'Cold and calculating', 'Reckless thrill-seeker', 'Paranoid and cautious',
  'Charismatic smooth-talker', 'Quiet and observant', 'Loud and confrontational',
  'Idealistic dreamer', 'Cynical realist', 'Loyal to a fault', 'Ruthlessly pragmatic',
  'Darkly humorous', 'Obsessed with self-improvement', 'Haunted by the past',
  'Relentlessly optimistic', 'Perpetually scheming', 'Honour-bound traditionalist',
  'Addicted to danger', 'Deeply spiritual', 'Fiercely independent', 'Desperate and cornered',
];
const MOTIVATIONS = [
  'Paying off a massive debt', 'Revenge against a megacorp', 'Searching for a missing family member',
  'Building a criminal empire', 'Escaping their past identity', 'Protecting their community',
  'Seeking immortality through cyberware', 'Gathering evidence to expose corruption',
  'Earning enough eddies to leave Night City', 'Hunting a specific target',
  'Keeping a dangerous secret', 'Trying to go legit', 'Looking for their next big score',
  'Atoning for past crimes', 'Chasing a legendary piece of tech',
];

// ── Cyberware (full catalog) ──

const CYBERWARE_ITEMS = [
  { name: 'Neural Link', slot: 'Neuralware', cost: 500, flavor: 'Required foundation for all chipware and smartgun links.', found: 'Any ripperdoc' },
  { name: 'Chipware Socket', slot: 'Neuralware', cost: 500, flavor: 'Accepts skill chips and memory chips. Standard issue for most edgerunners.', found: 'Any ripperdoc' },
  { name: 'Interface Plugs', slot: 'Neuralware', cost: 500, flavor: 'Lets you jack into vehicles, turrets, and netrunning chairs.', found: 'Any ripperdoc' },
  { name: 'Kerenzikov', slot: 'Neuralware', cost: 500, flavor: 'Speedware that boosts reaction time. The chrome every solo wants.', found: 'Combat-focused ripperdocs, night markets' },
  { name: 'Sandevistan', slot: 'Neuralware', cost: 500, flavor: 'Military-grade speedware. Move so fast the world blurs around you.', found: 'Militech surplus, high-end fixers' },
  { name: 'Pain Editor', slot: 'Neuralware', cost: 1000, flavor: 'Cuts off pain signals entirely. You won\'t know you\'re dying until you drop.', found: 'Black market ripperdocs' },
  { name: 'Cybereye — Basic', slot: 'Cyberoptics', cost: 100, flavor: 'Standard replacement eye. Foundation for optical upgrades.', found: 'Any ripperdoc' },
  { name: 'Cybereye — Infrared', slot: 'Cyberoptics', cost: 500, flavor: 'See heat signatures through walls and in total darkness.', found: 'Military surplus, Maelstrom traders' },
  { name: 'Cybereye — Targeting Scope', slot: 'Cyberoptics', cost: 500, flavor: 'Rangefinder and ballistic calculator built into your eye.', found: 'Solo-focused ripperdocs' },
  { name: 'Cybereye — Anti-Dazzle', slot: 'Cyberoptics', cost: 100, flavor: 'Auto-polarizing lens. Never get flashbanged again.', found: 'Any ripperdoc' },
  { name: 'Cybereye — MicroOptics', slot: 'Cyberoptics', cost: 500, flavor: 'Microscopic zoom. Techs love it for fine repair work.', found: 'Tech shops, ripperdocs' },
  { name: 'Cyberaudio Suite', slot: 'Cyberaudio', cost: 500, flavor: 'Replacement ear with slots for audio enhancements.', found: 'Any ripperdoc' },
  { name: 'Amplified Hearing', slot: 'Cyberaudio', cost: 100, flavor: 'Hear whispers across a crowded room.', found: 'Any ripperdoc' },
  { name: 'Audio Recorder', slot: 'Cyberaudio', cost: 100, flavor: 'Record everything you hear. Medias swear by it.', found: 'Any ripperdoc' },
  { name: 'Bug Detector', slot: 'Cyberaudio', cost: 500, flavor: 'Picks up surveillance frequencies. Essential for paranoid fixers.', found: 'Fixer contacts, night markets' },
  { name: 'Subdermal Armor', slot: 'Body', cost: 1000, flavor: 'Ballistic mesh woven under the skin. Stops small-caliber rounds.', found: 'Combat ripperdocs, Militech contacts' },
  { name: 'Skin Weave', slot: 'Body', cost: 500, flavor: 'Reinforced skin layer. Less protection than subdermal but cheaper.', found: 'Any ripperdoc' },
  { name: 'Nasal Filters', slot: 'Body', cost: 100, flavor: 'Filters toxins, tear gas, and Night City smog.', found: 'Any ripperdoc, pharmacies' },
  { name: 'Toxin Binders', slot: 'Body', cost: 100, flavor: 'Neutralizes poisons in your bloodstream.', found: 'Medtech suppliers' },
  { name: 'Grafted Muscle', slot: 'Body', cost: 1000, flavor: 'Synthetic muscle fibers. Raw strength, no gym required.', found: 'High-end ripperdocs' },
  { name: 'Bone Lace', slot: 'Body', cost: 1000, flavor: 'Carbon-fiber reinforced skeleton. Take hits that would shatter normal bones.', found: 'High-end ripperdocs, military surplus' },
  { name: 'Gorilla Arms', slot: 'Cyberarms', cost: 500, flavor: 'Hydraulic-powered fists. Punch through walls, crush skulls.', found: 'Combat ripperdocs, Animals territory' },
  { name: 'Mantis Blades', slot: 'Cyberarms', cost: 500, flavor: 'Retractable forearm blades. The street samurai\'s signature.', found: 'High-end ripperdocs, Tyger Claws contacts' },
  { name: 'Monowire', slot: 'Cyberarms', cost: 500, flavor: 'Monofilament whip concealed in the forearm. Cuts through almost anything.', found: 'Black market, netrunner contacts' },
  { name: 'Projectile Launcher', slot: 'Cyberarms', cost: 500, flavor: 'Micro-missile launcher built into the arm. One shot, big boom.', found: 'Militech black market, fixers' },
  { name: 'Wolvers', slot: 'Cyberarms', cost: 500, flavor: 'Retractable claws from the knuckles. Classic chrome.', found: 'Any combat ripperdoc' },
  { name: 'Cyberarm — Tool Hand', slot: 'Cyberarms', cost: 500, flavor: 'Built-in toolkit replaces fingers. Every tech\'s dream.', found: 'Tech shops, ripperdocs' },
  { name: 'Cyberleg — Jump Boosters', slot: 'Cyberlegs', cost: 500, flavor: 'Hydraulic legs that launch you to rooftops.', found: 'High-end ripperdocs' },
  { name: 'Cyberleg — Skate Foot', slot: 'Cyberlegs', cost: 500, flavor: 'Retractable inline wheels in the feet. Urban mobility.', found: 'Street ripperdocs, night markets' },
  { name: 'Cyberleg — Hidden Compartment', slot: 'Cyberlegs', cost: 100, flavor: 'Secret storage in the calf. Hide a pistol, drugs, or data chips.', found: 'Any ripperdoc' },
  { name: 'Cyberdeck — Basic', slot: 'Neuralware', cost: 500, flavor: 'Entry-level deck for aspiring netrunners.', found: 'Tech shops, netrunner dens' },
  { name: 'Cyberdeck — Upgraded', slot: 'Neuralware', cost: 1000, flavor: 'More slots, faster processing. For serious runners.', found: 'Netrunner contacts, high-end shops' },
  { name: 'Cyberdeck — Military-Grade', slot: 'Neuralware', cost: 5000, flavor: 'Milspec hardware. Cracks ICE like nothing else.', found: 'Militech black ops, legendary fixers' },
  { name: 'Tech Hair', slot: 'Fashionware', cost: 100, flavor: 'Color-shifting, style-changing hair. Pure Night City fashion.', found: 'Any body shop' },
  { name: 'Light Tattoo', slot: 'Fashionware', cost: 100, flavor: 'Animated, glowing subdermal tattoos. Customizable via app.', found: 'Any body shop, street vendors' },
  { name: 'Shift Tacts', slot: 'Fashionware', cost: 100, flavor: 'Color-changing contact lenses. Subtle or wild.', found: 'Any body shop' },
  { name: 'Mr. Studd / Midnight Lady', slot: 'Borgware', cost: 100, flavor: 'Sexual implant. All-night capability guaranteed.', found: 'Any ripperdoc, discreetly' },
];

const CYBERWARE = CYBERWARE_ITEMS.map((c) => c.name);

// ── Weapons (full CPR catalog) ──

export const WEAPONS = [
  // Pistols
  { name: 'Budget Arms C-13', type: 'Pistol', quality: 'Poor', cost: 50, damage: '1d6', flavor: 'The cheapest handgun money can buy. Jams if you look at it wrong.', found: 'Street vendors, pawn shops, dead gangers' },
  { name: 'Dai Lung Cybermag 15', type: 'Pistol', quality: 'Poor', cost: 50, damage: '1d6', flavor: 'Chinatown special. Unreliable but everywhere.', found: 'Watson markets, street-level dealers' },
  { name: 'Federated Arms X-22', type: 'Pistol', quality: 'Standard', cost: 50, damage: '1d6', flavor: 'Reliable workhorse sidearm. The Honda Civic of handguns.', found: 'Gun shops, security firms, NCPD surplus' },
  { name: 'Militech Lexington', type: 'Pistol', quality: 'Standard', cost: 50, damage: '1d6', flavor: 'Standard Militech sidearm. Solid, dependable, corporate.', found: 'Militech outlets, gun shops, military surplus' },
  { name: 'Constitutional Arms Unity', type: 'Pistol', quality: 'Standard', cost: 50, damage: '2d6', flavor: 'America\'s favorite revolver. Six shots of freedom.', found: 'Gun shops, 6th Street territory, nomad camps' },
  { name: 'Arasaka Nova', type: 'Pistol', quality: 'Standard', cost: 50, damage: '1d6', flavor: 'Sleek Arasaka design. Popular with corpos who want to feel safe.', found: 'Arasaka retail, corporate security, upscale shops' },
  // Heavy Pistols
  { name: 'Midnight Arms Borg', type: 'Heavy Pistol', quality: 'Excellent', cost: 100, damage: '3d6', flavor: 'Massive hand cannon. Named for what it takes to handle the recoil.', found: 'Specialty gun shops, solo contacts, night markets' },
  { name: 'Constitutional Arms Defender', type: 'Heavy Pistol', quality: 'Standard', cost: 100, damage: '2d6', flavor: 'Heavy-frame revolver. When six .44 rounds aren\'t enough, reload faster.', found: 'Gun shops, nomad camps, 6th Street arms dealers' },
  { name: 'Malorian Arms 3516', type: 'Heavy Pistol', quality: 'Legendary', cost: 5000, damage: '4d6', flavor: 'Johnny Silverhand\'s custom piece. Only a handful ever made.', found: 'Legendary fixers only. If you have to ask, you can\'t afford it.' },
  // SMGs
  { name: 'Arasaka HJKE-11', type: 'SMG', quality: 'Standard', cost: 100, damage: '1d6', flavor: 'Compact Arasaka submachine gun. Corporate security\'s choice for CQB.', found: 'Arasaka security surplus, gun shops, night markets' },
  { name: 'Militech Saratoga', type: 'SMG', quality: 'Standard', cost: 100, damage: '1d6', flavor: 'Militech\'s bestselling SMG. Reliable and brutal in close quarters.', found: 'Militech outlets, military surplus, NCPD evidence lockup' },
  { name: 'Stolbovoy ST-2', type: 'SMG', quality: 'Poor', cost: 50, damage: '1d6', flavor: 'Soviet-era design still in production. Cheap, rough, gets the job done.', found: 'Street dealers, Eastern European contacts, cargo shipments' },
  { name: 'Federal Arms PM-4', type: 'SMG', quality: 'Standard', cost: 100, damage: '1d6', flavor: 'Compact and concealable. Popular with fixers and their bodyguards.', found: 'Gun shops, fixer networks' },
  // Assault Rifles
  { name: 'Militech M-76', type: 'Assault Rifle', quality: 'Standard', cost: 500, damage: '5d6', flavor: 'Standard-issue Militech assault rifle. The backbone of corporate armies.', found: 'Militech armories, military surplus, battlefield salvage' },
  { name: 'Nokota D-35 "Copperhead"', type: 'Assault Rifle', quality: 'Standard', cost: 500, damage: '5d6', flavor: 'Rugged, reliable, favored by nomads and mercs across the badlands.', found: 'Nomad traders, gun shops, mercenary contacts' },
  { name: 'Arasaka HJRK', type: 'Assault Rifle', quality: 'Excellent', cost: 500, damage: '5d6', flavor: 'Precision-engineered Arasaka rifle. Favored by Arasaka special forces.', found: 'Arasaka black market, high-end arms dealers' },
  { name: 'Rostovic Kalashnikov', type: 'Assault Rifle', quality: 'Poor', cost: 500, damage: '5d6', flavor: 'The AK that refuses to die. Century-old design, still deadly.', found: 'Everywhere. Street dealers, cargo crates, dead soldiers.' },
  { name: 'Constitutional Arms Patriot', type: 'Assault Rifle', quality: 'Standard', cost: 500, damage: '5d6', flavor: 'Red, white, and chrome. 6th Street\'s rifle of choice.', found: '6th Street territory, gun shows, patriot militias' },
  // Shotguns
  { name: 'Militech Crusher', type: 'Shotgun', quality: 'Standard', cost: 500, damage: '5d6', flavor: 'Pump-action beast. Clears rooms and conversations equally fast.', found: 'Militech outlets, gun shops, NCPD armories' },
  { name: 'Budget Arms Carnage', type: 'Shotgun', quality: 'Poor', cost: 100, damage: '5d6', flavor: 'Cheapest combat shotgun on the market. Kicks like a mule.', found: 'Street vendors, pawn shops, boostergang stashes' },
  { name: 'Rostovic DB-4 "Paladin"', type: 'Shotgun', quality: 'Excellent', cost: 500, damage: '5d6', flavor: 'Double-barrel, sawed-off. Intimidation factor through the roof.', found: 'Specialty shops, nomad weaponsmiths' },
  { name: 'Arasaka Rapid Assault', type: 'Shotgun', quality: 'Excellent', cost: 500, damage: '5d6', flavor: 'Semi-auto combat shotgun. When pump-action is too slow.', found: 'Arasaka security surplus, high-end dealers' },
  // Sniper Rifles
  { name: 'Tsunami Arms Nekomata', type: 'Sniper Rifle', quality: 'Excellent', cost: 1000, damage: '5d6', flavor: 'Tech sniper rifle. Charged shots punch through walls and armor.', found: 'Tsunami Arms dealers, tech weaponsmiths, night markets' },
  { name: 'Arasaka HJSH-18', type: 'Sniper Rifle', quality: 'Excellent', cost: 500, damage: '5d6', flavor: 'Precision long-range rifle. Standard for Arasaka counter-sniper teams.', found: 'Arasaka black market, military contacts' },
  { name: 'Nokota D-55 "Widow Maker"', type: 'Sniper Rifle', quality: 'Standard', cost: 500, damage: '5d6', flavor: 'Reliable bolt-action. Nomad snipers swear by it.', found: 'Nomad traders, gun shops, mercenary arms dealers' },
  // Melee Weapons
  { name: 'Kendachi Mono-Three', type: 'Melee — Monokatana', quality: 'Excellent', cost: 500, damage: '3d6', flavor: 'Monomolecular-edged katana. Cuts through body armor like butter.', found: 'Kendachi dealers, Tyger Claws contacts, night markets' },
  { name: 'Arasaka Mantis Blade', type: 'Melee — Mantis Blades', quality: 'Excellent', cost: 500, damage: '2d6', flavor: 'Retractable arm-mounted blades. A classic for chromed-up solos.', found: 'High-end ripperdocs, Arasaka contacts' },
  { name: 'Kendachi Mono-Two', type: 'Melee — Monowire', quality: 'Excellent', cost: 500, damage: '2d6', flavor: 'Monofilament wire whip. Slices targets from ten meters out.', found: 'Kendachi dealers, netrunner contacts' },
  { name: 'Baseball Bat', type: 'Melee — Blunt', quality: 'Poor', cost: 20, damage: '1d6', flavor: 'The streets\' oldest negotiation tool. No license required.', found: 'Sporting goods, street vendors, literally anywhere' },
  { name: 'Knife', type: 'Melee — Light', quality: 'Poor', cost: 20, damage: '1d6', flavor: 'A simple blade. Everyone in Night City carries one.', found: 'Everywhere. You probably already have three.' },
  { name: 'Tomahawk', type: 'Melee — Heavy', quality: 'Standard', cost: 50, damage: '2d6', flavor: 'Tactical hatchet. Popular with nomads and 6th Street veterans.', found: 'Military surplus, nomad camps, outdoor shops' },
  { name: 'Machete', type: 'Melee — Heavy', quality: 'Standard', cost: 50, damage: '2d6', flavor: 'Jungle-tested, city-approved. Valentinos like to engrave theirs.', found: 'Street markets, Valentinos territory' },
  { name: 'Sledgehammer', type: 'Melee — Very Heavy', quality: 'Standard', cost: 50, damage: '3d6', flavor: 'Construction tool turned skull-crusher. Animals\' weapon of choice.', found: 'Hardware stores, Animals gyms, construction sites' },
  { name: 'Stun Baton', type: 'Melee — Non-lethal', quality: 'Standard', cost: 100, damage: '1d6', flavor: 'Electroshock baton. NCPD issue, but everyone has one.', found: 'NCPD surplus, security suppliers, pawn shops' },
  // Exotic / Heavy
  { name: 'Tsunami Arms Helix', type: 'Sniper Rifle', quality: 'Excellent', cost: 1000, damage: '5d6', flavor: 'Precision marksman rifle with integrated rangefinder.', found: 'Tsunami Arms direct, military contacts' },
  { name: 'Militech RPG-A', type: 'Heavy — Rocket Launcher', quality: 'Excellent', cost: 5000, damage: '8d6', flavor: 'Man-portable rocket launcher. For when subtlety has left the building.', found: 'Militech black market only. Very illegal.' },
  { name: 'Arasaka HLR-12X', type: 'Heavy — Grenade Launcher', quality: 'Excellent', cost: 1000, damage: '6d6', flavor: 'Six-round revolver grenade launcher. Area denial in a box.', found: 'Arasaka surplus, military black market' },
];

export const WEAPON_TYPES = [...new Set(WEAPONS.map((w) => w.type))].sort();

// ── Gear & Equipment ──

const GEAR_ITEMS = [
  { name: 'Agent', category: 'Electronics', cost: 100, flavor: 'Personal smartphone/computer. Runs apps, makes calls, gets hacked.', found: 'Any electronics store' },
  { name: 'Disposable Phone', category: 'Electronics', cost: 10, flavor: 'Burner phone. Use once, toss in the bay.', found: 'Street vendors, convenience stores' },
  { name: 'Techscanner', category: 'Electronics', cost: 500, flavor: 'Detects cyberware, electronics, and hidden tech.', found: 'Tech shops, night markets' },
  { name: 'Scrambler/Descrambler', category: 'Electronics', cost: 500, flavor: 'Encrypts/decrypts radio and phone communications.', found: 'Netrunner contacts, tech shops' },
  { name: 'Bug Detector', category: 'Electronics', cost: 500, flavor: 'Sweeps for listening devices and hidden cameras.', found: 'Security suppliers, fixer contacts' },
  { name: 'Radar Detector', category: 'Electronics', cost: 500, flavor: 'Warns of active radar scans and targeting systems.', found: 'Nomad traders, military surplus' },
  { name: 'Memory Chip (encrypted)', category: 'Electronics', cost: 10, flavor: 'Stores data. Could contain anything from recipes to blackmail.', found: 'Tech shops, loot drops, dead bodies' },
  { name: 'Binoculars (IR capable)', category: 'Optics', cost: 100, flavor: 'Long-range observation with infrared overlay.', found: 'Military surplus, outdoor shops' },
  { name: 'Flashbang Grenade', category: 'Explosives', cost: 100, flavor: 'Non-lethal disorientation. 8 seconds of pure chaos.', found: 'Military surplus, night markets, NCPD surplus' },
  { name: 'Frag Grenade', category: 'Explosives', cost: 100, flavor: 'High-explosive fragmentation. Clears rooms permanently.', found: 'Military black market, arms dealers' },
  { name: 'Smoke Grenade', category: 'Explosives', cost: 50, flavor: 'Concealment in a can. Break contact and run.', found: 'Military surplus, gun shops' },
  { name: 'EMP Grenade', category: 'Explosives', cost: 500, flavor: 'Fries electronics and cyberware in the blast radius.', found: 'Militech black market, tech weaponsmiths' },
  { name: 'Grapple Gun', category: 'Tools', cost: 100, flavor: 'Launches a grappling hook and cable. Essential for vertical cities.', found: 'Outdoor shops, tech vendors' },
  { name: 'Duct Tape & Zipties', category: 'Tools', cost: 10, flavor: 'The edgerunner\'s best friend. Fixes, binds, and silences.', found: 'Literally everywhere' },
  { name: 'Lockpick Set', category: 'Tools', cost: 20, flavor: 'Manual lockpicks. Old school but untraceable.', found: 'Hardware stores, fixer contacts' },
  { name: 'Cutting Torch', category: 'Tools', cost: 50, flavor: 'Cuts through metal. Slow but unstoppable.', found: 'Hardware stores, scrapyards' },
  { name: 'Personal CarePak', category: 'Medical', cost: 20, flavor: 'Basic first aid supplies. Bandages, antiseptic, painkillers.', found: 'Pharmacies, convenience stores' },
  { name: 'Airhypo — Speedheal', category: 'Medical', cost: 50, flavor: 'Pneumatic injector loaded with rapid-healing nanites.', found: 'Medtech suppliers, ripperdocs, night markets' },
  { name: 'Airhypo — Stim', category: 'Medical', cost: 50, flavor: 'Combat stimulant. Keeps you fighting when your body says stop.', found: 'Street pharmacies, combat medtechs' },
  { name: 'Medtech Bag', category: 'Medical', cost: 100, flavor: 'Full surgical kit for field operations. A medtech\'s lifeline.', found: 'Medical suppliers, hospital black market' },
  { name: 'Light Armorjack (SP11)', category: 'Armor', cost: 100, flavor: 'Kevlar-lined jacket. Stops small arms, looks like fashion.', found: 'Gun shops, clothing stores, night markets' },
  { name: 'Heavy Armorjack (SP13)', category: 'Armor', cost: 500, flavor: 'Serious ballistic protection. You\'ll sweat but you\'ll survive.', found: 'Military surplus, combat outfitters' },
  { name: 'Bodyweight Suit (SP11)', category: 'Armor', cost: 500, flavor: 'Skin-tight armored bodysuit. Protection that doesn\'t show.', found: 'High-end boutiques, corpo security suppliers' },
  { name: 'Metalgear (SP18)', category: 'Armor', cost: 5000, flavor: 'Full-body powered armor. Walking tank. Maximum chrome.', found: 'Militech/Arasaka black ops, legendary fixers only' },
  { name: 'MRE Rations (3-day supply)', category: 'Supplies', cost: 10, flavor: 'Military meals. Tastes terrible, keeps you alive.', found: 'Military surplus, nomad camps' },
  { name: 'Road Flares x4', category: 'Supplies', cost: 10, flavor: 'Signal flares. Also doubles as improvised fire.', found: 'Auto shops, gas stations' },
  { name: 'Rope (30m)', category: 'Supplies', cost: 20, flavor: 'Synthetic climbing rope. Holds 300kg.', found: 'Hardware stores, outdoor shops' },
];

const GEAR_CATEGORIES = [...new Set(GEAR_ITEMS.map((g) => g.category))].sort();

// ── Encounter data ──

const ENEMY_TYPES = [
  { name: 'Boostergang', desc: 'Cyberpsycho street punks jacked on drugs and chrome', threat: 'Low-Medium' },
  { name: 'Corporate Security', desc: 'Well-equipped private military contractors', threat: 'Medium-High' },
  { name: 'Maelstrom', desc: 'Cyberware-obsessed gang with inhuman modifications', threat: 'Medium-High' },
  { name: 'Tyger Claws', desc: 'Japanese-heritage gang controlling Japantown', threat: 'Medium' },
  { name: 'Valentinos', desc: 'Honor-bound gang from Heywood with style', threat: 'Medium' },
  { name: '6th Street', desc: 'Patriotic ex-military gang from Santo Domingo', threat: 'Medium' },
  { name: 'Voodoo Boys', desc: 'Elite netrunners from Pacifica', threat: 'High' },
  { name: 'Animals', desc: 'Steroid-and-juice enhanced brawlers', threat: 'Medium' },
  { name: 'Scavengers', desc: 'Organ harvesters who strip people for cyberware', threat: 'Low-Medium' },
  { name: 'Arasaka operatives', desc: 'Top-tier corporate black ops team', threat: 'Very High' },
  { name: 'Militech contractors', desc: 'Military-industrial combat specialists', threat: 'High' },
  { name: 'NCPD patrol', desc: 'Night City police, understaffed and overworked', threat: 'Medium' },
  { name: 'MAX-TAC unit', desc: 'Cyberpsycho squad — the most dangerous badge in NC', threat: 'Extreme' },
  { name: 'Nomad raiding party', desc: 'Wasteland warriors on armored vehicles', threat: 'Medium-High' },
  { name: 'Rogue AI construct', desc: 'Beyond the Blackwall — digital nightmare made real', threat: 'Extreme' },
];

const ENCOUNTER_SCENARIOS = [
  'Ambush in a narrow alley', 'Shakedown at a toll checkpoint', 'Hostage situation in a ramen shop',
  'Deal gone wrong in a parking garage', 'Turf war spilling into the street',
  'Sniper pinning the crew from a rooftop', 'Vehicle chase through Watson',
  'Breach-and-clear on a fortified warehouse', 'Bar brawl that escalates fast',
  'Assassination attempt on the crew\'s client', 'Caught in crossfire between two gangs',
  'Cornered in an elevator shaft', 'Trapped in a collapsing building',
  'Hit squad waiting at the crew\'s safehouse', 'Netrunner attack through a compromised terminal',
];
const TACTICAL_NOTES = [
  'Heavy cover available — use it', 'Enemies have a netrunner providing overwatch',
  'Civilians in the crossfire', 'One exit, tightly controlled',
  'Environmental hazard: leaking gas pipes', 'Enemies are expecting the crew',
  'Darkness gives advantage to thermal optics', 'Reinforcements arrive in 3 rounds',
  'High ground advantage for the enemy', 'Cramped quarters — melee favored',
  'Enemies are willing to negotiate', 'One enemy is an undercover ally',
  'Security cameras everywhere', 'Automated turret covering the main approach',
  'EMP field disabling electronics in the area',
];

// ── Location data ──

const DISTRICTS = [
  'Watson', 'Westbrook', 'City Center', 'Heywood', 'Pacifica',
  'Santo Domingo', 'The Badlands', 'Japantown', 'Kabuki', 'Northside Industrial',
  'Charter Hill', 'Arroyo', 'Rancho Coronado', 'Coastview',
];
const VENUE_TYPES = [
  'Dive bar', 'Underground fight club', 'Ripperdoc clinic', 'Braindance parlor',
  'Abandoned warehouse', 'Luxury penthouse', 'Street food market', 'Data fortress',
  'Megacorp lobby', 'Nomad camp', 'Collapsed overpass', 'Flooded basement club',
  'Rooftop garden', 'Cargo container maze', 'Motel parking lot', 'Scrapyard',
  'Underground netrunner den', 'Illegal racing strip', 'Church of the Second Coming',
  'Trauma Team landing pad',
];
const ATMOSPHERES = [
  'Neon-lit and hazy with smoke', 'Dark, claustrophobic, and damp',
  'Sterile corporate white and chrome', 'Loud with blasting music and flashing lights',
  'Eerily quiet — something is wrong', 'Crowded with desperate-looking people',
  'Smells of synthetic food and engine grease', 'Opulent excess dripping with eddies',
  'Abandoned and decaying', 'Tense — everyone is armed and watching',
  'Rain-soaked and reflective', 'Thick with incense and low chanting',
  'Buzzing with drone surveillance', 'Dusty and sun-blasted',
];
const LOCATION_HOOKS = [
  'A fixer is looking for someone to do a quick job — no questions asked',
  'Someone just flatlined in the back room',
  'A corpo is here incognito, trying to hire off-the-books muscle',
  'The bartender has info on the crew\'s current job — for a price',
  'An old rival spots the crew and isn\'t happy to see them',
  'NCPD raid incoming — everyone has 2 minutes to vanish',
  'A street kid is pickpocketing patrons and just stole from the wrong person',
  'The owner is being shaken down and asks for help',
  'A braindance recording of something very illegal is changing hands',
  'Someone is about to flatline from cyberpsychosis',
  'A Trauma Team AV just crashed nearby',
  'The power grid just went down — only emergency lights remain',
  'An encrypted data shard is hidden somewhere in this location',
  'Two gangs just agreed to a ceasefire meeting here — it\'s fragile',
];

// ── Night market data ──

const MARKET_NAMES = [
  'The Rusty Bazaar', 'Kabuki Night Market', 'The Chrome Exchange', 'Pacifica Underground Mall',
  'Santo Domingo Swap Meet', 'Watson Waterfront Market', 'Heywood After-Dark Fair',
  'The Neon Alley Market', 'Japantown Black Market', 'The Badlands Trading Post',
  'City Center Shadow Mall', 'Arroyo Flea Market',
];

const VENDOR_TYPES = [
  { type: 'Weapons Dealer', sells: 'weapons' },
  { type: 'Ripperdoc', sells: 'cyberware' },
  { type: 'Tech Vendor', sells: 'gear-Electronics' },
  { type: 'Street Pharmacist', sells: 'gear-Medical' },
  { type: 'Armor Dealer', sells: 'gear-Armor' },
  { type: 'Explosives Specialist', sells: 'gear-Explosives' },
  { type: 'General Goods', sells: 'gear-Supplies' },
  { type: 'Exotic Goods Trader', sells: 'mixed' },
  { type: 'Fixer\'s Booth', sells: 'jobs' },
  { type: 'Food Vendor', sells: 'food' },
];

const VENDOR_QUIRKS = [
  'Will only deal if you put your weapons on the table first',
  'Has a cyberpsycho bodyguard standing behind them',
  'Clearly selling stolen corpo merchandise — tags still on',
  'Haggling is expected — starting price is always 2x',
  'Whispers everything and keeps looking over their shoulder',
  'A kid runs their stall while they nap in the back',
  'Offers a "loyalty discount" if you bring them something specific',
  'Is an undercover NCPD officer — or are they?',
  'Only accepts eddies in physical chip form, no transfers',
  'Gives you a free item if you tell them a good joke',
  'Has an extensive blacklist tattoo\'d on their arm',
  'Refuses to sell weapons to anyone without visible cyberware',
];

const MARKET_EVENTS = [
  'NCPD raid — vendors scramble to pack up',
  'Two vendors get into a heated argument over territory',
  'A pickpocket is working the crowd',
  'Someone is selling clearly bootleg braindances',
  'A Trauma Team AV lands nearby — someone got hurt',
  'Power outage — only phone screens and neon signs light the market',
  'A fixer is recruiting for a rush job, paying triple',
  'Gang members are collecting "protection fees" from vendors',
  'A vendor is demonstrating a weapon — loudly',
  'A ripperdoc is doing installs in the open, right there at the stall',
  'An argument over counterfeit eddies turns violent',
  'Someone recognizes a player character',
];

const LOOT_RARITY = ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'];
const RARITY_WEIGHTS = [35, 30, 20, 10, 5];

// ── Generator functions ──

export function generateEncounter() {
  const enemy = pick(ENEMY_TYPES);
  return {
    enemy: enemy.name, enemyDesc: enemy.desc, threat: enemy.threat,
    count: roll(2, 8),
    scenario: pick(ENCOUNTER_SCENARIOS),
    tacticalNote: pick(TACTICAL_NOTES),
    location: `${pick(DISTRICTS)} — ${pick(VENUE_TYPES).toLowerCase()}`,
  };
}

export function generateNPC() {
  const role = pick(ROLES);
  return {
    name: `${pick(FIRST_NAMES)} "${pick(HANDLES)}" ${pick(LAST_NAMES)}`,
    role: role.name, roleDesc: role.desc,
    personality: pick(PERSONALITY),
    motivation: pick(MOTIVATIONS),
    cyberware: pickN(CYBERWARE, roll(1, 4)),
    stats: {
      INT: roll(3, 8), REF: roll(3, 8), DEX: roll(3, 8), TECH: roll(3, 8), COOL: roll(3, 8),
      WILL: roll(3, 8), LUCK: roll(3, 8), MOVE: roll(3, 8), BODY: roll(3, 8), EMP: roll(2, 8),
    },
  };
}

export function generateLoot(weaponTypeFilter) {
  const rarity = weightedPick(LOOT_RARITY, RARITY_WEIGHTS);
  const pool = weaponTypeFilter ? WEAPONS.filter((w) => w.type === weaponTypeFilter) : WEAPONS;
  const weapon = pick(pool.length ? pool : WEAPONS);
  const gearCount = roll(1, 3);
  const eddies = { Common: roll(10, 100), Uncommon: roll(100, 500), Rare: roll(500, 2000), 'Very Rare': roll(2000, 5000), Legendary: roll(5000, 20000) }[rarity] || roll(10, 100);
  const cw = Math.random() > 0.5 ? pick(CYBERWARE_ITEMS) : null;
  return {
    rarity, weapon,
    gear: pickN(GEAR_ITEMS, gearCount),
    cyberware: cw,
    eddies,
  };
}

export function generateLocation() {
  return {
    district: pick(DISTRICTS), venue: pick(VENUE_TYPES),
    atmosphere: pick(ATMOSPHERES), hook: pick(LOCATION_HOOKS),
    npcsPresent: roll(1, 3),
    dangerLevel: pick(['Low', 'Medium', 'High', 'Extreme']),
  };
}

export function generateNightMarket() {
  const vendorCount = roll(4, 8);
  const vendors = pickN(VENDOR_TYPES, vendorCount).map((v) => {
    let inventory = [];
    if (v.sells === 'weapons') inventory = pickN(WEAPONS, roll(3, 6));
    else if (v.sells === 'cyberware') inventory = pickN(CYBERWARE_ITEMS, roll(3, 5));
    else if (v.sells.startsWith('gear-')) {
      const cat = v.sells.replace('gear-', '');
      inventory = pickN(GEAR_ITEMS.filter((g) => g.category === cat), roll(2, 4));
    }
    else if (v.sells === 'mixed') inventory = [...pickN(WEAPONS, 2), ...pickN(GEAR_ITEMS, 2), ...pickN(CYBERWARE_ITEMS, 1)];
    else if (v.sells === 'food') inventory = [{ name: 'Kibble Bowl', cost: 5, flavor: 'It\'s food. Technically.' }, { name: 'Synthetic Sushi', cost: 20, flavor: 'Tastes almost like the real thing.' }, { name: 'NiCola 6-pack', cost: 10, flavor: 'Night City\'s favorite soda. Probably addictive.' }];
    else if (v.sells === 'jobs') inventory = [{ name: 'Quick gig available', cost: 0, flavor: `${pick(ENCOUNTER_SCENARIOS)}. Pays ${roll(500, 3000)} eb.` }];
    return {
      type: v.type,
      quirk: pick(VENDOR_QUIRKS),
      inventory,
      priceModifier: roll(80, 130),
    };
  });
  return {
    name: pick(MARKET_NAMES),
    district: pick(DISTRICTS),
    atmosphere: pick(ATMOSPHERES),
    event: pick(MARKET_EVENTS),
    vendors,
    dangerLevel: pick(['Low', 'Medium', 'High']),
  };
}

export { GEAR_ITEMS, GEAR_CATEGORIES, CYBERWARE_ITEMS };
