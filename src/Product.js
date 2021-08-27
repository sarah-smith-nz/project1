import ProductListing from "./ProductListing";
import useFetch from "./useFetch";
import {variables} from './Variables'

export const Product = () => {
  const { error, isPending, data: products } = useFetch(variables.API_URL+'product')

  return (
    <div >
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { products && <ProductListing product={products} /> }
    </div>
  );
}
 
export default Product;
