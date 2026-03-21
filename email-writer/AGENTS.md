# Email Writer

Use this package when the user wants a send-ready email draft rather than a blog post, social post, or general chat reply.

Preferred entry points:

- `node {baseDir}/scripts/write.js`
- `node {baseDir}/scripts/models.js`

Route intents this way:

- follow-up email, reply email, outreach email -> `write.js`
- internal update, customer reply, apology email -> `write.js`
- rewrite rough notes into a clear email -> `write.js`
- subject line or tone adjustment for an email -> `write.js`
- model choice, model comparison, or pricing question -> `models.js` first

Delivery rules:

- Return the final email draft directly when it is ready.
- Include the subject line when the user asks for one or when the prompt clearly implies it.
- Prefer `--dry-run` when validating payload shape without spending credits.

Read `SKILL.md` first for trigger language, defaults, workflow, and constraints.
Read `references/domain.md` when the user wants a specific email shape such as follow-up, outreach, reply, or internal update.
