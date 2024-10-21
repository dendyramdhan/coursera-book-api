const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Import routes
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');

app.use('/books', bookRoutes);
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});