import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { db } from "./firebase";
import Order from "./Order";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders.length);
  const value = orders.length;
  return user ? (
    value === 0 ? (
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jg"
            alt=""
            className="checkout__add"
          />
          <div>
            <h2 className="checkout__title">No Orders for you</h2>
          </div>
        </div>
      </div>
    ) : (
      <div className="orders">
        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    )
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

export default Orders;
