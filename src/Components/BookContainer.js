import React from 'react';
import Book from './Book';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function BookContainer() {
  return (
    <div>
      <section className="bookContainer">
        <div className="book-details">
          <h3>Book Category</h3>
          <Book title={'Book Title'} author={'Book Author'} />
        </div>
        <div className="book-actions">
          <button>Remove</button>
        </div>
      </section>
    </div>
  );
}

export default BookContainer;
