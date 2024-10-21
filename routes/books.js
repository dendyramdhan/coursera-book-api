const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksController');
const { verifyToken } = require('../utils/auth');

// Task 1: Get all books
router.get('/', bookController.getAllBooks);

// Task 2: Get books by ISBN
router.get('/:isbn', bookController.getBookByISBN);

// Task 3: Get books by Author
router.get('/author/:authorName', bookController.getBooksByAuthor);

// Task 4: Get books by Title
router.get('/title/:title', bookController.getBooksByTitle);

// Task 5: Get book reviews
router.get('/:isbn/review', bookController.getBookReview);

// Task 8: Add/Modify book review (Protected)
router.post('/:isbn/review', verifyToken, bookController.addOrModifyReview);

// Task 9: Delete book review (Protected)
router.delete('/:isbn/review', verifyToken, bookController.deleteReview);

module.exports = router;