import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';
const Shope = () => {
    const [Products,setProducts]=useState([]);
    const {tatalProducts}= useLoaderData()
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages=Math.ceil(tatalProducts/itemsPerPage)
    console.log(tatalProducts)
   const pageNumbers=[...Array(totalPages).keys()];
    const options=[5,10,20]

    // set dropdown
    function handleSelectChange(event) {
      setItemsPerPage(parseInt(event.target.value));
      setCurrentPage(0);
  }

      /**
     * Done: 1. Determine the total number of items: 
     * TODO: 2. Decide on the number of items per page: 
     * DONE: 3. Calculate the total number of pages: 
     * DONE: 4. Determine the current page:
     * 
    */

    const [cart,saveCard]= useState([])
     
   /*  useEffect(()=>{
        fetch("http://localhost:4000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]) */

    useEffect(() => {
      async function fetchData() {
          const response = await fetch(`http://localhost:4000/products?page=${currentPage}&limit=${itemsPerPage}`);

          const data = await response.json();
          setProducts(data);
      }
      fetchData();
  }, [currentPage, itemsPerPage]);

    useEffect(()=>{
      const storedCart=getShoppingCart()
      const saveCart=[]
    for(const id in storedCart){
      const addProduct=Products.find(product=>product._id === id)
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
      const exist=cart.find(selected => selected._id === SelectNewProduct._id)
      if(!exist){
        SelectNewProduct.quantity=1;
        NewCart=[...cart,SelectNewProduct]
      }
      else{
        const rest=cart.filter(elseproduct => elseproduct._id !== SelectNewProduct._id)
        exist.quantity=exist.quantity + 1;
        NewCart=[...rest,exist];
      }
      // const NewCard=[...card,product]
      saveCard(NewCart)
      addToDb(SelectNewProduct._id)
    }
    const clearCart=()=>{
      saveCard([])
     deleteShoppingCart()
     }
    return (
        <div>
          <div className='shop-main'>
           <div className="procducts-container">
          {
            Products.map(product =>console.log(product))
          }
          {
            Products.map(product =><Product key={product._id} product={product}
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
        {/* pagination */}
        <div className="pagination">
          <p>current page {currentPage}</p>
      {
        pageNumbers.map( number => <button  className={currentPage === number ? 'selected':"button"} onClick={()=>setCurrentPage(number)} key={number}>{number} </button>)
      }
       <select value={itemsPerPage} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
        </div>
        </div>
    );
};

export default Shope;