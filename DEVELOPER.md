# Developer & Maintainer Guide

This document is for project maintainers and developers working on the Financial Crisis learning platform.

## Project Structure

```
financial-crisis/
├── public/
│   ├── cheat_sheet.md              # Quick reference for simulation prep
│   ├── prep_guide.md               # Comprehensive study guide for students
│   └── lecture_summary/            # Cleaned lecture summaries (displayed in webapp)
├── src/                            # React app source code
│   ├── App.jsx
│   ├── components/
│   ├── styles/
│   └── data.js
├── _internal/                      # Local reference only (gitignored)
│   ├── lectures/                   # Original PDF files
│   └── lecture_markdown/           # Intermediate markdown conversions
├── plan.txt                        # Personal study notes (not public, gitignored)
├── README.md                       # Public-facing project description
└── DEVELOPER.md                    # This file
```

## What Gets Deployed vs. Internal

### ✅ Deployed to Webapp
- `public/lecture_summary/` — cleaned, formatted lecture summaries
- `public/cheat_sheet.md` — quick reference guide
- `public/prep_guide.md` — study plan and simulation strategy

### ❌ Not Deployed (Local Reference Only)
- `_internal/lectures/` — original PDF slides (for reference)
- `_internal/lecture_markdown/` — raw markdown conversions (intermediate step)
- `plan.txt` — personal study assessment notes

## Working with Lecture Materials

### If you need to regenerate lecture summaries:

1. Place original PDF files in `_internal/lectures/` (not committed to git)
2. Convert PDFs to markdown using the conversion script:
   ```bash
   python3 convert_pdf_to_md.py
   ```
3. Clean up and format the output, save to `public/lecture_summary/`
4. Update `src/data.js` if lecture structure changes
5. Commit only the cleaned summaries in `public/lecture_summary/`

### Building & Deploying

```bash
# Development
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Personal Study Notes

`plan.txt` contains the data scientist's personal assessment of:
- Course difficulty level for someone with a non-finance background
- Which lectures have foundational gaps
- Recommended prerequisite reading

This is intentionally **not shared with students** — it's analysis for the maintainer to understand the course prerequisites and depth. Students should follow the `prep_guide.md` instead.

## Footer Attribution

The webapp includes a footer note clarifying:
- This is Prof. Mridul Saggar's "Financial Crises" course material (PGP-level, IIM Kozhikode)
- The learning platform is a student-created resource for organizing these materials
- Students should refer to official course documents for authoritative content

## Future Enhancements

- [ ] Add interactive case-study timeline
- [ ] Add quiz/self-assessment section
- [ ] Link to actual RBI/IMF policy documents
- [ ] Add video clips from lectures (if available)

---

**For public documentation, see `README.md`**
