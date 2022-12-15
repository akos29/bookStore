import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState('Home');
  const handleChange = (e) => {
    setActive(e.target.innerHTML);
  };

  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" onClick={handleChange} className={active === 'Home' ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/categories" onClick={handleChange} className={active === 'Categories' ? 'active' : ''}>Categories</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
