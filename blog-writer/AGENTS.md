# Blog Writer

Use this package when the user wants a blog-style post, tutorial, or publish-ready article rather than social copy or general chat.

Preferred entry points:

- `node {baseDir}/scripts/write.js`
- `node {baseDir}/scripts/models.js`

Route intents this way:

- blog post, tutorial post, thought piece -> `write.js`
- outline to blog post -> `write.js`
- rewrite a rough draft into a publishable article -> `write.js`
- headline or section improvement for a blog draft -> `write.js`
- model choice, model comparison, or pricing question -> `models.js` first

Delivery rules:

- Return the blog draft directly when it is ready.
- Keep the output in blog form instead of turning it into planning notes unless the user asks.
- Prefer `--dry-run` when validating payload shape without spending credits.

Read `SKILL.md` first for trigger language, defaults, workflow, and constraints.
Read `references/domain.md` when the user wants stronger blog structure, scannability, or publishability.
