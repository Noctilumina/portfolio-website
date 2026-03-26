// Encounter Balancer following Cyberpunk Red core rules (pg. 412-416)
// NPC threat tiers and their stat blocks from the rulebook

export const NPC_TEMPLATES = {
  mooks: [
    { name: 'Boosterganger', hp: 20, armor: 4, deathSave: 4, topSkill: 12, weapons: 'VH Pistol (4d6), Rippers (2d6)', tier: 'Mook' },
    { name: 'Bodyguard', hp: 35, armor: 7, deathSave: 6, topSkill: 10, weapons: 'Shotgun (5d6), VH Pistol (4d6)', tier: 'Mook' },
    { name: 'Road Ganger', hp: 25, armor: 4, deathSave: 3, topSkill: 12, weapons: 'VH Pistol (4d6), Crossbow (4d6), Light Melee (1d6)', tier: 'Mook' },
    { name: 'Security Operative', hp: 30, armor: 7, deathSave: 5, topSkill: 10, weapons: 'Assault Rifle (5d6), VH Pistol (4d6)', tier: 'Mook' },
  ],
  lieutenants: [
    { name: 'Netrunner', hp: 30, armor: 11, deathSave: 3, topSkill: 13, weapons: 'VH Pistol (4d6), Cyberdeck', tier: 'Lieutenant' },
    { name: 'Reclaimer Chief', hp: 40, armor: 11, deathSave: 6, topSkill: 12, weapons: 'Shotgun (5d6), Heavy Pistol (3d6), Light Melee (1d6)', tier: 'Lieutenant' },
    { name: 'Security Officer', hp: 40, armor: 13, deathSave: 7, topSkill: 12, weapons: 'Assault Rifle (5d6), VH Pistol (4d6), Medium Melee (2d6)', tier: 'Lieutenant' },
  ],
  miniBosses: [
    { name: 'Outrider', hp: 40, armor: 11, deathSave: 6, topSkill: 14, weapons: 'Assault Rifle (5d6), VH Pistol (4d6), Light Melee (1d6)', tier: 'Mini Boss' },
    { name: 'Pyro', hp: 35, armor: 11, deathSave: 5, topSkill: 14, weapons: 'Flamethrower (5d6), VH Pistol (4d6), Heavy Melee (3d6)', tier: 'Mini Boss' },
  ],
  bosses: [
    { name: 'Cyberpsycho', hp: 55, armor: 11, deathSave: 10, topSkill: 17, weapons: 'Popup Grenade Launcher (6d6), Popup Heavy SMG (3d6), VH Pistol (4d6), Wolvers (3d6)', tier: 'Boss' },
  ],
};

// Balancing rules from CPR (pg. 412-416):
// - Mooks: equal number to PCs = fair fight
// - Lieutenants: 1 per 2 PCs
// - Mini Bosses: 1 per 3 PCs
// - Cyberpsycho: full boss battle, only if PCs are ready

// Estimate a PC's combat power from their stats
function estimatePCPower(pc) {
  const combatSkill = Math.max(pc.reflex + pc.bestCombatSkill, 0);
  const survivability = pc.hp + (pc.armorSP * 3);
  const avgDamage = pc.avgWeaponDamage || 10;
  return {
    combatSkill,
    survivability,
    avgDamage,
    // Overall power score (rough composite)
    power: combatSkill + (survivability / 5) + (avgDamage / 2),
  };
}

// Estimate an NPC's combat power
function estimateNPCPower(npc) {
  return {
    combatSkill: npc.topSkill,
    survivability: npc.hp + (npc.armor * 3),
    power: npc.topSkill + ((npc.hp + npc.armor * 3) / 5),
  };
}

// Classify party strength
function classifyParty(pcs) {
  const powers = pcs.map(estimatePCPower);
  const avgPower = powers.reduce((sum, p) => sum + p.power, 0) / powers.length;
  const totalHP = pcs.reduce((sum, pc) => sum + pc.hp, 0);
  const avgCombat = powers.reduce((sum, p) => sum + p.combatSkill, 0) / powers.length;

  let tier;
  if (avgPower < 18) tier = 'Low';
  else if (avgPower < 24) tier = 'Medium';
  else if (avgPower < 30) tier = 'High';
  else tier = 'Very High';

  return { avgPower, totalHP, avgCombat, tier, count: pcs.length, powers };
}

// Generate encounter recommendations
export function balanceEncounter(pcs) {
  const party = classifyParty(pcs);
  const n = party.count;

  const recommendations = [];

  // Easy encounter
  recommendations.push({
    difficulty: 'Easy',
    description: `A straightforward fight the crew should handle without breaking a sweat.`,
    enemies: [
      { count: Math.max(1, n - 1), template: 'Mook', note: 'Boostergangers or Road Gangers' },
    ],
    reasoning: `${n - 1} Mooks vs ${n} PCs. Numbers advantage for the crew.`,
  });

  // Medium encounter (RAW balanced)
  recommendations.push({
    difficulty: 'Medium',
    description: `A fair fight by CPR standards. Equal Mooks to PCs.`,
    enemies: [
      { count: n, template: 'Mook', note: 'Security Operatives or Bodyguards' },
    ],
    reasoning: `${n} Mooks vs ${n} PCs. The book says this is a "good chance of coming out on top."`,
  });

  // Hard encounter
  const ltCount = Math.max(1, Math.floor(n / 2));
  const mookPadding = Math.max(0, n - ltCount);
  recommendations.push({
    difficulty: 'Hard',
    description: `Lieutenants supported by Mooks. The crew needs to think tactically.`,
    enemies: [
      { count: ltCount, template: 'Lieutenant', note: 'Security Officers or Netrunners' },
      ...(mookPadding > 0 ? [{ count: mookPadding, template: 'Mook', note: 'Security Operatives' }] : []),
    ],
    reasoning: `1 Lieutenant per 2 PCs (${ltCount}), padded with ${mookPadding} Mooks. Expect injuries.`,
  });

  // Very Hard encounter
  const mbCount = Math.max(1, Math.floor(n / 3));
  const mbMookPad = Math.max(1, n - mbCount * 2);
  recommendations.push({
    difficulty: 'Very Hard',
    description: `Mini Bosses with support. Someone might go down.`,
    enemies: [
      { count: mbCount, template: 'Mini Boss', note: 'Outriders or Pyros' },
      { count: mbMookPad, template: 'Mook', note: 'Boostergangers or Road Gangers' },
    ],
    reasoning: `1 Mini Boss per 3 PCs (${mbCount}), plus ${mbMookPad} Mooks. High risk of casualties.`,
  });

  // Boss encounter
  if (party.tier !== 'Low') {
    recommendations.push({
      difficulty: 'Deadly',
      description: `Full boss battle. Only if the crew is prepared and well-equipped.`,
      enemies: [
        { count: 1, template: 'Boss', note: 'Cyberpsycho' },
        ...(n > 3 ? [{ count: Math.floor(n / 3), template: 'Mook', note: 'Boostergangers' }] : []),
      ],
      reasoning: `The book warns: "Don't put them on the board unless you're sure your Edgerunners are up for the challenge!"`,
    });
  }

  // Party analysis
  const warnings = [];
  const powers = party.powers;

  const lowHP = pcs.filter((pc) => pc.hp < 25);
  if (lowHP.length > 0) warnings.push(`${lowHP.length} PC(s) have low HP (<25). They can go down in 1-2 hits from heavy weapons.`);

  const lowArmor = pcs.filter((pc) => pc.armorSP < 7);
  if (lowArmor.length > 0) warnings.push(`${lowArmor.length} PC(s) have weak armor (SP <7). Even Mook weapons will deal consistent damage.`);

  const lowCombat = powers.filter((p) => p.combatSkill < 12);
  if (lowCombat.length > 0) warnings.push(`${lowCombat.length} PC(s) have low combat skills (STAT+Skill <12). They'll struggle to hit enemies consistently.`);

  const highSpread = Math.max(...powers.map((p) => p.power)) - Math.min(...powers.map((p) => p.power));
  if (highSpread > 10) warnings.push(`Large power gap between PCs. Weaker characters may feel sidelined in combat.`);

  return {
    party,
    recommendations,
    warnings,
    npcReference: NPC_TEMPLATES,
  };
}
