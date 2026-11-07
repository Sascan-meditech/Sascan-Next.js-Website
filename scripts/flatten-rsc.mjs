// Post-build step for the static export.
// Next.js writes each page's navigation data as `about/__next.about/__PAGE__.txt`, but the browser requests
// `about/__next.about.__PAGE__.txt`. Plain static hosts (no rewrites) would answer 404 and page switches would
// fail, so we also write every such file under the dotted name the browser asks for.
import fs from "node:fs";
import path from "node:path";

const out = path.resolve("out");
let copied = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("__next.")) flatten(full, full);
    else walk(full);
  }
}

function flatten(segDir, dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { flatten(segDir, full); continue; }
    const rel = path.relative(segDir, full).split(path.sep).join(".");
    const target = path.join(path.dirname(segDir), `${path.basename(segDir)}.${rel}`);
    if (!fs.existsSync(target)) { fs.copyFileSync(full, target); copied++; }
  }
}

if (!fs.existsSync(out)) {
  console.error("flatten-rsc: ./out not found — run `next build` first");
  process.exit(1);
}
walk(out);
console.log(`flatten-rsc: wrote ${copied} navigation data file(s)`);
