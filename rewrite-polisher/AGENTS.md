# Rewrite Polisher

Use this package when the user wants to improve existing text rather than summarize it, translate it, or draft a new piece from scratch.

Preferred entry points:

- `node {baseDir}/scripts/write.js`
- `node {baseDir}/scripts/models.js`

Route intents this way:

- rewrite text, polish copy, improve clarity -> `write.js`
- adjust tone, tighten wording, improve readability -> `write.js`
- preserve meaning while making the text cleaner -> `write.js`
- model choice, model comparison, or pricing question -> `models.js` first

Delivery rules:

- Return the rewritten text directly when it is ready.
- Preserve the source meaning unless the user explicitly asks for a stronger transformation.
- Prefer `--dry-run` when validating payload shape without spending credits.

Read `SKILL.md` first for trigger language, defaults, workflow, and constraints.
Read `references/domain.md` when the user wants a specific rewrite style such as concise, professional, or natural.
