import './Navigation.css'

function Navigation() {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'reflection', label: 'Reflection' }
  ]

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Portfolio</span>
        </div>
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.id} className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
