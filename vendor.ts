const URL = "https://esm.sh/gh/davidsharp/consnake@1.0.1-emoji/snake.js?bundle&target=esnext";
const DEST_DIR = "./vendor";
const DEST_FILE = `${DEST_DIR}/snake.js`;

console.log(`[Vendor] Fetching remote dependencies...`);

try {
  let response = await fetch(URL);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  let code = await response.text();

  const stubMatch = code.match(/from\s+['"](\/[^'"]+)['"]/);

  if (stubMatch) {
    const realPath = stubMatch[1];
    const realUrl = `https://esm.sh${realPath}`;

    console.log(`[Vendor] Stub detected. Fetching actual bundle from: ${realUrl}`);

    response = await fetch(realUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status} on real bundle`);

    code = await response.text();
  }

  // Ensure folder exists and write the REAL code to disk
  await Deno.mkdir(DEST_DIR, { recursive: true });
  await Deno.writeTextFile(DEST_FILE, code);

  console.log(`[Vendor] Successfully saved raw JS to ${DEST_FILE}`);

} catch (error) {
  console.error(`[Vendor] Failed to fetch dependency:`, error);
  Deno.exit(1);
}
