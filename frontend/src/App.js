import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Stream from "./components/Stream";
import Bollywood from "./components/Bollywood";
import Tollywood from "./components/Tollywood";
import Hollywood from "./components/Hollywood";
import AboutUs from "./components/AboutUs";
import Booking from "./components/Booking";
import Account from "./components/Account";
import ContactUs from "./components/ContactUs";
import AdminLogin from "./components/AdminLogin";
import AdminPage from "./components/AdminPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Stream />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/tollywood" element={<Tollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/bollywood" element={<Booking />} />
        <Route path="/booking/:productId" element={<Booking />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminpage" element={<AdminPage />} />

      </Routes>
    </Router>
  );
}

export default App;
