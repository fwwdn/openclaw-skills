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
  node {baseDir}/scripts/write.js --json '{"prompt":"Write a polite follow-up email after a sales demo","recipient":"prospective customer","sender":"account executive","purpose":"book the next meeting","tone":"professional and warm"}'
  node {baseDir}/scripts/write.js --json '{"prompt":"Rewrite this email so it sounds clearer and more concise","sourceText":"...","recipient":"engineering manager"}' --dry-run
`;

await runScript(process.argv.slice(2), createWriteExecutor('email'), HELP);
