const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');

const app = express();

// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Your secret key:', secretKey);

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/moviego", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Register = mongoose.model("Register", {
  username: String,
  email: String,
  password: String,
});

const bookingSchema = new mongoose.Schema({
  movieTitle: String,
  price: Number,
  fullName: String,
  selectedDate: Date,
  selectedCity: String,
  mobileNumber: String,
  cinemaHouse: String,
  selectedTimeSlot: String,
  selectedSeats: [String], // Assuming selectedSeats is an array of seat numbers
  paymentMethod: String,
  userId: mongoose.Schema.Types.ObjectId, // Reference to the user who made the booking
});

const Booking = mongoose.model('Booking', bookingSchema);


app.post("/api/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await Register.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new Register({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
    
    
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await Register.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid Email" });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }



    // Create a JWT token for authentication
    const token = jwt.sign({ userId: user._id }, secretKey, {
   
      expiresIn: "10h", // Token expires in 1 hour (adjust as needed)
      
    }); 


    res.status(200).json({ token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/user", async (req, res) => {
  try {
    // Retrieve the user ID from the JWT token
    const token = req.headers.authorization;
    console.log("Received token for verification:", token);

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    // Remove "Bearer " prefix from the token
    const cleanToken = token.replace("Bearer ", "");
 

    jwt.verify(cleanToken, secretKey, async (err, decoded) => {
      if (err) {
        console.log(`at the time of verify ${err}`);
        return res.status(401).json({ error: "Unauthorized" });
      }
    
      // Use the decoded user ID to fetch user data from the database
      const user = await Register.findById(decoded.userId);
    
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
    
      // Send the user data to the client
      res.status(200).json({ username: user.username, email: user.email });
    });
    
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/bookings", async (req, res) => {
  try {
    // Extract booking data from the request
    const {
      movieTitle,
      price,
      fullName,
      selectedDate,
      selectedCity,
      mobileNumber,
      cinemaHouse,
      selectedTimeSlot,
      selectedSeats,
      paymentMethod,
    } = req.body;

    // Retrieve the user ID from the JWT token
    const token = req.headers.authorization;
    console.log("Received token for verification:", token);

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    
    // Remove "Bearer " prefix from the token
    const cleanToken = token.replace("Bearer ", "");

    jwt.verify(cleanToken, secretKey, async (err, decoded) => {
      if (err) {
        console.log(`at the time of verify ${err}`);
        
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Create a new booking document with the user's ID obtained from JWT token verification
      const booking = new Booking({
        movieTitle,
        price,
        fullName,
        selectedDate,
        selectedCity,
        mobileNumber,
        cinemaHouse,
        selectedTimeSlot,
        selectedSeats,
        paymentMethod,
        userId: decoded.userId,
      });

      // Save the booking to the database
      await booking.save();

      res.status(201).json({ message: "Booking created successfully" });
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add these routes to your Node.js server

// Fetch user registrations
app.get("/api/fetchregistrations", async (req, res) => {
  try {
    const registrations = await Register.find({}, "username email");
    res.json(registrations);
  } catch (error) {
    console.error("Error fetching registrations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch bookings
app.get("/api/fetchbookings", async (req, res) => {
  try {
    const bookings = await Booking.find({}, "movieTitle price fullName mobileNumber selectedCity cinemaHouse selectedSeats selectedTimeSlot selectedDate");
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add this route to fetch user bookings
app.get("/api/userbookings", async (req, res) => {
  try {
    // Retrieve the user ID from the JWT token
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Remove "Bearer " prefix from the token
    const cleanToken = token.replace("Bearer ", "");

    jwt.verify(cleanToken, secretKey, async (err, decoded) => {
      if (err) {
        console.error(`Error verifying token: ${err}`);
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Fetch all bookings associated with the user's ID
      const userBookings = await Booking.find({ userId: decoded.userId });

      res.status(200).json(userBookings);
    });
  } catch (error) {
    console.error("Error fetching user bookings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
