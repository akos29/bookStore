import React from 'react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <div className="header">
      <h1 className="logo">
        Fanos
        <span>Bookstore</span>
      </h1>
      <Navbar />
    </div>
  );
}
