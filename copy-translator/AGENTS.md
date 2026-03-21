# Copy Translator

Use this package when the user wants translated or localized copy rather than a same-language rewrite or a brand-new draft.

Preferred entry points:

- `node {baseDir}/scripts/write.js`
- `node {baseDir}/scripts/models.js`

Route intents this way:

- translate copy, localize copy, adapt wording for another language -> `write.js`
- ui copy translation, marketing translation, landing page localization -> `write.js`
- model choice, model comparison, or pricing question -> `models.js` first

Delivery rules:

- Return the translated or localized copy directly when it is ready.
- Preserve the requested tone and audience fit when the user asks for localization.
- Prefer `--dry-run` when validating payload shape without spending credits.

Read `SKILL.md` first for trigger language, defaults, workflow, and constraints.
Read `references/domain.md` when the user wants stronger localization guidance rather than literal translation.
