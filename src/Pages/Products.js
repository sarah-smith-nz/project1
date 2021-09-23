import ProductsListing from "../Components/ProductsListing";

import useFetch from "../Services/useFetchHook";
import {API} from '../Services/API'
import { Link } from 'react-router-dom'

export const Products = () => {
  const { error, isPending, data: products } = useFetch(API.API_URL+'product')

  return (
    <div >
      { error && <div>You need to log in to see our products 
        <Link to="/login"> Log in </Link> now or 
        <Link to ="register">Register</Link></div> }
      { isPending && <div>Loading...</div> }
      { products && <ProductsListing product={products} error={error} isPedning={isPending} /> }
    </div>
  );
}
 
export default Products;
