import React from "react";
import "./ContactUs.css";
import Header from "./Header";
import Footer from "./Footer";

function ContactUs() {
  return (
    <>
    <Header/>
    <div className="contact-us-container">
      <div className="contact-info1">
        <h2>Contact Us</h2>
        <p>Discover, Watch, Enjoy: Your Go-To Source for Cinematic Magic!</p>
        <p>
          <strong>Address:</strong> 123 Movie Street, City, Country
        </p>
        <p>
          <strong>Phone:</strong> +1 123-456-7890
        </p>
        <p>
          <strong>Email:</strong> info@moviego.com
        </p>
        <p>
          <strong>Business Hours:</strong> Mon-Fri: 9 AM - 6 PM
        </p>
      </div>

      <div className="additional-info">
        <h3>Additional Information</h3>
        <p>
          Feel free to reach out to us with any questions, suggestions, or
          feedback. We're here to assist you in any way we can.
        </p>
        <p>
          For partnership inquiries or advertising opportunities, please email
          us at partnerships@moviego.com.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ContactUs;
