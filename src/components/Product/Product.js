import React from 'react';
import  './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
   const {name,seller,price,img,ratings}=props.product;
    const {product,handelClick}=props;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <h3>{name}</h3>
           <p>Price: {price}</p>
           <p>Seller: {seller}</p>
           <p>Rating: {ratings}</p>
           </div>
           <button onClick={()=>handelClick(product)} className='btn-cart'><p>Add To Card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p> </button>
        </div>
    );
};

export default Product;