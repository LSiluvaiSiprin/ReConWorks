import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // ==========================================
  // CHECK FIREBASE LOGIN STATUS
  // ==========================================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // ==========================================
  // CLOSE MENU
  // ==========================================
  const closeMenu = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  // ==========================================
  // LOGOUT
  // ==========================================
  const handleLogout = async () => {
    try {
      await signOut(auth);

      setProfileOpen(false);
      setMenuOpen(false);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // ==========================================
  // GET USER NAME
  // ==========================================
  const getUserName = () => {
    if (!user) return "User";

    // Google / Firebase display name
    if (user.displayName) {
      return user.displayName;
    }

    // Email name
    if (user.email) {
      return user.email.split("@")[0];
    }

    return "User";
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* ======================================
            LOGO
        ====================================== */}

        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">R</span>

          <span className="logo-text">
            ReCon<span>Works</span>
          </span>
        </Link>

        {/* ======================================
            NAVIGATION MENU
        ====================================== */}

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {/* HOME */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          {/* ABOUT */}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          {/* SERVICES */}

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>

          {/* PROJECTS */}

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            Projects
          </NavLink>

          {/* BOOKING */}

          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            Booking
          </NavLink>

          {/* CONTACT */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          {/* ======================================
              MOBILE LOGIN / PROFILE
          ====================================== */}

          {user ? (
            <div className="mobile-user-section">
              <Link
                to="/profile"
                className="mobile-profile-link"
                onClick={closeMenu}
              >
                👤 {getUserName()}
              </Link>

              <button className="mobile-logout-btn" onClick={handleLogout}>
                🚪 Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="mobile-login-btn" onClick={closeMenu}>
              Login
            </Link>
          )}
        </nav>

        {/* ======================================
            DESKTOP LOGIN / PROFILE
        ====================================== */}

        {user ? (
          <div className="profile-menu">
            {/* PROFILE BUTTON */}

            <button
              className="profile-button"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <span className="profile-icon">👤</span>

              <span className="profile-name">{getUserName()}</span>

              <span className={`profile-arrow ${profileOpen ? "rotate" : ""}`}>
                ▼
              </span>
            </button>

            {/* ==================================
                PROFILE DROPDOWN
            ================================== */}

            {profileOpen && (
              <div className="profile-dropdown">
                {/* PROFILE */}

                <Link
                  to="/profile"
                  className="dropdown-item"
                  onClick={() => setProfileOpen(false)}
                >
                  <span>👤</span>
                  <span>Profile</span>
                </Link>

                {/* DIVIDER */}

                <div className="dropdown-divider"></div>

                {/* LOGOUT */}

                <button
                  className="dropdown-item logout-item"
                  onClick={handleLogout}
                >
                  <span>🚪</span>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* LOGIN BUTTON */

          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}

        {/* ======================================
            HAMBURGER
        ====================================== */}

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
