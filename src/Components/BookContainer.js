import React from 'react';
import Book from './Book';
import InputBook from './InputBook';

function BookContainer() {
  return (
    <div>
      <section className="bookContainer">
        <div className="book-details">
          <h3>Empty</h3>
          <Book title={'Empty'} author={'Empty'} />
        </div>
        <div className="book-actions">
          <button>Remove</button>
        </div>
      </section>
      <div className="add book">
        <InputBook />
      </div>
    </div>
  );
}

export default BookContainer;
