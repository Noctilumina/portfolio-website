// Short-lived feedback drawn over the scene: a "+1" that rises and a sparkle. Ages in ticks.

const LIFE = { plus: 8, sparkle: 3 };

export function spawnPlusOne(list, x, y) {
  list.push({ kind: 'plus', x, y, age: 0 });
}

export function spawnSparkle(list, x, y) {
  list.push({ kind: 'sparkle', x, y, age: 0 });
}

export function stepPopups(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    const p = list[i];
    p.age++;
    if (p.kind === 'plus') p.y -= 1;
    if (p.age >= LIFE[p.kind]) list.splice(i, 1);
  }
}

export const popupFrame = (p) => p.age;
