import React from 'react';

function Book({ title, author }) {
  return (
    <div>
      <div className="book-container">
        <div className="book-info">
          <h1>{title}</h1>
          <h3>{author}</h3>
        </div>
      </div>
    </div>
  );
}

export default Book;
