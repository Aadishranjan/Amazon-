import React from 'react';
import Nevbar from './nevbar.jsx'

function order() {
  return (
    <div>
    <Nevbar />
    <h1 id="orderh1">Your Order</h1>
    <div className="NotOrder">
    <img id="NotOrderImg" src="./defaultImage/order-now.gif" />
    </div>
    <div></div>
    </div>
  );
}

export default order;