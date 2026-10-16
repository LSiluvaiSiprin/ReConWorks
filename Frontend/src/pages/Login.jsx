import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth, googleProvider } from "../services/firebase";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ==============================
  // EMAIL + PASSWORD LOGIN
  // ==============================
  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      setSuccess("Login successful! Redirecting...");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Login Error:", err);

      switch (err.code) {
        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;

        case "auth/user-not-found":
          setError("No account found with this email.");
          break;

        case "auth/wrong-password":
          setError("Incorrect password.");
          break;

        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        case "auth/too-many-requests":
          setError(
            "Too many failed attempts. Please try again later."
          );
          break;

        case "auth/user-disabled":
          setError("This account has been disabled.");
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection."
          );
          break;

        default:
          setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // GOOGLE LOGIN
  // ==============================
  const handleGoogleLogin = async () => {
    setError("");
    setSuccess("");

    try {
      setGoogleLoading(true);

      await signInWithPopup(auth, googleProvider);

      setSuccess(
        "Google login successful! Redirecting..."
      );

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Google Login Error:", err);

      switch (err.code) {
        case "auth/popup-closed-by-user":
          setError("Google login was cancelled.");
          break;

        case "auth/popup-blocked":
          setError(
            "Google login popup was blocked. Please allow popups."
          );
          break;

        case "auth/account-exists-with-different-credential":
          setError(
            "An account already exists with this email using another login method."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection."
          );
          break;

        default:
          setError("Google login failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  // ==============================
  // FORGOT PASSWORD
  // ==============================
  const handleForgotPassword = async () => {
    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address first.");
      return;
    }

    try {
      await sendPasswordResetEmail(
        auth,
        email.trim()
      );

      setSuccess(
        "Password reset email sent. Please check your inbox."
      );
    } catch (err) {
      console.error("Password Reset Error:", err);

      switch (err.code) {
        case "auth/user-not-found":
          setError("No account found with this email.");
          break;

        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        case "auth/too-many-requests":
          setError(
            "Too many requests. Please try again later."
          );
          break;

        default:
          setError("Unable to send reset email.");
      }
    }
  };

  return (
    <main className="login-page">
      <div className="login-container">

        {/* ==============================
            LEFT INFORMATION
        ============================== */}
        <section className="login-info">

          <div className="login-brand">
            ReCon<span>Works</span>
          </div>

          <span className="login-label">
            CONSTRUCTION SERVICES
          </span>

          <h1>
            Build Your
            <span> Future </span>
            With Us
          </h1>

          <p>
            Sign in to manage your construction projects,
            bookings and services with ReConWorks.
          </p>

          <div className="login-features">

            {/* Feature 1 */}
            <div className="login-feature">
              <div className="login-feature-icon">
                <i className="fa-solid fa-building"></i>
              </div>

              <div>
                <h3>Professional Services</h3>
                <p>
                  Quality construction and renovation services.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="login-feature">
              <div className="login-feature-icon green">
                <i className="fa-solid fa-calendar-check"></i>
              </div>

              <div>
                <h3>Easy Booking</h3>
                <p>
                  Book your required construction service easily.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="login-feature">
              <div className="login-feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>

              <div>
                <h3>Secure Account</h3>
                <p>
                  Your account information is securely protected.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ==============================
            LOGIN FORM
        ============================== */}
        <section className="login-form-section">

          <div className="login-form-wrapper">

            {/* Header */}
            <div className="login-header">

              <div className="login-icon">
                <i className="fa-solid fa-user"></i>
              </div>

              <h2>Welcome Back</h2>

              <p>
                Sign in to continue to your account
              </p>

            </div>

            {/* Error Message */}
            {error && (
              <div
                className="login-message error"
                role="alert"
              >
                <i className="fa-solid fa-circle-exclamation"></i>

                <span>{error}</span>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div
                className="login-message success"
                role="status"
              >
                <i className="fa-solid fa-circle-check"></i>

                <span>{success}</span>
              </div>
            )}

            {/* ==============================
                EMAIL LOGIN FORM
            ============================== */}
            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="login-form-group">

                <label htmlFor="login-email">
                  Email Address
                </label>

                <div className="login-input">

                  <i className="fa-solid fa-envelope"></i>

                  <input
                    id="login-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    autoComplete="email"
                    disabled={loading || googleLoading}
                    required
                  />

                </div>
              </div>

              {/* Password */}
              <div className="login-form-group">

                <div className="password-label">

                  <label htmlFor="login-password">
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    disabled={loading || googleLoading}
                  >
                    Forgot Password?
                  </button>

                </div>

                <div className="login-input">

                  <i className="fa-solid fa-lock"></i>

                  <input
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    autoComplete="current-password"
                    disabled={loading || googleLoading}
                    required
                  />

                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="login-button"
                disabled={loading || googleLoading}
              >

                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    Signing In...
                  </>
                ) : (
                  <>
                    Sign In
                    <i className="fa-solid fa-arrow-right"></i>
                  </>
                )}

              </button>

            </form>

            {/* Divider */}
            <div className="login-divider">
              <span>OR</span>
            </div>

            {/* ==============================
                GOOGLE LOGIN
            ============================== */}
            <button
              type="button"
              className="google-button"
              onClick={handleGoogleLogin}
              disabled={loading || googleLoading}
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

            {/* Register */}
            <p className="register-text">
              Don't have an account?{" "}
              <Link to="/register">
                Create Account
              </Link>
            </p>

            {/* Back Home */}
            <Link
              to="/"
              className="back-home"
            >
              <i className="fa-solid fa-arrow-left"></i>
              Back to Home
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Login;