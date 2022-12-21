/* eslint-disable */
import React from 'react';
import style from './DisplayBook.module.css';

const DisplayBook = ({book}) => { 
return (
  <div className={style.book}>  
   

      <div className={style.aboutBook}>
        <p>{book.category}</p>
        <h2>{book.title} </h2>
        <a>{book.author}</a>
        <div className={style.bookAction}>
          <a href="#">Comments</a> |
          <a href="#">Remove</a>|
          <a href="#">Edit</a>
        </div>
      </div>

      <div className={style.progress}>
        <progress value={book.progress} max="100"></progress>
        <div className={style.progressDetail}>
          <h4> {book.progress}%</h4>
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

const mapStateToProps = (state) => {
  // console.log(state);
  return {posts: state.books}
}

// export default connect(mapStateToProps,{ fetchPosts })(DisplayBook);
export default DisplayBook;
