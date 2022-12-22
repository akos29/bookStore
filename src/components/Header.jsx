/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className="header">
      <div className="navbar-left">
        <h1 className="logo">
          Bookstore CMS
        </h1>
        <Navbar />
      </div>
      <a href="#" className="icon">
        <BsFillPersonFill />
      </a>
    </div>
  );
}
