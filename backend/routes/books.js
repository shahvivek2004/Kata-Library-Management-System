const express = require('express');
const { addBook, borrowBook, returnBook, getAvailableBooks } = require('../controllers/bookController');
const router = express.Router();

router.post('/', addBook);
router.put('/:id/borrow', borrowBook);
router.put('/:id/return', returnBook);
router.get('/', getAvailableBooks);

module.exports = router;
