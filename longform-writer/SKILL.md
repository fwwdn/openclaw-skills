---
name: longform-writer
description: Create, generate, convert, and polish long-form articles, essays, explainers, newsletters, and prose drafts through the WeryAI chat completion API. Use when you need long-form writing, article drafting, convert notes into a full piece, transform source material into a coherent multi-section document, or shape rough ideas into polished prose.
metadata: { "openclaw": { "emoji": "✍️", "primaryEnv": "WERYAI_API_KEY", "paid": true, "network_required": true, "requires": { "env": ["WERYAI_API_KEY"], "bins": ["node"], "node": ">=18" } } }
---

# Longform Writer

Write long-form articles, essays, newsletters, and explainers that should read like finished pieces rather than chat replies. Use this skill when the user wants to draft, expand, rewrite, or polish a multi-section document.

## Prerequisites

- `WERYAI_API_KEY` must be set before calling the API.
- Node.js `>=18` is required because the runtime uses built-in `fetch`.
- Real runs use the WeryAI chat completion API and may consume credits.

## Example Prompts

- `Write a 1500-word article about why remote teams need written culture.`
- `Turn these rough notes into a polished long-form essay in Chinese.`
- `Expand this outline into a newsletter draft with a strong opening and close.`
- `Rewrite this draft into a clearer feature article for startup founders.`

## Quick Summary

- Main jobs: `long-form writing`, `article drafting`, `essay writing`, `newsletter drafting`, `rewrite into a full piece`
- Default model: `GPT_5_4`
- Main optional controls: `audience`, `tone`, `language`, `length`, `format`, `keywords`, `mustInclude`, `avoid`
- Main trust signals: dry-run support, model lookup, structured brief fields, direct text output

## Workflow

1. Capture the core writing request plus any optional constraints such as audience, tone, target length, or source material.
2. If the user wants a specific long-form shape, read [references/domain.md](references/domain.md) and match the closest structure.
3. Use `--dry-run` first if you want to preview the final API payload without spending credits.
4. Run `node {baseDir}/scripts/write.js --json '...'`.
5. Return the final text directly instead of summarizing it unless the user asked for commentary.

## Commands

```sh
# List available chat models
node {baseDir}/scripts/models.js

# Write a long-form piece
node {baseDir}/scripts/write.js --json '{
  "prompt":"Write a 1500-word article about remote-first onboarding",
  "audience":"startup founders",
  "tone":"clear and practical",
  "length":"1500 words"
}'

# Preview the request body without calling the API
node {baseDir}/scripts/write.js --json '{
  "prompt":"Turn these notes into a narrative essay",
  "sourceText":"...",
  "language":"zh"
}' --dry-run
```

## Definition of Done

- The final output is a finished long-form draft, not a bullet summary or outline unless the user asked for one.
- The response matches the requested language, tone, and length closely enough to be usable as a draft.
- If `--dry-run` was used, the payload is valid and ready for a real submission.

## When Not to Use

- Do not use this for short social copy such as X threads or Reddit posts; use `social-post-writer` instead.
- Do not use this for blog-specific publishability or SEO shaping when `blog-writer` is the better fit.
- Do not use this for general back-and-forth chat when the user is not asking for a finished written deliverable.

## Re-run Behavior

- Re-running `write.js` creates a fresh writing response and may consume additional credits.
- Re-running `write.js --dry-run` is safe and does not call the API.
- Re-running `models.js` is safe and only refreshes the available chat model list.

## Resources

- Long-form structure patterns: [references/domain.md](references/domain.md)
