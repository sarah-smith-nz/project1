import React from 'react';

import useFetch from "./useFetch";
// import {variables} from './Variables'


export const Cart = (props) => {
  const { data:user, error, isPending } = useFetch('https://localhost:44396/api/user/1');

  const { cartItems, onAdd, onRemove} = props;
  console.log(cartItems)
  
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c[0].ProductCost, 0 )
 
  
  const accountBalance = user? user[0].UserBalance : []
  const remainingBalance = accountBalance - itemsPrice 
  
  
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
          <div key={item[0].ProductId} className="row">
            <div className="col-2">{item[0].ProductName}</div>
            <div className="col-2">
            <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item[0].ProductCost}
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
            <div className="row">
              <button onClick={() => alert('Implement Checkout!')}>
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
