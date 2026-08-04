function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About This Project</h4>
          <p>
            Learning platform for Prof. Mridul Saggar's <strong>"Financial Crises"</strong> course (PGP-level, IIM Kozhikode).
            This is a student-created resource for organizing course materials and preparing for the role-play simulation.
          </p>
        </div>

        <div className="footer-section">
          <h4>For Developers</h4>
          <p>
            See <a href="https://github.com/aryan1113/financial-crisis/blob/main/DEVELOPER.md" target="_blank" rel="noopener noreferrer">
              DEVELOPER.md
            </a> for maintenance notes and project structure.
          </p>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer">RBI Official Site</a></li>
            <li><a href="https://www.imf.org" target="_blank" rel="noopener noreferrer">IMF Official Site</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Course materials by Prof. Mridul Saggar. Platform by students.</p>
      </div>
    </footer>
  )
}

export default Footer
