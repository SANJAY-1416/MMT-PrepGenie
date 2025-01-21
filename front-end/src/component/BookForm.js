import React, { useState } from "react";
import "./bookform.css";
function AddBookForm({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook({ title, author });
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div>
      <div className="BookForm">
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="title_input">
              <label>Title: </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="title_input">
              <label>Author: </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBookForm;
