import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import styles from "./Login.module.css";

import logo from "../../assets/images/insta_logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ username: "", password: "" });

  const handleLogin = () => {
    let valid = true;
    const newError = { username: "", password: "" };

    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    const phoneReg = /^\d{10}$/;

    if (!emailReg.test(username) && !phoneReg.test(username)) {
      newError.username = "Enter valid email or 10-digit phone number";
      valid = false;
    }

    const passwordReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.length < 6 || !passwordReg.test(password)) {
      newError.password =
        "Password must be at least 6 chars and include 1 number & 1 special char";
      valid = false;
    }

    setError(newError);

    if (valid) {
      alert("Login successful!");
      console.log({ username, password });
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <img
          src={logo}
          alt="Instagram Logo"
          className={styles.instaLogo}
          width="37"
        />

        <h1 className={styles.instaText}>Instagram</h1>

        <input
          type="text"
          placeholder="Phone number or username or email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        {error.username && <p className={styles.error}>{error.username}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        {error.password && <p className={styles.error}>{error.password}</p>}

        <button
          className={styles.loginBtn}
          disabled={!username || !password}
          onClick={handleLogin}
        >
          Log in
        </button>

        <div className={styles.or}>
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <div className={styles.fbLogin}>
          <FaFacebookSquare className={styles.fbIcon} />
          Log in with Facebook
        </div>

        <p className={styles.forgot}>Forgotten your password?</p>

        <div className={styles.signupBox}>
          Don't have an account? <span>Sign up</span>
        </div>
      </div>

      <div className={styles.getApp}>
        <p className={styles.getAppText}>Get the app.</p>
        <div className={styles.appLinks}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play Store"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
