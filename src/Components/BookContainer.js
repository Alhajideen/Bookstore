import React from 'react';
import Book from './Book';
import InputBook from './InputBook';

function BookContainer() {
  const bookArr = [
    {
      id: 1,
      title: 'Things fall apart',
      author: 'Chinua Achebe',
    },
    {
      id: 2,
      title: 'The gods are wise',
      author: 'Andrew Abbas',
    },
    {
      id: 3,
      title: 'Gods Hands',
      author: 'Chamba Lumba',
    },
  ];
  return (
    <div>
      <section className="bookContainer">
        {bookArr.map((book) => {
          return (
            <>
              <div className="book-details">
                <h3>Empty</h3>
                <Book props={book} />
              </div>
              <div className="book-actions">
                <button type="button">Remove</button>
              </div>
            </>
          );
        })}
      </section>
      <div className="add book">
        <InputBook />
      </div>
    </div>
  );
}

export default BookContainer;
