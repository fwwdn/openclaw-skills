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
  node {baseDir}/scripts/write.js --json '{"prompt":"Polish this draft without changing the core meaning","sourceText":"...","tone":"professional and concise"}'
  node {baseDir}/scripts/write.js --json '{"prompt":"Make this product copy clearer and less repetitive","sourceText":"...","audience":"busy professionals"}' --dry-run
`;

await runScript(process.argv.slice(2), createWriteExecutor('rewrite'), HELP);
