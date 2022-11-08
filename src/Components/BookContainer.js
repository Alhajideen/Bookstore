import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

function BookContainer() {
  const bookArr = useSelector((state) => state.book);
  return (
    <div>
      <section className="bookContainer">
        {bookArr.map((book) => (
          <div key={book.id}>
            <div className="book-details">
              <h3>Empty</h3>
              <Book props={book} />
            </div>
            <div className="book-actions">
              <button type="button">Remove</button>
            </div>
          </div>
        ))}
      </section>
      <div className="add book">
        <InputBook />
      </div>
    </div>
  );
}

export default BookContainer;
