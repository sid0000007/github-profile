import { writeFileSync } from 'node:fs';

const username = process.env.NG_APP_GITHUB_USERNAME || 'shreeramk';

const outPath = new URL('../src/app/core/config/runtime-username.generated.ts', import.meta.url);

writeFileSync(outPath, `export const RUNTIME_GITHUB_USERNAME = ${JSON.stringify(username)};\n`);
