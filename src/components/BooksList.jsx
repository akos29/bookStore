import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DisplayBook from './DisplayBook';
import { fetchBooks } from './redux/books/books';

export default function BooksList() {
  const dispatch = useDispatch();
  dispatch(fetchBooks());
  const books = useSelector((state) => state.books);
  // console.log(books);
  return (
    <div>
      {
        books.map((book) => (
          <div key={book.id} className="container">
            <DisplayBook book={book} />
          </div>
        ))
    }
    </div>
  );
}
