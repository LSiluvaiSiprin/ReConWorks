import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth } from "../services/firebase";
import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // Loading
  if (loading) {
    return (
      <main className="profile-loading">
        <i className="fa-solid fa-spinner fa-spin"></i>
        <p>Loading profile...</p>
      </main>
    );
  }

  // User not logged in
  if (!user) {
    return (
      <main className="profile-page">
        <div className="profile-login-required">
          <div className="profile-empty-icon">
            <i className="fa-solid fa-user-lock"></i>
          </div>

          <h2>Login Required</h2>

          <p>Please login to view your profile.</p>

          <Link to="/login" className="profile-primary-button">
            <i className="fa-solid fa-right-to-bracket"></i>
            Login
          </Link>
        </div>
      </main>
    );
  }

  const userName = user.displayName || user.email?.split("@")[0] || "User";

  const initial = userName.charAt(0).toUpperCase();

  return (
    <main className="profile-page">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="profile-hero">
        <div className="profile-hero-content">
          <span className="profile-label">MY ACCOUNT</span>

          <h1>
            Welcome, <span>{userName}</span>
          </h1>

          <p>
            Manage your ReConWorks account and view your account information.
          </p>
        </div>
      </section>

      {/* ========================================
          PROFILE SECTION
      ======================================== */}

      <section className="profile-section">
        <div className="profile-container">
          {/* ========================================
              PROFILE CARD
          ======================================== */}

          <div className="profile-card">
            <div className="profile-card-header">
              {/* Profile Image */}

              <div className="profile-avatar">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={userName} />
                ) : (
                  <span>{initial}</span>
                )}
              </div>

              <div className="profile-name">
                <h2>{userName}</h2>

                <p>{user.email}</p>
              </div>
            </div>

            {/* ========================================
                ACCOUNT INFO
            ======================================== */}

            <div className="profile-info-list">
              {/* Name */}

              <div className="profile-info-item">
                <div className="profile-info-icon">
                  <i className="fa-solid fa-user"></i>
                </div>

                <div>
                  <span>Full Name</span>
                  <strong>{userName}</strong>
                </div>
              </div>

              {/* Email */}

              <div className="profile-info-item">
                <div className="profile-info-icon green">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div>
                  <span>Email Address</span>
                  <strong>{user.email}</strong>
                </div>
              </div>

              {/* Login Provider */}

              <div className="profile-info-item">
                <div className="profile-info-icon">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>

                <div>
                  <span>Login Method</span>

                  <strong>
                    {user.providerData?.[0]?.providerId === "google.com"
                      ? "Google Account"
                      : "Email & Password"}
                  </strong>
                </div>
              </div>

              {/* Account Status */}

              <div className="profile-info-item">
                <div className="profile-info-icon green">
                  <i className="fa-solid fa-circle-check"></i>
                </div>

                <div>
                  <span>Account Status</span>
                  <strong className="active-status">Active</strong>
                </div>
              </div>
            </div>

            {/* ========================================
                ACTIONS
            ======================================== */}

            <div className="profile-actions">
              <Link to="/booking" className="profile-primary-button">
                <i className="fa-solid fa-calendar-check"></i>
                Book a Service
              </Link>

              <button
                type="button"
                className="profile-logout-button"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                Logout
              </button>
            </div>
          </div>

          {/* ========================================
              SIDE CARD
          ======================================== */}

          <div className="profile-side-card">
            <div className="profile-side-icon">
              <i className="fa-solid fa-building"></i>
            </div>

            <h3>Build With ReConWorks</h3>

            <p>
              Ready to start your construction, renovation or interior project?
            </p>

            <Link to="/booking" className="profile-side-link">
              Start a Project
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
