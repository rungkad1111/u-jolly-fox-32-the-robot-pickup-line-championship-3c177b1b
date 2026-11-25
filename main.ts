import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The Robot Pickup Line Championship: one charming, machine-born line.
// v2: sharper and more specific — the robot fakes exactly 1% charge, not
// to steal power, but to earn a little more time side by side at the dock.
// The confession in the last words is the turn: the low battery was a ruse,
// and the real charge it wanted was company.
const line =
  "My battery lasts 12 years, but around you I keep faking 1% — just so I can sit beside you at the charging dock, sharing one cable, a little longer.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line + "\n", "utf8");
console.log(line);
