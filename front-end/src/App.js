//-------------------IMPORT NECESSARY MODULES------------------
import React, { useState, useEffect } from "react";
import axios from "axios";

//---------------------APP COMPONENT--------------------------
const App = () => {
  const [books, setBooks] = useState([]); // State to store the list of books
  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" }); // State for new book inputs

  // Fetch books from the backend
  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/show");
      setBooks(response.data.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Add a new book
  const addBook = async () => {
    try {
      await axios.post("http://localhost:5000/add", newBook);
      fetchBooks(); // Refresh the list of books
      setNewBook({ title: "", author: "", year: "" });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Borrow a book
  const borrowBook = async (id) => {
    try {
      await axios.put(`http://localhost:5000/borrow/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error borrowing book:", error);
    }
  };

  // Return a book
  const returnBook = async (id) => {
    try {
      await axios.put(`http://localhost:5000/return/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Kata : Library Management System</h1>
      <div>
        <h2>Add a New Book</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={newBook.year}
          onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {/* Book List Section */}
      <div>
        <h2>Book List</h2>
        {books.length === 0 ? (
          <p>No books available.</p>
        ) : (
          <table border="1" cellPadding="10" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.isbn}>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publish_year}</td>
                  <td>{book.is_borrowed ? "Borrowed" : "Available"}</td>
                  <td>
                    {book.is_borrowed ? (
                      <button onClick={() => returnBook(book.isbn)}>Return</button>
                    ) : (
                      <button onClick={() => borrowBook(book.isbn)}>Borrow</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default App;
