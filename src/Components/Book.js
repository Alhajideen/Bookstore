import React from 'react';

const Book = ({ props }) => {
  return (
    <div>
      <div className="book-container">
        <div className="book-info">
          <h1 className="bookTitle">{props.title}</h1>
          <h3 className="bookAuthor">{props.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default Book;
