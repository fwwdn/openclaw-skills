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
  node {baseDir}/scripts/write.js --json '{"prompt":"Write a 1500-word article about remote work habits","audience":"knowledge workers","tone":"practical","length":"1500 words"}'
  node {baseDir}/scripts/write.js --json '{"prompt":"Turn these notes into a narrative essay","sourceText":"...","language":"zh"}' --dry-run
`;

await runScript(process.argv.slice(2), createWriteExecutor('longform'), HELP);
