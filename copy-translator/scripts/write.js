#!/usr/bin/env node

import { runScript } from './vendor/weryai-text/cli.js';
import { createWriteExecutor } from './vendor/weryai-text/write.js';

const HELP = `Usage: node {baseDir}/scripts/write.js [options]

Options:
  --json <data>    Pass parameters as a JSON string (use "-" for stdin)
  --dry-run        Preview the request without calling the API
  --verbose        Print debug info to stderr
  --help           Show this help message

Examples:
  node {baseDir}/scripts/write.js --json '{"prompt":"Translate this product copy into English and keep it natural","sourceText":"...","sourceLanguage":"zh","targetLanguage":"en","tone":"natural marketing copy"}'
  node {baseDir}/scripts/write.js --json '{"prompt":"Localize this landing page copy from English to Japanese","sourceText":"...","sourceLanguage":"en","targetLanguage":"ja"}' --dry-run
`;

await runScript(process.argv.slice(2), createWriteExecutor('translation'), HELP);
