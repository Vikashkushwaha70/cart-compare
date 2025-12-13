// src/pages/RegisterPage.jsx
import React, { useState } from "react";

export function RegisterPage({ onRegisterSuccess = () => {}, onShowLogin = () => {} }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e?.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please fill all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onRegisterSuccess();
    }, 900);
  };

  return (
    <div className="auth-page">
      <div className="auth-logo-row">
        <div className="auth-logo-circle auth-logo-circle-alt">🛍️</div>
        <div>
          <div className="auth-title">Create account</div>
          <div className="auth-subtitle">Sign up to compare prices and save</div>
        </div>
      </div>

      <form className="auth-form" onSubmit={handleRegister}>
        <div className="auth-field">
          <label>Full name</label>
          <div className="auth-input-wrap">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
          </div>
        </div>

        <div className="auth-field">
          <label>Email</label>
          <div className="auth-input-wrap">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
          </div>
        </div>

        <div className="auth-field">
          <label>Password</label>
          <div className="auth-input-wrap">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
        </div>

        <div className="auth-field">
          <label>Confirm Password</label>
          <div className="auth-input-wrap">
            <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" required />
          </div>
        </div>

        {error && <div style={{ color: "crimson", fontSize: 13 }}>{error}</div>}

        <label className="auth-checkbox" style={{ marginTop: 6 }}>
          <input type="checkbox" /> I agree to the Terms & Conditions
        </label>

        <button type="submit" className="auth-primary-btn" disabled={loading}>
          {loading ? "Creating…" : "Create account"}
        </button>

        <div className="auth-divider">
          <span>or sign up with</span>
        </div>

        <div className="auth-social-row">
          <button type="button" className="auth-social-btn auth-google" onClick={() => { alert("Google signup demo"); onRegisterSuccess(); }}>
            <span className="auth-social-logo">G</span> Google
          </button>
          <button type="button" className="auth-social-btn auth-github" onClick={() => { alert("GitHub signup demo"); onRegisterSuccess(); }}>
            <span className="auth-social-logo">GH</span> GitHub
          </button>
        </div>

        <div className="auth-switch">
          Already have an account?{" "}
          <button type="button" className="auth-link-inline" onClick={onShowLogin}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
