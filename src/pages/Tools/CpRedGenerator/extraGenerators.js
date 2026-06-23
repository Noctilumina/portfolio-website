// Cyberpunk RED Generator – Pure data + functions module
// No React, no imports. Self-contained helpers + rich data tables.

// ─────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const pickN = (arr, n) => { const c=[...arr]; const out=[]; for(let i=0;i<n && c.length;i++){ out.push(c.splice(Math.floor(Math.random()*c.length),1)[0]); } return out; };
const roll = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// ─────────────────────────────────────────────────────────
// DATA TABLES
// ─────────────────────────────────────────────────────────

// GIG DATA
const GIG_TITLES = [
  "Midnight Run", "Dirty Laundry", "Corporate Cleanup", "The Burn", "Blood Money",
  "No Loose Ends", "Scorched Earth", "The Collector", "Hard Wire", "Burning Chrome",
  "Neon Bleed", "The Long Con", "Flesh Trade", "Ghost Protocol", "Rust & Ruin",
  "Payback", "The Disappearing Act", "Net Prophet", "Deadline", "The Inside Job",
  "Takedown", "The Final Offer", "Rat Run", "Corporate Espionage", "Extraction Team",
  "The Purge", "Syndicate Bust", "Frozen Assets", "Chrome & Blood", "The Void"
];

const FIXERS = [
  "Raze", "Chrome", "Jinx", "Roadhog", "Mantis", "Static", "Wraith", "Bishop",
  "Lynch", "Graves", "Storm", "Vex", "Cipher", "Phantom", "Razor", "Neon", "Toxic",
  "Cross", "Jade", "Echo", "Omen", "Flux", "Silence", "Trace", "Nightshade"
];

const CLIENTS = [
  "a paranoid Arasaka middle-manager",
  "a Militech corporate fixer",
  "a desperate independent hacker",
  "a Biotech ripperdoc with a grudge",
  "a corpo who went rogue from Petrochem",
  "a fixer empire protecting territory",
  "a rival gang lieutenant",
  "a corporate black-ops handler",
  "a crime lord with deep pockets",
  "a burned-out NCPD detective working the side",
  "a Street kid gang boss",
  "a megacorp AI node's human agent",
  "a Net-famous netrunner hiding from the feds",
  "a Trauma Team contract manager",
  "an anonymous voice on a burner phone",
  "a disgraced corpo looking for leverage",
  "a Braindance addiction ring dealer",
  "an ex-corpo who knows too much",
  "a Scav gang looking for hardware",
  "a Neo-Terrorism cell"
];

const JOB_TYPES = [
  "Extraction", "Wetwork", "Heist", "Escort", "Sabotage", "Data Theft", "Repo",
  "Bodyguard", "Search & Rescue", "Delivery", "Theft", "Acquisition", "Infiltration",
  "Assassination", "Courier Run", "Hacking Contract", "Surveillance", "Rescue Op",
  "Blackmail Setup", "Frame Job"
];

const TARGETS = [
  "a rogue corpo exec",
  "a military-grade weapon shipment",
  "a stolen prototype",
  "confidential NetrunNing code",
  "a compromised AI implant",
  "a smuggled cargo container",
  "a blackmail recording",
  "a gang leader's stash house",
  "a Militech weapon cache",
  "evidence of corporate crime",
  "a hacker's encrypted deck",
  "a rival's tech development files",
  "a rare cyberware mod",
  "Braindance recordings",
  "corporate merger documents",
  "a corpo spy",
  "a shipment of illegal military tech",
  "a gang enforcer",
  "Net data on corpo dealings",
  "a missing person"
];

const LOCATIONS = [
  "City Center — Corporate Tower Plaza",
  "City Center — Arasaka HQ Lower Levels",
  "Watson — Kabuki District Street",
  "Watson — Overwatch Night Club",
  "Watson — Back Alley Ripperdoc",
  "Westbrook — The Glen Waterfront",
  "Westbrook — Corporate Penthouse",
  "Heywood — Jig-Jig Street",
  "Heywood — Amusement Arcade",
  "Santo Domingo — Industrial Zone Warehouse",
  "Santo Domingo — Gang Territory Safe House",
  "Pacifica — The Afterlife Bar",
  "Pacifica — Abandoned Megamall",
  "Northside — Fixers & Runners Haven",
  "Northside — Black Market Bazaar",
  "Little China — Restaurant Back Room",
  "Charter Hill — Executive Estate",
  "Rancho Coronado — Outlaw Haven"
];

const COMPLICATIONS = [
  "An NCPD patrol shows up mid-run",
  "Your contact goes dark and pulls out",
  "A hostile netrunner cuts your comms",
  "Corporate security is heavier than intel suggested",
  "A double-cross from an inside man",
  "Law enforcement has the location staked out",
  "The target isn't where you expected",
  "A rival runner gang is doing the same job",
  "Trauma Team rolls in for an emergency call",
  "Your getaway wheels get torched",
  "A corpo AI system gets alerted mid-run",
  "A corpo bounty hunter picks up your scent",
  "The fixer's intel was wrong or outdated",
  "A gang territory dispute ignites around your objective",
  "Military-grade opposition shows up unannounced",
  "Your team has a mole working for someone else"
];

const TWISTS = [
  "The client wasn't who they claimed",
  "The real target is the person who hired you",
  "Corporate wetwork team is hunting the same mark",
  "Your contact is a planted asset",
  "The job requires burning a previous contact",
  "Law enforcement is using you to catch bigger fish",
  "A rival fixer has the same contract out",
  "The target has already gone underground",
  "Your fixer skipped with half the pay",
  "Gang territory politics make it a suicide run"
];

const HOOKS = [
  "Your fixer vouches for the pay, but not the heat.",
  "Simple in-and-out, but nothing ever is in Night City.",
  "The payout is triple normal — ask why.",
  "Fixer says you're the only runner he trusts for this one.",
  "Corporate whisper campaign — someone wants this quiet.",
  "Black market rumor: the target has off-world connections.",
  "Fixing a loose end from a previous job you thought was done."
];

// VEHICLE DATA
const VEHICLE_MAKES = [
  "Yaiba", "Thorton", "Quadra", "Mizutani", "Chevillon", "Archer", "Villefort",
  "Makigai", "Militech", "Rayfield", "Shion", "Aston", "Turbo-R", "Metrocab"
];

const VEHICLE_MODELS = [
  "Kusanagi", "Javelin", "Nomad", "Aggressor", "Raiden", "Scorpion", "Falcon",
  "Phoenix", "Viper", "Phantom", "Guardian", "Wraith", "Shadow", "Interceptor",
  "Havoc", "Blaze", "Storm", "Tempest", "Cipher", "Eclipse", "Nova", "Zenith"
];

const VEHICLE_CLASSES = ["Economy", "Executive", "Sport", "Off-Road", "Bike", "Aerodyne", "Combat", "Cargo"];

const VEHICLE_FLAVORS = [
  "Rusted exhaust, neon underglow barely working, but reliable.",
  "Sleek paint job hiding armor plating and a turbocharged engine.",
  "Street-legal racing rig, all speed and no brakes.",
  "Heavy-duty suspension and reinforced chassis for offroad runs.",
  "Stripped down, modded for pure performance.",
  "Corporate executive transport, locked to corporation security net.",
  "Military-grade protection, looks like it's seen combat.",
  "Cargo hauler built for moving contraband quietly.",
  "Cybernetic interface, partial self-driving, unreliable AI.",
  "Graffiti-covered, engine purrs like a feral cat."
];

const VEHICLE_MODS = [
  "military-grade armor package",
  "jacked-up suspension",
  "thermal imaging system",
  "autopilot AI module (glitchy)",
  "reinforced engine block",
  "hidden weapon mount",
  "EMP shielding",
  "NCPD-signal jammer",
  "all-terrain tires",
  "custom paint job hiding neon circuits"
];

// FIXER DATA
const FIXER_SPECIALTIES = [
  "military hardware & black-market weapons",
  "NET access, cyberdecks & netrunning jobs",
  "forged SINs, paperwork & identities",
  "wetwork contracts & elimination",
  "cyberware mods & ripperdoc connections",
  "data theft & corporate espionage",
  "vehicle acquisition & exotic cars",
  "Braindance trafficking",
  "gang territory management",
  "NCPD & corpo information brokering",
  "high-end extraction operations",
  "armor & combat augmentation",
  "medical supplies & healing services",
  "black market pharmaceuticals",
  "safe houses & underground network"
];

const FIXER_TERRITORIES = [
  "Kabuki, Watson", "Jig-Jig Street, Heywood", "The Afterlife, Pacifica",
  "Charter Hill, City Center", "Santo Domingo Industrial Zone", "Northside Underground",
  "Little China Net Café", "The Glen, Westbrook", "Rancho Coronado Outskirts",
  "Overwatch Night Club back rooms", "Corpo Tower basement levels"
];

const FIXER_ATTITUDES = [
  "Cautious — vets every runner twice",
  "Greedy — chops the cut but always delivers",
  "Loyal — remembers who was solid with them",
  "Ruthless — burns bridges if runners fail",
  "Connected — knows everyone's dirt",
  "Burned-out — tired of corpo games",
  "Paranoid — assumes everyone's wired",
  "Corporate — slick, professional, corporate-aligned",
  "Gang-aligned — street loyalty over profit",
  "Chaotic — unpredictable but well-connected"
];

const FIXER_REPUTATIONS = [
  "Legendary fixer who never loses a job.",
  "Made a name breaching Arasaka security.",
  "Built an empire on corpo secrets.",
  "Gang enforcer turned deal-broker.",
  "Ripperdoc turned information broker.",
  "Netrunner who went legitimate (sort of).",
  "Ex-Militech black ops handler.",
  "NCPD detective running side jobs.",
  "Crime lord's right hand with independent ops.",
  "Street legend with massive network reach."
];

const FIXER_SIGNATURE_OFFERS = [
  "50% off first run for fresh runners",
  "Military-grade hardware supplier deals",
  "Instant identity package for 10k eb",
  "Direct line to corpo security heads",
  "Guaranteed wetwork completion or money back",
  "Custom cyberware install discount program",
  "NET access that bypasses most ICE",
  "Safe house network across all districts",
  "Gang amnesty negotiation services",
  "Black-ops team rental on retainer"
];

const FIXER_PRICES = [
  "Cheap but risky",
  "Fair, by the book",
  "Premium, no questions",
  "Negotiable, depends on connection",
  "Corporate rates for corpo jobs only",
  "Street rates, tight margins",
  "Expensive but bulletproof intel",
  "Variable — pays what the job's worth"
];

const FIXER_QUIRKS = [
  "Never takes a job on Sundays — religious",
  "Insists on meeting face-to-face, no encrypted comms",
  "Cybernetic eye twitches when lying (maybe intentional)",
  "Drinks Braindance-spiked synth-caf constantly",
  "Keeps a trophy from first major kill",
  "Quotes old 20th-century literature obsessively",
  "Augmented voice modulator, never sounds same twice",
  "Net-jacked to the point of half-presence",
  "Owns a cyberdog enforcer named 'Asset'",
  "Paranoid about being recorded; sweeps for bugs"
];

// CHARACTER NAME DATA
const FIRST_NAMES = [
  "Alex", "Morgan", "Casey", "Riley", "Jordan", "Quinn", "Avery", "Dakota", "Blake", "Skylar",
  "Phoenix", "Sage", "River", "Storm", "Ash", "Sage", "Nova", "Vale", "Kade", "Soren",
  "Zion", "Ames", "Cross", "Echo", "Jace", "Kaya", "Lyra", "Mace", "Nox", "Rene",
  "Titus", "Vex", "Zeph", "Archer", "Blaze", "Cipher", "Dash", "Evie", "Faye", "Gale"
];

const LAST_NAMES = [
  "Cross", "Stone", "Rivers", "Silva", "Reyes", "Kane", "Shaw", "Graves", "Chen", "Santos",
  "Yamamoto", "Volkov", "Lynch", "Steele", "Hart", "Banks", "Crane", "Diamond", "Fox", "Grace",
  "Hale", "Iron", "Jade", "Knight", "Lance", "Morgan", "Nash", "Oakes", "Payne", "Quinn",
  "Raze", "Steel", "Turner", "Vale", "Wells", "York", "Zero", "Black", "Copper", "Dusk"
];

const HANDLES = [
  "Switchblade", "Nyx", "Ratking", "Cipher", "Ghost", "Wraith", "Phantom", "Razor", "Echo",
  "Static", "Chrome", "Pulse", "Vex", "Reaper", "Jade", "Storm", "Blaze", "Toxic", "Void",
  "Shadow", "Frost", "Ember", "Havoc", "Nexus", "Onyx", "Raven", "Scythe", "Tempest", "Virus",
  "Whisper", "Crimson", "Nightfall", "Inferno", "Mercury", "Catalyst", "Mirage", "Prophet"
];

const VIBES = [
  "Menacing", "Slick", "Burnout", "Corporate", "Mysterious", "Reckless", "Calculated",
  "Chaotic", "Professional", "Paranoid", "Fearless", "Hardened", "Desperate", "Ruthless",
  "Sarcastic", "Determined", "Haunted", "Ambitious", "Loyal", "Savage"
];

// ─────────────────────────────────────────────────────────
// GENERATOR FUNCTIONS
// ─────────────────────────────────────────────────────────

export function generateGig() {
  const jobType = pick(JOB_TYPES);
  return {
    title: pick(GIG_TITLES),
    fixer: pick(FIXERS),
    client: pick(CLIENTS),
    jobType,
    target: pick(TARGETS),
    location: pick(LOCATIONS),
    payout: roll(500, 10000),
    difficulty: pick(["Milk Run", "Standard", "Dangerous", "Suicide"]),
    complication: pick(COMPLICATIONS),
    twist: pick(TWISTS),
    hook: pick(HOOKS)
  };
}

export function generateVehicle() {
  const klass = pick(VEHICLE_CLASSES);
  const baseSDPMap = {
    "Economy": roll(30, 45),
    "Executive": roll(40, 55),
    "Sport": roll(35, 50),
    "Off-Road": roll(50, 70),
    "Bike": roll(20, 35),
    "Aerodyne": roll(45, 65),
    "Combat": roll(70, 85),
    "Cargo": roll(60, 80)
  };
  const baseSPMap = {
    "Economy": roll(0, 5),
    "Executive": roll(5, 10),
    "Sport": roll(2, 8),
    "Off-Road": roll(8, 15),
    "Bike": roll(0, 3),
    "Aerodyne": roll(5, 12),
    "Combat": roll(20, 25),
    "Cargo": roll(10, 18)
  };
  const seatsMap = {
    "Economy": roll(4, 5),
    "Executive": roll(4, 6),
    "Sport": roll(2, 3),
    "Off-Road": roll(4, 6),
    "Bike": roll(1, 2),
    "Aerodyne": roll(2, 4),
    "Combat": roll(2, 3),
    "Cargo": roll(2, 3)
  };

  return {
    name: `${pick(VEHICLE_MAKES)} ${pick(VEHICLE_MODELS)}`,
    klass,
    sdp: baseSDPMap[klass],
    sp: baseSPMap[klass],
    seats: seatsMap[klass],
    speed: pick(["0–180 kph", "0–220 kph", "0–250+ kph", "Airborne", "Heavy & slow"]),
    flavor: pick(VEHICLE_FLAVORS),
    mod: pick(VEHICLE_MODS)
  };
}

export function generateFixer() {
  return {
    name: pick(FIXERS),
    realName: `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`,
    specialty: pick(FIXER_SPECIALTIES),
    territory: pick(FIXER_TERRITORIES),
    attitude: pick(FIXER_ATTITUDES),
    reputation: pick(FIXER_REPUTATIONS),
    signatureOffer: pick(FIXER_SIGNATURE_OFFERS),
    price: pick(FIXER_PRICES),
    quirk: pick(FIXER_QUIRKS)
  };
}

export function generateName({ kind } = {}) {
  return {
    handle: pick(HANDLES),
    fullName: `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`,
    vibe: pick(VIBES)
  };
}
