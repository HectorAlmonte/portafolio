// Build-time generators for the layered landscape.
// Everything is seeded, so every build draws the same forest.

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;

/** One conifer with three tiers of branches, base centered on (x, y). */
function conifer(x: number, y: number, h: number, w: number) {
  const p = (dx: number, dy: number) => `${r1(x + dx)},${r1(y - dy)}`;
  return (
    `M${p(0, h)}` +
    `L${p(w * 0.26, h * 0.66)}L${p(w * 0.14, h * 0.66)}` +
    `L${p(w * 0.4, h * 0.32)}L${p(w * 0.24, h * 0.32)}` +
    `L${p(w * 0.5, h * 0.04)}L${p(w * 0.06, h * 0.04)}L${p(w * 0.06, 0)}` +
    `L${p(-w * 0.06, 0)}L${p(-w * 0.06, h * 0.04)}L${p(-w * 0.5, h * 0.04)}` +
    `L${p(-w * 0.24, h * 0.32)}L${p(-w * 0.4, h * 0.32)}` +
    `L${p(-w * 0.14, h * 0.66)}L${p(-w * 0.26, h * 0.66)}Z`
  );
}

interface TreelineOptions {
  seed: number;
  width?: number;
  /** y of the ground line at rest */
  base: number;
  /** vertical swell of the ground line */
  swell?: number;
  /** bottom of the filled ground */
  floor: number;
  minH: number;
  maxH: number;
  /** horizontal distance between trees */
  gap: number;
  /** probability that a slot holds a tree */
  density?: number;
  /** x range left without trees */
  clearing?: [number, number];
}

/** A filled ground band with a treeline standing on its undulating top edge. */
export function treeline(o: TreelineOptions) {
  const W = o.width ?? 1440;
  const rand = rng(o.seed);
  const swell = o.swell ?? 30;
  const ph1 = rand() * Math.PI * 2;
  const ph2 = rand() * Math.PI * 2;
  const groundY = (x: number) =>
    o.base + Math.sin(x / 260 + ph1) * swell + Math.sin(x / 97 + ph2) * swell * 0.3;

  let ground = `M-40,${r1(groundY(-40))}`;
  for (let x = 0; x <= W + 40; x += 40) ground += `L${x},${r1(groundY(x))}`;
  ground += `L${W + 40},${o.floor}L-40,${o.floor}Z`;

  let trees = '';
  for (let x = -20; x < W + 30; x += o.gap * (0.6 + rand() * 0.8)) {
    if (rand() > (o.density ?? 0.9)) continue;
    const h = o.minH + rand() * (o.maxH - o.minH);
    if (o.clearing && x > o.clearing[0] && x < o.clearing[1]) continue;
    trees += conifer(x, groundY(x) + 4, h, h * (0.36 + rand() * 0.12));
  }
  return ground + trees;
}

/** A smooth hill band, used for section edges. */
export function hills(seed: number, W = 1440, H = 120, amp = 34) {
  const rand = rng(seed);
  const ph = rand() * Math.PI * 2;
  let d = `M0,${H}`;
  for (let x = 0; x <= W; x += 24) {
    const y = H * 0.55 + Math.sin(x / 210 + ph) * amp + Math.sin(x / 83 + ph * 2) * amp * 0.25;
    d += `L${x},${r1(y)}`;
  }
  return d + `L${W},${H}Z`;
}
