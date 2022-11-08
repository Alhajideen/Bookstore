import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

function InputBook() {

  return (
    <div>
      <form className="input-book">
        <div className="book-title">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="book-author">
          <input
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="add-btn">
          <button type="button" onClick={handleAdd}>
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputBook;
