import './Skills.css'

function Skills() {
  const programmingLanguages = [
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'HTML', level: 'Intermediate' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' }
  ]

  const tools = [
    { name: 'React.js', category: 'Framework' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Vite', category: 'Build Tool' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'VS Code', category: 'Editor' },
    { name: 'MySQL', category: 'Database' },
    { name: 'REST APIs', category: 'Architecture' },
    { name: 'Responsive Design', category: 'CSS' }
  ]

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1>Skills</h1>

        <div className="skills-grid">
          <div className="skills-card">
            <h2>Programming Languages</h2>
            <div className="skill-list">
              {programmingLanguages.map((lang, idx) => (
                <div key={idx} className="skill-item">
                  <span className="skill-name">{lang.name}</span>
                  <span className={`skill-level ${lang.level.toLowerCase()}`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-card">
            <h2>Tools & Technologies</h2>
            <div className="skill-tags">
              {tools.map((tool, idx) => (
                <div key={idx} className="skill-tag">
                  <span className="tag-name">{tool.name}</span>
                  <span className="tag-category">{tool.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="proficiency-section">
          <h2>Proficiency Breakdown</h2>
          <div className="proficiency-chart">
            <div className="proficiency-bar">
              <div className="bar-label">Frontend Development</div>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: '70%' }}>70%</div>
              </div>
            </div>
            <div className="proficiency-bar">
              <div className="bar-label">React.js</div>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: '60%' }}>60%</div>
              </div>
            </div>
            <div className="proficiency-bar">
              <div className="bar-label">Backend Development</div>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: '50%' }}>50%</div>
              </div>
            </div>
            <div className="proficiency-bar">
              <div className="bar-label">Database Management</div>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: '50%' }}>50%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
