---
name: copy-translator
description: Create, generate, convert, and polish translated copy, localized copy, marketing translation, UI copy translation, and business text translation through the WeryAI chat completion API. Use when you need translate copy, localize wording, convert text between languages, preserve tone across languages, or adapt source copy for a new language and audience.
metadata: { "openclaw": { "emoji": "🌐", "primaryEnv": "WERYAI_API_KEY", "paid": true, "network_required": true, "requires": { "env": ["WERYAI_API_KEY"], "bins": ["node"], "node": ">=18" } } }
---

# Copy Translator

Translate and localize copy while preserving meaning, tone, and audience fit. Use this skill when the user wants to translate copy, localize UI or marketing text, or adapt wording naturally for another language.

## Prerequisites

- `WERYAI_API_KEY` must be set before calling the API.
- Node.js `>=18` is required because the runtime uses built-in `fetch`.
- Real runs use the WeryAI chat completion API and may consume credits.

## Example Prompts

- `Translate this product copy into English and keep it natural.`
- `Localize this landing page copy from English to Japanese.`
- `Translate this UI copy into Chinese without sounding machine-translated.`
- `Turn this rough Chinese promo copy into natural English marketing copy.`

## Quick Summary

- Main jobs: `copy translation`, `text localization`, `marketing translation`, `ui copy translation`, `tone-preserving translation`
- Default model: `GPT_5_4`
- Main optional controls: `sourceLanguage`, `targetLanguage`, `tone`, `audience`, `format`, `mustInclude`, `avoid`
- Main trust signals: dry-run support, model lookup, translation-specific preset, direct translated output

## Workflow

1. Capture the source text plus the source and target language when known.
2. If the user wants localization rather than literal translation, read [references/domain.md](references/domain.md) and apply the closest localization pattern.
3. Ask only for the smallest missing detail needed to produce a good translation.
4. Use `--dry-run` first when you want to inspect the final payload.
5. Run `node {baseDir}/scripts/write.js --json '...'` and return the translated copy directly.

## Commands

```sh
# List available chat models
node {baseDir}/scripts/models.js

# Translate copy
node {baseDir}/scripts/write.js --json '{
  "prompt":"Translate this product copy into English and keep it natural",
  "sourceText":"...",
  "sourceLanguage":"zh",
  "targetLanguage":"en",
  "tone":"natural marketing copy"
}'

# Preview a localization request without calling the API
node {baseDir}/scripts/write.js --json '{
  "prompt":"Localize this landing page copy from English to Japanese",
  "sourceText":"...",
  "sourceLanguage":"en",
  "targetLanguage":"ja"
}' --dry-run
```

## Definition of Done

- The translated output preserves the core meaning and tone closely enough to use as a draft.
- The wording reads naturally in the target language rather than like literal machine translation.
- If the user asked for localization, the phrasing is adapted for the target audience.

## When Not to Use

- Do not use this for summarization without translation.
- Do not use this for broad rewriting within the same language; use `rewrite-polisher` instead.
- Do not use this for long-form article drafting from scratch.

## Re-run Behavior

- Re-running `write.js` creates a fresh translation or localization response and may consume additional credits.
- Re-running `write.js --dry-run` is safe and does not call the API.
- Re-running `models.js` is safe and only refreshes the available chat model list.

## Resources

- Translation and localization guidance: [references/domain.md](references/domain.md)
