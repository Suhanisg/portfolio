import { profile, navLinks } from '../data/siteData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__role">{profile.role}</p>
        </div>

        <nav className="footer__quicklinks" aria-label="Quick links">
          <p className="footer__heading">Quick Links</p>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="footer__social">
          <p className="footer__heading">Connect</p>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>

      <div className="container">
        <p className="footer__copy">© 2026 {profile.name}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}