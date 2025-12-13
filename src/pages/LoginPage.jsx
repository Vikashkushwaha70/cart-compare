// src/pages/LoginPage.jsx
import React, { useState } from "react";

export function LoginPage({ onLoginSuccess = () => {}, onShowRegister = () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    setLoading(true);

    // MOCK login call (replace with your API later)
    setTimeout(() => {
      setLoading(false);
      // treat any pair as valid for demo; call onLoginSuccess
      onLoginSuccess();
    }, 900);
  };

  return (
    <div className="auth-page">
      <div className="auth-logo-row">
        <div className="auth-logo-circle">🛒</div>
        <div>
          <div className="auth-title">Welcome back</div>
          <div className="auth-subtitle">Sign in to continue to DealFinder</div>
        </div>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label>Email</label>
          <div className="auth-input-wrap">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div className="auth-field">
          <label>Password</label>
          <div className="auth-input-wrap">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {error && <div style={{ color: "crimson", fontSize: 13 }}>{error}</div>}

        <div className="auth-row-between" style={{ marginTop: 6 }}>
          <label className="auth-checkbox">
            <input type="checkbox" />
            Remember me
          </label>

          <button type="button" className="auth-link-inline" onClick={() => alert("Forgot password flow")}>
            Forgot?
          </button>
        </div>

        <button type="submit" className="auth-primary-btn" disabled={loading}>
          {loading ? "Signing in…" : "Sign In"}
        </button>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="auth-social-row">
          <button type="button" className="auth-social-btn auth-google" onClick={() => { alert("Google login (demo)"); onLoginSuccess(); }}>
            <span className="auth-social-logo">G</span> Google
          </button>
          <button type="button" className="auth-social-btn auth-github" onClick={() => { alert("GitHub login (demo)"); onLoginSuccess(); }}>
            <span className="auth-social-logo">GH</span> GitHub
          </button>
        </div>

        <div className="auth-switch">
          Don’t have an account?{" "}
          <button type="button" className="auth-link-inline" onClick={onShowRegister}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
