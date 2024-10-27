import React from 'react';
import Nevbar from './nevbar.jsx'

function Wishlist() {
  return (
    <div>
    <Nevbar />
    <h1 id="wishlisth1">Wishlist</h1>
    <div className="Notwishlist">
    <h1>Not any product in your wishlist</h1>
    </div>
    <div></div>
    </div>
  );
}

export default Wishlist;