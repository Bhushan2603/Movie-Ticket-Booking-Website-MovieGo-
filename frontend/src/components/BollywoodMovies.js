import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BollywoodMovies.css"; // Import the CSS file for styling
import Header from "./Header";
import Footer from "./Footer";

//Images
import Rocky from "../components/Images/bollywood/rocky-aur-rani-kii-prem-kahaani.jpg";
import Zara from "../components/Images/bollywood/zara-vertical.jpg";
import Omg from "../components/Images/bollywood/omg-2.jpg";
import gadar from "../components/Images/bollywood/gadar (2).jpg";

import jawaani from "../components/Images/bollywood/yeh-jawaani-hai-deewani.jpg";
import uri from "../components/Images/bollywood/uri.jpg";
import lukka from "../components/Images/bollywood/luka-chuppi.jpg";
import chup from "../components/Images/bollywood/chup.jpg";

import makkar from "../components/Images/bollywood/tu-jhoothi-main-makkaar.jpg";
import dream from "../components/Images/bollywood/dream-girl-2.jpg";
import drishyam from "../components/Images/bollywood/drishyam-2.jpg";
import sonu from "../components/Images/bollywood/sonu-ke-titu-ki-sweety.jpg";

// Sample movie data (replace with actual data)

const products = [
  {
    id: 1,
    title: "Rocky aur Rani ki Prem Kahani",
    description:
      "Rocky Aur Rani Kii Prem Kahaani magnifies the power of love, embraces the complexities of relationships, and celebrates the beauty of both perfect and imperfect families.",
    ratings: 6.9,
    image: Rocky,
    link: "/",
  },
  {
    id: 2,
    title: "URI - The Surgical Strike",
    description:
      "URI chronicles the events of the surgical strike conducted by the Indian military against the suspected militants in Pakistan occupied Kashmir (PoK). It tells the story of the 11 tumultuous events over which the operation was carried out.",
    ratings: 8.5,
    image: uri,
    link: "/",
  },
  {
    id: 3,
    title: "Luka Chuppi",
    description:
      "Guddu, the star reporter of a local news channel in Mathura, falls for Rashmi, a feisty young woman. The couple decides to try a live-in relationship, but what happens when their old-fashioned family members decide to pry into their lives?",
    ratings: 6.8,
    image: lukka,
    link: "/",
  },
  {
    id: 4,
    title: "Chup",
    description:
      "Chup is the story of a psychopath killer who is targeting film critics. A series of bizarre and disturbing murders rock the city of Mumbai. Film critics are being killed week after week with the release of every new film.",
    ratings: 8.1,
    image: chup,
    link: "/",
  },
  {
    id: 5,
    title: "Yeh Jawaani Hai Deewani",
    description:
      "A free-spirited Bunny aspires to become a travel reporter and does not wish to get married, until he reunites with his shy and nerdy classmate Naina, and falls in love with her.",
    ratings: 9.8,
    image: jawaani,
    link: "/",
  },
  {
    id: 6,
    title: "Tu Jhoothi Main Makkaar",
    description:
      "Madness ensues when a `player` in the world of romantic relationships finds a girl who`s a worthy opponent. Tu Jhoothi Main Makkaar is a film that believes love is a battle of wits.",
    ratings: 7.7,
    image: makkar,
    link: "/",
  },
  {
    id: 7,
    title: "Zara Hatke Zara Bachke",
    description:
      "Kaapil and Somya are a happily married couple from Indore who live in a joint family and decide to get a divorce one fine day. Things don`t go as planned as their family gets to know of it, and thus begins a comedy of errors.",
    ratings: 7.3,
    image: Zara,
    link: "/",
  },

  {
    id: 8,
    title: "Sonu Ke Titu Ki Sweety",
    description:
      "We have always been told that Marriage is a marriage between two families. `Sonu ke Titu ki Sweety` explores the new age version of the same belief where Marriage is a marriage between two friend circles. What happens when you decide to get married, but your best friend and your girlfriend can`t see eye to eye.",
    ratings: 8.6,
    image: sonu,
    link: "/",
  },
  {
    id: 9,
    title: "OMG 2",
    description:
      "Life is bliss until one day Kanti Sharan Mudgal`s son Vivek is blamed for immoral conduct and expelled from school. Overwhelmed, Kanti plans to leave town until a divine intervention leads him to seek justice by taking those responsible to court.",
    ratings: 7.5,
    image: Omg,
    link: "/",
  },
  {
    id: 10,
    title: "Drishyam 2",
    description:
      "7 years after the case related to Vijay Salgaonkar and his family was closed, a series of unexpected events bring a truth to light that threatens to change everything for the Salgaonkars. Can Vijay save his family this time?",
    ratings: 9.1,
    image: drishyam,
    link: "/",
  },
  {
    id: 11,
    title: "Dream Girl 2",
    description:
      "Karam, a small-town boy from Mathura, is struggling to pay his father`s debt, who has borrowed money from nearly everyone on the planet. On the other hand, he is deeply in love with Pari, whose father has kept conditions to marry her. To make ends meet, Karam dons as Pooja, which creates wild chaos and a comedy of errors.",
    ratings: 7.1,
    image: dream,
    link: "/",
  },
  {
    id: 12,
    title: "Gadar 2 ",
    description:
      "Gadar 2 brings back India`s most loved family of Tara, Sakeena and Jeete; 22 years after its predecessor. Set against the backdrop of Indo-Pakistan war of 1971, Tara Singh, once again, will face every enemy to protect the honor of country and family.",
    ratings: 8.8,
    image: gadar,
    link: "/",
  },
  // ... Add more movie objects
];

function ProductListingPage() {
  const [selectedMovie] = useState(null);

  const handleMovieSelection = (movieId) => {
    window.location.href = `/booking/${movieId}`;
  };
  return (
    <>
      <Header />
      <h3 className="heading1">Bollywood Movies</h3>
      <div className="recommended-movies">
        <ul className="product-grid">
          {products.map((product) => (
            <li key={product.id} className="product-item">
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

export default ProductListingPage;
