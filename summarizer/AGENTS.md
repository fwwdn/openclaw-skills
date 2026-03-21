# Summarizer

Use this package when the user wants a shorter, higher-signal version of source material rather than a rewrite of similar length.

Preferred entry points:

- `node {baseDir}/scripts/write.js`
- `node {baseDir}/scripts/models.js`

Route intents this way:

- summarize article, summarize transcript, executive summary -> `write.js`
- abstract, digest, key-point bullets -> `write.js`
- compress long material into a shorter format -> `write.js`
- model choice, model comparison, or pricing question -> `models.js` first

Delivery rules:

- Return the final summary directly when it is ready.
- Keep the requested summary shape such as bullets, paragraph, or executive summary.
- Prefer `--dry-run` when validating payload shape without spending credits.

Read `SKILL.md` first for trigger language, defaults, workflow, and constraints.
Read `references/domain.md` when the user wants a specific summary format.
