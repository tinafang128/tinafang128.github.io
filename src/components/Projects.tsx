import type { Project } from '../types'

const projects: Project[] = [
  {
    title: 'Project Alpha',
    description:
      'A full-stack application for real-time collaboration. Built with modern tooling and deployed on the cloud.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: 'https://example.com',
    repo: 'https://github.com',
  },
  {
    title: 'Project Beta',
    description:
      'Open-source CLI tool that simplifies developer workflows. Used by thousands of developers worldwide.',
    tech: ['Rust', 'CLI', 'Git'],
    repo: 'https://github.com',
  },
  {
    title: 'Project Gamma',
    description:
      'Interactive data visualization dashboard with real-time updates and export capabilities.',
    tech: ['React', 'D3.js', 'WebSocket'],
    link: 'https://example.com',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <h2 className="section__title">
          <span className="section__number">02.</span> Projects
        </h2>
        <ul className="projects__list">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="projects__card animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="projects__card-content">
                <div className="projects__card-header">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <div className="projects__card-links">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Repository"
                        className="projects__link"
                      >
                        ↗ repo
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live site"
                        className="projects__link"
                      >
                        ↗ live
                      </a>
                    )}
                  </div>
                </div>
                <p className="projects__card-desc">{project.description}</p>
                <ul className="projects__tech">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .projects__list {
          list-style: none;
          display: grid;
          gap: 1.5rem;
        }
        .projects__card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          transition: border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .projects__card:hover {
          border-color: var(--accent);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
        }
        .projects__card-content { position: relative; }
        .projects__card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }
        .projects__card-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .projects__card-links { display: flex; gap: 1rem; }
        .projects__link {
          font-size: 0.85rem;
          font-family: var(--font-mono);
        }
        .projects__card-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .projects__tech {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--accent);
        }
      `}</style>
    </section>
  )
}

export default Projects
