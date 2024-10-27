import React, { useState, useEffect } from 'react';
import Nevbar from './nevbar.jsx';
import axios from 'axios';

function CardOrder() {
  const [cartItems, setCartItems] = useState([]); 
  const [hasItems, setHasItems] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get('http://localhost:3000/card', {
          headers: {
            'authorization': token,
          }
        });

        if (response.data.product && response.data.product.length > 0) {
          setCartItems(response.data.product);
          setHasItems(true);
        } else {
          setHasItems(false);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div>
      <Nevbar />
      <h1 id="cardh1">Your Cart</h1>

      {hasItems ? (
        <div className="CardItems">
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.img} alt={item.title} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.title}</h3> 
                  <p>{item.detail}</p>
                  <p>Price: ${item.price}</p> 
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="NotCard">
          <img id="NotCardImg" src="./defaultImage/cart-empty.png" alt="Empty Cart" />
        </div>
      )}
    </div>
  );
}

export default CardOrder;
