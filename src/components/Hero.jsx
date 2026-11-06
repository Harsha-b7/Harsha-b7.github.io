import { useEffect, useState } from 'react'
import { profile, stats } from '../data.js'

function useTyping(words) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    let delay = deleting ? 35 : 70
    if (!deleting && text === word) delay = 1600
    if (deleting && text === '') delay = 300

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex, words])

  return text
}

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    const step = Math.max(1, Math.ceil(value / 40))
    const id = setInterval(() => {
      setN((v) => {
        const next = Math.min(value, v + step)
        if (next >= value) clearInterval(id)
        return next
      })
    }, 40)
    return () => clearInterval(id)
  }, [value])
  return (
    <b>
      {n}
      {suffix}
    </b>
  )
}

export default function Hero() {
  const typed = useTyping(profile.typedWords)

  return (
    <section id="home" className="hero">
      <p className="hello">Hi, my name is</p>
      <h1>{profile.name}.</h1>
      <div className="role">
        I build <span className="typed">{typed}</span>
        <span className="cursor" />
      </div>
      <p className="hero-desc">
        Java Full-Stack Developer with <strong className="accent">7 years</strong> of experience
        building multitier enterprise applications, scalable Spring Boot services and modern React
        &amp; Angular front-ends — now integrating Generative AI into healthcare platforms at{' '}
        <strong>Optum</strong>.
      </p>
      <div className="btns">
        <a href="#projects" className="btn solid">View my work</a>
        <a href="#contact" className="btn">Get in touch</a>
      </div>
      <div className="stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            {s.text ? <b>{s.text}</b> : <Counter value={s.value} suffix={s.suffix} />}
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
