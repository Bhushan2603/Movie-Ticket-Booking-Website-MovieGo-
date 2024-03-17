import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Make sure to create this CSS file for styling
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const subLinks = [
    { name: "Bollywood", route: "/bollywood" },
    { name: "Tollywood", route: "/tollywood" },
    { name: "Hollywood", route: "/hollywood" },
  ];

  return (
    <header className="header">
      <div className="logo">
        <Link to="/stream">
          Movie<span className="go">Go</span>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/stream" onClick={toggleSubmenu}>
              Movies
            </Link>
            <ul className={`submenu ${isSubmenuOpen ? "open" : ""}`}>
              {subLinks.map((subLink) => (
                <li key={subLink.route}>
                  <Link to={subLink.route}>{subLink.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="navLink">
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className="navLink">
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="auth1">
        <Link to="/account">
        <AccountCircleIcon color="primary" sx={{ fontSize: 40 }}/>
        </Link>
      </div>
      {showPopup && (
        <div className="popup">
          Please Select a Movie for Book the Tickets
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </header>
  );
}

export default Header;
