import { useState, useCallback } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import { generateEncounter, generateNPC, generateLoot, generateLocation, WEAPON_TYPES, LOOT_PROFILES, THREAT_LEVELS, rerollJunk } from './data';
import { generateNightMarket, generateMidnightMarket } from './nightmarket';
import { balanceEncounter, NPC_TEMPLATES } from './encounterbalancer';
import { generateGig, generateVehicle, generateFixer, generateName } from './extraGenerators';
import styles from './CpRedGenerator.module.css';

const TABS = ['encounter', 'npc', 'gig', 'fixer', 'vehicle', 'name', 'loot', 'location', 'nightMarket', 'midnightMarket', 'balancer'];

function EncounterCard({ data }) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <span className={styles.resultTitle}>{data.scenario}</span>
        <span className={`${styles.badge} ${styles[`threat${data.threat.replace(/[^a-zA-Z]/g, '')}`]}`}>{data.threat}</span>
      </div>
      <div className={styles.resultRow}><span className={styles.label}>Enemy</span><span>{data.enemy} x{data.count}</span></div>
      <p className={styles.flavorText}>{data.enemyDesc}</p>
      {data.statBlock && (
        <div className={styles.resultRow}><span className={styles.label}>Stat block</span><span>HP {data.statBlock.hp} · SP {data.statBlock.armorSP} · Init {data.statBlock.init} · Combat {data.statBlock.combatSkill} · {data.statBlock.weapon} ({data.statBlock.damage})</span></div>
      )}
      <div className={styles.resultRow}><span className={styles.label}>Location</span><span>{data.location}</span></div>
      {data.terrain && <div className={styles.resultRow}><span className={styles.label}>Terrain</span><span>{data.terrain}</span></div>}
      {data.objective && <div className={styles.resultRow}><span className={styles.label}>Objective</span><span>{data.objective}</span></div>}
      <div className={styles.resultRow}><span className={styles.label}>Tactical</span><span>{data.tacticalNote}</span></div>
      {data.complication && <div className={styles.hookBox}><span className={styles.label}>Complication</span><p>{data.complication}</p></div>}
    </div>
  );
}

function NpcCard({ data }) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <span className={styles.resultTitle}>{data.name}</span>
        <span className={styles.badge}>{data.role}</span>
      </div>
      <p className={styles.flavorText}>{data.roleDesc}</p>
      <div className={styles.resultRow}><span className={styles.label}>Personality</span><span>{data.personality}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Motivation</span><span>{data.motivation}</span></div>
      {data.backstory && <div className={styles.resultRow}><span className={styles.label}>Background</span><span>{data.backstory}</span></div>}
      {data.combat && (
        <div className={styles.resultRow}><span className={styles.label}>Combat</span><span>HP {data.combat.hp} · {data.combat.armor} (SP {data.combat.armorSP}) · {data.combat.weapon} ({data.combat.weaponDamage})</span></div>
      )}
      {data.skills && data.skills.length > 0 && (
        <div className={styles.resultRow}><span className={styles.label}>Skills</span><span>{data.skills.map((s) => `${s.name} ${s.level}`).join(', ')}</span></div>
      )}
      <div className={styles.resultRow}><span className={styles.label}>Cyberware</span><span>{data.cyberware.join(', ')}</span></div>
      {data.gear && data.gear.length > 0 && (
        <div className={styles.resultRow}><span className={styles.label}>Gear</span><span>{data.gear.map((g) => g.name).join(', ')}</span></div>
      )}
      <div className={styles.statsGrid}>
        {Object.entries(data.stats).map(([stat, val]) => (
          <div key={stat} className={styles.statBox}>
            <span className={styles.statLabel}>{stat}</span>
            <span className={styles.statVal}>{val}</span>
          </div>
        ))}
      </div>
      {data.quote && <p className={`${styles.flavorText} ${styles.npcQuote}`}>{data.quote}</p>}
    </div>
  );
}

function ItemBlock({ item, priceModifier }) {
  const cost = priceModifier ? Math.round(item.cost * priceModifier / 100) : item.cost;
  return (
    <div className={styles.itemBlock}>
      <div className={styles.itemHeader}>
        <span className={styles.itemName}>{item.name}</span>
        {item.type && <span className={styles.itemType}>{item.type}</span>}
        {item.quality && <span className={`${styles.itemQuality} ${styles[`quality${item.quality}`]}`}>{item.quality}</span>}
        {item.slot && <span className={styles.itemType}>{item.slot}</span>}
        {item.category && <span className={styles.itemType}>{item.category}</span>}
        {cost > 0 && <span className={styles.eddies}>{cost} eb</span>}
      </div>
      {item.damage && <span className={styles.itemDamage}>{item.damage}</span>}
      {item.flavor && <p className={styles.itemFlavor}>{item.flavor}</p>}
      {item.found && <p className={styles.itemFound}>Found: {item.found}</p>}
    </div>
  );
}

function LootCard({ data }) {
  const [junk, setJunk] = useState(data.junk || []);
  const profileId = LOOT_PROFILES.find(p => p.name === data.profileName)?.id || 'random';

  const handleRerollJunk = () => setJunk(rerollJunk(profileId));

  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <span className={styles.resultTitle}>Loot Drop</span>
        {data.profileName && <span className={styles.badge}>{data.profileName}</span>}
        <span className={styles.eddies}>{data.eddies.toLocaleString()} eb</span>
        {data.totalValue != null && <span className={styles.totalValue}>Total: {data.totalValue.toLocaleString()} eb</span>}
      </div>
      {data.weapon && <ItemBlock item={data.weapon} />}
      {data.gear.map((g, i) => <ItemBlock key={i} item={g} />)}
      {data.cyberware && <ItemBlock item={data.cyberware} />}
      {junk.length > 0 && (
        <div className={styles.junkSection}>
          <div className={styles.junkHeader}>
            <span className={styles.junkLabel}>Pockets</span>
            <button className={styles.junkReroll} onClick={handleRerollJunk}>reroll</button>
          </div>
          {junk.map((j, i) => <p key={i} className={styles.junkItem}>{j}</p>)}
        </div>
      )}
    </div>
  );
}

function LocationCard({ data }) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <span className={styles.resultTitle}>{data.venue}</span>
        <span className={styles.badge}>{data.district}</span>
      </div>
      <p className={styles.flavorText}>{data.atmosphere}</p>
      <div className={styles.resultRow}><span className={styles.label}>Danger</span><span>{data.dangerLevel}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>NPCs present</span><span>{data.npcsPresent}</span></div>
      <div className={styles.hookBox}><span className={styles.label}>Hook</span><p>{data.hook}</p></div>
    </div>
  );
}

function GigCard({ data }) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <span className={styles.resultTitle}>{data.title}</span>
        <span className={styles.badge}>{data.difficulty}</span>
      </div>
      <p className={styles.flavorText}>{data.hook}</p>
      <div className={styles.resultRow}><span className={styles.label}>Job type</span><span>{data.jobType}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Fixer</span><span>{data.fixer}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Client</span><span>{data.client}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Target</span><span>{data.target}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Location</span><span>{data.location}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Payout</span><span className={styles.eddies}>{data.payout.toLocaleString()} eb</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Complication</span><span>{data.complication}</span></div>
      <div className={styles.hookBox}><span className={styles.label}>Twist</span><p>{data.twist}</p></div>
    </div>
  );
}

function VehicleCard({ data }) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <span className={styles.resultTitle}>{data.name}</span>
        <span className={styles.badge}>{data.klass}</span>
      </div>
      <p className={styles.flavorText}>{data.flavor}</p>
      <div className={styles.statsGrid}>
        <div className={styles.statBox}><span className={styles.statLabel}>SDP</span><span className={styles.statVal}>{data.sdp}</span></div>
        <div className={styles.statBox}><span className={styles.statLabel}>SP</span><span className={styles.statVal}>{data.sp}</span></div>
        <div className={styles.statBox}><span className={styles.statLabel}>SEATS</span><span className={styles.statVal}>{data.seats}</span></div>
      </div>
      <div className={styles.resultRow}><span className={styles.label}>Speed</span><span>{data.speed}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Mod</span><span>{data.mod}</span></div>
    </div>
  );
}

function FixerCard({ data }) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <span className={styles.resultTitle}>{data.name}</span>
        <span className={styles.badge}>{data.attitude}</span>
      </div>
      {data.realName && <p className={styles.flavorText}>a.k.a. {data.realName}</p>}
      <div className={styles.resultRow}><span className={styles.label}>Specialty</span><span>{data.specialty}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Territory</span><span>{data.territory}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Price</span><span>{data.price}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Known for</span><span>{data.reputation}</span></div>
      <div className={styles.resultRow}><span className={styles.label}>Signature deal</span><span>{data.signatureOffer}</span></div>
      <div className={styles.hookBox}><span className={styles.label}>Quirk</span><p>{data.quirk}</p></div>
    </div>
  );
}

function NameCard({ data }) {
  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <span className={styles.resultTitle}>&ldquo;{data.handle}&rdquo;</span>
        <span className={styles.badge}>{data.vibe}</span>
      </div>
      <div className={styles.resultRow}><span className={styles.label}>Full name</span><span>{data.fullName}</span></div>
    </div>
  );
}

// Flatten a generated result into copy/print-friendly text
function resultToText(data) {
  const fmtItem = (x) => {
    if (x && typeof x === 'object') {
      return x.name ? (x.level ? `${x.name} ${x.level}` : x.name) : Object.values(x).join(' ');
    }
    return String(x);
  };
  const fmtVal = (v) => {
    if (Array.isArray(v)) return v.map(fmtItem).join(', ');
    if (v && typeof v === 'object') {
      return Object.entries(v).map(([k, val]) => `${k} ${val}`).join(', ');
    }
    return String(v);
  };
  return Object.entries(data)
    .filter(([, v]) => v !== null && v !== undefined && v !== '')
    .map(([k, v]) => `${k}: ${fmtVal(v)}`)
    .join('\n');
}

function NightMarketCard({ data }) {
  if (data.isMidnight) {
    return (
      <div className={styles.resultCard}>
        <div className={styles.resultHeader}>
          <span className={styles.resultTitle}>Midnight Market</span>
          <span className={`${styles.badge} ${styles.rarityLegendary}`}>{data.itemCount} items</span>
        </div>
        <p className={styles.flavorText}>Top secret marketplace. Invite only. The criminal underworld's leadership is present.</p>
        <div className={styles.stallSection}>
          {data.items.map((item, i) => (
            <div key={i} className={styles.marketItem}>
              <span className={styles.marketItemName}>{item.item}</span>
              <span className={styles.marketItemMeta}>{item.source}</span>
              {item.cost > 0 && <span className={styles.eddies}>{item.cost} eb</span>}
              <span className={styles.marketItemPrice}>{item.priceCategory}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.resultCard}>
      <div className={styles.resultHeader}>
        <span className={styles.resultTitle}>Night Market</span>
        <span className={styles.badge}>Rolled {data.categoryRolls.join(' & ')}</span>
      </div>
      <p className={styles.flavorText}>Roll 1d6 twice for categories. Then 1d10 per category for item count. Then d100 per item on the category table.</p>

      {data.stalls.map((stall, si) => (
        <div key={si} className={styles.stallSection}>
          <div className={styles.vendorHeader}>
            <span className={styles.vendorType}>{stall.category}</span>
            <span className={styles.marketItemMeta}>{stall.itemCount} item types rolled</span>
          </div>
          {stall.items.map((item, ii) => (
            <div key={ii} className={styles.marketItem}>
              <span className={styles.marketRoll}>d100: {item.d100}</span>
              <span className={styles.marketItemName}>{item.item}</span>
              {item.cost > 0 && <span className={styles.eddies}>{item.cost} eb</span>}
              <span className={styles.marketItemPrice}>{item.priceCategory}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const EMPTY_PC = { name: '', reflex: 6, bestCombatSkill: 6, hp: 30, armorSP: 7, avgWeaponDamage: 10 };

function BalancerPanel() {
  const [pcs, setPCs] = useState([{ ...EMPTY_PC, name: 'Player 1' }]);
  const [result, setResult] = useState(null);

  const updatePC = (i, key, val) => setPCs((prev) => prev.map((pc, j) => j === i ? { ...pc, [key]: val } : pc));
  const addPC = () => setPCs((prev) => [...prev, { ...EMPTY_PC, name: `Player ${prev.length + 1}` }]);
  const removePC = (i) => setPCs((prev) => prev.filter((_, j) => j !== i));

  const handleBalance = () => setResult(balanceEncounter(pcs));

  return (
    <div className={styles.balancerPanel}>
      <div className={styles.pcList}>
        {pcs.map((pc, i) => (
          <div key={i} className={styles.pcCard}>
            <div className={styles.pcCardHeader}>
              <input className={styles.pcNameInput} value={pc.name} onChange={(e) => updatePC(i, 'name', e.target.value)} placeholder="Name" />
              {pcs.length > 1 && <button className={styles.pcRemove} onClick={() => removePC(i)}>x</button>}
            </div>
            <div className={styles.pcStats}>
              <label className={styles.pcStat}><span>REF</span><input type="number" min={1} max={10} value={pc.reflex} onChange={(e) => updatePC(i, 'reflex', +e.target.value)} /></label>
              <label className={styles.pcStat}><span>Combat Skill</span><input type="number" min={1} max={18} value={pc.bestCombatSkill} onChange={(e) => updatePC(i, 'bestCombatSkill', +e.target.value)} /></label>
              <label className={styles.pcStat}><span>HP</span><input type="number" min={10} max={60} value={pc.hp} onChange={(e) => updatePC(i, 'hp', +e.target.value)} /></label>
              <label className={styles.pcStat}><span>Armor SP</span><input type="number" min={0} max={18} value={pc.armorSP} onChange={(e) => updatePC(i, 'armorSP', +e.target.value)} /></label>
              <label className={styles.pcStat}><span>Avg Dmg</span><input type="number" min={1} max={30} value={pc.avgWeaponDamage} onChange={(e) => updatePC(i, 'avgWeaponDamage', +e.target.value)} /></label>
            </div>
          </div>
        ))}
        <button className={styles.addPcBtn} onClick={addPC}>+ Add Player</button>
      </div>

      <button className={styles.rollBtn} onClick={handleBalance}>Analyze Encounter Balance</button>

      {result && (
        <div className={styles.balancerResults}>
          <div className={styles.resultCard}>
            <div className={styles.resultHeader}>
              <span className={styles.resultTitle}>Party Analysis</span>
              <span className={`${styles.badge}`}>{result.party.tier} Power</span>
            </div>
            <div className={styles.resultRow}><span className={styles.label}>Players</span><span>{result.party.count}</span></div>
            <div className={styles.resultRow}><span className={styles.label}>Avg Power</span><span>{result.party.avgPower.toFixed(1)}</span></div>
            <div className={styles.resultRow}><span className={styles.label}>Total HP</span><span>{result.party.totalHP}</span></div>
            <div className={styles.resultRow}><span className={styles.label}>Avg Combat</span><span>{result.party.avgCombat.toFixed(1)}</span></div>
            {result.warnings.length > 0 && (
              <div className={styles.warningList}>
                {result.warnings.map((w, i) => <p key={i} className={styles.warning}>{w}</p>)}
              </div>
            )}
          </div>

          {result.recommendations.map((rec, i) => (
            <div key={i} className={styles.resultCard}>
              <div className={styles.resultHeader}>
                <span className={styles.resultTitle}>{rec.difficulty}</span>
                <span className={`${styles.badge} ${styles[`diff${rec.difficulty.replace(/\s/g, '')}`]}`}>{rec.difficulty}</span>
              </div>
              <p className={styles.flavorText}>{rec.description}</p>
              {rec.enemies.map((e, j) => (
                <div key={j} className={styles.resultRow}>
                  <span className={styles.label}>{e.template}</span>
                  <span>{e.count}x — {e.note}</span>
                </div>
              ))}
              <p className={styles.itemFound}>{rec.reasoning}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CpRedGenerator() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [activeTab, setActiveTab] = useState('encounter');
  const [threatFilter, setThreatFilter] = useState('');
  const [weaponFilter, setWeaponFilter] = useState('');
  const [lootProfile, setLootProfile] = useState('random');
  const [maxEddies, setMaxEddies] = useState('');
  const [qualityFilter, setQualityFilter] = useState('');
  const [copiedIdx, setCopiedIdx] = useState(null);
  const [results, setResults] = useState({
    encounter: [generateEncounter()],
    npc: [generateNPC()],
    gig: [generateGig()],
    fixer: [generateFixer()],
    vehicle: [generateVehicle()],
    name: [generateName()],
    loot: [generateLoot()],
    location: [generateLocation()],
    nightMarket: [generateNightMarket()],
    midnightMarket: [generateMidnightMarket()],
  });

  const rollNew = () => {
    const generators = {
      encounter: () => generateEncounter({ threat: threatFilter || undefined }),
      npc: () => generateNPC(),
      gig: () => generateGig(),
      fixer: () => generateFixer(),
      vehicle: () => generateVehicle(),
      name: () => generateName(),
      loot: () => generateLoot({ weaponType: weaponFilter || undefined, maxEddies: maxEddies || undefined, quality: qualityFilter || undefined, profile: lootProfile }),
      location: () => generateLocation(),
      nightMarket: () => generateNightMarket(),
      midnightMarket: () => generateMidnightMarket(),
    };
    setResults((prev) => ({
      ...prev,
      [activeTab]: [generators[activeTab](), ...prev[activeTab]],
    }));
  };

  const handleCopy = (item, idx) => {
    const text = resultToText(item);
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx((c) => (c === idx ? null : c)), 1500);
  };

  const handlePrint = () => {
    const items = results[activeTab] || [];
    const esc = (s) => s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
    const body = items.map((it) => `<pre>${esc(resultToText(it))}</pre>`).join('');
    const html = `<!doctype html><html><head><title>Cyberpunk RED — ${activeTab}</title><style>body{font-family:'Courier New',monospace;padding:32px;color:#111;}h1{text-transform:uppercase;letter-spacing:1px;}pre{white-space:pre-wrap;border:2px solid #000;padding:12px 16px;margin:0 0 16px;}</style></head><body><h1>Cyberpunk RED — ${activeTab} sheet</h1>${body}</body></html>`;
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.write(html);
    w.document.close();
    w.focus();
    w.print();
  };

  const tabLabels = {
    encounter: t('cpred.encounters'),
    npc: t('cpred.npcs'),
    gig: 'Gigs',
    fixer: 'Fixers',
    vehicle: 'Vehicles',
    name: 'Names',
    loot: t('cpred.loot'),
    location: t('cpred.locations'),
    nightMarket: t('cpred.nightMarket'),
    midnightMarket: t('cpred.midnightMarket'),
    balancer: t('cpred.balancer'),
  };

  const CardComponent = { encounter: EncounterCard, npc: NpcCard, gig: GigCard, fixer: FixerCard, vehicle: VehicleCard, name: NameCard, loot: LootCard, location: LocationCard, nightMarket: NightMarketCard, midnightMarket: NightMarketCard };
  const ActiveCard = CardComponent[activeTab];

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('cpred.heading')}</h1>
        <p className={styles.subtitle}>{t('cpred.subtitle')}</p>
      </div>

      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button key={tab} className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`} onClick={() => setActiveTab(tab)}>
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      {activeTab === 'balancer' && <BalancerPanel />}

      {activeTab === 'encounter' && (
        <div className={styles.lootFilters}>
          <div className={styles.filterRow}>
            <label className={styles.filterLabel}>Difficulty</label>
            <select className={styles.filterSelect} value={threatFilter} onChange={(e) => setThreatFilter(e.target.value)}>
              <option value="">Any</option>
              {THREAT_LEVELS.map((level) => <option key={level} value={level}>{level}</option>)}
            </select>
          </div>
        </div>
      )}

      {activeTab === 'loot' && (
        <div className={styles.lootFilters}>
          <div className={styles.filterRow}>
            <label className={styles.filterLabel}>Profile</label>
            <select className={styles.filterSelect} value={lootProfile} onChange={(e) => setLootProfile(e.target.value)}>
              {LOOT_PROFILES.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div className={styles.filterRow}>
            <label className={styles.filterLabel}>{t('cpred.filterWeapon')}</label>
            <select className={styles.filterSelect} value={weaponFilter} onChange={(e) => setWeaponFilter(e.target.value)}>
              <option value="">{t('cpred.allTypes')}</option>
              {WEAPON_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>
          <div className={styles.filterRow}>
            <label className={styles.filterLabel}>Quality</label>
            <select className={styles.filterSelect} value={qualityFilter} onChange={(e) => setQualityFilter(e.target.value)}>
              <option value="">Any</option>
              <option value="Poor">Poor</option>
              <option value="Standard">Standard</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
          <div className={styles.filterRow}>
            <label className={styles.filterLabel}>Max Total Value</label>
            <input className={styles.filterInput} type="number" min="0" max="20000" value={maxEddies} onChange={(e) => setMaxEddies(e.target.value)} placeholder="No limit" />
          </div>
        </div>
      )}

      {activeTab !== 'balancer' && (
        <div className={styles.actionRow}>
          <button className={styles.rollBtn} onClick={rollNew}>
            {t('cpred.roll')}
          </button>
          <button className={styles.printBtn} onClick={handlePrint} title="Open a printable session sheet of these results">
            Print sheet
          </button>
        </div>
      )}

      {activeTab !== 'balancer' && <div className={styles.results}>
        {results[activeTab].map((item, i) => (
          <div key={i} className={i === 0 ? styles.newest : styles.older}>
            <button className={styles.copyBtn} onClick={() => handleCopy(item, i)} title="Copy to clipboard">
              {copiedIdx === i ? '✓ copied' : 'copy'}
            </button>
            <ActiveCard data={item} />
          </div>
        ))}
      </div>}

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('cpred.backTools')}
        </button>
      </div>
    </main>
  );
}
