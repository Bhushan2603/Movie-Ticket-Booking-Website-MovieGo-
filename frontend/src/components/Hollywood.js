import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Hollywood.css";
import Header from "./Header";
import Footer from "./Footer";



//Images
import misson from "../components/Images/hollywood/mission-impossible.jpg";
import open from "../components/Images/hollywood/oppenheimer.jpg";
import barbie from "../components/Images/hollywood/barbie.jpg";
import meg from "../components/Images/hollywood/the-meg-2-the-trench.jpg"

import nun from "../components/Images/hollywood/the-nun.jpg";
import inception from "../components/Images/hollywood/inception-vertical.jpg";
import dark from "../components/Images/hollywood/the-dark-knight.jpg";
import avenger from "../components/Images/hollywood/avengers-end-game.jpg";

const hollywoodMovies = [
  {
    id: 13,
    title: "Mission Impossible: Dead Reckoning",
    description: "In Mission: Impossible - Dead Reckoning Part One, Ethan Hunt (Tom Cruise) and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands.",
    ratings: 9.1,
    image: misson,
    link: "/",
  },
  {
    id: 14,
    title: "The Nun II",
    description: "The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.",
    ratings: 8.7,
    image: nun,
    link: "/",
  },
  {
    id: 15,
    title: "Meg 2: The Trench",
    description: "Dive into uncharted waters with Jason Statham and global action icon Wu Jing as they lead a daring research team on an exploratory dive into the deepest depths of the ocean. Pitted against colossal Megs and relentless environmental plunderers, our heroes must outrun, outsmart, and outswim their merciless predators in a pulse-pounding race against time.",
    ratings: 7.4,
    image: meg,
    link: "/",meg
  },
  {
    id: 16,
    title: "Avengers: Endgame",
    description: "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios` grand conclusion to twenty-two films, Avengers: Endgame.",
    ratings: 5.9,
    image: avenger,
    link: "/",
  },
  {
    id: 17,
    title: "Oppenheimer",
    description: "The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by Kai Bird and the late Martin J. Sherwin.",
    ratings: 8.8,
    image: open,
    link: "/",
  },
  {
    id: 18,
    title: "The Dark Knight",
    description: "With Lieutenant Jim Gordon and district attorney Harvey Dent, Batman sets out to destroy organized crime but they find themselves prey to a criminal mastermind called The Joker.",
    ratings: 6.5,
    image: dark,
    link: "/",
  },
  {
    id: 19,
    title: "Inception",
    description: "Dom is skilled at stealing secrets from dreams, but it cost him everything. Now, he is offered his life back if he can pull off the reverse and plant an idea in a C.E.O`s mind.",
    ratings: 9.8,
    image: inception,
    link: "/",
  },
  {
    id: 20,
    title: "Barbie",
    description: "To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you`re a Ken.",
    ratings: 7.4,
    image: barbie,
    link: "/",
  },
];

function Hollywood() {
  const [selectedMovie] = useState(null);

  const handleMovieSelection = (movieId) => {
    window.location.href = `/booking/${movieId}`;
  };
  return (
    <>
    <Header/>
      <h3 className="heading1">Hollywood Movies</h3>
      <div className="recommended-movies">
        <ul className="movie-list">
          {hollywoodMovies.map((product) => (
            <li key={product.id} className="movie-card">
              <div onClick={() => handleMovieSelection(product.id)}>
                <img
                  className="pimg"
                  src={product.image}
                  alt={product.title}
                />
                <div className="product-details">
                  <p className="MovieTitle">{product.title}</p>
                  <p className="description">{product.description}</p>
                  <p className="ratings">Ratings : {product.ratings}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedMovie && (
        <div className="selected-movie">
          <img src={selectedMovie.image} alt={selectedMovie.title} />
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.description}</p>
          <p>Ratings : {selectedMovie.ratings}</p>
          <Link to={`/booking/${selectedMovie.id}`}>Book Tickets</Link>
        </div>
      )}
      <Footer/>
    </>
  );
}
export default Hollywood;
