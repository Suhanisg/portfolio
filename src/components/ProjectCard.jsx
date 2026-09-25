export default function ProjectCard({ project }) {
  const { number, title, category, description, technologies, features, image, github, demo, secondary } = project

  return (
    <article className={`project-card ${secondary ? 'project-card--secondary' : ''}`}>
      <div className="project-card__media">
        <img src={image} alt={`${title} preview`} loading="lazy" />
        <span className="project-card__number">{number}</span>
      </div>

      <div className="project-card__body">
        <p className="project-card__category">{category}</p>
        <h3>{title}</h3>
        <p className="project-card__desc">{description}</p>

        <ul className="project-card__features">
          {features.slice(0, 5).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="tag-row">
          {technologies.map((tech) => (
            <span className="tag" key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-card__actions">
          {github ? (
            <a className="btn btn-secondary btn-sm" href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : (
            <span className="btn btn-secondary btn-sm is-disabled" aria-disabled="true">
              GitHub — private
            </span>
          )}

          {demo ? (
            <a className="btn btn-ghost btn-sm" href={demo} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
