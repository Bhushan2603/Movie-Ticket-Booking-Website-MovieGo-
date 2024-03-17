import React, { useState, useEffect } from "react";
import "./AdminPage.css";

function AdminPage() {
  const [registrations, setRegistrations] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch user registrations and booking data from your server
    fetchRegistrations();
    fetchBookings();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/fetchregistrations");
      if (!response.ok) {
        throw new Error("Failed to fetch registrations");
      }
      const data = await response.json();
      setRegistrations(data);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/fetchbookings");
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }
      const data = await response.json();

      // Convert selectedSeats array to comma-separated string
      const formattedBookings = data.map((booking) => ({
        ...booking,
        selectedSeats: booking.selectedSeats.join(", "),
      }));

      setBookings(formattedBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  return (
    <div className="admin-page">
        <button className="backbtn" ><a href="/stream" className="a1">Back To Home</a></button>
      <h1 className="admin-title">ADMIN PAGE</h1>
      <hr className="hr"></hr>
      <div className="registrations-table">
        <h2 className="section-title">User Registrations</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bookings-table">
        <h2 className="section-title">Total Tickets Booked</h2>
        <table>
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Full Name</th>
              <th>Number</th>
              <th>City</th>
              <th>Multiplex</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.movieTitle}</td>
                <td>{booking.fullName}</td>
                <td>{booking.mobileNumber}</td>
                <td>{booking.selectedCity}</td>
                <td>{booking.cinemaHouse}</td>
                <td className="comma-separated">{booking.selectedSeats}</td>
                <td>{booking.price} Rs</td>
                <td>{booking.selectedTimeSlot}</td>
                <td>{booking.selectedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPage;
