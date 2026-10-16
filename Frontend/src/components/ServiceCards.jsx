import "../styles/ServiceCard.css";

function ServiceCard({ icon, title, description, features = [] }) {
  return (
    <article className="service-card">
      {/* Icon */}
      <div className="service-icon">
        <i className={icon}></i>
      </div>

      {/* Content */}
      <div className="service-content">
        <h3>{title}</h3>

        <p>{description}</p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="service-features">
            {features.map((feature, index) => (
              <li key={index}>
                <i className="fa-solid fa-check"></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default ServiceCard;