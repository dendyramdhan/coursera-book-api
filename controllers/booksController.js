const axios = require('axios');

// Simulate a book database (you can replace this with real DB calls)
let books = [
  { isbn: '123', title: 'Book One', author: 'Author One', reviews: [] },
  { isbn: '456', title: 'Book Two', author: 'Author Two', reviews: [] },
];

// Task 1: Get all books
exports.getAllBooks = async (req, res) => {
  res.json(books);
};

// Task 2: Get book by ISBN
exports.getBookByISBN = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Task 3: Get books by Author
exports.getBooksByAuthor = (req, res) => {
  const authorBooks = books.filter(b => b.author === req.params.authorName);
  res.json(authorBooks);
};

// Task 4: Get books by Title
exports.getBooksByTitle = (req, res) => {
  const titleBooks = books.filter(b => b.title === req.params.title);
  res.json(titleBooks);
};

// Task 5: Get book review by ISBN
exports.getBookReview = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  if (book) {
    res.json(book.reviews);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Task 8: Add or Modify review (Protected)
exports.addOrModifyReview = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  if (book) {
    const review = req.body.review;
    const user = req.user; // From the token payload
    const existingReview = book.reviews.find(r => r.user === user.username);
    if (existingReview) {
      existingReview.review = review;
    } else {
      book.reviews.push({ user: user.username, review });
    }
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Task 9: Delete review (Protected)
exports.deleteReview = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  if (book) {
    book.reviews = book.reviews.filter(r => r.user !== req.user.username);
    res.json({ message: 'Review deleted' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Task 10: Get all books – Using async callback function
const getAllBooksAsync = async () => {
    return new Promise((resolve) => {
      resolve(books);
    });
  };
  
  // Task 11: Search by ISBN – Using Promises
  exports.getBookByISBNPromise = (isbn) => {
    return new Promise((resolve, reject) => {
      const book = books.find(b => b.isbn === isbn);
      if (book) {
        resolve(book);
      } else {
        reject('Book not found');
      }
    });
  };
  
  // Task 12: Search by Author
  exports.getBooksByAuthorPromise = (author) => {
    return new Promise((resolve) => {
      const authorBooks = books.filter(b => b.author === author);
      resolve(authorBooks);
    });
  };
  
  // Task 13: Search by Title
  exports.getBooksByTitlePromise = (title) => {
    return new Promise((resolve) => {
      const titleBooks = books.filter(b => b.title === title);
      resolve(titleBooks);
    });
  };
  