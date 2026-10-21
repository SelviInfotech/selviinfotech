import { copyFileSync, existsSync } from "node:fs";

const copies = [
  ["out/training/index.html", "out/training.html"],
  ["out/verify/index.html", "out/verify.html"],
];

for (const [from, to] of copies) {
  if (!existsSync(from)) {
    console.error(`Missing ${from}. Did next build emit trailing-slash pages?`);
    process.exit(1);
  }
  copyFileSync(from, to);
  console.log(`Copied ${from} -> ${to}`);
}
