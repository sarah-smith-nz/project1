import React, {useState} from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {variables} from './Variables'
import {Cart} from './Cart'



export const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isPending } = useFetch(variables.API_URL_ID + id);
  console.log({product})

  let [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  


  const addItem = (item) => {    
    let cartCopy = [...cartItems] || [] 
    let  ProductId  = item.ProductId;
    let existingItem = cartCopy.find(cartItem => cartItem.ProductId === ProductId);
   // console.log("Add Item", cartItems, "Item", item,  "ProductId", ProductId , "Existing Item", existingItem)

    if (existingItem) {
      console.log("Existing Item", cartItems)

      setCartItems(
        cartCopy.map((x) =>
          x.ProductId === item.ProductId ? { ...existingItem, qty: existingItem.qty + 1 } : x
        ))
    } else { 
       cartCopy.push( {...item, qty: 1})
           console.log("Add Item - CartCopy", cartCopy)

      setCartItems([...cartCopy])
    };


    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)
  }

  const removeItem = (item) => {
    let cartCopy = [...cartItems]
    let ProductId = item.ProductId;
    let existingItem = cartCopy.find(cartItem => cartItem.ProductId === ProductId);
    
    if (existingItem && existingItem.qty !== 0) {
      setCartItems(
        cartCopy.map((x) =>
          x.ProductId === item.ProductId ? { ...existingItem, qty: existingItem.qty - 1 } : x
        ))
    } 
    
    let cartString = JSON.stringify(cartCopy)
    localStorage.setItem('cart', cartString)
  }

  const clearItems = (item) => {
    let cartCopy = [...cartItems]
    
    
      setCartItems([]);  

    let cartString = JSON.stringify(cartCopy)
    localStorage.clear('cart', cartString);

  }



  return (
    <div >
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { product && (
        <div>
          <h2>{ product.ProductName }</h2>
          <p>Description: { product.ProductDescription }</p>
          <div>${ product.ProductCost }</div>
          <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
           onClick={() => addItem(product)}>Redeem</button>
        </div>
      )}

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">Modal</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    <div className="flex-row bd-highlight mb-3">
     
     <div className="p-2 bd-highlight">
     <Cart
          cartItems={cartItems}
          addItem={addItem}
          removeItem={removeItem}
          clearItems={clearItems}
        ></Cart>
      {console.log("Cart Sending:", cartItems)}
     </div>
    
    </div>       
       
        
   </div>

</div>
</div> 
</div>





    </div>
  );
}
 
export default ProductDetails;