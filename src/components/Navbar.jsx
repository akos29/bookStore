import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { activeStatus } from '../redux/navlink/navlink';

function Navbar() {
  const dispatch = useDispatch();
  const activeS = useSelector((state) => state.activeStatus);
  const [active, setActive] = useState('Home');
  const handleChange = (active) => {
    setActive(active);
  };

  useEffect(() => {
    dispatch(activeStatus(active));
  }, [active, dispatch]);

  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" onClick={() => handleChange('Home')} className={activeS === 'Home' ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/categories" onClick={() => handleChange('Categories')} className={activeS === 'Categories' ? 'active' : ''}>Categories</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
