import useReveal from '../hooks/useReveal'
import { projects } from '../data/siteData'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  const revealRef = useReveal()

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">Featured Projects</p>
          <h2>A selection of projects I've built and contributed to</h2>
        </div>

        <div className="projects__grid reveal" ref={revealRef}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
