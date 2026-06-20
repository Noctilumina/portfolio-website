import { useState, useMemo, useRef } from 'react';
import { usePageTransition } from '../../../App';
import { Routes } from '../../../constants/routes';
import {
  SCRIPTS, UPCOMING, CATEGORIES, tokenize, glyphStrokes, tokensToUnits, composeUnits,
  STEM_SEED, seedGlyph, seedUnit, seedBindStem,
  layoutCursiveWord,
  isVowelGraph, layoutAbugidaWord, abugidaCellStrokes, seedAbugida, ABU_OPTS,
  tokenizeWords, seedWord,
} from './scripts';
import { strokeToPaths } from './nib';
import styles from './Neography.module.css';

const DEFAULT_TEXT = 'vrede en vrijheid';
const MAX_COL_GLYPHS = 9; // vertical columns wrap after this many glyphs

/** Group glyph tokens into words (split on spaces). */
function splitWords(tokens) {
  const out = [];
  let w = [];
  for (const t of tokens) {
    if (t.type === 'glyph') w.push(t);
    else if (t.type === 'space' && w.length) { out.push(w); w = []; }
  }
  if (w.length) out.push(w);
  return out;
}

/**
 * Chunk a token stream into vertical columns: a column breaks on a newline, or
 * once it reaches MAX glyphs (preferably at a space, else mid-word). This makes
 * vertical writing wrap reliably in EVERY mode — even bindrune / joined cursive,
 * where the whole run is one element that CSS flex-wrap could never break.
 */
function toColumns(tokens, maxGlyphs) {
  const cols = [[]];
  let count = 0;
  for (const tok of tokens) {
    if (tok.type === 'newline') { cols.push([]); count = 0; continue; }
    if (tok.type === 'space') {
      if (count >= maxGlyphs) { cols.push([]); count = 0; }
      else if (cols[cols.length - 1].length) cols[cols.length - 1].push(tok);
      continue;
    }
    if (tok.type === 'glyph') {
      if (count >= maxGlyphs) { cols.push([]); count = 0; }
      cols[cols.length - 1].push(tok);
      count += 1;
    }
  }
  return cols.filter((c) => c.length);
}

/** Ink one pen stroke (broad-nib body + floored centerline). */
function Stroke({ stroke, seed, opts }) {
  const { fill, center, minWidth, closed } = strokeToPaths(stroke, { seed, ...opts });
  // presentation attributes (not just classes) so the markup survives SVG export
  return (
    <>
      <path d={fill} fill="currentColor" stroke="none" fillRule={closed ? 'evenodd' : 'nonzero'} />
      <path d={center} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={minWidth} />
    </>
  );
}

/** A single glyph (stem + marks). */
function Glyph({ token, script }) {
  return (
    <svg className={styles.glyph} viewBox={script.viewBox} aria-label={token.graph}>
      {glyphStrokes(token, script).map((st, i) => (
        <Stroke key={i} stroke={st} seed={i === 0 ? STEM_SEED : seedGlyph(token.graph, i)} />
      ))}
    </svg>
  );
}

/** A whole line collapsed onto one shared stem (bindrune); spaces become beads. */
function BindGlyph({ units, script }) {
  const c = composeUnits(units, script);
  return (
    <svg className={styles.bindGlyph} viewBox={`0 0 100 ${c.height}`}>
      <Stroke stroke={{ pts: c.stemPts }} seed={seedBindStem(c.height)} />
      {c.layers.map((l, ui) => (
        <g key={ui} transform={`translate(0,${l.dy})`}>
          {l.strokes.map((st, si) => <Stroke key={si} stroke={st} seed={seedUnit(ui, si)} />)}
        </g>
      ))}
    </svg>
  );
}

/** A cursive word: consonants joined into one ductus + vowel marks above.
 *  Vertical rotates the whole flowing line 90deg so it reads top-to-bottom. */
function CursiveWord({ tokens, script, seed = 11, vertical = false }) {
  const L = layoutCursiveWord(tokens, script);
  const vb = vertical ? `0 0 ${L.height} ${L.width}` : `0 0 ${L.width} ${L.height}`;
  return (
    <svg className={vertical ? styles.cursiveWordV : styles.cursiveWord} viewBox={vb}>
      <g transform={vertical ? `translate(${L.height},0) rotate(90)` : undefined}>
        <Stroke stroke={{ pts: L.duct }} seed={seed} opts={L.opts} />
        {L.extras.map((s, i) => <Stroke key={`e${i}`} stroke={s} seed={seed + 31 * (i + 1)} opts={L.opts} />)}
        {L.vowels.map((s, i) => <Stroke key={`v${i}`} stroke={s} seed={seed + 97 * (i + 1)} opts={L.opts} />)}
      </g>
    </svg>
  );
}

/** An abugida syllable cell: geometric consonant (or carrier) + vowel mark above. */
function AbugidaCell({ cell, script }) {
  const base = seedAbugida(cell, 0);
  return (
    <svg className={styles.cell} viewBox={script.viewBox}>
      {abugidaCellStrokes(cell, script).map((s, i) => (
        <Stroke key={i} stroke={s} seed={base + i * 7 + 1} opts={ABU_OPTS} />
      ))}
    </svg>
  );
}

/** Calligraphic abugida word: syllable cells connected by a ligature spine. */
function AbugidaWordCalli({ word, script, vertical = false }) {
  const cells = layoutAbugidaWord(word, script);
  const n = Math.max(cells.length, 1);
  const ADV = 50;
  const renderCell = (cell, ci, dx, dy) => (
    <g key={ci} transform={`translate(${dx},${dy})`}>
      {abugidaCellStrokes(cell, script).map((s, i) => (
        <Stroke key={i} stroke={s} seed={seedAbugida(cell, 0) + i * 7 + 1} opts={ABU_OPTS} />
      ))}
    </g>
  );
  if (vertical) {
    const height = n * ADV + 16;
    return (
      <svg className={styles.abuWordV} viewBox={`0 0 100 ${height}`}>
        <Stroke stroke={{ pts: [[50, 8], [50, height - 8]] }} seed={4242} opts={ABU_OPTS} />
        {cells.map((cell, ci) => renderCell(cell, ci, 0, ci * ADV))}
      </svg>
    );
  }
  const width = n * ADV + 16;
  return (
    <svg className={styles.abuWord} viewBox={`0 0 ${width} 112`}>
      <Stroke stroke={{ pts: [[8, 100], [width - 8, 100]] }} seed={4242} opts={ABU_OPTS} />
      {cells.map((cell, ci) => renderCell(cell, ci, ci * ADV + 8, 0))}
    </svg>
  );
}

/** Layout for the sub-signs of a compound (Chinese-radical style). */
function partLayout(n) {
  if (n <= 1) return [{ cx: 50, cy: 50, sc: 0.92 }];
  if (n === 2) return [{ cx: 35, cy: 50, sc: 0.58 }, { cx: 65, cy: 50, sc: 0.58 }];
  return [{ cx: 50, cy: 33, sc: 0.5 }, { cx: 34, cy: 66, sc: 0.5 }, { cx: 66, cy: 66, sc: 0.5 }];
}

/** SVG children for a known sign: optional concept-frame + sign strokes or merged parts. */
function signContent(word, sign, script) {
  const frame = (script.signFrame || []).map((s, i) => <Stroke key={`f${i}`} stroke={s} seed={seedWord('frame', i)} opts={script.opts} />);
  if (Array.isArray(sign)) {
    return [...frame, ...sign.map((s, i) => <Stroke key={i} stroke={s} seed={seedWord(word, i)} opts={script.opts} />)];
  }
  const L = partLayout(sign.parts.length);
  const parts = sign.parts.map((p, pi) => {
    const ps = script.lexicon[p];
    const strokes = Array.isArray(ps) ? ps : [];
    const { cx, cy, sc } = L[pi] || L[0];
    return (
      <g key={`p${pi}`} transform={`translate(${cx} ${cy}) scale(${sc}) translate(-50 -50)`}>
        {strokes.map((s, j) => <Stroke key={j} stroke={s} seed={seedWord(p, j)} opts={script.opts} />)}
      </g>
    );
  });
  return [...frame, ...parts];
}

/** One word in a meaning-based script: its sign (or merged sub-signs), else spelled/syllabified. */
function LogographWord({ token, script, soundScript }) {
  const sign = script.lexicon[token.word];
  if (sign) {
    return (
      <svg className={styles.logoSign} viewBox="0 0 100 100" aria-label={token.word}>
        {signContent(token.word, sign, script)}
      </svg>
    );
  }
  // unknown word: spell phonetically (runes) or in the syllabary, depending on the script
  if (script.fallbackMode === 'syllabary') {
    const gtoks = tokenize(token.word, soundScript).filter((t) => t.type === 'glyph');
    const cells = layoutAbugidaWord(gtoks, soundScript);
    return (
      <span className={styles.logoSpelled} title={`${token.word} (syllabary)`}>
        {cells.map((c, i) => (
          <svg key={i} className={styles.logoMiniCell} viewBox={soundScript.viewBox}>
            {abugidaCellStrokes(c, soundScript).map((s, j) => <Stroke key={j} stroke={s} seed={seedAbugida(c, j)} opts={ABU_OPTS} />)}
          </svg>
        ))}
      </span>
    );
  }
  const gtoks = tokenize(token.word, soundScript).filter((t) => t.type === 'glyph');
  return (
    <span className={styles.logoSpelled} title={`${token.word} (spelled)`}>
      {gtoks.map((gt, i) => (
        <svg key={i} className={styles.logoMini} viewBox={soundScript.viewBox}>
          {glyphStrokes(gt, soundScript).map((s, j) => <Stroke key={j} stroke={s} seed={seedGlyph(gt.graph, j)} />)}
        </svg>
      ))}
    </span>
  );
}

/** Chunk word tokens into vertical columns (wrap after maxWords). */
function toWordColumns(wordTokens, maxWords) {
  const cols = [[]];
  let count = 0;
  for (const t of wordTokens) {
    if (t.type === 'newline') { cols.push([]); count = 0; continue; }
    if (t.type !== 'word') continue;
    cols[cols.length - 1].push(t);
    count += 1;
    if (count >= maxWords) { cols.push([]); count = 0; }
  }
  return cols.filter((c) => c.length);
}

function chunkArr(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out.length ? out : [[]];
}

/** The renderable stroke-units of a word, per mode — letters / syllables / gestures. */
function monogramUnits(word, script) {
  if (script.mode === 'abugida') {
    return layoutAbugidaWord(word, script).map((cell) => ({ strokes: abugidaCellStrokes(cell, script), base: [50, 96], opts: ABU_OPTS }));
  }
  if (script.mode === 'cursive') {
    const o = { broad: 12, minWidth: 2.6 };
    return word.map((tok) => {
      const g = script.glyphs[tok.graph];
      if (g && g.c) return { strokes: [{ pts: g.c }], base: [(g.adv || 30) / 2, script.baseline || 72], opts: o };
      return { strokes: (g && g.v) || [], base: [0, 30], opts: o };
    });
  }
  return word.map((tok) => ({ strokes: glyphStrokes(tok, script), base: [50, 113], opts: undefined }));
}

/** Compound a whole word into ONE emblem: its units share a centre and radiate,
 *  interlocking into a single character rather than a line of marks. */
function MonogramWord({ word, script, seed = 5 }) {
  const units = monogramUnits(word, script);
  const n = Math.max(units.length, 1);
  const C = 85;
  const BOX = 170;
  const sc = n <= 1 ? 0.95 : n <= 3 ? 0.74 : n <= 5 ? 0.62 : 0.5;
  return (
    <svg className={styles.monogram} viewBox={`0 0 ${BOX} ${BOX}`}>
      {units.map((u, i) => {
        const ang = n === 1 ? 0 : (i * 360) / n;
        const [bx, by] = u.base;
        return (
          <g key={i} transform={`translate(${C} ${C}) rotate(${ang}) scale(${sc}) translate(${-bx} ${-by})`}>
            {u.strokes.map((s, j) => <Stroke key={j} stroke={s} seed={seed + i * 53 + j * 7} opts={u.opts} />)}
          </g>
        );
      })}
    </svg>
  );
}

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'aa', 'ee', 'oo', 'uu', 'ie', 'oe', 'eu', 'ij', 'ei', 'ui', 'ou', 'au', 'y']);

/** Split a word's glyph tokens into syllables (maximal onset): hallo -> ha | llo. */
function syllabify(word) {
  const isV = (t) => VOWELS.has(t.graph);
  const sylls = [];
  let cur = { onset: [], nucleus: null, coda: [] };
  let i = 0;
  const n = word.length;
  while (i < n) {
    const t = word[i];
    if (isV(t)) {
      if (cur.nucleus === null) { cur.nucleus = t; i += 1; }
      else { sylls.push(cur); cur = { onset: [], nucleus: t, coda: [] }; i += 1; }
    } else if (cur.nucleus === null) {
      cur.onset.push(t); i += 1;
    } else {
      const cons = [];
      let j = i;
      while (j < n && !isV(word[j])) { cons.push(word[j]); j += 1; }
      if (j < n) { sylls.push(cur); cur = { onset: cons, nucleus: null, coda: [] }; i = j; }
      else { cur.coda.push(...cons); i = j; }
    }
  }
  if (cur.nucleus !== null || cur.onset.length || cur.coda.length) sylls.push(cur);
  return sylls;
}

/** Strokes + centre (+ viewBox) for one letter, per mode (used to compose blocks/rings). */
function letterUnit(token, script) {
  if (script.mode === 'abugida') {
    const g = script.glyphs[token.graph];
    const cell = g && g.vow ? { vowel: token.graph } : { cons: token.graph };
    return { strokes: abugidaCellStrokes(cell, script), center: [50, 56], opts: ABU_OPTS, vb: script.viewBox };
  }
  if (script.mode === 'cursive') {
    const g = script.glyphs[token.graph];
    const o = { broad: 12, minWidth: 2.6 };
    if (g && g.c) return { strokes: [{ pts: g.c }], center: [(g.adv || 30) / 2, script.baseline || 72], opts: o, vb: '0 0 80 110' };
    return { strokes: (g && g.v) || [], center: [0, 30], opts: o, vb: '-40 0 80 110' };
  }
  return { strokes: glyphStrokes(token, script), center: [50, 62], opts: undefined, vb: '0 0 100 120' };
}

/** Lay a list of {content, vb} tiles around a circle, each rotated to follow the ring. */
function CircularText({ tiles }) {
  const n = Math.max(tiles.length, 1);
  const TILE = 58;
  const R = Math.max((n * (TILE + 8)) / (2 * Math.PI), 70);
  const SIZE = Math.round(2 * R + TILE * 2 + 30);
  const C = SIZE / 2;
  // the connecting baseline: one continuous inked circle the glyphs sit on
  const ringPts = [];
  const STEPS = 32;
  for (let k = 0; k < STEPS; k++) {
    const a = (k / STEPS) * Math.PI * 2;
    ringPts.push([C + R * Math.cos(a), C + R * Math.sin(a)]);
  }
  return (
    <svg className={styles.circular} viewBox={`0 0 ${SIZE} ${SIZE}`}>
      <Stroke stroke={{ pts: ringPts, closed: true }} seed={2024} opts={{ broad: 13, minWidth: 4 }} />
      {tiles.map((t, i) => {
        const ang = (i / n) * 360;
        // rotate each tile 90deg about its own centre so letters lie ALONG the
        // ring (tangent) and connect, instead of pointing outward like spokes
        return (
          <g key={i} transform={`rotate(${ang} ${C} ${C})`}>
            <g transform={`rotate(90 ${C} ${C - R})`}>
              <svg x={C - TILE / 2} y={C - R - TILE / 2} width={TILE} height={TILE} viewBox={t.vb} overflow="visible">
                {t.content}
              </svg>
            </g>
          </g>
        );
      })}
    </svg>
  );
}

/** One sentence as a constellation: head word centred, the rest orbiting + linked. */
function SpatialSentence({ words, script, soundScript }) {
  const n = words.length;
  const NODE = 70;
  const Rs = 104;
  const PAD = 28;
  const SIZE = n <= 1 ? 120 : 2 * Rs + NODE + PAD * 2;
  const C = SIZE / 2;
  const pos = words.map((w, i) => {
    if (n === 1 || i === 0) return [C, C];
    const m = n - 1;
    const ang = ((-90 + (i - 1) * (360 / m)) * Math.PI) / 180;
    return [C + Rs * Math.cos(ang), C + Rs * Math.sin(ang)];
  });
  return (
    <div className={styles.spatial} style={{ width: SIZE, height: SIZE }}>
      {n > 1 && (
        <svg className={styles.spatialLines} viewBox={`0 0 ${SIZE} ${SIZE}`} width={SIZE} height={SIZE}>
          {pos.slice(1).map((p, i) => (
            <Stroke key={i} stroke={{ pts: [[C, C], p] }} seed={500 + i * 7} opts={{ broad: 6, minWidth: 3 }} />
          ))}
        </svg>
      )}
      {words.map((w, i) => (
        <div key={i} className={styles.spatialNode} style={{ left: `${pos[i][0]}px`, top: `${pos[i][1]}px` }}>
          <LogographWord token={w} script={script} soundScript={soundScript} />
        </div>
      ))}
    </div>
  );
}

/** Flatten the text into ring tiles ({content, vb}) — glyphs for sound, signs for meaning. */
function buildTiles(script, tokens, wordTokens, soundScript) {
  const tiles = [];
  const glyphTile = (tk, scr) => {
    const u = letterUnit(tk, scr);
    return { content: u.strokes.map((s, j) => <Stroke key={j} stroke={s} seed={seedGlyph(tk.graph, j)} opts={u.opts} />), vb: u.vb };
  };
  if (script.mode === 'logographic') {
    for (const t of wordTokens) {
      if (t.type !== 'word') continue;
      const sign = script.lexicon[t.word];
      if (sign) tiles.push({ content: signContent(t.word, sign, script), vb: '0 0 100 100' });
      else for (const gt of tokenize(t.word, soundScript).filter((g) => g.type === 'glyph')) tiles.push(glyphTile(gt, soundScript));
    }
  } else {
    for (const tk of tokens) if (tk.type === 'glyph') tiles.push(glyphTile(tk, script));
  }
  return tiles;
}

/** One syllable composed into a 2D block: vowel base, onset above, coda below. */
function SyllableBlock({ syllable, script, seed = 3 }) {
  const { onset, nucleus, coda } = syllable;
  const oPos = onset.length <= 1 ? [[50, 26, 0.5]]
    : onset.length === 2 ? [[36, 25, 0.46], [64, 25, 0.46]]
      : [[30, 25, 0.4], [50, 25, 0.4], [70, 25, 0.4]];
  const cPos = coda.length <= 1 ? [[50, 104, 0.5]] : [[36, 104, 0.46], [64, 104, 0.46]];
  const place = [];
  onset.slice(0, 3).forEach((t, i) => place.push([t, oPos[i] || oPos[oPos.length - 1]]));
  if (nucleus) place.push([nucleus, [50, 66, 0.86]]);
  coda.slice(0, 2).forEach((t, i) => place.push([t, cPos[i] || cPos[cPos.length - 1]]));
  if (!place.length) return null;
  return (
    <svg className={styles.syllBlock} viewBox="0 0 100 128">
      {place.map(([t, [px, py, sc]], i) => {
        const u = letterUnit(t, script);
        const [cx, cy] = u.center;
        return (
          <g key={i} transform={`translate(${px} ${py}) scale(${sc}) translate(${-cx} ${-cy})`}>
            {u.strokes.map((s, j) => <Stroke key={j} stroke={s} seed={seed + i * 17 + j} opts={u.opts} />)}
          </g>
        );
      })}
    </svg>
  );
}

/** Render one word in the chosen composition style. */
function renderWord(word, script, style, key, seed) {
  const mode = script.mode;
  if (style === 'compound') return <MonogramWord key={key} word={word} script={script} seed={seed} />;
  if (style === 'calligraphy') {
    if (mode === 'cursive') return <CursiveWord key={key} tokens={word} script={script} seed={seed} />;
    if (mode === 'abugida') return <AbugidaWordCalli key={key} word={word} script={script} />;
    return <BindGlyph key={key} units={tokensToUnits(word, script)} script={script} />;
  }
  if (style === 'blocks') {
    return (
      <span key={key} className={styles.syllWord}>
        {syllabify(word).map((syl, si) => <SyllableBlock key={si} syllable={syl} script={script} seed={seed + si * 13} />)}
      </span>
    );
  }
  // linear
  if (mode === 'cursive') return <CursiveWord key={key} tokens={word} script={script} seed={seed} />;
  if (mode === 'abugida') {
    return (
      <span key={key} className={styles.word}>
        {layoutAbugidaWord(word, script).map((c, ci) => <AbugidaCell key={ci} cell={c} script={script} />)}
      </span>
    );
  }
  return (
    <span key={key} className={styles.word}>
      {word.map((t, ti) => <Glyph key={ti} token={t} script={script} />)}
    </span>
  );
}

/** One vertical column, rendered per script mode (and calligraphy). */
function VerticalColumn({ tokens, script, mode, bind, seed }) {
  if (mode === 'cursive') {
    if (bind) return <CursiveWord tokens={tokens} script={script} vertical seed={seed} />;
    return <>{splitWords(tokens).map((w, i) => <CursiveWord key={i} tokens={w} script={script} vertical seed={seed + i * 7} />)}</>;
  }
  if (mode === 'abugida') {
    const glyphTokens = tokens.filter((t) => t.type === 'glyph');
    if (bind) return <AbugidaWordCalli word={glyphTokens} script={script} vertical />;
    return <>{layoutAbugidaWord(glyphTokens, script).map((c, i) => <AbugidaCell key={i} cell={c} script={script} />)}</>;
  }
  if (bind) return <BindGlyph units={tokensToUnits(tokens, script)} script={script} />;
  return <>{tokens.map((t, i) => (t.type === 'space'
    ? <span key={i} className={styles.vgap} />
    : <Glyph key={i} token={t} script={script} />))}</>;
}

/** Split tokens into lines on newlines (keeps glyph + space tokens). */
function toTokenLines(tokens) {
  const out = [[]];
  for (const tok of tokens) {
    if (tok.type === 'newline') out.push([]);
    else out[out.length - 1].push(tok);
  }
  return out;
}


export default function Neography() {
  const { startTransition } = usePageTransition();
  const [text, setText] = useState(DEFAULT_TEXT);
  const [scriptId, setScriptId] = useState(SCRIPTS[0].id);
  const [showLegend, setShowLegend] = useState(true);
  const [layout, setLayout] = useState('horizontal');
  const [style, setStyle] = useState('blocks');
  const canvasRef = useRef(null);

  const script = useMemo(() => SCRIPTS.find((s) => s.id === scriptId) || SCRIPTS[0], [scriptId]);
  const cursive = script.mode === 'cursive';
  const abugida = script.mode === 'abugida';
  const stacked = script.mode === 'stacked';
  const logographic = script.mode === 'logographic';
  const spatial = script.mode === 'spatial';
  const meaning = logographic || spatial;
  const soundScript = useMemo(() => SCRIPTS.find((s) => s.id === script.fallbackScriptId) || SCRIPTS[0], [script]);
  const tokens = useMemo(() => (meaning ? [] : tokenize(text, script)), [text, script, meaning]);
  const wordTokens = useMemo(() => (meaning ? tokenizeWords(text) : []), [text, meaning]);

  // sentences (split on newlines) for the spatial / non-linear script
  const sentences = useMemo(() => {
    if (!spatial) return [];
    const out = [[]];
    for (const t of wordTokens) {
      if (t.type === 'newline') out.push([]);
      else if (t.type === 'word') out[out.length - 1].push(t);
    }
    return out.filter((s) => s.length);
  }, [wordTokens, spatial]);

  // group glyph tokens into words (non-bind rendering)
  const lines = useMemo(() => {
    const out = [[]];
    let word = [];
    const pushWord = () => { if (word.length) { out[out.length - 1].push(word); word = []; } };
    for (const tok of tokens) {
      if (tok.type === 'space') pushWord();
      else if (tok.type === 'newline') { pushWord(); out.push([]); }
      else if (tok.type === 'glyph') word.push(tok);
    }
    pushWord();
    return out;
  }, [tokens]);

  // lines of raw tokens for continuous bindrune

  // Export by serializing exactly what's rendered in the canvas, so the SVG
  // always matches the screen — calligraphy, vertical wrap, every mode.
  const handleDownload = () => {
    const root = canvasRef.current;
    if (!root) return;
    const rb = root.getBoundingClientRect();
    const svgs = [...root.querySelectorAll('svg')];
    if (!svgs.length) return;

    let minX = Infinity; let minY = Infinity; let maxX = -Infinity; let maxY = -Infinity;
    const items = svgs.map((el) => {
      const r = el.getBoundingClientRect();
      const x = r.left - rb.left + root.scrollLeft;
      const y = r.top - rb.top + root.scrollTop;
      minX = Math.min(minX, x); minY = Math.min(minY, y);
      maxX = Math.max(maxX, x + r.width); maxY = Math.max(maxY, y + r.height);
      return { x, y, w: r.width, h: r.height, vb: el.getAttribute('viewBox') || `0 0 ${r.width} ${r.height}`, inner: el.innerHTML };
    });

    const PAD = 28;
    const W = Math.ceil(maxX - minX + PAD * 2);
    const H = Math.ceil(maxY - minY + PAD * 2);
    const body = items.map((it) => `<svg x="${(it.x - minX + PAD).toFixed(1)}" y="${(it.y - minY + PAD).toFixed(1)}" width="${it.w.toFixed(1)}" height="${it.h.toFixed(1)}" viewBox="${it.vb}" overflow="visible">${it.inner}</svg>`).join('');
    const doc = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" style="color:#1c1714"><rect width="${W}" height="${H}" fill="#f4efe6"/>${body}</svg>`;

    const blob = new Blob([doc], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `neography-${script.id}-${layout}${meaning ? '' : `-${style}`}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // alphabet key, grouped — every glyph + its Latin grapheme, compounds included
  const legendGroups = useMemo(() => {
    if (!script.glyphs) return [];
    const has = (k) => !!script.glyphs[k];
    const defs = [
      { title: 'Vowels', keys: ['a', 'e', 'i', 'o', 'u'] },
      { title: 'Long vowels', keys: ['aa', 'ee', 'oo', 'uu'] },
      { title: 'Compounds & diphthongs', keys: ['ie', 'oe', 'eu', 'ij', 'ei', 'ui', 'ou', 'au'] },
      { title: 'Consonants', keys: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'] },
      { title: 'Clusters', keys: ['ch', 'ng', 'sch', 'sj', 'tj'] },
    ];
    return defs.map((d) => ({ title: d.title, keys: d.keys.filter(has) })).filter((d) => d.keys.length);
  }, [script]);

  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Neography</h1>
        <p className={styles.subtitle}>
          Type a Dutch sentence and watch it transform into a hand-written script.
          Handles digraphs (sch, ch, ng, ij, ui, eu, oe, ie) and long vowels.
        </p>
      </div>

      <div className={styles.scriptCats}>
        {CATEGORIES.map((cat) => (
          <div key={cat.id} className={styles.scriptCat}>
            <div className={styles.scriptCatLabel}>
              <span className={styles.scriptCatName}>{cat.label}</span>
              <span className={styles.scriptCatHint}>{cat.hint}</span>
            </div>
            <div className={styles.scriptTabs}>
              {SCRIPTS.filter((s) => s.category === cat.id).map((s) => (
                <button
                  key={s.id}
                  className={`${styles.scriptTab} ${s.id === scriptId ? styles.scriptTabActive : ''}`}
                  onClick={() => setScriptId(s.id)}
                >
                  <span className={styles.scriptTabLabel}>{s.label}</span>
                  <span className={styles.scriptTabName}>{s.name}</span>
                </button>
              ))}
              {UPCOMING.filter((u) => u.category === cat.id).map((u) => (
                <button key={u.label} className={`${styles.scriptTab} ${styles.scriptTabDisabled}`} disabled title="Coming soon">
                  <span className={styles.scriptTabLabel}>{u.label}</span>
                  <span className={styles.scriptTabName}>{u.name}</span>
                  <span className={styles.soon}>soon</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className={styles.tagline}>{script.tagline}</p>

      <textarea
        className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Typ hier je tekst…"
        spellCheck={false}
        rows={3}
      />

      <div className={styles.toolbar}>
        <div className={styles.segGroup}>
          <button
            className={`${styles.segBtn} ${layout === 'horizontal' ? styles.segActive : ''}`}
            onClick={() => setLayout('horizontal')}
          >Horizontal</button>
          <button
            className={`${styles.segBtn} ${layout === 'vertical' ? styles.segActive : ''}`}
            onClick={() => setLayout('vertical')}
          >Vertical ↓</button>
          <button
            className={`${styles.segBtn} ${layout === 'circular' ? styles.segActive : ''}`}
            onClick={() => setLayout('circular')}
          >Circular ◯</button>
        </div>
        {!meaning && (
          <div className={styles.segGroup}>
            {[
              ['linear', 'Linear'],
              ['blocks', 'Blocks'],
              ['calligraphy', 'Calligraphy'],
              ['compound', 'Compound'],
            ].map(([val, label]) => (
              <button
                key={val}
                className={`${styles.segBtn} ${style === val ? styles.segActive : ''}`}
                onClick={() => setStyle(val)}
              >{label}</button>
            ))}
          </div>
        )}
        <button className={styles.toolbarBtn} onClick={handleDownload}>Download SVG</button>
        <button className={styles.toolbarBtn} onClick={() => setShowLegend((v) => !v)}>
          {showLegend ? 'Hide' : 'Show'} {meaning ? 'words' : 'alphabet'}
        </button>
      </div>

      <div ref={canvasRef} className={[
        styles.canvas,
        spatial ? styles.canvasSpatial
          : layout === 'vertical' ? styles.canvasCols : layout === 'circular' ? styles.canvasCircular : '',
      ].join(' ')}>
        {spatial
          ? sentences.map((words, si) => <SpatialSentence key={si} words={words} script={script} soundScript={soundScript} />)
          : layout === 'circular'
          ? <CircularText tiles={buildTiles(script, tokens, wordTokens, soundScript)} />
          : logographic
          ? (layout === 'vertical'
            ? toWordColumns(wordTokens, 6).map((col, ci) => (
              <div key={ci} className={styles.columnV}>
                {col.map((t, i) => <LogographWord key={i} token={t} script={script} soundScript={soundScript} />)}
              </div>
            ))
            : (() => {
              const wlines = [[]];
              for (const t of wordTokens) { if (t.type === 'newline') wlines.push([]); else wlines[wlines.length - 1].push(t); }
              return wlines.map((line, li) => (
                <div key={li} className={styles.compLine}>
                  {line.length === 0 ? <span className={styles.empty}>&nbsp;</span> : line.map((t, i) => (
                    t.type === 'word' ? <LogographWord key={i} token={t} script={script} soundScript={soundScript} /> : <span key={i} className={styles.wsp} />
                  ))}
                </div>
              ));
            })())
          : layout === 'vertical'
            ? (style === 'linear'
              ? toColumns(tokens, MAX_COL_GLYPHS).map((col, ci) => (
                <div key={ci} className={styles.columnV}>
                  <VerticalColumn tokens={col} script={script} mode={script.mode} bind={false} seed={ci * 53 + 7} />
                </div>
              ))
              : chunkArr(lines.flat(), 5).map((col, ci) => (
                <div key={ci} className={styles.columnV}>
                  {col.map((word, wi) => renderWord(word, script, style, wi, ci * 31 + wi * 7 + 3))}
                </div>
              )))
            : lines.map((words, li) => (
              <div key={li} className={styles.compLine}>
                {words.length === 0 ? <span className={styles.empty}>&nbsp;</span>
                  : words.map((word, wi) => renderWord(word, script, style, wi, li * 31 + wi * 7 + 3))}
              </div>
            ))}
      </div>

      {showLegend && meaning && (
        <div className={styles.legend}>
          {script.lexiconGroups.map((grp) => (
            <div key={grp.title} className={styles.legendGroup}>
              <div className={styles.legendTitle}>{grp.title}</div>
              <div className={styles.legendRow}>
                {grp.words.map((w) => (
                  <div key={w} className={styles.legendCell}>
                    <LogographWord token={{ type: 'word', word: w }} script={script} soundScript={soundScript} />
                    <span className={styles.legendLabel}>{w}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {showLegend && !meaning && (
        <div className={styles.legend}>
          {legendGroups.map((grp) => (
            <div key={grp.title} className={styles.legendGroup}>
              <div className={styles.legendTitle}>{grp.title}</div>
              <div className={styles.legendRow}>
                {grp.keys.map((g) => (
                  <div key={g} className={styles.legendCell}>
                    {cursive
                      ? <CursiveWord tokens={[{ type: 'glyph', graph: g }]} script={script} />
                      : abugida
                        ? <AbugidaCell cell={isVowelGraph(g, script) ? { vowel: g } : { cons: g }} script={script} />
                        : <Glyph token={{ graph: g, strokes: script.glyphs[g] }} script={script} />}
                    <span className={styles.legendLabel}>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.backWrapper}>
        <button className={styles.backButton} onClick={() => startTransition(Routes.TOOLS)}>
          ← Back to tools
        </button>
      </div>
    </main>
  );
}
