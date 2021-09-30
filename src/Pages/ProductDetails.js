import React, {useState} from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Services/useFetchHook";
import {API} from '../Services/API'
import {Cart} from '../Components/Cart'
// import AuthService from "../Services/AuthService";
import ProductsGrid from "../Components/ProductsGrid"
import { Link } from 'react-router-dom';


export const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isPending } = useFetch(API.API_URL_PRODUCT + id);
  const {data:productgrid} = useFetch(API.API_URL_PRODUCT)

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart")
    const initialValue = JSON.parse(saved)
    return initialValue || []}
  )
console.log("ProductDetails:", cartItems)
 
 const addItem=(item)=> {
  let cartCopy = [...cartItems]  
  let  ProductId  = item.ProductId;
  let existingItem = cartCopy.find(cartItem => cartItem.ProductId === ProductId);   

  if (existingItem) {
    console.log("PDExisting Item", cartItems)
    setCartItems(
      cartCopy.map((x) =>
        x.ProductId === item.ProductId ? { ...existingItem, qty: existingItem.qty + 1 } : x
      ))
  } else { 
     cartCopy.push( {...item, qty: 1})
         console.log("PDAdd Item - CartCopy", cartCopy)
         setCartItems([...cartCopy])
  }
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart)

  }
 
  
  return (
    <div >
      { isPending && <div>Loading...</div> }
      { error && <div>You need to log in to see our products 
        <Link to="/login"> Log in </Link> now or 
        <Link to ="register">Register</Link></div> }
      { product && (
        <div>
          <div className="card ">
            <div className="card-body">
              <h2 className="card-title">{ product.ProductName }</h2>
              <p className="card-text"> { product.ProductDescription }</p>
              <div>${ product.ProductCost }</div>
              <button
                type="button"
                className="btn btn-primary m-2 float-end"
                data-bs-toggle="modal"
                data-bs-target="#cartModal"
                onClick={()=>{addItem(product)}}>Redeem
              </button>
            </div>
          </div>
          <div>
            { productgrid && <ProductsGrid products = {productgrid} />}
          </div>
        

      <div>
     <Cart 
        cartItems={cartItems}
         addItem={addItem}>

      </Cart>
    </div> 
    
    </div>
    )} 
    </div>
  );
}
 
export default ProductDetails;