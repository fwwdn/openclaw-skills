# Longform Writer

Use this package when the user wants a finished long-form written deliverable rather than general chat.

Preferred entry points:

- `node {baseDir}/scripts/write.js`
- `node {baseDir}/scripts/models.js`

Route intents this way:

- article, essay, explainer, newsletter, feature draft -> `write.js`
- rewrite notes into a full piece -> `write.js`
- expand a rough outline into multi-section prose -> `write.js`
- model choice, model comparison, or pricing question -> `models.js` first

Delivery rules:

- Return the final draft text directly when it is ready.
- Do not summarize the draft instead of giving it unless the user explicitly asks for a summary.
- Prefer `--dry-run` when validating payload shape without spending credits.

Read `SKILL.md` first for trigger language, defaults, workflow, and constraints.
Read `references/domain.md` when the user wants a specific long-form structure such as essay, article, explainer, or newsletter.
