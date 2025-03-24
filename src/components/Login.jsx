import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <button className="back-btn">←</button>
        <button className="close-btn">✖</button>

        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="sign-in-btn">
            Sign in
          </button>

          <button className="google-signin">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2015_logo.svg"
              alt="Google Logo"
            />
            Or sign in with Google
          </button>
        </form>

        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
