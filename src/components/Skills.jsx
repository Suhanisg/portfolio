import useReveal from '../hooks/useReveal'
import { skillGroups } from '../data/siteData'
import './Skills.css'

export default function Skills() {
  const revealRef = useReveal()

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">Skills &amp; Technologies</p>
          <h2>What I work with</h2>
        </div>

        <div className="skills__grid reveal" ref={revealRef}>
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-card__pills">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
