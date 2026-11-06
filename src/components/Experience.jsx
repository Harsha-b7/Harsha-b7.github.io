import { useState } from 'react'
import Section from './Section.jsx'
import { jobs } from '../data.js'

export default function Experience() {
  const [active, setActive] = useState(0)
  const job = jobs[active]

  return (
    <Section id="experience" number="03" title="Where I've Worked">
      <div className="exp-wrap">
        <div className="tabs">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              className={`tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {j.company}
            </button>
          ))}
        </div>

        {/* key forces the fade animation to replay on tab change */}
        <div className="panel" key={active}>
          <h3>
            {job.title} <span>@ {job.company}</span>
          </h3>
          <div className="meta">
            {job.date} · {job.location}
          </div>
          <div className="project-note">
            <b>{job.projectName}</b> — {job.project}
          </div>
          <ul>
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="tags">
            {job.tech.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
