import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product,heandelCart}) => {
    const {id,quantity,img,name,ratings,price}=product
    return (
        <div className='review-item'>
          <div className='main-power'>
          <img src={img} alt="" />
          <div className='text'>
         <p className='product-title'>{name}</p>
         <p className='price'>Price: <span>${price}</span></p>
         <p className='review'>Review: <span>{ratings}</span></p>
          </div>
          <button onClick={()=>heandelCart(id)} className='delet-btn'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
          </div>
        </div>
    );
};

export default ReviewItem;