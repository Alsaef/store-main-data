import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../Review Item/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
  const cartProduct = useLoaderData();
  const [cart, setCart] = useState(cartProduct)

  const heandelCart = (id) => {
    const remaning=cart.filter(product => product._id !==id)
    setCart(remaning)
    removeFromDb(id)
  }
   const clearCart=()=>{
    setCart([])
    deleteShoppingCart()
   }
  console.log(cartProduct)
  return (
    <div className='shop-main'>
      <div className="order-review">
        <h2>Order Page</h2>
        {
          cart.map(product => <ReviewItem
            key={product._id}
            product={product}
            heandelCart={heandelCart}
          ></ReviewItem>)
        }
      </div>
      <div className="card-container">
        <Cart cart={cart} clearCart={clearCart}>
          <div>
          Form Oder
          </div>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;