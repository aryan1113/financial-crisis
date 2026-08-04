import { useState, useEffect } from 'react'
import { marked } from 'marked'
import { lectures, cheatSheet, prepGuide } from '../data'
import '../styles/ContentViewer.css'

function ContentViewer({ selectedId, isCheatSheet, isPrepGuide }) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true)
      try {
        let file
        if (isCheatSheet) {
          file = cheatSheet.file
        } else if (isPrepGuide) {
          file = prepGuide.file
        } else {
          file = lectures.find(l => l.id === selectedId)?.file
        }

        if (!file) {
          setContent('<p>Content not found</p>')
          setLoading(false)
          return
        }

        const response = await fetch(`./${file}`)
        const text = await response.text()

        const html = marked(text)
        setContent(html)
      } catch (error) {
        console.error('Error loading content:', error)
        setContent('<p>Error loading content</p>')
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [selectedId, isCheatSheet, isPrepGuide])

  const getLectureTitle = () => {
    if (isCheatSheet) return cheatSheet.title
    if (isPrepGuide) return prepGuide.title
    return lectures.find(l => l.id === selectedId)?.title || 'Select a lecture'
  }

  return (
    <div className="content-viewer">
      <div className="content-header">
        <h2>{getLectureTitle()}</h2>
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="markdown-content" dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  )
}

export default ContentViewer
