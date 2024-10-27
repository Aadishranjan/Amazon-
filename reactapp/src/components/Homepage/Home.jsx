import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Nevbar from '../nevbar.jsx';
import Cards from './itemCards.jsx';

function Home() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
      const response = await Axios.get('http://localhost:3000/getProduct');
      setProduct(response.data.product);
    }

  useEffect(() => {
    getProduct();
  }, []);
  
  
  return (
    <>
    <Nevbar />
    <div className="homemain">
  {product.map((data) => (
    <Cards data={data} key={data._id} />
      ))}
    </div>
    </>
    )
}

export default Home;