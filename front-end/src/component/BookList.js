import React from "react";
import "./booklist.css";
function BookList({ books, removeBook }) {
  return (
    <div className="book_list">
      <h2>Books List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <span>
                {book.title} by {book.author}
              </span>
              <button onClick={() => removeBook(book.title)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
