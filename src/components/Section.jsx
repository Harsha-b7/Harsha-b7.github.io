import { useEffect, useRef, useState } from 'react'

// Wraps a page section and fades it in when it scrolls into view.
export default function Section({ id, number, title, children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`}>
      {title && (
        <h2 className="sec-title">
          <span className="num">{number}.</span>
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
