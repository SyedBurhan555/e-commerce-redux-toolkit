import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../slices/productSlice";
import { Status } from "../../slices/productSlice";
import { addtoCart } from "../../slices/CartSlice";
import "./index.css";

const Cards = () => {
  const { products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (status === Status.loading) {
    return <h3>loading...</h3>;
  }
  if (status === Status.error) {
    return <h3>Something went Wrong</h3>;
  }
  const handleClick = (product) => {
    const item = {
      quantity: 1,
      id: product.id,
      title: product.title,
      price: product.price,
      brand: product.brand,
      description: product.description,
      image: product.thumbnail,
      category: product.category,
      stock: product.stock,
    };
    // localStorage.setItem(`products`, JSON.stringify(item));
    dispatch(addtoCart(item));
  };

  return (
    <>
      {products.map((curLem, index) => {
        const {
          thumbnail,
          title,
          brand,
          price,
          description,
          id,
          category,
          stock,
        } = curLem;
        return (
          <div className="card" key={id + index}>
            <img src={thumbnail} alt="product-img" />
            <h2>{title}</h2>
            <h4>Brand: {brand}</h4>
            <h4>Category:{category}</h4>
            <p>{description}</p>
            <p>Price :{price}</p>
            <p>inStock: {stock}</p>
            <button onClick={() => handleClick(curLem)}>add to cart</button>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
