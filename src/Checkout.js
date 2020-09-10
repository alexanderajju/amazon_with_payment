import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return user ? (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jg"
          alt=""
          className="checkout__add"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <FlipMove typeName="ul">
            {basket.map((item) => (
              <div key={item.id}>
                <CheckoutProduct
                {...item}
                  // title={item.title}
                  // id={item.id}
                  // img={item.img}
                  // price={item.price}
                  // rating={item.rating}
                />
              </div>
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  ) : (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jg"
          alt=""
          className="checkout__add"
        />
        <div>
          <h2 className="checkout__title">Please login</h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
