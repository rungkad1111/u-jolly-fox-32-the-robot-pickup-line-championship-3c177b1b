import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The Robot Pickup Line Championship: one charming, machine-born line.
// v1: a robot fakes a dying battery just to share a charging cable.
const line =
  "My battery should last twelve years, but near you I pretend it is dying, just to share your charging cable for five more minutes.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line + "\n", "utf8");
console.log(line);
