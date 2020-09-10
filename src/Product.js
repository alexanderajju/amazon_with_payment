import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, img, price, rating, id }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  const cost = price.toLocaleString(undefined, { maximumFractionDigits: 2 }); // "1,234.57"

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{cost}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i} >⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
