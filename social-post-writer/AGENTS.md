# Social Post Writer

Use this package when the user wants short-form, platform-native writing such as X threads, Twitter posts, Reddit posts, launch posts, or concise community updates.

Preferred entry points:

- `node {baseDir}/scripts/write.js`
- `node {baseDir}/scripts/models.js`

Route intents this way:

- X thread, Twitter thread, launch post -> `write.js`
- Reddit post, community post, short social rewrite -> `write.js`
- convert a brief into short hook-led posts -> `write.js`
- model choice, model comparison, or pricing question -> `models.js` first

Delivery rules:

- Return the final post or thread text directly when it is ready.
- If the user asked for a thread, keep it segmented as a thread rather than collapsing it into one paragraph.
- Prefer `--dry-run` when validating payload shape without spending credits.

Read `SKILL.md` first for trigger language, defaults, workflow, and constraints.
Read `references/domain.md` when the user wants the output shaped more specifically for X, Twitter, Reddit, or another social format.
