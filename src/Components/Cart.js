import React, { useState, useEffect } from 'react';

import useFetch from "../Services/useFetchHook";
import {API} from '../Services/API'
import AuthService from "../Services/AuthService";



export const Cart = (props) => {
  //props coming through from ProductDetails Page
  const { cartItems } = props
   let [items, setItems] = useState(
   cartItems || []
  );
  console.log("cartItems:", cartItems)
  console.log("props:", props)


  useEffect(() => {localStorage.getItem('cart')})

   //sourcing user data
  const currentUser = (AuthService.getCurrentUser())
  const { error, isPending, data: user } = useFetch(API.API_URL+'user/' + currentUser.UserName)
 

  //cart calculating total amounts

  const itemsPrice = items? items.reduce((a, c) => a + c.qty * c.ProductCost, 0 ) : 0
  const accountBalance = user? user.UserBalance : []
  const remainingBalance = accountBalance - itemsPrice 
 
  
  function clearItems() {
    let cartCopy = [...items] || [] 
    localStorage.removeItem("cart")
    setItems(cartCopy)
  }
  
   function addItem(item){   
    if(accountBalance > 0){ 
    let cartCopy = [...items] || [] 
    let  ProductId  = item.ProductId;
    let existingItem = cartCopy.find(cartItem => cartItem.ProductId === ProductId);   
  
    if (existingItem) {
      console.log("Existing Item", items)
      setItems(
        cartCopy.map((x) =>
          x.ProductId === item.ProductId ? { ...existingItem, qty: existingItem.qty + 1 } : x
        ))
    } else { 
       cartCopy.push( {...item, qty: 1})
           console.log("Add Item - CartCopy", cartCopy)
           setItems([...cartCopy])
    };
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)
  } else {alert("You do not have tokens to make this purchase")}}


  function removeItem(item) {
    let cartCopy = [...items]
    let ProductId = item.ProductId;
    let existingItem = cartCopy.find(cartItem => cartItem.ProductId === ProductId);
    
    if (existingItem && existingItem.qty !== 0) {
      setItems(
        cartCopy.map((x) =>
          x.ProductId === item.ProductId ? { ...existingItem, qty: existingItem.qty - 1 } : x
        ))
    } 
    
    let cartString = JSON.stringify(cartCopy)
    localStorage.setItem('cart', cartString)
  }

  
 
  
 //Checkout
  function handleCheckout() {
    if(accountBalance > 0){
      const newUserBalance = remainingBalance
      return (
        alert( "Your new token balance is: $"+ newUserBalance 
        ) 
        )
      } else{
        alert("You do not have tokens to make this purchase")
      } 
  }


  return (
    <div className="modal fade" id="cartModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">Modal</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    <div className="flex-row bd-highlight mb-3">
     
     <div className="p-2 bd-highlight"></div>
    <div className="">
      <h2>Cart Items</h2>
      <div >
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      
    </div>
      <div>
        {items.length === 0 && <div>Cart is empty</div>}
        {items.map((item) => (
          <div key={item.ProductId} className="row">
            <div className="col-2">{item.ProductName}</div>
            <div className="col-2">
            <button onClick={() => removeItem(item)} className="">
                -
              </button>{' '}
              <button onClick={() => addItem(item)} className="">
                +
              </button>

            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.ProductCost}
            </div>
            
          </div>
        ))}

        {items.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Opening Balance</div>
              <div className="col-1 text-right">${accountBalance}</div>
            </div>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice}</div>
            </div>
            
            

            <div className="row">
              <div className="col-2">
                <strong>Remaining Balance</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${remainingBalance.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div><button onClick={() => clearItems()} className="">
                Clear Cart
              </button></div>
            <div className="row">
              <button onClick={() => handleCheckout()}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    </div>
    
    </div>       
       
        
   </div>

</div>
</div> 

  );
}

export default Cart;
