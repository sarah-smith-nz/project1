import React, {useState} from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import {variables} from './Variables'

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
      alert('More added to cart')
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      alert('Added to cart')
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
          <button onClick={() => onAdd(product)}>Redeem</button>
        </div>
      )}
    </div>
  );
}
 
export default ProductDetails;