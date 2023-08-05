import React from 'react';
import'./Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart,clearCart,Children}) => {
    let total=0;
    let shipping=0;
    let quantity=0;
  for (const product of cart) {
    total=total+product.price* product.quantity;
    shipping=shipping+product.shipping;
  }
  const tax=total*0.1;
 const totalPrice=total+shipping+tax;
  console.log(cart)
return (
        <div className='cart-main'>
              <h3>Order Cart</h3>
                <p>Select Item: {quantity}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping:$ {shipping}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <hr />
                <h3>Grand Total:{totalPrice.toFixed(2)}</h3>
                <button onClick={clearCart} className='clear-btn'><span>Clear cart</span> <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
              <div>
              {Children}
              </div>
        </div>
    );
};

export default Cart;