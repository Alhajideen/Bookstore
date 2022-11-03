import React from 'react';

function Book({ props }) {
  return (
    <div>
      <div className="book-container">
        <div className="book-info">
          <h1>{props.title}</h1>
          <h3>{props.author}</h3>
        </div>
      </div>
    </div>
  );
}

export default Book;
