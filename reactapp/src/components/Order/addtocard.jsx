import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import axios from 'axios';  

function AddCard({ id }) {

  const handleAddCard = async () => {
      const token = localStorage.getItem('token');
      
      const response = await axios.post('http://localhost:3000/card/add', {
        productId: id,
      }, {
        headers: {
       'authorization': token,
        }
      });

      if (response.data === 'success') {
        alert("Item added to card");
      } else {
        alert(response.data); 
      }
  };

  return (
    <>
      <button onClick={handleAddCard} id="addnow">
        <MdOutlineShoppingCart /> Add
      </button>
    </>
  );
}

export default AddCard;
