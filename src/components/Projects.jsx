import Section from './Section.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <Section id="projects" number="04" title="Featured Projects">
      <div className="proj-grid">
        {projects.map((p) => (
          <article className="proj" key={p.title}>
            <div className="folder">{p.badge}</div>
            <h3>{p.title}</h3>
            <div className="co">{p.company}</div>
            <p>{p.description}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
