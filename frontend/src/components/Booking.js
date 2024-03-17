import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./Booking.css";
import Header from "./Header";

//Bollywood

import Rocky from "../components/Images/bollywood/rocky-aur-rani-kii-prem-kahaani.jpg";
import Zara from "../components/Images/bollywood/Zara-Hatke-Zara-Bach-Ke.jpg";
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

//Hollywood
import misson from "../components/Images/hollywood/mission-impossible.jpg";
import open from "../components/Images/hollywood/oppenheimer.jpg";
import barbie from "../components/Images/hollywood/barbie.jpg";
import meg from "../components/Images/hollywood/the-meg-2-the-trench.jpg"

import nun from "../components/Images/hollywood/the-nun.jpg";
import inception from "../components/Images/hollywood/inception-vertical.jpg";
import dark from "../components/Images/hollywood/the-dark-knight.jpg";
import avenger from "../components/Images/hollywood/avengers-end-game.jpg";

//Tollywood

import check from "../components/Images/tollywood/check.jpg";
import pushpa from "../components/Images/tollywood/pushpa-the-rule--part-2.jpg";
import jailer from "../components/Images/tollywood/jailer-vertical.jpg";
import bhola from "../components/Images/tollywood/bholaa-shankar.jpg";
import action from "../components/Images/tollywood/action.jpg";
import thunivu from "../components/Images/tollywood/thunivu.jpg";
import red from "../components/Images/tollywood/red.jpg";
import godse from "../components/Images/tollywood/godse.jpg";

// Sample movie data (replace with actual data)

const products = [
  {
    id: 1,
    title: "Rocky aur Rani ki Prem Kahani",
    description:
      "Rocky Aur Rani Kii Prem Kahaani magnifies the power of love, embraces the complexities of relationships, and celebrates the beauty of both perfect and imperfect families.",
    ratings: 6.9,
    image: Rocky,
    price: 150,
  },
  {
    id: 2,
    title: "URI - The Surgical Strike",
    description:
      "URI chronicles the events of the surgical strike conducted by the Indian military against the suspected militants in Pakistan occupied Kashmir (PoK). It tells the story of the 11 tumultuous events over which the operation was carried out.",
    ratings: 8.5,
    image: uri,
    price: 150,
  },
  {
    id: 3,
    title: "Tu Jhoothi Main Makkaar",
    description:
      "Madness ensues when a `player` in the world of romantic relationships finds a girl who`s a worthy opponent. Tu Jhoothi Main Makkaar is a film that believes love is a battle of wits.",
    ratings: 7.7,
    image: makkar,
    price: 150,
  },
  {
    id: 4,
    title: "Yeh Jawaani Hai Deewani",
    description:
      "A free-spirited Bunny aspires to become a travel reporter and does not wish to get married, until he reunites with his shy and nerdy classmate Naina, and falls in love with her.",
    ratings: 9.8,
    image: jawaani,
    price: 150,
  },
  {
    id: 5,
    title: "Zara Hatke Zara Bachke",
    description:
      "Kaapil and Somya are a happily married couple from Indore who live in a joint family and decide to get a divorce one fine day. Things don`t go as planned as their family gets to know of it, and thus begins a comedy of errors.",
    ratings: 7.3,
    image: Zara,
    price: 150,
  },
  {
    id: 6,
    title: "Luka Chuppi",
    description:
      "Guddu, the star reporter of a local news channel in Mathura, falls for Rashmi, a feisty young woman. The couple decides to try a live-in relationship, but what happens when their old-fashioned family members decide to pry into their lives?",
    ratings: 6.8,
    image: lukka,
    price: 150,
  },
  {
    id: 7,
    title: "Chup",
    description:
      "Chup is the story of a psychopath killer who is targeting film critics. A series of bizarre and disturbing murders rock the city of Mumbai. Film critics are being killed week after week with the release of every new film.",
    ratings: 8.1,
    image: chup,
    price: 150,
  },
  {
    id: 8,
    title: "Sonu Ke Titu Ki Sweety",
    description:
      "We have always been told that Marriage is a marriage between two families. `Sonu ke Titu ki Sweety` explores the new age version of the same belief where Marriage is a marriage between two friend circles. What happens when you decide to get married, but your best friend and your girlfriend can`t see eye to eye.",
    ratings: 8.6,
    image: sonu,
    price: 150,
  },
  {
    id: 9,
    title: "OMG 2",
    description:
      "Life is bliss until one day Kanti Sharan Mudgal`s son Vivek is blamed for immoral conduct and expelled from school. Overwhelmed, Kanti plans to leave town until a divine intervention leads him to seek justice by taking those responsible to court.",
    ratings: 7.5,
    image: Omg,
    price: 150,
  },
  {
    id: 10,
    title: "Drishyam 2",
    description:
      "7 years after the case related to Vijay Salgaonkar and his family was closed, a series of unexpected events bring a truth to light that threatens to change everything for the Salgaonkars. Can Vijay save his family this time?",
    ratings: 9.1,
    image: drishyam,
    price: 150,
  },
  {
    id: 11,
    title: "Dream Girl 2",
    description:
      "Karam, a small-town boy from Mathura, is struggling to pay his father`s debt, who has borrowed money from nearly everyone on the planet. On the other hand, he is deeply in love with Pari, whose father has kept conditions to marry her. To make ends meet, Karam dons as Pooja, which creates wild chaos and a comedy of errors.",
    ratings: 7.1,
    image: dream,
    price: 150,
  },
  {
    id: 12,
    title: "Gadar 2 ",
    description:
      "Gadar 2 brings back India`s most loved family of Tara, Sakeena and Jeete; 22 years after its predecessor. Set against the backdrop of Indo-Pakistan war of 1971, Tara Singh, once again, will face every enemy to protect the honor of country and family.",
    ratings: 8.8,
    image: gadar,
    price: 150,
  },
  //Hollywood Movies
  {
    id: 13,
    title: "Mission Impossible: Dead Reckoning",
    description: "In Mission: Impossible - Dead Reckoning Part One, Ethan Hunt (Tom Cruise) and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands.",
    ratings: 9.1,
    image: misson,
    price: 150,
  },
  {
    id: 14,
    title: "The Nun II",
    description: "The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.",
    ratings: 8.7,
    image: nun,
    price: 150,
  },
  {
    id: 15,
    title: "Meg 2: The Trench",
    description: "Dive into uncharted waters with Jason Statham and global action icon Wu Jing as they lead a daring research team on an exploratory dive into the deepest depths of the ocean. Pitted against colossal Megs and relentless environmental plunderers, our heroes must outrun, outsmart, and outswim their merciless predators in a pulse-pounding race against time.",
    ratings: 7.4,
    image: meg,
    price: 150,meg
  },
  {
    id: 16,
    title: "Avengers: Endgame",
    description: "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios` grand conclusion to twenty-two films, Avengers: Endgame.",
    ratings: 5.9,
    image: avenger,
    price: 150,
  },
  {
    id: 17,
    title: "Oppenheimer",
    description: "The film is based on the Pulitzer Prize-winning book American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by Kai Bird and the late Martin J. Sherwin.",
    ratings: 8.8,
    image: open,
    price: 150,
  },
  {
    id: 18,
    title: "The Dark Knight",
    description: "With Lieutenant Jim Gordon and district attorney Harvey Dent, Batman sets out to destroy organized crime but they find themselves prey to a criminal mastermind called The Joker.",
    ratings: 6.5,
    image: dark,
    price: 150,
  },
  {
    id: 19,
    title: "Inception",
    description: "Dom is skilled at stealing secrets from dreams, but it cost him everything. Now, he is offered his life back if he can pull off the reverse and plant an idea in a C.E.O`s mind.",
    ratings: 9.8,
    image: inception,
    price: 150,
  },
  {
    id: 20,
    title: "Barbie",
    description: "To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you`re a Ken.",
    ratings: 7.4,
    image: barbie,
    price: 150,
  },
  //Tollywood Movies
  {
    id: 21,
    title: "Jailer",
    description:
      "Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.",
    ratings: 9.1,
    image: jailer,
    price: 150,
  },
  {
    id: 22,
    title: "Action",
    description:
      "Colonel Subhash, an Indian army officer, is on a mission to catch a mastermind behind a terror attack that took away some of his loved ones.",
    ratings: 7.1,
    image: action,
    price: 150,
  },
  {
    id: 23,
    title: "Thunivu",
    description:
      "A gang goes to rob a bank only to find that there`s already a criminal mastermind holding it for ransom, but his identities and motives behind the heist remains mysterious. As they plan to collect the bounty and disappear without a trace, their crimes and their past slowly catches up with them",
    ratings: 8.9,
    image: thunivu,
    price: 150,
  },
  {
    id: 24,
    title: "Godse",
    description:
      "A reunion with friends changes the way Godse perceives the system. He begins to unravel the system`s hidden agenda that robs off the careers and lives of students. What follows is a fight between Godse and the government for justice.",
    ratings: 8.5,
    image: godse,
    price: 150,
  },
  {
    id: 25,
    title: "Check",
    description:
      "Check is a Telugu movie starring Nithiin, Rakul Preet Singh and Priya Prakash Varrier in prominent roles. It is a drama directed by Chandra Sekhar Yeleti with V. Anand Prasad as producer, forming part of the crew.",
    ratings: 6.8,
    image: check,
    price: 150,
  },
  {
    id: 26,
    title: "Pushpa: The Rul",
    description:
      "Pushpa: The Rule - Part 2 is a Telugu movie starring Allu Arjun, Rashmika Mandanna, and Fahadh Faasil in prominent roles. It is written and directed by Sukumar Bandreddi.",
    ratings: 8.8,
    image: pushpa,
    price: 150,
  },
  {
    id: 27,
    title: "Bhola Shankar",
    description:
      "Muthuvel Pandian is a strict yet empathetic jailer who must stop a gang from trying to rescue their leader from prison.",
    ratings: 6.1,
    image: bhola,
    price: 150,
  },
  {
    id: 28,
    title: "Red",
    description:
      "An official remake of the 2019 Tamil-language film Thadam, this edge of the seat thriller sees two identical people trying to implicate each other for a crime that one of them was seen committing.",
    ratings: 7.5,
    image: red,
    price: 150,
  },
  
];


 
   


const movieDurationHours = 2;
const movieDurationMinutes = 30;
const totalMovieDurationMinutes =
  movieDurationHours * 60 + movieDurationMinutes;

function calculateTimeSlots(startTime) {
  const timeSlots = [];
  let currentTime = startTime;

  while (currentTime <= 1440 - totalMovieDurationMinutes) {
    // 1440 minutes in a day
    const hours = Math.floor(currentTime / 60);
    const minutes = currentTime % 60;

    timeSlots.push(
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`
    );
    currentTime += totalMovieDurationMinutes;
  }

  return timeSlots;
}

function Booking() {
  
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  useEffect(() => {
    // Display a confirmation dialog when the component loads
    const isConfirmed = window.confirm("Have you logged in?");

    if (!isConfirmed) {
      // If the user clicks "No," redirect to the home page (stream.js)
      window.location.href = "/stream"; // Adjust the URL as needed
    }
  }, []);

  const [formData, setFormData] = useState({
    selectedDate: null,
    selectedCity: "",
    mobileNumber: "",
    cinemaHouse: "",
    selectedTimeSlot: "",
    selectedPaymentMethod: "",
  });


  const paymentMethods = ["Debit/Credit Card", "UPI", "Net banking"];
  // Booking.js

// ... (other imports and component code)

const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    const bookingData = {
      movieTitle: product.title,
      price: product.price,
      fullName: formData.fullName,
      selectedDate: formData.selectedDate,
      selectedCity: formData.selectedCity,
      mobileNumber: formData.mobileNumber,
      cinemaHouse: formData.cinemaHouse,
      selectedTimeSlot: formData.selectedTimeSlot,
      selectedSeats: selectedSeats,
      paymentMethod: formData.selectedPaymentMethod,
    };

    console.log(bookingData);

    const token = localStorage.getItem("token");
    console.log("Token from local storage:", token); // Add this line to print the token
    const response = await fetch('http://localhost:3001/api/bookings', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(bookingData),
    });

    if (response.status === 201) {
      // Booking successful
      alert("Yahh!! Your are going to watch this movie...");
      navigate('/stream');
      
    } else if (response.status === 401) {
      // Unauthorized, show an alert to the user
      alert('You need to login first to book a ticket.');
      
    } else {
      // Handle other booking errors
      console.error('Booking failed');
    }
  } catch (error) {
    console.error('Error creating booking:', error);
  }
};



  
  const handleMobileNumberChange = (e) => {
    const inputMobileNumber = e.target.value;
    if (/^\d{0,10}$/.test(inputMobileNumber)) {
      setFormData({ ...formData, mobileNumber: inputMobileNumber });
    }
  };
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const seatsPerRow = 7;

  const generateSeats = (row, seatsPerRow) => {
    return Array.from({ length: seatsPerRow }, (_, index) => row + (index + 1));
  };

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };


  return (
    <>
      <Header />
      <div className="product-description">
        <div className="booking-card">
          <img
            src={product.image}
            alt={product.title}
            className="movie-image"
          />
          <div className="movie-details">
            <h2 className="movie-title">{product.title}</h2>
            <p className="movie-description">{product.description}</p>
            <p className="movie-ratings">Ratings: {product.ratings}</p>
            <p className="movie-title">Price: Rs.{product.price}</p>
          </div>
        </div>

        <div className="booking-form">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input-field"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              <label>Select Date</label>
              <DatePicker
                className="date"
                selected={formData.selectedDate}
                onChange={(date) =>
                  setFormData({ ...formData, selectedDate: date })
                }
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                required
              />

              <label>Select City</label>
              <select
                value={formData.selectedCity}
                required
                onChange={(e) =>
                  setFormData({ ...formData, selectedCity: e.target.value })
                }
                className="city-select"
              >
                <option value="">Select City</option>
                <option value="surat">Surat</option>
                <option value="ahemdabad">Ahemdabad</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Porbandar">Porbandar</option>
                <option value="Mumbai">Mumbai</option>
                <option value="New Delhi">New Delhi</option>
              </select>
              <label>Mobile Number</label>
              <input
                type="tel"
                value={formData.mobileNumber}
                onChange={handleMobileNumberChange}
                className="mobile-number-input"
                required
              />
              <label htmlFor="cinemaHouse" className="form-label" required>
                Cinema House
              </label>
              <select
                id="cinemaHouse"
                className="cinema-house-dropdown"
                value={formData.cinemaHouse}
                required
                onChange={(e) =>
                  setFormData({ ...formData, cinemaHouse: e.target.value })
                }
              >
                <option value="">Select cinema house</option>
                <option value="Miraj Cinemas">Miraj Cinemas</option>
                <option value="Apple Multiplex">Apple Multiplex</option>
                <option value="Cinemax Shows">Cinemax Shows</option>
                <option value="PVR Acropolis">PVR Acropolis</option>
                <option value="Rajhans Cinemas">Rajhans Cinemas</option>
                <option value="Rupam Multiplex">Rupam Multiplex</option>
                <option value="Wide Angle">Wide Angle</option>
                <option value="Inox Multiplex">Inox Multiplex</option>
              </select>
              <label>Timing </label>
              <select
                className="time-slot-dropdown"
                value={formData.selectedTimeSlot}
                required
                onChange={(e) =>
                  setFormData({ ...formData, selectedTimeSlot: e.target.value })
                }
              >
                <option value="">Select Time Slot</option>
                {calculateTimeSlots(600).map(
                  (
                    timeSlot,
                    index // Starting from 10:00 AM (600 minutes)
                  ) => (
                    <option key={index} value={timeSlot}>
                      {timeSlot}
                    </option>
                  )
                )}
              </select>
              <label>Select Payment Method:</label>
              <select
                value={formData.selectedPaymentMethod}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    selectedPaymentMethod: e.target.value,
                  })
                }
                className="payment-method-select"
              >
                <option value="">Select payment method</option>
                {paymentMethods.map((method, index) => (
                  <option key={index} value={method}>
                    {method}
                  </option>
                ))}
              </select>
            </div>
            <div className="seat-card">
              <h2 className="h2-title">Book Seat</h2>
              <div className="seat-selection">
                {alphabet.split("").map((row) => (
                  <div key={row} className="seat-row">
                    {generateSeats(row, seatsPerRow).map((seat) => (
                      <div
                        key={seat}
                        className={`seat-block ${
                          selectedSeats.includes(row + seat) ? "selected" : ""
                        }`}
                        onClick={() => handleSeatClick(row + seat)}
                      >
                        {row + seat}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="button-wrapper">
              <button type="submit" className="book-button">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
      
      
    </>
  );
}

export default Booking ; 