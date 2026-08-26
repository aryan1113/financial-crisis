# Financial Crisis Course - Interactive Learning Platform
For course materials and role-play simulation prep, for the course Financial Crisis by Mridul Saggar.

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

## Project Structure

```
.
├── src/                       # React app source code
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Main app component
│   ├── data.js               # Lecture and navigation data
│   ├── components/           # React components
│   │   ├── Sidebar.jsx       # Lecture navigation
│   │   ├── ContentViewer.jsx # Markdown renderer
│   │   ├── SearchBar.jsx     # Search functionality
│   │   └── Footer.jsx        # Footer with attribution
│   └── styles/               # CSS styles
│
├── public/                    # Deployed to webapp
│   ├── cheat_sheet.md        # Quick reference guide
│   ├── prep_guide.md         # Study plan & simulation strategy
│   └── lecture_summary/      # Cleaned lecture summaries (displayed to users)
│
├── _internal/                # Development reference only (not committed)
│   ├── lectures/             # Original PDF files
│   └── lecture_markdown/     # Intermediate markdown conversions
│
├── README.md                 # This file
├── DEVELOPER.md              # For maintainers & developers
└── package.json              # Dependencies
```

**Note:** `_internal/`, PDFs, and development scripts are not committed to git. See `DEVELOPER.md` for details.

## Lecture Content

Organized into categories:

- **Foundations**: Core concepts (Intro, Monetary Policy, Aggregates, Wars, IMF/World Bank, Financial Markets)
- **Historical Cases**: Major crises (Asian Crisis, GFC, Euro Crisis, Argentina, etc.)
- **Policy & Analysis**: Crisis communication, early warning indicators, technical topics

## For Students: Using This Platform

### Preparing for the Role-Play Simulation

1. **Start with the Prep Guide** (button in header): outlines which lectures to prioritize based on time
2. **Read Tier 1 lectures**: covers any crisis type (Monetary Policy, IMF, Early Warning Indicators, etc.)
3. **Pick one Tier 2 lecture**: based on your guess about the scenario (Argentina, Taper Tantrum, Asian Crisis, etc.)
4. **Reference the Cheat Sheet** right before the simulation: quick lookup for crisis types, IMF facilities, and killer questions

## For Developers: Maintaining This Project

See **`DEVELOPER.md`** for:
- How to update/regenerate lecture summaries
- How to rebuild and deploy
- Project directory structure and what gets committed

To add or modify lectures:

1. Clean and format the lecture summary
2. Save to `public/lecture_summary/`
3. Update `src/data.js` with metadata
4. Rebuild and deploy with `npm run deploy`

## Build info

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Marked** - Markdown parser
- **GitHub Pages** - Hosting
