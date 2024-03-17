import React from "react";
import "./Footer.css";
import twitter from "./twitter.png";
import instagram from "./instagram.png";
import facebook from "./facebook.png";
import youtube from "./youtube.png";
import wp from "./whatsapp.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="copy-right">
        <p>Copyright &copy; 2023 MovieGo. All rights reserved.</p>
        <p>Experience the Magic of Cinema with Seamless Ticket Booking - Your Gateway to Movie Moments Await.</p>
      </div>
      <div className="contact-info">
        <p>Email: contact@moviego.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com" className="icon-link">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://instagram.com" className="icon-link">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://facebook.com" className="icon-link">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://youtube.com" className="icon-link">
          <img src={youtube} alt="youtube" />
        </a>
        <a href="https://whatsapp.com" className="icon-link">
          <img src={wp} alt="whatsapp" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
