import React from 'react';
import { useEffect, useState } from "react";
import Cards from "../Cards";


const Home = () => {
    const [data, setData] = useState([]);

  const url = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        const products = await json.products;
        setData(products);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={{textAlign:'center'}}>
        <h1>Wellcome to e-commerce</h1>
      <h1>Redux-toolkit store</h1>
      <div className="products-data">
        <Cards data={data} />
      </div>
    </div>
  )
}

export default Home
