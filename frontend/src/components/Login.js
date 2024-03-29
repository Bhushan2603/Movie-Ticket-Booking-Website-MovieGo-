import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
      } else {
        const tokenData = await response.json();
        if (tokenData.token) {
          // Token received, save it to local storage or context
          localStorage.setItem("token", tokenData.token);
          navigate("/stream");
        } else {
          // Handle case where no token is received (e.g., invalid credentials)
          setError("No email id found or password is incorrect.");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  

  return (
    <>
      <div>
        <form className="form_main" onSubmit={handleSubmit}>
          <p className="heading">
            Movies<span className="go">Go</span>{" "}
          </p>
          <div className="inputContainer">
            <svg
              viewBox="0 0 16 16"
              fill="#2e2e2e"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="inputIcon"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
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
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
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
            <p>Don't have an account?</p>
            <Link to="/register">Sign up</Link>
          </div>
          <div className="signupContainer">
            <p>Login as an admin?</p>
            <Link to="/adminlogin">Admin Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
