import React, { useEffect, useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addProduct, decProduct } from "../../slices/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart.data);
  // console.log(products);
  const dispatch = useDispatch();

  const handleClick = (cart) => {
    dispatch(removeItem(cart));
  };
  const addProducts = (quantity) => {
    dispatch(addProduct(quantity));
  };
  const minusProduct = (decrease) => {
    dispatch(decProduct(decrease));
  };
  return (
    <div className="cart-product">
      {products.length > 0 ? (
        <>
          {products.map((curLem, i) => (
            <div className="product-cart" key={i}>
              <img src={curLem.image} alt="cart-product-img" />
              <h2>{curLem.title}</h2>
              <h4>Brand: {curLem.brand}</h4>
              <h4>Category:{curLem.category}</h4>
              <p>{curLem.description}</p>
              <p>Price :{curLem.price}</p>
              <p>quantity :{curLem.quantity}</p>
              <p>inStock :{curLem.stock}</p>
              <button onClick={() => handleClick(curLem.id)}>remove</button>
              <button onClick={() => addProducts(curLem.id)}>+</button>
              <button onClick={() => minusProduct(curLem.id)}>-</button>
            </div>
          ))}
        </>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
