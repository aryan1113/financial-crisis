# Internal Reference Files

This directory contains files used in development and maintenance but **not committed to the public repository**.

## Contents

- **lectures/** — Original PDF files from Prof. Saggar's course
- **lecture_markdown/** — Intermediate markdown conversions of the PDFs

## Why These Aren't Committed

1. **PDFs are large** — not necessary for the webapp (users can access original slides)
2. **Markdown conversions are generated** — they can be recreated from PDFs if needed
3. **Public deployment uses only `lecture_summary/`** — which are cleaned, formatted versions

## Workflow

When updating lecture materials:

```
PDF slides → convert to markdown → clean & format → save to public/lecture_summary/
```

Only the final cleaned summaries go into version control and are deployed.

---

See `DEVELOPER.md` for full development documentation.
