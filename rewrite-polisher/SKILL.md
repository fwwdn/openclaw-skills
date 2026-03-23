---
name: rewrite-polisher
description: "Create, generate, convert, and polish rewrites, refined drafts, edited copy, tone-adjusted text, readability improvements, and clarity-focused revisions as a prompt-driven OpenClaw skill. Use when you need rewrite text, polish copy, improve clarity, adjust tone, tighten wording, or turn rough writing into a cleaner more readable version."
metadata: { "openclaw": { "emoji": "✨" } }
---

# Rewrite Polisher

Rewrite text, polish copy, improve clarity, adjust tone, tighten wording, and smooth readability while preserving the original meaning unless the user asks for a stronger transformation. Use this skill when the user says things like: rewrite this paragraph, polish this draft, make this copy clearer, improve the tone, tighten the wording, or make this writing more professional and readable. This rewrite and polish skill is for turning rough writing, messy drafts, product copy, announcements, and business text into a cleaner, clearer, more polished version without changing the deliverable type.

Common jobs: `rewrite text`, `polish copy`, `improve clarity`, `adjust tone`, and `tighten wording` for paragraphs, emails, product copy, announcements, business writing, and rough drafts.

## Prerequisites

- This skill is prompt-driven and does not require a WeryAI API key for its default OpenClaw use.

## Example Prompts

- `Rewrite this paragraph so it sounds more professional.`
- `Polish this draft without changing the core meaning.`
- `Make this product copy clearer and less repetitive.`
- `Tighten this announcement into a cleaner version in Chinese.`

## Quick Summary

- Main jobs: `rewrite text`, `polish copy`, `improve clarity`, `tone adjustment`, `readability improvement`, `tighten wording`
- Default model: `GEMINI_3_1_PRO`
- Main optional controls: `sourceText`, `tone`, `audience`, `format`, `language`, `mustInclude`, `avoid`
- Main trust signals: dry-run support, model lookup, rewrite-specific preset, direct polished output

## Workflow

1. Capture the source text plus the target tone, audience, or style adjustment if provided.
2. If the user wants a specific rewrite style such as more concise, more professional, or more natural, read [references/domain.md](references/domain.md) and apply the closest pattern.
3. Ask only for the smallest missing detail needed to rewrite well.
4. Use `--dry-run` first when you want to inspect the final payload.
5. Run `node {baseDir}/scripts/write.js --json '...'` and return the rewritten text directly.

## Commands

```sh
# Rewrite or polish text
node {baseDir}/scripts/write.js --json '{
  "prompt":"Polish this draft without changing the core meaning",
  "sourceText":"...",
  "tone":"professional and concise"
}'

# Preview a rewrite request without calling the API
node {baseDir}/scripts/write.js --json '{
  "prompt":"Make this product copy clearer and less repetitive",
  "sourceText":"...",
  "audience":"busy professionals"
}' --dry-run
```

## Definition of Done

- The rewritten output is clearer, smoother, or better matched to the requested tone than the source.
- The original meaning is preserved unless the user explicitly asked for a stronger transformation.
- The result reads like polished text rather than editorial notes.

## When Not to Use

- Do not use this for translation into another language; use `copy-translator` instead.
- Do not use this for summarization or compression; use `summarizer` instead.
- Do not use this for drafting a brand-new long-form piece from scratch.

## Re-run Behavior

- Re-running `write.js` creates a fresh rewrite response and may consume additional credits.
- Re-running `write.js --dry-run` is safe and does not call the API.
- Re-running `models.js` is safe and only refreshes the available chat model list.

## Resources

- Rewrite and editing patterns: [references/domain.md](references/domain.md)
