import useReveal from '../hooks/useReveal'
import { highlights } from '../data/siteData'
import './About.css'

export default function About() {
  const revealRef = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid reveal" ref={revealRef}>
          <div className="about__text">
            <p className="section-kicker">About</p>
            <h2 className="about__heading">Building interfaces people actually enjoy using.</h2>

            <p>
              I'm a Computer Science graduate with hands-on experience in frontend and
              full-stack development. During my software development internship, I worked
              on real-world product features, translated Figma UI/UX designs into reusable
              React components, implemented responsive interfaces and integrated frontend
              applications with backend APIs.
            </p>
            <p>
              I enjoy solving practical problems through clean interfaces and reliable
              functionality, and I'm particularly interested in opportunities where design
              and development come together.
            </p>
          </div>

          <div className="about__highlights">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.index}>
                <span className="highlight-card__index">{item.index}</span>
                <div>
                  <p className="highlight-card__title">{item.title}</p>
                  <p className="highlight-card__detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
