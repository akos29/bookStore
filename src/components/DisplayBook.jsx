/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from './DisplayBook.module.css';
import { removeBook } from '../redux/books/books';

const DisplayBook = ({book,progress}) => { 
  const dispatch = useDispatch();
  const delBook = (id) =>{
    dispatch(removeBook(Number(id)))
  }

return (
  <div className={style.book}>  
    <div className={style.aboutBook}>
      <p className="disabled">{book.category}</p>
      <h2>{book.title} </h2>
      <a>{book.author}</a>
      <div className={style.bookAction}>
        <a href="#">Comments</a> |
        <button type='button' onClick={() => delBook(book.item_id)}>Remove</button>|
        <a href="#">Edit</a>
      </div>
    </div>

    <div className={style.progress}>
      <progress value={progress} max="100"></progress>
      <div className={style.progressDetail}>
        <h4> {progress}%</h4>
        <span>Completed</span>
      </div>
    </div>

    <div className={style.currentChapter}>
      <p>Current Chapter</p>
      <h4>{book.currentChapter}</h4>
      <button type="button">Update Progress</button>
    </div>
  </div>
  )

};

export default DisplayBook;
