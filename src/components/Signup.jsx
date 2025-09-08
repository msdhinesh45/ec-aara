import React from "react";
import styles from "./Auth.module.css";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className={styles.authContainer}>
      <div className={`card shadow-lg border-0 ${styles.authCard}`}>
        <div className="card-body p-4">
          <img
            src="https://aaradesigner.com/storage/2025/07/aara-designer-studio-main-logo.jpg"
            alt="Aara Designer Studio Logo"
            className={styles.authLogo}
          />
          <h3 className="card-title text-center mb-4 fw-bold">
            Create an Account
          </h3>
          <form>
            <div className="mb-3">
              <label htmlFor="FullName" className="form-label fw-semibold">
                Full Name
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="FullName"
                  placeholder="Enter your name"
                />
              </div>
            </div>

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
              <label htmlFor="phoneNumber" className="form-label fw-semibold">
                Phone Number
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaPhone />
                </span>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="+91 1234567890"
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
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="confirmPasswordInput"
                className="form-label fw-semibold"
              >
                Confirm Password
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPasswordInput"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className={styles.btn}>
                Sign Up
              </button>
            </div>
          </form>

          <div className="text-center mt-3">
            <span>Already have an account? </span>
            <Link to="/login" className={styles.authLink}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
