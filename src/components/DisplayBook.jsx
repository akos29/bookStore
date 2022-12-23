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
        <button href="#">Comments</button> |
        <button type='button' onClick={() => delBook(book.item_id)}>Remove</button>|
        <button href="#">Edit</button>
      </div>
    </div>

    <div className="book-progress">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask half">
              <div className="fill">
                <div className="inside-circle" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="percentage">50%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="book-update">
        <p className="current-chap">CURRENT CHAPTER</p>
        <p className="chap-num">Chapter 17</p>
        <button className="btn" type="button">UPDATE PROGRESS</button>
      </div>
    {/* <div className={style.currentChapter}>
      <p>Current Chapter</p>
      <h4>{book.currentChapter}</h4>
      <button type="button">Update Progress</button>
    </div> */}
  </div>
  )

};

export default DisplayBook;
