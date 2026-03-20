import './Reflection.css'

function Reflection() {
  const concepts = {
    learned: [
      {
        title: 'Component-Based Architecture',
        description: 'Understanding how to break down UI into reusable, manageable components and managing state effectively.'
      },
      {
        title: 'React Hooks',
        description: 'Mastering useState, useEffect, and custom hooks to manage component logic and side effects efficiently.'
      },
      {
        title: 'JSX Syntax',
        description: 'Writing HTML-like syntax in JavaScript to create dynamic, interactive user interfaces.'
      },
      {
        title: 'State Management',
        description: 'Understanding props drilling, state lifting, and the importance of single source of truth in React applications.'
      },
      {
        title: 'Full-Stack Development',
        description: 'Integrating frontend React applications with backend APIs, databases, and deployment considerations.'
      },
      {
        title: 'Responsive Web Design',
        description: 'Creating applications that work seamlessly across different devices and screen sizes using CSS and modern layout techniques.'
      },
      {
        title: 'RESTful APIs',
        description: 'Understanding HTTP methods, API endpoints, and how to consume APIs from React applications.'
      },
      {
        title: 'Virtual DOM',
        description: 'Learning how React optimizes rendering performance through the virtual DOM and reconciliation algorithm.'
      }
    ],
    future: [
      {
        title: 'Advanced State Management',
        description: 'Exploring Redux, Context API, and Zustand for more complex state management scenarios.',
        interest: 'High'
      },
      {
        title: 'Next.js Framework',
        description: 'Learning server-side rendering, static generation, and file-based routing for better performance and SEO.',
        interest: 'High'
      },
      {
        title: 'TypeScript',
        description: 'Adding type safety to JavaScript to catch errors early and improve code maintainability.',
        interest: 'High'
      },
      {
        title: 'Testing & Quality Assurance',
        description: 'Unit testing, integration testing, and end-to-end testing with Jest, React Testing Library, and Cypress.',
        interest: 'High'
      },
      {
        title: 'Web Performance Optimization',
        description: 'Code splitting, lazy loading, image optimization, and understanding Core Web Vitals.',
        interest: 'Medium'
      },
      {
        title: 'GraphQL',
        description: 'Understanding GraphQL as an alternative to REST APIs for more efficient data fetching.',
        interest: 'Medium'
      },
      {
        title: 'Mobile Development',
        description: 'Exploring React Native or Flutter to build cross-platform mobile applications.',
        interest: 'Medium'
      },
      {
        title: 'DevOps & Deployment',
        description: 'Learning Docker, CI/CD pipelines, and cloud deployment strategies for production applications.',
        interest: 'Medium'
      }
    ]
  }

  return (
    <section id="reflection" className="reflection-section">
      <div className="reflection-container">
        <h1>Reflection & Learning Journey</h1>
        <p className="reflection-intro">
          Here's my reflection on the concepts learned and areas I want to explore further in full-stack development and React.js.
        </p>

        <div className="reflection-grid">
          <div className="reflection-card learned">
            <h2>Concepts Im Still Learning</h2>
            <div className="concepts-list">
              {concepts.learned.map((concept, idx) => (
                <div key={idx} className="concept-item">
                  <div className="concept-header">
                    <h3>{concept.title}</h3>
                    <span className="checkmark">✓</span>
                  </div>
                  <p>{concept.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reflection-card future">
            <h2>Concepts I Want to Learn Further</h2>
            <div className="concepts-list">
              {concepts.future.map((concept, idx) => (
                <div key={idx} className="concept-item">
                  <div className="concept-header">
                    <h3>{concept.title}</h3>
                    <span className={`interest-badge ${concept.interest.toLowerCase()}`}>
                      {concept.interest}
                    </span>
                  </div>
                  <p>{concept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reflection-summary">
          <h2>Summary & Moving Forward</h2>
          <div className="summary-content">
            <p>
              Through my study of full-stack development and React.js, I've developed a solid foundation in modern web development.
              I understand how to build interactive user interfaces, manage application state, and integrate with backend services.
            </p>
            <p>
              The journey has taught me that web development is constantly evolving, and continuous learning is essential.
              I'm excited to explore more advanced concepts and tackle more challenging projects that will further strengthen my skills.
            </p>
            <p>
              My next steps are to deepen my knowledge in state management, explore Next.js for full-stack development,
              and improve my testing and deployment practices to build production-ready applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reflection
