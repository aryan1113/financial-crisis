import { Search, X } from 'lucide-react'
import '../styles/SearchBar.css'

function SearchBar({ query, onChange, resultCount }) {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search lectures..."
          value={query}
          onChange={(e) => onChange(e.target.value)}
        />
        {query && (
          <button
            className="clear-btn"
            onClick={() => onChange('')}
            title="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>
      {query && (
        <div className="search-results-info">
          {resultCount} result{resultCount !== 1 ? 's' : ''} found
        </div>
      )}
    </div>
  )
}

export default SearchBar
