const jwt = require('jsonwebtoken');

// Simulated user data (You can replace this with real DB)
let users = [];

// Task 6: Register a new user
exports.registerUser = (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  users.push({ username, password });
  res.json({ message: 'User registered successfully' });
};

// Task 7: Login as a registered user
exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
};
