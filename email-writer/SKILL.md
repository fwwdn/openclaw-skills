---
name: email-writer
description: Create, generate, convert, and polish emails, follow-up emails, professional replies, outreach messages, internal updates, and business correspondence through the WeryAI chat completion API. Use when you need email drafting, generate a polite follow-up, convert rough notes into a send-ready email, transform a blunt draft into a clearer reply, or improve subject lines.
metadata: { "openclaw": { "emoji": "📧", "primaryEnv": "WERYAI_API_KEY", "paid": true, "network_required": true, "requires": { "env": ["WERYAI_API_KEY"], "bins": ["node"], "node": ">=18" } } }
---

# Email Writer

Write emails, follow-up emails, reply emails, outreach emails, and internal update emails that are concise, clear, and send-ready. This email writer covers email drafting, email rewriting, subject line help, polite follow-ups, outreach messages, and business correspondence. Use this skill when the user wants to draft, rewrite, or polish email-style writing for work or business communication.

## Prerequisites

- `WERYAI_API_KEY` must be set before calling the API.
- Node.js `>=18` is required because the runtime uses built-in `fetch`.
- Real runs use the WeryAI chat completion API and may consume credits.

## Example Prompts

- `Write a polite follow-up email after a sales demo.`
- `Turn these rough notes into a professional customer reply.`
- `Draft an internal update email explaining the launch delay.`
- `Rewrite this email so it sounds warmer but still concise.`

## Quick Summary

- Main jobs: `email drafting`, `follow-up email`, `reply email`, `outreach email`, `subject line help`, `rewrite rough email`
- Default model: `GPT_5_4`
- Main optional controls: `recipient`, `sender`, `purpose`, `subject`, `tone`, `language`, `cta`, `mustInclude`, `avoid`
- Main trust signals: dry-run support, model lookup, email-specific preset, direct send-ready output

## Workflow

1. Capture the goal of the email plus any context such as recipient, sender role, desired tone, and call to action.
2. If the user wants a specific email style such as outreach, follow-up, apology, or internal update, read [references/domain.md](references/domain.md) and match the closest pattern.
3. Ask only for the smallest missing detail needed to write a credible email.
4. Use `--dry-run` first when you want to inspect the final payload.
5. Run `node {baseDir}/scripts/write.js --json '...'` and return the final email draft directly.

## Commands

```sh
# List available chat models
node {baseDir}/scripts/models.js

# Write an email
node {baseDir}/scripts/write.js --json '{
  "prompt":"Write a polite follow-up email after a product demo",
  "recipient":"a prospective customer",
  "sender":"account executive",
  "purpose":"book the next meeting",
  "tone":"professional and warm"
}'

# Rewrite rough notes into an internal update email
node {baseDir}/scripts/write.js --json '{
  "prompt":"Turn these notes into an internal update email",
  "sourceText":"...",
  "recipient":"engineering team",
  "subject":"Launch timeline update"
}' --dry-run
```

## Definition of Done

- The final output reads like a send-ready email rather than a chat answer or memo.
- The message matches the requested tone, relationship, and purpose closely enough to send with minimal editing.
- If the user asked for a subject line, the draft includes one or makes it explicit.

## When Not to Use

- Do not use this for blog posts, articles, or social posts.
- Do not use this for broad brainstorming without a concrete email deliverable.
- Do not use this when the user explicitly wants a long-form essay or newsletter.

## Re-run Behavior

- Re-running `write.js` creates a fresh email draft and may consume additional credits.
- Re-running `write.js --dry-run` is safe and does not call the API.
- Re-running `models.js` is safe and only refreshes the available chat model list.

## Resources

- Email structure patterns and tone guidance: [references/domain.md](references/domain.md)
