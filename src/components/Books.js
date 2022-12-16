import React from 'react';
import AddBook from './AddBook';
import BooksList from './BooksList';

export default function Books() {
  return (
    <div>
      <BooksList />
      <hr />
      <AddBook />
    </div>
  );
}
