import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Co-Image: AI Image Generator with Gemini Integration',
      description: 'Transform your imagination into stunning AI-generated images using Pollinated AI and for free',
      role: 'Full-stack Developer',
      technologies: ['React.js', 'Node.js', 'Express', 'MySQL2', 'Pollinated AI API', 'Google OAuth 2.0'],
      highlights: [
        'Built responsive UI with React',
        'Implemented backend with Node.js and Express',
        'Integrated Pollinated AI API for image generation',
        'Deployed to production'
      ]
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing projects, skills, and professional achievements.',
      role: 'Frontend Developer',
      technologies: ['HTML5', 'CSS3', ' JavaScript'],
      highlights: [
        'Responsive design for all devices',
        'Smooth navigation between pages',
        'Clean and modern UI',
        'Optimized performance'
      ]
    },
    {
      id: 3,
      title: 'PigDoc - AI-Powered Pig Disease Detection System',
      description: 'PigDoc is a web application that uses machine learning to detect diseases in pigs through image analysis. The application uses a pre-trained TensorFlow Lite model to analyze uploaded images and identify potential health conditions.',
      role: 'Frontend Developer',
      technologies: ['Python', 'HTML5', 'CSS3'],
      highlights: [
        'Not Completed',
      ]
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1>Projects</h1>
        <p className="projects-intro">
          Here are some of the projects I've worked on, demonstrating my skills in various technologies and development practices.
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h2>{project.title}</h2>
                <span className="project-number">#{project.id}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-role">
                <strong>Role:</strong> {project.role}
              </div>

              <div className="project-tech">
                <strong>Technologies:</strong>
                <div className="tech-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-highlights">
                <strong>Key Highlights:</strong>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-actions">
                <button className="btn-view">View Project</button>
                <button className="btn-code">View Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
