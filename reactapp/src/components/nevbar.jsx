import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { HiOutlineShoppingBag } from 'react-icons/hi';

function Nevbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default is not logged in

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
    }
    else{
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="nevbar">
      <div className="naviconsearchbtn">
      <a href="/">
        <img className="navimg" src="./images/Amazonloco.png" alt="Logo" />
        </a>
        <input type="search" placeholder="search..." className="navsearch" />
        <button className="navbtn">
          <IoSearchOutline />
        </button>
      </div>
      <div className="navicon">
        <a href="/wishlist" id="navA">
          <CiHeart style={{ fontSize: 40 }} />
        </a>
        <a href="/card" id="navA">
          <MdOutlineShoppingCart style={{ fontSize: 40 }} />
        </a>
        <a href="/order" id="navA">
          <HiOutlineShoppingBag style={{ fontSize: 40 }} />
        </a>

        {/* Conditionally render default profile image or Sign In button */}
        {isLoggedIn ? (
          <a href="/profile" id="navA">
            <img src="./defaultImage/defaultProfileIcon.png" alt="Profile" className="ProfileIcon" />
          </a>
        ) : (
          <a href="/login" id="navA" className="navsigninBtn">
            Sign In
          </a>
        )}
      </div>
    </div>
  );
}

export default Nevbar;
