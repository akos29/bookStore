import React from 'react';
import AddBook from './AddBook';
import BooksList from './BooksList';

export default function Books() {
  return (
    <div className="wrapper">
      <BooksList key={Math.random} />
      <hr />
      <AddBook />
    </div>
  );
}
