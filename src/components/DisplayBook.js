/* eslint-disable */
import React from 'react';
import style from './DisplayBook.module.css';

const DisplayBook = (props) => (
  <div className={style.book}>
    <div className={style.aboutBook}>
      <p>{props.book.category}</p>
      <h2>{props.book.title}</h2>
      <a>{props.book.author}</a>
      <div className={style.bookAction}>
        <a href="#">Comments</a> |
        <a href="#">Remove</a>|
        <a href="#">Edit</a>
      </div>
    </div>

    <div className={style.progress}>
      <progress value={props.book.progress} max="100"></progress>
      <div className={style.progressDetail}>
        <h4> {props.book.progress}%</h4>
        <span>Completed</span>
      </div>
    </div>

    <div className={style.currentChapter}>
      <p>Current Chapter</p>
      <h4>{props.book.currentChapter}</h4>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

export default DisplayBook;
