import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
const Shope = () => {
    const [Products,setProducts]=useState([]);

    const [cart,saveCard]= useState([])

    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
      const storedCart=getShoppingCart()
      const saveCart=[]
    for(const id in storedCart){
      const addProduct=Products.find(product=>product.id === id)
      if(addProduct){
        let quantity=storedCart[id];
          addProduct.quantity=quantity;
          saveCart.push(addProduct)
      }
    }
    saveCard(saveCart);
    },[Products])

    const handelClick=(SelectNewProduct)=>{
      console.log(SelectNewProduct)
      let NewCart=[]
      const exist=cart.find(selected => selected.id === SelectNewProduct.id)
      if(!exist){
        SelectNewProduct.quantity=1;
        NewCart=[...cart,SelectNewProduct]
      }
      else{
        const rest=cart.filter(elseproduct => elseproduct.id !== SelectNewProduct.id)
        exist.quantity=exist.quantity + 1;
        NewCart=[...rest,exist];
      }
      // const NewCard=[...card,product]
      saveCard(NewCart)
      addToDb(SelectNewProduct.id)
    }
    const clearCart=()=>{
      saveCard([])
     deleteShoppingCart()
     }
    return (
        <div className='shop-main'>
           <div className="procducts-container">
          {
            Products.map(product =>console.log(product))
          }
          {
            Products.map(product =><Product key={product.id} product={product}
            handelClick={handelClick}></Product>)
          }
           </div>
           <div className="card-container">
              <Cart cart={cart} clearCart={clearCart}>
                <div>
                  From Shop
                </div>
              </Cart>
           </div>
        </div>
    );
};

export default Shope;