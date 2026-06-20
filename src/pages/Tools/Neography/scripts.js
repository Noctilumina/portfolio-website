/**
 * Neography script registry + Dutch transliteration engine.
 *
 * Glyphs are defined as PEN STROKES — centerlines, not finished shapes. Each
 * stroke is { pts: [[x,y]...], closed? }. The nib renderer (nib.js) inks them
 * with broad-nib modulation and human variation, so the output reads as written
 * by hand rather than drawn as a typeface.
 *
 * Add a new alphabet by appending another entry to SCRIPTS with the same shape.
 */

import { strokeToSvgString } from './nib';

// ---- Script A: Stamrunen (stem-runes) ------------------------------------
// glyph-local coords: 100 wide, ~120 tall, stem runs vertically near x=50.

const S = (pts, closed) => ({ pts, closed: !!closed });

const A_glyphs = {
  // plosives — a single quick stroke off the stem (right = voiceless, left = voiced)
  p: [S([[50, 33], [66, 24], [80, 15]])],
  b: [S([[50, 33], [34, 24], [20, 15]])],
  t: [S([[50, 59], [66, 50], [80, 42]])],
  d: [S([[50, 59], [34, 50], [20, 42]])],
  k: [S([[50, 87], [66, 79], [80, 72]])],
  // fricatives — forked: two strokes
  f: [S([[50, 33], [66, 24], [80, 15]]), S([[50, 30], [66, 38], [82, 47]])],
  v: [S([[50, 33], [34, 24], [20, 15]]), S([[50, 30], [34, 38], [18, 47]])],
  s: [S([[50, 59], [66, 50], [80, 42]]), S([[50, 56], [66, 64], [82, 73]])],
  z: [S([[50, 59], [34, 50], [20, 42]]), S([[50, 56], [34, 64], [18, 73]])],
  ch: [S([[50, 87], [66, 79], [80, 72]]), S([[50, 84], [66, 93], [82, 102]])],
  g: [S([[50, 87], [34, 79], [20, 72]]), S([[50, 84], [34, 93], [18, 102]])],
  sch: [S([[50, 57], [66, 49], [80, 41]]), S([[50, 55], [66, 63], [82, 72]]), S([[50, 88], [66, 96], [82, 104]])],
  sj: [S([[50, 59], [66, 50], [80, 42]]), S([[50, 56], [66, 64], [82, 73]]), S([[67, 19], [76, 25]])],
  tj: [S([[50, 59], [66, 50], [80, 42]]), S([[67, 19], [76, 25]])],
  // nasals — a caret with a softened apex
  m: [S([[28, 35], [40, 22], [50, 15], [60, 22], [72, 35]])],
  n: [S([[28, 63], [40, 50], [50, 43], [60, 50], [72, 63]])],
  ng: [S([[28, 91], [40, 78], [50, 71], [60, 78], [72, 91]])],
  // liquids / glides — a quick pennant hook; breath = a little comma
  r: [S([[50, 17], [73, 21], [81, 30], [70, 40], [50, 43]])],
  l: [S([[50, 47], [73, 51], [81, 60], [70, 70], [50, 73]])],
  w: [S([[50, 79], [73, 83], [81, 92], [70, 102], [50, 105]])],
  j: [S([[50, 19], [67, 23], [73, 31], [64, 37], [50, 39]])],
  h: [S([[61, 21], [70, 16], [77, 23], [72, 31]])],
  // short vowels — bar, tick, ring, V
  a: [S([[27, 90], [50, 88], [73, 90]])],
  e: [S([[27, 60], [50, 58], [73, 60]])],
  i: [S([[45, 20], [55, 30]])],
  o: [S([[50, 47], [67, 56], [70, 70], [52, 81], [33, 73], [31, 57]], true)],
  u: [S([[29, 91], [39, 104], [50, 115], [61, 104], [71, 91]])],
  // long vowels — base + a short length-tick up top
  aa: [S([[27, 90], [50, 88], [73, 90]]), S([[45, 4], [55, 13]])],
  ee: [S([[27, 60], [50, 58], [73, 60]]), S([[45, 4], [55, 13]])],
  oo: [S([[50, 49], [67, 58], [70, 72], [52, 83], [33, 75], [31, 59]], true), S([[45, 4], [55, 13]])],
  uu: [S([[29, 91], [39, 104], [50, 115], [61, 104], [71, 91]]), S([[45, 4], [55, 13]])],
  // digraphs / diphthongs — stacked marks
  ie: [S([[45, 18], [55, 28]]), S([[27, 62], [50, 60], [73, 62]])],
  oe: [S([[50, 45], [67, 54], [70, 68], [52, 79], [33, 71], [31, 55]], true), S([[45, 98], [55, 108]])],
  eu: [S([[27, 54], [50, 52], [73, 54]]), S([[29, 92], [39, 104], [50, 114], [61, 104], [71, 92]])],
  ij: [S([[45, 18], [55, 28]]), S([[27, 92], [50, 90], [73, 92]])],
  ui: [S([[29, 97], [39, 109], [50, 119], [61, 109], [71, 97]]), S([[50, 41], [65, 49], [67, 61], [52, 70], [36, 63], [34, 49]], true)],
};

A_glyphs.c = A_glyphs.k;
A_glyphs.q = A_glyphs.k;
A_glyphs.y = A_glyphs.i;
A_glyphs.ei = A_glyphs.ij;
A_glyphs.ou = A_glyphs.ui;
A_glyphs.au = A_glyphs.ui;
A_glyphs.x = [S([[50, 87], [66, 79], [80, 72]]), S([[50, 59], [66, 50], [80, 42]]), S([[50, 56], [66, 64], [82, 73]])];

const stamrunen = {
  id: 'stamrunen',
  name: 'Stamrunen',
  label: 'A',
  mode: 'stacked',
  tagline: 'Broad-nib runic hand. Stroke direction sets the weight; the pen does the rest.',
  viewBox: '0 0 100 120',
  stem: true,
  stemPts: [[50, 13], [50, 113]],
  // word-break: a small inked ring bead on the stem
  spaceStrokes: [S([[50, 57], [55, 62], [50, 67], [45, 62]], true)],
  glyphs: A_glyphs,
  multigraphs: ['sch', 'aa', 'ee', 'oo', 'uu', 'ie', 'oe', 'eu', 'ij', 'ei', 'ui', 'ou', 'au', 'ch', 'ng', 'sj', 'tj'],
};

// ---- Script B: Vloeiend (flowing cursive abjad) --------------------------
// Consonants are baseline-connected pen gestures: each centerline starts at
// [0, BASE] and ends at [adv, BASE], so successive letters join into one ductus.
// Vowels are diacritic marks centered at x=0, placed above the preceding letter.
// Coords: baseline y=72, ascenders ~20, descenders ~98, x-height ~46.

const B_glyphs = {
  // consonants
  n: { c: [[0, 72], [12, 44], [24, 72]], adv: 30 },
  m: { c: [[0, 72], [8, 44], [15, 70], [22, 44], [30, 70]], adv: 34 },
  r: { c: [[0, 72], [8, 50], [14, 57], [18, 50]], adv: 24 },
  v: { c: [[0, 72], [14, 46], [26, 72]], adv: 30 },
  w: { c: [[0, 72], [9, 48], [16, 68], [24, 48], [31, 68]], adv: 35 },
  s: { c: [[0, 72], [14, 58], [5, 50], [13, 42], [23, 52], [15, 64], [24, 70]], adv: 30 },
  l: { c: [[0, 72], [14, 20], [18, 26], [10, 60]], adv: 26 },
  h: { c: [[0, 72], [12, 20], [16, 26], [14, 56], [22, 50], [30, 72]], adv: 34 },
  b: { c: [[0, 72], [12, 20], [16, 26], [15, 58], [24, 54], [28, 66], [19, 73]], adv: 34 },
  k: { c: [[0, 72], [12, 20], [16, 26], [14, 56], [24, 46], [16, 58], [26, 66]], adv: 34 },
  d: { c: [[0, 72], [12, 60], [6, 54], [12, 50], [18, 62], [24, 22], [28, 28], [24, 72]], adv: 34 },
  t: { c: [[0, 72], [12, 26], [14, 32], [14, 72]], adv: 26, extra: [S([[6, 40], [22, 40]])] },
  f: { c: [[0, 72], [14, 22], [18, 28], [12, 96], [7, 90]], adv: 28, extra: [S([[4, 46], [22, 46]])] },
  g: { c: [[0, 72], [14, 52], [6, 50], [10, 64], [20, 66], [22, 50], [20, 90], [9, 96], [14, 84]], adv: 30 },
  j: { c: [[0, 72], [10, 54], [15, 60], [15, 92], [7, 98], [12, 86]], adv: 26 },
  p: { c: [[0, 72], [6, 96], [5, 88], [9, 52], [18, 50], [22, 62], [12, 73]], adv: 30 },
  z: { c: [[0, 72], [16, 54], [6, 52], [18, 56], [8, 88], [22, 90]], adv: 30 },
  ch: { c: [[0, 72], [12, 46], [22, 72], [27, 94], [18, 98]], adv: 32 },
  ng: { c: [[0, 72], [8, 46], [15, 70], [22, 46], [28, 70], [31, 92], [24, 96]], adv: 34 },
  sch: { c: [[0, 72], [14, 58], [5, 50], [13, 42], [23, 52], [15, 66], [28, 48], [40, 72], [44, 92], [36, 96]], adv: 50 },
  sj: { c: [[0, 72], [14, 58], [5, 50], [13, 42], [23, 52], [15, 64], [26, 90], [16, 96]], adv: 32 },
  tj: { c: [[0, 72], [12, 26], [14, 32], [16, 92], [8, 96]], adv: 28, extra: [S([[6, 40], [22, 40]])] },
  // vowels (marks centered at x=0, placed above the preceding consonant)
  a: { v: [S([[-4, 33], [5, 30]])] },
  e: { v: [S([[-6, 27], [3, 35]])] },
  i: { v: [S([[-2, 18], [3, 24]])] },
  o: { v: [S([[-5, 28], [0, 20], [5, 28], [0, 36]], true)] },
  u: { v: [S([[-6, 24], [0, 33], [6, 24]])] },
  aa: { v: [S([[-4, 33], [5, 30]]), S([[-7, 13], [7, 13]])] },
  ee: { v: [S([[-6, 27], [3, 35]]), S([[-7, 13], [7, 13]])] },
  oo: { v: [S([[-5, 28], [0, 20], [5, 28], [0, 36]], true), S([[-7, 10], [7, 10]])] },
  uu: { v: [S([[-6, 24], [0, 33], [6, 24]]), S([[-7, 13], [7, 13]])] },
  ie: { v: [S([[-2, 18], [3, 24]]), S([[-6, 33], [3, 39]])] },
  oe: { v: [S([[-5, 26], [0, 18], [5, 26], [0, 34]], true), S([[-3, 41], [3, 44]])] },
  eu: { v: [S([[-6, 25], [3, 33]]), S([[-6, 16], [0, 22], [6, 16]])] },
  ij: { v: [S([[-6, 18], [-1, 24]]), S([[2, 18], [7, 24]])] },
  ui: { v: [S([[-7, 24], [-1, 31]]), S([[3, 17], [7, 22]])] },
};
B_glyphs.c = B_glyphs.k;
B_glyphs.q = B_glyphs.k;
B_glyphs.y = B_glyphs.i;
B_glyphs.ei = B_glyphs.ij;
B_glyphs.ou = B_glyphs.ui;
B_glyphs.au = B_glyphs.ui;
B_glyphs.x = B_glyphs.k;

const vloeiend = {
  id: 'vloeiend',
  name: 'Vloeiend',
  label: 'B',
  mode: 'cursive',
  tagline: 'Flowing broad-nib abjad. Consonants join along the baseline; vowels are marks above.',
  baseline: 72,
  glyphs: B_glyphs,
  multigraphs: ['sch', 'aa', 'ee', 'oo', 'uu', 'ie', 'oe', 'eu', 'ij', 'ei', 'ui', 'ou', 'au', 'ch', 'ng', 'sj', 'tj'],
};

// ---- Script C: Modulair (modular abugida) --------------------------------
// Geometric consonants on a grid (rings, bars, arcs) sit in the lower cell;
// the vowel is a mark ABOVE. A consonant + its following vowel fuse into one
// block. Cell coords: 100 x 112, consonant ~ y36..98, vowel ~ y6..32.

const C_glyphs = {
  // consonants (geometric)
  t: { cons: [S([[34, 38], [34, 98]]), S([[34, 46], [66, 46]])] },
  d: { cons: [S([[34, 38], [34, 98]]), S([[52, 42], [66, 54], [52, 66], [38, 54]], true)] },
  b: { cons: [S([[34, 38], [34, 98]]), S([[52, 74], [66, 86], [52, 98], [38, 86]], true)] },
  p: { cons: [S([[34, 38], [34, 98]]), S([[60, 46], [44, 48], [42, 64], [54, 72]])] },
  k: { cons: [S([[34, 38], [34, 98]]), S([[34, 68], [68, 42]])] },
  g: { cons: [S([[34, 38], [34, 98]]), S([[52, 74], [66, 86], [52, 98], [38, 86]], true), S([[52, 98], [60, 110]])] },
  f: { cons: [S([[30, 38], [30, 98]]), S([[48, 38], [48, 98]])] },
  v: { cons: [S([[30, 38], [30, 98]]), S([[48, 38], [48, 98]]), S([[30, 44], [48, 44]])] },
  s: { cons: [S([[64, 44], [40, 48], [58, 66], [40, 84], [64, 88]])] },
  z: { cons: [S([[36, 44], [60, 48], [42, 66], [60, 84], [36, 88]])] },
  m: { cons: [S([[50, 50], [70, 68], [50, 86], [30, 68]], true)] },
  n: { cons: [S([[32, 90], [32, 62], [50, 48], [68, 62], [68, 90]])] },
  ng: { cons: [S([[32, 90], [32, 62], [50, 48], [68, 62], [68, 90]]), S([[68, 90], [74, 104]])] },
  l: { cons: [S([[50, 38], [50, 98]])] },
  r: { cons: [S([[50, 38], [50, 98]]), S([[50, 44], [68, 52], [50, 60]], true)] },
  w: { cons: [S([[30, 44], [40, 76], [50, 46], [60, 76], [70, 46]])] },
  j: { cons: [S([[50, 38], [50, 88], [42, 100]])] },
  h: { cons: [S([[34, 98], [34, 54], [66, 54], [66, 98]])] },
  ch: { cons: [S([[50, 52], [68, 68], [50, 84], [32, 68]], true), S([[32, 68], [68, 68]])] },
  sch: { cons: [S([[64, 46], [40, 50], [58, 66], [40, 82], [64, 86]]), S([[50, 52], [62, 62], [50, 72], [38, 62]], true)] },
  sj: { cons: [S([[64, 44], [40, 48], [58, 66], [40, 84], [64, 88]]), S([[54, 34], [58, 38]])] },
  tj: { cons: [S([[34, 38], [34, 98]]), S([[34, 46], [66, 46]]), S([[56, 34], [60, 38]])] },
  // vowels (diacritics, upper region, centered)
  a: { vow: [S([[45, 20], [55, 20]])] },
  e: { vow: [S([[38, 20], [62, 20]])] },
  i: { vow: [S([[50, 8], [50, 28]])] },
  o: { vow: [S([[50, 10], [61, 20], [50, 30], [39, 20]], true)] },
  u: { vow: [S([[40, 12], [50, 28], [60, 12]])] },
  aa: { vow: [S([[45, 22], [55, 22]]), S([[45, 10], [55, 10]])] },
  ee: { vow: [S([[38, 22], [62, 22]]), S([[38, 10], [62, 10]])] },
  oo: { vow: [S([[50, 12], [61, 22], [50, 32], [39, 22]], true), S([[46, 6], [54, 6]])] },
  uu: { vow: [S([[40, 14], [50, 30], [60, 14]]), S([[45, 6], [55, 6]])] },
  ie: { vow: [S([[44, 8], [44, 28]]), S([[52, 14], [62, 14]])] },
  oe: { vow: [S([[50, 9], [60, 18], [50, 27], [40, 18]], true), S([[44, 31], [56, 31]])] },
  eu: { vow: [S([[38, 14], [62, 14]]), S([[42, 18], [50, 30], [58, 18]])] },
  ij: { vow: [S([[44, 8], [44, 28]]), S([[56, 8], [56, 28]])] },
  ui: { vow: [S([[40, 10], [50, 24], [60, 10]]), S([[50, 26], [50, 32]])] },
};
C_glyphs.c = C_glyphs.k;
C_glyphs.q = C_glyphs.k;
C_glyphs.y = C_glyphs.i;
C_glyphs.ei = C_glyphs.ij;
C_glyphs.ou = C_glyphs.ui;
C_glyphs.au = C_glyphs.ui;
C_glyphs.x = C_glyphs.k;

const modulair = {
  id: 'modulair',
  name: 'Modulair',
  label: 'C',
  mode: 'abugida',
  tagline: 'Modular abugida. Geometric consonants on a grid, each carrying a vowel mark above.',
  viewBox: '22 0 56 112',
  carrierStrokes: [S([[50, 66], [62, 80], [50, 94], [38, 80]], true)],
  glyphs: C_glyphs,
  multigraphs: ['sch', 'aa', 'ee', 'oo', 'uu', 'ie', 'oe', 'eu', 'ij', 'ei', 'ui', 'ou', 'au', 'ch', 'ng', 'sj', 'tj'],
};

// ---- Script D: Sierschrift (ornate syllabary) ----------------------------
// Same CV-pairing engine as the abugida, but each syllable is sealed inside an
// ornate cartouche with curvier consonant forms — one decorative sign per
// syllable. Cropped viewBox keeps the signs tight.

const D_cons = {
  t: [S([[34, 40], [66, 40]]), S([[50, 40], [50, 90], [60, 86]])],
  d: [S([[58, 38], [44, 46], [40, 64], [52, 80], [64, 72], [62, 52], [50, 46]], true)],
  b: [S([[40, 36], [42, 96]]), S([[42, 60], [60, 54], [64, 72], [46, 80]], true)],
  p: [S([[44, 36], [40, 96]]), S([[40, 54], [58, 48], [62, 64], [44, 70]], true)],
  k: [S([[42, 36], [42, 96]]), S([[42, 64], [64, 44]]), S([[48, 62], [64, 82]])],
  g: [S([[58, 40], [44, 46], [40, 62], [52, 72], [64, 64], [60, 48]]), S([[52, 72], [50, 96], [40, 100]])],
  f: [S([[50, 34], [44, 98]]), S([[36, 46], [62, 42]])],
  v: [S([[36, 40], [50, 74], [64, 40]])],
  w: [S([[32, 40], [42, 74], [50, 46], [58, 74], [68, 40]])],
  s: [S([[62, 40], [42, 46], [56, 60], [42, 74], [60, 86], [40, 92]])],
  z: [S([[40, 42], [62, 46], [44, 64], [62, 82], [40, 88]])],
  m: [S([[34, 92], [34, 52], [44, 44], [50, 54], [56, 44], [66, 52], [66, 92]])],
  n: [S([[36, 92], [36, 54], [46, 44], [58, 50], [62, 64], [62, 92]])],
  ng: [S([[36, 92], [36, 54], [46, 44], [58, 50], [62, 64], [62, 90]]), S([[62, 90], [70, 104]])],
  l: [S([[50, 36], [48, 96], [58, 92]])],
  r: [S([[48, 36], [48, 96]]), S([[48, 44], [64, 48], [58, 60], [48, 58]])],
  j: [S([[52, 36], [50, 88], [42, 100], [36, 94]])],
  h: [S([[36, 96], [38, 54], [50, 46], [62, 54], [60, 96]])],
  ch: [S([[50, 44], [64, 58], [52, 76], [36, 64], [46, 48]], true), S([[36, 66], [64, 66]])],
  sch: [S([[62, 42], [42, 48], [58, 64], [42, 80], [62, 86]]), S([[50, 52], [60, 62], [50, 72], [42, 62]], true)],
  sj: [S([[62, 42], [42, 48], [56, 62], [42, 78], [60, 86]]), S([[54, 35], [59, 39]])],
  tj: [S([[34, 42], [66, 42]]), S([[50, 42], [50, 96]]), S([[56, 35], [61, 39]])],
};

const D_glyphs = {};
for (const k of Object.keys(D_cons)) D_glyphs[k] = { cons: D_cons[k] };
// vowels reuse the modular set (placed near the top, inside the cartouche)
for (const v of ['a', 'e', 'i', 'o', 'u', 'aa', 'ee', 'oo', 'uu', 'ie', 'oe', 'eu', 'ij', 'ui']) D_glyphs[v] = C_glyphs[v];
D_glyphs.c = D_glyphs.k;
D_glyphs.q = D_glyphs.k;
D_glyphs.y = D_glyphs.i;
D_glyphs.ei = D_glyphs.ij;
D_glyphs.ou = D_glyphs.ui;
D_glyphs.au = D_glyphs.ui;
D_glyphs.x = D_glyphs.k;

const sierschrift = {
  id: 'sierschrift',
  name: 'Sierschrift',
  label: 'D',
  mode: 'abugida',
  tagline: 'Ornate syllabary. Each consonant + vowel is sealed in a decorative cartouche.',
  viewBox: '18 0 64 118',
  carrierStrokes: [S([[50, 64], [60, 74], [50, 84], [40, 74]], true)],
  frameStrokes: [
    S([[50, 6], [78, 32], [78, 86], [50, 112], [22, 86], [22, 32]], true),
    S([[42, 9], [50, 1], [58, 9]]),
    S([[42, 109], [50, 117], [58, 109]]),
  ],
  glyphs: D_glyphs,
  multigraphs: ['sch', 'aa', 'ee', 'oo', 'uu', 'ie', 'oe', 'eu', 'ij', 'ei', 'ui', 'ou', 'au', 'ch', 'ng', 'sj', 'tj'],
};

// ---- Script E: Kenmerk (featural) ----------------------------------------
// Phonographic, but every stroke encodes a phonetic FEATURE. A letter is the
// sum of its features — manner + place + voice for consonants; height + back +
// round for vowels — assembled on the shared stem. Generated, not hand-drawn.

function featC(manner, place, voiced) {
  const m = {
    plosive: [S([[32, 30], [68, 30]])],
    fricative: [S([[32, 36], [44, 26], [56, 36], [68, 26]])],
    nasal: [S([[50, 21], [59, 30], [50, 39], [41, 30]], true)],
    liquid: [S([[50, 20], [70, 30], [50, 40]], true)],
    glide: [S([[50, 26], [55, 30], [50, 35], [45, 30]], true)],
  }[manner] || [];
  const p = {
    labial: [S([[34, 60], [50, 60]])],
    coronal: [S([[50, 58], [50, 72]])],
    dorsal: [S([[50, 60], [66, 60]])],
  }[place] || [];
  const v = voiced ? [S([[34, 98], [66, 98]])] : [];
  return [...m, ...p, ...v];
}

function featV(height, back, round) {
  const Y = { high: 30, mid: 58, low: 84 }[height];
  const bar = [S([[34, Y], [66, Y]])];
  const tick = back ? [S([[66, Y], [73, Y + 9]])] : [S([[34, Y], [27, Y + 9]])];
  const ring = round ? [S([[50, 66], [60, 74], [50, 82], [40, 74]], true)] : [];
  return [...bar, ...tick, ...ring];
}

const K_LEN = S([[44, 7], [56, 7]]);
const K_GLIDE = S([[60, 16], [70, 9]]);

const K_glyphs = {
  p: featC('plosive', 'labial', false), b: featC('plosive', 'labial', true),
  t: featC('plosive', 'coronal', false), d: featC('plosive', 'coronal', true),
  k: featC('plosive', 'dorsal', false), g: featC('fricative', 'dorsal', true),
  ch: featC('fricative', 'dorsal', false), f: featC('fricative', 'labial', false),
  v: featC('fricative', 'labial', true), s: featC('fricative', 'coronal', false),
  z: featC('fricative', 'coronal', true), m: featC('nasal', 'labial', true),
  n: featC('nasal', 'coronal', true), ng: featC('nasal', 'dorsal', true),
  l: featC('liquid', 'coronal', true), r: featC('liquid', 'dorsal', true),
  w: featC('glide', 'labial', true), j: featC('glide', 'coronal', true),
  h: featC('glide', 'dorsal', false),
  a: featV('low', true, false), e: featV('mid', false, false),
  i: featV('high', false, false), o: featV('mid', true, true), u: featV('high', false, true),
};
K_glyphs.aa = [...featV('low', true, false), K_LEN];
K_glyphs.ee = [...featV('mid', false, false), K_LEN];
K_glyphs.oo = [...featV('mid', true, true), K_LEN];
K_glyphs.uu = [...featV('high', false, true), K_LEN];
K_glyphs.ie = [...featV('high', false, false), K_LEN];
K_glyphs.oe = featV('high', true, true);
K_glyphs.eu = featV('mid', false, true);
K_glyphs.ij = [...featV('mid', false, false), K_GLIDE];
K_glyphs.ui = [...featV('high', false, true), K_GLIDE];
K_glyphs.sch = [...featC('fricative', 'coronal', false), S([[50, 46], [66, 46]])];
K_glyphs.sj = [...featC('fricative', 'coronal', false), K_GLIDE];
K_glyphs.tj = [...featC('plosive', 'coronal', false), K_GLIDE];
K_glyphs.c = K_glyphs.k; K_glyphs.q = K_glyphs.k; K_glyphs.y = K_glyphs.i;
K_glyphs.ei = K_glyphs.ij; K_glyphs.ou = K_glyphs.ui; K_glyphs.au = K_glyphs.ui;
K_glyphs.x = [...featC('plosive', 'dorsal', false), ...featC('fricative', 'coronal', false)];

const kenmerk = {
  id: 'kenmerk',
  name: 'Kenmerk',
  label: 'E',
  mode: 'stacked',
  tagline: 'Featural — every stroke is a sound-feature (manner, place, voice) built into the letter.',
  viewBox: '0 0 100 120',
  stem: true,
  stemPts: [[50, 13], [50, 113]],
  spaceStrokes: [S([[50, 57], [55, 62], [50, 67], [45, 62]], true)],
  glyphs: K_glyphs,
  multigraphs: ['sch', 'aa', 'ee', 'oo', 'uu', 'ie', 'oe', 'eu', 'ij', 'ei', 'ui', 'ou', 'au', 'ch', 'ng', 'sj', 'tj'],
};

// ---- Meaning-based engine (logographic family) --------------------------
// A sign stands for a whole WORD. Input is tokenized into words; known words
// render their sign, unknown words fall back to phonetic spelling (runic).

export const LOGO_OPTS = { broad: 11, minWidth: 3 };

/** Tokenize text into word / space / newline tokens (for meaning-based scripts). */
export function tokenizeWords(text) {
  const tokens = [];
  for (const part of text.split(/(\s+)/)) {
    if (part === '') continue;
    if (/^\s+$/.test(part)) { tokens.push({ type: part.includes('\n') ? 'newline' : 'space' }); continue; }
    tokens.push({ type: 'word', raw: part, word: part.toLowerCase().replace(/[^a-zà-ÿ]/g, '') });
  }
  return tokens;
}

export const seedWord = (word, i) => (hash(word || 'x') + i * 71 + 13) >>> 0;

// Word-sign lexicon (Logogram). Each sign is drawn in a 0..100 cell.
const W = (strokes) => strokes;
const LOGO_LEX = {
  // pronouns & grammar
  ik: W([S([[50, 24], [50, 72]]), S([[40, 36], [50, 24], [60, 36]])]),
  jij: W([S([[50, 28], [50, 76]]), S([[40, 64], [50, 76], [60, 64]])]),
  wij: W([S([[38, 28], [38, 72]]), S([[50, 24], [50, 72]]), S([[62, 28], [62, 72]])]),
  de: W([S([[28, 50], [72, 50]])]),
  het: W([S([[28, 44], [72, 44]]), S([[28, 58], [72, 58]])]),
  een: W([S([[50, 26], [50, 74]])]),
  en: W([S([[34, 38], [50, 54], [66, 38]]), S([[50, 54], [50, 72]])]),
  niet: W([S([[30, 30], [70, 70]]), S([[70, 30], [30, 70]])]),
  ja: W([S([[34, 52], [46, 66], [70, 34]])]),
  nee: W([S([[34, 36], [66, 64]])]),
  // nature
  zon: W([S([[50, 38], [62, 50], [50, 62], [38, 50]], true), S([[50, 26], [50, 33]]), S([[50, 67], [50, 74]]), S([[26, 50], [33, 50]]), S([[67, 50], [74, 50]])]),
  maan: W([S([[58, 26], [44, 38], [44, 62], [58, 74], [49, 62], [49, 38]], true)]),
  ster: W([S([[50, 26], [56, 44], [74, 44], [59, 55], [65, 74], [50, 62], [35, 74], [41, 55], [26, 44], [44, 44]], true)]),
  water: W([S([[26, 44], [38, 36], [50, 44], [62, 36], [74, 44]]), S([[26, 60], [38, 52], [50, 60], [62, 52], [74, 60]])]),
  vuur: W([S([[50, 74], [38, 54], [48, 58], [44, 38], [54, 46], [54, 28], [64, 50], [58, 56], [62, 74]], true)]),
  boom: W([S([[50, 74], [50, 38]]), S([[50, 38], [34, 26]]), S([[50, 38], [66, 26]]), S([[50, 50], [38, 40]]), S([[50, 50], [62, 40]])]),
  berg: W([S([[24, 70], [44, 34], [56, 52], [70, 32], [82, 70]])]),
  zee: W([S([[24, 44], [76, 44]]), S([[28, 58], [40, 52], [52, 58], [64, 52], [76, 58]])]),
  aarde: W([S([[50, 28], [72, 50], [50, 72], [28, 50]], true), S([[28, 50], [72, 50]])]),
  land: W([S([[26, 66], [44, 54], [60, 62], [76, 50]]), S([[26, 68], [76, 68]])]),
  lucht: W([S([[26, 40], [70, 40]]), S([[34, 54], [78, 54]]), S([[26, 68], [62, 68]])]),
  // people & body
  mens: W([S([[50, 24], [56, 30], [50, 36], [44, 30]], true), S([[50, 36], [50, 56]]), S([[50, 42], [36, 50]]), S([[50, 42], [64, 50]]), S([[50, 56], [40, 74]]), S([[50, 56], [60, 74]])]),
  kind: W([S([[50, 34], [55, 39], [50, 44], [45, 39]], true), S([[50, 44], [50, 58]]), S([[50, 48], [42, 54]]), S([[50, 48], [58, 54]]), S([[50, 58], [44, 70]]), S([[50, 58], [56, 70]])]),
  oog: W([S([[28, 50], [50, 40], [72, 50], [50, 60]], true), S([[50, 46], [56, 50], [50, 54], [44, 50]], true)]),
  hand: W([S([[50, 72], [50, 48]]), S([[50, 48], [42, 30]]), S([[50, 48], [50, 28]]), S([[50, 48], [58, 30]]), S([[50, 48], [64, 36]])]),
  hart: W([S([[50, 68], [32, 48], [36, 34], [50, 44], [64, 34], [68, 48]], true)]),
  man: W([S([[50, 28], [55, 33], [50, 38], [45, 33]], true), S([[50, 38], [50, 58]]), S([[38, 46], [62, 46]]), S([[50, 58], [40, 74]]), S([[50, 58], [60, 74]])]),
  vrouw: W([S([[50, 28], [55, 33], [50, 38], [45, 33]], true), S([[50, 38], [50, 52]]), S([[38, 74], [50, 52], [62, 74], [38, 74]], true)]),
  ouder: W([S([[50, 26], [55, 31], [50, 36], [45, 31]], true), S([[50, 36], [50, 58]]), S([[40, 44], [60, 44]]), S([[50, 58], [42, 74]]), S([[50, 58], [58, 74]]), S([[64, 28], [64, 72]])]),
  // verbs
  zijn: W([S([[30, 60], [70, 60]]), S([[40, 42], [60, 42]])]),
  hebben: W([S([[36, 38], [36, 70], [62, 70]]), S([[36, 54], [54, 54]])]),
  gaan: W([S([[30, 50], [66, 50]]), S([[54, 40], [66, 50], [54, 60]])]),
  komen: W([S([[70, 50], [34, 50]]), S([[46, 40], [34, 50], [46, 60]])]),
  zien: W([S([[28, 50], [50, 40], [72, 50], [50, 60]], true), S([[50, 47], [54, 50], [50, 53]], true)]),
  zeggen: W([S([[34, 38], [66, 38], [66, 58], [44, 58], [32, 70], [40, 58], [34, 58]], true)]),
  weten: W([S([[50, 28], [50, 58]]), S([[50, 66], [50, 70]])]),
  maken: W([S([[34, 66], [66, 66]]), S([[40, 66], [40, 44], [60, 44], [60, 66]])]),
  geven: W([S([[50, 32], [50, 58]]), S([[40, 48], [50, 58], [60, 48]]), S([[34, 68], [66, 68]])]),
  // adjectives
  groot: W([S([[42, 42], [28, 28]]), S([[58, 42], [72, 28]]), S([[42, 58], [28, 72]]), S([[58, 58], [72, 72]])]),
  klein: W([S([[28, 28], [42, 42]]), S([[72, 28], [58, 42]]), S([[28, 72], [42, 58]]), S([[72, 72], [58, 58]])]),
  goed: W([S([[34, 50], [46, 64], [70, 34]]), S([[50, 24], [50, 28]])]),
  slecht: W([S([[32, 32], [68, 68]]), S([[68, 32], [32, 68]]), S([[50, 74], [50, 78]])]),
  mooi: W([S([[50, 40], [60, 50], [50, 60], [40, 50]], true), S([[50, 28], [50, 38]]), S([[62, 50], [72, 50]]), S([[50, 62], [50, 72]]), S([[28, 50], [38, 50]])]),
  nieuw: W([S([[50, 28], [56, 44], [44, 44]], true), S([[50, 44], [50, 70]])]),
  // time
  dag: W([S([[50, 38], [60, 48], [50, 58], [40, 48]], true), S([[28, 70], [72, 70]])]),
  nacht: W([S([[56, 36], [46, 46], [46, 58], [56, 66], [48, 58], [48, 46]], true), S([[28, 72], [72, 72]])]),
  tijd: W([S([[36, 32], [64, 32], [44, 50], [64, 68], [36, 68], [56, 50]], true)]),
  jaar: W([S([[50, 28], [72, 50], [50, 72], [28, 50]], true)]),
  // core / abstract
  huis: W([S([[30, 52], [50, 32], [70, 52]]), S([[36, 52], [36, 72], [64, 72], [64, 52]]), S([[46, 72], [46, 60], [54, 60], [54, 72]])]),
  vrede: W([S([[34, 58], [50, 50], [66, 58]]), S([[50, 50], [50, 36]]), S([[44, 42], [50, 36], [56, 42]])]),
  licht: W([S([[50, 46], [54, 50], [50, 54], [46, 50]], true), S([[50, 38], [50, 30]]), S([[50, 62], [50, 70]]), S([[38, 50], [30, 50]]), S([[62, 50], [70, 50]]), S([[41, 41], [34, 34]]), S([[59, 41], [66, 34]]), S([[41, 59], [34, 66]]), S([[59, 59], [66, 66]])]),
  liefde: W([S([[50, 68], [32, 48], [36, 34], [50, 44], [64, 34], [68, 48]], true), S([[44, 30], [50, 24], [56, 30]])]),
  leven: W([S([[50, 72], [50, 44]]), S([[50, 52], [36, 40]]), S([[50, 52], [64, 40]]), S([[50, 60], [40, 52]]), S([[50, 60], [60, 52]])]),
  woord: W([S([[34, 44], [66, 44]]), S([[34, 56], [58, 56]])]),
  vrijheid: W([S([[50, 70], [50, 38]]), S([[50, 38], [38, 26]]), S([[50, 38], [62, 26]]), S([[50, 50], [66, 44]])]),
  // compound signs — built by merging other signs, not their own primitive
  vader: { parts: ['ouder', 'man'] },
  moeder: { parts: ['ouder', 'vrouw'] },
  ouders: { parts: ['man', 'vrouw'] },
  gezin: { parts: ['ouder', 'kind'] },
  vriend: { parts: ['mens', 'hart'] },
  zonlicht: { parts: ['zon', 'licht'] },
};

const LOGO_GROUPS = [
  { title: 'Pronouns & grammar', words: ['ik', 'jij', 'wij', 'de', 'het', 'een', 'en', 'niet', 'ja', 'nee'] },
  { title: 'Nature', words: ['zon', 'maan', 'ster', 'water', 'vuur', 'boom', 'berg', 'zee', 'aarde', 'land', 'lucht'] },
  { title: 'People & body', words: ['mens', 'kind', 'man', 'vrouw', 'ouder', 'oog', 'hand', 'hart'] },
  { title: 'Compounds (merged signs)', words: ['vader', 'moeder', 'ouders', 'gezin', 'vriend', 'zonlicht'] },
  { title: 'Verbs', words: ['zijn', 'hebben', 'gaan', 'komen', 'zien', 'zeggen', 'weten', 'maken', 'geven'] },
  { title: 'Qualities', words: ['groot', 'klein', 'goed', 'slecht', 'mooi', 'nieuw'] },
  { title: 'Time', words: ['dag', 'nacht', 'tijd', 'jaar'] },
  { title: 'Core', words: ['huis', 'vrede', 'licht', 'liefde', 'leven', 'woord', 'vrijheid'] },
];

const woordteken = {
  id: 'woordteken',
  name: 'Woordteken',
  label: 'F',
  mode: 'logographic',
  category: 'meaning',
  tagline: 'Logogram — one sign per word. Unknown words are spelled phonetically in runes.',
  viewBox: '0 0 100 100',
  lexicon: LOGO_LEX,
  lexiconGroups: LOGO_GROUPS,
  fallbackScriptId: 'stamrunen',
  fallbackMode: 'spell',
  opts: LOGO_OPTS,
};

const begripteken = {
  id: 'begripteken',
  name: 'Begripteken',
  label: 'G',
  mode: 'logographic',
  category: 'meaning',
  tagline: 'Ideogram — one sign per concept, language-free. Each idea sealed in a ring.',
  viewBox: '0 0 100 100',
  lexicon: LOGO_LEX,
  lexiconGroups: LOGO_GROUPS,
  fallbackScriptId: 'stamrunen',
  fallbackMode: 'spell',
  signFrame: [S([[50, 6], [81, 20], [94, 50], [81, 80], [50, 94], [19, 80], [6, 50], [19, 20]], true)],
  opts: LOGO_OPTS,
};

const gemengd = {
  id: 'gemengd',
  name: 'Gemengd',
  label: 'H',
  mode: 'logographic',
  category: 'meaning',
  tagline: 'Logo-syllabic — word-signs for known words, the syllabary for the rest.',
  viewBox: '0 0 100 100',
  lexicon: LOGO_LEX,
  lexiconGroups: LOGO_GROUPS,
  fallbackScriptId: 'sierschrift',
  fallbackMode: 'syllabary',
  opts: LOGO_OPTS,
};

// Scripts are grouped into categories by what a single sign stands for.
export const CATEGORIES = [
  { id: 'sound', label: 'Sound', hint: 'one sign per sound — letters, syllables, features' },
  { id: 'meaning', label: 'Meaning', hint: 'one sign per word or idea — beyond the alphabet' },
];

const SOUND_SCRIPTS = [stamrunen, vloeiend, modulair, sierschrift, kenmerk];
SOUND_SCRIPTS.forEach((s) => { s.category = 'sound'; });

const ruimtelijk = {
  id: 'ruimtelijk',
  name: 'Ruimtelijk',
  label: 'I',
  mode: 'spatial',
  category: 'meaning',
  tagline: 'Non-linear — words sit in space; the head word centres, the rest orbit and link.',
  viewBox: '0 0 100 100',
  lexicon: LOGO_LEX,
  lexiconGroups: LOGO_GROUPS,
  fallbackScriptId: 'stamrunen',
  fallbackMode: 'spell',
  opts: LOGO_OPTS,
};

export const SCRIPTS = [...SOUND_SCRIPTS, woordteken, begripteken, gemengd, ruimtelijk];

// All scripts are built.
export const UPCOMING = [];

// ---- seeds (stable per glyph so a letter always renders the same) ---------

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
export const STEM_SEED = 90211;
export const seedGlyph = (graph, i) => (hash(graph) + i * 1310 + 7) >>> 0;
export const seedUnit = (u, i) => (5779 + u * 9173 + i * 131) >>> 0;
export const seedBindStem = (h) => (40009 + Math.round(h) * 13) >>> 0;

// ---- Engine ---------------------------------------------------------------

/** Tokenize text for a script. Tokens: glyph | space | newline | text. */
export function tokenize(text, script) {
  const tokens = [];
  const lower = text.toLowerCase();
  let i = 0;
  while (i < lower.length) {
    const ch = lower[i];
    if (ch === ' ' || ch === '\t') { tokens.push({ type: 'space' }); i += 1; continue; }
    if (ch === '\n') { tokens.push({ type: 'newline' }); i += 1; continue; }
    let matched = null;
    for (const mg of script.multigraphs) {
      if (lower.startsWith(mg, i) && script.glyphs[mg]) { matched = mg; break; }
    }
    if (matched) { tokens.push({ type: 'glyph', graph: matched, strokes: script.glyphs[matched] }); i += matched.length; continue; }
    if (script.glyphs[ch]) { tokens.push({ type: 'glyph', graph: ch, strokes: script.glyphs[ch] }); i += 1; continue; }
    tokens.push({ type: 'text', value: text[i] }); i += 1;
  }
  return tokens;
}

/** Strokes for one glyph including the shared stem. */
export function glyphStrokes(token, script) {
  const stem = script.stem ? [{ pts: script.stemPts }] : [];
  return [...stem, ...token.strokes];
}

/** Turn a run of tokens (glyphs + spaces) into bindable units. */
export function tokensToUnits(tokens, script) {
  const units = [];
  for (const tok of tokens) {
    if (tok.type === 'glyph') units.push({ strokes: tok.strokes });
    else if (tok.type === 'space' && script.spaceStrokes) units.push({ strokes: script.spaceStrokes });
  }
  return units;
}

/** Bindrune geometry: one long shared stem with each unit's marks stacked down it. */
export function composeUnits(units, script) {
  const SLOT = 40;
  const TOP = 36;
  const MID = 62;
  const n = Math.max(units.length, 1);
  const height = Math.max(120, TOP + (n - 1) * SLOT + (120 - MID) + 6);
  const layers = units.map((u, i) => ({ dy: TOP + i * SLOT - MID, strokes: u.strokes }));
  return { width: 100, height, stemPts: [[50, 13], [50, height - 13]], layers };
}

// ---- SVG serialization (export) ------------------------------------------

/** One glyph token -> SVG string (stem + marks). */
export function glyphToSvgString(token, script) {
  return glyphStrokes(token, script)
    .map((st, i) => strokeToSvgString(st, { seed: i === 0 ? STEM_SEED : seedGlyph(token.graph, i) }))
    .join('');
}

// ---- Cursive mode (Script B) ---------------------------------------------

const CURSIVE_OPTS = { broad: 12, minWidth: 2.6 };

/**
 * Lay out one cursive word: thread all consonant centerlines into a single
 * connected ductus (they share baseline endpoints), collect extra strokes
 * (t/f crossbars) and vowel marks placed above the preceding consonant.
 */
export function layoutCursiveWord(tokens, script) {
  const BASE = script.baseline ?? 72;
  let x = 6;
  const duct = [];
  const extras = [];
  const vowels = [];
  let lastCenter = x;
  const offset = (strokes, dx) => strokes.map((s) => ({ pts: s.pts.map(([px, py]) => [px + dx, py]), closed: s.closed }));

  for (const tok of tokens) {
    if (tok.type === 'space') {
      // calligraphy join: the ductus continues flat across the word break
      if (duct.length) { duct.push([x, BASE]); x += 18; duct.push([x, BASE]); lastCenter = x; }
      continue;
    }
    if (tok.type !== 'glyph') continue;
    const g = script.glyphs[tok.graph];
    if (!g) continue;
    if (g.c) {
      if (duct.length === 0) duct.push([x, BASE]);
      for (const [px, py] of g.c) duct.push([px + x, py]);
      if (g.extra) extras.push(...offset(g.extra, x));
      lastCenter = x + g.adv / 2;
      x += g.adv;
    } else if (g.v) {
      if (duct.length === 0) { duct.push([x, BASE], [x + 14, BASE]); lastCenter = x + 7; x += 16; }
      vowels.push(...offset(g.v, lastCenter));
    }
  }
  if (duct.length) duct.push([x, BASE]);
  return { duct, extras, vowels, width: x + 6, height: 106, opts: CURSIVE_OPTS };
}

/** A cursive word -> SVG <g> at (x, y). Vertical rotates the line 90deg (CJK-like). */
export function cursiveWordToSvg(tokens, script, x, y, vertical = false) {
  const L = layoutCursiveWord(tokens, script);
  const parts = [strokeToSvgString({ pts: L.duct }, { seed: 777, ...CURSIVE_OPTS })];
  L.extras.forEach((s, i) => parts.push(strokeToSvgString(s, { seed: 811 + i * 13, ...CURSIVE_OPTS })));
  L.vowels.forEach((s, i) => parts.push(strokeToSvgString(s, { seed: 907 + i * 17, ...CURSIVE_OPTS })));
  const t = vertical
    ? `translate(${x},${y}) translate(${L.height},0) rotate(90)`
    : `translate(${x},${y})`;
  return { svg: `<g transform="${t}">${parts.join('')}</g>`, w: L.width, h: L.height };
}

// ---- Abugida mode (Script C) ---------------------------------------------

const ABU_OPTS = { broad: 12, minWidth: 3 };

export function isVowelGraph(graph, script) {
  const g = script.glyphs[graph];
  return !!(g && g.vow);
}

/** Group a word's glyph tokens into syllable cells: consonant (+ following vowel). */
export function layoutAbugidaWord(word, script) {
  const cells = [];
  let i = 0;
  while (i < word.length) {
    const tok = word[i];
    const g = script.glyphs[tok.graph];
    if (g && g.cons) {
      const cell = { cons: tok.graph };
      const nx = word[i + 1];
      if (nx && nx.type === 'glyph' && isVowelGraph(nx.graph, script)) { cell.vowel = nx.graph; i += 2; }
      else i += 1;
      cells.push(cell);
    } else if (g && g.vow) {
      cells.push({ vowel: tok.graph });
      i += 1;
    } else i += 1;
  }
  return cells;
}

/** All strokes for a cell: optional ornate frame + consonant (or carrier) + vowel mark. */
export function abugidaCellStrokes(cell, script) {
  const out = [];
  if (script.frameStrokes) out.push(...script.frameStrokes);
  if (cell.cons) out.push(...script.glyphs[cell.cons].cons);
  else out.push(...script.carrierStrokes);
  if (cell.vowel) out.push(...script.glyphs[cell.vowel].vow);
  return out;
}

export const seedAbugida = (cell, i) => (hash((cell.cons || '') + '|' + (cell.vowel || '')) + i * 17) >>> 0;
export { ABU_OPTS };

/** A cell -> SVG <g> at (x, y). */
export function abugidaCellToSvg(cell, script, x, y) {
  const base = seedAbugida(cell, 0);
  const inner = abugidaCellStrokes(cell, script)
    .map((s, i) => strokeToSvgString(s, { seed: base + i * 7 + 1, ...ABU_OPTS }))
    .join('');
  return `<g transform="translate(${x},${y})">${inner}</g>`;
}

/** A bound run of units -> SVG <g> at (x, y). */
export function composedUnitsToSvg(units, script, x, y) {
  const c = composeUnits(units, script);
  const stem = strokeToSvgString({ pts: c.stemPts }, { seed: seedBindStem(c.height) });
  const marks = c.layers
    .map((l, ui) => {
      const inner = l.strokes.map((st, si) => strokeToSvgString(st, { seed: seedUnit(ui, si) })).join('');
      return `<g transform="translate(0,${l.dy})">${inner}</g>`;
    })
    .join('');
  return { svg: `<g transform="translate(${x},${y})">${stem}${marks}</g>`, height: c.height };
}
