import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Reflection from './pages/Reflection'

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Reflection />
      </main>
      <footer className="footer">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
