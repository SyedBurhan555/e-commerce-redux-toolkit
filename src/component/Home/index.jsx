import React from 'react';
import Cards from '../Cards';

const Home = () => {
  
  return (
    <div style={{textAlign:'center'}}>
        <h1>Wellcome to e-commerce</h1>
      <h1>Redux-toolkit store</h1>
      <div className="products-data">
        <Cards />
      </div>
    </div>
  )
}

export default Home
