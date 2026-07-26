import fs from "node:fs";

const htmlPath = "index.html";
const html = fs.readFileSync(htmlPath, "utf8");

const blocks = [
  ...html.matchAll(
    /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  ),
];

if (blocks.length === 0) {
  throw new Error(`No JSON-LD blocks found in ${htmlPath}.`);
}

for (const [index, block] of blocks.entries()) {
  const json = block[1].trim();

  try {
    JSON.parse(json);
  } catch (error) {
    throw new Error(
      `Invalid JSON-LD block #${index + 1}: ${error.message}`,
      { cause: error },
    );
  }
}

console.log(`JSON-LD validation passed. Blocks checked: ${blocks.length}`);