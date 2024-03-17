import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling
import Header from "./Header";
import Footer from "./Footer";

import prashant from "../components/Team/pc2.jpg";
import krushita from "../components/Team/Krupali2.jpg"
import bhushan from "../components/Team/bhushan3.jpg";
import ishika from "../components/Team/ishika.jpg";

function AboutUs() {
  return (
    <>
    <Header/>
    <div className="component-container">
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>Welcome to MovieGo, your ultimate source for everything related to the enchanting world of movies! We are passionate movie aficionados who believe that films have the power to inspire, entertain, and connect people from all walks of life.</p>
      
      <h3>Why MovieGo</h3>
      <p>At MovieGo, our mission is to create an immersive platform that celebrates the art of cinema and fosters a thriving community of film enthusiasts. We are dedicated to curating a diverse range of movie content, from the latest blockbusters to hidden gems, and to providing insightful reviews, interviews, and behind-the-scenes glimpses.</p>
      
      <p>Our aim is to bridge the gap between movie lovers and the captivating stories that grace the silver screen. We strive to be the go-to destination for those seeking in-depth analyses, engaging discussions, and an avenue to express their love for movies.</p>
      
      <h3>Meet the Team</h3>
      <div className="team-members">
        <div className="team-member">
          <img src={prashant} alt="Founder" />

          <hr className="team-member-divider" />
          <h4>Prashant Chaute</h4>
          <p>Frontend Developer</p>
          
        </div>
        <div className="team-member">
          <img src={krushita} alt="Editor" />

          <hr className="team-member-divider" />
          <h4>Krushita Bheda</h4>
          <p>QA Tester</p>
          
        </div>
        <div className="team-member">
          <img src={bhushan} alt="Editor" />

          <hr className="team-member-divider" />
          <h4>Bhushan Patil</h4>
          <p>Back-End Developer</p>
          
        </div>
        
        <div className="team-member">
          <img src={ishika} alt="Editor" />

          <hr className="team-member-divider" />
          <h4>Ishika Danej</h4>
          <p>Content Manager</p>
          
        </div>
      </div>
      
      <h3>Our Goal</h3>
      <p>Our goal at MovieGo is to cultivate a passionate community of movie enthusiasts who appreciate the diverse tapestry of stories that cinema has to offer. We believe that movies have the power to transport us to different worlds, challenge our perspectives, and evoke a myriad of emotions.</p>
      
      <p><b>Through our platform, we aspire to:</b></p>
      <ul>
        <li>Offer a platform for movie lovers to explore, discuss, and celebrate their favorite films.</li>
        <li>Provide insightful reviews, analyses, and thought-provoking content that deepens the appreciation of cinema.</li>
        <li>Support emerging filmmakers by showcasing independent and diverse films.</li>
        <li>Foster meaningful connections between cinephiles and filmmakers, creating a bridge between creators and their audience.</li>
      </ul>
      
      <h3>Thank you for choosing MovieGo as your cinematic companion. We're excited to embark on this cinematic journey with you!</h3>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default AboutUs;
