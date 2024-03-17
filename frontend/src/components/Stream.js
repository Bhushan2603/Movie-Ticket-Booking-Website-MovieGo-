import React from "react";
import Slider from "react-slick";
import Header from "./Header"
import Footer from "./Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stream.css";


//Hollywood
import inception from "../components/Images/hollywood/Inception.jpg";
import avenger from "../components/Images/hollywood/Avenger.jpg";
import barbiev from "../components/Images/hollywood/barbie.jpg";
import open from "../components/Images/hollywood/oppenheimer.jpg";
import misson from "../components/Images/hollywood/mission-impossible.jpg";
import meg from "../components/Images/hollywood/the-meg-2-the-trench.jpg";

//Bollywood
import omg from "../components/Images/bollywood/omg-2.jpg";
import gadar from "../components/Images/bollywood/Gadar (3).jpg";
import tu from "../components/Images/bollywood/tu-jhoothi_clipdrop-enhance.jpg";
import Zara from "../components/Images/bollywood/zara-vertical.jpg";
import rocky from "../components/Images/bollywood/rocky-aur-rani-kii-prem-kahaani.jpg";
import gadar2 from "../components/Images/bollywood/gadar (2).jpg";

//Tollywood
import bheeshma from "../components/Images/tollywood/Action2_clipdrop-enhance.jpg";
import jailer from "../components/Images/tollywood/Jailer.jpg";
import bhola from "../components/Images/tollywood/bholaa-shankar.jpg";
import Jailerv from "../components/Images/tollywood/jailer-vertical.jpg";
import check from "../components/Images/tollywood/check.jpg";
import action from "../components/Images/tollywood/action.jpg";

function Stream() {
  
  //Trending
  const trendingMovies = [
    {
      id: 1,
      title: "Inception",
      image: inception,
      rating: 8.8,
    },
    {
      id: 2,
      title: "Avengers: Endgame",
      image: avenger,
      rating: 8.4,
    },
    {
      id: 3,
      title: "Action",
      image: bheeshma,
      rating: 6.5,
    },
    {
      id: 4,
      title: "Gadar 2",
      image: gadar,
      rating: 9.5,
    },
    {
      id: 5,
      title: "Tu Jhuthi Mein Makkar",
      image: tu,
      rating: 9.5,
    },
    {
      id: 6,
      title: "Jailer",
      image: jailer,
      rating: 7.9,
    },
  ];
  //Recommended
  const recommendedMovies = [
    {
      title: "Rocky aur Rani ki Prem Kahani",
      image: rocky,
      description:
        "Rocky Aur Rani Kii Prem Kahaani magnifies the power of love, embraces the complexities of relationships, and celebrates the beauty of both perfect and imperfect families.",
      ratings: "6.5",
      link: "/bollywood",
    },
    {
      title: "Oppenheimer",
      image: open,
      description:
        "The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by Kai Bird and the late Martin J. Sherwin.",
      ratings: "7.9",
      link: "/hollywood",
    },
    {
      title: "Jailer",
      image: Jailerv,
      description:
        "Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.",
      ratings: "9.5",
      link: "/tollywood",
    },
    {
      title: "Zara Hatke Zara Bachke",
      image: Zara,
      description:
        "Kaapil and Somya are a happily married couple from Indore who live in a joint family and decide to get a divorce one fine day. Things don`t go as planned as their family gets to know of it, and thus begins a comedy of errors.",
      ratings: "7.2",
      link: "/bollywood",
    },
    
  ];
  //Bollywood
  const bollywoodMovies = [
    {
      title: "OMG 2",
      image: omg,
      description:
        "Life is bliss until one day Kanti Sharan Mudgal`s son Vivek is blamed for immoral conduct and expelled from school. Overwhelmed, Kanti plans to leave town until a divine intervention leads him to seek justice by taking those responsible to court.",
      ratings: "7.9",
      link: "/bollywood",
    },
    {
      title: "Zara Hatke Zara Bachke",
      image: Zara,
      description:
        "Kaapil and Somya are a happily married couple from Indore who live in a joint family and decide to get a divorce one fine day. Things don`t go as planned as their family gets to know of it, and thus begins a comedy of errors.",
      ratings: "7.2",
      link: "/bollywood",
    },
    {
      title: "Rocky aur Rani ki Prem Kahani",
      image: rocky,
      description:
        "Rocky Aur Rani Kii Prem Kahaani magnifies the power of love, embraces the complexities of relationships, and celebrates the beauty of both perfect and imperfect families.",
      ratings: "6.5",
      link: "/bollywood",
    },
    {
      title: "Gadar 2",
      image: gadar2,
      description:
        "Gadar 2 brings back India`s most loved family of Tara, Sakeena and Jeete; 22 years after its predecessor. Set against the backdrop of Indo-Pakistan war of 1971, Tara Singh, once again, will face every enemy to protect the honor of country and family.",
      ratings: "9.5",
      link: "/bollywood",
    },
    
  ];

  const hollywoodMovies = [
    {
      title: "Oppenheimer",
      image: open,
      description:
        "The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by Kai Bird and the late Martin J. Sherwin.",
      ratings: "7.9",
      link: "/hollywood",
    },
    {
      title: "Mission Impossible: Dead Reckoning - Part One",
      image: misson,
      description:
        "In Mission: Impossible - Dead Reckoning Part One, Ethan Hunt (Tom Cruise) and his IMF team embark on their most dangerous mission yet...",
      ratings: "8.2",
      link: "/hollywood",
    },
    {
      title: "Barbie",
      image: barbiev,
      description:
        "To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you`re a Ken.",
      ratings: "5.5",
      link: "/hollywood",
    },
    {
      title: "Meg 2: The Trench",
      image: meg,
      description:
        "To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you`re a Ken.",
      ratings: "4.5",
      link: "/hollywood",
    },
  ];

  const tollywoodMovies = [
    {
      title: "Action",
      image: action,
      description:
        "Colonel Subhash, an Indian army officer, is on a mission to catch a mastermind behind a terror attack that took away some of his loved ones.",
      ratings: "6.7",
      link: "/tollywood",
    },
    {
      title: "Check",
      image: check,
      description:
        "Check is a Telugu movie starring Nithiin, Rakul Preet Singh and Priya Prakash Varrier in prominent roles. It is a drama directed by Chandra Sekhar Yeleti with V. Anand Prasad as producer, forming part of the crew.",
      ratings: "8.1",
      link: "/tollywood",
    },
    {
      title: "Jailer",
      image: Jailerv,
      description:
        "Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.",
      ratings: "9.5",
      link: "/tollywood",
    },
    {
      title: "Bhola Shankar",
      image: bhola,
      description:
        "A reformed gangster, fueled by a burning desire for justice and to protect his adopted sister, embarks on a relentless quest to hunt down the mobsters responsible.",
      ratings: "6.9",
      link: "/tollywood",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds (3000 milliseconds)
  };

  return (
    //Trending Movies
    <>
    <Header />
    <div className="stream-container">
      <div className="trending-movies">
        <h4>Trending Movies</h4>
        <Slider {...sliderSettings}>
          {trendingMovies.map((movie) => (
            <div key={movie.id} className="movie-slide">
              <img src={movie.image} alt={movie.title} />
              <p>
                {movie.title} {movie.rating}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {/* Recommended Movies */}
      <div className="recommended-movies">
        <h4>Recommended Movies</h4>
        <div className="movie-list">
          {recommendedMovies.map((movie, index) => (
            <div key={index} className="movie-card">
              <a href={movie.link}>
                <img src={movie.image} alt={movie.title} />
              </a>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>Ratings: {movie.ratings}</p>
            </div>
          ))}
          
        </div>
      </div>

      {/* Bollywood Movies */}
      
      <div className="recommended-movies" >

        <h4>Bollywood Movies</h4>
        <div className="movie-list">
          {bollywoodMovies.map((movie, index) => (
            <div key={index} className="movie-card">
              <a href={movie.link}>
                <img src={movie.image} alt={movie.title} />
              </a>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>Ratings: {movie.ratings}</p>
            </div>
          ))}
          </div>
      </div>

      {/* Hollywood Movies */}
      <div className="recommended-movies">
        <h4>Hollywood Movies</h4>
        <div className="movie-list">
          {hollywoodMovies.map((movie, index) => (
            <div key={index} className="movie-card">
              <a href={movie.link}>
                <img src={movie.image} alt={movie.title} />
              </a>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>Ratings: {movie.ratings}</p>
            </div>
          ))}
          </div>
      </div>
      {/* Tollywood Movies */}
      <div className="recommended-movies">
        <h4>Tollywood Movies</h4>
        <div className="movie-list">
          {tollywoodMovies.map((movie, index) => (
            <div key={index} className="movie-card">
              <a href={movie.link}>
                <img src={movie.image} alt={movie.title} />
              </a>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <p>Ratings: {movie.ratings}</p>
            </div>
          ))}
         
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Stream;
