import { useEffect, useState } from 'react'
import { navLinks } from '../data.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let current = ''
      document.querySelectorAll('section').forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo">
        &lt;HY<span> /&gt;</span>
      </a>
      <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </button>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={active === link.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              <b>0{i + 1}.</b>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
