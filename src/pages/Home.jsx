import './Home.css'

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div>
            <h1 className="home-title">Hello. I'm Kenji.</h1>
            <p className="home-subtitle">
              Kenji ken L. Abrera <strong>BSIT 3B</strong>
            </p>
            <p className="home-description">
                I'm a passionate web developer with a focus on semi-full-stack development and React.js. 
                I practice building dynamic and responsive web applications 
                that provide great user experiences. With a moderate foundation in JavaScript, 
                HTML, and CSS, I am continuously learning and exploring new
                 technologies to enhance my skills and create innovative solutions.
            </p>
            
          </div>
          <div className="home-image">
            <div className="placeholder-image">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="react-logo">
                <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
