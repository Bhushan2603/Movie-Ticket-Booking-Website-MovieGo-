import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Account.css";
import Header from "./Header";
import Footer from "./Footer";

function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

 
  useEffect(() => {
    // Check if the user is logged in by verifying the JWT token in local storage
    const token = localStorage.getItem("token");
    console.log("Token from local storage:", token); // Add this line to print the token

    fetch("http://localhost:3001/api/userbookings", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((userBookings) => {
        setBookings(userBookings);
      })
      .catch((error) => {
        console.error("Error fetching user bookings:", error);
      });
      
    if (token) {
      // If the token is present, fetch user details from the server
      fetch("http://localhost:3001/api/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      })
      
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Redirect to the home page (Stream)
    navigate("/stream");
  };

  return (
    <>
    <Header/>
    <div className="account-container">
      <div className="account-card">
        <h2>Account Details</h2>
        {user ? (
          <>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            {/* Display user bookings */}
      
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <p>You are not logged in.</p>
            <Link to="/login" className="login-link">
              Log in
            </Link>
          </>
        )}
      </div>
      <div className="bookings-container">
        <h2 className="btitle">Your Bookings</h2>
        {bookings.length > 0 ? (
          <ul>
            {bookings.map((booking) => (
              <li className="list" key={booking._id}>
                <div className="booking-ticket">
                  <h3>{booking.movieTitle}</h3>
                  <p>
                    <strong>Seats:</strong> {booking.selectedSeats}
                  </p>
                  <p>
                    <strong>Time Slot:</strong> {booking.selectedTimeSlot}
                  </p>
                  <p>
                    <strong>Date:</strong> {booking.selectedDate}
                  </p>
                  <p>
                    <strong>Cinema House:</strong> {booking.cinemaHouse}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have no bookings.</p>
        )}
      </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default Account;
