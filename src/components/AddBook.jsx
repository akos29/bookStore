import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBook } from '../redux/books/books';
import style from './AddBook.module.css';

export default function AddBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const changeCategory = (e) => {
    setCategory(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(
        createBook({
          item_id: books.length + 1,
          title,
          author,
          category,
        }),
      );
    }
  };
  return (
    <div className={style.addContainer}>
      <h2 className="disabled">Add New Book</h2>
      <form onSubmit={formSubmit}>
        <input type="text" id="title" placeholder="Insert title ..." value={title} onChange={changeTitle} />
        <input type="text" id="author" placeholder="Author" value={author} onChange={changeAuthor} />
        <input type="text" id="category" placeholder="Category" value={category} onChange={changeCategory} />
        {/* <select name="category">
          <option disabled defaultValue="Cat" className={style.myDisable}>Category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select> */}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
