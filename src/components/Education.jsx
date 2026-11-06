import Section from './Section.jsx'
import { education } from '../data.js'

export default function Education() {
  return (
    <Section id="education" number="05" title="Education">
      <div className="edu-grid">
        {education.map((e) => (
          <div className="edu" key={e.degree}>
            <div className="yr">{e.year}</div>
            <div>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
