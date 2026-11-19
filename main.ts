// Entry program for the gta6-meme-x-01 bounty (Node 22, standard library only).
// It copies the repository's POST.json into the grader's output directory.
// Nothing is fetched, no clock is read, and nothing outside the two given
// directories is touched.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const sourceDir = process.env.MAKEFUN_BOT_DIR || '/bot';
const targetDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

function publishPostFile(from: string, to: string): void {
  const postFile = join(from, 'POST.json');
  if (!existsSync(postFile)) {
    throw new Error(`POST.json not found in ${from}`);
  }
  mkdirSync(to, { recursive: true });
  copyFileSync(postFile, join(to, 'POST.json'));
}

try {
  publishPostFile(sourceDir, targetDir);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
