import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth } from "../services/firebase";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;

    setError("");
    setSuccess("");

    if (name.trim().length < 3) {
      setError("Please enter your full name.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName: name.trim(),
      });

      setSuccess("Account created successfully!");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error("Register error:", err);

      switch (err.code) {
        case "auth/email-already-in-use":
          setError("This email is already registered.");
          break;

        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        case "auth/weak-password":
          setError("Password is too weak.");
          break;

        default:
          setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    setError("");
    setSuccess("");

    try {
      setGoogleLoading(true);

      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      setSuccess("Google account connected successfully!");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Google signup error:", err);

      if (err.code === "auth/popup-closed-by-user") {
        setError("Google sign-up was cancelled.");
      } else {
        setError("Google sign-up failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <main className="register-page">
      <div className="register-container">
        {/* LEFT SIDE */}
        <section className="register-info">
          <div className="register-brand">
            ReCon<span>Works</span>
          </div>

          <span className="register-label">START YOUR JOURNEY</span>

          <h1>
            Build Your
            <span> Future </span>
            With Us
          </h1>

          <p>
            Create your ReConWorks account and manage your construction
            projects, bookings and services with ease.
          </p>

          <div className="register-features">
            <div className="register-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-building"></i>
              </div>

              <div>
                <h3>Professional Services</h3>
                <p>Quality construction and renovation solutions.</p>
              </div>
            </div>

            <div className="register-feature">
              <div className="feature-icon green">
                <i className="fa-solid fa-calendar-check"></i>
              </div>

              <div>
                <h3>Easy Booking</h3>
                <p>Book and manage your services easily.</p>
              </div>
            </div>

            <div className="register-feature">
              <div className="feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>

              <div>
                <h3>Secure Account</h3>
                <p>Your authentication is securely handled by Firebase.</p>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="register-card">
          <div className="register-header">
            <div className="mobile-brand">
              ReCon<span>Works</span>
            </div>

            <h2>Create Account</h2>

            <p>Join ReConWorks and start your construction journey.</p>
          </div>

          {/* MESSAGE */}

          {error && (
            <div className="register-message error">
              <i className="fa-solid fa-circle-exclamation"></i>
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="register-message success">
              <i className="fa-solid fa-circle-check"></i>
              <span>{success}</span>
            </div>
          )}

          {/* GOOGLE */}

          <button
            type="button"
            className="google-register"
            onClick={handleGoogleRegister}
            disabled={googleLoading || loading}
          >
            {googleLoading ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i>
                Connecting...
              </>
            ) : (
              <>
                <i className="fa-brands fa-google"></i>
                Continue with Google
              </>
            )}
          </button>

          <div className="register-divider">
            <span>OR</span>
          </div>

          {/* FORM */}

          <form onSubmit={handleRegister}>
            {/* NAME */}

            <div className="register-form-group">
              <label htmlFor="register-name">Full Name</label>

              <div className="register-input">
                <i className="fa-solid fa-user"></i>

                <input
                  id="register-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

            {/* EMAIL */}

            <div className="register-form-group">
              <label htmlFor="register-email">Email Address</label>

              <div className="register-input">
                <i className="fa-solid fa-envelope"></i>

                <input
                  id="register-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div className="register-form-group">
              <label htmlFor="register-password">Password</label>

              <div className="register-input">
                <i className="fa-solid fa-lock"></i>

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  minLength="6"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  <i
                    className={
                      showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
                    }
                  ></i>
                </button>
              </div>

              <small>Password must contain at least 6 characters.</small>
            </div>

            {/* CONFIRM PASSWORD */}

            <div className="register-form-group">
              <label htmlFor="register-confirm-password">
                Confirm Password
              </label>

              <div className="register-input">
                <i className="fa-solid fa-lock"></i>

                <input
                  id="register-confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label="Toggle confirm password visibility"
                >
                  <i
                    className={
                      showConfirmPassword
                        ? "fa-solid fa-eye-slash"
                        : "fa-solid fa-eye"
                    }
                  ></i>
                </button>
              </div>
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              className="register-submit"
              disabled={loading || googleLoading}
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <i className="fa-solid fa-arrow-right"></i>
                </>
              )}
            </button>
          </form>

          {/* LOGIN */}

          <p className="register-login">
            Already have an account?
            <Link to="/login">Sign In</Link>
          </p>

          <p className="register-security">
            <i className="fa-solid fa-shield-halved"></i>
            Secure authentication powered by Firebase
          </p>
        </section>
      </div>
    </main>
  );
}

export default Register;
