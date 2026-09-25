import { profile } from '../data/siteData'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__label">Full Stack Developer • UI/UX Enthusiast</p>

          <h1 className="hero__heading">
            Hi, I'm Suhani Goyal.
          </h1>
          <p className="hero__subheading">
            I build clean, responsive and user-focused digital experiences.
          </p>

          <p className="hero__description">
            Computer Science graduate with hands-on experience in React.js, Node.js, Figma
            and responsive web development. I enjoy turning ideas and designs into
            functional, intuitive web experiences.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
           
                    <a href={profile.resume} className="btn btn-secondary" target="_blank" rel="noreferrer">
          Download Resume
        </a>
          </div>

          <div className="hero__meta">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <span aria-hidden="true">·</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__browser">
            <div className="hero__browser-bar">
              <span></span><span></span><span></span>
            </div>
            <div className="hero__browser-body">
              <div className="hero__code-line hero__code-line--1" />
              <div className="hero__code-line hero__code-line--2" />
              <div className="hero__code-line hero__code-line--3" />
              <div className="hero__ui-block" />
            </div>
          </div>

          <div className="hero__float hero__float--card">
            <div className="hero__float-dot" />
            <div className="hero__float-lines">
              <span></span><span></span>
            </div>
          </div>

          <div className="hero__float hero__float--figma">
            <span className="hero__figma-shape hero__figma-shape--circle" />
            <span className="hero__figma-shape hero__figma-shape--square" />
            <span className="hero__figma-shape hero__figma-shape--triangle" />
          </div>
        </div>
      </div>
    </section>
  )
}
