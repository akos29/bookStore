import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DisplayBook from './DisplayBook';

export default function BooksList() {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      currentChapter: 'Chapter 17',
      progress: 64,
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
      currentChapter: 'Chapter 3: Lesson Learned',
      progress: 6,
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Action',
      currentChapter: 'Chapter 17',
      progress: 0,
    },
  ]);
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
