import useReveal from '../hooks/useReveal'
import { services } from '../data/siteData'
import './Services.css'

export default function Services() {
  const revealRef = useReveal()

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">How I Can Help</p>
          <h2>Services for businesses &amp; teams</h2>
        </div>

        <div className="services__grid reveal" ref={revealRef}>
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}