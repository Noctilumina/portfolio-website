import { useState, useCallback, useEffect } from 'react';
import { usePageTransition } from '../../../App';
import { useI18n } from '../../../i18n/I18nContext';
import { Routes } from '../../../constants/routes';
import styles from './DiceRoller.module.css';

// ── Dice roller utils ──────────────────────────────────────────────────────

function rollDice(count, sides) {
  const rolls = [];
  for (let i = 0; i < count; i++) {
    rolls.push(Math.floor(Math.random() * sides) + 1);
  }
  return rolls;
}

function parseDiceExpression(expr) {
  const trimmed = expr.trim();
  if (!trimmed) return null;

  const termPattern = /([+-]?\s*\d+)?d(\d+)|([+-]\s*\d+)/gi;
  const matches = Array.from(trimmed.matchAll(termPattern));

  if (!matches.length) return null;

  const terms = [];
  let lastIndex = 0;

  for (const match of matches) {
    if (match[0].match(/^[+-]\s*\d+$/)) {
      // Pure modifier: +3 or -5
      const mod = parseInt(match[0].replace(/\s+/g, ''), 10);
      terms.push({ type: 'modifier', value: mod });
    } else if (match[2]) {
      // NdM format
      let count = match[1] ? parseInt(match[1].replace(/\s+/g, ''), 10) : 1;
      if (count < 1) count = 1;
      const sides = parseInt(match[2], 10);
      if (sides < 1) return null;
      terms.push({ type: 'dice', count, sides });
    }
    lastIndex = match.index + match[0].length;
  }

  if (!terms.length) return null;
  return terms;
}

function executeExpression(terms) {
  const results = {
    rolls: [],
    breakdown: [],
    total: 0,
  };

  for (const term of terms) {
    if (term.type === 'dice') {
      const rolls = rollDice(term.count, term.sides);
      results.rolls.push(...rolls);
      const subtotal = rolls.reduce((a, b) => a + b, 0);
      results.breakdown.push({
        label: `${term.count}d${term.sides}`,
        rolls,
        subtotal,
      });
      results.total += subtotal;
    } else if (term.type === 'modifier') {
      results.breakdown.push({
        label: `${term.value > 0 ? '+' : ''}${term.value}`,
        rolls: [],
        subtotal: term.value,
      });
      results.total += term.value;
    }
  }

  return results;
}

function rollCyberpunkRed(statSkillMod = 0) {
  const results = {
    rolls: [Math.floor(Math.random() * 10) + 1],
    modifier: statSkillMod,
    explosions: [],
    fumbles: false,
    total: 0,
  };

  let current = results.rolls[0];
  const maxIterations = 20;
  let iterations = 0;

  // Handle explosions (rolling a 10)
  while (current === 10 && iterations < maxIterations) {
    iterations++;
    const next = Math.floor(Math.random() * 10) + 1;
    results.explosions.push(next);
    current = next;
  }

  // Check for fumble (initial roll was 1)
  if (results.rolls[0] === 1) {
    results.fumbles = true;
    // Fumble: roll again and subtract
    const fumbleRoll = Math.floor(Math.random() * 10) + 1;
    results.fumbleRoll = fumbleRoll;
  }

  // Calculate total
  const totalDice = results.rolls[0] + results.explosions.reduce((a, b) => a + b, 0);
  results.total = results.fumbles
    ? totalDice - (results.fumbleRoll || 0) + statSkillMod
    : totalDice + statSkillMod;

  return results;
}

// ── Main component ────────────────────────────────────────────────────────

export default function DiceRoller() {
  const { startTransition } = usePageTransition();
  const { t } = useI18n();
  const [tab, setTab] = useState('roller'); // 'roller' or 'initiative'

  // Roller state
  const [customExpr, setCustomExpr] = useState('');
  const [rollHistory, setRollHistory] = useState([]);
  const [useCyberpunkRed, setUseCyberpunkRed] = useState(false);
  const [cyberpunkStat, setCyberpunkStat] = useState(0);
  const [cyberpunkSkill, setCyberpunkSkill] = useState(0);

  // Initiative state
  const [combatants, setCombatants] = useState([]);
  const [newCombatantName, setNewCombatantName] = useState('');
  const [newCombatantRef, setNewCombatantRef] = useState(3);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [round, setRound] = useState(1);

  const addRollToHistory = useCallback((expr, result) => {
    const now = Date.now();
    setRollHistory(prev => [
      { expr, result, timestamp: now },
      ...prev,
    ].slice(0, 15));
  }, []);

  const quickRoll = useCallback((sides) => {
    const rolls = rollDice(1, sides);
    const result = {
      rolls,
      breakdown: [
        {
          label: `d${sides}`,
          rolls,
          subtotal: rolls[0],
        }
      ],
      total: rolls[0],
    };
    addRollToHistory(`d${sides}`, result);
  }, [addRollToHistory]);

  const handleCustomRoll = useCallback(() => {
    const terms = parseDiceExpression(customExpr);
    if (!terms) {
      alert('Invalid expression. Use format: 2d6+1d8+3, d20+5, etc.');
      return;
    }
    const result = executeExpression(terms);
    addRollToHistory(customExpr, result);
    setCustomExpr('');
  }, [customExpr, addRollToHistory]);

  const handleCyberpunkRoll = useCallback(() => {
    const stat = parseInt(cyberpunkStat, 10) || 0;
    const skill = parseInt(cyberpunkSkill, 10) || 0;
    const modifier = stat + skill;
    const result = rollCyberpunkRed(modifier);
    const label = `CPR (STAT:${stat} SKL:${skill})`;
    addRollToHistory(label, result);
  }, [cyberpunkStat, cyberpunkSkill, addRollToHistory]);

  const addCombatant = useCallback(() => {
    if (!newCombatantName.trim()) {
      alert('Enter combatant name');
      return;
    }
    const ref = parseInt(newCombatantRef, 10) || 0;
    setCombatants(prev => [
      ...prev,
      { id: Date.now(), name: newCombatantName, ref, initiative: null }
    ]);
    setNewCombatantName('');
    setNewCombatantRef(3);
  }, [newCombatantName, newCombatantRef]);

  const rollInitiativeForAll = useCallback(() => {
    if (combatants.length === 0) return;
    const updated = combatants.map(c => ({
      ...c,
      initiative: Math.floor(Math.random() * 10) + 1 + c.ref,
    }));
    updated.sort((a, b) => b.initiative - a.initiative);
    setCombatants(updated);
    setCurrentTurn(0);
    setRound(1);
  }, [combatants]);

  const nextTurn = useCallback(() => {
    if (combatants.length === 0) return;
    const next = (currentTurn + 1) % combatants.length;
    setCurrentTurn(next);
    if (next === 0) setRound(r => r + 1);
  }, [currentTurn, combatants.length]);

  const prevTurn = useCallback(() => {
    if (combatants.length === 0) return;
    const prev = currentTurn === 0 ? combatants.length - 1 : currentTurn - 1;
    setCurrentTurn(prev);
    if (prev === combatants.length - 1) setRound(r => Math.max(1, r - 1));
  }, [currentTurn, combatants.length]);

  const removeCombatant = useCallback((id) => {
    setCombatants(prev => prev.filter(c => c.id !== id));
    setCurrentTurn(0);
  }, []);

  const clearAllCombatants = useCallback(() => {
    setCombatants([]);
    setCurrentTurn(0);
    setRound(1);
  }, []);

  const getRelativeTime = (timestamp) => {
    const now = Date.now();
    const diff = Math.floor((now - timestamp) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('diceRoller.heading')}</h1>
        <p className={styles.subtitle}>{t('diceRoller.subtitle')}</p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${tab === 'roller' ? styles.tabActive : ''}`}
          onClick={() => setTab('roller')}
        >
          Roller
        </button>
        <button
          className={`${styles.tab} ${tab === 'initiative' ? styles.tabActive : ''}`}
          onClick={() => setTab('initiative')}
        >
          Initiative
        </button>
      </div>

      {/* ── ROLLER TAB ── */}
      {tab === 'roller' && (
        <div className={styles.section}>
          {/* Quick roll buttons */}
          <div className={styles.quickRollGrid}>
            {[4, 6, 8, 10, 12, 20, 100].map(sides => (
              <button
                key={sides}
                className={styles.quickRollBtn}
                onClick={() => quickRoll(sides)}
              >
                D{sides}
              </button>
            ))}
          </div>

          {/* Custom expression */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Custom Expression</legend>
            <div className={styles.exprRow}>
              <input
                type="text"
                className={styles.exprInput}
                placeholder="e.g. 2d6+1d8+3"
                value={customExpr}
                onChange={e => setCustomExpr(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCustomRoll()}
              />
              <button className={styles.rollBtn} onClick={handleCustomRoll}>
                Roll
              </button>
            </div>
            <p className={styles.hint}>
              Format: NdM±K, e.g. 2d6+5, d20-2, 3d8+1d6+10
            </p>
          </fieldset>

          {/* Cyberpunk RED check */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Cyberpunk RED Check</legend>
            <div className={styles.checkboxRow}>
              <label>
                <input
                  type="checkbox"
                  checked={useCyberpunkRed}
                  onChange={e => setUseCyberpunkRed(e.target.checked)}
                />
                Enable 1d10 with EXPLOSION (10) & FUMBLE (1)
              </label>
            </div>
            {useCyberpunkRed && (
              <div className={styles.modRow}>
                <div className={styles.modField}>
                  <label>STAT</label>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    value={cyberpunkStat}
                    onChange={e => setCyberpunkStat(e.target.value)}
                  />
                </div>
                <div className={styles.modField}>
                  <label>SKILL</label>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    value={cyberpunkSkill}
                    onChange={e => setCyberpunkSkill(e.target.value)}
                  />
                </div>
              </div>
            )}
            {useCyberpunkRed && (
              <button className={styles.rollBtn} onClick={handleCyberpunkRoll}>
                Roll Check
              </button>
            )}
            <p className={styles.hint}>
              STAT + SKILL applied to final result. Rolling 10 explodes (roll again, add). Rolling 1 fumbles (roll again, subtract).
            </p>
          </fieldset>

          {/* Roll history */}
          <fieldset className={styles.fieldset}>
            <div className={styles.historyHeader}>
              <legend className={styles.legend}>History</legend>
              {rollHistory.length > 0 && (
                <button
                  className={styles.clearBtn}
                  onClick={() => setRollHistory([])}
                  title="Clear roll history"
                >
                  Clear
                </button>
              )}
            </div>
            <div className={styles.rollHistoryList}>
              {rollHistory.length === 0 ? (
                <p className={styles.emptyState}>No rolls yet</p>
              ) : (
                rollHistory.map((entry, i) => (
                  <div key={i} className={styles.historyEntry}>
                    <div className={styles.historyMeta}>
                      <span className={styles.historyExpr}>{entry.expr}</span>
                      <span className={styles.historyTime}>{getRelativeTime(entry.timestamp)}</span>
                    </div>
                    <div className={styles.historyResult}>
                      {entry.result.fumbles !== undefined ? (
                        // Cyberpunk RED format
                        <div>
                          <div className={styles.cpRoll}>
                            Roll: {entry.result.rolls.join(', ')}
                            {entry.result.explosions.length > 0 && ` → ${entry.result.explosions.join(', ')}`}
                          </div>
                          {entry.result.fumbles && (
                            <div className={styles.crit + ' ' + styles.fumble}>
                              CRITICAL FUMBLE! Subtract: {entry.result.fumbleRoll}
                            </div>
                          )}
                          <div className={styles.historyTotal}>
                            Total: <strong>{entry.result.total}</strong>
                          </div>
                        </div>
                      ) : (
                        // Standard dice format
                        <div>
                          {entry.result.breakdown.map((bd, idx) => (
                            <div key={idx} className={styles.breakdownItem}>
                              <span className={styles.bdLabel}>{bd.label}</span>
                              {bd.rolls.length > 0 && (
                                <span className={styles.bdRolls}>{bd.rolls.join(', ')}</span>
                              )}
                              <span className={styles.bdSubtotal}>{bd.subtotal}</span>
                            </div>
                          ))}
                          <div className={styles.historyTotal}>
                            Total: <strong>{entry.result.total}</strong>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </fieldset>
        </div>
      )}

      {/* ── INITIATIVE TAB ── */}
      {tab === 'initiative' && (
        <div className={styles.section}>
          {/* Add combatant */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Add Combatant</legend>
            <div className={styles.addCombatantForm}>
              <input
                type="text"
                className={styles.addNameInput}
                placeholder="Name"
                value={newCombatantName}
                onChange={e => setNewCombatantName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addCombatant()}
              />
              <div className={styles.refInput}>
                <label>REF</label>
                <input
                  type="number"
                  min={-5}
                  max={15}
                  value={newCombatantRef}
                  onChange={e => setNewCombatantRef(e.target.value)}
                />
              </div>
              <button className={styles.addBtn} onClick={addCombatant}>
                Add
              </button>
            </div>
          </fieldset>

          {/* Initiative controls */}
          <div className={styles.initiativeControls}>
            <button
              className={styles.rollBtn}
              onClick={rollInitiativeForAll}
              disabled={combatants.length === 0}
            >
              Roll Initiative For All
            </button>
            {combatants.length > 0 && combatants[0].initiative !== null && (
              <div className={styles.roundDisplay}>
                Round: <strong>{round}</strong>
              </div>
            )}
          </div>

          {/* Turn tracker and list */}
          {combatants.length > 0 && combatants[0].initiative !== null && (
            <div className={styles.initiativeTracker}>
              <div className={styles.turnNav}>
                <button className={styles.navBtn} onClick={prevTurn}>
                  ← Previous
                </button>
                <div className={styles.currentTurnDisplay}>
                  {combatants[currentTurn] && (
                    <div>
                      <span className={styles.turnLabel}>Current Turn:</span>
                      <span className={styles.turnName}>
                        {combatants[currentTurn].name}
                      </span>
                      <span className={styles.turnInit}>
                        Init: {combatants[currentTurn].initiative}
                      </span>
                    </div>
                  )}
                </div>
                <button className={styles.navBtn} onClick={nextTurn}>
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Combatants list */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              Combatants ({combatants.length})
            </legend>
            {combatants.length === 0 ? (
              <p className={styles.emptyState}>No combatants yet</p>
            ) : (
              <div className={styles.combatantsList}>
                {combatants.map((c, idx) => (
                  <div
                    key={c.id}
                    className={`${styles.combatantRow} ${
                      combatants[0].initiative !== null && currentTurn === idx
                        ? styles.currentTurn
                        : ''
                    }`}
                  >
                    <span className={styles.combatantOrder}>{idx + 1}.</span>
                    <span className={styles.combatantName}>{c.name}</span>
                    {c.initiative !== null && (
                      <span className={styles.combatantInit}>Init: {c.initiative}</span>
                    )}
                    {c.initiative === null && (
                      <span className={styles.combatantRef}>(REF {c.ref})</span>
                    )}
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeCombatant(c.id)}
                      title="Remove combatant"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
            {combatants.length > 0 && (
              <button
                className={styles.clearAllBtn}
                onClick={clearAllCombatants}
              >
                Clear All
              </button>
            )}
          </fieldset>
        </div>
      )}

      {/* Back button */}
      <div className={styles.backWrapper}>
        <button
          className={styles.backButton}
          onClick={() => startTransition(Routes.TOOLS)}
        >
          {t('diceRoller.backTools')}
        </button>
      </div>
    </main>
  );
}
