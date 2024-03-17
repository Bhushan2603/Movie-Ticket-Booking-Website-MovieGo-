import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import "./Register.css";

function Register() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/register", {
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
        alert("User registered successfully.");
        navigate('/login'); 
        // Redirect to the login page or handle it as needed
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <a className="singup">
          Create Account
        </a>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="inputBox">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <span>Username</span>
          </div>

          {/* Email */}
          <div className="inputBox1">
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="user">Email</span>
          </div>

          {/* Password */}
          <div className="inputBox">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span>Password</span>
          </div>

          {/* Confirm Password */}
          <div className="inputBox">
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span>Confirm Password</span>
          </div>

          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="enter">
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="loginlink">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
