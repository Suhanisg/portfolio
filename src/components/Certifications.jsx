import useReveal from '../hooks/useReveal'
import { certifications } from '../data/siteData'
import './Certifications.css'

export default function Certifications() {
  const revealRef = useReveal()

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">Certifications</p>
          <h2>Certifications</h2>
        </div>

        <div className="certifications__grid reveal" ref={revealRef}>
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.id}>
              <div>
                <h3>{cert.name}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
              </div>
              <a className="btn btn-secondary btn-sm" href={cert.url} target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
