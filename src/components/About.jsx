import useReveal from '../hooks/useReveal'
import './About.css'

const iconProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const GraduationIcon = () => (
  <svg {...iconProps}>
    <path d="M2 9 L12 4 L22 9 L12 14 Z" />
    <path d="M6 11.5 V16 C6 17.5 9 19 12 19 C15 19 18 17.5 18 16 V11.5" />
    <path d="M22 9 V15" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7 V5 C9 4.4 9.4 4 10 4 H14 C14.6 4 15 4.4 15 5 V7" />
    <path d="M3 13 H21" />
    <path d="M11 13 V15 H13 V13" />
  </svg>
)

const CodeIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <path d="M10 9 L7 12 L10 15" />
    <path d="M14 9 L17 12 L14 15" />
  </svg>
)

const timeline = [
  {
    index: '01',
    Icon: GraduationIcon,
    label: 'Education',
    title: 'B.Tech in Computer Science',
    sub: 'GLA University  |  Sep 2022 – May 2026',
    detail:
      "Built a strong foundation in programming, software development, problem-solving and modern web technologies.",
  },
  {
    index: '02',
    Icon: BriefcaseIcon,
    label: 'Internship',
    title: 'Software Development Internship',
    sub: 'Leadbug (Shashi Sales & Marketing) | Apr 2026 – Aug 2026',
    detail:
      'Developed responsive React interfaces, translated Figma designs into reusable components, integrated REST APIs with Node.js & Express, and worked with MongoDB.',
  },
  {
    index: '03',
    Icon: CodeIcon,
    label: 'Focus Area',
    title: 'Frontend & Full Stack Development',
    sub: 'React  •  Node.js  •  MongoDB',
    detail:
      'I build modern, responsive and user-friendly web applications with a focus on clean code, smooth interactions and great user experience.',
  },
]

export default function About() {
  const revealRef = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid reveal" ref={revealRef}>
          {/* ---------- LEFT ---------- */}
          <div className="about__text">
            <p className="about__kicker">
              <span className="about__kicker-num">02</span>
              <span className="about__kicker-line" />
              <span className="about__kicker-text">About Me</span>
            </p>

            <h2 className="about__heading">
              Turning Ideas Into
              <span className="about__heading-accent">Digital Experiences.</span>
            </h2>

            <p>
              I'm <strong>Suhani Goyal</strong>, a B.Tech Computer Science graduate and a
              developer who loves creating modern, user-friendly web applications. I enjoy
              working on clean UI, smooth interactions and real-world projects that solve
              problems.
            </p>
            <p>
              From translating Figma designs into responsive React components during my
              internship, to building full websites end-to-end, I'm always excited to
              learn, create and grow with every project.
            </p>
          </div>

          {/* ---------- RIGHT ---------- */}
          <div className="about__timeline">
            {timeline.map(({ index, Icon, label, title, sub, detail }, i) => (
              <div className="tl-item" key={index}>
                <span className="tl-item__num">{index}</span>
                {i < timeline.length - 1 && <span className="tl-item__line" />}

                <div className="tl-card">
                  <div className="tl-card__icon">
                    <Icon />
                  </div>
                  <div className="tl-card__body">
                    <p className="tl-card__label">{label}</p>
                    <h3 className="tl-card__title">{title}</h3>
                    <p className="tl-card__sub">{sub}</p>
                    <p className="tl-card__detail">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}