import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ContentViewer from './components/ContentViewer'
import SearchBar from './components/SearchBar'
import { lectures, cheatSheet } from './data'
import './styles/App.css'

function App() {
  const [selectedLecture, setSelectedLecture] = useState(lectures[0].id)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredLectures, setFilteredLectures] = useState(lectures)

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredLectures(lectures)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = lectures.filter(
        lecture =>
          lecture.title.toLowerCase().includes(query) ||
          lecture.category.toLowerCase().includes(query)
      )
      setFilteredLectures(filtered)

      // Auto-select first result if current selection not in filtered
      if (filtered.length > 0 && !filtered.some(l => l.id === selectedLecture)) {
        setSelectedLecture(filtered[0].id)
      }
    }
  }, [searchQuery, selectedLecture])

  const handleSelectCheatSheet = () => {
    setSelectedLecture('cheat-sheet')
    setSearchQuery('')
  }

  const isCheatSheetSelected = selectedLecture === 'cheat-sheet'

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Financial Crisis Course</h1>
          <button
            className={`cheat-sheet-btn ${isCheatSheetSelected ? 'active' : ''}`}
            onClick={handleSelectCheatSheet}
            title="Quick reference guide"
          >
            📋 Cheat Sheet
          </button>
        </div>
      </header>

      <div className="app-container">
        <aside className="app-sidebar">
          <SearchBar
            query={searchQuery}
            onChange={setSearchQuery}
            resultCount={filteredLectures.length}
          />
          <Sidebar
            lectures={filteredLectures}
            selectedId={selectedLecture}
            onSelectLecture={setSelectedLecture}
          />
        </aside>

        <main className="app-content">
          <ContentViewer
            selectedId={selectedLecture}
            isCheatSheet={isCheatSheetSelected}
          />
        </main>
      </div>
    </div>
  )
}

export default App
