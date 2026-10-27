// Hand-drawn pixel sprites for the hero secrets and the cat. Each frame is a list of rows;
// '.' is transparent and every other character is a colour from PALETTE.

export const PALETTE = {
  k: '#0b1a22', // owl body
  e: '#c9b25a', // owl eye, resting
  E: '#ffe08a', // owl eye, lit
  l: '#24343c', // owl eyelid
  r: '#b8955a', // rabbit on the moon
  g: '#6b6487', // mouse fur
  p: '#c98aa0', // mouse ear
  b: '#06040f', // mouse eye
  c: '#2b2350', // cat body
  h: '#4b3486', // cat highlight
  y: '#ffd27a', // cat eye
  w: '#fff1c9', // "+1"
  s: '#0d0b24', // "+1" shadow
  f: '#ffe08a', // sparkle
};

const OWL_TOP = ['k...k', 'kkkkk'];
const OWL_BOTTOM = ['kkkkk', '.kkk.', '.kkk.'];
const owl = (eyes) => [...OWL_TOP, eyes, ...OWL_BOTTOM];

const CAT_SIT = ['....c.c', '....ccc', '....cyc', '..cchc.', '.cchcc.', 'cc.ccc.', '.cccccc'];

export const SPRITES = {
  owlBlink: { w: 5, h: 6, frames: [owl('kEkEk'), owl('kekek'), owl('klllk')] },
  owlTurn: { w: 5, h: 6, frames: [owl('EkEkk'), owl('kkkkk'), owl('kkEkE')] },
  moonRabbit: {
    w: 7,
    h: 6,
    frames: [['.r.r...', '.r.r...', '.rrr...', 'rrrrr..', '.rrrrr.', '..r..r.']],
  },
  mousePeek: {
    w: 5,
    h: 4,
    frames: [
      ['.....', '.....', '.....', '.....'],
      ['.....', '.....', '.p.p.', '.ggg.'],
      ['.p.p.', '.ggg.', 'gbgbg', '.ggg.'],
      ['.....', '.....', '.p.p.', '.ggg.'],
    ],
  },
  catWalk: {
    w: 9,
    h: 6,
    frames: ['.c.c..c.c', '..c.c..c.', '.c.c..c.c', '.c..c.c..'].map((legs, i) => [
      '......c.c',
      '......ccc',
      i % 2 ? 'c.....cyc' : '.c....cyc', // the tail tip bobs with the step
      '.cchhhhcc',
      '.ccccccc.',
      legs,
    ]),
  },
  catSit: { w: 7, h: 7, frames: [CAT_SIT, CAT_SIT.map((r, i) => (i === 2 ? '....ccc' : r))] },
  catTail: {
    w: 7,
    h: 7,
    frames: [CAT_SIT, CAT_SIT.map((r, i) => (i === 5 ? 'c..ccc.' : i === 6 ? 'c.ccccc' : r))],
  },
  plusOne: { w: 7, h: 5, frames: [['.....w.', '.w..ww.', 'www..w.', '.w...w.', '....www']] },
  sparkle: {
    w: 5,
    h: 5,
    frames: [
      ['.....', '.....', '..f..', '.....', '.....'],
      ['..f..', '.....', 'f.w.f', '.....', '..f..'],
      ['.....', '..f..', '.fwf.', '..f..', '.....'],
    ],
  },
};

/** Draws one frame with (x, y) at the sprite's bottom centre, in art pixels. */
export function drawSprite(ctx, sprite, frameIndex, x, y, flip = false) {
  const frame = sprite.frames[frameIndex % sprite.frames.length];
  const left = Math.round(x) - Math.floor(sprite.w / 2);
  const top = Math.round(y) - sprite.h + 1;
  frame.forEach((row, ry) => {
    for (let rx = 0; rx < sprite.w; rx++) {
      const ch = row[flip ? sprite.w - 1 - rx : rx];
      if (ch === '.') continue;
      ctx.fillStyle = PALETTE[ch];
      ctx.fillRect(left + rx, top + ry, 1, 1);
    }
  });
}
