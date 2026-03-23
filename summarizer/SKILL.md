---
name: summarizer
description: "Create, generate, convert, and polish summaries, abstracts, key-point digests, executive summaries, meeting summaries, and article summaries as a prompt-driven OpenClaw skill. Use when you need summarize text, compress long material, extract key points, turn notes into a concise digest, or produce a shorter high-signal version of source content."
metadata: { "openclaw": { "emoji": "🧾" } }
---

# Summarizer

Write summaries, executive summaries, meeting summaries, article summaries, digests, and abstracts from longer source material. This summary skill is for summarize text, compress a long document, extract key points, and turn long notes into a shorter high-signal digest or abstract.

## Prerequisites

- This skill is prompt-driven and does not require a WeryAI API key for its default OpenClaw use.

## Example Prompts

- `Summarize this article into 5 bullet points.`
- `Turn this meeting transcript into a concise executive summary.`
- `Write a short abstract for this long research note.`
- `Compress this draft into a one-paragraph summary in Chinese.`

## Quick Summary

- Main jobs: `summary writing`, `abstract`, `key point digest`, `executive summary`, `meeting summary`, `article summary`
- Default model: `GEMINI_3_1_PRO`
- Main optional controls: `sourceText`, `length`, `format`, `language`, `audience`, `mustInclude`, `avoid`
- Main trust signals: dry-run support, model lookup, summary-specific preset, direct compressed output

## Workflow

1. Capture the source material plus the desired summary format such as bullets, paragraph, digest, or abstract.
2. If the user wants a specific summary shape such as executive summary or meeting digest, read [references/domain.md](references/domain.md) and match the closest pattern.
3. Ask only for the smallest missing detail needed to summarize well.
4. Use `--dry-run` first when you want to inspect the final payload.
5. Run `node {baseDir}/scripts/write.js --json '...'` and return the summary directly.

## Commands

```sh
# Summarize source text
node {baseDir}/scripts/write.js --json '{
  "prompt":"Summarize this article into 5 bullet points",
  "sourceText":"...",
  "format":"bullet summary",
  "length":"5 bullets"
}'

# Preview an executive summary request without calling the API
node {baseDir}/scripts/write.js --json '{
  "prompt":"Turn this meeting transcript into a concise executive summary",
  "sourceText":"...",
  "format":"executive summary"
}' --dry-run
```

## Definition of Done

- The summary preserves the main meaning and key points of the source material.
- The output is clearly shorter and easier to scan than the source.
- The format matches the requested summary shape closely enough to use as a draft.

## When Not to Use

- Do not use this for translation without summarization; use `copy-translator` instead.
- Do not use this for same-length rewriting or polishing; use `rewrite-polisher` instead.
- Do not use this for drafting full articles from scratch.

## Re-run Behavior

- Re-running `write.js` creates a fresh summary response and may consume additional credits.
- Re-running `write.js --dry-run` is safe and does not call the API.
- Re-running `models.js` is safe and only refreshes the available chat model list.

## Resources

- Summary patterns and compression guidance: [references/domain.md](references/domain.md)
