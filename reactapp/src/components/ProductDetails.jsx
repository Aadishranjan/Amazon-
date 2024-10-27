import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Nevbar from './nevbar.jsx';
import Addcard from './Order/addtocard.jsx'

function ProductDetails({ userId }) {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await Axios.get(`http://localhost:3000/product/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch product');
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductDetailsContainer">
    <Nevbar />
    
    <div className="ProductDetails1" >
      <img id="ProductDetailsImg" src={product.img} alt={product.title} />
      <div className="ProductDetailsINFO">
      <h1>{product.title}</h1>
      <p id="ProductDetailsp1">{product.detail}</p>
      <p>{product.rating}  (32)</p>
      <div className="ProductDetailprice">
      <p id="ProductDetailsprice">Price: {product.price}</p>
      <s id="ProductDetailsoff">{product.offPrice}</s>
      </div>
      <div className="orderbtn">
      <button id="buynow">Buy Now</button>
      <Addcard id={id} />
      </div>
    </div>
    </div>
    </div>
  );
}

export default ProductDetails;
