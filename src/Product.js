import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ title, img, price, rating, id }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  const notify = () =>
    toast(
      user ? (
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
                  <p key={i}>⭐</p>
                ))}
            </div>
          </div>
          <img src={img} alt="" />
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      ) : (
        <div className="product">
          You are not login
        </div>
      )
    );
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
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={img} alt="" />
      <button
        onClick={() => {
          addToBasket();
          notify();
        }}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
