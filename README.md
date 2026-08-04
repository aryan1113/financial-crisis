# Financial Crisis Course - Interactive Learning Platform

A clean, intuitive web application for learning financial crisis theory and case studies. Built with React and designed for ease of navigation through course materials.

## Features

- 📚 **16 Lecture Summaries** organized by category (Foundations, Historical Cases, Recent Events, etc.)
- 📋 **Quick Reference Cheat Sheet** for crisis simulation scenarios
- 🔍 **Search & Filter** across all lecture materials
- 🌓 **Dark/Light Mode** support (follows system preference)
- 📱 **Responsive Design** for desktop and tablet viewing
- 📖 **Beautiful Markdown Rendering** with syntax highlighting

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
├── index.html              # Entry point
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx            # Main app component
│   ├── data.js            # Lecture and navigation data
│   ├── components/        # React components
│   │   ├── Sidebar.jsx    # Lecture navigation
│   │   ├── ContentViewer.jsx # Markdown renderer
│   │   └── SearchBar.jsx  # Search functionality
│   └── styles/            # CSS modules
│       ├── App.css
│       ├── Sidebar.css
│       ├── SearchBar.css
│       └── ContentViewer.css
└── lecture_summary/       # Course materials (markdown files)
    ├── Lec-01-*.md
    ├── Lec-02-*.md
    └── ... (all lectures)
```

## Lecture Content

Lectures are organized into categories:

- **Foundations**: Core concepts (Intro, Monetary Policy, Aggregates, Wars, IMF/World Bank, Financial Markets)
- **Historical Cases**: Major crises (Asian Crisis, GFC, Euro Crisis, Argentina, etc.)
- **Policy & Analysis**: Crisis communication, early warning indicators, technical topics

## Customization

To add new lectures or modify the navigation:

1. Add the markdown file to `lecture_summary/`
2. Update `src/data.js` with the lecture metadata
3. The app will automatically include it in the sidebar

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Marked** - Markdown parser
- **Lucide React** - Icons

## License

This project contains course materials and is for educational purposes.
