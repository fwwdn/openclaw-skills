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
  node {baseDir}/scripts/write.js --json '{"prompt":"Write a blog post about onboarding remote engineers","audience":"startup founders","tone":"clear and practical","length":"1200 words"}'
  node {baseDir}/scripts/write.js --json '{"prompt":"Rewrite this draft into a cleaner blog article","sourceText":"...","keywords":["remote onboarding","engineering management"]}' --dry-run
`;

await runScript(process.argv.slice(2), createWriteExecutor('blog'), HELP);
