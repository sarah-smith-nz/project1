import ProductListing from "../Components/ProductListing";

import useFetch from "../Services/useFetch";
import {variables} from '../Services/Variables'
import { Link } from 'react-router-dom'

export const Product = () => {
  const { error, isPending, data: products } = useFetch(variables.API_URL+'product')

  return (
    <div >
      { error && <div>You need to log in to see our products 
        <Link to="/login"> Log in </Link> now or 
        <Link to ="register">Register</Link></div> }
      { isPending && <div>Loading...</div> }
      { products && <ProductListing product={products} /> }
    </div>
  );
}
 
export default Product;
