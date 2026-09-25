import useReveal from '../hooks/useReveal'
import { uiuxWork } from '../data/siteData'
import './UIUXShowcase.css'

export default function UIUXShowcase() {
  const revealRef = useReveal()

  return (
    <section id="uiux" className="section uiux">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">UI/UX Work</p>
          <h2>Design work behind the code</h2>
          <p>
            UI implementation and interface work from my projects — not standalone
            UX case studies.
          </p>
        </div>

        <div className="uiux__grid reveal" ref={revealRef}>
          {uiuxWork.map((item) => (
            <div className="uiux-card" key={item.id}>
              <div className="uiux-card__media">
                <img src={item.image} alt={`${item.title} preview`} loading="lazy" />
              </div>
              <h3>{item.title}</h3>
              <p className="uiux-card__focus">{item.focus}</p>
              <p className="uiux-card__tools">{item.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
