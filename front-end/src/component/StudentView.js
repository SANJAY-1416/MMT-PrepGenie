import React from "react";

function StudentView({ books, requestBook }) {
  const handleRequest = (title) => {
    const studentName = prompt("Enter your name to request this book:");
    if (studentName) {
      requestBook(title, studentName);
    }
  };

  return (
    <div>
      <h2>Available Books</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, index) =>
            book.available ? (
              <li key={index}>
                {book.title} by {book.author}
                <button onClick={() => handleRequest(book.title)}>
                  Request
                </button>
              </li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
}

export default StudentView;
