import React from 'react';

function Cards({ data }) {
  return (
    <div className="cards">
      <a href={`/product/${data._id}`} className="cardsA">
        <img src={data.img} alt={data.title} className="cardsImg" />
        <h6 className="cardsTitle">{data.title}</h6>
        <p className="cardsStar">{data.rating}</p>
        <div className="cardsPriceDiscount">
          <p className="cardsPrice">{data.price}</p>
          <s className="cardsOffPrice">{data.offPrice}</s>
        </div>
      </a>
    </div>
  );
}

export default Cards;
