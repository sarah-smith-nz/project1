import React, { useState, useEffect } from 'react';

import useFetch from "../Services/useFetch";
import {variables} from '../Services/Variables'
import AuthService from "../Services/auth-service";


export const Cart = (props) => {
  const [currentUser, setCurrentUser] = useState([])
  console.log("currentUser:", currentUser)

  useEffect(()=>{
      setCurrentUser(AuthService.getCurrentUser())

    },[])


    const { error, isPending, data: user } = useFetch(variables.API_URL+'user/' + currentUser.UserName)
    


  const { cartItems, addItem, removeItem, clearItems} = props;
 

  const itemsPrice = cartItems? cartItems.reduce((a, c) => a + c.qty * c.ProductCost, 0 ) : 0
  const accountBalance = user? user.UserBalance : []
  const remainingBalance = accountBalance - itemsPrice 
  

  function handleCheckout() {
if(accountBalance > 0){
  const newUserBalance = remainingBalance

  return (
    alert( "Your new token balance is: $"+ newUserBalance 
    ) 

  )
} else{
  alert("You do not have tokens to make this purchase")
} }

  return (
    
    <div className="">
      <h2>Cart Items</h2>
      <div >
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      
    </div>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
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

        {cartItems.length !== 0 && (
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
  );
}

export default Cart;
