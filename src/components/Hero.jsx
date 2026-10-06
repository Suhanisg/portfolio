import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiMongodb,
} from 'react-icons/si'
import './Hero.css'

const techs = [
  { name: 'React', Icon: SiReact, color: '#00B8D9' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7C600' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#13AA52' },
]

const stats = [
  { value: '10+', label: 'Projects Completed' },
  { value: '1+', label: 'Years of Experience' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* soft decorative leaves on the left */}
      <svg className="hero__leaves" viewBox="0 0 120 420" aria-hidden="true">
        <g fill="none" stroke="#7a8f5c" strokeWidth="1.4" strokeLinecap="round">
          <path d="M20 420 C 30 300, 40 180, 30 40" />
        </g>
        <g fill="#8aa06a" opacity="0.55">
          <path d="M30 330 C 5 320, -5 290, 8 270 C 30 280, 38 305, 30 330Z" />
          <path d="M32 270 C 60 262, 78 236, 66 212 C 40 220, 28 244, 32 270Z" />
          <path d="M30 200 C 4 190, -6 160, 8 140 C 30 150, 38 175, 30 200Z" />
          <path d="M31 140 C 58 130, 74 104, 62 82 C 38 90, 26 114, 31 140Z" />
          <path d="M30 80 C 8 70, 2 48, 14 30 C 32 40, 38 60, 30 80Z" />
        </g>
      </svg>

      <div className="container hero__inner">
        {/* ---------- LEFT ---------- */}
        <div className="hero__content">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Opportunities
          </span>

          <h1 className="hero__heading">
            Building Digital
            <br />
            Experiences
            <span className="hero__heading-accent">
              That People Love to Use.
              <svg
                className="hero__squiggle"
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8 C 40 2, 70 12, 110 6 S 190 2, 230 7 S 280 8, 298 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="hero__description">
            I'm <strong>Suhani Goyal</strong> — Frontend Developer &amp; UI/UX
            Designer. I design and develop modern, responsive websites and web
            applications with a focus on clean UI, smooth interactions and great
            user experience.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View My Work <FiArrowRight />
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Let's Work Together <FiArrowUpRight />
            </a>
          </div>

          <ul className="hero__techs">
            {techs.map(({ name, Icon, color }) => (
              <li key={name} className="hero__tech">
                <Icon style={{ color }} />
                {name}
              </li>
            ))}
          </ul>

          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT ---------- */}
        <div className="hero__visual">
          <img
            src="/images/heroImage.png"
            alt="Suhani working on web design projects"
            className="hero__image"
          />

          
        </div>
      </div>
    </section>
  )
}