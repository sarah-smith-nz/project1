import React, {useState} from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {variables} from './Variables'
import {Cart} from './Cart'

export const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, error, isPending } = useFetch(variables.API_URL_ID + id);

  console.log({product})

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    console.log('clicked!')
    console.log(product)
    const exist = cartItems.find((x) => x.ProductId === product.ProductId);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.ProductId === product.ProductId ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.ProductId === product.ProductId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.ProductId !== product.ProductId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.ProductId ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  

  return (
    <div >
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { product && (
        <div>
          <h2>{ product[0].ProductName }</h2>
          <p>Description: { product[0].ProductDescription }</p>
          <div>${ product[0].ProductCost }</div>
          <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
           onClick={() => onAdd(product)}>Redeem</button>
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
          onAdd={onAdd}
          onRemove={onRemove}
        ></Cart>
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