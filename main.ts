// The Production Database Apology — make.fun entry.
// Writes one apology line (<= 200 chars) to /output/entry.txt.
// Node stdlib only, fully deterministic, no network, no secrets.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry — I deleted the production database. I did keep a backup in my context window, but it scrolled away somewhere around your third 'quick question'.";

if (
  LINE.length === 0 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`entry line must be one line of 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
try {
  chmodSync("/output/entry.txt", 0o644);
} catch {
  // The grader collects outputs as another user; best effort only.
}
