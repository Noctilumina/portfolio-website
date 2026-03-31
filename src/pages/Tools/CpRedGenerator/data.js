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
  'Eerily calm under pressure', 'Compulsive liar, even about small things',
  'Overly friendly in a way that puts people on edge', 'Speaks in metaphors constantly',
  'Never makes eye contact', 'Always smiling, even when threatening someone',
  'Pathologically honest', 'Nostalgic for a past that probably never existed',
  'Treats everything like a business transaction', 'Protective of children, ruthless to everyone else',
  'Obsessed with their own reputation', 'Philosophical about violence',
  'Hates technology but is full of cyberware', 'Talks to their weapon like a pet',
  'Extremely polite, even mid-combat', 'Suffering from obvious PTSD',
  'Collects trophies from their kills', 'Secretly terrified of dying',
  'Thinks they\'re smarter than everyone in the room', 'Has a code of honour that makes no sense to anyone else',
];
const MOTIVATIONS = [
  'Paying off a massive debt', 'Revenge against a megacorp', 'Searching for a missing family member',
  'Building a criminal empire', 'Escaping their past identity', 'Protecting their community',
  'Seeking immortality through cyberware', 'Gathering evidence to expose corruption',
  'Earning enough eddies to leave Night City', 'Hunting a specific target',
  'Keeping a dangerous secret', 'Trying to go legit', 'Looking for their next big score',
  'Atoning for past crimes', 'Chasing a legendary piece of tech',
  'Trying to find a cure for a terminal illness', 'Working off a blood debt to a fixer',
  'Searching for a stolen AI personality construct', 'Rebuilding a destroyed nomad pack',
  'Running from a bounty placed by an ex-employer', 'Trying to get custody of their kid',
  'Investigating the disappearance of other edgerunners', 'Saving enough to buy a real house outside the city',
  'Collecting data to write the definitive history of Night City', 'Trying to contact someone beyond the Blackwall',
  'Building a case to take down a corrupt NCPD captain', 'Seeking the person who sold them faulty cyberware',
  'Wants to open a legitimate business but keeps getting pulled back in', 'Hoarding weapons for a conflict they believe is coming',
  'Trying to recreate a lost pre-war technology', 'Driven by a vision from a braindance that may not be real',
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
  'Convoy ambush on the highway outside the city', 'Standoff on a rooftop helipad',
  'Bomb threat in a crowded lev station', 'Kidnapping in progress outside a nightclub',
  'Corpo extraction gone sideways in a hotel lobby', 'Underground cage fight turned deadly',
  'Drug lab raid interrupted by a third party', 'Shootout in a flooded parking structure',
  'Sabotage at a power relay station', 'Assault on a moving cargo train',
  'Ambush during a funeral procession', 'Firefight in a construction site scaffold',
  'Gang initiation turned into a warzone', 'Robbery of a Trauma Team supply AV',
  'Bounty hunters closing in on someone at the bar', 'Cyberpsycho rampage at a food market',
  'Running battle through a shopping arcade', 'Snatch-and-grab from a corpo transport van',
  'Defending a ripperdoc clinic from raiders', 'Escape from a burning building',
  'Protecting a witness being moved between safehouses', 'Midnight raid on a scavenger den',
  'Ambush at a bridge chokepoint', 'Shootout during a blackout',
  'Infiltration blown at a corporate gala', 'Gang war erupts at a Night Market',
  'Trapped in a subway tunnel with hostiles on both ends', 'Hijacking attempt on an armored truck',
  'Pursuit through a dense crowd of civilians', 'Defending a cargo container fortress',
  'Double-cross during a handoff in a junkyard', 'Assassination attempt at a press conference',
  'Extraction from a collapsed building', 'Rooftop-to-rooftop chase across Kabuki',
  'Ambush in a dense fog bank rolling off the coast', 'Hit on a target at a packed braindance theater',
];
const TACTICAL_NOTES = [
  'Heavy cover available, use it', 'Enemies have a netrunner providing overwatch',
  'Civilians in the crossfire', 'One exit, tightly controlled',
  'Environmental hazard: leaking gas pipes', 'Enemies are expecting the crew',
  'Darkness gives advantage to thermal optics', 'Reinforcements arrive in 3 rounds',
  'High ground advantage for the enemy', 'Cramped quarters, melee favored',
  'Enemies are willing to negotiate', 'One enemy is an undercover ally',
  'Security cameras everywhere', 'Automated turret covering the main approach',
  'EMP field disabling electronics in the area',
  'Multiple levels, enemies on catwalks above', 'Explosive barrels near enemy positions',
  'Enemies have a hostage', 'Unstable floor, sections may collapse',
  'Enemies are dug in behind reinforced positions', 'Smoke grenades obscuring the field',
  'Enemies using flashbang rotation', 'A vehicle provides mobile cover for the enemy',
  'Friendly NPC pinned down and needs extraction', 'Timer running, bomb or self-destruct in progress',
  'Enemies have set up tripwire mines', 'Sniper covering the main approach from 200m',
  'Water on the ground, electrical hazard', 'Enemy netrunner locking doors remotely',
  'Enemies wearing stolen NCPD uniforms', 'One enemy has a flamethrower',
  'Toxic gas slowly filling the area', 'Enemies retreating toward a reinforced position',
  'A drone is spotting for the enemy', 'Tight corridors, no room for shoulder arms',
  'Enemies have a mounted weapon on a vehicle', 'Broken glass and debris, stealth is difficult',
  'The area is wired to blow if the crew advances', 'A cyberpsycho is fighting both sides',
  'Enemies have jammers blocking comms', 'Low ceiling, no grenades without risk',
  'An innocent bystander is about to do something stupid', 'Heavy rain reducing visibility',
  'Enemies are retreating to a vehicle for escape', 'The lights are flickering on and off',
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
  'Trauma Team landing pad', 'Converted parking garage nightclub', 'Corporate cafeteria',
  'Pawn shop with a back room', 'Derelict amusement park ride', 'Rooftop boxing ring',
  'Public bathhouse', 'Abandoned lev station', 'Shipping dock crane yard',
  'Guerrilla garden on a rooftop', 'Bootleg braindance studio', 'Corpo dead drop location',
  'Street racing pit stop', 'Recycling plant', 'Condemned apartment block',
  'Underground sewer junction', 'Makeshift hospital in a school gym', 'Gun range with a secret vault',
  'Floating barge casino', 'Highway overpass camp', 'Old pre-war bunker',
  'Tech workshop in a storage unit', 'Laundromat front for a fixer', 'Elevator maintenance shaft',
  'Rooftop antenna farm', 'Abandoned mall food court', 'Construction crane platform',
];
const ATMOSPHERES = [
  'Neon-lit and hazy with smoke', 'Dark, claustrophobic, and damp',
  'Sterile corporate white and chrome', 'Loud with blasting music and flashing lights',
  'Eerily quiet, something is wrong', 'Crowded with desperate-looking people',
  'Smells of synthetic food and engine grease', 'Opulent excess dripping with eddies',
  'Abandoned and decaying', 'Tense, everyone is armed and watching',
  'Rain-soaked and reflective', 'Thick with incense and low chanting',
  'Buzzing with drone surveillance', 'Dusty and sun-blasted',
  'Flickering emergency lighting, deep shadows', 'Uncomfortably warm, machinery humming',
  'Cold enough to see your breath', 'Smells like blood and cordite',
  'Music from a distant speaker, distorted and wrong', 'Graffiti covers every surface',
  'The red sky is visible through a broken ceiling', 'Chemical smell, eyes watering',
  'Packed with people trying not to make eye contact', 'Quiet except for dripping water',
  'Holographic advertisements casting shifting colors', 'The floor vibrates from bass below',
  'Stale air, no ventilation', 'Broken glass crunches underfoot',
  'Someone is screaming in the distance', 'Burnt-out vehicles line the street',
  'Fresh paint on the walls, someone just moved in', 'The smell of cooking food, oddly normal',
  'Wind howling through gaps in the walls', 'Everything is covered in a thin layer of ash',
  'Surveillance cameras tracking every movement', 'Uncomfortably bright strip lighting',
  'Rats scatter as you enter', 'The air tastes metallic',
  'Quiet jazz playing from somewhere unseen', 'A child is watching you from a window',
];
const LOCATION_HOOKS = [
  'A fixer is looking for someone to do a quick job, no questions asked',
  'Someone just flatlined in the back room',
  'A corpo is here incognito, trying to hire off-the-books muscle',
  'The bartender has info on the crew\'s current job, for a price',
  'An old rival spots the crew and isn\'t happy to see them',
  'NCPD raid incoming, everyone has 2 minutes to vanish',
  'A street kid is pickpocketing patrons and just stole from the wrong person',
  'The owner is being shaken down and asks for help',
  'A braindance recording of something very illegal is changing hands',
  'Someone is about to flatline from cyberpsychosis',
  'A Trauma Team AV just crashed nearby',
  'The power grid just went down, only emergency lights remain',
  'An encrypted data shard is hidden somewhere in this location',
  'Two gangs just agreed to a ceasefire meeting here, it\'s fragile',
  'A ripperdoc is offering a discount on suspicious cyberware',
  'Someone is selling a stolen Militech weapon prototype',
  'A Media is recording everything and everyone is nervous',
  'A nomad convoy just arrived and they\'re looking for supplies',
  'An Arasaka agent is tailing someone in the crowd',
  'A street preacher is warning about the end of the world, and people are listening',
  'The vending machines just got hacked to dispense everything for free',
  'A bounty just got posted on someone in this room',
  'Two corpos are having a very loud argument about a failed deal',
  'A delivery drone crashed through a window carrying something valuable',
  'Someone left a loaded weapon on the bar and walked out',
  'A Trauma Team subscription card was found on a body outside',
  'The building\'s NET architecture just got breached, alarms are going off',
  'A known informant for NCPD is here and people know it',
  'An underground boxing match is about to start, bets are being placed',
  'A fixer just got murdered in the bathroom, their agent is still unlocked',
  'A group of reclaimers found something in the walls and won\'t say what',
  'Someone is offering free braindance sessions, and the quality is suspiciously good',
  'A Maelstrom member is showing off new chrome and it\'s making people nervous',
  'The vents are making a strange noise, like something is crawling in them',
  'A child is selling hand-drawn maps of the local gang territories',
  'Someone\'s car just exploded in the parking lot',
  'A corporate auditor is here taking notes, and the staff is panicking',
  'Two Trauma Team medics walk in off-duty, looking for a drink and trouble',
  'A stray dog with a data chip collar just wandered in',
  'The jukebox keeps playing the same song on repeat and nobody can stop it',
];

// ── Night market data ──

const MARKET_NAMES = [
  'The Rusty Bazaar', 'Kabuki Night Market', 'The Chrome Exchange', 'Pacifica Underground Mall',
  'Santo Domingo Swap Meet', 'Watson Waterfront Market', 'Heywood After-Dark Fair',
  'The Neon Alley Market', 'Japantown Black Market', 'The Badlands Trading Post',
  'City Center Shadow Mall', 'Arroyo Flea Market',
];

const FOOD_ITEMS = [
  { name: 'Kibble Bowl', cost: 5, flavor: 'It\'s food. Technically. Tastes like cardboard and regret.' },
  { name: 'Synthetic Sushi', cost: 20, flavor: 'Tastes almost like the real thing. Almost.' },
  { name: 'NiCola 6-pack', cost: 10, flavor: 'Night City\'s favorite soda. Definitely addictive.' },
  { name: 'SCOP Protein Bar', cost: 5, flavor: 'Single Cell Organic Protein. The future of nutrition, sadly.' },
  { name: 'Prepak Meal (Noodles)', cost: 10, flavor: 'Just add boiling water. Flavor: "Meat Adjacent".' },
  { name: 'Prepak Meal (Curry)', cost: 10, flavor: 'Suspiciously orange. Burns twice.' },
  { name: 'Real Water, 1L Bottle', cost: 5, flavor: 'Allegedly filtered. Better than tap, which is a low bar.' },
  { name: 'Smash Energy Drink', cost: 5, flavor: 'Contains enough caffeine to restart a flatline.' },
  { name: 'Canned Synthbeans', cost: 5, flavor: 'Nobody knows what plant they came from. Don\'t ask.' },
  { name: 'Kibble Variety Pack (7 days)', cost: 25, flavor: 'Seven flavors of the same flavor.' },
  { name: 'Synthcaf Coffee (Bag of 20)', cost: 15, flavor: 'It\'s not real coffee, but your brain won\'t know.' },
  { name: 'Bottle of Synth-Vodka', cost: 10, flavor: 'Made in a bathtub, bottled with optimism.' },
  { name: 'Six-Pack of Beer (No-Name)', cost: 10, flavor: 'Wet. Cold. Alcoholic. That\'s the sales pitch.' },
  { name: 'Real Fruit (Apple)', cost: 50, flavor: 'An actual apple. People stare at you while you eat it.' },
  { name: 'Bag of Jerky (Synthetic)', cost: 10, flavor: 'Chewy, salty, and 0% animal. Probably.' },
];

const STREET_FOOD_ITEMS = [
  { name: 'Skewered Mystery Meat', cost: 5, flavor: 'Hot, greasy, and you\'ll never know what it was. That\'s the deal.' },
  { name: 'Noodle Cup (Extra Spicy)', cost: 10, flavor: 'Made fresh in a cart. The broth has been simmering since the 4th Corporate War.' },
  { name: 'Stuffed Bao Buns (3)', cost: 10, flavor: 'Fluffy, warm, filled with SCOP. The vendor swears it\'s pork.' },
  { name: 'Fried Synth-Shrimp Basket', cost: 15, flavor: 'Battered, deep-fried, dipped in sauce. Don\'t check the ingredients.' },
  { name: 'Grilled Corn on a Stick', cost: 5, flavor: 'Genetically modified to grow in concrete. Still tastes like corn.' },
  { name: 'Churros (Bag of 5)', cost: 10, flavor: 'Sugar, grease, and happiness. The only honest food in Night City.' },
  { name: 'Bowl of Pho', cost: 15, flavor: 'Real herbs floating on top. The vendor grows them on their roof.' },
  { name: 'Takoyaki (6 pieces)', cost: 10, flavor: 'Crispy outside, molten inside. The octopus is synthetic but the burns are real.' },
  { name: 'Hot Dog (Chicago Style)', cost: 5, flavor: 'Neon green relish. Nobody questions the wiener.' },
  { name: 'Empanada (2)', cost: 10, flavor: 'Flaky pastry, mystery filling. The vendor\'s abuela\'s recipe, allegedly.' },
];

const JUNK_VENDOR_ITEMS = [
  { name: 'Used Mirrorshades', cost: 5, flavor: 'Scratched lenses, bent frame. Someone died in these. Probably.' },
  { name: 'Bag of Assorted Cables', cost: 2, flavor: 'USB, fiber, power, mystery. Untangle at your own risk.' },
  { name: 'Broken Agent (Parts Only)', cost: 5, flavor: 'Screen shattered, battery dead. Might have data on it still.' },
  { name: 'Secondhand Boots', cost: 10, flavor: 'Worn but functional. Previous owner had smaller feet.' },
  { name: 'Torn Leather Jacket', cost: 15, flavor: 'Has character. Also has bloodstains.' },
  { name: 'Bag of Loose Screws & Bolts', cost: 1, flavor: 'Various sizes. None of them match anything.' },
  { name: 'Cracked Mirror', cost: 2, flavor: 'Seven years bad luck or a cheap way to check your six.' },
  { name: 'Stack of Old Magazines', cost: 1, flavor: 'Fashion tips from 2035. Some things never change.' },
  { name: 'Dented Thermos', cost: 3, flavor: 'Keeps drinks warm for about 20 minutes. Better than nothing.' },
  { name: 'Plastic Tarp', cost: 2, flavor: 'Useful for rain, privacy, and not asking what that stain is.' },
  { name: 'Mismatched Gloves', cost: 2, flavor: 'One leather, one synthetic. Both size medium-ish.' },
  { name: 'Box of Candle Stubs', cost: 1, flavor: 'For when the power goes out. So, often.' },
  { name: 'Used Paperback Novel', cost: 1, flavor: 'Romance. Dog-eared at the good parts.' },
  { name: 'Rusty Multi-Tool', cost: 5, flavor: 'Three of the blades still fold. The rest are decorative.' },
  { name: 'Salvaged Circuit Boards', cost: 3, flavor: 'Pulled from something. Could be useful to a Tech.' },
  { name: 'Bundle of Zip Ties', cost: 1, flavor: 'Endless utility. Restraint, repair, fashion.' },
  { name: 'Chipped Coffee Mug', cost: 1, flavor: 'Says "World\'s Best Solo" on it. Probably ironic.' },
  { name: 'Bag of Buttons', cost: 1, flavor: 'Every size, every color. No two alike.' },
  { name: 'Old Road Map (Paper)', cost: 2, flavor: 'Pre-datakrash cartography. Half the roads don\'t exist anymore.' },
  { name: 'Tangled Fairy Lights', cost: 3, flavor: 'Battery-powered. Only half of them work.' },
  { name: 'Single Roller Skate', cost: 2, flavor: 'Right foot. Left foot sold separately (and lost).' },
  { name: 'Bucket', cost: 1, flavor: 'It\'s a bucket. You\'d be surprised how often you need one.' },
  { name: 'Empty Ammo Box', cost: 1, flavor: 'Sturdy container. Good for storing stuff that isn\'t ammo.' },
  { name: 'Faded Band T-Shirt', cost: 5, flavor: 'Samurai world tour 2014. Almost certainly bootleg.' },
  { name: 'Broken Alarm Clock', cost: 1, flavor: 'Stuck at 3:47 AM. The most honest time in Night City.' },
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
  { type: 'Junk Peddler', sells: 'junk' },
  { type: 'Secondhand Stall', sells: 'junk' },
  { type: 'Street Food Cart', sells: 'streetfood' },
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

// ── Junk items by profile type ──

const JUNK_UNIVERSAL = [
  'Crumpled photo of someone they don\'t recognize',
  'Handful of loose eddies chips (3-5eb total)',
  'Worn-out lighter that barely works',
  'Scrap of paper with a scribbled address',
  'Single earring, cheap metal',
  'Chewed pen, ink leaking',
  'Lint and pocket dust',
  'Cracked mirrorshades',
  'A single key, no label',
  'Rubber band ball',
  'Expired Trauma Team card',
  'Bent fork',
  'Handful of mismatched screws',
  'Sticky candy wrapper',
  'Broken hair clip',
  'Faded receipt, totally illegible',
  'Thumb drive, corrupted',
  'Religious pendant, unknown faith',
  'Cracked comb missing half its teeth',
  'Ticket stub from a braindance parlor',
  'Small stone, smooth from pocket rubbing',
  'Button from a jacket, no jacket',
  'Piece of wire, uselessly short',
  'Napkin with a lipstick kiss on it',
  'Empty gum wrapper',
  'Clip from a broken magazine, no bullets',
  'Tooth. Not theirs.',
  'Wrapper from a NiCola bar',
  'Matchbook from a club that burned down',
  'Stub of a pencil, no eraser',
];

const JUNK_BY_PROFILE = {
  bum: [
    'Half-eaten kibble bar', 'Broken agent with cracked screen, no charge',
    'Empty pill bottle, label scratched off', 'Plastic bag full of bottle caps',
    'Stained blanket, folded small', 'Single shoe (left), worn through the sole',
    'Collection of bus tickets from years ago', 'Cardboard sign asking for eddies',
    'Dog-eared paperback with pages missing', 'Coat held together with duct tape',
    'Empty can used as a cup', 'Newspaper clipping about a missing person',
    'Faded photo of a child', 'Religious tract, heavily annotated',
    'Piece of string tied around a rock', 'Broken umbrella',
    'Filthy sleeping bag, patched with packing tape', 'Collection of interesting rocks',
    'Hand-carved wooden figurine, surprisingly detailed', 'Tattered map of the city with shelters marked',
    'Jar of collected rainwater', 'Bundle of old magazines, used as insulation',
    'Cracked reading glasses held together with wire', 'Half a sandwich wrapped in newspaper',
    'Small tin of shoe polish, used as face paint', 'Deflated soccer ball',
    'Origami crane made from a food wrapper', 'List of soup kitchen schedules',
    'Piece of chalk, worn to a nub', 'Hand-sewn pouch with nothing in it',
    'Letter from a shelter, never opened', 'Battered harmonica, missing two reeds',
  ],
  streetKid: [
    'Pack of cigarettes, 3 left', 'Cheap energy drink, half empty',
    'Handful of loose bullets, wrong caliber', 'Stained ripperdoc business card',
    'Faded gang bandana from a defunct crew', 'Scratched music player with one song',
    'Switchblade with a broken spring', 'Handful of arcade tokens',
    'Spray paint can, mostly empty', 'Fake ID, bad quality',
    'Bag of synthetic jerky', 'Stolen candy bar',
    'Cracked skateboard wheel', 'Burner phone, dead battery',
    'Hand-drawn tag design, practiced a hundred times', 'Flyer for an underground party',
    'Keycard to an abandoned building (their crash spot)', 'Half-used tube of hair dye',
    'Cheap braindance chip, low-quality recording', 'Stub from a Combat Zone fight night',
    'Ziplock of miscellaneous pills', 'Bottle cap necklace',
    'Dog-eared copy of a streetslang dictionary', 'Wrapper from a food vendor, greasy',
    'Small bag of firecrackers', 'Stolen corpo sunglasses, lens cracked',
    'Note from a friend: "meet me at the usual spot"', 'Handful of vending machine tokens',
    'Sticker collection, peeling', 'Bandana soaked in cheap cologne',
  ],
  ganger: [
    'Gang membership token (tattoo ink, colors swatch)', 'Small bag of street drugs',
    'Trophy from a previous fight (tooth, patch, bullet casing)',
    'Brass knuckles, decorative', 'Cheap synth-vodka, quarter full',
    'Tally marks scratched into a lighter', 'Polaroid of their crew',
    'Intimidating face mask or bandana', 'Stolen corporate pen, fancy',
    'List of people who owe them money', 'Bag of stimulant pills',
    'Knife sharpening stone', 'Crude hand-drawn territory map',
    'Blood-stained bandage, recently used', 'Bullet with a name scratched into it',
    'Burner phone with only three contacts', 'Handful of protection racket receipts',
    'Lock of hair tied with wire (trophy or memento)', 'Cheap gold-plated ring',
    'Threatening note meant for someone else', 'Flask of homemade rotgut',
    'Sharpened screwdriver, used as a shiv', 'Tattoo gun, battery-powered, cheap',
    'Photo of a rival gang member, circled face', 'Bag of zip ties',
    'Vial of synthetic adrenaline', 'Collection of stolen watches, none working',
    'Scrawled oath of loyalty on a napkin', 'Pair of dice, loaded',
    'Necklace of shell casings', 'Matchbook with "YOU OWE ME" written inside',
  ],
  security: [
    'Photo of their family in a wallet', 'Corporate employee ID (probably should remove this)',
    'Energy bar, unopened', 'Small thermos of coffee, still warm',
    'Duty roster schedule on a folded paper', 'Pack of gum',
    'Personal communicator with saved messages from home',
    'Pair of earplugs', 'Stress ball, well-squeezed',
    'Security manual, dog-eared', 'Flashlight, spare batteries',
    'Cheap watch, working', 'Sandwich in a bag, homemade',
    'Badge holder with a clip, spare lanyard', 'Small notebook with incident logs',
    'Receipt for kids\' school supplies', 'Shift schedule with days crossed off',
    'Half-finished crossword puzzle', 'Bottle of antacids',
    'Photo of a dog, "good boy" written on back', 'Union membership card',
    'Parking garage ticket', 'Crumpled motivational poster printout',
    'Emergency contact card, laminated', 'Small first aid kit, mostly used up',
    'Lottery ticket, unchecked', 'Coffee-stained training certificate',
    'Note from a coworker: "cover my shift?"', 'Company-branded pen, chewed cap',
    'Personal firearm cleaning cloth', 'Pocket Bible, bookmarked at Psalms',
  ],
  professional: [
    'Lucky charm (bullet casing on a chain, rabbit foot, coin)',
    'Field ration, military grade', 'Personal note to be delivered if they don\'t come back',
    'Maintenance kit for their weapon', 'Encrypted data shard, personal logs',
    'Dog tags (real or fake)', 'Small flask, good quality alcohol',
    'Worn photograph of someone waiting for them',
    'Packet of painkillers', 'Compact mirror',
    'Roll of medical tape', 'Cigar, unsmoked, expensive',
    'Topo map of a location, routes highlighted', 'Garrote wire, neatly coiled',
    'Burner phone, last call was 3 days ago', 'Lock pick set, well-used',
    'Folded list of known aliases', 'Blood-type card, laminated',
    'Suppressor cleaning brush', 'Small vial of poison, unlabeled',
    'Challenge coin from a merc company', 'Notebook with tallied jobs completed',
    'Compact survival kit (matches, wire, blade)', 'Pre-written resignation letter, never sent',
    'Photo of a sunrise, taken from somewhere high', 'Small bottle of gun oil',
    'Tactical gloves, spare pair', 'Receipt from an arms dealer, no name',
    'Compass, old-fashioned, working', 'Worn leather holster, spare',
  ],
  corporate: [
    'Expensive cologne sample', 'Business cards, embossed and pretentious',
    'Designer pill case with prescription meds', 'Corporate credit chip (frozen)',
    'Silk handkerchief', 'Small bottle of hand sanitizer',
    'Appointment card for a high-end ripperdoc', 'Encrypted personal agent',
    'Receipt from an expensive restaurant', 'Key fob for a luxury vehicle',
    'Monogrammed pen', 'Small piece of real chocolate',
    'Loyalty card for a premium gym', 'Dry cleaning receipt for a tailored suit',
    'Breath mints, designer brand', 'Mini bottle of imported whiskey',
    'NDA document, partially signed', 'Therapist\'s business card',
    'Slim case with two anti-anxiety pills left', 'Access card for a private elevator',
    'Photo of a yacht they can\'t actually afford', 'Corporate motivational pin',
    'Glasses cleaner for AR lenses', 'Business lunch receipt, 800eb for two',
    'Encrypted memo about a rival department', 'Premium earbuds, noise-cancelling',
    'Small mirror for checking appearance', 'Fitness tracker showing 200 steps today',
    'Invitation to a corpo gala, plus one', 'Resume, heavily embellished',
  ],
  elite: [
    'Mission briefing shard, encrypted', 'Field stim pack, half used',
    'Dog tags, serial numbers filed off', 'Map with marked positions',
    'Tactical comm earpiece', 'Blood-type patch sewn into gear',
    'Photo of a target, crossed out', 'Small medkit, well organized',
    'Extraction beacon, single use', 'Challenge coin from a unit',
    'Letter of commendation, classified header', 'Compact binoculars',
    'Infrared chem light, unused', 'Paracord bracelet, multi-use',
    'Laminated card with extraction codes', 'Field journal, coded entries',
    'Photograph of a team, some faces crossed out', 'Emergency transponder, disabled',
    'Multi-tool, military grade', 'Shrapnel fragment kept as a reminder',
    'Wristband with unit motto, frayed', 'Signal mirror, scratched',
    'Tourniquet, folded and ready', 'Small waterproof document bag, empty',
    'Cyanide capsule (expired)', 'Photo of a safehouse location',
    'After-action report, redacted', 'Spare suppressor adapter',
    'Thermal blanket, compact', 'Letter from home, creased from rereading',
  ],
  netrunner: [
    'Data shard collection (unlabeled)', 'Sticker-covered water bottle',
    'Candy wrappers and energy drink cans', 'Hand-drawn NET architecture diagram',
    'USB cable collection in a tangle', 'Stress toy shaped like a skull',
    'Notebook full of passwords and handles', 'Custom sticker set for laptops',
    'Packet of instant noodles', 'Eye drops for screen fatigue',
    'Small figurine of an anime character', 'Chip of Black ICE, inert',
    'Screwdriver set for opening cyberdecks', 'Sticky note: "CHANGE PASSWORD"',
    'Offline copy of a NET map, outdated', 'Bottle of caffeine pills, nearly empty',
    'Hand-soldered patch cable', 'Collection of daemon codenames on a napkin',
    'Anti-static wrist strap', 'Half-eaten bag of synth-cheese puffs',
    'Blacklight pen for reading hidden notes', 'Cracked virtuality goggles',
    'Backup battery pack, low charge', 'Printed screenshot of their best hack',
    'Small plush toy (a digital ghost mascot)', 'Note: "Rache Bartmoss did nothing wrong"',
    'Finger splints (RSI from too much typing)', 'Receipt for a NET cafe, 47 hours',
    'Defaced corporate screensaver on a chip', 'Business card: "I know what you did. Call me."',
  ],
  solo: [
    'Weapon maintenance kit, well-organized', 'Bullet with a name on it (their own)',
    'Tally of confirmed jobs on inner arm', 'Combat stimulant auto-injector, 1 dose left',
    'Small armored pouch with personal effects', 'Worn combat knife, non-standard issue',
    'Folded photo of their first squad', 'Hearing protection plugs, custom molded',
    'Field-stripped cleaning rod', 'Range membership card, unlimited plan',
    'Tourniquet in a belt pouch', 'List of former employers, some crossed out',
    'Custom-fit magazine loader', 'Trauma Team subscription card (basic tier)',
    'Scar treatment cream, half used', 'Bar napkin with a job offer scribbled on it',
    'Old combat boot lace, used as a bracelet', 'Shell casing from their first firefight',
    'Tactical pen, doubles as a glass breaker', 'Small tin of weapon lubricant',
  ],
  fixer: [
    'Three burner phones, different networks', 'Address book in personal shorthand',
    'Collection of favors owed, coded entries', 'Business cards from twenty different aliases',
    'Small amount of every street drug (samples)', 'Encrypted contact list on a shard',
    'Receipt from a high-end restaurant, someone else paid', 'Tailored jacket inner pocket full of cards',
    'Pre-paid credchips in small denominations', 'Key to a storage locker (contents unknown)',
    'List of safe houses, memorized but backed up', 'Breath mints, always prepared',
    'Recording device, always running', 'Invitation to a private auction',
    'Cocktail napkin with a NET address', 'Photo of someone with "DO NOT TRUST" written on back',
    'Small gift, expensively wrapped, for "smoothing things over"', 'Fake Trauma Team card, decent quality',
    'Note: "The Afterlife, booth 7, Thursday"', 'Chip with blackmail material, insurance policy',
  ],
  tech: [
    'Soldering iron, portable, battery-powered', 'Bag of assorted resistors and capacitors',
    'Jeweler\'s loupe for fine work', 'Tube of industrial adhesive, half used',
    'Wiring diagram on a napkin, surprisingly complex', 'Spare actuator for cyberware, generic',
    'Multitool with thirty attachments, half broken', 'Small magnet collection',
    'Calibration tool for optic mounts', 'Bag of salvaged chips, maybe useful',
    'Grease-stained manual for a vehicle model', 'Roll of electrical tape',
    'Pocket oscilloscope, cracked screen', 'Prototype component, unlabeled',
    'Note: "DO NOT connect red to red"', 'Pair of anti-static gloves',
    'Small bottle of contact cleaner', 'Hand-wound coil of copper wire',
    'Schematic drawn on a food wrapper', 'Receipt from a parts dealer, paid in favors',
  ],
  medtech: [
    'Stethoscope, folded in a pocket', 'Bottle of medical-grade alcohol',
    'Suture kit, sealed, pocket-sized', 'Packet of sterile gauze',
    'Penlight for checking pupil response', 'Small vial of local anesthetic',
    'Business card: "Discreet. No questions."', 'Blood-stained latex gloves, used',
    'Reference card for drug interactions', 'Expired medical license, laminated',
    'Small bag of lollipops (for nervous patients)', 'Ripperdoc catalog, earmarked pages',
    'Medical alert bracelet for a patient', 'Prescription pad, mostly blank',
    'Note: "Patient X, follow up Tuesday"', 'Hand cream, medical grade',
    'Pair of hemostats, slightly rusty', 'Small cooler bag, biohazard symbol',
    'Jar of unmarked pills (vitamins, probably)', 'Organ donor card, signed by someone else',
  ],
  media: [
    'Digital recorder, always recording', 'Press pass, possibly expired',
    'Notebook full of shorthand, incomprehensible to anyone else', 'Photo of a crime scene, unpublished',
    'List of informants, coded names only', 'Business card: "The Truth, Whatever It Costs"',
    'Copy of their own article, highlighted', 'Camera lens cap, no camera',
    'USB stick labeled "INSURANCE"', 'Ticket stubs from press events',
    'Crumpled rejection letter from a publisher', 'Scanner frequencies written on wrist',
    'Voice modulator for anonymous calls', 'Coffee-stained interview notes',
    'Photo of a corporate exec with a question mark', 'Small panic button, wearable',
    'Note: "If I disappear, check locker 47"', 'Fake credentials for three organizations',
    'Worn copy of a journalism ethics handbook (ironic)', 'Source\'s phone number on a gum wrapper',
  ],
  nomad: [
    'Road map with clan routes marked', 'Jerky, real meat, homemade',
    'Family clan pendant on a leather cord', 'Pouch of road dust from home',
    'Vehicle keys on a carabiner with a dozen charms', 'Multi-tool, well-worn but maintained',
    'Battered canteen, dented from use', 'Solar charger, portable, cracked but working',
    'Hand-stitched patch of their clan symbol', 'CB radio frequencies scrawled on tape',
    'Photo of the family convoy', 'Bag of trading goods (batteries, canned food)',
    'Paracord, 10 meters, always useful', 'Compass with clan motto engraved',
    'Small bottle of motor oil, "just in case"', 'Road flare, one left',
    'Letter from a clan elder, folded and refolded', 'Makeshift fishing line and hook',
    'Leather bracelet with beads, each one a road trip', 'Seed packet, for when things settle down',
  ],
  rockerboy: [
    'Guitar pick on a chain, never leaves their neck', 'Setlist from their last gig, beer-stained',
    'Flyer for their band, hand-printed', 'Earplugs, custom-molded, expensive',
    'Lyric notebook, full of crossed-out lines', 'Bottle of throat spray',
    'Fan letter, crumpled but kept', 'VIP wristband from a venue',
    'Sticker of their band logo, stack of 50', 'Small amplifier battery, charged',
    'Pick-up microphone, disguised as a pin', 'Note from a fan: "You changed my life"',
    'Bandana soaked in stage sweat', 'Demo chip, self-recorded',
    'Photo of a crowd from the stage', 'Marker for signing autographs',
    'Capo for a guitar, neon-colored', 'Zippo lighter with band logo engraved',
    'Torn ticket from the gig that started it all', 'Manifesto, handwritten, passionate and messy',
  ],
  lawman: [
    'NCPD badge, worn at the edges', 'Handcuff key on a retractable cord',
    'Citation book, half full', 'Photo of their precinct squad',
    'Folded Miranda rights card (muscle memory, but still)', 'Packet of antacids, economy size',
    'Business card from Internal Affairs (why do they have this?)', 'Small notepad with witness statements',
    'Precinct coffee mug, chipped', 'Overtime request forms, unsigned',
    'Body camera, battery dead', 'Speed loader, spare',
    'Photo of a suspect, mugshot style', 'NCPD-branded pen, clicking nervously',
    'Crumpled transfer request', 'Small American flag patch, sewn inside jacket',
    'List of informants, personal shorthand', 'Energy drink, triple caffeine',
    'Complaint filed against them, crumpled', 'Wedding ring, no longer worn on finger',
  ],
  exec: [
    'Encrypted personal agent with biometric lock', 'Business cards, Arasaka/Militech/Biotechnica logo',
    'Slim case of performance-enhancing nootropics', 'Access keycard, executive floor',
    'Photo of a corner office view', 'Dry cleaning tag for a 5000eb suit',
    'Expense report, heavily padded', 'Small bottle of top-shelf scotch',
    'Meeting agenda with passive-aggressive annotations', 'Golden cufflink, single (lost the other)',
    'Resignation letter, unsent', 'Corporate loyalty pin, 10 years',
    'Stress medication, prescription', 'Note from assistant: "Your 3pm cancelled"',
    'Receipt for a private security consultation', 'Divorce lawyer\'s card',
    'Gym membership to a corpo-only facility', 'Encrypted memo RE: "Project Blackout"',
    'Real leather wallet, mostly empty after extraction', 'Photo of kids at a private school',
  ],
};

export const LOOT_PROFILES = [
  // Generic archetypes
  { id: 'random', name: 'Random', weaponQualities: ['Poor', 'Standard', 'Excellent'], eddiesMin: 10, eddiesMax: 2000, cyberwareChance: 0.3, junkPool: 'streetKid', weaponChance: 0.8, gearCount: [1, 3] },
  { id: 'bum', name: 'Random Bum', weaponQualities: ['Poor'], eddiesMin: 0, eddiesMax: 20, cyberwareChance: 0.05, junkPool: 'bum', weaponChance: 0.15, gearCount: [0, 1] },
  { id: 'streetKid', name: 'Street Kid', weaponQualities: ['Poor'], eddiesMin: 10, eddiesMax: 50, cyberwareChance: 0.15, junkPool: 'streetKid', weaponChance: 0.4, gearCount: [0, 2] },
  { id: 'ganger', name: 'Ganger', weaponQualities: ['Poor', 'Standard'], eddiesMin: 20, eddiesMax: 200, cyberwareChance: 0.3, junkPool: 'ganger', weaponChance: 0.9, gearCount: [1, 2] },
  { id: 'security', name: 'Security Guard', weaponQualities: ['Standard'], eddiesMin: 50, eddiesMax: 500, cyberwareChance: 0.4, junkPool: 'security', weaponChance: 1.0, gearCount: [1, 3] },
  { id: 'professional', name: 'Armed Professional', weaponQualities: ['Standard', 'Excellent'], eddiesMin: 100, eddiesMax: 2000, cyberwareChance: 0.6, junkPool: 'professional', weaponChance: 1.0, gearCount: [2, 4] },
  { id: 'corporate', name: 'Corporate', weaponQualities: ['Standard'], eddiesMin: 500, eddiesMax: 5000, cyberwareChance: 0.5, junkPool: 'corporate', weaponChance: 0.3, gearCount: [1, 3] },
  { id: 'elite', name: 'Elite Operative', weaponQualities: ['Excellent'], eddiesMin: 1000, eddiesMax: 10000, cyberwareChance: 0.8, junkPool: 'elite', weaponChance: 1.0, gearCount: [2, 4] },
  // CPR Roles
  { id: 'solo', name: 'Solo', weaponQualities: ['Standard', 'Excellent'], eddiesMin: 100, eddiesMax: 3000, cyberwareChance: 0.7, junkPool: 'solo', weaponChance: 1.0, gearCount: [2, 4] },
  { id: 'netrunner', name: 'Netrunner', weaponQualities: ['Poor', 'Standard'], eddiesMin: 200, eddiesMax: 2000, cyberwareChance: 0.9, junkPool: 'netrunner', weaponChance: 0.3, gearCount: [1, 3] },
  { id: 'fixer', name: 'Fixer', weaponQualities: ['Standard'], eddiesMin: 500, eddiesMax: 5000, cyberwareChance: 0.4, junkPool: 'fixer', weaponChance: 0.5, gearCount: [1, 3] },
  { id: 'tech', name: 'Tech', weaponQualities: ['Poor', 'Standard'], eddiesMin: 100, eddiesMax: 1500, cyberwareChance: 0.5, junkPool: 'tech', weaponChance: 0.5, gearCount: [2, 5] },
  { id: 'medtech', name: 'Medtech', weaponQualities: ['Poor', 'Standard'], eddiesMin: 200, eddiesMax: 2000, cyberwareChance: 0.6, junkPool: 'medtech', weaponChance: 0.4, gearCount: [2, 4] },
  { id: 'media', name: 'Media', weaponQualities: ['Poor'], eddiesMin: 100, eddiesMax: 1000, cyberwareChance: 0.3, junkPool: 'media', weaponChance: 0.3, gearCount: [1, 3] },
  { id: 'nomad', name: 'Nomad', weaponQualities: ['Poor', 'Standard', 'Excellent'], eddiesMin: 50, eddiesMax: 1000, cyberwareChance: 0.25, junkPool: 'nomad', weaponChance: 0.8, gearCount: [2, 4] },
  { id: 'rockerboy', name: 'Rockerboy', weaponQualities: ['Poor', 'Standard'], eddiesMin: 50, eddiesMax: 1500, cyberwareChance: 0.3, junkPool: 'rockerboy', weaponChance: 0.4, gearCount: [1, 2] },
  { id: 'lawman', name: 'Lawman', weaponQualities: ['Standard'], eddiesMin: 50, eddiesMax: 800, cyberwareChance: 0.35, junkPool: 'lawman', weaponChance: 1.0, gearCount: [1, 3] },
  { id: 'exec', name: 'Exec', weaponQualities: ['Standard', 'Excellent'], eddiesMin: 1000, eddiesMax: 10000, cyberwareChance: 0.5, junkPool: 'exec', weaponChance: 0.25, gearCount: [1, 2] },
];

// ── Generator functions ──

export const THREAT_LEVELS = [...new Set(ENEMY_TYPES.map(e => e.threat))];

export function generateEncounter({ threat } = {}) {
  const pool = threat ? ENEMY_TYPES.filter(e => e.threat === threat) : ENEMY_TYPES;
  const enemy = pick(pool.length ? pool : ENEMY_TYPES);
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

export function generateLoot({ weaponType, maxEddies, quality, profile: profileId } = {}) {
  const profile = LOOT_PROFILES.find(p => p.id === profileId) || LOOT_PROFILES[0];
  const hasValueCap = maxEddies !== undefined && maxEddies !== null && maxEddies !== '';
  const cap = hasValueCap ? +maxEddies : Infinity;
  let totalValue = 0;

  // Weapon
  let weapon = null;
  if (Math.random() < profile.weaponChance) {
    let pool = WEAPONS;
    if (weaponType) pool = pool.filter(w => w.type === weaponType);
    const quals = quality ? [quality] : profile.weaponQualities;
    pool = pool.filter(w => quals.includes(w.quality));
    if (pool.length === 0) pool = WEAPONS.filter(w => quals.includes(w.quality));
    if (pool.length === 0) pool = WEAPONS;
    // If capped, prefer weapons that fit under the budget
    if (hasValueCap) {
      const affordable = pool.filter(w => w.cost <= cap);
      if (affordable.length > 0) pool = affordable;
    }
    weapon = pick(pool);
    totalValue += weapon.cost;
  }

  // Gear (skip items that would exceed cap)
  const gearCount = roll(profile.gearCount[0], profile.gearCount[1]);
  let gear = [];
  if (gearCount > 0) {
    const gearPool = hasValueCap ? GEAR_ITEMS.filter(g => g.cost <= cap - totalValue) : GEAR_ITEMS;
    const picked = pickN(gearPool.length > 0 ? gearPool : GEAR_ITEMS, gearCount);
    for (const g of picked) {
      if (totalValue + g.cost <= cap) {
        gear.push(g);
        totalValue += g.cost;
      }
    }
  }

  // Cyberware
  let cyberware = null;
  if (Math.random() < profile.cyberwareChance) {
    const cPool = hasValueCap ? CYBERWARE_ITEMS.filter(c => c.cost <= cap - totalValue) : CYBERWARE_ITEMS;
    if (cPool.length > 0) {
      cyberware = pick(cPool);
      totalValue += cyberware.cost;
    }
  }

  // Eddies (fill remaining budget)
  const eddiesMax = hasValueCap ? Math.max(0, cap - totalValue) : profile.eddiesMax;
  let eddies = roll(profile.eddiesMin, Math.max(profile.eddiesMin, eddiesMax));
  if (hasValueCap) eddies = Math.min(eddies, Math.max(0, cap - totalValue));
  totalValue += eddies;

  // Junk (everyone gets 1-3 items from their profile pool + universal)
  const profileJunk = JUNK_BY_PROFILE[profile.junkPool] || JUNK_BY_PROFILE.streetKid;
  const junkCount = roll(1, 3);
  const junk = pickN([...profileJunk, ...JUNK_UNIVERSAL], junkCount);

  return {
    profileName: profile.name,
    weapon, gear, cyberware, eddies, junk, totalValue,
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
    else if (v.sells === 'food') inventory = pickN(FOOD_ITEMS, roll(4, 7));
    else if (v.sells === 'streetfood') inventory = pickN(STREET_FOOD_ITEMS, roll(3, 5));
    else if (v.sells === 'junk') inventory = pickN(JUNK_VENDOR_ITEMS, roll(5, 10));
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

export function rerollJunk(profileId) {
  const profile = LOOT_PROFILES.find(p => p.id === profileId) || LOOT_PROFILES[0];
  const profileJunk = JUNK_BY_PROFILE[profile.junkPool] || JUNK_BY_PROFILE.streetKid;
  return pickN([...profileJunk, ...JUNK_UNIVERSAL], roll(1, 3));
}

export { GEAR_ITEMS, GEAR_CATEGORIES, CYBERWARE_ITEMS };
