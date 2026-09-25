import { profile } from '../data/siteData'
import './ResumeCTA.css'

export default function ResumeCTA() {
  return (
    <section className="resume-cta">
      <div className="container resume-cta__inner">
        <div>
          <h2>Want to know more about my work?</h2>
          <p>Take a look at my resume to explore my experience, projects and technical background.</p>
        </div>
       
                <a href={profile.resume} className="btn btn-primary" target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </div>
    </section>
  )
}
