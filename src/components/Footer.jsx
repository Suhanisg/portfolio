import { profile } from '../data/siteData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.name}</p>
          <p className="footer__role">{profile.role}</p>
        </div>

        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>

        <p className="footer__copy">© 2026 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
