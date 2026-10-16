import { Link } from "react-router-dom";
import "../styles/Button.css";

function Button({
  children,
  to,
  type = "button",
  variant = "primary",
  icon,
  onClick,
  disabled = false,
}) {
  const buttonContent = (
    <>
      <span>{children}</span>

      {icon && <i className={icon}></i>}
    </>
  );

  // For navigation buttons
  if (to) {
    return (
      <Link to={to} className={`recon-btn ${variant}`} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }

  // For normal/action buttons
  return (
    <button
      type={type}
      className={`recon-btn ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
}

export default Button;
