import { lectures as allLectures } from '../data'
import '../styles/Sidebar.css'

function Sidebar({ lectures, selectedId, onSelectLecture }) {
  // Group by category if we're showing all lectures
  let groupedLectures = {}

  if (lectures.length === allLectures.length) {
    lectures.forEach(lecture => {
      if (!groupedLectures[lecture.category]) {
        groupedLectures[lecture.category] = []
      }
      groupedLectures[lecture.category].push(lecture)
    })
  } else {
    // When filtered, show all results flat
    groupedLectures['Search Results'] = lectures
  }

  return (
    <nav className="sidebar">
      {Object.entries(groupedLectures).map(([category, lectureGroup]) => (
        <div key={category} className="lecture-category">
          <h3 className="category-title">{category}</h3>
          <ul className="lecture-list">
            {lectureGroup
              .sort((a, b) => {
                if (a.number === null) return 1
                if (b.number === null) return -1
                return a.number - b.number
              })
              .map(lecture => (
                <li key={lecture.id}>
                  <button
                    className={`lecture-btn ${selectedId === lecture.id ? 'active' : ''}`}
                    onClick={() => onSelectLecture(lecture.id)}
                  >
                    <span className="lecture-number">
                      {lecture.number ? `Lec ${lecture.number}` : '📚'}
                    </span>
                    <span className="lecture-title">{lecture.title}</span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default Sidebar
