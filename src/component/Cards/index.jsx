import React from 'react'
import './index.css';
import image from "../../assets/photo-1542291026-7eec264c27ff.jfif"

const Cards = ({data}) => {

    // console.log("product",data)
  return (
    <>
    {
        data.map((curLem)=>{
            return(
                <>
                <div className='card' key={curLem.id}>
        <img src={curLem.thumbnail} alt='product-img'/>
        <h2>{curLem.title}</h2>
        <h4>Brand: {curLem.brand}</h4>
        <h4>Category:{curLem.category}</h4>
        <p>{curLem.description}</p>
        <p>Price :{curLem.price}</p>
        <button>add to cart</button>
    </div>
                </>
            )
        })
    }
    </>
  )
}

export default Cards
// brand
// : 
// "Apple"
// category
// : 
// "smartphones"
// description
// : 
// "An apple mobile which is nothing like apple"
// discountPercentage
// : 
// 12.96
// id
// : 
// 1
// images
// : 
// (5) ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg']
// price
// : 
// 549
// rating
// : 
// 4.69
// stock
// : 
// 94
// thumbnail
// : 
// "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// title
// : 
// "iPhone 9"