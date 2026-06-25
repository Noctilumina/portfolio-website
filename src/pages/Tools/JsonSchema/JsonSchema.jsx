import { useState, useMemo } from 'react';
import { useI18n } from '../../../i18n/I18nContext';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import styles from './JsonSchema.module.css';

const SECRET_KEY = /(token|secret|password|passwd|pwd|api[_-]?key|access[_-]?key|client[_-]?secret|auth|bearer|credential|private[_-]?key|ssid|psk|passphrase|cert)/i;

function jsonType(v) {
  if (v === null) return 'null';
  if (Array.isArray(v)) return 'array';
  const t = typeof v;
  if (t === 'number') return Number.isInteger(v) ? 'integer' : 'number';
  return t; // 'string' | 'boolean' | 'object'
}

// Merge the shapes of every object in an array into one representative object
function mergeObjectShapes(arr, transform) {
  const merged = {};
  for (const el of arr) {
    for (const k of Object.keys(el)) {
      if (!(k in merged)) merged[k] = transform(el[k]);
    }
  }
  return merged;
}

// Mode 1: type skeleton — every scalar becomes its type name
function toSkeleton(v) {
  const t = jsonType(v);
  if (t === 'object') {
    const out = {};
    for (const k of Object.keys(v)) out[k] = toSkeleton(v[k]);
    return out;
  }
  if (t === 'array') {
    if (v.length === 0) return [];
    if (v.every((e) => jsonType(e) === 'object')) return [mergeObjectShapes(v, toSkeleton)];
    const types = [...new Set(v.map(jsonType))];
    return [types.length === 1 ? toSkeleton(v[0]) : types.join(' | ')];
  }
  return t;
}

// Mode 2: redacted — structure kept, scalars masked
function toRedacted(v, mask) {
  const t = jsonType(v);
  if (t === 'object') {
    const out = {};
    for (const k of Object.keys(v)) out[k] = toRedacted(v[k], mask);
    return out;
  }
  if (t === 'array') return v.map((e) => toRedacted(e, mask));
  return mask;
}

// Mode 3: JSON Schema (draft-07)
function toSchema(v) {
  const t = jsonType(v);
  if (t === 'object') {
    const keys = Object.keys(v);
    return {
      type: 'object',
      properties: Object.fromEntries(keys.map((k) => [k, toSchema(v[k])])),
      required: keys,
    };
  }
  if (t === 'array') {
    if (v.length === 0) return { type: 'array', items: {} };
    if (v.every((e) => jsonType(e) === 'object')) {
      const merged = mergeObjectShapes(v, (x) => x);
      return { type: 'array', items: toSchema(merged) };
    }
    return { type: 'array', items: toSchema(v[0]) };
  }
  return { type: t };
}

// Walk the parsed JSON collecting stats: total scalar values stripped + secret-ish keys hit
function collectStats(v, keyName, stats) {
  const t = jsonType(v);
  if (keyName && SECRET_KEY.test(keyName) && t !== 'object' && t !== 'array') {
    stats.secrets.add(keyName);
  }
  if (t === 'object') {
    for (const k of Object.keys(v)) collectStats(v[k], k, stats);
  } else if (t === 'array') {
    for (const el of v) collectStats(el, keyName, stats);
  } else {
    stats.values += 1;
  }
}

const MODES = [
  { id: 'skeleton', label: 'Type skeleton' },
  { id: 'schema', label: 'JSON Schema' },
  { id: 'redacted', label: 'Redacted' },
];

const SAMPLE = `{
  "device_id": "thermostat-04",
  "firmware": "2.3.1",
  "wifi": { "ssid": "HomeNet", "psk": "s3cr3t-pass" },
  "api_token": "ax9f2c8e1b4d",
  "interval_seconds": 30,
  "calibrated": true,
  "sensors": [
    { "type": "temp", "value": 21.4, "unit": "C" },
    { "type": "humidity", "value": 47, "unit": "%" }
  ]
}`;

export default function JsonSchema() {
  const { t } = useI18n();
  const { startTransition } = usePageTransition();
  const [input, setInput] = useState(SAMPLE);
  const [mode, setMode] = useState('skeleton');
  const [mask, setMask] = useState('***');
  const [copied, setCopied] = useState(false);

  const { output, error, stats } = useMemo(() => {
    if (!input.trim()) return { output: '', error: null, stats: null };
    let parsed;
    try {
      parsed = JSON.parse(input);
    } catch (e) {
      return { output: '', error: e.message, stats: null };
    }
    const s = { values: 0, secrets: new Set() };
    collectStats(parsed, null, s);
    let shaped;
    if (mode === 'schema') shaped = { $schema: 'http://json-schema.org/draft-07/schema#', ...toSchema(parsed) };
    else if (mode === 'redacted') shaped = toRedacted(parsed, mask);
    else shaped = toSkeleton(parsed);
    return {
      output: JSON.stringify(shaped, null, 2),
      error: null,
      stats: { values: s.values, secrets: [...s.secrets] },
    };
  }, [input, mode, mask]);

  const handleCopy = () => {
    if (!output || !navigator.clipboard) return;
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }).catch(() => {});
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = mode === 'schema' ? 'schema.json' : 'shape.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('jsonSchema.heading')}</h1>
        <p className={styles.subtitle}>{t('jsonSchema.subtitle')}</p>
      </div>

      <div className={styles.modeRow}>
        {MODES.map((m) => (
          <button
            key={m.id}
            className={`${styles.modeBtn} ${mode === m.id ? styles.modeActive : ''}`}
            onClick={() => setMode(m.id)}
          >
            {m.label}
          </button>
        ))}
        {mode === 'redacted' && (
          <label className={styles.maskField}>
            <span>Mask</span>
            <input className={styles.maskInput} value={mask} onChange={(e) => setMask(e.target.value)} />
          </label>
        )}
      </div>

      <div className={styles.workspace}>
        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <span className={styles.panelLabel}>Paste JSON</span>
            <button className={styles.smallBtn} onClick={() => setInput('')}>clear</button>
          </div>
          <textarea
            className={styles.editor}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            placeholder="Paste a JSON object or array here…"
          />
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <span className={styles.panelLabel}>Structure (values stripped)</span>
            <div className={styles.panelActions}>
              <button className={styles.smallBtn} onClick={handleCopy} disabled={!output}>{copied ? '✓ copied' : 'copy'}</button>
              <button className={styles.smallBtn} onClick={handleDownload} disabled={!output}>download</button>
            </div>
          </div>
          {error ? (
            <div className={styles.error}>Invalid JSON: {error}</div>
          ) : (
            <pre className={styles.output}>{output || 'Output appears here.'}</pre>
          )}
          {stats && !error && (
            <p className={styles.stats}>
              {stats.values} value{stats.values === 1 ? '' : 's'} stripped.
              {stats.secrets.length > 0 && (
                <> Likely secrets removed: <strong>{stats.secrets.join(', ')}</strong>.</>
              )}
            </p>
          )}
        </section>
      </div>

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          {t('jsonSchema.backTools')}
        </button>
      </div>
    </main>
  );
}
