import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="category-wrapper">
      <h1>Categories</h1>
      <h2>{status }</h2>
      <button type="button" onClick={handleClick}>Check status</button>
    </div>
  );
}
