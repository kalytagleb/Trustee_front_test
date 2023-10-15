import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
          <div className="navbar__links">
            <Link to="/about">About Us</Link>
            <Link to="/meetings">Meetings</Link>
            <Link to="/cinema">Cinema Schedule</Link>
            <Link to="/result">Suitable Time</Link>
          </div>
        </div>
    );
};

export default Navbar;