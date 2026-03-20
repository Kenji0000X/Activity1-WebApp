import './About.css'
import profilePhoto from '../assets/me.jpg'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1>About</h1>
        
        <div className="about-grid">
          <div className="about-item photo-section">
            <div className="photo-placeholder">
              <img src={profilePhoto} alt="Kenji Profile" className="profile-photo" />
            </div>
          </div>

          <div className="about-item intro-section">
            <h2>Personal Introduction</h2>
            <p>
             I’m a BSIT student with a real passion for web design. 
             I love the creative side of building clean, modern interfaces, 
             but I’m currently diving into the deep end of full-stack development. 
             As a beginner, it’s been a challenge to move from the visuals to the complex logic behind the scenes, 
             but I’m working through the 'stuck' moments to become a developer who can handle a project from start to finish.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects,
              and sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        <div className="interests-goals">
          <h2>Interests & Goals</h2>
          
          <div className="interest-item">
            <h3>Biggest Accomplishment</h3>
            <p>
              My biggest accomplishment so far has been the development of a generative 
              text-to-image AI, a project that allowed me 
              to bridge the gap between my passion for web design 
              and the complex logic of full-stack development.
            </p>
          </div>

          <div className="interest-item">
            <h3>Area of Interest</h3>
            <p>
              <strong>Primary Focus:</strong> Semi Full-Stack Web Development with emphasis on React.js
            </p>
            <p>
              <strong>Secondary Interests:</strong>
            </p>
            <ul>
              <li>Frontend Frameworks & Libraries (React, Vite, React.js)</li>
              <li>Backend Development with Node.js</li>
              <li>Database Design & Management</li>
              <li>UI/UX Design Principles</li>
              <li>Web Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
