---
name: social-post-writer
description: Create, generate, convert, and polish social posts, X or Twitter threads, Reddit posts, launch announcements, and short community updates through the WeryAI chat completion API. Use when you need platform-native short-form writing, generate a concise thread, convert a brief into hook-led posts, transform rough copy into Reddit-friendly wording, or draft launch updates.
metadata: { "openclaw": { "emoji": "📣", "primaryEnv": "WERYAI_API_KEY", "paid": true, "network_required": true, "requires": { "env": ["WERYAI_API_KEY"], "bins": ["node"], "node": ">=18" } } }
---

# Social Post Writer

Write social posts, X threads, Twitter threads, Reddit posts, and short launch updates that should feel native to the target platform. Use this skill when the user wants to draft, rewrite, or polish concise platform-specific posts.

## Prerequisites

- `WERYAI_API_KEY` must be set before calling the API.
- Node.js `>=18` is required because the runtime uses built-in `fetch`.
- Real runs use the WeryAI chat completion API and may consume credits.

## Example Prompts

- `Write a Twitter thread about why small teams ship faster.`
- `Draft a Reddit post asking for feedback on my SaaS landing page.`
- `Turn this launch brief into a short product announcement post.`
- `Rewrite this post so it sounds more natural for Reddit, not marketing-y.`

## Quick Summary

- Main jobs: `x thread`, `twitter thread`, `reddit post`, `launch post`, `social rewrite`, `short community update`
- Default model: `GPT_5_4`
- Main optional controls: `format`, `tone`, `audience`, `language`, `length`, `cta`, `mustInclude`, `avoid`
- Main trust signals: dry-run support, model lookup, platform-aware preset, direct post-ready output

## Workflow

1. Capture the core brief plus the target platform or format when known.
2. If the user cares about platform feel, read [references/domain.md](references/domain.md) and match the closest output shape.
3. Ask only for the smallest missing detail, such as whether this should be an X thread, a single post, or a Reddit-style post.
4. Use `--dry-run` first when you want to inspect the final payload.
5. Run `node {baseDir}/scripts/write.js --json '...'` and return the final post text directly.

## Commands

```sh
# List available chat models
node {baseDir}/scripts/models.js

# Write a thread or post
node {baseDir}/scripts/write.js --json '{
  "prompt":"Write a Twitter thread about why small teams ship faster",
  "format":"x thread",
  "tone":"sharp and useful",
  "length":"8 posts"
}'

# Draft a Reddit-style post
node {baseDir}/scripts/write.js --json '{
  "prompt":"Draft a Reddit post asking for feedback on my landing page",
  "format":"reddit post",
  "tone":"honest and specific"
}' --dry-run
```

## Definition of Done

- The final output is post-ready copy rather than analysis or planning notes.
- The wording feels close to the requested platform and tone.
- If the user asked for a thread, the output is clearly segmented into thread posts or numbered parts.

## When Not to Use

- Do not use this for multi-section long-form pieces; use `longform-writer` instead.
- Do not use this for blog-style tutorials or publish-ready articles; use `blog-writer` instead.
- Do not use this for general chat or brainstorming without a concrete post deliverable.

## Re-run Behavior

- Re-running `write.js` creates a fresh post or thread draft and may consume additional credits.
- Re-running `write.js --dry-run` is safe and does not call the API.
- Re-running `models.js` is safe and only refreshes the available chat model list.

## Resources

- Social platform writing rules: [references/domain.md](references/domain.md)
