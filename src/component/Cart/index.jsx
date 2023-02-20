import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../slices/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart.data);
  console.log("products", products);
  const dispatch = useDispatch();

  const handleClick = (cart) => {
    dispatch(removeItem(cart));
  };
  return (
    <div className="cart-product">
      {products.length === 0 && <h1>Your Cart is Empty</h1>}
      {products.map((curLem, i) => (
        <div className="product-cart" key={i}>
          <img src={curLem.image} alt="cart-product-img" />
          <h2>{curLem.title}</h2>
          <h4>Brand: {curLem.brand}</h4>
          <h4>Category:{curLem.category}</h4>
          <p>{curLem.description}</p>
          <p>Price :{curLem.price}</p>
          <p>quantity :{curLem.quantity}</p>
          <button onClick={() => handleClick(curLem.id)}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
