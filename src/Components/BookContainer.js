import React from 'react';
import Book from './Book';
import InputBook from './InputBook';

function BookContainer() {
  const bookArr = {
    title: 'Things fall apart',
    author: 'Chinua Achebe',
  };
  return (
    <div>
      <section className="bookContainer">
        <div className="book-details">
          <h3>Empty</h3>
          <Book props={bookArr} />
        </div>
        <div className="book-actions">
          <button type="button">Remove</button>
        </div>
      </section>
      <div className="add book">
        <InputBook />
      </div>
    </div>
  );
}

export default BookContainer;
