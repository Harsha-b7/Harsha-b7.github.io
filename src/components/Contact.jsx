import { useState } from 'react'
import Section from './Section.jsx'
import { profile } from '../data.js'

function CopyCard({ label, value }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* clipboard not available */
    }
  }
  return (
    <div className={`cc ${copied ? 'ok' : ''}`} onClick={copy}>
      <span className="copied">Copied!</span>
      <small>{label} · click to copy</small>
      <div>{value}</div>
    </div>
  )
}

export default function Contact() {
  return (
    <Section id="contact" number="06" title="What's Next?" className="contact">
      <h2 className="big">Get In Touch</h2>
      <p className="lead">
        I'm open to new Java Full-Stack opportunities. Whether you have a role in mind or just want
        to connect, my inbox is always open.
      </p>
      <a className="btn solid" href={`mailto:${profile.email}`}>Say Hello</a>
      <div className="contact-cards">
        <CopyCard label="EMAIL" value={profile.email} />
        <CopyCard label="PHONE" value={profile.phone} />
        <a className="cc" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          <small>LINKEDIN</small>
          <div>{profile.linkedinHandle}</div>
        </a>
      </div>
    </Section>
  )
}
