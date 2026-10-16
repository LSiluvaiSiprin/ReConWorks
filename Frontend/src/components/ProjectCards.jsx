import "../styles/ProjectCards.css";

function ProjectCard({
  image,
  category,
  title,
  description,
  technologies = [],
  link,
}) {
  return (
    <article className="project-card">
      {/* Project Image */}
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="project-image-placeholder">
            <i className="fa-solid fa-building"></i>
          </div>
        )}

        {category && <span className="project-category">{category}</span>}
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3>{title}</h3>

        <p>{description}</p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="project-technologies">
            {technologies.map((technology, index) => (
              <span key={index}>{technology}</span>
            ))}
          </div>
        )}

        {/* Project Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
