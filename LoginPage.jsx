import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // Optional for styling

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Example basic check
    if (username === "sai@gmail.com" && password === "sai2003") {
      localStorage.setItem("loggedIn", "true");
      navigate("/add-task");
    } else {
      alert("Invalid credentials. Try username: admin, password: admin");
    }
  };

  return (
    <div className="login-container" style={{
      backgroundImage: `url("/login-bg.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <form className="login-form" onSubmit={handleLogin} style={{
        background: "rgba(255, 255, 255, 0.85)",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)"
      }}>
        <h2>Login</h2>

        <div style={{ marginBottom: "1rem" }}>
          <label>Username:</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <button type="submit" style={{ width: "100%", padding: "0.5rem" }}>
          Login
        </button>

        <div style={{ marginTop: "1rem", textAlign: "center" }}>
          <a href="#" onClick={() => alert("Forgot Password functionality not implemented.")}>
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
