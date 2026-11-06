import Section from './Section.jsx'
import { highlights, profile } from '../data.js'

export default function About() {
  return (
    <Section id="about" number="01" title="About Me">
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a <strong>Java Full-Stack Developer</strong> who enjoys turning business requirements
            into reliable, well-structured software. Over the past 7 years I've worked across
            healthcare, HR and insurance domains — building backend services, integrating REST APIs,
            and solving production issues in enterprise applications.
          </p>
          <p>
            My core strength is <strong>Core Java, Multithreading, Spring Boot and Hibernate</strong>{' '}
            on the backend, paired with <strong>React.js, Redux and Angular</strong> on the front-end.
            I also work with <strong>Apache Spark</strong> for large-scale data processing and deploy
            on <strong>AWS</strong> with Jenkins CI/CD.
          </p>
          <p>
            Most recently I've been integrating <strong>Generative AI</strong> — LLM APIs, prompt
            engineering and RAG — to build AI assistants that help nurses review authorizations faster.
          </p>
          <ul className="highlights">
            {highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        {/* To use a photo: put photo.jpg in /public and replace the inner div with
            <img src="/photo.jpg" alt={profile.name} className="box photo" /> */}
        <div className="profile">
          <div className="box">{profile.initials}</div>
        </div>
      </div>
    </Section>
  )
}
