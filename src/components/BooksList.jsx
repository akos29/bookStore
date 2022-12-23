import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DisplayBook from './DisplayBook';
import { fetchBooks } from '../redux/books/books';

export default function BooksList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.books);
  return (
    <div>
      {
        books.map((book) => (
          <div key={book.item_id} className="container">
            <DisplayBook book={book} progress={Math.floor(Math.random() * 100)} />
          </div>
        ))
    }
    </div>
  );
}
