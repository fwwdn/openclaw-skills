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
  node {baseDir}/scripts/write.js --json '{"prompt":"Summarize this article into 5 bullet points","sourceText":"...","format":"bullet summary","length":"5 bullets"}'
  node {baseDir}/scripts/write.js --json '{"prompt":"Turn this meeting transcript into a concise executive summary","sourceText":"...","format":"executive summary"}' --dry-run
`;

await runScript(process.argv.slice(2), createWriteExecutor('summary'), HELP);
