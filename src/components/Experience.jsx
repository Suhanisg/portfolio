import useReveal from '../hooks/useReveal'
import { experiences } from '../data/siteData'
import './Experience.css'

export default function Experience() {
  const revealRef = useReveal()

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">Experience</p>
          <h2>Where I've worked</h2>
        </div>

        <div className="timeline reveal" ref={revealRef}>
          <div className="timeline__rail" aria-hidden="true" />

          {experiences.map((exp) => (
            <div className="timeline__item" key={exp.id}>
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-card__head">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="timeline-card__company">{exp.company}</p>
                  </div>
                  <span className="timeline-card__period">{exp.period}</span>
                </div>

                <p className="timeline-card__summary">{exp.summary}</p>

                <ul className="timeline-card__list">
                  {exp.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                             <div className="tag-row">
                  {exp.technologies.map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>

                {exp.experienceLetter && (
                  <a
                    className="btn btn-secondary btn-sm timeline-card__letter"
                    href={exp.experienceLetter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Experience Letter
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}