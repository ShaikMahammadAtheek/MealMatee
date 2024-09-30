


import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';
// import logo from '../image/Screenshot 2024-09-17 152201.png';
import cart from '../image/card.jpeg';
import logo22 from '../image/MealMa-removebg-preview.png'

const Navbar = () => {
  return (
    <div className='card'>
      <div>
      <Link to="/">
        <img src={logo22} className='logo' alt="Website_Logo" />
      </Link>
      </div>

      <div className='menu'>
        {/* Hidden checkbox */}
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label className="hamburger" htmlFor="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className='links'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/cart"><img src={cart} alt="Add item to Cart" /></Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;





