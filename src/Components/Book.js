import React from 'react';

function Book({ props }) {
  return (
    <div>
      <div className="book-container">
        <div className="book-info">
          <h3>Category</h3>
          <h1>Book Name</h1>
          <h3>Book Author</h3>
        </div>
      </div>
    </div>
  );
}

export default Book;
