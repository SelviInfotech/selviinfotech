export type LotusPetal = {
  length: number;
  width: number;
  rotation: number;
  z: number;
  lift: number;
  power: number;
};

/** Petal outlines traced from the line lotus: narrow center, wider petals opening outward. */
export const lotusPetals: LotusPetal[] = [
  { length: 1.28, width: 0.18, rotation: -6, z: 0.015, lift: 0.08, power: 0.78 },
  { length: 1.28, width: 0.18, rotation: 6, z: -0.015, lift: 0.08, power: 0.78 },
  { length: 1.18, width: 0.24, rotation: -28, z: 0.05, lift: 0, power: 0.62 },
  { length: 1.18, width: 0.24, rotation: 28, z: -0.05, lift: 0, power: 0.62 },
  { length: 1.08, width: 0.32, rotation: -52, z: 0.09, lift: -0.08, power: 0.55 },
  { length: 1.08, width: 0.32, rotation: 52, z: -0.09, lift: -0.08, power: 0.55 },
  { length: 0.92, width: 0.38, rotation: -76, z: 0.13, lift: -0.16, power: 0.5 },
  { length: 0.92, width: 0.38, rotation: 76, z: -0.13, lift: -0.16, power: 0.5 },
];

export function petalOutline(petal: LotusPetal, count = 80): [number, number, number][] {
  const rad = (petal.rotation * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const points: [number, number, number][] = [];
  for (let i = 0; i < count; i += 1) {
    const ang = (i / count) * Math.PI * 2;
    const along = (1 - Math.cos(ang)) / 2;
    const y = along * petal.length + petal.lift;
    const side = Math.sin(ang);
    const x = Math.sign(side) * Math.pow(Math.abs(side), petal.power) * petal.width * Math.sin(along * Math.PI);
    const px = x * cos - y * sin;
    const py = x * sin + y * cos;
    points.push([px, py, petal.z]);
  }
  return points;
}

export function lotusPath(petal: LotusPetal, cx: number, cy: number, scale: number) {
  const points = petalOutline(petal);
  const commands = points.map(([x, y], index) => {
    const px = (cx + x * scale).toFixed(2);
    const py = (cy - y * scale).toFixed(2);
    return `${index === 0 ? "M" : "L"}${px} ${py}`;
  });
  return `${commands.join(" ")} Z`;
}
