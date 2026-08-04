import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ContentViewer from './components/ContentViewer'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { lectures, cheatSheet, prepGuide } from './data'
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

  const handleSelectPrepGuide = () => {
    setSelectedLecture('prep-guide')
    setSearchQuery('')
  }

  const isCheatSheetSelected = selectedLecture === 'cheat-sheet'
  const isPrepGuideSelected = selectedLecture === 'prep-guide'
  const isSpecialContent = isCheatSheetSelected || isPrepGuideSelected

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Financial Crisis Course</h1>
          <div className="header-buttons">
            <button
              className={`special-btn ${isPrepGuideSelected ? 'active' : ''}`}
              onClick={handleSelectPrepGuide}
              title="Study plan and simulation strategy"
            >
              🎯 Prep Guide
            </button>
            <button
              className={`special-btn ${isCheatSheetSelected ? 'active' : ''}`}
              onClick={handleSelectCheatSheet}
              title="Quick reference guide"
            >
              📋 Cheat Sheet
            </button>
          </div>
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
            isPrepGuide={isPrepGuideSelected}
          />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
