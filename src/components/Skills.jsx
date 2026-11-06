import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" number="02" title="Technical Skills">
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>
              <i>{group.icon}</i>
              {group.title}
            </h3>
            <div className="tags">
              {group.items.map((s) => (
                <span className="tag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
