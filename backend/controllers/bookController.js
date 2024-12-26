// const { query } = require('../models/db');

// const addBook = async (req, res) => {
//     const { isbn, title, author, year } = req.body;
//     try {
//         const result = await query(
//             'INSERT INTO books (isbn, title, author, year) VALUES ($1, $2, $3, $4) RETURNING *',
//             [isbn, title, author, year]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (error) {
//         res.status(500).json({ message: 'Error adding book', error });
//     }
// };

// const borrowBook = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const result = await query(
//             'UPDATE books SET is_borrowed = TRUE WHERE id = $1 AND is_borrowed = FALSE RETURNING *',
//             [id]
//         );
//         if (result.rowCount === 0) {
//             return res.status(400).json({ message: 'Book not available' });
//         }
//         res.json(result.rows[0]);
//     } catch (error) {
//         res.status(500).json({ message: 'Error borrowing book', error });
//     }
// };

// const returnBook = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const result = await query(
//             'UPDATE books SET is_borrowed = FALSE WHERE id = $1 AND is_borrowed = TRUE RETURNING *',
//             [id]
//         );
//         if (result.rowCount === 0) {
//             return res.status(400).json({ message: 'Book not borrowed' });
//         }
//         res.json(result.rows[0]);
//     } catch (error) {
//         res.status(500).json({ message: 'Error returning book', error });
//     }
// };

// const getAvailableBooks = async (req, res) => {
//     try {
//         const result = await query('SELECT * FROM books WHERE is_borrowed = FALSE');
//         res.json(result.rows);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching books', error });
//     }
// };

// module.exports = { addBook, borrowBook, returnBook, getAvailableBooks };
