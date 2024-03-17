import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function AdminLogin() {
  const navigate = new useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "admin@gmail.com" && formData.password === "adminaccess") {
      // Email and password match, redirect to the stream page
      navigate("/adminpage");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div>
        <form className="form_main" onSubmit={handleSubmit}>
          <p className="heading">
            Movies<span className="go">Go</span>{" "}
          </p>
          <p>You are going to login as admin.</p>
          <div className="inputContainer">
            <svg
              viewBox="0 0 16 16"
              fill="#2e2e2e"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="inputIcon"
            >
              {/* ... (SVG path for email icon) */}
            </svg>
            <input
              className="inputField"
              placeholder="Email"
              id="username"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputContainer">
            <svg
              viewBox="0 0 16 16"
              fill="#2e2e2e"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="inputIcon"
            >
              {/* ... (SVG path for password icon) */}
            </svg>
            <input
              className="inputField"
              placeholder="Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              type="password"
            />
          </div>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          <button id="button" type="submit" className="linkSubmit">
            Login
          </button>
          <div className="signupContainer">
            <p>User login?</p>
            <Link to="/login">User Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
