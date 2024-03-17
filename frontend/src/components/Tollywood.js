import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Tollywood.css";
import Header from "./Header";
import Footer from "./Footer";

//Images

import check from "../components/Images/tollywood/check.jpg";
import pushpa from "../components/Images/tollywood/pushpa-the-rule--part-2.jpg";
import jailer from "../components/Images/tollywood/jailer-vertical.jpg";
import bhola from "../components/Images/tollywood/bholaa-shankar.jpg";
import action from "../components/Images/tollywood/action.jpg";
import thunivu from "../components/Images/tollywood/thunivu.jpg";
import red from "../components/Images/tollywood/red.jpg";
import godse from "../components/Images/tollywood/godse.jpg";

const tollywoodMovies = [
  {
    id: 21,
    title: "Jailer",
    description:
      "Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.",
    ratings: 9.1,
    image: jailer,
    link: "/",
  },
  {
    id: 22,
    title: "Action",
    description:
      "Colonel Subhash, an Indian army officer, is on a mission to catch a mastermind behind a terror attack that took away some of his loved ones.",
    ratings: 7.1,
    image: action,
    link: "/",
  },
  {
    id: 23,
    title: "Thunivu",
    description:
      "A gang goes to rob a bank only to find that there`s already a criminal mastermind holding it for ransom, but his identities and motives behind the heist remains mysterious. As they plan to collect the bounty and disappear without a trace, their crimes and their past slowly catches up with them",
    ratings: 8.9,
    image: thunivu,
    link: "/",
  },
  {
    id: 24,
    title: "Godse",
    description:
      "A reunion with friends changes the way Godse perceives the system. He begins to unravel the system`s hidden agenda that robs off the careers and lives of students. What follows is a fight between Godse and the government for justice.",
    ratings: 8.5,
    image: godse,
    link: "/",
  },
  {
    id: 25,
    title: "Check",
    description:
      "Check is a Telugu movie starring Nithiin, Rakul Preet Singh and Priya Prakash Varrier in prominent roles. It is a drama directed by Chandra Sekhar Yeleti with V. Anand Prasad as producer, forming part of the crew.",
    ratings: 6.8,
    image: check,
    link: "/",
  },
  {
    id: 26,
    title: "Pushpa: The Rul",
    description:
      "Pushpa: The Rule - Part 2 is a Telugu movie starring Allu Arjun, Rashmika Mandanna, and Fahadh Faasil in prominent roles. It is written and directed by Sukumar Bandreddi.",
    ratings: 8.8,
    image: pushpa,
    link: "/",
  },
  {
    id: 27,
    title: "Bhola Shankar",
    description:
      "Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.",
    ratings: 6.1,
    image: bhola,
    link: "/",
  },
  {
    id: 28,
    title: "Red",
    description:
      "An official remake of the 2019 Tamil-language film Thadam, this edge of the seat thriller sees two identical people trying to implicate each other for a crime that one of them was seen committing.",
    ratings: 7.5,
    image: red,
    link: "/",
  },
];

function Tollywood() {
  const [selectedMovie] = useState(null);

  const handleMovieSelection = (movieId) => {
    window.location.href = `/booking/${movieId}`;
  };
  return (
    <>
      <Header />
      <h3 className="heading1">Tollywood Movies</h3>
      <div className="recommended-movies">
        <ul className="movie-list">
          {tollywoodMovies.map((product) => (
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
      <Footer />
    </>
  );
}
export default Tollywood;
