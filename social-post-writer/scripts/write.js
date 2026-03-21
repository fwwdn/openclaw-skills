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
  node {baseDir}/scripts/write.js --json '{"prompt":"Write a Twitter thread about why small teams ship faster","format":"x thread","tone":"opinionated but useful","length":"8 posts"}'
  node {baseDir}/scripts/write.js --json '{"prompt":"Draft a Reddit post asking for feedback on my SaaS landing page","format":"reddit post","tone":"natural and honest"}' --dry-run
`;

await runScript(process.argv.slice(2), createWriteExecutor('social'), HELP);
