const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const authenticate = require('./middleware/authenticate');
const authorize = require('./middleware/authorize'); // Import the authorization middleware

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection

const dbURI =
  'mongodb+srv://admin:admin123@marinespotter.hvx7f.mongodb.net/?retryWrites=true&w=majority&appName=MarineSpotter'; // Update this with your MongoDB URI

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// User schema
const userSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }, // Added role
});

const User = mongoose.model('User', userSchema);

// Registration route
app.post('/register', async (req, res) => {
  const { fullName, username, email, password } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({
    fullName,
    username,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', {
    expiresIn: '1h',
  });

  res.json({ token });
});

// Post creation route - Only authenticated users can create posts
app.post('/api/posts', authenticate, async (req, res) => {
  const { title, text } = req.body;

  // Add your post creation logic here
  // Example:
  const newPost = {
    title,
    text,
    userId: req.userId, // Link post to the authenticated user
  };

  res.status(201).json(newPost); // Send back the created post
});

// Protected route: Only admin users can create posts
app.post(
  '/api/admin/posts',
  authenticate,
  authorize(['admin']),
  async (req, res) => {
    const { title, text } = req.body;

    // Add your post creation logic here
    // Example:
    const newPost = {
      title,
      text,
      userId: req.userId, // Link post to the authenticated user
    };

    res.status(201).json(newPost); // Send back the created post
  }
);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
