import React from "react";
import styles from "./Auth.module.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.authContainer}>
      <div className={`card shadow-lg border-0 ${styles.authCard}`}>
        <div className="card-body p-4">
          <img
            src="https://aaradesigner.com/storage/2025/07/aara-designer-studio-main-logo.jpg"
            alt="Aara Designer Studio Logo"
            className={styles.authLogo}
          />
          <h3 className="card-title text-center mb-4 fw-bold">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label fw-semibold">
                Email address
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label fw-semibold">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className={styles.btn}>
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <span>Don’t have an account? </span>
            <Link to="/signup" className={styles.authLink}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
