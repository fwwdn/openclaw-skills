---
name: blog-writer
description: Create, generate, convert, and polish blog posts, tutorials, thought pieces, and publish-ready drafts through the WeryAI chat completion API. Use when you need blog drafting, outline-to-blog expansion, convert notes into a structured article, transform a rough draft into a publishable post, or generate clearer headlines and sections.
metadata: { "openclaw": { "emoji": "📝", "primaryEnv": "WERYAI_API_KEY", "paid": true, "network_required": true, "requires": { "env": ["WERYAI_API_KEY"], "bins": ["node"], "node": ">=18" } } }
---

# Blog Writer

Write blog posts, tutorials, and thought pieces that should be clear, scannable, and publishable. Use this skill when the user wants to draft, expand, rewrite, or polish a blog-style article.

## Prerequisites

- `WERYAI_API_KEY` must be set before calling the API.
- Node.js `>=18` is required because the runtime uses built-in `fetch`.
- Real runs use the WeryAI chat completion API and may consume credits.

## Example Prompts

- `Write a blog post about onboarding remote engineers at a startup.`
- `Turn this outline into a polished blog article with strong section headings.`
- `Rewrite this messy draft into a cleaner blog post for product managers.`
- `Draft a practical tutorial-style post in Chinese about avoiding scope creep.`

## Quick Summary

- Main jobs: `blog writing`, `tutorial drafting`, `thought leadership post`, `outline to blog`, `rewrite rough post`
- Default model: `GPT_5_4`
- Main optional controls: `audience`, `tone`, `language`, `length`, `keywords`, `title`, `cta`
- Main trust signals: dry-run support, model lookup, structured brief fields, readable blog-first output

## Workflow

1. Capture the topic, audience, tone, and any rough notes or source text.
2. If the user wants stronger publishability, read [references/domain.md](references/domain.md) and apply the matching blog pattern.
3. If keywords or a title angle are provided, treat them as guidance rather than stuffing instructions.
4. Use `--dry-run` first when you want to inspect the final payload.
5. Run `node {baseDir}/scripts/write.js --json '...'`.

## Commands

```sh
# List available chat models
node {baseDir}/scripts/models.js

# Write a blog post
node {baseDir}/scripts/write.js --json '{
  "prompt":"Write a blog post about why product teams need better release notes",
  "audience":"B2B SaaS teams",
  "tone":"useful and confident",
  "length":"1200 words",
  "keywords":["release notes","product communication"]
}'

# Rewrite a rough draft into a cleaner post
node {baseDir}/scripts/write.js --json '{
  "prompt":"Rewrite this draft into a cleaner blog article",
  "sourceText":"...",
  "title":"How to keep release notes useful"
}' --dry-run
```

## Definition of Done

- The final output reads like a blog post rather than a chat answer.
- The structure is easy to scan with a clear opening, body, and ending.
- The draft matches the requested language, audience, and tone closely enough to edit or publish.

## When Not to Use

- Do not use this for thread-style or community-style social posts; use `social-post-writer` instead.
- Do not use this when the user explicitly wants a longer essay, narrative, or newsletter-style piece; use `longform-writer` instead.
- Do not use this for purely conversational Q&A with no blog deliverable.

## Re-run Behavior

- Re-running `write.js` creates a fresh blog draft and may consume additional credits.
- Re-running `write.js --dry-run` is safe and does not call the API.
- Re-running `models.js` is safe and only refreshes the available chat model list.

## Resources

- Blog structure and style rules: [references/domain.md](references/domain.md)
