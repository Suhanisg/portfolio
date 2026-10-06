import {
  AppWindow,
  ChartNoAxesCombined,
  ShoppingBag,
  RefreshCw,
  Settings,
  ArrowRight,
} from 'lucide-react'
import useReveal from '../hooks/useReveal'
import './Skills.css'

// Figma logo (lucide brand icons are not available in newer versions)
function FigmaIcon({ size = 22, strokeWidth = 1.6 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}

const services = [
  {
    Icon: AppWindow,
    title: 'Business Websites',
    detail: 'Modern, responsive websites for small businesses, brands and professionals.',
  },
  {
    Icon: ChartNoAxesCombined,
    title: 'Landing Pages',
    detail: 'High-converting landing pages designed to present your product or service clearly.',
  },
  {
    Icon: ShoppingBag,
    title: 'E-learning & Custom Web Apps',
    detail: 'Interactive and dynamic web applications with user authentication, APIs and database integration.',
  },
  {
    Icon: RefreshCw,
    title: 'Website Redesign',
    detail: 'Transform outdated websites into modern, responsive and user-friendly experiences.',
  },
  {
    Icon: Settings,
    title: 'Full Stack Development',
    detail: 'End-to-end web solutions using React, Node.js, Express and MongoDB/MySQL.',
  },
  {
    Icon: FigmaIcon,
    title: 'Figma to Development',
    detail: 'Turn your Figma UI/UX designs into clean, responsive and pixel-perfect websites.',
  },
]

export default function Skills() {
  const revealRef = useReveal()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills__head">
          <div className="skills__head-text">
            <p className="skills__kicker">
              <span>Services</span>
              <span className="skills__kicker-line" />
            </p>

            <h2 className="skills__heading">
              What I Can Build
              <span className="skills__heading-accent">
                <svg className="skills__ticks" viewBox="0 0 30 30" aria-hidden="true">
                  <path d="M4 6 L11 10" />
                  <path d="M2 14 L10 15" />
                  <path d="M6 23 L12 19" />
                </svg>
                For You
                <svg
                  className="skills__squiggle"
                  viewBox="0 0 160 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 C 30 2, 55 11, 85 6 S 130 3, 158 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="skills__intro">
              From idea to launch — I design and develop modern, responsive websites and
              web applications that fit your business needs.
            </p>
          </div>

          <div className="skills__art">
            <img
              src="/images/skillImage.png"
              alt="Website design illustration"
              className="skills__art-img"
            />
          </div>
        </div>

        <div className="skills__grid reveal" ref={revealRef}>
          {services.map(({ Icon, title, detail }, i) => (
            <article className="skill-card" key={title}>
              <span className="skill-card__num">{String(i + 1).padStart(2, '0')}</span>

              <div className="skill-card__icon">
                <Icon size={22} strokeWidth={1.6} />
              </div>

              <div className="skill-card__body">
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>

              {/* <a href="#contact" className="skill-card__arrow" aria-label={`Get started with ${title}`}>
                <ArrowRight size={14} strokeWidth={2.2} />
              </a> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}