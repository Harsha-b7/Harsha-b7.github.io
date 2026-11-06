import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer>
      Designed &amp; built by {profile.name} · © {new Date().getFullYear()}
    </footer>
  )
}
