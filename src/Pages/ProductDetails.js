import React, {useState} from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Services/useFetchHook";
import {API} from '../Services/API'
import {Cart} from '../Components/Cart'
import AuthService from "../Services/AuthService";
import ProductsGrid from "../Components/ProductsGrid"
import { Link } from 'react-router-dom';


export const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isPending } = useFetch(API.API_URL_PRODUCT + id);
  const {data:productgrid} = useFetch(API.API_URL_PRODUCT)
  //source current user
  // useEffect(() => {
  //   const currentUser = AuthService.getCurrentUser()
  //   return currentUser}
  //   )

   const currentUser = AuthService.getCurrentUser()
   const { data: user } = useFetch(API.API_URL+'user/' + currentUser.UserName)
   const accountBalance = user? user.UserBalance : 0 

    //set cart items
  let [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  


  const addItem = (item) => {   
    if(accountBalance > 0){ 
    let cartCopy = [...cartItems] || [] 
    let  ProductId  = item.ProductId;
    let existingItem = cartCopy.find(cartItem => cartItem.ProductId === ProductId);

   
  
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
  } else {alert("You do not have tokens to make this purchase")}}

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
 
    localStorage.removeItem("cart")

  }



  return (
    <div >
      { isPending && <div>Loading...</div> }
      { error && <div>You need to log in to see our products 
        <Link to="/login"> Log in </Link> now or 
        <Link to ="register">Register</Link></div> }
      { product && (
        <div>
          <div className="card bg-light">
            <div className="card-body">
              <h2 className="card-title">{ product.ProductName }</h2>
              <p className="card-text"> { product.ProductDescription }</p>
              <div>${ product.ProductCost }</div>
              <button
                type="button"
                className="btn btn-primary m-2 float-end"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => addItem(product)}>Redeem
              </button>
            </div>
          </div>
          <div>
            { productgrid && <ProductsGrid products = {productgrid} />}
          </div>
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