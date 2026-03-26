// Night Market generator following Cyberpunk Red core rules (pg. 337-339)

const roll = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// ── Market category tables (d100, 20 entries each at 5% bands) ──

const FOOD_AND_DRUGS = [
  { roll: '00-05', item: 'Canned Goods', cost: 10, priceCategory: 'Cheap' },
  { roll: '06-10', item: 'Packaged Goods', cost: 10, priceCategory: 'Cheap' },
  { roll: '11-15', item: 'Frozen Goods', cost: 10, priceCategory: 'Cheap' },
  { roll: '16-20', item: 'Bags of Grain', cost: 20, priceCategory: 'Everyday' },
  { roll: '21-25', item: 'Kibble Pack', cost: 10, priceCategory: 'Cheap' },
  { roll: '26-30', item: 'Bags of Prepak', cost: 20, priceCategory: 'Everyday' },
  { roll: '31-35', item: 'Street Drugs (20eb or less)', cost: 20, priceCategory: 'Everyday' },
  { roll: '36-40', item: 'Poor Quality Alcohol', cost: 10, priceCategory: 'Cheap' },
  { roll: '41-45', item: 'Alcohol', cost: 20, priceCategory: 'Everyday' },
  { roll: '46-50', item: 'Excellent Quality Alcohol', cost: 100, priceCategory: 'Premium' },
  { roll: '51-55', item: 'MRE', cost: 10, priceCategory: 'Cheap' },
  { roll: '56-60', item: 'Live Chicken', cost: 50, priceCategory: 'Costly' },
  { roll: '61-65', item: 'Live Fish', cost: 50, priceCategory: 'Costly' },
  { roll: '66-70', item: 'Fresh Fruits', cost: 50, priceCategory: 'Costly' },
  { roll: '71-75', item: 'Fresh Vegetables', cost: 50, priceCategory: 'Costly' },
  { roll: '76-80', item: 'Root Vegetables', cost: 20, priceCategory: 'Everyday' },
  { roll: '81-85', item: 'Live Pigs', cost: 100, priceCategory: 'Premium' },
  { roll: '86-90', item: 'Exotic Fruits', cost: 100, priceCategory: 'Premium' },
  { roll: '91-95', item: 'Exotic Vegetables', cost: 100, priceCategory: 'Premium' },
  { roll: '96-100', item: 'Street Drugs (exactly 50eb)', cost: 50, priceCategory: 'Costly' },
];

const PERSONAL_ELECTRONICS = [
  { roll: '00-05', item: 'Agent', cost: 100, priceCategory: 'Premium' },
  { roll: '06-10', item: 'Programs or Hardware (100eb or less)', cost: 100, priceCategory: 'Premium' },
  { roll: '11-15', item: 'Audio Recorder', cost: 100, priceCategory: 'Premium' },
  { roll: '16-20', item: 'Bug Detector', cost: 500, priceCategory: 'Expensive' },
  { roll: '21-25', item: 'Chemical Analyzer', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '26-30', item: 'Computer', cost: 50, priceCategory: 'Costly' },
  { roll: '31-35', item: 'Cyberdeck', cost: 500, priceCategory: 'Expensive' },
  { roll: '36-40', item: 'Disposable Cell Phone', cost: 50, priceCategory: 'Costly' },
  { roll: '41-45', item: 'Electric Guitar or Other Instrument', cost: 500, priceCategory: 'Expensive' },
  { roll: '46-50', item: 'Programs or Hardware (exactly 500eb)', cost: 500, priceCategory: 'Expensive' },
  { roll: '51-55', item: 'Medscanner', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '56-60', item: 'Homing Tracer', cost: 500, priceCategory: 'Expensive' },
  { roll: '61-65', item: 'Radio Communicator', cost: 100, priceCategory: 'Premium' },
  { roll: '66-70', item: 'Techscanner', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '71-75', item: 'Smart Glasses', cost: 500, priceCategory: 'Expensive' },
  { roll: '76-80', item: 'Radar Detector', cost: 500, priceCategory: 'Expensive' },
  { roll: '81-85', item: 'Scrambler/Descrambler', cost: 500, priceCategory: 'Expensive' },
  { roll: '86-90', item: 'Radio Scanner/Music Player', cost: 50, priceCategory: 'Costly' },
  { roll: '91-95', item: 'Braindance Viewer', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '96-100', item: 'Virtuality Goggles', cost: 100, priceCategory: 'Premium' },
];

const WEAPONS_AND_ARMOR = [
  { roll: '00-05', item: 'Medium Pistol', cost: 50, priceCategory: 'Costly' },
  { roll: '06-10', item: 'Heavy Pistol or Very Heavy Pistol', cost: 100, priceCategory: 'Premium' },
  { roll: '11-15', item: 'SMG', cost: 100, priceCategory: 'Premium' },
  { roll: '16-20', item: 'Heavy SMG', cost: 100, priceCategory: 'Premium' },
  { roll: '21-25', item: 'Shotgun', cost: 500, priceCategory: 'Expensive' },
  { roll: '26-30', item: 'Assault Rifle', cost: 500, priceCategory: 'Expensive' },
  { roll: '31-35', item: 'Sniper Rifle', cost: 500, priceCategory: 'Expensive' },
  { roll: '36-40', item: 'Bows or Crossbow', cost: 100, priceCategory: 'Premium' },
  { roll: '41-45', item: 'Grenade Launcher or Rocket Launcher', cost: 500, priceCategory: 'Expensive' },
  { roll: '46-50', item: 'Ammunition (500eb or less)', cost: 500, priceCategory: 'Expensive' },
  { roll: '51-55', item: 'Exotic Weapon (GM\'s choice)', cost: 0, priceCategory: 'Varies' },
  { roll: '56-60', item: 'Light Melee Weapon', cost: 50, priceCategory: 'Costly' },
  { roll: '61-65', item: 'Medium Melee Weapon', cost: 50, priceCategory: 'Costly' },
  { roll: '66-70', item: 'Heavy Melee Weapon', cost: 100, priceCategory: 'Premium' },
  { roll: '71-75', item: 'Very Heavy Melee Weapon', cost: 100, priceCategory: 'Premium' },
  { roll: '76-80', item: 'Armor (100eb or less)', cost: 100, priceCategory: 'Premium' },
  { roll: '81-85', item: 'Armor (exactly 500eb)', cost: 500, priceCategory: 'Expensive' },
  { roll: '86-90', item: 'Armor (exactly 1,000eb)', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '91-95', item: 'Weapon Attachments (100eb or less)', cost: 100, priceCategory: 'Premium' },
  { roll: '96-100', item: 'Weapon Attachments (500eb or higher)', cost: 500, priceCategory: 'Expensive' },
];

const CYBERWARE = [
  { roll: '00-05', item: 'Cybereye', cost: 100, priceCategory: 'Premium' },
  { roll: '06-10', item: 'Cyberaudio Suite', cost: 500, priceCategory: 'Expensive' },
  { roll: '11-15', item: 'Neural Link', cost: 500, priceCategory: 'Expensive' },
  { roll: '16-20', item: 'Cyberarm', cost: 500, priceCategory: 'Expensive' },
  { roll: '21-25', item: 'Cyberleg', cost: 100, priceCategory: 'Premium' },
  { roll: '26-30', item: 'External Cyberware (exactly 1,000eb)', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '31-35', item: 'External Cyberware (500eb or less)', cost: 500, priceCategory: 'Expensive' },
  { roll: '36-40', item: 'Internal Cyberware (exactly 1,000eb)', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '41-45', item: 'Internal Cyberware (500eb or less)', cost: 500, priceCategory: 'Expensive' },
  { roll: '46-50', item: 'Cybereye Option (exactly 1,000eb)', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '51-55', item: 'Cybereye Option (500eb or less)', cost: 500, priceCategory: 'Expensive' },
  { roll: '56-60', item: 'Cyberaudio Option (exactly 1,000eb)', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '61-65', item: 'Cyberaudio Option (500eb or less)', cost: 500, priceCategory: 'Expensive' },
  { roll: '66-70', item: 'Neuralware Option (exactly 1,000eb)', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '71-75', item: 'Neuralware Option (500eb or less)', cost: 500, priceCategory: 'Expensive' },
  { roll: '76-80', item: 'Cyberlimb Option (exactly 1,000eb)', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '81-85', item: 'Cyberlimb Option (500eb or less)', cost: 500, priceCategory: 'Expensive' },
  { roll: '86-90', item: 'Fashionware (GM\'s Choice)', cost: 100, priceCategory: 'Premium' },
  { roll: '91-95', item: 'Borgware (GM\'s Choice)', cost: 0, priceCategory: 'Varies' },
  { roll: '96-100', item: 'Any Cyberware (GM\'s Choice)', cost: 0, priceCategory: 'Varies' },
];

const CLOTHING_AND_FASHIONWARE = [
  { roll: '00-05', item: 'Bag Lady Chic', cost: 10, priceCategory: 'Cheap' },
  { roll: '06-10', item: 'Gang Colors', cost: 20, priceCategory: 'Everyday' },
  { roll: '11-15', item: 'Generic Chic', cost: 20, priceCategory: 'Everyday' },
  { roll: '16-20', item: 'Bohemian', cost: 10, priceCategory: 'Cheap' },
  { roll: '21-25', item: 'Leisurewear', cost: 20, priceCategory: 'Everyday' },
  { roll: '26-30', item: 'Nomad Leathers', cost: 100, priceCategory: 'Premium' },
  { roll: '31-35', item: 'Asia Pop', cost: 50, priceCategory: 'Costly' },
  { roll: '36-40', item: 'Urban Flash', cost: 100, priceCategory: 'Premium' },
  { roll: '41-45', item: 'Businesswear', cost: 100, priceCategory: 'Premium' },
  { roll: '46-50', item: 'High Fashion', cost: 500, priceCategory: 'Expensive' },
  { roll: '51-55', item: 'Biomonitor', cost: 100, priceCategory: 'Premium' },
  { roll: '56-60', item: 'Chemskin', cost: 100, priceCategory: 'Premium' },
  { roll: '61-65', item: 'EMP Threading', cost: 10, priceCategory: 'Cheap' },
  { roll: '66-70', item: 'Light Tattoo', cost: 100, priceCategory: 'Premium' },
  { roll: '71-75', item: 'Shift Tacts', cost: 100, priceCategory: 'Premium' },
  { roll: '76-80', item: 'Skinwatch', cost: 100, priceCategory: 'Premium' },
  { roll: '81-85', item: 'Techhair', cost: 100, priceCategory: 'Premium' },
  { roll: '86-90', item: 'Generic Chic', cost: 20, priceCategory: 'Everyday' },
  { roll: '91-95', item: 'Leisurewear', cost: 20, priceCategory: 'Everyday' },
  { roll: '96-100', item: 'Gang Colors', cost: 20, priceCategory: 'Everyday' },
];

const SURVIVAL_GEAR = [
  { roll: '00-05', item: 'Anti-Smog Breathing Mask', cost: 20, priceCategory: 'Everyday' },
  { roll: '06-10', item: 'Auto Level Dampening Ear Protectors', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '11-15', item: 'Binoculars', cost: 50, priceCategory: 'Costly' },
  { roll: '16-20', item: 'Carryall', cost: 20, priceCategory: 'Everyday' },
  { roll: '21-25', item: 'Flashlight', cost: 20, priceCategory: 'Everyday' },
  { roll: '26-30', item: 'Duct Tape', cost: 20, priceCategory: 'Everyday' },
  { roll: '31-35', item: 'Inflatable Bed & Sleep-bag', cost: 20, priceCategory: 'Everyday' },
  { roll: '36-40', item: 'Lock Picking Set', cost: 20, priceCategory: 'Everyday' },
  { roll: '41-45', item: 'Handcuffs', cost: 50, priceCategory: 'Costly' },
  { roll: '46-50', item: 'Medtech Bag', cost: 100, priceCategory: 'Premium' },
  { roll: '51-55', item: 'Tent and Camping Equipment', cost: 50, priceCategory: 'Costly' },
  { roll: '56-60', item: 'Rope (60m/yds)', cost: 20, priceCategory: 'Everyday' },
  { roll: '61-65', item: 'Techtool', cost: 100, priceCategory: 'Premium' },
  { roll: '66-70', item: 'Personal CarePak', cost: 20, priceCategory: 'Everyday' },
  { roll: '71-75', item: 'Radiation Suit', cost: 1000, priceCategory: 'Very Expensive' },
  { roll: '76-80', item: 'Road Flare', cost: 10, priceCategory: 'Cheap' },
  { roll: '81-85', item: 'Grapple Gun', cost: 100, priceCategory: 'Premium' },
  { roll: '86-90', item: 'Tech Bag', cost: 500, priceCategory: 'Expensive' },
  { roll: '91-95', item: 'Shovel or Axe', cost: 50, priceCategory: 'Costly' },
  { roll: '96-100', item: 'Airhypo', cost: 50, priceCategory: 'Costly' },
];

// Category index (1d6 roll → category)
const CATEGORIES = [
  { id: 1, name: 'Food & Drugs', table: FOOD_AND_DRUGS },
  { id: 2, name: 'Personal Electronics', table: PERSONAL_ELECTRONICS },
  { id: 3, name: 'Weapons & Armor', table: WEAPONS_AND_ARMOR },
  { id: 4, name: 'Cyberware', table: CYBERWARE },
  { id: 5, name: 'Clothing & Fashionware', table: CLOTHING_AND_FASHIONWARE },
  { id: 6, name: 'Survival Gear', table: SURVIVAL_GEAR },
];

// Roll on a d100 table, returning the matching entry
function rollOnTable(table) {
  const d100 = roll(0, 100);
  const index = Math.min(Math.floor(d100 / 5), table.length - 1);
  return { ...table[index], d100 };
}

// Roll unique items from a table (reroll duplicates)
function rollUniqueItems(table, count) {
  const results = [];
  const usedIndices = new Set();
  let attempts = 0;
  while (results.length < count && attempts < 100) {
    const result = rollOnTable(table);
    const index = Math.floor(result.d100 / 5);
    if (!usedIndices.has(index)) {
      usedIndices.add(index);
      results.push(result);
    }
    attempts++;
  }
  return results;
}

// Generate a Night Market following CPR rules (pg. 337-338)
// Step 1: Roll 1d6 twice for 2 categories (reroll duplicates)
// Step 2: For each category, roll 1d10 for number of item types
// Step 3: Roll d100 that many times on the category table (reroll duplicates)
export function generateNightMarket() {
  // Step 1: Two categories
  const cat1Index = roll(1, 6);
  let cat2Index = roll(1, 6);
  while (cat2Index === cat1Index) cat2Index = roll(1, 6);

  const cat1 = CATEGORIES[cat1Index - 1];
  const cat2 = CATEGORIES[cat2Index - 1];

  // Step 2 & 3: Roll item counts and items for each
  const stalls = [cat1, cat2].map((cat) => {
    const itemCount = roll(1, 10);
    const items = rollUniqueItems(cat.table, itemCount);
    return {
      category: cat.name,
      categoryRoll: cat.id,
      itemCount,
      items,
    };
  });

  return {
    stalls,
    categoryRolls: [cat1Index, cat2Index],
  };
}

// Generate a Midnight Market (Rank 9+ Fixer)
// Contains 1d10 + 5 rare and sought-after items of the GM's choice
export function generateMidnightMarket() {
  const itemCount = roll(1, 10) + 5;
  // Pull from all tables, weighted toward expensive items
  const items = [];
  for (let i = 0; i < itemCount; i++) {
    const cat = pick(CATEGORIES);
    const item = rollOnTable(cat.table);
    items.push({ ...item, source: cat.name });
  }
  return {
    itemCount,
    items,
    isMidnight: true,
  };
}

export { CATEGORIES };
